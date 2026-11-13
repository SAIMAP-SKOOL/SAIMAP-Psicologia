(function(window){
// SAIMAP Psicología · Evaluación Psicológica II
// Contenido alineado con el temario SAIMAP «Evaluación Psicológica II. Tests e instrumentos de evaluación» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "evaluacion-2",
  title: "Evaluación Psicológica II",
  short: "Evaluación II",
  area: "Personalidad y evaluación",
  rutas: { grado: { curso: 2 }, pir: { bloque: "Evaluación y personalidad" } },
  temario: "Evaluacion-Psicologica-II_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "Tres familias de técnicas: objetivas, subjetivas y proyectivas", from: 1, to: 4 },
    { n: 2, t: "Medir la inteligencia y las aptitudes", from: 5, to: 8 },
    { n: 3, t: "Evaluar la personalidad", from: 9, to: 11 },
    { n: 4, t: "La exploración neuropsicológica", from: 12, to: 13 },
    { n: 5, t: "Intereses, vocación y actitudes", from: 14, to: 15 },
    { n: 6, t: "Salud, bienestar y calidad de vida", from: 16, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Evaluación II · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "Técnicas objetivas y psicofisiológicas", cap: 1, pir: "media", mods: [
  { t: "Qué es una técnica objetiva",
    tip: "Una técnica objetiva es una tarea estructurada en la que la persona desconoce qué se mide o no puede modificar su respuesta a voluntad, y cuyo resultado se puntúa sin el juicio del evaluador. Corresponde a los datos T de Cattell. Un cuestionario corregido con plantilla sigue siendo un dato Q: la objetividad de la corrección no lo convierte en técnica objetiva. Además, el dato objetivo reduce el sesgo de la medida, no la necesidad de interpretarla.",
    v: [
      "Técnica objetiva=Tarea estructurada y enmascarada cuyo resultado no depende del juicio del evaluador",
      "Datos L=Registros de la vida real o valoraciones de observadores, como el expediente académico",
      "Datos Q=Lo que la persona dice de sí misma, por ejemplo en un cuestionario de ansiedad",
      "Datos T=Conducta en una situación de prueba estandarizada y enmascarada",
      "Raymond B. Cattell=Autor que distinguió tres fuentes de datos sobre la personalidad",
      "Objetivo enmascarado=La persona no sabe qué aspecto de su conducta interesa o no puede controlarlo",
      "Registro instrumental=Medida con aparatos o programas, a menudo en milisegundos",
      "Cronoscopio de Hipp=Aparato de relojería de hacia 1890 que medía tiempos de reacción"
    ],
    g: [
      "En la clasificación de Cattell, las técnicas objetivas corresponden a los datos ___.|T|Q|L",
      "La objetividad de la ___ no convierte un autoinforme en una técnica objetiva.|corrección|consigna|aplicación",
      "Las técnicas objetivas nacieron en los laboratorios de psicología ___ del siglo XIX.|experimental|clínica|diferencial",
      "En el mapa de técnicas, los autoinformes psicométricos combinan estructuración alta y enmascaramiento ___.|bajo|alto|medio",
      "Un tiempo de reacción lento puede deberse a falta de atención, a lentitud motora, a un fármaco o a ___.|desinterés|deseabilidad|aquiescencia"
    ],
    tf: [
      "Un cuestionario de personalidad corregido con plantilla es una técnica objetiva en el sentido de Cattell.|F|Su dato es lo que la persona decide contestar: es un dato Q y puede falsearse, aunque se corrija de forma objetiva.",
      "En una tarea de atención, el evaluado sabe que debe atender, pero no puede decidir cuántos milisegundos tarda.|V",
      "El resultado de una técnica objetiva indica por sí solo la causa de la conducta registrada.|F|Reduce el sesgo de la medida, no la necesidad de interpretarla: un tiempo de reacción lento admite muchas causas.",
      "Las técnicas proyectivas combinan baja estructuración del estímulo con alto enmascaramiento del objetivo.|V"
    ],
    q: [
      "Una evaluadora registra, sin que el niño lo sepa, cuánto se alarga su tiempo de reacción a lo largo de una tarea. ¿Qué tipo de dato obtiene según Cattell?|Datos T|Datos Q|Datos L|Es conducta en una situación de prueba estandarizada y enmascarada, la base de las técnicas objetivas.",
      "¿Qué dos criterios sitúan las grandes familias de técnicas en el mapa del capítulo?|Estructuración y enmascaramiento|Fiabilidad y validez del registro|Tipo de material y de evaluador|Las objetivas combinan estructuración y enmascaramiento altos, y las proyectivas, estructuración baja y enmascaramiento alto.",
      "Las bajas laborales y los informes de profesores de una persona son, para Cattell,…|datos L|datos Q|datos T|Los datos L recogen registros de la vida real o valoraciones de observadores.",
      "¿Qué combinación sitúa a las técnicas objetivas en el mapa de técnicas?|Estructuración alta y enmascaramiento alto|Estructuración alta y enmascaramiento bajo|Estructuración baja y enmascaramiento alto|Alta y bajo corresponde a los autoinformes psicométricos, y baja y alto, a las proyectivas."
    ],
    inc: [
      "Sobre los rasgos de las técnicas objetivas|El resultado depende del juicio del evaluador|El estímulo y la respuesta están muy estructurados|La persona no puede controlar fácilmente su respuesta|Una de sus señas es la independencia del evaluador: el resultado es un número que no depende de quien aplica la prueba."
    ],
    seq: [],
    cls: [
      "Fuente de datos de Cattell|Datos L: expediente académico; bajas laborales; informes de profesores|Datos Q: cuestionario de ansiedad; lo que la persona dice de sí misma|Datos T: tiempo de reacción; conductancia ante una imagen"
    ] },
  { t: "Clasificación funcional: técnicas cognitivas, motoras y psicofisiológicas",
    tip: "Según la función que evalúan, las técnicas objetivas son cognitivas, motoras o psicofisiológicas, con fronteras poco nítidas. Entre las cognitivas están los estilos cognitivos: dependencia-independencia de campo (Witkin, EFT) y reflexividad-impulsividad (Kagan, MFF). Los registros psicofisiológicos se clasifican por sistema nervioso: autónomo, somático y central. La evaluación psicofisiológica manipula una variable psicológica, al revés que la psicología fisiológica.",
    v: [
      "Taquistoscopio=Presenta estímulos visuales durante tiempos muy breves y controlados",
      "Tarea go/no-go=Responder ante un estímulo e inhibir la respuesta ante otro",
      "Tarea n-back=Prueba informatizada de memoria de trabajo",
      "Estilo cognitivo=Forma habitual de procesar información, ni mejor ni peor en sí misma",
      "Independencia de campo=Facilidad para separar un elemento de su contexto (Witkin)",
      "Estilo reflexivo=Latencias largas y pocos errores en el MFF de Kagan",
      "Tapping=Golpear una tecla tan rápido como se pueda",
      "Psicología fisiológica=Manipula una variable biológica y observa su efecto en la conducta"
    ],
    g: [
      "En el Test de Figuras Enmascaradas hay que localizar una figura simple escondida dentro de otra ___.|compleja|simétrica|ambigua",
      "El MFF de Kagan registra la latencia de la primera respuesta y los ___.|errores|aciertos|borrados",
      "La electromiografía y la electrooculografía registran respuestas del sistema nervioso ___.|somático|autónomo|central",
      "La pupilometría y la pletismografía registran respuestas del sistema nervioso ___.|autónomo|somático|central",
      "En la evaluación psicofisiológica, la variable que se manipula es ___.|psicológica|biológica|farmacológica"
    ],
    tf: [
      "Quien encuentra deprisa la figura escondida en el EFT se describe como dependiente de campo.|F|Se describe como independiente de campo: separa bien un elemento de su contexto.",
      "El estilo impulsivo combina latencias cortas y muchos errores en el MFF.|V",
      "El EEG y los potenciales evocados registran la actividad del sistema nervioso central.|V",
      "La psicología fisiológica manipula una variable psicológica y mide la respuesta fisiológica en personas.|F|Eso define la evaluación psicofisiológica. La psicología fisiológica manipula una variable biológica, a menudo en animales."
    ],
    q: [
      "Un niño responde muy despacio en el MFF y apenas comete errores. ¿Cómo se describe su estilo cognitivo?|Reflexivo|Impulsivo|Independiente de campo|Latencias largas con pocos errores definen el estilo reflexivo. El impulsivo combina latencias cortas y muchos errores.",
      "Una investigadora mide en conductores sin dormir la precisión al seguir una trayectoria con un volante. ¿Qué tipo de técnica objetiva usa?|Motora|Cognitiva|Psicofisiológica|La precisión y la coordinación de los movimientos son el objeto de las técnicas motoras, como el seguimiento de un objetivo.",
      "¿Con qué autor y prueba se asocia la dependencia-independencia de campo?|Witkin y el EFT|Kagan y el MFF|Lacey y el EFT|Witkin la midió con el Test de Figuras Enmascaradas. Kagan estudió la reflexividad-impulsividad con el MFF.",
      "La neumografía, que registra la respiración, se clasifica entre los registros del sistema nervioso…|somático|autónomo|central|La tensión muscular, los movimientos oculares y la respiración se agrupan en el sistema nervioso somático."
    ],
    inc: [
      "Sobre las técnicas objetivas cognitivas|Los estilos cognitivos son mejores o peores en sí mismos|El taquistoscopio presenta estímulos durante tiempos muy breves|Muchas tareas informatizadas se usan en neuropsicología|Los estilos cognitivos son formas habituales de procesar la información que no son ni mejores ni peores en sí mismas."
    ],
    seq: [],
    cls: [
      "Sistema nervioso registrado|Autónomo: conductancia de la piel; ECG; pletismografía; pupilometría|Somático: EMG; electrooculografía; neumografía|Central: EEG; potenciales evocados"
    ] },
  { t: "Registros psicofisiológicos: qué miden y sus límites",
    tip: "Toda evaluación psicofisiológica combina un registro fiable de la señal con una situación psicológica bien diseñada. Los registros son difíciles de falsear y permiten una medida continua. Sus límites son la inespecificidad, el fraccionamiento direccional (Lacey), la estereotipia individual, los artefactos, el coste y la validez ecológica limitada. Una subida de la conductancia indica activación, no qué emoción ni por qué.",
    v: [
      "Nivel de conductancia=Componente tónico de la actividad electrodérmica, ligado a la activación general",
      "Respuesta fásica=Cambio electrodérmico breve ante un estímulo nuevo o significativo",
      "Variabilidad de la frecuencia cardiaca=Refleja el equilibrio entre la actividad simpática y la parasimpática",
      "P300=Onda positiva hacia los 300 ms ante estímulos infrecuentes o relevantes",
      "Electromiografía=Actividad eléctrica muscular, incluidas pequeñas contracciones faciales",
      "Fraccionamiento direccional=Los sistemas fisiológicos cambian en direcciones distintas ante una misma situación",
      "Estereotipia individual=Tendencia a responder con más intensidad en un sistema fisiológico concreto",
      "Inespecificidad=El registro indica activación, pero no qué emoción ni por qué"
    ],
    g: [
      "La temperatura periférica de los dedos ___ con la activación simpática.|disminuye|aumenta|se estabiliza",
      "La P300 aparece ante estímulos infrecuentes o ___.|relevantes|intensos|dolorosos",
      "La actividad electrodérmica depende de glándulas sudoríparas controladas por el sistema ___.|simpático|parasimpático|somático",
      "Ante una tarea de atención al exterior, la conductancia puede subir mientras la frecuencia cardiaca ___.|baja|sube|se mantiene",
      "Que un sensor mal colocado o el habla alteren la señal es un problema de ___.|artefactos|inespecificidad|estereotipia"
    ],
    tf: [
      "La variabilidad de la frecuencia cardiaca refleja el equilibrio entre la actividad simpática y la parasimpática.|V",
      "La estereotipia individual de respuesta consiste en que los sistemas cambian en direcciones opuestas ante una misma tarea.|F|Eso es el fraccionamiento direccional de Lacey. La estereotipia es responder con más intensidad en un sistema concreto.",
      "Una ventaja de los registros psicofisiológicos es que permiten una medida continua sin interrumpir la tarea.|V",
      "Una subida intensa de la conductancia ante una imagen permite saber si la persona siente miedo o sorpresa.|F|Es un índice inespecífico de activación: miedo, sorpresa, vergüenza o interés pueden dar respuestas parecidas."
    ],
    q: [
      "Una persona con fobia y una bióloga ven la imagen de una araña y ambas muestran una respuesta electrodérmica intensa. ¿Qué límite ilustra el caso?|La inespecificidad|La estereotipia individual|El fraccionamiento direccional|El registro es casi idéntico, pero su significado es opuesto: la señal indica activación, no qué la causa.",
      "Un paciente apenas cambia su conductancia ante un estímulo temido, pero su frecuencia cardiaca se dispara. ¿Qué límite explica que un registro único pudiera pasarlo por alto?|La estereotipia individual|La inespecificidad del registro|La validez ecológica limitada|Cada persona tiende a responder con más intensidad en un sistema concreto, y un solo registro puede no captarlo.",
      "¿Qué dos elementos combina toda evaluación psicofisiológica?|Registro de la señal y situación psicológica|Registro de la señal y entrevista clínica|Situación psicológica y autoinforme previo|Sin una situación psicológica bien diseñada que relacione la señal con un proceso, el registro es solo fisiología.",
      "¿Qué medida aumenta tanto con la activación como con el esfuerzo mental?|El diámetro de la pupila|La temperatura de los dedos|La variabilidad cardiaca|La pupila se dilata con la activación y con el esfuerzo mental. La temperatura periférica disminuye con la activación simpática."
    ],
    inc: [
      "Sobre los registros psicofisiológicos|Estas respuestas se controlan a voluntad con facilidad|El laboratorio con cables y sensores limita la validez ecológica|El equipo es caro y exige una preparación específica|Son difíciles de falsear porque la mayoría de estas respuestas no se controlan a voluntad sin entrenamiento."
    ],
    seq: [],
    cls: [
      "Balance de los registros|Ventajas: difíciles de falsear; medida continua|Límites: inespecificidad; fraccionamiento direccional; estereotipia individual; artefactos; validez ecológica limitada"
    ] },
  { t: "Aplicaciones, ética y el caso del polígrafo",
    tip: "Las técnicas psicofisiológicas tienen aplicaciones clínicas en ansiedad, biofeedback, sueño y dolor, y exigen consentimiento informado, uso validado, protección de datos e interpretación integrada. El polígrafo no detecta mentiras, sino activación. El test de información oculta tiene más base que el de la pregunta de control. Según el NRC (2003), discrimina por encima del azar en incidentes concretos, pero falla como cribado con tasas base bajas.",
    v: [
      "Biofeedback=Devolver en tiempo real información de una señal para aprender a modificarla",
      "Polígrafo=Registra a la vez varias respuestas autónomas, no el engaño",
      "Test de pregunta de control=Compara las preguntas del delito con otras incómodas para casi todos",
      "Test de información oculta=Comprueba si se reacciona ante detalles que solo conocería el autor",
      "Contramedidas=Maniobras con las que un culpable entrenado altera el registro",
      "Tasa base=Proporción de casos verdaderos en la población evaluada",
      "Falso positivo=Inocente al que la prueba señala como sospechoso",
      "NRC (2003)=Informe que concluyó que el polígrafo supera el azar en incidentes concretos"
    ],
    g: [
      "El registro conjunto de EEG, EMG y movimientos oculares permite identificar las fases del ___.|sueño|dolor|estrés",
      "La información fisiológica puede constituir un dato de ___, categoría especial en el RGPD.|salud|identidad|conducta",
      "El polígrafo Keeler registraba la respiración, la presión arterial y la actividad ___.|electrodérmica|electromiográfica|electrocortical",
      "El test de información oculta se basa en que el autor ___ detalles que no debería conocer.|reconoce|inventa|oculta",
      "En un cribado con pocos culpables, de cada 100 personas señaladas solo unas ___ lo serían de verdad.|5|50|85"
    ],
    tf: [
      "El test de la pregunta de control tiene más base científica que el test de información oculta.|F|Es al revés: el de información oculta no supone que el culpable se pondrá nervioso, sino que reconoce lo que no debería conocer.",
      "El NRC (2003) concluyó que el polígrafo discrimina por encima del azar al investigar un incidente concreto.|V",
      "Con una sensibilidad y una especificidad del 85 %, un cribado con polígrafo señala sobre todo a culpables.|F|Con 10 culpables entre 1.000, se señala a unos 8 o 9 culpables y a unos 150 inocentes.",
      "El biofeedback se ha aplicado, por ejemplo, en las cefaleas tensionales.|V"
    ],
    q: [
      "Una empresa somete a 1.000 empleados a un polígrafo que acierta en el 85 % de culpables e inocentes. Solo hay 10 culpables. ¿Qué ocurrirá con los señalados?|La mayoría serán inocentes|Casi todos serán culpables|Habrá tantos culpables como inocentes|Se señala a unos 8 o 9 culpables frente a unos 150 inocentes: el valor predictivo positivo ronda el 5 %.",
      "¿Cuál es el problema principal del test de la pregunta de control?|Un inocente nervioso puede activarse más|Requiere detalles que no se hayan difundido|Solo registra la actividad electrodérmica|Supone que el culpable se pondrá más nervioso. Requerir detalles no difundidos es el problema del test de información oculta.",
      "¿Qué mide realmente el polígrafo?|La activación autónoma ante cada pregunta|El engaño a través de la respuesta cardiaca|La intención de ocultar información|Registra activación, no mentiras. Se interpreta si la persona se activa más ante unas preguntas que ante otras.",
      "¿Qué requisito ético se vulnera si se registra la conductancia sin explicar qué se mide ni para qué?|El consentimiento informado|La interpretación integrada|El uso dentro del marco validado|El consentimiento informado exige explicar qué se registra, para qué y con qué molestias."
    ],
    inc: [
      "Sobre el polígrafo según el NRC (2003)|Es fiable como cribado con pocos culpables|Discrimina por encima del azar en incidentes concretos|Es vulnerable a las contramedidas|Como cribado con tasas base bajas produce muchos falsos positivos: la mayoría de los señalados son inocentes."
    ],
    seq: [],
    cls: [
      "Procedimiento del polígrafo|Pregunta de control: compara con preguntas incómodas para casi todos; un inocente nervioso puede activarse más|Información oculta: detalles que solo conocería el autor; requiere detalles no difundidos; más base científica"
    ] }
] },
{ n: 2, t: "Las técnicas subjetivas: la mirada del evaluado", cap: 1, pir: "baja", mods: [
  { t: "Características de las técnicas subjetivas",
    tip: "En las técnicas subjetivas la persona describe, califica o clasifica a sí misma, a otros o a objetos, y lo que interesa es el significado que atribuye. El material es semiestructurado y el objetivo no está enmascarado, así que la respuesta es voluntaria y puede falsearse. La interpretación es sobre todo idiográfica y el análisis, cualitativo y cuantitativo. El Q-sort de Stephenson es una técnica afín de medida ipsativa.",
    v: [
      "Técnica subjetiva=La persona describe o califica su experiencia con material semiestructurado",
      "Material semiestructurado=El evaluador fija el formato y la persona elige o genera parte del contenido",
      "Interpretación idiográfica=Comprender cómo organiza su experiencia una persona concreta",
      "Interpretación nomotética=Comparación de la persona con las normas de un grupo",
      "Q-sort=Ordenar tarjetas descriptivas en pilas con un número fijo en cada una",
      "Medida ipsativa=Indica qué rasgos pesan más dentro de la persona, no frente a otras",
      "Stephenson (1953)=Autor de la técnica de ordenar enunciados de muy a nada característico de mí",
      "Heterodescripción=Descripción de una persona hecha por otra, como un familiar o un docente"
    ],
    g: [
      "En la rejilla de Kelly, la persona produce sus propios criterios de ___.|comparación|corrección|puntuación",
      "En el Q-sort, el número fijo de tarjetas por pila reproduce una distribución aproximadamente ___.|normal|uniforme|asimétrica",
      "Como no están enmascaradas, las técnicas subjetivas están expuestas a la ___ social.|deseabilidad|comparación|facilitación",
      "Muchas versiones de las técnicas subjetivas se construyen ___ y carecen de normas.|ad hoc|en serie|por consenso",
      "El Q-sort se usó para estudiar la distancia entre el yo real y el yo ___ en la terapia centrada en el cliente.|ideal|social|temido"
    ],
    tf: [
      "En las técnicas subjetivas el objetivo está enmascarado, por lo que la respuesta es difícil de falsear.|F|El objetivo no está enmascarado: la persona sabe qué se le pregunta, la respuesta es voluntaria y puede falsearse.",
      "La información de una técnica subjetiva puede proceder de un informante cercano, como un familiar o un docente.|V",
      "El Q-sort ofrece una medida normativa: cuánto tiene la persona de cada rasgo comparada con otras.|F|Es ipsativa: cada enunciado se sitúa respecto a los demás e indica qué rasgos pesan más dentro de la persona.",
      "Las técnicas subjetivas sirven para evaluar el cambio porque pueden repetirse antes y después de una intervención.|V"
    ],
    q: [
      "Una pareja describe con la misma lista de adjetivos cómo se ve cada uno, cómo ve al otro y cómo cree que el otro le ve. ¿Qué interesa sobre todo de sus respuestas?|El significado que atribuyen|Su exactitud frente a normas|El rasgo definido de antemano|En las técnicas subjetivas importa menos la exactitud que el significado personal que se atribuye a lo descrito.",
      "¿Qué rasgo distingue una técnica subjetiva de un autoinforme psicométrico?|Material abierto en parte y lectura idiográfica|Objetivo enmascarado y respuesta involuntaria|Ítems cerrados y comparación con normas|El autoinforme usa ítems cerrados iguales para todos y se interpreta de forma nomotética.",
      "En el mapa de técnicas, ¿dónde se sitúan las subjetivas respecto a autoinformes y proyectivas?|En un punto intermedio de estructuración|En el extremo de máxima estructuración|En el extremo de máximo enmascaramiento|El material está más abierto que en un autoinforme psicométrico y menos que en una proyectiva, y el objetivo no se enmascara.",
      "¿Cuál es una limitación de las técnicas subjetivas construidas ad hoc?|Carecen de normas para comparar personas|Impiden repetir la medida tras la terapia|Exigen registros instrumentales costosos|Muchas versiones se construyen para un caso y no tienen normas, lo que dificulta comparar personas."
    ],
    inc: [
      "Sobre las técnicas subjetivas|Solo admiten un análisis cualitativo|Pueden analizarse con distancias y correlaciones|La persona sabe qué se le pregunta|Admiten análisis cualitativo y cuantitativo: distancias, correlaciones o componentes principales. Lo subjetivo es el contenido."
    ],
    seq: [],
    cls: [
      "Autoinforme o técnica subjetiva|Autoinforme psicométrico: ítems cerrados iguales para todos; interpretación nomotética; cuestionario de ansiedad|Técnica subjetiva: material semiestructurado; interpretación sobre todo idiográfica; rejilla de constructos personales"
    ] },
  { t: "Listas de adjetivos",
    tip: "Las listas de adjetivos piden indicar qué adjetivos se aplican a uno mismo, a otra persona, a un objeto o a una situación, en formato de marcado o de escala de valoración. La consigna decide si se miden rasgos o estados. La ACL (Gough y Heilbrun, 1965) tiene 300 adjetivos y tiene en cuenta el total marcado, porque marcar muchos eleva casi todas las escalas. Son rápidas, pero muy transparentes y sensibles a la deseabilidad social.",
    v: [
      "Lista de marcado=Se señalan los adjetivos que describen al objeto y se dejan en blanco los demás",
      "Escala de valoración=Cada adjetivo se puntúa según el grado en que se aplica, por ejemplo de 1 a 5",
      "ACL=Lista de 300 adjetivos para describir la personalidad (Gough y Heilbrun, 1965)",
      "MAACL=Lista de estados afectivos como ansiedad, depresión y hostilidad (Zuckerman y Lubin)",
      "POMS=Perfil de estados de ánimo muy usado en psicología del deporte (McNair et al., 1971)",
      "Consigna de rasgo=Pide marcar cómo es uno en general",
      "Consigna de estado=Pide marcar cómo se siente uno hoy",
      "Marcar mucho=Estilo de respuesta que eleva la puntuación en casi todas las escalas de una lista"
    ],
    g: [
      "La ACL contiene ___ adjetivos de uso común.|300|150|500",
      "Quien marca muchos adjetivos en una lista tiende a puntuar más ___ en casi todas las escalas.|alto|bajo|extremo",
      "El POMS incluye escalas de tensión-ansiedad, depresión, cólera-hostilidad, vigor, fatiga y ___.|confusión|euforia|culpa",
      "Pocos se marcan «egoísta» o «perezoso», un efecto de la ___ social.|deseabilidad|presión|facilitación",
      "«Exigente» es un elogio para unos y una crítica para otros, porque el ___ de un adjetivo varía entre personas.|significado|número|orden"
    ],
    tf: [
      "La MAACL de Zuckerman y Lubin es una lista de 300 adjetivos para evaluar rasgos de personalidad.|F|Eso describe la ACL de Gough y Heilbrun. La MAACL evalúa estados afectivos como ansiedad, depresión y hostilidad.",
      "Con el mismo material, cambiar la consigna permite medir rasgos o estados.|V",
      "El número de adjetivos marcados no influye en las puntuaciones de la ACL, porque cada escala es independiente.|F|Quien marca muchos tiende a puntuar alto en casi todas las escalas, por eso la ACL tiene en cuenta el total marcado.",
      "Las listas breves de estado de ánimo sirven para seguir cambios afectivos porque pueden repetirse con frecuencia.|V"
    ],
    q: [
      "Un servicio de rehabilitación cardiaca pide cada semana a sus pacientes que marquen cómo se sienten en una lista breve. La lista de un paciente no cambia en semanas. ¿Qué conclusión es adecuada?|Conviene evaluarle con más detalle|Padece un trastorno depresivo|La lista carece de validez en su caso|El dato no diagnostica nada, pero señala a quién conviene evaluar con más profundidad.",
      "Se pide marcar los adjetivos que describen «cómo se siente usted hoy». ¿Qué se evalúa?|Estados|Rasgos|Actitudes|La consigna sobre el momento actual apunta a estados. «Cómo es usted en general» apuntaría a rasgos.",
      "¿Qué autores crearon la ACL?|Gough y Heilbrun|Zuckerman y Lubin|McNair y Lorr|La ACL es de Gough y Heilbrun (1965). Zuckerman y Lubin crearon la MAACL, de estados afectivos.",
      "¿Qué limitación de las listas de adjetivos se debe a su transparencia?|La sensibilidad a la deseabilidad social|La falta de contexto de cada adjetivo|La variación del significado entre personas|Al ser tan transparentes, pocas personas marcan adjetivos negativos sobre sí mismas."
    ],
    inc: [
      "Sobre las listas de adjetivos|Exigen un vocabulario amplio y especializado|Permiten comparar el yo actual y el yo ideal|Pueden aplicarse a objetos y situaciones|Son aplicables a casi cualquier persona con un vocabulario básico."
    ],
    seq: [],
    cls: [
      "Instrumento de adjetivos|ACL: Gough y Heilbrun; 300 adjetivos; escalas de personalidad|MAACL: Zuckerman y Lubin; ansiedad, depresión y hostilidad|POMS: McNair, Lorr y Droppleman; vigor y fatiga; psicología del deporte"
    ] },
  { t: "El diferencial semántico de Osgood",
    tip: "El diferencial semántico (Osgood, Suci y Tannenbaum, 1957) mide el significado connotativo de un concepto con escalas bipolares de siete puntos. No es una escala Likert: no hay enunciado, sino un concepto y dos adjetivos opuestos. El análisis factorial dio tres factores, EPA: evaluación, potencia y actividad. La evaluación es el de más peso, por lo que se usa mucho para medir actitudes.",
    v: [
      "Significado connotativo=Lo que una palabra evoca en cada persona",
      "Significado denotativo=Lo que una palabra designa, igual para todos",
      "Escala bipolar=Un adjetivo en un extremo y su opuesto en el otro",
      "Evaluación=Factor de valoración positiva o negativa, como bueno-malo",
      "Potencia=Factor de fuerza o intensidad atribuida, como fuerte-débil",
      "Actividad=Factor de dinamismo o movimiento, como rápido-lento",
      "Perfil=Línea que une las puntuaciones de un concepto en todas las escalas",
      "Distancia entre conceptos=Diferencias en todas las escalas, menor cuanto más parecido es el significado"
    ],
    g: [
      "Las escalas del diferencial semántico tienen ___ puntos.|siete|cinco|diez",
      "El par «pesado-ligero» pertenece al factor de ___.|potencia|actividad|evaluación",
      "El par «vivo-apagado» pertenece al factor de ___.|actividad|potencia|evaluación",
      "El diferencial semántico se ha usado mucho para medir actitudes porque el factor de ___ es el de más peso.|evaluación|potencia|actividad",
      "En el diferencial semántico, el centro de la escala indica ___ o que ninguno de los dos adjetivos se aplica.|neutralidad|desacuerdo|rechazo"
    ],
    tf: [
      "En el diferencial semántico la persona valora su grado de acuerdo con un enunciado sobre el concepto.|F|Eso es una escala Likert. En el diferencial semántico no hay enunciado: hay un concepto y dos adjetivos opuestos.",
      "Los tres factores del diferencial semántico se obtuvieron mediante análisis factorial.|V",
      "El par «grande-pequeño» pertenece al factor de actividad.|F|Pertenece a potencia, la fuerza o intensidad atribuida. La actividad recoge el dinamismo, como rápido-lento.",
      "Una exigencia del diferencial semántico es elegir pares de adjetivos con sentido para cada concepto.|V"
    ],
    q: [
      "Una terapeuta pide a un paciente que puntúe «Yo» y «Yo ideal» en las mismas escalas bipolares antes y después de la terapia. ¿Qué indicaría una mejora del autoconcepto?|Menor distancia entre ambos conceptos|Mayor puntuación en el factor potencia|Perfiles más extremos en todas las escalas|Cuanto menor es la distancia entre dos conceptos, más parecido es su significado para la persona.",
      "«Hospital» designa lo mismo para todos, pero evoca cosas distintas a un médico y a quien perdió allí a un familiar. ¿Qué mide el diferencial semántico?|El significado connotativo|El significado denotativo|El grado de acuerdo|Mide lo que el concepto evoca en cada persona, no lo que designa.",
      "¿Quiénes desarrollaron el diferencial semántico?|Osgood, Suci y Tannenbaum|Gough, Heilbrun y Kelly|Zuckerman, Lubin y Osgood|Lo publicaron Osgood, Suci y Tannenbaum en 1957 para medir el significado connotativo.",
      "¿Qué diferencia una escala del diferencial semántico de una escala Likert?|Dos adjetivos opuestos en los extremos|Un número mayor de puntos de respuesta|La ausencia de un concepto que valorar|La Likert valora el acuerdo con un enunciado. El diferencial semántico presenta un concepto con dos adjetivos opuestos."
    ],
    inc: [
      "Sobre el diferencial semántico|La potencia es el factor que más peso tiene|Permite comparar perfiles entre momentos|Se usa para evaluar el significado de la enfermedad|El factor de más peso es la evaluación, por eso el instrumento se ha usado mucho para medir actitudes."
    ],
    seq: [],
    cls: [
      "Factor EPA|Evaluación: bueno-malo; agradable-desagradable; útil-inútil|Potencia: fuerte-débil; grande-pequeño; pesado-ligero|Actividad: activo-pasivo; rápido-lento; vivo-apagado"
    ] },
  { t: "La técnica de rejilla de Kelly",
    tip: "La técnica de rejilla procede de la teoría de los constructos personales de Kelly (1955), que ve a cada persona como un científico que anticipa los acontecimientos con constructos bipolares. Tiene elementos, constructos obtenidos de la propia persona, a menudo con el método de las tríadas, y puntuaciones que forman una matriz. Combina contenido idiográfico con un formato cuantificable, que se analiza con correlaciones y componentes principales.",
    v: [
      "Constructo personal=Dimensión bipolar con la que una persona interpreta y anticipa su experiencia",
      "Persona como científico=Idea de Kelly de que cada cual pone a prueba sus categorías para anticipar",
      "Elementos=Lo que se compara en la rejilla, como madre, pareja o yo ideal",
      "Método de las tríadas=Preguntar en qué se parecen dos elementos y difieren del tercero",
      "Diferenciación cognitiva=Uso de muchas dimensiones distintas frente a reducirlo casi todo a una",
      "Polarización=Proporción de puntuaciones extremas, ligada a una visión en blanco y negro",
      "Distancia yo actual–yo ideal=Grado de insatisfacción con uno mismo, indicador de autoestima",
      "Dilema implicativo=Un cambio deseado en un constructo arrastra otro no deseado (Feixas y Saúl)"
    ],
    g: [
      "Kelly publicó su teoría de los constructos personales en ___.|1955|1957|1965",
      "En la rejilla, la persona valora cada elemento en cada constructo y el resultado es una ___ de elementos por constructos.|matriz|lista|escala",
      "Los dilemas implicativos fueron desarrollados en España por Feixas y ___.|Saúl|Kelly|Osgood",
      "Además de en psicoterapia, la rejilla se usa en orientación vocacional con ___ como elementos.|profesiones|adjetivos|láminas",
      "Para Kelly, un constructo es siempre ___.|bipolar|unipolar|jerárquico"
    ],
    tf: [
      "En la técnica de rejilla, los constructos los aporta el evaluador a partir de una lista estándar.|F|Se obtienen de la propia persona, por lo general con el método de las tríadas.",
      "La rejilla combina un contenido idiográfico con un formato que permite análisis estadísticos.|V",
      "Una polarización alta indica que la persona usa muchas dimensiones distintas para interpretar su mundo.|F|Eso es la diferenciación cognitiva. La polarización es la proporción de puntuaciones extremas, una visión en blanco y negro.",
      "La rejilla dificulta la comparación entre personas, porque cada una tiene constructos distintos.|V"
    ],
    q: [
      "Un joven con fobia social quiere dejar de ser «tímido», pero asocia «sociable» con «superficial» y valora mucho ser «profundo». ¿Qué describe la rejilla?|Un dilema implicativo|Una polarización alta|Una baja diferenciación|El cambio deseado en un constructo arrastra otro no deseado: cambiar el síntoma amenaza su identidad.",
      "Se presentan a una persona su madre, su padre y su pareja, y se le pregunta en qué se parecen dos y se diferencian del tercero. ¿Qué se busca?|Obtener sus propios constructos|Elegir los elementos de la rejilla|Calcular su índice de polarización|El método de las tríadas permite que la persona genere sus constructos. Los elementos ya están elegidos.",
      "¿Qué análisis sitúa elementos y constructos de la rejilla en un espacio de pocas dimensiones?|Componentes principales|Diferencial semántico|Correlación ilusoria|Las correlaciones indican qué constructos van juntos, y los componentes principales reducen el espacio a pocas dimensiones.",
      "¿Qué índice de la rejilla se toma como indicador de la autoestima?|La distancia yo actual–yo ideal|El número de dilemas implicativos|La diferenciación cognitiva|Cuanto mayor es la distancia entre el yo actual y el ideal, mayor es la insatisfacción con uno mismo."
    ],
    inc: [
      "Sobre la técnica de rejilla|Su aplicación es breve y no exige verbalizar|Se usa sobre todo en psicoterapia constructivista|Los elementos clínicos incluyen el yo actual y el ideal|Su aplicación es larga y exige que la persona verbalice sus constructos."
    ],
    seq: [
      "Procedimiento de la rejilla|Elegir los elementos>Obtener constructos con tríadas>Puntuar cada elemento en cada constructo>Analizar la matriz con correlaciones y componentes"
    ],
    cls: [
      "Componente de la rejilla|Elementos: madre; pareja; yo actual; yo ideal|Constructos: cariñoso-frío; cercano-distante; fiable-interesado"
    ] }
] },
{ n: 3, t: "Técnicas proyectivas I: supuestos, Rorschach y TAT", cap: 1, pir: "media", mods: [
  { t: "La hipótesis proyectiva y la clasificación de las técnicas",
    tip: "Frank (1939) llamó métodos proyectivos a los procedimientos en que la persona organiza a su manera un material poco definido: cuanto menos estructurado está el estímulo, más depende la respuesta de quien responde. Comparten estímulo ambiguo, respuesta libre, objetivo enmascarado e interpretación global idiográfica. Lindzey (1959) las clasificó por el tipo de respuesta en asociación, construcción, completamiento, ordenación o elección y expresivas.",
    v: [
      "Proyección=Mecanismo de defensa que atribuye a otros deseos propios no aceptados",
      "Hipótesis proyectiva=Ante un estímulo ambiguo, la respuesta refleja sobre todo la organización personal",
      "Lawrence K. Frank=Acuñó en 1939 el término métodos proyectivos",
      "Técnicas de asociación=Decir lo primero que evoca un estímulo, como en el Rorschach",
      "Técnicas de construcción=Crear un producto completo, por lo general una historia",
      "Técnicas de completamiento=Terminar algo que se da empezado",
      "Ordenación o elección=Ordenar o escoger estímulos según una preferencia, como en el Szondi",
      "Técnicas expresivas=Dibujar, jugar o construir con materiales"
    ],
    g: [
      "Lindzey clasificó las técnicas proyectivas según el tipo de ___ que piden.|respuesta|material|estímulo",
      "En la clasificación de Lindzey, el CAT es una técnica de ___.|construcción|asociación|completamiento",
      "Las fábulas de Düss son, para Lindzey, una técnica de ___.|completamiento|construcción|asociación",
      "El test de Szondi, hoy en desuso, es una técnica de ordenación o ___.|elección|asociación|expresión",
      "En la clasificación habitual de muchos manuales en español, el Rorschach es una técnica ___.|estructural|asociativa|temática"
    ],
    tf: [
      "Lindzey clasificó las técnicas proyectivas según el material que se presenta.|F|Las ordenó según el tipo de respuesta que piden, no según el material.",
      "Según la hipótesis proyectiva, cuanto menos estructurado está el estímulo, más depende la respuesta de quien responde.|V",
      "El test del pueblo entra entre las expresivas de Lindzey porque estas abarcan el juego y la construcción con objetos.|V",
      "En las técnicas proyectivas el resultado se analiza sumando puntuaciones aisladas de forma nomotética.|F|Se analiza como un todo, de forma idiográfica, buscando la organización de la personalidad."
    ],
    q: [
      "Un evaluador pide a un niño que invente una historia completa sobre una escena con animales. Según Lindzey, ¿qué tipo de técnica usa?|De construcción|De completamiento|De asociación|Crear un producto completo, una historia, define la construcción, como en el TAT y el CAT.",
      "¿Qué supuesto proyectivo dificulta, en teoría, el falseamiento?|El objetivo enmascarado|La respuesta libre|La interpretación global|La persona no sabe bien qué se va a valorar, lo que en teoría dificulta falsear la respuesta.",
      "¿En qué sentido usan las técnicas proyectivas la palabra «proyección»?|Más amplio que el psicoanalítico|Idéntico al mecanismo de defensa|Limitado a deseos no aceptados|Frank la usó para cualquier organización personal de un material poco definido, no solo para atribuir deseos propios a otros.",
      "Las frases incompletas reciben etiquetas distintas según la clasificación. ¿Cuál es la correcta?|Completamiento en Lindzey y asociativa en la otra|Asociación en Lindzey y temática en la otra|Expresiva en Lindzey y constructiva en la otra|Lindzey las sitúa en completamiento. La clasificación de muchos manuales en español las llama asociativas."
    ],
    inc: [
      "Sobre los supuestos de las técnicas proyectivas|Ofrecen opciones cerradas|El material admite muchas lecturas|La persona no sabe bien qué se valorará|La respuesta es libre: no hay opciones cerradas ni respuestas correctas."
    ],
    seq: [],
    cls: [
      "Familia de Lindzey|Asociación: Rorschach|Construcción: TAT; CAT|Completamiento: frases incompletas; fábulas de Düss"
    ] },
  { t: "El test de Rorschach: material y administración",
    tip: "Hermann Rorschach publicó Psychodiagnostik en 1921 y concibió su prueba más como una tarea perceptiva que como una ventana al inconsciente. Consta de 10 láminas simétricas en orden fijo: acromáticas (I, IV, V, VI y VII), negro y rojo (II y III) y cromáticas (VIII, IX y X). Se administra en dos fases: respuesta libre, con registro literal, e indagación, que reúne información para codificar sin buscar respuestas nuevas.",
    v: [
      "Psychodiagnostik=Obra de 1921 en la que Rorschach presentó su prueba",
      "Láminas acromáticas=I, IV, V, VI y VII, en negro y grises",
      "Láminas bicolores=II y III, en negro y rojo",
      "Láminas cromáticas=VIII, IX y X, de varios colores",
      "Respuesta libre=Primera fase: la persona dice qué podría ser cada mancha",
      "Indagación=Segunda fase: se pregunta dónde y por qué se vio cada respuesta",
      "Registro literal=Anotar cada respuesta tal cual, con el tiempo y la posición de la lámina",
      "Pregunta sugerente=Intervención que contamina el protocolo, como preguntar por el color"
    ],
    g: [
      "El Rorschach consta de ___ láminas con manchas de tinta simétricas.|10|12|31",
      "Las láminas II y III combinan el negro y el ___.|rojo|azul|gris",
      "En el Sistema Comprehensivo, evaluador y evaluado se sientan ___ para reducir la influencia de los gestos.|al lado|enfrente|de espaldas",
      "Durante la respuesta libre, la persona puede dar tantas respuestas como quiera y ___ la lámina.|girar|dibujar|ordenar",
      "Rorschach concibió su prueba más como una tarea ___ que como una ventana al inconsciente.|perceptiva|proyectiva|narrativa"
    ],
    tf: [
      "La indagación del Rorschach sirve para pedir respuestas nuevas en las láminas con pocas respuestas.|F|No busca respuestas nuevas: reúne la información necesaria para codificar las que ya se dieron.",
      "Las láminas del Rorschach se presentan siempre en el mismo orden.|V",
      "Las láminas VIII, IX y X son acromáticas.|F|Son cromáticas, de varios colores. Las acromáticas son la I, IV, V, VI y VII.",
      "La lectura psicoanalítica del Rorschach llegó después, de la mano de sus continuadores.|V"
    ],
    q: [
      "En la indagación, un evaluador pregunta: «¿Le ha influido el color?». ¿Qué problema plantea?|Contamina el protocolo|Alarga la administración|Invalida las populares|La persona puede aceptar algo en lo que no había pensado. Por eso los sistemas modernos fijan qué preguntas se permiten.",
      "¿Qué anota el evaluador durante la fase de respuesta libre?|Cada respuesta literal, el tiempo y la posición|Un resumen de cada respuesta y su localización|Los determinantes de cada respuesta y el tiempo|Anota literalmente cada respuesta, el tiempo que tarda y la posición de la lámina, sin comentar ni orientar.",
      "¿Qué láminas del Rorschach son acromáticas?|I, IV, V, VI y VII|II, III, VIII y X|I, II, III, IV y V|Las acromáticas, en negro y grises, son la I, IV, V, VI y VII. La II y la III añaden el rojo.",
      "¿Por qué la ética profesional pide no difundir las láminas aunque sean de dominio público?|Porque el test perdería su valor|Porque siguen protegidas por derechos|Porque su visión puede ser dañina|Si alguien llega con las respuestas aprendidas, el test pierde su valor. Las láminas son de dominio público por antigüedad."
    ],
    inc: [
      "Sobre la administración del Rorschach|La indagación se intercala tras cada lámina|La persona puede girar la lámina y dar varias respuestas|El evaluador no comenta ni orienta las respuestas|La indagación empieza cuando han terminado las diez láminas: se vuelve a cada respuesta y se lee en voz alta."
    ],
    seq: [
      "Administración del Rorschach|Entregar las láminas una a una en orden fijo>Respuesta libre con registro literal>Terminar las diez láminas>Indagación de dónde y por qué se vio cada respuesta>Codificación de cada respuesta"
    ],
    cls: [
      "Grupo de láminas|Acromáticas: I; IV; V; VI; VII|Bicolores: II; III|Cromáticas: VIII; IX; X"
    ] },
  { t: "Del Sistema Comprehensivo de Exner al R-PAS",
    tip: "Cada respuesta se codifica en localización, determinantes, contenido, populares y calidad formal. Tras Rorschach surgieron cinco sistemas (Beck, Klopfer, Hertz, Piotrowski y Rapaport). Exner (1974) los unificó en el Sistema Comprehensivo, criticado por unas normas que sobrepatologizaban (Wood et al., 2001). El R-PAS (Meyer et al., 2011) pide dos o tres respuestas por lámina, conserva las variables con apoyo empírico y usa normas internacionales.",
    v: [
      "Localización=Parte de la mancha usada: toda, un detalle frecuente, uno inusual o el blanco",
      "Determinante=Rasgo de la mancha que produce la respuesta: forma, color, sombreado o movimiento",
      "Contenido=Lo que se ve: figuras humanas, animales, objetos, anatomía o naturaleza",
      "Populares=Respuestas muy frecuentes en una lámina concreta en la población de referencia",
      "Calidad formal=Grado en que lo descrito se ajusta a la forma real de la mancha",
      "Sistema Comprehensivo=Sistema de Exner (1974) que unificó administración, codificación y normas",
      "R-PAS=Sistema de Meyer et al. (2011) con variables de apoyo empírico y normas internacionales",
      "Administración R-optimizada=Pedir dos o tres respuestas por lámina"
    ],
    g: [
      "Exner publicó el Sistema Comprehensivo en ___.|1974|1921|2011",
      "El R-PAS presenta el Rorschach como una tarea de ___.|rendimiento|proyección|asociación",
      "Con las normas del Sistema Comprehensivo, muchas personas sin trastorno aparecían como ___.|alteradas|simuladoras|evasivas",
      "La crítica de que las normas del Sistema Comprehensivo sobrepatologizaban se asocia a ___ et al. (2001).|Wood|Meyer|Mihura",
      "El R-PAS conservó las variables que mostraron validez en el metaanálisis de ___ et al. (2013).|Mihura|Wood|Exner"
    ],
    tf: [
      "El R-PAS fue creado por Exner para corregir los problemas de su Sistema Comprehensivo.|F|Lo publicó, tras la muerte de Exner, un grupo de su entorno: Meyer, Viglione, Mihura, Erard y Erdberg (2011).",
      "En el Sistema Comprehensivo el número de respuestas era libre, lo que complicaba la interpretación de muchos índices.|V",
      "Exner se quedó con los códigos de los sistemas previos que mostraban mejor acuerdo entre evaluadores y más apoyo empírico.|V",
      "Los cinco sistemas previos al de Exner compartían administración y codificación, y solo diferían en sus normas.|F|Cada autor administraba y codificaba a su manera, y un mismo protocolo podía recibir interpretaciones distintas."
    ],
    q: [
      "Una persona dice «un mapa» y, en la indagación, explica que lo ve por los bordes recortados, como una costa. ¿Qué categoría recoge que fue la forma lo que produjo la respuesta?|Determinantes|Localización|Calidad formal|Los determinantes registran qué rasgo del estímulo produce la respuesta: forma, color, sombreado o movimiento.",
      "¿Qué autores tenían sistemas propios del Rorschach antes de Exner?|Beck, Klopfer, Hertz, Piotrowski y Rapaport|Meyer, Viglione, Mihura, Erard y Erdberg|Murray, Morgan, Bellak, Westen y McClelland|Exner revisó esos cinco sistemas estadounidenses. Meyer y sus colaboradores son los autores del R-PAS.",
      "¿Qué cambio del R-PAS responde a la variabilidad en el número de respuestas?|Pedir dos o tres respuestas por lámina|Suprimir la fase de indagación completa|Elaborar normas con varios países|La administración R-optimizada reduce la variabilidad del número total de respuestas.",
      "¿Qué categoría de codificación indica cuánto se ajusta lo descrito a la forma real de la mancha?|Calidad formal|Determinantes|Populares|La calidad formal valora el ajuste a la forma de la mancha. Los determinantes indican qué rasgo del estímulo produjo la respuesta."
    ],
    inc: [
      "Sobre el R-PAS|Conserva las normas del Sistema Comprehensivo|Selecciona las variables por su apoyo empírico|Fue publicado por Meyer y colaboradores en 2011|Usa normas internacionales, elaboradas con muestras de varios países, que corrigen el sesgo patologizante."
    ],
    seq: [
      "Historia de los sistemas del Rorschach|Psychodiagnostik (1921)>Sistemas de Beck, Klopfer, Hertz, Piotrowski y Rapaport>Sistema Comprehensivo de Exner (1974)>Crítica a sus normas (Wood et al., 2001)>R-PAS (Meyer et al., 2011)"
    ],
    cls: [
      "Sistema Comprehensivo o R-PAS|Sistema Comprehensivo: Exner, 1974; número de respuestas libre; normas estadounidenses|R-PAS: Meyer et al., 2011; dos o tres respuestas por lámina; normas internacionales"
    ] },
  { t: "El Test de Apercepción Temática (TAT)",
    tip: "El TAT lo crearon Christiana D. Morgan y Henry A. Murray (1935) en Harvard, y la versión definitiva de las láminas es de 1943. Tiene 31 láminas, 30 escenas en blanco y negro y una en blanco, de las que suelen usarse entre 10 y 20 según la edad y el sexo. Murray lo analizaba con su modelo de necesidades y presiones, buscando temas recurrentes. Sin sistema ni normas comunes, sirve sobre todo para generar hipótesis.",
    v: [
      "Apercepción=Interpretar lo percibido a la luz de la experiencia previa",
      "Héroe=Personaje con el que se identifica el narrador, por lo general el protagonista",
      "Necesidades=Motivos del héroe, como logro, afiliación, dominio o agresión",
      "Presiones=Fuerzas del entorno que facilitan o frenan los motivos del héroe",
      "Tema=Combinación de necesidades y presiones que organiza la historia",
      "Desenlace=Cómo se resuelve el conflicto y por qué medios",
      "CAT=Versión infantil de Bellak con animales en situaciones humanas",
      "SCORS=Escala de Westen que codifica relaciones objetales y cognición social"
    ],
    g: [
      "El TAT consta de ___ láminas, una de ellas en blanco.|31|10|20",
      "La versión definitiva de las láminas del TAT se publicó en ___.|1943|1935|1938",
      "El TAT fue creado en la Clínica Psicológica de ___.|Harvard|Yale|Columbia",
      "El CAT, para niños, es obra de Leopold ___.|Bellak|Westen|Murray",
      "Ante la lámina en blanco, la persona imagina primero una ___ y luego cuenta la historia.|escena|mancha|frase"
    ],
    tf: [
      "El TAT fue creado por Henry A. Murray en solitario.|F|Sus autores son Christiana D. Morgan y Henry A. Murray (1935). Durante años se atribuyó solo a Murray.",
      "En el TAT se buscan temas recurrentes a lo largo de las láminas, más que el contenido de una sola historia.|V",
      "El TAT dispone de un sistema de corrección único y de normas generales.|F|Nunca los tuvo: cada evaluador elige láminas distintas y muchos interpretan de forma intuitiva.",
      "En el CAT, las escenas muestran animales porque se supone que los niños se identifican con ellos más fácilmente.|V"
    ],
    q: [
      "En casi todos los relatos de un estudiante, el protagonista se esfuerza mucho y fracasa por culpa de otros. ¿Qué uso de este patrón es correcto?|Plantear una hipótesis que contrastar|Diagnosticar un trastorno de personalidad|Calcular su puntuación normativa de logro|El patrón sugiere una hipótesis sobre su forma de entender el logro, que habrá que contrastar con la entrevista y otras pruebas.",
      "En el análisis de Murray, un padre exigente que frena los deseos de autonomía del protagonista es…|una presión|una necesidad|un desenlace|Las presiones son fuerzas del entorno que facilitan o frenan las necesidades del héroe.",
      "¿Qué escala codifica en los relatos la complejidad con que se representa a los demás?|La SCORS de Westen|El CAT de Bellak|El R-PAS de Meyer|La SCORS codifica relaciones objetales y cognición social. El CAT es una versión infantil del TAT.",
      "¿Cuántas láminas del TAT se seleccionan habitualmente para una persona?|Entre 10 y 20|Las 31 completas|Entre 2 y 3|Se eligen entre 10 y 20 según la persona y lo que se quiere explorar, teniendo en cuenta su edad y sexo."
    ],
    inc: [
      "Sobre la administración del TAT|Se sugieren contenidos si la historia es pobre|Se pide qué ocurre, qué llevó hasta ahí y cómo acaba|Los relatos se registran de forma literal|Puede pedir aclaraciones si falta una parte de la consigna, pero sin sugerir contenidos."
    ],
    seq: [
      "Origen del TAT|Morgan y Murray crean el TAT (1935)>Murray describe su sistema de necesidades (1938)>Versión definitiva de las láminas (1943)"
    ],
    cls: [
      "Elemento del análisis de Murray|Necesidades: logro; afiliación; dominio; autonomía|Presiones: un padre exigente; un rival; una pérdida"
    ] }
] },
{ n: 4, t: "Técnicas proyectivas II: gráficas, narrativas y evidencia", cap: 1, pir: "media", mods: [
  { t: "Técnicas gráficas: árbol, figura humana, familia y HTP",
    tip: "Las técnicas gráficas son baratas, rápidas y bien aceptadas por los niños. Destacan el árbol de Koch (1949), la figura humana, la familia de Corman (1961) y el HTP de Buck (1948). La figura humana tiene dos tradiciones: Goodenough (1926) la usó para medir la madurez intelectual y Machover (1949), como técnica proyectiva. La interpretación por signos carece de validez, y las escalas evolutivas correlacionan de forma moderada con el CI sin sustituir a un test de inteligencia.",
    v: [
      "Test del árbol=Sistematizado por Koch (1949) a partir de una idea del orientador Jucker",
      "Florence Goodenough=Usó el dibujo de una persona como medida de madurez intelectual (1926)",
      "Karen Machover=Convirtió el dibujo de la figura humana en técnica proyectiva (1949)",
      "Dale B. Harris=Revisó y amplió en 1963 la escala de Goodenough",
      "Elizabeth Koppitz=Separó indicadores evolutivos e indicadores emocionales en niños (1968)",
      "Test de la familia=Dibujo de «una familia que imagines» con entrevista posterior (Corman)",
      "HTP=Casa, árbol y persona, cada uno en su hoja, con interrogatorio (Buck, 1948)",
      "Interpretación por signos=Atribuir un significado fijo a cada rasgo aislado del dibujo"
    ],
    g: [
      "Corman pedía dibujar una familia imaginada en lugar de la propia para reducir la ___.|censura|ansiedad|fatiga",
      "En el HTP, la casa se asocia al ámbito ___.|familiar|laboral|escolar",
      "Goodenough estimaba una edad ___ a partir de los detalles presentes en el dibujo.|mental|gráfica|emocional",
      "Las escalas evolutivas como la de Goodenough-Harris correlacionan de forma ___ con el CI.|moderada|nula|muy alta",
      "Koch sistematizó el test del árbol en ___.|1949|1926|1961"
    ],
    tf: [
      "Karen Machover fue la primera en usar el dibujo de la figura humana como medida de inteligencia.|F|Fue Florence Goodenough (1926). Machover (1949) lo convirtió en una técnica proyectiva.",
      "En el HTP, la casa, el árbol y la persona se dibujan cada uno en su propia hoja.|V",
      "Koppitz separó lo que es propio de la edad de lo que sería un signo emocional.|V",
      "Las escalas evolutivas del dibujo pueden sustituir a un test de inteligencia, porque correlacionan con el CI.|F|Correlacionan de forma moderada con el CI, pero no sustituyen a un test de inteligencia."
    ],
    q: [
      "Una niña de seis años dibuja una familia diminuta en una esquina de la hoja. ¿Qué conclusión es más prudente?|Considerar antes otras causas posibles|Interpretar inseguridad en el ámbito familiar|Descartar el dibujo por falta de validez|Un dibujo tiene muchas causas: su desarrollo gráfico, la prisa por volver al recreo o su costumbre en clase.",
      "¿Qué diferencia a Goodenough de Machover en el uso de la figura humana?|Madurez intelectual frente a lectura proyectiva|Signos aislados frente a escala global|Indicadores emocionales frente a evolutivos|Goodenough puntuaba detalles para estimar el desarrollo cognitivo. Machover dio al mismo material una lectura simbólica.",
      "¿Qué hace el examinador tras el dibujo en el test de Corman?|Pregunta quién es cada personaje|Pide dibujar una casa y un árbol|Puntúa los detalles para la edad mental|Pregunta quién es cada personaje, quién es el más feliz o el menos simpático y con quién le gustaría estar.",
      "¿Qué tipo de interpretación de los dibujos utilizaban Goodenough y Koppitz?|Global, con escalas explícitas|Por signos aislados de cada rasgo|Simbólica, centrada en conflictos|La valoración global juzga el dibujo en conjunto, a menudo con escalas explícitas. La de signos carece de validez."
    ],
    inc: [
      "Sobre el HTP de Buck|Los tres dibujos se interpretan por separado, sin compararlos|El árbol se asocia a la vivencia de uno mismo más profunda|La persona se asocia a la autoimagen y las relaciones|La interpretación compara los tres dibujos entre sí."
    ],
    seq: [
      "Cronología de las técnicas gráficas|Goodenough (1926)>Buck, HTP (1948)>Machover (1949)>Corman (1961)>Harris (1963)>Koppitz (1968)"
    ],
    cls: [
      "Tradición de la figura humana|Madurez intelectual: Goodenough; Harris|Proyectiva: Machover|Evolutiva y emocional: Koppitz"
    ] },
  { t: "Técnicas constructivas y narrativas: test del pueblo, fábulas de Düss y frases incompletas",
    tip: "El test del pueblo de Arthus (1949) pide construir un pueblo con piezas y relatarlo: es lúdico, no verbal y exploratorio, sin normas. Düss (1940) escribió 10 fábulas incompletas para niños, desde la teoría psicoanalítica de los estadios psicosexuales. Las frases incompletas, como las de Sacks y Rotter, son la técnica proyectiva más estructurada y cercana al autoinforme. Funcionan como facilitadoras de la entrevista y fuente de hipótesis.",
    v: [
      "Test del pueblo=Construir un pueblo con piezas y relatarlo (Arthus, 1949)",
      "Henri Arthus=Autor de una técnica lúdica y no verbal útil con niños que hablan poco",
      "Fábulas de Düss=Diez relatos incompletos para niños sobre conflictos psicosexuales (1940)",
      "Frases incompletas=Comienzos de frase que se terminan con lo primero que se le ocurre a la persona",
      "Rotter=Autor de frases incompletas con puntuación del ajuste general",
      "Estadios psicosexuales=Marco teórico desde el que se diseñaron las fábulas de Düss",
      "Facilitadora de la entrevista=Uso de una técnica para abrir temas, no para medir un constructo",
      "Uso exploratorio=Aplicación sin normas ni codificación con apoyo empírico"
    ],
    g: [
      "Düss escribió ___ fábulas incompletas.|10|31|12",
      "La versión de frases incompletas de ___ incluye un sistema de puntuación del ajuste general.|Rotter|Sacks|Düss",
      "El completamiento de frases es, de todas las proyectivas, la técnica más ___.|estructurada|enmascarada|idiográfica",
      "El test del pueblo es una técnica lúdica y no ___, útil con niños que hablan poco.|verbal|gráfica|social",
      "Las fábulas de Düss terminan con una ___ que el niño debe responder.|pregunta|imagen|frase"
    ],
    tf: [
      "El test del pueblo dispone de normas y de un sistema de codificación con apoyo empírico.|F|No tiene normas ni codificación con apoyo empírico, así que su uso es exploratorio.",
      "Las frases incompletas se sitúan en la frontera entre las técnicas proyectivas y las subjetivas.|V",
      "Las fábulas de Düss se diseñaron desde la teoría conductual del aprendizaje social.|F|Se diseñaron desde la teoría psicoanalítica, para explorar los conflictos de los estadios psicosexuales.",
      "En las frases incompletas, la persona controla bien lo que escribe y el objetivo es relativamente transparente.|V"
    ],
    q: [
      "Un adolescente que apenas habla completa «Cuando hablo en voz alta…» con «nadie escucha». ¿Qué uso de la respuesta es más adecuado?|Retomar el tema en la entrevista|Diagnosticar una fobia social|Puntuar su nivel de ajuste global|La respuesta no diagnostica nada, pero ofrece un tema concreto para retomar en la siguiente sesión.",
      "¿Qué técnica encaja mejor con un niño que apenas habla?|El test del pueblo|Las frases incompletas|Las fábulas de Düss|Es una técnica lúdica y no verbal. Las frases y las fábulas exigen respuestas verbales.",
      "¿Qué observa el evaluador en el test del pueblo?|El proceso, la organización y el relato|Solo el número de piezas colocadas|El tiempo que tarda en cada pieza|Se atiende a qué coloca primero, qué deja fuera, si rectifica, cómo organiza el espacio y qué relata.",
      "¿Qué conflictos exploraban las fábulas de Düss?|Dependencia, rivalidad, celos y culpa|Logro, afiliación, poder y autonomía|Ajuste escolar, laboral y familiar|Exploraban los conflictos de los estadios psicosexuales, como dependencia, rivalidad, celos, miedo o culpa."
    ],
    inc: [
      "Sobre las técnicas narrativas|Cada respuesta suma a una escala con propiedades conocidas|Su riqueza cualitativa dificulta el acuerdo entre evaluadores|Las frases incompletas se usan con adolescentes y adultos|Cada respuesta se lee por su contenido. Sumar a una escala con propiedades conocidas es propio de un cuestionario."
    ],
    seq: [],
    cls: [
      "Técnica constructiva o narrativa|Test del pueblo: Arthus, 1949; piezas y relato; niños y adultos|Fábulas de Düss: 1940; diez fábulas; niños|Frases incompletas: Sacks y Rotter; terminar por escrito; adolescentes y adultos"
    ] },
  { t: "Fiabilidad y validez de las técnicas proyectivas",
    tip: "Las proyectivas deben cumplir las mismas exigencias que cualquier test. Con el Sistema Comprehensivo o el R-PAS, el acuerdo entre codificadores es aceptable si hay entrenamiento. Mihura et al. (2013) revisaron 65 variables del Rorschach: correlación de 0,27 con criterios externos y de 0,08 con autoinformes, con mejor apoyo en distorsión perceptiva y pensamiento desorganizado. Lilienfeld, Wood y Garb (2000) concluyeron que los dibujos por signos carecen de validez.",
    v: [
      "Acuerdo entre codificadores=Coincidencia de dos evaluadores al codificar un mismo protocolo",
      "Mihura et al. (2013)=Metaanálisis de la validez de 65 variables del Sistema Comprehensivo",
      "Validez incremental=Mejora de la predicción sobre la información ya disponible",
      "Distorsión perceptiva=Variables del Rorschach con buen apoyo, útiles ante procesos psicóticos",
      "Pensamiento desorganizado=Variables del Rorschach bien apoyadas junto a las de distorsión perceptiva",
      "Lilienfeld, Wood y Garb=Revisión de 2000 que niega validez a los dibujos interpretados por signos",
      "Criterios externos=Diagnósticos, observación o rendimiento, con los que el Rorschach correlacionó 0,27",
      "Wood et al. (2001)=Mostraron que las normas del Sistema Comprehensivo sobrepatologizaban"
    ],
    g: [
      "En el metaanálisis de Mihura, la correlación media con autoinformes fue de solo ___.|0,08|0,27|0,52",
      "Mihura et al. revisaron la validez de ___ variables del Sistema Comprehensivo.|65|30|22",
      "Según Muñiz et al. (2020), encabezan el uso en España el WISC, el MCMI y el ___.|PAI|TAT|HTP",
      "Sin un sistema de codificación explícito, la fiabilidad entre evaluadores no se puede ___.|garantizar|interpretar|adaptar",
      "Aunque los códigos coincidan, el paso a las conclusiones sigue dependiendo del ___ clínico.|juicio|sistema|registro"
    ],
    tf: [
      "Mihura et al. (2013) hallaron apoyo empírico para todas las variables del Sistema Comprehensivo que revisaron.|F|Solo 30 de 65 tuvieron apoyo bueno o excelente, y 22 carecieron de apoyo o de estudios: la validez es desigual.",
      "Las variables del Rorschach con mejor apoyo fueron las de distorsión perceptiva y pensamiento desorganizado.|V",
      "Lilienfeld, Wood y Garb (2000) hallaron índices proyectivos fiables para detectar el abuso sexual infantil a partir de dibujos.|F|No hay hallazgos replicados que permitan detectar el abuso sexual infantil con dibujos u otras proyectivas.",
      "Según Mihura et al. (2013), las variables del Rorschach mostraron con criterios externos un efecto de tamaño moderado.|V"
    ],
    q: [
      "Un psicólogo argumenta que, como el Rorschach de su paciente correlaciona poco con sus cuestionarios, sus resultados no valen. ¿Qué responde la evidencia?|Mide rendimiento, no autopercepción|Correlaciona igual de poco con todo|Solo vale si coincide con el cuestionario|Con criterios externos la correlación media fue de 0,27, y con autoinformes, de 0,08, porque mide cómo actúa la persona.",
      "¿Qué técnica presenta fiabilidad entre codificadores aceptable cuando hay entrenamiento?|El Rorschach con SC o R-PAS|El TAT con interpretación libre|El dibujo interpretado por signos|Con un sistema explícito y entrenamiento, el acuerdo es aceptable. Sin sistema, como en muchos usos del TAT, no se garantiza.",
      "¿Qué concluyó la revisión de Lilienfeld, Wood y Garb (2000) sobre los índices proyectivos?|Pocos tienen validez incremental|Todos superan a la entrevista|Ninguno tiene validez alguna|Pocos mejoran la predicción cuando ya se dispone de una entrevista o un cuestionario. No afirman una validez nula.",
      "De las 65 variables revisadas por Mihura et al. (2013), ¿cuántas tuvieron apoyo bueno o excelente?|30|22|65|Treinta variables tuvieron apoyo bueno o excelente, y 22 carecieron de apoyo o de estudios."
    ],
    inc: [
      "Sobre la evidencia de validez de las proyectivas|Los dibujos aportan mucha validez incremental|El TAT carece de normas generales|Las técnicas gráficas carecen de normas actualizadas|Los dibujos apenas aportan validez incremental sobre otras fuentes más baratas (Lilienfeld et al., 2000)."
    ],
    seq: [],
    cls: [
      "Resultado de Mihura et al. (2013)|Con criterios externos: correlación media de 0,27; efecto moderado; diagnósticos y observación|Con autoinformes: correlación media de 0,08; cuestionarios; lo que la persona dice de sí misma"
    ] },
  { t: "Uso responsable y sesgos de interpretación",
    tip: "Muchos errores con las proyectivas proceden de cómo razona quien interpreta. Chapman y Chapman (1967) mostraron la correlación ilusoria: se «ven» asociaciones esperadas entre dibujos y síntomas que no existen. El efecto Barnum hace parecer precisas descripciones vagas. Un uso responsable trata las técnicas como generadoras de hipótesis, prefiere sistemas explícitos, interpreta solo variables validadas y no basa decisiones forenses en signos gráficos.",
    v: [
      "Correlación ilusoria=Percepción de una relación inexistente que encaja con las expectativas",
      "Chapman y Chapman (1967)=Emparejaron al azar dibujos y síntomas, y aun así se vieron asociaciones",
      "Efecto Barnum=Descripciones vagas que parecen precisas a casi cualquier persona",
      "Sesgo de confirmación=Buscar lo que apoya la hipótesis previa y pasar por alto lo contrario",
      "Sobrepatologización=Leer como síntoma lo que es normal para la edad o el contexto",
      "Sesgo cultural=Tomar como signo una costumbre gráfica o narrativa del grupo de la persona",
      "Generadora de hipótesis=Uso de la técnica para plantear ideas que se contrastan con otras fuentes",
      "Seguridad del material=No difundir láminas ni respuestas habituales"
    ],
    g: [
      "En el estudio de Chapman y Chapman, los dibujos y los síntomas se habían emparejado ___.|al azar|por expertos|por edad",
      "Los estudiantes de Chapman y Chapman «descubrieron» las mismas asociaciones que defendían los ___.|clínicos|pacientes|autores",
      "Las frases vagas de tipo Barnum parecen precisas a casi cualquiera, por eso no ___ entre evaluados.|discriminan|influyen|coinciden",
      "Del Rorschach, solo deben interpretarse las variables ___.|validadas|populares|cromáticas",
      "Leer como síntoma lo que es normal para la edad es un riesgo agravado por ___ poco adecuadas.|normas|láminas|consignas"
    ],
    tf: [
      "Los participantes de Chapman y Chapman eran clínicos expertos en dibujos proyectivos.|F|Eran estudiantes sin formación clínica, y aun así «vieron» las mismas asociaciones que defendían los clínicos.",
      "La correlación ilusoria sugiere que lo que «se ve» en la práctica clínica puede ser una relación que no existe.|V",
      "Tomar como signo patológico una costumbre gráfica propia del grupo de la persona es un caso de sobrepatologización.|F|Es el sesgo cultural. La sobrepatologización lee como síntoma lo que es normal para la edad o el contexto.",
      "Proteger la seguridad del material implica no difundir láminas ni respuestas habituales.|V"
    ],
    q: [
      "En un procedimiento de custodia, un informe concluye que un niño «rechaza a su padre» porque lo dibujó pequeño y apartado. ¿Qué valoración merece?|No se sostiene como conclusión|Es válida si la confirma el HTP|Es válida con normas actualizadas|El signo gráfico no tiene validez demostrada y no deben basarse decisiones de custodia en él.",
      "Un evaluador busca en un protocolo solo los datos que apoyan su impresión inicial. ¿Qué sesgo comete?|Confirmación|Correlación ilusoria|Efecto Barnum|Buscar lo que apoya la hipótesis previa y pasar por alto lo que la contradice es el sesgo de confirmación.",
      "Un informe dice: «A veces se muestra seguro, pero en el fondo duda de sí mismo». ¿Qué problema ilustra?|El efecto Barnum|La correlación ilusoria|La sobrepatologización|Es una descripción vaga que casi cualquiera acepta como precisa, por lo que no discrimina entre personas.",
      "¿Qué criterio de uso responsable se recomienda frente a la interpretación intuitiva?|Usar sistemas explícitos con normas|Aplicar más láminas por sesión|Confiar en la experiencia clínica|Se prefieren sistemas de codificación explícitos con normas y apoyo empírico, como el R-PAS."
    ],
    inc: [
      "Sobre el uso responsable de las proyectivas|Un dibujo puede indicar que hubo abuso sexual|Deben contrastarse con entrevista y observación|Exigen formación y supervisión específicas|No hay hallazgos replicados: no debe concluirse que hubo abuso sexual a partir de un dibujo."
    ],
    seq: [],
    cls: [
      "Sesgo de interpretación|Correlación ilusoria: Chapman y Chapman; asociaciones inexistentes; expectativas previas|Efecto Barnum: descripciones vagas; parecen precisas a cualquiera|Sobrepatologización: lo normal para la edad leído como síntoma; normas poco adecuadas"
    ] }
] }
);

// SAIMAP Psicología · Evaluación II · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Concepto y teorías de la inteligencia", cap: 2, pir: "alta", mods: [
  { t: "Tres enfoques para definir la inteligencia",
    tip: "No hay una definición de inteligencia aceptada por todos, y cada forma de entenderla lleva a una forma distinta de medirla. El enfoque empírico se preocupa más de medir bien que de definir, el factorial busca la estructura en las correlaciones entre tests, el genético de Piaget estudia cómo se construye el pensamiento y el cognitivo pregunta qué procesos producen la conducta inteligente, como el modelo PASS. Los enfoques no se excluyen.",
    v: [
      "Enfoque empírico=Mide con tareas que discriminan bien, sin preocuparse tanto por definir el constructo",
      "Boring (1923)=Autor de la frase «la inteligencia es lo que miden los tests»",
      "Enfoque factorial=Busca la estructura de las aptitudes a partir de las correlaciones entre tests",
      "Asimilación=Incorporar lo nuevo a los esquemas que ya se tienen",
      "Acomodación=Modificar los esquemas cuando lo nuevo no encaja",
      "Método clínico=Preguntar y repreguntar al niño para conocer el razonamiento tras su respuesta",
      "Modelo PASS=Planificación, atención y procesamiento simultáneo y sucesivo (Das y Naglieri)",
      "Procesamiento sucesivo=Manejar información en serie, como al repetir un número de teléfono"
    ],
    g: [
      "La frase de Boring es una definición ___ que evita discusiones, pero resulta circular.|operacional|factorial|genética",
      "Spearman introdujo en 1904 el análisis ___ para estudiar las correlaciones entre tests.|factorial|discriminante|clínico",
      "Para Piaget, la inteligencia es una forma de adaptación que busca el ___ entre asimilación y acomodación.|equilibrio|predominio|contraste",
      "El modelo PASS se inspira en las ideas de ___ sobre la organización funcional del cerebro.|Luria|Piaget|Spearman",
      "Interpretar un mapa integrando sus elementos en un todo es un ejemplo de procesamiento ___.|simultáneo|sucesivo|planificado"
    ],
    tf: [
      "Piaget elaboró baremos para comparar el nivel intelectual de cada niño con el de su edad.|F|Piaget no buscaba tests estandarizados ni baremos. Le interesaba el nivel de pensamiento, no las diferencias entre personas.",
      "Los primeros tests de Binet y Simon son un ejemplo del enfoque empírico o pragmático.|V",
      "El modelo PASS distingue cuatro procesos y se evalúa con el CAS.|V",
      "En la evaluación operatoria lo que más interesa es si el niño acierta la tarea.|F|Interesa más el nivel de pensamiento que revela su respuesta que el acierto en sí."
    ],
    q: [
      "Una evaluadora pregunta a un niño si cambia la cantidad de agua al pasarla a un vaso más estrecho y le repregunta para conocer su razonamiento. ¿Qué enfoque sigue?|Genético|Empírico|Factorial|Es la evaluación operatoria de Piaget, basada en el método clínico. Interesa el razonamiento, no solo el acierto.",
      "¿Qué crítica recibe la definición de Boring de la inteligencia?|Es circular|Es demasiado teórica|Exige análisis factorial|Dice que la inteligencia es lo que miden los tests, pero no explica qué tienen en común las tareas ni por qué sirven.",
      "¿Qué pregunta central caracteriza el enfoque cognitivo?|Qué procesos producen la conducta inteligente|Qué estructura tienen las aptitudes medidas|Cómo se construye el pensamiento con la edad|El cognitivo estudia procesos mentales. La estructura de las aptitudes es la pregunta factorial, y la construcción del pensamiento, la genética.",
      "¿Qué enfoque ha influido más en los tests de inteligencia actuales?|El factorial o psicométrico|El genético o evolutivo|El empírico o pragmático|El enfoque factorial dio lugar a los modelos de Spearman, Thurstone y CHC, base de las baterías actuales."
    ],
    inc: [
      "Sobre los enfoques de la inteligencia|El genético estudia sobre todo las diferencias individuales|El factorial parte de las correlaciones entre tests|Las baterías actuales combinan varios enfoques|Piaget no se interesó por las diferencias entre personas, sino por cómo se construye el pensamiento a lo largo del desarrollo."
    ],
    seq: [],
    cls: [
      "Enfoque|Empírico: Binet y Simon; Boring (1923); tareas que discriminan|Genético: Piaget; método clínico; pruebas operatorias|Cognitivo: modelo PASS; CAS; Das y Naglieri"
    ] },
  { t: "Los modelos factoriales clásicos: Spearman, Thurstone, Guilford y Vernon",
    tip: "Spearman (1904) explicó la correlación positiva entre tests con su teoría bifactorial, un factor g común y factores s específicos. Thurstone (1938) halló siete aptitudes mentales primarias, que luego resultaron correlacionadas. Vernon (1950) reconcilió ambas posturas con una jerarquía encabezada por g, y Guilford (1967) negó g y propuso un cubo de operaciones, contenidos y productos.",
    v: [
      "Teoría bifactorial=Cada tarea depende de un factor general y de uno específico (Spearman, 1904)",
      "Factor s=Habilidad propia de una tarea concreta, que no se transfiere",
      "Aptitudes Mentales Primarias=Siete capacidades relativamente independientes halladas por Thurstone (1938)",
      "Modelo jerárquico de Vernon=g en la cúspide y, debajo, un factor verbal-educativo y otro práctico-mecánico-espacial",
      "Estructura del intelecto=Cubo de Guilford que cruza operaciones, contenidos y productos",
      "Producción divergente=Generar muchas respuestas posibles ante un problema abierto",
      "Productos de Guilford=Unidades, clases, relaciones, sistemas, transformaciones e implicaciones",
      "Contenidos de Guilford=Figurativo, simbólico, semántico y conductual"
    ],
    g: [
      "Thurstone identificó ___ aptitudes mentales primarias.|siete|cinco|seis",
      "En el modelo de Vernon, bajo g aparecen un factor verbal-educativo y otro ___.|práctico-mecánico-espacial|numérico-perceptivo-motor|fluido-cristalizado-general",
      "En la versión original de Guilford, 5 × 4 × 6 daban ___ capacidades.|120|180|150",
      "La aportación más duradera de Guilford impulsó el estudio de la ___.|creatividad|memoria|percepción",
      "Los tests que más saturan en g son los de razonamiento ___, como las matrices de Raven.|abstracto|verbal|numérico"
    ],
    tf: [
      "Thurstone propuso la teoría bifactorial, con un factor general y otro específico.|F|La teoría bifactorial es de Spearman (1904). Thurstone defendió varias aptitudes primarias relativamente independientes.",
      "Guilford aceptaba un factor g en la cúspide de su estructura del intelecto.|F|Guilford rechazó la existencia de g, y sus análisis se criticaron por forzar factores no correlacionados.",
      "Las aptitudes primarias de Thurstone resultaron estar correlacionadas, lo que dejaba espacio a un factor de orden superior.|V",
      "Muchas celdas del modelo de Guilford nunca se confirmaron de forma independiente.|V"
    ],
    q: [
      "Un investigador aplica una batería amplia y obtiene un perfil de siete aptitudes, entre ellas fluidez verbal y velocidad perceptiva. ¿Qué modelo sigue?|El de Thurstone|El de Spearman|El de Guilford|Las siete Aptitudes Mentales Primarias, con fluidez verbal y velocidad perceptiva, son el modelo de Thurstone (1938).",
      "Pedir a alguien que piense todos los usos posibles de un ladrillo evalúa sobre todo…|la producción divergente|la producción convergente|la evaluación de productos|Generar muchas respuestas a un problema abierto es la producción divergente, una de las operaciones de Guilford.",
      "¿Qué modelo reconcilió las posturas de Spearman y Thurstone mediante una jerarquía?|El de Vernon (1950)|El de Guilford (1967)|El de Gardner (1983)|Vernon situó g en la cúspide y factores de grupo debajo, una organización que anticipa a Carroll y al CHC.",
      "En el modelo de Guilford, «semántico» y «conductual» son…|contenidos|operaciones|productos|Los contenidos son figurativo, simbólico, semántico y conductual, e indican sobre qué material trabaja la mente."
    ],
    inc: [
      "Sobre los modelos factoriales clásicos|Guilford situó g en la cúspide de su cubo|Spearman explicó las correlaciones con g y s|Vernon anticipó la organización de Carroll|Guilford negó la existencia de g. Quien situó g en la cúspide de una jerarquía fue Vernon."
    ],
    seq: [
      "Modelos factoriales clásicos en orden cronológico|Spearman, teoría bifactorial>Thurstone, aptitudes primarias>Vernon, modelo jerárquico>Guilford, estructura del intelecto"
    ],
    cls: [
      "Dimensión de Guilford|Operaciones: cognición; producción divergente; evaluación|Contenidos: figurativo; simbólico; conductual|Productos: unidades; clases; transformaciones"
    ] },
  { t: "Inteligencia fluida y cristalizada, Carroll y el modelo CHC",
    tip: "Cattell (1963) separó la inteligencia fluida (Gf), razonar ante lo nuevo, de la cristalizada (Gc), lo adquirido por la cultura y la educación. La Gf declina desde la juventud y la Gc se mantiene o crece. Carroll (1993) reanalizó más de 460 conjuntos de datos y propuso tres estratos, y McGrew integró ambas propuestas en el modelo CHC, hoy marco de referencia de las baterías.",
    v: [
      "Inteligencia fluida=Razonar ante problemas nuevos, con poca dependencia de lo aprendido",
      "Inteligencia cristalizada=Conocimientos y destrezas adquiridos mediante la cultura y la educación",
      "Teoría de la inversión=La Gf se emplea en experiencias de aprendizaje y produce Gc",
      "Estrato III=Nivel superior del modelo de Carroll, ocupado por el factor general",
      "Estrato I=Decenas de capacidades estrechas y muy específicas",
      "Modelo CHC=Integración de Cattell, Horn y Carroll propuesta por McGrew",
      "Gwm=Capacidad amplia de memoria de trabajo, como repetir dígitos en orden inverso",
      "Gl y Gr=Eficiencia del aprendizaje y fluidez de recuperación, separadas en 2018"
    ],
    g: [
      "Según Cattell, la Gf alcanza su máximo en la ___ y declina después.|juventud|infancia|madurez",
      "Carroll reanalizó con un mismo procedimiento más de ___ conjuntos de datos.|460|160|1.000",
      "En el modelo CHC, reproducir un diseño con cubos es una tarea típica de ___.|Gv|Gf|Gs",
      "La revisión del CHC de Schneider y ___ (2018) dividió el almacenamiento y la recuperación a largo plazo.|McGrew|Carroll|Horn",
      "Horn amplió el modelo Gf-Gc con otras capacidades amplias y se mostró ___ ante la existencia de g.|escéptico|favorable|indiferente"
    ],
    tf: [
      "La inteligencia cristalizada declina desde la juventud, mientras que la fluida se mantiene hasta edades avanzadas.|F|Es al revés: la Gf declina desde la juventud y la Gc se mantiene o sigue creciendo.",
      "El modelo de Carroll mantiene g en la cúspide y recoge la distinción Gf-Gc.|V",
      "Que g sea una capacidad real y no un resumen estadístico es una cuestión ya resuelta por el modelo CHC.|F|Sigue en debate si g es una capacidad real o un resumen de correlaciones, aunque eso no impide el uso práctico del modelo.",
      "Los cinco índices primarios del WISC-V se corresponden a grandes rasgos con Gc, Gv, Gf, Gwm y Gs.|V"
    ],
    q: [
      "Un hombre de setenta años tarda más que su nieto en entender un videojuego nuevo, pero le gana con facilidad en un crucigrama. ¿Qué patrón ilustra?|Gf menor con Gc conservada|Gc menor con Gf conservada|Descenso parejo de Gf y Gc|La Gf declina con la edad, y la Gc, basada en conocimientos, se mantiene o crece.",
      "¿Qué ocupa el estrato II del modelo de Carroll?|Unas pocas capacidades amplias|El factor general g|Decenas de capacidades estrechas|El estrato III es g, el II reúne capacidades amplias como Gf o Gc, y el I, capacidades estrechas.",
      "Una prueba pide decir palabras de una categoría. ¿Qué capacidad amplia del CHC evalúa sobre todo?|Gr|Gl|Gc|Decir palabras de una categoría es fluidez de recuperación (Gr). Gl es eficiencia del aprendizaje, como aprender pares asociados.",
      "¿Por qué se considera el CHC el marco de referencia actual?|Ofrece una taxonomía común de capacidades|Demuestra que g es una capacidad real|Sustituye la jerarquía por factores independientes|Sirve de vocabulario común para construir, interpretar y comparar baterías distintas."
    ],
    inc: [
      "Sobre la Gf y la Gc|La Gc se evalúa sobre todo con series y matrices|La Gf depende poco de la escolarización|La Gc se evalúa con vocabulario o información|Series y matrices evalúan la inteligencia fluida. La cristalizada se mide con vocabulario, información o comprensión."
    ],
    seq: [
      "Del modelo Gf-Gc al CHC|Cattell, Gf y Gc (1963)>Carroll, tres estratos (1993)>McGrew, modelo CHC (1997)>Schneider y McGrew, revisión (2018)"
    ],
    cls: [
      "Tipo de inteligencia|Fluida (Gf): series; matrices; declina con la edad|Cristalizada (Gc): vocabulario; información; se mantiene con la edad"
    ] },
  { t: "Teorías alternativas: Gardner, Sternberg e inteligencia emocional",
    tip: "Gardner (1983) propuso ocho inteligencias autónomas, pero no creó instrumentos estandarizados y las de contenido académico saturan en g. Sternberg distingue inteligencia analítica, creativa y práctica en su teoría triárquica. La inteligencia emocional puede entenderse como capacidad, medida con tareas como el MSCEIT, o como rasgo medido por autoinforme, y su validez incremental sigue en discusión.",
    v: [
      "Inteligencias múltiples=Teoría de Gardner (1983) de varias inteligencias con bastante autonomía",
      "Inteligencia naturalista=Octava capacidad que Gardner añadió a sus siete propuestas iniciales",
      "Subteoría componencial=Faceta analítica: procesos para analizar, comparar y evaluar",
      "Subteoría experiencial=Faceta creativa: afrontar lo nuevo y automatizar lo conocido",
      "Subteoría contextual=Faceta práctica: adaptarse al entorno, modificarlo o elegir otro",
      "Inteligencia exitosa=Lograr las propias metas en un contexto equilibrando las tres facetas",
      "MSCEIT=Tarea de rendimiento con respuestas mejores y peores que mide la IE como capacidad",
      "Modelo mixto=Propuesta de Goleman que suma capacidades, rasgos y competencias sociales"
    ],
    g: [
      "Para identificar las inteligencias, Gardner usó criterios como las ___ cerebrales que afectan a una capacidad aislada.|lesiones|activaciones|asimetrías",
      "Visser, Ashton y Vernon (2006) hallaron que las inteligencias de contenido académico saturan en ___.|g|Gc|s",
      "Saber cómo tratar con un jefe difícil ilustra la inteligencia ___ de Sternberg.|práctica|analítica|creativa",
      "El modelo de cuatro ramas de la inteligencia emocional es de Salovey y ___.|Mayer|Goleman|Gardner",
      "La IE medida por autoinforme se solapa mucho con la estabilidad emocional y la ___.|extraversión|amabilidad|apertura"
    ],
    tf: [
      "La teoría de las inteligencias múltiples está avalada por la independencia empírica de las ocho inteligencias.|F|No tiene validación sólida (Waterhouse, 2006): las inteligencias académicas correlacionan entre sí y saturan en g.",
      "Enseñar a cada alumno en su estilo de aprendizaje preferido mejora su rendimiento.|F|No hay pruebas de esa mejora (Pashler et al., 2008), aunque la idea suele mezclarse con las inteligencias múltiples.",
      "Las medidas de Sternberg no han demostrado la independencia de g que se esperaba.|V",
      "El modelo de capacidad de la IE se mide con tareas que tienen respuestas mejores y peores.|V"
    ],
    q: [
      "Una orientadora quiere elaborar para cada alumno un perfil de ocho inteligencias independientes, siguiendo a Gardner. ¿Qué cabe objetar?|Falta validación empírica sólida|Gardner usó solo análisis factorial|Las ocho inteligencias son de rasgo|Gardner no creó instrumentos estandarizados, y las inteligencias académicas correlacionan entre sí y saturan en g.",
      "Improvisar una solución cuando falla el plan corresponde a la subteoría…|experiencial|componencial|contextual|La experiencial es la faceta creativa, afrontar lo nuevo. La componencial es analítica, y la contextual, práctica.",
      "Un cuestionario pide a las personas valorar cómo perciben y manejan sus emociones. ¿Qué concepción de la IE adopta?|De rasgo|De capacidad|Componencial|El autoinforme mide la IE como rasgo, es decir, cómo se percibe cada uno. El MSCEIT la mide como capacidad.",
      "¿Qué se discute sobre la inteligencia emocional?|Si añade algo a g y a la personalidad|Si incluye la percepción de emociones|Si Goleman popularizó el término|La validez incremental de la IE sobre g y los rasgos sigue en discusión, sobre todo cuando se mide por autoinforme."
    ],
    inc: [
      "Sobre las teorías alternativas|El MSCEIT pertenece al modelo mixto de Goleman|Sternberg amplió su teoría como inteligencia exitosa|Gardner añadió después la inteligencia naturalista|El MSCEIT es una tarea de rendimiento del modelo de capacidad de Mayer y Salovey. El de Goleman es mixto."
    ],
    seq: [],
    cls: [
      "Subteoría de Sternberg|Componencial: analítica; detectar el fallo de un argumento|Experiencial: creativa; improvisar cuando falla el plan|Contextual: práctica; tratar con un jefe difícil"
    ] }
] },
{ n: 6, t: "Historia de la medición de la inteligencia y efecto Flynn", cap: 2, pir: "media", mods: [
  { t: "De Galton a Binet y Simon",
    tip: "Galton abrió en 1884 un laboratorio antropométrico que medía los sentidos y el tiempo de reacción, y J. M. Cattell llevó esas pruebas a EE. UU., pero apenas predecían el rendimiento escolar (Wissler, 1901). Binet midió en cambio procesos complejos y con Simon publicó en 1905 la primera escala de inteligencia. Las revisiones de 1908 y 1911 introdujeron la edad mental. Binet no inventó el CI.",
    v: [
      "Laboratorio antropométrico=Centro de Galton (1884) que medía sentidos, fuerza y tiempo de reacción",
      "Francis Galton=Primo de Darwin que defendió la herencia de la capacidad intelectual",
      "James McKeen Cattell=Llevó las mediciones de Galton a EE. UU. y popularizó «test mental»",
      "Wissler (1901)=Mostró que las pruebas sensoriales apenas predecían el rendimiento académico",
      "Escala Binet-Simon=Primera escala de inteligencia (1905), con tareas de dificultad creciente",
      "Edad mental=Nivel de edad que corresponde al rendimiento de un niño en la escala",
      "Théodore Simon=Colaborador de Binet en la escala de 1905",
      "Wundt (1879)=Fundó en Leipzig el primer laboratorio de psicología experimental"
    ],
    g: [
      "La hipótesis de Galton era que una mente capaz debía tener sentidos más finos y reacciones más ___.|rápidas|intensas|variadas",
      "Galton aportó a la metodología la idea de ___ y el uso de la distribución normal.|correlación|significación|aleatorización",
      "El Gobierno francés quería identificar a los escolares que necesitaban educación ___.|especial|superior|técnica",
      "En las revisiones de 1908 y 1911, las tareas se agruparon por niveles de ___.|edad|contenido|curso",
      "Binet consideraba que la inteligencia podía ___ con la enseñanza adecuada.|mejorar|estancarse|reducirse"
    ],
    tf: [
      "Binet inventó el cociente intelectual para resumir la inteligencia en una sola cifra.|F|Binet trabajó con la edad mental y desconfiaba de reducir la inteligencia a una cifra. El cociente llegó con Stern y Terman.",
      "Una niña de ocho años que resuelve las tareas propias de los diez tiene una edad mental de diez años.|V",
      "Las pruebas sensoriales de J. M. Cattell predijeron bien el rendimiento académico.|F|Apenas se relacionaban con el rendimiento académico, como mostró el estudio de Wissler (1901).",
      "Galton acuñó el término «eugenesia» y la promovió.|V"
    ],
    q: [
      "Un investigador de finales del siglo XIX mide a los visitantes la agudeza visual, la discriminación sensorial y el tiempo de reacción para estimar su capacidad intelectual. ¿A qué tradición pertenece?|A la de Galton|A la de Binet|A la de Stern|Galton y J. M. Cattell midieron procesos sensoriales y motores simples. Binet midió procesos mentales superiores.",
      "¿Con qué finalidad se creó la escala Binet-Simon?|Detectar necesidades educativas|Estudiar la herencia intelectual|Clasificar reclutas del ejército|El Gobierno francés quería identificar a los escolares que no avanzaban con la enseñanza ordinaria.",
      "¿Por qué fracasó en lo esencial el proyecto de Galton y J. M. Cattell?|Medía procesos demasiado elementales|Sus pruebas eran de aplicación colectiva|Exigía comparar con la edad mental|Las pruebas sensoriales y de rapidez apenas se relacionaban con el rendimiento académico (Wissler, 1901).",
      "¿Qué procesos consideraba Binet que expresaban la inteligencia?|Comprender, juzgar y razonar|Discriminar estímulos con rapidez|Reaccionar ante un sonido|Binet pensaba que la inteligencia se manifiesta en procesos complejos, como comprender, juzgar y razonar."
    ],
    inc: [
      "Sobre Binet y Simon|Veían la escala como medida de algo fijo|Ordenaron las tareas por dificultad creciente|Introdujeron la edad mental en sus revisiones|Binet creía que la inteligencia podía mejorar con la enseñanza y no veía su escala como medida de algo fijo e innato."
    ],
    seq: [
      "Etapa fundacional de la medición de la inteligencia|Laboratorio de Wundt en Leipzig>Laboratorio antropométrico de Galton>Estudio de Wissler>Escala de Binet y Simon>Revisiones por niveles de edad"
    ],
    cls: [
      "Tradición|Galton y J. M. Cattell: procesos sensoriales; tiempo de reacción; herencia de la capacidad|Binet y Simon: procesos superiores; necesidades educativas; edad mental"
    ] },
  { t: "Expansión: CI, tests colectivos y CI de desviación",
    tip: "Stern (1912) propuso dividir la edad mental entre la cronológica, y Terman (1916) multiplicó el cociente por 100 en el Stanford-Binet. Ese CI de razón fallaba en adultos y su dispersión variaba con la edad. En 1917 llegaron los tests colectivos Army Alpha y Beta, y Wechsler (1939) introdujo el CI de desviación, con media 100 y DT 15 respecto al propio grupo de edad.",
    v: [
      "CI de razón=Edad mental entre edad cronológica, multiplicado por 100",
      "Stern (1912)=Propuso dividir la edad mental entre la edad cronológica",
      "Terman (1916)=Multiplicó el cociente por 100 en su adaptación estadounidense de Binet",
      "Army Alpha=Test colectivo verbal del ejército de EE. UU. (1917)",
      "Army Beta=Test colectivo no verbal para reclutas que no leían o no dominaban el inglés",
      "Arthur Otis=Alumno de Terman que desarrolló formatos colectivos de respuesta cerrada",
      "CI de desviación=Posición respecto al propio grupo de edad, con media 100 y DT 15",
      "Wechsler-Bellevue=Escala de 1939 que introdujo la puntuación respecto a la misma edad"
    ],
    g: [
      "Un niño de diez años con una edad mental de doce obtiene un CI de razón de ___.|120|83|112",
      "El comité que elaboró los tests del ejército en 1917 lo dirigió ___.|Yerkes|Terman|Wechsler",
      "En adultos, el CI de razón ___ artificialmente porque la edad mental deja de crecer.|baja|sube|oscila",
      "Con el CI de desviación, quien está una DT por encima de la media de su edad obtiene ___.|115|110|116",
      "Terman multiplicó el cociente por 100 para evitar los ___.|decimales|negativos|empates"
    ],
    tf: [
      "Terman propuso el cociente entre edad mental y cronológica, y Stern lo multiplicó por 100.|F|Es al revés: Stern (1912) propuso el cociente, y Terman (1916) lo multiplicó por 100 en el Stanford-Binet.",
      "Con el CI de razón, un mismo valor no indicaba la misma posición relativa a todas las edades.|V",
      "El Army Beta era la versión verbal para reclutas con buen dominio del inglés.|F|El Beta era no verbal, para quienes no sabían leer o no dominaban el inglés. El Alpha era el verbal.",
      "Los resultados de los tests del ejército se usaron para apoyar políticas de restricción de la inmigración.|V"
    ],
    q: [
      "Una mujer de 60 años y un chico de 10 se sitúan ambos una DT por encima de la media de su grupo de edad. ¿Qué CI de desviación obtienen?|115 los dos|115 ella y 130 él|Depende de su edad mental|El CI de desviación compara con la propia edad, y una DT por encima equivale a 115 a cualquier edad.",
      "¿Qué problema del CI de razón resolvió el CI de desviación?|Que bajara artificialmente en adultos|Que exigiera aplicación individual|Que no usara la edad cronológica|Al comparar con la misma edad y no con la edad mental, la puntuación ya no desciende al estancarse la edad mental.",
      "¿Qué necesidad impulsó los primeros tests colectivos?|Clasificar con rapidez a reclutas|Detectar escolares con dificultades|Medir la herencia de la capacidad|La entrada de EE. UU. en la Primera Guerra Mundial obligó a clasificar a un número enorme de reclutas.",
      "Un niño de 8 años tiene una edad mental de 6. ¿Qué CI de razón le corresponde?|75|133|80|6 entre 8, por 100, da 75. El 133 resulta de invertir el cociente."
    ],
    inc: [
      "Sobre el CI de desviación|Lo introdujo Terman en el Stanford-Binet de 1916|Lo introdujo Wechsler en la Wechsler-Bellevue|Hoy lo usan todas las escalas de inteligencia|Terman incorporó el CI de razón. El CI de desviación lo introdujo Wechsler (1939)."
    ],
    seq: [
      "Hitos de la medición de la inteligencia|Escala Binet-Simon>Cociente de Stern>Stanford-Binet de Terman>Army Alpha y Beta>Matrices de Raven>Wechsler-Bellevue"
    ],
    cls: [
      "Tipo de CI|CI de razón: Stern y Terman; edad mental entre edad cronológica; falla en adultos|CI de desviación: Wechsler; media 100 y DT 15; propio grupo de edad"
    ] },
  { t: "El efecto Flynn y su inversión",
    tip: "Flynn documentó que las puntuaciones brutas de CI subieron de generación en generación durante el siglo XX, unos 2,31 puntos por década según Trahan et al. (2014), sobre todo en razonamiento fluido. Las causas son ambientales. En Noruega subieron hasta la cohorte de 1975 y bajaron después, también entre hermanos. Los baremos antiguos inflan el CI, por eso hay que renormar los tests.",
    v: [
      "Efecto Flynn=Subida de las puntuaciones de CI de generación en generación",
      "Trahan et al. (2014)=Metaanálisis que estimó una ganancia de 2,31 puntos de CI por década",
      "Bratsberg y Rogeberg=Estudio de 2018 con más de 730.000 reclutas noruegos",
      "Inversión del efecto=Freno y descenso de las puntuaciones en cohortes nacidas desde mediados de los setenta",
      "Cohorte de 1975=Punto noruego a partir del cual las puntuaciones empezaron a bajar",
      "Comparación entre hermanos=Prueba de que la inversión no se debe a la composición de la población",
      "Renormar=Elaborar baremos nuevos para no comparar con una generación anterior",
      "Baremo antiguo=Norma desfasada que tiende a sobrestimar el CI actual"
    ],
    g: [
      "Las ganancias del efecto Flynn fueron mayores en tareas de razonamiento ___ que en las de conocimiento.|fluido|verbal|cristalizado",
      "Con las versiones modernas de Wechsler y Stanford-Binet, la ganancia estimada fue de ___ puntos por década.|2,93|2,31|1,99",
      "Con unos 2–3 puntos por década, un baremo de hace quince años puede sobrestimar el CI en torno a ___ puntos.|3–4|8–10|1–2",
      "En Noruega, las puntuaciones subieron hasta la cohorte de ___ y descendieron después.|1975|1962|1991",
      "Si el descenso noruego se debiera a la composición de la población, no aparecería entre ___.|hermanos|cohortes|reclutas"
    ],
    tf: [
      "El efecto Flynn se explica sobre todo por cambios genéticos en la población.|F|Unas pocas décadas no bastan para cambiar el acervo genético. Las explicaciones propuestas son ambientales.",
      "El efecto Flynn indica que las nuevas generaciones son más listas en todos los aspectos.|F|Lo que ha aumentado es el rendimiento en lo que miden los tests, no necesariamente la inteligencia en todo.",
      "Qué factores ambientales explican el efecto Flynn y cuánto pesa cada uno sigue en debate.|V",
      "Como los tests se baremaban cada cierto tiempo, la subida de las puntuaciones pasaba desapercibida.|V"
    ],
    q: [
      "Lucía, de 15 años, obtiene un CI de 72 en un test baremado hace dos décadas. ¿Qué conviene hacer?|Repetir con un test actualizado|Restar a ojo unos cinco puntos|Dar por válido el resultado|Con baremos antiguos el CI tiende a estar inflado. No hay que corregirlo a ojo, sino evaluar con un instrumento actualizado.",
      "¿Qué explicación del efecto Flynn NO figura entre las propuestas?|Cambios en el acervo genético|Mejor nutrición y salud|Más años de escolarización|Unas pocas décadas no bastan para modificar el acervo genético. Nutrición, salud y escolarización son explicaciones ambientales.",
      "¿Por qué la aparición de la inversión entre hermanos indica un origen ambiental?|Excluye cambios en la composición poblacional|Demuestra que los baremos son incorrectos|Prueba que la inversión es genética|Los hermanos comparten familia y origen, así que el cambio entre ellos no se explica por qué grupos tienen más hijos.",
      "En EE. UU., ¿en qué contexto se ha discutido el efecto Flynn por sus consecuencias?|Juicios sobre discapacidad intelectual|Selección de reclutas en la Primera Guerra|Admisión en universidades selectivas|Se ha discutido en procesos judiciales en los que se dirimía si una persona tenía discapacidad intelectual."
    ],
    inc: [
      "Sobre el efecto Flynn|Un baremo antiguo tiende a infraestimar el CI|Obliga a renormar los tests de forma periódica|Su origen es ambiental y no genético|El baremo antiguo compara con una generación que rendía menos, de modo que tiende a inflar el CI."
    ],
    seq: [],
    cls: [] },
  { t: "Críticas, evaluación dinámica y perspectivas futuras",
    tip: "Ningún test está libre de cultura, ni siquiera las matrices, y una heredabilidad alta dentro de un grupo no implica que las diferencias entre grupos sean genéticas. El CI es estable, pero no inmutable: cada año de escolarización añade entre 1 y 5 puntos. La evaluación dinámica de Feuerstein mide el potencial de aprendizaje con test, ayuda mediada y retest, a costa de la estandarización.",
    v: [
      "Evaluación dinámica=Medida del potencial de aprendizaje con test, ayuda mediada y retest",
      "LPAD=Dispositivo de Feuerstein para valorar el potencial de aprendizaje",
      "Zona de desarrollo próximo=Distancia entre lo que alguien hace solo y lo que hace con guía (Vygotsky)",
      "Evaluación estática=Mide lo que la persona hace sola, en un momento dado, sin ayudas",
      "Ritchie y Tucker-Drob=Estimaron de 1 a 5 puntos de CI por año adicional de educación (2018)",
      "Tests adaptativos informatizados=Eligen cada ítem según las respuestas previas y logran precisión con menos ítems",
      "Sesgo cultural=Ventaja en un ítem para quien ha crecido rodeado de ese conocimiento",
      "Mediador activo=Papel del evaluador cuando ofrece ayudas estructuradas durante la prueba"
    ],
    g: [
      "El formato típico de la evaluación dinámica es test, enseñanza y ___.|retest|informe|baremo",
      "La evaluación dinámica conecta con la zona de desarrollo próximo de ___.|Vygotsky|Piaget|Feuerstein",
      "El principal inconveniente de la evaluación dinámica es su difícil ___.|estandarización|interpretación|administración",
      "Los tests adaptativos informatizados se basan en la teoría de ___ al ítem.|respuesta|ajuste|selección",
      "El CI es uno de los rasgos psicológicos más estables a partir de la ___.|adolescencia|infancia|vejez"
    ],
    tf: [
      "Un ítem de información general mide lo mismo en cualquier persona, con independencia del entorno en que haya crecido.|F|Favorece a quien ha crecido rodeado de ese conocimiento: es el sesgo cultural que llevó a buscar pruebas de menor carga cultural.",
      "Una heredabilidad alta dentro de un grupo implica que las diferencias entre grupos son genéticas.|F|No lo implica, ni tampoco que el CI sea inmodificable.",
      "En la evaluación dinámica, el evaluador actúa como mediador activo.|V",
      "Cada año adicional de escolarización se asocia con una ganancia estimada de entre 1 y 5 puntos de CI.|V"
    ],
    q: [
      "Un niño recién llegado de otro país, con escasa escolarización, obtiene una puntuación baja en un test clásico. ¿Qué alternativa informa mejor de su capacidad para aprender?|La evaluación dinámica|Un test adaptativo informatizado|Repetir el mismo test en grupo|La evaluación dinámica mide cuánto mejora con ayuda y es especialmente útil con personas de escasa escolarización o de otra cultura.",
      "¿Qué pregunta responde la evaluación estática?|Qué sabe hacer ahora la persona|Cuánto puede mejorar con ayuda|Qué tipo de ayuda le funciona|La estática mide lo que la persona hace sola en un momento dado. Las otras dos preguntas son propias de la evaluación dinámica.",
      "¿Qué ventaja tienen los tests adaptativos informatizados?|Igual precisión con menos ítems|Eliminan la carga cultural|Garantizan quién responde en línea|Eligen cada ítem según las respuestas anteriores y logran la misma precisión con menos preguntas.",
      "¿Cuál ha sido una respuesta de la psicometría al sesgo cultural?|Comprobar si un ítem funciona igual entre grupos|Eliminar de los tests todos los ítems verbales|Sustituir los tests por entrevistas abiertas|Se desarrollaron pruebas con menor carga cultural y se estudia con métodos estadísticos si cada ítem funciona igual en grupos distintos."
    ],
    inc: [
      "Sobre la evaluación dinámica|Su gran ventaja es la facilidad para estandarizarla|Su formato típico es test, enseñanza y retest|Su resultado es la ganancia y la ayuda que funciona|Cuanto más se adapta la ayuda a cada persona, más difícil es comparar resultados y estimar su fiabilidad."
    ],
    seq: [
      "Formato de la evaluación dinámica|Evaluar sin ayudas>Ofrecer una mediación estructurada>Volver a evaluar>Valorar la ganancia obtenida"
    ],
    cls: [
      "Tipo de evaluación|Estática: evaluador neutral; puntuación con baremo; clasificación normativa|Dinámica: mediador activo; ganancia con ayuda; potencial de aprendizaje"
    ] }
] },
{ n: 7, t: "Las escalas de Wechsler", cap: 2, pir: "alta", mods: [
  { t: "Lógica común de las escalas de Wechsler",
    tip: "Todas las escalas de Wechsler son de aplicación individual, con reglas de inicio, retorno y terminación, y usan el CI de desviación. Las puntuaciones van de la directa a la escalar (media 10, DT 3) y a las compuestas (media 100, DT 15), con percentil e intervalo de confianza. Las versiones actuales sustituyen el CI verbal y el manipulativo por índices del modelo CHC, y el CIT es la puntuación más fiable.",
    v: [
      "Puntuación escalar=Puntuación de un subtest normalizada por edad, con media 10 y DT 3",
      "Puntuación compuesta=Suma de escalares expresada con media 100 y DT 15, como índices y CIT",
      "Puntuación directa=Aciertos o puntos obtenidos en un subtest antes de baremar",
      "Regla de retorno=Volver a ítems anteriores si fallan los primeros que se aplican",
      "Regla de terminación=Detener un subtest tras varios errores seguidos",
      "CIT=CI total, la puntuación más fiable y la mejor medida de g",
      "CI manipulativo=Puntuación de ejecución de las primeras escalas, hoy abandonada",
      "Regla de inicio=Punto de partida de cada subtest según la edad de la persona"
    ],
    g: [
      "El WPPSI-IV se aplica desde los ___ años.|2:6|3:0|4:0",
      "Una escalar de 13 tiene el mismo significado que un índice de ___.|115|113|130",
      "Cerca del 68 % de la población puntúa entre 85 y ___.|115|125|110",
      "Una puntuación de 115 corresponde aproximadamente al percentil ___.|84|68|95",
      "La adaptación española vigente del WISC-V es de ___.|2015|2012|2014"
    ],
    tf: [
      "Las escalas de Wechsler pueden aplicarse en grupo con instrucciones escritas.|F|Todas son de aplicación individual: un examinador lee las preguntas, cronometra y anota las respuestas literalmente.",
      "En las versiones actuales se mantiene la división entre CI verbal y CI manipulativo.|F|Se abandonó: los subtests se organizan en índices que se corresponden con aptitudes amplias del modelo CHC.",
      "Una puntuación de 70 está dos DT por debajo de la media y la superan cerca del 98 % de las personas de esa edad.|V",
      "La aplicación individual permite observar si la persona se precipita o abandona ante la dificultad.|V"
    ],
    q: [
      "Durante un subtest, un adolescente falla los primeros ítems que le corresponden por su edad. ¿Qué regla aplica el examinador?|La de retorno|La de terminación|La de inicio|Si fallan los primeros ítems se vuelve a ítems anteriores. La de terminación se aplica tras varios errores seguidos.",
      "¿Qué orden siguen las puntuaciones en una escala de Wechsler?|Directa, escalar, compuesta|Escalar, directa, compuesta|Directa, compuesta, escalar|La directa se convierte en escalar por edad, y las escalares se suman en índices y CIT, con percentil e intervalo.",
      "¿Qué puntuación de Wechsler es la más fiable y representa mejor g?|El CI total|El índice de comprensión verbal|La puntuación escalar más alta|El CIT reúne más ítems que cualquier índice o subtest y es la mejor medida de g.",
      "Una mujer obtiene una escalar de 7 en un subtest. ¿Cómo se interpreta?|Una DT por debajo de la media|Dos DT por debajo de la media|En torno a la media de su edad|Con media 10 y DT 3, una escalar de 7 está una DT por debajo, igual que un índice de 85."
    ],
    inc: [
      "Sobre la lógica común de las escalas de Wechsler|Las puntuaciones compuestas tienen media 10 y DT 3|Cada subtest tiene reglas de inicio y terminación|Organizan los índices según el modelo CHC|Media 10 y DT 3 es la métrica de las escalares. Las compuestas tienen media 100 y DT 15."
    ],
    seq: [
      "Secuencia de puntuaciones|Puntuación directa>Puntuación escalar>Puntuaciones compuestas>Percentil e intervalo de confianza"
    ],
    cls: [
      "Métrica|Escalar: subtests; media 10; DT 3|Compuesta: índices y CIT; media 100; DT 15"
    ] },
  { t: "WAIS-IV y WAIS-5",
    tip: "La WAIS-IV (16 a 89 años, adaptación española de 2012) tiene cuatro índices, CV, RP, MT y VP, con 10 subtests principales y 5 opcionales, y ofrece el ICG, que usa solo CV y RP. La WAIS-5 (EE. UU., 2024) divide el Razonamiento Perceptivo en Visoespacial y Razonamiento Fluido y pasa a cinco índices primarios. En España sigue usándose la WAIS-IV, con normas de más de una década.",
    v: [
      "Razonamiento Perceptivo=Índice de la WAIS-IV con Cubos, Matrices y Puzles visuales",
      "ICG=Índice de Capacidad General, calculado solo con subtests de CV y RP",
      "Subtest opcional=Sustituye a uno principal que no puede aplicarse o queda invalidado",
      "Memoria de Trabajo=Índice de la WAIS-IV con Dígitos y Aritmética como principales",
      "Velocidad de Procesamiento=Índice con Búsqueda de símbolos y Claves, y Cancelación como opcional",
      "Comprensión Verbal=Índice con Semejanzas, Vocabulario e Información, y Comprensión opcional",
      "WAIS-5=Escala de adultos de 2024 con cinco índices primarios, de 16:0 a 90:11 años",
      "Índices auxiliares=Quince agrupaciones de subtests de la WAIS-5 para preguntas concretas"
    ],
    g: [
      "La WAIS-IV tiene 10 subtests principales y ___ opcionales.|5|4|6",
      "Balanzas y Figuras incompletas son subtests opcionales del índice de ___.|Razonamiento Perceptivo|Velocidad de Procesamiento|Comprensión Verbal",
      "En la WAIS-IV, Letras y números es un subtest opcional de ___.|Memoria de Trabajo|Velocidad de Procesamiento|Comprensión Verbal",
      "En la WAIS-5, el CIT se calcula con ___ subtests, según la editorial.|7|10|5",
      "La WAIS-5 cubre de los 16:0 a los ___ años.|90:11|89:11|85:11"
    ],
    tf: [
      "La WAIS-IV tiene cinco índices primarios, igual que el WISC-V.|F|Tiene cuatro: CV, RP, MT y VP. Los cinco son del WISC-V, del WPPSI-IV desde los 4:0 y de la WAIS-5.",
      "El ICG depende menos de la memoria de trabajo y de la rapidez que el CIT.|V",
      "La composición exacta del CIT de la WAIS-5 está ya confirmada en el manual técnico.|F|Está pendiente de confirmar, y los nombres españoles de los subtests nuevos aún no tienen traducción oficial.",
      "Las normas antiguas de la WAIS-IV tienden a inflar el CI, algo relevante cerca de un punto de corte.|V"
    ],
    q: [
      "Tras un ictus, un hombre de 45 años obtiene un CIT de 88, con CV de 108 y VP de 76. ¿Qué puntuación refleja mejor su razonamiento?|El ICG|El CIT|La VP|El ICG no incluye la velocidad, así que refleja mejor su razonamiento. La VP señala una lentitud que conviene explorar.",
      "Una persona con temblor no puede manipular los cubos al aplicarle la WAIS-IV. ¿Qué se hace?|Sustituirlo por un subtest opcional|Calcular el CIT con nueve subtests|Pasar directamente a la WAIS-5|Los subtests opcionales sustituyen a uno principal que no puede aplicarse o queda invalidado.",
      "¿Qué cambio estructural introduce la WAIS-5?|Divide el Razonamiento Perceptivo en dos|Recupera el CI verbal y el manipulativo|Elimina la Velocidad de Procesamiento|Lo divide en Visoespacial y Razonamiento Fluido, igual que ya hacía el WISC-V.",
      "¿Con qué subtests se calcula el CIT de la WAIS-IV?|Con los 10 principales|Con los 7 de la batería primaria|Con los 15, principales y opcionales|Se obtiene con los 10 principales. El cálculo con 7 subtests corresponde al WISC-V y, según la editorial, a la WAIS-5."
    ],
    inc: [
      "Sobre la WAIS-IV|Su ICG incluye Memoria de Trabajo|Se aplica de los 16 a los 89 años|Su adaptación española es de 2012|El ICG se calcula solo con los subtests de Comprensión Verbal y Razonamiento Perceptivo."
    ],
    seq: [],
    cls: [
      "Índice de la WAIS-IV|Comprensión Verbal: Semejanzas; Vocabulario; Información|Memoria de Trabajo: Dígitos; Aritmética; Letras y números|Velocidad de Procesamiento: Búsqueda de símbolos; Claves; Cancelación"
    ] },
  { t: "WISC-V y WPPSI-IV",
    tip: "El WISC-V (6:0 a 16:11) fue la primera escala con cinco índices primarios de dos subtests cada uno, calcula el CIT con 7 subtests y añade cinco índices secundarios. El WPPSI-IV (2:6 a 7:7) tiene tres índices primarios hasta los 3:11 y cinco desde los 4:0. En las edades que se solapan se elige la escala con más suelo si se espera un rendimiento bajo, y la de más techo si se sospechan altas capacidades.",
    v: [
      "Visoespacial=Índice del WISC-V con Cubos y Puzles visuales",
      "Razonamiento Fluido=Índice del WISC-V con Matrices y Balanzas",
      "Span de dibujos=Subtest de Memoria de Trabajo del WISC-V, junto a Dígitos",
      "Índice No Verbal=Reduce las demandas de lenguaje expresivo, útil con trastornos del lenguaje",
      "Competencia Cognitiva=Índice secundario que reúne memoria de trabajo y velocidad",
      "Capacidad General=Índice secundario equivalente al ICG de la WAIS-IV",
      "Suelo=Capacidad de discriminar en los niveles bajos gracias a ítems fáciles",
      "Techo=Capacidad de discriminar en los niveles altos gracias a ítems difíciles"
    ],
    g: [
      "El WISC-V obtiene el CIT con ___ subtests.|7|10|5",
      "El WPPSI-IV tiene en total ___ subtests.|15|10|20",
      "En el tramo de 2:6 a 3:11, el WPPSI-IV tiene ___ índices primarios.|3|4|5",
      "Entre los 6:0 y los 7:7 años pueden aplicarse el WPPSI-IV y el ___.|WISC-V|WAIS-IV|WAIS-5",
      "Para un niño con sospecha de altas capacidades conviene la escala con más ___.|techo|suelo|índices"
    ],
    tf: [
      "El WPPSI-IV cubre hasta los 6:0 años, edad en la que empieza el WISC-V.|F|El WPPSI-IV llega a los 7:7 y el WISC-V empieza a los 6:0, de modo que se solapan entre ambas edades.",
      "El índice de Memoria de Trabajo del WISC-V está formado por Dígitos y Span de dibujos.|V",
      "Una diferencia entre Capacidad General y Competencia Cognitiva diagnostica por sí sola un trastorno de aprendizaje.|F|Ese patrón no diagnostica nada por sí solo, aunque orienta la evaluación y las adaptaciones escolares.",
      "El WPPSI-IV tiene dos tramos de edad porque la capacidad de los más pequeños está menos diferenciada.|V"
    ],
    q: [
      "Hugo tiene 6 años y 10 meses, y su tutora sospecha un retraso en el desarrollo. ¿Qué escala conviene?|El WPPSI-IV, por su mayor suelo|El WISC-V, por su mayor techo|La WAIS-IV, por su mayor rango|En el solapamiento, la escala de menor edad tiene más ítems fáciles y discrimina mejor en la parte baja.",
      "Un niño de 9 años con un trastorno del lenguaje va a ser evaluado con el WISC-V. ¿Qué índice secundario es especialmente útil?|No Verbal|Competencia Cognitiva|Memoria de Trabajo Auditiva|El índice No Verbal reduce al mínimo las demandas de lenguaje expresivo.",
      "¿Qué subtests forman el índice de Razonamiento Fluido del WISC-V?|Matrices y Balanzas|Cubos y Puzles visuales|Dígitos y Span de dibujos|Cubos y Puzles visuales forman el índice Visoespacial, y Dígitos y Span de dibujos, el de Memoria de Trabajo.",
      "Una niña razona muy bien, pero rinde peor en clase porque procesa con lentitud. ¿Qué comparación del WISC-V lo pone de relieve?|Capacidad General frente a Competencia Cognitiva|Comprensión Verbal frente a Razonamiento Fluido|No Verbal frente a Razonamiento Cuantitativo|Capacidad General refleja el razonamiento, y Competencia Cognitiva reúne memoria de trabajo y velocidad de procesamiento."
    ],
    inc: [
      "Sobre el WISC-V|Su CIT usa los 10 subtests primarios|Cada índice primario tiene dos subtests|Evalúa de los 6:0 a los 16:11 años|El CIT del WISC-V se obtiene con 7 subtests, y no con los 10 de los índices primarios."
    ],
    seq: [],
    cls: [
      "Índice primario del WISC-V|Visoespacial: Cubos; Puzles visuales|Razonamiento Fluido: Matrices; Balanzas|Memoria de Trabajo: Dígitos; Span de dibujos"
    ] },
  { t: "Interpretación por niveles y errores frecuentes",
    tip: "Las escalas de Wechsler se interpretan de lo general a lo particular: CIT, índices, discrepancias, puntos fuertes y débiles y análisis cualitativo. Una discrepancia debe ser significativa e infrecuente, y aun así no es por sí sola un signo clínico. Con discrepancias grandes, el CIT deja de ser un buen resumen. La discapacidad intelectual exige además limitaciones adaptativas, y siempre conviene usar el intervalo de confianza.",
    v: [
      "Comparación ipsativa=Cada puntuación frente a la media de la propia persona",
      "Discrepancia significativa=Diferencia que supera lo esperable por el error de medida",
      "Discrepancia infrecuente=Diferencia poco habitual en la muestra normativa",
      "Análisis cualitativo=Último nivel: tipo de errores, estrategias y conducta durante la prueba",
      "Funcionamiento adaptativo=Ámbito cuyas limitaciones exigen el DSM-5-TR y la CIE-11 además del CI",
      "Intervalo de confianza=Rango de valores compatible con la puntuación, dado el error de medida",
      "Perfil de índices=Descripción preferible al CIT cuando hay discrepancias grandes",
      "Puntos fuertes y débiles=Nivel interpretativo que compara cada índice con la media personal"
    ],
    g: [
      "Cuanto más general es una puntuación, más ítems la sostienen y más ___ es.|fiable|breve|específica",
      "Si un índice reúne subtests muy dispares, deja de representar una capacidad ___.|unitaria|general|estable",
      "Un CIT de 72 puede ser compatible con valores por encima y por debajo de ___.|70|85|75",
      "El CIT es la puntuación que mejor predice criterios como el rendimiento ___.|académico|emocional|motor",
      "Una lengua materna distinta o un déficit ___ pueden bajar puntuaciones que no miden lo que pretenden.|sensorial|cognitivo|intelectual"
    ],
    tf: [
      "Una discrepancia estadísticamente significativa entre índices es por sí misma un signo clínico.|F|Muchas personas sin ningún problema muestran diferencias notables. Hay que valorar también si es infrecuente.",
      "Un perfil de subtests basta para diagnosticar un trastorno.|F|Los subtests son menos fiables que los índices, y un perfil de subtests no basta para diagnosticar.",
      "La comparación ipsativa dice qué hace mejor o peor una persona respecto a sí misma.|V",
      "Se discute cuánto aportan los índices más allá del CIT, porque gran parte de la varianza de los subtests se debe a g.|V"
    ],
    q: [
      "Marta, de 34 años, obtiene CV 121, RP 112, MT 95 y VP 79, con un CIT en torno a 102. ¿Cómo debe informarse?|Describir el perfil y apoyarse en el ICG|Presentar el CIT como capacidad media|Repetir la escala de forma colectiva|Con discrepancias tan grandes, el CIT promedia capacidades muy distintas. El perfil y el ICG reflejan mejor su razonamiento.",
      "Un joven obtiene un CIT de 68. ¿Qué falta para valorar una discapacidad intelectual?|Evaluar el funcionamiento adaptativo|Aplicar un test colectivo de cribado|Calcular los puntos fuertes ipsativos|El DSM-5-TR y la CIE-11 exigen también limitaciones adaptativas con inicio en el desarrollo.",
      "¿Cuál es el primer nivel de interpretación de una escala de Wechsler?|El CIT con su intervalo|Las discrepancias entre índices|El análisis de los errores|Se empieza por el CIT, con su intervalo de confianza y su percentil, y se avanza hacia lo particular.",
      "¿Qué condiciones debe cumplir una discrepancia entre índices para tenerla en cuenta?|Ser significativa e infrecuente|Superar los 15 puntos sin más|Aparecer en la VP y la MT|Debe superar lo esperable por el error de medida y ser poco habitual en la muestra normativa."
    ],
    inc: [
      "Sobre la interpretación de Wechsler|El análisis cualitativo es el primer nivel|La comparación ipsativa usa la media personal|Los baremos antiguos tienden a inflar el CI|Se empieza por el CIT, y el análisis cualitativo es el último nivel."
    ],
    seq: [
      "Niveles de interpretación|CIT>Índices>Discrepancias entre índices>Puntos fuertes y débiles>Análisis cualitativo"
    ],
    cls: [] }
] },
{ n: 8, t: "Otros tests de inteligencia y tests de aptitudes", cap: 2, pir: "media", mods: [
  { t: "Matrices de Raven y tests de dominós",
    tip: "Las matrices de Raven (1938) son el prototipo de medida de Gf y g: matrices incompletas de dificultad progresiva, sin lectura ni lenguaje. Son un test de poder y admiten aplicación individual o colectiva. No están libres de cultura, como muestran las grandes ganancias del efecto Flynn en este tipo de pruebas. Los dominós, como el D-48 y el D-70, son medidas no verbales de g con más peso numérico.",
    v: [
      "Test de poder=Mide el nivel de dificultad alcanzado, no la rapidez",
      "SPM=Matrices Generales, de 60 ítems en cinco series de la A a la E",
      "CPM=Matrices Coloreadas para niños pequeños, mayores y personas con discapacidad",
      "APM=Matrices Avanzadas para capacidad alta, que evitan el efecto techo",
      "Carga cultural=Grado en que el rendimiento depende de conocimientos y experiencias culturales",
      "D-48=Test de dominós derivado del trabajo de Anstey",
      "Raven 2=Revisión más reciente de las matrices, para distintas edades",
      "Tests de dominós=Series de fichas cuya última está vacía y hay que completar con puntos"
    ],
    g: [
      "La versión SPM de Raven tiene 60 ítems en ___ series.|cinco|seis|cuatro",
      "En los tests de dominós, la persona debe ___ los puntos de la ficha vacía.|escribir|elegir|señalar",
      "Los dominós tienen un componente de razonamiento ___ mayor que las matrices.|numérico|verbal|espacial",
      "En Raven, los primeros ítems se resuelven por percepción de la ___.|forma|regla|serie",
      "Los resultados de Raven suelen expresarse en ___ respecto a baremos de edad.|percentiles|escalares|decatipos"
    ],
    tf: [
      "Raven es un test libre de cultura porque no usa palabras.|F|Su carga cultural es reducida, pero no nula, como demuestran las ganancias del efecto Flynn en tests tipo Raven.",
      "Raven es un test de velocidad en el que importa lo rápido que se trabaja.|F|Es un test de poder: lo que importa es hasta qué dificultad llega la persona.",
      "Las matrices de Raven y los dominós pueden aplicarse de forma individual o colectiva.|V",
      "Un percentil 90 en Raven no informa del vocabulario ni de la memoria de trabajo del candidato.|V"
    ],
    q: [
      "Una empresa quiere evaluar a candidatos de capacidad muy alta y evitar que acierten casi todo. ¿Qué versión de Raven conviene?|Las Avanzadas (APM)|Las Generales (SPM)|Las Coloreadas (CPM)|Las Matrices Avanzadas tienen ítems más difíciles para evitar el efecto techo.",
      "¿Qué dato demuestra mejor que Raven no está libre de cultura?|Las grandes ganancias del efecto Flynn|Su aplicación individual o colectiva|Su formato de elección entre opciones|Subidas tan rápidas, en pocas décadas, solo pueden deberse al ambiente. Un test tan afectado por él no está libre de cultura.",
      "¿Qué miden sobre todo las matrices de Raven?|Gf y g|Gc y g|Gv y Gs|Raven es el prototipo de medida de la inteligencia fluida y del factor g, con material no verbal.",
      "Para evaluar con Raven a una niña de 6 años, ¿qué versión es la más adecuada?|Las Coloreadas (CPM)|Las Generales (SPM)|Las Avanzadas (APM)|Las Coloreadas, con ítems más sencillos y en color, se destinan a niños pequeños, personas mayores y personas con discapacidad."
    ],
    inc: [
      "Sobre los tests de dominós|Se responde eligiendo entre varias opciones|Son medidas no verbales del factor g|Se aplican con un tiempo límite holgado|En los dominós se escriben los puntos de la ficha vacía. Elegir entre opciones es propio de Raven."
    ],
    seq: [],
    cls: [
      "Versión de Raven|SPM: adolescentes y adultos; 60 ítems; series de la A a la E|CPM: niños pequeños; personas mayores; ítems en color|APM: capacidad alta; ítems más difíciles; evitar el efecto techo"
    ] },
  { t: "Stanford-Binet 5, K-BIT y RIAS",
    tip: "El Stanford-Binet 5 (Roid, 2003) cubre de los 2 a los 85 años o más y cruza cinco factores con dos dominios, verbal y no verbal, en 10 subtests. El K-BIT tiene solo vocabulario y matrices, y el RIAS ofrece índices verbal, no verbal y de memoria con pocas demandas motoras. Los tres son individuales, y las pruebas breves sirven para decidir quién necesita una evaluación completa, no para sustituirla.",
    v: [
      "Stanford-Binet 5=Escala individual de Roid (2003) con cinco factores en dos dominios",
      "Dominio no verbal=Mitad del SB5 que valora cada factor sin lenguaje",
      "K-BIT=Test breve de Kaufman con un subtest de vocabulario y otro de matrices",
      "RIAS=Escalas de Reynolds con índices verbal, no verbal, de memoria y global",
      "Prueba breve=Instrumento para cribar o estimar el nivel intelectual, no para diagnosticar",
      "DT 16=Desviación típica del CI del Stanford-Binet desde 1960 hasta la cuarta edición",
      "Cribado=Decidir quién necesita una evaluación completa",
      "Roid (2003)=Autor de la quinta edición del Stanford-Binet"
    ],
    g: [
      "El SB5 combina 5 factores con 2 dominios en un total de ___ subtests.|10|7|15",
      "En el K-BIT, el subtest de matrices se relaciona con la inteligencia ___.|fluida|cristalizada|emocional",
      "Las RIAS fueron adaptadas en España por ___.|TEA|Pearson|CEPE",
      "El SB5 adopta un CI de desviación con media 100 y DT ___.|15|16|10",
      "Por sus ítems muy fáciles y muy difíciles, el SB5 tiene buen suelo y buen ___.|techo|perfil|baremo"
    ],
    tf: [
      "El Stanford-Binet 5 es un test colectivo heredero de los tests del ejército.|F|Es de aplicación individual y heredero de la escala de Binet y Simon revisada por Terman.",
      "Hasta la cuarta edición, el Stanford-Binet usaba un CI de desviación con DT 16.|V",
      "Con el K-BIT se puede describir con fiabilidad un perfil de capacidades.|F|Con dos subtests no se puede describir un perfil ni detectar con fiabilidad discrepancias entre áreas.",
      "Las RIAS reducen las exigencias motoras y de velocidad.|V"
    ],
    q: [
      "Una psicóloga quiere comprobar con rapidez si una paciente puede responder un autoinforme largo. ¿Qué prueba basta?|El K-BIT|La WAIS-IV|El SB5|El K-BIT sirve para cribar. Si el resultado se acercara al límite de la discapacidad intelectual, haría falta una escala completa.",
      "¿Qué ventaja ofrece el diseño del SB5 con personas con dificultades de expresión oral?|Valora cada factor con y sin lenguaje|Se aplica en grupo con hoja de respuestas|Reduce la escala a dos subtests breves|Cada uno de los cinco factores tiene un subtest verbal y otro no verbal.",
      "¿Qué índice ofrece el RIAS que no tiene el K-BIT?|Un índice de memoria|Un índice verbal|Un índice no verbal|El RIAS añade un índice de memoria. El K-BIT ofrece una puntuación verbal, una no verbal y un CI compuesto.",
      "Si un cribado con el K-BIT da un resultado cercano al límite de la discapacidad intelectual, ¿qué procede?|Escala completa y funcionamiento adaptativo|Repetir el mismo K-BIT pasados unos días|Diagnosticar con su CI compuesto sin más|Las pruebas breves deciden quién necesita una evaluación completa. El diagnóstico exige escala completa y conducta adaptativa."
    ],
    inc: [
      "Sobre el Stanford-Binet 5|Cubre de los 6 a los 16 años|Es heredero de la escala de Binet y Simon|Ofrece un CI verbal y un CI no verbal|Cubre una franja de edad muy amplia, de los 2 a los 85 años o más."
    ],
    seq: [],
    cls: [
      "Prueba|Stanford-Binet 5: Roid; cinco factores; dos dominios|K-BIT: Kaufman y Kaufman; vocabulario; matrices|RIAS: Reynolds y Kamphaus; índice de memoria; pocas demandas motoras"
    ] },
  { t: "Tests colectivos: IG-2, Otis y BADyG",
    tip: "Los tests colectivos, nacidos con el Army Alpha y el Beta, usan cuadernillo, tiempo limitado y hoja de respuestas, y un solo aplicador atiende a un aula. Son baratos, pero apenas permiten observar la conducta y dependen de la lectura y la motivación. El IG-2, el Otis y el BADyG son colectivos, y las escalas de Wechsler, el Stanford-Binet y el K-BIT, individuales. Sirven para cribar, no para diagnosticar.",
    v: [
      "Test colectivo=Prueba para muchas personas a la vez, con instrucciones escritas",
      "IG-2=Test de TEA de razonamiento abstracto y verbal, usado en selección y orientación",
      "Otis sencillo=Test de inteligencia general adaptado por TEA en 1958",
      "BADyG=Batería de CEPE organizada en niveles desde infantil hasta bachillerato",
      "Mariano Yela=Participó en la adaptación española del Otis sencillo",
      "Cuadernillo=Soporte de los ítems con instrucciones escritas y ejemplos",
      "Hoja de respuestas=Donde se marcan las respuestas, corregidas con plantilla o por ordenador",
      "Cribado colectivo=Función de un test de grupo antes de una evaluación individual"
    ],
    g: [
      "En los tests colectivos, la dependencia de la lectura es ___ en la mayoría.|alta|baja|nula",
      "El BADyG lo publica ___.|CEPE|TEA|Pearson",
      "El Otis sencillo fue adaptado en España en ___.|1958|1917|1938",
      "La observación de la conducta en un test colectivo es casi ___.|nula|total|plena",
      "El BADyG ofrece una puntuación global y un ___ de aptitudes.|perfil|cociente|baremo"
    ],
    tf: [
      "Las escalas de Wechsler, el Stanford-Binet y el K-BIT son tests colectivos.|F|Son de aplicación individual. El IG-2, el Otis y el BADyG sí se diseñaron para aplicarse en grupo.",
      "En un test colectivo es difícil comprobar la motivación y la comprensión de las instrucciones.|V",
      "La antigüedad del Otis obliga a valorar con cautela sus baremos.|V",
      "Los tests colectivos tienen un coste por persona alto, pero permiten una observación rica de la conducta.|F|Es al revés: su coste por persona es bajo y la observación de la conducta, casi nula."
    ],
    q: [
      "Daniel, de segundo de ESO, obtiene en el BADyG un percentil 15 en las pruebas verbales y un 70 en las espaciales. Tiene dislexia y no terminó ninguna prueba verbal. ¿Qué procede?|Una evaluación individual y oral|Concluir que tiene baja aptitud verbal|Repetir el BADyG con más tiempo de lectura|El resultado colectivo cumplió su función de cribado, pero no sirve como diagnóstico. Una evaluación individual dará una imagen más fiel.",
      "¿Cuál de estas pruebas está pensada desde el principio para la aplicación colectiva?|El IG-2|El K-BIT|El SB5|El IG-2 es colectivo. El K-BIT y el Stanford-Binet 5 son de aplicación individual.",
      "¿Qué evalúa el IG-2?|Razonamiento abstracto y verbal|Vocabulario y matrices|Aptitudes por etapas escolares|El IG-2 de TEA evalúa razonamiento abstracto y verbal. Vocabulario y matrices es el K-BIT, y los niveles escolares, el BADyG.",
      "¿Para qué decisiones resultan más adecuados los tests colectivos?|Cribado, orientación y selección|Diagnóstico de discapacidad intelectual|Análisis cualitativo de errores|Su uso típico es el cribado, la orientación y la selección. El diagnóstico exige una evaluación individual."
    ],
    inc: [
      "Sobre los tests colectivos|Las instrucciones suelen ser orales|Tienen tiempo limitado por prueba|Se corrigen con plantilla o por ordenador|En la mayoría las instrucciones son escritas, y por eso dependen tanto de la lectura."
    ],
    seq: [],
    cls: [
      "Forma de aplicación|Individual: WAIS-IV; Stanford-Binet 5; K-BIT|Colectiva: IG-2; Otis; BADyG|Individual o colectiva: Raven; D-48; D-70"
    ] },
  { t: "Evaluación de aptitudes: DAT-5, FACT y PMA",
    tip: "Una aptitud es una capacidad específica que predice la facilidad para aprender en un ámbito concreto, distinta de la inteligencia general y del rendimiento ya adquirido. Las baterías de aptitudes múltiples comparten grupo normativo y permiten un perfil. El DAT-5 es la más conocida, el FACT de Flanagan se construyó con incidentes críticos y el PMA traslada el modelo de Thurstone. Gran parte de su poder predictivo procede de g.",
    v: [
      "Aptitud=Capacidad específica que predice la facilidad para aprender en un ámbito",
      "Rendimiento=Lo que la persona ya sabe hacer, frente a lo que podrá aprender",
      "Batería de aptitudes múltiples=Pruebas baremadas con el mismo grupo normativo que permiten un perfil",
      "Aptitud académica=Suma de razonamiento verbal y numérico en el DAT",
      "Incidentes críticos=Conductas concretas que distinguen un desempeño eficaz de uno ineficaz",
      "FACT=Pruebas de Flanagan ligadas a elementos concretos del trabajo",
      "PMA=Batería breve de TEA con cinco aptitudes primarias de Thurstone",
      "DAT-5=Batería de Bennett, Seashore y Wesman adaptada por TEA"
    ],
    g: [
      "Flanagan desarrolló el FACT a partir de la selección de tripulaciones de vuelo de las fuerzas ___ estadounidenses.|aéreas|navales|terrestres",
      "El PMA evalúa ___ factores: verbal, espacial, razonamiento, numérico y fluidez verbal.|cinco|siete|seis",
      "La suma de razonamiento verbal y numérico del DAT se usa como indicador de aptitud ___.|académica|mecánica|perceptiva",
      "Las baterías de aptitudes múltiples comparten ___ normativo, lo que permite comparar aptitudes entre sí.|grupo|criterio|modelo",
      "Una aptitud mira al ___, porque predice con qué facilidad se aprenderá algo.|futuro|pasado|presente"
    ],
    tf: [
      "Las pruebas FACT se construyeron mediante el análisis factorial de las aptitudes primarias.|F|Se partió del análisis de incidentes críticos, recogiendo conductas que distinguían un desempeño eficaz de uno ineficaz.",
      "La ventaja de un perfil diferenciado frente a una puntuación global es más modesta de lo que sugiere la batería.|V",
      "Una aptitud describe sobre todo lo que la persona ya sabe hacer en un ámbito.|F|Eso es el rendimiento o la habilidad adquirida. La aptitud predice la facilidad para aprender en el futuro.",
      "El DAT-5 incluye pruebas de ortografía y de velocidad y precisión perceptiva.|V"
    ],
    q: [
      "Una estudiante de bachillerato destaca en razonamiento abstracto (percentil 80) y verbal (72), y su punto más bajo es el mecánico (35). ¿Qué conclusión es adecuada?|El perfil informa, pero no decide|Debe elegir una carrera técnica|Debe descartar estudios superiores|La decisión debe integrar también sus intereses, su rendimiento académico y sus circunstancias.",
      "¿Qué rasgo distingue al FACT de otras baterías?|Su base en incidentes críticos|Su origen en el modelo de Thurstone|Su uso exclusivo en educación infantil|Flanagan identificó elementos del trabajo analizando incidentes críticos. El origen en Thurstone corresponde al PMA.",
      "¿Por qué una batería de aptitudes múltiples permite comparar las aptitudes de una persona entre sí?|Comparten el mismo grupo normativo|Cada prueba mide el factor g puro|Se corrigen de forma ipsativa|Al baremarse con la misma muestra, sus puntuaciones están en la misma escala y forman un perfil.",
      "¿Qué se debate sobre las baterías de aptitudes múltiples?|Cuánto añade el perfil a la medida global|Si sus pruebas llegan a correlacionar con g|Si el DAT mide el razonamiento mecánico|Como sus pruebas comparten mucha varianza con g, se discute su validez diferencial frente a una medida global."
    ],
    inc: [
      "Sobre aptitud e inteligencia|La aptitud es innata y la inteligencia, aprendida|La aptitud es más específica que la inteligencia|La aptitud predice el aprendizaje en un ámbito|La distinción no es innato frente a aprendido. La inteligencia es amplia, y la aptitud, específica y orientada al aprendizaje."
    ],
    seq: [],
    cls: [
      "Batería|DAT-5: Bennett, Seashore y Wesman; razonamiento mecánico; ortografía|FACT: Flanagan; incidentes críticos; elementos del trabajo|PMA: Thurstone; cinco factores; formato breve"
    ] }
] }
);

// SAIMAP Psicología · Evaluación II · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Los autoinformes de personalidad", cap: 3, pir: "alta", mods: [
  { t: "Características y usos de las pruebas objetivas de personalidad",
    tip: "Una prueba objetiva de personalidad es un autoinforme con estímulos estructurados, respuesta cerrada y corrección objetiva. Lo «objetivo» es el paso de las respuestas a la puntuación: la interpretación sigue exigiendo juicio clínico y las respuestas pueden estar sesgadas. Se usan en clínica y forense, orientación, selección e investigación, y en la práctica española dominan los instrumentos psicométricos.",
    v: [
      "Prueba objetiva de personalidad=Autoinforme con ítems estructurados, respuesta cerrada y corrección mecánica",
      "Corrección objetiva=Dos correctores con la misma plantilla obtienen exactamente la misma puntuación",
      "Escala=Conjunto de ítems que se suman porque reflejan un mismo rasgo o síndrome",
      "Baremo=Normas que comparan a la persona con un grupo de referencia, en T o percentiles",
      "Índices de validez=Indicadores de si las respuestas de la persona son interpretables",
      "Datos T de Cattell=Pruebas de rendimiento en las que la persona no sabe qué se mide",
      "Autoinforme=Método en el que la persona informa de cómo se ve a sí misma",
      "Muñiz et al. (2020)=Encuesta española en la que los 25 tests más usados eran psicométricos"
    ],
    g: [
      "En las pruebas objetivas, lo que no depende del evaluador es la ___.|corrección|interpretación|integración",
      "Las pruebas objetivas son económicas y se corrigen sin error de ___.|juicio|medida|muestreo",
      "En un autoinforme, las respuestas se suman en ___ según una plantilla fija.|escalas|consignas|láminas",
      "Su punto débil es que dependen de que la persona quiera y ___ describirse con precisión.|pueda|suela|prefiera",
      "En las técnicas proyectivas, a diferencia de los autoinformes, ya la ___ depende del evaluador.|codificación|aplicación|consigna"
    ],
    tf: [
      "En una prueba objetiva de personalidad, la interpretación del perfil no requiere juicio clínico.|F|Lo objetivo es la corrección. La interpretación sigue exigiendo juicio clínico y las respuestas pueden estar sesgadas.",
      "Las pruebas objetivas incluyen escalas o índices que informan de si las respuestas son interpretables.|V",
      "En la encuesta de Muñiz, Hernández y Fernández-Hermida (2020), varias proyectivas estaban entre los 25 tests más usados.|F|Los 25 tests más usados eran psicométricos y ninguna técnica proyectiva figuraba entre ellos.",
      "Una misma ansiedad alta se lee distinto si la persona consulta por voluntad propia o si reclama una indemnización.|V"
    ],
    q: [
      "Un perito recibe un perfil con ansiedad muy elevada de alguien que reclama una indemnización por un accidente laboral. ¿Qué es lo más adecuado?|Integrarlo con la historia y otras fuentes|Aceptarlo porque la corrección es objetiva|Descartarlo porque los autoinformes no sirven|La corrección es objetiva, pero el contexto puede sesgar las respuestas. El perfil se integra con la entrevista y la historia.",
      "¿Qué designa hoy, en el uso habitual, la expresión «prueba objetiva de personalidad»?|El autoinforme estructurado|Una prueba de rendimiento encubierta|Un registro de conducta en la vida real|Los datos T de Cattell eran pruebas de rendimiento. En el uso habitual se llama así al autoinforme estructurado.",
      "¿En qué ámbito se usan sobre todo el MMPI-2, el MCMI-IV y el PAI?|Clínico y forense|Orientación vocacional|Selección de personal|Describen el funcionamiento, orientan el diagnóstico, miden el cambio y valoran la credibilidad del perfil.",
      "¿Qué rasgo NO forma parte de la definición de una prueba objetiva de personalidad?|Codificación por el evaluador|Formato de respuesta cerrado|Escalas que agrupan los ítems|Que la codificación dependa del evaluador es propio de las proyectivas. En los autoinformes la corrección es mecánica."
    ],
    inc: [
      "Sobre las pruebas objetivas de personalidad|Su corrección mecánica impide los sesgos de respuesta|Pueden aplicarse a muchas personas a la vez|Tienen datos de fiabilidad y validez conocidos|La corrección evita el error de juicio, pero las respuestas pueden estar sesgadas. Por eso incluyen controles de validez."
    ],
    seq: [],
    cls: [
      "Ámbito de uso principal|Clínico y forense: MMPI-2; MCMI-IV; PAI|Investigación: NEO-PI-R; EPQ-R; HEXACO|Orientación: 16PF-5; NEO-FFI"
    ] },
  { t: "Clasificación de los instrumentos",
    tip: "No hay una clasificación única: se combinan la cobertura, el modelo de referencia, el modo de aplicación y la población. Por cobertura se distinguen inventarios multidimensionales e instrumentos específicos. Por modelo, rasgo-factorial, clínico-empírico y teórico. La elección depende de la pregunta de evaluación, no de la fama del test.",
    v: [
      "Inventario multidimensional=Evalúa muchas dimensiones a la vez y ofrece un perfil global",
      "Instrumento específico=Mide un solo constructo, es breve y sirve para cribado o seguimiento",
      "Modelo rasgo-factorial=Dimensiones de personalidad normal obtenidas por análisis factorial",
      "Modelo clínico-empírico=Escalas definidas por su capacidad para distinguir grupos diagnósticos",
      "Modelo teórico=Parte de una teoría concreta, como la de Millon o la de Cloninger",
      "STAI=Instrumento de Spielberger que mide ansiedad estado y rasgo",
      "CPI de Gough=Inventario para población general que describe rasgos adaptativos",
      "Aplicación adaptativa=El programa elige cada ítem según las respuestas previas"
    ],
    g: [
      "La BIS-11 de Barratt es un instrumento específico que mide ___.|impulsividad|autoestima|ansiedad",
      "El MCMI se apoya en la teoría de ___.|Millon|Cloninger|Cattell",
      "El ___ es la versión infantil y juvenil del cuestionario de Eysenck.|EPQ-J|MACI|MMPI-A",
      "El criterio de ___ es el más útil para elegir un instrumento.|cobertura|población|aplicación",
      "La aplicación adaptativa se fundamenta en la teoría de respuesta al ___.|ítem|test|estímulo"
    ],
    tf: [
      "El MMPI-2 puede describirse a la vez como multidimensional, clínico-empírico y destinado a adultos.|V",
      "El TCI-R es un ejemplo de instrumento clínico-empírico.|F|Es teórico: parte del modelo psicobiológico de Cloninger. El ejemplo clínico-empírico por excelencia es el MMPI.",
      "El CPI de Gough se diseñó para detectar psicopatología en población clínica.|F|Se pensó para describir rasgos adaptativos, como la sociabilidad o la responsabilidad, en personas sin trastorno.",
      "Las versiones informatizadas pueden registrar los tiempos de respuesta y generar informes automáticos.|V"
    ],
    q: [
      "Un servicio de prevención quiere conocer el nivel de estrés de una plantilla de doscientas personas. ¿Qué instrumento es el más razonable?|Uno específico, breve y en línea|Un inventario clínico multidimensional|Un inventario de cinco factores completo|Para una sola pregunta y muchas personas conviene un instrumento específico. El inventario clínico se reserva para quien inicie tratamiento.",
      "¿Qué instrumento de Millon está pensado para adolescentes?|El MACI|El MCMI-IV|El MMPI-A|El MACI es la versión para adolescentes. El MMPI-A también lo es, pero pertenece a la familia MMPI.",
      "¿Qué modelo de referencia comparten el 16PF-5, el EPQ-R y el BFQ?|Rasgo-factorial|Clínico-empírico|Teórico|Describen la personalidad normal mediante dimensiones obtenidas por análisis factorial.",
      "La escala de Rosenberg y la de locus de control de Rotter son ejemplos de…|instrumentos específicos|inventarios integrales|baterías clínicas|Miden un solo constructo, autoestima y locus de control, frente a los inventarios que ofrecen un perfil global."
    ],
    inc: [
      "Sobre la clasificación de los autoinformes|Cada instrumento pertenece a una sola categoría de clasificación|Un instrumento puede describirse con varios criterios a la vez|Los ítems y los baremos cambian con la edad de la población|Se combinan varios criterios, y un mismo instrumento, como el MMPI-2, puede describirse con todos ellos."
    ],
    seq: [],
    cls: [
      "Modelo de referencia|Rasgo-factorial: 16PF-5; EPQ-R; NEO-PI-R; BFQ|Clínico-empírico: MMPI|Teórico: MCMI; TCI-R"
    ] },
  { t: "Sesgos de respuesta: deseabilidad, aquiescencia y falseamiento",
    tip: "Un sesgo de respuesta es contestar por razones distintas del contenido del ítem. Los estilos son tendencias estables y en gran parte no intencionadas, como la aquiescencia. Las actitudes son distorsiones más o menos deliberadas, como el falseamiento. Paulhus (1984) separó en la deseabilidad social el autoengaño y el manejo de la impresión. La misma puntuación se interpreta según el contexto.",
    v: [
      "Sesgo de respuesta=Tendencia a contestar por razones distintas del contenido del ítem",
      "Estilo de respuesta=Tendencia estable y poco intencionada que aparece sea cual sea el contenido",
      "Actitud de respuesta=Intento más o menos deliberado de dar una imagen concreta en una situación",
      "Aquiescencia=Tendencia a mostrarse de acuerdo con los ítems al margen de su contenido",
      "Noesismo=Tendencia a responder «no» de forma sistemática",
      "Autoengaño=Componente sincero de la deseabilidad social según Paulhus (1984)",
      "Manejo de la impresión=Componente deliberado de la deseabilidad social",
      "Disimulación=Falseamiento positivo: parecer más sano o capaz y ocultar problemas"
    ],
    g: [
      "La simulación es la forma extrema del falseamiento ___.|negativo|positivo|aleatorio",
      "Paulhus separó en la deseabilidad social un componente de autoengaño y otro de ___ de la impresión.|manejo|control|sesgo",
      "Contestar sin leer por cansancio o por dificultades de lectura produce una respuesta ___.|aleatoria|aquiescente|extrema",
      "Elegir casi siempre el punto medio de la escala altera la ___ de las puntuaciones.|dispersión|dirección|consistencia",
      "En una escala con todos los ítems en la misma dirección, una persona ___ puntúa alto sin poseer el rasgo.|aquiescente|defensiva|simuladora"
    ],
    tf: [
      "La deseabilidad social equivale siempre a mentir de forma deliberada.|F|Paulhus mostró un componente sincero de autoengaño junto al manejo deliberado de la impresión.",
      "Un perfil fruto de respuesta aleatoria puede parecer patológico sin describir nada.|V",
      "El falseamiento positivo es el más típico de los peritajes por indemnización.|F|En los peritajes predomina el falseamiento negativo. El positivo es típico de selección, custodia o permisos de armas.",
      "La exageración de quien sufre de verdad y teme no ser creído no debe confundirse con la simulación.|V"
    ],
    q: [
      "Un aspirante a policía local, sin mentir en ningún ítem concreto, elige siempre la opción que le hace parecer más sereno, porque así se ve en sus mejores días. ¿Qué describe mejor su perfil?|Autoengaño y manejo de la impresión|Simulación con incentivo externo|Respuesta aleatoria por cansancio|No hay engaño consciente ni síntomas fingidos: es la mezcla de autoengaño y manejo de la impresión típica de la selección.",
      "¿Qué distingue a la simulación de otras formas de falseamiento negativo?|Su ligazón a un beneficio externo|Su carácter estable y no intencionado|Su aparición en procesos de selección|La simulación produce o exagera síntomas de un trastorno para obtener un beneficio externo.",
      "¿Cuál de estos sesgos es un estilo de respuesta y no una actitud?|La aquiescencia|La simulación|La disimulación|Los estilos son tendencias estables poco intencionadas. Simulación y disimulación son distorsiones deliberadas ligadas a la situación.",
      "Un padre responde un inventario dentro de un proceso de custodia de sus hijos. ¿Qué distorsión es más esperable?|Falseamiento positivo|Falseamiento negativo|Respuesta aleatoria|En la custodia la persona tiende a parecer más sana y equilibrada de lo que es y a ocultar problemas."
    ],
    inc: [
      "Sobre los sesgos de respuesta|La deseabilidad disminuye cuando hay algo en juego|La aquiescencia tiene como opuesto el noesismo|Los estilos son en gran parte no intencionados|La deseabilidad aumenta, no disminuye, cuando hay algo en juego, como en la selección de personal."
    ],
    seq: [],
    cls: [
      "Tipo de sesgo|Estilo de respuesta: aquiescencia; noesismo; respuesta extrema; respuesta central|Actitud de respuesta: falseamiento positivo; falseamiento negativo; simulación"
    ] },
  { t: "Estrategias de control de las respuestas sesgadas",
    tip: "Unas estrategias actúan en la construcción y otras en la corrección: frecuencia empírica, consistencia entre pares, equilibrio de la dirección de los ítems, escalas de deseabilidad y elección forzada, y la simulación análoga es un método de investigación. Las escalas de validez del MMPI-2 no detectan mentiras, sino patrones atípicos con varias explicaciones. La validez del protocolo no es la validez del test.",
    v: [
      "VRIN=Detecta respuestas incoherentes entre pares de ítems, propias de la respuesta aleatoria",
      "TRIN=Detecta la tendencia indiscriminada a responder «verdadero» o «falso»",
      "Escala F(p)=Infrecuencia incluso en pacientes psiquiátricos: separa exageración de patología",
      "Escala FBS=Exageración de quejas somáticas y cognitivas en contextos de lesión y litigio",
      "Escala K=Defensividad sutil, propia de personas con buen nivel educativo",
      "Escala S=Presentación superlativa: imagen de calma, armonía y virtud",
      "Puntuación ipsativa=Fuerza relativa de cada rasgo dentro de la persona, sin comparar entre sujetos",
      "Simulación análoga=Método de investigación en el que un grupo finge un trastorno"
    ],
    g: [
      "La escala F del MMPI aplica la estrategia de frecuencia ___ de respuesta.|empírica|aleatoria|teórica",
      "Edwards usó la elección forzada entre frases de igual deseabilidad en el ___.|EPPS|BIDR|CPI",
      "La escala ___ recoge respuestas infrecuentes en la segunda parte del cuadernillo.|F(B)|F(p)|FBS",
      "La escala L detecta una defensividad ___, que se atribuye virtudes poco realistas.|ingenua|sutil|superlativa",
      "Redactar parte de los ítems en sentido inverso sirve para compensar la ___.|aquiescencia|deseabilidad|infrecuencia"
    ],
    tf: [
      "La escala TRIN del MMPI-2 detecta sobre todo la respuesta aleatoria.|F|Es la trampa típica: la respuesta aleatoria la detecta VRIN. TRIN detecta el «verdadero» o «falso» indiscriminado.",
      "Una F muy alta puede deberse a respuesta aleatoria, exageración, petición de ayuda o psicopatología grave.|V",
      "Un índice de validez del protocolo informa de si el test mide lo que pretende.|F|Habla de cómo respondió una persona concreta. Si el instrumento mide lo que pretende es la validez del test.",
      "Las escalas F(p) y S se incorporaron al MMPI-2 en 1995.|V"
    ],
    q: [
      "Un hombre en litigio por un accidente de tráfico obtiene una F muy alta, con VRIN normal y una F(p) también muy elevada. ¿Qué hipótesis gana peso?|Exageración de síntomas|Respuesta aleatoria|Defensividad ingenua|Con VRIN normal la respuesta aleatoria es poco probable, y una F(p) alta, infrecuente incluso en pacientes, apunta a exageración.",
      "¿Por qué el EPPS dificulta comparar el nivel de una persona con el de otras?|Porque sus puntuaciones son ipsativas|Porque sus ítems difieren en deseabilidad|Porque carece de escalas de validez|Lo que se suma en una escala se resta en otra: la puntuación indica la fuerza relativa de cada rasgo dentro de la persona.",
      "¿Qué escala del MMPI-2 se dirige a la exageración de quejas somáticas y cognitivas?|FBS|F(B)|S|La FBS se incorporó de forma oficial en 2007 y se usa sobre todo en contextos de lesión y litigio.",
      "¿Qué estrategia es un método de investigación y no un control incluido en el test?|La simulación análoga|La consistencia entre pares|El equilibrio de ítems|Se pide a un grupo que finja un trastorno y se ve qué indicadores lo distinguen de pacientes reales y de personas sinceras."
    ],
    inc: [
      "Sobre las escalas de validez|Una puntuación alta prueba que la persona miente|Detectan patrones de respuesta atípicos|Ante indicadores dudosos se interpreta con cautela|Generan una hipótesis que se contrasta con otras fuentes. Parte de la deseabilidad es autoengaño sincero (Paulhus, 1984)."
    ],
    seq: [],
    cls: [
      "Escala de validez del MMPI-2|Inconsistencia: VRIN; TRIN|Infrecuencia: F; F(B); F(p)|Defensividad: L; K; S"
    ] }
] },
{ n: 10, t: "Construcción de pruebas e inventarios clínicos", cap: 3, pir: "alta", mods: [
  { t: "Cuatro estrategias de construcción",
    tip: "La estrategia racional redacta ítems por su contenido (Woodworth, 1917). La empírica de criterio externo conserva los ítems que discriminan entre grupos aunque su contenido no se relacione con el criterio (MMPI). La factorial agrupa los ítems que se responden juntos (16PF, Eysenck, NEO). La secuencial combina todo por etapas y es el estándar actual (PRF, MCMI, PAI).",
    v: [
      "Estrategia racional=Ítems redactados a partir de la definición del rasgo o de su contenido evidente",
      "Personal Data Sheet=Cuestionario de Woodworth (1917) para detectar reclutas con problemas emocionales",
      "Criterio externo=Se conservan los ítems que diferencian un grupo criterio de otro de comparación",
      "Ítem sutil=Discrimina entre grupos aunque su contenido no se relacione con el criterio",
      "Estrategia factorial=Agrupa en factores los ítems que se responden juntos y los convierte en escalas",
      "Estrategia secuencial=Por etapas: teoría, ítems de contenido, depuración estadística y validación externa",
      "PRF y JPI=Inventarios con los que Jackson sistematizó la construcción por etapas",
      "Validez aparente=Ventaja de los ítems racionales, cuyo contenido refleja lo que se mide"
    ],
    g: [
      "La estrategia ___ produce escalas heterogéneas que comparten ítems y carecen de teoría.|empírica|factorial|racional",
      "Los ítems transparentes de la estrategia racional facilitan el ___.|falseamiento|solapamiento|análisis",
      "Con la estrategia factorial, si un aspecto no estaba entre los ítems ___, ningún análisis lo hará aparecer.|iniciales|sutiles|depurados",
      "Woodworth publicó la Personal Data Sheet en ___.|1917|1943|1939",
      "La construcción teórica en sentido estricto, como la basada en la teoría de ___, se sitúa dentro de la racional.|Millon|Cattell|Eysenck"
    ],
    tf: [
      "En la estrategia empírica, un ítem se conserva solo si su contenido se relaciona claramente con el criterio.|F|Basta con que discrimine entre grupos. Por eso contiene ítems sutiles, difíciles de falsear.",
      "La estrategia factorial da escalas homogéneas, con buena consistencia interna y poco solapamiento.|V",
      "En la estrategia factorial, cuántos factores retener y cómo llamarlos son decisiones del investigador.|V",
      "La estrategia secuencial es la más rápida y barata de las cuatro.|F|Su debilidad es justo que es un proceso largo y costoso, a cambio de reunir teoría, homogeneidad y validez externa."
    ],
    q: [
      "Un equipo quiere una escala de impulsividad. Define el constructo, redacta ítems por contenido, los depura con análisis estadísticos y comprueba su relación con criterios externos. ¿Qué estrategia aplica?|Secuencial|Racional|Factorial|Hace todo por etapas y en orden, como Jackson en el PRF y como se construyeron el MCMI y el PAI.",
      "¿Qué pregunta guía la estrategia factorial?|¿Qué ítems se responden juntos?|¿Qué ítems distinguen a los grupos?|¿Qué ítems describen el rasgo?|Se estudian las correlaciones entre ítems y se agrupan en factores, que pasan a ser las escalas.",
      "¿Qué ventaja tiene la estrategia empírica de criterio externo?|Contiene ítems sutiles, difíciles de falsear|Sus escalas son homogéneas y sin solapamiento|Sus escalas se apoyan en una teoría formal|La escala predice el criterio y contiene ítems sutiles. Su punto débil es la heterogeneidad y la falta de teoría.",
      "¿Qué inconveniente es propio de la estrategia racional?|Ítems transparentes y falseables|Escalas atadas a diagnósticos antiguos|Dependencia de los ítems iniciales|La transparencia facilita la deseabilidad. Los diagnósticos antiguos limitan a la empírica, y los ítems iniciales, a la factorial."
    ],
    inc: [
      "Sobre las estrategias de construcción|El MMPI es el ejemplo clásico de construcción factorial|El 16PF de Cattell se construyó por análisis factorial|El MCMI y el PAI siguen la lógica secuencial|El MMPI se construyó por criterio externo. El análisis factorial es la estrategia del 16PF y de los cuestionarios de Eysenck."
    ],
    seq: [],
    cls: [
      "Estrategia de construcción|Empírica: MMPI; ítems sutiles; escalas heterogéneas|Factorial: 16PF de Cattell; cuestionarios de Eysenck; escalas homogéneas|Secuencial: PRF de Jackson; MCMI; PAI"
    ] },
  { t: "La familia MMPI",
    tip: "Hathaway y McKinley publicaron el MMPI en 1943, construido por criterio externo, con 566 ítems, las escalas de validez L, F y K y diez escalas clínicas. El MMPI-2 (1989, 567 ítems) conservó las escalas clínicas y añadió validez, contenido, suplementarias y PSY-5. El MMPI-2-RF (2008, 338 ítems) se centra en las escalas RC, y el MMPI-3 (2020, 335 ítems) tiene adaptación española de 2026.",
    v: [
      "Hathaway y McKinley=Psicólogo y psiquiatra de Minnesota que publicaron el inventario en 1943",
      "MMPI-2=Versión de 1989 con 567 ítems, adaptada en España en 1999",
      "MMPI-2-RF=Versión reducida de 2008 con 338 ítems y 51 escalas",
      "MMPI-3=Versión de 2020 con 335 ítems y 52 escalas",
      "Escalas RC=Escalas clínicas reestructuradas, depuradas del factor de desmoralización",
      "Desmoralización=Factor general de malestar que explicaba el solapamiento de las escalas clínicas",
      "Escalas de contenido=Escalas del MMPI-2 construidas por contenido y más transparentes",
      "PSY-5=Escalas que describen cinco dimensiones de personalidad patológica"
    ],
    g: [
      "La forma de cuadernillo del MMPI original tenía 566 ítems, de los cuales ___ eran repetidos.|16|50|6",
      "El MMPI-2-RF tiene ___ escalas.|51|52|10",
      "La adaptación española del MMPI-2, de Ávila-Espada y Jiménez-Gómez, se publicó en ___.|1999|1989|2008",
      "La escala FBS se incorporó de forma oficial al MMPI-2 en ___.|2007|1995|1989",
      "La adaptación española del MMPI-3, publicada por Hogrefe TEA, es de P. ___.|Santamaría|Seisdedos|Cordero"
    ],
    tf: [
      "El MMPI-2 sustituyó las escalas clínicas originales por escalas reestructuradas.|F|Las mantuvo para conservar la investigación acumulada. Las escalas reestructuradas son el núcleo del MMPI-2-RF.",
      "El MMPI-2-RF muestra cómo un instrumento nacido de la estrategia empírica incorpora después procedimientos factoriales.|V",
      "El MMPI-3 incluye nuevas escalas de problemas de alimentación, compulsividad, impulsividad y autoimportancia.|V",
      "El MMPI-A es una forma abreviada del MMPI-2 para adultos con poco tiempo.|F|El MMPI-A es la versión para adolescentes, con ítems y baremos propios para esa edad."
    ],
    q: [
      "Un psicólogo revisa un informe forense que menciona un inventario de 567 ítems. ¿Qué versión se aplicó?|MMPI-2|MMPI-2-RF|MMPI-3|567 ítems corresponden al MMPI-2. El MMPI-2-RF tiene 338 y el MMPI-3, 335.",
      "¿Qué objetivo tenían Hathaway y McKinley al crear el MMPI?|Ayudar a asignar diagnósticos|Describir la personalidad normal|Seleccionar reclutas del ejército|Su objetivo era práctico: una herramienta para asignar diagnósticos a los pacientes de un hospital.",
      "¿Por qué el MMPI-2 sigue en uso junto a las versiones nuevas?|Por continuidad con la investigación|Porque es la versión más breve de todas|Porque es la única con escalas de validez|Gran parte de la investigación y de la práctica forense se apoya en sus escalas clásicas, y cambiar exige reaprender.",
      "¿Qué escalas de validez añadió el MMPI-2 en su publicación de 1989?|VRIN, TRIN y F(B)|F(p) y S|L, F y K|L, F y K venían del MMPI original, y F(p) y S se incorporaron en 1995."
    ],
    inc: [
      "Sobre la familia MMPI|El MMPI-3 cuenta con 338 ítems y 51 escalas|El MMPI-2-RF se centra en las escalas RC|El MMPI-2 añadió las escalas PSY-5|338 ítems y 51 escalas corresponden al MMPI-2-RF. El MMPI-3 tiene 335 ítems y 52 escalas."
    ],
    seq: [
      "La familia MMPI en orden|MMPI (1943)>MMPI-2 (1989)>MMPI-2-RF (2008)>MMPI-3 (2020)"
    ],
    cls: [] },
  { t: "Escalas e interpretación del MMPI-2",
    tip: "Las diez escalas clínicas se identifican por un número, y sus nombres son históricos: una escala 8 alta no equivale a esquizofrenia. Se usan puntuaciones T, con corte de significación clínica en 65, y la corrección K. La interpretación sigue un orden: validez, escalas elevadas, tipos de código, escalas complementarias e integración. El perfil sugiere, pero no diagnostica.",
    v: [
      "Escala 2 (D)=Tristeza, desánimo y falta de energía",
      "Escala 4 (Pd)=Conflicto con las normas y la autoridad, impulsividad",
      "Escala 7 (Pt)=Ansiedad, rumiación y dudas obsesivas",
      "Escala 0 (Si)=Retraimiento e incomodidad en situaciones sociales",
      "Corrección K=Suma de una fracción de K a algunas escalas clínicas para compensar la defensividad",
      "Tipo de código=Combinación de las dos o tres escalas clínicas más elevadas",
      "Tríada neurótica=Configuración con las escalas 1, 2 y 3 elevadas",
      "V de conversión=Escalas 1 y 3 elevadas con la 2 más baja"
    ],
    g: [
      "El punto de corte de significación clínica del MMPI-2 es una T de ___.|65|70|50",
      "La tétrada psicótica reúne las escalas 6, 7, 8 y ___.|9|0|4",
      "La escala 6 (Pa) recoge suspicacia, sensibilidad interpersonal e ideas de ___.|persecución|grandeza|culpa",
      "Un código 2-7 reúne depresión y ___.|ansiedad|suspicacia|impulsividad",
      "Muchos clínicos prefieren referirse a las escalas clínicas por su ___.|número|nombre|autor"
    ],
    tf: [
      "Una puntuación alta en la escala 8 significa que la persona tiene esquizofrenia.|F|Indica que respondió como aquellos pacientes en una serie de ítems. Los nombres de las escalas son históricos.",
      "Si el perfil no es válido, no se interpreta el resto de las escalas.|V",
      "La escala 3 (Hy) combina quejas físicas con negación de problemas psicológicos.|V",
      "La corrección K resta una fracción de K a algunas escalas clínicas para compensar la exageración.|F|Suma una fracción de K para compensar la tendencia defensiva a minimizar problemas."
    ],
    q: [
      "Rosa, de 52 años, tiene escalas de validez normales y solo las escalas 1 y 3 superan T 65, con la 2 claramente más baja. ¿Qué configuración describe su perfil?|La V de conversión|La tríada neurótica|Un código 2-7|Con 1 y 3 elevadas y 2 más baja se habla de «V de conversión». La tríada neurótica exige las escalas 1, 2 y 3.",
      "¿Cuál es el primer paso al interpretar un perfil del MMPI-2?|Revisar las escalas de validez|Identificar el tipo de código|Localizar las escalas por encima de 65|Primero se comprueba si la persona respondió al contenido y si exageró o minimizó. Si el perfil no es válido, no se sigue.",
      "¿Qué escala clínica recoge energía elevada, aceleración y expansividad?|La 9 (Ma)|La 4 (Pd)|La 6 (Pa)|Es la escala 9, hipomanía. La 4 recoge conflicto con las normas, y la 6, suspicacia e ideas de persecución.",
      "¿Qué error de interpretación es frecuente con el MMPI-2?|Leer las escalas por su nombre literal|Integrar el perfil con la entrevista|Revisar primero las escalas de validez|Otros errores son saltarse la validez, tratar elevaciones moderadas aisladas como diagnósticos y usar baremos de otra versión."
    ],
    inc: [
      "Sobre las puntuaciones del MMPI-2|Son puntuaciones T con media 100|El corte de significación clínica es T 65|Algunas escalas clínicas llevan corrección K|Las puntuaciones T tienen media 50 y desviación típica 10."
    ],
    seq: [
      "Pasos de la interpretación del MMPI-2|Revisar la validez>Identificar las escalas clínicas elevadas>Analizar el tipo de código>Consultar las escalas complementarias>Integrar con otras fuentes"
    ],
    cls: [
      "Configuración clásica|Tríada neurótica: Hs; D; Hy|Tétrada psicótica: Pa; Pt; Sc; Ma"
    ] },
  { t: "MCMI-IV y PAI",
    tip: "El MCMI-IV y el PAI se construyeron con la estrategia secuencial. El MCMI-IV (195 ítems de verdadero o falso) se basa en la teoría evolutiva de Millon, usa puntuaciones de tasa base que tienen en cuenta la prevalencia y no debe usarse en población no clínica. El PAI (344 ítems con cuatro opciones y 22 escalas) se diseñó para que sus escalas no compartieran ítems y orienta el tratamiento.",
    v: [
      "Tasa base (TB)=Puntuación del MCMI que tiene en cuenta la prevalencia del trastorno",
      "TB 75=En el MCMI, sugiere la presencia de un rasgo o síndrome",
      "TB 85=En el MCMI, indica la prominencia de un rasgo o síndrome",
      "Patrón 4B=Nuevo patrón clínico tempestuoso del MCMI-IV",
      "Facetas de Grossman=Subescalas que precisan qué aspectos explican la elevación de un patrón",
      "Patologías graves (MCMI-IV)=Patrones esquizotípico, límite y paranoide",
      "Escalas de tratamiento (PAI)=Agresión, ideación suicida, estrés, falta de apoyo y rechazo al tratamiento",
      "Escalas interpersonales (PAI)=Dominancia y afabilidad"
    ],
    g: [
      "El MCMI-IV tiene ___ ítems de verdadero o falso.|195|344|175",
      "El PAI tiene 344 ítems con ___ opciones de respuesta.|cuatro|dos|cinco",
      "El MCMI se basa en la teoría ___ de la personalidad de Millon.|evolutiva|psicobiológica|factorial",
      "La adaptación española del PAI, de Ortiz-Tallo y colaboradores, se publicó en ___.|2011|2018|1991",
      "Según la Comisión de Test del COP, la consistencia interna mediana del PAI ronda ___.|0,80–0,85|0,60–0,65|0,90–0,95"
    ],
    tf: [
      "El MCMI-IV es adecuado para describir la personalidad de candidatos en selección de personal.|F|Sus baremos proceden de población clínica, y en personas sin problemas tendería a sobrestimar la patología.",
      "Las puntuaciones de tasa base del MCMI son puntuaciones T con un punto de corte ajustado.|F|No son puntuaciones T: tienen en cuenta la prevalencia de cada trastorno en la población clínica.",
      "El PAI se diseñó para que sus escalas no compartieran ítems.|V",
      "En el MCMI-IV, las patologías graves de la personalidad son la esquizotípica, la límite y la paranoide.|V"
    ],
    q: [
      "Una psicóloga necesita un cribado amplio de psicopatología que informe también sobre ideación suicida y rechazo al tratamiento para planificar la intervención. ¿Qué inventario encaja mejor?|PAI|MCMI-IV|MMPI-2|Las escalas de consideraciones para el tratamiento del PAI incluyen ideación suicida y rechazo al tratamiento.",
      "¿Qué inventario es la opción natural si interesa sobre todo la personalidad patológica?|MCMI-IV|PAI|NEO-PI-R|El MCMI-IV destaca por sus patrones de personalidad. El PAI se elige para un cribado amplio orientado al tratamiento.",
      "¿Qué se discute sobre las puntuaciones de tasa base del MCMI?|Si funcionan con otra prevalencia|Si sirven en población general|Si equivalen a puntuaciones T|Se debate si funcionan bien cuando la prevalencia del centro difiere de la de la muestra normativa.",
      "¿Cuántas escalas clínicas tiene el PAI?|11|22|5|El PAI tiene 22 escalas: 4 de validez, 11 clínicas, 5 de consideraciones para el tratamiento y 2 interpersonales."
    ],
    inc: [
      "Sobre el MCMI-IV y el PAI|El MCMI-IV gradúa la respuesta en cuatro opciones|El MCMI-IV incluye facetas de Grossman|El PAI incluye escalas de dominancia y afabilidad|El MCMI-IV usa verdadero o falso. Las cuatro opciones, de «falso» a «totalmente verdadero», son del PAI."
    ],
    seq: [],
    cls: [
      "Inventario clínico|MMPI-2: 567 ítems; puntuaciones T con corte en 65; criterio externo|MCMI-IV: 195 ítems; tasa base; teoría de Millon|PAI: 344 ítems; cuatro opciones; escalas sin solapamiento"
    ] }
] },
{ n: 11, t: "Modelos dimensionales de la personalidad normal y patológica", cap: 3, pir: "media", mods: [
  { t: "16PF-5 y EPQ-R",
    tip: "El 16PF-5 de Cattell (185 ítems) ofrece 16 escalas primarias, 5 dimensiones globales y 3 índices de estilo de respuesta, y su factor B es una breve medida de capacidad. El EPQ-R de Eysenck mide E, N, P y la escala L. Su psicoticismo no mide psicosis, sino dureza, frialdad e impulsividad. La diferencia de fondo entre ambos es de nivel de análisis.",
    v: [
      "Extraversión (EPQ-R)=Sociabilidad, actividad y búsqueda de estimulación",
      "Atención a las normas=Escala primaria del 16PF-5, útil para puestos con normas de seguridad estrictas",
      "Factor B=Escala primaria del 16PF que es una breve medida de capacidad intelectual",
      "Dimensiones globales=Extraversión, ansiedad, dureza, independencia y autocontrol",
      "Psicoticismo (EPQ-R)=Dureza, frialdad, impulsividad y despreocupación por las normas",
      "Neuroticismo (EPQ-R)=Inestabilidad emocional, preocupación y reactividad al estrés",
      "Escala L del EPQ-R=Escala de sinceridad que recoge la tendencia a dar una imagen favorable",
      "EPQ-J=Versión del cuestionario de Eysenck para niños y adolescentes"
    ],
    g: [
      "El 16PF-5 tiene ___ ítems.|185|240|220",
      "La adaptación española del 16PF-5 es de ___ (TEA, 1995).|Seisdedos|Cordero|Ortiz-Tallo",
      "Los índices de estilo de respuesta del 16PF-5 son manipulación de la imagen, infrecuencia y ___.|aquiescencia|deseabilidad|distorsión",
      "La escala ___ del EPQ-R ha sido la más criticada por su menor consistencia interna.|P|N|E",
      "Cattell prefería muchas dimensiones ___, que predicen con detalle.|estrechas|amplias|biológicas"
    ],
    tf: [
      "Una persona con P alto en el EPQ-R suele presentar alucinaciones o ideas delirantes.|F|El psicoticismo no mide psicosis: describe a alguien frío, poco empático, impulsivo o poco convencional.",
      "Las cinco dimensiones globales del 16PF-5 se parecen bastante a los cinco grandes factores.|V",
      "El EPQ-R incluye índices de manipulación de la imagen y de infrecuencia.|F|Esos índices son del 16PF-5. El EPQ-R controla los sesgos con la escala L de sinceridad.",
      "El 16PF-5 y el EPQ-R describen la misma personalidad a distintos niveles de la jerarquía de rasgos.|V"
    ],
    q: [
      "Una empresa busca un coordinador que trabaje con autonomía y cumpla normas de seguridad estrictas. ¿Qué información será más ajustada?|Las primarias del 16PF-5|La extraversión del EPQ-R|El neuroticismo del EPQ-R|Escalas primarias como atención a las normas o autosuficiencia predicen con más detalle que un superfactor amplio.",
      "¿Por qué el factor B es una peculiaridad del 16PF?|Mide capacidad intelectual|Detecta la aquiescencia|Es un factor de segundo orden|La escala de razonamiento no es un rasgo de personalidad en sentido estricto, sino una breve medida de capacidad.",
      "En un estudio sobre neuroticismo y salud con miles de participantes, ¿qué ventaja tiene el EPQ-R?|Su brevedad|Sus 16 escalas primarias|Su índice de infrecuencia|Con muchas personas y el interés puesto en una dimensión amplia, la brevedad del EPQ-R es una ventaja clara.",
      "¿Qué tipos de datos analizó Cattell además de los cuestionarios?|Vida real y pruebas objetivas|Entrevista y observación clínica|Neuroimagen y registros fisiológicos|Cattell analizó datos L (vida real), Q (cuestionarios) y T (pruebas objetivas de rendimiento)."
    ],
    inc: [
      "Sobre el 16PF-5 y el EPQ-R|El 16PF-5 se usa poco en selección y orientación|El EPQ-R tiene una versión infantil, el EPQ-J|El 16PF-5 ofrece tres índices de estilo de respuesta|Es muy usado en selección y orientación porque describe la personalidad normal con mucho detalle."
    ],
    seq: [],
    cls: [
      "Cuestionario|16PF-5: Cattell; 185 ítems; 16 escalas primarias; manipulación de la imagen|EPQ-R: Eysenck; tres superfactores; escala L de sinceridad; versión EPQ-J"
    ] },
  { t: "El modelo de los cinco factores: NEO-PI-R, NEO-FFI y BFQ",
    tip: "El modelo de los cinco factores, nacido de la hipótesis léxica y del análisis factorial, es el marco de referencia de la personalidad normal. El NEO-PI-R (240 ítems) tiene cinco factores con seis facetas cada uno, y el NEO-FFI mide solo los factores con 60 ítems. El BFQ usa nombres propios, mide estabilidad emocional, el polo opuesto del neuroticismo, e incluye una escala de distorsión.",
    v: [
      "Hipótesis léxica=Las diferencias de personalidad importantes quedan codificadas en el lenguaje",
      "Faceta=Rasgo específico dentro de un factor amplio",
      "NEO-FFI=Forma breve de 60 ítems que mide solo los cinco factores",
      "NEO-PI-3=Revisión más legible del NEO-PI-R, útil también con adolescentes",
      "Energía (BFQ)=Equivale aproximadamente a la extraversión: dinamismo y dominancia",
      "Tesón (BFQ)=Equivale aproximadamente a la responsabilidad: escrupulosidad y perseverancia",
      "Escala de distorsión=Escala del BFQ que detecta una imagen excesivamente favorable",
      "CPS=Cuestionario de Seisdedos y Roig Fuste sobre la conducta en distintas situaciones"
    ],
    g: [
      "El NEO-PI-R tiene ___ ítems con respuesta en escala de cinco puntos.|240|185|60",
      "La faceta de gregarismo pertenece al factor ___.|extraversión|amabilidad|apertura",
      "La faceta de deliberación pertenece al factor ___.|responsabilidad|neuroticismo|apertura",
      "En el BFQ, la afabilidad incluye cooperación y ___.|cordialidad|dominancia|perseverancia",
      "La ___ se relaciona con el rendimiento académico y laboral.|responsabilidad|apertura|extraversión"
    ],
    tf: [
      "El BFQ mide el neuroticismo con el mismo sentido que el NEO-PI-R.|F|El BFQ mide estabilidad emocional, el polo contrario del neuroticismo del NEO.",
      "El NEO-PI-R tiene una forma de autoinforme y otra para un observador que conozca bien a la persona.|V",
      "El MBTI es un buen test de personalidad porque asigna a cada persona un tipo estable.|F|Trata como dicotomías dimensiones continuas: en un retest a cinco semanas, cerca de la mitad cambia en alguna escala.",
      "El BFQ incluye una escala de distorsión que el NEO-PI-R no incorpora como escala formal.|V"
    ],
    q: [
      "Dos personas obtienen el mismo neuroticismo en el NEO-PI-R. Una destaca en ansiedad y vulnerabilidad, y la otra, en hostilidad e impulsividad. ¿Qué permite ver esa diferencia?|Las facetas|Los factores globales|La escala de distorsión|Cada factor tiene seis facetas que matizan una misma puntuación global.",
      "¿Qué limitación comparten los inventarios de cinco factores?|Describen más que explican|No predicen el rendimiento laboral|Solo se replican en una cultura|Decir que alguien es extravertido no aclara por qué. Además, sus ítems transparentes son sensibles a la deseabilidad.",
      "¿Qué subdimensiones tiene la estabilidad emocional del BFQ?|Control de emociones e impulsos|Dinamismo y dominancia|Escrupulosidad y perseverancia|Dinamismo y dominancia son de energía, y escrupulosidad y perseverancia, de tesón.",
      "¿Qué facetas pertenecen a la apertura en el NEO-PI-R?|Fantasía, estética e ideas|Confianza, franqueza y modestia|Competencia, orden y logro|Apertura incluye fantasía, estética, sentimientos, acciones, ideas y valores. Confianza y modestia son de amabilidad."
    ],
    inc: [
      "Sobre los instrumentos de cinco factores|El NEO-FFI mide las 30 facetas con 60 ítems|El NEO-PI-R tiene seis facetas por factor|El BFQ incluye una escala de distorsión|El NEO-FFI mide solo los cinco factores. Para las facetas hace falta el NEO-PI-R completo."
    ],
    seq: [],
    cls: [
      "Faceta del NEO-PI-R|Neuroticismo: ansiedad; hostilidad; vulnerabilidad|Extraversión: gregarismo; asertividad; búsqueda de emociones|Responsabilidad: orden; sentido del deber; deliberación"
    ] },
  { t: "Otros modelos: TCI-R de Cloninger y HEXACO",
    tip: "Cloninger distingue el temperamento, heredable y estable, del carácter, que madura con la experiencia. El TCI-R mide cuatro dimensiones de temperamento y tres de carácter, y una autodirección y una cooperación bajas se han propuesto como indicadores de trastorno de personalidad. El HEXACO de Ashton y Lee añade Honestidad-Humildad, útil para predecir la conducta poco ética.",
    v: [
      "Temperamento=Tendencias emocionales básicas, heredables y estables desde la infancia",
      "Carácter=Lo que la persona hace de sí misma, sus metas y valores",
      "Evitación del daño=Preocupación anticipatoria, miedo a la incertidumbre, timidez y fatiga",
      "Dependencia de la recompensa=Sensibilidad a la aprobación social, apego y calidez",
      "Persistencia=Perseverancia a pesar de la frustración y el cansancio",
      "Autotrascendencia=Espiritualidad y sentimiento de unidad con algo mayor",
      "Honestidad-Humildad=Sinceridad, justicia, falta de codicia y modestia",
      "Ashton y Lee=Reanalizaron estudios léxicos en varias lenguas y hallaron seis factores"
    ],
    g: [
      "El TCI-R mide ___ dimensiones.|siete|seis|cinco",
      "La autodirección y la cooperación son dimensiones de ___.|carácter|temperamento|apertura",
      "El HEXACO-PI-R se usa sobre todo en ___.|investigación|selección|clínica",
      "La búsqueda de novedad se relaciona con la extraversión y con la baja ___.|responsabilidad|amabilidad|emocionalidad",
      "La evitación del daño se relaciona con el ___.|neuroticismo|psicoticismo|antagonismo"
    ],
    tf: [
      "El TCI fue desarrollado por Eysenck a partir de sus superfactores.|F|Es de Cloninger, y su lógica de temperamento frente a carácter es distinta de la de los superfactores de Eysenck.",
      "La relación de cada dimensión de temperamento con un sistema neuroquímico concreto está confirmada.|F|Era una propuesta de Cloninger que la investigación posterior no ha confirmado de forma sencilla.",
      "El polo bajo de Honestidad-Humildad describe a personas manipuladoras, interesadas o pretenciosas.|V",
      "En el TCI-R, el temperamento ayudaría a describir la forma de un trastorno de personalidad.|V"
    ],
    q: [
      "En un estudio sobre fraude académico, dos estudiantes tienen la misma amabilidad en el NEO, pero solo uno copia en los exámenes. ¿Qué instrumento podría distinguirlos mejor?|HEXACO-PI-R|NEO-FFI|TCI-R|El factor Honestidad-Humildad es el que mejor se asocia con copiar y con la conducta poco ética.",
      "¿Qué dimensiones bajas del TCI-R se han propuesto como indicadores generales de trastorno de personalidad?|Autodirección y cooperación|Persistencia y búsqueda de novedad|Evitación del daño y autotrascendencia|Son dimensiones de carácter. El temperamento ayudaría a describir la forma del trastorno.",
      "¿Qué recoge una puntuación alta en búsqueda de novedad?|Exploración e impulsividad|Apego y calidez|Perseverancia ante la frustración|Apego y calidez son dependencia de la recompensa, y la perseverancia ante la frustración, persistencia.",
      "Para separar en un paciente lo temperamental de lo madurativo, ¿qué modelo conviene?|TCI-R|HEXACO|Cinco factores|La distinción entre temperamento y carácter es la aportación propia del modelo de Cloninger."
    ],
    inc: [
      "Sobre el modelo HEXACO|Se basa en el modelo psicobiológico de Cloninger|Procede de estudios léxicos en varias lenguas|Añade el factor Honestidad-Humildad|El HEXACO es de Ashton y Lee y tiene origen léxico transcultural. El modelo psicobiológico es el del TCI-R."
    ],
    seq: [],
    cls: [
      "Dimensión del TCI-R|Temperamento: búsqueda de novedad; evitación del daño; dependencia de la recompensa; persistencia|Carácter: autodirección; cooperación; autotrascendencia"
    ] },
  { t: "Trastornos de personalidad dimensionales: PID-5, DSM-5 y CIE-11",
    tip: "Los modelos dimensionales describen la patología de la personalidad como grados desadaptativos de rasgos continuos. El Modelo Alternativo del DSM-5 combina el funcionamiento (Criterio A, LPFS) con cinco dominios de rasgos patológicos medidos con el PID-5. La CIE-11 suprime los tipos: gradúa la gravedad y describe cinco especificadores de rasgo, con anancastia y sin psicoticismo, más el patrón límite.",
    v: [
      "Criterio A=Funcionamiento del yo y funcionamiento interpersonal, valorados con la LPFS",
      "Criterio B=Rasgos patológicos en cinco dominios con sus facetas",
      "PID-5=Inventario de Krueger et al. (2012) con 220 ítems, 25 facetas y 5 dominios",
      "Desapego=Dominio patológico que corresponde al polo extremo de la introversión",
      "Antagonismo=Dominio patológico que corresponde a la baja amabilidad",
      "Anancastia=Especificador de la CIE-11: perfeccionismo y control rígido de la conducta",
      "Dificultad de personalidad=Registro de la CIE-11 por debajo del umbral de trastorno",
      "Patrón límite=Especificador que la CIE-11 añade para la práctica clínica"
    ],
    g: [
      "El PID-5 tiene ___ facetas.|25|30|5",
      "En la CIE-11, la gravedad del trastorno de personalidad se gradúa como leve, moderada o ___.|grave|crónica|extrema",
      "La desinhibición del PID-5 se corresponde con la baja ___.|responsabilidad|amabilidad|apertura",
      "La relación entre la apertura y el ___ del PID-5 es débil y discutida.|psicoticismo|antagonismo|desapego",
      "El Modelo Alternativo del DSM-5 aparece en su Sección ___.|III|II|I"
    ],
    tf: [
      "La CIE-11 mantiene los tipos clásicos de trastorno de personalidad junto a un modelo dimensional.|F|La CIE-11 suprime los tipos. Solo conserva el especificador de patrón límite.",
      "El Modelo Alternativo del DSM-5 define seis trastornos específicos.|V",
      "La anancastia es uno de los cinco dominios del PID-5.|F|Es un especificador de la CIE-11. En su lugar, el PID-5 incluye el psicoticismo.",
      "La comorbilidad excesiva entre trastornos es uno de los problemas del enfoque categorial.|V"
    ],
    q: [
      "Javier, de 35 años, tiene un perfeccionismo extremo y un control rígido de su conducta que le causan problemas graves en el trabajo y en casa. ¿Qué especificador de la CIE-11 describe mejor su rasgo predominante?|Anancastia|Desinhibición|Disocialidad|La anancastia es el especificador de la CIE-11 que recoge el perfeccionismo y el control rígido de la conducta.",
      "¿Qué instrumento valora el Criterio A del Modelo Alternativo del DSM-5?|La LPFS|El PID-5|El TCI-R|La LPFS valora el funcionamiento del yo y el interpersonal. El PID-5 mide los rasgos del Criterio B.",
      "¿Qué dominio del PID-5 es la excepción en la correspondencia con los cinco grandes?|Psicoticismo|Desapego|Antagonismo|El psicoticismo, de experiencias y creencias excéntricas, tiene una relación débil y discutida con la apertura.",
      "¿Qué estatus tiene el modelo dimensional en el DSM-5-TR?|Alternativo, junto al categorial|Oficial, en sustitución del categorial|Único, tras eliminar los seis tipos|El cuerpo del manual mantiene el modelo categorial. En la CIE-11, en cambio, el modelo dimensional es el oficial."
    ],
    inc: [
      "Sobre los modelos dimensionales|La CIE-11 incluye el psicoticismo|El PID-5 tiene 220 ítems y 5 dominios|La CIE-11 entró en vigor en 2022|La CIE-11 no incluye psicoticismo, e incluye anancastia. Intercambiarlos es una trampa típica."
    ],
    seq: [],
    cls: [
      "Rasgo patológico|Solo PID-5: psicoticismo; antagonismo|Solo CIE-11: anancastia; disocialidad|En ambos: afectividad negativa; desapego; desinhibición"
    ] }
] },
{ n: 12, t: "Historia, objetivos y métodos de la evaluación neuropsicológica", cap: 4, pir: "media", mods: [
  { t: "Antecedentes históricos",
    tip: "La frenología de Gall planteó si las funciones están localizadas. El método anatomoclínico dio la primera respuesta sólida: Broca (1861) relacionó la producción del habla con una lesión frontal izquierda, y Wernicke (1874), la comprensión con la región temporal posterior izquierda. Luria propuso los sistemas funcionales y una evaluación cualitativa, y Halstead y Reitan desarrollaron la tradición psicométrica.",
    v: [
      "Frenología=Doctrina de Gall que estimaba las facultades palpando el cráneo",
      "Método anatomoclínico=Relaciona los síntomas en vida con la lesión hallada en la autopsia",
      "Leborgne («Tan»)=Paciente de Broca que entendía bastante, pero apenas producía una sílaba",
      "Phineas Gage=Obrero al que una barra de hierro atravesó el lóbulo frontal en 1848",
      "Sistema funcional=Red de zonas que aportan cada una un componente a una función compleja",
      "Evaluación cualitativa=Análisis de cómo y por qué falla el paciente, además de su puntuación",
      "Índice de deterioro=Puntuación global de Halstead-Reitan compatible con daño cerebral",
      "Lezak (1976)=Autora de Neuropsychological Assessment, manual de referencia de la disciplina"
    ],
    g: [
      "Wernicke describió en ___ pacientes con habla fluida y comprensión muy alterada.|1874|1861|1848",
      "El médico de Phineas Gage, John ___, describió años después el cambio en su carácter.|Harlow|Broca|Reitan",
      "Luria publicó «Las funciones corticales superiores del hombre» en ___.|1962|1947|1976",
      "Ward Halstead reunió en ___ pruebas que diferenciaban a personas con y sin lesión cerebral.|1947|1962|1861",
      "Para Luria, una de las unidades funcionales regula el tono y la ___.|vigilia|memoria|percepción"
    ],
    tf: [
      "El paciente de Broca hablaba con fluidez, pero apenas comprendía lo que se le decía.|F|Es el cuadro de Wernicke. Leborgne entendía buena parte de lo que oía, pero apenas producía la sílaba «tan».",
      "El caso Gage prueba que el lóbulo frontal es el centro de la personalidad.|F|La versión popular se exageró, y en su última etapa mostró cierta recuperación social. Es un clásico, no una prueba.",
      "Luria propuso que lesiones en lugares diferentes pueden alterar la misma función por motivos diferentes.|V",
      "La frenología carecía de base empírica, pero planteó la pregunta de la localización de las funciones.|V"
    ],
    q: [
      "Tras un ictus, un paciente habla con fluidez, pero su discurso es poco comprensible y apenas entiende lo que se le dice. ¿Quién describió este cuadro y dónde situó la lesión?|Wernicke, en la región temporal izquierda|Broca, en el lóbulo frontal izquierdo|Luria, en un sistema frontal derecho|Wernicke (1874) relacionó la comprensión alterada con lesiones temporales posteriores izquierdas. Broca describió el cuadro inverso.",
      "¿Qué aportó Luria frente a la oposición entre localizar y no localizar?|Los sistemas funcionales|El índice de deterioro|El método anatomoclínico|Las funciones complejas dependen de redes de zonas que aportan cada una un componente distinto.",
      "¿A quiénes se debe la tradición psicométrica que culminó en una batería con índice de deterioro?|Halstead y Reitan|Broca y Wernicke|Luria y Golden|Halstead (1947) reunió las pruebas y Reitan las desarrolló hasta formar una batería con índice de deterioro.",
      "¿Qué función atribuyó Luria a una de sus tres unidades funcionales?|Programar y verificar la actividad|Localizar cada facultad en un órgano|Medir el deterioro global del paciente|Las tres unidades regulan el tono y la vigilia, reciben y almacenan información, y programan, regulan y verifican la actividad."
    ],
    inc: [
      "Sobre la historia de la neuropsicología|Luria defendía una evaluación cuantitativa|Broca usó el método anatomoclínico|Lezak publicó el manual de referencia en 1976|Luria defendía una evaluación cualitativa, centrada en por qué falla el paciente. La tradición cuantitativa es la de Halstead y Reitan."
    ],
    seq: [
      "Hitos de la neuropsicología|Frenología de Gall>Accidente de Phineas Gage>Leborgne y Broca>Afasia de Wernicke>Laboratorio de Halstead>Sistemas funcionales de Luria>Manual de Lezak"
    ],
    cls: [] },
  { t: "Para qué y dónde se aplica",
    tip: "La evaluación neuropsicológica estudia las funciones cognitivas, emocionales y conductuales para conocer el estado del cerebro y sus consecuencias en la vida diaria. La neuroimagen muestra la estructura, pero no cómo funciona la persona, y hay alteraciones con imagen normal. Sus objetivos son el diagnóstico, el perfil funcional, el seguimiento, la rehabilitación, la evaluación forense y la investigación.",
    v: [
      "Evaluación neuropsicológica=Estudio de funciones cognitivas, emocionales y conductuales para conocer el estado cerebral",
      "Perfil funcional=Mapa de capacidades conservadas y alteradas, base de casi todo lo demás",
      "Seguimiento=Comparación de evaluaciones sucesivas para ver si la persona mejora o empeora",
      "Diagnóstico diferencial=Distinguir, por ejemplo, un deterioro incipiente de quejas por depresión",
      "Reinserción=Orientar la vuelta al trabajo, la conducción o la vida independiente",
      "Neuroimagen=TAC o resonancia, que muestran la estructura pero no el funcionamiento",
      "Entrevista con un familiar=Necesaria porque muchas personas con daño cerebral no perciben sus déficits",
      "Medida de resultado=Uso de la evaluación en ensayos de fármacos o de programas de rehabilitación"
    ],
    g: [
      "Hay alteraciones funcionales con una resonancia casi normal, como tras un traumatismo ___.|leve|grave|abierto",
      "En la evaluación forense, la validez del ___ debe comprobarse siempre.|rendimiento|diagnóstico|baremo",
      "El TDAH y las dificultades de aprendizaje pertenecen al ámbito del ___.|neurodesarrollo|envejecimiento|contexto laboral",
      "Durante décadas, la pregunta principal fue si había lesión y ___ estaba.|dónde|cuándo|cómo",
      "Comparar dos evaluaciones de la misma persona separadas por un año responde al objetivo de ___.|seguimiento|diagnóstico|investigación"
    ],
    tf: [
      "Con la neuroimagen actual, la evaluación neuropsicológica ya no es necesaria.|F|La imagen muestra la estructura, pero no qué puede hacer la persona ni cómo evoluciona. Hay alteraciones con imagen normal.",
      "Dos pacientes con lesiones parecidas pueden tener rendimientos muy distintos.|V",
      "La entrevista se hace solo con el paciente, porque es quien mejor conoce sus propios déficits.|F|Casi siempre se entrevista también a un familiar: muchas personas con daño cerebral no perciben bien sus déficits.",
      "Hoy el valor principal de la evaluación neuropsicológica está en describir el funcionamiento.|V"
    ],
    q: [
      "Antonio, de 70 años, olvida citas. La resonancia solo muestra cambios propios de la edad, y la evaluación revela que aprende mal la información nueva, con lenguaje y atención conservados. ¿Qué aporta sobre todo el informe?|Un perfil de capacidades y apoyos|La localización exacta de la lesión|La confirmación de una imagen normal|Indica qué está alterado, qué se conserva y qué apoyos sirven, y propone revaluar. Ese es su valor añadido frente a la imagen.",
      "Se evalúa a una mujer con quejas de memoria y ánimo bajo para saber si hay un deterioro neurodegenerativo incipiente o quejas asociadas a la depresión. ¿Qué objetivo predomina?|Diagnóstico diferencial|Perfil funcional|Investigación|Detectar alteraciones y distinguir entre causas posibles es el objetivo diagnóstico.",
      "¿Qué ámbito de aplicación incluye el ictus, la epilepsia y la esclerosis múltiple?|Neurología|Psiquiatría|Neurodesarrollo|La psiquiatría incluye las alteraciones cognitivas de la esquizofrenia o la depresión, y el neurodesarrollo, el TDAH.",
      "Decidir si una persona con daño cerebral puede volver a conducir corresponde al objetivo de…|rehabilitación y reinserción|seguimiento de la evolución|evaluación forense|Este objetivo orienta decisiones como la vuelta al trabajo, la conducción o la vida independiente."
    ],
    inc: [
      "Sobre la evaluación neuropsicológica|La neuroimagen informa de cómo rinde la persona|Explora atención, memoria, lenguaje y praxis|Sigue las fases generales de toda evaluación|La imagen muestra muy bien la estructura, pero no cómo funciona la persona en su vida diaria."
    ],
    seq: [],
    cls: [
      "Ámbito de aplicación|Neurología: ictus; epilepsia; esclerosis múltiple; demencias|Psiquiatría: esquizofrenia; depresión|Neurodesarrollo: TDAH; dificultades de aprendizaje"
    ] },
  { t: "Batería fija y batería flexible",
    tip: "En la batería fija se aplica a todos el mismo conjunto de pruebas, con igual orden y corrección: Halstead-Reitan, con su índice de deterioro, y Luria-Nebraska, de Golden (1980). Ofrece comparabilidad y utilidad en investigación, pero es larga y rígida. En la flexible se eligen las pruebas según el caso, y el enfoque de proceso de Kaplan analiza cómo se llega al resultado. Hoy predomina el enfoque flexible.",
    v: [
      "Batería fija=Mismas pruebas para todos, en el mismo orden y con la misma corrección",
      "Batería flexible=Selección de pruebas según el motivo de consulta y las hipótesis",
      "Enfoque de proceso=Analiza la estrategia y los errores, además de la puntuación final",
      "Edith Kaplan=Desarrolló en Boston el análisis de cómo llega el paciente al resultado",
      "Golden (1980)=Autor de la batería que estandarizó la exploración de Luria",
      "Test de Categorías=Prueba de formación de conceptos de la batería Halstead-Reitan",
      "Golpeteo digital=Prueba de velocidad motora de la batería Halstead-Reitan",
      "Rigidez=Inconveniente de la batería fija: pruebas innecesarias y otras que faltan"
    ],
    g: [
      "La batería Luria-Nebraska es obra de ___.|Golden|Luria|Reitan",
      "La batería Halstead-Reitan incluye el Test de Ritmo de ___.|Seashore|Stroop|Rey",
      "El enfoque de proceso se desarrolló en ___.|Boston|Nebraska|Moscú",
      "La gran ventaja de la batería fija es la ___ entre pacientes y centros.|comparabilidad|eficiencia|adaptación",
      "El riesgo del enfoque flexible es que, con hipótesis sesgadas, la selección de pruebas ___ lo esperado.|confirme|refute|ignore"
    ],
    tf: [
      "La batería Luria-Nebraska fue elaborada por el propio Luria.|F|Es de Golden (1980). Luria defendía una exploración cualitativa, que esta batería intentó estandarizar.",
      "A la Luria-Nebraska se le reprocha que simplifica en exceso el método cualitativo de Luria.|V",
      "La batería flexible es la más útil para acumular datos y comparar grupos en investigación.|F|Esa es la ventaja de la batería fija. La flexible destaca por su eficiencia y su adaptación al paciente.",
      "El enfoque flexible o de proceso es el predominante hoy.|V"
    ],
    q: [
      "Dos pacientes obtienen la misma puntuación al copiar un dibujo complejo. Uno empieza por la estructura general y el otro lo copia trozo a trozo, sin plan. ¿Qué enfoque da importancia a esa diferencia?|El enfoque de proceso|El índice de deterioro|La batería Luria-Nebraska|El enfoque de Kaplan analiza cómo se llega al resultado. El segundo patrón sugiere un problema probablemente ejecutivo.",
      "¿Qué inconveniente es propio de la batería flexible?|Depende de la pericia del evaluador|Su aplicación es muy larga y cansa|Aplica pruebas innecesarias a todos|Es menos estandarizada y depende del criterio del evaluador. Duración y pruebas innecesarias son críticas a la batería fija.",
      "¿Qué batería combina varias puntuaciones en un índice de deterioro?|Halstead-Reitan|Luria-Nebraska|Test Barcelona|El índice de deterioro indica si el rendimiento global es compatible con daño cerebral.",
      "¿Qué crítica se ha hecho a las escalas de localización de la Luria-Nebraska?|No tienen la validez que sugiere su nombre|Exigen una aplicación demasiado breve|Analizan solo el proceso y no la puntuación|Se le reprocha además que simplifica en exceso el método de Luria, que era cualitativo."
    ],
    inc: [
      "Sobre las baterías neuropsicológicas|La fija se adapta a las hipótesis del caso|La batería fija facilita la investigación|La flexible exige formación sólida|Es la flexible la que elige las pruebas según el caso. La fija aplica a todos las mismas pruebas."
    ],
    seq: [],
    cls: [
      "Tipo de batería|Fija: Halstead-Reitan; Luria-Nebraska; índice de deterioro; comparabilidad|Flexible: enfoque de proceso; Edith Kaplan; Boston; adaptación al paciente"
    ] },
  { t: "Baterías españolas: Test Barcelona y NEURONORMA",
    tip: "Las normas no se importan sin más: el rendimiento depende de la lengua, la escolaridad y la edad. Peña-Casanova dirigió el Test Barcelona (1990), un programa integrado de unos 42 subtests inspirado en Luria y en el enfoque de proceso, revisado en 2019. NEURONORMA (2009) no es una batería, sino un proyecto de normas conjuntas para mayores de 49 años, ajustadas por edad y escolaridad.",
    v: [
      "Jordi Peña-Casanova=Dirigió los dos proyectos españoles de referencia en neuropsicología",
      "Test Barcelona=Programa integrado de exploración de 1990 con unos 42 subtests",
      "Test Barcelona-2=Edición revisada publicada en 2019",
      "NEURONORMA=Proyecto de normas españolas conjuntas para pruebas muy utilizadas",
      "Normas conjuntas=Baremos de varias pruebas obtenidos con la misma muestra",
      "Ajuste por escolaridad=Corrección por años de estudio, con gran peso en las personas mayores",
      "Perfil del Test Barcelona=Representación que muestra de un vistazo áreas conservadas y alteradas",
      "TAVEC=Adaptación española con normas propias para la memoria verbal"
    ],
    g: [
      "NEURONORMA evaluó a ___ personas mayores de 49 años.|356|420|249",
      "El Test Barcelona se publicó en ___.|1990|2009|2019",
      "El Test Barcelona se inspira en la exploración de ___ y en el enfoque de proceso.|Luria|Halstead|Golden",
      "NEURONORMA ajusta las puntuaciones por edad y por años de ___.|escolaridad|evolución|residencia",
      "NEURONORMA se centra en la población en la que más se plantea el diagnóstico de ___ cognitivo.|deterioro|desarrollo|rendimiento"
    ],
    tf: [
      "NEURONORMA es una batería neuropsicológica nueva creada en 2009.|F|No es una batería nueva, sino un proyecto para obtener normas españolas conjuntas de pruebas muy utilizadas.",
      "Con normas conjuntas, las diferencias entre pruebas de una persona no se deben a que cada baremo proceda de un grupo distinto.|V",
      "El Test Barcelona dispone de una versión abreviada para cuando el tiempo es limitado.|V",
      "Unas normas de otro país sirven siempre que la prueba se traduzca con cuidado.|F|El rendimiento depende de lengua, escolaridad y edad. Normas ajenas pueden hacer parecer deteriorada a una persona sana."
    ],
    q: [
      "Dos hombres de 78 años obtienen la misma puntuación en fluencia verbal. Uno apenas fue a la escuela y el otro es ingeniero jubilado. ¿Qué se necesita para interpretar bien el resultado?|Normas ajustadas por escolaridad|Una prueba de neuroimagen previa|Una segunda aplicación inmediata|El mismo resultado puede ser esperable para el primero y bajo para el segundo. Sin ajuste se yerra en ambos sentidos.",
      "¿Cuál es la aportación más importante de NEURONORMA?|Normas conjuntas por edad y escolaridad|Una batería con 42 subtests nuevos|Un índice global de deterioro cerebral|Todas las pruebas se baremaron con la misma muestra y se ajustaron por edad y escolaridad.",
      "¿Qué áreas explora, entre otras, el Test Barcelona?|Lenguaje, praxias y gnosias|Patrones de personalidad|Intereses vocacionales|Explora orientación, atención, lenguaje, lectura, escritura, praxias, gnosias, memoria y funciones ejecutivas.",
      "¿Por qué la conormalización permite comparar el rendimiento de una persona en distintas pruebas?|Todas se baremaron con la misma muestra|Todas proceden de la misma batería fija|Todas usan puntuaciones de tasa base|Si cada baremo procediera de un grupo diferente, las diferencias entre pruebas podrían deberse a las muestras."
    ],
    inc: [
      "Sobre el Test Barcelona y NEURONORMA|El Test Barcelona se baremó en mayores de 49 años|NEURONORMA usó pruebas clásicas como el Stroop|El Test Barcelona representa sus resultados en un perfil|La muestra de 356 personas mayores de 49 años es la de NEURONORMA, no la del Test Barcelona."
    ],
    seq: [],
    cls: [
      "Proyecto español|Test Barcelona: 1990; unos 42 subtests; perfil de áreas; versión abreviada|NEURONORMA: 2009; 356 personas mayores de 49 años; normas conjuntas"
    ] }
] }
);

// SAIMAP Psicología · Evaluación II · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Cribado, CI premórbido, validez de rendimiento y pruebas específicas", cap: 4, pir: "alta", mods: [
  { t: "Cribado del estado mental: MMSE, MoCA, reloj y Pfeiffer",
    tip: "Una prueba de cribado es una exploración breve que indica si hace falta una evaluación completa, pero no diagnostica. El MMSE (Folstein, Folstein y McHugh, 1975) puntúa sobre 30 y tiene efecto techo, explora poco las funciones ejecutivas y depende mucho de la escolaridad. El MoCA (Nasreddine et al., 2005), también sobre 30, es mucho más sensible al deterioro cognitivo leve, aunque su corte de 26 puede ser alto. Un cribado normal no descarta un deterioro leve.",
    v: [
      "Prueba de cribado=Exploración breve que indica si hace falta un estudio completo, sin diagnosticar",
      "MMSE=Cribado de Folstein, Folstein y McHugh (1975) con puntuación máxima de 30",
      "MEC=Adaptación española del Mini-Mental, realizada por Lobo",
      "Efecto techo=Acumulación de puntuaciones cerca del máximo que oculta diferencias leves",
      "MoCA=Cribado de Nasreddine et al. (2005) diseñado para el deterioro cognitivo leve",
      "Test del reloj=Dibujar la esfera con sus números y las agujas marcando una hora concreta",
      "Cuestionario de Pfeiffer=SPMSQ de 1975, con 10 preguntas en las que se cuentan los errores",
      "Punto de corte del MMSE=En torno a 24, ajustado por edad y escolaridad"
    ],
    g: [
      "Con un corte de 26, el MoCA detectó el ___ de los casos de deterioro cognitivo leve.|90 %|18 %|78 %",
      "En el estudio original, la especificidad del MoCA fue del ___.|87 %|100 %|90 %",
      "El MoCA suma un punto a quienes tienen ___ años de escolaridad o menos.|12|8|16",
      "El cuestionario de Pfeiffer consta de ___ preguntas.|10|30|14",
      "La corrección del test del reloj está poco ___, porque existen varios sistemas.|unificada|baremada|difundida"
    ],
    tf: [
      "El MMSE explora poco las funciones ejecutivas y la memoria con demora.|V",
      "El MoCA se diseñó para detectar la demencia moderada y grave en atención primaria.|F|Se diseñó para detectar el deterioro cognitivo leve, en el que el MMSE es poco sensible.",
      "Estudios poblacionales sugieren que el corte de 26 del MoCA puede clasificar como deterioradas a muchas personas sanas.|V",
      "Un MMSE de 29 en una persona con estudios permite descartar el deterioro cognitivo.|F|El MMSE tiene efecto techo y detectó solo el 18 % de los casos de DCL. Un resultado normal no excluye un deterioro leve."
    ],
    q: [
      "Un hombre de 70 años con seis años de escolaridad obtiene 23 en el MMSE. ¿Qué conviene tener en cuenta?|Que el corte se ajusta por escolaridad|Que la puntuación confirma una demencia|Que el MMSE no depende de la formación|El MMSE depende mucho de la escolaridad y puede señalar como deteriorado a quien tiene poca formación.",
      "¿Qué tarea incluye el MoCA y no el MMSE?|Una versión breve del Trail Making|La copia de dos pentágonos|El recuerdo de tres palabras|El MoCA añade tareas más exigentes, como un Trail Making breve, el cubo o la abstracción. Los pentágonos y las tres palabras son del MMSE.",
      "¿Qué límite principal se atribuye al cuestionario de Pfeiffer?|Poca sensibilidad a cambios leves|Depender de la copia de figuras|Necesitar mucho tiempo de aplicación|Es solo verbal y muy breve, pero poco sensible a los cambios leves.",
      "El test del reloj parece sencillo, pero exige sobre todo…|planificar y visoconstruir|destreza motora fina|memoria inmediata|Requiere comprensión, planificación, memoria semántica y visoconstrucción."
    ],
    inc: [
      "Sobre las pruebas de cribado|Un cribado positivo equivale a un diagnóstico|El MMSE tiene efecto techo en personas con estudios|El MoCA incluye tareas de funciones ejecutivas|El cribado no diagnostica: un resultado positivo solo indica que hace falta una evaluación completa."
    ],
    seq: [],
    cls: [
      "Prueba de cribado|MMSE: Folstein (1975); dos pentágonos; efecto techo|MoCA: Nasreddine (2005); copia de un cubo; sensible al DCL|Pfeiffer: SPMSQ; 10 preguntas; recuento de errores"
    ] },
  { t: "La inteligencia como complemento y el CI premórbido",
    tip: "Las escalas de inteligencia, sobre todo la WAIS-IV, complementan la evaluación neuropsicológica, pero no la sustituyen: no exploran a fondo la memoria a largo plazo, el lenguaje ni muchas funciones ejecutivas. Para saber si hay pérdida hay que comparar a la persona consigo misma mediante el CI premórbido, que casi siempre se estima. Ningún método de estimación es perfecto y conviene combinar varios.",
    v: [
      "CI premórbido=Estimación del nivel intelectual previo a la enfermedad o la lesión",
      "Lectura de palabras irregulares=Habilidad sobreaprendida que resiste bastante al daño cerebral",
      "WTAR=Prueba inglesa de 2001 basada en leer palabras que no se pronuncian como se escriben",
      "TAP=Test español que presenta palabras sin tilde para leerlas con el acento correcto",
      "Fórmulas demográficas=Ecuaciones que estiman el CI a partir de edad, escolaridad y ocupación",
      "Subtests resistentes=Pruebas como Vocabulario o Información, menos afectadas por el daño",
      "Historia académica y laboral=Notas, estudios y tipo de trabajo, pistas menos precisas del nivel previo",
      "Índices de la WAIS-IV=Comprensión verbal, razonamiento perceptivo, memoria de trabajo y velocidad"
    ],
    g: [
      "Las fórmulas demográficas tienden a ___ los niveles altos.|subestimar|sobrestimar|duplicar",
      "La lectura de palabras irregulares falla cuando el daño afecta al propio ___.|lenguaje|movimiento|razonamiento",
      "Subtests como Vocabulario o ___ se ven menos afectados por el daño cerebral.|Información|Claves|Búsqueda de símbolos",
      "El TAP presenta palabras escritas sin ___ para que se lean con el acento correcto.|tilde|vocales|espacios",
      "Lo recomendable es combinar varios métodos y contrastarlos con la ___ de la persona.|historia|personalidad|motivación"
    ],
    tf: [
      "Una persona puede tener un CI total en la media y una alteración grave de la memoria.|V",
      "Una diferencia de varios puntos entre índices de la WAIS-IV indica por sí sola un deterioro.|F|Diferencias de varios puntos son frecuentes en la población sin lesión y deben interpretarse con cautela.",
      "Las fórmulas demográficas sobrestiman los niveles altos y subestiman los bajos.|F|Es al revés: acercan las estimaciones a la media, así que subestiman los altos y sobrestiman los bajos.",
      "El CI premórbido casi siempre se estima porque rara vez existe una evaluación anterior.|V"
    ],
    q: [
      "Una arquitecta de 55 años obtiene un CI de 95 tras un ictus. ¿Cómo debe interpretarse?|Comparándolo con su nivel previo estimado|Como un rendimiento normal sin pérdida|Como prueba segura de un deterioro grave|Un 95 está en la media, pero puede suponer una pérdida importante si su nivel previo era claramente superior.",
      "¿Por qué la lectura de palabras irregulares sirve para estimar el CI premórbido?|Exige un aprendizaje previo consolidado|Mide la velocidad de procesamiento actual|No guarda relación con la escolaridad|Leer palabras que no se pronuncian como se escriben exige haberlas aprendido, y esa habilidad resiste bastante al daño.",
      "¿En qué caso es menos fiable la lectura de palabras para estimar el nivel previo?|En una afasia o demencia avanzada|En un traumatismo leve sin afasia|En una persona con estudios superiores|Falla cuando el daño afecta al propio lenguaje, como en las afasias o las demencias avanzadas.",
      "¿Qué relación hay entre la evaluación de la inteligencia y la neuropsicológica?|La primera complementa a la segunda|La primera equivale a la segunda|La segunda se reduce a obtener un CI|Las escalas de inteligencia sitúan el rendimiento global y orientan, pero no exploran a fondo memoria, lenguaje ni muchas funciones ejecutivas."
    ],
    inc: [
      "Sobre el CI premórbido|Comparar con la media poblacional basta para detectar pérdida|Vocabulario e Información resisten mejor el daño que la velocidad|Las notas y el tipo de trabajo dan pistas menos precisas|Para detectar una pérdida hay que comparar a la persona consigo misma, no solo con la media de la población."
    ],
    seq: [],
    cls: [
      "Método de estimación premórbida|Lectura de palabras irregulares: WTAR; TAP; falla en afasias|Fórmulas demográficas: edad; escolaridad; ocupación|Subtests resistentes: Vocabulario; Información"
    ] },
  { t: "Validez de rendimiento y simulación",
    tip: "La validez de rendimiento es el grado en que los resultados reflejan la capacidad real. Su evaluación es imprescindible cuando hay incentivos externos, como indemnizaciones, incapacidades o litigios. El TOMM (Tombaugh, 1996) es una prueba de elección forzada tan fácil que la mayoría de las personas con daño real la superan, y quedar por debajo del azar indica respuesta intencionada. Fallarla invalida la sesión, pero no demuestra por sí sola la simulación.",
    v: [
      "Validez de rendimiento=Grado en que los resultados reflejan el nivel real de capacidad",
      "Validez de síntomas=Credibilidad de los síntomas referidos, valorada por ejemplo con el MMPI-2",
      "TOMM=Prueba de Tombaugh (1996) en la que se elige entre dos dibujos de objetos cotidianos",
      "Elección forzada=Formato de opciones fijas en el que responder al azar da en torno al 50 %",
      "Rendimiento bajo el azar=Indica que se reconoce la respuesta correcta y se elige la incorrecta",
      "Indicadores integrados=Patrones poco verosímiles dentro de pruebas de uso habitual",
      "Simulación=Producción intencionada de síntomas falsos o exagerados por un incentivo externo",
      "Incentivo externo=Indemnización, incapacidad laboral, litigio o procedimiento penal"
    ],
    g: [
      "El TOMM fue publicado por ___ en 1996.|Tombaugh|Folstein|Nasreddine",
      "En una elección forzada con dos opciones, responder al azar da en torno al ___ de aciertos.|50 %|25 %|75 %",
      "Reconocer peor de lo que se recuerda libremente es un indicador ___ de validez.|integrado|independiente|sintomático",
      "El DSM-5-TR considera la simulación un ___ que puede ser objeto de atención clínica.|problema|trastorno|síndrome",
      "Las escalas de validez del MMPI-2 evalúan sobre todo la validez de ___.|síntomas|rendimiento|constructo"
    ],
    tf: [
      "La mayoría de las personas con daño cerebral real resuelven bien el TOMM.|V",
      "Fallar el TOMM demuestra por sí solo que la persona está simulando.|F|Indica que los resultados de la sesión no son interpretables. La simulación es una conclusión que integra todos los datos.",
      "La evaluación de la validez de rendimiento solo se recomienda en procedimientos penales.|F|Es imprescindible en contextos forenses y de compensación, y se recomienda cada vez más en la clínica general.",
      "Los indicadores integrados no alargan la evaluación y son menos fáciles de identificar.|V"
    ],
    q: [
      "Tras un accidente leve, un hombre que reclama una indemnización recuerda menos palabras que muchos pacientes con Alzheimer y puntúa bajo el azar en el TOMM. ¿Qué debe informarse?|Que su rendimiento no es válido|Que tiene una amnesia grave|Que se confirma la simulación|Los datos no describen su memoria real. El juicio de simulación corresponde al conjunto de la evidencia, no a una sola puntuación.",
      "¿Qué evalúa la validez de rendimiento, a diferencia de la de síntomas?|El esfuerzo en las pruebas cognitivas|La credibilidad de las quejas referidas|La sinceridad en escalas de autoinforme|La validez de síntomas evalúa si los síntomas referidos son creíbles, con escalas como las del MMPI-2.",
      "¿Qué se recomienda sobre los indicadores de validez?|Usar varios a lo largo de la evaluación|Basarse en un único indicador sólido|Aplicarlos solo al final de la sesión|Ningún indicador aislado basta: se recomienda usar varios a lo largo de la evaluación.",
      "¿Por qué es poco creíble un resultado claramente inferior al 50 % en el TOMM?|Supone reconocer la respuesta y evitarla|Refleja un daño cerebral difuso grave|Es típico de la fatiga tras una sesión larga|Al azar se acertaría en torno al 50 %. Quedar claramente por debajo exige reconocer la correcta y elegir la otra."
    ],
    inc: [
      "Sobre la validez de rendimiento|Un rendimiento bajo solo puede deberse a un déficit real|El TOMM parece una prueba de memoria, pero es muy fácil|El DSM-5-TR no considera la simulación un trastorno mental|Un rendimiento bajo también puede deberse a fatiga, dolor, desmotivación, ánimo muy bajo o intención de rendir mal."
    ],
    seq: [],
    cls: [
      "Tipo de indicador de validez|Validez de rendimiento: TOMM; esfuerzo en pruebas cognitivas; indicadores integrados|Validez de síntomas: escalas de validez del MMPI-2; credibilidad de las quejas"
    ] },
  { t: "Pruebas de atención, funciones ejecutivas, memoria y visoconstrucción",
    tip: "Ninguna prueba es pura: cada función se explora con varias pruebas y cada prueba informa de varias funciones. El TMT-A mide atención y velocidad, y el TMT-B, flexibilidad cognitiva. El Stroop mide control inhibitorio con el efecto de interferencia, y el WCST, flexibilidad mediante los errores perseverativos. RAVLT y TAVEC evalúan la memoria verbal. En la Figura de Rey, la copia evalúa visoconstrucción y la reproducción, memoria visual.",
    v: [
      "TMT parte A=Unir números en orden, sobre todo atención y velocidad",
      "TMT parte B=Alternar números y letras, lo que exige flexibilidad cognitiva",
      "Efecto de interferencia=Dificultad para nombrar la tinta cuando la palabra nombra otro color",
      "Error perseverativo=Seguir aplicando la regla anterior tras el cambio de criterio",
      "Fluidez fonética=Palabras que empiezan por una letra, más ligada a funciones ejecutivas",
      "Fluidez semántica=Palabras de una categoría, más ligada a memoria semántica y lenguaje",
      "RAVLT=Lista de 15 palabras en cinco ensayos, con interferencia, demora y reconocimiento",
      "TAVEC=Lista de la compra por categorías que informa de organización y ayuda de claves"
    ],
    g: [
      "El Stroop data de ___ y suele usarse la versión de Golden.|1935|1948|1941",
      "El WCST fue desarrollado por Grant y Berg en ___.|1948|1935|1944",
      "En la Figura de Rey, la ___ evalúa la visoconstrucción y la planificación.|copia|reproducción|demora",
      "El TAVEC fue creado por Benedet y ___ en 1998.|Alejandre|Osterrieth|Golden",
      "Comparar la parte B con la A ayuda a separar la lentitud general del problema ___.|ejecutivo|motor|mnésico"
    ],
    tf: [
      "La Figura compleja de Rey evalúa solo la memoria visual.|F|La copia evalúa visoconstrucción y planificación, y la reproducción de memoria, la memoria visual.",
      "Los errores perseverativos del WCST son frecuentes en lesiones frontales, pero no exclusivos de ellas.|V",
      "La fluidez semántica depende más de las funciones ejecutivas que la fonética.|F|Es al revés: la fonética depende más de las funciones ejecutivas, y la semántica, de la memoria semántica y el lenguaje.",
      "El RAVLT permite ver si el problema está en guardar la información o en recuperarla.|V"
    ],
    q: [
      "Un paciente es lento en la parte A del TMT y aún más en la B. ¿Qué comparación ayuda a interpretarlo?|La de la parte B con la parte A|La de la parte A con el Stroop|La de la parte B con el TAVEC|Comparar B con A separa la lentitud general del problema de flexibilidad cognitiva.",
      "En el WCST, una paciente sigue clasificando por color después de que el criterio haya cambiado a forma. ¿Qué refleja?|Poca flexibilidad cognitiva|Un déficit de memoria verbal|Una lentitud motora general|Son errores perseverativos: sigue aplicando la regla anterior, lo que indica dificultades de flexibilidad.",
      "¿Qué aporta el TAVEC además de medir aprendizaje y olvido?|Si se organiza por categorías|Si se copia bien un dibujo|Si se inhibe la lectura|Su lista de la compra con categorías informa de si la persona organiza la información y mejora con claves.",
      "¿Qué mide sobre todo el efecto de interferencia del Stroop?|El control inhibitorio|La memoria visual|La fluidez semántica|Hay que inhibir la lectura, muy automatizada, para nombrar el color de la tinta."
    ],
    inc: [
      "Sobre las pruebas específicas|Cada prueba evalúa una sola función de forma pura|La Figura de Rey se copia y después se reproduce de memoria|El RAVLT incluye una lista de interferencia|Ninguna prueba es pura: todas requieren varias funciones, y la interpretación compara unas pruebas con otras."
    ],
    seq: [
      "Procedimiento del RAVLT|Lista de 15 palabras en cinco ensayos>Lista de interferencia>Recuerdo inmediato>Recuerdo diferido>Reconocimiento"
    ],
    cls: [
      "Función evaluada|Atención y velocidad: TMT-A|Funciones ejecutivas: TMT-B; WCST; interferencia del Stroop; fluidez fonética|Memoria verbal: RAVLT; TAVEC"
    ] }
] },
{ n: 14, t: "Medir los intereses profesionales", cap: 5, pir: "media", mods: [
  { t: "Concepto y enfoques metodológicos",
    tip: "Los intereses vocacionales son preferencias relativamente estables por actividades, ambientes y ocupaciones: responden a qué me gustaría hacer, no a qué sé hacer. Pueden ser expresados, manifiestos o inventariados. Los inventarios siguen tres enfoques, tipológico (Holland), por áreas temáticas (Kuder) y empírico (Strong), y su formato puede ser absoluto o ipsativo.",
    v: [
      "Interés vocacional=Preferencia relativamente estable por actividades, ambientes y ocupaciones",
      "Intereses expresados=Los que la persona declara cuando se le pregunta directamente",
      "Intereses manifiestos=Los que se infieren de la conducta y del uso del tiempo libre",
      "Intereses inventariados=Los que se obtienen con tests y pueden compararse con normas",
      "Enfoque tipológico=Escalas derivadas de una teoría de seis tipos de personas y ambientes",
      "Enfoque temático=Escalas que agrupan actividades por su contenido, como en Kuder",
      "Enfoque empírico=Escalas formadas comparando respuestas con las de profesionales satisfechos",
      "Formato absoluto=Cada actividad se valora por separado y puede compararse con un baremo"
    ],
    g: [
      "Un adolescente no puede expresar interés por profesiones que ___.|desconoce|rechaza|admira",
      "Las asignaturas que alguien elige por voluntad propia informan de sus intereses ___.|manifiestos|expresados|inventariados",
      "El enfoque de Kuder agrupa las actividades por su ___.|contenido|criterio|tipología",
      "En el formato ___, preferir una actividad supone renunciar a otra.|ipsativo|absoluto|normativo",
      "En selección de personal se usan con más ___, porque el candidato puede ajustar sus respuestas.|prudencia|frecuencia|rapidez"
    ],
    tf: [
      "Una aptitud numérica alta garantiza el interés por tareas como la contabilidad.|F|Intereses y aptitudes son distintos: se puede tener mucha aptitud numérica y aburrirse con la contabilidad.",
      "Los intereses manifiestos dependen de las oportunidades que la persona ha tenido.|V",
      "Intereses, rasgos y actitudes se separan por una frontera teórica clara.|F|Se solapan en parte y se estudian por separado más por tradición y propósito que por una separación teórica clara.",
      "Los intereses inventariados permiten explorar campos que la persona no había considerado.|V"
    ],
    q: [
      "Una orientadora observa que Pablo pasa las tardes en el taller de robótica del instituto por voluntad propia. ¿Qué intereses está registrando?|Manifiestos|Expresados|Inventariados|Los intereses manifiestos se infieren de la conducta, como las actividades en que alguien participa por voluntad propia.",
      "¿Qué pregunta responde el enfoque empírico de Strong?|Si sus gustos se parecen a los de una profesión|A qué tipo de persona se parece el evaluado|Qué áreas de actividad prefiere el evaluado|Strong compara las respuestas con las de profesionales satisfechos de cada ocupación.",
      "¿Qué ventaja tiene el formato absoluto frente al ipsativo?|Permite comparar entre personas|Reduce la tendencia a la aquiescencia|Impide cualquier presentación favorable|En el formato absoluto las escalas se comparan con un baremo y entre personas. Reducir la aquiescencia es ventaja del ipsativo.",
      "¿Por qué la orientación combina la evaluación de intereses con la de aptitudes?|Porque gustar no equivale a saber hacer|Porque los intereses cambian cada año|Porque las aptitudes miden preferencias|Se puede adorar la música sin oído para tocar. Por eso se combinan intereses, aptitudes y a menudo personalidad."
    ],
    inc: [
      "Sobre los intereses vocacionales|Son inmutables desde la adolescencia y no conviene reevaluarlos|Se usan también en los cambios de carrera de la vida adulta|Pueden expresarse, manifestarse o inventariarse|Son bastante estables, pero no inmutables: el resultado es un punto de partida y conviene repetirlo si cambian las circunstancias."
    ],
    seq: [],
    cls: [
      "Enfoque de construcción|Tipológico: Holland; RIASEC; seis tipos|Por áreas temáticas: Kuder; contenido de las actividades|Empírico: Strong; profesionales satisfechos"
    ] },
  { t: "El modelo RIASEC de Holland y el SDS",
    tip: "Holland (1959/1997) describe personas y ambientes con seis tipos, RIASEC, dispuestos en un hexágono: los adyacentes se parecen y los opuestos (R-S, I-E, A-C) son los más distintos. El resultado es un código de tres letras. La congruencia es el ajuste persona-ambiente, la consistencia, la proximidad de las dos primeras letras, y la diferenciación, la nitidez del perfil. El SDS es autoaplicado y autocorregido.",
    v: [
      "Realista=Prefiere objetos, máquinas, herramientas, animales o plantas",
      "Investigador=Prefiere observar, analizar y resolver problemas abstractos",
      "Emprendedor=Prefiere persuadir, dirigir y asumir riesgos para lograr metas",
      "Convencional=Prefiere ordenar datos y seguir procedimientos claros",
      "Congruencia=Ajuste entre el tipo de la persona y el de su ambiente de trabajo",
      "Consistencia=Proximidad en el hexágono de las dos primeras letras del código",
      "Diferenciación=Distancia entre las puntuaciones más altas y las más bajas del perfil",
      "Identidad=Claridad y estabilidad de las metas, intereses y capacidades percibidas"
    ],
    g: [
      "Los tipos opuestos del hexágono son R-S, I-E y ___.|A-C|R-A|E-C",
      "Realista y artístico son tipos ___ en el hexágono.|alternos|opuestos|adyacentes",
      "Un perfil plano, con puntuaciones parecidas, está poco ___.|diferenciado|consistente|congruente",
      "El SDS dispone en España de la adaptación de Martínez-Vicente y ___ (2006).|Valls|Lobo|Remor",
      "Se espera que la congruencia se asocie con la satisfacción y la ___.|permanencia|aptitud|identidad"
    ],
    tf: [
      "La consistencia compara el tipo de la persona con el de su ambiente de trabajo.|F|Eso es la congruencia. La consistencia compara las dos primeras letras del código de la propia persona.",
      "Un código SAE describe a alguien sobre todo social, después artístico y después emprendedor.|V",
      "La forma exacta del hexágono se replica igual en todas las culturas.|F|El orden circular se reproduce bien en muchas muestras, pero la forma exacta no se replica igual en todas las culturas.",
      "La relación hallada entre congruencia y satisfacción es real pero modesta.|V"
    ],
    q: [
      "Laura obtiene el código SR. ¿Qué puede decirse de su perfil?|Que tiene consistencia baja|Que tiene congruencia baja|Que está poco diferenciado|S y R son opuestos en el hexágono, así que la consistencia es baja. La congruencia exigiría conocer su ambiente.",
      "Una persona de perfil social trabaja en un puesto convencional de archivo. ¿Qué describe esa falta de ajuste?|Baja congruencia|Baja consistencia|Baja diferenciación|La congruencia compara el tipo de la persona con el del ambiente, y aquí no coinciden.",
      "¿Qué par de tipos es adyacente en el hexágono?|Artístico y social|Investigador y emprendedor|Realista y artístico|En el orden R-I-A-S-E-C, A y S son vecinos. I-E es un par opuesto y R-A, alterno.",
      "¿Qué caracteriza al SDS?|Lo aplica y lo corrige la propia persona|Usa tríadas de elección forzada|Se basa en escalas ocupacionales empíricas|La persona suma sus puntuaciones, obtiene su código y lo busca en un listado, aunque conviene comentarlo con un orientador."
    ],
    inc: [
      "Sobre la teoría de Holland|Los tipos describen a las personas, pero no a los ambientes|El resultado es un código de tres letras ordenado|Los tipos adyacentes del hexágono tienen mucho en común|Personas y ambientes de trabajo se describen con los mismos seis tipos."
    ],
    seq: [
      "Orden del hexágono de Holland|Realista>Investigador>Artístico>Social>Emprendedor>Convencional"
    ],
    cls: [
      "Concepto de Holland|Congruencia: persona y ambiente; satisfacción y permanencia|Consistencia: dos primeras letras del código; proximidad en el hexágono|Diferenciación: nitidez del perfil; perfil plano"
    ] },
  { t: "El modelo de Kuder",
    tip: "Los inventarios de Kuder siguen el enfoque por áreas temáticas: agrupan las actividades por su contenido. El Kuder-C de TEA tiene 10 escalas de interés y una de verificación. Su formato de tríadas de elección forzada produce puntuaciones ipsativas, que indican preferencias dentro de la persona y no permiten comparar entre personas. A cambio, reduce la aquiescencia y la tendencia a decir que todo gusta.",
    v: [
      "Kuder-C=Versión clásica de TEA con 10 escalas de interés y una de verificación",
      "Tríada=Ítem con tres actividades del que se elige la preferida y la menos atractiva",
      "Formato relativo=Elegir entre varias actividades, de modo que preferir una supone renunciar a otra",
      "Escala de verificación=Tríadas de respuesta previsible para detectar descuido o azar",
      "Correlaciones artificiales=Negativas, porque si una escala sube otras tienen que bajar",
      "Escala de Cálculo=Preferencia por llevar cuentas y trabajar con números",
      "Servicio social=Área de preferencia por ayudar, cuidar o enseñar",
      "EPPS=Inventario de personalidad que usa elección forzada frente a la deseabilidad"
    ],
    g: [
      "El Kuder-C tiene ___ escalas de interés.|10|6|8",
      "Las puntuaciones directas del Kuder se convierten en ___.|percentiles|puntuaciones T|eneatipos",
      "En el Kuder, la suma de todas las escalas es aproximadamente ___ para todo el mundo.|la misma|muy variable|creciente",
      "El formato de tríadas reduce la ___ y la tendencia a responder que todo gusta.|aquiescencia|consistencia|fiabilidad",
      "Las áreas del Kuder se derivan del ___ de las tareas.|contenido|criterio|prestigio"
    ],
    tf: [
      "El Kuder es un inventario empírico de criterio externo, como el Strong.|F|Es temático e ipsativo. El método empírico de criterio externo es el de Strong.",
      "Que Ana puntúe más que Luis en Musical no implica que le guste más la música.|V",
      "Las escalas del Kuder son independientes entre sí.|F|No lo son: si una sube, otras bajan, lo que genera correlaciones negativas artificiales.",
      "La escala de verificación es un control de validez, no un detector de mentiras.|V"
    ],
    q: [
      "Irene, de 16 años, puntúa alto en Literario y Persuasivo en el Kuder. ¿Qué haría bien su orientador?|Explorar profesiones que combinen ambas|Concluir que vale para el Derecho|Compararla con otra alumna en Literario|El perfil indica preferencias relativas. Se exploran opciones como periodismo o comunicación y se comprueban sus aptitudes.",
      "Un protocolo del Kuder tiene muchas elecciones inusuales en las tríadas previsibles. ¿Qué sugiere?|Descuido, azar o problemas de comprensión|Un perfil muy diferenciado de intereses|Un intento claro de mentir al evaluador|La escala de verificación detecta respuestas poco atentas o mal comprendidas, y el protocolo no debe interpretarse sin más.",
      "¿Por qué son problemáticas las comparaciones entre personas en el Kuder?|Se reparte una cantidad fija de preferencias|Cada escala usa un baremo distinto por sexo|Las tríadas tienen una fiabilidad muy baja|Preferir un área obliga a renunciar a otra, así que el perfil es relativo a la propia persona.",
      "¿Qué consecuencia tiene que las escalas del Kuder dependan unas de otras?|Correlaciones negativas artificiales|Una fiabilidad test-retest más alta|Perfiles planos en casi todos los casos|Si una escala sube, otras tienen que bajar, porque se reparte una cantidad fija de preferencias."
    ],
    inc: [
      "Sobre el Kuder|Su perfil indica cuánto interés absoluto tiene la persona|Cada ítem pide la actividad preferida y la menos atractiva|Sus áreas recuerdan a los tipos RIASEC|El perfil indica qué áreas prefiere en relación con sus otras áreas, no cuánto interés absoluto tiene."
    ],
    seq: [],
    cls: [
      "Formato de respuesta|Absoluto: valoración por separado; comparación entre personas; baremo|Ipsativo: tríadas del Kuder; preferencias dentro de la persona; menos aquiescencia"
    ] },
  { t: "El modelo empírico de Strong",
    tip: "Strong publicó en 1927 el SVIB, cuyo heredero es el Strong Interest Inventory. Sus escalas ocupacionales se forman con el método empírico de criterio externo: los ítems que diferencian a profesionales satisfechos de una muestra de referencia, sea cual sea su contenido. El criterio es la satisfacción, no la competencia. Es la estrategia del MMPI, y el inventario actual integra los temas RIASEC.",
    v: [
      "SVIB=Strong Vocational Interest Blank, primer gran inventario de intereses (1927)",
      "Escala ocupacional=Ítems que diferencian a una profesión del grupo de referencia",
      "Grupo de criterio=Profesionales experimentados y satisfechos con su ocupación",
      "Muestra de referencia=Personas de muchas profesiones con las que se compara al grupo",
      "Temas ocupacionales generales=Los seis tipos RIASEC dentro del inventario de Strong",
      "Intereses básicos=Áreas concretas agrupadas dentro de cada tema, como la enseñanza",
      "Criterio de satisfacción=Parecerse a quienes disfrutan un oficio, no ser competente en él",
      "Normas por sexo=Baremos separados o combinados cuya justicia se debate"
    ],
    g: [
      "Strong publicó su primer inventario en ___.|1927|1959|1944",
      "El criterio de las escalas ocupacionales es la ___, no la competencia.|satisfacción|aptitud|antigüedad",
      "El MMPI se construyó con la misma estrategia ___ que el Strong.|empírica|factorial|racional",
      "Enseñanza o asesoramiento son escalas de intereses básicos dentro del tema ___.|Social|Emprendedor|Artístico",
      "Si no se renuevan, las escalas ___ porque las profesiones cambian.|envejecen|se alargan|se invierten"
    ],
    tf: [
      "Puntuar alto en la escala de ingeniero indica que la persona sería un buen ingeniero.|F|Indica parecido en los gustos con ingenieros satisfechos, no competencia.",
      "Los ítems de una escala ocupacional pueden ser heterogéneos y difíciles de interpretar.|V",
      "Hay consenso en que las normas separadas por sexo son las más justas.|F|Se debate: las separadas evitan perfiles estereotipados, pero pueden ocultar diferencias reales.",
      "La integración del RIASEC en el Strong muestra que los tres enfoques no son rivales.|V"
    ],
    q: [
      "Mario, de 41 años, trabaja en un banco y puntúa alto en el tema Social y en la escala de orientador. ¿Qué indica el dato?|Una pista concreta que explorar|Que debe dejar su trabajo actual|Que sería un orientador competente|El Strong indica parecido con los gustos de profesionales satisfechos, no competencia ni una decisión obligada.",
      "¿Cómo se eligen los ítems de la escala ocupacional de ingeniero?|Por diferenciar al grupo de la referencia|Por su contenido relacionado con la ingeniería|Por cargar en un factor de intereses técnicos|Se eligen los ítems que separan a ingenieros satisfechos de la muestra de referencia, sea cual sea su contenido.",
      "¿Qué ventaja comparte el método de Strong con el del MMPI?|Ítems poco evidentes, más difíciles de falsear|Ítems homogéneos y fáciles de interpretar|Escalas que no necesitan normas actualizadas|Las escalas empíricas tienen poco contenido evidente. A cambio, sus ítems pueden ser heterogéneos y envejecen.",
      "¿Qué nivel del inventario actual conserva el núcleo empírico original?|Las escalas ocupacionales|Los temas ocupacionales generales|Las escalas de intereses básicos|Las escalas ocupacionales comparan con profesionales satisfechos. Los temas generales son los seis tipos RIASEC."
    ],
    inc: [
      "Sobre el inventario de Strong|Su criterio externo es la competencia profesional|Permite predecir la elección y la permanencia en una profesión|Exige muestras grandes de cada ocupación|El criterio es la satisfacción: parecerse a quienes disfrutan un oficio, no rendir bien en él."
    ],
    seq: [
      "Niveles del Strong de lo general a lo específico|Temas ocupacionales generales>Escalas de intereses básicos>Escalas ocupacionales"
    ],
    cls: [
      "Método empírico de criterio externo|Ventajas: datos reales; diferencia grupos profesionales; ítems difíciles de falsear|Inconvenientes: ítems heterogéneos; escalas que envejecen; muestras grandes"
    ] }
] },
{ n: 15, t: "Medir las actitudes", cap: 5, pir: "media", mods: [
  { t: "Concepto de actitud y estrategias de medida",
    tip: "Una actitud es una evaluación relativamente duradera, favorable o desfavorable, de un objeto. El modelo clásico (Rosenberg y Hovland, 1960) distingue los componentes cognitivo, afectivo y conductual, que no siempre coinciden, como sugirió LaPiere (1934). Las actitudes se infieren con autoinformes, observación, registros psicofisiológicos o medidas implícitas, aunque casi todo lo publicado son escalas de autoinforme.",
    v: [
      "Actitud=Evaluación duradera, favorable o desfavorable, de un objeto",
      "Componente cognitivo=Creencias sobre el objeto de actitud",
      "Componente afectivo=Sentimientos y emociones que despierta el objeto",
      "Componente conductual=Intenciones y tendencias de acción hacia el objeto",
      "LaPiere (1934)=Estudio clásico en que lo declarado por carta no coincidía con lo hecho",
      "Registro psicofisiológico=Activación ante el objeto que indica intensidad, no dirección",
      "Escala de autoinforme=Estrategia barata y rápida, pero expuesta a la deseabilidad social",
      "Distancia social=Escala de Bogardus (1925) sobre el grado de cercanía que se aceptaría"
    ],
    g: [
      "El modelo de tres componentes se atribuye a Rosenberg y ___ (1960).|Hovland|Osgood|Bogardus",
      "Los registros psicofisiológicos indican la ___ de la actitud, no su dirección.|intensidad|valencia|estabilidad",
      "«Me compraré un coche eléctrico cuando pueda» expresa el componente ___.|conductual|afectivo|cognitivo",
      "Las escalas de autoinforme recogen sobre todo lo que la persona ___ y está dispuesta a contar.|cree|siente|hace",
      "La escala de distancia social de Bogardus data de ___.|1925|1932|1944"
    ],
    tf: [
      "En el estudio de LaPiere, los establecimientos rechazaron en persona a la pareja de origen chino.|F|La atendieron sin problemas en persona, pero muchos respondieron después por carta que no aceptarían a clientes de ese origen.",
      "La observación no depende de lo que se declara, pero la conducta tiene muchas causas además de la actitud.|V",
      "Las medidas implícitas tienen una fiabilidad y una validez bien establecidas.|F|Su fiabilidad y su validez están discutidas, como muestra el debate sobre el IAT.",
      "Dos escalas con enunciados casi idénticos pueden ser muy distintas según cómo se construyeron.|V"
    ],
    q: [
      "Un ayuntamiento quiere conocer la actitud vecinal hacia los carriles bici. ¿Qué opción dará más precisión?|Una escala de varios enunciados|Una sola pregunta de sí o no|Un registro de activación fisiológica|Una sola pregunta aporta poca precisión. Una escala de varios enunciados bien construida mide mejor la actitud.",
      "«Los coches eléctricos me dan confianza.» ¿Qué componente de la actitud expresa?|Afectivo|Cognitivo|Conductual|Expresa un sentimiento. «Contaminan menos» sería cognitivo, y «me compraré uno», conductual.",
      "¿Qué limitación principal tienen las escalas de autoinforme en temas sensibles?|El peso de la deseabilidad social|Su elevado coste de aplicación|Que solo indican la intensidad|En temas como los prejuicios, la deseabilidad social pesa mucho. Por lo demás, son baratas y aplicables a grupos grandes.",
      "¿Qué conviene revisar antes de usar una escala de actitud publicada?|Su construcción, fiabilidad y validez|El número de enunciados favorables|Que se haya usado en un solo estudio|La oferta es enorme y desigual, y muchas escalas se diseñaron para un único estudio."
    ],
    inc: [
      "Sobre la medida de actitudes|Las actitudes se observan directamente en la conducta|El diferencial semántico puede funcionar como medida de actitud|Las medidas implícitas usan tiempos de reacción|Las actitudes no se observan directamente: se infieren de lo que la persona dice o hace."
    ],
    seq: [],
    cls: [
      "Componente de la actitud|Cognitivo: creencias; contaminan menos|Afectivo: sentimientos; me dan confianza|Conductual: intenciones; me compraré uno"
    ] },
  { t: "Escalas Likert y Thurstone",
    tip: "La escala Likert (1932) es sumativa: enunciados favorables y desfavorables con respuesta graduada, que se suman tras invertir los desfavorables. Los ítems se eligen por análisis de ítems, sin jueces. La de Thurstone y Chave (1929), de intervalos aparentemente iguales, usa jueces que sitúan cada enunciado en 11 categorías: la mediana es su valor escalar y la dispersión, su ambigüedad.",
    v: [
      "Puntuación sumativa=Suma de respuestas tras invertir los enunciados desfavorables",
      "Ítem invertido=Enunciado desfavorable que se recodifica y ayuda a controlar la aquiescencia",
      "Ítem de tipo Likert=Un único ítem con respuesta graduada, no una escala completa",
      "Análisis de ítems=Selección por correlación con el total o por capacidad de discriminar",
      "Respuestas ordinales=Categorías ordenadas cuya suma supone distancias iguales entre ellas",
      "Valor escalar=Mediana de las valoraciones de los jueces sobre un enunciado",
      "Ambigüedad del enunciado=Dispersión de las valoraciones de los jueces",
      "Intervalos aparentemente iguales=Método de Thurstone y Chave, con jueces y 11 categorías"
    ],
    g: [
      "En el método de Thurstone, los jueces clasifican cada enunciado en ___ categorías.|11|5|7",
      "Al construir una escala Likert, los enunciados ___ se descartan porque no discriminan.|neutros|invertidos|extremos",
      "En la escala de Thurstone se puntúa con la mediana o la media de los valores escalares de los enunciados ___.|aceptados|rechazados|ambiguos",
      "Las respuestas Likert son ___, y sumarlas supone tratar como iguales sus distancias.|ordinales|nominales|de razón",
      "Una crítica a Thurstone es que la propia ___ de los jueces influye en cómo sitúan los enunciados.|actitud|edad|formación"
    ],
    tf: [
      "Un solo ítem con cinco opciones de acuerdo es, en sentido estricto, una escala Likert.|F|Es un ítem de tipo Likert. La escala Likert es el conjunto de ítems sumados.",
      "El método de Thurstone necesita enunciados moderados para cubrir todo el continuo.|V",
      "En la escala de Thurstone, los jueces expresan su propia opinión sobre cada enunciado.|F|Clasifican lo favorable que les parece el enunciado sin expresar su propia opinión.",
      "La escala Likert suele alcanzar buena fiabilidad con pocos ítems.|V"
    ],
    q: [
      "En una escala Thurstone, alguien acepta «los carriles bici mejoran la ciudad» (valor alto) y «la bici tiene ventajas e inconvenientes» (valor medio). ¿Dónde queda?|En una zona moderadamente favorable|En el extremo más favorable del continuo|En el punto neutro exacto de la escala|Su puntuación es la mediana o la media de los valores escalares aceptados, entre el medio y el alto.",
      "¿Qué se hace con las respuestas a los enunciados desfavorables de una escala Likert?|Se invierten antes de sumar|Se eliminan del análisis|Se les asigna un valor escalar|Se invierten para que una puntuación alta indique siempre una actitud favorable. El valor escalar es propio de Thurstone.",
      "¿Qué enunciados se eliminan en el método de Thurstone?|Los de mucha dispersión entre jueces|Los de valor escalar moderado|Los que tienen redacción desfavorable|La dispersión indica ambigüedad. Se conservan enunciados repartidos por el continuo y con poca dispersión.",
      "¿Cuál es la principal crítica al método de Thurstone?|Su elevado coste de construcción|Que evita los ítems moderados|Que suma respuestas ordinales|Es caro, y además la actitud de los jueces puede influir. Sumar respuestas ordinales es la crítica al Likert."
    ],
    inc: [
      "Sobre la escala Likert|Necesita un grupo de jueces que sitúe los ítems|Los ítems en ambos sentidos controlan la aquiescencia|Se conservan los ítems que más correlacionan con el total|El Likert no necesita jueces: los ítems se seleccionan por análisis de ítems. Los jueces son propios de Thurstone."
    ],
    seq: [
      "Construcción de una escala Thurstone|Redactar enunciados de todo el continuo>Clasificación por jueces en 11 categorías>Calcular mediana y dispersión de cada enunciado>Elegir enunciados repartidos y poco ambiguos"
    ],
    cls: [
      "Escala de actitud|Likert: análisis de ítems; suma de respuestas; coste bajo|Thurstone: jueces; valores escalares; coste alto"
    ] },
  { t: "Escalas Guttman y otras técnicas",
    tip: "El escalograma de Guttman (1944) es acumulativo: aceptar un ítem implica aceptar todos los de menor intensidad, así que la puntuación total reproduce el patrón. Su ajuste se mide con la reproductibilidad, 1 − errores / (ítems × sujetos), que debe llegar a 0,90. Garantiza una sola dimensión, pero es raro alcanzarlo con actitudes de muchas facetas. Bogardus y el diferencial semántico completan las técnicas clásicas.",
    v: [
      "Escala acumulativa=Aceptar un ítem implica aceptar todos los de menor intensidad",
      "Escalograma=Procedimiento de Guttman (1944) que ordena ítems y personas en un continuo",
      "Error de Guttman=Respuesta que habría que cambiar para lograr un patrón perfecto",
      "Reproductibilidad=Uno menos los errores divididos entre ítems por sujetos",
      "Criterio de 0,90=Valor mínimo exigido para aceptar una escala acumulativa",
      "Unidimensionalidad=Garantía de que los ítems miden una sola dimensión",
      "Factor de evaluación=Dimensión bueno-malo del diferencial semántico que mide actitud",
      "Preguntas abiertas=Captan matices, pero son difíciles de puntuar de forma fiable"
    ],
    g: [
      "Con 5 ítems, 6 sujetos y un error, la reproductibilidad es aproximadamente ___.|0,97|0,83|0,90",
      "Con 4 ítems, 10 sujetos y 4 errores, la reproductibilidad es ___.|0,90|0,96|0,60",
      "El escalograma es un antecedente ___ de la teoría de respuesta al ítem.|determinista|probabilístico|factorial",
      "Por convención, la reproductibilidad mínima de un escalograma es de ___.|0,90|0,80|0,95",
      "En la escala de Bogardus, quien acepta a alguien como familiar suele aceptarlo también como ___.|vecino|jefe|socio"
    ],
    tf: [
      "En una escala Guttman perfecta, saber cuántos ítems acepta una persona permite saber cuáles acepta.|V",
      "El escalograma se aplica tanto como se cita, porque las actitudes suelen tener una sola faceta.|F|Se cita más de lo que se aplica: con actitudes de muchas facetas es raro llegar a 0,90.",
      "Thurstone propuso la escala acumulativa y Guttman, los intervalos aparentemente iguales.|F|Es al revés: Thurstone y Chave usaron intervalos aparentemente iguales, y Guttman, la escala acumulativa.",
      "La escala de distancia social de Bogardus tiene lógica acumulativa.|V"
    ],
    q: [
      "Un escalograma de 5 ítems se aplica a 20 sujetos y aparecen 15 errores. ¿Forma una escala acumulativa?|No, la reproductibilidad es de 0,85|Sí, la reproductibilidad es de 0,85|Sí, la reproductibilidad es de 0,95|1 − 15/100 da 0,85, por debajo del 0,90 exigido por convención.",
      "En un escalograma sobre reciclaje, alguien acepta tres ítems. En una escala perfecta, ¿cuáles ha aceptado?|Los tres de menor intensidad|Los tres de mayor intensidad|Tres cualesquiera del total|En una escala acumulativa, aceptar un ítem implica aceptar todos los de menor intensidad.",
      "¿Qué indicador de calidad es propio del escalograma?|La reproductibilidad|La dispersión de los jueces|La correlación ítem-total|La dispersión de los jueces es propia de Thurstone, y la correlación ítem-total, del Likert.",
      "Para un estudio con muchas personas, ¿qué escala suele bastar?|Una escala Likert|Un escalograma|Una escala Thurstone|La Likert es sencilla y fiable. El escalograma se reserva para comprobar si unos ítems ordenan una actitud unidimensional."
    ],
    inc: [
      "Sobre el escalograma de Guttman|Admite errores probabilísticos como la teoría de respuesta al ítem|Un sí después de un no rompe el patrón|Da a la puntuación total un significado preciso|Es determinista. La teoría de respuesta al ítem, de la que es antecedente, sí admite errores probabilísticos."
    ],
    seq: [],
    cls: [
      "Lógica de la escala|Sumativa: Likert; análisis de ítems|Intervalos aparentemente iguales: Thurstone; valores escalares de jueces|Acumulativa: Guttman; Bogardus; reproductibilidad"
    ] },
  { t: "Medidas implícitas: el IAT y su debate",
    tip: "Las medidas implícitas evalúan asociaciones sin preguntar directamente. En el IAT (Greenwald, McGhee y Schwartz, 1998) se clasifican conceptos y atributos con teclas compartidas, y la diferencia en tiempos de reacción entre combinaciones es la puntuación. Su fiabilidad test-retest es baja y su relación con la discriminación, débil (r ≈ 0,15). Sirve para investigar en grupos, no para diagnosticar a individuos.",
    v: [
      "Medida implícita=Evalúa asociaciones a partir de la rapidez en tareas, sin preguntar",
      "IAT=Test de Greenwald, McGhee y Schwartz (1998) basado en tiempos de reacción",
      "Conceptos del IAT=Par de categorías como flores e insectos",
      "Atributos del IAT=Par de categorías como agradable y desagradable",
      "Puntuación del IAT=Diferencia en tiempos de reacción entre las dos combinaciones",
      "Oswald et al. (2013)=Metaanálisis que halló r ≈ 0,15 con criterios de discriminación",
      "Forscher et al. (2019)=Cambiar puntuaciones implícitas no cambia necesariamente la conducta",
      "Priming evaluativo=Otra medida implícita con limitaciones parecidas a las del IAT"
    ],
    g: [
      "La fiabilidad test-retest del IAT es ___ para un instrumento que pretende medir algo estable.|baja|alta|excelente",
      "Según Oswald et al. (2013), el IAT correlaciona con criterios de discriminación en torno a r ≈ ___.|0,15|0,50|0,85",
      "Las tareas son más rápidas cuando las categorías que comparten tecla están ___ en la memoria.|asociadas|separadas|inhibidas",
      "El IAT es útil como herramienta de ___ en grupos.|investigación|diagnóstico|selección",
      "El IAT prometía esquivar la ___ social.|deseabilidad|distancia|influencia"
    ],
    tf: [
      "Usar el IAT para seleccionar personal carece de apoyo empírico.|V",
      "El IAT predice la conducta discriminatoria mucho mejor que las medidas explícitas.|F|Su relación con criterios de discriminación es débil, en torno a r ≈ 0,15 (Oswald et al., 2013).",
      "Se discute si el IAT mide una actitud personal, asociaciones culturales o familiaridad con los estímulos.|V",
      "Según Forscher et al. (2019), modificar las puntuaciones implícitas cambia de forma fiable la conducta.|F|Hallaron que modificarlas no se traduce necesariamente en cambios de conducta."
    ],
    q: [
      "En un curso, un participante obtiene en un IAT en línea una asociación negativa con un grupo y teme ser «racista sin saberlo». ¿Qué es correcto decirle?|Que un resultado aislado no define su actitud|Que el IAT ha detectado su prejuicio real|Que el resultado predice su conducta futura|Con baja fiabilidad y débil predicción, un resultado aislado puede invitar a reflexionar, pero no es un diagnóstico.",
      "Una persona responde más rápido cuando «flor» comparte tecla con «agradable». ¿Qué se infiere?|Más asociación entre flores y lo agradable|Una actitud explícita negativa hacia los insectos|Un sesgo de deseabilidad social en la tarea|La diferencia en tiempos de reacción entre combinaciones indica qué categorías están más asociadas.",
      "¿Qué uso del IAT tiene apoyo empírico?|Estudiar procesos en grupos de investigación|Decidir sobre la contratación de una persona|Demostrar el racismo oculto de alguien|Es una herramienta de investigación para grupos, no un instrumento de diagnóstico individual.",
      "¿Por qué interesó tanto el IAT al principio?|Parecía difícil de controlar a voluntad|Tenía una fiabilidad test-retest muy alta|Predecía bien la discriminación individual|Los tiempos de reacción de milisegundos son difíciles de controlar, lo que prometía esquivar la deseabilidad social."
    ],
    inc: [
      "Sobre el IAT|Permite afirmar que una persona concreta tiene prejuicios|Usa un par de conceptos y un par de atributos|Se ha aplicado a grupos sociales, marcas y autoconcepto|No es un instrumento de diagnóstico individual: no permite afirmar que una persona concreta tiene prejuicios."
    ],
    seq: [
      "Lógica del IAT|Practicar la clasificación de conceptos y atributos>Combinar flor y agradable en una tecla>Invertir la combinación de teclas>Comparar los tiempos de reacción"
    ],
    cls: [] }
] },
{ n: 16, t: "Evaluación en psicología de la salud", cap: 6, pir: "media", mods: [
  { t: "Calidad de vida relacionada con la salud: SF-36, SF-12, EQ-5D y WHOQOL-BREF",
    tip: "La calidad de vida relacionada con la salud es la valoración subjetiva del impacto de la salud en el funcionamiento físico, emocional y social, y complementa los indicadores clínicos. Los instrumentos genéricos permiten comparar enfermedades y los específicos son más sensibles a una concreta. El SF-36 tiene 8 escalas y 2 componentes sumario, el SF-12 da esos dos componentes, el EQ-5D tiene 5 dimensiones y una escala visual, y el WHOQOL-BREF, 4 dominios.",
    v: [
      "CVRS=Valoración subjetiva del impacto de la salud en el funcionamiento físico, emocional y social",
      "Instrumento genérico=Aplicable a cualquier población, permite comparar enfermedades",
      "Instrumento específico=Diseñado para una enfermedad, más sensible a sus cambios",
      "SF-36=Cuestionario de Ware y Sherbourne (1992) con 8 escalas y 2 componentes sumario",
      "SF-12=Versión breve que obtiene los dos componentes sumario con 12 ítems",
      "EQ-5D=Cinco dimensiones y una escala analógico-visual, del grupo EuroQol",
      "WHOQOL-BREF=26 ítems de la OMS en 4 dominios, incluido el ambiente",
      "Escala visual analógica=Línea en la que el paciente marca la intensidad de su dolor"
    ],
    g: [
      "En la versión española del SF-36, la escala de ___ solo alcanzó una consistencia de 0,45.|Función Social|Rol Emocional|Dolor Corporal",
      "La adaptación española del SF-36 es de Alonso, Prieto y ___ (1995).|Antó|Remor|Lobo",
      "El ___ incluye el entorno, como la vivienda o el acceso a servicios.|WHOQOL-BREF|EQ-5D|SF-12",
      "Por su brevedad, el EQ-5D es muy práctico en estudios de ___.|coste-efectividad|psicopatología|neuroimagen",
      "El cuestionario de dolor de ___ recoge también sus cualidades y su interferencia.|McGill|Cook-Medley|Fagerström"
    ],
    tf: [
      "El SF-36 mide la salud objetiva del paciente.|F|Es una medida subjetiva: recoge la percepción del paciente y complementa los indicadores clínicos sin sustituirlos.",
      "En el SF-36, las puntuaciones más altas indican mejor estado de salud.|V",
      "Los instrumentos específicos permiten comparar el impacto de enfermedades distintas.|F|Eso es propio de los genéricos. Los específicos son más sensibles a una enfermedad, pero no permiten comparar entre ellas.",
      "Lo habitual es combinar un instrumento genérico con uno específico.|V"
    ],
    q: [
      "Un equipo quiere comparar la calidad de vida de pacientes con asma, diabetes y artrosis. ¿Qué tipo de instrumento necesita?|Uno genérico, como el SF-36|Uno específico para cada enfermedad|Un análisis clínico de cada paciente|Los genéricos permiten comparar grupos clínicos distintos entre sí y con la población general.",
      "¿Qué instrumento describe la salud en cinco dimensiones y añade una escala analógico-visual?|EQ-5D|SF-12|WHOQOL-BREF|Sus dimensiones son movilidad, cuidado personal, actividades cotidianas, dolor o malestar y ansiedad o depresión.",
      "¿Qué se pierde al usar el SF-12 en lugar del SF-36?|El detalle de las ocho escalas|Los dos componentes sumario|La comparación con la población|El SF-12 obtiene los dos componentes sumario con 12 ítems, a cambio de perder el detalle de las escalas.",
      "¿Qué precaución sugiere la versión española del SF-36?|Cautela con la escala de Función Social|Cautela con el componente sumario mental|Evitarlo en población general sana|Casi todas las escalas iban de 0,71 a 0,94, pero Función Social solo alcanzó 0,45."
    ],
    inc: [
      "Sobre la calidad de vida relacionada con la salud|Sustituye a los indicadores clínicos de la enfermedad|Recoge la percepción del propio paciente|Sirve para comparar tratamientos y seguir la evolución|La CVRS complementa los indicadores clínicos, pero no los sustituye."
    ],
    seq: [],
    cls: [
      "Instrumento de CVRS|SF-36: 8 escalas; 2 componentes sumario; Ware y Sherbourne|EQ-5D: 5 dimensiones; escala analógico-visual; EuroQol|WHOQOL-BREF: 26 ítems; 4 dominios; ambiente"
    ] },
  { t: "La personalidad como factor de riesgo: tipos A, C y D",
    tip: "Friedman y Rosenman describieron el patrón tipo A: urgencia temporal, competitividad, implicación excesiva en el trabajo y hostilidad. El WCGS halló asociación con la cardiopatía coronaria, pero el MRFIT no la replicó, y hoy el consenso es que solo la hostilidad se asocia al riesgo. El tipo D de Denollet combina afectividad negativa e inhibición social (DS14) y está en debate. La evidencia sobre el tipo C y el cáncer es débil.",
    v: [
      "Patrón tipo A=Urgencia temporal, competitividad, implicación laboral excesiva y hostilidad",
      "Tipo B=Estilo tranquilo y poco competitivo, opuesto al A",
      "WCGS=Estudio que halló asociación del patrón A con la cardiopatía coronaria",
      "MRFIT=Estudio que no replicó la asociación global del patrón A",
      "Cook-Medley=Escala formada por ítems del MMPI que evalúa sobre todo hostilidad cínica",
      "DS14=Escala de 14 ítems de Denollet con una subescala para cada uno de dos rasgos",
      "Tipo C=Complacencia, poca asertividad y supresión de emociones negativas",
      "Alexitimia=Dificultad para reconocer lo que se siente y ponerle palabras"
    ],
    g: [
      "El patrón tipo A lo describieron los cardiólogos Friedman y ___.|Rosenman|Denollet|Jenkins",
      "La entrevista estructurada valora el contenido de las respuestas y también su ___.|forma|duración|veracidad",
      "La JAS se desarrolló en el marco del ___.|WCGS|MRFIT|MOS",
      "La medida más usada de la alexitimia es la ___.|TAS-20|DS14|JAS",
      "Se habla de patrón de ___, no de rasgo de personalidad en sentido estricto.|conducta|riesgo|enfermedad"
    ],
    tf: [
      "El patrón tipo A completo es un factor de riesgo coronario confirmado.|F|La asociación global no se replicó en el MRFIT. Solo la hostilidad mantiene apoyo como factor de riesgo.",
      "Se considera tipo D a quien puntúa alto en las dos subescalas de la DS14.|V",
      "Las réplicas sobre el tipo D han confirmado con más fuerza los hallazgos iniciales de Denollet.|F|Las réplicas han sido más débiles, y su valor predictivo sigue en debate.",
      "En la entrevista estructurada, el entrevistador provoca deliberadamente al evaluado.|V"
    ],
    q: [
      "Andrés, tras un infarto, puntúa alto en la escala de Cook-Medley y en las dos subescalas de la DS14. ¿Qué conclusión es adecuada?|Orienta la intervención hacia enfado y emociones|Predice con certeza una mala evolución|Confirma un patrón tipo C asociado al infarto|Los datos no predicen con certeza su evolución, pero orientan hacia el manejo del enfado y la expresión emocional.",
      "Un directivo muy rápido y ambicioso, pero amable y confiado, pregunta si su estilo daña su corazón. Según la evidencia, ¿qué componente importaría?|La hostilidad|La competitividad|La urgencia temporal|Ser rápido o ambicioso no parece dañino. Vivir en un estado de desconfianza y enfado crónico, sí.",
      "¿Qué instrumento corresponde a la personalidad tipo D?|La DS14|La JAS|La TAS-20|La DS14 de Denollet tiene una subescala de afectividad negativa y otra de inhibición social.",
      "¿Qué coste tiene difundir la idea del tipo C?|Responsabilizar al paciente de su cáncer|Retrasar los cribados oncológicos|Aumentar la alexitimia de los pacientes|Puede hacer que los pacientes se sientan responsables de su enfermedad por no haber expresado lo que sentían."
    ],
    inc: [
      "Sobre la personalidad como factor de riesgo|El tipo C tiene la DS14 como instrumento de referencia|La escala de Framingham recoge competitividad e impaciencia|La alexitimia es una variable relacionada con el tipo C|El tipo C no tiene instrumento de referencia. La DS14 evalúa el tipo D."
    ],
    seq: [],
    cls: [
      "Patrón de conducta|Tipo A: hostilidad; cardiopatía coronaria; JAS|Tipo C: supresión emocional; cáncer; evidencia débil|Tipo D: inhibición social; pronóstico cardiaco; DS14"
    ] },
  { t: "Estilo de vida y prevención",
    tip: "El estilo de vida es el conjunto relativamente estable de conductas de salud. Se evalúa con entrevista, autoinformes como el AUDIT, el Fagerström o el IPAQ, autorregistros y medidas objetivas, combinando fuentes. El modelo transteórico de Prochaska y DiClemente describe estadios de cambio, de la precontemplación al mantenimiento. También se evalúan la adherencia y el locus de control de la salud.",
    v: [
      "Estilo de vida=Conjunto relativamente estable de conductas de salud",
      "AUDIT=Autoinforme de la OMS sobre el consumo de alcohol",
      "Test de Fagerström=Autoinforme sobre la dependencia de la nicotina",
      "IPAQ=Autoinforme sobre la actividad física",
      "Reactividad=Cambio de la conducta por el mero hecho de registrarla",
      "URICA=Cuestionario para evaluar el estadio de cambio",
      "Adherencia=Coincidencia de la conducta del paciente con las indicaciones acordadas",
      "Locus de control de salud=Creencia sobre si la salud depende de uno, de los profesionales o del azar"
    ],
    g: [
      "Los autoinformes tienden a ___ las conductas mal vistas, como beber.|infravalorar|sobrevalorar|ignorar",
      "El estadio de preparación se incorporó al modelo en ___.|1992|1983|1984",
      "Una persona que lleva dos meses sin fumar está en el estadio de ___.|acción|preparación|mantenimiento",
      "Quien atribuye su salud al ___ tiende a implicarse menos en la prevención.|azar|ejercicio|esfuerzo",
      "Los recuentos de comprimidos no garantizan que el fármaco se haya ___.|tomado|recetado|comprado"
    ],
    tf: [
      "A una persona en precontemplación le sirve sobre todo un plan detallado para dejar de fumar.|F|Le sirve antes una intervención que aumente su motivación. El plan detallado encaja en estadios más avanzados.",
      "Los autorregistros son más precisos que los autoinformes, pero pueden modificar la conducta registrada.|V",
      "Los pacientes tienden a declarar menos adherencia de la real.|F|Tienden a declarar más adherencia de la real, por lo que conviene no fiarse solo del autoinforme.",
      "El modelo transteórico original de 1983 se debe a Prochaska y DiClemente.|V"
    ],
    q: [
      "Lucía tiene hipertensión, apenas camina y dice que debería moverse más, pero aún no lo ha intentado. ¿En qué estadio está?|Contemplación|Preparación|Precontemplación|Se plantea cambiar, pero sin intención inmediata ni pasos concretos, que definirían la preparación.",
      "Un fumador ha pedido cita en la unidad de tabaquismo y quiere dejarlo ya. ¿En qué estadio está?|Preparación|Contemplación|Acción|Tiene intención inmediata y da pequeños pasos. En acción ya habría cambiado la conducta.",
      "¿Qué método aporta una medida objetiva de la actividad física?|Un acelerómetro|El IPAQ|Una entrevista|Podómetros y acelerómetros son medidas objetivas. El IPAQ es un autoinforme.",
      "¿Por qué conviene combinar fuentes al evaluar el estilo de vida?|Cada método tiene sesgos propios|Los autoinformes son siempre falsos|Los autorregistros no son fiables|Los autoinformes infravaloran lo mal visto y los autorregistros son reactivos, así que se combinan."
    ],
    inc: [
      "Sobre la adherencia al tratamiento|Los recuentos de comprimidos la miden sin error|Se evalúa también con registros de dispensación|Incluye tomar la medicación y acudir a revisiones|Ningún método es perfecto: los recuentos no garantizan que el fármaco se haya tomado."
    ],
    seq: [
      "Estadios del modelo transteórico|Precontemplación>Contemplación>Preparación>Acción>Mantenimiento"
    ],
    cls: [
      "Conducta evaluada|Alcohol: AUDIT|Tabaco: test de Fagerström|Actividad física: IPAQ; podómetro; acelerómetro"
    ] },
  { t: "Estrés, afrontamiento, apoyo social, ansiedad y depresión hospitalarias",
    tip: "Las variables se ordenan en un modelo secuencial: características personales, estrés percibido, afrontamiento, malestar emocional y salud, con el apoyo social modulando todo el proceso. La PSS mide el estrés percibido, según el modelo transaccional de Lazarus y Folkman. El COPE y el Brief COPE evalúan el afrontamiento. La HADS, de 14 ítems, excluye los síntomas somáticos y es una herramienta de cribado.",
    v: [
      "Modelo transaccional=Estrés como resultado de valorar la amenaza y los propios recursos",
      "PSS=Escala de estrés percibido de Cohen, Kamarck y Mermelstein (1983)",
      "Afrontamiento=Esfuerzos cognitivos y conductuales para manejar una situación estresante",
      "Centrado en el problema=Planificar, buscar información y actuar",
      "Centrado en la emoción=Buscar consuelo, reinterpretar o desahogarse",
      "Brief COPE=Versión abreviada del COPE, muy usada con pacientes",
      "Apoyo percibido=Sentir que habrá alguien disponible si se necesita",
      "HADS=14 ítems de ansiedad y depresión sin síntomas somáticos"
    ],
    g: [
      "La PSS pregunta por el estrés sentido durante el último ___.|mes|año|trimestre",
      "En la adaptación de Remor (2006), la PSS de 10 ítems obtuvo un α de ___.|0,82|0,81|0,86",
      "El COPE fue desarrollado por Carver, Scheier y ___ (1989).|Weintraub|Folkman|Snaith",
      "Cada ítem de la HADS se puntúa de 0 a ___.|3|4|5",
      "El apoyo ___ se refiere al tamaño y la frecuencia de contacto de la red.|estructural|funcional|percibido"
    ],
    tf: [
      "La HADS establece el diagnóstico de los trastornos de ansiedad y depresivos.|F|Es una herramienta de cribado: una puntuación alta indica que conviene una evaluación más completa.",
      "El tipo de apoyo social que más se relaciona con la salud es el percibido.|V",
      "Centrarse en el problema es siempre la estrategia de afrontamiento más adaptativa.|F|Ninguna estrategia es buena en sí: centrarse en el problema ayuda si la situación es controlable, y aceptar, si no lo es.",
      "La HADS tiene 7 ítems de ansiedad y 7 de depresión.|V"
    ],
    q: [
      "Rosa, en quimioterapia, está muy cansada, pero puntúa bajo en la subescala de depresión de la HADS. ¿Por qué?|No pregunta por el cansancio|La quimioterapia anula la depresión|La HADS solo evalúa la ansiedad|La HADS excluye los síntomas somáticos y pregunta, entre otras cosas, por la capacidad de disfrutar.",
      "Ante un diagnóstico que no puede cambiarse, ¿qué afrontamiento suele ayudar más?|Aceptar o reinterpretar la situación|Planificar acciones para modificarla|Buscar información para resolverla|Centrarse en el problema ayuda cuando la situación es controlable. Si no lo es, ayuda aceptar o reinterpretar.",
      "¿Por qué tiene sentido medir el estrés percibido y no solo los acontecimientos vividos?|Porque el estrés depende de la valoración|Porque los acontecimientos no se recuerdan|Porque la PSS no tiene buena fiabilidad|Según Lazarus y Folkman, una situación es estresante cuando se percibe amenazante y los recursos no bastan.",
      "¿Qué cuestionario evalúa el apoyo social?|El Duke-UNC|La PSS|El Brief COPE|El apoyo social se evalúa con el cuestionario del estudio MOS o con el Duke-UNC."
    ],
    inc: [
      "Sobre el apoyo social|El estructural es el que más se relaciona con la salud|Actúa a lo largo de todo el proceso de estrés|Puede ser emocional, material o informativo|El que más se relaciona con la salud es el apoyo percibido, no el estructural."
    ],
    seq: [
      "Modelo de evaluación en psicología de la salud|Características personales>Estrés percibido>Afrontamiento>Malestar emocional>Salud y calidad de vida"
    ],
    cls: [
      "Tipo de afrontamiento|Centrado en el problema: planificar; buscar información; actuar|Centrado en la emoción: buscar consuelo; reinterpretar; desahogarse|Evitación: negación"
    ] }
] }
);

SP.register(window.COURSE);
})({});
