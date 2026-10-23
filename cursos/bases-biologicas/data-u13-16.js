// SAIMAP Psicología · Bases Biológicas · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "La sinapsis", cap: 4, pir: "alta", mods: [
  { t: "Sinapsis eléctricas y químicas",
    tip: "En la sinapsis eléctrica, uniones en hendidura formadas por conexinas comunican directamente los citoplasmas: la transmisión es casi instantánea, suele ser bidireccional y es poco modulable. En la química, un neurotransmisor cruza una hendidura de 20–40 nm con un retraso de alrededor de 1 ms, en un solo sentido y con gran capacidad de modulación, base de la plasticidad.",
    v: [
      "Sinapsis=Zona donde una neurona transmite información a otra célula",
      "Unión en hendidura=Canal que une directamente el citoplasma de dos células contiguas",
      "Conexinas=Proteínas que forman los canales de las sinapsis eléctricas",
      "Hendidura sináptica=Espacio de unos 20–40 nm entre las dos células de una sinapsis química",
      "Retraso sináptico=Demora de alrededor de 1 ms o menos propia de la transmisión química",
      "Sinapsis axodendrítica=Contacto de un axón con una dendrita, a menudo sobre una espina; la más frecuente",
      "Sinapsis axosomática=Contacto de un axón con el cuerpo celular; suele ser inhibitorio",
      "Sinapsis axoaxónica=Contacto sobre otro axón que modula la liberación de este"
    ],
    g: [
      "Los canales de las uniones en hendidura están formados por proteínas llamadas ___.|conexinas|integrinas|sinapsinas",
      "En la sinapsis química, la hendidura sináptica mide aproximadamente ___.|20–40 nm|2–4 nm|200–400 nm",
      "A diferencia de la química, la transmisión en una sinapsis eléctrica suele ser ___.|bidireccional|unidireccional|retrógrada",
      "Las sinapsis eléctricas resultan útiles sobre todo para ___ grupos de neuronas.|sincronizar|inhibir|modular",
      "Las sinapsis ___ suelen ser inhibitorias.|axosomáticas|axodendríticas|axoaxónicas"
    ],
    tf: [
      "Las sinapsis químicas son más modulables que las eléctricas y constituyen la base de la plasticidad.|V",
      "La sinapsis eléctrica tiene un retraso de alrededor de 1 ms por el paso de iones a través de las conexinas.|F|Ese retraso es propio de la sinapsis química; la eléctrica es prácticamente instantánea.",
      "La inmensa mayoría de las sinapsis del encéfalo son químicas.|V",
      "Las sinapsis axoaxónicas contactan con el soma de la neurona postsináptica y suelen ser excitadoras.|F|Las axoaxónicas contactan con otro axón y modulan su liberación; las que actúan sobre el soma son las axosomáticas."
    ],
    q: [
      "¿Qué rasgo caracteriza a la sinapsis química frente a la eléctrica?|Su alta capacidad de modulación|Su transmisión casi instantánea|Su conducción en ambos sentidos|La química es muy modulable (base de la plasticidad); la eléctrica es rápida, suele ser bidireccional y poco flexible.",
      "Un investigador quiere que un grupo de neuronas dispare de forma sincrónica y casi sin retraso. ¿Qué tipo de contacto es más adecuado?|Uniones en hendidura entre ellas|Sinapsis axoaxónicas moduladoras|Sinapsis químicas axodendríticas|Las uniones en hendidura permiten el paso directo de corriente, sin retraso sináptico, y sirven para sincronizar grupos de neuronas.",
      "Una sinapsis axoaxónica se caracteriza por…|regular la liberación de otro axón|ser el tipo más frecuente del encéfalo|contactar sobre espinas dendríticas|Se sitúa sobre otro axón y modula cuánto neurotransmisor libera; la más frecuente es la axodendrítica.",
      "¿Qué ocurre en una sinapsis eléctrica?|Pasa corriente iónica directamente|Se liberan vesículas por el calcio|Un transmisor cruza la hendidura|En la eléctrica no interviene un neurotransmisor: la corriente pasa por canales de conexinas de citoplasma a citoplasma."
    ],
    inc: [
      "Sobre las sinapsis eléctricas, ¿cuál es INCORRECTA?|Son unidireccionales y muy modulables|Unen directamente los citoplasmas|Su transmisión es casi instantánea|Suelen ser bidireccionales y poco flexibles; la unidireccionalidad y la alta modulación son propias de la química."
    ],
    seq: [],
    cls: [
      "Sinapsis eléctrica o química|Eléctrica: conexinas; paso directo de corriente; normalmente bidireccional; escasa flexibilidad|Química: hendidura de 20–40 nm; retraso sináptico; unidireccional; base de la plasticidad"
    ] },

  { t: "Pasos de la transmisión química",
    tip: "La transmisión química sigue una secuencia: síntesis, almacenamiento en vesículas, llegada del potencial de acción, entrada de Ca²⁺ por canales dependientes de voltaje, exocitosis mediada por proteínas SNARE, unión a receptores, respuesta postsináptica, inactivación y reciclaje de las vesículas. El calcio desencadena la liberación; la toxina botulínica la impide destruyendo las SNARE.",
    v: [
      "Vesícula sináptica=Saco membranoso en el que se almacena el neurotransmisor en el terminal",
      "Exocitosis=Fusión de la vesícula con la membrana y liberación de su contenido a la hendidura",
      "Proteínas SNARE=Proteínas que permiten la fusión de las vesículas con la membrana presináptica",
      "Canal de calcio=Se abre por voltaje al llegar el potencial de acción al terminal",
      "Botón terminal=Extremo del axón al que llega el potencial de acción y desde el que se libera el transmisor",
      "Toxina botulínica=Destruye proteínas SNARE e impide la liberación de acetilcolina, causando parálisis",
      "Reciclaje vesicular=Recuperación de la membrana de las vesículas tras la exocitosis",
      "Respuesta postsináptica=PEPS o PIPS que genera la unión del transmisor a sus receptores"
    ],
    g: [
      "La liberación del neurotransmisor la desencadena la entrada de ___ en el terminal.|calcio|sodio|potasio",
      "Los canales de calcio del botón terminal son dependientes de ___.|voltaje|ligando|proteína G",
      "A diferencia de los transmisores clásicos, los péptidos se sintetizan en el ___.|soma|terminal|axón",
      "La toxina botulínica impide la liberación de ___.|acetilcolina|glutamato|dopamina",
      "Tras la exocitosis, la membrana de las vesículas se ___ para formar vesículas nuevas.|recicla|degrada|recapta"
    ],
    tf: [
      "La llegada del potencial de acción provoca la fusión de las vesículas sin necesidad de calcio.|F|El potencial de acción abre canales de calcio dependientes de voltaje; es la entrada de Ca²⁺ la que desencadena la exocitosis.",
      "Los neurotransmisores peptídicos se sintetizan en el soma y no en el terminal.|V",
      "La toxina botulínica produce parálisis porque bloquea los receptores nicotínicos de acetilcolina.|F|Actúa en el terminal presináptico: destruye proteínas SNARE e impide que se libere la acetilcolina.",
      "En la secuencia de la transmisión química, la inactivación del neurotransmisor sigue a la respuesta postsináptica.|V"
    ],
    q: [
      "Un paciente recibe una dosis mínima de toxina botulínica en un músculo. ¿Qué paso de la transmisión se altera?|La exocitosis de la acetilcolina|La unión de la ACh al receptor|La degradación de la acetilcolina|Destruye proteínas SNARE: las vesículas no pueden fusionarse con la membrana y no se libera acetilcolina.",
      "Si se bloquean experimentalmente los canales de calcio dependientes de voltaje del terminal, ¿qué cabe esperar?|Menor liberación del transmisor|Ausencia de potencial de acción|Bloqueo de la recaptación|El potencial de acción llega igual, pero sin entrada de Ca²⁺ no se desencadena la exocitosis.",
      "¿Qué función cumplen las proteínas SNARE?|Fusionar vesículas con la membrana|Abrir los canales de calcio|Devolver el transmisor al terminal|Intervienen en la fusión de las vesículas con la membrana durante la exocitosis.",
      "¿Qué paso precede inmediatamente a la exocitosis?|La entrada de Ca²⁺ en el terminal|La unión al receptor postsináptico|El almacenamiento en vesículas|Tras la llegada del potencial de acción se abren canales de calcio; la entrada de Ca²⁺ desencadena entonces la exocitosis."
    ],
    inc: [
      "Sobre la liberación del neurotransmisor, ¿cuál es INCORRECTA?|La desencadena la entrada de sodio|Requiere la fusión de vesículas|Intervienen las proteínas SNARE|El ion que desencadena la exocitosis es el calcio, que entra por canales dependientes de voltaje."
    ],
    seq: [
      "Pasos de la transmisión química|Síntesis del neurotransmisor>Almacenamiento en vesículas>Llegada del potencial de acción>Entrada de Ca²⁺>Exocitosis>Unión a los receptores>Respuesta postsináptica>Inactivación>Reciclaje de las vesículas"
    ],
    cls: [] },

  { t: "Receptores ionotrópicos y metabotrópicos",
    tip: "El efecto de un neurotransmisor depende del receptor, no de la molécula. Los ionotrópicos son canales iónicos: efecto rápido y breve. Los metabotrópicos actúan mediante proteína G y segundos mensajeros (AMPc, IP3, DAG): efecto más lento, duradero y amplio, que puede llegar a la expresión génica. Los autorreceptores suelen frenar la liberación de la propia neurona.",
    v: [
      "Receptor ionotrópico=Receptor que es a la vez un canal iónico; efecto rápido y breve",
      "Receptor metabotrópico=Receptor acoplado a proteína G; efecto lento, duradero y amplio",
      "Proteína G=Intermediario que activa cadenas de segundos mensajeros tras la unión del transmisor",
      "Segundo mensajero=Molécula intracelular, como el IP3 o el DAG, que propaga la señal del receptor",
      "AMP cíclico=Mensajero intracelular que puede activar CREB y modificar la expresión de genes",
      "Autorreceptor=Receptor de la propia neurona que libera el transmisor; suele frenar su liberación",
      "Heterorreceptor=Receptor sensible a un transmisor distinto del que libera esa neurona",
      "Receptor 5-HT3=Receptor de serotonina que, a diferencia del resto, es ionotrópico"
    ],
    g: [
      "De los receptores de serotonina, solo el ___ es ionotrópico.|5-HT3|5-HT1|5-HT2",
      "El receptor GABA-A es un canal de ___.|cloruro|calcio|sodio",
      "Los receptores metabotrópicos actúan a través de una ___.|proteína G|proteína SNARE|conexina",
      "Los ___ suelen frenar la liberación o la síntesis del propio neurotransmisor.|autorreceptores|heterorreceptores|receptores AMPA",
      "Todos los receptores de ___ son metabotrópicos.|dopamina|glutamato|acetilcolina"
    ],
    tf: [
      "Un mismo neurotransmisor puede excitar o inhibir según el receptor al que se una.|V",
      "El receptor de glicina es metabotrópico y actúa mediante proteína G.|F|El receptor de glicina es ionotrópico: un canal de cloruro.",
      "Los receptores metabotrópicos pueden llegar a modificar la expresión de genes.|V",
      "Los receptores D2 de dopamina son ionotrópicos, a diferencia de los D1.|F|Todos los receptores dopaminérgicos, de D1 a D5, son metabotrópicos."
    ],
    q: [
      "Un fármaco bloquea selectivamente los receptores muscarínicos. ¿Qué respuesta colinérgica queda afectada?|La mediada por proteína G|La del canal iónico rápido|La de la unión neuromuscular|Los muscarínicos son metabotrópicos; los nicotínicos, ionotrópicos, son los de la unión neuromuscular.",
      "¿Qué par está formado solo por receptores ionotrópicos?|AMPA y 5-HT3|NMDA y mGluR|GABA-A y GABA-B|mGluR y GABA-B son metabotrópicos; AMPA y 5-HT3 son canales iónicos.",
      "Un autorreceptor presináptico se activa por el propio transmisor liberado. ¿Qué efecto típico tendrá?|Reducir la liberación posterior|Aumentar la síntesis del transmisor|Despolarizar la célula postsináptica|Los autorreceptores suelen ejercer retroalimentación negativa: frenan la liberación o la síntesis.",
      "Comparados con los ionotrópicos, los receptores metabotrópicos producen efectos…|más lentos y duraderos|más rápidos y breves|exclusivamente inhibidores|Actúan por segundos mensajeros: tardan más, duran más y pueden tener efectos amplios, incluida la expresión génica."
    ],
    inc: [
      "Sobre los receptores de la noradrenalina, ¿cuál es INCORRECTA?|Sus receptores α son ionotrópicos|Sus receptores β son metabotrópicos|Todos actúan mediante proteína G|Todos los receptores adrenérgicos, α y β, son metabotrópicos; la noradrenalina no tiene receptores ionotrópicos."
    ],
    seq: [],
    cls: [
      "Ionotrópico o metabotrópico|Ionotrópicos: AMPA; NMDA; GABA-A; nicotínico; 5-HT3; receptor de glicina|Metabotrópicos: mGluR; GABA-B; muscarínico; D1 a D5; adrenérgicos α y β"
    ] },

  { t: "Inactivación y cotransmisión",
    tip: "La señal termina cuando el neurotransmisor se retira de la hendidura: por recaptación (monoaminas, glutamato, GABA), degradación enzimática (acetilcolina, por la acetilcolinesterasa) o difusión. Muchas neuronas liberan más de una sustancia (cotransmisión); lo que se mantiene, en la formulación de Eccles del principio de Dale, es que liberan la misma combinación en todos sus terminales.",
    v: [
      "Recaptación=Retorno del transmisor al terminal o a los astrocitos mediante transportadores",
      "Degradación enzimática=Destrucción del neurotransmisor por una enzima en la hendidura",
      "Acetilcolinesterasa=Enzima responsable de inactivar la acetilcolina",
      "Difusión=Alejamiento del neurotransmisor de la sinapsis",
      "Cotransmisión=Liberación de más de una sustancia por una misma neurona",
      "Principio de Dale (Eccles)=Una neurona libera las mismas sustancias en todos sus terminales",
      "Transmisión de volumen=Acción a distancia de un neuromodulador sobre muchas neuronas a la vez",
      "ISRS=Antidepresivos que bloquean el transportador de recaptación de serotonina"
    ],
    g: [
      "La acetilcolina se inactiva principalmente por la acción de la ___.|acetilcolinesterasa|monoamino oxidasa|colina acetiltransferasa",
      "La cocaína actúa bloqueando los ___ de las monoaminas.|transportadores|receptores|autorreceptores",
      "En algunas neuronas que proyectan al núcleo accumbens se coliberan dopamina y ___.|glutamato|serotonina|acetilcolina",
      "La formulación de ___ del principio de Dale es compatible con la cotransmisión.|Eccles|Cajal|Golgi",
      "Algunos neuromoduladores, como la serotonina, actúan a distancia mediante la transmisión de ___.|volumen|contacto|hendidura"
    ],
    tf: [
      "La recaptación es el principal mecanismo de inactivación del glutamato y del GABA.|V",
      "Una neurona que libera dopamina y glutamato incumple el principio de Dale tal como lo formuló Eccles.|F|Eccles afirma que una neurona libera las mismas sustancias en todos sus terminales, lo que es compatible con la cotransmisión.",
      "Los transportadores pueden devolver el neurotransmisor al terminal presináptico o a los astrocitos.|V",
      "La acetilcolina se retira de la hendidura sobre todo por recaptación, como las monoaminas.|F|La acetilcolina se inactiva sobre todo por degradación enzimática, mediante la acetilcolinesterasa."
    ],
    q: [
      "Una paciente empieza a tomar un ISRS. ¿Cuál es el efecto sináptico inmediato del fármaco?|Más serotonina en la hendidura|Más síntesis de serotonina|Menos degradación por la MAO|Bloquea el transportador de recaptación, de modo que la serotonina permanece más tiempo en la hendidura.",
      "Un inhibidor de la acetilcolinesterasa produce, en las sinapsis colinérgicas,…|más ACh disponible en la hendidura|menor liberación de acetilcolina|bloqueo de los receptores nicotínicos|Al impedir su degradación, la acetilcolina permanece y actúa más tiempo sobre sus receptores.",
      "¿Qué afirmación recoge mejor el estado actual del principio de Dale?|Una neurona libera igual mezcla en todos sus terminales|Una neurona libera un único neurotransmisor clásico|Cada terminal de una neurona libera una sustancia distinta|La versión «una neurona, un neurotransmisor» es incorrecta; la de Eccles (mismas sustancias en todos los terminales) se mantiene.",
      "La transmisión de volumen se caracteriza por…|afectar a muchas neuronas a la vez|requerir uniones en hendidura|limitarse a una única sinapsis concreta|Neuromoduladores como la dopamina o la serotonina difunden a distancia y actúan sobre muchas neuronas a la vez."
    ],
    inc: [
      "Sobre los mecanismos de inactivación, ¿cuál es INCORRECTA?|La MAO degrada la acetilcolina|La cocaína bloquea transportadores|Los ISRS bloquean la recaptación|La acetilcolina la degrada la acetilcolinesterasa; la MAO degrada monoaminas."
    ],
    seq: [],
    cls: [
      "Mecanismo principal de inactivación|Recaptación: dopamina; noradrenalina; serotonina; glutamato; GABA|Degradación enzimática: acetilcolina"
    ] }
] },

{ n: 14, t: "Neurotransmisores y sistemas de neurotransmisión", cap: 4, pir: "alta", mods: [
  { t: "Aminoácidos y acetilcolina",
    tip: "El glutamato es el principal excitador del sistema nervioso central: los receptores AMPA median la excitación rápida y los NMDA, bloqueados por magnesio en reposo, son clave en la potenciación a largo plazo. El GABA es el principal inhibidor del encéfalo y la glicina, de la médula espinal. La acetilcolina actúa en la unión neuromuscular y, desde el núcleo basal de Meynert, en la atención y la memoria.",
    v: [
      "Glutamato=Principal neurotransmisor excitador del sistema nervioso central",
      "GABA=Principal neurotransmisor inhibidor del encéfalo; se sintetiza a partir del glutamato",
      "Glicina=Principal neurotransmisor inhibidor de la médula espinal y del tronco encefálico",
      "Receptor NMDA=Receptor de glutamato bloqueado por magnesio en reposo que deja pasar calcio",
      "Excitotoxicidad=Daño neuronal por exceso de glutamato, como el que ocurre en el ictus",
      "Estricnina=Bloquea los receptores de glicina y causa convulsiones",
      "Núcleo basal de Meynert=Origen de proyecciones colinérgicas a la corteza; degenera en el Alzheimer",
      "Benzodiacepinas=Fármacos que potencian la inhibición actuando sobre receptores GABA-A"
    ],
    g: [
      "En reposo, el canal del receptor NMDA está bloqueado por un ion de ___.|magnesio|calcio|cloruro",
      "Los receptores ___ median la excitación glutamatérgica rápida.|AMPA|mGluR|GABA-B",
      "La estricnina provoca convulsiones porque bloquea los receptores de ___.|glicina|dopamina|glutamato",
      "El GABA se sintetiza a partir del ___.|glutamato|triptófano|aspartato",
      "La acetilcolina es el neurotransmisor de las sinapsis posganglionares ___.|parasimpáticas|simpáticas|sensitivas"
    ],
    tf: [
      "El receptor NMDA se abre con la sola unión del glutamato, aunque la membrana esté en reposo.|F|Necesita además que la membrana esté despolarizada, para retirar el magnesio que bloquea el canal en reposo.",
      "Las benzodiacepinas, los barbitúricos y el alcohol potencian la inhibición mediada por receptores GABA-A.|V",
      "La glicina es el principal neurotransmisor inhibidor de la corteza cerebral.|F|Lo es de la médula espinal y del tronco encefálico; en el encéfalo, el principal inhibidor es el GABA.",
      "Los inhibidores de la acetilcolinesterasa son un tratamiento sintomático, no curativo, del Alzheimer.|V"
    ],
    q: [
      "Tras un ictus, el tejido que rodea la lesión sufre daño adicional por exceso de un neurotransmisor. ¿Cuál?|Glutamato|Dopamina|Acetilcolina|Es la excitotoxicidad: en exceso, el glutamato resulta tóxico para las neuronas.",
      "¿Qué dos condiciones necesita el receptor NMDA para abrirse?|Glutamato y membrana despolarizada|Glutamato y entrada previa de calcio|Glicina y membrana hiperpolarizada|Sin despolarización previa, el magnesio bloquea el canal aunque el glutamato se haya unido.",
      "Una persona toma una benzodiacepina. ¿Cuál es el mecanismo de su efecto ansiolítico y sedante?|Potencia la entrada de cloruro por GABA-A|Bloquea los receptores NMDA del glutamato|Activa los receptores GABA-B metabotrópicos|Actúa sobre el receptor GABA-A, un canal de cloruro, y potencia la inhibición de la neurona.",
      "Las neuronas colinérgicas que proyectan a la corteza y degeneran en el Alzheimer se encuentran en…|el núcleo basal de Meynert|el núcleo tuberomamilar hipotalámico|el locus coeruleus de la protuberancia|El núcleo basal de Meynert aporta acetilcolina a la corteza; su pérdida justifica los inhibidores de la acetilcolinesterasa."
    ],
    inc: [
      "Sobre la acetilcolina, ¿cuál es INCORRECTA?|Usa receptores muscarínicos en la placa motora|Actúa en las preganglionares autónomas|La sintetiza la colina acetiltransferasa|En la unión neuromuscular, los receptores de acetilcolina son nicotínicos, es decir, ionotrópicos."
    ],
    seq: [],
    cls: [
      "Aminoácidos neurotransmisores|Excitador: glutamato; receptores AMPA; receptores NMDA|Inhibidor: GABA; glicina; receptores GABA-A"
    ] },

  { t: "Catecolaminas: síntesis y vías",
    tip: "Las catecolaminas se sintetizan a partir de la tirosina: la tirosina hidroxilasa (paso limitante) forma L-DOPA, la DOPA descarboxilasa forma dopamina, la dopamina beta-hidroxilasa forma noradrenalina y la PNMT, sobre todo en la médula suprarrenal, forma adrenalina. Hay cuatro vías dopaminérgicas (nigroestriatal, mesolímbica, mesocortical y tuberoinfundibular); la noradrenalina encefálica procede del locus coeruleus.",
    v: [
      "Tirosina hidroxilasa=Enzima del paso limitante: convierte tirosina en L-DOPA",
      "DOPA descarboxilasa=Enzima del segundo paso de la síntesis de catecolaminas",
      "Dopamina beta-hidroxilasa=Enzima del tercer paso: forma noradrenalina",
      "PNMT=Enzima que forma adrenalina, sobre todo en la médula suprarrenal",
      "MAO y COMT=Enzimas que degradan las monoaminas",
      "Vía nigroestriatal=Proyección de la sustancia negra al estriado; degenera en el Parkinson",
      "Vía mesocortical=Proyección del área tegmental ventral a la corteza prefrontal",
      "Locus coeruleus=Núcleo de la protuberancia, principal fuente de noradrenalina encefálica"
    ],
    g: [
      "El paso limitante de la síntesis de catecolaminas es la conversión de tirosina en ___.|L-DOPA|dopamina|noradrenalina",
      "La L-DOPA se usa en el Parkinson porque, a diferencia de la dopamina, atraviesa la ___.|barrera hematoencefálica|membrana postsináptica|hendidura sináptica",
      "La vía dopaminérgica ___ inhibe la secreción de prolactina.|tuberoinfundibular|nigroestriatal|mesocortical",
      "La vía mesolímbica va del área tegmental ventral al ___ y la amígdala.|núcleo accumbens|estriado dorsal|hipotálamo",
      "La conversión de noradrenalina en adrenalina ocurre sobre todo en la ___.|médula suprarrenal|corteza suprarrenal|sustancia negra"
    ],
    tf: [
      "La DOPA descarboxilasa cataliza el paso limitante de la síntesis de catecolaminas.|F|El paso limitante lo cataliza la tirosina hidroxilasa, que convierte la tirosina en L-DOPA.",
      "La noradrenalina se sintetiza a partir de la dopamina.|V",
      "La vía mesocortical nace en la sustancia negra y se relaciona sobre todo con el movimiento.|F|Nace en el área tegmental ventral, llega a la corteza prefrontal y participa en funciones ejecutivas.",
      "El locus coeruleus proyecta a casi todo el sistema nervioso central y regula la alerta y la respuesta al estrés.|V"
    ],
    q: [
      "Un paciente con Parkinson recibe L-DOPA en lugar de dopamina. ¿Por qué?|Solo la L-DOPA cruza la barrera hematoencefálica|La L-DOPA evita la degradación por la MAO y la COMT|La L-DOPA activa directamente los receptores D2|La dopamina no atraviesa la barrera hematoencefálica; la L-DOPA sí, y en el encéfalo se convierte en dopamina.",
      "Un fármaco bloquea la dopamina beta-hidroxilasa. ¿Qué cabe esperar?|Menos noradrenalina, no menos dopamina|Menos dopamina y menos noradrenalina|Menos L-DOPA disponible en el terminal|Esa enzima convierte dopamina en noradrenalina; los pasos previos (L-DOPA y dopamina) no se ven afectados.",
      "Una paciente que toma un fármaco que bloquea los receptores D2 presenta un aumento de prolactina. ¿Qué proyección explica este efecto?|Hipotálamo-hipófisis|ATV-accumbens|Sustancia negra-estriado|La vía tuberoinfundibular (hipotálamo-hipófisis) inhibe la prolactina; si se bloquea su acción, la prolactina aumenta.",
      "¿Qué núcleo es el principal origen de la noradrenalina del encéfalo?|Locus coeruleus|Núcleos del rafe|Sustancia negra|Está en la protuberancia y proyecta a casi todo el sistema nervioso central."
    ],
    inc: [
      "Sobre la síntesis de catecolaminas, ¿cuál es INCORRECTA?|La adrenalina precede a la noradrenalina|La tirosina es el aminoácido de partida|La dopamina precede a la noradrenalina|El orden es tirosina, L-DOPA, dopamina, noradrenalina y, por último, adrenalina."
    ],
    seq: [
      "Síntesis de las catecolaminas|Tirosina>L-DOPA>Dopamina>Noradrenalina>Adrenalina"
    ],
    cls: [
      "Origen de cada vía dopaminérgica|Sustancia negra: vía nigroestriatal|Área tegmental ventral: vía mesolímbica; vía mesocortical|Hipotálamo: vía tuberoinfundibular"
    ] },

  { t: "Serotonina, histamina, péptidos y otros mensajeros",
    tip: "La serotonina se sintetiza a partir del triptófano y procede de los núcleos del rafe; la histamina, del núcleo tuberomamilar, favorece la vigilia. Los neuropéptidos (opioides, sustancia P, oxitocina, neuropéptido Y) suelen actuar como neuromoduladores. La adenosina favorece el sueño y la cafeína bloquea sus receptores. El óxido nítrico y los endocannabinoides pueden actuar de forma retrógrada.",
    v: [
      "Triptófano hidroxilasa=Enzima del paso limitante en la síntesis de serotonina",
      "Núcleos del rafe=Origen de la serotonina del encéfalo, en el tronco encefálico",
      "Núcleo tuberomamilar=Núcleo hipotalámico de origen de la histamina; favorece la vigilia",
      "Opioides endógenos=Endorfinas, encefalinas y dinorfinas: analgesia y recompensa",
      "Sustancia P=Neuropéptido que interviene en la transmisión del dolor",
      "Adenosina=Purina que se acumula durante la vigilia y favorece el sueño",
      "Óxido nítrico=Gas que no se almacena en vesículas y puede actuar de forma retrógrada",
      "Anandamida=Endocannabinoide que reduce la liberación de transmisores en el terminal presináptico"
    ],
    g: [
      "La serotonina se sintetiza a partir del aminoácido ___.|triptófano|tirosina|glutamato",
      "La cafeína favorece la vigilia porque bloquea los receptores de ___.|adenosina|histamina|serotonina",
      "El THC del cannabis actúa sobre los receptores ___.|CB1|5-HT3|GABA-A",
      "El neuropéptido Y se relaciona sobre todo con el ___.|apetito|dolor|sueño",
      "Los endocannabinoides actúan de forma ___, de la neurona postsináptica a la presináptica.|retrógrada|anterógrada|recíproca"
    ],
    tf: [
      "El óxido nítrico se almacena en vesículas y se libera por exocitosis, como los transmisores clásicos.|F|Se produce cuando hace falta y atraviesa las membranas; no se almacena en vesículas.",
      "Los antihistamínicos clásicos causan somnolencia porque atraviesan la barrera hematoencefálica y bloquean la histamina, que favorece la vigilia.|V",
      "La mayoría de los receptores de serotonina son ionotrópicos.|F|Solo el 5-HT3 es ionotrópico; la mayoría de los receptores de serotonina son metabotrópicos.",
      "Los neuropéptidos a menudo se coliberan con un neurotransmisor clásico.|V"
    ],
    q: [
      "Un estudiante toma mucho café para no dormirse antes de un examen. ¿Sobre qué sistema actúa la cafeína?|Bloquea receptores de adenosina|Activa receptores de histamina|Inhibe la recaptación de serotonina|La adenosina se acumula durante la vigilia y favorece el sueño; la cafeína bloquea sus receptores.",
      "¿Qué tienen en común el óxido nítrico y los endocannabinoides?|Pueden actuar de forma retrógrada|Se almacenan en vesículas grandes|Son péptidos sintetizados en el soma|Ambos pueden actuar desde la neurona postsináptica sobre la presináptica.",
      "¿Dónde se encuentra el núcleo de origen de la histamina cerebral?|En el hipotálamo|En el tronco encefálico|En el prosencéfalo basal|El núcleo tuberomamilar es hipotalámico; la histamina que libera favorece la vigilia.",
      "¿Cuál de estos neuropéptidos interviene en la analgesia endógena?|La dinorfina|La sustancia P|El neuropéptido Y|Las dinorfinas son opioides endógenos; la sustancia P participa en la transmisión del dolor."
    ],
    inc: [
      "Sobre la serotonina, ¿cuál es INCORRECTA?|Su paso limitante es la tirosina hidroxilasa|Procede de los núcleos del rafe|Interviene en el sueño y el apetito|El paso limitante de la serotonina lo realiza la triptófano hidroxilasa; la tirosina hidroxilasa es de las catecolaminas."
    ],
    seq: [],
    cls: [
      "Tipo de mensajero|Neuropéptidos: endorfinas; sustancia P; oxitocina; neuropéptido Y|Purinas: ATP; adenosina|Mensajeros retrógrados: óxido nítrico; anandamida"
    ] },

  { t: "Dopamina y serotonina sin simplificaciones",
    tip: "La dopamina mesolímbica se relaciona más con el «querer» (saliencia de incentivo) y con el error de predicción de la recompensa que con el «gustar»; el placer depende de puntos calientes hedónicos con opioides y endocannabinoides. La depresión no se explica por «falta de serotonina»: la revisión de Moncrieff et al. (2022), con críticas metodológicas, no halló evidencia consistente, y el consenso es que es multifactorial.",
    v: [
      "Saliencia de incentivo=Valor motivacional de una recompensa, el «querer»",
      "Error de predicción=Diferencia entre la recompensa esperada y la obtenida",
      "Puntos calientes hedónicos=Pequeñas zonas cerebrales de las que depende el placer, el «gustar»",
      "Opioides y endocannabinoides=Mensajeros químicos con más peso que la dopamina en el placer en sí",
      "Dopamina mesolímbica=Proyección del ATV al accumbens ligada al «querer» y al error de predicción",
      "Moncrieff et al. (2022)=Revisión sin evidencia consistente de que la depresión se deba a poca serotonina",
      "Desequilibrio químico=Teoría simple de la depresión que la comunidad científica considera no válida",
      "Berridge y Robinson=Autores que separan el «querer» dopaminérgico del «gustar»"
    ],
    g: [
      "Según Berridge y Robinson, la dopamina mesolímbica se relaciona más con el querer que con el ___.|gustar|buscar|desear",
      "El placer depende sobre todo de puntos calientes en los que intervienen opioides y ___.|endocannabinoides|catecolaminas|aminoácidos",
      "La diferencia entre la recompensa esperada y la obtenida se denomina error de ___.|predicción|saliencia|refuerzo",
      "La revisión de Moncrieff et al. no halló evidencia ___ de que la depresión se deba a niveles bajos de serotonina.|consistente|alguna|previa",
      "Según el consenso actual, la depresión es un trastorno ___.|multifactorial|serotoninérgico|dopaminérgico"
    ],
    tf: [
      "Que los ISRS sean eficaces en muchos casos demuestra que la depresión se debe a un déficit de serotonina.|F|La eficacia de un fármaco no demuestra la causa; la teoría simple del desequilibrio químico no es válida.",
      "La dopamina mesolímbica se relaciona con el error de predicción de la recompensa.|V",
      "La revisión de Moncrieff et al. recibió críticas metodológicas, pero se comparte que la teoría simple del desequilibrio químico no es válida.|V",
      "El placer que produce una recompensa depende sobre todo de la dopamina del núcleo accumbens.|F|El «gustar» depende de puntos calientes con opioides y endocannabinoides; la dopamina se asocia al «querer»."
    ],
    q: [
      "Una persona con una adicción busca la droga con intensidad, aunque dice que ya apenas disfruta al consumirla. ¿Qué concepto encaja mejor?|Saliencia de incentivo|Error de predicción negativo|Puntos calientes hedónicos|Ilustra la disociación entre el «querer», ligado a la dopamina mesolímbica, y el «gustar» o placer en sí.",
      "Un mono recibe un zumo inesperado y, en otra prueba, un zumo totalmente anunciado por una señal. ¿Qué concepto describe la diferencia en la respuesta dopaminérgica?|Error de predicción|Gustar hedónico|Transmisión de volumen|La señal dopaminérgica refleja la diferencia entre lo esperado y lo obtenido, mayor ante una recompensa inesperada.",
      "¿Qué conclusión se ajusta mejor al estado actual sobre serotonina y depresión?|La hipótesis simple del déficit no se sostiene|Está demostrado que la serotonina no interviene|La depresión se debe a un exceso de serotonina|No hay evidencia consistente de un déficit; la depresión es multifactorial, lo que no excluye que la serotonina participe.",
      "¿Qué sistemas intervienen sobre todo en el «gustar», según la investigación actual?|Opioides y endocannabinoides|Dopamina mesolímbica y noradrenalina|Serotonina y dopamina|Los puntos calientes hedónicos dependen sobre todo de opioides y endocannabinoides (Berridge y Robinson, 2016)."
    ],
    inc: [
      "Sobre la dopamina mesolímbica, ¿cuál es INCORRECTA?|Es la molécula del placer en sí|Se asocia a la motivación|Codifica errores de predicción|El placer depende sobre todo de puntos calientes con opioides y endocannabinoides; la dopamina se asocia al «querer»."
    ],
    seq: [],
    cls: [
      "«Querer» o «gustar»|Querer: dopamina mesolímbica; saliencia de incentivo; búsqueda de la recompensa|Gustar: puntos calientes hedónicos; opioides; endocannabinoides"
    ] }
] },

{ n: 15, t: "Bases moleculares, genoma y epigenética", cap: 5, pir: "media", mods: [
  { t: "Evolución y la falsa pregunta «¿heredado o aprendido?»",
    tip: "La conducta resulta de la historia evolutiva de la especie y del desarrollo de cada individuo. Preguntar si una conducta es innata o aprendida está mal planteado: los genes se expresan siempre en un ambiente. Se habla de interacción genotipo-ambiente (el efecto de uno depende del otro) y de correlación genotipo-ambiente (los genes influyen en los ambientes que se reciben o se buscan).",
    v: [
      "Selección natural=Proceso que acumula rasgos que favorecen la supervivencia y la reproducción",
      "Adaptación=Rasgo que aumenta la supervivencia o la reproducción en un ambiente dado",
      "Darwin y Wallace=Proponentes de la teoría de la selección natural",
      "Interacción genotipo-ambiente=El efecto del ambiente depende del genotipo, y viceversa",
      "Correlación genotipo-ambiente=Influencia de los genes en los ambientes que alguien recibe o busca",
      "Búsqueda de sensaciones=Ejemplo de tendencia que lleva a elegir actividades de riesgo",
      "Historia evolutiva=Pasado de la especie que, junto al desarrollo, explica la conducta",
      "Desarrollo individual=Historia de cada organismo que, junto a la evolución, explica la conducta"
    ],
    g: [
      "La selección natural fue propuesta por Charles Darwin y Alfred Russel ___.|Wallace|Mendel|Crick",
      "Que alguien con tendencia a la búsqueda de sensaciones elija actividades de riesgo ilustra la ___ genotipo-ambiente.|correlación|interacción|dependencia",
      "En la interacción genotipo-ambiente, el efecto de un ambiente depende del ___.|genotipo|fenotipo|cariotipo",
      "Los rasgos que aumentan la supervivencia y la reproducción en un ambiente se denominan ___.|adaptaciones|mutaciones|polimorfismos",
      "La pregunta útil es cuánto explica cada factor de las diferencias ___ en una población.|entre personas|dentro de cada persona|entre culturas"
    ],
    tf: [
      "Según los genetistas de la conducta, la pregunta «¿innato o aprendido?» está mal planteada.|V",
      "La correlación genotipo-ambiente significa que el efecto de un ambiente varía según el genotipo.|F|Eso es la interacción; la correlación es la influencia de los genes en los ambientes que se reciben o se buscan.",
      "Los genes pueden influir en los ambientes que una persona busca activamente.|V",
      "Si una conducta tiene una base genética, el ambiente ya no puede influir en ella.|F|Los genes se expresan siempre en un ambiente, y el ambiente actúa sobre una dotación genética concreta."
    ],
    q: [
      "Un fármaco mejora la memoria en ratones de una cepa, pero no en los de otra. Este resultado ilustra…|una interacción genotipo-ambiente|una correlación genotipo-ambiente|una adaptación por selección natural|El efecto del factor ambiental (el fármaco) depende del genotipo de cada cepa.",
      "Unos padres aficionados a la lectura transmiten sus genes a su hija y, además, llenan la casa de libros. ¿Qué fenómeno describe?|Correlación genotipo-ambiente|Interacción genotipo-ambiente|Transmisión independiente|Los genes se asocian con el ambiente que la niña recibe: es una correlación genotipo-ambiente.",
      "¿Cuál es la forma científicamente útil de plantear la relación entre genes y conducta?|Cuánto explica cada factor de la variación|Qué porcentaje de cada conducta es heredado|Si cada conducta es innata o aprendida|La pregunta útil es cuánto explica cada factor de las diferencias entre personas en una población y cómo interactúan.",
      "¿Qué explica la selección natural?|La acumulación de rasgos adaptativos|La transmisión de lo aprendido|La aparición dirigida de mutaciones|Explica cómo se acumulan los rasgos que aumentan la supervivencia y la reproducción en un ambiente determinado."
    ],
    inc: [
      "Sobre genes y ambiente, ¿cuál es INCORRECTA?|Los genes actúan con independencia del ambiente|El ambiente actúa sobre una dotación genética|Los genes influyen en los ambientes buscados|Los genes no actúan en el vacío: se expresan siempre en un ambiente."
    ],
    seq: [],
    cls: [
      "Interacción o correlación genotipo-ambiente|Interacción: un fármaco eficaz solo en una cepa; un ambiente que afecta distinto según el genotipo|Correlación: elegir actividades de riesgo por buscar sensaciones; padres lectores con casa llena de libros"
    ] },

  { t: "El dogma central de la biología molecular",
    tip: "El ADN es una doble hélice cuyas bases se emparejan A con T y G con C. Según el dogma central (Crick, 1958), el ADN se replica, se transcribe en el núcleo a ARN mensajero (con uracilo en lugar de timina), madura eliminando intrones y se traduce en los ribosomas leyendo codones de tres bases. La transcriptasa inversa de algunos virus es una excepción a ese flujo.",
    v: [
      "Replicación=Copia del ADN antes de la división celular",
      "Transcripción=Copia de un gen de ADN en ARN mensajero, en el núcleo",
      "Traducción=Síntesis de una proteína a partir del ARN mensajero en los ribosomas",
      "Codón=Secuencia de tres bases que corresponde a un aminoácido",
      "Intrón=Fragmento que se elimina del ARN durante la maduración",
      "Splicing alternativo=Combinación distinta de exones que permite obtener varias proteínas de un gen",
      "Transcriptasa inversa=Enzima de algunos virus que fabrica ADN a partir de ARN",
      "ARN de transferencia=Molécula que aporta los aminoácidos durante la síntesis de proteínas"
    ],
    g: [
      "En el ARN, el ___ sustituye a la timina.|uracilo|citosina|adenina",
      "La traducción tiene lugar en los ___ del citoplasma.|ribosomas|núcleos|lisosomas",
      "Durante la maduración del ARN se eliminan los ___ y se unen los exones.|intrones|codones|anticodones",
      "En el ADN, la guanina se empareja con la ___.|citosina|timina|adenina",
      "Watson y Crick describieron la estructura del ADN a partir de los datos de Maurice Wilkins y Rosalind ___.|Franklin|Wallace|Nurk"
    ],
    tf: [
      "La transcripción tiene lugar en los ribosomas del citoplasma.|F|La transcripción ocurre en el núcleo; en los ribosomas tiene lugar la traducción.",
      "Un mismo gen puede dar lugar a varias proteínas gracias al splicing alternativo.|V",
      "Durante la traducción, el ARN mensajero se lee de tres en tres bases.|V",
      "El flujo de información ADN → ARN → proteína no admite ninguna excepción conocida.|F|Hay excepciones: la transcriptasa inversa de algunos virus fabrica ADN a partir de ARN."
    ],
    q: [
      "¿Qué etapa del dogma central se produce en el núcleo y genera ARN mensajero?|Transcripción|Traducción|Replicación|La transcripción copia un gen en ARN mensajero; la traducción, en los ribosomas, sintetiza la proteína.",
      "Un virus introduce su ARN en una célula y esta acaba con ADN viral. ¿Qué lo hace posible?|La transcriptasa inversa|El ribosoma del citoplasma|El ARN de transferencia|La transcriptasa inversa de algunos virus fabrica ADN a partir de ARN, una excepción al flujo habitual.",
      "¿Qué papel cumple el ARN de transferencia en la traducción?|Aportar aminoácidos al ribosoma|Copiar el gen de ADN en el núcleo|Eliminar los intrones del ARN|Cada codón del ARN mensajero indica un aminoácido, que aporta el ARN de transferencia.",
      "¿Por qué el número de genes no basta para conocer el número de proteínas distintas?|Por el splicing alternativo|Por la replicación del ADN|Por el emparejamiento A-T|Combinando exones de distintas formas, un mismo gen puede dar lugar a varias proteínas."
    ],
    inc: [
      "Sobre el ADN y el ARN, ¿cuál es INCORRECTA?|La adenina se empareja con la citosina|El ARN usa uracilo en lugar de timina|El ADN es una doble hélice|La adenina se empareja con la timina, y la guanina con la citosina."
    ],
    seq: [
      "Del gen a la proteína|Transcripción en el núcleo>Maduración del ARN>Llegada del ARN mensajero al ribosoma>Lectura de codones>Proteína sintetizada"
    ],
    cls: [] },

  { t: "Cromosomas y genoma humano",
    tip: "Las células humanas tienen 46 cromosomas: 22 pares de autosomas y un par sexual; los gametos, 23, gracias a la meiosis. El Proyecto Genoma Humano publicó en 2003 una secuencia que cubría en torno al 92 %; el consorcio T2T publicó en 2022 la primera completa, y en 2023 llegó el primer borrador del pangenoma. Hay unos 19 000–20 000 genes codificantes, y solo el 1–2 % del genoma codifica proteínas.",
    v: [
      "Autosomas=Los 22 pares de cromosomas no sexuales",
      "Cariotipo=Representación ordenada de los cromosomas de una persona",
      "Meiosis=División celular que reduce a la mitad el número de cromosomas",
      "Gametos=Células reproductoras humanas, con 23 cromosomas",
      "Proyecto Genoma Humano=Secuencia publicada en 2003 que cubría en torno al 92 % del genoma",
      "Consorcio T2T=Publicó en 2022 la primera secuencia completa, sin huecos, del genoma humano",
      "Pangenoma humano=Borrador de 2023 que reúne genomas de 47 personas de orígenes diversos",
      "Genes codificantes=Unos 19 000–20 000 en el genoma humano"
    ],
    g: [
      "Las células humanas tienen 46 cromosomas, de los cuales ___ pares son autosomas.|22|23|21",
      "En 2003, la secuencia del Proyecto Genoma Humano cubría alrededor del ___ del genoma.|92 %|99 %|75 %",
      "Solo en torno al ___ del genoma humano codifica proteínas.|1–2 %|10–12 %|25–30 %",
      "La primera secuencia completa del genoma humano la publicó en 2022 el consorcio ___.|T2T|ENCODE|HapMap",
      "El primer borrador del pangenoma humano reunió genomas de ___ personas de orígenes diversos.|47|23|470"
    ],
    tf: [
      "La secuencia del genoma publicada en 2003 era completa y no tenía huecos.|F|Cubría en torno al 92 %; la primera secuencia completa la publicó el consorcio T2T en 2022.",
      "El genoma humano contiene muchos menos genes codificantes de lo que se esperaba antes de secuenciarlo.|V",
      "Gran parte del genoma no codificante incluye secuencias reguladoras, genes de ARN no codificante y secuencias repetidas.|V",
      "Los gametos humanos tienen 46 cromosomas, igual que el resto de las células.|F|Los gametos tienen la mitad, 23 cromosomas, gracias a la meiosis."
    ],
    q: [
      "Un cariotipo muestra 44 autosomas y dos cromosomas X. ¿Cómo se describe?|46,XX, cariotipo femenino normal|47,XX, con un autosoma de más|45,X, con un cromosoma sexual menos|44 autosomas más 2 cromosomas sexuales suman 46: es el cariotipo femenino normal.",
      "¿Por qué el Proyecto Genoma Humano no logró en 2003 una secuencia completa?|Por las regiones muy repetitivas|Por la falta de genes codificantes|Por la variación entre las personas|Quedaban sin resolver regiones muy repetitivas, que el consorcio T2T completó en 2022.",
      "¿Qué aporta el pangenoma humano frente a una única secuencia de referencia?|Recoge mejor la diversidad humana|Cierra por primera vez los huecos|Fija la cifra exacta de genes codificantes|Reúne genomas de 47 personas de orígenes diversos para representar mejor la variación humana.",
      "La cifra de genes codificantes humanos (unos 19 000–20 000) varía ligeramente porque…|depende del catálogo de referencia|el genoma cambia de una célula a otra|aún falta secuenciar el 8 % del genoma|La cifra exacta varía según el catálogo de referencia; el genoma completo está secuenciado desde 2022."
    ],
    inc: [
      "Sobre los cromosomas humanos, ¿cuál es INCORRECTA?|Hay 23 pares de autosomas|Hay un par de cromosomas sexuales|El cariotipo detecta anomalías|Hay 22 pares de autosomas y un par de cromosomas sexuales, 46 en total."
    ],
    seq: [],
    cls: [] },

  { t: "Epigenética: lo establecido y lo exagerado",
    tip: "La epigenética estudia cambios en la expresión génica que no alteran la secuencia del ADN y se mantienen en la división celular: metilación del ADN, modificación de histonas y ARN no codificantes. Es consenso que explica la diferenciación celular y la impronta genómica. Su relación con la conducta en humanos tiene evidencia limitada, y la herencia transgeneracional de traumas no está establecida.",
    v: [
      "Epigenética=Estudio de cambios en la expresión génica sin alteración de la secuencia del ADN",
      "Metilación del ADN=Adición de grupos metilo, generalmente en citosinas, que suele silenciar un gen",
      "Histonas=Proteínas alrededor de las que se enrolla el ADN",
      "Impronta genómica=Expresión de un gen según proceda del padre o de la madre",
      "Síndrome de Prader-Willi=Pérdida de una región del cromosoma 15 de origen paterno",
      "Síndrome de Angelman=Pérdida de una región del cromosoma 15 de origen materno",
      "Weaver et al. (2004)=Cuidado materno en ratas asociado a la metilación del receptor de glucocorticoides",
      "Heijmans et al. (2008)=Exposición prenatal a la hambruna holandesa asociada a menor metilación"
    ],
    g: [
      "La metilación del ADN suele ___ el gen afectado.|silenciar|activar|duplicar",
      "Si falta la copia paterna de una región del cromosoma 15, aparece el síndrome de ___.|Prader-Willi|Angelman|Williams",
      "Una limitación de los estudios epigenéticos humanos es que suelen analizar tejidos como la ___.|sangre|corteza|amígdala",
      "En ratas, el cuidado materno se ha asociado a la metilación del gen del receptor de ___.|glucocorticoides|dopamina|oxitocina",
      "Que una neurona y una célula del hígado sean tan distintas con el mismo ADN se explica por la ___.|epigenética|mutación|meiosis"
    ],
    tf: [
      "La herencia de traumas a través de varias generaciones por vía epigenética está demostrada en humanos.|F|No está establecida; la evidencia sobre epigenética y conducta en humanos es limitada.",
      "Los cambios epigenéticos modifican la secuencia de bases del ADN.|F|Modifican la expresión de los genes sin cambiar la secuencia del ADN.",
      "Es un hecho de consenso que los mecanismos epigenéticos regulan la diferenciación celular y la impronta genómica.|V",
      "El estudio de la hambruna holandesa halló una asociación de efecto pequeño, no una demostración causal sobre la conducta.|V"
    ],
    q: [
      "Un niño presenta una deleción en el cromosoma 15 heredada de su madre. ¿Qué cuadro cabe esperar?|Síndrome de Angelman|Síndrome de Prader-Willi|Síndrome de Williams|Por impronta genómica, la falta de la copia materna produce Angelman; la de la paterna, Prader-Willi.",
      "Un titular afirma: «Tus traumas se heredarán epigenéticamente en tus nietos». ¿Cómo valorarlo según la evidencia actual?|Como algo no establecido|Como un hecho bien replicado en humanos|Como una idea refutada por completo|La herencia transgeneracional epigenética en humanos no está establecida, aunque tampoco se ha descartado por completo.",
      "¿Qué limita la extrapolación del estudio de Weaver et al. (2004) a la conducta humana?|Se realizó en ratas|Midió solo secuencias de ADN|No halló cambios de metilación|Mostró en ratas una asociación entre cuidado materno, metilación y respuesta al estrés; no se traslada sin más a humanos.",
      "¿Qué mecanismo NO se considera epigenético?|Una mutación puntual|La metilación del ADN|Un ARN no codificante|Una mutación cambia la secuencia del ADN; los mecanismos epigenéticos alteran la expresión sin cambiarla."
    ],
    inc: [
      "Sobre la evidencia en epigenética, ¿cuál es INCORRECTA?|Explica bien la conducta humana en general|Explica la diferenciación de las células|Explica la impronta genómica|Usar la epigenética como explicación general de la conducta no está establecido."
    ],
    seq: [],
    cls: [
      "Grado de evidencia en epigenética|Consenso: diferenciación celular; impronta genómica; regulación de la expresión génica|Evidencia limitada: experiencias tempranas y conducta humana; estudio de la hambruna holandesa|No establecido: herencia transgeneracional de traumas; explicación general de la conducta"
    ] }
] },

{ n: 16, t: "Herencia, anomalías genéticas y heredabilidad", cap: 5, pir: "media", mods: [
  { t: "Leyes de Mendel y patrones de herencia",
    tip: "Mendel (1866) formuló la ley de la segregación (cada individuo transmite uno de sus dos alelos) y la de la transmisión independiente (válida si los genes están en cromosomas distintos o muy alejados). El Huntington es autosómico dominante; la fenilcetonuria, autosómica recesiva y evitable con una dieta; Duchenne y el X frágil están ligados al X y afectan más a los varones.",
    v: [
      "Alelo=Cada una de las versiones de un gen",
      "Homocigoto=Individuo con dos alelos iguales de un gen",
      "Heterocigoto=Individuo con dos alelos distintos de un gen",
      "Fenotipo=Rasgo observable de un individuo",
      "Genotipo=Dotación genética de un individuo",
      "Ley de la segregación=Cada individuo transmite solo una de sus dos copias de un gen a cada descendiente",
      "Recesivo=Que solo se manifiesta si hay dos copias",
      "Fenilcetonuria=Enfermedad autosómica recesiva que impide metabolizar la fenilalanina"
    ],
    g: [
      "La enfermedad de Huntington se hereda de forma autosómica ___.|dominante|recesiva|codominante",
      "La ley de la transmisión independiente solo se cumple si los genes están en cromosomas ___ o muy alejados.|diferentes|homólogos|sexuales",
      "La fenilcetonuria se detecta al nacer mediante la prueba del ___.|talón|sudor|cariotipo",
      "Las enfermedades ligadas al X afectan más a los varones porque tienen un solo ___.|cromosoma X|cromosoma 21|alelo recesivo",
      "Mendel publicó sus experimentos con guisantes en ___.|1866|1859|1953"
    ],
    tf: [
      "Cada hijo de un portador de la enfermedad de Huntington tiene un 25 % de probabilidad de heredarla.|F|Es autosómica dominante: cada hijo de un portador tiene un 50 % de probabilidad.",
      "En la herencia autosómica recesiva, los padres suelen ser portadores sanos.|V",
      "Una dieta baja en fenilalanina desde el nacimiento evita el daño de la fenilcetonuria.|V",
      "La distrofia muscular de Duchenne se hereda de forma autosómica recesiva.|F|Está ligada al cromosoma X; por eso afecta más y con más gravedad a los varones."
    ],
    q: [
      "Dos padres sanos tienen un hijo con fenilcetonuria. ¿Qué es lo más probable?|Ambos son portadores heterocigotos|Uno tiene un alelo dominante afectado|La enfermedad está ligada al cromosoma X|Es autosómica recesiva: hacen falta dos copias, y los padres suelen ser portadores sanos.",
      "Un hombre portador de la mutación de Huntington tiene hijos con una mujer no portadora. ¿Qué probabilidad tiene cada hijo de heredarla?|50 %|25 %|100 %|Es autosómica dominante: basta una copia, y cada hijo de un portador tiene un 50 % de probabilidad.",
      "¿Por qué la fenilcetonuria ilustra que «genético» no significa «inevitable»?|Una dieta adecuada evita el daño|El gen se silencia con la edad|Solo se manifiesta en los varones|Una dieta baja en fenilalanina desde el nacimiento evita la discapacidad intelectual.",
      "¿Cuándo deja de cumplirse la ley de la transmisión independiente?|Si los genes están próximos en un cromosoma|Si los dos alelos de cada gen son recesivos|Si el individuo es homocigoto para ambos genes|Solo se cumple si los genes están en cromosomas diferentes o muy alejados."
    ],
    inc: [
      "Sobre los patrones de herencia, ¿cuál es INCORRECTA?|El X frágil es autosómico dominante|El Huntington es autosómico dominante|La fenilcetonuria es autosómica recesiva|El síndrome del X frágil está ligado al cromosoma X."
    ],
    seq: [],
    cls: [
      "Patrón de herencia|Autosómico dominante: enfermedad de Huntington|Autosómico recesivo: fenilcetonuria|Ligado al X: distrofia de Duchenne; síndrome del X frágil"
    ] },

  { t: "Mutación y polimorfismo",
    tip: "Una mutación es un cambio en la secuencia del ADN: puntual, inserción, deleción o expansión de tripletes. Un polimorfismo es una variante frecuente (por convención, en al menos el 1 % de la población), como los SNP y las CNV. La enfermedad de Huntington (CAG en el gen HTT, cromosoma 4) y el síndrome del X frágil (CGG en el gen FMR1) se deben a expansiones de tripletes.",
    v: [
      "Mutación=Cambio en la secuencia del ADN",
      "Expansión de tripletes=Repetición anormal de una secuencia de tres bases",
      "Polimorfismo=Variante genética presente en al menos el 1 % de la población",
      "SNP=Variante frecuente que afecta a un solo nucleótido",
      "CNV=Variación en el número de copias de un fragmento de ADN",
      "Gen HTT=Gen del cromosoma 4 cuya expansión CAG causa la enfermedad de Huntington",
      "Gen FMR1=Gen del cromosoma X cuya expansión CGG causa el síndrome del X frágil",
      "Penetrancia incompleta=Variante que no siempre produce la enfermedad, como 36–39 repeticiones CAG"
    ],
    g: [
      "La enfermedad de Huntington se debe a una expansión del triplete ___.|CAG|CGG|CTG",
      "Por convención, un polimorfismo está presente en al menos el ___ de la población.|1 %|5 %|10 %",
      "El gen FMR1, implicado en el síndrome del X frágil, se encuentra en el cromosoma ___.|X|4|21",
      "En el Huntington, con ___ o más repeticiones CAG la enfermedad aparece con seguridad si la persona vive lo suficiente.|40|36|200",
      "En la mutación completa del X frágil hay más de ___ repeticiones CGG.|200|40|36"
    ],
    tf: [
      "Entre 36 y 39 repeticiones CAG, la enfermedad de Huntington tiene penetrancia incompleta.|V",
      "Un polimorfismo es, por definición, una variante rara que causa enfermedad.|F|Un polimorfismo es una variante frecuente, presente en al menos el 1 % de la población.",
      "El síndrome del X frágil es la causa hereditaria más frecuente de discapacidad intelectual.|V",
      "La expansión responsable de la enfermedad de Huntington se localiza en el cromosoma X.|F|Está en el gen HTT del cromosoma 4; la del X frágil (CGG, gen FMR1) es la que está en el cromosoma X."
    ],
    q: [
      "El análisis genético de una persona sana de 30 años detecta 42 repeticiones CAG en el gen HTT. ¿Qué cabe concluir?|Desarrollará Huntington si vive lo suficiente|Puede no desarrollarla: penetrancia incompleta|Tiene un polimorfismo sin consecuencias|Con 40 o más repeticiones la enfermedad aparece con seguridad si la persona vive lo suficiente; la penetrancia incompleta es de 36 a 39.",
      "¿Qué distingue un polimorfismo de otras variantes genéticas?|Su frecuencia en la población|Su tamaño en número de bases|Su localización en el cromosoma|Un polimorfismo es una variante frecuente: por convención, presente en al menos el 1 % de las personas.",
      "¿Qué tienen en común la enfermedad de Huntington y el síndrome del X frágil?|Son expansiones de tripletes|Se heredan de forma autosómica|Se deben a no disyunción meiótica|Huntington es una expansión CAG en HTT y el X frágil, una expansión CGG en FMR1.",
      "Los SNP son…|polimorfismos de un nucleótido|mutaciones raras de una sola base|variaciones en el número de copias|Son polimorfismos de un solo nucleótido, frecuentes en la población; las variaciones de copias son las CNV."
    ],
    inc: [
      "Sobre el síndrome del X frágil, ¿cuál es INCORRECTA?|Se debe a una trisomía del X|Se debe a una expansión CGG|Afecta al gen FMR1|Es una expansión de tripletes CGG en el gen FMR1, no una trisomía."
    ],
    seq: [],
    cls: [
      "Huntington o X frágil|Huntington: triplete CAG; gen HTT; cromosoma 4; herencia autosómica dominante|X frágil: triplete CGG; gen FMR1; cromosoma X; más de 200 repeticiones"
    ] },

  { t: "Anomalías cromosómicas",
    tip: "Las anomalías numéricas suelen deberse a una no disyunción en la meiosis: trisomías 21 (Down), 18 (Edwards) y 13 (Patau), y anomalías de los cromosomas sexuales como Turner (45,X), Klinefelter (47,XXY), XYY y triple X. Las estructurales afectan a una parte de un cromosoma: deleciones (maullido de gato, Williams, 22q11.2), duplicaciones, inversiones y translocaciones.",
    v: [
      "No disyunción=Fallo en la separación de los cromosomas durante la meiosis",
      "Trisomía 21=Base cromosómica de la mayoría de los casos de síndrome de Down",
      "Síndrome de Turner=Cariotipo 45,X: mujeres de baja estatura con disfunción ovárica",
      "Síndrome de Klinefelter=Cariotipo 47,XXY: varones altos con hipogonadismo",
      "Síndrome de Williams=Deleción en 7q11.23: buen lenguaje social y dificultades visoespaciales",
      "Maullido de gato=Síndrome por deleción en el brazo corto del cromosoma 5",
      "Deleción 22q11.2=Anomalía estructural asociada a un riesgo elevado de psicosis",
      "Translocación=Intercambio de fragmentos entre cromosomas"
    ],
    g: [
      "El síndrome de Edwards corresponde a la trisomía ___.|18|13|21",
      "El síndrome de Turner se asocia a inteligencia generalmente normal, con posibles dificultades ___.|visoespaciales|de lenguaje|motoras",
      "Una pequeña parte de los casos de síndrome de Down se debe a una translocación ___.|robertsoniana|recíproca|inversa",
      "El riesgo de síndrome de Down por no disyunción aumenta con la edad ___.|materna|paterna|gestacional",
      "El síndrome de Williams se debe a una deleción en el cromosoma ___.|7|5|22"
    ],
    tf: [
      "El síndrome de Klinefelter afecta a mujeres con cariotipo 45,X.|F|Klinefelter es 47,XXY y afecta a varones; 45,X corresponde al síndrome de Turner.",
      "Las personas con síndrome XYY o triple X a menudo no llegan a ser diagnosticadas.|V",
      "La mayoría de los casos de síndrome de Down se deben a una translocación robertsoniana.|F|La mayoría se deben a no disyunción; la translocación explica solo una pequeña parte de los casos.",
      "El síndrome del maullido de gato es una anomalía estructural y no numérica.|V"
    ],
    q: [
      "Una adolescente de baja estatura consulta por ausencia de desarrollo puberal; su inteligencia es normal, aunque tiene dificultades visoespaciales. ¿Qué cariotipo es más probable?|45,X|47,XXY|47,XXX|Turner (45,X): mujeres de baja estatura con disfunción ovárica, inteligencia generalmente normal y posibles dificultades visoespaciales.",
      "Un niño muestra buen lenguaje social y marcadas dificultades visoespaciales. ¿Qué alteración es más probable?|Deleción en 7q11.23|Deleción en 22q11.2|Deleción del brazo 5p|Es el perfil del síndrome de Williams; 5p es el maullido de gato y 22q11.2 se asocia sobre todo a riesgo de psicosis.",
      "¿Qué mecanismo explica la mayoría de las anomalías cromosómicas numéricas?|La no disyunción meiótica|La expansión de tripletes|La translocación recíproca|Un par de cromosomas no se separa en la meiosis y un gameto recibe una copia de más o de menos.",
      "Un varón alto, con hipogonadismo y dificultades de lenguaje y aprendizaje, tiene probablemente un cariotipo…|47,XXY|47,XYY|45,X|Es el perfil del síndrome de Klinefelter; el XYY no cursa con hipogonadismo y 45,X corresponde a mujeres con Turner."
    ],
    inc: [
      "Sobre las trisomías, ¿cuál es INCORRECTA?|La trisomía 13 es el síndrome de Edwards|La trisomía 21 es el síndrome de Down|La trisomía 13 es el síndrome de Patau|Edwards corresponde a la trisomía 18; Patau, a la 13."
    ],
    seq: [],
    cls: [
      "Numérica o estructural|Numéricas: síndrome de Edwards; síndrome de Turner; síndrome de Klinefelter; síndrome de Patau|Estructurales: maullido de gato; síndrome de Williams; deleción 22q11.2; translocación robertsoniana"
    ] },

  { t: "Heredabilidad, GWAS y puntuaciones poligénicas",
    tip: "La heredabilidad es la proporción de la variabilidad de un rasgo en una población concreta asociada a diferencias genéticas: no se aplica a individuos, depende del ambiente y no implica que el rasgo sea inmodificable. Los GWAS muestran que los rasgos psicológicos son muy poligénicos. Las puntuaciones poligénicas predicen poco a nivel individual, se reducen al comparar hermanos y funcionan peor fuera de poblaciones de ascendencia europea.",
    v: [
      "Heredabilidad=Proporción de la variabilidad de un rasgo en una población asociada a diferencias genéticas",
      "Gemelos monocigóticos=Hermanos que comparten casi todo su ADN",
      "Gemelos dicigóticos=Hermanos que comparten en promedio la mitad de sus variantes",
      "GWAS=Estudios de asociación del genoma completo",
      "Rasgo poligénico=Característica que depende de miles de variantes de efecto minúsculo",
      "Puntuación poligénica=Resumen de la carga genética de una persona para un rasgo",
      "Polderman et al. (2015)=Metaanálisis de gemelos con una heredabilidad media en torno al 49 %",
      "Comparación entre hermanos=Diseño en el que las asociaciones poligénicas se reducen mucho"
    ],
    g: [
      "Si el ambiente se iguala para todos, la heredabilidad de un rasgo tiende a ___.|aumentar|disminuir|anularse",
      "La mejor puntuación poligénica para el nivel educativo explica en torno al ___ de sus diferencias.|12–16 %|40–50 %|2–4 %",
      "Los gemelos dicigóticos comparten en promedio ___ de sus variantes genéticas.|la mitad|la cuarta parte|casi todas",
      "El metaanálisis de Polderman et al. estimó una heredabilidad media de en torno al ___.|49 %|80 %|20 %",
      "La mayoría de los datos de los GWAS procede de personas de ascendencia ___.|europea|asiática|africana"
    ],
    tf: [
      "Una heredabilidad del 50 % significa que la mitad del rasgo de cada persona se debe a sus genes.|F|La heredabilidad es poblacional: se refiere a la variabilidad entre personas, no al rasgo de cada individuo.",
      "Un rasgo muy heredable puede modificarse mediante intervenciones ambientales.|V",
      "Al comparar hermanos de una misma familia, las asociaciones de las puntuaciones poligénicas aumentan mucho.|F|Se reducen mucho, porque parte de su efecto refleja el ambiente familiar y otros factores de confusión.",
      "La heredabilidad de un rasgo puede cambiar si cambian las condiciones ambientales de la población.|V"
    ],
    q: [
      "Un estudio estima que la heredabilidad de un rasgo es del 60 % en una población, y un periodista concluye que, en cada persona, el 60 % del rasgo es genético. ¿Qué error comete?|Aplica a individuos un dato poblacional|Confunde la heredabilidad con la penetrancia|Supone que el rasgo es inmodificable|La heredabilidad describe la variabilidad en una población; no indica qué parte del rasgo de una persona se debe a sus genes.",
      "La miopía es muy heredable y se corrige con gafas. ¿Qué idea ilustra?|Heredable no significa inmodificable|La heredabilidad depende de la población|Los rasgos son altamente poligénicos|Que un rasgo sea muy heredable no impide que el ambiente lo modifique o lo corrija.",
      "Una empresa ofrece predecir el nivel educativo de un bebé con su puntuación poligénica. ¿Qué objeción es más sólida?|Predicen poco a nivel individual|Se basan en un único gen|Aún no existen GWAS de ese rasgo|La mejor explica en torno al 12–16 % de las diferencias, parte no es efecto directo y rinde peor fuera de la ascendencia europea.",
      "En una sociedad en la que todos reciben una educación muy similar, ¿qué cabe esperar de la heredabilidad del rendimiento académico?|Que aumente|Que disminuya|Que no varíe|Si el ambiente se iguala, la variabilidad restante se asocia más a diferencias genéticas y la heredabilidad aumenta."
    ],
    inc: [
      "Sobre los GWAS y las puntuaciones poligénicas, ¿cuál es INCORRECTA?|Identifican genes únicos de gran efecto|Muestran rasgos muy poligénicos|Rinden peor en otras ascendencias|Los GWAS revelan miles de variantes de efecto minúsculo; los genes únicos de gran efecto, como en el Huntington, son la excepción."
    ],
    seq: [],
    cls: [] }
] }
);
