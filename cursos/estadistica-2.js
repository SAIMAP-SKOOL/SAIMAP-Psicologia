(function(window){
// SAIMAP Psicología · Estadística Aplicada a las Ciencias de la Conducta
// Contenido alineado con el temario SAIMAP «Estadística Aplicada a las Ciencias de la Conducta» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "estadistica-2",
  title: "Estadística Aplicada a las Ciencias de la Conducta",
  short: "Estadística II",
  area: "Metodología y psicometría",
  rutas: { grado: { curso: 2 }, pir: { bloque: "Metodología" } },
  temario: "Estadistica-Aplicada-a-las-Ciencias-de-la-Conducta_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Razonar con datos: del informe científico a la inferencia", from: 1, to: 4 },
    { n: 2, t: "La estadística después de la crisis de replicación", from: 5, to: 6 },
    { n: 3, t: "Antes de analizar: diagnóstico de supuestos y remedios", from: 7, to: 8 },
    { n: 4, t: "¿Difieren dos condiciones? La prueba t y sus alternativas", from: 9, to: 10 },
    { n: 5, t: "Comparar varias medias: el análisis de varianza", from: 11, to: 14 },
    { n: 6, t: "Predecir y explicar: correlación y regresión lineal", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Estadística II · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "Comunicar la investigación: artículos, estructura y estilo APA", cap: 1, pir: "baja", mods: [
  { t: "Tipos de trabajos científicos: empíricos, revisiones y metaanálisis",
    tip: "Los artículos empíricos aportan datos nuevos: cuantitativos (experimentos y estudios correlacionales), cualitativos o estudios de caso. Las revisiones resumen lo ya publicado, de forma narrativa o sistemática, con un protocolo que se informa según PRISMA 2020. El metaanálisis combina estadísticamente los tamaños del efecto de los estudios, no los datos individuales, y su punto débil es el sesgo de publicación.",
    v: [
      "Artículo empírico=Trabajo que presenta datos originales recogidos por sus autores",
      "Experimento=Diseño que manipula la VI y asigna al azar, lo que permite conclusiones causales",
      "Estudio correlacional=Describe asociaciones y tendencias sin manipular ninguna variable",
      "Revisión narrativa=Resumen de trabajos cuya selección depende del criterio de los autores",
      "Revisión sistemática=Revisión con protocolo explícito de búsqueda, selección y evaluación de calidad",
      "PRISMA 2020=Pautas actualizadas para informar una revisión sistemática (Page et al., 2021)",
      "Metasíntesis=Versión cualitativa del metaanálisis, que integra estudios cualitativos",
      "Sesgo de publicación=Tendencia a publicar sobre todo los resultados significativos"
    ],
    g: [
      "En un metaanálisis cuantitativo, la unidad de análisis es el ___.|estudio|participante|ítem",
      "Las pautas para informar una revisión sistemática son la declaración ___.|PRISMA|JARS-Quant|IMRyD",
      "En la revisión ___, la selección de estudios depende del criterio de los autores.|narrativa|sistemática|metaanalítica",
      "Los experimentos permiten conclusiones ___ porque manipulan una variable y asignan al azar.|causales|descriptivas|cualitativas",
      "Las simulaciones que comparan la t de Welch con otras pruebas se publican como artículos ___.|metodológicos|empíricos|de revisión"
    ],
    tf: [
      "Un metaanálisis cuantitativo reúne las puntuaciones individuales de todos los participantes de los estudios.|F|Combina los tamaños del efecto de cada estudio: la unidad de análisis es el estudio, no la persona.",
      "La revisión sistemática sigue un protocolo explícito y repetible, con criterios de inclusión y exclusión declarados.|V",
      "Las revisiones sistemáticas y los metaanálisis están a salvo del sesgo de publicación porque incluyen todo lo localizado.|F|Solo combinan lo que llega a publicarse, así que el sesgo de publicación es su punto débil habitual.",
      "Un estudio de encuesta sobre la frecuencia del diario de gratitud y el ánimo es un artículo empírico cuantitativo.|V"
    ],
    q: [
      "Un equipo localiza todos los ensayos publicados sobre el diario de gratitud y combina sus resultados para estimar el efecto medio y cuánto varía. ¿Qué tipo de trabajo es?|Un metaanálisis|Una revisión narrativa|Un experimento|Estimar el efecto medio y su variación combinando los tamaños del efecto de los estudios es lo propio del metaanálisis.",
      "¿Qué distingue una revisión sistemática de una narrativa?|El protocolo explícito y repetible|El número de estudios revisados|La inclusión de datos nuevos|Ninguna revisión recoge datos nuevos. La sistemática declara pregunta, búsqueda, criterios y evaluación de la calidad.",
      "¿Cuál es la pregunta típica de un metaanálisis?|Cuánto vale el efecto medio y cuánto varía|Si X causa un cambio en Y en una muestra|Qué se sabe del tema según los autores|La segunda es la pregunta de un experimento y la tercera, la de una revisión narrativa.",
      "¿Qué unidad de análisis tiene una revisión narrativa?|Estudios elegidos libremente|Estudios con un protocolo fijo|Tamaños del efecto combinados|Por eso su punto débil es la selección sesgada de trabajos. El protocolo fijo es de la revisión sistemática."
    ],
    inc: [
      "Sobre los tipos de trabajos científicos|El metaanálisis combina los datos individuales|La revisión sistemática se informa con PRISMA|El experimento asigna al azar a las condiciones|Es la trampa PIR típica: el metaanálisis cuantitativo combina los tamaños del efecto de los estudios, no los datos de cada persona."
    ],
    seq: [],
    cls: [
      "Tipo de trabajo|Empírico: experimento; estudio correlacional; estudio de caso|Revisión: narrativa; sistemática con PRISMA|Metaanálisis: combina tamaños del efecto; el estudio como unidad"
    ] },
  { t: "La estructura IMRyD, sección a sección",
    tip: "Los artículos empíricos cuantitativos siguen la estructura IMRyD (Introducción, Método, Resultados y Discusión), con título, resumen, palabras clave, referencias y apéndices alrededor. La introducción acaba en objetivos e hipótesis, el método permite repetir el estudio, los resultados se exponen sin interpretar y la discusión interpreta, reconoce limitaciones y plantea líneas futuras.",
    v: [
      "IMRyD=Estructura de Introducción, Método, Resultados y Discusión",
      "Resumen=Síntesis completa del artículo en un bloque de unas 150 a 250 palabras",
      "Palabras clave=Pocos términos que facilitan la indexación en bases de datos",
      "Introducción=Sección que presenta el problema y termina con objetivos e hipótesis",
      "Método=Participantes, instrumentos, procedimiento, diseño y plan de análisis",
      "Resultados=Sección con descriptivos, contrastes, efectos e IC, todavía sin interpretar",
      "Discusión=Sección que interpreta los hallazgos, reconoce limitaciones y plantea líneas futuras",
      "Apéndices=Material complementario etiquetado con letras, como los ítems de un cuestionario"
    ],
    g: [
      "El tamaño del efecto de un estudio se busca en la sección de ___.|resultados|método|discusión",
      "La introducción termina con los objetivos y las ___.|hipótesis|limitaciones|conclusiones",
      "En el título conviene evitar las ___, que dificultan encontrar el artículo.|siglas|variables|citas",
      "Los apéndices se etiquetan con ___ y se mencionan en el texto.|letras|números|asteriscos",
      "APA 7 pide interlineado doble y el margen derecho sin ___.|justificar|sangrar|numerar"
    ],
    tf: [
      "El resumen debe contener los resultados principales, no solo el tema del estudio.|V",
      "Escribir «el programa funciona» en la sección de resultados es la forma recomendada de exponer lo hallado.|F|Los resultados se exponen sin interpretar. Interpretar en resultados es un error frecuente en trabajos de estudiantes.",
      "La discusión es el lugar adecuado para presentar análisis nuevos que no aparecieron en resultados.|F|Añadir resultados nuevos en la discusión es un error frecuente: la discusión interpreta lo ya expuesto.",
      "El método debe describir el estudio con detalle suficiente para que otro equipo pueda repetirlo.|V"
    ],
    q: [
      "En un TFG sobre el uso del móvil en la cama y la calidad del sueño, ¿dónde debe advertirse que un estudio correlacional no permite afirmar que el móvil cause el mal sueño?|En la discusión|En los resultados|En el método|La discusión interpreta los resultados a la luz de las hipótesis y reconoce las limitaciones del diseño.",
      "¿En qué sección se indica cómo se reclutó a los 120 participantes y qué cuestionario de sueño se usó?|En el método|En la introducción|En los resultados|El método describe participantes, instrumentos, procedimiento, diseño y plan de análisis.",
      "Según la forma de reloj de arena de IMRyD, ¿qué secciones son las más específicas?|Método y resultados|Introducción y discusión|Resumen y palabras clave|La introducción va de lo general a la pregunta concreta y la discusión vuelve a lo general.",
      "Un resumen dice solo «Se estudia la relación entre pantallas y sueño». ¿Qué le falta según APA 7?|Los resultados principales|Las referencias que se citan|Los ítems del cuestionario|El resumen es una síntesis completa del artículo y debe incluir los resultados principales, no solo el tema."
    ],
    inc: [
      "Sobre la estructura IMRyD|Los resultados valoran si se cumplió la hipótesis|El método incluye el plan de análisis previsto|La discusión reconoce las limitaciones del estudio|Interpretar a la luz de las hipótesis corresponde a la discusión. Los resultados exponen lo encontrado sin interpretarlo."
    ],
    seq: [
      "Partes de un artículo empírico|Título>Resumen>Palabras clave>Introducción>Método>Resultados>Discusión>Referencias>Apéndices"
    ],
    cls: [] },
  { t: "Citas y referencias con el estilo APA 7",
    tip: "APA 7 (APA, 2020) usa el sistema autor-año. Con uno o dos autores se nombran todos en cada cita, y con tres o más se usa «et al.» desde la primera. La lista de referencias va en orden alfabético con sangría francesa, debe coincidir con las obras citadas y escribe el DOI como dirección web completa, sin la etiqueta «DOI:».",
    v: [
      "Cita autor-año=Sistema que indica en el texto el apellido y el año de la obra",
      "Cita parentética=Autor y año entre paréntesis al final de la idea",
      "Cita narrativa=El autor forma parte de la frase y el año va entre paréntesis",
      "Cita textual=Fragmento literal entre comillas que incluye la página",
      "Sangría francesa=Primera línea al margen y las siguientes desplazadas hacia dentro",
      "DOI=Identificador permanente que se escribe como dirección web completa",
      "Número de artículo=Código que sustituye a las páginas en muchas revistas en línea",
      "Gestor de referencias=Programa que genera citas en APA y hereda los errores de los datos de origen"
    ],
    g: [
      "Con tres o más autores, se escribe «et al.» desde la ___ cita.|primera|segunda|tercera",
      "En un texto en español, los dos autores de una obra se unen con ___.|«y»|«&»|«et al.»",
      "Varias obras dentro del mismo paréntesis se separan con ___.|punto y coma|dos puntos|guion largo",
      "Las entradas de la lista siguen el orden ___ del apellido del primer autor.|alfabético|cronológico|de aparición",
      "En el formato impreso, el nombre de la revista y el ___ van en cursiva.|volumen|número|año"
    ],
    tf: [
      "En APA 7, un artículo de Wasserstein y Lazar (2016) se cita siempre con los dos apellidos.|V",
      "Con tres autores, la primera cita los nombra a todos y las siguientes usan «et al.».|F|En APA 7, con tres o más autores se usa «et al.» desde la primera cita.",
      "En la lista de referencias, el DOI va precedido de la etiqueta «DOI:» y sin dirección web.|F|Se escribe como dirección web completa, https://doi.org/…, sin la etiqueta «DOI:».",
      "Una lista de referencias generada con un gestor de referencias debe revisarse a mano.|V"
    ],
    q: [
      "Una estudiante escribe «según la ASA, el valor p no mide el tamaño del efecto», sin año ni referencia. ¿Qué corrección es la adecuada?|Citar la declaración con autores, año y entrada|Añadir solo el año entre paréntesis tras «ASA»|Poner la frase entre comillas y la página|Lo correcto es citar a Wasserstein y Lazar (2016) en el texto y añadir su entrada en la lista final.",
      "¿Cómo se cita de forma narrativa a la Open Science Collaboration?|Open Science Collaboration (2015)|(Open Science Collaboration, 2015)|Open Science Collaboration et al. (2015)|En la cita narrativa el autor colectivo forma parte de la frase y solo el año va entre paréntesis.",
      "¿Dónde se colocan los apéndices respecto a la lista de referencias?|Detrás de la lista|Delante de la lista|Dentro de la lista|La lista de referencias cierra el cuerpo del trabajo, y los apéndices, si los hay, van detrás.",
      "En la referencia de un artículo de revista, ¿qué va inmediatamente después del volumen?|El número, entre paréntesis|El año, entre paréntesis|Las páginas, tras un punto|La estructura es «Revista, volumen(número), páginas», como en Science, 349(6251), aac4716."
    ],
    inc: [
      "Sobre las referencias en APA 7|Pueden incluir obras consultadas que no se citan|Cada obra citada debe aparecer en la lista|Las entradas se escriben con sangría francesa|Cada entrada de la lista debe estar citada en el texto, y cada obra citada debe figurar en la lista."
    ],
    seq: [],
    cls: [
      "Cita según el número de autores|Uno o dos: todos los apellidos en cada cita; (Cohen, 1988); (Wasserstein y Lazar, 2016)|Tres o más: et al. desde la primera cita; (Delacre et al., 2017)"
    ] },
  { t: "Cómo informar un resultado estadístico (JARS-Quant) y reproducibilidad",
    tip: "Informar no es escribir «fue significativo». JARS-Quant (Appelbaum et al., 2018) pide justificar el tamaño muestral, explicar los datos perdidos, dar descriptivos, el estadístico con sus gl, el p exacto y el tamaño del efecto con su IC, e indicar si el análisis era planificado o exploratorio. Un resultado es reproducible si con los mismos datos y procedimiento se obtienen las mismas cifras.",
    v: [
      "JARS-Quant=Estándares APA sobre qué debe informarse en un estudio cuantitativo",
      "Análisis exploratorio=Sirve para generar hipótesis y debe presentarse como tal",
      "Valor p exacto=Se da con dos o tres decimales, salvo que sea menor que 0,001",
      "Reproducibilidad computacional=Mismas cifras con los mismos datos y el mismo procedimiento de análisis",
      "Sintaxis=Registro escrito de los análisis que en SPSS genera el botón Pegar",
      "OSF=Repositorio donde compartir datos abiertos y materiales anonimizados",
      "Libro de códigos=Documento que explica cada variable de un conjunto de datos",
      "Principios FAIR=Datos localizables, accesibles, interoperables y reutilizables"
    ],
    g: [
      "SPSS muestra «,000» cuando p es muy pequeño, y se informa como p ___ 0,001.|menor que|igual a|mayor que",
      "Los símbolos estadísticos como t, F o p van en ___, pero las letras griegas no.|cursiva|negrita|mayúscula",
      "Los estadísticos de contraste se informan con ___ decimales.|dos|tres|cuatro",
      "En SPSS, el botón ___ escribe la sintaxis del análisis en lugar de ejecutarlo.|Pegar|Aceptar|Restablecer",
      "jamovi y JASP guardan en un mismo archivo los datos y los ___ realizados.|análisis|gráficos|informes"
    ],
    tf: [
      "En inglés, APA omite el cero inicial de p y de r porque no pueden superar 1.|V",
      "Un análisis exploratorio es ilegítimo y no debe aparecer en el informe.|F|No es ilegítimo, pero debe presentarse como exploratorio: sirve para generar hipótesis, no para confirmarlas.",
      "Que debe abandonarse la etiqueta «estadísticamente significativo» es hoy un consenso asentado.|F|Es un debate abierto: Wasserstein, Schirm y Lazar (2019) lo proponen y otros la ven útil junto al tamaño del efecto.",
      "Los errores al copiar cifras de la salida son una causa frecuente de resultados no reproducibles.|V"
    ],
    q: [
      "Un equipo compara una aplicación de respiración con una lista de espera y escribe «La aplicación redujo significativamente la ansiedad (p < 0,05)». ¿Qué falta, entre otras cosas?|El estadístico, sus gl y el tamaño del efecto|La hipótesis teórica y la literatura revisada|El programa estadístico usado y su versión|Faltan además los descriptivos, el p exacto y el IC. Un informe completo da todo lo necesario para valorar el análisis.",
      "En el formato APA t(58), ¿qué indica el número entre paréntesis?|Los grados de libertad|El total de participantes|El número de ítems|El estadístico se informa con sus grados de libertad, como t(58), F(2, 87) o χ²(1).",
      "¿Qué práctica favorece más la reproducibilidad computacional?|Guardar el script junto a los datos|Copiar a mano las cifras de la salida|Informar solo los análisis significativos|Con la sintaxis y los datos, otra persona puede obtener exactamente las mismas cifras.",
      "¿Cuál es la justificación ideal del tamaño muestral según JARS-Quant?|Un análisis de potencia a priori|La disponibilidad de participantes|La n habitual en estudios previos|JARS-Quant pide decir cuántas personas se analizaron y por qué, idealmente con un análisis de potencia a priori."
    ],
    inc: [
      "Sobre el formato de un resultado|Las letras griegas van en cursiva|Los símbolos t, F y p van en cursiva|Los valores p llevan dos o tres decimales|Es al revés: los símbolos estadísticos van en cursiva y las letras griegas no."
    ],
    seq: [],
    cls: [
      "Efecto sobre la reproducibilidad|La favorece: guardar la sintaxis; datos abiertos con libro de códigos; principios FAIR|La dificulta: copiar cifras a mano; exclusiones no documentadas; archivos perdidos"
    ] }
] },
{ n: 2, t: "El contraste de hipótesis, revisado", cap: 1, pir: "alta", mods: [
  { t: "De la muestra a la población: repaso del razonamiento inferencial",
    tip: "La inferencia pasa de un estadístico muestral (x̄, s) a un parámetro poblacional (μ, σ). La desviación típica de la distribución muestral es el error típico, que para la media es σ/√n. La hipótesis teórica se traduce en una estadística: H₀ fija un valor concreto y H₁ recoge lo que se acepta si H₀ se rechaza. El contraste tiene una lógica indirecta: no prueba H₁.",
    v: [
      "Estadístico=Valor calculado en la muestra, como x̄ o s",
      "Parámetro=Valor de la población que se quiere conocer, como μ o σ",
      "Distribución muestral=Variación de un estadístico entre muestras repetidas del mismo tamaño",
      "Error típico=Desviación típica de la distribución muestral de un estadístico",
      "Hipótesis estadística=Afirmación sobre un parámetro poblacional contrastable con datos",
      "Hipótesis nula=Fija un valor del parámetro, normalmente de ausencia de efecto",
      "Hipótesis alternativa=Lo que se acepta si se rechaza H₀",
      "Estadístico de contraste=Distancia entre lo observado y lo que predice H₀, en errores típicos"
    ],
    g: [
      "Para la media, el error típico es σ dividido por la raíz de ___.|n|n − 1|2n",
      "El teorema central del límite garantiza que la distribución muestral de la media se aproxima a la ___ al crecer n.|normal|uniforme|binomial",
      "En una t para una media con σ desconocida, los grados de libertad son ___.|n − 1|n|n − 2",
      "Se contrasta H₀ porque fija un ___ y permite saber cómo se distribuiría el estadístico.|valor concreto|efecto grande|sentido único",
      "Una muestra de voluntarios de una universidad no ___ a toda la población adulta.|representa|predice|contrasta"
    ],
    tf: [
      "Cuanto mayor es la muestra, menos varían las medias de una muestra a otra.|V",
      "El contraste de hipótesis prueba directamente que H₁ es cierta.|F|Tiene una lógica indirecta: comprueba si los datos serían raros si H₀ fuera cierta, sin probar H₁.",
      "En el ejemplo del sueño, con p de 0,053 y un IC de 6,19 a 7,01 horas, queda demostrado que los estudiantes duermen 7 horas.|F|No rechazar H₀ no la demuestra: el intervalo incluye valores de casi 50 minutos menos de sueño.",
      "Las conclusiones de un contraste valen para la población de la que se extrajo la muestra.|V"
    ],
    q: [
      "En 36 estudiantes en época de exámenes, la media de sueño es de 6,6 horas con s de 1,2. ¿Cuál es el error típico de la media?|0,20|0,03|1,20|1,2 / √36 es 1,2 / 6, es decir, 0,20. Dividir entre 36 en lugar de entre su raíz da 0,03.",
      "Con esos datos (media de 6,6, error típico de 0,20 y H₀: μ igual a 7), ¿cuánto vale t(35)?|−2,00|−0,40|−3,33|(6,6 − 7) / 0,20 da −2,00. El −0,40 es la diferencia sin dividir entre el error típico.",
      "¿Por qué no se contrasta directamente H₁: μ ≠ 7?|Porque no fija un valor concreto|Porque siempre es falsa en la población|Porque no admite contrastes bilaterales|Solo una hipótesis que fija un valor permite saber cómo se distribuiría el estadístico.",
      "¿Qué supuestos generales comparten los contrastes, además del modelo propio de cada prueba?|Muestreo aleatorio e independencia|Normalidad de las puntuaciones brutas|Varianzas iguales entre grupos|Todo contraste depende del muestreo aleatorio, la independencia y el modelo de cada prueba (Unidades 7 y 8)."
    ],
    inc: [
      "Sobre el razonamiento inferencial|El error típico aumenta al crecer la muestra|La media muestral es un estadístico y μ, un parámetro|H₀ suele expresar ausencia de efecto|El error típico de la media es σ/√n, así que disminuye al crecer n."
    ],
    seq: [],
    cls: [
      "Nivel de la inferencia|Muestra: x̄; s; estadístico|Población: μ; σ; parámetro"
    ] },
  { t: "Fisher, Neyman y Pearson, y el modelo híbrido",
    tip: "Fisher (1925) usa solo H₀ y lee p como medida continua de la evidencia, sin potencia ni decisión automática. Neyman y Pearson (1933) proponen una regla de decisión con H₀ y H₁ explícitas, α y β fijados antes y una región crítica, para controlar los errores a la larga. El NHST mezcla ambas lógicas, que sus autores veían incompatibles, y Gigerenzer lo llamó ritual.",
    v: [
      "Prueba de significación=Enfoque de Fisher en que p mide de forma continua la evidencia contra H₀",
      "Regla de decisión=Enfoque con α y β fijados antes para controlar los errores a la larga",
      "Región crítica=Zona del estadístico en la que se actúa como si H₁ fuera cierta",
      "NHST=Híbrido que compara p con 0,05 sin planificar la potencia",
      "Statistical methods=Obra de Fisher de 1925 para investigadores",
      "Neyman y Pearson (1933)=Exigieron dos hipótesis explícitas con un efecto concreto en H₁",
      "Ritual=Calificativo de Gigerenzer para el NHST aplicado de forma mecánica",
      "H₁ vaga=Alternativa del híbrido, «hay diferencia», sin un tamaño del efecto concreto"
    ],
    g: [
      "El híbrido compara p con α de 0,05 por ___, no por una justificación propia del estudio.|costumbre|teoría|potencia",
      "Para Fisher, el resultado de la prueba es un juicio ___ que debe confirmarse con nuevos experimentos.|provisional|definitivo|automático",
      "La pieza central de Neyman y Pearson que el híbrido ignora es la ___.|potencia|región crítica|hipótesis nula",
      "Gigerenzer calificó el procedimiento híbrido de ___.|ritual|paradoja|falacia",
      "Además de interpretar p como evidencia, Fisher es el autor del análisis de ___.|varianza|potencia|regresión"
    ],
    tf: [
      "En el enfoque de Fisher no hay hipótesis alternativa formal ni cálculo de potencia.|V",
      "Neyman y Pearson interpretaban el p exacto como la fuerza de la evidencia en un estudio concreto.|F|Eso es propio de Fisher. Para Neyman y Pearson solo importa si el estadístico cae en la región crítica.",
      "Fisher y Neyman veían compatibles sus propuestas, y los manuales las unieron siguiendo su criterio.|F|Las consideraban incompatibles y mantuvieron una larga polémica. La mezcla la hicieron los manuales.",
      "Un estudio puede planificarse al estilo de Neyman y Pearson e informar además el p exacto y el efecto con su intervalo.|V"
    ],
    q: [
      "Una investigadora fija α de 0,05 y β de 0,20 antes de recoger datos, calcula la n y decide según la región crítica. ¿Qué enfoque sigue?|Neyman y Pearson|Fisher|El híbrido NHST|Fijar α y β de antemano, calcular la muestra y decidir con una región crítica es la regla de decisión de Neyman y Pearson.",
      "Un artículo plantea «hay diferencia» como H₁, compara p con 0,05 sin calcular la potencia y concluye «significativo». ¿Qué procedimiento aplica?|El modelo híbrido|La prueba de Fisher|La regla de Neyman-Pearson|H₁ vaga, α de 0,05 por costumbre, potencia ignorada y resultado dicotómico son los rasgos del NHST.",
      "¿Qué significa que la decisión de Neyman y Pearson sea una regla de conducta?|Que se actúa sin afirmar qué hipótesis es cierta|Que el investigador valora p con su experiencia|Que la decisión se repite hasta alcanzar un p bajo|Se actúa como si H₀ o H₁ fueran ciertas para controlar los errores a la larga, sin pronunciarse sobre su verdad.",
      "¿Qué elemento toma el modelo híbrido del enfoque de Fisher?|Leer p como evidencia|Fijar β antes de los datos|Definir una región crítica|Del enfoque de Fisher toma la lectura de p como evidencia, y de Neyman y Pearson, la decisión todo o nada."
    ],
    inc: [
      "Sobre el modelo híbrido (NHST)|Exige un tamaño del efecto concreto en H₁|Compara p con 0,05 por costumbre|Reduce el resultado a significativo o no|El híbrido plantea una H₁ vaga. Exigir un efecto concreto en H₁ es propio de Neyman y Pearson."
    ],
    seq: [],
    cls: [
      "Enfoque del contraste|Fisher (1925): solo H₀; p como evidencia continua; juicio provisional|Neyman y Pearson (1933): H₀ y H₁ explícitas; α y β fijados antes; regla de conducta"
    ] },
  { t: "Qué dice y qué no dice un valor p",
    tip: "El valor p es la probabilidad de un resultado igual de extremo o más si H₀ y todos los supuestos del modelo fueran ciertos: una probabilidad sobre los datos, no sobre la hipótesis. La ASA (Wasserstein y Lazar, 2016) recuerda que no mide la probabilidad de H₀ ni el tamaño o la importancia del efecto. Con el mismo efecto, p cambia mucho con n.",
    v: [
      "Valor p=Probabilidad de un resultado igual o más extremo si H₀ y los supuestos se cumplen",
      "Declaración de la ASA=Seis principios sobre el valor p (Wasserstein y Lazar, 2016)",
      "Greenland et al. (2016)=Recopilaron 25 interpretaciones erróneas de p, IC y potencia",
      "Ioannidis (2005)=Advirtió que muchos resultados significativos publicados pueden ser falsos positivos",
      "Plausibilidad previa=Lo creíble que es una hipótesis antes de ver los datos",
      "Incompatibilidad=Lo que indica p entre los datos y un modelo estadístico concreto",
      "Inversión de la condición=Confundir la probabilidad de los datos dada H₀ con la de H₀ dados los datos",
      "Transparencia completa=Informar todos los análisis realizados, no solo los significativos"
    ],
    g: [
      "El valor p es una probabilidad sobre los ___, condicionada a una hipótesis.|datos|parámetros|efectos",
      "Con d de 0,2, una t daría p de 0,53 con 20 personas por grupo y p de 0,002 con ___.|500|100|50",
      "Un p pequeño puede deberse a que H₀ es falsa o a que falla algún ___ del modelo.|supuesto|parámetro|estadístico",
      "Según el quinto principio de la ASA, un valor p no mide el ___ de un efecto ni su importancia.|tamaño|signo|origen",
      "Greenland et al. (2016) recopilaron ___ interpretaciones erróneas sobre p, IC y potencia.|25|6|12"
    ],
    tf: [
      "Un p de 0,03 significa que H₀ tiene un 3 % de probabilidad de ser cierta.|F|p se calcula suponiendo que H₀ es cierta y no puede dar su probabilidad. Es la de los datos dada H₀.",
      "Con el mismo efecto real, el valor p puede variar mucho según el tamaño de la muestra.|V",
      "Si p es menor que 0,05, el resultado se replicará con alta probabilidad.|F|La replicación depende sobre todo de la potencia y del efecto real, no del valor p obtenido.",
      "Un p pequeño puede deberse a un análisis elegido después de ver los datos.|V"
    ],
    q: [
      "Un ensayo aleatorizado obtiene p de 0,001. ¿Qué interpretación es correcta?|Datos así serían muy raros si H₀ fuera cierta|Hay un 0,1 % de probabilidad de que H₀ sea cierta|El efecto del tratamiento es grande y relevante|p es una probabilidad sobre los datos bajo H₀. No da la probabilidad de H₀ ni mide la magnitud del efecto.",
      "Un estudio con 20.000 participantes obtiene p menor que 0,001 y otro con 50 obtiene p de 0,04. ¿Qué puede concluirse sobre sus efectos?|Nada sin conocer el tamaño del efecto|Que el primero tiene un efecto mayor|Que el segundo efecto es poco fiable|p depende del efecto y también de n. Una diferencia trivial con mucha muestra puede dar un p muy pequeño.",
      "¿Qué hace falta para pasar de la probabilidad de los datos dada H₀ a la de H₀ dados los datos?|La plausibilidad previa de H₀|Una muestra mucho más grande|Un α más estricto, como 0,005|Igual que el valor predictivo depende de la prevalencia, hace falta la plausibilidad previa, con un enfoque bayesiano.",
      "Según Ioannidis (2005), ¿cuándo puede ser falsa una parte grande de los resultados significativos publicados?|Con hipótesis poco plausibles y baja potencia|Con hipótesis plausibles y muestras grandes|Con contrastes bilaterales y α de 0,05|Si se contrastan muchas hipótesis poco plausibles con estudios poco potentes, abundan los falsos positivos significativos."
    ],
    inc: [
      "Sobre el valor p según la ASA|Mide la probabilidad de que la hipótesis sea cierta|Indica la incompatibilidad de los datos con un modelo|Depende de los supuestos del modelo estadístico|El segundo principio de la ASA dice que p no mide la probabilidad de que la hipótesis estudiada sea cierta."
    ],
    seq: [],
    cls: [
      "Lectura del valor p|Correcta: compatibilidad de los datos con H₀; depende del efecto y de n; probabilidad de los datos dada H₀|Errónea: probabilidad de que H₀ sea cierta; medida del tamaño del efecto; probabilidad de replicar"
    ] },
  { t: "Contrastes bilaterales y unilaterales, decisión e informe",
    tip: "En el contraste bilateral, H₁ admite las dos direcciones y p suma las dos colas. En el unilateral, p es el área de la cola prevista, la mitad del bilateral en esa dirección, y gana potencia, pero solo es legítimo si la dirección se fijó antes de los datos. Si p ≤ α se rechaza H₀, y si no, se mantiene, que no es aceptarla. Un bilateral rechaza H₀ si su valor queda fuera del IC.",
    v: [
      "Contraste bilateral=H₁ admite diferencias en las dos direcciones",
      "Contraste unilateral=H₁ en una sola dirección, legítimo solo si se fijó antes de los datos",
      "Mantener H₀=No rechazarla, sin haber demostrado que sea cierta",
      "Valor crítico=Límite que separa la zona de rechazo de la de no rechazo",
      "Nivel α=Umbral convencional, habitualmente 0,05, que no es una propiedad de los datos",
      "Sig.=Columna de SPSS en la que aparece el valor p",
      "Cola prevista=Dirección de H₁ fijada por razones teóricas antes de ver los datos",
      "Justificar α=Fijar el umbral de cada estudio según el coste de cada error (Lakens et al., 2018)"
    ],
    g: [
      "Elegir la cola tras ver los resultados equivale a usar α de ___ sin decirlo.|0,10|0,05|0,025",
      "Con t(40) y α de 0,05, el valor crítico bilateral es ±2,02 y el unilateral, ___.|1,68|1,80|2,02",
      "Por defecto se usan contrastes ___.|bilaterales|unilaterales|exactos",
      "Un contraste bilateral con α de 0,05 rechaza H₀ si su valor queda ___ del IC 95 %.|fuera|dentro|cerca",
      "jamovi y JASP permiten indicar la ___ de H₁ en el propio cuadro de la prueba.|dirección|magnitud|potencia"
    ],
    tf: [
      "En la dirección prevista, el p unilateral es la mitad del bilateral.|V",
      "El contraste unilateral es más potente que el bilateral en las dos direcciones.|F|Tiene más potencia en la dirección prevista, a cambio de no poder detectar efectos en la contraria.",
      "Si p es mayor que α, se acepta que H₀ es cierta.|F|Se mantiene H₀, pero mantener no es aceptar: no se ha demostrado que H₀ sea cierta.",
      "Decidir con p ≤ α equivale a decidir según si el estadístico cae en la región crítica.|V"
    ],
    q: [
      "Un equipo compara estudiar con música y en silencio, sin dirección prevista, y obtiene t(40) de 1,80 con p bilateral de 0,079. Tras ver los datos, informa un p unilateral de 0,040. ¿Qué ha hecho?|Usar en la práctica α de 0,10|Aplicar bien un contraste unilateral|Reducir el error tipo I a la mitad|Elegir la cola tras ver los resultados equivale a usar α de 0,10 sin decirlo. La dirección debe fijarse antes, idealmente en un preregistro.",
      "Un IC 95 % de la media va de 6,19 a 7,01. ¿Qué decisión se toma en el contraste bilateral de H₀: μ igual a 7 con α de 0,05?|Se mantiene H₀|Se rechaza H₀|Se acepta H₀|El 7 queda dentro del intervalo, así que no se rechaza H₀. Mantenerla no equivale a aceptarla.",
      "¿Cuándo es legítimo un contraste unilateral?|Si la dirección se fijó antes por teoría|Si el p bilateral roza el valor de 0,05|Si los datos muestran una dirección clara|Además, un efecto en la dirección contraria debe tratarse igual que la ausencia de efecto.",
      "Un contraste bilateral da p de 0,12 y el efecto va en la dirección fijada en el preregistro. ¿Cuál es el p unilateral?|0,06|0,24|0,12|En la dirección prevista, el p unilateral es la mitad del bilateral: 0,12 / 2 da 0,06."
    ],
    inc: [
      "Sobre la decisión en un contraste|Mantener H₀ equivale a demostrar que es cierta|Si p ≤ α, se rechaza H₀|El 0,05 es una convención, no una propiedad de los datos|Es la trampa PIR de «aceptar» H₀: mantenerla no demuestra que sea cierta."
    ],
    seq: [],
    cls: [
      "Tipo de contraste|Bilateral: H₁ con ≠; p suma las dos colas; valor crítico ±2,02 con t(40)|Unilateral: H₁ en una dirección; p de la cola prevista; valor crítico 1,68 con t(40)"
    ] }
] },
{ n: 3, t: "Equivocarse al decidir: errores, potencia y tamaño muestral", cap: 1, pir: "alta", mods: [
  { t: "Error tipo I, error tipo II y su equilibrio",
    tip: "Rechazar H₀ verdadera es un error tipo I (falso positivo, probabilidad α), y mantener H₀ falsa, un error tipo II (falso negativo, probabilidad β). La potencia, 1 − β, se calcula para un efecto supuesto y suele pedirse de al menos 0,80 (Cohen, 1988). Con n y efecto fijos, α y β varían en sentido inverso, y para reducir ambos hay que aumentar n o la precisión.",
    v: [
      "Error tipo I=Rechazar H₀ siendo verdadera, con probabilidad máxima α",
      "Error tipo II=Mantener H₀ siendo falsa, con probabilidad β",
      "Potencia=Probabilidad de rechazar H₀ si existe un efecto del tamaño supuesto",
      "1 − α=Probabilidad de mantener H₀ cuando es verdadera",
      "Falso negativo=No detectar un efecto que existe en la población",
      "Valores críticos=Límites de rechazo que marca solo la distribución bajo H₀",
      "Cohen (1988)=Propuso por convención una potencia mínima de 0,80",
      "Desplazamiento bajo H₁=d·√(n/2) unidades en una t de dos grupos independientes"
    ],
    g: [
      "Con una potencia de 0,80, el riesgo de no detectar el efecto supuesto es del ___.|20 %|80 %|5 %",
      "Con d de 0,5 y 32 personas por grupo la potencia es de 0,50, y con ___ por grupo sube a 0,80.|64|48|128",
      "Pasar de α de 0,05 a 0,01 aleja los valores críticos y ___ β.|aumenta|reduce|mantiene",
      "En un cribado de riesgo de suicidio, el error más grave es el falso ___.|negativo|positivo|parcial",
      "β no se elige directamente: depende del efecto real, de n, de α y de la ___.|variabilidad|hipótesis nula|región crítica"
    ],
    tf: [
      "α es la proporción de resultados significativos publicados que son falsos positivos.|F|α está condicionada a que H₀ sea cierta. Esa proporción depende también de la potencia y de cuántas hipótesis son verdaderas.",
      "Con n y tamaño del efecto fijos, reducir α aumenta la probabilidad de error tipo II.|V",
      "Aumentar n eleva α.|F|α la fija quien investiga antes de ver los datos. Aumentar n reduce β y eleva la potencia.",
      "No tiene sentido hablar de la potencia de un estudio sin decir para qué tamaño del efecto.|V"
    ],
    q: [
      "Un tratamiento nuevo se anuncia como superior al estándar, pero en realidad no lo es. ¿Qué error se ha cometido?|Error tipo I|Error tipo II|Error de medida|Se rechazó una H₀ verdadera: es un falso positivo, que puede llevar a abandonar algo que funciona.",
      "Un cribado de riesgo de suicidio deja sin detectar a una persona en riesgo. ¿Qué error es y cómo se valora?|Tipo II, y es más grave que el tipo I|Tipo I, y es más grave que el tipo II|Tipo II, e igual de grave que el tipo I|El falso negativo es mucho más grave aquí que el falso positivo, que solo supone una entrevista más.",
      "En la representación de las dos distribuciones, ¿qué fija la posición de los valores críticos?|Solo la distribución bajo H₀|Solo la distribución bajo H₁|El solapamiento de ambas|Una vez colocados con H₀, la parte de H₁ en la zona de no rechazo es β y la parte en la zona de rechazo, la potencia.",
      "¿Qué recomiendan Lakens et al. (2018) sobre α y la potencia?|Justificarlos según el coste de cada error|Fijarlos siempre en 0,05 y 0,80 por convención|Calcularlos después de ver los datos|Se defiende justificar α y la potencia según el coste de cada error, en lugar de aplicarlos por inercia."
    ],
    inc: [
      "Sobre α, β y potencia|La potencia es la probabilidad de error tipo II|α es la probabilidad máxima de falso positivo|La potencia se calcula para un efecto supuesto|La potencia es 1 − β, la probabilidad de rechazar H₀ cuando existe el efecto. β es la del error tipo II."
    ],
    seq: [],
    cls: [
      "Tipo de error|Error tipo I: falso positivo; probabilidad α; rechazar H₀ verdadera|Error tipo II: falso negativo; probabilidad β; mantener H₀ falsa"
    ] },
  { t: "De qué depende la potencia",
    tip: "La potencia aumenta con un efecto mayor, más n, un α mayor, menos variabilidad y un contraste unilateral en la dirección correcta, y cada palanca tiene un precio. El efecto es la palanca más fuerte y la única que no se elige. El diseño intrasujeto reduce mucho la variabilidad, a cambio de efectos de orden. La potencia es propiedad del diseño completo, no de la prueba.",
    v: [
      "Diseño intrasujeto=Cada persona es su propio control, lo que reduce la variabilidad",
      "Efectos de orden=Práctica, fatiga o arrastre que obligan a contrabalancear",
      "Atenuación=Dilución de las diferencias por el error de medida de un instrumento poco fiable",
      "Muestra homogénea=Reduce la variabilidad de las puntuaciones y eleva la potencia",
      "Contrabalanceo=Variar el orden de las condiciones para controlar los efectos de orden",
      "α de 0,005=Umbral de Benjamin et al. (2018) que exige unas 109 personas por grupo con d de 0,5",
      "Pruebas no paramétricas=Suelen ser algo menos potentes si se cumplen los supuestos paramétricos",
      "Diseño completo=Conjunto de efecto, muestra, fiabilidad y plan del estudio que fija la potencia"
    ],
    g: [
      "Con α de 0,05 bilateral y potencia 0,80, una t de dos grupos necesita 26 personas por grupo si d es 0,8, 64 si es 0,5 y ___ si es 0,2.|394|128|200",
      "Con d de 0,5 y 20 personas por grupo, la potencia se queda en ___.|0,34|0,50|0,80",
      "Con d de 0,5 y una correlación de 0,5 entre medidas, una t relacionada alcanza 0,80 con ___ personas.|34|64|128",
      "Con α de 0,005 hacen falta unas 109 personas por grupo, aproximadamente un ___ más que con 0,05.|70 %|50 %|100 %",
      "La n necesaria crece con el ___ del inverso del efecto.|cuadrado|cubo|doble"
    ],
    tf: [
      "Subir α aumenta la potencia sin ningún coste.|F|Aumenta la potencia, pero traslada el riesgo de un error al otro: se cometen más errores tipo I.",
      "El contraste bilateral es más potente que el unilateral en la dirección correcta.|F|Es al revés: el unilateral concentra α en una cola y es más potente en esa dirección.",
      "La misma prueba t puede tener una potencia de 0,30 o de 0,95 según el efecto, la muestra, la fiabilidad y el diseño.|V",
      "Un instrumento poco fiable reduce la potencia porque añade error de medida.|V"
    ],
    q: [
      "Un equipo con presupuesto para 128 participantes estudia un efecto de d 0,5, y la correlación entre dos medidas de cada persona sería de 0,5. ¿Qué cambio le permite alcanzar 0,80 con muchas menos personas?|Un diseño intrasujeto|Un α de 0,005|Un instrumento más breve|Cada persona es su propio control: bastan 34 personas frente a las 128 del diseño entre grupos, a cambio de controlar efectos de orden.",
      "¿Qué palanca de la potencia no puede elegir quien investiga?|El tamaño real del efecto|El nivel α del contraste|El número de colas|Es la palanca más potente, pero es una propiedad de la realidad, no del diseño.",
      "¿Qué precio tiene aumentar la potencia con un diseño intrasujeto?|Efectos de práctica, fatiga o arrastre|Más errores tipo I en el contraste|Ninguna potencia en dirección contraria|Obligan a contrabalancear. Más errores tipo I es el precio de subir α, y lo tercero, el del unilateral.",
      "Si se cumplen los supuestos paramétricos, ¿qué ocurre con la potencia de las pruebas no paramétricas?|Suelen ser algo menos potentes|Suelen ser bastante más potentes|Tienen exactamente igual potencia|Cuando se cumplen los supuestos, las paramétricas aprovechan mejor la información (Unidad 7)."
    ],
    inc: [
      "Sobre los factores de la potencia|El diseño intrasujeto aumenta la variabilidad|Un efecto mayor aumenta la potencia|Medidas más fiables aumentan la potencia|Es al revés: cada persona es su propio control, lo que reduce la variabilidad y eleva la potencia."
    ],
    seq: [],
    cls: [
      "Efecto sobre la potencia|La aumenta: n mayor; α mayor; medidas fiables; diseño intrasujeto|La reduce: α menor; instrumento poco fiable; muestra heterogénea; efecto más pequeño"
    ] },
  { t: "Calcular el tamaño muestral antes de recoger datos",
    tip: "El análisis de potencia a priori fija α, la potencia deseada y el efecto de interés y despeja la n. Lo más defendible es el menor efecto de interés (SESOI), luego un metaanálisis, y lo más arriesgado, un piloto o un estudio aislado, porque sus efectos tienden a estar inflados. Se calcula con la t no central (G∗Power), se corrige por pérdidas y se declara en el informe.",
    v: [
      "Potencia a priori=Cálculo de la n necesaria a partir de α, potencia deseada y efecto de interés",
      "SESOI=Menor efecto con importancia práctica o teórica",
      "t no central=Distribución de t cuando H₁ es cierta, usada para calcular la potencia",
      "G∗Power=Programa gratuito más extendido para calcular la potencia",
      "Aproximación normal=Estimación rápida de la n, algo menor que la exacta",
      "Ajuste por pérdidas=Dividir la n entre la proporción de participantes que se espera conservar",
      "Efecto inflado=Sobrestimación típica de los estudios pequeños, que lleva a muestras escasas",
      "Many Labs 2=Réplica en que la mediana de d bajó de 0,60 a 0,15 (Klein et al., 2018)"
    ],
    g: [
      "Con α de 0,05 bilateral, z₁₋α/₂ vale 1,96, y con potencia 0,80, z₁₋β vale ___.|0,84|1,28|1,64",
      "Con un 15 % de abandonos previstos, la n calculada se divide entre ___.|0,85|0,15|1,15",
      "En la Open Science Collaboration, el efecto medio pasó de r de 0,403 en los originales a ___ en las réplicas.|0,197|0,301|0,050",
      "Si un falso negativo es costoso, se recomienda una potencia de ___.|0,90|0,80|0,50",
      "Si habrá varias comparaciones con α corregido, la potencia se calcula con el α ___.|corregido|nominal|bilateral"
    ],
    tf: [
      "Planificar con el efecto de un piloto pequeño suele llevar a muestras demasiado grandes.|F|Los efectos de estudios pequeños tienden a estar inflados, así que la muestra calculada resulta insuficiente.",
      "El cálculo exacto con la t no central da valores algo mayores que la aproximación normal.|V",
      "El metaanálisis es la fuente más defendible para fijar el efecto con el que se planifica.|F|Lo más defendible es el menor efecto de interés (SESOI). El metaanálisis va después, mejor si corrige el sesgo de publicación.",
      "JARS-Quant pide justificar el tamaño muestral en el informe.|V"
    ],
    q: [
      "Un servicio universitario fija en 3 puntos la menor reducción relevante en una escala de insomnio con DT de 7,5. ¿Qué d usará para planificar?|0,40|2,50|0,75|d es la diferencia dividida por la DT: 3 / 7,5 da 0,40. Invertir el cociente da 2,50.",
      "Con α de 0,05 bilateral, potencia 0,80 y d de 0,40, el cálculo exacto da 100 por grupo. Si se espera un 15 % de pérdidas, ¿a cuántos se recluta por grupo?|118|115|85|100 / 0,85 da 117,6, que se redondea a 118. Multiplicar por 1,15 da 115, una corrección insuficiente.",
      "Ese estudio se planifica con el d de 0,80 de un piloto pequeño y recluta 26 por grupo. Si el efecto real es de 0,40, ¿qué potencia real tiene?|0,29|0,80|0,51|El 0,80 solo vale para el d inflado del piloto. Con 50 por grupo sería de 0,51, y con 26, de 0,29.",
      "¿Qué tres valores se fijan en un análisis de potencia a priori para despejar la n?|α, potencia y efecto de interés|α, valor p esperado y potencia|Potencia, efecto y n del piloto|Se fijan α, la potencia deseada y el tamaño del efecto que se quiere detectar, y se obtiene la n por grupo."
    ],
    inc: [
      "Sobre la elección del efecto al planificar|El efecto de un piloto pequeño es la opción más segura|El menor efecto de interés es la opción más defendible|Un metaanálisis es mejor si corrige el sesgo de publicación|Es la más arriesgada: los efectos de estudios pequeños tienden a estar inflados y llevan a muestras escasas."
    ],
    seq: [
      "Planificar la muestra del ensayo de higiene del sueño|Fijar la menor diferencia relevante y la DT>Calcular el d de interés>Fijar α, potencia y tipo de diseño>Calcular la n con la t no central>Corregir la n por las pérdidas previstas>Declarar el cálculo en el informe"
    ],
    cls: [] },
  { t: "La potencia real de la psicología y el mito de la potencia observada",
    tip: "La potencia de la psicología ha sido baja durante décadas: para efectos medianos, Cohen (1962) halló ≈ 0,46, Sedlmeier y Gigerenzer (1989), 0,37, y Szucs e Ioannidis (2017), 0,46. Esto produce falsos negativos, más falsos positivos entre los significativos y efectos inflados. La potencia observada post hoc es una transformación de p y no añade información (Hoenig y Heisey, 2001).",
    v: [
      "Cohen (1962)=Halló una potencia mediana de ≈ 0,46 para efectos medianos en una revista de 1960",
      "Sedlmeier y Gigerenzer=Hallaron en 1989 una mediana de 0,37, y solo 2 de 64 experimentos la mencionaban",
      "Szucs e Ioannidis (2017)=Estimaron 0,12, 0,46 y 0,78 para efectos pequeños, medianos y grandes",
      "Button et al. (2013)=Estimaron una potencia mediana del 21 % en neurociencia",
      "Potencia observada=Potencia calculada con el efecto muestral, que equivale a una transformación de p",
      "Hoenig y Heisey (2001)=Mostraron que la potencia post hoc no aporta información nueva sobre p",
      "Análisis de sensibilidad=Menor efecto que un estudio podía detectar con su n, α y potencia",
      "Efectos inflados=Solo superan el umbral las muestras que sobrestiman el efecto por azar"
    ],
    g: [
      "Con un p de exactamente 0,05, la potencia observada ronda ___.|0,50|0,80|0,05",
      "Button et al. (2013) estimaron una potencia mediana del 21 % en 730 estudios de ___ metaanálisis.|49|26|64",
      "Cohen (1962) revisó un volumen de 1960 de una revista de psicología anormal y ___.|social|clínica|experimental",
      "Decir «no fue significativo porque la potencia era baja», con la potencia del mismo resultado, es un razonamiento ___.|circular|inductivo|bayesiano",
      "Para afirmar que no hay un efecto relevante se usa una prueba de ___ o un factor de Bayes.|equivalencia|potencia|significación"
    ],
    tf: [
      "Para efectos medianos, la potencia mediana de la psicología apenas ha cambiado desde Cohen (1962).|V",
      "Cuanto menos potentes son los estudios de un campo, menor es la parte de sus resultados significativos que son falsos positivos.|F|Es al revés: con menos potencia, mayor es la parte de los resultados significativos que son falsos positivos.",
      "Un p alto implica siempre una potencia observada baja.|V",
      "La potencia observada post hoc permite saber si un resultado no significativo se debió a falta de muestra.|F|Es una transformación directa de p y no contiene información nueva (Hoenig y Heisey, 2001)."
    ],
    q: [
      "Un TFG obtiene p de 0,30 y concluye: «la potencia observada fue de 0,18, así que el efecto existe pero faltó muestra». ¿Qué debería haber hecho?|Mirar el IC del efecto o la sensibilidad|Calcular la potencia con un α mayor|Repetir el cálculo con el efecto muestral|La potencia observada es una transformación de p. Para interpretar un no significativo sirven el IC, la sensibilidad o la equivalencia.",
      "¿Por qué la baja potencia infla los efectos publicados?|Solo superan el umbral las que sobrestiman|Las muestras pequeñas reducen la variabilidad|Los estudios pequeños usan α más estrictos|Con poca potencia, solo son significativas las muestras que por azar sobrestiman el efecto, y si solo se publica eso, se acumulan.",
      "¿Qué potencia mediana para efectos medianos hallaron Sedlmeier y Gigerenzer (1989)?|0,37|0,46|0,21|El 0,46 es el de Cohen (1962) y de Szucs e Ioannidis (2017), y el 0,21, el de Button et al. (2013) en neurociencia.",
      "¿Qué indica un análisis de sensibilidad?|El menor efecto que podía detectar el estudio|La potencia calculada con el efecto observado|La probabilidad de replicar el resultado|Se calcula con la n, α y la potencia del estudio. La segunda opción describe la potencia observada, que no aporta nada a p."
    ],
    inc: [
      "Sobre las consecuencias de la baja potencia|Reduce los falsos positivos entre lo publicado|Produce muchos falsos negativos en la literatura|Favorece que se publiquen efectos inflados|Con menos potencia, una parte mayor de los resultados significativos son falsos positivos (Ioannidis, 2005)."
    ],
    seq: [
      "Hitos sobre la potencia en psicología|Cohen (1962)>Sedlmeier y Gigerenzer (1989)>Hoenig y Heisey (2001)>Button et al. (2013)>Szucs e Ioannidis (2017)"
    ],
    cls: [] }
] },
{ n: 4, t: "Cuánto importa un resultado: tamaños del efecto e intervalos", cap: 1, pir: "media", mods: [
  { t: "Para qué sirve un tamaño del efecto: familias d y r",
    tip: "El tamaño del efecto cuantifica la magnitud de una diferencia o relación con independencia de n, cosa que p no hace. Sirve para interpretar, comparar y acumular estudios y planificar la potencia. Hay dos familias convertibles, d (diferencias) y r (asociación), cuyos cortes no coinciden. La probabilidad de superioridad y el U3 de Cohen traducen d en solapamiento.",
    v: [
      "Tamaño del efecto=Magnitud de una diferencia o relación con independencia de n",
      "Familia d=Diferencia de medias en unidades de desviación típica",
      "Familia r=Grado de relación o proporción de varianza explicada",
      "Probabilidad de superioridad=Probabilidad de que un caso al azar de un grupo supere a uno del otro",
      "U3 de Cohen=Proporción del grupo 1 que supera la media del grupo 2",
      "Solapamiento=Grado en que dos distribuciones comparten valores",
      "Φ=Función de distribución de la normal tipificada",
      "Estimación muestral=Todo índice calculado en la muestra, con su propio error"
    ],
    g: [
      "Con grupos iguales, un d de 0,5, «mediano», equivale a un r de aproximadamente ___.|0,24|0,30|0,50",
      "Con d de 0,8, la probabilidad de superioridad es de ___.|0,71|0,79|0,58",
      "Con d de 0,5, el U3 de Cohen es del ___.|69 %|64 %|50 %",
      "Con un programa de lectura de d 0,8, un ___ del grupo del programa queda por debajo de la media habitual.|21 %|29 %|50 %",
      "La Δ de Glass y la d_z pertenecen a la familia ___.|d|r|f"
    ],
    tf: [
      "Incluso un efecto grande, de d 0,8, deja dos distribuciones muy solapadas.|V",
      "Los cortes de Cohen de la familia d coinciden con los de la familia r al convertirlos.|F|No coinciden: un d de 0,5, mediano, equivale a r ≈ 0,24, por debajo del r de 0,3 que Cohen llamó mediano.",
      "Un p más pequeño indica un tamaño del efecto mayor.|F|p depende del efecto y también de n. Una diferencia trivial con mucha muestra puede dar un p muy pequeño.",
      "Informar un d sin intervalo es como dar una media sin su error típico.|V"
    ],
    q: [
      "Un programa de lectura tiene d de 0,8 frente a la enseñanza habitual. Si se empareja al azar un alumno de cada grupo, ¿con qué frecuencia leerá mejor el del programa?|En el 71 % de los emparejamientos|En el 79 % de los emparejamientos|En casi todos los emparejamientos|Es la probabilidad de superioridad, Φ(0,8/√2) ≈ 0,71. El 79 % es el U3 de Cohen.",
      "¿Por qué el tamaño del efecto complementa al valor p?|Porque no depende de n como p|Porque indica si H₀ es falsa|Porque sustituye al intervalo|p depende a la vez del efecto y de n. El tamaño del efecto cuantifica la magnitud con independencia de n.",
      "Con dos normales de igual DT separadas d de 0,2, ¿cuál es la probabilidad de superioridad?|0,56|0,58|0,52|PS es Φ(0,2/√2) ≈ 0,56. El 0,58 corresponde al U3 de Cohen, Φ(0,2).",
      "Un estudio informa solo d de 0,67. ¿Qué le falta para valorar la precisión de esa estimación?|Su intervalo de confianza|Su valor p exacto y bilateral|Su potencia observada post hoc|Todo tamaño del efecto muestral es una estimación con su error, y su precisión la muestra el intervalo."
    ],
    inc: [
      "Sobre el tamaño del efecto|Depende del tamaño de la muestra, como p|Permite comparar estudios con escalas distintas|Sirve para planificar la potencia de un estudio|Cuantifica la magnitud con independencia de n. Es p el que depende a la vez del efecto y del tamaño muestral."
    ],
    seq: [],
    cls: [
      "Familia de índices|Familia d: d de Cohen; g de Hedges; Δ de Glass; d_z|Familia r: r; R²; η²; ω²; f"
    ] },
  { t: "Índices de diferencia de medias y de varianza explicada",
    tip: "La familia d divide una diferencia de medias por una DT, y lo que cambia es cuál: la combinada (d de Cohen), con corrección del sesgo (g de Hedges) o la del control (Δ de Glass), por lo que hay que indicar el estandarizador. En la familia r, η² está sesgada al alza y ω² la corrige. La f de Cohen sirve para la potencia del ANOVA, y η² parcial no coincide con η² en diseños factoriales.",
    v: [
      "d de Cohen=Diferencia de medias dividida por la DT combinada",
      "g de Hedges=d corregida por su sesgo al alza en muestras pequeñas (1981)",
      "Δ de Glass=Usa la DT del grupo de control cuando el tratamiento cambia la variabilidad",
      "Estandarizador=Desviación típica que divide la diferencia en un índice de la familia d",
      "η²=SC entre dividida por SC total, sesgada al alza",
      "ω²=Versión corregida de η² que estima mejor la proporción poblacional",
      "f de Cohen=Raíz de η² entre 1 − η², usada en programas de potencia del ANOVA",
      "η² parcial=Índice que SPSS da por defecto y que difiere de η² en diseños factoriales"
    ],
    g: [
      "Lakens (2013) recomienda indicar siempre el ___ del índice.|estandarizador|numerador|sesgo muestral",
      "Con 38 participantes, el factor de corrección de la g de Hedges vale ___.|0,979|0,990|0,950",
      "En un ANOVA con SC entre de 30 y SC total de 200, η² vale ___.|0,15|0,12|0,18",
      "Si la escala tiene un significado claro, el efecto más informativo suele ser la diferencia en la escala ___.|original|tipificada|logarítmica",
      "La d de Cohen ___ ligeramente el efecto poblacional en muestras pequeñas.|sobrestima|infraestima|reproduce"
    ],
    tf: [
      "η² y ω² coinciden cuando la muestra es pequeña.|F|η² está sesgada al alza y ω² la corrige. La diferencia entre ambas se reduce al crecer la muestra, no al reducirla.",
      "La Δ de Glass usa la DT del grupo de control cuando el tratamiento cambia la variabilidad.|V",
      "La g de Hedges multiplica d por un factor algo mayor que 1 en muestras pequeñas.|F|El factor es algo menor que 1 y se acerca a 1 al crecer n: con 38 participantes vale 0,979.",
      "En un ANOVA con η² de 0,15, la f de Cohen correspondiente es de 0,42.|V"
    ],
    q: [
      "Un artículo da t(58) de 2,41 para dos grupos de 30 personas, sin tamaño del efecto. ¿Qué d se recupera con d ≈ t · √(1/n₁ + 1/n₂)?|0,62|0,31|1,24|√(1/30 + 1/30) ≈ 0,258, y 2,41 · 0,258 ≈ 0,62, el d que da el ejemplo de formato APA.",
      "Un tratamiento aumenta mucho la dispersión de las puntuaciones del grupo experimental. ¿Qué índice conviene?|Δ de Glass|g de Hedges|η² parcial|Cuando el tratamiento cambia la variabilidad, la Δ de Glass estandariza con la DT del grupo de control.",
      "¿Qué índice se prefiere con muestras pequeñas de dos grupos independientes?|g de Hedges|d de Cohen|Δ de Glass|La d de Cohen sobrestima ligeramente el efecto en muestras pequeñas, y la g de Hedges corrige ese sesgo.",
      "En un ANOVA de 3 grupos con SC entre de 30, SC total de 200 y MC intra de 2,98, ¿cuánto vale ω² aproximadamente?|0,12|0,15|0,42|ω² es (30 − 2 · 2,98) / (200 + 2,98) ≈ 0,12. El 0,15 es η², sesgado al alza, y el 0,42, la f de Cohen."
    ],
    inc: [
      "Sobre η² y ω²|η² no tiene sesgo y ω² sí|ω² corrige el sesgo al alza de η²|La diferencia entre ambas se reduce al crecer n|Es al revés: η² está sesgada al alza y ω² corrige ese sesgo. Es una trampa PIR típica."
    ],
    seq: [],
    cls: [
      "Sesgo del índice|Sesgado al alza: d de Cohen; η²|Corrige el sesgo: g de Hedges; ω²"
    ] },
  { t: "Intervalos de confianza: construcción e interpretación",
    tip: "Un IC acompaña a la estimación con un rango de valores compatibles con los datos: estimación ± valor crítico · error típico. Se estrecha al crecer n (reducirlo a la mitad exige cuadruplicar la muestra) y se ensancha con más confianza o variabilidad. El 95 % es propiedad del procedimiento: cada intervalo concreto contiene o no el parámetro. La lectura probabilística es la del intervalo de credibilidad.",
    v: [
      "Intervalo de confianza=Rango obtenido con un método que contiene el parámetro en el 95 % de las muestras",
      "Amplitud=Indicador de la precisión de una estimación",
      "Danza de los intervalos=Variación de centro y amplitud de los IC entre muestras repetidas",
      "Intervalo de credibilidad=Intervalo bayesiano que admite una lectura probabilística sobre el parámetro",
      "Nueva estadística=Pasar de «¿hay efecto?» a «¿cuánto, y con qué precisión?» (Cumming, 2014)",
      "Hoekstra et al. (2014)=Documentaron la lectura probabilística errónea del IC entre investigadores",
      "IC de la diferencia=Lo que hay que mirar para comparar dos grupos, no el solapamiento de sus IC",
      "Error de muestreo=Única fuente de error que refleja el IC, no los sesgos de diseño o medida"
    ],
    g: [
      "Para reducir la amplitud del IC a la mitad hay que ___ la muestra.|cuadruplicar|duplicar|triplicar",
      "Con d de 0,5 y 20 personas por grupo, el IC 95 % va de −0,13 a ___.|1,13|0,78|0,63",
      "Pasar del IC 95 % al 99 % ___ el intervalo.|ensancha|estrecha|desplaza",
      "El IC refleja solo el error de ___, no los sesgos de diseño o de selección de resultados.|muestreo|especificación|redondeo",
      "Un contraste bilateral con nivel α rechaza H₀ si su valor queda fuera del IC al ___.|(1 − α) · 100 %|α · 100 %|(1 − α/2) · 100 %"
    ],
    tf: [
      "Si el IC 95 % de una diferencia va de 0,10 a 10,50, hay un 95 % de probabilidad de que la diferencia real esté en él.|F|El parámetro es fijo y cada intervalo lo contiene o no. El 95 % es la tasa de acierto del método a largo plazo.",
      "Si los IC 95 % de dos grupos se solapan, la diferencia entre ellos no es significativa.|F|El solapamiento no lo implica: hay que mirar el IC de la diferencia.",
      "Un intervalo ancho avisa de que el estudio informa poco, sea o no significativo.|V",
      "El IC contiene la decisión del contraste y añade información sobre magnitud y precisión.|V"
    ],
    q: [
      "Un estudio obtiene d de 0,67 con un IC 95 % de 0,02 a 1,33. ¿Qué lectura es la más adecuada?|Es compatible con efectos casi nulos y muy grandes|Hay un 95 % de probabilidad de que δ esté ahí|El efecto es grande y está estimado con precisión|El intervalo es muy ancho. Leerlo como una probabilidad sobre δ confunde el IC con un intervalo de credibilidad.",
      "¿Qué ocurre con la amplitud de un IC si se cuadruplica el tamaño de la muestra?|Se reduce aproximadamente a la mitad|Se reduce aproximadamente a la cuarta parte|No cambia si se mantiene el 95 %|El error típico baja con √n, y √4 es 2: la amplitud se reduce a la mitad.",
      "¿Qué describe exactamente el 95 % de un IC 95 %?|La tasa de acierto del método|La probabilidad de que μ esté dentro|La proporción de datos que abarca|Si se repitiera el estudio muchas veces, alrededor del 95 % de los intervalos contendría el parámetro.",
      "¿Qué intervalo permite decir que hay un 95 % de probabilidad de que el parámetro esté en él, dado el modelo y la previa?|El intervalo de credibilidad|El intervalo de confianza|El intervalo del 99 %|Esa lectura solo es válida para el intervalo de credibilidad bayesiano (Unidad 6), no para el IC frecuentista."
    ],
    inc: [
      "Sobre los intervalos de confianza|Cada IC concreto tiene un 95 % de probabilidad de acertar|El intervalo se estrecha al aumentar el tamaño de la muestra|Un intervalo ancho indica que la estimación es poco precisa|Un intervalo concreto contiene el parámetro o no. El 95 % describe el procedimiento, no cada intervalo."
    ],
    seq: [],
    cls: [
      "Efecto sobre la amplitud del IC|La aumenta: subir la confianza al 99 %; más variabilidad; menos participantes|La reduce: más participantes; menos variabilidad; bajar la confianza al 90 %"
    ] },
  { t: "Cortes de Cohen, contexto y relevancia clínica",
    tip: "Cohen propuso cortes para d (0,2, 0,5 y 0,8), r (0,1, 0,3 y 0,5) y otros índices, pero como último recurso. Gignac y Szodorai (2016) proponen 0,10, 0,20 y 0,30 para r en psicología. La importancia depende del contexto, el coste y el alcance, y los índices estandarizados dependen de la DT de la muestra. Significación estadística no es significación clínica.",
    v: [
      "Cortes de Cohen=Referencias de pequeño, mediano y grande propuestas como último recurso",
      "Gignac y Szodorai (2016)=Proponen r de 0,10, 0,20 y 0,30 como pequeño, típico y grande",
      "Diferencia mínima clínicamente importante=Menor cambio que pacientes o clínicos consideran relevante",
      "Índice de cambio fiable=Criterio de Jacobson y Truax (1991) para saber si el cambio individual es real",
      "Relevancia clínica=Que el cambio de cada paciente sea real y suficiente",
      "f²=Índice de regresión con cortes de 0,02, 0,15 y 0,35",
      "Impacto total=Alcance poblacional por el que un efecto pequeño puede ser muy relevante",
      "Muestra homogénea=Con DT pequeña, da un d mayor para la misma mejora en la escala"
    ],
    g: [
      "Para η², Cohen consideró grande un valor de ___.|0,14|0,06|0,40",
      "Para la f del ANOVA, el corte mediano de Cohen es ___.|0,25|0,15|0,30",
      "Con la referencia de Gignac y Szodorai, un r de 0,30 está entre los efectos más ___ habituales.|grandes|pequeños|típicos",
      "Una campaña escolar con d de 0,2 aplicada a miles de alumnos puede tener más impacto ___ que una terapia con d de 0,8.|total|individual|inmediato",
      "Valorar la importancia de un efecto corresponde a la sección de ___.|discusión|resultados|método"
    ],
    tf: [
      "Cohen presentó sus cortes como una escala universal para cualquier campo.|F|Los presentó como último recurso para cuando no hubiera una referencia mejor.",
      "La misma mejora de 20 minutos de sueño da un d mayor en una muestra homogénea que en una muy variada.|V",
      "Un tratamiento con una diferencia media significativa puede dejar a la mayoría de los pacientes sin un cambio clínicamente relevante.|V",
      "Un informe que dice «el efecto fue mediano (d de 0,52)» ya ha interpretado el resultado.|F|Clasificar con un corte no es interpretar: hay que valorar precisión, comparación con el campo, SESOI, escala original y coste."
    ],
    q: [
      "Una intervención breve y barata contra el consumo de alcohol, aplicada a toda la población escolar, logra d de 0,2. ¿Cómo debe valorarse?|Puede ser muy relevante por su alcance|Es trivial porque d es pequeño|Solo importa si p es menor que 0,001|Un efecto pequeño puede ser muy relevante si se aplica a toda la población, si la intervención es barata o si el resultado es grave.",
      "¿Qué r consideran «típico» en psicología Gignac y Szodorai (2016)?|0,20|0,30|0,10|Proponen 0,10, 0,20 y 0,30 como pequeño, típico y grande. El 0,30 es el «mediano» de Cohen.",
      "Un clínico quiere saber si el cambio de un paciente concreto es real y no solo error de medida. ¿Qué usa?|El índice de cambio fiable|La g de Hedges del grupo|El corte mediano de Cohen|El índice de Jacobson y Truax (1991) valora el cambio individual. Los otros dos describen efectos de grupo.",
      "¿Por qué hay que ser prudente al comparar d de estudios con instrumentos muy distintos?|El d depende de la DT y la fiabilidad|El d depende del valor p obtenido|El d solo es válido en experimentos|Un índice estandarizado cambia con la DT de la muestra y con la fiabilidad de la medida."
    ],
    inc: [
      "Sobre la interpretación de un efecto|Un d grande garantiza trascendencia práctica|Un d pequeño puede ser relevante si es barato|La DT de la muestra influye en el d obtenido|Un efecto grande en una tarea de laboratorio puede no tener trascendencia práctica."
    ],
    seq: [],
    cls: [
      "Corte de Cohen|Pequeño: d de 0,2; r de 0,1; η² de 0,01|Mediano: d de 0,5; r de 0,3; η² de 0,06|Grande: d de 0,8; r de 0,5; η² de 0,14"
    ] }
] }
);

// SAIMAP Psicología · Estadística II · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "La crisis de replicación y la ciencia abierta", cap: 2, pir: "baja", mods: [
  { t: "Qué revelaron las grandes réplicas",
    tip: "Un resultado gana credibilidad cuando se replica con participantes nuevos. En el Proyecto de Reproducibilidad (Open Science Collaboration, 2015) era significativo el 97 % de los originales y solo el 36 % de las réplicas, y el efecto medio bajó a la mitad, de r 0,403 a r 0,197. Many Labs 2 (Klein et al., 2018) confirmó el patrón: efectos menores de lo publicado y muchos resultados frágiles. Ninguna cifra única resume la tasa de replicación.",
    v: [
      "Réplica directa=Repetición del procedimiento lo más fielmente posible con participantes nuevos",
      "Réplica conceptual=Pone a prueba la misma hipótesis con otro método",
      "Proyecto de Reproducibilidad=Repetición de 100 estudios de 2008 publicados en tres revistas de psicología",
      "Open Science Collaboration=Consorcio que firmó el gran proyecto de réplica publicado en 2015",
      "Many Labs 2=Réplica de 28 efectos en 125 muestras de 36 países (Klein et al., 2018)",
      "Sobrestimación del efecto=Efectos publicados mayores que los reales por baja potencia y filtro de p",
      "Golpes de suerte=Muestras pequeñas que por azar dieron efectos grandes y superaron el filtro",
      "Tasa de replicación=Cifra que cambia según el criterio usado para decidir si un efecto se reproduce"
    ],
    g: [
      "En el Proyecto de Reproducibilidad, fueron significativas el ___ de las réplicas.|36 %|47 %|68 %",
      "En Many Labs 2, la mediana del tamaño del efecto, en d, pasó de 0,60 en los originales a ___ en las réplicas.|0,15|0,30|0,45",
      "En el Proyecto de Reproducibilidad, el efecto original caía dentro del IC 95 % de la réplica en el ___ de los casos.|47 %|36 %|97 %",
      "En Many Labs 2, la variación de los resultados entre muestras fue ___.|pequeña|enorme|creciente",
      "Durante décadas las réplicas directas fueron raras porque las revistas preferían resultados ___.|nuevos|nulos|replicados"
    ],
    tf: [
      "En el Proyecto de Reproducibilidad, combinando original y réplica, el 68 % de los efectos era significativo.|V",
      "El 39 % de efectos que «se replicaron» es la tasa de replicación definitiva del Proyecto de Reproducibilidad.|F|Ninguna cifra única la resume: según el criterio, sale un 36 %, un 39 %, un 47 % o un 68 %.",
      "En Many Labs 2, 21 de los 28 efectos fueron menores que en el estudio original.|V",
      "La gran variación entre laboratorios de Many Labs 2 indica que los fracasos se deben al contexto local.|F|La variación entre muestras fue pequeña, lo que hace menos probable que los fracasos dependan de cada laboratorio."
    ],
    q: [
      "Un equipo repite con 40 personas un experimento clásico y obtiene p de 0,21. Un periodista titula «El efecto era falso». ¿Qué objeción es la más sólida?|La réplica puede carecer de potencia|El efecto original era demasiado grande|La réplica debió usar otro método|Un p mayor que 0,05 no prueba la ausencia de efecto: una réplica pequeña puede no detectarlo.",
      "¿Qué dato del Proyecto de Reproducibilidad se considera el más informativo?|La reducción del efecto a la mitad|El paso del 97 % al 36 % significativo|El 39 % de efectos que «se replicó»|Que los efectos se reduzcan de forma sistemática indica que muchos originales sobrestimaban su magnitud.",
      "¿Por qué la literatura publicada tiende a sobrestimar los efectos?|Por baja potencia y filtro de significación|Por exceso de réplicas directas publicadas|Por usar muestras demasiado grandes|Si solo se publican los significativos de estudios pequeños, pasan el filtro las muestras que por azar dieron efectos grandes.",
      "¿Qué distingue una réplica conceptual de una directa?|Prueba la hipótesis con otro método|Repite el procedimiento con fidelidad|Reutiliza a los participantes originales|La directa reproduce el procedimiento con participantes nuevos. La conceptual pone a prueba la misma hipótesis con otro método."
    ],
    inc: [
      "Sobre las grandes réplicas|Many Labs 2 replicó 100 estudios de 2008|El Proyecto de Reproducibilidad es de 2015|Many Labs 2 reunió a más de 15.000 personas|Los 100 estudios de 2008 son del Proyecto de Reproducibilidad. Many Labs 2 replicó 28 efectos en 125 muestras."
    ],
    seq: [],
    cls: [
      "Proyecto de réplica|Proyecto de Reproducibilidad: 100 estudios de 2008; 36 % de réplicas significativas; r de 0,403 a 0,197|Many Labs 2: 28 efectos; 125 muestras de 36 países; d de 0,60 a 0,15"
    ] },
  { t: "p-hacking, HARKing y grados de libertad del investigador",
    tip: "Simmons, Nelson y Simonsohn (2011) llamaron grados de libertad del investigador al margen de decisiones que hay entre los datos y el artículo. Ninguna es fraudulenta por sí sola: el problema surge al tomarlas tras ver los datos y quedarse con la que da significación. En su simulación sin efecto real, combinar cuatro decisiones flexibles elevó los falsos positivos del 5 % al 60,7 %.",
    v: [
      "Grados de libertad del investigador=Decisiones de recogida y análisis que pueden tomarse tras ver los datos",
      "p-hacking=Probar varios análisis y comunicar solo el que da p < 0,05",
      "Parada opcional=Detener la recogida en cuanto el resultado es significativo",
      "HARKing=Presentar como hipótesis previa lo hallado al explorar los datos",
      "Kerr (1998)=Autor que dio nombre a formular las hipótesis después de conocer los resultados",
      "Sesgo de publicación=Publicación preferente de resultados significativos que distorsiona la literatura",
      "Efecto cajón de archivo=Estudios no significativos que no se envían o no se publican",
      "Prácticas cuestionables=Conductas como la parada opcional que inflan los falsos positivos"
    ],
    g: [
      "En la simulación de Simmons et al. (2011), sin flexibilidad la tasa de falsos positivos era del ___.|5 %|7,7 %|12,6 %",
      "Combinando solo las decisiones A y B, la tasa de falsos positivos llegó al ___.|14,4 %|30,9 %|60,7 %",
      "En la simulación, cada condición tenía ___ observaciones por celda.|20|10|50",
      "La decisión B consistía en añadir ___ observaciones por celda si el primer análisis no era significativo.|10|20|5",
      "Simmons et al. pidieron informar de todas las variables y ___, incluidas las que no dieron resultado.|condiciones|hipótesis|revistas"
    ],
    tf: [
      "Cada decisión flexible aislada elevó los falsos positivos por encima del 30 %.|F|Ninguna decisión aislada superó el 12,6 %. El 30,9 % se alcanzó combinando A, B y C.",
      "Ninguno de los grados de libertad del investigador es fraudulento por sí solo.|V",
      "En la decisión A de la simulación, las dos variables dependientes estaban correlacionadas.|V",
      "HARKing consiste en detener la recogida en cuanto se obtiene p < 0,05.|F|Eso es la parada opcional. HARKing es presentar como hipótesis previa lo descubierto al explorar."
    ],
    q: [
      "Una estudiante pasa tres cuestionarios de sueño, amplía la muestra, excluye a quienes trabajan de noche y presenta como hipótesis inicial el único cuestionario con p de 0,04. ¿Qué ocurre con ese p?|Pierde su significado nominal|Sigue siendo válido, pues no mintió|Solo cambia si inventó algún dato|El 5 % de error tipo I solo vale si el análisis estaba fijado de antemano. No falseó datos, pero el p ya no significa lo que dice.",
      "Un investigador revisa los datos cada 10 participantes y para al obtener p < 0,05. ¿Qué práctica es?|Parada opcional|HARKing|Sesgo de publicación|Detener la recogida según el resultado infla el error tipo I.",
      "¿Qué combinación de decisiones flexibles dio un 30,9 % de falsos positivos?|A, B y C|A y B|Las cuatro|A y B dieron un 14,4 %, A, B y C un 30,9 % y las cuatro juntas un 60,7 %.",
      "¿Cuándo se vuelve problemático un grado de libertad del investigador?|Cuando se decide tras ver los datos|Cuando se fija en el plan previo|Cuando se informa en el artículo|Las decisiones no son fraudulentas en sí. El problema es tomarlas después de ver los datos según den significación."
    ],
    inc: [
      "Sobre la simulación de Simmons et al. (2011)|Las cuatro juntas dieron un 30,9 %|Sin flexibilidad, la tasa fue del 5 %|No había ningún efecto real en los datos|Las cuatro juntas elevaron la tasa al 60,7 %. El 30,9 % corresponde a combinar A, B y C."
    ],
    seq: [],
    cls: [
      "Práctica cuestionable|p-hacking: probar varios análisis; comunicar solo el significativo|Parada opcional: mirar cada pocos participantes; detener la recogida al ver p < 0,05|HARKing: hipótesis formulada tras explorar; Kerr (1998)"
    ] },
  { t: "Preregistro, informes registrados y datos abiertos",
    tip: "La ciencia abierta separa lo decidido antes de ver los datos de lo decidido después y hace visible el proceso. El preregistro fija con fecha hipótesis, muestra, exclusiones y plan de análisis, y obliga a etiquetar lo exploratorio. El informe registrado añade que la revista acepta el trabajo antes de los datos, sea cual sea el resultado. Un preregistro vago apenas protege, y desviarse de él no es fraude si se declara y se justifica.",
    v: [
      "Ciencia abierta=Prácticas que separan lo decidido antes y después de los datos y hacen visible el proceso",
      "Preregistro=Documento con fecha que fija hipótesis, muestra y análisis antes de los datos",
      "Informe registrado=Artículo revisado y aceptado antes de recoger los datos, sea cual sea el resultado",
      "OSF y AsPredicted=Plataformas más usadas para depositar el plan de un estudio",
      "Reproducibilidad computacional=Obtener los mismos números con los mismos datos",
      "Directrices TOP=Sirven para que las revistas declaren qué grado de transparencia exigen",
      "Análisis exploratorio=Genera hipótesis para el siguiente estudio, no una confirmación",
      "Réplica multilaboratorio=Muestras grandes y diversas reunidas con un protocolo común"
    ],
    g: [
      "En un informe registrado, la revista evalúa introducción, método y plan de análisis ___ de que existan los datos.|antes|después|además",
      "El preregistro no prohíbe explorar: obliga a ___ qué análisis eran confirmatorios.|etiquetar|eliminar|ocultar",
      "El remedio principal frente al sesgo de publicación son los ___.|informes registrados|datos abiertos|metaanálisis",
      "Publicar datos y sintaxis permite detectar errores de cálculo o de ___.|codificación|muestreo|diseño",
      "Un preregistro ___ deja casi la misma flexibilidad que no tenerlo.|vago|breve|público"
    ],
    tf: [
      "Desviarse del preregistro constituye fraude, aunque se declare y se justifique.|F|No es fraude si se declara y se justifica. Lo problemático es ocultar la desviación.",
      "Preregistrar el plan de análisis y la regla de parada devuelve el error tipo I a su valor nominal.|V",
      "El informe registrado se revisa en dos fases, antes y después de recoger los datos.|V",
      "Preregistro e informe registrado se diferencian en que solo el segundo fija las hipótesis antes de los datos.|F|Ambos las fijan antes. El informe registrado añade la aceptación previa de la revista."
    ],
    q: [
      "Un TFG preregistra un N de 64 por grupo para d de 0,5 con potencia 0,80, la exclusión de quienes trabajan de noche y una t de Welch bilateral con d e IC 95 %. ¿Qué aporta sobre todo?|Fija las decisiones antes de los datos|Garantiza que el resultado sea significativo|Asegura que la revista lo publique|Al fijarlo todo de antemano, el valor p conserva su significado. La aceptación previa solo la da un informe registrado.",
      "¿Qué problema corta de raíz el informe registrado?|El sesgo de publicación|Los errores de codificación|La baja potencia estadística|La decisión editorial ya no depende de que p sea menor que 0,05.",
      "¿Qué remedio corresponde principalmente al HARKing?|Preregistrar las hipótesis|Publicar el código abierto|Hacer réplicas multilaboratorio|Preregistrar las hipótesis permite distinguir la confirmación de la exploración.",
      "Un hallazgo que surge al explorar los datos de un estudio preregistrado debe presentarse como…|una hipótesis para otro estudio|una confirmación de la hipótesis|un resultado sin ningún valor|Lo descubierto explorando es una hipótesis para el siguiente estudio, no una confirmación, y debe etiquetarse así."
    ],
    inc: [
      "Sobre la ciencia abierta|El preregistro prohíbe cualquier análisis exploratorio|Los datos abiertos facilitan la reproducibilidad computacional|Los metaanálisis combinan los efectos de muchos estudios|El preregistro no prohíbe explorar: obliga a etiquetar qué análisis eran confirmatorios y cuáles exploratorios."
    ],
    seq: [
      "Proceso de un informe registrado|Redactar introducción, método y plan de análisis>Revisión de la primera fase sin datos>Aceptación del trabajo por la revista>Recogida y análisis según el protocolo>Revisión de que se siguió lo anunciado"
    ],
    cls: [
      "Remedio principal|Preregistro: p-hacking; parada opcional; HARKing|Informes registrados: sesgo de publicación|Datos y código abiertos: errores de cálculo; errores de codificación"
    ] },
  { t: "El debate sobre el umbral de significación",
    tip: "La declaración de la ASA (Wasserstein y Lazar, 2016) recordó que p no mide la probabilidad de la hipótesis ni el tamaño del efecto. Benjamin et al. (2018) propusieron p < 0,005 para nuevos descubrimientos, Lakens et al. (2018) pidieron justificar α en cada estudio y Wasserstein et al. (2019), abandonar «estadísticamente significativo». Ninguna postura defiende p < 0,05 como único criterio, y el mínimo es informar p exacto, efecto e IC.",
    v: [
      "Declaración de la ASA=Seis principios sobre el valor p publicados en 2016 (Wasserstein y Lazar)",
      "Wasserstein et al. (2019)=Editorial que propuso abandonar la etiqueta «estadísticamente significativo»",
      "Ritual de la significación=Uso mecánico de p < 0,05 descrito por Gigerenzer",
      "Benjamin et al. (2018)=Grupo de 72 autores que propuso p < 0,005 para nuevos descubrimientos",
      "Resultado sugerente=Valor p entre 0,005 y 0,05 según la propuesta del umbral más estricto",
      "Justificar α=Elegir el nivel de significación según los costes de los errores tipo I y II",
      "ATOM=Aceptar la incertidumbre y ser reflexivo, abierto y modesto",
      "Ioannidis (2005)=Argumentó que con poca potencia buena parte de lo publicado puede ser falso"
    ],
    g: [
      "Según Benjamin et al., un p de 0,005 bilateral equivale aproximadamente a un factor de Bayes de entre 14 y ___.|26|50|100",
      "Mantener la potencia con p < 0,005 exigiría alrededor de un ___ más de muestra.|70 %|30 %|150 %",
      "Para d de 0,5 en dos grupos independientes, el umbral de 0,005 eleva la muestra de 64 a ___ personas por grupo.|109|128|86",
      "El editorial de Wasserstein, Schirm y Lazar (2019) acompañaba a ___ artículos.|43|25|72",
      "Gigerenzer describe el ritual de p < 0,05 como un híbrido entre Fisher y ___.|Neyman-Pearson|Bayes|Cohen"
    ],
    tf: [
      "En el Proyecto de Reproducibilidad se replicó el 50 % de los estudios con p original < 0,005, frente al 24 % de los que tenían p entre 0,005 y 0,05.|V",
      "Benjamin et al. (2018) propusieron eliminar los valores p de los artículos.|F|Propusieron cambiar el umbral. Abandonar la etiqueta «significativo» es la propuesta de Wasserstein et al. (2019).",
      "Lakens et al. (2018) defienden un α único y más exigente para toda la psicología.|F|Sostienen que ningún umbral universal sirve: cada estudio debe justificar su α según los costes de los errores.",
      "Las tres propuestas coinciden en no usar p < 0,05 como único criterio.|V"
    ],
    q: [
      "De 1.000 hipótesis, el 10 % son verdaderas. Con α de 0,05 y potencia 0,80 hay 80 positivos verdaderos y 45 falsos. ¿Qué proporción de los significativos es falsa?|Alrededor del 36 %|Alrededor del 5 %|Alrededor del 56 %|45 / (80 + 45) ≈ 0,36. El 56 % corresponde a una potencia de 0,35, y el 5 %, a α de 0,005 con potencia 0,80.",
      "Un equipo que diseña un ensayo que decidirá un tratamiento fija su α según el coste de cada error. ¿Qué propuesta sigue?|Justificar α|Umbral de 0,005|Abandonar la significación|Lakens et al. (2018) proponen que cada estudio justifique α y potencia según las consecuencias de los errores.",
      "¿Qué recomendaron Wasserstein, Schirm y Lazar (2019)?|Abandonar la etiqueta «significativo»|Exigir p < 0,005 en descubrimientos|Justificar α en cada estudio|Propusieron informar p como medida continua, con estimaciones e incertidumbre, y lo resumieron en ATOM.",
      "Según la ASA (2016), un valor p indica…|lo incompatibles que son los datos con un modelo|la probabilidad de que la hipótesis sea cierta|el tamaño y la importancia del efecto|p no mide la probabilidad de que la hipótesis sea cierta ni el tamaño o la importancia del efecto."
    ],
    inc: [
      "Sobre el debate del umbral|Lakens et al. (2018) proponen p < 0,005 universal|Gigerenzer llama ritual al uso mecánico de p < 0,05|La ASA publicó seis principios sobre el valor p|El umbral de 0,005 es de Benjamin et al. (2018). Lakens et al. defienden que cada estudio justifique su α."
    ],
    seq: [],
    cls: [
      "Propuesta sobre el umbral|Benjamin et al. (2018): p < 0,005; resultados sugerentes; 72 autores|Lakens et al. (2018): justificar α; costes de los errores|Wasserstein et al. (2019): abandonar «significativo»; ATOM; 43 artículos"
    ] }
] },
{ n: 6, t: "Más allá del valor p: equivalencia y factores de Bayes", cap: 2, pir: "baja", mods: [
  { t: "Afirmar la ausencia de un efecto relevante: pruebas TOST",
    tip: "Un p mayor que 0,05 no permite concluir que el efecto sea nulo. Las pruebas de equivalencia fijan antes el menor efecto de interés (SESOI), que define los límites −Δ y +Δ. El TOST (Lakens, 2017) hace dos pruebas unilaterales: si se rechazan ambas, hay equivalencia, y su p es el mayor de los dos. Equivale a comprobar que el IC 90 % cae entero dentro de los límites.",
    v: [
      "Prueba de equivalencia=Contraste que busca mostrar que un efecto es menor que un límite relevante",
      "SESOI=Menor efecto de interés, por debajo del cual el efecto se considera despreciable",
      "Límites de equivalencia=Valores −Δ y +Δ derivados del menor efecto de interés",
      "TOST=Dos pruebas unilaterales contra −Δ y +Δ (Lakens, 2017)",
      "p del TOST=El mayor de los dos valores p unilaterales",
      "IC 90 %=Intervalo usado porque cada prueba unilateral se hace con α de 0,05",
      "Efecto trivial=Distinto de 0 pero dentro de los límites de equivalencia",
      "Resultado indeterminado=IC tan ancho que contiene el 0 y sobrepasa los límites"
    ],
    g: [
      "El TOST concluye equivalencia si se rechazan ___ hipótesis nulas unilaterales.|las dos|una de las|ninguna de las",
      "En el TOST se usa el IC al ___ porque cada prueba es unilateral con α de 0,05.|90 %|95 %|99 %",
      "El valor p del TOST es el ___ de los dos valores p unilaterales.|mayor|menor|promedio",
      "Los límites de equivalencia deben justificarse ___ de ver los datos, idealmente en el preregistro.|antes|después|al terminar",
      "Con muestras muy grandes, un efecto puede ser distinto de 0 y, a la vez, demasiado ___ para importar.|pequeño|grande|impreciso"
    ],
    tf: [
      "Si la prueba clásica da p mayor que 0,05, puede concluirse que las condiciones son equivalentes.|F|Quizá el efecto existe y faltó potencia. Para afirmar equivalencia hace falta un TOST u otra herramienta específica.",
      "El menor efecto de interés puede expresarse en unidades brutas o en d.|V",
      "Fijar Δ después de ver los datos permite «demostrar» la equivalencia que se desee.|V",
      "El TOST concluye equivalencia si el IC 95 % de la diferencia contiene el 0.|F|Se comprueba si el IC 90 % cae entero dentro de los límites. Contener el 0 también ocurre en un resultado indeterminado."
    ],
    q: [
      "Un departamento compara notas de examen en línea y presencial, con Δ de 0,5. Las pruebas contra −0,5 y +0,5 dan p < 0,001 y p de 0,010, y el IC 90 % va de −0,18 a 0,38. ¿Qué se concluye?|Las notas son equivalentes|El resultado es indeterminado|Las notas son diferentes|Se rechazan las dos nulas unilaterales y el IC 90 % cae dentro de los límites. El p del TOST es 0,010.",
      "Con límites de ±0,3, el IC 90 % de una diferencia va de 0,05 a 0,25. ¿Qué resultado combinado es?|Diferente pero equivalente|Equivalente y no diferente|Diferente y no equivalente|No contiene el 0, así que hay diferencia, pero cae dentro de ±0,3: es un efecto trivial.",
      "¿Qué decide qué diferencia se considera despreciable en una prueba de equivalencia?|El menor efecto de interés|El valor p del contraste clásico|El tamaño de la muestra|El SESOI define los límites −Δ y +Δ, por debajo de los cuales el efecto se considera despreciable.",
      "¿Qué resultado es típico de los estudios pequeños al combinar el contraste clásico y el de equivalencia?|Indeterminado|Diferente pero equivalente|Equivalente y no diferente|Con un IC tan ancho que contiene el 0 y sobrepasa los límites, no puede afirmarse nada."
    ],
    inc: [
      "Sobre el TOST|Su p es el menor de los dos p unilaterales|Se basa en dos contrastes unilaterales|Δ puede fundarse en un criterio clínico|El p del TOST es el mayor de los dos: solo hay equivalencia si se rechazan ambas hipótesis nulas."
    ],
    seq: [
      "Prueba de equivalencia TOST|Fijar el menor efecto de interés>Definir los límites −Δ y +Δ>Recoger los datos>Hacer las dos pruebas unilaterales>Concluir equivalencia si se rechazan ambas"
    ],
    cls: [] },
  { t: "La lógica bayesiana: de la creencia previa a la posterior",
    tip: "El enfoque bayesiano entiende la probabilidad como un grado de creencia que se actualiza con los datos: la posterior es proporcional a la verosimilitud por la priori. El valor p es una probabilidad de los datos suponiendo H₀, y la posterior, de la hipótesis dados los datos. Con odds, las posteriores son la razón de verosimilitudes por las odds previas. La subjetividad de la priori se aborda con prioris por defecto, transparencia y análisis de sensibilidad.",
    v: [
      "Probabilidad previa=Plausibilidad de una hipótesis o parámetro antes de ver los datos",
      "Verosimilitud=Probabilidad de los datos observados si una hipótesis fuera cierta",
      "Probabilidad posterior=Creencia actualizada tras combinar la priori con los datos",
      "Odds=Razón entre dos probabilidades",
      "Razón de verosimilitudes=Cociente entre la probabilidad de los datos con H₁ y con H₀",
      "Distribución previa=Reparto de la creencia entre los valores posibles de un parámetro antes del estudio",
      "Intervalo de credibilidad=Rango que contiene el parámetro con una probabilidad dada, según modelo y priori",
      "Análisis de sensibilidad=Repetir el análisis con varias prioris razonables para ver si cambia la conclusión"
    ],
    g: [
      "Para el enfoque frecuentista, la probabilidad es la ___ a largo plazo de un procedimiento.|frecuencia|creencia|verosimilitud",
      "Con muestras pequeñas, la influencia de la priori sobre la posterior es ___.|mayor|menor|nula",
      "Si la razón de verosimilitudes es 6 y las odds previas son 1, las odds posteriores son ___.|6|1|7",
      "La crítica principal al enfoque bayesiano es que la priori introduce ___.|subjetividad|sesgo de selección|error tipo I",
      "Las prioris por defecto de JASP y jamovi son poco ___ y acordadas por convención.|informativas|flexibles|conocidas"
    ],
    tf: [
      "La verosimilitud es la probabilidad de que la hipótesis sea cierta antes de ver los datos.|F|Eso es la probabilidad previa. La verosimilitud es la probabilidad de los datos observados si la hipótesis fuera cierta.",
      "Ante los mismos datos, la razón de verosimilitudes no depende de la creencia previa de cada equipo.|V",
      "El intervalo de credibilidad admite decir que hay un 95 % de probabilidad de que contenga el parámetro, dados el modelo y la priori.|V",
      "Con odds previas de 0,11 y razón de verosimilitudes 6, la probabilidad posterior de H₁ supera 0,50.|F|Las odds posteriores son 0,67 y la probabilidad, 0,40: el equipo escéptico termina por debajo de 0,50."
    ],
    q: [
      "Unos datos son 0,30 de probables si un programa de tutorías funciona y 0,05 si no. Un equipo neutral parte de una P(H₁) de 0,50. ¿Qué probabilidad posterior obtiene?|0,86|0,60|0,40|Odds previas de 1 por una razón de 6 dan odds de 6, y 6 / 7 ≈ 0,86. El 0,40 es la del equipo escéptico.",
      "Si las odds previas a favor de H₁ son 0,25 y la razón de verosimilitudes es 2, ¿qué probabilidad posterior tiene H₁?|0,33|0,50|0,67|Las odds posteriores son 0,25 × 2, es decir, 0,5, y la probabilidad es 0,5 / 1,5 ≈ 0,33.",
      "¿Qué respuesta al problema de la priori consiste en repetir el análisis con varias prioris razonables?|Análisis de sensibilidad|Priori por defecto|Declaración transparente|Si la conclusión no cambia con distintas prioris razonables, no depende de una elección subjetiva.",
      "¿En qué se diferencia el valor p de la probabilidad posterior?|p supone H₀ y la posterior, los datos|p supone los datos y la posterior, H₀|Son la misma probabilidad con otro nombre|p es la probabilidad de los datos suponiendo H₀. La posterior es la de la hipótesis dados los datos."
    ],
    inc: [
      "Sobre la lógica bayesiana|La posterior es independiente de la priori elegida|La verosimilitud es la probabilidad de los datos con H|Con muchos datos, la priori pierde influencia|La posterior depende de dónde se parte. Es la razón de verosimilitudes la que no depende de la priori."
    ],
    seq: [
      "Actualización bayesiana|Fijar la probabilidad previa>Calcular la verosimilitud de los datos>Combinarlas en la probabilidad posterior"
    ],
    cls: [
      "Enfoque|Frecuentista: probabilidad como frecuencia a largo plazo; valor p; intervalo de confianza|Bayesiano: probabilidad como grado de creencia; probabilidad posterior; intervalo de credibilidad"
    ] },
  { t: "El factor de Bayes y cómo leerlo",
    tip: "El factor de Bayes BF₁₀ indica cuántas veces más probables son los datos con H₁ que con H₀, y BF₀₁ es su inverso. A diferencia de p, puede aportar evidencia a favor de H₀. Se lee con la escala de Jeffreys adaptada por Lee y Wagenmakers, simétrica en escala logarítmica y solo orientativa. No es la probabilidad posterior, no mide el tamaño del efecto, y un BF cercano a 1 indica que los datos no discriminan.",
    v: [
      "Factor de Bayes (BF₁₀)=Razón entre la probabilidad de los datos con H₁ y con H₀",
      "BF₀₁=Inverso de BF₁₀, que expresa la evidencia a favor de H₀",
      "Evidencia anecdótica=BF₁₀ entre 1 y 3",
      "Evidencia moderada=BF₁₀ entre 3 y 10",
      "Evidencia extrema=BF₁₀ por encima de 100",
      "Escala de Jeffreys=Bandas orientativas de evidencia adaptadas por Lee y Wagenmakers",
      "Priori JZS=Cauchy centrada en 0 para δ en la t bayesiana (Rouder et al., 2009)",
      "Anchura por defecto=Valor 0,707 de la Cauchy en JASP y jamovi"
    ],
    g: [
      "Un BF₁₀ de 0,2 equivale a un BF₀₁ de ___.|5|0,8|2",
      "Un BF₁₀ de 20 indica evidencia ___ a favor de H₁.|fuerte|moderada|extrema",
      "En escala logarítmica, un BF₁₀ de 10 y uno de 1/10 representan la misma ___ de evidencia.|fuerza|dirección|probabilidad",
      "Si el efecto observado es modesto, una priori más ancha produce un BF₁₀ ___.|menor|mayor|idéntico",
      "La priori JZS asigna a δ una distribución ___ centrada en 0.|de Cauchy|normal|uniforme"
    ],
    tf: [
      "Un BF₁₀ de 3 significa que H₁ es tres veces más probable que H₀.|F|Solo si las odds previas eran 1. El BF compara la probabilidad de los datos, no la de las hipótesis.",
      "Un BF₁₀ cercano a 1 aporta evidencia a favor de H₀.|F|Indica que los datos no discriminan entre las hipótesis: hacen falta más datos.",
      "Con mucha muestra, un efecto pequeño puede dar un BF enorme.|V",
      "Se discute si las prioris por defecto, como la Cauchy de anchura 0,707, son adecuadas para cada área.|V"
    ],
    q: [
      "Un estudio obtiene un BF₁₀ de 3, y el equipo partía de odds previas de 0,25 a favor de H₁. ¿Qué hipótesis es más plausible tras los datos?|H₀, con odds finales de 0,75|H₁, porque el BF supera a 1|H₁, tres veces más que H₀|0,25 × 3 da 0,75: H₀ sigue siendo más plausible. El BF no es la probabilidad posterior.",
      "Un análisis da un BF₁₀ de 0,05. ¿Cómo se interpreta?|Evidencia fuerte a favor de H₀|Evidencia anecdótica a favor de H₁|Un 5 % de probabilidad de H₁|BF₀₁ vale 20: los datos son veinte veces más probables con H₀. El BF no es una probabilidad.",
      "¿Qué ventaja clave tiene el factor de Bayes frente al valor p?|Puede aportar evidencia a favor de H₀|Mide directamente el tamaño del efecto|No necesita especificar ninguna H₁|El BF puede apoyar a H₀, no solo «no rechazarla». No mide el efecto y exige concretar H₁ con una priori.",
      "¿Qué anchura usan por defecto JASP y jamovi para la Cauchy de la t bayesiana?|0,707|1|1,414|Con 0,707 se espera que la mitad de los efectos plausibles estén entre −0,707 y 0,707."
    ],
    inc: [
      "Sobre el factor de Bayes|Mide el tamaño del efecto observado|Puede aportar evidencia a favor de H₀|Depende de la priori asignada a H₁|El BF no mide el tamaño del efecto: con mucha muestra, un efecto pequeño puede dar un BF enorme."
    ],
    seq: [],
    cls: [
      "Dirección de la evidencia|A favor de H₁: BF₁₀ de 6; BF₀₁ de 0,2; BF₁₀ de 40|A favor de H₀: BF₁₀ de 0,2; BF₀₁ de 8; BF₁₀ de 0,01"
    ] },
  { t: "Análisis frecuentista y bayesiano en paralelo con JASP y jamovi",
    tip: "JASP y jamovi son programas libres que permiten pedir el mismo análisis en versión clásica y bayesiana. En el ejemplo del programa de actividad física, p es 0,047, pero el IC de d va de 0,01 a 0,89 y el BF₁₀ es 1,33, evidencia anecdótica. Con prioris más anchas, el BF baja hasta 0,84. Los dos enfoques indican un efecto incierto: conviene ampliar la muestra o replicar.",
    v: [
      "JASP=Programa libre que ofrece cada análisis en versión clásica y bayesiana con tablas APA",
      "jamovi=Programa libre basado en R que puede ampliarse con módulos",
      "Módulo ESCI=Herramienta de Calin-Jageman orientada a la estimación con IC",
      "G∗Power=Programa habitual para calcular potencia y tamaños muestrales",
      "Fila de Welch en SPSS=«No se asumen varianzas iguales» en Comparar medias",
      "Priori ancha=Cauchy de anchura 1 o 1,414, que da más peso a los efectos grandes",
      "Estimación imprecisa=IC compatible a la vez con un efecto casi nulo y con uno grande",
      "Conclusión conjunta=Ambos enfoques señalan un efecto incierto que pide más datos"
    ],
    g: [
      "En el ejemplo, la t de Welch fue de 2,02 con ___ grados de libertad.|77,84|78|80",
      "Con la priori por defecto, el BF₁₀ del ejemplo fue de ___.|1,33|0,84|2,02",
      "Con odds previas de 1 y un BF₁₀ de 1,33, la probabilidad posterior de H₁ es aproximadamente ___.|0,57|0,75|0,33",
      "La versión 0.95 de JASP (2025) incluye un módulo ESCI de ___.|Calin-Jageman|Rouder|Lakens",
      "En SPSS, la t de Welch se lee en la fila «No se asumen varianzas ___».|iguales|distintas|combinadas"
    ],
    tf: [
      "En el ejemplo, p de 0,047 y BF₁₀ de 1,33 se contradicen: uno indica efecto y el otro no.|F|No se contradicen: ambos indican un efecto incierto. El BF deja más claro que un p justo bajo 0,05 aporta poca evidencia.",
      "Con la priori muy ancha, de anchura 1,414, el BF del ejemplo pasa a favorecer levemente a H₀.|V",
      "El IC 95 % de d, de 0,01 a 0,89, indica una estimación muy precisa del efecto del programa.|F|Es muy imprecisa: los datos son compatibles con un efecto casi nulo y con uno grande.",
      "Con grupos de igual tamaño, la t bayesiana coincide en valor con la de Welch y solo cambian los gl.|V"
    ],
    q: [
      "Un estudio de bienestar obtiene p de 0,047, d de 0,45 con IC de 0,01 a 0,89 y BF₁₀ de 1,33. ¿Qué conclusión es la más adecuada?|La evidencia es débil y conviene replicar|El programa funciona, pues p es menor que 0,05|Los datos apoyan que el programa no funciona|Un BF₁₀ de 1,33 es evidencia anecdótica y el IC es muy ancho. Lo razonable es ampliar la muestra o replicar.",
      "¿Cómo se describiría el factor de Bayes del ejemplo en el informe?|Evidencia anecdótica a favor de una diferencia|Evidencia moderada a favor de una diferencia|Evidencia anecdótica a favor de H₀|Con BF₁₀ de 1,33 y la priori de Cauchy por defecto, la evidencia es anecdótica a favor de una diferencia.",
      "¿Qué muestra el análisis de sensibilidad del ejemplo?|Que la conclusión no cambia|Que el BF crece con prioris anchas|Que la priori ancha confirma el efecto|El BF va de 1,33 a 0,84: con todas las prioris, no hay evidencia clara en ningún sentido.",
      "¿Qué programa sigue siendo habitual para calcular la potencia y el tamaño muestral?|G∗Power|JASP|jamovi|JASP y jamovi ofrecen análisis clásicos y bayesianos, pero para la potencia sigue siendo habitual G∗Power."
    ],
    inc: [
      "Sobre JASP y jamovi|Solo ofrecen análisis bayesianos|jamovi se basa en R y admite módulos|JASP produce tablas con formato APA|JASP permite pedir el mismo análisis en versión clásica y bayesiana."
    ],
    seq: [
      "Leer en paralelo un análisis clásico y uno bayesiano|Análisis clásico con p e IC>Factor de Bayes con la priori por defecto>Sensibilidad con prioris más anchas>Conclusión conjunta"
    ],
    cls: [
      "Programa|JASP: versión clásica y bayesiana; módulo ESCI; tablas en formato APA|jamovi: basado en R; ampliable con módulos; versión 2.7.x"
    ] }
] },
{ n: 7, t: "Supuestos del modelo lineal: linealidad y normalidad", cap: 3, pir: "media", mods: [
  { t: "Qué separa una prueba paramétrica de una no paramétrica",
    tip: "Las pruebas paramétricas (t, ANOVA, Pearson, regresión) estiman parámetros suponiendo un modelo para el error y son las más potentes si sus supuestos se cumplen. Las no paramétricas usan rangos o signos, toleran mejor los extremos y encajan con variables ordinales, pero contrastan otra hipótesis. La prueba se elige por la pregunta y el diseño, no por un paso previo de Shapiro-Wilk y Levene.",
    v: [
      "Prueba paramétrica=Estima parámetros suponiendo un modelo para el error, normalmente normal",
      "Prueba no paramétrica=Se basa en rangos o signos, con menos supuestos sobre la forma",
      "Rangos=Posiciones que ocupan las puntuaciones al ordenarlas",
      "Modelo lineal general=Marco común de la t, el ANOVA, la regresión y el ANCOVA",
      "t de Welch=Referencia actual para comparar dos grupos independientes",
      "Mann-Whitney=Alternativa por rangos para dos grupos independientes",
      "Wilcoxon=Alternativa por rangos para las mismas personas medidas dos veces",
      "χ² o McNemar=Análisis para variables categóricas en el árbol de decisión"
    ],
    g: [
      "Si los supuestos se cumplen, las pruebas no paramétricas son algo ___ potentes.|menos|más|igual de",
      "Con una variable dependiente ___, la opción natural es una prueba no paramétrica.|ordinal|cuantitativa|continua",
      "Mann-Whitney no compara medias, sino si las puntuaciones de un grupo tienden a ___ a las del otro.|superar|igualar|duplicar",
      "Ante los valores extremos, la sensibilidad de las pruebas paramétricas es ___.|alta|baja|nula",
      "La t, el ANOVA, la regresión y el ANCOVA son casos del modelo lineal ___.|general|mixto|generalizado"
    ],
    tf: [
      "Las pruebas no paramétricas usan los valores originales y por eso toleran peor los extremos.|F|Usan rangos o signos, y por eso toleran mejor los valores extremos que las paramétricas.",
      "Para dos grupos independientes, la prueba de referencia ya es la t de Welch.|V",
      "En el árbol de decisión, las variables categóricas se analizan con Mann-Whitney.|F|Se analizan con χ² o McNemar. Mann-Whitney es para dos grupos independientes con variable ordinal o cuantitativa.",
      "La t, el ANOVA y la regresión comparten supuestos porque forman parte del mismo marco.|V"
    ],
    q: [
      "Se compara la calidad del sueño entre quienes usan el móvil en la cama y quienes no, medida con una sola pregunta de cuatro categorías ordenadas. ¿Qué prueba encaja mejor?|Mann-Whitney|Wilcoxon|t de Welch|Son personas distintas y la variable es ordinal. Wilcoxon es para las mismas personas medidas dos veces.",
      "Se mide con un cuestionario de 0 a 21 la calidad del sueño de los mismos estudiantes antes y después de sacar el móvil del dormitorio. ¿Qué prueba de referencia corresponde?|t relacionada|t de Welch|Mann-Whitney|Es un diseño intrasujeto con variable cuantitativa: t relacionada, con Wilcoxon como alternativa por rangos.",
      "¿Qué rasgo es propio de las pruebas paramétricas?|Usan los valores originales|Trabajan con rangos o signos|Resisten bien a los atípicos|Usan los valores originales y estiman parámetros, por eso la media se desplaza ante los atípicos.",
      "¿Qué decide en primer lugar qué prueba usar?|La pregunta y el diseño|El resultado de Shapiro-Wilk|El resultado de Levene|Antes que los supuestos, importa qué se compara, si se mide a personas distintas o a las mismas y el tipo de variable."
    ],
    inc: [
      "Sobre las pruebas no paramétricas|Comparan las medias de los grupos|Trabajan con rangos o signos|Toleran mejor los valores extremos|Contrastan otra hipótesis: si las puntuaciones de un grupo tienden a superar a las del otro."
    ],
    seq: [],
    cls: [
      "Diseño|Grupos independientes: t de Welch; Mann-Whitney; Kruskal-Wallis|Mismas personas: t relacionada; Wilcoxon; Friedman"
    ] },
  { t: "Resultado = modelo + error: linealidad y aditividad",
    tip: "Field (2024) resume el análisis de datos como resultado igual a modelo más error: cada puntuación se descompone en lo pronosticado y el residuo. Casi todos los supuestos hablan de los errores, no de los datos brutos. El más importante es la linealidad y aditividad: si falla, el modelo está mal especificado y ninguna corrección de la normalidad o de las varianzas lo arregla. Se diagnostica con gráficos.",
    v: [
      "Residuo=Diferencia entre la puntuación observada y la pronosticada",
      "Linealidad=La relación de cada predictor cuantitativo con el resultado se describe con una recta",
      "Aditividad=Los efectos de los predictores se suman sin depender unos de otros",
      "Interacción=El efecto de un predictor cambia según el valor de otro",
      "Modelo mal especificado=Sus coeficientes describen una relación que no existe en esa forma",
      "Pronóstico en una t=La media del grupo de cada persona",
      "Cuarteto de Anscombe=Un mismo coeficiente que resume patrones de dispersión muy distintos",
      "Curva en U=Patrón de residuos que indica que falta un término no lineal"
    ],
    g: [
      "En una regresión, el residuo es la distancia ___ de cada punto a la recta.|vertical|horizontal|perpendicular",
      "Según Field (2024), el supuesto más importante es la linealidad y la ___.|aditividad|normalidad|homocedasticidad",
      "En los diseños factoriales, líneas no ___ en el gráfico de medias sugieren interacción.|paralelas|crecientes|rectas",
      "Según Field (2024), transformar el ___ para lograr linealidad es útil.|predictor|resultado|residuo",
      "Si los efectos de dos predictores no se suman, el modelo debe incluir su ___.|interacción|covarianza|mediana"
    ],
    tf: [
      "Con un predictor de grupos, el modelo estima una media por grupo sin imponer ninguna forma.|V",
      "Si falla la linealidad, basta con corregir la normalidad de los residuos.|F|Un modelo mal especificado no se arregla corrigiendo la normalidad ni las varianzas: hay que cambiar el modelo.",
      "Casi todos los supuestos del modelo lineal se refieren a los errores, no a los datos en bruto.|V",
      "Si el ejercicio reduce más la ansiedad en quienes duermen bien, basta un modelo con ejercicio y sueño sin interacción.|F|Ese modelo promediaría dos efectos distintos: falla la aditividad y hay que incluir la interacción."
    ],
    q: [
      "La nota de un examen crece deprisa con las primeras horas semanales de estudio y se aplana después. Si se ajusta una recta, ¿qué ocurrirá?|Infraestimará la zona intermedia|Sobrestimará la zona intermedia|Acertará en todo el rango|La recta infraestima la nota en la zona intermedia y la sobrestima en los extremos.",
      "En un gráfico de residuos frente a pronosticados aparece una curva en U. ¿Qué indica?|Falta un término no lineal|Hay heterocedasticidad|Los errores son dependientes|La curva en U señala no linealidad. Un embudo indicaría heterocedasticidad.",
      "En una t para dos grupos, ¿qué pronostica el modelo para cada persona?|La media de su grupo|La media de toda la muestra|Su puntuación observada|En la t y el ANOVA, el residuo es la diferencia entre la puntuación y la media del grupo.",
      "¿En qué análisis pesa más el supuesto de linealidad?|Regresión y ANCOVA|t y ANOVA de un factor|Mann-Whitney y Wilcoxon|Con un predictor de grupos no se impone ninguna forma. El supuesto pesa en la regresión y el ANCOVA."
    ],
    inc: [
      "Sobre linealidad y aditividad|La aditividad exige que haya interacción|La linealidad atañe a predictores cuantitativos|Un modelo mal especificado da coeficientes engañosos|Aditividad significa que los efectos se suman. Si hay interacción, el supuesto falla y el modelo debe incluirla."
    ],
    seq: [],
    cls: [
      "Diagnóstico gráfico|Linealidad: diagrama de dispersión; curva en U en los residuos|Aditividad: gráfico de medias; líneas no paralelas"
    ] },
  { t: "Residuos normales y teorema central del límite",
    tip: "El modelo lineal no exige que los datos sean normales, sino los residuos o la distribución muestral del estimador. En regresión nunca se exige que X o Y sean normales, y en la t o el ANOVA se mira la forma dentro de cada grupo. La normalidad importa para la inferencia, no para estimar. El TCL aproxima a la normal la distribución muestral de la media al crecer n, pero no protege frente a los atípicos.",
    v: [
      "Distribución muestral=Distribución de un estimador a lo largo de muchas muestras",
      "Teorema central del límite=La media muestral se aproxima a la normal al crecer n",
      "Robusto=Procedimiento que sigue funcionando si un supuesto no se cumple del todo",
      "Box (1953)=Autor que acuñó el término para los procedimientos resistentes a fallos de supuestos",
      "Blanca et al. (2017)=Simularon un ANOVA de tres grupos con el error tipo I controlado sin normalidad",
      "Blanca et al. (2013)=En 693 variables psicológicas, el 80 % tenía asimetría y curtosis moderadas",
      "Asimetría de la media=En una población exponencial vale 2/√n",
      "Wilcox (2022)=Advierte de que el TCL no corrige la sensibilidad de la media a los atípicos"
    ],
    g: [
      "Con una población exponencial y n de 100, la asimetría teórica de la media vale ___.|0,20|0,37|0,89",
      "La normalidad hace falta para la ___, no para calcular las estimaciones.|inferencia|descripción|codificación",
      "En la t, si dos grupos difieren mucho, la distribución conjunta puede salir ___ aunque cada grupo sea normal.|bimodal|exponencial|uniforme",
      "El TCL es ___: no dice a partir de qué n exacto funciona.|asintótico|exacto|bayesiano",
      "Blanca et al. (2017) no evaluaron la potencia ni la ___.|heterocedasticidad|independencia|normalidad"
    ],
    tf: [
      "Con n mayor que 30, la normalidad de la distribución muestral está garantizada.|F|La regla es orientativa: con asimetrías fuertes o colas pesadas pueden hacer falta muestras mucho mayores.",
      "En regresión, un predictor puede ser asimétrico o tener solo dos valores.|V",
      "Si los errores son normales, la distribución muestral de la media también lo es, para cualquier n.|V",
      "Con una muestra grande, el TCL elimina el efecto de los atípicos sobre la media.|F|No lo arregla: unos pocos extremos desplazan la media e hinchan la varianza, aunque n sea grande (Wilcox, 2022)."
    ],
    q: [
      "Un investigador va a hacer una regresión y descarta su predictor, los ingresos, porque es muy asimétrico. ¿Qué le diría Field (2024)?|No se exige que X sea normal|Debe transformar antes la Y|Debe usar una prueba no paramétrica|Lo que debe ser aproximadamente normal son los residuos o la distribución muestral, nunca X o Y.",
      "Se hace un ANOVA de tres grupos con distribuciones no normales y tamaños desiguales. Según Blanca et al. (2017), ¿qué ocurre con el error tipo I?|Queda controlado|Se duplica|Se vuelve muy liberal|En su simulación, el error tipo I quedó controlado en todos los casos. No evaluaron potencia ni heterocedasticidad.",
      "¿Por qué con n de 30 y una población exponencial no conviene confiar del todo en el TCL?|La media aún conserva asimetría|La media ya es exactamente normal|El TCL solo vale con n pequeño|Con n de 30 la asimetría de la media es 0,37: se ha reducido, pero no ha desaparecido.",
      "¿Qué debe ser aproximadamente normal en una t para dos grupos?|La forma dentro de cada grupo|Todas las puntuaciones juntas|La variable que define los grupos|Los residuos son las desviaciones respecto a la media del grupo. Mezclar grupos puede crear una forma bimodal."
    ],
    inc: [
      "Sobre la normalidad en el modelo lineal|Se exige que la variable Y sea normal|Basta con residuos aproximadamente normales|Pesa más si n es pequeño y los errores muy asimétricos|Lo que importa son los residuos o la distribución muestral, no X ni Y en bruto."
    ],
    seq: [],
    cls: [
      "Qué exige el modelo lineal|Debe ser aproximadamente normal: residuos; distribución muestral del estimador|No necesita ser normal: predictor X; variable Y en bruto; puntuaciones de todos los grupos mezcladas"
    ] },
  { t: "Diagnosticar la normalidad: gráficos, índices y pruebas formales",
    tip: "Hay tres herramientas complementarias: gráficos, índices tipificados y pruebas formales. El gráfico Q-Q es el más informativo: un arco indica asimetría, y una S, colas pesadas o ligeras. La z de asimetría crece con n aunque la forma no cambie. Shapiro-Wilk es la prueba más potente, pero apenas detecta nada con n pequeño, señala desviaciones triviales con n grande y su p mayor que 0,05 no demuestra normalidad.",
    v: [
      "Gráfico Q-Q=Enfrenta los cuantiles observados con los esperados en una normal",
      "Patrón en arco=Puntos curvados respecto a la diagonal, señal de asimetría",
      "Patrón en S=Puntos alejados de la diagonal en ambos extremos, por colas pesadas o ligeras",
      "Tramos escalonados=Señal de mezcla de grupos o de valores muy repetidos",
      "z de asimetría=Índice de asimetría dividido por su error típico",
      "Corrección de Lilliefors=Ajuste de Kolmogorov-Smirnov cuando media y DT se estiman con la muestra",
      "Shapiro-Wilk=Prueba de normalidad más potente según Razali y Wah (2011)",
      "Kolmogorov-Smirnov=Compara la distribución acumulada observada con la teórica"
    ],
    g: [
      "Con muestras pequeñas, el corte orientativo para la z de asimetría es ___ en valor absoluto.|1,96|2,58|3,29",
      "Según Razali y Wah (2011), tras Shapiro-Wilk la prueba más potente es ___.|Anderson-Darling|Lilliefors|Kolmogorov-Smirnov",
      "El error típico de la curtosis es aproximadamente el ___ del de la asimetría.|doble|triple|cuádruple",
      "En SPSS, las pruebas de normalidad se piden en Analizar, Estadísticos descriptivos, ___.|Explorar|Frecuencias|Descriptivos",
      "Con n de 400 y la misma asimetría de 0,62, la z de asimetría sería ___.|5,08|1,66|2,80"
    ],
    tf: [
      "Un p mayor que 0,05 en Shapiro-Wilk demuestra que la población es normal.|F|No demuestra normalidad, y su p tampoco es la probabilidad de que los datos sean normales.",
      "Con muestras muy grandes importan más el índice y el gráfico que la z de asimetría.|V",
      "SPSS aplica la corrección de Lilliefors a Kolmogorov-Smirnov.|V",
      "Las pruebas formales de normalidad tienen más potencia con muestras pequeñas, cuando la normalidad más importa.|F|Es al revés: con n pequeño apenas detectan desviaciones, y con n grande señalan desviaciones triviales."
    ],
    q: [
      "En un grupo de 36 estudiantes, la asimetría de la latencia de sueño es 1,10 con un error típico de 0,393. ¿Cuánto vale su z y qué indica?|2,80, cola derecha apreciable|1,66, dentro de lo esperable|0,43, forma casi simétrica|1,10 / 0,393 ≈ 2,80, por encima de 1,96 y de 2,58: hay cola derecha, esperable en una latencia.",
      "Un gráfico Q-Q muestra los puntos alejados de la diagonal en ambos extremos, en forma de S. ¿Qué sugiere?|Colas más pesadas o ligeras|Una asimetría positiva|Una mezcla de dos grupos|La S indica colas distintas de las de la normal. El arco indica asimetría, y los escalones, mezcla de grupos.",
      "¿Por qué la z de asimetría pierde utilidad con muestras grandes?|Su error típico disminuye con n|Su error típico aumenta con n|La asimetría crece con n|Con n grande, una asimetría mínima da una z enorme. Por eso se usan cortes más laxos o se mira el índice.",
      "¿Qué hace la corrección de Lilliefors?|Ajusta K-S a parámetros estimados|Aumenta la potencia de Shapiro-Wilk|Corrige la asimetría de los datos|Kolmogorov-Smirnov la necesita si la media y la desviación típica se estiman con la misma muestra."
    ],
    inc: [
      "Sobre las pruebas formales de normalidad|Su p indica la probabilidad de normalidad|Contrastan que la población de origen es normal|Con n grande detectan desviaciones triviales|Su p no es la probabilidad de que los datos sean normales, y un p mayor que 0,05 no demuestra normalidad."
    ],
    seq: [
      "Diagnóstico de la asimetría con z|Obtener la asimetría y su error típico>Dividir la asimetría por su error típico>Comparar con el corte según el tamaño muestral>Mirar el Q-Q y el diagrama de caja antes de decidir"
    ],
    cls: [
      "Herramienta de diagnóstico|Gráficos: histograma; diagrama de caja; gráfico Q-Q|Índices: z de asimetría; z de curtosis|Pruebas formales: Shapiro-Wilk; Kolmogorov-Smirnov; Anderson-Darling"
    ] }
] },
{ n: 8, t: "Varianzas, independencia y qué hacer cuando fallan los supuestos", cap: 3, pir: "media", mods: [
  { t: "Varianzas iguales y la prueba de Levene",
    tip: "La homocedasticidad exige igual varianza de los residuos en todos los niveles del predictor. Si falla, no cambian las estimaciones, pero sí sus errores típicos, y con ellos los p y los IC. Con tamaños distintos, si el grupo pequeño es el más variable, Student se vuelve liberal, y si lo es el grande, conservadora. Con n iguales la F es relativamente robusta. Levene tiene los mismos límites que las pruebas de normalidad, por eso se recomienda usar Welch directamente.",
    v: [
      "Homocedasticidad=Igual varianza de los residuos en todos los niveles del predictor",
      "Heterocedasticidad=Varianza de los residuos distinta según el nivel del predictor",
      "Errores esféricos=Etiqueta de Field que agrupa homocedasticidad e independencia",
      "Varianza combinada=Estimación de Student ponderada por los gl de cada grupo",
      "Prueba liberal=Rechaza H₀ verdadera más a menudo de lo que indica α",
      "Prueba conservadora=Rechaza H₀ verdadera menos de lo nominal y pierde potencia",
      "Fmax de Hartley=Varianza mayor dividida por la menor, solo orientativa",
      "Prueba de Levene=ANOVA sobre las desviaciones absolutas respecto a la media de cada grupo"
    ],
    g: [
      "La variante de Brown y Forsythe (1974) usa la ___ en lugar de la media.|mediana|moda|media recortada",
      "Con varianzas de 144 y 36, la Fmax de Hartley vale ___.|4|2|108",
      "En la simulación ilustrativa del caso A, Student rechazó H₀ verdadera en torno al ___ de las veces.|18 %|5 %|10 %",
      "Box (1954) anticipó que la F es relativamente robusta ante varianzas desiguales si los n son ___.|iguales|grandes|pequeños",
      "Un ___ en el gráfico de residuos frente a pronosticados indica heterocedasticidad.|embudo|arco|escalón"
    ],
    tf: [
      "Con heterocedasticidad cambian las estimaciones de las medias, pero no sus errores típicos.|F|Es al revés: las estimaciones no cambian, pero sí sus errores típicos, y con ellos los p y los IC.",
      "Los errores esféricos de Field son la misma condición que la esfericidad del ANOVA de medidas repetidas.|F|Son cosas distintas: los errores esféricos agrupan homocedasticidad e independencia.",
      "Con tamaños de grupo iguales, los errores típicos de Student y de Welch coinciden.|V",
      "La tabla de Levene que da Explorar en SPSS incluye una fila basada en la mediana.|V"
    ],
    q: [
      "Una investigadora compara un grupo de 10 personas con DT de 6 y otro de 40 con DT de 12 mediante la t de Student. ¿Qué cabe esperar?|Prueba conservadora con menos potencia|Prueba liberal con más falsos positivos|Error tipo I igual al nominal|El grupo grande es el más variable: la varianza combinada se le parece y Student sobrestima el error típico.",
      "¿Sobre qué datos hace un ANOVA la prueba de Levene?|Desviaciones absolutas respecto a la media|Rangos de las puntuaciones de cada grupo|Residuos consecutivos ordenados en el tiempo|Si un grupo es más disperso, sus desviaciones absolutas respecto a la media serán mayores.",
      "¿En qué situación es más dañina la heterocedasticidad?|Con varianzas y tamaños distintos|Con varianzas distintas y n iguales|Con varianzas iguales y n distintos|El peligro está en combinar varianzas y tamaños de grupo distintos (Zimmerman, 2004).",
      "¿Por qué se recomienda usar Welch directamente en lugar de decidir con Levene?|Levene falla cuando más importa|Levene solo evalúa la normalidad|Welch exige varianzas iguales|Con grupos pequeños y desiguales Levene apenas tiene potencia, y con muestras grandes señala diferencias triviales."
    ],
    inc: [
      "Sobre la prueba de Levene|Evalúa la normalidad de los residuos|Su H₀ es la igualdad de varianzas poblacionales|Su p mayor que 0,05 no demuestra varianzas iguales|Levene evalúa la igualdad de varianzas. Atribuirle la normalidad es una trampa típica."
    ],
    seq: [],
    cls: [
      "Efecto sobre la t de Student|Liberal: grupo pequeño más variable; error típico subestimado|Conservadora: grupo grande más variable; pérdida de potencia"
    ] },
  { t: "Errores independientes y Durbin-Watson",
    tip: "La independencia exige que el residuo de una persona no informe sobre el de otra. Se rompe por agrupamiento, medidas repetidas tratadas como independientes, dependencia temporal o contaminación. Con dependencia positiva, los errores típicos salen demasiado pequeños y el error tipo I se infla, y ni una muestra grande ni una transformación lo arreglan. Durbin-Watson, de 0 a 4, mide la autocorrelación entre residuos consecutivos.",
    v: [
      "Independencia de los errores=El residuo de una observación no informa sobre el de otra",
      "Agrupamiento=Casos que comparten influencias, como alumnos de una misma clase",
      "Dependencia temporal=En registros diarios, el valor de un día se parece al del anterior",
      "Contaminación=Participantes de una misma sesión que comentan las tareas entre ellos",
      "Durbin-Watson=Estadístico de autocorrelación entre residuos consecutivos, de 0 a 4",
      "DW cercano a 2=Sin autocorrelación apreciable",
      "DW por debajo de 2=Autocorrelación positiva, con residuos consecutivos parecidos",
      "DW por encima de 2=Autocorrelación negativa, con residuos consecutivos que alternan"
    ],
    g: [
      "Con dependencia positiva, los IC salen demasiado ___.|estrechos|anchos|asimétricos",
      "Según la regla orientativa de Field, es preocupante un DW menor que 1 o mayor que ___.|3|2|4",
      "DW equivale aproximadamente a 2(1 − r₁), donde r₁ es la correlación entre cada residuo y el ___.|anterior|pronóstico|promedio",
      "En el ejemplo del estrés registrado durante diez días, DW fue de ___.|0,22|1,92|3,10",
      "DW solo detecta la dependencia entre casos consecutivos, no la que procede del ___.|agrupamiento|registro diario|orden de recogida"
    ],
    tf: [
      "Con una muestra suficientemente grande, la falta de independencia deja de ser un problema.|F|El tamaño muestral no la protege: con dependencia, añadir casos aporta menos información de la que aparenta.",
      "Si los casos están ordenados por apellido, el valor de DW depende de ese orden arbitrario.|V",
      "Un DW próximo a 2 indica ausencia de autocorrelación apreciable.|V",
      "Una transformación logarítmica corrige la dependencia entre los errores.|F|Ninguna transformación la corrige: la solución está en el modelo, como medidas repetidas o modelos mixtos."
    ],
    q: [
      "En una regresión con registros diarios, la correlación entre cada residuo y el anterior es de 0,5. ¿Qué DW cabe esperar aproximadamente?|1|2|0,5|DW ≈ 2(1 − r₁), es decir, 2 × 0,5, que da 1: autocorrelación positiva en el límite de lo preocupante.",
      "Se evalúa un programa en 20 aulas y se analiza a los 500 alumnos como casos independientes. ¿Qué problema principal hay?|Errores típicos demasiado pequeños|Errores típicos demasiado grandes|Pérdida de potencia por exceso de casos|El agrupamiento crea dependencia positiva: se trata como nuevo lo que es en parte repetido y el error tipo I se infla.",
      "¿Cuál es la primera herramienta para diagnosticar la independencia?|Conocer el diseño|El estadístico de Durbin-Watson|La prueba de Levene|Lo primero es saber quién se midió, cuándo, dónde y con quién. DW solo sirve si el orden de los casos tiene sentido.",
      "¿Qué solución corresponde a unos errores no independientes por agrupamiento?|Un modelo que incluya el agrupamiento|Una transformación de la variable resultado|Eliminar los casos más parecidos|La solución está en el modelo: modelos mixtos, pruebas de medidas repetidas o modelos para series temporales."
    ],
    inc: [
      "Sobre Durbin-Watson|Detecta la dependencia por agrupamiento|Toma valores entre 0 y 4|Exige que el orden de los casos signifique algo|DW solo detecta la dependencia entre casos consecutivos, no la que procede del agrupamiento."
    ],
    seq: [],
    cls: [
      "Supuesto que evalúa|Normalidad: Shapiro-Wilk; Kolmogorov-Smirnov|Varianzas iguales: Levene; Brown-Forsythe|Independencia: Durbin-Watson"
    ] },
  { t: "Valores atípicos y transformaciones",
    tip: "La media, la DT, la correlación y la pendiente son muy sensibles a unos pocos extremos. Se detectan con z mayor que 3,29 en valor absoluto, el diagrama de caja y, en regresión, medidas de influencia como la distancia de Cook. Un atípico puede enmascararse al hinchar la DT. Qué hacer depende de su origen, con criterios fijados antes e informando con y sin esos casos. Transformar el resultado cambia la hipótesis y rara vez compensa.",
    v: [
      "Valor atípico=Observación muy alejada del resto",
      "Enmascaramiento=El propio extremo hincha la DT y reduce su z",
      "Criterio del diagrama de caja=Más allá de 1,5 veces el rango intercuartílico desde los cuartiles",
      "Distancia de Cook=Medida de influencia de un caso en la regresión",
      "Transformación=Aplicar la misma función a todos los valores de una variable",
      "Logaritmo=Para asimetría positiva fuerte, sin admitir 0 ni negativos",
      "Raíz cuadrada=Para asimetría positiva moderada y recuentos",
      "Inversa=Para asimetría positiva muy fuerte, invirtiendo el orden de los valores"
    ],
    g: [
      "En los datos de mensajes de texto, la media es 19,33 y la mediana, ___.|13|15|19",
      "El valor 80 de los mensajes tiene una z de solo ___, por debajo de 3,29.|2,91|3,54|1,96",
      "Quitar el valor 80 baja la media de los mensajes de 19,33 a ___.|13,82|13,38|13,75",
      "Con log(X), comparar medias equivale a comparar medias ___ en la escala original.|geométricas|aritméticas|armónicas",
      "En los mensajes, la asimetría original de 2,60 baja con el logaritmo a ___.|0,75|1,82|1,25"
    ],
    tf: [
      "Eliminar atípicos hasta que el resultado sea significativo es una forma de p-hacking.|V",
      "Un valor legítimo pero extremo debe eliminarse siempre para no distorsionar la media.|F|Se conserva y se usan métodos robustos o un análisis de sensibilidad. Eliminar se reserva a errores no corregibles.",
      "Sigue en debate si las transformaciones de la variable resultado deben sustituirse por métodos robustos.|V",
      "Según Field (2024), transformar la variable resultado para corregir la heterocedasticidad suele compensar.|F|Rara vez compensa: es útil transformar el predictor para lograr linealidad, pero con el resultado suelen ser mejores los métodos robustos."
    ],
    q: [
      "En una base de datos aparece una edad de 233 años por un dígito duplicado. ¿Qué es lo razonable?|Corregirla si se puede comprobar|Conservarla y usar una media recortada|Excluirla con un criterio previo de población|Es un error de registro: se corrige si se puede comprobar y, si no, se elimina el dato.",
      "En un estudio con población no clínica, un participante indica estar en tratamiento por el mismo problema que se mide. ¿Qué procede?|Excluirlo con un criterio fijado antes|Conservarlo y usar métodos robustos|Corregir su puntuación|Es un caso ajeno a la población: se excluye con un criterio fijado de antemano.",
      "¿Qué inconveniente tiene transformar la variable resultado?|Cambia la hipótesis contrastada|Elimina los valores atípicos|Impide calcular el tamaño del efecto|Comparar medias de log(X) es comparar medias geométricas, y los resultados quedan en unidades transformadas.",
      "¿Qué transformación invierte el orden de los valores, por lo que conviene reflejar la variable?|La inversa|El logaritmo|La raíz cuadrada|La inversa, 1/X, se usa con asimetría positiva muy fuerte e invierte el orden de los valores."
    ],
    inc: [
      "Sobre los atípicos|Basta la regla de z mayor que 3,29 para detectarlos siempre|Los criterios de exclusión se fijan antes de ver los resultados|Si la decisión es discutible, se informa con y sin esos casos|Con muestras pequeñas el propio atípico hincha la DT y se enmascara: conviene mirar también el diagrama de caja."
    ],
    seq: [],
    cls: [
      "Origen del atípico|Corregir o eliminar: error de registro; edad de 233 años|Excluir con criterio previo: caso ajeno a la población; persona en tratamiento en una muestra no clínica|Conservar con métodos robustos: valor legítimo pero extremo; 80 mensajes reales al día"
    ] },
  { t: "Métodos robustos, bootstrap y alternativas no paramétricas",
    tip: "Cuando los supuestos fallan de forma relevante, hay mejores opciones que forzar los datos: medias recortadas o winsorizadas con la prueba de Yuen, M-estimadores, errores típicos HC3 y bootstrap (Efron, 1979). Las pruebas no paramétricas tienen supuestos propios y contrastan otra hipótesis. Elegir la prueba según Shapiro-Wilk y Levene altera el error tipo I (Zimmerman, 2004): lo recomendado es planificar, usar Welch por defecto y revisar los residuos.",
    v: [
      "Media recortada al 20 %=Media tras eliminar el 20 % de valores más bajos y el 20 % más altos",
      "Winsorizar=Igualar los extremos al valor más bajo o más alto que queda tras el recorte",
      "Prueba de Yuen=Compara dos medias recortadas sin suponer varianzas iguales",
      "M-estimadores=Dan menos peso a los valores cuanto más se alejan del centro",
      "HC3=Errores típicos robustos a la heterocedasticidad en regresión",
      "Bootstrap=Remuestreo con reposición para aproximar la distribución de un estadístico (Efron, 1979)",
      "IC BCa=Intervalo bootstrap que corrige el sesgo y la asimetría",
      "Procedimiento en dos etapas=Elegir la prueba según una prueba preliminar de supuestos"
    ],
    g: [
      "En los datos de mensajes, la media recortada al 20 % es ___.|13,38|13,75|19,33",
      "El IC ___ toma los percentiles 2,5 y 97,5 de la distribución bootstrap.|percentil|BCa|asintótico",
      "Los errores típicos HC3 mantienen las ___ de mínimos cuadrados y corrigen sus errores típicos.|pendientes|varianzas|medianas",
      "Mann-Whitney evalúa si la probabilidad de que X supere a Y vale ___, no la igualdad de medianas.|0,5|0|1",
      "Zimmerman (2004) recomienda aplicar la prueba de varianzas ___ de forma incondicional.|separadas|combinadas|iguales"
    ],
    tf: [
      "Recortar el 20 % de cada extremo equivale a eliminar los datos que molestan.|F|Es un estimador del centro definido de antemano, no una forma de descartar datos incómodos.",
      "El bootstrap no hace milagros con muestras muy pequeñas o con datos no independientes.|V",
      "Mann-Whitney y Kruskal-Wallis también se ven afectadas por la heterocedasticidad.|V",
      "El procedimiento en dos etapas mantiene el error tipo I de la prueba final en su nivel nominal.|F|Lo altera, porque la elección depende de pruebas preliminares con potencia variable (Zimmerman, 2004)."
    ],
    q: [
      "Un equipo compara dos grupos con colas pesadas y algunos extremos legítimos, y quiere contrastar medias recortadas sin suponer varianzas iguales. ¿Qué prueba corresponde?|Yuen|Levene|Wilcoxon|La prueba de Yuen combina el recorte con un error típico adecuado y no supone varianzas iguales.",
      "¿Qué hace falta para que Mann-Whitney permita hablar de medianas?|Igual forma y dispersión|Más de 30 casos por grupo|Distribuciones normales|Mann-Whitney compara medianas solo si las distribuciones difieren únicamente en su posición.",
      "¿Qué añade el IC BCa al IC percentil?|Corrige el sesgo y la asimetría|Usa menos remuestras bootstrap|Supone una distribución normal|El percentil toma los percentiles 2,5 y 97,5. El BCa corrige además el sesgo y la asimetría.",
      "Un método robusto y uno clásico dan resultados muy distintos con los mismos datos. ¿Qué procede?|Comunicar la discrepancia|Informar solo el significativo|Elegir el de menor valor p|La estrategia se decide antes de ver los resultados, y una discrepancia grande debe comunicarse."
    ],
    inc: [
      "Sobre los métodos robustos|Los M-estimadores eliminan los extremos|La media winsorizada de los mensajes es 13,75|Los HC3 corrigen errores típicos en regresión|Los M-estimadores no eliminan los extremos: les dan menos peso cuanto más se alejan del centro."
    ],
    seq: [
      "Flujo recomendado ante los supuestos|Planificar el análisis según el diseño y la pregunta>Usar Welch por defecto>Revisar los gráficos de residuos>Aplicar un remedio justificado si hay atípicos o colas pesadas>Informar el tamaño del efecto con su IC"
    ],
    cls: [
      "Tipo de alternativa|Robusta: media recortada; prueba de Yuen; M-estimadores; errores típicos HC3|No paramétrica: Mann-Whitney; Kruskal-Wallis; Wilcoxon; Friedman"
    ] }
] }
);

// SAIMAP Psicología · Estadística II · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Dos grupos distintos: Student, Welch y Mann-Whitney", cap: 4, pir: "alta", mods: [
  { t: "La lógica de la prueba t de Student",
    tip: "La t de Student para grupos independientes es un cociente entre señal (la diferencia de medias) y ruido (el error típico de esa diferencia), calculado con una varianza combinada de los dos grupos. Tiene n₁ + n₂ − 2 gl, y con pocos gl sus colas son más pesadas que las de la normal. Supone independencia, normalidad de los residuos y varianzas iguales, aunque Box (1954) mostró que es bastante robusta ante varianzas desiguales si los n son iguales.",
    v: [
      "Gosset=Químico de la cervecería Guinness que publicó la distribución t con seudónimo",
      "Student (1908)=Artículo «The probable error of a mean», publicado en Biometrika",
      "Señal=Diferencia entre las medias, que recoge la variación sistemática",
      "Ruido=Error típico de la diferencia, ligado a la variación no sistemática",
      "Varianza combinada=Media ponderada por gl de las varianzas de los grupos, que supone iguales",
      "gl de Student=n₁ + n₂ − 2 en la prueba para dos grupos independientes",
      "Colas pesadas=Rasgo de la t con pocos gl, que exige valores más extremos para rechazar H₀",
      "Box (1954)=Mostró la robustez de F y t ante varianzas desiguales si los n son iguales"
    ],
    g: [
      "Con 2 gl, el valor crítico bilateral de la t al 5 % es ___.|4,30|2,57|2,04",
      "Con 30 gl, el valor crítico bilateral de la t al 5 % es ___, frente a 1,96 en la normal.|2,04|2,57|2,01",
      "Gosset trabajaba con muestras ___, el caso en que sustituir σ por s deja de ser inocente.|pequeñas|grandes|aleatorias",
      "La varianza combinada solo tiene sentido si las dos poblaciones tienen la misma ___.|varianza|media|forma",
      "El supuesto de normalidad de la t se refiere a los ___, no a los datos brutos.|residuos|grupos|rangos"
    ],
    tf: [
      "Con pocos gl, la distribución t tiene colas más pesadas que la normal porque s también varía de una muestra a otra.|V",
      "La t de Student exige que las puntuaciones brutas de cada grupo sigan una distribución normal.|F|Exige normalidad de los residuos o de la distribución muestral de la diferencia, no de los datos brutos.",
      "Según Box (1954), la t de Student es relativamente robusta ante varianzas desiguales cuando los n son iguales.|V",
      "Con n moderados, el teorema central del límite protege a la t ante cualquier forma de distribución y ante atípicos.|F|Con n moderados ayuda, pero no con cualquier forma de distribución ni ante valores atípicos."
    ],
    q: [
      "Un equipo compara la autoestima de 12 adolescentes que hacen un taller con la de 18 que no lo hacen, con la t de Student. ¿Cuántos gl tiene la prueba?|28|29|30|Los gl son n₁ + n₂ − 2, es decir, 12 + 18 − 2, que da 28.",
      "En la t de Student, ¿qué representa el denominador del estadístico?|El error típico de la diferencia|La diferencia entre las dos medias|La desviación típica del grupo mayor|El denominador es el ruido: el error típico de la diferencia, que depende de cuánto varían las personas dentro de cada grupo.",
      "En el ejemplo de atención plena se obtiene t(48) de 2,04, y el valor crítico bilateral es 2,01. ¿Qué se concluye?|Se rechaza H₀ por poco|No se rechaza H₀ por poco|Se rechaza H₀ con holgura|El estadístico supera por poco el valor crítico (p de 0,047) y queda, justo, en la región de rechazo.",
      "En un estudio con dos grupos, varias personas acaban participando en ambos. ¿Qué supuesto de la t de Student se incumple?|La independencia|La normalidad|La homocedasticidad|En grupos independientes cada persona aporta un dato y pertenece a un solo grupo."
    ],
    inc: [
      "Sobre la t de Student para dos grupos|Con n desiguales tolera varianzas distintas|Combina las varianzas de ambos grupos en una sola|Bajo H₀ sigue una t con n₁ + n₂ − 2 gl|Box (1954) mostró robustez solo con n iguales. Con n desiguales, las varianzas distintas son un problema serio."
    ],
    seq: [
      "Calcular la t de Student|Obtener la media y la DT de cada grupo>Combinar las varianzas en s²ₚ>Calcular el error típico de la diferencia>Dividir la diferencia de medias por ese error típico>Comparar con la t de n₁ + n₂ − 2 gl"
    ],
    cls: [] },
  { t: "Welch por defecto: lo que muestran las simulaciones",
    tip: "La t de Welch (1947) no combina las varianzas: cada grupo aporta la suya al error típico, y los gl de Welch-Satterthwaite no son enteros. Con varianzas y n desiguales, Student pierde el control del error tipo I, mientras que Welch apenas pierde potencia cuando las varianzas son iguales. Por eso se recomienda por defecto (Delacre et al., 2017), sin condicionarla a Levene, porque ese procedimiento en dos etapas altera el error tipo I (Zimmerman, 2004).",
    v: [
      "t de Welch=Versión que usa la varianza de cada grupo, sin combinarlas",
      "Welch-Satterthwaite=Aproximación que da gl no enteros, nunca mayores que n₁ + n₂ − 2",
      "Tasa de rechazo=Proporción de réplicas simuladas en que la prueba rechaza H₀",
      "Bootstrap=Alternativa a Welch cuando hay colas muy pesadas o atípicos influyentes",
      "Delacre et al. (2017)=Revisaron la evidencia de simulación y recomendaron Welch por defecto",
      "Zimmerman (2004)=Mostró que decidir la prueba según Levene altera el error tipo I",
      "Procedimiento en dos etapas=Pasar Levene y elegir Student o Welch según su resultado",
      "Prueba de Yuen=Alternativa con medias recortadas ante colas pesadas o atípicos"
    ],
    g: [
      "Si el grupo pequeño tiene la varianza mayor, la t de Student se vuelve ___.|liberal|conservadora|exacta",
      "Si el grupo grande tiene la varianza mayor, la t de Student se vuelve ___.|conservadora|liberal|robusta",
      "En la simulación, con 10 (DT 2) frente a 40 (DT 1) y H₀ cierta, Student rechazó en un ___ de las réplicas.|18,4 %|5,4 %|0,5 %",
      "La función t.test() de ___ aplica Welch salvo que se indique lo contrario.|R|SPSS|jamovi",
      "Con n pequeños, la prueba de Levene tiene poca ___ para detectar diferencias de varianza.|potencia|robustez|validez"
    ],
    tf: [
      "Los gl de Welch-Satterthwaite pueden superar n₁ + n₂ − 2 cuando las varianzas son muy distintas.|F|Nunca son mayores que n₁ + n₂ − 2, y son tanto menores cuanto más distintas son las varianzas y los n.",
      "Con varianzas iguales y 64 personas por grupo, Student y Welch tuvieron la misma potencia en la simulación.|V",
      "Un p de Levene mayor que 0,05 demuestra que las varianzas poblacionales son iguales.|F|Una prueba no puede demostrar igualdad: un p no significativo no es evidencia de que las varianzas sean iguales.",
      "Si hay colas muy pesadas o atípicos influyentes, Welch no lo arregla todo, porque sigue comparando medias.|V"
    ],
    q: [
      "Un estudio compara 10 pacientes muy heterogéneos (DT 2) con 40 controles homogéneos (DT 1). Si H₀ es cierta, ¿qué cabe esperar de la t de Student?|Que rechace H₀ de más|Que rechace H₀ de menos|Que mantenga el α nominal|Con el grupo pequeño más variable, s²ₚ queda dominada por el grupo grande, infraestima el error y la prueba se vuelve liberal.",
      "¿Qué recomiendan Delacre, Lakens y Leys (2017) para comparar dos grupos independientes?|Usar Welch por defecto|Usar Welch si Levene es significativa|Usar Student si los n son iguales|Welch controla mejor el error tipo I con varianzas y n desiguales y apenas pierde potencia cuando las varianzas son iguales.",
      "¿Por qué es problemático elegir entre Student y Welch según la prueba de Levene?|Altera el error tipo I del conjunto|Reduce los gl de la prueba de Welch|Obliga a usar contrastes de una cola|Zimmerman (2004) mostró que esa decisión condicional altera el error tipo I. Es preferible aplicar Welch sin condiciones.",
      "Con muestras muy grandes, ¿qué problema tiene usar Levene como filtro previo?|Detecta diferencias triviales|Pierde casi toda su potencia|Deja de contrastar varianzas|Con n grandes, Levene detecta diferencias de varianza triviales. Con n pequeños, en cambio, no detecta las que sí afectan a Student."
    ],
    inc: [
      "Sobre la prueba de Welch|Combina las varianzas de ambos grupos en una sola|Sus gl suelen ser números no enteros|Controla el error tipo I con n y varianzas desiguales|Welch no combina las varianzas: cada grupo contribuye al error típico con la suya propia."
    ],
    seq: [],
    cls: [] },
  { t: "Tamaño del efecto: d y g de Hedges con su intervalo",
    tip: "La d de Cohen expresa la diferencia de medias en unidades de la DT combinada y puede obtenerse de t como t · √(1/n₁ + 1/n₂). Con muestras pequeñas sobrestima el efecto, y la g de Hedges (1981) lo corrige. Debe informarse con su IC, que suele ser ancho, y declarando el estandarizador: d_s en grupos independientes (Lakens, 2013). Los cortes 0,2, 0,5 y 0,8 son un último recurso.",
    v: [
      "d de Cohen=Diferencia de medias en unidades de la desviación típica combinada",
      "g de Hedges=Versión de d corregida por su sesgo al alza en muestras pequeñas",
      "d_s=Nombre del índice con sₚ en el denominador, propio de grupos independientes",
      "Probabilidad de superioridad=Probabilidad de que alguien al azar de un grupo puntúe más que uno del otro",
      "t no central=Distribución con la que los programas calculan el IC exacto de d",
      "Estandarizador=Desviación típica que actúa como denominador del efecto",
      "Cortes de Cohen=Valores 0,2, 0,5 y 0,8, propuestos como último recurso",
      "JARS-Quant=Pautas que piden descriptivos, estadístico, gl, p exacto y efecto con IC"
    ],
    g: [
      "Con 10 personas por grupo, el factor de corrección de Hedges vale ___.|0,958|0,984|0,916",
      "En el ejemplo de atención plena, d vale 0,58 y su IC 95 % aproximado va de 0,01 a ___.|1,14|0,87|1,58",
      "Con d de 0,58 y distribuciones normales de igual DT, la probabilidad de superioridad vale ___.|0,66|0,58|0,77",
      "Con muestras pequeñas, la d de Cohen ___ ligeramente el efecto poblacional.|sobrestima|infraestima|estabiliza",
      "Lakens (2013) insiste en indicar qué ___ estandariza el efecto.|desviación típica|media aritmética|prueba estadística"
    ],
    tf: [
      "La g de Hedges es siempre algo menor en valor absoluto que la d calculada con los mismos datos.|V",
      "Con 50 personas en total, la corrección de Hedges cambia de forma notable el valor de d.|F|Con 50 personas el factor vale 0,984: la corrección es pequeña (d de 0,58 frente a g de 0,57).",
      "Un resultado significativo con d de 0,58 garantiza que el efecto poblacional es al menos mediano.|F|Su IC 95 % iba de 0,01 a 1,14: es compatible con un efecto casi nulo y con uno grande.",
      "Si las varianzas son muy distintas, conviene informar las dos DT junto al índice y no interpretarlo de forma mecánica.|V"
    ],
    q: [
      "Un estudio con 30 personas por grupo obtiene t(58) de 3,00. ¿Cuánto vale d aproximadamente?|0,77|0,39|1,55|d es t · √(1/n₁ + 1/n₂), es decir, 3,00 · √(2/30) ≈ 3,00 · 0,258 ≈ 0,77.",
      "¿Por qué la g de Hedges es preferible a d con muestras pequeñas?|Corrige el sesgo al alza de d|Usa la DT del grupo control|Incorpora la correlación entre medidas|Con muestras pequeñas d sobrestima ligeramente el efecto, y Hedges (1981) aplica un factor de corrección.",
      "¿Qué dijo Cohen de sus propios cortes de 0,2, 0,5 y 0,8?|Que son un último recurso|Que son umbrales clínicos|Que valen en cualquier campo|La relevancia depende del contexto y de la diferencia mínima importante, no de la etiqueta.",
      "¿Qué ventaja tiene expresar d como probabilidad de superioridad?|Traduce d a una probabilidad intuitiva|Elimina la imprecisión de la estimación|Evita tener que informar el IC de d|Indica la probabilidad de que una persona al azar de un grupo puntúe más que una del otro."
    ],
    inc: [
      "Sobre la d en grupos independientes|Con 25 por grupo su IC es estrecho|Puede calcularse a partir de t y los n|Conviene informarla con su intervalo|Con 25 por grupo, el IC 95 % iba de 0,01 a 1,14: la estimación es muy imprecisa."
    ],
    seq: [],
    cls: [] },
  { t: "La U de Mann-Whitney y la lectura de la salida del programa",
    tip: "La U de Mann-Whitney (1947) es la alternativa por rangos para dos grupos independientes y equivale a la W de suma de rangos de Wilcoxon. No contrasta medianas, sino la igualdad estocástica: que P(X mayor que Y) valga 0,5. Solo con desplazamiento puro se lee como prueba de medianas. Exige independencia y le afecta la heterocedasticidad. En la salida de la t conviene leer siempre la fila de Welch, la de gl no enteros.",
    v: [
      "U de Mann-Whitney=Prueba de rangos para dos grupos independientes",
      "W de suma de rangos=Formulación de Wilcoxon (1945) equivalente a Mann-Whitney",
      "Igualdad estocástica=Igual probabilidad de que puntúe más alto alguien de un grupo o del otro",
      "Desplazamiento puro=Distribuciones de igual forma y dispersión que solo difieren en posición",
      "Rango medio=Rango que reciben las puntuaciones empatadas",
      "U₁=Número de pares en que una puntuación del grupo 1 supera a una del grupo 2",
      "Correlación biserial de rangos=Tamaño del efecto de Mann-Whitney, entre −1 y 1, basado en U",
      "Fila de Welch=En SPSS, la de «No se asumen varianzas iguales»"
    ],
    g: [
      "Con 5 y 6 personas por grupo, U₁ + U₂ suma ___.|30|11|66",
      "En el ejemplo de los minutos de lectura, la r_rb vale ___.|0,53|0,77|0,18",
      "En la salida de SPSS, unos gl no enteros indican que se está leyendo la fila de ___.|Welch|Student|Levene",
      "Mann-Whitney solo equivale a una prueba de medianas si hay ___.|desplazamiento puro|igualdad de medias|muestras grandes",
      "La p de una cola solo es legítima si la ___ se fijó antes de ver los datos.|dirección|muestra|prueba"
    ],
    tf: [
      "La W de suma de rangos de Wilcoxon y la U de Mann-Whitney dan el mismo valor p.|V",
      "La U de Mann-Whitney contrasta que las medianas poblacionales de los dos grupos son iguales.|F|Contrasta la igualdad estocástica, que P(X mayor que Y) valga 0,5. Solo equivale a medianas con desplazamiento puro.",
      "Con varianzas desiguales, Mann-Whitney puede ser significativa aunque las medianas coincidan.|V",
      "Al calcular la U de Mann-Whitney, las puntuaciones empatadas se eliminan antes de asignar los rangos.|F|No se eliminan: las puntuaciones empatadas reciben el rango medio."
    ],
    q: [
      "Una psicóloga compara la posición en una clasificación (VD ordinal) entre dos grupos de alumnos distintos. ¿Qué prueba corresponde?|U de Mann-Whitney|Wilcoxon de rangos con signo|t para muestras relacionadas|Con grupos independientes y VD ordinal, la alternativa por rangos es Mann-Whitney. Wilcoxon de rangos con signo es para medidas relacionadas.",
      "¿Con qué prueba se confunde típicamente la W de suma de rangos de Wilcoxon?|Con la de rangos con signo|Con la U de Mann-Whitney|Con la H de Kruskal-Wallis|La W de suma de rangos equivale a Mann-Whitney, para grupos independientes. La de rangos con signo es para medidas relacionadas.",
      "En el ejemplo de lectura, el grupo A (5 personas) suma 22 rangos. ¿Cuánto vale U_A?|7|15|22|U_A es R_A − n_A(n_A + 1)/2, es decir, 22 − 15, que da 7.",
      "En la salida de SPSS, la fila «No se asumen varianzas iguales» da t(7,56). ¿A qué prueba corresponde?|Welch|Student|Levene|Los gl no enteros son la marca de Welch-Satterthwaite. Es la fila que conviene leer siempre, sin depender de Levene."
    ],
    inc: [
      "Sobre la salida de la t en SPSS|Con Levene no significativa se lee Student|La fila de Welch muestra gl no enteros|Levene solo aparece en la primera fila|Se recomienda leer siempre la fila de Welch, sin depender del resultado de Levene (Zimmerman, 2004)."
    ],
    seq: [],
    cls: [
      "Prueba según el diseño|Grupos independientes: U de Mann-Whitney; W de suma de rangos; t de Welch|Medidas relacionadas: Wilcoxon de rangos con signo; t relacionada"
    ] }
] },
{ n: 10, t: "Las mismas personas dos veces: t relacionada y Wilcoxon", cap: 4, pir: "alta", mods: [
  { t: "Diseños intrasujeto y puntuaciones diferencia",
    tip: "En un diseño intrasujeto las mismas personas pasan por todas las condiciones, de modo que cada una actúa como su propio control y se gana potencia. El precio son los efectos de orden (práctica, fatiga y arrastre), que se neutralizan con contrabalanceo, imposible en los diseños antes-después. El análisis se reduce a una sola muestra de puntuaciones diferencia, cuya varianza baja cuanto mayor es la correlación entre las dos medidas.",
    v: [
      "Diseño intrasujeto=Las mismas personas pasan por todas las condiciones",
      "Diseño entre grupos=Cada persona pasa por una sola condición",
      "Pares emparejados=Personas distintas pero unidas, como gemelos o participantes igualados",
      "Contrabalanceo=Variar el orden de las condiciones para neutralizar los efectos de orden",
      "Efecto de práctica=Rendir mejor la segunda vez",
      "Efecto de fatiga=Rendir peor en la segunda medida",
      "Efecto de arrastre=Lo vivido en la primera condición influye en la segunda",
      "Puntuación diferencia=Resta de las dos medidas de cada par, decidida y declarada antes"
    ],
    g: [
      "Si la correlación entre medidas fuera ___, el diseño intrasujeto no aportaría ventaja alguna.|0|1|0,5",
      "Con dos medidas, el problema se reduce a una prueba t para ___ muestra sobre D.|una|dos|cada",
      "Que alguien sea en general más ansioso afecta igual a las dos medidas y ___ al restar.|desaparece|se duplica|se invierte",
      "Si se calcula pre − post en una escala de ansiedad, una D positiva indica ___.|mejora|empeoramiento|ausencia de cambio",
      "La independencia se exige entre ___, porque las dos medidas de alguien ya están relacionadas.|pares|medidas|condiciones"
    ],
    tf: [
      "En un diseño antes-después sin grupo de control, una mejora significativa demuestra que la intervención funciona.|F|La diferencia puede deberse al paso del tiempo, a la regresión a la media o a otros cambios.",
      "Los gemelos o las parejas pueden analizarse como datos relacionados aunque sean personas distintas.|V",
      "En el diseño intrasujeto, el supuesto de normalidad se refiere a cada una de las dos medidas por separado.|F|Se refiere a las puntuaciones diferencia, no a cada medida por separado.",
      "Cuanto mayor es la correlación entre las dos medidas, menor es la varianza de las diferencias.|V"
    ],
    q: [
      "Un investigador mide la memoria de 20 personas tras estudiar en silencio y con música. La mitad empieza por silencio y la otra mitad por música. ¿Qué pretende?|Neutralizar efectos de orden|Aumentar la correlación|Evitar la regresión a la media|El contrabalanceo reparte la práctica, la fatiga y el arrastre entre las dos condiciones.",
      "¿Por qué el diseño intrasujeto gana potencia con menos participantes?|Se restan las diferencias individuales|Se duplica el número de participantes|Se eliminan los efectos de orden|Las diferencias individuales estables afectan igual a las dos medidas y desaparecen al calcular D.",
      "Para analizar dos medidas de las mismas personas, ¿con qué se trabaja?|Con una muestra de diferencias|Con dos muestras independientes|Con las dos varianzas combinadas|Cada persona aporta una D, y el problema se reduce a una t para una muestra con H₀: μ_D igual a 0.",
      "¿Qué ocurre con la ventaja del diseño intrasujeto si la correlación entre las medidas es nula?|Desaparece|Se duplica|Se mantiene|s_D² es s₁² + s₂² − 2rs₁s₂: con r nula la varianza de las diferencias no se reduce y el diseño no aporta ventaja."
    ],
    inc: [
      "Sobre los diseños intrasujeto|Eliminan los efectos de orden por sí mismos|Cada persona actúa como su propio control|Logran más potencia con menos personas|Los efectos de orden son su inconveniente principal y se tratan con contrabalanceo."
    ],
    seq: [],
    cls: [
      "Tipo de diseño|Intrasujeto: ansiedad de los mismos pacientes antes y después; memoria en silencio y con música en las mismas personas; gemelos emparejados|Entre grupos: tratamiento frente a control con personas distintas; tres grupos asignados al azar"
    ] },
  { t: "La prueba t para muestras relacionadas",
    tip: "La t relacionada aplica la t de una muestra a las diferencias: M_D dividida por s_D/√n, con n − 1 gl, siendo n el número de pares. Si los mismos datos se analizan como grupos independientes, el error crece mucho, porque se cuenta como ruido la variabilidad entre personas. Con dos medidas no hay supuesto de esfericidad ni de igualdad de varianzas. Una mejora media no implica que cada persona haya mejorado.",
    v: [
      "t relacionada=M_D dividida por su error típico, s_D/√n",
      "M_D=Media de las puntuaciones diferencia",
      "s_D=Desviación típica de las diferencias",
      "n en la t relacionada=Número de pares, no de observaciones",
      "Esfericidad=Supuesto que aparece con tres o más medidas repetidas",
      "Índice de cambio fiable=Valora si el cambio de una persona supera el error de medida",
      "IC de la diferencia=M_D ± t crítico multiplicado por el error típico",
      "Jacobson y Truax (1991)=Autores de referencia para valorar el cambio individual"
    ],
    g: [
      "Con 24 personas medidas dos veces, la t relacionada tiene ___ gl.|23|46|22",
      "En el ejemplo de la música, la correlación entre las dos condiciones era ___.|0,89|0,50|0,27",
      "Analizados por error como grupos independientes, los datos de la música daban un p de ___.|0,209|0,027|0,050",
      "La esfericidad aparece a partir de ___ medidas repetidas.|tres|dos|cuatro",
      "Que el grupo mejore en promedio no significa que haya mejorado cada ___.|persona|condición|medida"
    ],
    tf: [
      "Con dos medidas repetidas hay que comprobar la esfericidad antes de aplicar la t relacionada.|F|Con dos medidas se trabaja con una única variable D y no hay esfericidad. Aparece con tres o más medidas.",
      "Analizar datos relacionados como si fueran independientes cambia la diferencia de medias.|F|La diferencia de medias es idéntica. Lo que cambia es el error, que pasa a incluir la variabilidad entre personas.",
      "En la t relacionada, el n del error típico es el número de pares.|V",
      "La t relacionada supone pares independientes entre sí y normalidad de las diferencias, o un n suficiente.|V"
    ],
    q: [
      "Se mide la ansiedad de 15 pacientes antes y después de una terapia, con M_D de 4 y s_D de 6. ¿Cuánto vale t?|2,58|0,67|10,0|t es 4 / (6/√15) ≈ 4 / 1,55 ≈ 2,58, con 14 gl.",
      "Los datos de la música daban p de 0,027 analizados como relacionados y de 0,209 como independientes. ¿Qué cambia?|El error típico|La diferencia media|Las puntuaciones|La diferencia de medias es la misma. La prueba independiente trata como ruido las diferencias entre personas.",
      "Un estudio pre-post con 30 personas se analiza con la t relacionada. ¿Cuántos gl tiene?|29|58|28|Los gl son n − 1, con n el número de pares: 30 − 1, que da 29. Contar observaciones es una trampa típica.",
      "¿Qué permite valorar si el cambio de una persona concreta supera el error de medida?|El índice de cambio fiable|El IC de la diferencia media|La d_z del grupo completo|Lo propusieron Jacobson y Truax (1991). La t relacionada informa del cambio medio, no del individual."
    ],
    inc: [
      "Sobre la t relacionada|Exige igualdad de varianzas entre las medidas|Sus gl son el número de pares menos 1|Se aplica sobre las puntuaciones diferencia|Con dos medidas se trabaja con una única variable D, y desaparece el supuesto de igualdad de varianzas."
    ],
    seq: [],
    cls: [] },
  { t: "d_z, d_av y d_rm: elegir el denominador",
    tip: "Con medidas relacionadas hay varios estandarizadores. d_z divide M_D por la DT de las diferencias, crece con la correlación entre medidas y sirve para planificar la potencia. d_av divide por la media de las dos DT, y d_rm corrige d_z por r: ambas expresan el efecto en la escala de la variabilidad entre personas y son las que Lakens (2013) recomienda para describir la magnitud. Hay que declarar el índice e informar r.",
    v: [
      "d_z=Diferencia media dividida por la DT de las diferencias",
      "d_av=Diferencia media dividida por la media de las DT de ambas medidas",
      "d_rm=d_z corregida por la correlación entre medidas",
      "Lakens (2013)=Pide declarar siempre el estandarizador del tamaño del efecto",
      "d_z a partir de t=t dividida por la raíz del número de pares",
      "Metaanálisis=Contexto en que conviene d_av o d_rm para combinar con estudios entre grupos",
      "Correlación pre-post=Dato que permite pasar de un índice a otro",
      "Magnitud inflada=Impresión que da comparar una d_z con r alta con los cortes de Cohen"
    ],
    g: [
      "Con d_av de 0,5 y DT iguales, d_z vale ___ cuando r es 0,9.|1,12|0,35|0,50",
      "Con r de 0,5 y DT iguales, d_z y d_av ___.|coinciden|se anulan|se duplican",
      "Para planificar la potencia de un estudio intrasujeto se usa ___.|d_z|d_av|d_rm",
      "En muestras emparejadas, SPSS estandariza la d con la DT de las ___.|diferencias|puntuaciones pre|medidas post",
      "Con DT pre y post casi iguales, d_av y ___ coinciden.|d_rm|d_z|d_s"
    ],
    tf: [
      "La misma diferencia de medias puede dar una d_z pequeña o enorme según la correlación entre medidas.|V",
      "Una d_z de 1,07 en un estudio pre-post puede compararse con los cortes de Cohen igual que una d de grupos independientes.|F|Los cortes de Cohen se pensaron para grupos independientes. Comparar con ellos una d_z infla la magnitud.",
      "d_av y d_rm expresan la diferencia en la escala de la variabilidad entre personas.|V",
      "Con una correlación pre-post de 0,80, d_z resulta menor que d_av.|F|Con r alta, la DT de las diferencias es menor y d_z mayor: 1,07 frente a 0,67 en el ejemplo."
    ],
    q: [
      "Un estudio pre-post con 25 pacientes obtiene t(24) de 3,00. ¿Cuánto vale d_z?|0,60|0,12|1,20|d_z es t/√n, con n el número de pares: 3,00/5, que da 0,60.",
      "Un equipo quiere incluir su estudio intrasujeto en un metaanálisis junto a estudios entre grupos. ¿Qué índice conviene?|d_av, por usar la DT de las medidas|d_z, por usar la DT de las diferencias|d_z, por depender de la correlación|d_av y d_rm expresan el efecto en la escala de la variabilidad entre personas, comparable a una d entre grupos.",
      "¿Qué dato hay que informar para poder pasar de d_z a d_rm?|La correlación entre medidas|El número de observaciones|La DT del grupo control|d_rm es d_z · √[2(1 − r)]: sin r no se puede pasar de un índice a otro.",
      "Para una d_av fija, la correlación pre-post aumenta. ¿Qué ocurre con d_z?|Aumenta|Disminuye|No cambia|Con d_av de 0,5, d_z vale 0,35 con r nula, 0,5 con r de 0,5 y 1,12 con r de 0,9."
    ],
    inc: [
      "Sobre los índices en medidas repetidas|d_z no depende de la correlación entre medidas|d_av usa la media de las DT de las dos medidas|Lakens recomienda declarar siempre el índice|d_z depende de r: la misma diferencia da una d_z pequeña con r baja y enorme con r alta."
    ],
    seq: [],
    cls: [
      "Uso de cada índice|d_z: planificar la potencia intrasujeto; estandarizar con s_D; índice por defecto de SPSS en muestras emparejadas|d_av o d_rm: comparar con diseños entre grupos; metaanálisis; describir la magnitud"
    ] },
  { t: "Wilcoxon de rangos con signo y lectura de la salida",
    tip: "La prueba de Wilcoxon de rangos con signo (1945) es la alternativa por rangos a la t relacionada. Ordena las diferencias en valor absoluto, devuelve a cada rango su signo y compara las sumas T₊ y T₋. Usa la magnitud de las diferencias, por lo que es más potente que la prueba de signos, pero supone diferencias simétricas para leerse como prueba de la mediana. Su tamaño del efecto es la correlación biserial de rangos para pares.",
    v: [
      "T₊=Suma de los rangos de las diferencias positivas",
      "T₋=Suma de los rangos de las diferencias negativas",
      "Diferencias nulas=En la versión clásica se descartan antes de asignar rangos",
      "Prueba de signos=Alternativa menos potente que ignora la magnitud de las diferencias",
      "Simetría=Supuesto que permite leer Wilcoxon como prueba de la mediana de D",
      "r_rb para pares=(T₊ − T₋) dividido por (T₊ + T₋)",
      "Aproximación normal=Se usa con muestras grandes en lugar de la distribución exacta",
      "Variable D en SPSS=Se crea con Transformar, Calcular variable, para revisar la normalidad"
    ],
    g: [
      "Con 12 diferencias no nulas, T₊ + T₋ suma ___.|78|66|144",
      "El estadístico de Wilcoxon es la ___ de las dos sumas de rangos.|menor|mayor|media",
      "La r_rb para pares vale 1 si todas las diferencias van en la misma ___.|dirección|magnitud|posición",
      "En el ejemplo de relajación, T₋ vale 3 y T₊ vale ___.|52|55|49",
      "Wilcoxon de rangos con signo supone que la distribución de las diferencias es ___.|simétrica|normal|uniforme"
    ],
    tf: [
      "Wilcoxon de rangos con signo exige que cada una de las dos medidas siga una distribución normal.|F|No exige normalidad. Supone que las diferencias son simétricas para poder leerse como prueba de su mediana.",
      "Wilcoxon de rangos con signo es más potente que la prueba de signos porque usa la magnitud de las diferencias.|V",
      "Wilcoxon de rangos con signo sirve siempre que los datos den problemas, porque es una prueba sin supuestos.|F|Exige pares independientes y simetría de las diferencias: tiene menos supuestos, no ninguno.",
      "Para comprobar la normalidad en la t relacionada hay que examinar el histograma y el gráfico Q-Q de las diferencias.|V"
    ],
    q: [
      "Ocho pacientes valoran su dolor en una escala ordinal antes y después de una técnica, y una diferencia es atípica. ¿Qué prueba de rangos corresponde?|Rangos con signo de Wilcoxon|Suma de rangos de Wilcoxon|U de Mann-Whitney exacta|Con medidas relacionadas, la alternativa por rangos es la de rangos con signo. La suma de rangos equivale a Mann-Whitney.",
      "En el ejemplo de relajación hay 10 diferencias no nulas. ¿Cuánto suman T₊ y T₋?|55|100|45|T₊ + T₋ es n(n + 1)/2, es decir, 10 · 11/2, que da 55.",
      "¿Qué hace la versión clásica de Wilcoxon con las diferencias iguales a 0?|Las descarta|Les da rango 1|Las suma a T₊|En la versión clásica las diferencias nulas se descartan, y n pasa a ser el número de diferencias no nulas.",
      "¿Qué tamaño del efecto corresponde a la prueba de Wilcoxon de rangos con signo?|Biserial de rangos para pares|d_z con la DT de las diferencias|η² parcial de las medidas|La r_rb para pares es (T₊ − T₋)/(T₊ + T₋) y va de −1 a 1."
    ],
    inc: [
      "Sobre la salida de la t relacionada en SPSS|La tabla de correlaciones contrasta la esfericidad|Los descriptivos dan M, DT, N y ET de cada medida|La prueba da M_D, s_D, IC, t, gl y p|La tabla de correlaciones da la r entre medidas: explica la ganancia de potencia y permite calcular d_rm."
    ],
    seq: [
      "Procedimiento de Wilcoxon de rangos con signo|Calcular la diferencia D de cada par>Descartar las diferencias nulas>Ordenar los valores absolutos y asignar rangos>Devolver a cada rango su signo>Sumar por separado T₊ y T₋>Tomar la menor de las dos sumas"
    ],
    cls: [] }
] },
{ n: 11, t: "ANOVA de un factor entre grupos", cap: 5, pir: "alta", mods: [
  { t: "Por qué no hacer varias pruebas t: la tasa de error por familia",
    tip: "Hacer varias pruebas t multiplica las ocasiones de cometer un error tipo I. La tasa de error por familia, 1 − (1 − α)^m si las pruebas fueran independientes, llega a 0,14 con tres comparaciones y a 0,40 con diez. El ANOVA de Fisher (1925) hace un único contraste global cuya H₁ es que al menos una media difiere, así que no dice dónde está la diferencia. Con dos grupos, F es t².",
    v: [
      "FWER=Probabilidad de al menos un error tipo I en un conjunto de contrastes",
      "Comparaciones por pares=k(k − 1)/2 con k grupos",
      "Fisher (1925)=Desarrolló el análisis de varianza",
      "H₁ del ANOVA=Al menos una media poblacional difiere de las demás",
      "Factor=Variable independiente categórica cuyos niveles definen los grupos",
      "Niveles=Condiciones del factor, tres o más en el ANOVA de un factor",
      "Modelo lineal general=Marco común del que forman parte la t y el ANOVA",
      "Variable de clasificación=Factor no manipulado, que solo permite conclusiones asociativas"
    ],
    g: [
      "Con cuatro grupos hay ___ comparaciones por pares.|6|4|12",
      "Con tres comparaciones independientes y α de 0,05 en cada una, la FWER ronda ___.|0,14|0,05|0,10",
      "Con diez comparaciones, la probabilidad de al menos un falso positivo ronda el ___.|40 %|50 %|26 %",
      "Con dos grupos, el ANOVA y la t de Student dan la misma decisión porque F es ___.|t²|2t|√t",
      "Si las mismas personas pasan por todas las condiciones, el análisis es el ANOVA de ___.|medidas repetidas|un factor entre grupos|Welch"
    ],
    tf: [
      "La H₁ del ANOVA de un factor afirma que todas las medias poblacionales son distintas entre sí.|F|Basta con que una sola media se aparte para que H₀ sea falsa: H₁ es que al menos una media difiere.",
      "La fórmula 1 − (1 − α)^m es una aproximación, porque las comparaciones por pares comparten grupos.|V",
      "Un ANOVA significativo indica qué grupos difieren entre sí.|F|Dice que hay alguna diferencia, pero no dónde. Localizarla es tarea de los contrastes y las comparaciones post hoc.",
      "Si el factor es el nivel de estudios, la conclusión del ANOVA es asociativa, no causal.|V"
    ],
    q: [
      "Una investigadora compara cuatro terapias con todas las pruebas t por pares, cada una con α de 0,05. Si fueran independientes, ¿qué FWER tendría?|0,26|0,20|0,05|Cuatro grupos dan 6 pares, y 1 − 0,95⁶ ≈ 0,26: más de cinco veces el 5 % pretendido.",
      "Con dos grupos, un ANOVA da F(1, 30) de 6,25. ¿Qué t de Student, en valor absoluto, se obtendría?|2,50|6,25|3,13|F es t², así que t es √6,25, es decir, 2,50 en valor absoluto, con 30 gl.",
      "¿Cuál es la forma correcta de expresar la H₁ del ANOVA de un factor?|Al menos una media difiere|Todas las medias difieren|μ₁ ≠ μ₂ ≠ μ₃ en la población|Escribir H₁ como «todas las medias distintas» es una trampa típica: basta con que una media se aparte.",
      "¿Qué estructura de datos requiere el ANOVA de un factor entre grupos?|Un factor con tres o más niveles|Una covariable cuantitativa continua|Dos factores cruzados entre sí|Requiere una VD cuantitativa y un factor con tres o más niveles, con grupos independientes."
    ],
    inc: [
      "Sobre el ANOVA de un factor|Su H₁ dice que todas las medias difieren|Fue desarrollado por Fisher (1925)|Generaliza la prueba t a más de dos grupos|H₁ es que al menos una media difiere. Escribir «todas distintas» es una trampa típica."
    ],
    seq: [],
    cls: [] },
  { t: "Repartir la variabilidad: la razón F",
    tip: "El ANOVA compara medias analizando varianzas: la SC total se reparte en SC entre grupos (medias respecto a la media general) y SC intragrupo (cada persona respecto a la media de su grupo). Cada SC dividida por sus gl da una media cuadrática, y F es MC_entre / MC_intra. Bajo H₀ ambas estiman la misma varianza y F ronda 1. El contraste es siempre de cola derecha, y la independencia es el supuesto más delicado.",
    v: [
      "SC entre grupos=Variabilidad de las medias respecto a la media general, ponderada por n",
      "SC intragrupo=Variabilidad de cada puntuación respecto a la media de su grupo",
      "Media cuadrática=Suma de cuadrados dividida por sus gl, una estimación de varianza",
      "gl entre grupos=k − 1",
      "gl intragrupo=N − k",
      "Snedecor=Bautizó la razón F en honor de Fisher",
      "Distribución F=Asimétrica positiva, con gl del numerador y del denominador",
      "Residuos en el ANOVA=Desviaciones respecto a la media del propio grupo"
    ],
    g: [
      "Con cuatro grupos de 10 personas, MC_entre de 30 y MC_intra de 10, F vale ___.|3,00|0,33|2,87",
      "El contraste de la F es siempre ___, aunque la hipótesis sobre las medias no tenga dirección.|de cola derecha|de cola izquierda|bilateral",
      "Los gl también se suman: (k − 1) + (N − k) da ___.|N − 1|N|N − 2",
      "La ___ es el supuesto más delicado del ANOVA, porque ninguna corrección posterior lo arregla.|independencia|normalidad|homocedasticidad",
      "MC_entre estima la varianza del error solo si H₀ es ___.|cierta|falsa|simple"
    ],
    tf: [
      "Un F menor que 1 indica un efecto negativo del factor.|F|Solo indica que las medias se parecen más de lo esperable por azar. No hay efectos «negativos» en F.",
      "MC_intra estima la varianza del error tanto si H₀ es cierta como si no lo es.|V",
      "La variabilidad intragrupo recoge, además del error, parte del efecto del factor.|F|Dentro de un grupo todos reciben la misma condición: recoge diferencias individuales y error, no el efecto.",
      "El supuesto de normalidad del ANOVA se refiere a los residuos, no a las puntuaciones brutas.|V"
    ],
    q: [
      "Un equipo asigna al azar 36 estudiantes a tres grupos de 12. ¿Cuántos gl tienen el numerador y el denominador de la F?|2 y 33|3 y 33|2 y 35|gl_entre es k − 1, que da 2, y gl_intra es N − k, 36 − 3, que da 33.",
      "Si H₀ es cierta y se cumplen los supuestos, ¿cuánto vale aproximadamente F?|1|0|k − 1|Bajo H₀, MC_entre y MC_intra estiman la misma varianza, y su cociente ronda 1.",
      "En un estudio, los participantes de cada grupo hicieron la tarea juntos y se influyeron entre sí. ¿Qué supuesto se incumple?|Independencia|Normalidad de residuos|Homogeneidad de varianzas|La independencia es el supuesto más delicado: si se incumple, ninguna corrección posterior lo arregla.",
      "¿Qué recoge la variabilidad entre grupos?|El posible efecto y el azar|Solo el efecto del factor|Solo el error de medida|Las medias muestrales difieren también por azar, así que la variabilidad entre grupos recoge el efecto más el azar."
    ],
    inc: [
      "Sobre la razón F|Un F menor que 1 indica un efecto negativo|Sigue una F con k − 1 y N − k gl bajo H₀|Crece cuanto mayor es el efecto del factor|Un F menor que 1 solo indica que las medias se parecen más de lo esperable por azar."
    ],
    seq: [],
    cls: [] },
  { t: "La tabla del ANOVA y sus tamaños del efecto",
    tip: "La tabla del ANOVA tiene filas entre grupos, intragrupo y total, y como las SC y los gl se suman, puede reconstruirse a partir de pocas casillas. η² es la proporción de la SC total asociada al factor, pero está sesgada al alza, y ω² corrige ese sesgo. La f de Cohen se usa para la potencia. En un factor entre grupos, η² y η²p coinciden, y para dos grupos concretos se calcula una d por pares.",
    v: [
      "η²=SC entre dividida por SC total, sesgada al alza",
      "ω²=Estimación menos sesgada de la varianza explicada en la población",
      "f de Cohen=Dispersión de las medias en unidades de DT, usada para la potencia",
      "η²p=SC del efecto dividida por la suma de SC del efecto y SC del error",
      "Modelo corregido=Fila de SPSS Univariado que coincide con el factor en un diseño de un factor",
      "Dentro de grupos=Nombre que da SPSS a la fila intragrupo o de error",
      "Olejnik y Algina (2003)=Advirtieron que η² y η²p dejan de coincidir en los factoriales",
      "Cortes de Cohen para η²=0,01, 0,06 y 0,14"
    ],
    g: [
      "Si SC_entre vale 30 y SC_total 120, η² vale ___.|0,25|0,33|0,75",
      "Con η² de 0,20, la f de Cohen vale ___.|0,50|0,25|0,45",
      "En el ejemplo a mano, η² vale 0,36 y ω² vale ___.|0,27|0,36|0,46",
      "Los cortes de Cohen para f son 0,10, 0,25 y ___.|0,40|0,50|0,80",
      "Para dos grupos concretos, la d por pares usa como estandarizador la raíz de ___.|MC_intra|MC_entre|SC_total"
    ],
    tf: [
      "En el ANOVA de un factor entre grupos, η² y η²p coinciden.|V",
      "ω² suele ser mayor que η² porque corrige su sesgo.|F|η² está sesgado al alza, así que ω² es menor: 0,27 frente a 0,36 en el ejemplo a mano.",
      "Un η² de 0,03 puede ser relevante en una intervención barata aplicada a miles de personas.|V",
      "η² está libre de sesgo cuando las muestras son pequeñas y hay muchos grupos.|F|Es justo cuando más sesgado está: las medias muestrales difieren algo por azar y η² lo cuenta como efecto."
    ],
    q: [
      "Una tabla de ANOVA incompleta muestra SC_entre de 40 con 2 gl y SC_intra de 180 con 36 gl. ¿Cuánto vale F?|4,00|0,22|2,00|MC_entre es 40/2, que da 20, y MC_intra es 180/36, que da 5. F es 20/5, es decir, 4,00.",
      "En una muestra pequeña con varios grupos, ¿qué índice estima mejor la varianza explicada en la población?|ω²|η²|η²p|η² está sesgado al alza y, en un factor, η²p coincide con η². ω² corrige ese sesgo.",
      "En SPSS Univariado, ¿qué fila coincide con la del factor en un diseño de un factor?|El modelo corregido|La intersección|El total corregido|En un factor, la fila del factor coincide con la del modelo corregido, y la de error es la intragrupo.",
      "¿Para qué se usa sobre todo la f de Cohen?|Para el análisis de potencia|Para localizar las diferencias|Para corregir el sesgo de η²|f expresa la dispersión de las medias en unidades de DT y se emplea a menudo en el análisis de potencia."
    ],
    inc: [
      "Sobre los tamaños del efecto del ANOVA|η² y η²p ya difieren con un solo factor|ω² está menos sesgado que η² con n pequeños|η² describe el efecto global del factor|En un factor entre grupos coinciden, porque SC del efecto más SC del error es la SC total. Difieren en los factoriales."
    ],
    seq: [
      "Calcular un ANOVA de un factor a mano|Plantear H₀ y H₁>Calcular la media general>Obtener SC entre y SC intra>Dividir cada SC por sus gl>Calcular F como cociente de las MC>Comparar con el valor crítico y calcular el efecto"
    ],
    cls: [
      "Tipo de tamaño del efecto|Diferencia estandarizada: d de Cohen; g de Hedges; d_z|Varianza explicada: η²; ω²; η²p"
    ] },
  { t: "ANOVA de Welch, Brown-Forsythe y Kruskal-Wallis",
    tip: "La F clásica es robusta ante varianzas desiguales si los n son iguales (Box, 1954) y bastante resistente a la no normalidad (Blanca et al., 2017), pero no ante varianzas y n desiguales a la vez. El ANOVA de Welch (1951) pondera cada grupo por su tamaño y su varianza, con gl no enteros, y el de Brown-Forsythe (1974) modifica el denominador. Kruskal-Wallis extiende Mann-Whitney a más grupos, compara H con una χ² de k − 1 gl y tampoco carece de supuestos.",
    v: [
      "ANOVA de Welch=Pondera cada grupo por su tamaño y su varianza y corrige los gl del denominador",
      "Brown-Forsythe (1974)=ANOVA que mantiene el numerador clásico y modifica el denominador",
      "Kruskal-Wallis=Alternativa por rangos al ANOVA entre grupos",
      "Estadístico H=Mide cuánto se separan entre sí los rangos medios de los grupos",
      "Blanca et al. (2017)=Simulación en que la F controló el error tipo I ante la no normalidad",
      "Pruebas robustas=Tabla de SPSS que muestra Welch y Brown-Forsythe",
      "Sig. ajust.=Columna de SPSS ya corregida por comparaciones múltiples tras Kruskal-Wallis",
      "Friedman=Alternativa por rangos con las mismas personas en todas las condiciones"
    ],
    g: [
      "Kruskal-Wallis compara H con una distribución χ² con ___ gl.|k − 1|N − k|N − 1",
      "Con n distintos, si el grupo más pequeño es el más variable, la F clásica se vuelve ___.|liberal|conservadora|exacta",
      "El estudio de Blanca et al. (2017) usó ___ grupos y muchas distribuciones.|tres|dos|cinco",
      "El ANOVA de Brown-Forsythe no debe confundirse con la variante de la prueba de ___ del mismo nombre.|Levene|Welch|Tukey",
      "En Kruskal-Wallis se asignan rangos a ___ las puntuaciones juntas, sin tener en cuenta el grupo.|todas|parte de|cada una de"
    ],
    tf: [
      "Kruskal-Wallis es la extensión de la U de Mann-Whitney a más de dos grupos.|V",
      "Tras Kruskal-Wallis en SPSS, las comparaciones por parejas deben corregirse a mano porque su p no está ajustada.|F|La columna «Sig. ajust.» de la tabla de comparaciones por parejas ya está corregida por comparaciones múltiples.",
      "Con n iguales, la F clásica es relativamente robusta ante varianzas desiguales.|V",
      "Hay consenso en que el ANOVA de Welch debe ser siempre la opción por defecto con tres o más grupos.|F|Es un debate abierto: si debe serlo siempre, como se propone con dos grupos, o solo con n desiguales."
    ],
    q: [
      "Tres grupos de 8, 20 y 30 personas tienen varianzas muy distintas, y el de 8 es el más variable. ¿Qué análisis es más adecuado?|ANOVA de Welch|ANOVA clásico|Kruskal-Wallis|Con n desiguales y el grupo pequeño más variable, la F clásica es liberal. Kruskal-Wallis también sufre con la heterocedasticidad.",
      "Un estudio compara la posición en una clasificación (VD ordinal) entre cuatro grupos de personas distintas. ¿Qué prueba corresponde?|Kruskal-Wallis|Prueba de Friedman|Mann-Whitney|Con VD ordinal y más de dos grupos independientes, la alternativa por rangos al ANOVA es Kruskal-Wallis.",
      "¿Qué hace el ANOVA de Welch con las varianzas de los grupos?|Pondera cada grupo por separado|Las combina en una sola MC_intra|Las sustituye por rangos medios|No combina las varianzas en una MC_intra: pondera cada grupo según su tamaño y su varianza y corrige los gl.",
      "Las mismas personas pasan por cuatro condiciones y la VD es ordinal. ¿Qué prueba de rangos corresponde?|Friedman|Kruskal-Wallis|Mann-Whitney|Kruskal-Wallis es para grupos independientes. Con medidas repetidas, la alternativa por rangos es Friedman."
    ],
    inc: [
      "Sobre las alternativas al ANOVA clásico|Kruskal-Wallis compara siempre medianas|Welch corrige los gl del denominador|Brown-Forsythe modifica el denominador|Kruskal-Wallis no compara medianas salvo que las distribuciones tengan la misma forma y dispersión."
    ],
    seq: [],
    cls: [
      "Diseño de cada prueba|Grupos independientes: Mann-Whitney; Kruskal-Wallis; ANOVA de Welch|Medidas relacionadas: Wilcoxon de rangos con signo; Friedman; t relacionada"
    ] }
] },
{ n: 12, t: "Después de la F: contrastes y comparaciones múltiples", cap: 5, pir: "media", mods: [
  { t: "Contrastes planificados y ortogonalidad",
    tip: "Un contraste es una comparación definida con coeficientes que suman cero, y se pone a prueba con una t que usa MC_intra y los gl del error. Dos contrastes son ortogonales si, con n iguales, la suma de los productos de sus coeficientes es cero. Con k grupos caben k − 1, y juntos reparten la SC entre. Dan más potencia y claridad y no dependen de la F global, pero deben estar planificados de verdad.",
    v: [
      "Contraste=Comparación entre medias con coeficientes que suman cero",
      "Contraste complejo=Compara un grupo con la media de otros, algo imposible por pares",
      "Contrastes ortogonales=Su suma de productos de coeficientes es nula con n iguales",
      "Comparación post hoc=Comparación exploratoria, a posteriori",
      "Contraste polinómico=Prueba tendencias lineales o cuadráticas con niveles ordenados",
      "HARKing=Presentar como planificado lo elegido tras mirar las medias",
      "Preregistro=Lugar ideal para fijar los contrastes antes de ver los datos",
      "k − 1=Número máximo de contrastes ortogonales con k grupos"
    ],
    g: [
      "Con cuatro grupos caben como máximo ___ contrastes ortogonales.|3|4|6",
      "En el ejemplo, SC_C1 vale 36 y SC_C2 vale 12, que suman la SC ___.|entre|intra|total",
      "Los coeficientes (2, −1, −1) definen un contraste ___.|complejo|simple|ortogonal",
      "Cada contraste se pone a prueba con una t que usa ___ como estimación de la varianza del error.|MC_intra|MC_entre|SC_total",
      "Un contraste puede ser significativo aunque el ANOVA no lo sea, porque la F ___ el efecto entre todas las diferencias posibles.|reparte|duplica|elimina"
    ],
    tf: [
      "Los coeficientes de un contraste deben sumar cero.|V",
      "Hay consenso en que los contrastes planificados y ortogonales nunca necesitan corrección de α.|F|Es un debate abierto. Con pocos ortogonales muchos autores no corrigen, y con muchos o no ortogonales conviene corregir.",
      "Un contraste planificado solo puede interpretarse si la F global del ANOVA es significativa.|F|No depende de la F global: puede ser significativo aunque el ANOVA no lo sea.",
      "Elegir los contrastes tras mirar las medias y presentarlos como planificados es una forma de HARKing.|V"
    ],
    q: [
      "Un equipo compara placebo, dosis baja y dosis alta, y antes de recoger datos plantea si el placebo difiere de los fármacos. ¿Qué coeficientes expresan ese contraste?|(2, −1, −1)|(1, −1, 0)|(0, 1, −1)|El placebo frente a la media de las dos dosis es un contraste complejo: 2 para el placebo y −1 para cada dosis.",
      "Con tres grupos de igual tamaño, ¿qué pareja de contrastes es ortogonal?|(1, 0, −1) y (1, −2, 1)|(1, 0, −1) y (1, −1, 0)|(2, −1, −1) y (1, −1, 0)|La suma de productos es 1 + 0 − 1, que da 0. En las otras parejas da 1 y 3.",
      "¿Qué gl tiene la t de un contraste planificado?|Los del error del ANOVA|Los del factor del ANOVA|Los de la SC total|Se usa MC_intra como estimación de la varianza del error, con sus gl: en el ejemplo de repaso, 15.",
      "¿Qué ventaja tienen los contrastes planificados frente a explorar todos los pares?|Más potencia, con pocas comparaciones|Protegen cualquier contraste posible|No requieren declarar las hipótesis|Al hacer solo las comparaciones que interesan ganan potencia, y cada contraste traduce una hipótesis."
    ],
    inc: [
      "Sobre los contrastes planificados|Con k grupos caben k contrastes ortogonales|Sus coeficientes suman cero|Pueden comparar un grupo con la media de otros|Con k grupos caben como máximo k − 1, tantos como gl tiene el factor."
    ],
    seq: [],
    cls: [] },
  { t: "Corregir α: Bonferroni y Holm",
    tip: "Bonferroni contrasta cada una de las m comparaciones con α/m, o multiplica cada p por m. Es sencilla, sirve para cualquier comparación y no requiere independencia, pero es cada vez más conservadora al crecer m. Holm (1979) es su versión secuencial: ordena los p y relaja el umbral tras cada rechazo, controla igual la FWER y nunca es menos potente. Ambas protegen solo la familia que se declara.",
    v: [
      "Bonferroni=Contrasta cada una de las m comparaciones con α/m",
      "Holm (1979)=Corrección secuencial con umbrales α/m, α/(m − 1)…",
      "p ajustado de Bonferroni=p multiplicado por m, sin pasar de 1",
      "Conservadora=Paga la protección contra el error tipo I con más errores tipo II",
      "Familia de contrastes=Conjunto de comparaciones cuya FWER se controla",
      "Simmons et al. (2011)=Describieron los grados de libertad del investigador",
      "Último umbral de Holm=α/1, es decir, el α completo",
      "Monotonía de Holm=Cada p ajustado no puede ser menor que el anterior"
    ],
    g: [
      "Con seis comparaciones, el umbral de Bonferroni es ___.|0,0083|0,0167|0,0050",
      "Con Holm y cuatro comparaciones, el segundo p más pequeño se compara con ___.|0,0167|0,0125|0,0250",
      "En Holm, el i-ésimo p se multiplica por ___ para obtener su p ajustado.|(m − i + 1)|(m − i)|(i + 1)",
      "Bonferroni es cada vez más ___ a medida que crece m.|conservadora|liberal|potente",
      "En el ejemplo de los tres formatos, Bonferroni detecta una diferencia y Holm detecta ___.|tres|dos|una"
    ],
    tf: [
      "Holm controla la FWER igual que Bonferroni y es siempre al menos igual de potente.|V",
      "Bonferroni requiere que las pruebas sean independientes entre sí.|F|No requiere independencia: sirve para pares, contrastes complejos o pruebas sobre variables distintas.",
      "En Holm, si el p más pequeño no es menor que α/m, se sigue comparando el siguiente con α/(m − 1).|F|Si el primero no es menor que α/m, se paran las comparaciones y no se rechaza ninguna hipótesis.",
      "Quien hace veinte comparaciones y corrige solo por las cinco que informa tiene un control ilusorio de la FWER.|V"
    ],
    q: [
      "Tras un ANOVA, un investigador obtiene tres p sin ajustar: 0,010, 0,030 y 0,040. Con Holm y una FWER de 0,05, ¿qué ocurre?|Se rechaza solo la primera|Se rechazan las tres hipótesis|No se rechaza ninguna de ellas|0,010 es menor que 0,0167 y se rechaza. 0,030 no es menor que 0,025, así que el procedimiento se detiene.",
      "Un estudio hace cuatro comparaciones con Bonferroni para mantener la FWER en 0,05. ¿Con qué α se contrasta cada una?|0,0125|0,0250|0,0167|El umbral es α/m, es decir, 0,05/4, que da 0,0125.",
      "Con Bonferroni y cuatro comparaciones, una de ellas da un p sin ajustar de 0,020. ¿Cuál es su p ajustado?|0,080|0,020|0,005|Se multiplica por m: 0,020 · 4 da 0,080, que no es menor que 0,05.",
      "¿Por qué Holm es al menos igual de potente que Bonferroni?|Relaja el umbral tras cada rechazo|Se basa en el rango estudentizado|Exige que las pruebas sean independientes|Una vez rechazada una hipótesis, queda una comparación menos de la que protegerse, y el umbral se relaja."
    ],
    inc: [
      "Sobre Bonferroni y Holm|Holm deja de controlar la FWER a cambio de potencia|Bonferroni multiplica cada p por m, sin pasar de 1|Holm ordena los p de menor a mayor|Holm controla la FWER igual que Bonferroni y es al menos igual de potente."
    ],
    seq: [
      "Procedimiento de Holm|Ordenar los m valores p de menor a mayor>Comparar el más pequeño con α/m>Si es menor, rechazar y comparar el siguiente con α/(m − 1)>Seguir relajando el umbral hasta α/1>Detenerse en el primer p que no sea menor que su umbral"
    ],
    cls: [] },
  { t: "Tukey, Scheffé, Games-Howell y Dunnett",
    tip: "Tukey (HSD) compara todos los pares con el rango estudentizado y, en ese caso, es más potente que Bonferroni. Scheffé protege cualquier contraste, incluidos los complejos sugeridos por los datos, y es la más conservadora para pares. Games-Howell admite varianzas desiguales, como un Welch por pares. Dunnett compara cada grupo con un único control. La LSD de Fisher no corrige α y solo controla la FWER con tres grupos y F previa significativa.",
    v: [
      "Tukey (HSD)=Compara todos los pares con el rango estudentizado",
      "Rango estudentizado=Distancia entre la media mayor y la menor dividida por el error típico",
      "Tukey-Kramer=Variante de Tukey para n desiguales",
      "Scheffé (1953)=Protege cualquier contraste posible, incluidos los complejos",
      "Games-Howell=Comparaciones por pares sin suponer varianzas iguales",
      "Dunnett=Compara cada grupo experimental con un único control",
      "LSD de Fisher=Pruebas t por pares sin corregir α, «DMS» en SPSS",
      "HSD=Siglas de honestly significant difference"
    ],
    g: [
      "Con cuatro grupos, Dunnett hace ___ comparaciones frente al control.|3|4|6",
      "La versión HSD de Tukey procede de un manuscrito de ___.|1953|1949|1976",
      "Games-Howell es la compañera natural del ANOVA de ___.|Welch|Fisher|Friedman",
      "La LSD de Fisher protegida solo controla la FWER con ___ grupos.|tres|cuatro|cinco",
      "La tabla «Comparaciones múltiples» de SPSS muestra cada par ___.|dos veces|una vez|tres veces"
    ],
    tf: [
      "Scheffé es la prueba más conservadora cuando solo se comparan pares.|V",
      "Dunnett es más potente que Tukey cuando se quieren comparar todos los pares entre sí.|F|Dunnett solo compara cada grupo con un control. Es más potente que Tukey para esa pregunta, no para todos los pares.",
      "Games-Howell exige que todos los grupos tengan el mismo tamaño.|F|Está pensada para varianzas desiguales, con n iguales o no.",
      "Con todos los pares y varianzas parecidas, Tukey es más potente que Bonferroni.|V"
    ],
    q: [
      "Un estudio compara tres aplicaciones de meditación con una lista de espera, y solo interesa cada aplicación frente a la lista. ¿Qué procedimiento conviene?|Dunnett|Tukey|Scheffé|Dunnett compara cada grupo con un único control. Al hacer solo k − 1 comparaciones, es más potente que Tukey para esa pregunta.",
      "Tras un ANOVA de Welch con varianzas claramente distintas se quieren comparar todos los pares. ¿Qué prueba es adecuada?|Games-Howell|Tukey-Kramer|LSD de Fisher|Games-Howell usa las varianzas de cada par y gl corregidos. Tukey-Kramer resuelve los n desiguales, no las varianzas desiguales.",
      "¿Qué procedimiento conviene para explorar un contraste complejo sugerido por los datos?|Scheffé|Tukey|Dunnett|Scheffé protege cualquier contraste posible, incluidos los decididos tras ver los datos.",
      "¿En qué se basa la prueba de Tukey?|En el rango estudentizado|En la distribución χ²|En pruebas t sin corregir|Calcula una diferencia mínima a partir del rango estudentizado: todo par que la supere es significativo."
    ],
    inc: [
      "Sobre los procedimientos post hoc|La LSD de Fisher corrige α por pares|Games-Howell admite varianzas distintas|Tukey-Kramer sirve con n desiguales|La LSD hace pruebas t por pares sin corregir α y solo controla la FWER con tres grupos y F previa."
    ],
    seq: [],
    cls: [
      "Qué compara cada prueba|Todos los pares: Tukey; Games-Howell; LSD de Fisher|Cada grupo frente al control: Dunnett|Cualquier contraste: Scheffé"
    ] },
  { t: "Elegir el procedimiento e informar",
    tip: "El procedimiento se elige antes de ver los datos, según la pregunta y los supuestos: contrastes planificados para hipótesis previas, Tukey para todos los pares, Games-Howell con varianzas o n desiguales, Dunnett frente a un control, Holm para pocas comparaciones y Scheffé para contrastes sugeridos por los datos. Solo la LSD exige una F significativa. Hay que informar el procedimiento, la familia, la diferencia con su IC, el p ajustado y una d por pares.",
    v: [
      "Diferencia con su IC=Dato que debe acompañar al p ajustado de cada comparación",
      "Familia completa=Todas las comparaciones hechas, que deben declararse",
      "F previa=Requisito que solo necesita la LSD de Fisher",
      "Comparaciones exploratorias=Las no planificadas, que deben identificarse como tales",
      "Pruebas de equivalencia=Herramienta, junto al factor de Bayes, para apoyar la igualdad",
      "Tras Kruskal-Wallis=Comparaciones por parejas con p ajustado",
      "Lakens et al. (2018)=Equilibrio entre errores tipo I y II según su coste en cada estudio",
      "IC ajustado=Intervalo de la diferencia corregido por multiplicidad, si el programa lo da"
    ],
    g: [
      "Con los datos de repaso, Tukey da para silencio frente a música con letra una diferencia de ___ puntos.|4,0|2,0|6,0",
      "Para unas pocas comparaciones seleccionadas se recomienda ___.|Holm|Scheffé|Dunnett",
      "Si A difiere de C y B no, la diferencia entre A y B debe ___ directamente.|contrastarse|suponerse|descartarse",
      "La d de 1,69 del ejemplo es tan grande porque procede de muestras muy ___.|pequeñas|grandes|desiguales",
      "Para todos los pares con varianzas o n desiguales, la guía recomienda ___.|Games-Howell|Tukey|Scheffé"
    ],
    tf: [
      "No se pueden hacer comparaciones post hoc si la F del ANOVA no es significativa.|F|Solo la LSD protegida exige F previa. Tukey, Games-Howell, Holm, Bonferroni y Dunnett controlan la FWER por sí mismos.",
      "Una comparación no significativa demuestra que los dos grupos son iguales.|F|No lo demuestra. Para apoyar la igualdad están las pruebas de equivalencia y los factores de Bayes.",
      "Puede ocurrir que la F global no sea significativa y una comparación concreta sí lo sea.|V",
      "El informe debe indicar si las comparaciones eran planificadas o exploratorias y cuántas formaban la familia.|V"
    ],
    q: [
      "La F global de un ANOVA con cuatro grupos da p de 0,08, y el equipo había previsto comparar todos los pares con Tukey. ¿Qué es correcto?|Puede aplicar Tukey igualmente|Debe detener ahí el análisis|Solo puede usar la LSD protegida|Tukey controla la FWER por sí misma. La F previa solo es necesaria en la LSD protegida, que aquí no podría aplicarse.",
      "Un estudio halla que A difiere de C (p de 0,01) y que B no difiere de C (p de 0,20). ¿Qué puede concluirse sobre A y B?|Nada sin contrastarlo directamente|Que A y B difieren de forma significativa|Que A y B son iguales en la población|La diferencia entre significativo y no significativo no es significativa en sí misma (Gelman y Stern, 2006).",
      "¿Qué procedimiento recomienda la guía después de una prueba de Kruskal-Wallis?|Pares con p ajustado|Tukey con rangos medios|LSD sin corrección|Tras Kruskal-Wallis se hacen comparaciones por parejas con p ajustado, la columna «Sig. ajust.» de SPSS.",
      "¿Cuándo debe elegirse el procedimiento de comparaciones múltiples?|Antes de ver los datos|Tras ver la F global|Al mirar las medias|Lo ilegítimo es probar procedimientos hasta que uno «salga»: la elección se fija de antemano."
    ],
    inc: [
      "Sobre el informe de las comparaciones múltiples|Basta con dar el p ajustado de cada par|Hay que indicar cuántas comparaciones hubo|Conviene dar una d de Cohen por pares|También hay que informar la diferencia de medias con su IC y un tamaño del efecto por pares."
    ],
    seq: [],
    cls: [
      "¿Exige una F global significativa?|Sí: LSD de Fisher protegida|No: Tukey; Games-Howell; Holm; Bonferroni; Dunnett"
    ] }
] }
);

// SAIMAP Psicología · Estadística II · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Medidas repetidas: esfericidad y correcciones", cap: 5, pir: "alta", mods: [
  { t: "Extraer la variabilidad de los sujetos",
    tip: "En un diseño intrasujeto las mismas personas pasan por todas las condiciones, y cada una es su propio control. La SC total se divide en SC de sujetos y SC intrasujeto, y esta, en SC de tratamiento y SC residual. La SC de sujetos sale del error, así que el denominador de F se reduce mucho más de lo que se pierde en gl. El residual es la interacción sujeto × tratamiento, con (k − 1)(n − 1) gl.",
    v: [
      "Diseño intrasujeto=Las mismas personas pasan por todas las condiciones o se miden en varios momentos",
      "ANOVA de medidas repetidas=Análisis para tres o más condiciones medidas en las mismas personas",
      "SC de sujetos=Variabilidad por diferencias estables entre personas, que deja de contar como error",
      "SC residual=Interacción sujeto × tratamiento: lo inconsistente del efecto entre personas",
      "gl del residual=(k − 1)(n − 1), con n personas y k condiciones",
      "gl de los sujetos=n − 1, siendo n el número de personas",
      "t relacionada=Prueba suficiente cuando el factor intrasujeto tiene solo dos medidas",
      "η² parcial=Índice por defecto en SPSS que excluye la variabilidad de los sujetos"
    ],
    g: [
      "En el ejemplo de la lectura, el ___ de la variabilidad total se debía a diferencias entre personas.|74 %|61 %|16 %",
      "Con 8 personas y 3 condiciones, el residual tiene ___ grados de libertad.|14|21|7",
      "Con n personas y k condiciones, los gl totales son ___.|nk − 1|n(k − 1)|(k − 1)(n − 1)",
      "La SC de sujetos no suele ___, porque no interesa saber que las personas difieren.|contrastarse|calcularse|estimarse",
      "Analizados como tres grupos distintos, los datos de la lectura daban un error de ___ gl.|21|14|23"
    ],
    tf: [
      "Al pasar de grupos independientes a medidas repetidas se pierden gl de error, pero el denominador de F se reduce mucho más.|V",
      "En el ANOVA de medidas repetidas, la SC de sujetos se contrasta con su propia F para comprobar que las personas difieren.|F|No suele contrastarse: no interesa saber que las personas difieren. Simplemente deja de contar como error.",
      "El residual del ANOVA de medidas repetidas refleja lo inconsistente que es el efecto de una persona a otra.|V",
      "El η² parcial de un diseño de medidas repetidas es comparable con el η² de un diseño entre grupos.|F|Excluye la variabilidad de los sujetos. El comparable es el η² generalizado (Olejnik y Algina, 2003)."
    ],
    q: [
      "Un equipo mide a 12 pacientes en 4 sesiones de tratamiento y analiza los datos con un ANOVA de medidas repetidas. ¿Qué gl tienen el efecto y el error?|3 y 33|3 y 44|4 y 33|Efecto: k − 1, que da 3. Error: (k − 1)(n − 1), es decir, 3 · 11, que da 33. Los 44 serían N − k, propios del diseño entre grupos.",
      "¿Por qué el ANOVA de medidas repetidas suele ser más potente que el de grupos independientes?|Saca del error las diferencias entre personas|Tiene más gl en el término de error|No exige supuestos sobre las varianzas|Tiene menos gl de error, pero la MC de error se reduce mucho más. Además, exige esfericidad.",
      "En el ejemplo de la lectura, ¿qué ocurría al analizar los mismos datos como si fueran tres grupos distintos?|La F dejaba de ser significativa|La F aumentaba por tener más gl|Cambiaban las medias de las condiciones|Con el error entre grupos, F(2, 21) valía 1,98 y p, 0,163: mismas medias, conclusión opuesta.",
      "¿Qué cociente forma la F de un ANOVA de medidas repetidas de un factor?|MC de tratamiento entre MC residual|MC de tratamiento entre MC de sujetos|MC de sujetos entre MC residual|El denominador es el residual, la interacción sujeto × tratamiento, no la variabilidad entre personas."
    ],
    inc: [
      "Sobre la partición en medidas repetidas|La SC de sujetos forma parte del término de error|La SC intrasujeto incluye tratamiento y residual|El residual tiene (k − 1)(n − 1) gl|La SC de sujetos sale del error. Es en el ANOVA entre grupos donde las diferencias individuales forman parte del error."
    ],
    seq: [],
    cls: [
      "Diseño|Entre grupos: diferencias individuales dentro del error; error con N − k gl|Medidas repetidas: SC de sujetos fuera del error; error con (k − 1)(n − 1) gl"
    ] },
  { t: "Esfericidad, prueba de Mauchly y corrección épsilon",
    tip: "Hay esfericidad cuando las varianzas de las diferencias entre cada par de niveles son iguales, y con dos niveles se cumple siempre. Si falla, la F sin corregir es liberal. La prueba de Mauchly tiene poca potencia con n pequeños, así que se recomienda aplicar siempre la corrección épsilon: multiplica los gl por ε, no cambia F y aumenta el valor p.",
    v: [
      "Esfericidad=Igualdad de las varianzas de las diferencias entre todos los pares de niveles",
      "Simetría compuesta=Varianzas iguales y covarianzas iguales, condición suficiente del supuesto",
      "Prueba de Mauchly=Contraste cuya H₀ es que hay esfericidad, con un estadístico W",
      "Épsilon (ε)=Índice de alejamiento de la esfericidad, de 1/(k − 1) a 1",
      "Greenhouse-Geisser=Corrección de los gl por ε que tiende a ser conservadora",
      "Huynh-Feldt=Corrección más liberal cuyo ε puede superar 1 y entonces se trunca",
      "Límite inferior=Corrección que usa el ε mínimo, la más severa",
      "Regla de Girden (1992)=Huynh-Feldt si ε supera 0,75 y Greenhouse-Geisser si queda por debajo"
    ],
    g: [
      "Con cuatro niveles hay ___ diferencias entre pares cuyas varianzas deben ser iguales.|seis|cuatro|tres",
      "Con cuatro niveles, el valor mínimo de ε es ___.|0,33|0,25|0,50",
      "Si falla la esfericidad, la F sin corregir se vuelve ___.|liberal|conservadora|robusta",
      "El estadístico W de Mauchly vale ___ con esfericidad perfecta.|1|0|0,5",
      "La corrección épsilon multiplica los ___ por ε.|gl|valores de F|valores p"
    ],
    tf: [
      "Con un factor intrasujeto de dos niveles, la esfericidad se cumple siempre.|V",
      "Al aplicar la corrección de Greenhouse-Geisser, el valor de F disminuye y por eso aumenta p.|F|F no cambia. Se multiplican los gl por ε, cambia la distribución de referencia y el valor p aumenta.",
      "En el ejemplo de la lectura, Mauchly no fue significativa aunque ε indicaba una desviación notable.|V",
      "El ANOVA de medidas repetidas supone independencia entre las medidas de una misma persona.|F|Supone independencia entre personas, no entre las medidas de una misma persona."
    ],
    q: [
      "Con 12 participantes, la prueba de Mauchly da un valor p de 0,15. ¿Qué es lo más adecuado?|Informar la F corregida por ε|Concluir que hay esfericidad|Pasar a la prueba de Friedman|Con n pequeño Mauchly tiene poca potencia. Corregir siempre protege y, si hay esfericidad, apenas cambia nada.",
      "Con tres niveles, el ε de Greenhouse-Geisser vale 0,5. ¿Qué indica?|La máxima violación posible|Una esfericidad casi perfecta|Que hay que dividir F entre 2|El mínimo de ε es 1/(k − 1), que con tres niveles da 0,5. La corrección multiplica los gl, no divide F.",
      "Un ANOVA con 11 personas y 3 condiciones da un ε de Greenhouse-Geisser de 0,70. ¿Qué gl se informan?|1,4 y 14|2 y 20|1 y 10|Se multiplican por ε los gl sin corregir, 2 y 20. Los gl 1 y 10 corresponden al límite inferior.",
      "Según la regla orientativa de Girden, con un ε de 0,82 se usa…|Huynh-Feldt|Greenhouse-Geisser|el límite inferior|Girden (1992) propone Huynh-Feldt si ε supera 0,75 y Greenhouse-Geisser si queda por debajo."
    ],
    inc: [
      "Sobre la prueba de Mauchly|Es fiable con muestras pequeñas|Su H₀ es que hay esfericidad|Se aproxima con una χ²|Como las demás pruebas previas de supuestos, tiene poca potencia con n pequeños y demasiada con n grandes."
    ],
    seq: [],
    cls: [
      "Corrección de la esfericidad|Greenhouse-Geisser: conservadora; ε menor que 0,75 según Girden|Huynh-Feldt: más liberal; puede superar 1 y se trunca|Límite inferior: ε mínimo; la más severa"
    ] },
  { t: "Comparaciones posteriores, enfoque multivariado y modelos mixtos",
    tip: "Tras una F significativa se recomiendan las t relacionadas por pares con corrección de Bonferroni o Holm, porque cada una usa su propio término de error y no depende de la esfericidad. Si los niveles están ordenados, interesan los contrastes polinómicos. El MANOVA no exige esfericidad, pero necesita bastantes más personas que niveles. Los modelos lineales mixtos aprovechan los datos incompletos y modelan las covarianzas.",
    v: [
      "Comparaciones por pares=t relacionadas entre cada par de niveles con α corregido",
      "DMS de SPSS=LSD de Fisher, sin ninguna corrección de α",
      "Contrastes polinómicos=Tendencias lineal, cuadrática y otras para niveles ordenados",
      "Tendencia cuadrática=Con tres momentos, por ejemplo, mejora del pre al post y luego estabilización",
      "Enfoque multivariado=Trata las k − 1 diferencias como varias VD y no exige esfericidad",
      "Lambda de Wilks=Estadístico de la tabla «Pruebas multivariadas», junto a la traza de Pillai",
      "Modelos lineales mixtos=Modelan cada observación con un efecto aleatorio de la persona",
      "Casos completos=Únicos que usa el ANOVA de medidas repetidas, que elimina a quien le falte una medida"
    ],
    g: [
      "En medidas repetidas no se recomienda ___, pensado para un término de error común.|Tukey|Holm|Bonferroni",
      "En el ejemplo de la lectura, solo la diferencia entre silencio y música ___ resistió la corrección.|con letra|instrumental|ambiental",
      "En SPSS, las comparaciones por pares se piden en ___.|Medias marginales estimadas|Pruebas multivariadas|Contrastes intrasujetos",
      "Con muestras pequeñas, el MANOVA suele ser ___ potente que la F corregida.|menos|más|igual de",
      "Los modelos mixtos ___ la estructura de covarianzas en lugar de suponer esfericidad.|modelan|ignoran|corrigen"
    ],
    tf: [
      "Las comparaciones por pares con t relacionadas y corrección de Holm no dependen de la esfericidad.|V",
      "La opción «DMS» de SPSS aplica un procedimiento de Tukey.|F|DMS es la diferencia mínima significativa, la LSD de Fisher, sin corrección.",
      "El enfoque multivariado exige esfericidad, pero tolera mejor los datos incompletos.|F|No exige esfericidad, y también elimina el caso al que le falta una medida. Los datos incompletos los aprovechan los modelos mixtos.",
      "Que dos diferencias no resulten significativas con ocho personas no demuestra que no existan.|V"
    ],
    q: [
      "En un estudio longitudinal de cinco oleadas, muchos participantes faltan al menos a una medición. ¿Qué análisis aprovecha todos sus datos?|Un modelo lineal mixto|Un ANOVA con corrección ε|El enfoque multivariado|El ANOVA de medidas repetidas y el MANOVA eliminan a quien le falte una sola medida.",
      "¿Por qué se recomiendan las t relacionadas con Bonferroni u Holm tras un ANOVA de medidas repetidas?|Cada una usa el error de su diferencia|Comparten un mismo término de error|Son más potentes que la F global|Cada comparación usa la varianza de esa diferencia concreta, así que no depende de la esfericidad.",
      "Un ensayo mide la ansiedad en las semanas 0, 4, 8 y 12 de tratamiento. ¿Qué análisis suele interesar más que las diferencias por pares?|Los contrastes de tendencia|La prueba M de Box|Las pruebas intersujetos|Con niveles ordenados suele interesar la forma del cambio, que muestran los contrastes polinómicos.",
      "¿Cuál es la principal limitación del enfoque multivariado?|Necesita muchas más personas que niveles|Exige el supuesto de esfericidad|No ofrece la lambda de Wilks|Con muestras pequeñas suele ser menos potente que la F corregida."
    ],
    inc: [
      "Sobre los enfoques de medidas repetidas|El ANOVA con corrección ε usa todos los datos|El MANOVA no exige esfericidad|El ANOVA sin corregir es liberal sin esfericidad|El ANOVA, con o sin corrección, elimina el caso incompleto. Solo el modelo mixto usa todos los datos."
    ],
    seq: [],
    cls: [
      "Requisito de esfericidad|La exige: ANOVA univariado sin corregir; factor intrasujeto del ANOVA mixto|No la exige: t por pares con Holm; MANOVA; modelo lineal mixto"
    ] },
  { t: "La prueba de Friedman y la lectura de la salida",
    tip: "La prueba de Friedman ordena las puntuaciones dentro de cada persona y compara las sumas de rangos de las condiciones con una χ² de k − 1 gl. Su tamaño del efecto habitual es la W de Kendall. Exige independencia entre personas y una VD al menos ordinal, compara rangos y no medias, y es menos potente si se cumplen los supuestos del ANOVA. En la salida del ANOVA se lee la fila corregida de los efectos intrasujetos.",
    v: [
      "Prueba de Friedman=Alternativa por rangos al ANOVA de un factor de medidas repetidas",
      "Rangos dentro de cada persona=Ordenación de 1 a k de las puntuaciones de cada participante",
      "W de Kendall=Tamaño del efecto de Friedman, de 0 a 1 según el acuerdo entre personas",
      "Friedman (1937)=Autor de la alternativa por rangos para tres o más medidas relacionadas",
      "Wilcoxon corregido=Comparaciones por pares tras un Friedman significativo",
      "Efectos intrasujetos=Tabla con la F sin corregir y con las tres correcciones",
      "Efectos intersujetos=En un factor, solo contrasta que la media general sea 0",
      "Estadísticos descriptivos=Tabla cuya N solo cuenta los casos completos"
    ],
    g: [
      "En la prueba de Friedman, las puntuaciones se ordenan ___.|dentro de cada persona|entre todas las personas|dentro de cada condición",
      "En el ejemplo de la lectura, la χ² de Friedman valía ___.|9,00|11,15|5,78",
      "La W de Kendall del ejemplo, 9 entre 16, vale aproximadamente ___.|0,56|0,61|0,16",
      "En SPSS, Friedman está en Pruebas no paramétricas, Muestras ___.|relacionadas|independientes|múltiples",
      "En JASP, el ANOVA de medidas repetidas tiene además una versión ___.|bayesiana|robusta|multinivel"
    ],
    tf: [
      "Tras un Friedman significativo, las comparaciones por pares se hacen con la U de Mann-Whitney.|F|Son medidas relacionadas: se usa Wilcoxon con corrección. Mann-Whitney es para grupos independientes.",
      "Si se cumplen los supuestos del ANOVA de medidas repetidas, Friedman es menos potente.|V",
      "Una W de Kendall igual a 1 indica que todas las personas ordenan igual las condiciones.|V",
      "En la tabla de Mauchly de SPSS, lo que más interesa es su valor p.|F|Lo que más interesa es el valor de ε, porque la corrección se recomienda siempre."
    ],
    q: [
      "Diez pacientes valoran en una escala ordinal tres versiones de un mismo folleto. ¿Qué prueba no paramétrica corresponde?|Friedman|Kruskal-Wallis|Wilcoxon|Mismas personas en tres condiciones: Friedman. Kruskal-Wallis es para grupos independientes, y Wilcoxon, para dos medidas.",
      "¿Cuántos gl tiene la χ² de Friedman con 12 personas y 4 condiciones?|3|11|33|Los gl son k − 1, que da 3. El número de personas entra en el estadístico, no en sus gl.",
      "En la salida de un ANOVA de un factor intrasujeto, ¿qué contrasta la tabla de efectos intersujetos?|Que la media general sea 0|Que los niveles difieran entre sí|Que haya esfericidad|Contiene solo la intersección, que en un diseño de un factor no interesa.",
      "¿Qué debe indicar el informe APA de un ANOVA de medidas repetidas, además de F, gl, p y η²p?|La corrección aplicada y su ε|El estadístico W de Mauchly|La SC de sujetos y sus gl|El informe de la lectura añade η²G y la corrección de Greenhouse-Geisser con su ε de 0,62."
    ],
    inc: [
      "Sobre la prueba de Friedman|Compara las medias de las condiciones|Ordena los datos dentro de cada persona|Su χ² tiene k − 1 grados de libertad|Friedman compara rangos, no medias."
    ],
    seq: [
      "Prueba de Friedman paso a paso|Ordenar de 1 a k las puntuaciones de cada persona>Sumar los rangos de cada condición>Calcular la χ² con k − 1 gl>Calcular la W de Kendall>Comparar por pares con Wilcoxon corregido"
    ],
    cls: [
      "Prueba no paramétrica según el diseño|Grupos independientes: Mann-Whitney; Kruskal-Wallis|Medidas relacionadas: Wilcoxon; Friedman"
    ] }
] },
{ n: 14, t: "Dos factores a la vez: interacción y diseños mixtos", cap: 5, pir: "alta", mods: [
  { t: "Efectos principales e interacción",
    tip: "En un diseño factorial se cruzan todos los niveles de dos o más factores, y cada combinación es una celda. El ANOVA de dos factores contrasta tres efectos: los dos principales, sobre las medias marginales, y la interacción, que en un 2 × 2 es una diferencia de diferencias. Los gl son (a − 1), (b − 1), (a − 1)(b − 1) y N − ab, y los tres efectos comparten la MC de error. Una interacción no significativa no demuestra que no exista.",
    v: [
      "Diseño factorial=Cruza todos los niveles de dos o más factores",
      "Celda=Cada combinación de un nivel de A con un nivel de B",
      "Efecto principal=Diferencia entre medias marginales de un factor, promediando sobre el otro",
      "Interacción=El efecto de un factor depende del nivel en que esté el otro",
      "Diferencia de diferencias=Forma que toma la interacción en un diseño 2 × 2",
      "Media marginal=Media de un nivel de un factor promediando los niveles del otro",
      "gl del error factorial=N − ab, con a y b niveles en cada factor",
      "SC de tipo III=Evalúan cada efecto ajustado por los demás, por defecto en SPSS"
    ],
    g: [
      "Un diseño 2 × 3 tiene ___ celdas.|seis|cinco|tres",
      "En el ejemplo, la cafeína añade 1 punto con sueño normal y ___ con privación.|7|6|4",
      "En un ANOVA 3 × 4 entre grupos, la interacción tiene ___ gl.|6|12|5",
      "Los tres efectos del factorial se contrastan con la misma ___.|MC de error|SC total|media marginal",
      "Con celdas de distinto tamaño, los factores dejan de ser ___ entre sí.|independientes|significativos|aleatorios"
    ],
    tf: [
      "Los efectos principales y la interacción son, en principio, independientes: cualquier combinación es posible.|V",
      "En el ejemplo de la cafeína, la interacción no significativa demuestra que la cafeína tiene el mismo efecto con y sin sueño.|F|Con diez personas por celda la potencia es baja. El IC de la diferencia de diferencias va de −1,70 a 13,70.",
      "Una ventaja del diseño factorial es que cada participante informa sobre los dos factores.|V",
      "En el ANOVA de dos factores entre grupos, cada efecto se contrasta con un término de error distinto.|F|Los tres efectos comparten la MC de error. Los dos términos de error son propios del ANOVA mixto."
    ],
    q: [
      "Un estudio 2 × 3 entre grupos asigna 8 personas a cada celda. ¿Cuántos gl tiene el error?|42|47|40|N es 48 y ab es 6, así que N − ab da 42. Los 47 son los gl totales.",
      "En el ejemplo de la cafeína, ¿cuánto vale la diferencia de diferencias?|6 puntos|7 puntos|4 puntos|La cafeína añade 7 puntos con privación y 1 con sueño normal: 7 − 1 da 6. Los 4 puntos separan las medias marginales de la cafeína.",
      "¿Qué define la interacción A × B?|El efecto de A depende del nivel de B|A y B tienen efectos principales significativos|Las medias marginales de A y B coinciden|Hay interacción cuando el efecto de un factor cambia según el nivel en que está el otro.",
      "¿Por qué SPSS usa por defecto SC de tipo III en el ANOVA factorial?|Ajustan cada efecto por los demás|Eliminan el supuesto de varianzas similares|Igualan el tamaño de todas las celdas|Con celdas desiguales los factores dejan de ser independientes, y las SC de tipo III evalúan cada efecto ajustado por los demás."
    ],
    inc: [
      "Sobre el ANOVA de dos factores|Los gl de la interacción son (a − 1) + (b − 1)|Cada efecto principal promedia sobre el otro factor|Sus supuestos son los del ANOVA de un factor|Los gl de la interacción son el producto (a − 1)(b − 1), no la suma."
    ],
    seq: [],
    cls: [
      "Tipo de efecto|Efecto principal: medias marginales; promedia sobre el otro factor; gl (a − 1) o (b − 1)|Interacción: diferencia de diferencias; depende del nivel del otro factor; gl (a − 1)(b − 1)"
    ] },
  { t: "Efectos simples y cómo leer un gráfico de interacción",
    tip: "En un gráfico de interacción, las líneas paralelas indican ausencia de interacción. Si no son paralelas pero no se cruzan, la interacción es ordinal, y si se cruzan, es cruzada y el efecto se invierte. Se interpreta primero la interacción. Los efectos simples son los de un factor en cada nivel del otro, con la MC de error del modelo completo. Un efecto significativo en un nivel y otro no significativo no demuestran que difieran (Gelman y Stern, 2006).",
    v: [
      "Gráfico de interacción=Un factor en el eje horizontal y una línea por cada nivel del otro",
      "Líneas paralelas=Patrón que indica ausencia de interacción",
      "Interacción ordinal=Líneas no paralelas que no se cruzan: el efecto cambia de tamaño, no de dirección",
      "Interacción cruzada=Las líneas se cruzan y el efecto se invierte, también llamada desordinal",
      "Efecto simple=Efecto de un factor dentro de un nivel concreto del otro",
      "Gelman y Stern (2006)=La diferencia entre significativo y no significativo no es en sí significativa",
      "Nieuwenhuis et al. (2011)=Revisaron 513 artículos de neurociencia en busca del error de comparar p",
      "Interacción triple=A × B × C: la interacción doble cambia según el nivel del tercer factor"
    ],
    g: [
      "Con una interacción ___, un efecto principal describe una situación que no se da en ningún grupo real.|cruzada|ordinal|nula",
      "Los efectos simples se calculan con la MC de error del modelo ___.|completo|reducido|simple",
      "Con tres factores aparecen tres interacciones dobles y ___ triple.|una|dos|tres",
      "Un eje vertical ___ puede hacer que una diferencia trivial parezca enorme.|recortado|ampliado|invertido",
      "El patrón de medias del ejemplo de la cafeína corresponde a una interacción ___.|ordinal|cruzada|nula"
    ],
    tf: [
      "Con una interacción ordinal, el efecto principal puede seguir siendo informativo si se interpreta con cuidado.|V",
      "Si la cafeína es significativa tras la privación de sueño y no con sueño normal, queda demostrado que su efecto depende del sueño.|F|Eso lo responde la interacción, que no fue significativa. Comparar dos valores p no contrasta la diferencia.",
      "Un tratamiento que mejora a un grupo y empeora a otro puede dar un efecto principal nulo.|V",
      "Unas líneas no paralelas en la muestra bastan para afirmar que hay interacción.|F|Pueden deberse al azar: el gráfico sugiere y la F de la interacción contrasta. Conviene mostrar las medias con su IC."
    ],
    q: [
      "Un programa reduce la ansiedad de forma significativa en mujeres (p de 0,01) y no en hombres (p de 0,30). ¿Qué hace falta para afirmar que el efecto depende del sexo?|Contrastar la interacción programa × sexo|Comprobar que las dos p difieren en 0,05|Repetir el estudio solo con hombres|La diferencia entre significativo y no significativo no es en sí significativa (Gelman y Stern, 2006).",
      "En un 2 × 2 las líneas forman una X y las medias marginales de ambos factores son iguales. ¿Qué es lo correcto?|Interpretar la interacción|Concluir que ningún factor influye|Interpretar solo los efectos principales|Con una interacción cruzada los efectos se anulan al promediar, pero cada factor influye según el nivel del otro.",
      "En la revisión de Nieuwenhuis, Forstmann y Wagenmakers, ¿cuántos de los 157 artículos expuestos al error lo cometieron?|79|157|513|En torno a la mitad, 79, compararon significaciones en lugar de contrastar la diferencia.",
      "¿Cuándo se analizan habitualmente los efectos simples?|Cuando la interacción es relevante|Antes de examinar la interacción|Solo si no hay efectos principales|Se usan para describir la forma de la interacción, con corrección de α si son varios."
    ],
    inc: [
      "Sobre la lectura de un gráfico de interacción|En la interacción ordinal el efecto cambia de dirección|Las líneas paralelas indican ausencia de interacción|En la interacción cruzada el efecto se invierte|En la ordinal el efecto cambia de tamaño, pero no de dirección. Cambia de dirección en la cruzada."
    ],
    seq: [],
    cls: [
      "Patrón del gráfico|Sin interacción: líneas paralelas; mismo efecto en todos los niveles|Ordinal: líneas no paralelas que no se cruzan; cambia el tamaño del efecto|Cruzada: líneas que se cruzan; el efecto se invierte"
    ] },
  { t: "Tamaños del efecto parciales y generalizados",
    tip: "η² divide la SC del efecto entre la SC total, y η²p, entre la SC del efecto más la de su error. En un factorial, η²p es mayor o igual que η², y la suma de los η²p puede superar 1. η²p depende del diseño y no sirve para comparar estudios distintos. El η²G de Olejnik y Algina (2003) incluye en el denominador los sujetos y los factores medidos y excluye los manipulados.",
    v: [
      "η²=SC del efecto entre SC total, proporción de la variabilidad de ese estudio",
      "η² parcial=SC del efecto entre la suma de SC del efecto y SC del error",
      "η² generalizado=Índice comparable entre diseños que incluye sujetos y factores medidos",
      "ω²=Versión corregida del sesgo, menos sesgada en la población",
      "Factor medido=Variable no manipulada, como el sexo o el diagnóstico",
      "Olejnik y Algina (2003)=Propusieron el índice generalizado comparable entre diseños",
      "Lakens (2013)=Recomienda indicar siempre qué índice de varianza explicada se informa",
      "Cortes de Cohen para η²=0,01, 0,06 y 0,14, propuestos como último recurso"
    ],
    g: [
      "Con una SC del efecto de 30 y una SC de error de 40, el η²p vale ___.|0,43|0,30|0,75",
      "En un factorial, η²p es siempre ___ η².|mayor o igual que|menor o igual que|exactamente igual a",
      "En un factorial con todos los factores manipulados, η²G coincide con ___.|η²p|η²|ω²",
      "Si se añade un factor que explica mucha varianza, el η²p de los demás factores ___.|aumenta|disminuye|no cambia",
      "En el ejemplo de la lectura, el η²G era ___ frente a un η²p de 0,61.|0,16|0,74|0,43"
    ],
    tf: [
      "El η²p indica qué proporción de la varianza total explica cada efecto del factorial.|F|Esa es la definición de η². Tomar η²p como proporción del total es una trampa típica: los η²p no se suman como proporciones.",
      "Si un factor es medido, como el sexo, su variabilidad entra en el denominador del η²G de los demás efectos.|V",
      "Aplicar los cortes de Cohen a η²p de diseños intrasujeto lleva a calificar de «grande» casi cualquier efecto.|V",
      "Ya hay consenso en que η²p debe ser el tamaño del efecto estándar en los factoriales.|F|Es un debate abierto. Lakens (2013) recomienda indicar el índice y usar η²G u ω² para comparar diseños."
    ],
    q: [
      "Un metaanálisis quiere combinar el efecto de un tratamiento estudiado en ensayos entre grupos y en ensayos intrasujeto. ¿Qué índice conviene extraer?|El η² generalizado|El η² parcial de SPSS|La suma de los η²p|η²p depende del diseño y no puede usarse sin más en un metaanálisis. η²G es comparable entre diseños.",
      "Con SC_A de 30, SC_B de 20, SC_A×B de 10 y SC_error de 40, si B fuera el sexo, ¿cuánto valdría el η²G de A?|0,30|0,43|0,60|El denominador incluye el factor medido: 30 entre (30 + 20 + 10 + 40) da 0,30. 0,43 sería el η²p.",
      "¿Qué le ocurre a η²p en un diseño de medidas repetidas?|Excluye la variabilidad de los sujetos|Incluye la variabilidad de los sujetos|Coincide siempre con el η²G|Por eso valía 0,61 en el ejemplo de la lectura, frente a un η²G de 0,16.",
      "En el ejemplo de la cafeína, con los dos factores manipulados, ¿por qué los η² son algo menores que los η²p?|Se dividen por la SC total|Incluyen la SC de sujetos|Corrigen el sesgo muestral|η² usa la SC total como denominador. Aquí η²G coincide con η²p (0,27, 0,11 y 0,06)."
    ],
    inc: [
      "Sobre los tamaños del efecto en factoriales|Los η²p de todos los efectos suman como máximo 1|η²p es mayor o igual que η²|η²G excluye los factores manipulados|Los que suman como máximo 1 son los η². Los η²p pueden superar 1 al sumarlos (Olejnik y Algina, 2003)."
    ],
    seq: [],
    cls: [
      "Uso principal del índice|η²p: comparar efectos dentro de un mismo diseño; índice por defecto en SPSS|η²G: comparar entre diseños; metaanálisis|ω²: estimación menos sesgada en la población; versión corregida del sesgo"
    ] },
  { t: "ANOVA mixto: un factor entre grupos y otro intrasujeto",
    tip: "El ANOVA mixto combina un factor entre grupos y otro intrasujeto, como en un ensayo con terapia y lista de espera medido en el pre, el post y el seguimiento. En un ensayo, la pregunta principal es casi siempre la interacción grupo × momento. Hay dos términos de error: el grupo se contrasta con los sujetos dentro de grupos, y el momento y la interacción, con el residual intrasujeto. Suma los supuestos de ambos diseños, incluida la M de Box.",
    v: [
      "ANOVA mixto=Factorial con un factor entre grupos y otro intrasujeto",
      "Split-plot=Otro nombre del diseño que combina un factor entre grupos y otro intrasujeto",
      "Grupo × momento=Pregunta principal de un ensayo: si los grupos cambian de forma distinta",
      "Efecto del momento=Cambio con el tiempo promediando grupos, quizá por remisión espontánea o práctica",
      "Sujetos dentro de grupos=Error con el que se contrasta el factor entre grupos, con a(n − 1) gl",
      "Residual intrasujeto=Error del momento y de la interacción, con a(n − 1)(b − 1) gl",
      "M de Box=Prueba de homogeneidad de las matrices de covarianzas entre grupos",
      "Levene en cada medida=Comprobación de varianzas similares entre grupos en cada momento"
    ],
    g: [
      "Con 2 grupos de 12 personas, los sujetos dentro de grupos tienen ___ gl.|22|23|11",
      "Con 2 grupos de 12 personas y 3 momentos, el residual intrasujeto tiene ___ gl.|44|46|22",
      "En el ejemplo, del pre al post la ansiedad baja 7,83 puntos con terapia y ___ en lista de espera.|3|7|2,17",
      "Como otras pruebas previas, la M de Box detecta diferencias ___ con muestras grandes.|triviales|relevantes|nulas",
      "En la interacción del ejemplo de la ansiedad, el η²p era de 0,19 frente a un η²G de ___.|0,04|0,16|0,18"
    ],
    tf: [
      "En un ensayo pre-post, el efecto principal del momento indica que el tratamiento funciona mejor que el control.|F|El momento puede reflejar cambios en ambos grupos, como la remisión espontánea. Lo indica la interacción grupo × momento.",
      "En el ANOVA mixto, el factor entre grupos y el intrasujeto se contrastan con términos de error distintos.|V",
      "En el ejemplo de la ansiedad, el efecto principal del grupo no debe interpretarse aislado, porque refleja la interacción.|V",
      "El ANOVA mixto no requiere esfericidad porque incluye un factor entre grupos.|F|La esfericidad se exige al factor intrasujeto y a la interacción, junto con la M de Box y Levene en cada medida."
    ],
    q: [
      "Un ensayo asigna 30 personas con insomnio a terapia o a lista de espera, 15 por grupo, y las mide en el pre, el post y el seguimiento. ¿Qué gl tiene la interacción grupo × momento?|2|4|1|(a − 1)(b − 1) da 1 · 2, es decir, 2. El efecto del grupo es el que tiene 1 gl.",
      "En un ANOVA mixto, ¿con qué término de error se contrasta el factor entre grupos?|Sujetos dentro de grupos|El residual intrasujeto|La interacción grupo × momento|El grupo se contrasta con la variabilidad entre personas del mismo grupo. El momento y la interacción, con el residual intrasujeto.",
      "En el ejemplo de la terapia, ¿por qué no debe interpretarse aislado el efecto principal del grupo?|Los grupos solo se separan tras la intervención|Su η²G es menor que su η²p|La M de Box resultó significativa|En el pre solo los separaban 2,17 puntos, así que el efecto del grupo refleja la interacción.",
      "¿Qué supuesto añade el ANOVA mixto a los de un ANOVA de un factor intrasujeto?|Igualdad de las matrices de covarianzas|Esfericidad del factor intrasujeto|Independencia entre personas|La M de Box compara las matrices de covarianzas entre grupos. Esfericidad e independencia ya las exige el diseño intrasujeto."
    ],
    inc: [
      "Sobre los supuestos del ANOVA mixto|La esfericidad solo se exige al factor entre grupos|Se pide la prueba de Levene en cada medida|La M de Box compara las matrices de covarianzas|La esfericidad se exige al factor intrasujeto y a la interacción, no al factor entre grupos."
    ],
    seq: [],
    cls: [
      "Término de error en el ANOVA mixto|Sujetos dentro de grupos: efecto del grupo|Residual intrasujeto: efecto del momento; interacción grupo × momento"
    ] }
] },
{ n: 15, t: "Correlación y regresión lineal simple", cap: 6, pir: "alta", mods: [
  { t: "Correlación de Pearson, Spearman y de medidas repetidas",
    tip: "La r de Pearson mide la intensidad y el sentido de la relación lineal entre dos variables cuantitativas y se contrasta con una t de n − 2 gl. Antes hay que mirar los datos, como enseña el cuarteto de Anscombe. Spearman es Pearson sobre rangos y conviene con datos ordinales, relaciones monótonas o valores extremos. Si cada persona aporta varias observaciones, la correlación de medidas repetidas estima la asociación dentro de las personas.",
    v: [
      "Correlación de Pearson=Intensidad y sentido de la relación lineal entre dos variables cuantitativas",
      "r²=Proporción de varianza compartida por dos variables",
      "Correlación de Spearman=Pearson aplicada a los rangos, para relaciones monótonas",
      "Relación monótona=Avanza siempre en el mismo sentido, aunque no a ritmo constante",
      "Cuarteto de Anscombe=Cuatro conjuntos con la misma recta y r ≈ 0,82, pero formas muy distintas",
      "Correlación de medidas repetidas=Asociación común dentro de las personas (Bakdash y Marusich, 2017)",
      "Restricción del rango=Limitar los valores observados de una variable, lo que reduce r",
      "Atenuación=Reducción de r por los errores de medida de instrumentos poco fiables"
    ],
    g: [
      "Para contrastar si ρ es distinta de cero se usa una t con ___ gl.|n − 2|n − 1|n − k",
      "Con n grande, correlaciones muy ___ resultan significativas.|pequeñas|grandes|negativas",
      "En el cuarteto de Anscombe, solo ___ conjunto justifica resumir la relación con r y una recta.|el primer|el segundo|el cuarto",
      "Calcular r con las 300 filas de 30 estudiantes durante diez días viola la ___ de las observaciones.|independencia|normalidad|linealidad",
      "Con instrumentos poco fiables, la correlación observada ___ la verdadera.|infraestima|sobreestima|iguala"
    ],
    tf: [
      "La correlación entre personas y la correlación dentro de las personas pueden tener signo contrario.|V",
      "Spearman exige que la relación entre las variables avance a un ritmo constante.|F|Eso describe una relación lineal. Spearman solo requiere una relación monótona.",
      "Con n pequeño, una correlación notable puede no ser significativa.|V",
      "Una correlación significativa entre dos variables indica que una es causa de la otra.|F|Puede haber una tercera variable o causalidad inversa. La correlación no implica causalidad."
    ],
    q: [
      "Durante diez días, 30 estudiantes registran sus horas de sueño y su ánimo. Se quiere saber si, los días en que una persona duerme más, está de mejor ánimo. ¿Qué análisis responde?|Correlación de medidas repetidas|Pearson con una media por persona|Pearson con las 300 filas|La pregunta es dentro de cada persona. Pearson con medias responde entre personas, y con las 300 filas viola la independencia.",
      "Las variables son ordinales y la relación es monótona pero no lineal. ¿Qué índice conviene?|Spearman|Pearson|r²|Spearman es Pearson sobre los rangos y no exige que la relación avance a ritmo constante.",
      "Con una r de 0,40 en 50 casos, ¿cuántos gl tiene la t del contraste de la correlación?|48|49|50|Los gl son n − 2, que con 50 casos da 48.",
      "¿Qué ilustra el cuarto conjunto del cuarteto de Anscombe?|Un solo punto crea la correlación|Una curva resumida con una recta|Una relación lineal con ruido|Es una nube vertical con un punto alejado que crea por sí solo la correlación."
    ],
    inc: [
      "Sobre la correlación de Pearson|Mide cualquier relación monótona|Va de −1 a +1|Su cuadrado es la varianza compartida|Pearson mide la relación lineal. Las relaciones monótonas no lineales son terreno de Spearman."
    ],
    seq: [],
    cls: [
      "Pregunta y análisis|Entre personas: Pearson con una media por persona; quienes duermen más en promedio|Dentro de cada persona: correlación de medidas repetidas; los días en que se duerme más"
    ] },
  { t: "La recta de mínimos cuadrados",
    tip: "La regresión simple predice Y a partir de X con la recta Ŷ igual a b₀ + b₁X, y el residuo es lo observado menos lo pronosticado. El criterio de mínimos cuadrados elige la recta que hace mínima la suma de los residuos al cuadrado. La pendiente vale r · (sᵧ / sₓ), la recta pasa por las medias y, en la regresión simple, β coincide con r. No se debe extrapolar, y predecir no es explicar.",
    v: [
      "Residuo=Diferencia entre el valor observado y el pronosticado",
      "Mínimos cuadrados=Criterio que hace mínima la suma de los residuos elevados al cuadrado",
      "Pendiente (b₁)=Cambio medio pronosticado en Y por cada unidad que aumenta X",
      "Constante (b₀)=Valor pronosticado de Y cuando X vale 0",
      "β en regresión simple=Pendiente tipificada, que coincide con r",
      "Regresión a la media=Tendencia de las puntuaciones extremas a acercarse al promedio al medirse de nuevo",
      "Galton=Dio nombre a la regresión al estudiar la estatura de padres e hijos",
      "Legendre (1805)=Autor al que se atribuye, junto a Gauss, el método de ajuste de la recta"
    ],
    g: [
      "Con r de 0,50, sᵧ de 10 y sₓ de 5, la pendiente vale ___.|1|2,5|0,25",
      "Si X se mide en minutos en lugar de horas, b₁ se divide por ___.|60|3.600|√60",
      "Los residuos son distancias ___ a la recta.|verticales|horizontales|perpendiculares",
      "La recta de regresión pasa siempre por el punto de las ___.|medias|medianas|modas",
      "Con la recta Ŷ igual a 40 + 2,5X, a quien hace 8 horas se le pronostican ___ puntos.|60|48|42,5"
    ],
    tf: [
      "La recta de Y sobre X coincide con la de X sobre Y salvo que r valga cero.|F|Solo coinciden si r vale ±1, porque el modelo minimiza distancias verticales, en Y.",
      "Los residuos de la recta de mínimos cuadrados suman cero.|V",
      "b₀ siempre tiene una interpretación sustantiva, porque es un valor de Y pronosticado.|F|Puede no tener sentido: con la edad de adultos, Y pronosticada a los 0 años es solo un punto de anclaje.",
      "Una pendiente significativa indica asociación lineal, no que cambiar X vaya a cambiar Y.|V"
    ],
    q: [
      "En un grupo de opositores, Ŷ igual a 40 + 2,5X relaciona las horas semanales de simulacros con la nota, y nadie pasó de 12 horas. ¿Qué cabe decir del pronóstico para 30 horas?|No tiene apoyo en los datos|Es de 115 puntos sobre 100|Es fiable si r es alta|La recta vale para el rango observado de X: no se debe extrapolar.",
      "Con la recta Ŷ igual a 11 + 3X, una persona con X de 4 obtiene una Y de 20. ¿Cuál es su residuo?|−3|3|9|Ŷ vale 23, y el residuo, Y − Ŷ, es 20 − 23, que da −3.",
      "¿Por qué el criterio de mínimos cuadrados eleva los residuos al cuadrado?|Para que no se compensen los signos|Para que la recta pase por el origen|Para expresarlos en unidades de X|Así se evita que los residuos positivos y negativos se compensen.",
      "En una regresión simple, r vale 0,60. ¿Cuánto vale β?|0,60|0,36|Depende de sₓ y sᵧ|En la regresión simple, la pendiente tipificada coincide con r. Es b₁ la que depende de las desviaciones típicas."
    ],
    inc: [
      "Sobre los coeficientes de la recta|β depende de las unidades de medida de X|b₁ se expresa en unidades de Y por unidad de X|b₀ se expresa en las unidades de Y|β no tiene unidades. La que depende de las unidades de X es la pendiente b₁."
    ],
    seq: [
      "Cálculo de una recta de regresión a mano|Calcular las medias de X e Y>Obtener SPxy y SCx>Calcular b₁ como SPxy entre SCx>Calcular b₀ como Ȳ − b₁X̄>Pronosticar y obtener los residuos"
    ],
    cls: [] },
  { t: "Bondad del ajuste: R², error típico de estimación y F",
    tip: "La variabilidad total de Y se reparte en SC de regresión y SC residual. R² es la proporción explicada, coincide con r² en la regresión simple y no tiene cortes universales, y f² lo expresa como tamaño del efecto. El error típico de estimación es la desviación típica de los residuos, en unidades de Y. La F del modelo tiene k y n − k − 1 gl, y con un predictor F es el cuadrado de la t de la pendiente.",
    v: [
      "SC total=Variabilidad de Y alrededor de su media",
      "SC de regresión=Parte de la variabilidad de Y que la recta explica",
      "SC residual=Variabilidad de Y que queda en los residuos",
      "Coeficiente de determinación=Proporción de la varianza de Y explicada por el modelo",
      "f²=R² entre (1 − R²), con cortes de Cohen de 0,02, 0,15 y 0,35",
      "Error típico de estimación=Desviación típica de los residuos, en las unidades de Y",
      "Prueba F del modelo=Contrasta si el modelo explica más de lo esperable por azar",
      "F igual a t²=Equivalencia entre la F del modelo y la t de la pendiente con un predictor"
    ],
    g: [
      "Con un R² de 0,16 en 50 casos, la F del modelo simple vale aproximadamente ___.|9,14|6,40|0,19",
      "Con un R² de 0,16, el f² vale aproximadamente ___.|0,19|0,16|0,84",
      "El error típico de estimación es la raíz cuadrada de la ___.|MC residual|SC residual|MC de regresión",
      "En la regresión simple con n casos, la MC residual divide la SC residual entre ___.|n − 2|n − 1|n",
      "En SPSS, Beta aparece en la tabla ___.|Coeficientes|Resumen del modelo|ANOVA"
    ],
    tf: [
      "Con un solo predictor, la F del modelo, la t de la pendiente y la t de la correlación dan el mismo valor p.|V",
      "Un R² de 0,16 indica que el modelo es inútil, porque explica menos de la mitad de la varianza.|F|R² no tiene cortes universales. En el ejemplo de la pantalla, 0,16 es un efecto claro, aunque el 84 % dependa de otras cosas.",
      "El error típico de estimación se expresa en las mismas unidades que Y.|V",
      "En el ejemplo de seis casos, R² valía 0,75 y su R² corregido era mayor por el n pequeño.|F|El corregido era menor, 0,69. Con pocos casos la corrección pesa más."
    ],
    q: [
      "En 50 estudiantes, el tiempo de pantalla antes de dormir explica el 16 % de la varianza de la latencia del sueño. ¿Qué afirmación es correcta?|El 84 % depende de otras cosas|La pantalla causa el 16 % de la latencia|El 16 % de los casos cae sobre la recta|R² es varianza explicada en sentido estadístico, no causal ni una proporción de casos.",
      "En el ejemplo de seis casos, SC_T vale 192 y SC_res, 48. ¿Cuánto vale R²?|0,75|0,25|0,33|SC_reg es 192 − 48, que da 144, y 144 entre 192 da 0,75. 0,25 es la proporción no explicada.",
      "Con una SC_res de 48 y 6 casos en una regresión simple, ¿cuánto vale el error típico de estimación?|3,46|2,83|12|MC_res es 48 entre 4, que da 12, y su raíz es 3,46. 2,83 dividiría entre n y no entre n − 2.",
      "¿Qué gl tiene la F del modelo en una regresión simple con 40 casos?|1 y 38|1 y 39|2 y 38|Con k igual a 1, los gl son k y n − k − 1, es decir, 1 y 38."
    ],
    inc: [
      "Sobre la bondad del ajuste|R² indica si el modelo está bien especificado|R² es SC_reg entre SC_T|En la regresión simple R² coincide con r²|R² mide la varianza explicada en esa muestra, no si el modelo está bien especificado (Anscombe, 1973)."
    ],
    seq: [],
    cls: [
      "Tabla de la salida de SPSS|Resumen del modelo: R²; R² corregido; error típico de la estimación; Durbin-Watson|ANOVA: F del modelo; gl de regresión y residual|Coeficientes: B; Beta; t de cada coeficiente"
    ] },
  { t: "Residuos y diagnóstico básico",
    tip: "Los supuestos de la regresión se refieren a los errores, no a las variables: linealidad y aditividad, el más importante, errores con media cero, homocedasticidad, independencia y normalidad, relevante sobre todo con muestras pequeñas. Ni X ni Y tienen que ser normales (Field, 2024). El gráfico de residuos tipificados frente a pronosticados es el más informativo: un embudo indica heterocedasticidad, y una curva, falta de linealidad.",
    v: [
      "Linealidad y aditividad=Supuesto más importante: la media de Y cambia de forma lineal con X",
      "Homocedasticidad=Varianza de los errores igual en todo el rango de X",
      "ZRESID=Residuos tipificados en SPSS, para leerlos en una escala común",
      "ZRESID × ZPRED=Gráfico más informativo para valorar linealidad y homocedasticidad",
      "Durbin-Watson=Índice de 0 a 4 de independencia de los errores, ideal cerca de 2",
      "Residuos estudentizados=Señalan casos extraños cuando su valor absoluto pasa de 3",
      "Errores típicos robustos=Remedio ante la heterocedasticidad, como HC3",
      "Forma de embudo=Patrón del gráfico de residuos que señala heterocedasticidad"
    ],
    g: [
      "Según Field, valores de Durbin-Watson por debajo de ___ o por encima de 3 son preocupantes.|1|2|0,5",
      "Una curva en U en el gráfico de residuos indica falta de ___.|linealidad|normalidad|independencia",
      "Durbin-Watson tiene sentido cuando el ___ de los casos significa algo.|orden|número|tamaño",
      "La normalidad de los errores es relevante sobre todo con muestras ___.|pequeñas|grandes|aleatorias",
      "Ante la heterocedasticidad pueden usarse errores típicos robustos o ___ de los coeficientes.|bootstrap|tipificación|centrado"
    ],
    tf: [
      "En SPSS, el gráfico de diagnóstico se pide con ZRESID en el eje X y ZPRED en el eje Y.|F|Es al revés: ZPRED, los pronósticos tipificados, va en el eje X, y ZRESID, los residuos tipificados, en el eje Y.",
      "Si la relación es curva, cumplir los demás supuestos no arregla el modelo.|V",
      "Un caso con un residuo extremo debe eliminarse para no distorsionar la recta.|F|Primero se comprueba si es un error de registro. Si se excluye, se justifica y se informa con y sin él.",
      "En el ejemplo del salario y la satisfacción, el embudo no invalida la pendiente, pero sí su error típico clásico.|V"
    ],
    q: [
      "Al predecir la satisfacción laboral a partir del salario, el gráfico de residuos muestra que la dispersión crece en los salarios altos. ¿Qué conviene hacer?|Usar errores típicos robustos|Añadir un término cuadrático|Calcular el Durbin-Watson|Es un embudo, señal de heterocedasticidad. Se usan errores típicos robustos, como HC3, o bootstrap.",
      "¿Qué supuesto de la regresión considera Field el más importante?|Linealidad y aditividad|Normalidad de los errores|Independencia de los errores|Si la relación es curva, el modelo está mal especificado y nada de lo demás lo arregla.",
      "En un estudio con mediciones en días sucesivos, Durbin-Watson vale 0,7. ¿Qué sugiere?|Errores autocorrelacionados|Ausencia de autocorrelación|Heterocedasticidad|Un valor lejos de 2 y por debajo de 1 preocupa: el residuo de un día informa del de otro.",
      "¿Qué indica un residuo estudentizado de valor absoluto 3,4?|Un caso extraño que revisar|Una relación no lineal|Un error de registro seguro|Los valores absolutos mayores que 3 son sospechosos. Primero se comprueba si hay un error de registro."
    ],
    inc: [
      "Sobre los supuestos de la regresión|Se refieren a la distribución de X e Y|Incluyen la homocedasticidad|Incluyen errores con media cero|Los supuestos se refieren a los errores del modelo, no a las variables (Field, 2024)."
    ],
    seq: [],
    cls: [
      "Supuesto y herramienta|Linealidad y homocedasticidad: ZRESID × ZPRED; curva o embudo|Normalidad de los errores: histograma; gráfico P-P o Q-Q|Independencia: Durbin-Watson; valores lejos de 2"
    ] }
] },
{ n: 16, t: "Regresión múltiple y ANCOVA", cap: 6, pir: "media", mods: [
  { t: "Coeficientes b y β, pruebas t y R² ajustado",
    tip: "En la regresión múltiple cada b es parcial: el cambio medio en Y por unidad de Xⱼ manteniendo constantes los demás predictores. b está en unidades originales y sirve para pronosticar, y β, en desviaciones típicas, compara escalas con cautela. La F global tiene k y n − k − 1 gl, y cada t, n − k − 1. R² nunca baja al añadir predictores, y el R² ajustado corrige ese sesgo.",
    v: [
      "Regresión múltiple=Pronóstico de Y a partir de varios predictores a la vez",
      "Coeficiente parcial=Cambio medio en Y por unidad de Xⱼ con los demás predictores constantes",
      "Coeficiente tipificado=Cambio en desviaciones típicas de Y por cada desviación típica de Xⱼ",
      "R² ajustado=Corrige el sesgo de R² según el número de predictores y el tamaño muestral",
      "Varianza única=Parte de Y que explica un solo predictor y que reflejan los coeficientes",
      "Varianza compartida=Cuenta para R², pero no se atribuye a ningún predictor",
      "Prueba F global=H₀: todos los b poblacionales, salvo b₀, valen 0",
      "t de cada coeficiente=Contrasta si bⱼ vale 0 controlando los demás, con n − k − 1 gl"
    ],
    g: [
      "Con n de 30, seis predictores y R² de 0,40, el R² ajustado es ___.|0,24|0,40|0,34",
      "En el ejemplo del agotamiento, cada punto de apoyo del equipo se asocia con ___ puntos menos.|0,40|0,39|1,03",
      "β se obtiene multiplicando b por ___.|sₓ / sᵧ|sᵧ / sₓ|r",
      "Una F significativa sin ninguna t significativa es una señal típica de ___.|colinealidad|heterocedasticidad|autocorrelación",
      "R² nunca ___ al añadir predictores, aunque sean ruido.|baja|sube|cambia"
    ],
    tf: [
      "Un predictor que correlaciona con Y puede tener un b cercano a cero en el modelo múltiple.|V",
      "El R² ajustado puede superar al R² cuando los predictores son muy buenos.|F|El ajustado penaliza el número de predictores y no supera al R². Creer lo contrario es una trampa típica.",
      "En el ejemplo del agotamiento, el IC de la experiencia incluía el 0, lo que demuestra que no influye.|F|Los datos son compatibles con un efecto nulo y con efectos pequeños en ambas direcciones.",
      "β permite comparar predictores medidos en escalas distintas, aunque depende de su variabilidad en la muestra.|V"
    ],
    q: [
      "Un estudio con 120 profesionales de enfermería predice el agotamiento con tres predictores. ¿Qué gl tiene la F del modelo?|3 y 116|3 y 119|4 y 116|Los gl son k y n − k − 1: 3 y 120 − 3 − 1, que da 116.",
      "En una regresión múltiple, el b de las horas extra vale 1,03. ¿Cómo se interpreta?|Un punto más por hora, a igual apoyo y experiencia|Un punto más por hora, sin tener en cuenta lo demás|Una desviación típica más por cada hora extra|b es un efecto parcial en unidades originales, con los demás predictores constantes.",
      "Al añadir un predictor que solo aporta ruido, ¿qué es lo esperable?|R² sube algo y el ajustado puede bajar|R² baja y el R² ajustado sube algo|R² y el R² ajustado no cambian nada|R² nunca baja al añadir predictores. El ajustado penaliza el predictor inútil.",
      "¿Para qué sirve sobre todo el coeficiente b, frente a β?|Para pronosticar en unidades originales|Para comparar predictores de escalas distintas|Para medir la importancia relativa segura|b sirve para pronosticar y describir efectos con sentido práctico. β compara escalas, con cautela."
    ],
    inc: [
      "Sobre los coeficientes de la regresión múltiple|La β más alta señala el predictor más importante|Cada b se interpreta controlando los demás|β se expresa en desviaciones típicas|Con predictores correlacionados, las β pueden cambiar mucho o de signo. La más alta no basta para saber qué importa más."
    ],
    seq: [],
    cls: [
      "Coeficiente|b: unidades originales; sirve para pronosticar; cambia si X se mide en minutos|β: desviaciones típicas; compara escalas distintas; depende de la variabilidad en la muestra"
    ] },
  { t: "Colinealidad, casos influyentes y otros diagnósticos",
    tip: "Hay colinealidad cuando un predictor se predice bien a partir de los demás. No sesga los b, pero los vuelve inestables y ensancha sus IC. Se mide con la tolerancia, 1 − R²ⱼ, y con el VIF, su inversa. Centrar solo reduce la colinealidad no esencial. Un caso puede ser atípico en Y, tener leverage alto o ser influyente, y la distancia de Cook combina residuo y leverage.",
    v: [
      "Colinealidad=Un predictor puede predecirse bien a partir de los demás",
      "Tolerancia=1 − R²ⱼ, proporción de la varianza del predictor que no explican los otros",
      "VIF=Cuánto se multiplica la varianza de bⱼ por la colinealidad",
      "Colinealidad no esencial=La creada al construir términos de interacción o polinómicos",
      "Leverage=Distancia de un caso al resto en los predictores, influencia potencial",
      "Leverage medio=(k + 1) / n, cuyo doble o triple marca los valores preocupantes",
      "Distancia de Cook=Cambio global en los coeficientes al eliminar un caso",
      "Residuo estudentizado=Índice de atípico en Y, sospechoso con valor absoluto mayor que 3"
    ],
    g: [
      "Con una tolerancia de 0,20, el VIF vale ___.|5|0,80|1,25",
      "Con dos predictores que correlacionan 0,90, el VIF vale aproximadamente ___.|5,26|1,90|0,81",
      "Con 3 predictores y 100 casos, el leverage medio es ___.|0,04|0,03|0,08",
      "Con 200 casos, el criterio liberal de Cook marca los casos por encima de ___.|0,02|0,20|1",
      "Centrar los predictores reduce solo la colinealidad ___.|no esencial|esencial|perfecta"
    ],
    tf: [
      "La colinealidad sesga los coeficientes b hacia cero.|F|No los sesga, pero los vuelve inestables: crecen sus errores típicos y pequeños cambios pueden alterar su valor o su signo.",
      "Un caso con leverage alto situado sobre la línea apenas influye en la recta.|V",
      "Si dos predictores están muy correlacionados, centrarlos elimina el problema.|F|Centrar solo reduce la colinealidad de interacciones o términos polinómicos. No cambia su correlación.",
      "Los puntos de corte del VIF y de la distancia de Cook son convencionales y se debaten.|V"
    ],
    q: [
      "Un modelo incluye dos escalas de ansiedad casi equivalentes y sus b tienen errores típicos enormes. ¿Qué solución es la adecuada?|Combinarlas o quedarse con una|Centrar ambas en su media|Pasar a pasos sucesivos|La solución es conceptual. Centrar no cambia la correlación entre los dos predictores.",
      "¿Qué combinación hace que un caso sea influyente?|Leverage alto y fuera de la línea|Leverage bajo y residuo grande|Leverage alto sobre la línea|Ni un residuo grande ni un leverage alto bastan solos: la influencia aparece cuando se combinan.",
      "¿Qué índice resume cuánto cambian los coeficientes al eliminar un caso?|La distancia de Cook|El valor de leverage|El residuo estudentizado|Cook (1977) combina residuo y leverage. El leverage solo indica influencia potencial.",
      "Un caso tiene una distancia de Cook alta y no hay error de registro. ¿Qué se hace?|Analizar con y sin él e informar|Eliminarlo y analizar sin él|Conservarlo sin más comentario|Si el dato es legítimo, se informa de ambos resultados y, si hace falta, se usan métodos robustos o bootstrap."
    ],
    inc: [
      "Sobre la colinealidad|Sesga los coeficientes de los predictores|Ensancha los IC de los coeficientes|Aumenta los errores típicos de b|No sesga los coeficientes: los vuelve inestables."
    ],
    seq: [],
    cls: [
      "Qué diagnostica el índice|Colinealidad: VIF; tolerancia|Caso extraño: residuo estudentizado; leverage; distancia de Cook"
    ] },
  { t: "Métodos de entrada: jerárquico frente a pasos sucesivos",
    tip: "Cómo entran los predictores es una decisión de diseño. En la entrada forzada entran todos a la vez. En la jerárquica, el investigador fija los bloques antes de ver los datos y evalúa el ΔR² con una F de cambio. En los pasos sucesivos decide el algoritmo: capitalizan el azar, sesgan R² al alza y p a la baja y son inestables. Un predictor de k categorías entra como k − 1 variables ficticias.",
    v: [
      "Entrada forzada=Todos los predictores entran a la vez («Introducir» en SPSS)",
      "Regresión jerárquica=Bloques ordenados por la teoría antes de ver los datos, evaluando ΔR²",
      "ΔR²=Aumento de la varianza explicada que aporta cada bloque",
      "F de cambio=Contraste del aumento de R² de un bloque",
      "Pasos sucesivos=El algoritmo decide qué predictores entran o salen según los datos",
      "Capitalizar el azar=Elegir lo que mejor funciona en la muestra, incluidas sus peculiaridades",
      "Variable ficticia=Codificación 0/1 de una categoría frente a otra de referencia (dummy)",
      "Preregistro=Forma natural de documentar el orden de los bloques antes de analizar"
    ],
    g: [
      "Con un predictor de cuatro categorías se crean ___ variables ficticias.|tres|cuatro|dos",
      "En el ejemplo del agotamiento, el bloque de la experiencia explicaba un R² de ___.|0,001|0,45|0,452",
      "En la versión ___, el algoritmo parte de todos los predictores y elimina los que menos aportan.|hacia atrás|hacia delante|por pasos",
      "En la jerárquica suelen entrar primero las variables ___.|de control|nuevas|categóricas",
      "Los pasos sucesivos sesgan R² ___ y los valores p a la baja.|al alza|a la baja|hacia cero"
    ],
    tf: [
      "En la regresión jerárquica, el orden de los bloques se decide al ver qué variables correlacionan más con Y.|F|Se fija por la teoría o el diseño antes de ver los datos. Elegir según los datos es lo que hacen los pasos sucesivos.",
      "Con un predictor codificado 0/1, su b es la diferencia de medias pronosticada entre los grupos, a igualdad de los demás.|V",
      "Entre dos predictores colineales, los pasos sucesivos pueden elegir el que correlaciona con Y apenas un poco más.|V",
      "Los pasos sucesivos son la opción recomendada para un modelo confirmatorio, porque eliminan la subjetividad.|F|Sustituyen la teoría por un algoritmo. Solo son adecuados para explorar, con validación en otra muestra."
    ],
    q: [
      "Un equipo quiere saber si dos variables de condiciones laborales predicen el agotamiento más allá de la experiencia. ¿Qué método conviene?|Regresión jerárquica|Pasos sucesivos|Entrada forzada sin bloques|La jerárquica responde si las variables nuevas explican algo más que las de control, mediante el ΔR².",
      "Con 120 casos, se añaden dos predictores a un primer bloque de uno. ¿Qué gl tiene la F de cambio?|2 y 116|3 y 116|2 y 117|Numerador: los predictores añadidos, 2. Denominador: n − k_completo − 1, es decir, 120 − 3 − 1, que da 116.",
      "¿Qué pregunta responde la entrada forzada?|Qué aporta cada uno controlando los demás|Cuánto añade un bloque a los anteriores|Qué combinación da el mejor ajuste|Entran todos a la vez. El aporte incremental es propio de la jerárquica, y la búsqueda del mejor ajuste, de los pasos sucesivos.",
      "Con una variable de tres categorías codificada con variables ficticias, ¿qué indica cada b?|La diferencia con la categoría de referencia|La media pronosticada de su propia categoría|La diferencia con la media general de Y|Se crean k − 1 variables, y cada una se compara con una categoría de referencia."
    ],
    inc: [
      "Sobre los pasos sucesivos|Son estables entre muestras distintas|Capitalizan el azar de la muestra|Sesgan R² al alza|Son inestables: con otra muestra pueden salir predictores distintos."
    ],
    seq: [],
    cls: [
      "Quién decide el orden de entrada|Nadie: entrada forzada; «Introducir» en SPSS|El investigador: regresión jerárquica; bloques fijados antes de los datos|El algoritmo: hacia delante; hacia atrás; por pasos"
    ] },
  { t: "El ANCOVA y el modelo lineal general",
    tip: "La t, el ANOVA y la regresión son casos del modelo lineal general: una t de dos grupos es una regresión con un predictor 0/1, y un ANOVA de k grupos, una regresión con k − 1 variables ficticias cuyo R² es η². El ANCOVA añade covariables cuantitativas para reducir el error y ajustar las medias. Exige homogeneidad de las pendientes, relación lineal con la VD y una covariable no alterada por el tratamiento, y no sustituye a la asignación aleatoria.",
    v: [
      "Modelo lineal general=VD cuantitativa como combinación lineal de predictores más un error",
      "ANCOVA=Compara grupos con una covariable que reduce el error y ajusta las medias",
      "Covariable=Variable cuantitativa relacionada con la VD que se incluye junto al factor",
      "Medias ajustadas=Medias de los grupos como si todos tuvieran el mismo valor medio en la covariable",
      "Homogeneidad de las pendientes=Relación covariable–VD igual en todos los grupos",
      "Interacción grupo × covariable=Término que se contrasta para comprobar la igualdad de pendientes",
      "Medias marginales estimadas=Nombre que da SPSS a las medias corregidas por la covariable",
      "t como regresión=Regresión con un predictor 0/1 cuyo b₁ es la diferencia de medias"
    ],
    g: [
      "Un ANOVA de un factor con k grupos es una regresión con ___ variables ficticias.|k − 1|k|k + 1",
      "En el ANOVA expresado como regresión, R² equivale a ___.|η²|η²p|ω²",
      "La covariable debe medirse ___ de la intervención.|antes|después|a mitad",
      "El ANCOVA es más claro en diseños con asignación ___.|aleatoria|natural|intencional",
      "En SPSS, el ANCOVA usa por defecto sumas de cuadrados de tipo ___.|III|I|II"
    ],
    tf: [
      "El ANCOVA reduce el error con la misma lógica con la que el diseño de medidas repetidas extrae la variabilidad de los sujetos.|V",
      "Con grupos naturales, ajustar por la covariable los convierte en equivalentes.|F|Pueden diferir en variables no medidas, y la covariable puede formar parte del fenómeno. No sustituye a la asignación aleatoria.",
      "El ANCOVA exige que la covariable sea normal en cada grupo.|F|Sus supuestos propios son homogeneidad de pendientes, relación lineal covariable–VD y covariable independiente del tratamiento.",
      "Si las pendientes difieren entre grupos, no hay una única diferencia ajustada que informar.|V"
    ],
    q: [
      "Se comparan dos programas contra la ansiedad ante los exámenes con asignación aleatoria, y la ansiedad previa predice mucho la final. ¿Qué aporta incluirla como covariable?|Más precisión en la comparación|Equivalencia en variables no medidas|Un supuesto menos que comprobar|Retira del error las diferencias individuales previas, y la comparación entre programas gana precisión.",
      "¿Cómo se comprueba la homogeneidad de las pendientes?|Con la interacción grupo × covariable|Con la prueba de Levene en cada uno de los grupos|Comparando las medias ajustadas de los grupos|La interacción grupo × covariable debe ser despreciable. Si no lo es, el efecto del grupo depende de la covariable.",
      "En una prueba t de dos grupos expresada como regresión, ¿qué es b₁?|La diferencia de medias|La media del grupo 0|El valor de t de Student|b₁ es la diferencia de medias, y su t coincide con la de Student. La media del grupo 0 es b₀.",
      "¿Qué supuesto se incumple si el tratamiento ha modificado la covariable?|Independencia respecto al tratamiento|Homogeneidad de las pendientes de regresión|Relación lineal entre covariable y VD|La covariable debe ser independiente del tratamiento, y por eso se mide antes de la intervención."
    ],
    inc: [
      "Sobre el ANCOVA|No requiere homogeneidad de las pendientes|Ajusta las medias de los grupos|Reduce el término de error|La homogeneidad de las pendientes es su supuesto propio: la relación covariable–VD debe ser igual en todos los grupos."
    ],
    seq: [],
    cls: [
      "Caso del modelo lineal general|Prueba t: un predictor 0/1; b₁ como diferencia de medias|ANOVA de un factor: k − 1 variables ficticias; R² como η²|ANCOVA: factor categórico; covariable cuantitativa"
    ] }
] }
);

SP.register(window.COURSE);
})({});
