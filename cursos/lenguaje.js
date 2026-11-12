(function(window){
// SAIMAP Psicología · Psicología del Lenguaje
// Contenido alineado con el temario SAIMAP «Psicología del Lenguaje» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "lenguaje",
  title: "Psicología del Lenguaje",
  short: "Lenguaje",
  area: "Procesos psicológicos básicos",
  rutas: { grado: { curso: 2 }, pir: { bloque: "Procesos básicos" } },
  temario: "Psicologia-del-Lenguaje_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "La adquisición del lenguaje", from: 1, to: 5 },
    { n: 2, t: "Naturaleza del lenguaje y principios de la comunicación", from: 6, to: 8 },
    { n: 3, t: "Percepción y comprensión del lenguaje", from: 9, to: 11 },
    { n: 4, t: "Producción del lenguaje e interacción conversacional", from: 12, to: 13 },
    { n: 5, t: "Lenguaje, cognición y cultura", from: 14, to: 15 },
    { n: 6, t: "Habilidades comunicativas", from: 16, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Lenguaje · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "El lenguaje y su estudio", cap: 1, pir: "alta", mods: [
  { t: "Lenguaje, lengua y habla",
    tip: "El lenguaje es la facultad humana de comunicarse con signos combinables según reglas, la lengua es el sistema concreto de una comunidad y el habla, su realización individual. La distinción procede de Saussure (1916), que separó la lengua (langue) del habla (parole) y describió el signo lingüístico como arbitrario y lineal. En la clínica, «habla» significa producción motora, y sus trastornos se distinguen de los del lenguaje.",
    v: [
      "Lenguaje=Facultad humana de comunicarse con signos que se combinan según reglas",
      "Lengua=Sistema concreto de signos compartido por una comunidad, como el euskera",
      "Habla=Realización individual y concreta de un sistema lingüístico (parole)",
      "Signo lingüístico=Unión arbitraria de un significante y un significado (Saussure)",
      "Significante=Imagen acústica del signo, como la secuencia /mesa/",
      "Arbitrariedad=Ausencia de vínculo natural entre el sonido y el concepto que expresa",
      "Registro=Variedad de la lengua que se elige según la situación comunicativa",
      "Idiolecto=Forma de hablar propia de cada persona, con sus muletillas"
    ],
    g: [
      "El «Curso de lingüística general» de Saussure se publicó en ___, tras su muerte.|1916|1965|1906",
      "Que los sonidos del significante se sucedan uno tras otro en el tiempo es su carácter ___.|lineal|arbitrario|social",
      "Escribir de forma distinta al tutor de la universidad y a un amigo es un cambio de ___.|registro|dialecto|idiolecto",
      "El andaluz o el canario son ejemplos de ___ del español.|dialectos|sociolectos|registros",
      "En la clínica, la disartria y la tartamudez son trastornos del ___.|habla|lenguaje|código"
    ],
    tf: [
      "Para Saussure, la lengua es un sistema social que nadie posee entero.|V",
      "Para Saussure, el habla es el sistema social y la lengua, el acto individual.|F|Es al revés: la lengua (langue) es el sistema social y el habla (parole), el acto individual.",
      "El trastorno del desarrollo del lenguaje y las afasias son trastornos del lenguaje, no del habla.|V",
      "Los dialectos y los sociolectos son formas defectuosas de la lengua estándar.|F|Ninguna variedad es defectuosa: todas tienen reglas, y la elección entre ellas depende del contexto."
    ],
    q: [
      "Un niño de 5 años pronuncia mal la /r/, pero tiene un vocabulario y una gramática adecuados para su edad. ¿Qué cabe pensar?|Que su dificultad es del habla|Que tiene un trastorno del lenguaje|Que tiene un problema de comprensión|Pronunciar es una cuestión de habla. El código (vocabulario, gramática, comprensión y uso) está bien.",
      "¿Por qué otras lenguas dicen «table» o «mahaia» para lo que en español es «mesa»?|Porque el signo es arbitrario|Porque el signo es lineal|Porque el habla es individual|Nada en el sonido de «mesa» recuerda a una mesa: el vínculo entre significante y significado es arbitrario.",
      "¿Qué une el signo lingüístico según Saussure?|Un significante y un significado|Una lengua y un habla concretas|Una competencia y una actuación|El signo une una imagen acústica (significante) y un concepto (significado).",
      "Las muletillas y expresiones favoritas de una persona concreta forman su…|idiolecto|sociolecto|registro|El idiolecto es la forma de hablar propia de cada persona. El sociolecto se asocia a un grupo social."
    ],
    inc: [
      "Sobre lenguaje, lengua y habla|El habla es el sistema que comparte una comunidad|El lenguaje es una facultad propia de la especie|La lengua de signos española es una lengua|El sistema compartido por una comunidad es la lengua. El habla es la realización individual y concreta."
    ],
    seq: [],
    cls: [
      "Tipo de trastorno|Del habla: trastorno fonológico; apraxia verbal infantil; disartria; tartamudez|Del lenguaje: trastorno del desarrollo del lenguaje; afasias"
    ] },
  { t: "Competencia, actuación y competencia comunicativa",
    tip: "Chomsky (1965) distinguió la competencia, conocimiento implícito de las reglas de un hablante-oyente ideal, de la actuación, uso real limitado por la memoria, la atención o el cansancio. No equivale a langue y parole: la langue es social, y la competencia, mental e individual. Hymes (1972) añadió la competencia comunicativa, que incluye saber cuándo, a quién, de qué y cómo hablar. Canale y Swain (1980) la dividieron en gramatical, sociolingüística y estratégica.",
    v: [
      "Competencia=Conocimiento implícito de las reglas por un hablante-oyente ideal (Chomsky, 1965)",
      "Actuación=Uso real del lenguaje, sujeto a límites de memoria, atención o cansancio",
      "Competencia comunicativa=Saber usar la lengua según a quién, cuándo, de qué y cómo (Hymes, 1972)",
      "Hablante-oyente ideal=Sujeto idealizado al que Chomsky atribuye el conocimiento de la lengua",
      "Competencia gramatical=Vocabulario, morfología, sintaxis y pronunciación (Canale y Swain)",
      "Competencia sociolingüística=Adecuación del mensaje al contexto y al interlocutor",
      "Competencia estratégica=Recursos para compensar fallos, como parafrasear o señalar",
      "Competencia discursiva=Componente que se añadió más tarde al modelo de Canale y Swain"
    ],
    g: [
      "Chomsky propuso la distinción entre competencia y actuación en ___.|1965|1972|1916",
      "Decir «los niño» por cambiar de idea a mitad de frase es un error de ___.|actuación|competencia|registro",
      "La competencia es un conocimiento ___, porque se usa sin poder enunciarlo.|implícito|explícito|social",
      "Para Hymes, la adecuación social ___ del conocimiento de una lengua.|forma parte|queda fuera|se deriva",
      "Parafrasear cuando falta una palabra es un recurso de la competencia ___.|estratégica|sociolingüística|discursiva"
    ],
    tf: [
      "La pareja competencia-actuación es una reformulación exacta de langue y parole.|F|La langue es un sistema social, y la competencia, un conocimiento mental e individual, aunque idealizado.",
      "Los errores de actuación no demuestran falta de conocimiento de la lengua.|V",
      "Hymes criticó que la competencia de Chomsky fuera solo gramatical.|V",
      "Canale y Swain incluyeron desde el principio la competencia discursiva entre sus tres componentes.|F|Sus tres componentes eran gramatical, sociolingüística y estratégica. La discursiva se añadió más tarde."
    ],
    q: [
      "Un opositor construye frases impecables, pero tutea al tribunal y hace un chiste fuera de lugar. ¿Qué le falla sobre todo?|La competencia comunicativa|La competencia gramatical|La actuación por cansancio|Hymes incluyó en la competencia la adecuación al interlocutor y a la situación, no solo la gramática.",
      "Casi nadie sabe explicar por qué «la chica vino que ayer» suena mal, pero todos lo notan. ¿Qué ilustra?|Que la competencia es implícita|Un error típico de actuación|La competencia sociolingüística|La competencia se usa sin poder enunciarla: el hablante juzga la gramaticalidad sin conocer la regla.",
      "¿A qué autores corresponden, por este orden, la pareja lengua-habla y la pareja competencia-actuación?|Saussure y Chomsky|Chomsky y Saussure|Hymes y Chomsky|Atribuir competencia y actuación a Saussure, o langue y parole a Chomsky, es una trampa típica.",
      "Pedir algo de forma distinta a un amigo y a una médica es un ejemplo de…|competencia comunicativa|competencia gramatical|actuación lingüística|Adecuar la petición al interlocutor forma parte de la competencia comunicativa de Hymes (1972)."
    ],
    inc: [
      "Sobre competencia y actuación|La competencia es un sistema social de la comunidad|La actuación está afectada por la memoria y la atención|La competencia permite juzgar si una frase es gramatical|La competencia es un conocimiento mental e individual. El sistema social es la langue de Saussure."
    ],
    seq: [],
    cls: [
      "Concepto y autor|Saussure (1916): langue; parole; signo lingüístico|Chomsky (1965): competencia; actuación; hablante-oyente ideal|Hymes (1972): competencia comunicativa; cuándo y a quién hablar"
    ] },
  { t: "La psicología del lenguaje y sus métodos",
    tip: "La psicolingüística estudia qué hace la mente al aprender, comprender y producir una lengua, y en qué mecanismos cognitivos y cerebrales se apoya. Como esos procesos son rápidos e inconscientes, se infieren con tareas conductuales (decisión léxica, nombrado, priming), registros de la mirada, medidas cerebrales y estudio de pacientes. Los ERP tienen gran resolución temporal y localizan mal, y la neuroimagen, al revés. Ningún método basta por sí solo.",
    v: [
      "Decisión léxica=Juzgar lo antes posible si una cadena de letras o sonidos es una palabra",
      "Nombrado=Leer en voz alta una palabra o nombrar un dibujo, midiendo la latencia",
      "Priming=Estímulo previo relacionado que facilita o interfiere con el objetivo",
      "Paradigma del mundo visual=Escuchar instrucciones mirando una escena y registrar adónde se mira",
      "Potenciales evocados=Actividad eléctrica cerebral ligada a cada estímulo, registrada en el cuero cabelludo",
      "N400=Onda ante palabras inesperadas descrita por Kutas y Hillyard (1980)",
      "Disociación=Una capacidad se pierde tras una lesión y otra se conserva",
      "Inventarios MacArthur-Bates=Cuestionarios de vocabulario que rellenan las familias, con adaptación española"
    ],
    g: [
      "Que «pan» acelere el reconocimiento de «mantequilla» lo describieron Meyer y Schvaneveldt en ___.|1971|1980|1998",
      "En la lectura, las fijaciones oculares duran unos ___ (Rayner, 1998).|200–250 ms|20–25 ms|2–2,5 s",
      "Los ERP localizan mal, pero tienen una resolución ___ de milisegundos.|temporal|espacial|contextual",
      "Con bebés se usan medidas de atención y preferencia, como la intensidad de la ___.|succión|respiración|vocalización",
      "El estudio de pacientes, propio de la neuropsicología ___, busca disociaciones entre capacidades.|cognitiva|evolutiva|comparada"
    ],
    tf: [
      "Los movimientos oculares son una medida natural porque no interrumpen la lectura.|V",
      "La neuroimagen funcional localiza peor que los ERP, pero es mucho más rápida.|F|Es al revés: la neuroimagen localiza mejor y es más lenta, y los ERP tienen una resolución de milisegundos.",
      "En las tareas conductuales se asume que, si una condición tarda más, exige más procesamiento.|V",
      "En el paradigma del mundo visual, el oyente mira al objeto nombrado solo después de oír el sustantivo.|F|La mirada se anticipa: al oír «va a beberse el…», se mira al vaso antes de oír el sustantivo."
    ],
    q: [
      "Una paciente lee bien palabras conocidas pero no pseudopalabras, y otro paciente muestra el patrón contrario. ¿Qué se infiere?|Que hay procesos separables|Que ambos tienen la misma lesión|Que la tarea no era fiable|Dos patrones opuestos forman una disociación que indica procesos separables, la lógica de la neuropsicología cognitiva.",
      "En una tarea de decisión léxica se mide sobre todo…|el tiempo de reacción y los errores|la latencia de inicio del habla|las fijaciones y las regresiones|Se mide la rapidez y el acierto al decidir si la cadena es palabra. La latencia de inicio del habla corresponde al nombrado.",
      "Una investigadora quiere saber cuándo, con precisión de milisegundos, se detecta una palabra inesperada. ¿Qué método le conviene?|Los potenciales evocados|La resonancia magnética funcional|El estudio de pacientes|Los ERP siguen el procesamiento casi en tiempo real, como la N400 ante palabras inesperadas.",
      "¿Qué diferencia a la psicología del lenguaje de la lingüística?|Estudia cómo funcionan las lenguas en la mente|Describe la estructura de cada lengua|Se ocupa solo de los trastornos del lenguaje|La lingüística describe las lenguas. La psicolingüística estudia los procesos y mecanismos de quien las usa."
    ],
    inc: [
      "Sobre los métodos de la psicolingüística|Un único método bien elegido basta para confirmar un resultado|Los ERP y la neuroimagen se combinan por sus ventajas opuestas|Con bebés se usa el tiempo de mirada hacia un estímulo|Ningún método basta por sí solo: un resultado gana fuerza cuando lo confirman tareas distintas y varios laboratorios."
    ],
    seq: [],
    cls: [
      "Tipo de método|Conductual: decisión léxica; nombrado; priming|Registro de la mirada: movimientos oculares; mundo visual|Cerebral: potenciales evocados; neuroimagen funcional"
    ] },
  { t: "Lenguaje y comunicación: conceptos básicos",
    tip: "Comunicar es transmitir información que influye en la conducta o el estado de otro, y es mucho más amplio que el lenguaje: también comunican los animales, los gestos o el llanto del bebé. Lo propio del lenguaje no es el canal, oral, escrito o signado, sino ser un sistema de signos combinables según reglas, que permite oraciones ilimitadas y hablar de lo ausente. Bloom y Lahey (1978) agruparon sus componentes en forma, contenido y uso.",
    v: [
      "Comunicación=Transmisión de información que influye en la conducta o el estado de otro organismo",
      "Rasgos de diseño=Propiedades del lenguaje humano recogidas por Hockett (1960)",
      "Fonología=Componente de los sonidos que distinguen significados",
      "Morfología=Componente de la estructura interna de las palabras",
      "Sintaxis=Componente de la combinación de palabras en oraciones",
      "Semántica=Componente del significado de palabras y oraciones",
      "Pragmática=Componente del uso del lenguaje en contexto",
      "Forma, contenido y uso=Agrupación de los componentes del lenguaje de Bloom y Lahey (1978)"
    ],
    g: [
      "«Pata» y «bata» se diferencian en un solo sonido, un hecho que estudia la ___.|fonología|morfología|semántica",
      "Saber que «soltero» implica «no casado» es un conocimiento ___.|semántico|sintáctico|pragmático",
      "Interpretar «¿tienes hora?» como una petición corresponde a la ___.|pragmática|semántica|sintaxis",
      "Lo que define al lenguaje humano no es el ___, que puede ser oral, escrito o signado.|canal|código|sistema",
      "Con un número limitado de sonidos se forman miles de palabras y un número ___ de oraciones.|ilimitado|fijo|reducido"
    ],
    tf: [
      "Un bebé ya comunica hambre o malestar con el llanto antes de su primera palabra.|V",
      "Lo que define al lenguaje humano es que se transmite por el canal oral.|F|El canal puede ser oral, escrito o signado. Lo definitorio es ser un sistema de signos combinables según reglas.",
      "Que «el perro mordió al cartero» no signifique lo mismo que «el cartero mordió al perro» depende de la morfología.|F|Depende de la sintaxis, que combina las palabras en oraciones. La morfología estudia la estructura interna de las palabras.",
      "Los componentes del lenguaje se desarrollan a la vez y se influyen entre sí.|V"
    ],
    q: [
      "Una persona entiende sin esfuerzo «mañana mi gata va a probar el pienso de pollo que compré en rebajas», aunque nunca la haya oído. ¿Qué propiedad lo permite?|La combinación de signos según reglas|La arbitrariedad del signo lingüístico|La comunicación no verbal|Con palabras combinables según reglas se construye un número ilimitado de oraciones, muchas de ellas nuevas.",
      "¿Qué componente se ocupa de que «panaderas» se analice en pan, -ader-, -a y -s?|La morfología|La fonología|La sintaxis|La morfología estudia la estructura interna de las palabras. La sintaxis, su combinación en oraciones.",
      "Las abejas que indican dónde está el alimento muestran que…|comunicar es más amplio que el lenguaje|los animales tienen un lenguaje con sintaxis|el canal define qué es el lenguaje|El lenguaje humano es un tipo particular de comunicación. Su comparación con la comunicación animal se trata en la Unidad 7.",
      "¿Qué propiedad del lenguaje permite hablar del pasado, de lo imaginario o de lo falso?|Referirse a lo ausente|Emplear un canal escrito|Combinar los sonidos|El lenguaje permite hablar de lo que no está presente, una de las propiedades que Hockett recogió en sus rasgos de diseño."
    ],
    inc: [
      "Sobre los componentes del lenguaje|La pragmática estudia la estructura interna de las palabras|La sintaxis combina las palabras en oraciones|La fonología trata los sonidos que distinguen significados|La estructura interna de las palabras es objeto de la morfología. La pragmática estudia el uso en contexto."
    ],
    seq: [],
    cls: [
      "Agrupación de Bloom y Lahey|Forma: fonología; morfología; sintaxis|Contenido: semántica|Uso: pragmática"
    ] }
] },
{ n: 2, t: "Del llanto a las primeras palabras", cap: 1, pir: "alta", mods: [
  { t: "Percepción temprana del habla",
    tip: "El recién nacido prefiere la voz de su madre (DeCasper y Fifer, 1980) y reconoce la prosodia de su lengua (Mehler et al., 1988). Eimas et al. (1971) mostraron con la succión de alta amplitud que los bebés perciben el habla de forma categórica, aunque las chinchillas también lo hacen. La capacidad inicial es casi universal y se estrecha entre los 6 y los 12 meses (Werker y Tees, 1984): es una reorganización, no un deterioro, y las vocales se reorganizan antes, hacia los 6 meses.",
    v: [
      "Succión de alta amplitud=Técnica en que la succión decae con la repetición y se recupera ante un cambio",
      "Percepción categórica=Percibir los sonidos del habla como categorías discretas, no como un continuo",
      "Prosodia=Ritmo y entonación característicos de una lengua",
      "Estrechamiento perceptivo=Especialización en los contrastes de la lengua del entorno durante el primer año",
      "Werker y Tees (1984)=Estudio con contrastes del hindi y del salish en bebés angloparlantes",
      "Imán de la lengua nativa=Metáfora de Kuhl: las vocales típicas atraen a los sonidos parecidos",
      "Kuhl y Miller (1975)=Hallaron percepción categórica del habla en chinchillas",
      "DeCasper y Fifer (1980)=Mostraron que el recién nacido prefiere la voz de su madre"
    ],
    g: [
      "Eimas et al. (1971) estudiaron a bebés de uno y ___ meses.|cuatro|seis|nueve",
      "Los bebés de Eimas distinguían /ba/ de /pa/, pero no dos variantes acústicas de la misma ___.|categoría|lengua|consonante",
      "A los 10–12 meses, solo una ___ de los bebés angloparlantes discriminaba los contrastes del hindi.|minoría|mayoría|mitad",
      "Las vocales se reorganizan antes que las consonantes, hacia los ___ meses.|6|10|12",
      "El estrechamiento perceptivo se produce durante el ___ semestre de vida.|segundo|primer|tercer"
    ],
    tf: [
      "La percepción categórica del habla demuestra un mecanismo innato exclusivo de los humanos.|F|Aparece también en chinchillas (Kuhl y Miller, 1975), así que refleja en parte propiedades generales del sistema auditivo.",
      "Los bebés que crecían oyendo hindi mantenían la discriminación de sus contrastes.|V",
      "La pérdida de contrastes no nativos se produce sobre todo en el segundo año de vida.|F|Ocurre entre los 6 y los 12 meses. Situarla en el segundo año es una trampa típica.",
      "El recién nacido distingue su lengua de otras lenguas con un ritmo diferente.|V"
    ],
    q: [
      "Un bebé de 7 meses y otro de 11, ambos de familias angloparlantes, escuchan un contraste del hindi. ¿Qué es lo más probable?|Que lo distinga sobre todo el de 7 meses|Que lo distinga sobre todo el de 11 meses|Que ambos lo distingan por igual|A los 6–8 meses la mayoría distingue contrastes no nativos, y a los 10–12 meses, solo una minoría.",
      "¿Cómo debe interpretarse el estrechamiento perceptivo?|Como una reorganización perceptiva|Como un deterioro de la audición|Como un retraso del desarrollo|El bebé deja de atender a diferencias que su lengua no usa. No es un deterioro, sino una especialización.",
      "En la succión de alta amplitud, ¿qué indica que la succión se recupere?|Que el bebé nota un cambio|Que el bebé se ha habituado|Que el bebé prefiere su lengua|La succión decae con la repetición y se recupera si el bebé detecta un estímulo nuevo.",
      "¿Qué metáfora usó Patricia Kuhl para la reorganización de las vocales?|El imán de la lengua nativa|La ventana que se cierra|La explosión del vocabulario|Las vocales típicas de la propia lengua atraen a los sonidos parecidos, que se perciben como más similares."
    ],
    inc: [
      "Sobre la percepción temprana del habla|Desde el nacimiento solo distinguen contrastes nativos|El recién nacido prefiere la voz de su propia madre|Las vocales nativas se reorganizan hacia los 6 meses|Al principio distinguen contrastes de casi cualquier lengua. La especialización llega en el segundo semestre."
    ],
    seq: [],
    cls: [
      "Estudio|Eimas et al. (1971): succión de alta amplitud; /ba/ frente a /pa/; percepción categórica|Werker y Tees (1984): hindi y salish; estrechamiento entre los 6 y los 12 meses"
    ] },
  { t: "Aprendizaje estadístico e interacción social",
    tip: "Saffran, Aslin y Newport (1996) mostraron que bebés de 8 meses segmentan un habla continua usando las probabilidades de transición entre sílabas, altas dentro de las palabras y bajas en las fronteras. El hallazgo no resuelve el debate entre innatismo y empirismo. Kuhl et al. (2003) vieron que el aprendizaje fonético requiere interacción en vivo: con DVD o audio no hubo aprendizaje. ManyBabies 1 confirmó la preferencia por el habla dirigida al bebé, con un efecto de la mitad del estimado antes.",
    v: [
      "Probabilidad de transición=Probabilidad de que una sílaba vaya seguida de otra concreta",
      "Segmentación=Descubrir dónde empieza y acaba cada palabra en el habla continua",
      "Saffran et al. (1996)=Bebés de 8 meses segmentan sílabas sintéticas por regularidades estadísticas",
      "Kuhl, Tsao y Liu (2003)=Bebés de 9 meses aprenden un contraste del mandarín solo en interacción en vivo",
      "Habla dirigida al bebé=Tono agudo, entonación exagerada, frases cortas y repeticiones",
      "ManyBabies 1=Réplica de 67 laboratorios con 2.329 bebés sobre la preferencia por un estilo de habla",
      "Respuesta contingente=Reacción del adulto ajustada a lo que hace el bebé",
      "Sobrestimación del efecto=Tendencia de los estudios pequeños a dar efectos mayores que los reales"
    ],
    g: [
      "Tras unos ___ minutos de exposición, los bebés de Saffran distinguían las «palabras» inventadas.|2|20|12",
      "Dentro de «pelota», a «lo» le sigue siempre «ta»: la probabilidad de transición es ___.|alta|baja|nula",
      "En ManyBabies 1, el tamaño del efecto fue aproximadamente la ___ del estimado antes.|mitad|cuarta parte|tercera parte",
      "Los bebés de Kuhl et al. (2003) recibieron 12 sesiones de ___ minutos con hablantes de mandarín.|25|45|10",
      "En ManyBabies 1, la preferencia por el habla dirigida al bebé aumentaba con la ___.|edad|práctica|atención"
    ],
    tf: [
      "En el estudio de Saffran, la secuencia incluía pausas breves entre las palabras inventadas.|F|No había pausas ni cambios de entonación: la única pista para segmentar era estadística.",
      "El aprendizaje estadístico es compatible con sesgos innatos que orienten qué regularidades se calculan.|V",
      "En el estudio de Kuhl et al. (2003), la exposición al mandarín en DVD produjo un aprendizaje intermedio.|F|Con DVD o solo audio no hubo aprendizaje: el rendimiento quedó al nivel del grupo control.",
      "El habla dirigida al bebé no es universal, y en culturas donde apenas se usa los niños aprenden igualmente.|V"
    ],
    q: [
      "Un grupo de bebés de 9 meses ve en un DVD a una hablante de mandarín que les lee cuentos durante 12 sesiones. ¿Qué cabe esperar en un contraste del mandarín?|Ningún aprendizaje frente al control|Un aprendizaje similar al de la sesión en vivo|Un aprendizaje mayor que en vivo|Con DVD no hubo aprendizaje. Solo mejoraron los bebés que interactuaron con personas en vivo.",
      "¿Qué pista usaron los bebés de Saffran et al. (1996) para segmentar el habla?|Las probabilidades de transición|Las pausas entre las palabras inventadas|Los cambios de entonación final|Dentro de cada palabra la probabilidad de transición era 1,0, y entre palabras rondaba 0,33. No había pausas ni entonación.",
      "¿Qué lección de método deja ManyBabies 1?|Los estudios pequeños tienden a sobrestimar efectos|El habla dirigida al bebé no tiene ningún efecto|Los efectos en bebés no pueden replicarse|La preferencia es real, pero de aproximadamente la mitad de lo estimado antes con estudios pequeños.",
      "¿Qué parece aportar la interacción en vivo según Kuhl et al. (2003)?|Atención y respuestas contingentes|Mayor cantidad de horas de exposición|Una señal acústica de más calidad|La interacción aporta atención, respuestas contingentes y claves sociales sobre qué merece aprenderse."
    ],
    inc: [
      "Sobre el aprendizaje estadístico|Resuelve el debate a favor del empirismo|Usa probabilidades de transición entre sílabas|Se observó en bebés de 8 meses|El hallazgo no resuelve el debate: es compatible con sesgos innatos que orienten qué regularidades se calculan."
    ],
    seq: [],
    cls: [
      "Condición en Kuhl et al. (2003)|Hubo aprendizaje: interacción en vivo con hablantes de mandarín|No hubo aprendizaje: DVD audiovisual; solo audio; sesiones en inglés"
    ] },
  { t: "Desarrollo prelingüístico y comunicación intencional",
    tip: "Las vocalizaciones siguen un orden: llanto, arrullos (2–3 meses), juego vocálico (4–6), balbuceo canónico (6–10) y balbuceo variado y jerga (10–12). El retraso del balbuceo canónico es una señal de alerta, y los bebés expuestos a signos balbucean con las manos. Hacia los 9–10 meses llega la revolución de los nueve meses (Tomasello), con la atención conjunta y el señalar. Bates et al. (1975) distinguieron el protoimperativo, que pide, del protodeclarativo, que comparte.",
    v: [
      "Arrullos=Sonidos vocálicos suaves hacia los 2–3 meses, a menudo en intercambio con el adulto",
      "Balbuceo canónico=Sílabas de consonante y vocal, a menudo repetidas, hacia los 6–10 meses",
      "Jerga=Sílabas variadas con la entonación de la lengua del entorno, hacia los 10–12 meses",
      "Balbuceo manual=Movimientos rítmicos de las manos con unidades de una lengua de signos",
      "Atención conjunta=Atender a la vez que otro a un objeto, sabiendo que se comparte",
      "Protoimperativo=Gesto que usa al adulto como medio para conseguir un objeto",
      "Protodeclarativo=Gesto que busca compartir con el adulto la atención sobre algo",
      "Revolución de los nueve meses=Cambio cualitativo hacia la comunicación intencional (Tomasello)"
    ],
    g: [
      "Los bebés sordos inician ___ el balbuceo canónico o no llegan a hacerlo.|tarde|pronto|antes",
      "El balbuceo manual en bebés expuestos a signos lo describieron Petitto y ___ (1991).|Marentette|Camaioni|Volterra",
      "En la fase ___ descrita por Bates et al., la conducta del bebé produce efectos en el adulto sin intención.|perlocutiva|ilocutiva|locutiva",
      "Los protodeclarativos están típicamente ___ en el autismo.|reducidos|aumentados|conservados",
      "Gritos, chillidos y cambios de tono hacia los 4–6 meses forman el ___.|juego vocálico|balbuceo canónico|llanto diferenciado"
    ],
    tf: [
      "El balbuceo es un mero ejercicio de la boca, ajeno a la adquisición de una lengua.|F|Es una fase de la adquisición de una lengua, oral o signada: los bebés expuestos a signos balbucean con las manos.",
      "En la fase ilocutiva, el bebé ya actúa con intención mediante gestos y vocalizaciones.|V",
      "El protoimperativo busca compartir la atención, y el protodeclarativo, conseguir un objeto.|F|Es al revés: el protoimperativo pide y el protodeclarativo comparte. Invertirlos es una trampa típica.",
      "Las edades de los hitos prelingüísticos son rangos orientativos, no normas rígidas.|V"
    ],
    q: [
      "Un bebé de 11 meses señala la galleta del armario y mira a su madre hasta que se la da. ¿Qué gesto es?|Un protoimperativo|Un protodeclarativo|Un acto locutivo|Usa al adulto como medio para conseguir un objeto: pide. El protodeclarativo busca compartir la atención.",
      "¿Qué hito marca la revolución de los nueve meses?|La atención conjunta|El balbuceo canónico|Las primeras palabras|Hacia los 9–10 meses el bebé sigue la mirada del adulto, alterna la suya entre objeto y persona y empieza a señalar.",
      "¿Por qué el retraso del balbuceo canónico es una señal de alerta?|Puede indicar sordera|Indica autismo con seguridad|Predice un TDL grave|Los bebés sordos lo inician tarde o no llegan a hacerlo. Las otras opciones afirman más de lo que permiten los datos.",
      "¿Qué orden siguen las fases de Bates, Camaioni y Volterra?|Perlocutiva, ilocutiva, locutiva|Locutiva, ilocutiva, perlocutiva|Ilocutiva, perlocutiva, locutiva|Primero efectos sin intención, después intención con gestos y, por último, intención expresada con palabras."
    ],
    inc: [
      "Sobre la comunicación intencional|El protodeclarativo tiene como objetivo conseguir un objeto|En la atención conjunta, ambos saben que comparten el foco|Hacia los 9–10 meses el bebé empieza a señalar|El protodeclarativo busca compartir. Conseguir un objeto usando al adulto es el protoimperativo."
    ],
    seq: [
      "Vocalizaciones prelingüísticas|Llanto>Arrullos>Juego vocálico>Balbuceo canónico>Balbuceo variado y jerga"
    ],
    cls: [
      "Gesto de Bates et al. (1975)|Protoimperativo: pedir; señalar la galleta del armario mirando a la madre|Protodeclarativo: compartir; señalar un perro para que el padre lo vea; reducido en el autismo"
    ] },
  { t: "Primeras palabras y aprendizaje del léxico",
    tip: "Las primeras palabras aparecen hacia los 12 meses (rango de 8 a 18), y la comprensión va por delante de la producción. Una palabra puede funcionar como holofrase, y los significados se ajustan tras sobreextensiones e infraextensiones. Hacia los 18 meses hay unas 50 palabras, pero solo uno de cada cinco niños muestra un verdadero estirón (Ganger y Brent, 2004). El significado se aprende con mapeo rápido, sesgos léxicos de Markman, bootstrapping sintáctico y claves sociales.",
    v: [
      "Holofrase=Una sola palabra que funciona como enunciado completo",
      "Sobreextensión=Usar una palabra para más referentes de los que abarca",
      "Infraextensión=Usar una palabra para menos referentes de los que abarca",
      "Mapeo rápido=Asociar una palabra nueva a un significado tras muy pocas exposiciones",
      "Sesgo de objeto completo=Suponer que una palabra nueva nombra el objeto entero, no una parte",
      "Sesgo taxonómico=Extender la palabra a objetos de la misma clase, no a los relacionados temáticamente",
      "Exclusividad mutua=Suponer que cada objeto tiene un solo nombre",
      "Bootstrapping sintáctico=Usar la estructura de la frase para descubrir qué significa un verbo (Gleitman)"
    ],
    g: [
      "Hacia los 18 meses muchos niños tienen unas ___ palabras.|50|200|10",
      "Carey y Bartlett (1978) usaron la palabra nueva «cromo» para nombrar un ___.|color|objeto|animal",
      "Ganger y Brent (2004) analizaron con métodos estadísticos el vocabulario de ___ niños.|38|83|67",
      "Llamar «coche» solo al de la familia es un caso de ___.|infraextensión|sobreextensión|holofrase",
      "Baldwin (1991) comprobó que el niño asocia la palabra nueva al objeto que mira el ___.|adulto|niño|otro niño"
    ],
    tf: [
      "Todos los niños pasan por una explosión de vocabulario hacia los 18 meses.|F|Solo una minoría, en torno a uno de cada cinco (Ganger y Brent, 2004), muestra un verdadero estirón. Los demás aceleran poco a poco.",
      "Que un niño no tenga un estallido de vocabulario no es, por sí solo, un signo de alarma.|V",
      "En esta etapa, la producción de palabras va por delante de la comprensión.|F|Es al revés: la comprensión va por delante de la producción.",
      "Naigles (1990) mostró que los niños pequeños usan la estructura de la frase para interpretar verbos nuevos.|V"
    ],
    q: [
      "Una niña llama «guau» a perros, gatos y vacas. ¿Qué está mostrando?|Una sobreextensión|Una infraextensión|Una holofrase|Usa la palabra para más referentes de los que abarca, a partir de rasgos como la forma, el tamaño o el movimiento.",
      "Un niño oye «la niña está ditando al perro» y otro, «la niña y el perro están ditando». Si interpretan acciones distintas, ¿qué mecanismo usan?|El bootstrapping sintáctico|El sesgo de objeto completo|Las claves sociales del hablante|La estructura de la frase sugiere quién hace qué a quién y orienta el significado del verbo nuevo (Gleitman, 1990).",
      "Si se señala un conejo y se dice «gazapo», el niño supone que la palabra nombra el animal y no sus orejas. ¿Qué sesgo actúa?|El de objeto completo|El taxonómico|El de exclusividad mutua|Una palabra nueva nombra el objeto entero, no una parte. El taxonómico extiende la palabra a objetos de la misma clase.",
      "¿Qué concluyeron Ganger y Brent (2004) sobre la explosión de vocabulario?|Solo la muestra una minoría de niños|La muestran casi todos hacia los 18 meses|Solo aparece en niños bilingües|En torno a uno de cada cinco mostraba un estirón real. En los demás, el crecimiento era gradual y acelerado."
    ],
    inc: [
      "Sobre el aprendizaje del léxico|El sesgo taxonómico une el conejo y su zanahoria|La comprensión va por delante de la producción|El mapeo rápido requiere muy pocas exposiciones|El sesgo taxonómico extiende la palabra a objetos de la misma clase, no a los relacionados temáticamente."
    ],
    seq: [],
    cls: [
      "Error de extensión|Sobreextensión: más referentes; «guau» para perros, gatos y vacas|Infraextensión: menos referentes; «coche» solo para el de la familia"
    ] }
] },
{ n: 3, t: "Gramática, etapa escolar y cerebro en desarrollo", cap: 1, pir: "alta", mods: [
  { t: "Combinaciones y desarrollo gramatical",
    tip: "Entre los 18 y los 24 meses aparecen las combinaciones de dos palabras, de estilo telegráfico, que expresan relaciones de significado. Brown (1973) midió el avance con la LME, calculada en morfemas, y describió cinco estadios y un orden estable de 14 morfemas en inglés. La sobrerregularización («poní») y la curva en U muestran que el niño generaliza reglas, aunque es infrecuente (mediana del 2,5 %, Marcus et al., 1992). Entre los 3 y los 5 años llegan las subordinadas.",
    v: [
      "Habla telegráfica=Enunciados con palabras de contenido y sin palabras función ni terminaciones",
      "LME=Longitud media del enunciado calculada en morfemas (Brown, 1973)",
      "Morfema=Unidad que se cuenta en la LME: «perros» suma dos",
      "Sobrerregularización=Aplicar una regla a una forma irregular, como «sabo» o «poní»",
      "Curva en U=Forma correcta que se pierde al aprender la regla y luego se recupera",
      "Palabras función=Artículos, preposiciones y similares, ausentes en las primeras frases",
      "Marcus et al. (1992)=Muestras de 83 niños con una sobrerregularización mediana del 2,5 %",
      "Subordinadas=Oraciones causales, temporales, relativas y completivas, entre los 3 y los 5 años"
    ],
    g: [
      "Brown describió ___ estadios del desarrollo gramatical según la LME.|cinco|tres|siete",
      "En inglés, Brown observó que ___ morfemas gramaticales se adquieren en un orden muy estable.|14|5|83",
      "La LME es mejor indicador del avance gramatical que la ___.|edad|frecuencia|amplitud",
      "Las oraciones ___ aparecen antes que las subordinadas.|coordinadas|relativas|completivas",
      "El español tiene una flexión mucho más ___ que el inglés.|rica|pobre|regular"
    ],
    tf: [
      "La LME de Brown se calcula contando las palabras de cada enunciado.|F|Se calcula en morfemas, no en palabras: «perro» tiene uno, y «perros», dos. Es una trampa típica.",
      "Las sobrerregularizaciones no pueden ser imitaciones porque el niño no oye esas formas a los adultos.|V",
      "La sobrerregularización es el error más frecuente con los verbos irregulares.|F|Es infrecuente, con una tasa mediana del 2,5 % (Marcus et al., 1992). Su valor está en mostrar que el niño generaliza reglas.",
      "Las primeras combinaciones de dos palabras suelen respetar el orden de la lengua adulta.|V"
    ],
    q: [
      "Un niño decía «puse», luego pasa a decir «poní» y más tarde vuelve a «puse». ¿Qué indica el «poní»?|Que ha descubierto la regla|Que imita a los adultos|Que ha olvidado la palabra|Es la curva en U: la forma aprendida suelta se pierde al generalizar la regla y se recupera al aprender la excepción.",
      "Dos niños de 30 meses tienen una LME muy distinta. ¿Qué conclusión es más adecuada?|Su nivel gramatical es distinto|Uno de ellos tiene sin duda un TDL|La LME no sirve a esa edad|Niños de la misma edad pueden estar en momentos muy distintos. Por eso la LME es mejor indicador que la edad.",
      "«Mamá agua» o «nene cae» son ejemplos de…|habla telegráfica|sobrerregularización|holofrase|Conservan las palabras de contenido y omiten las palabras función y las terminaciones, como un telegrama.",
      "¿Qué tipo de oración ilustra «el perro que ladra»?|Subordinada relativa|Subordinada completiva|Subordinada causal|Aparece entre los 3 y los 5 años, junto a las causales («porque»), las temporales («cuando») y las completivas («creo que…»)."
    ],
    inc: [
      "Sobre el desarrollo gramatical|Hacia los 5 años termina por completo el desarrollo sintáctico|Las subordinadas aparecen entre los 3 y los 5 años|Las combinaciones de dos palabras aparecen hacia los 18–24 meses|Hacia los 5 años se dominan las estructuras básicas, pero la sintaxis compleja y el uso siguen desarrollándose durante años."
    ],
    seq: [
      "Desarrollo gramatical|Combinaciones de dos palabras>Morfemas gramaticales y sobrerregularizaciones>Oraciones coordinadas>Oraciones subordinadas"
    ],
    cls: [] },
  { t: "El lenguaje en la etapa escolar y la adolescencia",
    tip: "Desde los 5–6 años el foco pasa a reflexionar sobre el lenguaje, usarlo con flexibilidad y manejar discursos largos. La conciencia fonológica es clave para aprender a leer, y sus dificultades están en la base de la dislexia evolutiva. La ironía se consolida en la etapa escolar con la teoría de la mente de segundo orden. Las narrativas ganan una estructura de episodio (Stein y Glenn, 1979), y en la adolescencia se desarrollan la argumentación y el discurso expositivo.",
    v: [
      "Conciencia metalingüística=Capacidad de tomar el lenguaje como objeto de reflexión",
      "Conciencia fonológica=Identificar y manipular los sonidos de las palabras, de sílabas a fonemas",
      "Lenguaje figurado=Metáforas, frases hechas e ironía que no se entienden al pie de la letra",
      "ToM de segundo orden=Entender lo que una persona piensa sobre lo que piensa otra",
      "Estructura de episodio=Presentación, problema, intentos de resolverlo y desenlace (Stein y Glenn, 1979)",
      "Macroestructura=Organización global que adquieren las narraciones en la etapa escolar",
      "Punta de la lengua=No encontrar una palabra conocida, episodio más frecuente en la vejez",
      "Jerga adolescente=Variedad que cumple una función de identidad de grupo"
    ],
    g: [
      "Ya a los ___ años los niños hablan de forma más simple a niños pequeños que a adultos (Shatz y Gelman, 1973).|4|8|2",
      "Decir qué queda si a «sopa» le quitas la /s/ es una tarea de conciencia ___.|fonológica|semántica|pragmática",
      "Hacia los 3–4 años, las narraciones son secuencias de hechos ___.|poco conectados|bien jerarquizados|causalmente ligados",
      "Leer en una escritura ___ exige relacionar letras con sonidos.|alfabética|logográfica|ideográfica",
      "En la vejez, el vocabulario se mantiene estable o ___.|crece|se reduce|se pierde"
    ],
    tf: [
      "Darse cuenta de que «hormiga» es una palabra larga aunque nombre algo pequeño es conciencia metalingüística.|V",
      "La comprensión de la ironía está ya consolidada a los 4 años.|F|Se consolida a lo largo de la etapa escolar y depende de la teoría de la mente de segundo orden.",
      "El desarrollo pragmático y el de la sintaxis más compleja continúan hasta el final de la adolescencia.|V",
      "El vocabulario deja de crecer al terminar la adolescencia.|F|Crece durante toda la vida: términos de la profesión, de las aficiones o de la actualidad."
    ],
    q: [
      "Antes de una excursión, un adulto dice «¡qué bien, ha empezado a llover!». Un niño de 4 años se alegra, y su hermana de 10 entiende el fastidio. ¿Qué le permite a ella entenderlo?|La teoría de la mente de segundo orden|La conciencia fonológica ya consolidada|El bootstrapping sintáctico de verbos|La ironía se consolida en la etapa escolar y exige entender lo que una persona piensa sobre lo que piensa otra.",
      "¿Por qué la conciencia fonológica es clave para aprender a leer?|Leer exige relacionar letras con sonidos|Permite entender metáforas y frases hechas|Ayuda a adaptar el mensaje al oyente|En una escritura alfabética hay que relacionar letras con sonidos, y sus dificultades están en la base de la dislexia evolutiva.",
      "Una niña cuenta una historia con presentación, un problema, intentos de resolverlo y un desenlace. ¿Qué ha adquirido?|Estructura de episodio|Conciencia fonológica|Habla privada|Stein y Glenn (1979) describieron esta macroestructura, propia de las narraciones de la etapa escolar.",
      "¿Qué se desarrolla especialmente en la adolescencia?|La argumentación y la persuasión|Las primeras subordinadas causales|La conciencia silábica de las palabras|También el lenguaje figurado más abstracto, el discurso expositivo y la sintaxis compleja de la escritura académica."
    ],
    inc: [
      "Sobre el lenguaje en la etapa escolar|A los 3–4 años ya narran con estructura de episodio|La conciencia fonológica incluye sílabas y fonemas|La jerga cumple una función de identidad de grupo|A los 3–4 años las narraciones son hechos poco conectados. La estructura de episodio llega en la etapa escolar."
    ],
    seq: [
      "Estructura de episodio de una narración|Presentación>Problema>Intentos de resolverlo>Desenlace"
    ],
    cls: [] },
  { t: "Cerebro y lenguaje en desarrollo",
    tip: "Tras el nacimiento hay una sinaptogénesis masiva y después poda, con un pico temprano en la corteza auditiva y tardío en la prefrontal (Huttenlocher, 1997). El fascículo arqueado, en la vía dorsal, madura tarde y se relaciona con la sintaxis compleja. Frente a la equipotencialidad de Lenneberg, la dominancia izquierda está presente muy pronto (Dehaene-Lambertz et al., 2002). Es probabilística: hay dominancia derecha en el 4 % de los diestros fuertes y en el 27 % de los zurdos fuertes.",
    v: [
      "Poda sináptica=Eliminación de las conexiones que no se usan tras la sinaptogénesis",
      "Fascículo arqueado=Haz de la vía dorsal que une regiones temporales y frontales del lenguaje",
      "Equipotencialidad=Idea de Lenneberg de que al nacer ambos hemisferios son equivalentes",
      "Prueba de Wada=Inyección de amobarbital en una carótida para ver qué hemisferio domina",
      "Escucha dicótica=Método conductual y no invasivo para estudiar la lateralización",
      "Doppler transcraneal funcional=Técnica con la que Knecht et al. (2000) midieron la dominancia",
      "Caso Alex=Niño con notable recuperación del lenguaje tras extirparle el hemisferio izquierdo",
      "Función simbólica=Entender que algo puede representar otra cosa"
    ],
    g: [
      "En la corteza ___, el pico de densidad sináptica es tardío (Huttenlocher, 1997).|prefrontal|auditiva|visual",
      "Dehaene-Lambertz et al. (2002) hallaron activación izquierda ante el habla en bebés de ___ meses.|3|12|9",
      "Alrededor del ___ de los diestros tiene el lenguaje lateralizado en el hemisferio izquierdo.|95 %|70 %|50 %",
      "En el estudio de Knecht et al. (2000), la dominancia derecha aparecía en el ___ de los zurdos fuertes.|27 %|4 %|50 %",
      "La maduración del fascículo arqueado se ha relacionado con la comprensión de la ___ compleja.|sintaxis|prosodia|ironía"
    ],
    tf: [
      "Al nacer, ambos hemisferios son equipotenciales para el lenguaje, como defendía Lenneberg.|F|Ya hay respuestas asimétricas al habla en recién nacidos y activación izquierda a los 3 meses. La versión fuerte no se sostiene.",
      "La probabilidad de dominancia derecha aumenta de forma lineal con el grado de zurdería.|V",
      "La prueba de Wada es un método conductual y no invasivo, como la escucha dicótica.|F|Es invasiva: se inyecta amobarbital en una carótida. La escucha dicótica sí es conductual y no invasiva.",
      "El hemisferio derecho contribuye a la prosodia emocional, las inferencias y el humor.|V"
    ],
    q: [
      "Antes de una cirugía, a un paciente se le inyecta amobarbital en la carótida izquierda y deja de poder hablar durante unos minutos. ¿Qué indica?|Dominancia izquierda para el lenguaje|Dominancia derecha para el lenguaje|Representación bilateral del lenguaje|Es la prueba de Wada: si al dormir el hemisferio izquierdo se pierde el habla, ese hemisferio domina el lenguaje.",
      "¿Qué dato cuestiona la equipotencialidad hemisférica al nacer?|Respuestas asimétricas en recién nacidos|Recuperación del lenguaje en el caso Alex|Pico tardío de sinapsis en la prefrontal|Molfese observó respuestas asimétricas al habla en recién nacidos, y Dehaene-Lambertz et al. (2002), activación izquierda a los 3 meses.",
      "Una persona es zurda fuerte. ¿Qué cabe decir de su dominancia para el lenguaje?|Lo más probable es que sea izquierda|Será sin duda del hemisferio derecho|Será siempre del hemisferio izquierdo|En el estudio de Knecht et al. (2000), el 27 % de los zurdos fuertes tenía dominancia derecha: es probabilidad, no regla.",
      "¿Qué ocurre con las sinapsis tras el nacimiento?|Se forman en exceso y luego se podan|Se forman a ritmo constante toda la vida|Ya están completas al nacer|Se forman hasta superar con creces las del adulto y después se eliminan las que no se usan, a ritmo distinto según la región."
    ],
    inc: [
      "Sobre cerebro y lenguaje|El hemisferio derecho no participa en el lenguaje|El cerebro infantil se reorganiza mejor que el adulto|La dominancia izquierda se refuerza con el desarrollo|El derecho contribuye a la prosodia emocional, el discurso, las inferencias, el lenguaje figurado y el humor."
    ],
    seq: [],
    cls: [
      "Método de lateralización|Invasivo: prueba de Wada; amobarbital en una carótida|No invasivo: escucha dicótica; Doppler transcraneal funcional; resonancia magnética funcional"
    ] },
  { t: "¿Periodo crítico o sensible?",
    tip: "Un periodo crítico es una ventana fuera de la cual una capacidad ya no se adquiere con normalidad, y uno sensible, una etapa de aprendizaje más fácil con declive gradual. Lenneberg (1967) situó su final en la pubertad. Genie (Curtiss, 1977) aprendió vocabulario pero poca gramática, aunque su caso mezcla edad, maltrato y aislamiento. Johnson y Newport (1989) apoyaron el periodo crítico, pero Hakuta et al. (2003) y Hartshorne et al. (2018) hallaron un declive gradual.",
    v: [
      "Periodo crítico=Ventana fuera de la cual una capacidad ya no se adquiere con normalidad",
      "Periodo sensible=Etapa de aprendizaje más fácil, seguida de un declive gradual",
      "Genie=Niña hallada a los 13 años tras una infancia de aislamiento (Curtiss, 1977)",
      "Johnson y Newport (1989)=Juicios gramaticales en inmigrantes chinos y coreanos en Estados Unidos",
      "Hakuta, Bialystok y Wiley=Censo de 2,3 millones de inmigrantes, sin discontinuidad a los 15 ni a los 20 años",
      "Hartshorne et al. (2018)=Test por internet a 670.000 personas, con declive tras los 17–18 años",
      "Lengua de signos nicaragüense=Lengua surgida entre niños sordos que ganó gramática de cohorte en cohorte",
      "Edad de llegada=Variable que predice el dominio gramatical de una segunda lengua en inmigrantes"
    ],
    g: [
      "Lenneberg situó el final del periodo crítico hacia la ___.|pubertad|primera infancia|edad adulta",
      "Genie fue encontrada a los ___ años tras pasar la infancia aislada.|13|7|17",
      "Hakuta et al. (2003) analizaron datos del censo de Estados Unidos de ___.|1990|2000|1980",
      "Según Hartshorne et al. (2018), para un dominio de tipo nativo habría que empezar antes de los ___ años.|10|17|5",
      "Con la intervención, Genie aprendió bastante ___, pero su gramática quedó muy limitada.|vocabulario|sintaxis|morfología"
    ],
    tf: [
      "Hakuta et al. (2003) encontraron una caída brusca del dominio del inglés a partir de los 15 años.|F|No hallaron ninguna discontinuidad a los 15 ni a los 20 años, sino un declive suave con la edad de llegada.",
      "El caso de Genie no permite separar el efecto de la edad del maltrato y el aislamiento.|V",
      "Según la propuesta más defendible hoy, el vocabulario puede seguir aprendiéndose toda la vida.|V",
      "En la lengua de signos nicaragüense, quienes se incorporaban mayores dominaban mejor los nuevos recursos gramaticales.|F|Fue al revés: quienes se incorporaban más pequeños dominaban mejor los recursos gramaticales que iban surgiendo."
    ],
    q: [
      "Un estudio con millones de inmigrantes muestra que el dominio del inglés baja poco a poco con cada año de edad de llegada, sin saltos. ¿Qué apoya?|Un periodo sensible|Un periodo crítico estricto|La equipotencialidad|Un declive suave, sin discontinuidad, encaja con un periodo sensible y no con una ventana que se cierra de golpe.",
      "¿Por qué el caso de Genie es difícil de interpretar?|Sufrió además maltrato y aislamiento|Aprendió una gramática completa|Fue encontrada antes de la pubertad|Además de la edad, hubo maltrato, desnutrición y aislamiento emocional, y no se descartan dificultades previas.",
      "¿Qué estimaron Hartshorne, Tenenbaum y Pinker (2018)?|Capacidad alta hasta los 17–18 años|Un cierre brusco de la ventana a los 10 años|Ninguna influencia de la edad de inicio|La capacidad de aprender gramática se mantiene alta hasta los 17–18 años, pero el dominio nativo exige empezar antes de los 10.",
      "¿Qué diferencia un periodo sensible de uno crítico?|El declive es gradual y no desaparece|Solo afecta al vocabulario, no a la gramática|Termina antes, hacia los 5 años|En el periodo sensible el aprendizaje es más fácil durante una etapa y luego disminuye poco a poco, sin desaparecer."
    ],
    inc: [
      "Sobre el periodo crítico|La capacidad gramatical se pierde de golpe en la pubertad|Johnson y Newport usaron juicios gramaticales en inglés|Lenneberg ligó el periodo crítico a la lateralización|La imagen de una ventana que se cierra de golpe no se sostiene: los datos apoyan un declive gradual."
    ],
    seq: [],
    cls: [
      "Interpretación de la evidencia|A favor del periodo crítico: Johnson y Newport (1989); caso Genie|A favor de un declive gradual: Hakuta et al. (2003); Hartshorne et al. (2018)"
    ] }
] },
{ n: 4, t: "Teorías de la adquisición", cap: 1, pir: "alta", mods: [
  { t: "El enfoque conductista",
    tip: "Para Skinner (1957), el lenguaje es conducta operante, controlada por sus consecuencias, sin necesidad de reglas mentales. Clasificó la conducta verbal en operantes: mando, tacto, ecoico, intraverbal, textual y autoclítico. El aprendizaje se explicaría por imitación, refuerzo y moldeamiento. Acierta en que el entorno importa, pero falla como teoría general: no explica la creatividad, los errores que nadie imita, la rapidez y uniformidad ni la escasez de correcciones gramaticales.",
    v: [
      "Operante verbal=Unidad de conducta verbal definida por lo que la controla y la refuerza",
      "Mando=Controlado por una necesidad y reforzado con lo que se pide",
      "Tacto=Controlado por un objeto o suceso presente y reforzado con aprobación social",
      "Ecoico=Repetición de la emisión de otro con la misma forma",
      "Intraverbal=Respuesta a la emisión de otro sin correspondencia formal",
      "Textual=Operante controlada por un estímulo escrito",
      "Autoclítico=Modifica la propia conducta verbal, como «creo que»",
      "Moldeamiento=Refuerzo de aproximaciones sucesivas a la forma adulta"
    ],
    g: [
      "Skinner publicó «Verbal Behavior» en ___.|1957|1959|1965",
      "Para Watson, pensar era ___ en silencio.|hablar|imaginar|razonar",
      "Leer en voz alta «salida» en un cartel es una operante ___.|textual|ecoica|intraverbal",
      "El programa Lidcombe para la ___ se basa en el control operante por parte de los padres.|tartamudez|dislexia|afasia",
      "Reforzar «a», luego «aba» y después «agua» es un ejemplo de ___.|moldeamiento|imitación|autoclítico"
    ],
    tf: [
      "La misma palabra puede ser un mando o un tacto según lo que la controle.|V",
      "Responder «miau» ante «¿cómo hace el gato?» es una operante ecoica.|F|Es intraverbal: responde a la emisión de otro sin correspondencia formal. El ecoico repite la misma forma.",
      "Errores como «se ha rompido» apoyan la explicación conductista basada en la imitación.|F|Son errores que no aparecen en el habla adulta: indican que el niño aplica una regla, no que imite.",
      "El modelado y el refuerzo siguen usándose en la intervención del lenguaje.|V"
    ],
    q: [
      "Un niño con sed dice «agua» y le dan el vaso. Según Skinner, ¿qué operante emite?|Un mando|Un tacto|Un intraverbal|Está controlada por un estado de necesidad y se refuerza con lo que se pide. Si nombrara el agua al verla, sería un tacto.",
      "Un niño ve una galleta en un anuncio y dice «galleta», y su madre responde «¡sí, una galleta!». ¿Qué operante es?|Un tacto|Un mando|Un ecoico|Nombra un estímulo presente y se refuerza con aprobación social. Sería un mando si la pidiera porque tiene hambre.",
      "¿Qué problema del conductismo señala que niños de entornos muy distintos pasen por etapas parecidas?|La rapidez y uniformidad|La creatividad lingüística|Los errores que no se imitan|Con historias de refuerzo muy diferentes, el orden de adquisición es similar, algo difícil de explicar solo por refuerzo.",
      "¿Qué operante verbal es «creo que» en «creo que va a llover»?|Autoclítico|Intraverbal|Textual|El autoclítico modifica la propia conducta verbal a la que acompaña."
    ],
    inc: [
      "Sobre el enfoque conductista|Los adultos corrigen con frecuencia la forma gramatical|Los niños producen oraciones que nunca han oído|Las primeras palabras reflejan lo que el niño oye a menudo|Los adultos rara vez corrigen la forma de lo que dice el niño, como mostraron Brown y Hanlon (1970)."
    ],
    seq: [],
    cls: [
      "Operante verbal de Skinner|Mando: necesidad; se refuerza con lo pedido; «agua» con sed|Tacto: objeto presente; aprobación social; «camión» al verlo|Intraverbal: emisión de otro; sin correspondencia formal; «miau» ante «¿cómo hace el gato?»"
    ] },
  { t: "El enfoque innatista",
    tip: "Chomsky (1959) criticó a Skinner y añadió la pobreza del estímulo: el input no informa de qué oraciones son imposibles. Brown y Hanlon (1970) vieron que los padres corrigen la veracidad, no la forma, aunque las reformulaciones aportan evidencia negativa implícita (Chouinard y Clark, 2003). El LAD contiene una gramática universal de principios y parámetros, como el del sujeto nulo. Se apoya en lenguas emergentes, criollización y privación, pero la GU es difícil de concretar.",
    v: [
      "Pobreza del estímulo=El input es insuficiente para explicar la gramática que se alcanza",
      "Evidencia negativa=Información sobre qué oraciones son imposibles en la lengua",
      "Reformulación=Repetición correcta por el adulto de la frase errónea del niño (recast)",
      "LAD=Dispositivo innato de adquisición del lenguaje propuesto por Chomsky",
      "Gramática universal=Conocimiento común a todas las lenguas humanas",
      "Parámetro del sujeto nulo=Opción que permite omitir el sujeto, como en el español «llueve»",
      "Criollización=Conversión de un pidgin en una lengua con gramática completa (Bickerton)",
      "Pidgin=Sistema de contacto sin gramática estable"
    ],
    g: [
      "Chomsky publicó su reseña de «Verbal Behavior» en ___.|1959|1957|1981",
      "Según Brown y Hanlon (1970), los padres corrigen sobre todo la ___ de lo que dice el niño.|veracidad|forma|pronunciación",
      "La versión de principios y parámetros de la gramática universal es de ___.|1981|1965|1994",
      "Pinker (1994) describió el lenguaje como un ___ propio de la especie.|instinto|hábito|dispositivo",
      "El español permite omitir el sujeto, y el inglés lo ___.|exige|omite|permite"
    ],
    tf: [
      "De Brown y Hanlon (1970) se concluye que el niño no recibe ninguna información sobre sus errores.|F|Las reformulaciones del adulto funcionan como evidencia negativa implícita que los niños aprovechan (Chouinard y Clark, 2003).",
      "En principios y parámetros, aprender una gramática sería en buena parte fijar parámetros.|V",
      "FOXP2 es el gen del lenguaje y apoya directamente la gramática universal.|F|FOXP2 no es «el gen del lenguaje». Algunos argumentos biológicos a favor del innatismo deben matizarse.",
      "El innatismo dejó la idea de que el niño construye activamente una gramática.|V"
    ],
    q: [
      "Una niña dice «papá ha ponido la mesa», que es verdad, y su padre responde «¡qué bien!». Luego dice «eso es un caballo» ante una vaca y la corrigen. ¿Qué ilustra?|Que se corrige la veracidad y no la forma|Que se corrige la forma y no la veracidad|Que los padres corrigen ambas cosas por igual|Es el hallazgo de Brown y Hanlon (1970), que apoyaba la idea de que el niño apenas dispone de evidencia negativa.",
      "Un padre responde a «papá ha ponido la mesa» con «sí, papá ha puesto la mesa». ¿Qué está haciendo?|Una reformulación|Un moldeamiento|Una corrección explícita|Las reformulaciones repiten la frase en forma correcta sin cortar la conversación y funcionan como evidencia negativa implícita.",
      "¿Qué apoyo al innatismo procede de Nicaragua?|Una lengua de signos emergente|Un caso de privación extrema|El estudio genético de FOXP2|Niños sordos que solo usaban gestos caseros crearon una lengua nueva, que las cohortes siguientes hicieron más regular.",
      "¿Qué crítica se dirige al innatismo?|Es difícil concretar qué contiene la GU|Ignora toda predisposición biológica humana|Supone que el niño imita al adulto|Además, muchas adquisiciones son graduales y sensibles a la frecuencia, y el aprendizaje estadístico muestra un input más rico."
    ],
    inc: [
      "Sobre el innatismo de Chomsky|El LAD contiene las reglas concretas de cada lengua|La GU incluye principios invariables y parámetros|La experiencia fija el valor de los parámetros|La gramática universal contiene el conocimiento común a todas las lenguas, no las reglas concretas de cada una."
    ],
    seq: [],
    cls: [
      "Apoyo al innatismo|Lenguas emergentes: lengua de signos nicaragüense; Senghas y Coppola (2001)|Criollización: Bickerton; pidgin que se convierte en criollo|Privación: Genie; Curtiss (1977)"
    ] },
  { t: "Constructivismo e interaccionismo",
    tip: "Para Piaget, el lenguaje es una manifestación de la función simbólica y el pensamiento lo precede. Su habla egocéntrica carece de función comunicativa y desaparece. Para Vygotsky, pensamiento y lenguaje tienen raíces distintas que convergen hacia los dos años, y el habla privada es autorreguladora y se interioriza. Bruner propuso el LASS, con formatos y andamiaje, como contrapunto al LAD. El habla dirigida al niño facilita, pero no es universalmente necesaria (Ochs y Schieffelin, 1984).",
    v: [
      "Habla egocéntrica=Para Piaget, habla no adaptada al oyente que desaparece con el egocentrismo",
      "Habla privada=Para Vygotsky, habla autorreguladora que guía la acción",
      "Habla interna=Forma interiorizada del habla privada",
      "Zona de desarrollo próximo=Distancia entre lo que el niño hace solo y lo que logra con ayuda",
      "LASS=Sistema de apoyo del entorno para la adquisición, de Bruner (1983)",
      "Formato=Rutina de interacción repetida, predecible y con papeles que se alternan",
      "Andamiaje=Ayuda del adulto que se retira a medida que el niño progresa",
      "Socialización lingüística=Estudios de Ochs y Schieffelin sobre culturas con poca habla dirigida al niño"
    ],
    g: [
      "Según Berk (1992), el habla privada ___ cuando la tarea es difícil.|aumenta|desaparece|disminuye",
      "Para Vygotsky, pensamiento y lenguaje convergen hacia los ___ años.|dos|cinco|siete",
      "Para Piaget, el lenguaje aparece al final del periodo ___, junto al juego simbólico.|sensoriomotor|preoperatorio|operatorio",
      "Los kaluli y los ___ apenas usan habla dirigida al niño, y los niños aprenden a hablar con normalidad.|samoanos|nicaragüenses|británicos",
      "Mirar juntos un libro de animales o rodar una pelota de uno a otro son ___ en el sentido de Bruner.|formatos|andamios|mandos"
    ],
    tf: [
      "Para Vygotsky, el habla egocéntrica desaparece al superar el egocentrismo.|F|Para Vygotsky es habla privada que se interioriza como habla interna. La que desaparece es la de Piaget.",
      "Para Piaget, el desarrollo del lenguaje es sobre todo una construcción individual.|V",
      "Bruner propuso el LASS para sustituir por completo el LAD de Chomsky.|F|Aceptó que el niño trae capacidades propias y propuso el LASS como contrapunto al LAD, no como sustituto.",
      "El habla dirigida al niño facilita la adquisición, pero no es universalmente necesaria.|V"
    ],
    q: [
      "Una niña hace un puzle difícil y murmura «esta no… la azul va aquí». ¿Cómo lo interpretaría Vygotsky?|Habla privada que planifica la acción|Habla egocéntrica sin ninguna función|Un error de actuación por cansancio|Es habla autorreguladora: aumenta con la dificultad y acabará interiorizándose como habla interna.",
      "Mientras miran un libro, la madre pregunta «¿qué es esto?» y al principio responde ella. Meses después el niño dice «ato» y ella amplía. ¿Qué concepto ilustra?|El andamiaje|El habla privada|El moldeamiento|Dentro de un formato, el adulto hace lo que el niño aún no puede hacer y retira la ayuda a medida que progresa (Bruner).",
      "¿Qué autor sostiene que el pensamiento precede y sostiene al lenguaje?|Piaget|Vygotsky|Bruner|Para Piaget, el niño nombra lo que ya ha construido en el plano cognitivo. Vygotsky defendía raíces distintas que convergen.",
      "¿Qué mostraron Ochs y Schieffelin (1984) sobre el habla dirigida al niño?|Que en algunas culturas apenas se usa|Que es imprescindible en todas las culturas|Que los bebés no la prefieren|En comunidades como los kaluli y los samoanos apenas se habla así a los bebés, y los niños aprenden con normalidad."
    ],
    inc: [
      "Sobre Vygotsky|El lenguaje va de lo privado a lo social|El habla privada tiene una función autorreguladora|Pensamiento y lenguaje tienen raíces distintas|El recorrido va de fuera hacia dentro: primero comunicarse con los demás y después dirigir la propia conducta."
    ],
    seq: [],
    cls: [
      "Autor|Piaget: función simbólica; habla egocéntrica que desaparece|Vygotsky: habla privada; zona de desarrollo próximo|Bruner: LASS; formatos; andamiaje"
    ] },
  { t: "Enfoques basados en el uso y modelos integradores",
    tip: "Para los enfoques basados en el uso (Tomasello), la gramática se construye desde enunciados concretos con dos capacidades generales: lectura de intenciones y detección de patrones. Las primeras construcciones son islas verbales ligadas a verbos concretos. Rumelhart y McClelland (1986) simularon el pasado inglés sin reglas, y Pinker y Prince (1988) defendieron un sistema doble. Los grandes modelos de lenguaje reabren el debate sobre la pobreza del estímulo. Hoy predominan los modelos integradores.",
    v: [
      "Lectura de intenciones=Entender que el otro quiere referirse a algo o conseguir algo",
      "Detección de patrones=Categorizar, hacer analogías y extraer regularidades del input",
      "Islas verbales=Construcciones tempranas ligadas a verbos concretos (Tomasello)",
      "Rumelhart y McClelland (1986)=Red que aprendió el pasado inglés sin reglas explícitas",
      "Sistema doble=Pasado regular por regla e irregular guardado en la memoria (Pinker y Prince)",
      "Piantadosi (2023)=Usa los modelos de lenguaje contra el argumento de la pobreza del estímulo",
      "Reto BabyLM=Entrena modelos con unos 100 millones de palabras o menos, desde 2023",
      "Modelo integrador=Combina predisposición biológica, aprendizaje estadístico e interacción social"
    ],
    g: [
      "La base de la lectura de intenciones es la atención ___ que aparece hacia los nueve meses.|conjunta|selectiva|sostenida",
      "Un niño dice «quiero agua», «quiero tren» y «quiero pan», pero solo «tira pelota». Para Tomasello, cada verbo es una ___.|isla|regla|categoría",
      "Pinker y Prince (1988) defendieron que el pasado irregular se guarda en la ___.|memoria|gramática|sintaxis",
      "Hacia los diez años, un niño habría oído del orden de decenas de ___ de palabras.|millones|miles|billones",
      "El debate actual no está en elegir una teoría, sino en el ___ de cada componente.|peso|orden|nombre"
    ],
    tf: [
      "Para Tomasello, las categorías gramaticales generales están presentes desde las primeras construcciones.|F|Surgen después, poco a poco, al comparar muchas islas verbales. Las primeras construcciones están ligadas a verbos concretos.",
      "Pinker y Prince criticaron que los errores de la red dependían de cómo se había organizado el entrenamiento.|V",
      "Los grandes modelos de lenguaje se entrenan con una cantidad de palabras similar a la que oye un niño.|F|Se entrenan con muchos órdenes de magnitud más palabras de las que oye un niño, de ahí el reto BabyLM.",
      "Hoy no se defienden ni el innatismo extremo ni el conductismo puro.|V"
    ],
    q: [
      "Un niño de dos años usa «quiero» con muchos objetos, pero «tira» solo en «tira pelota». ¿Qué hipótesis lo explica mejor?|Las islas verbales|Los parámetros innatos|El moldeamiento operante|Cada verbo es una isla con sus propios patrones, y las categorías generales surgen después, al comparar muchas islas.",
      "¿Qué dos capacidades generales bastan según Tomasello?|Lectura de intenciones y detección de patrones|Gramática universal y fijación de parámetros|Imitación y refuerzo de los adultos|No haría falta un conocimiento gramatical innato específico: bastan capacidades generales sociocognitivas y de aprendizaje.",
      "¿Qué sostienen Pinker y Prince (1988) frente al conexionismo?|Que el pasado regular se forma por regla|Que no hacen falta reglas para el pasado|Que los niños no sobrerregularizan nunca|Defendieron un sistema doble: el pasado regular se forma por regla y el irregular se guarda en la memoria.",
      "¿Qué responden los críticos al uso de los modelos de lenguaje contra la pobreza del estímulo?|Que reciben muchísimas más palabras|Que no aprenden ninguna estructura|Que solo aprenden vocabulario|Se entrenan con muchos órdenes de magnitud más palabras que un niño, que oiría decenas de millones hacia los diez años."
    ],
    inc: [
      "Sobre la síntesis actual|Ya hay acuerdo en que existe una gramática universal innata|Ninguna teoría clásica explica por sí sola la adquisición|Los modelos actuales integran biología, estadística e interacción|Sigue en debate si existe un conocimiento gramatical innato específico o bastan capacidades generales de aprendizaje."
    ],
    seq: [],
    cls: [
      "Enfoque|Innatista: Chomsky; Pinker; LAD y gramática universal|Basado en el uso: Tomasello; lectura de intenciones; islas verbales|Conexionista: Rumelhart y McClelland; red sin reglas explícitas"
    ] }
] }
);

// SAIMAP Psicología · Lenguaje · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Factores, bilingüismo y trastornos del desarrollo", cap: 1, pir: "alta", mods: [
  { t: "Factores que influyen en la adquisición",
    tip: "La adquisición depende de factores biológicos, ambientales y sociales que interactúan, y descartar una hipoacusia es el primer paso de cualquier evaluación. En el debate sobre la «brecha de palabras» de Hart y Risley, lo que predice el desarrollo es la calidad de la interacción, como los turnos conversacionales (Romeo et al., 2018), más que la cantidad bruta. Las asociaciones con las pantallas son correlaciones, no prueban causalidad.",
    v: [
      "Hipoacusia=Pérdida auditiva cuya detección es el primer paso de cualquier evaluación del lenguaje",
      "Turnos conversacionales=Intercambios de ida y vuelta entre adulto y niño, mejor predictor que el total de palabras",
      "Lectura dialógica=Lectura compartida en la que el adulto pregunta, amplía y cede al niño el papel de narrador",
      "Hart y Risley (1995)=Grabaron a 42 familias y popularizaron la brecha de los 30 millones de palabras",
      "Sperry et al. (2019)=No reprodujeron la brecha al contar también el habla del entorno",
      "Romeo et al. (2018)=Los turnos, no las palabras oídas, predecían la activación de Broca a los 4–6 años",
      "Diversidad léxica=Variedad de palabras distintas en el input, relacionada con el lenguaje (Rowe, 2012)",
      "Madigan et al. (2020)=Metaanálisis de 42 estudios que asoció más tiempo de pantalla con peor lenguaje"
    ],
    g: [
      "Según Hoff (2003), el efecto del nivel socioeconómico está mediado por el ___ materno.|vocabulario|cociente intelectual|nivel de estudios",
      "Rowe y Goldin-Meadow (2009) hallaron que los gestos a los 14 meses predecían el vocabulario a los ___ meses.|42|24|30",
      "En el metaanálisis de Madigan et al. (2020), ver la pantalla junto a un adulto se asoció con un lenguaje ___.|mejor|peor|similar",
      "En la lectura ___, el adulto hace preguntas abiertas y cede poco a poco al niño el papel de narrador.|dialógica|silenciosa|expositiva",
      "Eriksson et al. (2012) hallaron que las niñas iban algo por delante, con una diferencia pequeña que ___ con la edad.|aumentaba|desaparecía|se invertía"
    ],
    tf: [
      "Las otitis medias de repetición tienen sobre el lenguaje efectos tan graves como una hipoacusia no detectada.|F|Las otitis de repetición tienen efectos pequeños. Es la hipoacusia no detectada la que supone un riesgo alto.",
      "La heredabilidad es mayor para los trastornos del lenguaje que para la variación normal entre niños.|V",
      "La brecha de los 30 millones de palabras es un dato cerrado que confirman todas las réplicas.|F|Sperry et al. (2019) no la reprodujeron al contar el habla del entorno. Su tamaño y su origen siguen en debate.",
      "El nivel socioeconómico influye en el lenguaje sobre todo a través de la interacción, no de forma directa.|V"
    ],
    q: [
      "Unos padres preguntan si basta con que su hija oiga muchas palabras a su alrededor. Según Romeo et al. (2018), ¿qué conviene priorizar?|Los turnos de conversación con ella|El total de palabras que oye|La televisión educativa de fondo|El número de turnos conversacionales, y no el total de palabras oídas, predecía la activación del área de Broca.",
      "Un niño de 2 años apenas habla. ¿Qué debe descartarse en primer lugar?|Una pérdida auditiva|Un bilingüismo familiar|Un trastorno de ansiedad|Una hipoacusia no detectada supone un riesgo alto para el lenguaje oral. Descartarla es el primer paso de cualquier evaluación.",
      "¿Qué permiten concluir los datos de Madigan et al. (2020) sobre las pantallas?|Solo asociaciones con el lenguaje|Un efecto causal negativo claro|Que lo educativo sustituye al adulto|Son correlaciones: no prueban causalidad ni indican que las pantallas educativas sustituyan a la conversación.",
      "Según Golinkoff et al. (2019), en el debate de la brecha, ¿qué predice el desarrollo del lenguaje?|El habla dirigida al niño|El habla del entorno general|El nivel de ingresos familiar|Replicaron a Sperry et al. que lo que predice el desarrollo es precisamente el habla dirigida al niño."
    ],
    inc: [
      "Sobre los factores de la adquisición|La televisión de fondo se asoció con mejor lenguaje|Empezar más tarde con pantallas se asoció con mejor lenguaje|Los gestos a los 14 meses predicen el vocabulario posterior|En Madigan et al. (2020), la televisión de fondo se asoció con peor lenguaje (r de −0,19)."
    ],
    seq: [],
    cls: [
      "Asociación con el lenguaje (Madigan et al., 2020)|Peor lenguaje: más tiempo de pantalla; televisión de fondo|Mejor lenguaje: programas educativos; ver la pantalla junto a un adulto; empezar a usarla más tarde"
    ] },
  { t: "La adquisición en contextos bilingües",
    tip: "El bilingüismo simultáneo se da desde el nacimiento o antes de los tres años, y el secuencial, cuando la primera lengua ya está consolidada. Los bebés distinguen sus dos lenguas a los 4 meses y los bilingües alcanzan los hitos a la misma edad que los monolingües, con un vocabulario conceptual total comparable. El cambio de código es una competencia, y el bilingüismo no causa ni agrava el TDL.",
    v: [
      "Bilingüismo simultáneo=Dos lenguas adquiridas desde el nacimiento o antes de los tres años, aproximadamente",
      "Bilingüismo secuencial=La segunda lengua llega cuando la primera ya está consolidada",
      "Vocabulario conceptual total=Conceptos que el niño conoce en cualquiera de sus lenguas",
      "Cambio de código=Mezclar lenguas en una conversación o frase, competencia regida por reglas",
      "OPOL=Estrategia en la que cada progenitor usa siempre una misma lengua (Ronjat, 1913)",
      "Bilingüismo sustractivo=La segunda lengua desplaza a la primera, a menudo en minorías poco valoradas",
      "BICS=Destrezas comunicativas interpersonales básicas, que se alcanzan en unos 2 años",
      "CALP=Competencia lingüística académica cognitiva, que requiere unos 5 a 7 años"
    ],
    g: [
      "Bosch y Sebastián-Gallés (1997) mostraron que bebés de ___ meses distinguían el catalán del castellano.|4|9|12",
      "La hipótesis de un sistema único inicial que mezclaba las dos lenguas se atribuye a Volterra y ___ (1978).|Taeschner|Lambert|Cummins",
      "Lambert (1974) llamó ___ al bilingüismo en el que la segunda lengua se suma a una primera lengua valorada.|aditivo|simultáneo|secuencial",
      "Según la hipótesis de la ___ de Cummins, lo aprendido en una lengua se transfiere a la otra.|interdependencia|diferenciación|competencia",
      "Para cada lengua se suele citar, de forma aproximada, un mínimo del ___ del tiempo de exposición.|20 al 30 %|5 al 10 %|50 al 60 %"
    ],
    tf: [
      "La estrategia de una persona, una lengua es imprescindible para que el niño aprenda bien sus dos lenguas.|F|Es conocida, pero no imprescindible. Lo decisivo es la cantidad y la calidad de la exposición a cada lengua.",
      "El vocabulario de un bilingüe en cada una de sus lenguas puede ser menor que el de un monolingüe.|V",
      "Que un niño bilingüe mezcle lenguas dentro de una frase indica que todavía confunde sus dos sistemas.|F|El cambio de código es una competencia regida por reglas que también usan los adultos bilingües.",
      "Peal y Lambert (1962) fueron los primeros en asociar el bilingüismo con ventajas cognitivas.|V"
    ],
    q: [
      "Un alumno recién llegado charla con soltura en el patio, pero no entiende un texto de ciencias. ¿Qué lo explica según Cummins?|Domina las BICS, pero aún no la CALP|Domina la CALP, pero aún no las BICS|Presenta un bilingüismo sustractivo|Las BICS se alcanzan en unos 2 años, y la CALP requiere unos 5 a 7 años.",
      "Una niña de 3 años, bilingüe en euskera y castellano, obtiene un vocabulario bajo en castellano. ¿Qué procede?|Evaluar también el euskera|Diagnosticar un TDL|Retirar el euskera en casa|El bilingüismo no causa ni agrava el TDL. Hay que evaluar las dos lenguas y no diagnosticar por una sola.",
      "¿Cómo deben interpretarse los datos de Kovács y Mehler (2009) con bebés bilingües de 7 meses?|Con prudencia, porque la ventaja no está probada|Como prueba firme de una ventaja ejecutiva duradera|Como prueba de un retraso inicial en la atención|La ventaja bilingüe en funciones ejecutivas no es un hecho establecido, así que sus datos deben tomarse con prudencia.",
      "¿Qué mostraron Pearson, Fernández y Oller (1993) sobre el vocabulario bilingüe?|Que el total conceptual es comparable|Que cada lengua iguala al monolingüe|Que el total conceptual es inferior|El vocabulario en cada lengua puede ser menor, pero el vocabulario conceptual total es comparable al de los monolingües."
    ],
    inc: [
      "Sobre la adquisición bilingüe|Los bilingües alcanzan los hitos más tarde|Desde los 4 meses distinguen sus dos lenguas|Lo decisivo es la cantidad y calidad de exposición|Los bilingües simultáneos alcanzan los hitos del desarrollo a la misma edad que los monolingües."
    ],
    seq: [],
    cls: [
      "Distinción de Cummins (1979)|BICS: charla fluida en el patio; unos 2 años; destrezas interpersonales básicas|CALP: comprensión de un texto de ciencias; de 5 a 7 años; competencia académica"
    ] },
  { t: "Trastorno del desarrollo del lenguaje",
    tip: "El consenso CATALISE (Bishop et al., 2016–2017) sustituyó el TEL por el trastorno del desarrollo del lenguaje (TDL). Ya no exige un CI no verbal normal ni una discrepancia, y si hay una condición biomédica conocida se habla de «trastorno del lenguaje asociado a» ella. La prevalencia ronda el 7 %. Son marcadores sensibles la morfología verbal, la repetición de pseudopalabras y de oraciones y, en español, los clíticos y los artículos.",
    v: [
      "TEL=Término anterior, trastorno específico del lenguaje, sustituido tras CATALISE",
      "CATALISE=Consenso de 57 expertos que propuso hablar de TDL (Bishop et al., 2016–2017)",
      "Trastorno asociado=Dificultades de lenguaje ligadas a una condición biomédica conocida, como el TEA",
      "Repetición de pseudopalabras=Tarea de memoria fonológica sensible al TDL (Gathercole y Baddeley, 1990)",
      "Clíticos=Pronombres átonos como «lo» o «la», difíciles en el TDL en español",
      "Tomblin et al. (1997)=Cribaron a 7.218 niños y estimaron una prevalencia del 7,4 %",
      "Estudio SCALES=Norbury et al. (2016), con 7.267 niños de 4 y 5 años: TDL del 7,58 %",
      "Rice y Wexler=Estudiaron la morfología verbal de tiempo y concordancia, sobre todo en inglés"
    ],
    g: [
      "Según Tomblin et al. (1997), solo a los padres del ___ de los niños afectados se les había informado antes del problema.|29 %|7 %|58 %",
      "En el estudio SCALES, el trastorno del lenguaje asociado a otra condición tuvo una prevalencia del ___.|2,34 %|7,58 %|9,92 %",
      "En la CIE-11, el trastorno del desarrollo del lenguaje tiene el código ___.|6A01.2|6A02.1|6A00.2",
      "Un niño con TDL que dice «la niña coge» en lugar de «la niña lo coge» omite un ___.|clítico|artículo|verbo",
      "El TDL se solapa mucho con la dislexia y con el ___.|TDAH|TOC|TEPT"
    ],
    tf: [
      "Para diagnosticar un TDL, CATALISE exige un CI no verbal dentro de la normalidad.|F|Es la trampa típica: CATALISE dejó de exigir un CI no verbal normal o una discrepancia verbal y no verbal.",
      "En SCALES, los niños con CI no verbal medio y medio-bajo no diferían en la gravedad de su lenguaje, salvo en expresión.|V",
      "Si las dificultades de lenguaje se deben a una pérdida auditiva, se habla de trastorno del lenguaje asociado a ella.|V",
      "La prevalencia estimada por Tomblin et al. (1997) era mayor en niñas que en niños.|F|Fue del 8 % en niños y del 6 % en niñas, con un 7,4 % en total."
    ],
    q: [
      "Un niño de 5 años con dificultades persistentes de lenguaje tiene un CI no verbal medio-bajo y ninguna condición biomédica. ¿Qué diagnóstico encaja según CATALISE?|Trastorno del desarrollo del lenguaje|Trastorno específico del lenguaje (TEL)|Trastorno del lenguaje asociado|Sin causa biomédica conocida se habla de TDL, que no exige un CI no verbal normal ni una discrepancia.",
      "¿Qué tarea depende sobre todo de la memoria fonológica y es sensible al TDL?|Repetir pseudopalabras|Nombrar objetos en dibujos|Emparejar palabras sinónimas|La repetición de pseudopalabras depende de la memoria fonológica (Gathercole y Baddeley, 1990) y es un marcador del TDL.",
      "En un aula de 30 alumnos, ¿cuántos niños con TDL cabría esperar según Norbury et al. (2016)?|Unos 2|Unos 5|Menos de 1|Con una prevalencia del 7,58 %, en un aula de 30 alumnos habría unos 2 niños con TDL.",
      "¿Qué dificultad se ha descrito como marcador del TDL en español (Bedore y Leonard, 2001)?|Clíticos y artículos|Vocales tónicas|Orden de sujeto y verbo|En español se han descrito dificultades con los clíticos, como «lo» o «la», y con los artículos."
    ],
    inc: [
      "Sobre el TDL según los criterios actuales|Exige discrepancia entre CI verbal y no verbal|Su prevalencia ronda el 7 % de los niños|Suele persistir en la adolescencia en muchos casos|CATALISE dejó de exigir esa discrepancia y un CI no verbal normal."
    ],
    seq: [],
    cls: [] },
  { t: "Otros trastornos de la comunicación infantil",
    tip: "Los hablantes tardíos dicen menos de 50 palabras o no combinan dos a los 24 meses, y la mayoría alcanza el rango normal en la edad escolar. Los trastornos del habla afectan a la producción de los sonidos, no al código lingüístico. FOXP2 no es «el gen del lenguaje»: su mutación en la familia KE produce sobre todo una dispraxia verbal. El trastorno de la comunicación social no puede diagnosticarse si hay TEA, y el mutismo selectivo es un trastorno de ansiedad.",
    v: [
      "Hablante tardío=Niño con menos de 50 palabras o sin combinaciones a los 24 meses",
      "Apraxia verbal infantil=Fallo en la planificación de los movimientos del habla, con errores inconsistentes",
      "Disartria=Fallo en la ejecución neuromuscular del habla por debilidad o descoordinación",
      "Disglosia=Trastorno del habla por una alteración anatómica de los órganos articulatorios",
      "Trastorno fonológico=Fallo sistemático en la organización de los sonidos, como «tama» por «cama»",
      "Familia KE=Familia con una mutación de FOXP2 y dispraxia verbal (Lai et al., 2001)",
      "Mutismo selectivo=Trastorno de ansiedad: el niño habla en casa, pero no en el colegio",
      "Programa Lidcombe=Tratamiento infantil de la tartamudez con más apoyo empírico"
    ],
    g: [
      "Zubrick et al. (2007) hallaron un ___ de hablantes tardíos a los 24 meses.|13,4 %|7,4 %|29 %",
      "Alrededor del 95 % de los casos de tartamudez empieza antes de los ___ años.|4|6|2",
      "Según los datos de Yairi y Ambrose, la remisión natural de la tartamudez inicial ronda el ___.|88–91 %|45–50 %|20–25 %",
      "Enard et al. (2002) propusieron una selección reciente de FOXP2 analizando una pequeña parte del gen en unas ___ personas.|20|200|2.000",
      "El término ___, para el trastorno del habla de origen anatómico, se usa sobre todo en España.|disglosia|disartria|dislalia"
    ],
    tf: [
      "Los predictores de ser hablante tardío fueron sobre todo la educación y los ingresos de los padres.|F|Fueron la historia familiar, el sexo varón y factores neurobiológicos tempranos, no la educación ni los ingresos.",
      "El riesgo de que un hablante tardío persista es mayor si también falla la comprensión o usa pocos gestos.|V",
      "La ansiedad es la causa principal de la tartamudez inicial.|F|Es un trastorno del neurodesarrollo con fuerte componente genético. La ansiedad es más consecuencia que causa.",
      "En adultos, la prevalencia de la tartamudez es inferior al 1 %.|V"
    ],
    q: [
      "Un niño de 4 años produce la misma palabra de formas distintas en cada intento, sin debilidad muscular. ¿Qué es más probable?|Apraxia verbal infantil|Disartria del desarrollo|Trastorno fonológico|Los errores inconsistentes en la misma palabra son típicos de la apraxia: falla la planificación de los movimientos.",
      "Un niño de 6 años con TEA tiene dificultades para adaptar lo que dice al interlocutor. ¿Puede añadirse un trastorno de la comunicación social?|No, el TEA ya incluye esas dificultades|Sí, si el lenguaje estructural es normal|Sí, si las dificultades son persistentes|El trastorno de la comunicación social no puede diagnosticarse si hay TEA, que ya incluye esas dificultades.",
      "¿Qué produce sobre todo la mutación de FOXP2 en la familia KE?|Un problema de control motor orofacial|Una pérdida específica de la gramática|Un déficit de la comprensión léxica|Produce sobre todo una dispraxia verbal, con afectación lingüística añadida. FOXP2 no es «el gen del lenguaje».",
      "Una niña habla con normalidad en casa, pero no dice nada en el colegio ni con desconocidos. ¿Dónde se clasifica?|Entre los trastornos de ansiedad|Entre los trastornos del lenguaje|Entre los trastornos de la fluidez|El mutismo selectivo es un trastorno de ansiedad, no del lenguaje, aunque se confunde a menudo con este."
    ],
    inc: [
      "Sobre los trastornos del habla|La disartria se debe a una alteración anatómica|El trastorno fonológico implica sustituciones sistemáticas|La tartamudez afecta a la fluidez con bloqueos|La alteración anatómica corresponde a la disglosia. La disartria es un fallo de la ejecución neuromuscular."
    ],
    seq: [],
    cls: [
      "Trastorno del habla|Apraxia verbal infantil: planificación de los movimientos; errores inconsistentes|Disartria: ejecución neuromuscular; debilidad o falta de coordinación|Disglosia: anatomía de los órganos del habla; fisura labiopalatina"
    ] }
] },
{ n: 6, t: "Rasgos, funciones y componentes del lenguaje", cap: 2, pir: "alta", mods: [
  { t: "Rasgos de diseño del lenguaje humano",
    tip: "Hockett (1960) propuso 13 rasgos de diseño para comparar cualquier sistema de comunicación con el lenguaje, y con Altmann (1968) añadió prevaricación, reflexividad y aprendibilidad. Hoy se aplican rasgo por rasgo y de forma gradual. Martinet (1960) describió la doble articulación: monemas con significado formados por fonemas sin él. A la lista se suelen añadir la recursividad y la estructura jerárquica.",
    v: [
      "Desplazamiento=Referirse a lo ausente en el tiempo o en el espacio",
      "Arbitrariedad=Ausencia de relación natural entre forma y significado",
      "Discreción=Unidades separables, no un continuo de señales",
      "Prevaricación=Posibilidad de mentir o de hablar de lo imaginario",
      "Reflexividad=Posibilidad de hablar del propio lenguaje con el lenguaje",
      "Productividad=Crear y entender mensajes nuevos que nunca se habían oído",
      "Monema=Unidad con significado de la primera articulación, como «gat-» en «gatas»",
      "Recursividad=Incluir una estructura dentro de otra del mismo tipo, sin límite teórico"
    ],
    g: [
      "Hockett y Altmann (1968) añadieron a la lista la prevaricación, la reflexividad y la ___.|aprendibilidad|evanescencia|especialización",
      "Corregirse a mitad de una palabra ilustra la ___ total.|retroalimentación|reflexividad|especialización",
      "Que un bebé adoptado aprenda la lengua de su familia adoptiva ilustra la transmisión ___.|cultural|irradiada|direccional",
      "En la segunda articulación de Martinet, los monemas se dividen en ___.|fonemas|morfemas|sintagmas",
      "En «Las llaves del coche están en la mesa», el verbo concuerda con «llaves» por la estructura ___.|jerárquica|lineal|recursiva"
    ],
    tf: [
      "En su primera versión, la lista de Hockett tenía 16 rasgos.|F|Tenía 13. Prevaricación, reflexividad y aprendibilidad se añadieron con Altmann en 1968.",
      "Hoy los rasgos de Hockett se aplican de forma gradual, no como un examen de todo o nada.|V",
      "Lo que distingue al lenguaje humano es un único rasgo de diseño ausente en todas las demás especies.|F|Varios rasgos aparecen en otras especies. Lo distintivo del lenguaje es la combinación de todos ellos.",
      "Hauser, Chomsky y Fitch (2002) propusieron la recursividad como núcleo exclusivamente humano del lenguaje.|V"
    ],
    q: [
      "Un alumno pregunta en clase: «¿Se escribe “hubo” con hache?». ¿Qué rasgo de Hockett ilustra?|Reflexividad|Prevaricación|Desplazamiento|La reflexividad es la posibilidad de hablar del propio lenguaje.",
      "Entre /p/ y /b/ no hay un sonido que signifique «a medias». ¿Qué rasgo se ilustra?|Discreción|Arbitrariedad|Dualidad de patrón|La discreción implica unidades separables, no un continuo.",
      "¿Qué ventaja principal aporta la doble articulación?|La economía de unidades|La rapidez de la emisión|El parecido con lo nombrado|Con 5 vocales y unas 19 consonantes, el español forma decenas de miles de palabras.",
      "¿Qué rasgo añadieron Hockett y Altmann (1968) y no figuraba en la lista original?|Prevaricación|Desplazamiento|Productividad|La prevaricación, junto con la reflexividad y la aprendibilidad, se añadió en 1968."
    ],
    inc: [
      "Sobre los rasgos de diseño|La transmisión cultural implica que la lengua es innata|La evanescencia significa que la señal desaparece enseguida|Las lenguas de signos usan el canal visual-gestual|La transmisión cultural indica que la lengua se aprende de otros hablantes, no que sea innata."
    ],
    seq: [],
    cls: [
      "Doble articulación (Martinet, 1960)|Primera articulación: «gat-»; «-a»; unidades con significado|Segunda articulación: /g/; /t/; unidades sin significado"
    ] },
  { t: "Funciones del lenguaje",
    tip: "Bühler (1934) distinguió las funciones expresiva (síntoma), apelativa (señal) y representativa (símbolo). Jakobson (1960) asoció seis funciones a seis factores: la fática se centra en el canal y la poética en el mensaje. Halliday (1975) describió siete funciones en el habla infantil, y la informativa es la más tardía. La psicología distingue las funciones comunicativa, representativa y reguladora de la conducta.",
    v: [
      "Función fática=Centrada en el canal, abre, mantiene o comprueba el contacto",
      "Función metalingüística=Centrada en el código, usa el lenguaje para hablar del lenguaje",
      "Función poética=Centrada en el mensaje, cuya forma llama la atención sobre sí misma",
      "Función conativa=Centrada en el receptor, busca influir en él",
      "Comunión fática=Intercambio cuyo fin es crear o mantener el contacto social (Malinowski, 1923)",
      "Modelo del órgano=Propuesta de Bühler (1934) del lenguaje como instrumento con tres funciones",
      "Función heurística=En Halliday, explorar y preguntar, del tipo «dime por qué»",
      "Función instrumental=En Halliday, usar el lenguaje para conseguir cosas («quiero»)"
    ],
    g: [
      "Para Bühler, en la función apelativa el signo funciona como ___.|señal|síntoma|símbolo",
      "«¿Hola? ¿Se me oye?» ilustra la función ___ de Jakobson.|fática|poética|conativa",
      "Según Halliday, la función informativa es la que aparece ___ en el niño.|más tarde|más pronto|a la vez",
      "Que el lenguaje es una actividad conjunta para un fin común lo defendió ___ (1996).|Clark|Halliday|Jakobson",
      "Un enunciado que cumple varias funciones se clasifica por la que ___.|predomina|aparece antes|expresa el emisor"
    ],
    tf: [
      "En el modelo de Jakobson, la función poética se centra en el emisor.|F|La poética se centra en el mensaje. La centrada en el emisor es la expresiva o emotiva.",
      "La función fática de Jakobson tiene un antecedente en la comunión fática de Malinowski.|V",
      "Halliday propuso seis funciones del habla infantil, una por cada factor de la comunicación.|F|Halliday propuso siete funciones. Los seis factores con sus seis funciones son de Jakobson.",
      "El niño que se dice «despacio, despacio» mientras construye una torre ilustra la función reguladora de la conducta.|V"
    ],
    q: [
      "Al empezar una videollamada, un profesor pregunta: «¿Me veis todos? ¿Se oye bien?». ¿Qué función predomina?|Fática|Conativa|Referencial|Comprueba que el canal funciona, por eso predomina la función fática, aunque se dirija al receptor.",
      "«“Ósmosis” es una palabra esdrújula» ilustra, según Jakobson, la función…|metalingüística|representativa|poética|Se centra en el código: usa el lenguaje para hablar del propio lenguaje.",
      "Un niño pequeño pregunta sin parar «¿por qué llueve?». Según Halliday, ¿qué función usa?|Heurística|Instrumental|Imaginativa|La función heurística sirve para explorar y preguntar, del tipo «dime por qué».",
      "En el modelo de Bühler, una exclamación como «¡Ay!» funciona como…|síntoma del emisor|señal al receptor|símbolo de un hecho|En la función expresiva, el signo es síntoma del estado del emisor."
    ],
    inc: [
      "Sobre las funciones según Jakobson|La función fática se centra en el mensaje|La conativa se centra en el receptor|La referencial se centra en el contexto|La fática se centra en el canal. La centrada en el mensaje es la poética."
    ],
    seq: [],
    cls: [
      "Función según Bühler (1934)|Expresiva: síntoma; «¡Ay!»|Apelativa: señal; «¡Ven!»|Representativa: símbolo; «El tren sale a las ocho»"
    ] },
  { t: "Forma: fonología y morfología",
    tip: "Bloom y Lahey (1978) distinguen forma, contenido y uso. El fonema es la unidad mínima y abstracta que distingue significados y se identifica mediante pares mínimos. Sus realizaciones físicas son los alófonos, y no debe confundirse con la letra o grafema. El morfema es la unidad mínima con significado: léxico o gramatical, flexivo o derivativo, libre o ligado.",
    v: [
      "Fonema=Unidad mínima y abstracta que permite distinguir significados",
      "Alófono=Realización física distinta de un fonema que no cambia el significado",
      "Par mínimo=Dos palabras que solo difieren en un sonido, como «peso» y «beso»",
      "Grafema=Letra, que no siempre corresponde a un único fonema",
      "Fonotaxis=Reglas sobre qué combinaciones de fonemas admite una lengua",
      "Prosodia=Acento, entonación y ritmo del habla",
      "Morfema flexivo=Marca género, número, persona o tiempo sin cambiar la categoría",
      "Morfema ligado=Unidad con significado que necesita unirse a otra, como «-mente»"
    ],
    g: [
      "El ___ distingue «término», «termino» y «terminó».|acento|ritmo|grafema",
      "La ___ es el rasgo distintivo que separa /p/ de /b/.|sonoridad|nasalidad|duración",
      "El ___ de articulación distingue /p/ de /t/.|punto|modo|rasgo",
      "Con ___, «pollo» y «poyo» suenan igual.|yeísmo|seseo|ceceo",
      "«Hacer → deshacer» ilustra un morfema ___.|derivativo|flexivo|libre"
    ],
    tf: [
      "La «h» de «hielo» representa un fonema del español.|F|No representa ningún fonema. Es la trampa de confundir fonema con letra o grafema.",
      "La /d/ de «dedo» se realiza de forma distinta al principio de la palabra y entre vocales, sin que cambie el significado.|V",
      "El inglés «stress» se adaptó como «estrés» por las reglas de fonotaxis del español.|V",
      "La «-s» de «libros» es un morfema derivativo porque añade significado a la palabra.|F|Es flexivo: marca el número y no cambia la categoría. Los derivativos crean palabras nuevas."
    ],
    q: [
      "En la propuesta de Bloom y Lahey (1978), ¿qué dimensión corresponde a la semántica?|El contenido|La forma|El uso|La forma abarca fonología, morfología y sintaxis, el contenido es la semántica y el uso, la pragmática.",
      "Un hablante con seseo pronuncia igual «casa» y «caza». ¿Qué ilustra?|Que el inventario varía según la variedad|Que /s/ y /θ/ son alófonos en toda lengua|Que la fonotaxis impide pronunciar /θ/|El inventario de fonemas cambia según la variedad: con seseo, «casa» y «caza» suenan igual.",
      "En «cantábamos», el segmento «-ába-» es un morfema…|flexivo y ligado|derivativo y libre|léxico y libre|Marca tiempo sin cambiar la categoría de la palabra y no puede aparecer solo.",
      "¿Qué representa la «x» de «taxi»?|Dos fonemas|Un fonema|Ningún fonema|La «x» de «taxi» representa dos fonemas, un ejemplo de que fonema y letra no coinciden."
    ],
    inc: [
      "Sobre fonemas y alófonos|Los alófonos cambian el significado|Un hispanohablante apenas nota los alófonos de /d/|Los fonemas se describen por rasgos distintivos|Los alófonos son realizaciones distintas de un mismo fonema que no cambian el significado."
    ],
    seq: [],
    cls: [
      "Tipo de morfema por su autonomía|Libre: «sol»; «mar»; «ayer»|Ligado: «re-»; «-mente»; «-s»"
    ] },
  { t: "Sintaxis, semántica y pragmática",
    tip: "La sintaxis estudia cómo las palabras forman sintagmas y oraciones, y la estructura sintagmática explica ambigüedades. Chomsky (1965) distinguió estructura profunda y superficial. La semántica se rige por la composicionalidad (Frege) y estudia las relaciones léxicas. La pragmática estudia el uso en contexto, como la deixis y la presuposición, que se mantiene bajo la negación. Los componentes muestran disociaciones parciales, pero se influyen entre sí.",
    v: [
      "Sintagma=Grupo de palabras que funciona como unidad dentro de la oración",
      "Estructura profunda=Relaciones básicas de significado, comunes a la activa y la pasiva (Chomsky, 1965)",
      "Composicionalidad=El significado del conjunto depende de las partes y de cómo se combinan",
      "Hiponimia=Relación de «rosa» con «flor», su término más general",
      "Polisemia=Varios significados relacionados en una misma palabra, como «hoja»",
      "Homonimia=Formas iguales con significados sin relación, como «vino»",
      "Deixis=Expresiones cuyo referente cambia según quién habla, dónde y cuándo",
      "Connotación=Valores afectivos asociados a una palabra, como la calidez de «hogar»"
    ],
    g: [
      "Los órdenes de palabras más frecuentes en las lenguas del mundo son el SOV y el ___.|SVO|VSO|OVS",
      "La prueba clásica de una presuposición es que se mantiene al ___ el enunciado.|negar|exagerar|resumir",
      "Fodor (1983) propuso que el procesamiento del lenguaje se organiza en ___ rápidos y encapsulados.|módulos|niveles|esquemas",
      "En el síndrome de Williams, el lenguaje ___ está relativamente preservado pese a la discapacidad intelectual.|estructural|pragmático|emocional",
      "El principio de composicionalidad se atribuye a ___.|Frege|Chomsky|Fodor"
    ],
    tf: [
      "«Tomar el pelo» es una excepción al principio de composicionalidad.|V",
      "«Vino» (la bebida) y «vino» (del verbo venir) son un caso de polisemia.|F|Es homonimia: formas iguales con significados sin relación. La polisemia une significados relacionados.",
      "En el trastorno del desarrollo del lenguaje, lo más afectado suele ser la pragmática.|F|Suele ser la morfosintaxis. El déficit pragmático con gramática conservada se ve en algunas personas autistas.",
      "«El perro mordió al cartero» y «El cartero fue mordido por el perro» comparten la estructura profunda.|V"
    ],
    q: [
      "«Vi a la profesora con los prismáticos» es ambigua. ¿Qué lo explica?|La estructura sintagmática|La polisemia de «ver»|La deixis de la oración|«Con los prismáticos» puede depender del verbo o de «la profesora».",
      "En la puerta de un despacho hay una nota: «Vuelvo en cinco minutos», sin fecha ni hora. ¿Qué fenómeno la hace inútil?|La deixis temporal|La presuposición|La homonimia|El referente de expresiones deícticas como «en cinco minutos» depende de cuándo se escribió la nota.",
      "«¿Has dejado ya de llegar tarde?» da por supuesto que antes llegabas tarde. ¿Qué es?|Una presuposición|Una implicatura|Una connotación|La presuposición es información dada por supuesta que se mantiene al negar el enunciado.",
      "¿Qué disociación se observa en algunas personas autistas?|Pragmática afectada con gramática conservada|Gramática afectada con pragmática conservada|Léxico afectado con fonología conservada|Algunas personas autistas conservan gramática y vocabulario y tienen dificultades pragmáticas."
    ],
    inc: [
      "Sobre semántica y pragmática|La presuposición se cancela con facilidad|La denotación es el significado referencial|«Rosa» es hipónimo de «flor»|La presuposición se mantiene bajo la negación y no se cancela con facilidad, a diferencia de la implicatura."
    ],
    seq: [],
    cls: [
      "Componente del lenguaje|Sintaxis: sintagmas; estructura profunda; orden de palabras|Semántica: composicionalidad; polisemia; connotación|Pragmática: deixis; presuposición; actos de habla"
    ] }
] },
{ n: 7, t: "Comunicación animal y principios de la comunicación", cap: 2, pir: "media", mods: [
  { t: "Sistemas de comunicación animal",
    tip: "La pregunta no es si los animales se comunican, sino qué rasgos del lenguaje humano aparecen en sus sistemas. La danza del meneo tiene desplazamiento y semanticidad, pero es analógica, poco productiva y en gran parte innata. Las llamadas de alarma de los vervet tienen referencia funcional con un repertorio cerrado. Las aves canoras aprenden su canto en un periodo sensible, y el carbonero japonés combina llamadas en un orden fijo, cuya interpretación se discute.",
    v: [
      "Danza circular=Indica alimento cercano y anima a buscar por los alrededores",
      "Danza del meneo=Figura en ocho que indica la dirección y la distancia de un alimento lejano",
      "Karl von Frisch=Descifró la comunicación de las abejas, premio Nobel en 1973",
      "Llamadas de alarma=Señales de los vervet específicas para leopardo, águila y serpiente",
      "Referencia funcional=Señales que actúan como si nombraran una clase de depredador",
      "Periodo sensible=Etapa en la que el ave debe oír el canto adulto para aprenderlo bien",
      "Secuencia ABC-D=Llamada de alerta seguida de otra de reclutamiento en el carbonero japonés",
      "Sintaxis composicional=Significado de la combinación que depende de sus partes y su orden"
    ],
    g: [
      "En la danza del meneo, el ángulo del tramo central respecto a la vertical indica la ___.|dirección|distancia|calidad",
      "En la danza del meneo, la duración del tramo central indica la ___.|distancia|dirección|cantidad",
      "Ante la llamada de alarma de leopardo, los vervet ___.|suben a los árboles|miran hacia arriba|miran al suelo",
      "Al oír la secuencia invertida, D-ABC, los carboneros japoneses ___.|no respondían|huían enseguida|se acercaban",
      "Gentner et al. (2006) estudiaron patrones gramaticales en ___.|estorninos|delfines|pinzones"
    ],
    tf: [
      "La relación entre el ángulo de la danza y la dirección del alimento es arbitraria.|F|Es analógica. La danza tiene desplazamiento y semanticidad, pero no arbitrariedad.",
      "Seyfarth, Cheney y Marler (1980) reprodujeron llamadas grabadas sin depredador presente, y los vervet respondían de forma adecuada.|V",
      "Los vervet combinan sus llamadas de alarma para formar mensajes nuevos.|F|El repertorio es cerrado y las llamadas no se combinan para formar mensajes nuevos.",
      "Los críticos ven la secuencia del carbonero como una combinación de dos elementos, sin jerarquía ni recursividad.|V"
    ],
    q: [
      "Se reproduce por un altavoz una llamada de alarma de águila sin que haya ningún ave cerca. ¿Qué harán los vervet?|Mirar hacia arriba y refugiarse en la maleza|Subir enseguida a lo alto de los árboles|Erguirse y mirar con atención al suelo|Cada llamada provoca la huida adecuada: ante la de águila miran hacia arriba y se refugian en la maleza.",
      "¿Qué rasgo del lenguaje NO tiene la danza de las abejas?|Arbitrariedad|Desplazamiento|Semanticidad|La danza informa de algo ausente y tiene significado, pero la relación entre ángulo y dirección es analógica.",
      "¿Qué paralelo humano tiene el aprendizaje del canto en las aves canoras?|El periodo sensible|La recursividad|El desplazamiento|Las aves aprenden el canto oyendo a adultos durante un periodo sensible, con un paralelo en el ser humano.",
      "¿Qué defienden Suzuki, Wheatcroft y Griesser (2016) sobre el carbonero japonés?|Que tiene sintaxis composicional|Que tiene recursividad jerárquica|Que su canto es en gran parte innato|Para los autores, el significado depende de las partes y de su orden. Sus críticos lo discuten."
    ],
    inc: [
      "Sobre la comunicación animal|La danza de las abejas es sobre todo aprendida|Las llamadas vervet tienen un repertorio cerrado|Muchas aves aprenden su canto de los adultos|La danza de las abejas es en gran parte innata."
    ],
    seq: [],
    cls: [
      "Especie|Abeja: danza del meneo; desplazamiento|Mono vervet: llamadas de alarma; referencia funcional|Carbonero japonés: secuencia ABC-D; combinación ordenada"
    ] },
  { t: "Los simios y el lenguaje",
    tip: "Gua y Viki fracasaron con el habla, sobre todo por la anatomía y el control vocal, y los proyectos siguientes usaron otros canales: signos (Washoe, Koko, Nim), fichas (Sarah) y lexigramas (Lana, Kanzi). Terrace et al. (1979) concluyeron que Nim imitaba mucho, sin crecimiento de la longitud media del enunciado ni sintaxis. Kanzi es el caso más sólido de comprensión, pero sigue lejos de la gramática de un niño de tres años.",
    v: [
      "Lexigrama=Símbolo geométrico arbitrario en un teclado, usado con Lana y Kanzi",
      "Washoe=Chimpancé de los Gardner que aprendió signos de la lengua de signos americana",
      "Sarah=Chimpancé de Premack que usaba fichas de plástico de colores y formas",
      "Koko=Gorila de Patterson, descrita sobre todo con informes anecdóticos",
      "Nim Chimpsky=Chimpancé de Terrace: el análisis en vídeo mostró imitación y ninguna gramática",
      "Kanzi=Bonobo que aprendió lexigramas observando las sesiones de su madre adoptiva",
      "Hans el Listo=Caballo que parecía contar, pero respondía a gestos inconscientes de su dueño",
      "Viki=Chimpancé criada por los Hayes que apenas produjo unas pocas palabras"
    ],
    g: [
      "Los Kellogg criaron a la chimpancé ___ junto a su propio hijo.|Gua|Viki|Lana",
      "El fracaso de los primeros proyectos con el habla se atribuyó sobre todo a la ___.|anatomía|motivación|memoria",
      "Al ver un cisne, Washoe signó «agua» y «___».|pájaro|blanco|nadar",
      "En el proyecto Nim, la longitud media del enunciado ___ con el tiempo.|no crecía|crecía|se duplicaba",
      "Kanzi comprendía muchas órdenes ___ nuevas en inglés.|orales|escritas|signadas"
    ],
    tf: [
      "Kanzi aprendió los lexigramas mediante enseñanza directa e intensiva.|F|Los aprendió observando las sesiones de entrenamiento de su madre adoptiva, sin enseñanza directa.",
      "Washoe, Koko y Nim se comunicaban mediante lexigramas.|F|Usaban signos. Los lexigramas corresponden a Lana y Kanzi, una confusión típica de examen.",
      "Los simios entrenados usaban los símbolos sobre todo para pedir cosas, más que para comentar.|V",
      "Las críticas a Koko fueron especialmente fuertes porque la evidencia era sobre todo anecdótica.|V"
    ],
    q: [
      "Un cuidador asegura que su chimpancé «construye frases», pero en el vídeo casi todo repite lo que él acaba de signar. ¿A qué proyecto recuerda?|Al de Nim Chimpsky|Al de Kanzi, el bonobo|Al de Sarah, de Premack|Terrace et al. (1979) hallaron que muchos enunciados de Nim eran imitación inmediata del cuidador.",
      "¿Qué riesgo metodológico ilustra el caso de Hans el Listo?|Las claves involuntarias del cuidador|La interpretación de signos compuestos|La falta de grabaciones en vídeo|Hans respondía a gestos inconscientes de su dueño, un riesgo que también existía con los simios.",
      "¿Qué ejemplo se cita de interpretación generosa por parte de los cuidadores?|Washoe signando «agua» y «pájaro»|Kanzi siguiendo órdenes orales nuevas|Sarah ordenando fichas de colores|No se sabe si Washoe creó una palabra compuesta o nombró dos cosas que veía.",
      "¿Qué no apareció en ningún proyecto con simios?|Sintaxis productiva|Uso de símbolos arbitrarios|Combinaciones de signos|Aprendieron símbolos arbitrarios y los combinaron de forma limitada, pero sin sintaxis productiva."
    ],
    inc: [
      "Sobre los proyectos con simios|Sarah usaba lexigramas en un teclado|Kanzi es el caso más sólido de comprensión|Nim mostró mucha imitación inmediata|Sarah usaba fichas de plástico de colores y formas. Los lexigramas son de Lana y Kanzi."
    ],
    seq: [],
    cls: [
      "Medio de comunicación|Signos: Washoe; Koko; Nim Chimpsky|Lexigramas: Lana; Kanzi|Fichas de plástico: Sarah"
    ] },
  { t: "¿Qué es exclusivamente humano?",
    tip: "Hauser, Chomsky y Fitch (2002) distinguieron la facultad del lenguaje en sentido amplio (FLB), con los sistemas sensoriomotor y conceptual-intencional, y en sentido estricto (FLN), que podría reducirse a la recursividad. Pinker y Jackendoff (2005) replicaron que hay muchos otros componentes específicos, y el debate sigue abierto. Casi ningún rasgo aislado es exclusivo: lo único es la combinación.",
    v: [
      "FLB=Facultad del lenguaje en sentido amplio, con sistemas sensoriomotor y conceptual-intencional",
      "FLN=Componente exclusivamente humano y lingüístico, quizá reducido a la recursividad",
      "Sistema sensoriomotor=Permite producir y percibir las señales",
      "Sistema conceptual-intencional=Aporta los significados y las intenciones",
      "Pinker y Jackendoff (2005)=Ven el lenguaje como un conjunto de adaptaciones para comunicar",
      "Precursores=Capacidades de otras especies relacionadas con rasgos del lenguaje",
      "Hauser, Chomsky y Fitch=Autores de la distinción entre facultad amplia y estricta (2002)",
      "Aprendizaje vocal=Precursor de las aves canoras al que le faltan significados combinables"
    ],
    g: [
      "Para Hauser, Chomsky y Fitch, la FLN podría reducirse a la ___.|recursividad|productividad|referencia",
      "Además de la recursividad, Pinker y Jackendoff citan como componente específico de la sintaxis la ___.|concordancia|referencia|evanescencia",
      "A los lexigramas de Kanzi les falta, respecto al lenguaje, la ___ productiva.|sintaxis|referencia|semanticidad",
      "A la secuencia ABC-D del carbonero le faltan, respecto al lenguaje, la jerarquía y la ___.|recursividad|semanticidad|transmisión",
      "En la comparación de cinco sistemas, solo la dualidad de patrón y la ___ aparecen únicamente en el ser humano.|recursividad|productividad|arbitrariedad"
    ],
    tf: [
      "Según Hauser, Chomsky y Fitch, el sistema sensoriomotor forma parte de la facultad en sentido estricto.|F|Pertenece a la facultad en sentido amplio (FLB), junto al sistema conceptual-intencional.",
      "Muchos componentes de la facultad del lenguaje en sentido amplio se comparten con otras especies.|V",
      "El debate entre Hauser, Chomsky y Fitch y Pinker y Jackendoff se ha resuelto a favor de la recursividad.|F|Sigue abierto. Pinker y Jackendoff defienden muchos otros componentes específicos del lenguaje.",
      "Parte de la diferencia entre especies está también en la capacidad de leer las intenciones ajenas.|V"
    ],
    q: [
      "¿Qué critican Pinker y Jackendoff (2005) a la propuesta de la FLN?|Que deja fuera otros componentes específicos|Que incluye demasiados componentes compartidos|Que niega cualquier precursor animal|Para ellos, la fonología, las palabras, la morfología y buena parte de la sintaxis también son específicas.",
      "¿Qué le falta a la danza del meneo respecto al desplazamiento humano?|Variedad de temas|Referencia a lo ausente|Una base innata|La danza tiene desplazamiento, pero solo habla de direcciones y distancias.",
      "Un equipo descubre una especie que combina dos llamadas en un orden fijo con significado propio. Desde la visión gradual, ¿qué concluir?|Que comparte un precursor, la combinación|Que tiene lenguaje en sentido estricto|Que su sistema es recursivo jerárquico|Comparte una capacidad precursora, pero le faltan la jerarquía y la recursividad.",
      "¿Cuál es la forma más útil de comparar especies con el lenguaje humano?|Rasgo a rasgo y de forma gradual|Con un criterio de todo o nada|Por el tamaño del vocabulario aprendido|La visión gradual permite estudiar los precursores sin exagerar ni negar las diferencias."
    ],
    inc: [
      "Sobre lo exclusivamente humano|La recursividad pertenece a la FLB|Las abejas tienen desplazamiento|Lo único es la combinación de rasgos|En la propuesta de Hauser, Chomsky y Fitch, la recursividad sería la facultad en sentido estricto (FLN)."
    ],
    seq: [],
    cls: [
      "Facultad del lenguaje (Hauser, Chomsky y Fitch, 2002)|Sentido amplio: sistema sensoriomotor; sistema conceptual-intencional|Sentido estricto: recursividad"
    ] },
  { t: "Modelos y axiomas de la comunicación",
    tip: "El modelo de Shannon y Weaver (1949) es una cadena lineal de fuente, transmisor, canal con ruido, receptor y destino, con un receptor pasivo y sin ocuparse del significado. Watzlawick, Beavin y Jackson (1967) propusieron cinco axiomas: es imposible no comunicar, hay un nivel de contenido y otro de relación, la relación depende de la puntuación, la comunicación es digital y analógica, y las interacciones son simétricas o complementarias.",
    v: [
      "Ruido=Interferencia que distorsiona la señal en el canal",
      "Retroalimentación=Respuesta del receptor que permite al emisor ajustar su mensaje",
      "Icono=Signo que se parece a lo que representa, como una fotografía",
      "Índice=Signo con relación causal o de contigüidad, como el humo respecto al fuego",
      "Metacomunicación=Nivel de relación que clasifica al de contenido",
      "Puntuación de la secuencia=Cada parte sitúa en el otro el comienzo de la cadena",
      "Comunicación analógica=La no verbal, como gestos, tono y postura, más ligada a la relación",
      "Doble vínculo=Mensajes contradictorios en dos niveles, sin poder salir ni comentarlo (Bateson, 1956)"
    ],
    g: [
      "Los axiomas de la comunicación proceden de la llamada Escuela de ___.|Palo Alto|Chicago|Fráncfort",
      "La comunicación ___ es la verbal, basada en signos arbitrarios.|digital|analógica|simétrica",
      "Una interacción entre dos compañeros de clase, basada en la igualdad, es ___.|simétrica|complementaria|analógica",
      "En un audio de voz grabado en un bar, la música de fondo es ___.|ruido|código|referente",
      "Los ___ se basan en una convención, como las palabras.|símbolos|iconos|índices"
    ],
    tf: [
      "El modelo de Shannon y Weaver se centra en el significado de los mensajes.|F|Se ocupa de la señal, no del significado, y concibe un receptor pasivo.",
      "Ponerse los auriculares en el tren ilustra que es imposible no comunicar.|V",
      "Hoy se acepta que el doble vínculo es un factor causal de la esquizofrenia.|F|Se propuso así, pero hoy no se acepta. Sí influyó mucho en la terapia familiar sistémica.",
      "Según el segundo axioma, el nivel de relación clasifica al de contenido.|V"
    ],
    q: [
      "Una jefa dice: «Superviso todo porque él no toma la iniciativa». Él replica: «No la tomo porque ella lo supervisa todo». ¿Qué axioma ilustra?|La puntuación de la secuencia|Los niveles de contenido y relación|La interacción complementaria|Cada uno sitúa el comienzo de la cadena en el otro: es la puntuación de la secuencia.",
      "Un jefe dice «aquí podéis opinar con total libertad», pero muestra fastidio cada vez que alguien discrepa, y nadie se atreve a señalarlo. ¿Qué describe?|Un doble vínculo|Una metacomunicación|Una interacción simétrica|Dos mensajes contradictorios en niveles distintos, de alguien importante, sin poder comentar la contradicción.",
      "¿Qué añadieron las ampliaciones posteriores al modelo de Shannon y Weaver?|La retroalimentación|La fuente del mensaje|El ruido del canal|Añadieron la retroalimentación del receptor y elementos como el código, el contexto y el referente.",
      "¿Qué afirma el cuarto axioma sobre la comunicación no verbal?|Que es analógica y ligada a la relación|Que separa lo simétrico de lo complementario|Que es digital y basada en signos|La analógica (gestos, tono, postura) se liga a la relación, y la digital, a signos arbitrarios. Lo simétrico o complementario es otro axioma."
    ],
    inc: [
      "Sobre los axiomas de Watzlawick|La relación médica-paciente es simétrica|Es imposible no comunicar|Toda comunicación tiene contenido y relación|La relación entre médica y paciente se basa en la diferencia, así que es complementaria."
    ],
    seq: [
      "Modelo de Shannon y Weaver (1949)|Fuente>Transmisor>Canal>Receptor>Destino"
    ],
    cls: [
      "Tipo de interacción|Simétrica: dos compañeros de clase; basada en la igualdad|Complementaria: médica y paciente; basada en la diferencia"
    ] }
] },
{ n: 8, t: "Pragmática y teoría de la mente", cap: 2, pir: "alta", mods: [
  { t: "Actos de habla",
    tip: "Austin (1962) distinguió enunciados constatativos y realizativos, sujetos estos a condiciones de felicidad, y después tres actos en cada emisión: locutivo, ilocutivo (lo que se hace al decir) y perlocutivo (el efecto por haberlo dicho). Searle (1976) clasificó los ilocutivos en asertivos, directivos, compromisivos, expresivos y declarativos. Los actos indirectos realizan un acto ilocutivo a través de otro.",
    v: [
      "Constatativo=Enunciado que describe el mundo y puede ser verdadero o falso",
      "Realizativo=Enunciado que realiza la acción al pronunciarse, como prometer",
      "Condiciones de felicidad=Requisitos para que un realizativo funcione, como un procedimiento convencional",
      "Acto locutivo=Decir algo con sentido, con su forma y su significado",
      "Fuerza ilocutiva=Lo que se hace al decir algo, como afirmar o prometer",
      "Acto perlocutivo=Efecto producido en el oyente por haber dicho algo",
      "Acto declarativo=Cambia la realidad institucional al decirlo",
      "Acto indirecto=Acto ilocutivo realizado a través de otro (Searle, 1975)"
    ],
    g: [
      "Los realizativos no son verdaderos ni falsos, sino afortunados o ___.|desafortunados|incompletos|insinceros",
      "«Siento mucho lo de tu abuelo» es, según Searle, un acto ___.|expresivo|asertivo|compromisivo",
      "En una promesa, que el hablante pretenda cumplirla es la condición ___.|de sinceridad|preparatoria|esencial",
      "La obra póstuma de Austin se tituló «How to do things with ___».|words|speech|acts",
      "Los actos indirectos son frecuentes en las peticiones porque suavizan la ___.|imposición|sinceridad|relevancia"
    ],
    tf: [
      "El efecto perlocutivo depende de la intención del hablante.|F|Depende del oyente y puede no producirse. La intención del hablante corresponde a la fuerza ilocutiva.",
      "Austin concluyó que también los enunciados constatativos hacen algo.|V",
      "«Queda usted despedido» es un acto directivo, porque intenta que el oyente se vaya.|F|Es declarativo: cambia la realidad institucional al decirlo.",
      "Responder «no, no me importa» a «¿Te importa bajar la música?» sin bajarla es entender solo el acto literal.|V"
    ],
    q: [
      "En clase, una alumna dice «Hace frío aquí» y un compañero cierra la ventana. ¿Qué es el cierre de la ventana?|El efecto perlocutivo|La fuerza ilocutiva|El acto locutivo|El efecto en el oyente es perlocutivo. La petición indirecta de cerrar la ventana es la fuerza ilocutiva.",
      "Un invitado grita «¡Os declaro marido y mujer!» en mitad del banquete. ¿Por qué nadie queda casado?|Falla una condición de felicidad|Es un enunciado constatativo falso|Falta la fuerza perlocutiva del acto|No lo realiza la persona adecuada en las circunstancias adecuadas, así que el realizativo es desafortunado.",
      "«Envíame los apuntes» es, según Searle (1976), un acto…|directivo|compromisivo|declarativo|Los directivos intentan que el oyente haga algo.",
      "¿Por qué entender un acto indirecto exige inferencia?|La lectura literal no encaja en la situación|La forma gramatical lo indica directamente|El oyente solo procesa el acto perlocutivo|Como la lectura literal no encaja, el oyente busca la intención del hablante."
    ],
    inc: [
      "Sobre los actos de habla|El ilocutivo es el efecto en el oyente|El acto locutivo es producir una frase con sentido|Un mismo enunciado realiza los tres actos a la vez|El efecto en el oyente es el acto perlocutivo. El ilocutivo es lo que se hace al decir algo."
    ],
    seq: [],
    cls: [
      "Acto según Searle (1976)|Asertivo: «El examen es el jueves»; «El tren sale a las ocho»|Directivo: «Envíame los apuntes»; «Apaga el móvil, por favor»|Compromisivo: «Mañana te devuelvo el cargador»; «Te prometo que iré»"
    ] },
  { t: "Grice e implicaturas",
    tip: "Grice (1975) propuso el principio de cooperación y cuatro máximas: cantidad, cualidad, relación y modo. Las implicaturas convencionales dependen de palabras como «pero», y las conversacionales, de las máximas y el contexto, y son cancelables y calculables. La violación encubierta pretende pasar desapercibida, mientras que la burla abierta es evidente y genera una implicatura, como la ironía.",
    v: [
      "Máxima de cantidad=Dar la información necesaria, ni más ni menos",
      "Máxima de cualidad=Decir lo que se cree verdadero y se puede justificar",
      "Máxima de modo=Ser claro, breve y ordenado, sin ambigüedad",
      "Implicatura convencional=Inferencia que depende del significado de palabras como «pero»",
      "Implicatura escalar=«Algunos» comunica «no todos»",
      "Burla abierta=Incumplimiento evidente de una máxima que genera una implicatura",
      "Violación encubierta=Incumplimiento que pretende pasar desapercibido, como mentir",
      "Cancelabilidad=Propiedad de anular una implicatura sin contradicción"
    ],
    g: [
      "La tautología «Un examen es un examen» burla la máxima de ___.|cantidad|cualidad|modo",
      "«¡Menuda suerte la mía!» al pinchar una rueda es una ironía que burla la máxima de ___.|cualidad|cantidad|relación",
      "Hablar del «señor de barba blanca y traje rojo» delante de los niños en diciembre burla la máxima de ___.|modo|cantidad|cualidad",
      "En tareas metalingüísticas, los niños tienden a aceptar «algunos» cuando en realidad son ___ (Noveck, 2001).|todos|pocos|ninguno",
      "Las implicaturas conversacionales son cancelables y ___.|calculables|convencionales|inmunes a la negación"
    ],
    tf: [
      "La ironía es una violación encubierta de la máxima de cualidad.|F|Es una burla abierta: la falsedad es tan evidente que el oyente infiere otra intención.",
      "Una implicatura conversacional particularizada depende de una situación concreta.|V",
      "«Es joven, pero responsable» genera una implicatura conversacional particularizada.|F|Es convencional: depende del significado de «pero», no del contexto.",
      "En contextos que hacen relevante la diferencia, los niños detectan antes las implicaturas escalares (Papafragou y Musolino, 2003).|V"
    ],
    q: [
      "Una amiga pregunta «¿Vamos esta tarde al gimnasio?» y respondes «Me duele la rodilla». ¿Qué se comunica?|Una implicatura particularizada|Una implicatura convencional|Una presuposición mantenida|El «no» se infiere de las máximas y de esa situación concreta: es una implicatura conversacional particularizada.",
      "Una carta de recomendación para un puesto de investigación dice solo: «Tiene buena letra y es puntual». ¿Qué máxima se burla?|Cantidad|Cualidad|Modo|Da mucha menos información de la necesaria, de forma evidente, y así implica una valoración negativa.",
      "«Algunos aprobaron. De hecho, aprobaron todos» no es una contradicción. ¿Qué propiedad lo explica?|La cancelabilidad de la implicatura|La convencionalidad de «algunos»|La persistencia de la presuposición|La implicatura escalar «no todos» se cancela sin contradicción.",
      "Mentir es, según Grice,…|una violación encubierta de la cualidad|una burla abierta de la máxima de cualidad|una violación encubierta del modo|Mentir viola la cualidad pretendiendo que el oyente no lo note, a diferencia de la ironía."
    ],
    inc: [
      "Sobre implicatura y presuposición|La implicatura se mantiene bajo la negación|La presuposición no se cancela con facilidad|Las implicaturas se pueden calcular desde las máximas|La que se mantiene bajo la negación es la presuposición. La implicatura sí se cancela."
    ],
    seq: [],
    cls: [
      "Máxima burlada|Cualidad: «¡Menuda suerte la mía!» al pinchar una rueda|Cantidad: «Un examen es un examen»|Modo: «el señor de barba blanca y traje rojo»"
    ] },
  { t: "Relevancia y fundamento común",
    tip: "Los neo-griceanos simplificaron las máximas: Horn (1984) las redujo a los principios Q y R, y Levinson (2000) estudió las implicaturas generalizadas como interpretaciones por defecto. Para Sperber y Wilson (1986), la comunicación es ostensivo-inferencial y se rige por un único principio de relevancia, equilibrio entre efectos cognitivos y esfuerzo. Clark subrayó el fundamento común, que se construye mediante el anclaje o grounding.",
    v: [
      "Principio Q=Di todo lo que puedas, base de implicaturas como la escalar (Horn, 1984)",
      "Principio R=No digas más de lo necesario, lo que lleva a enriquecer lo dicho",
      "Ostensivo-inferencial=El hablante muestra que quiere comunicar y el oyente infiere qué",
      "Efectos cognitivos=Cuánto cambia un enunciado lo que el oyente sabe o cree",
      "Explicatura=Contenido explícito enriquecido por inferencia",
      "Fundamento común=Conocimientos y supuestos que los interlocutores saben que comparten",
      "Grounding=Dar y pedir pruebas de entendimiento con asentimientos o «ajá» (Clark y Brennan, 1991)",
      "Actividad conjunta=Coordinación de acciones con otra persona, como concibe Clark el habla"
    ],
    g: [
      "Según la teoría de la relevancia, el oyente sigue la ruta de menor ___.|esfuerzo|efecto|riesgo",
      "Levinson (2000) estudió las implicaturas ___, que funcionan como interpretaciones por defecto.|generalizadas|particularizadas|convencionales",
      "La relevancia es un equilibrio entre los efectos cognitivos y el ___ de procesamiento.|esfuerzo|tiempo|nivel",
      "Por mensajes escritos, el anclaje exige confirmar el entendimiento de forma ___.|explícita|implícita|automática",
      "Dos estudiantes de Psicología saben qué es el PIR por pertenecer a la misma ___.|comunidad|familia|generación"
    ],
    tf: [
      "Para la teoría de la relevancia, la inferencia solo interviene después de entender lo literal.|F|Interviene ya en lo dicho: las explicaturas exigen inferencias para completar la frase.",
      "Para Sperber y Wilson, las cuatro máximas de Grice sobran.|V",
      "Horn (1984) amplió las máximas de Grice a seis principios.|F|Las redujo a dos: el principio Q y el principio R.",
      "Cara a cara se ve enseguida si el otro ha entendido, lo que abarata el anclaje.|V"
    ],
    q: [
      "A «¿Te preparo algo?» respondes «Ya he comido», y el oyente entiende «he comido hoy, hace poco». ¿Qué ha recuperado?|Una explicatura|Una implicatura|Una presuposición|Completar lo dicho con «hoy, hace poco» es una explicatura. Inferir «no hace falta» sería la implicatura.",
      "¿Qué principio central propone la teoría de la relevancia?|Cada enunciado presume su relevancia óptima|La cooperación regida por cuatro máximas independientes|Unos pocos principios con interpretaciones por defecto|Todo enunciado comunica la presunción de su propia relevancia óptima (Sperber y Wilson, 1986).",
      "¿Qué neo-griceano redujo las máximas a dos principios?|Horn|Levinson|Clark|Horn (1984) propuso el principio Q y el principio R. Levinson estudió las implicaturas generalizadas.",
      "Dos amigos chatean y uno responde con un «ajá» a cada mensaje del otro. Según Clark y Brennan, ¿qué hacen?|Construir el fundamento común|Burlar la máxima de cantidad|Generar una explicatura|Dar y pedir pruebas de entendimiento es el anclaje o grounding, que construye el fundamento común."
    ],
    inc: [
      "Sobre la teoría de la relevancia|Exige cuatro máximas independientes|La comunicación es ostensivo-inferencial|El oyente se detiene en la primera interpretación relevante|Sperber y Wilson sustituyen las máximas por un único principio de relevancia."
    ],
    seq: [],
    cls: [
      "Enfoque pragmático|Grice: cooperación; cuatro máximas|Neo-griceanos: principio Q; principio R; interpretaciones por defecto|Relevancia: explicatura; máximo efecto con mínimo esfuerzo"
    ] },
  { t: "Teoría de la mente y comunicación",
    tip: "La teoría de la mente (ToM) es la capacidad de atribuir estados mentales a uno mismo y a los demás, un término de Premack y Woodruff (1978). Su prueba clásica es la falsa creencia, que se aprueba de forma gradual hacia los 4–5 años, y la de segundo orden, hacia los 6–7. El lenguaje, sobre todo la sintaxis de complementación, se relaciona con la ToM, y la pragmática depende de ella. La ToM implícita en bebés sigue en debate.",
    v: [
      "Teoría de la mente=Capacidad de atribuir creencias, deseos e intenciones a uno mismo y a los demás",
      "Premack y Woodruff (1978)=Acuñaron el término ToM al estudiar chimpancés",
      "Contenido inesperado=Tarea de una caja de golosinas que contiene lápices (Perner et al., 1987)",
      "Segundo orden=Creencias del tipo «Juan cree que María cree que…», hacia los 6–7 años",
      "Complementación=Sintaxis con verbos mentales como «cree que», formato para creencias falsas",
      "Faux pas=Metedura de pata cuya comprensión exige representar lo que sabe el otro",
      "Teoría-teoría=La ToM como teoría intuitiva que el niño revisa (Gopnik y Wellman, 1994)",
      "ToM implícita=Sensibilidad temprana a la falsa creencia medida por la mirada, aún en debate"
    ],
    g: [
      "En el estudio de Sally y Ana, aprobaron la pregunta de creencia solo 4 de ___ niños autistas.|20|27|14",
      "La historia de Maxi y el chocolate la crearon Wimmer y ___ (1983).|Perner|Leslie|Wellman",
      "Milligan, Astington y Dack (2007) hallaron entre lenguaje y falsa creencia una relación de r ≈ ___.|0,43|0,14|0,85",
      "Los niños sordos de padres ___ que acceden tarde a la lengua de signos se retrasan en falsa creencia.|oyentes|sordos|bilingües",
      "Onishi y Baillargeon (2005) hallaron sensibilidad a la falsa creencia a los ___ meses.|15|9|30"
    ],
    tf: [
      "En Milligan et al. (2007), el efecto era mayor de la falsa creencia previa al lenguaje posterior que al revés.|F|Fue al revés: el efecto era mayor del lenguaje previo a la falsa creencia posterior.",
      "Un déficit de teoría de la mente explica por sí solo el autismo.|F|Muchas personas autistas aprueban las tareas explícitas, y un déficit de ToM no explica por sí solo el autismo.",
      "Wellman, Cross y Watson (2001) hallaron el mismo patrón evolutivo en todos los países.|V",
      "La primera cohorte de la lengua de signos nicaragüense fallaba más las tareas de falsa creencia.|V"
    ],
    q: [
      "Sally guarda su canica en la cesta y sale. Ana la pasa a la caja. Un niño de 3 años dice que Sally la buscará en la caja. ¿Qué indica?|Aún no comprende la falsa creencia|Ya domina la ToM de segundo orden|Tiene una ToM implícita consolidada|Responde según la realidad, no según la creencia de Sally. La falsa creencia explícita se aprueba hacia los 4–5 años.",
      "Hacia los 44 meses, ¿qué proporción de niños de EE. UU. aprueba la falsa creencia según Wellman et al. (2001)?|Aproximadamente la mitad|Casi todos los niños|Menos de una cuarta parte|Hacia los 44 meses acierta aproximadamente la mitad en EE. UU., en torno al 69 % en Australia y al 40 % en Japón.",
      "¿Qué enfoque vinculó la ToM con las neuronas espejo, algo que hoy se matiza?|La simulación|La teoría-teoría|El enfoque modular|La simulación propone ponerse en el lugar del otro (Gallese y Goldman, 1998).",
      "¿Qué halló ManyBabies 2, aún en preprint, en niños de 18 a 27 meses?|No distinguían conocimiento de ignorancia|Anticipaban igual que los adultos del estudio|Aprobaban la falsa creencia explícita|Los adultos anticipaban según lo previsto, pero los niños no distinguían conocimiento de ignorancia."
    ],
    inc: [
      "Sobre la ToM y el lenguaje|Onishi y Baillargeon se han replicado de forma consistente|La sintaxis de complementación ayuda a representar creencias falsas|Entender una ironía exige atribuir intenciones|Varias réplicas fallaron (Kulke et al., 2018), y la ToM implícita sigue en debate."
    ],
    seq: [],
    cls: [
      "Teoría sobre la ToM|Teoría-teoría: Gopnik y Wellman (1994); teoría intuitiva que se revisa|Modular: Leslie (1987); mecanismo de metarrepresentación|Simulación: Gallese y Goldman (1998); ponerse en el lugar del otro"
    ] }
] }
);

// SAIMAP Psicología · Lenguaje · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Percepción del habla y lectura", cap: 3, pir: "alta", mods: [
  { t: "El reto de percibir el habla",
    tip: "La señal del habla varía de forma continua y no tiene una correspondencia fija con los fonemas: por la coarticulación falta invarianza, y tampoco hay pausas fiables entre palabras. La percepción categórica, con un salto brusco en la frontera del VOT, es real, pero no exclusiva del habla ni del ser humano. El oyente se adapta a cada hablante, y sus categorías siguen ajustándose en la edad adulta.",
    v: [
      "Falta de invarianza=Ausencia de una correspondencia fija entre un fonema y sus propiedades acústicas",
      "Coarticulación=Solapamiento de la articulación de sonidos vecinos que modifica la forma acústica de cada uno",
      "Formantes=Bandas de concentración de energía que dependen de la forma del tracto vocal",
      "Espectrograma=Imagen de la señal con el tiempo en horizontal y la frecuencia en vertical",
      "VOT=Intervalo entre la apertura de los labios y el inicio de la vibración de las cuerdas vocales",
      "Percepción categórica=Identificación brusca y mejor discriminación entre categorías que dentro de una",
      "Fonética acústica=Estudio de las propiedades físicas de la señal del habla",
      "Problema de la segmentación=Ausencia de pausas fiables entre palabras, cuyas fronteras pone el oyente"
    ],
    g: [
      "Las vocales se reconocen sobre todo por los dos primeros ___.|formantes|fonemas|armónicos",
      "Muchas consonantes se reconocen por las ___ de los formantes hacia la vocal siguiente.|transiciones|frecuencias|amplitudes",
      "La /d/ de «di» y la de «du» se oyen igual pese a tener transiciones distintas, por efecto de la ___.|coarticulación|normalización|segmentación",
      "En un continuo /ba/–/pa/, la discriminación es máxima en ___.|la frontera|el extremo /ba/|el extremo /pa/",
      "Kuhl y Miller (1975) observaron percepción categórica en ___.|chinchillas|macacos|palomas"
    ],
    tf: [
      "En la percepción categórica, la discriminación entre dos estímulos de la misma categoría es nula.|F|No es nula: es peor que entre categorías, pero existe. Es uno de los matices actuales del fenómeno.",
      "Que la percepción categórica aparezca en animales indica que no es exclusiva del habla humana.|V",
      "En el habla hay silencios dentro de las palabras, como el cierre de una /p/.|V",
      "Para Heald y Nusbaum (2014), el oyente coteja la señal con un repertorio fijo que deja de cambiar en la edad adulta.|F|Proponen un oyente que anticipa, contrasta y rectifica, y cuyas categorías siguen ajustándose en la edad adulta."
    ],
    q: [
      "Una estudiante se muda de Valladolid a Cádiz. La primera semana le cuesta seguir las conversaciones rápidas, pero poco a poco deja de hacer esfuerzo. ¿Qué lo explica mejor?|La adaptación al hablante|La percepción categórica|La restauración fonémica|El oyente ajusta su análisis a cada hablante y situación, y sus categorías siguen ajustándose en la edad adulta (Heald y Nusbaum, 2014).",
      "¿Quiénes plantearon en 1967 la falta de invarianza y la segmentación como problemas centrales?|Liberman et al.|Kuhl y Miller|Cutler y Norris|Liberman, Cooper, Shankweiler y Studdert-Kennedy (1967) los formularon a partir de la acústica del habla.",
      "¿Qué variable separa /ba/ de /pa/ en los continuos clásicos de percepción categórica?|El inicio de la sonoridad (VOT)|La altura del primer formante|La duración de la vocal final|El VOT es el intervalo entre la apertura de los labios y la vibración de las cuerdas vocales.",
      "¿Por qué se matiza hoy que la percepción categórica pruebe un modo especial para el habla?|Porque aparece también en animales|Porque los bebés no la presentan|Porque solo ocurre con las vocales|Kuhl y Miller (1975) la hallaron en chinchillas, y además la discriminación dentro de cada categoría no es nula."
    ],
    inc: [
      "Sobre la señal del habla|Las pausas marcan las fronteras entre palabras|Un mismo fonema varía según sus sonidos vecinos|La energía se agrupa en bandas llamadas formantes|No hay pausas fiables entre palabras: hay silencios dentro de ellas y faltan entre ellas. Las fronteras las pone el oyente."
    ],
    seq: [],
    cls: [] },
  { t: "Teorías y efectos de arriba-abajo",
    tip: "La teoría motora (Liberman et al., 1967, revisada en 1985) sostiene que percibimos los gestos articulatorios, no los sonidos. Pero las lesiones motoras no eliminan la comprensión (Hickok, 2009), así que el sistema motor puede contribuir sin ser imprescindible. El léxico y el contexto influyen en lo que se oye, como muestran la restauración fonémica y el efecto Ganong, y el debate es en qué momento lo hacen.",
    v: [
      "Teoría motora=Propuesta de que se perciben los gestos articulatorios que el hablante pretendía",
      "Restauración fonémica=Percepción de un fonema sustituido por un ruido, gracias al contexto (Warren, 1970)",
      "Efecto Ganong=Un sonido ambiguo se percibe como el fonema que forma una palabra real",
      "Neuronas espejo=Células que se activan al ejecutar una acción y al observarla",
      "Claves métricas=Uso del ritmo de la lengua, como las sílabas fuertes, para situar fronteras",
      "Fonotaxis=Restricciones sobre qué combinaciones de sonidos admite una lengua",
      "Probabilidades de transición=Regularidad estadística entre sílabas que ayuda a segmentar desde los 8 meses",
      "Modelos autónomos=Percepción ascendente en la que el léxico solo actúa en la decisión posterior"
    ],
    g: [
      "Liberman y ___ (1985) revisaron la teoría motora.|Mattingly|Studdert-Kennedy|Shankweiler",
      "Hickok (2009) criticó la teoría motora porque las lesiones del sistema motor del habla no eliminan la ___.|comprensión|articulación|repetición",
      "Si un sonido entre /t/ y /d/ ante «-omate» se oye como /t/, se trata del efecto ___.|Ganong|McGurk|Stroop",
      "En inglés, los oyentes sitúan una frontera ante cada sílaba ___ (Cutler y Norris, 1988).|fuerte|débil|final",
      "En francés, la unidad de segmentación parece ser la ___ (Mehler et al., 1981).|sílaba|mora|palabra"
    ],
    tf: [
      "En el estudio de Warren (1970), los oyentes localizaban con precisión dónde estaba el ruido.|F|Ni siquiera localizaban el ruido: percibían la palabra completa.",
      "Los modelos autónomos niegan que el léxico influya en lo que el oyente dice haber oído.|F|Aceptan esa influencia, pero la sitúan en la decisión posterior. El debate es en qué momento influye el contexto.",
      "Las palabras enmascaradas por ruido se reconocen mejor dentro de una frase que aisladas.|V",
      "Hoy se acepta que el sistema motor puede contribuir a percibir el habla, sobre todo en condiciones difíciles.|V"
    ],
    q: [
      "Una tos tapa la /s/ de «presidente», pero el oyente asegura haber oído la palabra entera. ¿Qué fenómeno ilustra?|Restauración fonémica|Efecto Ganong|Percepción categórica|Es la restauración fonémica (Warren, 1970): el contexto léxico hace «oír» un fonema sustituido por un ruido.",
      "¿Qué hecho cuestiona que el sistema motor sea imprescindible para percibir el habla?|Los bebés distinguen contrastes que aún no producen|Las neuronas espejo se activan al observar acciones|La /d/ cambia acústicamente según la vocal siguiente|Si se discriminan contrastes que no se articulan, la percepción no puede depender por completo de los gestos motores.",
      "En «los trenes», la frontera entre palabras cae entre /s/ y /t/. ¿Qué clave lo permite?|La fonotaxis del español|Las claves métricas|Las probabilidades de transición|En español ninguna palabra empieza por /s/ más consonante, así que la frontera no puede caer antes de la /s/.",
      "¿Con qué modelos encajan mejor la restauración fonémica y el efecto Ganong?|Con los interactivos, como TRACE|Con los autónomos, como Merge|Con la búsqueda serial de Forster|Encajan con los interactivos, aunque los autónomos los explican situando el efecto léxico en la decisión posterior."
    ],
    inc: [
      "Sobre la segmentación del habla|El español segmenta sobre todo por sílabas fuertes|Los bebés de 8 meses usan probabilidades de transición|Cada lengua entrena un procedimiento de segmentación propio|La frontera ante cada sílaba fuerte es propia del inglés. En español pesa la sílaba (Sebastián-Gallés et al., 1992)."
    ],
    seq: [],
    cls: [
      "Efectos de arriba-abajo|Restauración fonémica: Warren (1970); fonema tapado por un ruido|Efecto Ganong: Ganong (1980); sonido ambiguo oído como palabra|Contexto de frase: Miller, Heise y Lichten (1951); palabras en ruido dentro de una frase"
    ] },
  { t: "La lectura",
    tip: "La escritura ofrece unidades discretas y estables, pero la lectura es un invento cultural que se aprende con instrucción. Los ojos alternan fijaciones de 200–250 ms y sacadas de 7–9 caracteres, con una amplitud perceptiva asimétrica hacia la derecha, lo que desmiente la lectura rápida milagrosa. El modelo de doble ruta explica las dislexias adquiridas: la fonológica falla con pseudopalabras y la superficial regulariza las irregulares.",
    v: [
      "Fijación=Pausa del ojo durante la lectura en la que se extrae información",
      "Sacada=Salto ocular rápido durante el que apenas se percibe nada",
      "Amplitud perceptiva=Región del texto de la que se extrae información útil en cada fijación",
      "Ventana móvil=Técnica que solo muestra intacto el texto alrededor del punto fijado",
      "Ruta subléxica=Conversión de cada grafema en su fonema, imprescindible para las pseudopalabras",
      "Ruta léxica=Reconocimiento de la palabra entera, imprescindible para las irregulares",
      "Dislexia profunda=Fallo con pseudopalabras sumado a errores semánticos, como «árbol» por «bosque»",
      "Modelo de triángulo=Red conexionista ortográfica, fonológica y semántica sin léxicos separados"
    ],
    g: [
      "Según Rayner (1998), una fijación en lectores adultos dura unos ___.|200–250 ms|50–80 ms|500–600 ms",
      "Las regresiones suponen alrededor del ___ de las sacadas.|10–15 %|1–2 %|30–40 %",
      "La amplitud perceptiva abarca unos 3–4 caracteres a la izquierda y unos ___ a la derecha.|14–15|7–9|3–4",
      "La A final se reconoce mejor en «MESA» que en «SMEA» por el efecto de superioridad de la ___.|palabra|letra|sílaba",
      "La alfabetización especializa el área visual de la forma de las palabras, en el giro ___ izquierdo.|fusiforme|angular|supramarginal"
    ],
    tf: [
      "La amplitud perceptiva es simétrica alrededor del punto de fijación.|F|Es asimétrica hacia donde avanza la lectura: 3–4 caracteres a la izquierda y 14–15 a la derecha.",
      "Muchas palabras función breves, como «de» o «la», se saltan durante la lectura.|V",
      "En español, por ser una ortografía transparente, no puede detectarse la dislexia superficial.|F|Se detecta por la lentitud y por los errores con homófonos, como «vaca» y «baca».",
      "El núcleo más aceptado de la dislexia evolutiva es un déficit fonológico.|V"
    ],
    q: [
      "Tras un ictus, un paciente lee bien «mesa» y «ventana», no consigue leer «tadermo» y no comete errores semánticos. ¿Qué sugiere?|Dislexia fonológica|Dislexia superficial|Dislexia profunda|Falla la ruta subléxica, necesaria para las pseudopalabras. Sin errores semánticos no se habla de dislexia profunda.",
      "Una paciente lee «pizza» tal como se escribe y confunde «vaca» con «baca». ¿Qué ruta está dañada?|La ruta léxica|La ruta subléxica|El análisis visual|Es una dislexia superficial: se regularizan las irregulares y fallan los homófonos porque no se reconoce la palabra entera.",
      "¿Qué modelo explica el efecto de superioridad de la palabra?|La activación interactiva|El modelo de doble ruta|El modelo de triángulo|McClelland y Rumelhart (1981) conectan rasgos, letras y palabras en ambos sentidos: la palabra activada refuerza sus letras.",
      "¿Por qué no funciona la lectura rápida que promete multiplicar la velocidad sin perder comprensión?|Por las fijaciones y la agudeza de la fóvea|Porque exige vocalizar cada palabra leída|Porque solo se aprende antes de los 7 años|Acelerar más allá de esos límites equivale a saltarse texto, y la comprensión baja (Rayner et al., 2016)."
    ],
    inc: [
      "Sobre la dislexia|La evolutiva afecta exactamente al 10 %|La fonológica impide leer pseudopalabras|La superficial lleva a regularizar las irregulares|La prevalencia de la evolutiva se estima, de forma aproximada, entre el 5 % y el 10 % según el criterio."
    ],
    seq: [],
    cls: [
      "Dislexias adquiridas|Fonológica: falla con pseudopalabras; lee palabras conocidas|Superficial: regulariza irregulares; errores con homófonos|Profunda: errores semánticos; «árbol» por «bosque»"
    ] },
  { t: "Integración multisensorial y lengua de signos",
    tip: "En el efecto McGurk, oír /ba/ y ver articular /ga/ lleva a muchas personas a percibir /da/, pero la susceptibilidad va del 0 % al 100 % y es muy estable en cada persona (Basu Mallick et al., 2015). Ver la cara mejora la inteligibilidad en ruido, y el surco temporal superior es clave en esa integración. Las lenguas de signos son lenguas naturales completas, no universales, y las lesiones izquierdas causan afasias de signos.",
    v: [
      "Efecto McGurk=Fusión de un sonido oído y un movimiento labial visto en un tercer fonema percibido",
      "Surco temporal superior=Zona clave de la integración audiovisual del habla",
      "Configuración, lugar y movimiento=Unidades sin significado de las lenguas signadas, análogas a la fonología",
      "Afasia de signos=Alteración de la lengua signada tras una lesión del hemisferio izquierdo",
      "Alfabeto dactilológico=Representación manual de las letras, usada para deletrear nombres",
      "Pedro Ponce de León=Benedictino que enseñó a niños sordos en el monasterio de Oña en el siglo XVI",
      "Juan Pablo Bonet=Autor de la «Reducción de las letras» (1620) para enseñar a hablar a los sordos",
      "Ley 27/2007=Norma que reconoce las lenguas de signos españolas"
    ],
    g: [
      "Basu Mallick et al. (2015) midieron el efecto McGurk en ___ personas.|360|159|334",
      "Alrededor del ___ de las personas se sitúa en los extremos de susceptibilidad al efecto McGurk.|77 %|50 %|91 %",
      "Ver la cara del hablante mejora más la inteligibilidad cuanto ___ es la relación señal-ruido.|peor|mejor|mayor",
      "Las lesiones ___ que alteran el procesamiento espacial suelen respetar la lengua de signos.|derechas|izquierdas|bilaterales",
      "La susceptibilidad al efecto McGurk mostró a un año una correlación de ≈___.|0,91|0,54|0,17"
    ],
    tf: [
      "El efecto McGurk lo experimenta casi todo el mundo con una intensidad parecida.|F|La susceptibilidad iba del 0 % al 100 %, con forma de U: muchos casi nunca y muchos casi siempre.",
      "Las lenguas de signos son una versión manual de la lengua oral de cada país.|F|Son lenguas naturales completas, con fonología, morfología y una sintaxis que aprovecha el espacio.",
      "Durante la pandemia, varios estudios señalaron que las mascarillas dificultaban percibir emociones.|V",
      "La lectura labial ayuda, pero no basta, porque muchos fonemas se ven casi idénticos en los labios.|V"
    ],
    q: [
      "En un experimento se oye /ba/ mientras se ve a alguien articular /ga/. ¿Qué perciben muchas personas?|/da/|/ba/|/ga/|Es el efecto McGurk: la información auditiva y la visual se funden de forma automática, aunque no en todas las personas.",
      "Una persona signante de LSE sufre una lesión en el hemisferio izquierdo. ¿Qué es más probable?|Una afasia de signos|Conservar su lengua intacta|Perder solo la mímica|Hickok, Bellugi y Klima (1996) hallaron afasias de signos comparables a las orales tras lesiones izquierdas.",
      "Según el estímulo, la tasa media del efecto McGurk oscilaba aproximadamente entre…|el 17 % y el 58 %|el 0 % y el 10 %|el 77 % y el 91 %|La media variaba entre el 17 % y el 58 % según el estímulo, y la susceptibilidad individual iba del 0 % al 100 %.",
      "¿Qué es el «Abecedario demostrativo» de Juan Pablo Bonet (1620)?|Un alfabeto manual|Una lengua de signos|Un método de lectura labial|Representa letras con la mano. No es una lengua de signos, aunque estas lo usan para deletrear nombres."
    ],
    inc: [
      "Sobre las lenguas de signos|Son universales y se entienden entre países|Tienen unidades sin significado análogas a fonemas|Su sintaxis aprovecha el espacio|No son universales: la lengua de signos española y la catalana, por ejemplo, son distintas."
    ],
    seq: [],
    cls: [] }
] },
{ n: 10, t: "El acceso al léxico", cap: 3, pir: "alta", mods: [
  { t: "El léxico mental y sus efectos",
    tip: "El léxico mental reúne información fonológica, ortográfica, morfológica, sintáctica y semántica de cada palabra, y el acceso léxico ocurre en una fracción de segundo. Lo modulan la frecuencia, la edad de adquisición, la lexicalidad, el vecindario ortográfico y la concreción. Ninguna tarea es pura, así que los resultados más sólidos son los que se repiten con varias.",
    v: [
      "Léxico mental=Almacén de las palabras conocidas con su información fonológica, sintáctica y semántica",
      "Acceso léxico=Encontrar en el almacén mental la entrada que corresponde a lo que se oye o se lee",
      "Lema=Información sintáctica y semántica de una palabra, sin su forma sonora",
      "Efecto de lexicalidad=Las palabras se aceptan antes de lo que se rechazan las pseudopalabras",
      "Índice N=Número de palabras que se forman cambiando una sola letra",
      "Edad de adquisición=Lo aprendido en la infancia se procesa antes, aun igualando la frecuencia",
      "Decisión léxica=Decidir lo más rápido posible si una cadena de letras o sonidos es una palabra",
      "Nombrado=Leer en voz alta una palabra midiendo el tiempo hasta empezar a hablar"
    ],
    g: [
      "Que «panadero» contenga «pan» es información de tipo ___.|morfológico|sintáctico|ortográfico",
      "La categoría gramatical y los complementos que admite un verbo son información ___.|sintáctica|semántica|fonológica",
      "«Pato» tiene muchos vecinos ortográficos, como «gato», «palo» o «___».|paso|pera|sapo",
      "El nombrado puede resolverse por la ruta ___ sin acceder al significado, sobre todo en español.|subléxica|léxica|semántica",
      "Con potenciales evocados se registra sobre todo la ___, sensible al significado.|N400|P600|ELAN"
    ],
    tf: [
      "La frecuencia y la edad de adquisición son variables casi independientes, fáciles de separar.|F|Están muy relacionadas, y separar sus efectos exige diseños cuidadosos.",
      "En el estado de punta de la lengua se puede conocer el género de la palabra buscada sin recuperar su sonido.|V",
      "Las palabras abstractas, como «justicia», se procesan mejor que las concretas, como «manzana».|F|Es al revés: las palabras concretas e imaginables se procesan mejor que las abstractas.",
      "En las personas bilingües, el léxico de la otra lengua también se activa en parte.|V"
    ],
    q: [
      "Un investigador compara «pelota» y «hipoteca», igualadas en frecuencia, y halla que la primera se procesa antes. ¿Qué efecto observa?|Edad de adquisición|Vecindario ortográfico|Lexicalidad|Las palabras aprendidas en la infancia se procesan más rápido, aun igualando la frecuencia.",
      "¿Por qué la decisión léxica no es una tarea pura?|Porque añade un proceso de decisión|Porque no mide el tiempo de respuesta|Porque solo usa pseudopalabras|Además de reconocer la palabra hay que decidir. Por eso los resultados sólidos son los que se repiten con varias tareas.",
      "«Herboristería» se lee con más esfuerzo que «farmacia». ¿Qué lo explica?|Es más larga, menos frecuente y más tardía|Es menos concreta, ambigua y sin vecinos|Es una pseudopalabra para muchos lectores|Es más larga, menos frecuente y se aprende más tarde, tres variables que enlentecen el reconocimiento.",
      "¿Qué región se especializa en la forma escrita de las palabras?|Una zona del giro fusiforme|El giro frontal inferior|El lóbulo temporal anterior|Intervienen zonas temporales y frontales, y una región del giro fusiforme está especializada en la forma escrita."
    ],
    inc: [
      "Sobre los efectos léxicos|Las pseudopalabras se rechazan más deprisa|Las frecuentes se reconocen con menos errores|Influye cuántos vecinos ortográficos tiene|Es el efecto de lexicalidad al revés: las palabras se aceptan antes de lo que se rechazan las pseudopalabras."
    ],
    seq: [],
    cls: [] },
  { t: "Modelos del reconocimiento de palabras",
    tip: "Los modelos se distinguen por si el acceso es serial o paralelo y autónomo o interactivo. El logogén acumula evidencia hasta un umbral que baja con el uso, la búsqueda serial de Forster recorre ficheros ordenados por frecuencia y la cohorte elimina candidatos hasta el punto de unicidad. TRACE es interactivo y con retroalimentación, mientras que Merge explica los mismos efectos sin ella.",
    v: [
      "Logogén=Detector de una palabra que acumula evidencia hasta superar su umbral (Morton, 1969)",
      "Punto de unicidad=Momento en que la señal solo es compatible con un candidato",
      "Cohorte=Conjunto de candidatos que empiezan igual y se activan con los primeros sonidos",
      "TRACE=Modelo conexionista interactivo de rasgos, fonemas y palabras (McClelland y Elman, 1986)",
      "Búsqueda serial=Recorrido de ficheros ordenados por frecuencia, entrada a entrada (Forster, 1976)",
      "Inhibición lateral=Competencia entre las unidades de un mismo nivel",
      "Merge y Shortlist=Enfoque autónomo moderno, sin retroalimentación léxica (Norris et al., 2000)",
      "Acceso interactivo=Los niveles superiores influyen en los inferiores"
    ],
    g: [
      "En el logogén, cada uso de una palabra ___ su umbral.|baja|sube|fija",
      "En la versión de 1987 del modelo de cohorte, la activación es ___.|gradual|todo o nada|serial",
      "En la búsqueda serial de Forster, el contexto actúa ___ del acceso.|después|antes|en lugar",
      "Al oír «cocodrilo», la cohorte ya es única con ___.|/kokod/|/koko/|/ko/",
      "El modelo de activación interactiva es el equivalente de TRACE para la palabra ___.|escrita|hablada|signada"
    ],
    tf: [
      "TRACE es un modelo autónomo en el que el léxico no influye en los fonemas.|F|Es interactivo: las palabras devuelven activación a sus fonemas, lo que explica la restauración fonémica.",
      "El modelo de cohorte se pensó sobre todo para el reconocimiento del habla.|V",
      "La búsqueda serial de Forster compara muchos candidatos a la vez.|F|Busca las entradas una a una, empezando por las más frecuentes. Es serial y autónoma.",
      "Hay acuerdo en que varios candidatos se activan a la vez y compiten.|V"
    ],
    q: [
      "En el modelo del logogén, las palabras frecuentes se reconocen antes porque…|su umbral es más bajo|se buscan antes en el fichero|alcanzan antes la unicidad|Cada uso baja el umbral del logogén. Los ficheros son de Forster y el punto de unicidad, de la cohorte.",
      "¿Qué modelo explica el efecto Ganong sin que el léxico modifique la percepción de los fonemas?|Merge|TRACE|Logogén|Norris, McQueen y Cutler (2000) integran ambos niveles en la decisión fonémica, sin retroalimentación.",
      "Un oyente reconoce «cocodrilo» antes de oír «-rilo». ¿Qué concepto lo explica?|El punto de unicidad|El umbral del logogén|La inhibición lateral|En la cohorte, la palabra se reconoce cuando la señal solo encaja con un candidato, a menudo antes de que termine.",
      "¿Qué ventaja aporta la versión de 1987 del modelo de cohorte?|Recuperarse de un error inicial|Incorporar ficheros por frecuencia|Eliminar la competencia léxica|Con activación gradual, un error en el primer sonido no elimina para siempre al candidato correcto."
    ],
    inc: [
      "Sobre los modelos de acceso léxico|El logogén es un modelo serial y autónomo|TRACE incluye inhibición lateral|Merge prescinde de la retroalimentación|El logogén es paralelo y acepta el contexto. El modelo serial y autónomo es la búsqueda de Forster."
    ],
    seq: [],
    cls: [
      "Arquitectura de los modelos|Interactivos: TRACE; activación interactiva|Autónomos: búsqueda serial; Merge y Shortlist"
    ] },
  { t: "Priming y ambigüedad léxica",
    tip: "El priming es la influencia de un estímulo previo sobre el procesamiento de otro, y el semántico se explica por la propagación de la activación. Con priming intermodal, Swinney (1979) mostró que justo después de una palabra ambigua se activan todos sus significados y poco después solo el adecuado, lo que apoya el acceso exhaustivo. Se discute si un contexto muy restrictivo o un significado dominante pueden adelantar la selección.",
    v: [
      "Priming=Influencia de un estímulo previo sobre el procesamiento de otro posterior",
      "Priming de repetición=Una palabra se reconoce antes si se ha visto poco antes",
      "Priming semántico=Facilitación por una palabra previa relacionada en significado",
      "Acceso exhaustivo=Activación inicial de todos los significados antes de seleccionar uno",
      "Acceso selectivo=El contexto actúa desde el principio y solo se activa el sentido que encaja",
      "Priming intermodal=Se oye una frase y se decide sobre una palabra escrita que aparece en un punto",
      "Prime=Estímulo previo que facilita el procesamiento del siguiente",
      "Meyer y Schvaneveldt (1971)=Autores que hallaron respuestas más rápidas ante pares de palabras relacionadas"
    ],
    g: [
      "En español, «tenedor» facilita «___» por priming semántico.|cuchillo|tendero|camino",
      "En la técnica de Swinney, la frase se ___ y la palabra de prueba aparecía escrita.|escuchaba|leía|signaba",
      "Si la palabra escrita aparecía un poco más tarde, solo se facilitaban las relacionadas con el significado ___.|adecuado|descartado|literal",
      "Los datos de Swinney apoyaron una primera fase ___ seguida de una selección rápida.|autónoma|interactiva|selectiva",
      "La explicación más aceptada del priming semántico es la ___ de la activación.|propagación|inhibición|retroalimentación"
    ],
    tf: [
      "Swinney (1979) halló que, si el contexto favorece un sentido, solo se activa ese desde el principio.|F|Justo después se facilitaban palabras ligadas a ambos significados, incluido el que el contexto descartaba.",
      "Meyer y Schvaneveldt (1971) pedían decidir si las dos cadenas de cada par eran palabras.|V",
      "Ya está demostrado que un contexto muy restrictivo nunca adelanta la selección del significado.|F|Sigue en discusión si un contexto muy restrictivo o el predominio de un significado pueden adelantarla.",
      "El priming sirve también para averiguar qué se ha activado en un momento preciso.|V"
    ],
    q: [
      "Un participante oye «Se sentó en el banco del parque» y justo al terminar «banco» decide sobre «dinero». ¿Qué predice Swinney (1979)?|Que se facilite|Que se inhiba|Que no cambie|Justo después de la palabra ambigua se activan todos sus sentidos, también el financiero, que enseguida se suprime.",
      "¿Qué hipótesis apoyaron los datos de Swinney (1979)?|El acceso exhaustivo|El acceso selectivo|La búsqueda serial|Al principio se activan todos los significados y después el contexto selecciona, con una primera fase autónoma.",
      "¿Por qué funcionan los chistes de doble sentido, según lo visto sobre ambigüedad léxica?|El sentido descartado sigue activo un instante|El contexto activa solo el sentido literal|El oyente no accede a ningún significado|Aprovechan que el significado descartado sigue disponible durante un instante tras oír la palabra ambigua.",
      "En el priming de repetición, ¿qué facilita el reconocimiento de una palabra?|Haberla visto poco antes|Que la preceda un sinónimo|Que esté en un contexto ambiguo|La facilitación la produce la misma palabra. Si la produce otra relacionada en significado, el priming es semántico."
    ],
    inc: [
      "Sobre el estudio de Swinney (1979)|La palabra de prueba se presentaba oralmente|Las frases se presentaban de forma auditiva|La palabra ambigua iba en un contexto sesgado|Era priming intermodal: se oía la frase y la palabra de prueba aparecía escrita para una decisión léxica."
    ],
    seq: [
      "Curso temporal según Swinney (1979)|Se oye la palabra ambigua>Se activan todos sus significados>El contexto selecciona el adecuado>Solo se facilita lo relacionado con él"
    ],
    cls: [] },
  { t: "La organización del significado",
    tip: "El priming semántico implica que el significado está organizado. Collins y Quillian (1969) propusieron una red jerárquica que los datos de tipicidad cuestionaron, y Collins y Loftus (1975), una red de propagación de la activación. La semántica corporeizada se apoya en la activación somatotópica de la corteza motora (Hauk et al., 2004), aunque se discute si forma parte del significado, y el modelo hub-and-spoke sitúa un centro transmodal en el lóbulo temporal anterior.",
    v: [
      "Red jerárquica=Conceptos de lo general a lo particular, con cada propiedad en su nivel más alto",
      "Propagación de la activación=La activación de un nodo se extiende a los vecinos y se debilita con la distancia",
      "Rasgos semánticos=Componentes del significado, como «mueble» o «con respaldo» para «silla»",
      "Prototipo=Miembro más típico alrededor del que se organiza una categoría (Rosch, 1975)",
      "Semántica corporeizada=El significado se apoya en los sistemas sensoriales y motores",
      "Organización somatotópica=Activación motora próxima a la zona que controla cada parte del cuerpo",
      "Hub-and-spoke=Representaciones corticales repartidas e integradas por un centro transmodal",
      "Demencia semántica=Pérdida del significado en todas las modalidades por degeneración temporal anterior"
    ],
    g: [
      "Para Collins y Quillian, «un canario tiene piel» se verifica despacio porque esa propiedad se guarda en el nivel de ___.|animal|canario|pájaro",
      "Se verifica antes «un gorrión es un pájaro» que «un pingüino es un pájaro», un efecto de ___.|tipicidad|frecuencia|vecindario",
      "Collins y Loftus (1975) usaron enlaces de longitud ___ según la relación entre conceptos.|variable|constante|jerárquica",
      "El centro semántico transmodal se sitúa en el lóbulo temporal ___.|anterior|posterior|medial",
      "Los modelos conexionistas representan el significado como patrones ___ de activación.|distribuidos|aislados|jerárquicos"
    ],
    tf: [
      "Hauk et al. (2004) demostraron que la activación motora es necesaria para comprender verbos de acción.|F|Mostraron la activación somatotópica, pero si es necesaria o un efecto secundario sigue en debate.",
      "La semántica corporeizada explica mejor las palabras concretas que las abstractas, como «justicia».|V",
      "En la red de Collins y Quillian, cada propiedad se guarda en todos los niveles a los que se aplica.|F|Se guarda solo en el nivel más alto al que se aplica, por eso verificar algunas propiedades exige recorrer niveles.",
      "Según Rosch (1975), las categorías se organizan alrededor de su miembro más típico, con límites difusos.|V"
    ],
    q: [
      "Una paciente con degeneración del lóbulo temporal anterior deja de saber qué es una guitarra al verla, al oírla y al leer su nombre. ¿Qué sugiere?|Demencia semántica|Dislexia profunda|Afasia de conducción|La demencia semántica borra el significado en todas las modalidades y es la principal prueba del centro transmodal.",
      "¿Qué modelo es la explicación estándar del priming semántico?|La propagación de la activación|La red jerárquica de Quillian|La teoría de los prototipos|En la red de Collins y Loftus (1975), la activación de «guitarra» se extiende a conceptos vecinos como «violín».",
      "Para la postura crítica con la semántica corporeizada, la activación motora al leer «patear» es…|un efecto secundario|parte del significado|una simulación necesaria|Para unos forma parte del significado. Para otros es un epifenómeno que se propaga una vez comprendida la palabra.",
      "¿Qué dato cuestionó la jerarquía estricta de Collins y Quillian (1969)?|Los efectos de tipicidad|La activación somatotópica|La demencia semántica|Se verifica antes que un gorrión es un pájaro que un pingüino, algo que la jerarquía estricta no predice."
    ],
    inc: [
      "Sobre la organización del significado|Las categorías tienen límites nítidos según Rosch|La activación se debilita con la distancia|La demencia semántica afecta a todas las modalidades|La teoría de los prototipos propone categorías organizadas alrededor del miembro típico, con límites difusos."
    ],
    seq: [],
    cls: [
      "Modelos del significado|Red jerárquica: Collins y Quillian (1969); de lo general a lo particular|Propagación de la activación: Collins y Loftus (1975); enlaces de longitud variable|Hub-and-spoke: Patterson, Nestor y Rogers (2007); centro temporal anterior"
    ] }
] },
{ n: 11, t: "Oraciones, discurso y cerebro", cap: 3, pir: "alta", mods: [
  { t: "Procesamiento sintáctico",
    tip: "El análisis sintáctico es incremental y por eso puede comprometerse antes de tiempo, como en las oraciones de vía muerta. El modelo de Frazier es serial y modular, con adjunción mínima y cierre tardío, mientras que los modelos basados en restricciones consideran varios análisis en paralelo con toda la información desde el principio. La preferencia española por la adjunción alta (Cuetos y Mitchell, 1988) cuestionó la universalidad del cierre tardío.",
    v: [
      "Oración de vía muerta=Oración con una ambigüedad temporal que lleva a un análisis inicial erróneo",
      "Adjunción mínima=Preferir la estructura sintáctica con menos nodos (Frazier)",
      "Cierre tardío=Adjuntar cada palabra nueva al sintagma que se está procesando",
      "Adjunción alta=Preferencia por unir la relativa al primer sustantivo, observada en español",
      "Modelo de restricciones=Varios análisis en paralelo con uso inmediato de toda la información",
      "Paradigma del mundo visual=Registro de la mirada mientras se oyen instrucciones sobre objetos",
      "Suficientemente bueno=Procesamiento que construye representaciones superficiales que bastan para la tarea",
      "Ilusión de Moisés=No advertir que fue Noé quien llevó los animales en el arca al responder «dos»"
    ],
    g: [
      "El modelo de vía muerta construye ___ estructura con información sintáctica.|una sola|dos|varias",
      "En el modelo de vía muerta, en la región que desambigua aparecen fijaciones más largas y ___.|regresiones|sacadas|parpadeos",
      "«The evidence examined by the lawyer» apenas causa dificultad por la ___ del sujeto.|animacidad|frecuencia|longitud",
      "Las relativas de ___ cuestan más porque mantienen más elementos pendientes.|objeto|sujeto|lugar",
      "Ante «el criado de la actriz que estaba en el balcón», los hispanohablantes preferían que estuviera en el balcón ___.|el criado|la actriz|alguien"
    ],
    tf: [
      "La adjunción mínima y el cierre tardío son principios de los modelos basados en restricciones de MacDonald.|F|Son principios de economía del modelo de vía muerta de Frazier, serial y modular.",
      "En el modelo de Frazier, la semántica y el contexto intervienen después del primer análisis sintáctico.|V",
      "Con dos manzanas, una sobre una toalla, los participantes de Tanenhaus et al. (1995) seguían mirando la toalla vacía.|F|Con dos manzanas el error desaparecía: el contexto referencial actuaba de inmediato.",
      "Tras leer oraciones de vía muerta, muchos lectores conservan la interpretación inicial errónea.|V"
    ],
    q: [
      "Una lectora lee «Mientras María cosía el vestido se cayó al suelo» y vuelve con la vista a «el vestido». ¿Qué ocurre?|Un reanálisis sintáctico|Una inferencia elaborativa|Un acceso exhaustivo|Es una oración de vía muerta: «el vestido» se lee primero como lo cosido y luego debe reinterpretarse como sujeto.",
      "¿Qué resultado obtuvieron Cuetos y Mitchell (1988) con hispanohablantes?|Preferencia por la adjunción alta|Preferencia por el cierre tardío|Ausencia de cualquier preferencia|Preferían adjuntar la relativa a «el criado», al contrario que los angloparlantes y que el cierre tardío.",
      "¿Por qué cuestan más las relativas de objeto que las de sujeto?|Por mantener más elementos pendientes|Por tener menos nodos sintácticos|Por violar el principio de animacidad|Exigen más memoria de trabajo porque quedan más elementos pendientes (Just y Carpenter, 1992, Gibson, 1998).",
      "Muchas personas responden «dos» a «¿Cuántos animales de cada especie llevó Moisés en el arca?». ¿Qué ilustra?|Un procesamiento superficial|Un efecto de vía muerta|Un fallo de cierre tardío|Es la ilusión de Moisés: se construyen representaciones suficientemente buenas sin advertir que fue Noé."
    ],
    inc: [
      "Sobre los modelos de restricciones|Construyen un solo análisis y luego reanalizan|Usan la frecuencia de cada estructura con un verbo|La plausibilidad actúa desde el principio|Construir una sola estructura y reanalizar es propio de Frazier. Los de restricciones consideran varios análisis en paralelo."
    ],
    seq: [],
    cls: [
      "Modelos del análisis sintáctico|Vía muerta: Frazier; serial y modular; adjunción mínima|Restricciones: MacDonald et al.; análisis en paralelo; animacidad"
    ] },
  { t: "Potenciales evocados y predicción",
    tip: "Los potenciales evocados dicen cuándo ocurre algo con precisión de milisegundos, aunque localizan mal. La N400 se gradúa según lo difícil que resulta integrar el significado, y la P600 aparece ante anomalías sintácticas y reanálisis, aunque existe una P600 semántica (Kuperberg, 2007). Predecimos el significado de lo que viene, pero la réplica de Nieuwland et al. (2018) no halló un efecto fiable de preactivación de la forma.",
    v: [
      "Potenciales evocados=Actividad eléctrica ligada a un estímulo, registrada desde el cuero cabelludo",
      "N400=Onda negativa hacia los 400 ms ligada a la dificultad de integrar el significado",
      "P600=Onda positiva hacia los 600 ms ligada a anomalías sintácticas y reanálisis",
      "LAN y ELAN=Ondas tempranas anteriores izquierdas ante violaciones morfosintácticas",
      "P600 semántica=Positividad ante oraciones gramaticales con una relación temática imposible",
      "Kutas y Hillyard (1980)=Autores que describieron la onda negativa ante palabras incongruentes",
      "Osterhout y Holcomb (1992)=Autores que describieron la positividad tardía ante anomalías sintácticas",
      "Predicción=Anticipación de lo que viene, como mirar el pastel al oír «comerá»"
    ],
    g: [
      "«Untó la tostada con calcetines» provoca sobre todo una ___.|N400|P600|LAN",
      "La amplitud de la N400 es ___ según lo difícil que resulta integrar el significado.|graduada|constante|binaria",
      "Altmann y Kamide (1999) vieron que las miradas iban al pastel al oír el ___.|verbo|sustantivo|artículo",
      "Nieuwland et al. (2018) repitieron el estudio en ___ laboratorios.|9|3|20",
      "DeLong et al. (2005) usaron la diferencia inglesa entre los artículos «a» y «___».|an|the|one"
    ],
    tf: [
      "La N400 es una onda de error que solo aparece ante palabras imposibles.|F|Su amplitud es graduada: una palabra posible pero poco esperada también la produce, aunque menor.",
      "La P600 aparece también en las oraciones de vía muerta.|V",
      "Nieuwland et al. (2018) no lograron replicar el efecto de la predictibilidad en el sustantivo.|F|El efecto en el sustantivo se replicó con claridad. Lo que no fue fiable fue el efecto en el artículo.",
      "Los potenciales evocados tienen gran precisión temporal, pero localizan mal.|V"
    ],
    q: [
      "Un participante lee «La comida devoró al niño», una oración gramatical con una relación temática imposible. ¿Qué componente se ha descrito en estos casos?|Una P600 semántica|Una N400 sintáctica|Una ELAN temprana|Kuperberg (2007) revisó casos de P600 semántica, que muestran que la correspondencia entre componente y nivel no es exacta.",
      "¿Qué concluye la réplica de Nieuwland et al. (2018)?|Que se predice el significado, no la forma|Que no se predice nada antes del sustantivo|Que se preactiva siempre la forma esperada|No hay evidencia convincente de preactivación rutinaria de la forma, aunque sí de anticipación del significado.",
      "En Altmann y Kamide (1999), ¿qué ocurría con el verbo «moverá» en lugar de «comerá»?|No se anticipaba el pastel|Se miraba antes el pastel|Se miraba la toalla vacía|«Comerá» restringe de inmediato los candidatos a lo comestible. «Moverá» no los restringe y no hay mirada anticipada.",
      "¿Qué componente, temprano y anterior izquierdo, se asocia a violaciones de la estructura de la frase?|ELAN|N400|P600|LAN y ELAN son más tempranas que la N400 y la P600, y se ligan a violaciones morfosintácticas y de estructura."
    ],
    inc: [
      "Sobre los potenciales evocados en el lenguaje|La P600 es negativa y aparece hacia los 600 ms|La N400 es centroparietal y hacia los 400 ms|La N400 fue descrita por Kutas y Hillyard|La P600 es positiva, como indica la P. Las ondas se nombran por su polaridad y su latencia aproximada."
    ],
    seq: [],
    cls: [
      "Componentes ERP|N400: «Untó la tostada con calcetines»; palabra poco esperada|P600: reanálisis sintáctico; oraciones de vía muerta"
    ] },
  { t: "Comprensión del discurso",
    tip: "Van Dijk y Kintsch (1983) distinguen superficie, texto base y modelo de situación, y la superficie se olvida pronto. En el modelo de construcción-integración (Kintsch, 1988), cada frase activa proposiciones pertinentes o no, y la integración deja solo lo coherente. El modelo de indexación de eventos sigue tiempo, espacio, causalidad, intencionalidad y protagonistas, y las inferencias puente son necesarias, a diferencia de las elaborativas.",
    v: [
      "Texto base=Proposiciones del texto y su organización local y global",
      "Modelo de situación=Representación de lo que ocurre en el mundo descrito, integrada con el conocimiento",
      "Macroestructura=Organización global de las proposiciones de un texto (Kintsch y van Dijk, 1978)",
      "Inferencia puente=Inferencia necesaria para mantener la coherencia del texto",
      "Inferencia elaborativa=Inferencia no necesaria, como que un jarrón que cae se rompe",
      "Contrato dado-nuevo=Cada frase une lo ya conocido con información nueva (Haviland y Clark, 1974)",
      "Cohesión=Marcas presentes en el texto, como conectores, pronombres y repeticiones",
      "Saliencia graduada=Se accede primero al significado más destacado, sea literal o figurado"
    ],
    g: [
      "Poco después de leer una frase se detecta mal un cambio de activa a ___ (Sachs, 1967).|pasiva|negativa|interrogativa",
      "En el modelo de construcción-integración, la fase de ___ activa proposiciones de forma ascendente y poco controlada.|construcción|integración|selección",
      "Según el modelo de indexación de eventos, una discontinuidad como «una semana después» ___ la lectura.|alarga|acorta|facilita",
      "Para la hipótesis ___, solo son automáticas las inferencias necesarias para la coherencia local y las muy fáciles.|minimalista|construccionista|interactiva",
      "Que el sentido metafórico interfiera al juzgar si «algunos jefes son tiburones» es literal es un efecto de tipo ___.|Stroop|Ganong|McGurk"
    ],
    tf: [
      "La coherencia es una propiedad del texto, y la cohesión, una construcción de la mente del lector.|F|Es al revés: la cohesión está en el texto y la coherencia, en la mente del lector.",
      "Los enunciados con más conexiones causales se recuerdan mejor y se juzgan más importantes.|V",
      "Según Glucksberg (1982), el sentido metafórico solo se procesa cuando el literal no encaja.|F|Mostró que el sentido metafórico se procesa de forma automática, en contra del modelo pragmático estándar.",
      "Un texto abstracto se entiende y se recuerda mejor si su título se da antes (Bransford y Johnson, 1972).|V"
    ],
    q: [
      "Un lector tarda más en «Sacamos la comida de la nevera. La tortilla estaba fría» que si la primera frase dice «la tortilla». ¿Por qué?|Debe hacer una inferencia puente|Debe hacer una inferencia elaborativa|Debe reanalizar la sintaxis|Según el contrato dado-nuevo, hay que inferir que la comida era la tortilla para mantener la coherencia.",
      "¿Qué nivel de representación del discurso se olvida antes?|La superficie|El texto base|El modelo de situación|Las palabras exactas se olvidan pronto, mientras que los cambios de significado se detectan muy bien (Sachs, 1967).",
      "Una lectora reconoce como leída una frase nueva coherente con lo que se imaginó del relato. ¿Qué nivel lo explica?|El modelo de situación|La superficie del texto|La macroestructura|Bransford, Barclay y Franks (1972) hallaron falsos reconocimientos de frases coherentes con el modelo de situación.",
      "¿Qué elemento NO es una de las dimensiones del modelo de indexación de eventos?|La cohesión|La causalidad|La intencionalidad|Las cinco dimensiones son tiempo, espacio, causalidad, intencionalidad y protagonistas. La cohesión es una propiedad del texto."
    ],
    inc: [
      "Sobre la comprensión del lenguaje figurado|Siempre se calcula antes el sentido literal|Glucksberg halló interferencia con metáforas|Giora prioriza el sentido más saliente|Eso propone el modelo pragmático estándar, pero el sentido metafórico se procesa de forma automática (Glucksberg, 1982)."
    ],
    seq: [
      "Niveles de representación del discurso|Superficie>Texto base>Modelo de situación"
    ],
    cls: [] },
  { t: "Bases neurales de la comprensión y afasias",
    tip: "El modelo de Wernicke-Lichtheim-Geschwind está superado: el área de Broca interviene también en la sintaxis y la comprensión, y los modelos actuales hablan de una vía ventral bilateral y una dorsal izquierda (Hickok y Poeppel, 2007) dentro de una red frontotemporal. Las afasias se clasifican por fluencia, comprensión y repetición, y las transcorticales conservan la repetición. La afasia progresiva primaria tiene variantes no fluente, semántica y logopénica.",
    v: [
      "Fascículo arqueado=Haz que une las regiones temporales y frontales del modelo clásico",
      "Vía ventral=Ruta temporal y bilateral del sonido al significado",
      "Vía dorsal=Ruta temporoparietal-frontal izquierda del sonido a la articulación",
      "Afasia de conducción=Afasia fluente con buena comprensión y repetición muy alterada",
      "Transcortical sensorial=Afasia fluente con comprensión alterada, repetición conservada y ecolalia",
      "Transcortical mixta=No fluente, comprende mal y repite bien, por aislamiento del área del lenguaje",
      "Leborgne=Paciente de Broca que solo emitía «tan»",
      "Variante logopénica=Afasia progresiva temporoparietal con anomia y mala repetición de frases"
    ],
    g: [
      "Lichtheim (1885) añadió un centro ___ y predijo las afasias transcorticales.|conceptual|motor|auditivo",
      "En el modelo MUC (Hagoort, 2013), el giro frontal inferior es el espacio de ___.|unificación|memoria|repetición",
      "En la encuesta de Tremblay y Dick (2016), solo el ___ consideraba el modelo clásico la mejor teoría.|2 %|20 %|50 %",
      "Las lesiones del hemisferio ___ causan dificultades pragmáticas con la prosodia, el humor y las metáforas.|derecho|izquierdo|dominante",
      "La variante ___ de la afasia progresiva primaria se asocia a menudo a patología de Alzheimer.|logopénica|semántica|agramatical"
    ],
    tf: [
      "La afasia de conducción repite bien y comprende mal.|F|Es al revés: comprende bien y repite muy mal. Repetir bien y comprender mal es la transcortical sensorial.",
      "La anomia está presente en casi todas las afasias.|V",
      "La lesión de Leborgne se limitaba con exactitud al área que hoy lleva el nombre de Broca.|F|Era más extensa que el área de Broca, y la afasia de Broca persistente requiere lesiones amplias.",
      "Fedorenko et al. (2010) describieron una red del lenguaje distinta de la de demanda múltiple y de la de teoría de la mente.|V"
    ],
    q: [
      "Un paciente habla con fluidez, comprende bien, repite sin problema y solo tiene dificultad para encontrar palabras. ¿Qué afasia sugiere?|Anómica|Conducción|Transcortical motora|La anómica es fluente, con buena comprensión y repetición. La de conducción repite mal y la transcortical motora no es fluente.",
      "Una paciente no fluente apenas inicia el habla por sí misma, pero comprende bien y repite frases largas sin error. ¿Qué afasia sugiere?|Transcortical motora|Afasia de Broca|Transcortical mixta|Las transcorticales conservan la repetición. Con buena comprensión y poca iniciativa verbal, es la transcortical motora.",
      "Según Hickok y Poeppel (2007), ¿qué vía es bilateral?|La ventral, del sonido al significado|La dorsal, del sonido a la articulación|La que forma el fascículo arqueado|La vía ventral es temporal y bilateral. La dorsal, temporoparietal-frontal, está lateralizada a la izquierda.",
      "¿Qué variante de la afasia progresiva primaria cursa con pérdida del significado de las palabras?|Semántica|Logopénica|No fluente|La semántica se asocia al lóbulo temporal anterior, con anomia y pérdida del significado (Gorno-Tempini et al., 2011)."
    ],
    inc: [
      "Sobre la afasia de Wernicke|Conserva bien la repetición|Cursa con parafasias y neologismos|Suele acompañarse de anosognosia|En la de Wernicke la repetición está alterada. Las que conservan la repetición son las transcorticales y la anómica."
    ],
    seq: [],
    cls: [
      "Afasias según la repetición|Repetición conservada: transcortical motora; transcortical sensorial; transcortical mixta; anómica|Repetición alterada: Broca; Wernicke; conducción; global"
    ] }
] },
{ n: 12, t: "La producción del habla", cap: 4, pir: "alta", mods: [
  { t: "Etapas y modelos de la producción",
    tip: "La producción va de una intención comunicativa a la articulación. Levelt (1989) distingue conceptualizador, formulador y articulador, con un monitor alimentado por el sistema de comprensión, y separa el lema (semántica y sintaxis) del lexema (forma sonora). WEAVER++ es serial y discreto, y nombrar un dibujo lleva unos 600 ms según Indefrey y Levelt (2004).",
    v: [
      "Conceptualizador=Componente que decide qué decir y genera el mensaje preverbal",
      "Formulador=Componente que codifica gramatical y fonológicamente hasta el plan fonético",
      "Articulador=Componente que convierte el plan fonético en órdenes motoras",
      "Lexema=Forma fonológica de una palabra, con sus fonemas, sílabas y acento",
      "Macroplanificación=Seleccionar y ordenar la información que se va a comunicar",
      "Microplanificación=Dar una perspectiva a la información seleccionada",
      "Bucle interno=Revisión del plan por el monitor antes de pronunciarlo",
      "WEAVER++=Versión computacional serial y discreta del modelo de Levelt (1999)"
    ],
    g: [
      "El resultado del formulador es el ___.|plan fonético|mensaje preverbal|habla audible",
      "El formulador empieza con el primer fragmento antes de que acabe el conceptualizador, porque el proceso es ___.|incremental|interactivo|modular",
      "En la interferencia palabra-imagen, los distractores ___ interfieren sobre todo si se presentan pronto.|semánticos|fonológicos|ortográficos",
      "Según Indefrey y Levelt (2004), la selección del lema ocupa aproximadamente de 175 a ___ ms.|250|330|455",
      "La silabificación se estima en unos ___ ms por fonema.|25|75|125"
    ],
    tf: [
      "En WEAVER++, la forma de varios lemas candidatos se activa a la vez antes de elegir uno.|F|Es serial y discreto: solo después de seleccionar el lema se activa la forma del lema elegido.",
      "Un adulto produce, de forma aproximada, dos o tres palabras por segundo.|V",
      "Las duraciones de Indefrey y Levelt (2004) son medidas exactas de cada etapa.|F|Son estimaciones procedentes de un metaanálisis, no medidas exactas.",
      "El monitor revisa tanto el habla ya emitida como el plan antes de pronunciarlo.|V"
    ],
    q: [
      "Al nombrar el dibujo de un perro, «gato» estorba si aparece pronto y «perla» ayuda si aparece algo más tarde. ¿Qué apoya?|Primero el significado, luego la forma|Primero la forma, luego el significado|Significado y forma a la vez|Schriefers, Meyer y Levelt (1990) lo interpretaron como apoyo a un acceso serial: lema primero, lexema después.",
      "¿Qué componente del modelo de Levelt da una perspectiva al mensaje?|El conceptualizador|El formulador gramatical|El monitor interno|El conceptualizador hace la macroplanificación y la microplanificación y entrega el mensaje preverbal.",
      "Según Indefrey y Levelt (2004), ¿cuánto dura en total nombrar un dibujo?|Unos 600 ms|Unos 250 ms|Unos 1.200 ms|Unos 600 ms desde la preparación conceptual hasta el inicio articulatorio, por eso el oyente prepara su turno antes.",
      "¿Qué información contiene el lema de «mesa»?|Su categoría, género y significado|Sus fonemas, sus sílabas y su acento|Su forma sonora y su número de sílabas|El lema guarda la información semántica y sintáctica. Fonemas, sílabas y acento pertenecen al lexema."
    ],
    inc: [
      "Sobre el modelo de Levelt (1989)|El formulador decide qué información comunicar|El articulador produce el habla audible|El monitor recibe del sistema de comprensión|Decidir qué decir corresponde al conceptualizador. El formulador codifica gramatical y fonológicamente."
    ],
    seq: [
      "Curso temporal de nombrar un dibujo|Preparación conceptual>Selección del lema>Acceso al código fonológico>Silabificación>Codificación fonética e inicio articulatorio"
    ],
    cls: [] },
  { t: "Errores del habla y fenómeno de la punta de la lengua",
    tip: "Los lapsus son sistemáticos y revelan las unidades de planificación (Fromkin, 1971). Garrett (1975) situó los intercambios de palabras en el nivel funcional y los de sonidos en el posicional, mientras que Dell (1986) propuso una red interactiva con retroalimentación que explica el sesgo léxico y el error mixto. La punta de la lengua muestra que se puede recuperar el lema, incluso su género, sin la forma completa.",
    v: [
      "Anticipación=Un elemento del enunciado aparece antes de tiempo",
      "Perseveración=Un elemento ya dicho vuelve a aparecer después",
      "Malapropismo=Sustitución por una palabra de sonido parecido (Fay y Cutler, 1977)",
      "Fusión=Mezcla de dos palabras que competían, como «pelmado»",
      "Morfema varado=Afijo que se queda en su sitio cuando se intercambian las raíces",
      "Sesgo léxico=Tendencia de los errores de sonido a formar palabras reales más de lo esperable",
      "Error mixto=Error parecido al objetivo en significado y en sonido a la vez",
      "Técnica SLIP=Inducción de intercambios mediante pares de palabras (Baars et al., 1975)"
    ],
    g: [
      "Decir «pon la taza en la tesa» en lugar de «pon la taza en la mesa» es una ___.|perseveración|anticipación|fusión",
      "Los intercambios de palabras respetan la ___ gramatical.|categoría|posición|concordancia",
      "Según Garrett, los intercambios de palabras se producen en el nivel ___.|funcional|posicional|fonético",
      "Vigliocco et al. (1997) hallaron que hablantes de ___ en punta de la lengua conocían el género gramatical.|italiano|español|inglés",
      "Las palabras ___ apenas participan en los intercambios.|función|frecuentes|largas"
    ],
    tf: [
      "Freud (1901) interpretó los lapsus como deseos reprimidos, una lectura con sólido respaldo empírico.|F|Carece de respaldo: los errores siguen patrones lingüísticos que se explican sin motivos ocultos.",
      "Los intercambios de sonidos suelen darse entre palabras cercanas y respetan la posición en la sílaba.|V",
      "El modelo de Levelt incorpora retroalimentación del nivel fonológico al léxico.|F|Levelt es serial y discreto. La retroalimentación entre niveles es propia del modelo de Dell (1986).",
      "El estado de punta de la lengua es más frecuente con la edad y en las personas bilingües.|V"
    ],
    q: [
      "Alguien quiere decir «las cartas del cajón» y dice «los cajones de la carta». ¿Qué fenómeno muestran los artículos?|La acomodación|La perseveración|El sesgo léxico|Se intercambian las raíces, el plural queda varado y los artículos se adaptan al nuevo género: es la acomodación.",
      "¿Qué fenómeno se cita a favor de la retroalimentación del modelo de Dell (1986)?|El error mixto|El morfema varado|La acomodación|Los errores parecidos en significado y sonido, como «gato» → «pato», son más frecuentes de lo esperable sin interacción.",
      "¿Qué demostraron Baars, Motley y MacKay (1975) con la técnica SLIP?|El sesgo léxico|El error mixto|La acomodación|Los intercambios inducidos que daban palabras reales eran más frecuentes que los que daban pseudopalabras.",
      "¿Cómo explican los modelos seriales el sesgo léxico y el error mixto?|Por la acción del monitor|Por la retroalimentación|Por la inhibición lateral|Los atribuyen a un monitor que filtra los errores, sin necesidad de retroalimentación entre niveles."
    ],
    inc: [
      "Sobre la punta de la lengua|Indica que se ha recuperado la forma, pero no el lema|Se puede informar de la primera letra o las sílabas|La anomia de las afasias es su equivalente patológico|Es lo contrario: se recupera el lema y parte de la forma, pero no la palabra completa (Brown y McNeill, 1966)."
    ],
    seq: [],
    cls: [
      "Niveles de Garrett (1975)|Nivel funcional: intercambios de palabras; palabras de contenido; papeles|Nivel posicional: intercambios de sonidos; palabras función; orden"
    ] },
  { t: "Fluidez, monitorización y tartamudez",
    tip: "Las disfluencias normales aparecen sobre todo antes de palabras poco predecibles, y los rellenos pueden tener función comunicativa. El monitor detecta errores, y la autorreparación sigue la secuencia de interrupción, término de edición y reparación. La tartamudez es un trastorno del neurodesarrollo con componente genético que mejora al cantar o hablar al unísono, y la mayoría de los niños se recupera de forma natural.",
    v: [
      "Disfluencias normales=Pausas, rellenos, repeticiones y reformulaciones del habla espontánea",
      "Término de edición=Expresión como «eh, digo» que separa la interrupción de la reparación",
      "Retroalimentación auditiva demorada=Devolución de la propia voz con unos 200 ms de retraso",
      "Copia eferente=Duplicado de la orden motora que anticipa cómo debe sonar el resultado",
      "Tartamudez=Repeticiones, prolongaciones y bloqueos del habla, a menudo con conductas secundarias",
      "Taquifemia=Habla rápida e irregular, poco inteligible, con escasa conciencia del problema",
      "Programa Lidcombe=Tratamiento infantil en el que los padres aplican un control operante del habla",
      "Control inhibitorio=Supresión activa de la lengua no usada en bilingües (Green, 1998)"
    ],
    g: [
      "Goldman-Eisler (1968) observó que las pausas de vacilación aparecen sobre todo antes de palabras poco ___.|predecibles|frecuentes|largas",
      "Según Clark y Fox Tree (2002), «um» anuncia una demora más ___ que «uh».|larga|breve|forzada",
      "Con la retroalimentación auditiva demorada, los hablantes típicos se vuelven ___ (Lee, 1950).|disfluentes|inaudibles|más rápidos",
      "Kang et al. (2010) identificaron mutaciones en los genes GNPTAB, GNPTG y ___.|NAGPA|FOXP2|CNTNAP2",
      "La tartamudez mejora al hablar al unísono, al cantar o al seguir un ___.|metrónomo|guion|susurro"
    ],
    tf: [
      "La ansiedad es la causa principal de la tartamudez.|F|Es más una consecuencia que la causa. Es un trastorno del neurodesarrollo con un componente genético claro.",
      "Según Yairi y Ambrose (2013), entre el 88 % y el 91 % de los niños que tartamudean se recupera de forma natural.|V",
      "La taquifemia se distingue de la tartamudez porque quien la tiene es muy consciente del problema.|F|En la taquifemia la conciencia del problema suele ser escasa. Es un habla rápida, irregular y poco inteligible.",
      "Los hablantes se detienen muy poco después de detectar un error, a veces antes de terminar la palabra.|V"
    ],
    q: [
      "Un copiloto dice «Gira a la izquier…, eh, digo…, a la derecha». ¿Qué parte es «eh, digo»?|El término de edición|La interrupción del error|La reparación del plan|Levelt (1983) describió la autorreparación como interrupción, término de edición y reparación.",
      "Un niño de 3 años repite sílabas («ca-ca-casa») y presenta bloqueos desde hace meses. ¿Qué intervención cuenta con apoyo de ensayos controlados?|El programa Lidcombe|La retroalimentación demorada|El modelo de control inhibitorio|En el programa Lidcombe los padres aplican un control operante del habla, con apoyo de ensayos controlados aleatorizados.",
      "¿Qué prevalencia aproximada tiene la tartamudez en adultos?|≈0,7 %|5–8 %|88–91 %|En adultos afecta a menos del 1 %. El 5–8 % es la incidencia acumulada en la infancia (Yairi y Ambrose, 2013).",
      "Según los modelos actuales de control del habla, ¿qué ocurre si lo que se oye no encaja con la predicción?|Se corrige la articulación|Se activa el bucle externo|Se inhibe la otra lengua|La copia eferente anticipa el resultado y, ante un desajuste auditivo o táctil, el sistema corrige sobre la marcha."
    ],
    inc: [
      "Sobre la tartamudez|Suele empezar después de los 8 años|Se asocia a diferencias en los ganglios basales|Mejora de forma llamativa al cantar|Suele empezar antes de los 4 años: ≈95 % de los casos, con un inicio medio hacia los 33 meses."
    ],
    seq: [
      "Autorreparación según Levelt (1983)|Interrupción>Término de edición>Reparación"
    ],
    cls: [] },
  { t: "Bases neurales de la producción",
    tip: "La producción depende de una red distribuida, sobre todo izquierda, en la que la vía dorsal conecta sonido y articulación. El área de Broca no es «el área de la producción», y Penfield ya bloqueó el habla estimulando zonas muy diversas. Conviene distinguir la afasia (código), la apraxia del habla (planificación motora, errores inconsistentes) y la disartria (ejecución neuromuscular, errores consistentes).",
    v: [
      "Área motora suplementaria=Región del inicio del habla cuya lesión puede causar mutismo acinético",
      "Ínsula anterior=Región de la planificación articulatoria, con un papel discutido",
      "Apraxia del habla=Trastorno de la planificación motora con errores inconsistentes y tanteo",
      "Disartria=Alteración neuromuscular con errores consistentes que afecta también a voz y prosodia",
      "Disartria hipocinética=Tipo típico del Parkinson, con voz monótona y débil",
      "Disartria atáxica=Tipo asociado a lesiones del cerebelo",
      "Ganglios basales y cerebelo=Estructuras de la temporización y coordinación del movimiento",
      "Penfield=Neurocirujano que bloqueó el habla estimulando puntos de zonas muy diversas"
    ],
    g: [
      "Las disartrias se clasifican según la propuesta de la Clínica ___ (Darley, Aronson y Brown, 1969).|Mayo|Boston|Cleveland",
      "La disartria ___ se debe a una lesión de la motoneurona inferior.|flácida|espástica|atáxica",
      "Dronkers (1996) relacionó la apraxia del habla con lesiones de la ___ anterior.|ínsula|amígdala|corteza cingulada",
      "El giro frontal inferior izquierdo, con las áreas 44 y 45, interviene en la codificación sintáctica y ___.|fonológica|motora|auditiva",
      "En la producción, el giro temporal superior posterior participa en el código fonológico y en la ___ del habla.|autorrevisión|ejecución|iniciación"
    ],
    tf: [
      "En la disartria, la persona sabe qué palabra quiere decir y puede escribirla sin problemas.|V",
      "La apraxia del habla produce errores de sonido consistentes en cada intento.|F|Los errores son inconsistentes, con tanteo articulatorio. Los errores consistentes son propios de la disartria.",
      "La afasia altera el código lingüístico, también por escrito.|V",
      "La disartria espástica se debe a lesiones del cerebelo.|F|La espástica es de motoneurona superior. La asociada al cerebelo es la atáxica."
    ],
    q: [
      "Tras un ictus, un paciente intenta decir «tomate» y produce «pomate», luego «tonate» y por fin «tomate», tanteando con la boca. ¿Qué sugiere?|Apraxia del habla|Disartria flácida|Afasia anómica|La inconsistencia de los errores y el tanteo articulatorio caracterizan la apraxia. En la disartria los errores son consistentes.",
      "Un paciente con Parkinson habla con voz monótona y débil. ¿Qué tipo de disartria es más probable?|Hipocinética|Hipercinética|Atáxica|La hipocinética es la típica del Parkinson. La hipercinética implica movimientos involuntarios, y la atáxica, el cerebelo.",
      "¿Qué región, al lesionarse, puede causar mutismo acinético?|El área motora suplementaria|La corteza premotora ventral|El giro temporal superior|El área motora suplementaria y la pre-AMS intervienen en el inicio del habla.",
      "Según el modelo de Hickok y Poeppel (2007), ¿qué vía conecta sonido y articulación?|La vía dorsal izquierda|La vía ventral bilateral|La vía ventral izquierda|La vía dorsal une regiones temporoparietales con el lóbulo frontal y está lateralizada a la izquierda."
    ],
    inc: [
      "Sobre las bases neurales de la producción|Los ganglios basales codifican la sintaxis|La red de la producción es sobre todo izquierda|La ínsula anterior se relaciona con la planificación|Ganglios basales y cerebelo temporizan y coordinan el movimiento. La codificación sintáctica corresponde al giro frontal inferior izquierdo."
    ],
    seq: [],
    cls: [
      "Tres niveles de alteración|Afasia: selección de palabras; gramática; comprensión|Apraxia del habla: errores inconsistentes; tanteo articulatorio; más dificultad con palabras largas|Disartria: errores consistentes; voz débil; afectación de la prosodia"
    ] }
] }
);

// SAIMAP Psicología · Lenguaje · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "La conversación", cap: 4, pir: "alta", mods: [
  { t: "Turnos y estructura de la conversación",
    tip: "Sacks, Schegloff y Jefferson (1974) mostraron que los turnos se gestionan localmente: al final de cada unidad hay un lugar pertinente para la transición con reglas ordenadas. Los pares adyacentes siguen una organización de preferencias. Como el hueco más frecuente entre turnos es de 0 a 200 ms y planificar una palabra lleva unos 600 ms, el oyente predice el final del turno ajeno (Levinson y Torreira, 2015).",
    v: [
      "Análisis de la conversación=Estudio de grabaciones de charlas reales transcritas con detalle",
      "Lugar pertinente para la transición=Punto de un turno en que puede producirse el cambio de hablante",
      "Par adyacente=Dos intervenciones en que la primera exige un tipo concreto de segunda",
      "Organización de preferencias=Respuestas aceptadas rápidas y directas, rechazos demorados y justificados",
      "Canal secundario=Señales como «mhm» o «claro» que muestran atención sin pedir el turno",
      "Alineamiento interactivo=Convergencia automática en léxico, sintaxis y modelo de situación",
      "Pacto conceptual=Expresión para un referente que se negocia y se acorta con el uso",
      "Marcador del discurso=Palabra como «bueno» o «pues» que abre, cierra o reorienta temas"
    ],
    g: [
      "Según Sacks, Schegloff y Jefferson (1974), los turnos se gestionan ___, turno a turno.|localmente|por adelantado|por el moderador",
      "Stivers et al. (2009) hallaron que el intervalo más frecuente entre turnos estaba entre 0 y ___ ms.|200|600|470",
      "La media más baja entre turnos en el estudio de Stivers et al. correspondía al ___, con unos 7 ms.|japonés|danés|inglés",
      "Rechazar una invitación es una respuesta ___, que suele retrasarse y justificarse.|no preferida|preferida|adyacente",
      "Clark y Wilkes-Gibbs (1986) estudiaron los pactos conceptuales con figuras de ___.|tangram|laberinto|ajedrez"
    ],
    tf: [
      "Si nadie se autoselecciona en un lugar pertinente para la transición, el hablante actual puede continuar.|V",
      "El oyente espera a que termine el turno ajeno para empezar a planificar su respuesta.|F|Planificar una palabra lleva unos 600 ms, más que el hueco habitual: el oyente predice el final y prepara la respuesta.",
      "En el corpus telefónico analizado por Levinson y Torreira, el habla simultánea ocupaba alrededor del 3,8 % del tiempo.|V",
      "Las señales de canal secundario, como «mhm», sirven para reclamar el turno.|F|Indican que se sigue la conversación sin reclamar el turno (Yngve, 1970)."
    ],
    q: [
      "Marta invita a Luis a cenar el sábado y él se queda callado unos segundos. ¿Cómo suele interpretarse ese silencio?|Como un probable rechazo|Como una aceptación tácita|Como un turno sin transición|Las respuestas no preferidas se retrasan, así que un silencio tras una invitación ya se interpreta como un probable «no».",
      "En un lugar pertinente para la transición, ¿qué regla se aplica en primer lugar?|Habla quien elige el hablante|Habla quien empieza primero|Sigue el hablante que tenía el turno|Las reglas son ordenadas: primero la selección por el hablante actual, luego la autoselección y, por último, la continuación.",
      "¿Qué concluyen Levinson y Torreira (2015) de la rapidez de los turnos?|Comprensión y producción se solapan|La respuesta se planifica al acabar|Los turnos se asignan por adelantado|Como planificar lleva más que el hueco entre turnos, el oyente predice el final y prepara su respuesta mientras escucha.",
      "Dos participantes que resuelven juntos un laberinto acaban describiendo las posiciones de la misma forma. ¿Qué fenómeno ilustran?|Alineamiento interactivo|Organización de preferencias|Señales de canal secundario|Lo observaron Garrod y Anderson (1987), y Pickering y Garrod (2004) lo explican por alineamiento automático."
    ],
    inc: [
      "Sobre la estructura de la conversación|Las respuestas preferidas llegan demoradas y justificadas|La primera parte de un par adyacente crea una expectativa|Casi siempre habla una sola persona a la vez|Es al revés: las preferidas son rápidas y directas, y las no preferidas se retrasan, se suavizan y se justifican."
    ],
    seq: [
      "Reglas en un lugar pertinente para la transición|El hablante actual selecciona al siguiente>Otro participante se autoselecciona>El hablante actual continúa"
    ],
    cls: [] },
  { t: "Cortesía e imagen",
    tip: "Goffman (1967) llamó imagen al valor social que cada persona reclama en una interacción. Brown y Levinson (1987) distinguen la imagen positiva, el deseo de ser apreciado, y la negativa, el deseo de no ser impuesto. El peso de un acto que amenaza la imagen depende de la distancia social, el poder del oyente y el grado de imposición, y cuanto mayor es, más indirecta es la estrategia.",
    v: [
      "Imagen=Valor social que cada persona reclama para sí en una interacción (Goffman, 1967)",
      "Imagen positiva=Deseo de ser apreciado y aprobado por los demás",
      "Imagen negativa=Deseo de no ser impuesto y de conservar la libertad de acción",
      "Acto que amenaza la imagen=Acto de habla que pone en riesgo la cara social de algún interlocutor",
      "Peso del acto=Resultado de distancia social, poder del oyente y grado de imposición",
      "Cortesía positiva=Estrategia que subraya la cercanía y el aprecio hacia el oyente",
      "Cortesía negativa=Estrategia que reconoce la imposición y deja opciones al oyente",
      "Estrategia encubierta=Insinuar sin pedir, de modo que se pueda negar haberlo pedido"
    ],
    g: [
      "Pedir un favor amenaza sobre todo la imagen ___ del oyente.|negativa|positiva|social",
      "Criticar a alguien amenaza su imagen ___.|positiva|negativa|pública",
      "Disculparse amenaza la imagen positiva del propio ___.|hablante|oyente|grupo",
      "Lakoff (1973) resumió la cortesía en no imponer, dar opciones y hacer que el otro se sienta ___.|bien|libre|escuchado",
      "La estrategia encubierta conecta con las ___ de Grice.|implicaturas|máximas de tacto|presuposiciones"
    ],
    tf: [
      "Cuanto mayor es el peso de un acto que amenaza la imagen, más directa tiende a ser la estrategia.|F|Es al revés: a mayor peso, más indirecta es la estrategia, hasta no realizar el acto.",
      "Las máximas de tacto, generosidad y modestia forman parte del principio de cortesía de Leech (1983).|V",
      "La imagen negativa es el deseo de ser apreciado y aprobado por los demás.|F|Esa es la imagen positiva. La negativa es el deseo de no ser impuesto y de conservar la libertad de acción.",
      "Se ha descrito que en España pesa más la cortesía positiva que en el inglés británico, aunque con mucha variación.|V"
    ],
    q: [
      "Para que le cubran un turno, Ana comenta: «Uf, el sábado tengo una boda y me toca trabajar…». ¿Qué estrategia usa?|Encubierta|Cortesía negativa|Cortesía positiva|Insinúa sin pedir: deja que el otro infiera la petición y puede negar haber pedido nada.",
      "«Tú que eres un sol, ¿me cubres el sábado?» es un ejemplo de…|cortesía positiva|cortesía negativa|estrategia encubierta|Subraya la cercanía y el aprecio, lo que atiende a la imagen positiva del oyente.",
      "¿Qué tres factores determinan el peso de un acto que amenaza la imagen?|Distancia, poder e imposición|Distancia, edad e intención|Poder, cercanía y franqueza|Según Brown y Levinson, dependen de la distancia social, el poder relativo del oyente y el grado de imposición.",
      "¿Qué se debate sobre la teoría de Brown y Levinson?|Su alcance universal|Su base en Goffman|Su fecha de 1987|Se discute hasta qué punto es universal, porque las nociones de imagen e imposición varían entre culturas."
    ],
    inc: [
      "Sobre la cortesía de Brown y Levinson|La imagen positiva es el deseo de no ser impuesto|Pedir un favor amenaza la imagen negativa del oyente|Renunciar al acto es la opción ante el mayor peso|La imagen positiva es el deseo de ser apreciado. El deseo de no ser impuesto es la imagen negativa."
    ],
    seq: [
      "Estrategias de cortesía de menor a mayor peso del acto|Abierta sin compensación>Cortesía positiva>Cortesía negativa>Encubierta>No realizar el acto"
    ],
    cls: [
      "Estrategia de cortesía|Cortesía positiva: subrayar la cercanía; «Tú que eres un sol»|Cortesía negativa: reconocer la imposición; dejar opciones; «Siento molestarte»|Encubierta: insinuar sin pedir; implicatura de Grice; poder negar la petición"
    ] },
  { t: "Mecanismos de reparación",
    tip: "Schegloff, Jefferson y Sacks (1977) cruzaron quién inicia la reparación y quién la realiza, lo que da cuatro tipos. Hay una clara preferencia por la autorreparación, y corregir al otro es lo menos preferido porque amenaza su imagen. Dingemanse et al. (2015) hallaron en 12 lenguas una reparación heteroiniciada cada 1,4 minutos y la preferencia por el iniciador más específico posible.",
    v: [
      "Reparación=Procedimientos para resolver problemas de la conversación sin romperla",
      "Autorreparación=Solución del problema por quien lo produjo, a menudo en el mismo turno",
      "Heterorreparación=Solución del problema por el interlocutor de quien lo produjo",
      "Reparación heteroiniciada=El oyente señala el problema, aunque pueda resolverlo el hablante",
      "Iniciador abierto=Señal como «¿eh?» que indica un problema sin decir dónde está",
      "Iniciador restringido=Señal que localiza el problema, como «¿quién?» o una repetición parcial",
      "Dingemanse et al. (2013)=Hallaron forma y función muy parecidas de «¿eh?» en 10 lenguas",
      "Principio de especificidad=Preferencia por la señal de reparación que mejor localiza el problema"
    ],
    g: [
      "«Quedamos el martes, digo, el miércoles» es una reparación autoiniciada y ___.|autorreparación|heterorreparación|reparación abierta",
      "Corregir directamente al otro suele suavizarse con fórmulas como «___».|querrás decir|te equivocas|eso es falso",
      "Dingemanse et al. (2015) hallaron una reparación iniciada por el otro aproximadamente cada ___ minutos.|1,4|4,1|14",
      "Los niños piden aclaraciones desde los ___ años, aproximadamente.|dos|cuatro|seis",
      "La autorreparación conversacional enlaza con la ___ del modelo de Levelt.|monitorización|conceptualización|articulación"
    ],
    tf: [
      "La forma de reparación preferida es que el oyente corrija directamente el error del hablante.|F|Se prefiere la autorreparación. Corregir directamente al otro es lo menos preferido porque amenaza su imagen.",
      "«¿El martes?», con entonación de pregunta, es un iniciador restringido.|V",
      "Dingemanse et al. (2015) hallaron que la preferencia por el iniciador más específico se cumplía en todas las lenguas estudiadas.|V",
      "Ante una persona con afasia, un «¿eh?» abierto es más útil que ofrecer una interpretación concreta.|F|Es al revés: proponer «¿el peine?» le evita repetir lo que no consigue decir. Es el principio de especificidad."
    ],
    q: [
      "«Lo dirigía… ¿cómo se llamaba?» «Almodóvar». ¿Qué tipo de reparación es?|Autoiniciada y heterorreparación|Heteroiniciada y autorreparación|Autoiniciada y autorreparación|El propio hablante señala el problema y lo resuelve el interlocutor al darle el nombre.",
      "«Llego a las cinco» «¿A qué hora?» «A las cinco». ¿Qué tipo de reparación ilustra?|Heteroiniciada y autorreparación|Autoiniciada y heterorreparación|Heteroiniciada y heterorreparación|El oyente inicia la reparación con su pregunta y el propio hablante la resuelve repitiendo el dato.",
      "Un paciente con afasia dice «el… lo de… para el pelo». ¿Qué respuesta del terapeuta sigue mejor el principio de especificidad?|Preguntar «¿el peine?»|Preguntar «¿eh?, ¿cómo?»|Pedirle que lo repita todo|Ofrecer una interpretación concreta localiza el problema y le ahorra repetir lo que ya no consigue decir.",
      "¿Por qué «¿quién?» es más eficaz que «¿eh?» como iniciador?|Porque localiza el dato que falta|Porque amenaza menos la imagen|Porque es una palabra universal|El hablante solo tiene que repetir el dato que faltaba. El casi universal es «¿eh?», no «¿quién?»."
    ],
    inc: [
      "Sobre la reparación conversacional|La heterorreparación es la forma más frecuente|«¿Eh?» tiene forma y función parecidas en muchas lenguas|En la afasia, el interlocutor asume más trabajo de reparación|La mayoría de los problemas los detecta y los resuelve quien los produjo: se prefiere la autorreparación."
    ],
    seq: [],
    cls: [
      "Iniciador de reparación|Abierto: «¿eh?»; «¿qué?»; «¿cómo?»|Restringido: «¿quién?»; «¿el martes?»; repetición parcial con entonación de pregunta"
    ] },
  { t: "El lenguaje en la interacción social",
    tip: "La variación lingüística sigue la estratificación social y el estilo (Labov, 1966). Frente a los códigos de Bernstein, Labov defendió que las variedades no estándar son sistemas completos: diferencia, no déficit. Las elecciones de lengua siguen la acomodación comunicativa, las variedades despiertan actitudes que mide la técnica de pares ocultos y la forma de presentar la información cambia decisiones y recuerdos.",
    v: [
      "Código restringido=Habla dependiente del contexto atribuida por Bernstein a la clase obrera",
      "Código elaborado=Habla más explícita que Bernstein atribuyó a la clase media",
      "Diferencia, no déficit=Postura de Labov: las variedades no estándar tienen gramática completa",
      "Diglosia=Reparto de funciones entre una variedad alta y otra baja (Ferguson, 1959)",
      "Convergencia=Acercar el habla a la del interlocutor para buscar su aprobación",
      "Divergencia=Alejar el habla de la del interlocutor para marcar distancia",
      "Pares ocultos=Técnica de Lambert: un bilingüe graba el mismo texto en dos lenguas",
      "Encuadre=Forma de presentar una información que cambia las decisiones"
    ],
    g: [
      "Labov (1966) estudió la /r/ tras vocal en dependientes de grandes ___ de Nueva York.|almacenes|hoteles|mercados",
      "En la técnica de pares ocultos, lo que se evalúa es la ___, no a la persona.|variedad|voz|intención",
      "Con el verbo «estrellarse», las estimaciones de ___ eran mayores en el estudio de Loftus y Palmer.|velocidad|distancia|duración",
      "La acomodación comunicativa la describieron ___ y su grupo.|Giles|Labov|Ferguson",
      "Lakoff (1975) describió un supuesto «lenguaje de mujeres» con más atenuaciones y preguntas ___.|confirmativas|abiertas|retóricas"
    ],
    tf: [
      "Mehl et al. (2007) hallaron que las mujeres dicen unas 20.000 palabras diarias y los hombres unas 7.000.|F|Estimaron 16.215 palabras en mujeres y 15.669 en hombres, sin diferencia significativa. La otra cifra no tiene datos.",
      "En el estudio de Labov (1966), la /r/ era más frecuente en el habla cuidada, al pedir que se repitiera la respuesta.|V",
      "Bernstein (1971) defendió que las variedades no estándar son sistemas completos que permiten argumentar con lógica.|F|Eso lo defendió Labov (1969) frente a Bernstein, que atribuía un código restringido a la clase obrera.",
      "Labov y Fanshel (1977) aplicaron el análisis del discurso a entrevistas de psicoterapia.|V"
    ],
    q: [
      "Una vecina mantiene el gallego al hablar con un funcionario que le responde en castellano. ¿Qué proceso de acomodación muestra?|Divergencia|Convergencia|Diglosia|Mantener la propia lengua ante quien habla otra marca distancia, lo que la acomodación comunicativa llama divergencia.",
      "¿Qué hallaron Tversky y Kahneman (1981) al presentar un dilema sanitario como vidas salvadas o perdidas?|Las preferencias se invertían|Las preferencias no cambiaban|Solo cambiaba la confianza|El mismo dilema, presentado en términos de vidas salvadas o perdidas, invertía las preferencias: es el efecto del encuadre.",
      "En el estudio de Loftus y Palmer (1974), ¿qué ocurrió una semana después con el verbo más intenso?|Más personas recordaban cristales rotos|Todos olvidaban la velocidad estimada|Desaparecía el efecto del verbo inicial|Con «estrellarse», más personas «recordaban» cristales rotos que no aparecían en la grabación.",
      "¿Qué concluye la investigación posterior a Lakoff (1975) sobre el lenguaje y el género?|Las diferencias son pequeñas y contextuales|Las mujeres usan siempre más atenuaciones|Las diferencias son amplias y estables|Las diferencias son pequeñas y dependen mucho del contexto, el tema y la relación de poder."
    ],
    inc: [
      "Sobre el lenguaje en la interacción social|Ferguson llamó diglosia a mezclar lenguas en una frase|Las variedades no estándar tienen una gramática completa|Tendemos a converger cuando buscamos aprobación|La diglosia es el reparto de funciones entre una variedad alta, formal, y otra baja, cotidiana."
    ],
    seq: [],
    cls: [
      "Acomodación comunicativa|Convergencia: buscar la aprobación del otro; pasarse al castellano con un recién llegado|Divergencia: marcar distancia; mantener el gallego ante un funcionario que habla castellano"
    ] }
] },
{ n: 14, t: "Lenguaje y pensamiento", cap: 5, pir: "alta", mods: [
  { t: "Perspectivas clásicas",
    tip: "Para Watson (1913) pensar era habla subvocal, pero Smith siguió pensando con la musculatura paralizada por curare (Smith et al., 1947). Piaget sostiene que el pensamiento precede al lenguaje y que el habla egocéntrica desaparece. Vygotsky describe dos raíces que convergen hacia los dos años y un habla privada que se interioriza, sin defender un determinismo. Fodor propone el mentalés, y la afasia y la neuroimagen muestran que se puede razonar sin la red del lenguaje.",
    v: [
      "Habla subvocal=Para Watson, el pensamiento reducido a mínimos movimientos de laringe y lengua",
      "Función simbólica=Capacidad de representar algo ausente, previa a las palabras según Piaget",
      "Habla egocéntrica=Para Piaget, comentario en voz alta sin función comunicativa que desaparece",
      "Habla privada=Habla dirigida a uno mismo que guía la acción y se vuelve habla interna",
      "Fase preintelectual=Etapa en que las vocalizaciones aún no expresan ideas (Vygotsky)",
      "Mentalés=Código mental propio del pensamiento, distinto de cualquier lengua natural",
      "Modularidad=Para Fodor (1983), sistema especializado, rápido y relativamente encapsulado",
      "Sombra verbal=Repetir un texto en voz alta como interferencia durante una tarea"
    ],
    g: [
      "Smith, uno de los autores, recibió ___, que paraliza la musculatura voluntaria, y siguió pensando.|curare|atropina|morfina",
      "Según Vygotsky, el pensamiento y el habla se encuentran hacia los ___ años.|dos|cuatro|siete",
      "Berk (1992) observó que el habla privada aumenta con la ___ de la tarea.|dificultad|duración|novedad",
      "Fedorenko, Piantadosi y Gibson (2024) concluyen que el lenguaje es sobre todo una herramienta de ___.|comunicación|razonamiento|cálculo",
      "Varley et al. (2005) comprobaron que personas con afasia grave seguían resolviendo ___.|cálculos|oraciones|anagramas"
    ],
    tf: [
      "Vygotsky defendía que el lenguaje determina el pensamiento.|F|Vygotsky no defendía un determinismo, sino una interacción entre pensamiento y lenguaje desde que convergen.",
      "En el estudio de Hermer-Vazquez et al. (1999), la sombra verbal impedía combinar la forma de la sala con el color de una pared.|V",
      "Para Piaget, el habla egocéntrica ayuda a planificar y se interioriza como habla interna.|F|Esa es la idea de Vygotsky. Para Piaget no tiene función comunicativa y desaparece al superar el egocentrismo.",
      "Fedorenko et al. (2024) reconocen que el lenguaje puede ser decisivo para desarrollar ciertas capacidades, como la teoría de la mente.|V"
    ],
    q: [
      "Al montar un mueble difícil, Pedro se dice en voz alta «primero el tornillo de la izquierda». ¿Cómo lo interpretaría Vygotsky?|Como habla privada que planifica|Como un residuo del egocentrismo|Como pensamiento en mentalés|Para Vygotsky, el habla privada ayuda a planificar y aumenta con la dificultad de la tarea (Berk, 1992).",
      "¿Qué posición debilitó sobre todo el experimento con curare de Smith et al. (1947)?|La de Watson|La de Piaget|La de Fodor|Si pensar fuera habla subvocal, paralizar la musculatura suprimiría el pensamiento, y Smith siguió pensando.",
      "¿Qué propone la posición del lenguaje como herramienta cognitiva (Clark, Spelke)?|Que sirve para combinar representaciones|Que es imprescindible para pensar|Que solo refleja el desarrollo cognitivo previo|No es imprescindible para pensar, pero ayuda a combinar representaciones de sistemas distintos.",
      "¿Qué muestra la revisión de Fedorenko et al. (2024) sobre la red frontotemporal izquierda del lenguaje?|Apenas se activa al hacer cálculos|Se activa en toda tarea de lógica|Sostiene la teoría de la mente adulta|Apenas se activa en matemáticas, lógica, programación o teoría de la mente, y en la afasia global se puede razonar."
    ],
    inc: [
      "Sobre las perspectivas clásicas|Fodor sostuvo que pensamos en nuestra lengua materna|Para Piaget, las palabras expresan lo ya construido|Vygotsky describió una fase prelingüística del pensamiento|Fodor propuso el mentalés, un código mental propio que no es ninguna lengua natural."
    ],
    seq: [],
    cls: [
      "Habla egocéntrica|Piaget: efecto del egocentrismo; sin función comunicativa; desaparece|Vygotsky: habla privada; ayuda a planificar; se interioriza como habla interna"
    ] },
  { t: "La hipótesis de Sapir-Whorf",
    tip: "Sapir y Whorf propusieron que la lengua guía el pensamiento. La versión fuerte, el determinismo, está descartada, y la débil, el relativismo, tiene un apoyo parcial y discutido, sobre todo cuando la lengua se usa durante la tarea. Berlin y Kay (1969) apoyan universales del color. Los efectos sobre número y espacio son más sólidos, mientras que los azules rusos, el tiempo vertical en mandarín y el género gramatical resisten mal las réplicas.",
    v: [
      "Determinismo lingüístico=Versión fuerte: la lengua fija las categorías y sin palabra no hay concepto",
      "Relativismo lingüístico=Versión débil: la lengua influye en algunos procesos y tareas",
      "Pensar para hablar=Propuesta de Slobin: al hablar se atiende a lo que la lengua obliga a codificar",
      "Términos básicos de color=Hasta 11 términos que aparecen en un orden bastante fijo",
      "Malotki (1983)=Mostró que el hopi tiene un repertorio temporal rico",
      "Whorf lateralizado=Efecto categorial del color mayor en el campo visual derecho",
      "Marco absoluto=Orientación por puntos cardinales, como «al norte del plato»",
      "Pirahã=Lengua amazónica sin palabras para cantidades exactas"
    ],
    g: [
      "Berlin y Kay (1969) compararon ___ lenguas en su estudio sobre los términos de color.|20|110|11",
      "Heider (1972) halló que los ___, con solo dos términos de color, recordaban mejor los colores focales.|dani|berinmo|pirahã",
      "El español pone la trayectoria en el verbo, y el inglés, la ___.|manera|dirección|causa",
      "Los mundurukú conservan la estimación aproximada, pero no la aritmética ___.|exacta|mental|escrita",
      "Li y Gleitman (2002) objetaron que el ___ de la prueba podía explicar parte de los efectos espaciales.|entorno|idioma|orden"
    ],
    tf: [
      "Los datos de Berlin y Kay (1969) sobre los términos de color apoyan el relativismo lingüístico.|F|Apoyan universales: los términos básicos aparecen en un orden bastante fijo entre lenguas.",
      "En Winawer et al. (2007), la ventaja de los rusohablantes con los azules desaparecía con interferencia verbal, pero no con espacial.|V",
      "La idea de Boroditsky (2001) de que los hablantes de mandarín piensan el tiempo en vertical se ha replicado de forma sólida.|F|Tres réplicas fallaron, y Chen et al. (2011) atribuyen lo que queda a la dirección de la escritura.",
      "Los berinmo de Papúa mostraban efectos categoriales según sus propias fronteras de color.|V"
    ],
    q: [
      "Un estudiante usa los «cien términos esquimales para la nieve» como prueba de Whorf. ¿Qué objeción es correcta?|La cifra se infló sin datos|Solo demuestra la versión débil|Apoya el universalismo del color|Boas citó cuatro raíces y Whorf amplió la cifra sin datos. Además, un vocabulario especializado refleja interés práctico, no otra percepción.",
      "¿Qué concluyeron Martinovic, Paramei y MacInnes (2020) sobre el efecto de los azules rusos?|No lo replicaron|Lo ampliaron al griego|Lo hallaron solo en niños|En dos experimentos no replicaron la ventaja descrita por Winawer et al. (2007).",
      "Hablantes de tzeltal, tras girar sobre sí mismos, colocan unos objetos conservando su orientación cardinal. ¿Qué ilustra?|El uso de un marco absoluto|El uso de un marco relativo|El efecto del género gramatical|Lenguas como el tzeltal usan un marco absoluto, y sus hablantes tienden a conservarlo en tareas no verbales.",
      "¿Qué estado actual tiene la versión fuerte de la hipótesis de Sapir-Whorf?|Descartada|Apoyo parcial y discutido|Confirmada en el color|El determinismo está descartado. El apoyo parcial y discutido corresponde a la versión débil, el relativismo."
    ],
    inc: [
      "Sobre la hipótesis de Sapir-Whorf|Whorf demostró que el hopi carece de formas temporales|Gilbert et al. (2006) describieron un «Whorf lateralizado»|Regier y Kay (2009) concluyeron que Whorf tiene razón a medias|Whorf lo sostuvo, pero Malotki (1983) mostró que el hopi tiene un repertorio temporal rico."
    ],
    seq: [
      "Orden de aparición de los términos básicos de color (Berlin y Kay)|Blanco y negro>Rojo>Verde y amarillo>Azul>Marrón"
    ],
    cls: [
      "Estado de la evidencia|Apoyo universalista: Berlin y Kay (1969); colores focales en los dani|Réplicas fallidas: azules rusos; tiempo vertical en mandarín; género gramatical"
    ] },
  { t: "Lenguaje y categorías",
    tip: "La visión clásica definía las categorías por rasgos necesarios y suficientes, pero Wittgenstein habló de parecido de familia y Labov (1973) mostró fronteras difusas entre «taza» y «cuenco». Rosch propuso prototipos con tipicidad graduada y un nivel básico privilegiado que cambia con la pericia. Lakoff y Johnson describieron metáforas conceptuales sistemáticas, y en la infancia las etiquetas compartidas invitan a categorizar.",
    v: [
      "Visión clásica=Significado como lista de rasgos necesarios y suficientes",
      "Parecido de familia=Lo único que comparten, según Wittgenstein, los miembros de muchas categorías",
      "Prototipo=Mejor ejemplo de una categoría, en torno al que se organiza (Rosch)",
      "Tipicidad graduada=Unos miembros representan mejor la categoría, como el petirrojo entre los pájaros",
      "Modelos de ejemplares=Sustituyen el prototipo por los casos recordados (Medin y Schaffer)",
      "Nivel básico=Nivel intermedio que se aprende antes, se nombra antes y maximiza la información",
      "Metáfora conceptual=Proyección sistemática de un dominio concreto sobre otro abstracto",
      "Balan=Clase nominal del dyirbal que incluye mujeres, fuego y cosas peligrosas"
    ],
    g: [
      "Un petirrojo se verifica ___ como pájaro que un pingüino.|antes|después|peor",
      "En la jerarquía «mueble, silla, silla de cocina», el nivel básico es «___».|silla|mueble|silla de cocina",
      "Para un jardinero, «rosal trepador» puede funcionar como nivel básico por efecto de la ___.|pericia|tipicidad|frecuencia",
      "«Gastar el tiempo» pertenece a la metáfora conceptual «el tiempo es ___».|dinero|espacio|movimiento",
      "Waxman y Markow (1995) observaron que etiquetar varios objetos con el mismo ___ aumentaba la atención a lo común.|sustantivo|adjetivo|verbo"
    ],
    tf: [
      "El nivel básico es el más abstracto de la jerarquía.|F|No es el más abstracto, sino el que mejor equilibra información y distinción.",
      "En el estudio de Labov (1973), la frontera entre «taza» y «cuenco» se desplazaba según el uso imaginado.|V",
      "Lakoff y Johnson demostraron que las metáforas conceptuales guían también el razonamiento no verbal.|F|Si guían el razonamiento no verbal es una cuestión abierta, ligada al debate de la semántica corporeizada.",
      "Según Xu (2002), las etiquetas distintas ayudan a individuar objetos.|V"
    ],
    q: [
      "Al pedir ejemplos de pájaros, casi todos dicen «gorrión» o «petirrojo» antes que «pingüino». ¿Qué fenómeno muestra?|La tipicidad graduada|El nivel básico|El parecido de familia|Los miembros más típicos se verifican y se mencionan antes: la categoría se organiza en torno a un prototipo.",
      "¿Qué ejemplo usó Lakoff (1987) para mostrar que las categorías se construyen por encadenamiento de experiencias?|La clase «balan» del dyirbal|Los colores de los berinmo|Los números del pirahã|Su clase nominal incluye mujeres, fuego y cosas peligrosas, unidas por experiencias encadenadas y no por una definición.",
      "¿Qué rasgo caracteriza al nivel subordinado, como «silla de cocina»?|Apenas añade información útil|Se aprende antes que los demás|Sus miembros comparten pocos rasgos|Es muy específico y apenas añade información. Compartir pocos rasgos es propio del nivel supraordenado.",
      "Una madre dice a su hijo: «La ballena no es un pez». ¿Qué papel tiene aquí la palabra?|Orienta qué categoría se forma|Crea la categoría de la nada|Confirma el parecido visual|El lenguaje no crea las categorías de la nada, pero orienta cuáles se forman y empuja a buscar más que el parecido superficial."
    ],
    inc: [
      "Sobre el lenguaje y las categorías|El nivel básico es fijo e independiente de la pericia|El prototipo es el mejor ejemplo de la categoría|Las metáforas conceptuales forman familias sistemáticas|El nivel básico cambia con la pericia: para un jardinero, «rosal trepador» puede funcionar como básico."
    ],
    seq: [],
    cls: [
      "Metáfora conceptual|El tiempo es dinero: «gastar el tiempo»; «ahorrar una hora»; «perder la tarde»|Arriba es bueno: «estar por los suelos»; «venirse arriba»; «subir la moral»"
    ] },
  { t: "Lenguaje y funciones cognitivas",
    tip: "El bucle fonológico de Baddeley y Hitch tiene un almacén fonológico y un repaso articulatorio, que explican los efectos de similitud fonológica, longitud de palabra y supresión articulatoria. Con presentación visual, la supresión elimina el efecto de longitud. Atención y lenguaje se cruzan en la escucha dicótica y el Stroop, y Miyake et al. (2000) describen tres funciones ejecutivas relacionadas pero separables.",
    v: [
      "Bucle fonológico=Almacén fonológico más repaso articulatorio en la memoria de trabajo",
      "Efecto de similitud fonológica=Peor recuerdo de listas de palabras que suenan parecido (Conrad)",
      "Efecto de longitud de palabra=Se recuerdan menos términos largos porque cuesta más repasarlos",
      "Supresión articulatoria=Repetir «la, la, la» para bloquear el repaso",
      "Amplitud lectora=Leer frases y recordar su última palabra (Daneman y Carpenter)",
      "Denominación automatizada rápida=Nombrar deprisa colores, dígitos u objetos (RAN)",
      "Efecto cóctel=Seguir un mensaje e ignorar otro del que apenas se recuerda nada",
      "Unidad y diversidad=Estructura de Miyake: inhibición, alternancia y actualización relacionadas"
    ],
    g: [
      "Sachs (1967) mostró que se detectan los cambios de ___ de una oración, pero no los de forma.|sentido|orden|voz",
      "Moray (1959) mostró que el propio ___ se detecta a menudo en el mensaje no atendido.|nombre|idioma|acento",
      "Luria (1961) mostró que la instrucción verbal dirige de forma eficaz una acción sencilla hacia los ___ años.|4–5|2–3|7–8",
      "La fluidez verbal ___ depende más del lóbulo frontal.|fonémica|semántica|categorial",
      "Baddeley, Gathercole y Papagno (1998) defendieron que el bucle fonológico es un dispositivo para aprender ___.|palabras|reglas|sonidos"
    ],
    tf: [
      "Con presentación visual, la supresión articulatoria elimina el efecto de longitud de palabra.|V",
      "El efecto de similitud fonológica indica que el almacén guarda un código semántico.|F|Indica un código sonoro: se recuerdan peor las listas de palabras que suenan parecido.",
      "En el síndrome disejecutivo, el discurso pierde el hilo y se vuelve tangencial.|V",
      "Miyake et al. (2000) describieron tres funciones ejecutivas totalmente independientes entre sí.|F|Describieron unidad y diversidad: inhibición, alternancia y actualización, relacionadas pero separables."
    ],
    q: [
      "Una paciente dice muchos animales en un minuto, pero muy pocas palabras que empiecen por p. ¿Qué lóbulo parece más afectado?|Frontal|Temporal|Occipital|La fluidez fonémica depende más del lóbulo frontal, y la semántica, del temporal.",
      "¿Por qué repetir pseudopalabras es un marcador útil del TDL?|Refleja el bucle fonológico|Mide la fluidez semántica|Evalúa la amplitud lectora|El bucle fonológico funcionaría como dispositivo para aprender palabras, y repetir pseudopalabras predice el vocabulario.",
      "En la tarea Stroop, nombrar el color de la tinta de «ROJO» escrita en verde es más lento porque…|la lectura es automática|el color se procesa antes|la palabra no se atiende|La lectura no puede evitarse e interfiere con la tarea de nombrar el color de la tinta.",
      "¿Qué efecto clásico se explica porque cuesta más repasar ciertos elementos?|El de longitud de palabra|El de similitud fonológica|El de supresión articulatoria|Se recuerdan menos palabras largas que cortas porque su repaso lleva más tiempo."
    ],
    inc: [
      "Sobre lenguaje y funciones cognitivas|La amplitud lectora no guarda relación con la comprensión|La supresión articulatoria bloquea el repaso|Hablar al volante consume recursos atencionales|La amplitud lectora de Daneman y Carpenter (1980) se relaciona con la comprensión de textos."
    ],
    seq: [],
    cls: [
      "Efecto del bucle fonológico|Similitud fonológica: listas que suenan parecido; código sonoro|Longitud de palabra: palabras largas; repaso más costoso|Supresión articulatoria: repetir «la, la, la»; bloqueo del repaso"
    ] }
] },
{ n: 15, t: "Cultura y multilingüismo", cap: 5, pir: "alta", mods: [
  { t: "Cultura y uso del lenguaje",
    tip: "Hall (1976) distingue culturas de alto contexto, donde el significado se apoya en lo implícito, y de bajo contexto, donde se espera explicitud. Hymes describe los eventos de habla con el modelo SPEAKING. Thomas (1983) llama fallo pragmático a trasladar normas de uso de una lengua a otra, y Ochs y Schieffelin mostraron que el habla simplificada dirigida al bebé es frecuente, pero no universalmente necesaria.",
    v: [
      "Alto contexto=Estilo en que el significado se apoya en la relación, la situación y lo no dicho",
      "Bajo contexto=Estilo en que se espera que el mensaje sea explícito",
      "SPEAKING=Acrónimo de Hymes con ocho componentes para describir un evento de habla",
      "Fallo pragmático=Malentendido por trasladar una norma de uso de una lengua a otra",
      "Fallo pragmalingüístico=Error por usar la forma equivocada, como traducir una fórmula literal",
      "Fallo sociopragmático=Error por juzgar mal la situación, como tutear a quien espera usted",
      "CCSARP=Proyecto que comparó peticiones y disculpas en varias lenguas y culturas",
      "Socialización lingüística=Aprender con la lengua a quién se habla, cómo se narra o se responde"
    ],
    g: [
      "Hall (1976) sitúa a Japón y al mundo árabe entre las culturas de ___ contexto.|alto|bajo|medio",
      "En las culturas de bajo contexto, el rechazo típico es ___.|directo|indirecto|implícito",
      "España suele situarse en una posición ___ entre alto y bajo contexto.|intermedia|extrema|variable",
      "Boas (1911) defendía que el etnógrafo trabajara en la lengua de la comunidad y no a través de ___.|intérpretes|grabaciones|cuestionarios",
      "Basso (1970) describió que los apaches occidentales guardan ___ en situaciones de relación incierta.|silencio|distancia|cortesía"
    ],
    tf: [
      "En las culturas de alto contexto, el principal riesgo de malentendido es parecer brusco.|F|Ese riesgo es propio del bajo contexto. En el alto contexto, el riesgo es parecer ambiguo.",
      "Entre los kaluli de Papúa Nueva Guinea, los adultos apenas usan habla simplificada con el bebé y los niños aprenden a hablar igualmente.|V",
      "Tutear a quien espera un trato de usted es un fallo pragmalingüístico.|F|Es sociopragmático, por juzgar mal la situación. El pragmalingüístico consiste en usar la forma equivocada.",
      "El CCSARP encontró diferencias entre culturas en el grado de franqueza de peticiones y disculpas.|V"
    ],
    q: [
      "Una estudiante española en Inglaterra pide en clase «dame el libro», sin rodeos, y parece descortés. ¿Cómo se llama este malentendido?|Fallo pragmático|Divergencia lingüística|Interferencia léxica|Traslada una norma de uso de su lengua a otra. Thomas (1983) lo llamó fallo pragmático.",
      "Un hablante traduce literalmente una fórmula de cortesía de su lengua y suena extraño. ¿Qué tipo de fallo comete?|Pragmalingüístico|Sociopragmático|Sociolingüístico|Usa la forma equivocada. El sociopragmático consiste en juzgar mal la situación, como tutear a quien espera usted.",
      "¿Qué permite el modelo SPEAKING de Hymes (1974)?|Describir un evento de habla|Clasificar culturas por contexto|Medir el fallo pragmático|Sus ocho componentes, de la situación al género, describen un evento como una cena familiar de Nochebuena.",
      "¿Qué se concluye de los estudios de Ochs y Schieffelin (1984) sobre el habla dirigida al bebé?|No es imprescindible para aprender|Es universal en todas las culturas|Frena el aprendizaje de la lengua|Es frecuente, pero no universalmente necesaria: hay comunidades que apenas la usan y los niños aprenden a hablar igual."
    ],
    inc: [
      "Sobre cultura y uso del lenguaje|El silencio tiene el mismo valor en todas las culturas|Hymes también formuló la competencia comunicativa|La distinción de Hall admite mucha variación interna|El valor del silencio varía: el mismo silencio puede leerse como respeto o como frialdad según la cultura."
    ],
    seq: [],
    cls: [
      "Estilo comunicativo de Hall|Alto contexto: Japón; mundo árabe; rechazo indirecto; riesgo de parecer ambiguo|Bajo contexto: Alemania; Estados Unidos; rechazo directo; riesgo de parecer brusco"
    ] },
  { t: "El cerebro bilingüe: procesamiento",
    tip: "En el bilingüe, las dos lenguas se activan en paralelo aunque solo se use una (Kroll et al., 2015), como muestran cognados y falsos amigos. El modelo jerárquico revisado pasa de vínculos léxicos a conceptuales, el BIA+ separa un sistema de identificación y otro de tarea, y el control inhibitorio de Green explica por qué cuesta más volver a la lengua dominante (Meuter y Allport, 1999).",
    v: [
      "Activación no selectiva=Activación en paralelo de las dos lenguas aunque solo se use una",
      "Cognado=Palabra de forma y significado parecidos en dos lenguas, como «hospital»",
      "Falso amigo=Palabra de forma parecida y significado distinto, como «embarazada»",
      "Vínculo léxico=Conexión de una palabra de la L2 con su traducción en la L1",
      "Vínculo conceptual=Conexión directa de una palabra de la L2 con su significado",
      "Sistema de tarea=Componente del BIA+ que decide cómo usar la activación según el contexto",
      "Control inhibitorio=Supresión de la lengua no deseada, más fuerte cuanto más dominante es",
      "Coste de cambio asimétrico=Más lentitud al volver a la lengua dominante que al pasar a la débil"
    ],
    g: [
      "El modelo jerárquico revisado es de Kroll y ___ (1994).|Stewart|Green|Allport",
      "Según el modelo jerárquico revisado, en bilingües poco competentes traducir de la L2 a la L1 es más ___.|rápido|lento|preciso",
      "En el BIA+, los nodos de ___ marcan a qué idioma pertenece cada palabra.|lengua|tarea|concepto",
      "Meuter y Allport (1999) pidieron nombrar ___ en L1 o L2 según una señal.|números|colores|dibujos",
      "Los falsos amigos producen ___ entre las lenguas.|interferencia|facilitación|alternancia"
    ],
    tf: [
      "Según el modelo jerárquico revisado, al principio del aprendizaje las palabras de la L2 se conectan sobre todo con los conceptos.|F|Se conectan primero con sus traducciones en L1 por vínculos léxicos. Los conceptuales se refuerzan con la competencia.",
      "En el BIA+, el sistema de identificación activa candidatos de ambas lenguas a la vez.|V",
      "En el estudio de Meuter y Allport, costaba más pasar a la L2 que volver a la L1 dominante.|F|Es al revés: costaba más volver a la L1, porque hablar en L2 exige inhibirla mucho y deshacerlo lleva tiempo.",
      "Los cognados se reconocen y se producen más rápido que las palabras sin cognado.|V"
    ],
    q: [
      "Una camarera con español dominante atiende en inglés toda la mañana y, al hablar luego en español, tarda en arrancar y se le escapa algún «okay». ¿Qué lo explica?|Un coste de cambio por inhibición|Una confusión entre las dos lenguas|Una pérdida del vínculo conceptual|Hablar en L2 exige inhibir la L1, y deshacer esa inhibición lleva tiempo: es un pequeño coste de cambio, no confusión.",
      "¿Qué modelo bilingüe se centra en el reconocimiento de palabras?|BIA+|Jerárquico revisado|Control inhibitorio|El BIA+ de Dijkstra y van Heuven (2002) amplía la activación interactiva al reconocimiento de palabras bilingüe.",
      "¿Qué predice el control inhibitorio sobre la lengua no deseada?|Que se inhibe más si es dominante|Que deja de activarse con la práctica|Que se inhibe igual en toda tarea|Un sistema de control supervisa la tarea e inhibe la lengua no deseada con más fuerza cuanto más dominante es.",
      "¿Qué fenómeno indica mejor que el léxico bilingüe no tiene interruptor?|Los efectos de la otra lengua al usar una|La traducción más rápida de la L2 a la L1|La ventaja de las palabras de alta frecuencia|En tareas en una sola lengua aparecen efectos de las palabras de la otra, prueba de la activación no selectiva."
    ],
    inc: [
      "Sobre el procesamiento bilingüe|El bilingüe activa solo la lengua que está usando|Los falsos amigos producen interferencia|Es habitual que una de las lenguas sea dominante|Las dos lenguas se activan en paralelo aunque solo se use una (Kroll et al., 2015)."
    ],
    seq: [
      "Desarrollo según el modelo jerárquico revisado|Aprender palabras de la L2>Conectarlas con la L1 por vínculos léxicos>Reforzar los vínculos conceptuales con la competencia"
    ],
    cls: [
      "Modelo bilingüe|Jerárquico revisado: Kroll y Stewart (1994); traducción; de vínculos léxicos a conceptuales|BIA+: Dijkstra y van Heuven (2002); reconocimiento de palabras; sistema de tarea aparte|Control inhibitorio: Green (1998); cambio de lengua; costes asimétricos"
    ] },
  { t: "¿Ventaja bilingüe en el control ejecutivo?",
    tip: "La hipótesis de la ventaja bilingüe, defendida por Bialystok, se ha matizado mucho desde 2013. Paap y Greenberg (2013) no hallaron ventaja en 15 indicadores, de Bruin et al. (2015) documentaron un sesgo de publicación y Lehtonen et al. (2018) vieron que el efecto pasaba de un g de 0,06 a uno de −0,08 tras corregirlo. En adultos no hay ventaja general demostrada, aunque se debaten efectos en perfiles concretos.",
    v: [
      "Ventaja bilingüe=Hipótesis de un mejor control ejecutivo por usar a diario dos lenguas",
      "Paap y Greenberg (2013)=No hallaron diferencias en 15 indicadores ejecutivos",
      "Sesgo de publicación=Mayor probabilidad de publicar los resultados positivos que los nulos",
      "De Bruin et al. (2015)=Siguieron resúmenes de congresos hasta su publicación en revista",
      "Lehtonen et al. (2018)=Metaanálisis de 152 estudios con adultos y 891 tamaños del efecto",
      "PET-PEESE=Método para corregir el sesgo de publicación en un metaanálisis",
      "Procesos adaptativos de control=Hipótesis de que la exigencia de control depende del contexto de uso",
      "Cambio de código denso=Mezclar lenguas en la misma frase con otros bilingües"
    ],
    g: [
      "Tras la corrección, el intervalo de la estimación de Lehtonen et al. ___ el cero.|incluye|supera|excluye",
      "El efecto global sin corregir de Lehtonen et al. (2018) fue de g de ___.|0,06|0,60|0,32",
      "Paap y Greenberg (2013) compararon bilingües y monolingües en ___ indicadores ejecutivos.|15|152|891",
      "En el contexto ___ de Green y Abutalebi, ambas lenguas se usan en el mismo entorno con interlocutores distintos.|dual|de una sola lengua|de cambio denso",
      "El principal problema de la hipótesis de los procesos adaptativos es que resulta difícil de ___.|refutar|aplicar|medir"
    ],
    tf: [
      "Lehtonen et al. (2018) confirmaron una ventaja bilingüe moderada en inhibición tras corregir el sesgo de publicación.|F|Tras la corrección, la estimación fue de −0,08, con un intervalo que incluye el cero: no hay ventaja demostrable.",
      "De Bruin et al. (2015) comprobaron que los resúmenes que informaban de una ventaja se publicaban con más frecuencia.|V",
      "En el contexto de cambio de código denso, la exigencia de inhibición es máxima.|F|El cambio denso implica poca inhibición e integración. La mayor supervisión e inhibición corresponde al contexto dual.",
      "Los grupos de bilingües y monolingües suelen diferir en inmigración, nivel socioeconómico o educación.|V"
    ],
    q: [
      "Un titular afirma: «Hablar dos lenguas mejora tu atención, lo demuestra la ciencia». ¿Qué respuesta se ajusta mejor a la evidencia?|En adultos no hay ventaja general demostrada|Hay una ventaja clara pero pequeña en adultos|La ventaja solo aparece en tareas de inhibición|Tras corregir el sesgo de publicación no hay ventaja demostrable (Lehtonen et al., 2018). Podría haber efectos en subgrupos, aún por demostrar.",
      "¿Qué hace que los estudios pequeños sobre la ventaja bilingüe oscilen en ambas direcciones?|La dificultad de igualar los grupos|El uso exclusivo del método PET-PEESE|La ausencia de tareas de conflicto|Bilingües y monolingües suelen diferir en inmigración, nivel socioeconómico, educación o cultura, y cuesta igualarlos.",
      "¿Qué representa en la práctica un g de 0,06?|Una diferencia imperceptible|Un efecto de tamaño medio|Una ventaja clínica clara|Equivale a unas seis centésimas de desviación típica, imperceptible en la práctica.",
      "Según la hipótesis de los procesos adaptativos de control, ¿por qué los resultados son heterogéneos?|Solo algunos perfiles ejercitan esos procesos|Todos los bilingües tienen la misma exigencia|Las tareas de laboratorio no miden el control|El bilingüismo no es una experiencia única, y solo algunos contextos de uso ejercitarían lo que miden las tareas."
    ],
    inc: [
      "Sobre la ventaja bilingüe|El bilingüismo carece de valor sin ventaja ejecutiva|Sus primeros estudios hallaron ventajas en tareas de conflicto|El sesgo de publicación sobreestima el efecto|Sus beneficios comunicativos, culturales, académicos y laborales son claros y no necesitan un efecto ejecutivo."
    ],
    seq: [],
    cls: [
      "Contexto de uso (Green y Abutalebi)|Una sola lengua: español en casa e inglés en el trabajo; poco cambio|Dual: ambas lenguas en el mismo entorno; mucha supervisión e inhibición|Cambio de código denso: mezclar en la misma frase; poca inhibición"
    ] },
  { t: "Reserva cognitiva, plasticidad y ciclo vital",
    tip: "La reserva cognitiva (Stern) es la capacidad de tolerar patología cerebral con menos síntomas de los esperables. Los estudios clínicos hallan que en bilingües los síntomas de demencia aparecen unos 4 años más tarde, pero los metaanálisis no muestran menor riesgo: el bilingüismo retrasa el inicio, no reduce el riesgo. Los cambios cerebrales con la experiencia lingüística existen, pero proceden de estudios pequeños y heterogéneos.",
    v: [
      "Reserva cognitiva=Capacidad de tolerar patología cerebral con menos síntomas de los esperables",
      "Bialystok et al. (2007)=Síntomas de demencia unos 4,1 años más tarde en bilingües de Toronto",
      "Alladi et al. (2013)=648 pacientes de Hyderabad con 4,5 años de retraso",
      "Mukadam et al. (2017)=Cuatro estudios prospectivos sin protección frente a la demencia",
      "Brini et al. (2020)=Síntomas de Alzheimer 4,7 años más tarde sin menor riesgo significativo",
      "Mechelli et al. (2004)=Más sustancia gris parietal inferior izquierda en bilingües",
      "Mårtensson et al. (2012)=Aumento del hipocampo en intérpretes militares tras tres meses de estudio",
      "Confusor=Variable como la inmigración o la educación que puede explicar la asociación"
    ],
    g: [
      "Bialystok, Craik y Freedman (2007) revisaron historias clínicas de ___ pacientes.|184|648|152",
      "Alladi et al. (2013) hallaron un retraso independiente de la educación y de la ___.|inmigración|edad|profesión",
      "En Mukadam et al. (2017), los estudios prospectivos dieron una OR de ___, sin protección.|0,96|0,89|0,32",
      "Anderson et al. (2020) hallaron un efecto sobre la edad de inicio mucho ___ que sobre la incidencia.|mayor|menor|similar",
      "Mårtensson et al. (2012) estudiaron a intérpretes militares ___.|suecos|noruegos|daneses"
    ],
    tf: [
      "Los metaanálisis indican que el bilingüismo reduce el riesgo de desarrollar demencia.|F|Se asocia con un retraso del inicio de los síntomas, no con un menor riesgo (Mukadam et al., 2017, Brini et al., 2020).",
      "Los estudios prospectivos poblacionales, más sólidos que los retrospectivos de clínica, no muestran protección.|V",
      "En el estudio de Mechelli et al. (2004), la densidad de sustancia gris era mayor cuanto antes se aprendía la segunda lengua.|V",
      "Aprender italiano a los 70 años se recomienda como vacuna contra la demencia.|F|Tiene sentido por el placer, la actividad social y el reto. Como intervención, los resultados son modestos por ahora."
    ],
    q: [
      "Un familiar comenta que su abuela bilingüe «no tendrá Alzheimer porque habla dos lenguas». ¿Qué respuesta se ajusta a la evidencia?|Puede retrasar el inicio de los síntomas|Reduce a la mitad su riesgo de demencia|No guarda ninguna relación con la demencia|El bilingüismo se asocia con un inicio más tardío de los síntomas, pero no con un menor riesgo de demencia.",
      "¿Cómo encaja el retraso del inicio con la idea de reserva cognitiva?|Se compensa más tiempo el mismo daño|La enfermedad avanza más despacio|El daño cerebral es menor en bilingües|La enfermedad avanzaría igual, pero el cerebro bilingüe compensaría sus efectos durante más tiempo.",
      "¿Qué cautela se aplica a los estudios de neuroimagen sobre bilingüismo?|Son pequeños y heterogéneos|Usan solo pacientes con demencia|Miden solo la sustancia blanca|Son estudios pequeños, a menudo sin prerregistro y sin relación clara con ventajas conductuales.",
      "¿Qué cambio observaron Mårtensson et al. (2012) tras tres meses de estudio intensivo de una lengua?|Mayor volumen del hipocampo|Menor grosor cortical frontal|Mejor integridad de sustancia blanca|Aumentó el volumen del hipocampo y el grosor cortical en giros frontales y temporal superior izquierdos. La sustancia blanca es de Luk et al."
    ],
    inc: [
      "Sobre bilingüismo y ciclo vital|Mechelli et al. (2004) estudiaron una muestra amplia|Los estudios retrospectivos son sensibles a confusores|Luk et al. (2011) describieron mejor sustancia blanca en mayores|Su muestra era pequeña, como la de muchos estudios de neuroimagen sobre bilingüismo, que por eso exigen cautela."
    ],
    seq: [],
    cls: [
      "Hallazgo sobre bilingüismo y demencia|Retraso del inicio: Bialystok et al. (2007); Alladi et al. (2013); Woumans et al. (2015)|Sin menor riesgo: Mukadam et al. (2017); estudios prospectivos poblacionales"
    ] }
] },
{ n: 16, t: "Habilidades comunicativas: desarrollo, evaluación e intervención", cap: 6, pir: "alta", mods: [
  { t: "Competencia comunicativa y su desarrollo",
    tip: "Hymes (1972) amplió la competencia chomskiana a la capacidad de usar la lengua de forma adecuada. Canale y Swain (1980) distinguieron competencia gramatical, sociolingüística y estratégica, Canale (1983) añadió la discursiva y Bachman (1990) separó la organizativa y la pragmática. En la práctica se apoya en la asertividad y la escucha activa, y su uso se desarrolla desde las protoconversaciones hasta la vejez.",
    v: [
      "Competencia comunicativa=Capacidad de usar la lengua de forma adecuada a la situación (Hymes)",
      "Competencia estratégica=Recursos para compensar fallos de comunicación sin romperla",
      "Competencia discursiva=Construir textos cohesionados y coherentes, añadida por Canale (1983)",
      "Disco rayado=Técnica asertiva de repetir con calma la propia postura",
      "Banco de niebla=Reconocer la parte de razón del otro sin ceder en lo esencial",
      "Mensaje yo=Expresar el propio sentimiento ante una conducta en lugar de acusar",
      "Protoconversación=Alternancia de vocalizaciones y miradas entre bebé y cuidador (Bateson)",
      "Comunicación referencial=Tarea de describir un objeto para que otro lo identifique"
    ],
    g: [
      "La competencia discursiva la añadió ___ al modelo previo.|Canale (1983)|Bachman (1990)|Hymes (1972)",
      "En el modelo de Bachman (1990), la competencia ___ incluye la gramatical y la textual.|organizativa|pragmática|estratégica",
      "A los ___ años los niños ya simplifican su habla al dirigirse a niños más pequeños.|4|2|7",
      "La ironía empieza a entenderse hacia los 6–8 años, en relación con la teoría de la mente de ___ orden.|segundo|primer|tercer",
      "En España se usa la Escala de Habilidades Sociales de ___ (2000).|Gismero|Bishop|Aguinaga"
    ],
    tf: [
      "Canale y Swain (1980) incluyeron la competencia discursiva entre sus componentes.|F|La añadió Canale (1983). El modelo de 1980 tenía la gramatical, la sociolingüística y la estratégica.",
      "Quien pide «eso para apretar tornillos» al no recordar «destornillador» usa la competencia estratégica.|V",
      "En tareas de comunicación referencial, los preescolares dan descripciones muy informativas.|F|Dan descripciones poco informativas, porque les cuesta tener en cuenta lo que el oyente no sabe.",
      "El desarrollo pragmático y el de la sintaxis compleja continúan hasta el final de la adolescencia.|V"
    ],
    q: [
      "Cuando su pareja cambia el plan a última hora, Laura le dice: «Me agobio cuando se cambia el plan a última hora». ¿Qué técnica usa?|Mensaje yo|Banco de niebla|Disco rayado|Expresa su sentimiento ante la conducta en lugar de acusar con un «siempre lo estropeas».",
      "¿Qué estilo expresa las propias necesidades sin respetar las del otro?|Agresivo|Asertivo|Pasivo|El pasivo no expresa las necesidades propias, y el asertivo las expresa de forma clara y respetuosa.",
      "Una niña de 3 años dice «mira esto» por teléfono a su abuela, que no la ve. ¿Qué limitación ilustra?|Tener en cuenta lo que el oyente no sabe|Comprender la ironía de segundo orden|Alternar los turnos en la conversación|Como en las tareas de comunicación referencial, a los preescolares les cuesta considerar lo que el oyente no sabe.",
      "¿Qué cambio comunicativo es propio de la adultez avanzada?|Más episodios de punta de la lengua|Menor vocabulario y narraciones pobres|Pérdida de la comprensión de la ironía|El vocabulario se mantiene o crece y las narraciones se enriquecen, pero aumentan los episodios de punta de la lengua."
    ],
    inc: [
      "Sobre la competencia comunicativa|La escucha activa evita parafrasear para no interrumpir|El MCER describe niveles que van de A1 a C2|La jerga marca la identidad de grupo en la adolescencia|La escucha activa (Rogers y Farson, 1957) combina parafraseo, reflejo de emociones, resumen, preguntas abiertas y validación."
    ],
    seq: [
      "Desarrollo del uso comunicativo|Protoconversaciones hacia los 2–3 meses>Simplificar el habla ante niños menores a los 4 años>Comprender la ironía hacia los 6–8 años>Argumentación y jerga en la adolescencia"
    ],
    cls: [
      "Competencia en el modelo de Bachman (1990)|Organizativa: gramatical; textual|Pragmática: ilocutiva; sociolingüística"
    ] },
  { t: "Comunicación no verbal y emocional",
    tip: "La comunicación no verbal se organiza en canales como la kinésica, la proxémica y el paralenguaje. Ekman y Friesen (1969) distinguen emblemas, ilustradores, muestras de afecto, reguladores y adaptadores. La detección de mentiras ronda el 54 % (Bond y DePaulo, 2006) y la regla 7-38-55 de Mehrabian no es una ley general. Barrett et al. (2019) cuestionan un código facial fijo de la emoción.",
    v: [
      "Kinésica=Canal de gestos, postura, expresión facial y mirada (Birdwhistell)",
      "Proxémica=Uso del espacio y de la distancia interpersonal (Hall, 1966)",
      "Paralenguaje=Tono, volumen, ritmo y pausas de la voz",
      "Cronémica=Uso del tiempo, como la puntualidad o la duración de los silencios",
      "Emblema=Gesto convencional con traducción verbal directa, propio de cada cultura",
      "Ilustrador=Gesto que acompaña y dibuja lo que se dice",
      "Sesgo de veracidad=Tendencia a juzgar los mensajes como verdaderos",
      "Alexitimia=Dificultad para identificar y verbalizar las propias emociones"
    ],
    g: [
      "Según Hall, la distancia personal va de 45 cm a ___.|1,2 m|3,6 m|0,5 m",
      "Asentir para que el otro siga hablando es un ___.|regulador|emblema|adaptador",
      "La prosodia emocional depende en buena medida del hemisferio ___.|derecho|izquierdo|dominante",
      "Etiquetar el afecto reduce la activación de la ___ (Lieberman et al., 2007).|amígdala|ínsula|corteza",
      "Según Kendon (1967), el ___ mira más al otro que al revés.|oyente|hablante|moderador"
    ],
    tf: [
      "En Bond y DePaulo (2006), las mentiras se clasificaron mejor que las verdades.|F|Fue al revés: verdades ≈61 % y mentiras ≈47 %, por un sesgo de veracidad.",
      "Los porcentajes 7-38-55 de Mehrabian proceden de juicios de agrado con palabras sueltas y tono incongruente.|V",
      "Las microexpresiones son un detector fiable de mentiras para profesionales entrenados.|F|No hay apoyo para las microexpresiones como detector fiable, y los profesionales apenas superan a los legos.",
      "Cuando lo que un niño expresa con las manos no coincide con lo que dice, suele estar a punto de aprender algo nuevo.|V"
    ],
    q: [
      "Al explicar cómo es una escalera de caracol, Jorge dibuja una espiral en el aire con el dedo. Según Ekman y Friesen, ¿qué gesto hace?|Un ilustrador|Un emblema|Un adaptador|Acompaña y dibuja lo que se dice. Un emblema tendría una traducción verbal convencional sin necesidad de hablar.",
      "Según Bond y DePaulo (2006), ¿qué precisión media se logra al detectar mentiras?|Alrededor del 54 %|Alrededor del 75 %|Alrededor del 90 %|Apenas supera el 50 % del azar, y los profesionales casi no superan a los legos.",
      "¿Qué concluye la revisión de Barrett et al. (2019) sobre las expresiones faciales?|Su fiabilidad depende del contexto|Hay seis expresiones universales|Son iguales en todas las culturas|Su fiabilidad y especificidad son limitadas y dependen del contexto. Hay regularidades, pero no un código fijo.",
      "Tras un ictus en el hemisferio derecho, un paciente habla con voz monótona y no capta el tono emocional ajeno. ¿Qué presenta probablemente?|Aprosodia|Alexitimia|Afasia|La prosodia emocional depende en buena medida del hemisferio derecho, y su lesión produce aprosodias (Ross, 1981)."
    ],
    inc: [
      "Sobre la comunicación no verbal|Las distancias de Hall son universales|Lo no verbal puede contradecir a las palabras|Gesto y habla forman un sistema integrado|Hall las describió en estadounidenses de clase media, y los límites varían entre culturas."
    ],
    seq: [
      "Distancias proxémicas de Hall, de menor a mayor|Íntima, de 0 a 45 cm>Personal, de 45 cm a 1,2 m>Social, de 1,2 a 3,6 m>Pública, más de 3,6 m"
    ],
    cls: [
      "Categoría de Ekman y Friesen (1969)|Emblemas: pulgar arriba; círculo con pulgar e índice para «perfecto»|Ilustradores: separar las manos al decir «así de grande»|Adaptadores: tocarse el pelo; girar un bolígrafo"
    ] },
  { t: "Comunicación en contextos",
    tip: "En el aula predomina el patrón IRE o IRF, eficiente pero pobre si solo hay preguntas de bajo nivel, y alargar la pausa tras preguntar mejora las respuestas (Rowe, 1974). En la consulta, los médicos interrumpen pronto la agenda del paciente, y herramientas como SPIKES o la entrevista motivacional estructuran la comunicación. En lo digital se pasó de la reducción de claves al modelo hiperpersonal y al SIDE.",
    v: [
      "Patrón IRE=Iniciación del profesor, respuesta del alumno y evaluación",
      "Pregunta de alto nivel=Pregunta que pide elaborar, como «¿por qué crees que…?»",
      "SPIKES=Protocolo de Baile et al. (2000) para dar malas noticias",
      "OARS=Preguntas abiertas, afirmaciones, reflejos y resúmenes de la entrevista motivacional",
      "Conversación apoyada=Apoyos verbales, escritos y gráficos para hablar con adultos con afasia",
      "Reducción de claves=Sin señales no verbales, comunicación más pobre e impersonal",
      "Modelo hiperpersonal=Comunicación digital que puede ser más íntima que la presencial",
      "Desinhibición online=Efecto descrito por Suler (2004) en la comunicación por internet"
    ],
    g: [
      "Rowe (1974) mostró que alargar la ___ del profesor tras preguntar mejora las respuestas.|pausa|explicación|retroalimentación",
      "En Singh Ospina et al. (2019), el médico preguntó por la agenda del paciente solo en el ___ de los casos.|36 %|56 %|78 %",
      "Un estudio clásico situaba la interrupción del paciente hacia los ___ segundos (Beckman y Frankel, 1984).|18|11|60",
      "Según el modelo ___, el anonimato puede reforzar la identidad del grupo y sus normas.|SIDE|hiperpersonal|de reducción de claves",
      "En Kruger et al. (2005), el acierto real al captar el tono por correo fue de un ___.|56 %|78 %|73 %"
    ],
    tf: [
      "En Kruger et al. (2005), quienes escribían esperaban que se entendiera el tono en ≈78 % de los casos.|V",
      "Según Walther (1992), la falta de claves no verbales empobrece la comunicación digital de forma permanente.|F|Walther propuso que, con tiempo, las personas compensan la falta de claves con lo que escriben.",
      "Los datos disponibles asocian el uso de abreviaturas en los mensajes con peor ortografía en los niños.|F|Los datos disponibles, aún limitados, no asocian las abreviaturas con peor ortografía en los niños.",
      "Un «vale» a secas y un «vale» con cara sonriente no transmiten lo mismo, porque los emojis sustituyen en parte al paralenguaje.|V"
    ],
    q: [
      "Una psicóloga debe comunicar un diagnóstico grave a una familia y quiere estructurar la conversación. ¿Qué herramienta es la indicada?|SPIKES|OARS|IRE|SPIKES (Baile et al., 2000) está pensado para dar malas noticias. OARS pertenece a la entrevista motivacional.",
      "«¿Capital de Francia?» «París.» «Muy bien.» ¿Qué patrón de aula ilustra?|IRE o IRF|Enseñanza dialógica|Pregunta de alto nivel|El profesor inicia, el alumno responde y el profesor evalúa. Es eficiente, pero deja poco espacio al razonamiento.",
      "¿Qué sostiene el modelo hiperpersonal de Walther (1996)?|Lo digital puede ser más íntimo|Lo digital es siempre impersonal|El anonimato siempre desinhibe|El emisor cuida su imagen y el receptor idealiza, de modo que puede superar la intimidad presencial.",
      "Por voz, ¿qué acierto se alcanzó en Kruger et al. (2005) al captar el tono sarcástico o serio?|Alrededor del 73 %|Alrededor del 56 %|Alrededor del 78 %|Por voz se llegó a ≈73 %, frente al ≈56 % por correo. El 78 % era lo que esperaban quienes escribían."
    ],
    inc: [
      "Sobre la comunicación en contextos|El patrón IRE fomenta por sí solo el razonamiento|Las preguntas de alto nivel piden elaborar|La lectura fácil ayuda a quien tiene dificultades de comprensión|Es eficiente, pero deja poco espacio al razonamiento si solo se usan preguntas de bajo nivel."
    ],
    seq: [
      "Patrón IRE de la conversación de aula|El profesor inicia>El alumno responde>El profesor evalúa"
    ],
    cls: [
      "Herramienta de comunicación sanitaria|SPIKES: dar malas noticias; Baile et al. (2000)|Entrevista motivacional: cambio de conducta; OARS|Conversación apoyada: adultos con afasia; Kagan (1998)"
    ] },
  { t: "Evaluación, trastornos e intervención",
    tip: "La evaluación debe ser multimétodo y ecológica, explorar todas las lenguas de un niño bilingüe y descartar primero una pérdida auditiva. Entre los instrumentos españoles destacan los inventarios MacArthur-Bates, el PLON-R o el PROLEC-R en niños y el Test de Boston, el Barcelona, la EPLA o la BETA en adultos. La logopedia es eficaz en la afasia (Brady et al., 2016) y los SAAC no frenan el habla.",
    v: [
      "Inventarios MacArthur-Bates=Informe parental de gestos, vocabulario y gramática de 8 a 30 meses",
      "PLON-R=Forma, contenido y uso del lenguaje oral de 3 a 6 años",
      "CCC-2=Cuestionario de Bishop (2003) que evalúa la pragmática",
      "Token Test=Comprensión de órdenes con fichas (De Renzi y Vignolo, 1962)",
      "EPLA=Versión del PALPA para el procesamiento lingüístico en la afasia",
      "Terapia de inducción por restricción=Terapia intensiva que obliga a comunicarse hablando (Pulvermüller)",
      "Terapia de entonación melódica=Técnica de Albert, Sparks y Helm para afasias no fluentes",
      "SAAC=Sistemas aumentativos y alternativos, como PECS o pictogramas de ARASAAC"
    ],
    g: [
      "La afasia aparece en ≈___ de los ictus en fase aguda (Flowers et al., 2016).|30 %|15 %|43 %",
      "La revisión Cochrane de Brady et al. (2016) incluyó ___ ensayos.|57|18|960",
      "La colaboración RELEASE observó las mayores ganancias con ___ horas totales de terapia.|20–50|5–10|100–200",
      "El entrenamiento en habilidades sociales combina instrucción, modelado, ensayo ___, retroalimentación y tareas para casa.|conductual|cognitivo|imaginado",
      "En el Alzheimer son típicos la anomia y el discurso ___.|vacío|tangencial|telegráfico"
    ],
    tf: [
      "La terapia de entonación melódica está indicada sobre todo en las afasias fluentes.|F|Está indicada para afasias no fluentes. Asignarla a las fluentes es una trampa típica.",
      "Los SAAC, como PECS o los pictogramas de ARASAAC, no frenan la aparición del habla y pueden favorecerla.|V",
      "Según Brady et al. (2016), la terapia intensiva rinde más, aunque con más abandonos.|V",
      "La estimulación cerebral no invasiva ha demostrado ser una alternativa eficaz a la logopedia en la afasia.|F|Se usa como complemento de la terapia, con evidencia todavía limitada."
    ],
    q: [
      "Un niño de 4 años habla poco y la familia pide una evaluación del lenguaje. ¿Qué conviene hacer primero?|Descartar una pérdida auditiva|Aplicar el Test de Boston|Medir su fluidez semántica|Antes de atribuir el problema al lenguaje hay que descartar una pérdida auditiva. El Boston es para adultos con afasia.",
      "¿Qué halló el metaanálisis de Roberts y Kaiser (2011) sobre la intervención mediada por los padres?|Efectos positivos muy variables|Ningún efecto en lenguaje expresivo|Efectos solo en niños mayores|Con 18 estudios en niños de 18 a 60 meses, halló efectos positivos en lenguaje receptivo y expresivo, con tamaños muy variables.",
      "¿Qué instrumento evalúa los procesos lectores en niños?|PROLEC-R|PPVT-III|BLOC|El PROLEC-R (Cuetos et al., 2007) evalúa procesos lectores. El PPVT-III mide vocabulario receptivo.",
      "Un paciente con esquizofrenia salta de un tema a otro sin relación y responde de forma tangencial. ¿Qué alteración describe?|Trastorno formal del pensamiento|Presión del habla propia de la manía|Habla lentificada propia de la depresión|El descarrilamiento y la tangencialidad forman parte del trastorno formal del pensamiento de la esquizofrenia."
    ],
    inc: [
      "Sobre la evaluación y la intervención|La evaluación debe centrarse en el número de errores|En un niño bilingüe se exploran todas sus lenguas|La terapia por restricción obliga a comunicarse hablando|Conviene fijarse en qué tipo de errores comete la persona, no solo en cuántos."
    ],
    seq: [],
    cls: [
      "Población del instrumento|Infantil: MacArthur-Bates; PLON-R; PROLEC-R; CCC-2|Adultos: Test de Boston; Test Barcelona; EPLA; BETA"
    ] }
] }
);

SP.register(window.COURSE);
})({});
