(function(window){
// SAIMAP Psicología · Psicología de la Interacción Social
// Contenido alineado con el temario SAIMAP «Psicología de la Interacción Social» (v1.0, octubre de 2026).
window.COURSE = {
  id: "interaccion-social",
  title: "Psicología de la Interacción Social",
  short: "Interacción Social",
  area: "Psicología social",
  rutas: { grado: { curso: 1 }, pir: { bloque: "Social y organizaciones" } },
  temario: "Interaccion-Social_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "El grupo: formación y desarrollo", from: 1, to: 2 },
    { n: 2, t: "La estructura grupal", from: 3, to: 4 },
    { n: 3, t: "La comunicación interpersonal", from: 5, to: 6 },
    { n: 4, t: "Violencia", from: 7, to: 8 },
    { n: 5, t: "El conflicto y su resolución", from: 9, to: 10 },
    { n: 6, t: "Conductas de ayuda y cooperación", from: 11, to: 12 },
    { n: 7, t: "Influencia social", from: 13, to: 14 },
    { n: 8, t: "Comportamiento colectivo: decisiones y rendimiento grupal", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Interacción Social · Unidades 1–4
window.COURSE.units.push(
{ n: 1, t: "¿Qué es un grupo?", cap: 1, pir: "baja", mods: [
  { t: "Definiciones de grupo y criterios",
    tip: "Casi todas las definiciones de grupo se apoyan en tres criterios: la interacción (Bales, Homans), la interdependencia (Lewin) y la identidad compartida (Tajfel y Turner). Un agregado coincide en espacio y tiempo sin interactuar ni depender unos de otros, y una categoría social comparte un rasgo sin que sus miembros se relacionen. Las definiciones actuales son integradoras: dos o más personas interdependientes que interactúan y se perciben como una unidad.",
    v: [
      "Interacción=Criterio de comunicación e influencia recíproca y repetida (Bales, Homans)",
      "Interdependencia de destino=Los miembros comparten lo que les sucede",
      "Interdependencia de tarea=El resultado de cada uno depende de lo que hagan los demás",
      "Totalidad dinámica=Visión de Lewin: un cambio en una parte modifica el estado de las demás",
      "Identidad compartida=Las personas se categorizan como miembros y otros las reconocen así",
      "Agregado=Personas que coinciden en espacio y tiempo sin interactuar ni depender unas de otras",
      "Categoría social=Personas que comparten un rasgo aunque no se conozcan ni se relacionen",
      "Díada=Unidad de dos personas cuyo carácter de grupo se discute"
    ],
    g: [
      "Para ___, hay grupo cuando cada participante se forma una impresión de los demás suficiente para reaccionar ante cada uno.|Bales|Homans|Lewin",
      "Homans definió el grupo por la ___ de la interacción entre sus miembros.|frecuencia|calidad|duración",
      "Lewin concibió el grupo como una totalidad ___.|dinámica|perceptiva|estable",
      "Los zurdos o los mayores de 65 años son un ejemplo de ___.|categoría social|agregado|grupo secundario",
      "El criterio de identidad compartida es de tipo ___.|perceptivo-cognitivo|conductual|afectivo-motivacional"
    ],
    tf: [
      "El criterio de identidad compartida permite hablar de grupos en los que no todos los miembros se conocen.|V",
      "Para Lewin, lo que une a los miembros de un grupo es sobre todo que se parecen entre sí.|F|Para Lewin no une la semejanza sino la interdependencia: los miembros dependen unos de otros.",
      "Un agregado puede convertirse en grupo si aparecen interacción e interdependencia, como en un tren detenido en un túnel.|V",
      "Existe consenso en que una díada ya constituye un grupo en sentido pleno.|F|Se discute: algunos autores creen que hace falta un tercer miembro para que aparezcan coaliciones o mayorías."
    ],
    q: [
      "Los estudiantes de primer curso de una universidad, que nunca se han tratado ni organizado, constituyen…|una categoría social|un agregado|un grupo secundario|Comparten un rasgo pero no se relacionan. El agregado exige coincidir en espacio y tiempo, como quienes esperan en un andén.",
      "¿Qué autor subraya la interdependencia como criterio definitorio del grupo?|Lewin|Homans|Bales|Lewin habló de totalidad dinámica basada en la interdependencia. Bales y Homans subrayaron la interacción.",
      "Si la facultad cambia el calendario de exámenes y todo el grupo de clase resulta afectado, se ilustra la interdependencia…|de destino|de tarea|de identidad|Los miembros comparten lo que les sucede. En la de tarea, el resultado de cada uno depende de lo que hagan los demás.",
      "¿Qué tienen en común el agregado y la categoría social?|No reúnen los criterios de grupo|Ambos exigen coincidir en el espacio|Ambos se basan en un rasgo compartido|Ninguno es grupo en sentido estricto, aunque ambos pueden convertirse en uno si aparecen interacción, interdependencia o identidad."
    ],
    inc: [
      "Sobre los criterios de definición de grupo|Tajfel y Turner subrayan la interacción repetida|Lewin subraya la interdependencia|Homans habla de la frecuencia de interacción|Tajfel y Turner subrayan la identidad compartida. La interacción es el criterio de Bales y Homans."
    ],
    seq: [],
    cls: [
      "Criterio y autores|Interacción: Bales; Homans|Interdependencia: Lewin; totalidad dinámica|Identidad compartida: Tajfel y Turner; categorización"
    ] },
  { t: "Tipos de grupos",
    tip: "Las tipologías no son excluyentes. Cooley (1909) distinguió grupos primarios (pequeños, estables, cara a cara y con vínculos afectivos intensos) de secundarios (amplios, impersonales y orientados a una meta). Los formales los crea una organización y los informales surgen espontáneamente. El grupo de pertenencia es aquel del que se forma parte, y el de referencia, el que sirve de modelo. La distinción entre endogrupo y exogrupo es relativa.",
    v: [
      "Grupo primario=Pequeño y estable, con trato cara a cara y vínculos afectivos intensos",
      "Grupo secundario=Amplio, impersonal y orientado a una meta, con relación indirecta",
      "Grupo formal=Creado por una organización con objetivos, normas y puestos definidos",
      "Grupo informal=Surge espontáneamente de la interacción y atiende necesidades afectivas",
      "Grupo de pertenencia=Aquel del que uno forma parte",
      "Grupo de referencia=Modelo para evaluar las propias actitudes y conductas",
      "Endogrupo=El grupo propio, el «nosotros»",
      "Grupo virtual=Interactúa por mensajería, foros o videollamadas, a veces sin verse nunca"
    ],
    g: [
      "El concepto de grupo primario se debe a ___ (1909).|Cooley|Lewin|Campbell",
      "El chat que crean los becarios de unas prácticas es un ejemplo de grupo ___.|informal|formal|secundario",
      "La presión hacia la uniformidad suele ser mayor en un grupo ___ pequeño.|primario|secundario|formal",
      "A medida que un grupo crece, aparecen subgrupos, intermediarios y normas más ___.|formales|flexibles|implícitas",
      "La distinción entre endogrupo y exogrupo es ___: depende del grupo con que se compare.|relativa|absoluta|estable"
    ],
    tf: [
      "Un mismo grupo puede ser a la vez primario, informal y de referencia.|V",
      "El grupo de referencia y el de pertenencia nunca coinciden.|F|Pueden coincidir, como suele pasar con la familia, o no, como cuando se toma de modelo un grupo al que se aspira a entrar.",
      "Los grupos informales influyen mucho en cómo funcionan los formales dentro de una organización.|V",
      "La interacción virtual impide que llegue a formarse un verdadero grupo.|F|Lo virtual no impide que haya grupo: cambia los canales y, a menudo, el ritmo de su desarrollo."
    ],
    q: [
      "Un estudiante de Bachillerato imita la forma de hablar y de vestir de los alumnos del grado que quiere estudiar. Ese grado es para él un grupo…|de referencia|de pertenencia|primario|Le sirve de modelo para evaluar sus actitudes y conductas aunque todavía no pertenezca a él.",
      "¿Qué rasgo define a un grupo secundario según Cooley?|Relación indirecta y orientada a metas|Trato cara a cara y vínculos intensos|Surgimiento espontáneo de la interacción|Los secundarios son amplios e impersonales. El trato cara a cara es propio del primario, y el surgimiento espontáneo, del informal.",
      "Un comité de calidad creado por la dirección de una empresa es un grupo…|formal|informal|primario|Lo crea deliberadamente una organización, con objetivos, normas y puestos definidos de antemano.",
      "¿Por qué son decisivos los grupos primarios para la socialización?|En ellos se aprenden normas y valores|Tienen normas explícitas y formales|Están orientados a metas concretas|En la familia o la pandilla se aprenden normas, valores y buena parte de la propia identidad."
    ],
    inc: [
      "Sobre los tipos de grupos|Las tipologías clásicas son mutuamente excluyentes|Los grupos informales responden a necesidades afectivas|El tamaño cambia lo que el grupo puede hacer|Las tipologías no son excluyentes: un mismo grupo puede ser primario, informal y de referencia a la vez."
    ],
    seq: [],
    cls: [
      "Clasificación de Cooley|Primario: familia; pandilla de la infancia; trato cara a cara|Secundario: empresa grande; relación indirecta; orientado a una meta"
    ] },
  { t: "Entitatividad: cuándo un conjunto se percibe como grupo",
    tip: "Campbell (1958) llamó entitatividad al grado en que un conjunto se percibe como una entidad real y unitaria. Se inspiró en la Gestalt: destino común (al que dio un peso especial), semejanza y proximidad. Es un continuo: Lickel et al. (2000) hallaron un orden consistente de grupos íntimos, de tarea, categorías sociales y asociaciones débiles, y la interacción fue el rasgo más ligado a ella. Tiene consecuencias para quien observa y para los propios miembros.",
    v: [
      "Entitatividad=Grado en que un conjunto se percibe como entidad real y unitaria",
      "Campbell (1958)=Autor que acuñó el término inspirándose en la Gestalt",
      "Destino común=Señal de unidad a la que Campbell concedió un peso especial",
      "Semejanza=Señal de unidad por parecido en aspecto, opiniones o conducta",
      "Proximidad=Señal de unidad por estar cerca en el espacio y aparecer juntos",
      "Lickel et al. (2000)=Estudio que halló un orden consistente de unidad percibida",
      "Asociaciones débiles=Conjuntos de baja unidad percibida, como el público de un concierto",
      "Incertidumbre-identidad=Teoría de Hogg (2007) sobre la preferencia por grupos nítidos"
    ],
    g: [
      "Campbell se inspiró en los principios de la ___ sobre la percepción de objetos.|Gestalt|psicofísica|etología",
      "Según Lickel et al. (2000), las categorías sociales como la nacionalidad tienen una entitatividad ___.|media|alta|baja",
      "La familia y los amigos tienen una entitatividad percibida ___.|muy alta|alta|media",
      "Según Hogg, quienes se sienten inseguros sobre quiénes son prefieren grupos de ___ nítidos.|contornos|tamaños|orígenes",
      "Cuanto más entitativo parece un conjunto, más se considera a sus miembros ___.|intercambiables|independientes|heterogéneos"
    ],
    tf: [
      "La entitatividad es una propiedad de todo o nada: un conjunto se percibe como grupo o no.|F|Es un continuo: Lickel et al. (2000) hallaron que los conjuntos se ordenan de forma consistente según su entitatividad.",
      "En el estudio de Lickel et al. (2000), la característica más ligada a la entitatividad fue la interacción entre los miembros.|V",
      "La entitatividad refleja propiedades objetivas, pero también es una percepción que puede exagerarse o subestimarse.|V",
      "Campbell concedió un peso especial a la proximidad espacial entre los miembros.|F|El peso especial lo concedió al destino común. La proximidad y la semejanza eran las otras señales."
    ],
    q: [
      "Un profesor divide la clase en equipos estables, les da un nombre y una nota común. En pocas semanas, cada equipo…|se percibe como una unidad|pasa a ser una categoría social|reduce su destino común|Hay interacción, destino común y una etiqueta compartida, así que la entitatividad del equipo aumenta.",
      "Un error de un miembro de un equipo muy unido tiende a verse como «cosa del equipo». ¿Qué lo explica?|Su alta entitatividad|Su baja interdependencia|Su tamaño reducido|Cuanto más entitativo parece un conjunto, más fácil es atribuirle intenciones comunes y responsabilizar al grupo de lo que hace uno.",
      "Según Lickel et al. (2000), ¿qué conjunto tendría menor entitatividad?|La cola del autobús|Los profesionales de la enfermería|Un comité de empresa|La cola es una asociación débil (baja). La profesión es una categoría social (media) y el comité, un grupo de tarea (alta).",
      "Según la teoría de Hogg (2007), una persona insegura sobre quién es tenderá a identificarse con grupos…|de normas claras y alta entitatividad|amplios y de contornos difusos|de baja entitatividad y muy abiertos|La teoría de la incertidumbre-identidad predice preferencia por grupos de contornos nítidos, normas claras y alta entitatividad."
    ],
    inc: [
      "Sobre la entitatividad|Según Lickel et al., el rasgo más ligado es el tamaño|También pesaban las metas y resultados comunes|Influía la importancia del grupo para sus miembros|El rasgo más ligado a la entitatividad fue la interacción entre los miembros, no el tamaño del conjunto."
    ],
    seq: [],
    cls: [
      "Entitatividad percibida (Lickel et al.)|Alta: familia; amigos; equipo de trabajo; tripulación|Media: nacionalidad; género; profesión|Baja: vecinos de un barrio; público de un concierto; cola del autobús"
    ] },
  { t: "El grupo como realidad dinámica: condiciones y causas de su formación",
    tip: "Hoy el grupo se entiende como un proceso que se forma gradualmente y cambia con el tiempo. Sobre la condición mínima hay debate: para la tradición de Lewin hace falta interdependencia percibida, y para la identidad social (Tajfel y Turner) basta la categorización, como sugieren los experimentos del grupo mínimo. Entre las causas de formación están la necesidad de pertenencia, la comparación social, la reducción de la incertidumbre, las metas comunes, el intercambio social y la atracción.",
    v: [
      "Interdependencia percibida=Condición necesaria para formar un grupo según la tradición de Lewin",
      "Categorización=Condición suficiente para la conducta grupal según Tajfel y Turner",
      "Grupo mínimo=Formado con un criterio trivial y sin interacción, ya favorece a los suyos",
      "Necesidad de pertenencia=Impulso a mantener relaciones estables y positivas (Baumeister y Leary)",
      "Comparación social=Evaluar opiniones y capacidades frente a otros parecidos (Festinger, 1954)",
      "Intercambio social=Las relaciones se mantienen si los beneficios compensan los costes (Homans)",
      "Categorización externa=Vía de formación en que otros tratan a un conjunto como si fuera un grupo",
      "Independencia=Contrapeso de la necesidad de pertenencia: mantener distinción personal"
    ],
    g: [
      "Los experimentos del grupo mínimo se deben a ___ et al. (1971).|Tajfel|Hogg|Lewin",
      "La teoría de la comparación social la propuso ___ en 1954.|Festinger|Homans|Hogg",
      "La necesidad de pertenencia fue descrita por Baumeister y ___ (1995).|Leary|Levine|Lickel",
      "Una pandilla que surge de elecciones personales se forma por vía ___.|espontánea|deliberada|externa",
      "La reducción de la ___ como causa de formación se asocia a Hogg (2007).|incertidumbre|ansiedad|disonancia"
    ],
    tf: [
      "En los experimentos del grupo mínimo, los participantes favorecían a su grupo aunque no hubieran interactuado.|V",
      "Para la tradición de Lewin, basta con categorizarse como miembro para que surja la conducta grupal.|F|Esa es la tesis de la identidad social. Lewin exigía interdependencia percibida: ver que los resultados están ligados.",
      "Salvo en los grupos creados formalmente, es difícil señalar el instante exacto en que un conjunto pasa a ser un grupo.|V",
      "Existe consenso en que la mera categorización basta para que exista un grupo.|F|Es un debate abierto. Muchos autores creen que las categorías solo funcionan como grupos si hay destino común o identificación."
    ],
    q: [
      "Lucía llega a otra ciudad y busca enseguida un grupo de amigos con quien quedar. ¿Qué causa de formación ilustra mejor?|Necesidad de pertenencia|Reducción de la incertidumbre|Comparación social|Es el impulso a mantener relaciones estables y positivas descrito por Baumeister y Leary (1995).",
      "Varios estudiantes contrastan entre ellos cómo preparan un examen para saber si van bien. ¿Qué causa de formación actúa?|Comparación social|Intercambio social|Metas comunes|Según Festinger (1954), evaluamos opiniones y capacidades comparándonos con otros parecidos.",
      "Si quienes reciben una categorización externa acaban viéndose como grupo para reivindicar derechos, se ilustra que…|otros pueden crear el grupo al tratarlo como tal|el grupo solo surge por elecciones personales|la interdependencia de tarea es imprescindible|Es la tercera vía de formación: la categorización externa puede llevar a que el conjunto se vea a sí mismo como grupo.",
      "¿Qué tensión, presente en la formación de grupos, reaparece en los modelos de desarrollo grupal?|Pertenencia frente a independencia|Tarea frente a relaciones|Interacción frente a identidad|La necesidad de pertenencia tiene como contrapeso la de mantener independencia y distinción personal."
    ],
    inc: [
      "Sobre la formación de los grupos|Según Tajfel y Turner, primero debe haber interdependencia|Según Homans (1961), los beneficios deben compensar costes|Un grupo puede crearse deliberadamente para un objetivo|La interdependencia percibida es la condición de Lewin. Para Tajfel y Turner basta la categorización."
    ],
    seq: [],
    cls: [
      "Condición mínima de grupo|Tradición de Lewin: interdependencia percibida; resultados ligados|Identidad social: categorización; grupo mínimo; Tajfel y Turner"
    ] }
] },
{ n: 2, t: "Nacer, crecer y terminar", cap: 1, pir: "media", mods: [
  { t: "La formación como integración social (Moreland y Levine)",
    tip: "Moreland (1987) describe la formación como integración social de cuatro tipos: ambiental, comportamental, afectiva y cognitiva. Moreland y Levine (1982) proponen además un modelo de socialización centrado en la relación de cada persona con el grupo: evaluación, compromiso (el motor) y transiciones de rol al cruzar criterios de decisión. Las cinco fases son investigación, socialización, mantenimiento, resocialización y recuerdo, y la socialización es bidireccional.",
    v: [
      "Integración ambiental=El entorno físico, social o cultural facilita el contacto",
      "Integración comportamental=Las personas dependen unas de otras para satisfacer necesidades",
      "Integración afectiva=Surgen sentimientos compartidos de atracción",
      "Integración cognitiva=Los miembros ven que comparten rasgos importantes y se piensan como grupo",
      "Compromiso=Motor del modelo de socialización, generado por la evaluación mutua",
      "Criterio de decisión=Nivel de compromiso cuyo cruce produce una transición de rol",
      "Miembro marginal=Rol de quien ha divergido y está en fase de resocialización",
      "Recuerdo=Fase final en que se evalúa retrospectivamente la relación"
    ],
    g: [
      "En el modelo de Moreland y Levine, el ___ es el motor de las transiciones.|compromiso|recuerdo|estatus",
      "El paso de nuevo miembro a miembro pleno se produce con la transición de ___.|aceptación|entrada|divergencia",
      "Empezar a decir «nosotros, los de la planta tercera» refleja integración ___.|cognitiva|ambiental|afectiva",
      "Si un miembro marginal recupera la relación con el grupo, se habla de ___.|convergencia|aceptación|entrada",
      "Desde la identidad social se defiende que la integración ___ puede ser la primera y la decisiva.|cognitiva|ambiental|comportamental"
    ],
    tf: [
      "El modelo de Moreland y Levine describe la relación de cada persona con el grupo, no el desarrollo del grupo en conjunto.|V",
      "En el modelo de socialización, solo el grupo evalúa a la persona.|F|La evaluación es mutua: el grupo valora lo que aporta la persona y esta valora si el grupo satisface sus necesidades.",
      "La secuencia de integración ambiental, comportamental, afectiva y cognitiva es frecuente pero no obligatoria.|V",
      "La transición de divergencia convierte al miembro pleno en ex miembro.|F|La divergencia lo convierte en miembro marginal. Pasa a ex miembro con la salida, si fracasa la resocialización."
    ],
    q: [
      "Lucía, miembro pleno de un club de debate, recibe tareas que no le interesan y su compromiso baja. ¿Qué rol pasa a ocupar?|Miembro marginal|Nuevo miembro|Ex miembro|Con la divergencia pasa a miembro marginal y se abre la resocialización. Solo si esta fracasa se produce la salida.",
      "¿En qué fase del modelo el grupo intenta adaptar al nuevo miembro y este intenta adaptar al grupo?|Socialización|Mantenimiento|Investigación|En la socialización el nuevo miembro aprende las normas y ambas partes se adaptan. Termina con la aceptación.",
      "¿Qué ocurre en la fase de mantenimiento?|Se negocia el rol del miembro|Se buscan grupos adecuados|Se evalúa la relación pasada|Se negocia qué rol desempeñará el miembro pleno. Buscar grupos es propio de la investigación, y evaluar el pasado, del recuerdo.",
      "Compartir planta en una residencia universitaria favorece sobre todo la integración…|ambiental|afectiva|cognitiva|El entorno físico facilita el contacto. Suele crear la oportunidad para los demás tipos de integración."
    ],
    inc: [
      "Sobre el modelo de socialización grupal|El grupo cambia al miembro, pero no a la inversa|El compromiso es el motor del modelo|Hay cinco fases, de la investigación al recuerdo|La socialización es bidireccional: el grupo cambia a sus miembros y los miembros también cambian al grupo."
    ],
    seq: [
      "Fases de Moreland y Levine|Investigación>Socialización>Mantenimiento>Resocialización>Recuerdo"
    ],
    cls: [] },
  { t: "Desarrollo grupal: el modelo de Tuckman y sus alternativas (Gersick)",
    tip: "Tuckman (1965), a partir de una revisión de 55 artículos, propuso cuatro fases: formación, conflicto, normalización y desempeño. Tuckman y Jensen (1977) añadieron la disolución y reconocieron poca prueba empírica directa, y la revisión original se basaba sobre todo en grupos de terapia y formación. Gersick (1988), con equipos con plazo, describió un equilibrio puntuado: inercia, transición hacia la mitad del plazo y nueva inercia con un último impulso.",
    v: [
      "Forming=Fase de incertidumbre, cortesía y dependencia del responsable",
      "Storming=Fase de tensiones, desacuerdos y resistencia a la influencia",
      "Norming=Fase de aceptación mutua, más cohesión y fijación de normas y roles",
      "Performing=Fase de relaciones funcionales centradas en resolver la tarea",
      "Adjourning=Fase añadida en 1977, de cierre a veces con sensación de pérdida",
      "Equilibrio puntuado=Periodos de inercia separados por una transición a mitad del plazo",
      "Modelos lineales=Proponen que el grupo atraviesa una secuencia fija de fases",
      "Tuckman y Jensen=Revisaron 22 estudios y admitieron poca prueba directa de la secuencia"
    ],
    g: [
      "Tuckman formuló su modelo en 1965 a partir de una revisión de ___ artículos.|55|22|12",
      "Según Gersick, la clave del cambio a mitad del plazo es la conciencia del ___.|tiempo|conflicto|liderazgo",
      "El nombre «equilibrio puntuado» procede de la biología ___.|evolutiva|molecular|celular",
      "En la fase de ___, se fijan normas y roles y aumenta la cohesión.|normalización|desempeño|conflicto",
      "La revisión de 1965 se basaba sobre todo en grupos de terapia y de ___.|formación|trabajo|deporte"
    ],
    tf: [
      "La fase de disolución formaba parte del modelo original de Tuckman de 1965.|F|La añadieron Tuckman y Jensen en 1977, tras revisar 22 estudios posteriores.",
      "Gersick no encontró la secuencia de Tuckman en los equipos de proyecto con plazo que observó.|V",
      "Según Gersick, el marco de trabajo adoptado en la primera reunión se mantiene con inercia durante la primera mitad del plazo.|V",
      "La aportación central de Gersick es una secuencia fija de cinco fases.|F|Su aportación es la transición hacia la mitad del plazo, entre periodos de inercia, no una secuencia fija de fases."
    ],
    q: [
      "Un equipo de clase trabaja a medio gas hasta que, a mitad del cuatrimestre, alguien dice «tenemos que cambiar de plan». ¿Qué modelo lo describe mejor?|El equilibrio puntuado|El modelo de Tuckman|El modelo de Worchel|Gersick (1988) describe una transición hacia la mitad del plazo, cuando el grupo toma conciencia del tiempo.",
      "En un equipo aparecen roces sobre quién hace qué y cuánto esfuerzo hay que poner. ¿En qué fase de Tuckman está?|Conflicto|Normalización|Formación|Es el «storming»: tensiones, desacuerdos y cuestionamiento de objetivos y métodos.",
      "¿Qué limitación reconocieron Tuckman y Jensen (1977)?|Poca prueba empírica directa|Exceso de grupos de trabajo|Falta de una fase de conflicto|Admitieron poca prueba empírica directa de la secuencia. Además, la revisión se basaba en grupos de terapia y formación.",
      "¿Qué ocurre en la transición descrita por Gersick?|Se abandonan pautas y se reorganiza el trabajo|Se fijan por primera vez normas y roles|Se cierra el grupo con sensación de pérdida|El grupo toma conciencia del tiempo, abandona viejas pautas, busca orientación externa y reorganiza el trabajo."
    ],
    inc: [
      "Sobre el modelo de Tuckman|Todos los grupos pasan por las fases en el mismo orden|La fase de formación implica dependencia del responsable|Algunos grupos vuelven a fases anteriores|Muchos grupos se saltan fases o retroceden, por ejemplo cuando cambia la tarea o entra un miembro nuevo."
    ],
    seq: [
      "Fases de Tuckman|Formación>Conflicto>Normalización>Desempeño>Disolución"
    ],
    cls: [
      "Familia de modelos de desarrollo|Lineales: Tuckman; secuencia fija de fases|No lineales: Gersick; inercia y transición|Cíclicos: Worchel; ciclos que se repiten"
    ] },
  { t: "El modelo cíclico de Worchel",
    tip: "Pensado para grupos grandes y duraderos, como partidos, sindicatos u ONG, sostiene que los grupos atraviesan ciclos que se repiten. Las seis fases son descontento, acontecimiento precipitante, identificación con el grupo, productividad, individualización y declive, que devuelve al descontento. Worchel et al. (1992) describían seis fases, y la reformulación de 1996 se quedó con cuatro. El motor es la tensión entre pertenecer y ser independiente, y el exogrupo cumple un papel distinto en cada fase.",
    v: [
      "Descontento=Fase en que los miembros sienten que el grupo ya no atiende sus necesidades",
      "Acontecimiento precipitante=Hecho simbólico que condensa el malestar y obliga a definirse",
      "Identificación con el grupo=Fase de límites marcados con el exogrupo y líderes centralizados",
      "Productividad=Fase centrada en las metas, con líderes orientados a la tarea",
      "Individualización=Fase en que las necesidades personales pesan más que las del grupo",
      "Declive=Fase de desconfianza, exploración de otros grupos y salidas",
      "Worchel (1996)=Reformulación que suprimió las dos fases de formación",
      "Tensión individuo-grupo=Motor del ciclo, entre pertenecer y mantener independencia"
    ],
    g: [
      "Worchel et al. (1992) describían ___ fases, dos de formación y cuatro de desarrollo.|seis|cuatro|cinco",
      "En la fase de identificación, el grupo tiende a aceptar líderes fuertes y ___.|centralizados|democráticos|rotativos",
      "En la fase de productividad, la hostilidad hacia otros grupos ___.|baja|aumenta|se mantiene",
      "En la fase de ___, los miembros comparan lo que aportan con lo que reciben.|individualización|productividad|identificación",
      "El modelo de Worchel está pensado sobre todo para grupos ___ y duraderos.|grandes|pequeños|formales"
    ],
    tf: [
      "En el modelo de Worchel, la fase que sigue al acontecimiento precipitante es la productividad.|F|Le sigue la identificación con el grupo, en la que este refuerza su identidad y sus límites con el exogrupo.",
      "En la fase de declive, el exogrupo funciona como destino alternativo para los miembros.|V",
      "Según Worchel, una crisis puede reforzar la cohesión de quienes se quedan en el grupo.|V",
      "Las fases del modelo de Worchel tienen una duración fija y no admiten retrocesos.|F|La duración es variable, las transiciones pueden ser graduales o bruscas y caben retrocesos."
    ],
    q: [
      "La directiva de una asociación cancela una actividad muy valorada y cada socio debe definirse como leal o disidente. ¿En qué fase está?|Acontecimiento precipitante|Identificación con el grupo|Descontento|Un hecho concreto y simbólico condensa el malestar y obliga a definirse. Puede producir abandonos o un grupo nuevo.",
      "¿Qué fase sigue al declive en el modelo de Worchel?|El descontento|La individualización|La productividad|El malestar acumulado devuelve al grupo al descontento y el ciclo se reinicia.",
      "¿Para qué sirve el exogrupo en la fase de productividad?|Como término de comparación|Para afirmar la identidad|Como destino alternativo|Sirve para afirmar la identidad en la fase 3, como comparación en la 4 (productividad) y como destino alternativo en la 6.",
      "¿Cuál es la principal limitación del modelo de Worchel?|Es difícil someterlo a prueba rigurosa|No explica las escisiones de grupos|Solo sirve para grupos de terapia|Como casi todos los modelos de fases, describe bien muchos casos, pero no es fácil someterlo a prueba de forma rigurosa."
    ],
    inc: [
      "Sobre el modelo de Worchel|El desarrollo termina en una fase final de desempeño|El ciclo puede repetirse aunque falten los fundadores|En la individualización surgen subgrupos|El desarrollo no termina: los grupos atraviesan ciclos y pueden repetirlos mientras existan."
    ],
    seq: [
      "Fases de Worchel|Descontento>Acontecimiento precipitante>Identificación con el grupo>Productividad>Individualización>Declive"
    ],
    cls: [] },
  { t: "El fin del grupo: terminación y escisión",
    tip: "Un grupo puede terminar (desaparece) o escindirse (una parte se separa y forma otro grupo). La terminación puede ser planificada o espontánea, y suele generar ambivalencia, por lo que muchos grupos recurren a rituales de cierre. Según Sani y Reicher (1998), la escisión nace de un desacuerdo sobre la identidad: una facción percibe que un cambio subvierte la esencia del grupo. La escisión no cierra el conflicto, sino que lo convierte en intergrupal.",
    v: [
      "Terminación planificada=Final de un grupo que nace con fecha de caducidad o tarea concreta",
      "Terminación espontánea=El grupo se deshace sin estar previsto, por abandonos sucesivos",
      "Escisión=Separación de parte de un grupo para formar otro",
      "Ambivalencia=Satisfacción por la tarea cumplida y pena por perder las relaciones",
      "Rituales de cierre=Actos de despedida que ayudan a dar sentido a lo vivido",
      "Sani y Reicher (1998)=Estudiaron las escisiones en organizaciones reales",
      "Subversión de la esencia=Percepción de que un cambio traiciona lo que el grupo era",
      "Chivo expiatorio=Miembro al que se culpa y margina, motivo de abandono relacional"
    ],
    g: [
      "Según Sani y Reicher, el desencadenante de una escisión es un desacuerdo sobre la ___ del grupo.|identidad|tarea|jerarquía",
      "Tras una escisión, la disputa interna se convierte en un conflicto ___.|intergrupal|intrapersonal|latente",
      "Un programa de intervención grupal con un número fijo de sesiones termina de forma ___.|planificada|espontánea|abrupta",
      "En el modelo de Moreland y Levine, el final del grupo abre la fase de ___.|recuerdo|resocialización|declive",
      "Ser tomado como chivo expiatorio es una razón de abandono relacionada con ___.|las relaciones|la tarea|las circunstancias"
    ],
    tf: [
      "La investigación se ha ocupado más del final de los grupos que de su formación.|F|Ha ocurrido lo contrario: se ha estudiado mucho más la formación y el desarrollo que el final.",
      "Incluso un final planificado puede tener consecuencias emocionales como la ambivalencia.|V",
      "Tras una escisión, el conflicto con el grupo original suele ser más intenso que con grupos nunca relacionados.|V",
      "Según Sani y Reicher, cualquier desacuerdo prolongado basta para provocar una escisión.|F|No basta cualquiera: el desencadenante es un desacuerdo sobre la identidad, cuando se percibe que se subvierte su esencia."
    ],
    q: [
      "Una facción abandona un partido porque cree que ha traicionado sus principios y funda otro que se presenta como su heredero auténtico. Es un caso de…|escisión|terminación espontánea|resocialización|La escisión nace de un desacuerdo sobre la identidad, y el nuevo grupo suele presentarse como heredero de los valores fundacionales.",
      "Un miembro deja un club porque otro grupo satisface mejor sus necesidades. ¿Qué tipo de razón es?|La competencia externa|Las circunstancias personales|El funcionamiento interno|Pertenecer al grupo perdedor o que otro grupo satisfaga mejor las necesidades son razones de competencia externa.",
      "Una estudiante deja el coro porque no puede usar sus capacidades ni participar. ¿Qué tipo de razón de abandono es?|El funcionamiento|La tarea|Las circunstancias|No poder participar ni usar las propias capacidades es una razón ligada al funcionamiento del grupo.",
      "¿Por qué muchos grupos recurren a rituales de cierre como una cena de fin de curso?|Ayudan a dar sentido a lo vivido|Evitan que el grupo se escinda|Prolongan la fase de mantenimiento|Ante la ambivalencia del final, los rituales ayudan a dar sentido a la experiencia compartida."
    ],
    inc: [
      "Sobre la escisión|Suele cerrar el conflicto entre las facciones|Puede partir de miembros expulsados|Suele seguir a un periodo de conflicto interno|La escisión no suele cerrar el conflicto: lo convierte en un conflicto intergrupal entre antiguos compañeros."
    ],
    seq: [],
    cls: [
      "Razón de abandono|La tarea: desacuerdo sobre qué hacer; exigencias excesivas|Las relaciones: miembro dominante; chivo expiatorio|La competencia externa: grupo perdedor; otro grupo más satisfactorio"
    ] }
] },
{ n: 3, t: "Estatus y roles", cap: 2, pir: "media", mods: [
  { t: "Qué es la estructura de un grupo",
    tip: "La estructura grupal es el patrón relativamente estable de relaciones entre los miembros. Implica diferenciación vertical (estatus) u horizontal (roles), estabilidad y pautas de interacción. Sus componentes son estatus, roles, normas, redes de comunicación y relaciones de atracción, estas últimas estudiadas con la sociometría de Moreno. Surge de la interacción repetida, hace la interacción previsible y su contrapartida es la rigidez. El estatus es el valor de una posición, y el rol, las conductas esperadas.",
    v: [
      "Estructura grupal=Patrón relativamente estable de relaciones entre los miembros",
      "Diferenciación vertical=Ordenación de posiciones según su valor o su poder",
      "Diferenciación horizontal=Distinción de posiciones según la función que cumplen",
      "Sociometría=Método de Moreno (1934) para estudiar elecciones y rechazos",
      "Sociograma=Representación gráfica de las elecciones y rechazos del grupo",
      "Persona aislada=Miembro al que nadie elige",
      "Persona rechazada=Miembro que recibe rechazos explícitos",
      "Rigidez=Contrapartida de una estructura consolidada, que cambia con dificultad"
    ],
    g: [
      "La diferenciación ___ corresponde al estatus.|vertical|horizontal|afectiva",
      "La sociometría se debe a ___ (1934).|Moreno|Bales|Homans",
      "La estructura grupal surge de la interacción ___.|repetida|ocasional|formal",
      "En un aula, el sociograma suele revelar una estructura ___ distinta de la oficial.|afectiva|jerárquica|normativa",
      "El ___ es el conjunto de conductas esperadas de quien ocupa una posición.|rol|estatus|prestigio"
    ],
    tf: [
      "Estatus y rol son sinónimos: ambos designan la posición de un miembro en el grupo.|F|El estatus es el valor que se concede a una posición, y el rol, las conductas que se esperan de quien la ocupa.",
      "Dos personas pueden tener el mismo estatus y roles muy distintos.|V",
      "La estructura de un grupo tiende a mantenerse incluso cuando cambian las personas que lo forman.|V",
      "En un sociograma, una persona aislada es la que recibe rechazos explícitos.|F|La aislada es la que nadie elige. La que recibe rechazos explícitos es la rechazada."
    ],
    q: [
      "En el sociograma de una clase, Marcos no recibe ninguna elección ni ningún rechazo. ¿Cómo se clasifica?|Aislado|Rechazado|Marginal|La persona aislada es la que nadie elige. La rechazada es la que recibe rechazos explícitos.",
      "La coordinadora de un equipo convoca reuniones y habla con el tutor. Esas tareas forman parte de su…|rol|estatus|prestigio|El rol es el conjunto de conductas esperadas. El estatus es el valor o peso que el grupo concede a su posición.",
      "¿Qué componente de la estructura responde a la pregunta «quién prefiere o rechaza a quién»?|Relaciones de atracción|Redes de comunicación|Sistema de estatus|Las relaciones de atracción se estudian con la sociometría de Moreno y se representan en un sociograma.",
      "¿Cuál es la contrapartida de una estructura bien asentada?|Su rigidez ante el cambio|Su escasa previsibilidad|Su conflicto permanente|Hace la interacción fluida y previsible, pero una vez consolidada cambia con dificultad aunque ya no sea la más adecuada."
    ],
    inc: [
      "Sobre la estructura grupal|Hace la interacción menos previsible|Regula el conflicto y facilita la coordinación|Se manifiesta en quién se comunica con quién|Una estructura bien asentada hace la interacción más fluida y previsible."
    ],
    seq: [],
    cls: [
      "Tipo de diferenciación|Vertical: estatus; prestigio; poder|Horizontal: roles; función que se cumple"
    ] },
  { t: "Estatus y estados de expectativa (Ridgeway, Berger)",
    tip: "El estatus es la posición en la jerarquía según el prestigio, el respeto y la influencia que se reciben, y se nota en la conducta verbal y no verbal. Como las jerarquías aparecen muy deprisa, la teoría de los estados de expectativa (Berger, Cohen y Zelditch, 1972) propone que se basan en expectativas de competencia derivadas de características de estatus difusas o específicas, que se confirman a sí mismas. Ridgeway (1987) halló que las señales de competencia influyen más que las de dominancia.",
    v: [
      "Sistema de estatus=Conjunto ordenado de posiciones que determina quién puede influir",
      "Estados de expectativa=Teoría de Berger, Cohen y Zelditch sobre el origen de la jerarquía",
      "Característica difusa=Atributo que genera expectativas de competencia general",
      "Característica específica=Atributo que genera expectativas solo para un tipo de tarea",
      "Estatus como retribución=Enfoque funcional: más posición para quien más contribuye a las metas",
      "Señales de dominancia=Voz alta, mirada fija, interrupciones y amenazas",
      "Señales de competencia=Hablar con fluidez, argumentar y responder con rapidez",
      "Ridgeway (1987)=Comparó la influencia de la competencia y de la dominancia"
    ],
    g: [
      "Las personas de alto estatus mantienen más contacto ___ mientras hablan.|visual|físico|verbal",
      "El género, la edad y el nivel educativo son características de estatus ___.|difusas|específicas|funcionales",
      "Las expectativas de competencia tienden a ___ a sí mismas.|confirmarse|corregirse|anularse",
      "El enfoque que asigna el estatus por dominancia tiene una raíz ___.|etológica|funcionalista|cognitiva",
      "Según Ridgeway, la dominancia aparece sobre todo para ___ una jerarquía ya establecida.|defender|crear|igualar"
    ],
    tf: [
      "Las jerarquías de estatus suelen aparecer en los primeros minutos de interacción.|V",
      "Haber sacado buena nota en Estadística es una característica difusa de estatus.|F|Es específica: solo genera expectativas para un tipo de tarea. Las difusas, como el género o la edad, valen para muchas.",
      "Según Ridgeway (1987), las conductas de dominancia conseguían más influencia que las de competencia.|F|Fue al revés: las señales de competencia lograban más influencia, y las de dominancia a menudo generaban rechazo.",
      "Las jerarquías basadas en la dominancia tienden a ser más inestables.|V"
    ],
    q: [
      "En un trabajo de primero, el compañero que ya cursó otra carrera recibe más turnos de palabra aunque nadie conoce el tema. ¿Qué lo explica?|Una característica difusa de estatus|Una característica específica de estatus|Sus señales de dominancia|El nivel educativo es una característica difusa: genera expectativas de competencia general, no ligadas a la tarea.",
      "¿Qué hecho cuestiona la explicación del estatus como retribución?|La rapidez con que surge la jerarquía|La influencia de las normas grupales|La existencia de roles informales|Las jerarquías aparecen en los primeros minutos, antes de que nadie haya podido demostrar lo que vale.",
      "¿Por qué un estatus inicial bajo cuesta mucho de remontar?|Las expectativas se confirman a sí mismas|Las normas prohíben cambiar de posición|La dominancia impide toda corrección|Quien parece más capaz participa más y su aportación parece mayor. Las expectativas pueden corregirse, pero no siempre ocurre.",
      "Según la propuesta integradora de Ridgeway, la mayoría de los grupos construyen su jerarquía…|de forma cooperativa|mediante la dominancia|al azar en el inicio|Se basa en expectativas sobre quién ayudará más a la meta común. La dominancia sirve sobre todo para defender jerarquías ya hechas."
    ],
    inc: [
      "Sobre la conducta de las personas de alto estatus|Hablan menos y reciben menos mensajes|Interrumpen más y dan más órdenes|Ocupan los lugares centrales de la mesa|Las personas de alto estatus hablan más tiempo y reciben más mensajes de los demás."
    ],
    seq: [],
    cls: [
      "Característica de estatus|Difusa: género; edad; nivel educativo; profesión|Específica: nota en Estadística; experiencia como monitor de campamento"
    ] },
  { t: "Los roles: Bales y la diferenciación de liderazgo",
    tip: "Un rol es el conjunto de conductas esperadas de quien ocupa una posición, y puede ser formal o informal. Bales (1950) creó el análisis del proceso de interacción (IPA), con doce categorías en un área socioemocional positiva, un área de tarea con respuestas y preguntas, y un área socioemocional negativa. Todo grupo debe resolver a la vez el problema de la tarea y el socioemocional. Bales y Slater (1955) hallaron una diferenciación entre líder de tarea y líder socioemocional, habitual pero no inevitable.",
    v: [
      "IPA=Sistema de Bales que clasifica cada acto de interacción en doce categorías",
      "Rol formal=Ligado a un puesto oficial, como presidente o delegado",
      "Rol informal=Surge de la interacción, como el veterano que orienta a los nuevos",
      "Problema de la tarea=Organizarse para alcanzar la meta",
      "Problema socioemocional=Mantener relaciones que permitan seguir trabajando juntos",
      "Líder de tarea=Propone ideas, orienta y dirige la discusión",
      "Líder socioemocional=Reduce la tensión, apoya y media, y suele ser el que más agrada",
      "Gran hombre=Tipo poco frecuente que destaca a la vez en actividad, tarea y agrado"
    ],
    g: [
      "En el IPA, «alivia la tensión» pertenece al área socioemocional ___.|positiva|negativa|neutral",
      "«Pide orientación» forma parte del área de tarea, en concreto de las ___.|preguntas|respuestas|reacciones",
      "La diferenciación del liderazgo la describieron Bales y ___ (1955).|Slater|Sheats|Benne",
      "En los grupos que funcionan bien, las reacciones positivas son más ___ que las negativas.|frecuentes|intensas|breves",
      "La mayor parte de las intervenciones caen en el área ___.|de tarea|socioemocional positiva|socioemocional negativa"
    ],
    tf: [
      "El líder de tarea suele ser también el miembro que más agrada al grupo.|F|Bales y Slater hallaron dos figuras: quien empuja la tarea acumula roces, y el que más agrada es el líder socioemocional.",
      "Las categorías del IPA se organizan en pares simétricos, como «da sugerencias» y «pide sugerencias».|V",
      "La rareza del «gran hombre» indica que la diferenciación del liderazgo es habitual pero no inevitable.|V",
      "En el IPA, «muestra antagonismo» pertenece al área de tarea.|F|Pertenece al área socioemocional negativa, junto a «en desacuerdo» y «muestra tensión»."
    ],
    q: [
      "Sara no dirige nada en su equipo, pero rebaja la tensión cuando el coordinador se pone exigente y anima a quien se queda atrás. Sara ejerce de…|líder socioemocional|líder de tarea|evaluadora-crítica|Reduce la tensión, apoya y anima. Si se va, el clima se deteriora y, más adelante, también el trabajo.",
      "¿Por qué, según Bales, el líder de tarea pierde algo de simpatía?|Acumula los roces que genera presionar|Reduce las reacciones positivas del grupo|Monopoliza el área socioemocional|Las intervenciones de tarea generan roces. Otra persona se especializa en recomponer el clima, de ahí la diferenciación.",
      "¿Qué categorías del IPA predominan en el líder de tarea?|Da sugerencias, opiniones y orientación|Muestra solidaridad y alivia la tensión|Pide orientación, opiniones y sugerencias|Dar sugerencias, opiniones y orientación son respuestas del área de tarea. Mostrar solidaridad es propio del líder socioemocional.",
      "Bales y Slater esperaban que la misma persona destacara en ideas, guía y agrado. ¿Qué encontraron?|Dos figuras distintas con las sesiones|Un único líder desde el principio|Ningún liderazgo estable en el grupo|Con el paso de las sesiones aparecían un líder de tarea y un líder socioemocional, con roles complementarios."
    ],
    inc: [
      "Sobre el IPA de Bales|Tiene seis categorías agrupadas en dos áreas|Clasifica cada acto comunicativo en una categoría|Incluye un área de tarea con preguntas y respuestas|Tiene doce categorías: socioemocional positiva, tarea (respuestas y preguntas) y socioemocional negativa."
    ],
    seq: [],
    cls: [
      "Área del IPA|Socioemocional positiva: muestra solidaridad; alivia la tensión; está de acuerdo|Tarea: da sugerencias; da opiniones; pide orientación|Socioemocional negativa: en desacuerdo; muestra tensión; muestra antagonismo"
    ] },
  { t: "Tipos de roles (Benne y Sheats) y problemas de rol",
    tip: "Benne y Sheats (1948) distinguen roles de tarea (coordinar la solución del problema), de mantenimiento (construir y conservar el grupo) e individuales (satisfacer necesidades personales a costa del grupo). Los dos primeros corresponden a las áreas de Bales. Cada rol tiene un plano prescrito, uno percibido y uno desempeñado. Los problemas de rol son la ambigüedad, el conflicto inter-rol, intra-rol y persona-rol y la sobrecarga, y todos producen tensión de rol.",
    v: [
      "Rol prescrito=Lo que el grupo espera de quien ocupa la posición",
      "Rol percibido=Lo que la persona cree que se espera de ella",
      "Rol desempeñado=Lo que la persona realmente hace",
      "Ambigüedad de rol=No saber con claridad qué se espera, cómo hacerlo o qué consecuencias tiene",
      "Conflicto inter-rol=Exigencias incompatibles de dos papeles distintos de una misma persona",
      "Conflicto intra-rol=Expectativas contradictorias dentro de un mismo papel",
      "Conflicto persona-rol=El papel choca con la personalidad o los valores de quien lo ocupa",
      "Sobrecarga de rol=Expectativas compatibles que se vuelven inabarcables por falta de tiempo"
    ],
    g: [
      "En la clasificación de Benne y Sheats, el armonizador es un rol de ___.|mantenimiento|tarea|individual",
      "El ___ se opone sin razones y es un rol individual.|bloqueador|evaluador|guardián",
      "El iniciador-contribuidor, que propone ideas, es un rol ___.|de tarea|de mantenimiento|individual",
      "Los problemas de rol producen ___ de rol, es decir, malestar al intentar cumplirlo.|tensión|ambigüedad|sobrecarga",
      "La ambigüedad de rol se agrava cuando la comunicación es escasa o va en una sola ___.|dirección|jornada|reunión"
    ],
    tf: [
      "El guardián que regula los turnos de palabra es un rol de tarea.|F|Es un rol de mantenimiento: contribuye a conservar el grupo, no a resolver la tarea.",
      "La abundancia de roles individuales indica que el grupo funciona mal.|V",
      "Un mismo miembro puede desempeñar varios roles y cambiar de uno a otro según el momento.|V",
      "Las medidas más eficaces contra los problemas de rol se aplican cuando ya ha aparecido la tensión.|F|Las más eficaces son preventivas: aclarar funciones por escrito, revisar el reparto y comunicarse en ambas direcciones."
    ],
    q: [
      "Una estudiante que trabaja por las tardes debe elegir entre la reunión del equipo y su turno. ¿Qué problema de rol sufre?|Conflicto inter-rol|Conflicto intra-rol|Sobrecarga de rol|Las exigencias de dos roles distintos que desempeña la misma persona son incompatibles.",
      "Al delegado de clase el profesorado le pide que transmita sus decisiones y los compañeros, que defienda sus quejas. ¿Qué sufre?|Conflicto intra-rol|Conflicto inter-rol|Conflicto persona-rol|Las expectativas contradictorias proceden de un mismo rol, el de delegado.",
      "A una persona muy reservada le toca presentar en público el trabajo del equipo. ¿Qué problema de rol se da?|Conflicto persona-rol|Ambigüedad de rol|Conflicto intra-rol|El rol choca con la personalidad de quien lo ocupa, no con otro rol ni consigo mismo.",
      "¿A qué familia de Benne y Sheats pertenece el «playboy», que se desentiende y bromea?|Roles individuales|Roles de mantenimiento|Roles de tarea|Satisface necesidades personales a costa del grupo. No ayuda ni a la tarea ni al clima."
    ],
    inc: [
      "Sobre la clasificación de Benne y Sheats|El conciliador es un rol de tarea|El elaborador es un rol de tarea|El agresor es un rol individual|El conciliador, que cede para llegar a acuerdos, es un rol de mantenimiento."
    ],
    seq: [],
    cls: [
      "Familia de roles|Tarea: iniciador-contribuidor; buscador de información; elaborador; coordinador|Mantenimiento: animador; armonizador; conciliador; guardián|Individuales: agresor; bloqueador; dominador; buscador de reconocimiento"
    ] }
] },
{ n: 4, t: "Normas y cohesión", cap: 2, pir: "media", mods: [
  { t: "Normas: concepto, características y funciones",
    tip: "Las normas son reglas compartidas, explícitas o implícitas, sobre qué conductas, actitudes y opiniones son adecuadas. Cialdini, Reno y Kallgren (1990) distinguieron normas descriptivas (lo que se hace) e inyuntivas (lo que se aprueba), y también hay prescriptivas y proscriptivas. Surgen de la interacción, se refieren a conductas importantes, son evaluativas y su incumplimiento se sanciona. Reducen la incertidumbre, coordinan, facilitan la locomoción hacia las metas, mantienen la identidad y regulan las relaciones.",
    v: [
      "Norma descriptiva=Refleja lo que los miembros suelen hacer",
      "Norma inyuntiva=Refleja lo que el grupo aprueba o desaprueba",
      "Norma prescriptiva=Indica qué hay que hacer",
      "Norma proscriptiva=Indica lo que no se debe hacer",
      "Norma implícita=Regla informal no escrita, como dejar hablar primero a los veteranos",
      "Locomoción=Avance del grupo hacia sus objetivos, que las normas facilitan",
      "Sanción informal=Burlas, exclusión o frialdad ante quien incumple",
      "Sherif (1935)=Mostró que en situaciones ambiguas las estimaciones convergen en una regla común"
    ],
    g: [
      "La distinción entre normas descriptivas e inyuntivas se debe a ___, Reno y Kallgren (1990).|Cialdini|Sherif|Festinger",
      "«No compartir los apuntes fuera del grupo» es una norma ___.|proscriptiva|descriptiva|prescriptiva",
      "Las normas ___ influyen porque anticipan aprobación o rechazo.|inyuntivas|descriptivas|explícitas",
      "Las normas facilitan la ___ del grupo hacia sus objetivos.|locomoción|cohesión|escisión",
      "Gracias a las normas, los roles sobreviven a la ___ de sus titulares.|rotación|ausencia|sanción"
    ],
    tf: [
      "Una norma implícita es siempre menos exigente que una explícita.|F|No necesariamente: una norma implícita puede ser tan exigente como una explícita, y su incumplimiento también se sanciona.",
      "Las normas descriptivas influyen porque indican lo que suele funcionar.|V",
      "Las normas se refieren a todo lo que hacen los miembros del grupo.|F|Se refieren a conductas importantes para el grupo, no a cualquier conducta de sus miembros.",
      "Un marco normativo excesivo puede limitar la iniciativa y volver al grupo poco adaptable.|V"
    ],
    q: [
      "En un piso de estudiantes todos aprueban fregar a diario, pero la cocina está siempre llena de platos. ¿Qué es lo más probable?|Que nadie friegue|Que todos frieguen|Que se imponga la inyuntiva|Las normas descriptiva e inyuntiva no coinciden, y la descriptiva (todos dejan los platos) empuja a no fregar.",
      "«En esta residencia casi nadie deja la cocina recogida» expresa una norma…|descriptiva|inyuntiva|proscriptiva|Describe lo que se hace, no lo que se aprueba ni lo que se prohíbe.",
      "¿Qué función cumplen las normas cuando la situación es ambigua?|Reducir la incertidumbre|Mantener la identidad grupal|Regular las relaciones|Dicen cómo interpretar la realidad y cómo comportarse. Sherif lo mostró con estimaciones que convergían en una norma común.",
      "¿Qué característica de las normas indica que no se aplican igual a todos?|Algunas rigen solo para ciertos roles|Todas surgen de un encuentro ocasional|Ninguna necesita aceptación compartida|Algunas solo valen para ciertos roles, y el grado de exigencia varía según quién las incumpla."
    ],
    inc: [
      "Sobre las características de las normas|Surgen de un encuentro ocasional|Son evaluativas|Su incumplimiento tiene sanciones|Surgen de la interacción continuada, no de un encuentro ocasional."
    ],
    seq: [],
    cls: [
      "Tipo de norma|Descriptiva: casi todos llegan tarde; la cocina siempre llena de platos|Inyuntiva: llegar tarde está mal visto; se aprueba fregar a diario"
    ] },
  { t: "La desviación de la norma (Schachter, oveja negra, desviados innovadores)",
    tip: "Festinger (1950) habla de presiones hacia la uniformidad para validar la propia visión de la realidad y avanzar hacia las metas. En el experimento de Schachter (1951), el desviado recibía al principio mucha más comunicación y, en los grupos cohesionados con un tema relevante, esta caía al final y se le excluía. Los créditos idiosincrásicos de Hollander explican quién puede desviarse. El efecto oveja negra endurece el juicio al desviado propio, y Moscovici destacó el papel innovador de las minorías consistentes.",
    v: [
      "Presión hacia la uniformidad=Fuerza que empuja a coincidir en opiniones y conductas (Festinger)",
      "Modal=Cómplice de Schachter que defendía la postura de la mayoría",
      "Desviado=Cómplice que mantenía una posición extrema y opuesta toda la discusión",
      "Desplazado=Cómplice que empezaba discrepando y se iba acercando a la mayoría",
      "Créditos idiosincrásicos=Margen para desviarse ganado al cumplir normas y contribuir",
      "Efecto oveja negra=Juicio más duro al miembro indeseable propio que al del exogrupo",
      "Marques, Yzerbyt y Leyens=Estudiaron en 1988 el juicio a los miembros indeseables propios",
      "Minoría consistente=Desviados que, según Moscovici, pueden cambiar las normas"
    ],
    g: [
      "En el experimento de Schachter, el cómplice ___ empezaba como desviado y se iba acercando a la mayoría.|desplazado|modal|disidente",
      "El modelo de los créditos idiosincrásicos se debe a ___ (1958).|Hollander|Schachter|Moscovici",
      "Para Moscovici, una minoría que defiende su postura con ___ puede cambiar las normas.|consistencia|flexibilidad|agresividad",
      "El desviado era propuesto para los comités ___ deseables.|menos|más|igual de",
      "El rechazo del desviado era mayor cuanto más ___ era el grupo.|cohesionado|numeroso|heterogéneo"
    ],
    tf: [
      "En el estudio de Schachter, el desviado recibía menos comunicación que el resto desde el comienzo.|F|Al principio recibía mucha más comunicación, porque el grupo intentaba persuadirle. Solo después caía.",
      "En el experimento de Schachter, el desplazado que acababa ajustándose no era rechazado.|V",
      "Según el efecto oveja negra, los miembros deseables del propio grupo se valoran mejor que los del exogrupo.|V",
      "Según Hollander, los recién llegados son quienes más margen tienen para desviarse sin sanción.|F|Tiene más margen quien ha acumulado crédito al cumplir normas y contribuir, normalmente alguien de alto estatus."
    ],
    q: [
      "Un jugador del propio equipo que hace trampas indigna más a sus compañeros que un rival que hace lo mismo. ¿Qué efecto ilustra?|Oveja negra|Créditos idiosincrásicos|Presión hacia la uniformidad|El desviado propio amenaza la imagen positiva del grupo, y juzgarle con dureza es una forma de protegerla.",
      "Una veterana muy valorada llega tarde a los ensayos del coro y nadie le dice nada, pero a una recién llegada se la amonesta. ¿Qué lo explica?|Los créditos idiosincrásicos|El efecto oveja negra|La presión hacia la uniformidad|Según Hollander, quien acumula crédito cumpliendo normas y contribuyendo puede permitirse desviaciones.",
      "¿Qué dos motivos atribuye Festinger a las presiones hacia la uniformidad?|Validar la realidad y avanzar hacia las metas|Proteger al líder y diferenciarse del exogrupo|Reducir costes y aumentar el tamaño|Si todos piensan igual, uno se siente seguro de tener razón, y el grupo avanza mejor hacia sus metas comunes.",
      "¿Qué dos funciones cumplen los desviados según la visión que inicia Moscovici?|Marcan el límite y abren la innovación|Refuerzan la jerarquía y la cohesión|Reducen la incertidumbre y el conflicto|Al ser sancionados aclaran dónde está el límite de lo aceptable, y al cuestionar las normas abren la puerta al cambio."
    ],
    inc: [
      "Sobre el experimento de Schachter|La comunicación al modal crecía hasta el final|El desviado recibía las peores valoraciones|En grupos cohesionados se excluía al desviado|La comunicación dirigida al modal se mantenía baja. La que aumentaba y luego caía era la dirigida al desviado."
    ],
    seq: [
      "Reacción ante el desviado (Schachter)|Mucha comunicación para persuadirle>Persistencia del desacuerdo>Caída de la comunicación>Exclusión y peores valoraciones"
    ],
    cls: [] },
  { t: "Cohesión: concepto, origen y factores",
    tip: "Festinger, Schachter y Back (1950) definieron la cohesión como el campo total de fuerzas que mantiene a los miembros en el grupo. Tiene tres componentes: atracción interpersonal, compromiso con la tarea y orgullo de grupo. Hogg (1992) distinguió la atracción personal de la social, dirigida a los demás en cuanto miembros. La favorecen el tiempo, la semejanza, el éxito, la amenaza externa (si es común y afrontable), el tamaño reducido, la dificultad de entrada y el liderazgo.",
    v: [
      "Cohesión=Campo total de fuerzas que mantiene a los miembros en el grupo",
      "Cohesión social=Agrado mutuo entre los miembros y gusto por estar juntos",
      "Cohesión de tarea=Grado en que los miembros comparten las metas y se implican en ellas",
      "Orgullo de grupo=Valor que se concede a pertenecer y a lo que el grupo representa",
      "Atracción personal=Agrado que depende de cómo es cada individuo",
      "Atracción social=Agrado hacia los demás en cuanto miembros del grupo (Hogg)",
      "Dificultad de entrada=Factor de unión: lo que cuesta conseguir se valora más",
      "Aronson y Mills (1959)=Iniciación severa y mayor valoración de un grupo aburrido"
    ],
    g: [
      "La cohesión fue definida como el campo total de fuerzas por Festinger, Schachter y ___ (1950).|Back|Bales|Benne",
      "Hogg (1992) distinguió la atracción personal de la atracción ___.|social|grupal|afectiva",
      "La amenaza externa solo cohesiona si se percibe como común y ___ en grupo.|afrontable|inevitable|lejana",
      "Un grupo demasiado ___ puede estar muy cohesionado y ser pobre en ideas.|homogéneo|numeroso|formal",
      "Quienes pasaron una iniciación más ___ valoraban más el grupo de discusión.|severa|breve|amable"
    ],
    tf: [
      "Un equipo de proyecto puede tener alta cohesión de tarea aunque sus miembros no sean amigos.|V",
      "La amenaza externa siempre aumenta la cohesión del grupo.|F|Solo si se percibe como común y afrontable en grupo. Si el grupo se culpa internamente, puede dividirlo.",
      "Según Hogg, la cohesión de una afición o un partido se basa más en la identificación con el grupo que en las amistades.|V",
      "En el estudio de Aronson y Mills, la iniciación severa hacía valorar peor el grupo cuando la discusión era aburrida.|F|Al contrario: quienes pasaron la iniciación severa valoraban más el grupo, aunque la discusión fuera aburrida."
    ],
    q: [
      "Para entrar en un coro exigente hay que superar pruebas duras, y quienes entran lo valoran mucho. ¿Qué factor de cohesión actúa?|Dificultad de entrada|Semejanza entre miembros|Éxito compartido|Lo que cuesta conseguir se valora más, como hallaron Aronson y Mills (1959) con la iniciación severa.",
      "¿Por qué la visión clásica de la cohesión no sirve para grupos grandes?|Los miembros no se conocen entre sí|El orgullo de grupo es muy bajo|La tarea no exige interdependencia|Si se basa en la simpatía entre individuos, no se aplica a grupos cuyos miembros no se conocen. Hogg propuso la atracción social.",
      "Unos vecinos se organizan contra el cierre de su centro de salud y se sienten más unidos que nunca. ¿Qué condición explica que la amenaza los cohesione?|Que sea común y afrontable en grupo|Que afecte solo a algunos vecinos|Que el grupo busque culpables internos|Si se percibe como común y la acción conjunta parece útil, une. Si el grupo se culpa internamente, puede dividirlo.",
      "¿Qué componente de la cohesión se refiere al valor que se concede a pertenecer al grupo?|Orgullo de grupo|Compromiso con la tarea|Atracción interpersonal|Los tres componentes son la atracción interpersonal, el compromiso con la tarea y el orgullo de grupo."
    ],
    inc: [
      "Sobre los factores de cohesión|El tamaño grande favorece la cohesión|El éxito refuerza el orgullo de pertenencia|El liderazgo puede fomentarla con símbolos|El tamaño reducido la favorece, porque permite más interacción directa entre todos los miembros."
    ],
    seq: [],
    cls: [
      "Componente de la cohesión|Atracción interpersonal: agrado mutuo; gusto por estar juntos|Compromiso con la tarea: metas compartidas; implicación en lograrlas|Orgullo de grupo: valor de pertenecer; lo que el grupo representa"
    ] },
  { t: "Consecuencias de la cohesión y su relación con el rendimiento",
    tip: "La cohesión aumenta la satisfacción y la permanencia, la comunicación positiva y la influencia del grupo sobre sus miembros, lo que puede favorecer el pensamiento grupal si se combina con aislamiento, liderazgo directivo y presión para no discrepar. Mullen y Copper (1994) hallaron una relación positiva pero modesta con el rendimiento, debida sobre todo al compromiso con la tarea y más fuerte del rendimiento hacia la cohesión. Beal et al. (2003) la vieron más fuerte con rendimiento medido como conducta y tareas muy interdependientes. La cohesión amplifica las normas de rendimiento.",
    v: [
      "Mullen y Copper (1994)=Metaanálisis: relación modesta, debida sobre todo al compromiso con la tarea",
      "Beal et al. (2003)=Metaanálisis: relación más fuerte con alta interdependencia de la tarea",
      "Normas de rendimiento=Pautas de esfuerzo que la cohesión amplifica en una u otra dirección",
      "Pensamiento grupal=Búsqueda de acuerdo que deteriora las decisiones (Janis)",
      "Rendimiento como conducta=Medida de cómo trabaja el equipo",
      "Rendimiento como resultado=Medida de lo que consigue el equipo",
      "Jerga propia=Señal visible de unión, junto con la cercanía física",
      "Éxito y cohesión=Relación en que el éxito une más de lo que la unión lleva al éxito"
    ],
    g: [
      "Según Mullen y Copper, la relación entre cohesión y rendimiento es positiva pero ___.|modesta|nula|muy fuerte",
      "La cohesión, por sí sola, no garantiza nada: ___ la dirección que marquen las normas.|potencia|invierte|anula",
      "Según Beal et al., la relación es más fuerte cuando el rendimiento se mide como ___.|conducta|resultado|beneficio",
      "Para mejorar el rendimiento es más eficaz fomentar el compromiso con la ___.|tarea|amistad|jerarquía",
      "El grupo cohesionado ejerce más presión hacia la ___ y sus miembros se resisten menos.|uniformidad|innovación|competición"
    ],
    tf: [
      "Según Mullen y Copper (1994), el efecto de la cohesión sobre el rendimiento es mayor que el del rendimiento sobre la cohesión.|F|Es al revés: el efecto del rendimiento sobre la cohesión es mayor. El éxito une más de lo que la unión lleva al éxito.",
      "Beal et al. (2003) hallaron que los tres componentes de la cohesión se relacionan con el rendimiento.|V",
      "Un equipo muy cohesionado cuya norma es «no matarse» puede rendir menos que un grupo poco unido.|V",
      "Según Mullen y Copper, la relación con el rendimiento se debía sobre todo a la atracción interpersonal.|F|Se debía sobre todo al compromiso con la tarea, no a la atracción interpersonal ni al orgullo."
    ],
    q: [
      "Una coordinadora quiere que su equipo rinda más. ¿Qué medida es más eficaz según la evidencia?|Fijar metas claras y compartidas|Organizar cenas para que se lleven bien|Aumentar el número de miembros|El compromiso con la tarea explica la mayor parte de la relación con el rendimiento, más que la atracción interpersonal.",
      "Dos equipos igual de cohesionados rinden muy distinto: uno valora el esfuerzo y el otro tiene la norma de «no matarse». ¿Qué lo explica?|Sus normas de rendimiento|Su distinto nivel de cohesión|Su tamaño|La cohesión aumenta la influencia del grupo y amplifica las normas que ya existen, sean de esfuerzo o de pasividad.",
      "Según Beal et al. (2003), ¿en qué tarea ayudará más la cohesión al rendimiento?|Una que exija alta interdependencia|Una que se haga de forma individual|Una medida solo por su resultado final|La relación es más fuerte con tareas de alta interdependencia y cuando el rendimiento se mide como conducta.",
      "¿Por qué en el experimento de Schachter el rechazo del desviado era mayor en los grupos más cohesionados?|Aumenta la presión hacia la uniformidad|Reduce la comunicación con el desviado|Impide la formación de subgrupos|Los grupos cohesionados ejercen más influencia sobre sus miembros, que se resisten menos a la presión hacia la uniformidad."
    ],
    inc: [
      "Sobre las consecuencias de la cohesión|Los miembros de grupos cohesionados abandonan más|Hay más cooperación y confianza|Puede favorecer el pensamiento grupal si hay aislamiento|Los miembros de grupos cohesionados están más satisfechos, participan más y abandonan menos."
    ],
    seq: [],
    cls: [
      "Hallazgo metaanalítico|Mullen y Copper: relación modesta; peso del compromiso con la tarea; efecto mayor del rendimiento sobre la cohesión|Beal et al.: tres componentes relacionados; rendimiento como conducta; alta interdependencia"
    ] }
] }
);

// SAIMAP Psicología · Interacción Social · Unidades 5–8
window.COURSE.units.push(
{ n: 5, t: "Comunicar", cap: 3, pir: "baja", mods: [
  { t: "Elementos y proceso de la comunicación (Watzlawick)",
    tip: "La comunicación interpersonal es el intercambio de mensajes entre personas que comparten, al menos en parte, un código. Sus elementos son emisor, receptor, mensaje, código, canal, contexto, ruido y retroalimentación, a los que se añaden los filtros de cada parte. Watzlawick, Beavin y Jackson (1967) la resumieron en cinco axiomas: es imposible no comunicar, hay un nivel de contenido y otro de relación, la relación depende de la puntuación de la secuencia, la comunicación es digital y analógica, y las interacciones son simétricas o complementarias.",
    v: [
      "Código=Sistema de signos compartido por emisor y receptor",
      "Ruido=Cualquier interferencia que distorsiona la transmisión o la recepción del mensaje",
      "Retroalimentación=Respuesta del receptor que permite al emisor comprobar cómo se le ha entendido",
      "Filtros=Valores, expectativas, experiencias y prejuicios que condicionan codificar e interpretar",
      "Metacomunicación=Comunicación sobre la propia comunicación o sobre la relación entre las partes",
      "Puntuación de la secuencia=Forma en que cada parte ordena los hechos y decide qué fue causa y qué efecto",
      "Comunicación analógica=Gestos, tono y postura, que se parecen a lo que expresan y transmiten la relación",
      "Interacción complementaria=Una conducta encaja con la contraria, como enseñar y aprender"
    ],
    g: [
      "Que un alumno pregunte «¿A la misma hora?» tras el aviso de la tutora es un ejemplo de ___.|retroalimentación|ruido|metacomunicación",
      "Una notificación enterrada entre otras veinte actúa como ___ en el proceso comunicativo.|ruido|canal|filtro",
      "Según Watzlawick, el nivel de relación ___ al nivel de contenido.|clasifica|sustituye|reproduce",
      "La comunicación ___ usa signos arbitrarios, sobre todo palabras, y es precisa en el contenido.|digital|analógica|complementaria",
      "Dos compañeros que compiten por tener razón mantienen una interacción ___.|simétrica|complementaria|analógica"
    ],
    tf: [
      "Según Watzlawick, dejar un mensaje en «visto» sin contestar también comunica.|V",
      "La comunicación analógica es la más precisa para transmitir el contenido del mensaje.|F|La precisa en el contenido es la digital (palabras). La analógica (gestos, tono, postura) transmite mejor la relación.",
      "Los axiomas de Watzlawick proceden de la clínica y se han contrastado poco de forma experimental.|V",
      "En una interacción complementaria, las dos partes tienden a igualar su conducta.|F|Igualarse define la interacción simétrica. En la complementaria una conducta encaja con la contraria, como mandar y obedecer."
    ],
    q: [
      "Una pareja discute: él dice «me encierro porque me criticas» y ella «te critico porque te encierras». ¿Qué axioma ilustra?|La puntuación de la secuencia|La imposibilidad de no comunicar|La comunicación digital y analógica|Cada parte ordena los hechos a su manera, y ninguna versión es el principio objetivo de la secuencia.",
      "«Pásame el informe» puede ser una petición entre iguales o una orden. ¿Qué lo determina según Watzlawick?|El nivel de relación|El código empleado|El canal elegido|El tono y el vínculo forman el nivel de relación, que clasifica al contenido de la frase.",
      "¿Qué crítica se hace al primer axioma de Watzlawick?|Que confunde información con comunicación|Que olvida el papel del nivel de relación|Que procede de estudios de laboratorio|Para algunos autores solo es comunicación la conducta con intención de transmitir, y el resto sería información que interpreta el observador.",
      "¿Por qué muchos conflictos no se resuelven discutiendo el contenido?|El desacuerdo está en la relación|Falta un código común entre las partes|El canal elegido introduce ruido|Según los axiomas, el desacuerdo real suele estar en el nivel de relación o en la puntuación de la secuencia."
    ],
    inc: [
      "Sobre los elementos de la comunicación|La retroalimentación va del emisor al receptor|El código es un sistema de signos compartido|El contexto incluye la situación física, social y temporal|La retroalimentación es la respuesta del receptor al emisor. Cierra el circuito y permite corregir malentendidos."
    ],
    seq: [
      "Proceso de comunicación|El emisor tiene un objetivo>Codifica su idea>La transmite por un canal>El receptor la recibe>La descodifica a través de sus filtros>Responde con retroalimentación"
    ],
    cls: [
      "Comunicación según Watzlawick|Digital: palabras; signos arbitrarios; precisa en el contenido|Analógica: gestos; tono; postura; transmite mejor la relación"
    ] },
  { t: "Errores y barreras",
    tip: "Los errores dependen de cómo juzga el receptor al emisor: el de conocimiento afecta a lo que se dice y no supone mala intención, mientras que el de transmisión supone una distorsión intencionada y daña la credibilidad. La conducta comunicativa tiene componentes verbal, paraverbal y no verbal, y cuando se contradicen se suele dar más peso a las señales no verbales para inferir emociones. Las barreras pueden ser físicas, semánticas o psicológicas, y originarse en el entorno, el emisor o el receptor.",
    v: [
      "Error de conocimiento=Se cree que el emisor no está informado, sin atribuirle mala intención",
      "Error de transmisión=Se cree que el emisor da a propósito una versión inexacta de la realidad",
      "Componente paraverbal=Rasgos vocales que acompañan a las palabras: tono, volumen, ritmo, pausas",
      "Componente no verbal=Mirada, gestos, postura, expresión facial, distancia y contacto",
      "Congruencia=Los componentes verbal, paraverbal y no verbal van en la misma dirección",
      "Barrera semántica=Obstáculo debido a un código no compartido o ambiguo",
      "Barrera psicológica=Obstáculo debido a actitudes, emociones y filtros de las partes",
      "Escucha selectiva=Atender solo a lo que confirma lo que uno ya cree"
    ],
    g: [
      "Decir «muy bien» con un tono plano e irónico afecta al componente ___.|paraverbal|verbal|semántico",
      "El error de ___ es más grave porque daña la credibilidad del emisor y la relación.|transmisión|conocimiento|codificación",
      "Un informático que habla con siglas a un cliente crea una barrera ___.|semántica|física|psicológica",
      "Ante una incongruencia, el receptor suele fiarse más de las señales ___ para inferir la emoción.|no verbales|verbales|escritas",
      "Dar una mala noticia por mensaje de texto es un error en la elección del ___.|canal|código|contexto"
    ],
    tf: [
      "El error de conocimiento afecta a lo que se dice y se corrige con preparación.|V",
      "Según la investigación, las palabras solo aportan un 7 % del significado en cualquier conversación.|F|Esas cifras salen de estudios de laboratorio con palabras sueltas y señales incongruentes, y no se pueden generalizar.",
      "Los canales pobres en señales, como el texto escrito, aumentan el riesgo de malentendidos en mensajes con carga emocional.|V",
      "El cansancio o el desinterés del receptor son ejemplos de barreras físicas o del entorno.|F|Son barreras psicológicas. Las físicas son el ruido, las interrupciones, una mala conexión o una mala acústica."
    ],
    q: [
      "En el chat del grupo, una compañera escribe «ya lo hago yo». Uno lo lee como generosidad y otro como reproche. ¿Qué lo explica mejor?|Faltan señales paraverbales y no verbales|Hay un error de conocimiento del emisor|Existe una barrera semántica de código|El texto escrito elimina casi toda la información paraverbal y no verbal, y cada receptor la rellena con sus propios filtros.",
      "Un alumno cree que su profesor exagera a propósito las cifras de suspensos para asustar. ¿Qué error le atribuye?|De transmisión|De conocimiento|De codificación|Atribuir una versión inexacta intencionada es un error de transmisión, que afecta a cómo se dice y daña la credibilidad.",
      "¿Qué es lo sólido de los estudios de Mehrabian sobre las señales no verbales?|Si hay contradicción, pesan las no verbales|Las palabras solo aportan un 7 % del mensaje|El tono importa más que cualquier gesto|Las cifras no se generalizan. Lo sólido es que, si palabras y señales se contradicen, se da más peso a estas para inferir emociones.",
      "Un receptor decide que el mensaje no vale nada antes de que el emisor termine. ¿Qué error comete?|Juzgar antes de tiempo|Escuchar de forma selectiva|Suponer sin comprobar|Decidir el valor del mensaje antes de que termine es juzgar antes de tiempo. La escucha selectiva atiende solo a lo que confirma lo propio."
    ],
    inc: [
      "Sobre las barreras de la comunicación|Una mala conexión en una videollamada es una barrera semántica|Una Erasmus que no domina las expresiones coloquiales afronta una barrera semántica|Los prejuicios hacia el emisor son una barrera psicológica|La mala conexión es una barrera física o del entorno. Las semánticas se deben a un código no compartido o ambiguo."
    ],
    seq: [],
    cls: [
      "Tipo de barrera|Física: ruido; interrupciones; mala conexión|Semántica: siglas; expresiones coloquiales; código ambiguo|Psicológica: prejuicios; ansiedad; cansancio"
    ] },
  { t: "Estilos de comunicación y asertividad",
    tip: "Los estilos se ordenan según el respeto por los propios derechos y por los de los demás: el pasivo respeta a los otros pero no a uno mismo, el agresivo a uno mismo pero no a los otros, y el asertivo a ambos. La asertividad no es un punto intermedio, ni consiste en decirlo todo siempre: incluye elegir cuándo, dónde y cómo hablar. Es una habilidad entrenable, no un rasgo fijo, y nadie tiene un estilo puro.",
    v: [
      "Estilo pasivo=Antepone los deseos ajenos a los propios y evita expresar desacuerdo",
      "Estilo agresivo=Defiende los propios derechos sin tener en cuenta los de los demás",
      "Estilo asertivo=Expresa de forma directa y honesta lo que necesita respetando al interlocutor",
      "Pasivo-agresivo=Desacuerdo expresado de forma indirecta: ironías, olvidos, silencios de castigo",
      "Mensaje «yo»=Describe conducta, efecto y sentimiento propio sin acusar",
      "Disco rayado=Repetir con calma la propia postura sin entrar en provocaciones",
      "Banco de niebla=Reconocer la parte de razón del otro sin ceder en lo esencial",
      "Decir «no»=Negativa clara y breve, si se quiere acompañada de una alternativa"
    ],
    g: [
      "A corto plazo el estilo ___ reduce la tensión, pero a largo plazo genera frustración y resentimiento.|pasivo|agresivo|asertivo",
      "«Es posible que llegue justo, pero prefiero entregarlo así» es un ejemplo de la técnica del ___.|banco de niebla|disco rayado|mensaje «yo»",
      "La asertividad no es un punto ___ entre la pasividad y la agresividad.|intermedio|opuesto|extremo",
      "«Claro, como si yo no tuviera vida», dicho mientras se queda de mala gana, es una respuesta ___.|pasivo-agresiva|abiertamente agresiva|plenamente asertiva",
      "Los estilos de comunicación se ordenan según el respeto por los derechos propios y por los ___.|ajenos|grupales|legales"
    ],
    tf: [
      "Ser asertivo implica decir siempre todo lo que uno piensa, en cualquier momento.|F|La asertividad incluye elegir cuándo, dónde y cómo hablar, y decidir que algo no merece una discusión.",
      "Una persona puede ser asertiva en clase y pasiva con su familia.|V",
      "La asertividad es un rasgo estable de personalidad que apenas puede modificarse.|F|Es una habilidad que se aprende y se entrena, no un rasgo fijo de personalidad.",
      "El estilo agresivo puede conseguir lo que quiere a corto plazo, aunque deteriora las relaciones.|V"
    ],
    q: [
      "Un tutor de prácticas pide a una estudiante que se quede otra tarde sin avisar. Ella responde: «Hoy no puedo porque mañana tengo un examen. Puedo quedarme el jueves». ¿Qué estilo muestra?|Asertivo|Pasivo|Pasivo-agresivo|Expresa con claridad su necesidad, da el motivo y ofrece una alternativa, respetando a la vez al tutor.",
      "«Cuando llegas tarde a las reuniones, tenemos que repetir lo dicho y me agobio con los plazos». ¿Qué técnica es?|Mensaje «yo»|Banco de niebla|Disco rayado|Describe la conducta, su efecto y el sentimiento propio sin acusar, en lugar de decir «eres un irresponsable».",
      "¿Qué combinación de respetos define al estilo pasivo?|Respeta a los demás, no a uno mismo|Respeta a uno mismo, no a los demás|No respeta a nadie de forma abierta|El pasivo antepone a los demás. Respetar solo a uno mismo es el agresivo, y el asertivo es el único que mantiene ambos respetos.",
      "Ante una petición insistente, una persona repite con calma «no puedo prestártelo» sin entrar en discusiones. ¿Qué técnica usa?|Disco rayado|Banco de niebla|Mensaje «yo»|Repetir con calma la propia postura sin entrar en provocaciones es la técnica del disco rayado."
    ],
    inc: [
      "Sobre la asertividad|Es el punto intermedio entre pasividad y agresividad|Incluye decidir que algo no merece una discusión|Respeta los derechos propios y los del interlocutor|No es un punto intermedio, sino la única opción que mantiene a la vez el respeto por uno mismo y por los demás."
    ],
    seq: [],
    cls: [
      "Estilo de comunicación|Pasivo: «Vale, no pasa nada»; evita el conflicto|Agresivo: «Siempre igual, esto es un abuso»; descalifica e impone|Asertivo: da el motivo y ofrece una alternativa; respeta a ambas partes"
    ] },
  { t: "La escucha activa",
    tip: "Oír no es escuchar: la escucha activa es el esfuerzo físico y mental por atender a todo el mensaje, comprender su intención y devolver lo entendido para comprobarlo. Procede de la psicología humanista (Rogers y Farson, 1957). Sus técnicas principales son parafrasear, reflejar emociones, resumir, hacer preguntas abiertas, clarificar y validar, y validar no significa dar la razón.",
    v: [
      "Parafrasear=Repetir con otras palabras el contenido de lo que dice el otro",
      "Reflejar emociones=Nombrar el sentimiento que se percibe en quien habla",
      "Resumir=Condensar lo esencial de una intervención larga",
      "Clarificar=Pedir precisión sobre lo que resulta ambiguo",
      "Validar=Reconocer que la vivencia del otro es comprensible, aunque no se comparta",
      "Pregunta abierta=Invita a ampliar en lugar de contestar sí o no",
      "Fingir atención=Dar señales externas de escucha sin procesar el mensaje",
      "Esfuerzo físico=Señales visibles de atención: mirar, orientar el cuerpo, asentir"
    ],
    g: [
      "Rogers y Farson describieron la escucha activa en ___.|1957|1967|1951",
      "«¿A qué te refieres con que no te apoyan?» es un ejemplo de ___.|clarificar|parafrasear|validar",
      "«Parece que eso te ha sentado fatal» es un ejemplo de ___ emociones.|reflejar|validar|resumir",
      "Responder «no es para tanto» es una respuesta que ___ la conversación.|bloquea|valida|clarifica",
      "La escucha activa es la mejor herramienta contra las barreras que dependen del ___.|receptor|emisor|entorno"
    ],
    tf: [
      "Validar el enfado de un compañero implica darle la razón en su interpretación de los hechos.|F|Validar es reconocer que la vivencia es comprensible, aunque no se comparta. No significa dar la razón.",
      "Preparar la respuesta mientras el otro habla es un obstáculo para la escucha activa.|V",
      "Aconsejar enseguida («lo que tienes que hacer es…») facilita la escucha activa porque muestra implicación.|F|Es una respuesta que bloquea la conversación, aunque se haga con buena intención.",
      "La escucha activa incluye atender a los componentes paraverbales y no verbales del mensaje.|V"
    ],
    q: [
      "Una amiga cuenta que le han cambiado el turno sin consultarle y otra responde: «O sea, que te lo cambiaron sin preguntarte». ¿Qué técnica usa?|Parafrasear|Validar|Clarificar|Repite con otras palabras el contenido para comprobar que lo ha entendido. Validar reconoce la emoción y clarificar pide precisión.",
      "Un estudiante asiente y dice «ajá» mientras piensa en su examen sin procesar lo que oye. ¿Qué obstáculo presenta?|Fingir atención|Escucha selectiva|Juicio previo|Da señales externas de escucha sin procesar el mensaje. La escucha selectiva atiende solo a lo que confirma lo que uno piensa.",
      "Un compañero se queja de un reparto injusto y le responden «a mí me pasó algo peor». ¿Qué tipo de respuesta es?|Una respuesta que bloquea|Un reflejo de emociones|Una validación empática|Cambiar el tema hacia la propia experiencia bloquea la conversación, aunque se haga con buena intención.",
      "¿Qué incluye el esfuerzo mental de la escucha activa?|Concentrarse, comprender y confirmar|Mirar, asentir y orientar el cuerpo|Aconsejar, resumir y dar la razón|Mirar, asentir u orientar el cuerpo son señales del esfuerzo físico. El mental es concentrarse, comprender, resumir internamente y confirmar."
    ],
    inc: [
      "Sobre la escucha activa|Consiste sobre todo en oír sin interrumpir|Procede de la tradición de la psicología humanista|Incluye devolver lo entendido para comprobarlo|Oír no es escuchar: exige atender a todo el mensaje, comprender su intención y confirmar lo entendido con quien habla."
    ],
    seq: [],
    cls: [
      "Esfuerzo en la escucha activa|Físico: mirar a la cara; asentir; no consultar el móvil|Mental: comprender la intención; resumir internamente; confirmar con el otro"
    ] }
] },
{ n: 6, t: "Persuadir y trabajar en grupo", cap: 3, pir: "media", mods: [
  { t: "La comunicación persuasiva: el programa de Yale",
    tip: "La persuasión es el intento deliberado de cambiar creencias, actitudes o conductas mediante un mensaje. El grupo de Hovland en Yale (Hovland, Janis y Kelley, 1953) estudió variables de fuente, mensaje, receptor y canal con un enfoque de aprendizaje del mensaje: atención, comprensión, aceptación y retención. Sus resultados fueron a menudo contradictorios, y el modelo de respuesta cognitiva de Greenwald (1968) propuso que lo que persuade son los pensamientos que genera el receptor.",
    v: [
      "Persuasión=Intento deliberado de cambiar creencias, actitudes o conductas mediante un mensaje",
      "Credibilidad de la fuente=Combinación de competencia y confianza que se atribuye al emisor",
      "Competencia=Componente de la credibilidad: la fuente sabe de lo que habla",
      "Confianza=Componente de la credibilidad: la fuente no tiene motivos para engañar",
      "Efecto adormecido=Aumento diferido de la persuasión de una fuente poco creíble al olvidar su origen",
      "Mensaje bilateral=Presenta y refuta los argumentos contrarios",
      "Respuesta cognitiva=Pensamientos del receptor al procesar el mensaje, que median el cambio",
      "Aprendizaje del mensaje=Enfoque de Yale: atender, comprender, aceptar y retener lo que se dice"
    ],
    g: [
      "La obra de referencia del grupo de Yale es «Communication and Persuasion», de Hovland, Janis y ___ (1953).|Kelley|Weiss|Greenwald",
      "Una fuente parece más fiable cuando defiende una postura ___ a su propio interés.|contraria|favorable|ajena",
      "Los mensajes ___ funcionan mejor con receptores informados o inicialmente en contra.|bilaterales|unilaterales|repetidos",
      "El efecto adormecido lo describieron Hovland y ___ (1951).|Weiss|Janis|Kelley",
      "Según el modelo de respuesta cognitiva, si el receptor genera ___, la actitud no cambia o se refuerza la inicial.|contraargumentos|pensamientos favorables|señales periféricas"
    ],
    tf: [
      "Según el enfoque de Yale, si falla una de las fases (atención, comprensión, aceptación o retención), la persuasión no se produce.|V",
      "Las apelaciones al miedo persuaden más cuanto más intenso es el miedo, aunque no se ofrezca una salida.|F|Persuaden sobre todo con recomendaciones claras y eficaces. El miedo sin salida tiende a provocar rechazo o negación.",
      "El efecto adormecido se ha replicado, aunque solo aparece en condiciones concretas.|V",
      "La repetición de un mensaje aumenta su aceptación de forma ilimitada.|F|La repetición moderada aumenta la aceptación, pero la excesiva produce cansancio."
    ],
    q: [
      "Una campaña antitabaco se dirige a fumadores informados y escépticos. Según el programa de Yale, ¿qué mensaje conviene?|Bilateral, refutando las objeciones|Unilateral, solo con argumentos a favor|Unilateral y repetido muchas veces|Con receptores informados o inicialmente en contra funcionan mejor los mensajes que presentan y refutan los argumentos contrarios.",
      "Un lector rechaza un artículo porque lo firma una web poco fiable, pero meses después defiende sus ideas sin recordar de dónde salieron. ¿Qué fenómeno es?|Efecto adormecido|Ruta periférica|Mensaje bilateral|Con el tiempo se recuerda el contenido y se olvida la fuente poco creíble, y el efecto persuasivo puede aumentar (Hovland y Weiss, 1951).",
      "¿Qué limitación del programa de Yale motivó el modelo de respuesta cognitiva?|Faltaba explicar qué hace el receptor|No estudiaba las variables de la fuente|Ignoraba el canal de los mensajes|Los resultados eran contradictorios porque faltaba una teoría sobre el procesamiento del receptor. Greenwald (1968) situó la clave en sus pensamientos.",
      "¿Qué dos componentes forman la credibilidad de la fuente?|Competencia y confianza|Atractivo y semejanza|Poder y atractivo|El atractivo, la semejanza y el poder son otras variables de la fuente estudiadas en Yale, distintas de la credibilidad."
    ],
    inc: [
      "Sobre las variables estudiadas en Yale|La autoestima del receptor es una variable del mensaje|El orden de presentación es una variable del mensaje|La semejanza con el receptor es una variable de la fuente|La autoestima, como la implicación o el estado de ánimo, es una variable del receptor."
    ],
    seq: [
      "Fases del aprendizaje del mensaje (Yale)|Atención>Comprensión>Aceptación>Retención"
    ],
    cls: [
      "Variable del programa de Yale|Fuente: credibilidad; atractivo; poder|Mensaje: calidad de los argumentos; orden de presentación; repetición|Receptor: implicación; autoestima; estado de ánimo"
    ] },
  { t: "El modelo de probabilidad de elaboración",
    tip: "En el modelo de probabilidad de elaboración (Petty y Cacioppo, 1986), la elaboración varía en un continuo con dos rutas en sus extremos: la central, donde persuade la calidad de los argumentos, y la periférica, donde persuaden señales simples. Para la ruta central hacen falta a la vez motivación y capacidad. El cambio por ruta central es más persistente, más resistente y predice mejor la conducta, y una misma variable puede cumplir varios papeles según el nivel de elaboración.",
    v: [
      "Elaboración=Grado en que una persona piensa sobre los argumentos de un mensaje",
      "Ruta central=Cambio de actitud basado en el análisis cuidadoso de los argumentos",
      "Ruta periférica=Cambio basado en señales simples ajenas a la calidad de los argumentos",
      "Señal periférica=Indicio simple, como la fama de la fuente o el consenso aparente",
      "Motivación para procesar=Relevancia personal, necesidad de cognición y responsabilidad sobre la decisión",
      "Capacidad para procesar=Tiempo, ausencia de distracciones, conocimientos y mensaje comprensible",
      "Necesidad de cognición=Gusto por pensar, que aumenta la motivación para elaborar",
      "Sesgo de la elaboración=Papel de una variable que colorea los pensamientos al procesar con cuidado"
    ],
    g: [
      "Para seguir la ruta central deben darse a la vez la motivación y la ___ para procesar.|capacidad|necesidad|relevancia",
      "Para el ELM, la elaboración es una variable ___, con dos rutas en sus extremos.|continua|dicotómica|binaria",
      "Con baja relevancia personal, en el estudio de 1981 influyó más la ___ de la fuente.|pericia|calidad|semejanza",
      "Las actitudes formadas por ruta ___ son más frágiles y dependen de que la señal siga presente.|periférica|central|sistemática",
      "Una fuente inesperada que despierta curiosidad actúa como ___ de la cantidad de elaboración.|determinante|argumento|sesgo"
    ],
    tf: [
      "Según el ELM, basta con que el receptor esté muy motivado para que siga la ruta central.|F|Hacen falta a la vez motivación y capacidad. Si falla cualquiera de las dos, predomina la ruta periférica.",
      "Las actitudes formadas por ruta central predicen mejor la conducta que las formadas por ruta periférica.|V",
      "El número de argumentos de un mensaje puede actuar como señal periférica.|V",
      "En el estudio de Petty, Cacioppo y Goldman (1981), con alta relevancia pesó más la pericia de la fuente.|F|Con alta relevancia pesó más la calidad de los argumentos. La pericia de la fuente influyó más con baja relevancia."
    ],
    q: [
      "Un estudiante cansado y con prisa ve el anuncio de un máster que le interesa mucho. Según el ELM, ¿qué ruta es más probable?|Periférica, por falta de capacidad|Central, por su alta motivación|Central, por la relevancia del tema|Aunque esté motivado, la falta de tiempo y el cansancio reducen la capacidad, y sin ambas condiciones predomina la ruta periférica.",
      "En un anuncio de champú, el pelo brillante de la modelo se presenta como prueba de lo que hace el producto. ¿Qué papel cumple su atractivo?|Argumento|Señal periférica|Sesgo de la elaboración|Si el atractivo es pertinente para el producto, funciona como argumento y no como simple señal periférica.",
      "¿Qué caracteriza al cambio de actitud por ruta periférica frente al de ruta central?|Es menos persistente|Es más resistente|Predice mejor la conducta|El cambio periférico es más frágil y depende de que la señal siga presente. La ruta central da actitudes persistentes y resistentes.",
      "¿Qué aportación del ELM explica muchos resultados contradictorios del programa de Yale?|Una variable cumple varios papeles|La fuente importa más que el mensaje|El canal determina la elaboración|El atractivo, por ejemplo, puede ser señal, argumento, sesgo o determinante de la elaboración según el nivel de procesamiento."
    ],
    inc: [
      "Sobre el modelo de probabilidad de elaboración|La ruta periférica produce cambios más duraderos|La necesidad de cognición aumenta la motivación|Las distracciones reducen la capacidad de procesar|El cambio por ruta central es el más persistente y resistente. Creer lo contrario es la trampa típica del PIR."
    ],
    seq: [],
    cls: [
      "Condición del ELM|Motivación: relevancia personal; necesidad de cognición; responsabilidad personal|Capacidad: tiempo; ausencia de distracciones; conocimientos previos"
    ] },
  { t: "El modelo heurístico-sistemático y la evidencia actual",
    tip: "El modelo heurístico-sistemático de Chaiken (1980) distingue un procesamiento sistemático, equivalente a la ruta central, y otro heurístico, basado en reglas simples. A diferencia del ELM, ambos pueden actuar a la vez (hipótesis de aditividad, atenuación y sesgo), y se procesa hasta alcanzar la confianza deseada (principio de suficiencia). Los modelos duales tienen amplio apoyo, pero se critican su falsabilidad, la medida de la elaboración y la propia existencia de dos procesos (unimodelo de Kruglanski y Thompson, 1999).",
    v: [
      "Procesamiento sistemático=Análisis detallado y esforzado del contenido del mensaje",
      "Procesamiento heurístico=Juicio basado en reglas simples como «los expertos suelen acertar»",
      "Aditividad=Ambos procesamientos apuntan en la misma dirección y sus efectos se suman",
      "Atenuación=El análisis detallado contradice al atajo y reduce su efecto",
      "Hipótesis de sesgo=Ante un mensaje ambiguo, el atajo orienta cómo se interpretan los argumentos",
      "Principio de suficiencia=Se procesa hasta alcanzar la confianza deseada en el propio juicio",
      "Motivación defensiva=Procesar para defender una postura en la que uno está implicado",
      "Unimodelo=Un único proceso de inferencia en que argumentos y señales sirven de evidencia"
    ],
    g: [
      "El modelo heurístico-sistemático lo propuso ___ en 1980.|Chaiken|Greenwald|Kruglanski",
      "Elegir un máster lleva a procesar más que elegir un bolígrafo, según el principio de ___.|suficiencia|aditividad|atenuación",
      "Una fuente experta con argumentos muy débiles ilustra la hipótesis de ___.|atenuación|aditividad|sesgo",
      "Procesar para causar buena impresión corresponde a la motivación de ___.|impresión|precisión|defensa",
      "El unimodelo de Kruglanski y Thompson sostiene que hay un único proceso de ___.|inferencia|condicionamiento|aprendizaje"
    ],
    tf: [
      "La hipótesis de aditividad pertenece al ELM de Petty y Cacioppo.|F|Es del HSM de Chaiken, que admite que los dos modos de procesamiento actúen a la vez y sumen sus efectos.",
      "Con motivación defensiva o de impresión se puede pensar mucho, pero de forma sesgada.|V",
      "Una crítica al ELM es que la elaboración a menudo se infiere del propio cambio de actitud, lo que resulta circular.|V",
      "El unimodelo sostiene que las señales sobre la fuente no influyen en el juicio, solo los argumentos.|F|Según el unimodelo, cualquier información, sea un argumento o una señal sobre la fuente, sirve como evidencia en un único proceso."
    ],
    q: [
      "Un lector recibe un dato estadístico confuso. Como lo firma un experto reconocido, lo interpreta de forma favorable. ¿Qué hipótesis del HSM lo explica?|Sesgo|Aditividad|Atenuación|Cuando el mensaje es ambiguo, el heurístico (la pericia de la fuente) orienta cómo se interpretan los argumentos.",
      "¿En qué se diferencia el HSM del ELM?|Admite que ambos modos actúen a la vez|Distingue dos modos de procesamiento|Propone que persuaden los pensamientos|Ambos modelos son duales. Lo propio del HSM es la coexistencia de los dos modos y el principio de suficiencia.",
      "Según el principio de suficiencia, ¿cuándo se procesa de forma sistemática?|Si falta mucha confianza en el juicio|Si la fuente del mensaje es experta|Si el mensaje trae muchos argumentos|Si la distancia entre la confianza que se tiene y la que se desea es grande, se procesa de forma sistemática. Si basta un atajo, se usa el heurístico.",
      "¿Qué crítica a los modelos duales se refiere a su falsabilidad?|Cualquier resultado encaja a posteriori|Las dos rutas producen el mismo cambio|La relevancia personal no tiene efecto|Si una variable puede ser señal, argumento, sesgo o motivador, es difícil hallar un resultado que contradiga el ELM."
    ],
    inc: [
      "Sobre la evidencia de los modelos duales|Las señales sencillas pesan más con elaboración alta|La calidad de los argumentos pesa más con alta relevancia|Las actitudes muy elaboradas predicen mejor la conducta|Las señales sencillas (fuente, número de argumentos, consenso) influyen más cuando la elaboración es baja."
    ],
    seq: [],
    cls: [
      "Modelo de persuasión|ELM: ruta central; ruta periférica; Petty y Cacioppo|HSM: aditividad; principio de suficiencia; Chaiken|Unimodelo: un único proceso de inferencia; Kruglanski y Thompson"
    ] },
  { t: "Habilidades de comunicación en el trabajo en grupo",
    tip: "En los grupos formales la comunicación puede ser vertical descendente, vertical ascendente u horizontal. Leavitt (1951) halló que las redes centralizadas, como la rueda, son más rápidas en tareas simples, mientras que en las complejas la persona central se satura y rinden mejor las descentralizadas, con una satisfacción más repartida. Habilidades como formular una crítica, resumir o pedir opiniones discrepantes mejoran el funcionamiento del grupo.",
    v: [
      "Comunicación descendente=Va del responsable a los miembros: instrucciones y objetivos",
      "Comunicación ascendente=Va de los miembros al responsable: informes, propuestas y quejas",
      "Comunicación horizontal=Entre miembros del mismo nivel, para coordinarse y apoyarse",
      "Red centralizada=La información pasa por una posición central, como en la rueda",
      "Red en círculo=Red descentralizada en la que todos están al mismo nivel",
      "Modelo participativo=Funcionamiento grupal que favorece la implicación y la innovación",
      "Modelo jerárquico=Eficaz para objetivos inmediatos, pero pierde información y concentra influencia",
      "Retroalimentación descriptiva=Hablar de conductas observables y su efecto, no de etiquetas"
    ],
    g: [
      "Leavitt estudió en el laboratorio redes de comunicación en grupos de ___ personas.|cinco|tres|siete",
      "En las tareas simples, la red ___ es más rápida y comete menos errores.|centralizada|descentralizada|en círculo",
      "En la red en rueda, la satisfacción es alta en la posición ___ y baja en el resto.|central|periférica|lateral",
      "Pedir explícitamente opiniones discrepantes protege frente al ___ grupal.|pensamiento|rendimiento|liderazgo",
      "La identificabilidad de las aportaciones reduce la ___ social.|holgazanería|facilitación|comparación"
    ],
    tf: [
      "Las revisiones de Shaw (1964) confirmaron que la ventaja de la red centralizada se limita a las tareas sencillas.|V",
      "En las redes descentralizadas la satisfacción es mayor y está más repartida.|V",
      "Las propuestas y quejas que los miembros dirigen al responsable son comunicación vertical descendente.|F|Van de los miembros al responsable, así que son comunicación ascendente. La descendente lleva instrucciones y objetivos.",
      "Para formular una crítica conviene centrarse en la persona y no en la conducta concreta.|F|Conviene describir la conducta concreta que molesta, no a la persona, expresar cómo afecta y proponer un cambio."
    ],
    q: [
      "Un equipo debe resolver un problema complejo y nuevo, y todo pasa por la coordinadora, que acaba desbordada. Según Leavitt y Shaw, ¿qué red convendría?|Una red en círculo|Una red en rueda|Una red en forma de Y|En tareas complejas la posición central se satura y rinden mejor las redes descentralizadas, como el círculo.",
      "Decir «has interrumpido tres veces» en lugar de «eres un maleducado» es un ejemplo de…|retroalimentación descriptiva|petición de confirmación grupal|expresión de una opinión distinta|Se habla de una conducta observable y de su efecto, en lugar de poner una etiqueta a la persona.",
      "«¿Me equivoco si entiendo que preferís repartir por capítulos?» es un ejemplo de…|pedir confirmación o desacuerdo|resumir lo dicho antes de decidir|expresar una opinión distinta|Son preguntas que obligan a posicionarse. Resumir condensa lo dicho, y la opinión distinta empieza reconociendo la postura del otro.",
      "¿Qué ventaja tiene el modelo de funcionamiento centralizado o jerárquico?|Eficacia en objetivos inmediatos|Más implicación de los miembros|Menor pérdida de información|Es eficaz para objetivos concretos e inmediatos, pero pierde información y concentra la influencia. La implicación es propia del modelo participativo."
    ],
    inc: [
      "Sobre las redes de Leavitt|La red en rueda rinde mejor en tareas complejas|La red en rueda es más rápida en tareas simples|En la rueda, la persona central puede saturarse|En las tareas complejas la persona central se satura y rinde mejor la red descentralizada."
    ],
    seq: [
      "Formular una crítica en el grupo|Aclarar qué se quiere conseguir>Describir la conducta concreta>Expresar cómo afecta>Proponer un cambio>Agradecer la escucha"
    ],
    cls: [
      "Dirección de la comunicación|Descendente: instrucciones; objetivos|Ascendente: informes; propuestas; quejas|Horizontal: coordinación; apoyo mutuo"
    ] }
] },
{ n: 7, t: "Agresión, violencia y riesgo", cap: 4, pir: "baja", mods: [
  { t: "Agresión y violencia: conceptos y tipos",
    tip: "La agresión es una conducta dirigida intencionadamente a dañar a alguien que no desea ser dañado, y la violencia es una agresión grave. La conducta antisocial transgrede normas sociales importantes, y la delincuencia es una categoría legal que no coincide del todo con las anteriores. Por su función, la agresión es hostil o reactiva, o bien instrumental o proactiva, y por su forma, física, verbal o relacional. Galtung distingue violencia directa, estructural y cultural.",
    v: [
      "Agresión=Conducta dirigida intencionadamente a dañar a alguien que no desea ser dañado",
      "Conducta antisocial=Transgresión de normas sociales importantes, sea o no agresiva",
      "Delincuencia=Conductas tipificadas como delito en el código penal",
      "Agresión hostil=Respuesta impulsiva y cargada de ira a una provocación o amenaza",
      "Agresión instrumental=Agresión planificada en la que el daño es un medio para otro fin",
      "Agresión relacional=Dañar difundiendo rumores, excluyendo o aislando a la víctima",
      "Violencia estructural=Daño de estructuras sociales que impiden satisfacer necesidades básicas",
      "Violencia cultural=Creencias, discursos y símbolos que legitiman la violencia directa y la estructural"
    ],
    g: [
      "Toda violencia es agresión, pero no toda agresión es ___.|violencia|intencional|relacional",
      "Pisar a alguien sin querer en el autobús no es agresión porque falta la ___ de dañar.|intención|gravedad|planificación",
      "La delincuencia es una categoría ___, que depende del país y de la época.|legal|psicológica|biológica",
      "Difundir rumores para que excluyan a alguien del grupo es una agresión ___.|relacional|física|estructural",
      "Según Galtung, la violencia directa sería la parte ___ de un iceberg.|visible|sumergida|estable"
    ],
    tf: [
      "La ira y la hostilidad, por sí mismas, ya constituyen agresión.|F|La agresión es una conducta, no una emoción. La ira o la hostilidad pueden acompañarla, pero no son agresión por sí mismas.",
      "Un fraude fiscal es un delito aunque no sea una conducta agresiva.|V",
      "La agresión relacional es poco frecuente en la adolescencia y menos dañina que la física.|F|Es muy frecuente en la adolescencia y puede ser tan dañina como la física.",
      "Una pelea puede empezar por ira y mantenerse para no perder estatus ante el grupo.|V"
    ],
    q: [
      "Un adolescente acosa a un compañero porque así gana popularidad en su clase. Según su función, ¿qué tipo de agresión es?|Instrumental o proactiva|Hostil o reactiva|Relacional o indirecta|El daño es un medio para conseguir otro objetivo, el estatus. La relacional es una clase según la forma, no según la función.",
      "La pobreza y la desigualdad en el acceso a la salud, sin un agresor concreto, son para Galtung violencia…|estructural|cultural|directa|Las estructuras sociales que impiden satisfacer necesidades básicas producen daño sin un agresor identificable.",
      "Los chistes que normalizan la humillación de un colectivo son, según Galtung, violencia…|cultural|estructural|relacional|Las creencias, discursos y símbolos que legitiman las otras formas de violencia constituyen la violencia cultural.",
      "¿Cuál de estas conductas cumple la definición psicológica de agresión?|Insultar en un grupo de mensajería|Un tratamiento médico muy doloroso|Pisar a alguien sin querer en el bus|El tratamiento médico no es un daño indeseado y el pisotón carece de intención. El insulto es agresión, aunque no llegue a violencia."
    ],
    inc: [
      "Sobre los conceptos de agresión|Toda agresión es también violencia|La violencia es una forma grave de agresión|La conducta antisocial puede no ser agresiva|Toda violencia es agresión, pero no al revés: un insulto es agresión, mientras que una paliza es violencia."
    ],
    seq: [],
    cls: [
      "Función de la agresión|Hostil o reactiva: impulsiva; cargada de ira; poco planificada|Instrumental o proactiva: fría; planificada; el daño es un medio"
    ] },
  { t: "Enfoques explicativos: biológico, sociológico y psicológico",
    tip: "El enfoque biológico estudia hoy genética, neuroquímica, neuroanatomía y factores ambientales con efecto biológico, tras refutarse la frenología o el «criminal nato» de Lombroso, y solo describe predisposiciones. El sociológico incluye la anomia (Durkheim, Merton) y la desorganización social (Shaw y McKay). El psicológico se centra en procesos individuales, como la frustración-agresión, matizada por Miller y Berkowitz. Las teorías actuales son psicosociales e integradoras, y para intervenir se priorizan los factores psicosociales.",
    v: [
      "Criminal nato=Idea refutada de Lombroso que asociaba el delito a rasgos físicos «atávicos»",
      "Anomia (Merton)=Tensión entre metas culturales y falta de medios legítimos para lograrlas",
      "Innovación=Respuesta que persigue las metas culturales por medios ilegítimos, según Merton",
      "Desorganización social=Rasgos del barrio que debilitan el control social informal",
      "Frustración=Bloqueo de una conducta dirigida a una meta",
      "Catarsis=Idea no respaldada de que agredir reduce la agresión posterior",
      "Acción situacional=Teoría de Wikström: propensión de la persona en interacción con el entorno moral",
      "Corteza prefrontal=Región que regula los impulsos y anticipa consecuencias"
    ],
    g: [
      "La baja actividad ___ se asocia a la agresión impulsiva.|serotoninérgica|dopaminérgica|colinérgica",
      "Shaw y McKay observaron que la delincuencia seguía alta en ciertos barrios de ___ aunque cambiara la población.|Chicago|Boston|Londres",
      "Según Miller (1941), la frustración genera una ___ a la agresión, pero puede llevar a otras respuestas.|instigación|catarsis|habituación",
      "Según Berkowitz (1989), la frustración provoca agresión en la medida en que genera afecto ___.|negativo|positivo|neutro",
      "La relación de la testosterona con la agresión es modesta y ___.|bidireccional|unidireccional|lineal"
    ],
    tf: [
      "Desahogarse golpeando un cojín reduce la ira y la agresión posterior.|F|La catarsis no está respaldada por la investigación: desahogarse así tiende a mantener la ira, no a reducirla.",
      "Los estudios de gemelos y de adopción indican un componente hereditario moderado de la conducta antisocial, en interacción con el ambiente.|V",
      "Las tipologías corporales de Kretschmer y Sheldon siguen siendo una base válida del enfoque biológico actual.|F|Están refutadas, igual que la frenología de Gall y el «criminal nato» de Lombroso.",
      "Para la intervención se priorizan los factores psicosociales porque son modificables.|V"
    ],
    q: [
      "Un joven de un barrio pobre desea el éxito económico que exhibe la sociedad, pero no tiene acceso a estudios ni a empleo, y empieza a traficar. ¿Qué teoría lo explica mejor?|La anomia de Merton|La desorganización social|La frustración-agresión|Merton describe la tensión entre metas culturales y medios legítimos, y la innovación como respuesta: perseguir la meta por medios ilegítimos.",
      "¿Qué concluyeron Shaw y McKay (1942) sobre la delincuencia en ciertos barrios de Chicago?|Dependía del barrio, no de sus vecinos|Dependía de los rasgos de sus vecinos|Dependía de la falta de metas culturales|Las tasas seguían altas aunque cambiara la población, porque pobreza, movilidad y heterogeneidad debilitan el control social informal.",
      "Según la formulación original de Dollard et al. (1939), la frustración…|siempre produce agresión|solo produce afecto negativo|puede llevar a otras respuestas|La formulación original era absoluta. Miller (1941) matizó que puede llevar a otras respuestas, y Berkowitz (1989) añadió el afecto negativo.",
      "¿Qué afirmación sobre la biología de la violencia es correcta?|Describe predisposiciones según el entorno|Identifica genes que la causan por sí solos|Muestra que la testosterona la determina|Ningún factor biológico causa la violencia por sí solo: hay predisposiciones que aumentan el riesgo según el entorno de desarrollo."
    ],
    inc: [
      "Sobre los enfoques explicativos|La anomia la formularon originalmente Shaw y McKay|Wikström propone una teoría integradora|Lombroso asoció el delito a rasgos físicos «atávicos»|La anomia la formuló Durkheim y la reformuló Merton (1938). Shaw y McKay propusieron la desorganización social."
    ],
    seq: [
      "Evolución de la teoría de la frustración-agresión|Dollard et al. (1939): la frustración siempre produce agresión>Miller (1941): genera una instigación que no siempre acaba en agresión>Berkowitz (1989): actúa a través del afecto negativo"
    ],
    cls: [
      "Enfoque explicativo|Biológico: Lombroso; corteza prefrontal; serotonina|Sociológico: anomia; desorganización social; Shaw y McKay|Psicológico: frustración-agresión; Dollard; Berkowitz"
    ] },
  { t: "Factores de riesgo y de protección",
    tip: "Los factores de riesgo aumentan la probabilidad de la conducta delictiva y los de protección la reducen o amortiguan el efecto del riesgo. Son probabilísticos, se acumulan e interactúan, y la protección no es solo ausencia de riesgo. Se agrupan en los ámbitos individual, familiar y social. La distinción clave para intervenir separa los factores estáticos, útiles para estimar el riesgo, de los dinámicos, que pueden modificarse y son los objetivos del tratamiento.",
    v: [
      "Factor de riesgo=Variable que aumenta la probabilidad de la conducta delictiva o violenta",
      "Factor de protección=Variable que reduce la conducta delictiva o amortigua el efecto del riesgo",
      "Factor estático=Factor de riesgo que no puede cambiarse, como los delitos previos",
      "Factor dinámico=Factor de riesgo modificable mediante la intervención",
      "Modelos de vulnerabilidad=Subrayan cómo se suman los factores de riesgo",
      "Modelos de competencia=Subrayan cómo los factores de protección previenen el delito",
      "Pensamiento prosocial=Programa de Ross y Fabiano, adaptado por Garrido, que entrena factores protectores",
      "Carácter probabilístico=Los factores describen a grupos, no sentencian a individuos"
    ],
    g: [
      "Los factores de riesgo son probabilísticos: describen a ___, no sentencian a individuos.|grupos|familias|barrios",
      "Los factores estáticos sirven para ___ el riesgo de reincidencia, pero no para reducirlo.|estimar|modificar|tratar",
      "Una disciplina dura o incoherente es un factor de riesgo del ámbito ___.|familiar|individual|comunitario",
      "Los modelos de ___ subrayan cómo los factores de protección previenen la conducta delictiva.|competencia|vulnerabilidad|riesgo",
      "En España, el programa de pensamiento prosocial de Ross y Fabiano lo adaptó ___.|Garrido|Andrews|Bonta"
    ],
    tf: [
      "Un factor de protección es simplemente la ausencia de un factor de riesgo.|F|Protección no es solo ausencia de riesgo: un vínculo con un adulto prosocial protege de forma activa, incluso en un barrio conflictivo.",
      "El riesgo de conducta delictiva crece con el número de factores presentes y con su combinación.|V",
      "Haber sufrido maltrato en la infancia es un factor de riesgo dinámico.|F|Es estático, porque no puede cambiarse. Son dinámicos, por ejemplo, las amistades antisociales o el consumo de drogas.",
      "Ser varón o adolescente se asocia a más delincuencia, pero no explica por qué ocurre.|V"
    ],
    q: [
      "Dos chicos de 16 años han cometido el mismo robo. Uno tiene amigos que delinquen y consume a diario, y el otro tiene buena relación con su madre y juega al fútbol. ¿Qué se concluye?|Igual factor estático, distinto perfil|Igual perfil de riesgo y de necesidades|Distinto factor estático, igual perfil|El delito cometido es el mismo, pero los factores dinámicos y de protección dan perfiles y necesidades de intervención muy distintos.",
      "¿Cuál de estos es un factor de riesgo dinámico?|Las actitudes favorables al delito|La edad de inicio de la conducta delictiva|El número de delitos cometidos antes|Las actitudes pueden modificarse con la intervención. La edad de inicio y los delitos previos son factores estáticos.",
      "¿Cuál es un factor de protección del ámbito social y comunitario?|Una escuela con trabajo cooperativo|Un estilo educativo democrático|Unas estrategias de afrontamiento eficaces|El estilo educativo democrático es un factor protector familiar, y el afrontamiento eficaz, uno individual.",
      "¿Por qué los factores dinámicos son los objetivos del tratamiento?|Porque pueden modificarse|Porque predicen mejor el riesgo|Porque no cambian con la edad|Los estáticos sirven para estimar el riesgo, pero no para reducirlo. Los dinámicos, al ser modificables, son los que el tratamiento puede cambiar."
    ],
    inc: [
      "Sobre los factores de riesgo|Un factor de riesgo determina la conducta|Los factores de riesgo se acumulan e interactúan|La impulsividad es un factor de riesgo individual|Son probabilísticos, no deterministas: la mayoría de las personas con factores de riesgo no delinquen."
    ],
    seq: [],
    cls: [
      "Tipo de factor de riesgo|Estático: edad de inicio; delitos previos; maltrato en la infancia|Dinámico: actitudes favorables al delito; amistades antisociales; desempleo"
    ] },
  { t: "El modelo Riesgo-Necesidad-Responsividad",
    tip: "El modelo RNR (Andrews, Bonta y Hoge, 1990) responde a tres preguntas: a quién tratar con más intensidad (principio de riesgo), qué tratar (necesidades criminógenas, principio de necesidad) y cómo hacerlo (responsividad general, cognitivo-conductual, y responsividad específica). Los ocho factores centrales incluyen los cuatro grandes: historia delictiva, patrón de personalidad antisocial, cogniciones antisociales y asociados antisociales. El Modelo de Buenas Vidas (Ward, 2002) lo complementa centrándose en las metas de la persona.",
    v: [
      "Principio de riesgo=Ajustar la intensidad de la intervención al nivel de riesgo de reincidencia",
      "Principio de necesidad=Dirigir la intervención a las necesidades criminógenas",
      "Principio de responsividad=Adaptar el tratamiento a la persona para que pueda aprovecharlo",
      "Necesidad criminógena=Factor dinámico directamente relacionado con la conducta delictiva",
      "Responsividad general=Uso de métodos cognitivo-conductuales y de aprendizaje social",
      "Responsividad específica=Ajustar a motivación, capacidad, estilo de aprendizaje, cultura o género",
      "Cuatro grandes=Historia delictiva, personalidad, cogniciones y asociados antisociales",
      "Modelo de Buenas Vidas=Propuesta de Ward: lograr bienes humanos básicos por medios prosociales"
    ],
    g: [
      "El modelo RNR lo formularon Andrews, Bonta y ___ (1990).|Hoge|Ward|Hirschi",
      "De los ocho factores centrales, todos son dinámicos salvo la historia ___.|delictiva|familiar|escolar",
      "Trabajar la autoestima puede mejorar el bienestar, pero es una necesidad no ___.|criminógena|dinámica|terapéutica",
      "Intervenir de forma intensiva con personas de bajo riesgo puede ser ___.|contraproducente|imprescindible|neutral",
      "En el modelo RNR, el principio de responsividad indica ___ intervenir.|cómo|con quién|sobre qué"
    ],
    tf: [
      "El principio de necesidad establece que la intensidad del tratamiento debe ajustarse al nivel de riesgo.|F|Eso es el principio de riesgo. El de necesidad indica que hay que intervenir sobre las necesidades criminógenas.",
      "La baja autoestima es una necesidad criminógena que conviene priorizar en el tratamiento.|F|Es una necesidad no criminógena: trabajarla puede mejorar el bienestar, pero no reduce por sí misma la reincidencia.",
      "La eficacia de los programas disminuye a medida que incumplen principios del RNR.|V",
      "Hoy se tiende a ver el RNR y el Modelo de Buenas Vidas como enfoques compatibles.|V"
    ],
    q: [
      "Un programa ofrece el mismo tratamiento intensivo a todos los internos, sea cual sea su riesgo de reincidencia. ¿Qué principio incumple?|El de riesgo|El de necesidad|El de responsividad|La intensidad debe ajustarse al riesgo: alta en los casos de riesgo alto y mínima en los de riesgo bajo.",
      "Un terapeuta adapta un programa cognitivo-conductual a un interno con baja capacidad lectora y poca motivación. ¿Qué aplica?|Responsividad específica|Responsividad general|El principio de necesidad|Ajustar el tratamiento a la capacidad, la motivación o el estilo de aprendizaje es responsividad específica. La general se refiere a los métodos.",
      "¿Cuál de estos factores forma parte de los cuatro grandes?|Asociados antisociales|Consumo de sustancias|Problemas en el ocio|Los cuatro grandes son historia delictiva, personalidad antisocial, cogniciones antisociales y asociados antisociales. Consumo y ocio están entre los ocho.",
      "¿Qué crítica hace el Modelo de Buenas Vidas al RNR?|Atiende poco a las metas personales|Ignora los factores de riesgo dinámicos|Rechaza los métodos cognitivo-conductuales|Ward (2002) critica que el RNR se centra en déficits y riesgos, y propone ayudar a lograr bienes humanos básicos por medios prosociales."
    ],
    inc: [
      "Sobre el modelo RNR|La autoestima baja figura entre los ocho factores centrales|Los métodos cognitivo-conductuales son los más eficaces|La evaluación del riesgo usa factores estáticos y dinámicos|La autoestima baja es una necesidad no criminógena y no figura entre los ocho factores centrales de riesgo."
    ],
    seq: [],
    cls: [
      "Principio del RNR|Riesgo: a quién; intensidad del tratamiento|Necesidad: qué; necesidades criminógenas|Responsividad: cómo; métodos cognitivo-conductuales"
    ] }
] },
{ n: 8, t: "Explicaciones psicológicas de la delincuencia", cap: 4, pir: "baja", mods: [
  { t: "La violencia se aprende (Bandura, Sutherland, Akers)",
    tip: "La conducta violenta y delictiva se aprende como cualquier otra. Bandura mostró con el muñeco Bobo el modelado y que el refuerzo vicario afecta a la ejecución, no al aprendizaje. Sutherland sostiene que el delito se aprende en grupos íntimos cuando las definiciones favorables a infringir la ley superan a las desfavorables, y Akers añadió el refuerzo diferencial y la imitación. La relación con iguales delincuentes refleja tanto influencia como selección.",
    v: [
      "Modelado=Adquirir conductas observando a otros, sin practicarlas ni recibir refuerzo",
      "Refuerzo vicario=Efecto de observar las consecuencias que recibe un modelo",
      "Asociación diferencial=Delinquir cuando predominan las definiciones favorables a infringir la ley",
      "Definiciones=Actitudes y valoraciones propias sobre el delito, según Akers",
      "Refuerzo diferencial=Balance de recompensas y castigos, reales o anticipados",
      "Prioridad=Lo pronto que se producen las asociaciones en la vida de la persona",
      "Intensidad=Lo significativa que es la relación en la que se aprende",
      "Muñeco Bobo=Muñeco hinchable al que golpeaba un adulto en los experimentos de Bandura"
    ],
    g: [
      "Sutherland fijó su teoría en nueve proposiciones en ___.|1947|1939|1961",
      "Según Sutherland, la conducta delictiva se aprende sobre todo en grupos ___.|íntimos|formales|grandes",
      "Akers integró la asociación diferencial con el condicionamiento ___ y el aprendizaje observacional.|operante|clásico|vicario",
      "Ver que un modelo es castigado reduce la ___ de la conducta, no su aprendizaje.|ejecución|adquisición|retención",
      "El aprendizaje depende de rasgos del modelo como el prestigio, la cercanía afectiva y la ___.|semejanza|edad|novedad"
    ],
    tf: [
      "En los estudios de Bandura, el efecto de imitación aparecía también con modelos filmados.|V",
      "Los niños que vieron castigar al modelo no habían aprendido la conducta agresiva.|F|La habían aprendido: imitaban menos, pero con una recompensa la reproducían igual que los demás (Bandura, 1965).",
      "Según Sutherland, en la interacción se aprenden tanto técnicas como motivos y racionalizaciones del delito.|V",
      "Los estudios longitudinales indican que la relación con iguales delincuentes se debe solo a la selección de amigos parecidos.|F|Indican que actúan ambos procesos: la influencia de los amigos y la selección de amigos parecidos."
    ],
    q: [
      "Tras ver a un adulto pegar a un muñeco y ser castigado, un niño apenas lo imita. Si después le ofrecen un premio por imitarlo, ¿qué ocurrirá?|Reproducirá la conducta como los demás|No podrá hacerlo porque no la aprendió|La imitará menos que antes del premio|El castigo vicario frenó la ejecución, no el aprendizaje, y con un incentivo la conducta aparece (Bandura, 1965).",
      "Un joven piensa que «robar a una gran cadena no es robar de verdad». En la teoría de Akers, esto corresponde a…|las definiciones|la imitación|el refuerzo diferencial|Las definiciones son las actitudes y valoraciones propias sobre el delito.",
      "Según Sutherland, ¿cuándo delinque una persona?|Si pesan más las definiciones a favor|Si tiene una personalidad antisocial|Si no tiene medios para sus metas|Las definiciones favorables a infringir la ley deben superar a las desfavorables. La falta de medios legítimos corresponde a la anomia de Merton.",
      "¿Qué variable modula la influencia de las asociaciones según Sutherland?|La prioridad|La gravedad|La legalidad|Las asociaciones varían según su frecuencia, duración, prioridad e intensidad."
    ],
    inc: [
      "Sobre la teoría de Akers|El refuerzo diferencial solo incluye recompensas reales|La imitación reproduce conductas observadas en modelos|Es una de las teorías más contrastadas en criminología|El refuerzo diferencial es el balance de recompensas y castigos, reales o anticipados."
    ],
    seq: [],
    cls: [
      "Teoría del aprendizaje del delito|Bandura: muñeco Bobo; refuerzo vicario|Sutherland: nueve proposiciones; grupos íntimos|Akers: refuerzo diferencial; imitación"
    ] },
  { t: "Personalidad y psicopatía",
    tip: "Eysenck (1964) relacionó la delincuencia con puntuaciones altas en extraversión, neuroticismo y psicoticismo, y con una baja condicionabilidad que debilita la conciencia moral, aunque el apoyo es más sólido para el psicoticismo y la impulsividad. La psicopatía se evalúa con la PCL-R de Hare, de 20 ítems y dos factores, y no equivale al trastorno de personalidad antisocial. Según Yang, Wong y Coid (2010), predice la violencia el factor 2, no el 1.",
    v: [
      "Condicionabilidad=Facilidad para adquirir respuestas condicionadas, base de la conciencia moral",
      "Extraversión (Eysenck)=Baja activación cortical, búsqueda de estimulación y difícil condicionamiento",
      "Neuroticismo=Alta reactividad emocional ante el estrés y la frustración",
      "Psicoticismo=Frialdad emocional, hostilidad, falta de empatía y búsqueda de sensaciones",
      "Búsqueda de sensaciones=Tendencia a buscar experiencias intensas y nuevas aunque haya riesgo",
      "PCL-R=Escala de Hare de 20 ítems para evaluar la psicopatía, con dos factores",
      "Factor 1 de la PCL-R=Componente interpersonal-afectivo: encanto superficial, falta de remordimiento",
      "Factor 2 de la PCL-R=Estilo de vida antisocial: impulsividad, irresponsabilidad, problemas precoces"
    ],
    g: [
      "Eysenck expuso su teoría en la obra «Crime and ___» (1964).|Personality|Conscience|Behavior",
      "La PCL-R de Hare tiene ___ ítems.|20|16|40",
      "Según Eysenck, la conciencia moral se forma por condicionamiento ___.|clásico|operante|vicario",
      "Según Eysenck, los extravertidos tendrían un nivel ___ de activación cortical.|bajo|alto|variable",
      "Entre la población penitenciaria, el trastorno de personalidad antisocial es ___ frecuente que la psicopatía.|más|menos|igual de"
    ],
    tf: [
      "Según Eysenck, un niño muy condicionable puede aprender a delinquir si su entorno premia la transgresión.|V",
      "Las relaciones más consistentes con la delincuencia se han hallado para la extraversión y el neuroticismo.|F|Las más consistentes son con el psicoticismo y los componentes impulsivos. Con extraversión y neuroticismo son más débiles.",
      "Psicopatía y trastorno de personalidad antisocial son el mismo constructo con distinto nombre.|F|El TPA se define sobre todo por conductas antisociales. La psicopatía exige además los rasgos afectivos e interpersonales del factor 1.",
      "Según Yang, Wong y Coid (2010), nueve instrumentos de evaluación del riesgo de violencia tenían una eficacia predictiva parecida.|V"
    ],
    q: [
      "Un interno puntúa muy alto en encanto superficial, mentira patológica y falta de remordimiento, pero bajo en impulsividad. Según Yang, Wong y Coid (2010), su perfil…|no predice especialmente la violencia|predice con fuerza la violencia|predice la violencia solo a largo plazo|Esos rasgos son del factor 1, interpersonal-afectivo, que no predijo la violencia. Sí la predijo el factor 2, de estilo de vida antisocial.",
      "Según Eysenck, ¿por qué un extravertido tendría más riesgo de delinquir?|Se condiciona con dificultad|Reacciona con mucha ansiedad|Carece por completo de empatía|Su baja activación cortical le lleva a buscar estimulación y dificulta el condicionamiento que forma la conciencia moral.",
      "¿Qué ítem pertenece al factor 2 de la PCL-R?|Necesidad de estimulación|Encanto superficial|Falta de remordimiento|La necesidad de estimulación es del factor 2, estilo de vida antisocial. El encanto superficial y la falta de remordimiento son del factor 1.",
      "¿Qué confirmó el metaanálisis de Leistico et al. (2008)?|Que la psicopatía se asocia a reincidencia|Que todos los psicópatas acaban siendo violentos|Que el factor 1 es el que predice la violencia|La psicopatía medida con los instrumentos de Hare se asocia a conducta antisocial y reincidencia, pero no implica necesariamente violencia."
    ],
    inc: [
      "Sobre la PCL-R|Se puntúa solo a partir de un autoinforme|Tiene 20 ítems agrupados en dos factores|La publicó Hare en su versión revisada (1991)|Se puntúa a partir de una entrevista y de información de archivo, no de un autoinforme."
    ],
    seq: [],
    cls: [
      "Factor de la PCL-R|Interpersonal-afectivo: encanto superficial; mentira patológica; falta de remordimiento|Estilo de vida antisocial: impulsividad; irresponsabilidad; necesidad de estimulación"
    ] },
  { t: "Tensión, vínculos y autocontrol (Agnew, Hirschi, Gottfredson)",
    tip: "Para Agnew (1992), la delincuencia es una forma de afrontar tensiones (fracaso en metas, retirada de estímulos positivos, presentación de estímulos negativos) que generan emociones negativas, sobre todo ira. Hirschi (1969) pregunta por qué la mayoría no delinque y responde con cuatro vínculos: apego, compromiso, implicación y creencias. Gottfredson y Hirschi (1990) sitúan la causa en el bajo autocontrol, formado en la primera infancia y relativamente estable, aunque no es la única causa.",
    v: [
      "Teoría General de la Tensión=El delito como forma de afrontar tensiones que generan ira (Agnew)",
      "Apego=Lazos afectivos con personas prosociales y preocupación por su opinión",
      "Compromiso=Inversión en metas convencionales que el delito pondría en riesgo",
      "Implicación=Tiempo ocupado en actividades convencionales",
      "Creencias=Aceptación de la validez de las normas",
      "Bajo autocontrol=Dificultad para renunciar a beneficios inmediatos por consecuencias futuras",
      "Teorías del control=Preguntan por qué la mayoría no delinque, en lugar de por qué alguien lo hace",
      "Conductas análogas=Accidentes, consumo de drogas o absentismo que también explica el autocontrol"
    ],
    g: [
      "En la teoría de Agnew, la emoción que actúa como principal mediador es la ___.|ira|ansiedad|culpa",
      "Una ruptura de pareja es, para Agnew, una ___ de estímulos positivos.|retirada|presentación|evitación",
      "Según Gottfredson y Hirschi, el autocontrol queda formado hacia los ___ años y luego es relativamente estable.|8-10|14-16|3-4",
      "El metaanálisis de Pratt y Cullen (2000) halló para el bajo autocontrol un tamaño del efecto ___ a 0,20.|superior|inferior|igual",
      "Entrenar cuatro tardes a la semana ilustra el elemento del vínculo social llamado ___.|implicación|compromiso|apego"
    ],
    tf: [
      "Según Pratt y Cullen (2000), el efecto del bajo autocontrol era más débil en los estudios longitudinales.|V",
      "Al controlar el autocontrol, las variables de aprendizaje social dejaban de ser significativas.|F|Seguían siendo significativas. Por eso el autocontrol es importante, pero no la única causa del delito.",
      "Para Agnew, sufrir acoso o maltrato es una forma de presentación de estímulos negativos.|V",
      "Según Hirschi, la implicación es la inversión en metas convencionales que el delito pondría en riesgo.|F|Eso es el compromiso. La implicación es el tiempo ocupado en actividades convencionales."
    ],
    q: [
      "Una chica no roba en una tienda porque piensa en lo mucho que decepcionaría a su abuela. ¿Qué elemento del vínculo social actúa?|Apego|Compromiso|Creencias|El apego son los lazos afectivos con personas prosociales y la preocupación por su opinión.",
      "Un joven pierde a su padre, se queda sin trabajo y empieza a pelearse a menudo por rabia. ¿Qué teoría lo explica mejor?|La tensión de Agnew|El vínculo de Hirschi|El autocontrol de Gottfredson|La retirada de estímulos positivos y el fracaso en metas generan ira, que puede canalizarse en agresión o delito.",
      "¿Qué pregunta se plantean las teorías del control?|Por qué la mayoría no delinque|Cómo se aprende a delinquir|Qué tensiones llevan al delito|Invierten la pregunta habitual. Para Hirschi, lo que frena el delito son los vínculos con la sociedad convencional.",
      "Según Gottfredson y Hirschi (1990), ¿dónde se origina el bajo autocontrol?|En la crianza de la primera infancia|En la influencia de iguales delincuentes|En la tensión de la adolescencia|Se forma con una crianza que supervisa la conducta, reconoce la desviación y la corrige, y después es relativamente estable."
    ],
    inc: [
      "Sobre la Teoría General del Delito|Sostiene que el autocontrol cambia mucho en la edad adulta|Explica también conductas análogas como los accidentes|Describe al de bajo autocontrol como impulsivo y egocéntrico|Según los autores, una vez formado hacia los 8-10 años, el autocontrol es relativamente estable a lo largo de la vida."
    ],
    seq: [],
    cls: [
      "Fuente de tensión (Agnew)|Fracaso en metas valoradas: no conseguir estatus; recibir menos de lo justo|Retirada de estímulos positivos: muerte de un ser querido; ruptura de pareja|Presentación de estímulos negativos: acoso; maltrato"
    ] },
  { t: "La carrera delictiva y las teorías integradoras (Moffitt, Farrington, Sampson y Laub)",
    tip: "La perspectiva de la carrera delictiva estudia inicio, mantenimiento y desistimiento. La curva edad-delito alcanza su pico en la adolescencia tardía y desciende en la edad adulta. Moffitt (1993) distingue una delincuencia limitada a la adolescencia, mayoritaria, y otra persistente, minoritaria y de inicio infantil. Farrington (ICAP) separa el potencial antisocial de la decisión situacional, y Sampson y Laub destacan puntos de inflexión, como el matrimonio o el empleo, que favorecen el desistimiento.",
    v: [
      "Curva edad-delito=Aumento de delitos en la adolescencia, pico al final y descenso en la adultez",
      "Desistimiento=Fase en que la persona deja de delinquir",
      "Limitada a la adolescencia=Grupo mayoritario que delinque por desfase de madurez e imitación",
      "Grupo persistente=Grupo pequeño con déficits neuropsicológicos tempranos y ambiente adverso",
      "Desfase de madurez=Sentirse adulto sin disponer todavía de sus privilegios",
      "Potencial antisocial=Tendencia a delinquir, presente en todas las personas en distinto grado",
      "Punto de inflexión=Acontecimiento vital que cambia la trayectoria y favorece el desistimiento",
      "Control informal graduado=Vínculos que frenan el delito y cambian con la edad (Sampson y Laub)"
    ],
    g: [
      "La curva edad-delito alcanza su pico en la adolescencia ___.|tardía|temprana|media",
      "Farrington dirigió el Estudio de ___ sobre el Desarrollo Delictivo.|Cambridge|Boston|Chicago",
      "En el ICAP, el deseo de bienes, de estatus o de estimulación son procesos ___.|energizantes|orientadores|inhibidores",
      "Sampson y Laub reanalizaron una cohorte clásica de jóvenes delincuentes de ___.|Boston|Londres|Chicago",
      "Según Laub y Sampson (2003), casi todos acaban ___, aunque a ritmos distintos.|desistiendo|reincidiendo|persistiendo"
    ],
    tf: [
      "Según Moffitt, el grupo persistente a lo largo de la vida es el mayoritario entre los adolescentes que delinquen.|F|Es un grupo pequeño. La mayoría de los adolescentes que delinquen forman el grupo limitado a la adolescencia.",
      "Delinquir alguna vez en la adolescencia es relativamente común, mientras que persistir en la edad adulta no lo es.|V",
      "En el ICAP, la decisión de delinquir surge de la interacción entre el potencial antisocial y la situación.|V",
      "Gottfredson y Hirschi coinciden con Sampson y Laub en que la propensión delictiva no cambia tras la infancia.|F|Es el gran debate: Gottfredson y Hirschi la ven estable y Sampson y Laub defienden que cambia con los acontecimientos vitales."
    ],
    q: [
      "Un hombre con una larga historia de robos encuentra un empleo estable, se casa y deja de delinquir. ¿Qué concepto lo explica?|Punto de inflexión|Desfase de madurez|Potencial antisocial|Para Sampson y Laub, un matrimonio estable o un empleo de calidad pueden cambiar la trayectoria y favorecer el desistimiento.",
      "Un niño presenta problemas de conducta muy graves desde los 4 años, con déficits neuropsicológicos y una familia adversa. Según Moffitt, es más probable que…|continúe en la edad adulta|desista al acceder a roles adultos|delinca solo por imitar a iguales|Es el perfil del grupo persistente: inicio infantil, déficits neuropsicológicos y ambiente familiar adverso, con continuidad en la edad adulta.",
      "¿Qué implica para la intervención la taxonomía de Moffitt?|Atender pronto los problemas graves y precoces|Intervenir con intensidad en toda transgresión juvenil|Esperar a la edad adulta para valorar el riesgo|Gran parte de la transgresión adolescente desaparece sola, mientras que los problemas graves y precoces merecen atención temprana.",
      "En el ICAP de Farrington, ¿qué aumenta el potencial antisocial a corto plazo?|El aburrimiento, la ira o el alcohol|La falta crónica de medios legítimos|La falta de apego, valores y empatía|A largo plazo depende de procesos energizantes, orientadores e inhibidores. A corto plazo lo elevan el aburrimiento, la ira o el alcohol."
    ],
    inc: [
      "Sobre la delincuencia limitada a la adolescencia|Nace de déficits neuropsicológicos precoces|Se explica por el desfase de madurez|La mayoría desiste al acceder a roles adultos|Los déficits neuropsicológicos tempranos caracterizan al grupo persistente, que es el minoritario."
    ],
    seq: [
      "Fases de la carrera delictiva|Inicio>Mantenimiento o agravamiento>Desistimiento"
    ],
    cls: [
      "Grupo de Moffitt|Limitada a la adolescencia: mayoritario; desfase de madurez; imitación de iguales|Persistente: grupo pequeño; inicio en la infancia; déficits neuropsicológicos"
    ] }
] }
);

// SAIMAP Psicología · Interacción Social · Unidades 9–12
window.COURSE.units.push(
{ n: 9, t: "El conflicto y su gestión", cap: 5, pir: "media", mods: [
  { t: "Qué es un conflicto y tipos",
    tip: "Un conflicto es un proceso en el que una parte percibe que otra afecta, o va a afectar, negativamente a sus intereses. Sus elementos comunes son la interdependencia, la incompatibilidad percibida, la implicación emocional, el carácter de proceso y los motivos mixtos. La visión interaccionista sostiene que cierto nivel de conflicto es necesario y distingue conflictos funcionales y disfuncionales. El conflicto de relación tiende a ser disfuncional, mientras que el de tarea moderado puede ser útil.",
    v: [
      "Conflicto=Proceso en que una parte percibe que otra afecta negativamente a sus intereses",
      "Interdependencia=Dependencia mutua que hace que la diferencia entre las partes tenga consecuencias",
      "Incompatibilidad percibida=Choque de intereses tal como lo viven las partes, no como es objetivamente",
      "Motivos mixtos=Coexistencia de razones para cooperar y para competir en un mismo conflicto",
      "Visión interaccionista=Cierto nivel de conflicto es necesario para evitar la complacencia del grupo",
      "Visión tradicional=El conflicto es síntoma de mal funcionamiento y hay que eliminarlo",
      "Conflicto de tarea=Desacuerdo sobre el contenido o las metas del trabajo",
      "Conflicto de relación=Choque interpersonal basado en antipatías o emociones negativas"
    ],
    g: [
      "Lo decisivo no es que los intereses sean incompatibles, sino que se ___ así.|perciban|declaren|regulen",
      "Durante la primera mitad del siglo XX predominó la visión ___ del conflicto.|tradicional|interaccionista|humanista",
      "Un desacuerdo sobre quién hace qué y cuándo es un conflicto de ___.|proceso|tarea|relación",
      "Un conflicto por creencias religiosas se clasifica, según su contenido, como conflicto de ___.|valores|intereses|información",
      "Un conflicto de tarea mal gestionado se convierte con facilidad en un conflicto de ___.|relación|proceso|valores"
    ],
    tf: [
      "Una persona puede estar en conflicto con otra sin que esta lo sepa.|V",
      "La corriente de las relaciones humanas defendía que cierto nivel de conflicto es necesario para la creatividad del grupo.|F|Esa es la visión interaccionista. Las relaciones humanas lo consideraban natural e inevitable, sin ir más allá.",
      "El conflicto de tarea en niveles bajos o moderados puede mejorar el trabajo porque obliga a revisar ideas.|V",
      "Según la visión interaccionista, todo conflicto acaba siendo beneficioso para el grupo.|F|Distingue conflictos funcionales, que mejoran el rendimiento o las decisiones, y disfuncionales, que lo empeoran."
    ],
    q: [
      "En un equipo de prácticas, dos miembros discuten qué apartados incluir en el informe y, semanas después, ya no se soportan. ¿Qué ha ocurrido?|Un conflicto de tarea derivó en uno de relación|Un conflicto de relación derivó en uno de tarea|Un conflicto de proceso derivó en uno de valores|Un conflicto de tarea mal gestionado se convierte con facilidad en uno de relación: de «tu propuesta no me convence» a «no te soporto».",
      "Los miembros de un equipo necesitan que el proyecto salga bien, pero compiten por destacar ante el tutor. ¿Qué elemento del conflicto ilustra?|Los motivos mixtos|La interdependencia negativa|La implicación emocional|En la mayoría de los conflictos conviven razones para cooperar y para competir.",
      "¿Qué tipo de conflicto tiende con más claridad a ser disfuncional en los grupos de trabajo?|El de relación|El de tarea moderado|El de proceso leve|Las antipatías personales consumen energía, reducen la satisfacción y deterioran el trabajo.",
      "Según la naturaleza de la incompatibilidad, que dos personas tengan opiniones distintas sobre un asunto es un conflicto…|cognitivo|de objetivos|afectivo|Cognitivo: opiniones distintas. De objetivos: metas distintas. Afectivo: emociones incompatibles."
    ],
    inc: [
      "Sobre los elementos del conflicto|Exige incompatibilidad objetiva de intereses|Requiere interdependencia entre las partes|Es un proceso que cambia con el tiempo|Lo decisivo es que la incompatibilidad se perciba, no que sea objetiva. Por eso dos personas viven el mismo desacuerdo de forma distinta."
    ],
    seq: [],
    cls: [
      "Foco del conflicto en grupos de trabajo|Tarea: qué incluir en el trabajo; desacuerdo sobre las metas|Relación: antipatía mutua; choque personal|Proceso: quién hace qué; cuándo se hace"
    ] },
  { t: "El proceso del conflicto",
    tip: "Los modelos clásicos de Pondy (1967) y Thomas (1992) describen seis etapas: condiciones antecedentes, percepción, pensamientos y emociones, intenciones, conducta y resultados. Intención no es conducta, y el proceso es circular: los resultados de un episodio son antecedentes del siguiente. Para intervenir, el enfoque estructural cambia las condiciones y el conductual, el más desarrollado en psicología, entrena a las personas.",
    v: [
      "Condiciones antecedentes=Fuentes potenciales del conflicto que todavía nadie percibe",
      "Percepción del conflicto=Toma de conciencia de la incompatibilidad por una o ambas partes",
      "Intenciones=Decisión de cómo actuar, organizada en torno a dos preocupaciones",
      "Conducta=Etapa en que el conflicto se hace visible con peticiones, discusiones o amenazas",
      "Resultado funcional=Mejores decisiones, más cohesión tras resolverlo y menos tensión",
      "Resultado disfuncional=Hostilidad, peor comunicación, menos rendimiento y pérdida de miembros",
      "Enfoque estructural=Intervención que cambia espacios, tareas, organigrama o normas",
      "Enfoque conductual=Intervención que entrena a las personas para gestionar mejor el conflicto"
    ],
    g: [
      "Las condiciones antecedentes se agrupan en comunicación, estructura y variables ___.|personales|culturales|económicas",
      "Las ___ negativas favorecen la desconfianza y la interpretación hostil de lo que hace el otro.|emociones|intenciones|conductas",
      "Las metas incompatibles y los recursos escasos son condiciones antecedentes de tipo ___.|estructural|comunicativo|personal",
      "Los estilos de gestión corresponden a la etapa de las ___.|intenciones|conductas|percepciones",
      "Separar espacios o aclarar las normas es propio del enfoque ___.|estructural|conductual|interaccionista"
    ],
    tf: [
      "Si nadie percibe la incompatibilidad, no hay conflicto aunque existan las condiciones antecedentes.|V",
      "Quien llega a una reunión con intención de colaborar acabará colaborando, porque la intención determina la conducta.|F|Intención no es conducta: el ataque del otro o el calor de la discusión pueden llevar a competir.",
      "Las emociones positivas amplían la visión de la situación y facilitan soluciones creativas.|V",
      "El proceso del conflicto es lineal: cada episodio se cierra con sus resultados.|F|Es circular: los resultados de un episodio se convierten en condiciones antecedentes del siguiente."
    ],
    q: [
      "En un club, unos socios se enteran por un mensaje de que las salidas pasan a ser de pago e interpretan que la junta «quiere echarlos». ¿En qué etapa están?|Pensamientos y emociones|Percepción del conflicto|Condiciones antecedentes|Interpretar y definir el conflicto, con emociones como sentirse ofendidos, corresponde a la etapa de pensamientos y emociones.",
      "¿Qué orden de etapas es el correcto?|Percepción, pensamientos y emociones, intenciones|Intenciones, percepción, pensamientos y emociones|Pensamientos y emociones, percepción, intenciones|Primero se toma conciencia de la incompatibilidad, después se interpreta y, por último, se decide cómo actuar.",
      "Un desacuerdo mal cerrado deja desconfianza, y esa desconfianza hace más probable el siguiente choque. ¿Qué ilustra?|Su carácter circular|La distancia entre intención y conducta|El paso de la tarea a la relación|Los resultados de un episodio se convierten en condiciones antecedentes del siguiente.",
      "Una empresa reduce los choques entre dos departamentos redistribuyendo tareas y aclarando las normas. ¿Qué enfoque aplica?|Estructural|Conductual|Interaccionista|El enfoque estructural cambia las condiciones. El conductual, más desarrollado en psicología, entrena a las personas."
    ],
    inc: [
      "Sobre las etapas del conflicto|La conducta precede a las intenciones|Las intenciones giran en torno a dos preocupaciones|Los resultados pueden ser funcionales o disfuncionales|Las intenciones van antes: primero se decide cómo actuar y después el conflicto se hace visible en la conducta."
    ],
    seq: [
      "Proceso del conflicto|Condiciones antecedentes>Percepción>Pensamientos y emociones>Intenciones>Conducta>Resultados"
    ],
    cls: [
      "Condiciones antecedentes|Comunicación: malentendidos; información insuficiente o distorsionada|Estructura: metas incompatibles; recursos escasos; reglas ambiguas|Variables personales: valores; personalidad; experiencias previas"
    ] },
  { t: "Estilos de gestión: de Blake y Mouton al modelo de doble preocupación",
    tip: "Deutsch contrapuso cooperación (interdependencia positiva) y competición (interdependencia negativa). Los modelos bidimensionales combinan la preocupación por los resultados propios y por los del otro: la rejilla gerencial de Blake y Mouton, la asertividad y la cooperatividad de Thomas y Kilmann (TKI), el ROCI-II de Rahim y la doble preocupación de Pruitt y Rubin. Las etiquetas cambian, pero los cinco estilos son en esencia los mismos. Compromiso no es colaboración.",
    v: [
      "Rejilla gerencial=Modelo de Blake y Mouton con ejes de preocupación por la producción y por las personas",
      "Asertividad=Intento de satisfacer los propios intereses, según Thomas y Kilmann",
      "Cooperatividad=Intento de satisfacer los intereses del otro, según Thomas y Kilmann",
      "Competir=Estilo de alta asertividad y baja cooperatividad",
      "Colaborar=Buscar una solución que satisfaga plenamente a ambas partes",
      "Acomodarse=Satisfacer los intereses del otro a costa de los propios",
      "Compromiso=Punto intermedio en el que cada parte renuncia a algo de lo que quería",
      "ROCI-II=Cuestionario de Rahim con cinco estilos de gestión del conflicto"
    ],
    g: [
      "Thomas y Kilmann reformularon los ejes como asertividad y ___.|cooperatividad|agradabilidad|actividad",
      "Para Deutsch, la cooperación se basa en una interdependencia ___.|positiva|negativa|neutra",
      "En la terminología de Rahim, el estilo equivalente a acomodarse es el ___.|servicial|evitador|comprometido",
      "En el modelo de Pruitt y Rubin, el estilo equivalente a competir se denomina ___.|contender|ceder|inacción",
      "El estilo de evitar combina baja preocupación propia y ___ preocupación por el otro.|baja|alta|media"
    ],
    tf: [
      "En el modelo de Rahim, el estilo integrador combina alta preocupación por uno mismo y por los demás.|V",
      "Alternar los días de uso de una sala que dos compañeros quieren a la misma hora es un ejemplo de colaboración.|F|Es un compromiso: se reparte la diferencia. Colaborar sería explorar los intereses de fondo, como repartir dos salas.",
      "Pruitt y Rubin presentan el compromiso como una forma intermedia o una solución de problemas poco ambiciosa.|V",
      "Puntuar alto en un estilo del TKI significa que la persona lo usará en todos sus conflictos.|F|Los modelos describen predisposiciones: también cuentan la situación, la relación y la conducta de la otra parte."
    ],
    q: [
      "¿Qué estilo combina baja preocupación propia y alta preocupación por el otro?|Acomodarse|Comprometer|Evitar|Acomodarse (servicial en Rahim, ceder en Pruitt y Rubin) satisface los intereses del otro a costa de los propios.",
      "Dos compañeros quieren la sala de estudio a la misma hora. Descubren que uno necesita silencio y el otro una pizarra, y reservan dos salas. ¿Qué estilo han usado?|Colaborar|Comprometer|Acomodarse|Exploraron los intereses de fondo y hallaron una solución que satisface a ambos. En el compromiso, cada uno habría renunciado a algo.",
      "¿Qué pareja de dimensiones corresponde a Rahim?|Preocupación por uno mismo y por los demás|Asertividad y cooperatividad|Preocupación por la producción y por las personas|Asertividad y cooperatividad son de Thomas y Kilmann, y producción y personas, de la rejilla de Blake y Mouton.",
      "¿Qué instrumento construyeron Thomas y Kilmann (1974)?|El TKI|El ROCI-II|La rejilla gerencial|El ROCI-II es de Rahim (1983) y la rejilla gerencial, de Blake y Mouton (1964)."
    ],
    inc: [
      "Sobre la equivalencia de etiquetas|Evitar equivale a ceder en Pruitt y Rubin|Colaborar equivale al estilo integrador|Competir equivale a contender en Pruitt y Rubin|Evitar equivale a la inacción. Ceder corresponde a acomodarse y al estilo servicial de Rahim."
    ],
    seq: [],
    cls: [
      "Asertividad del estilo (Thomas y Kilmann)|Alta asertividad: competir; colaborar|Baja asertividad: acomodarse; evitar"
    ] },
  { t: "El modelo de Van de Vliert y Euwema",
    tip: "Van de Vliert y Euwema (1994) organizan conductas concretas, no intenciones, según dos dimensiones: agradabilidad y actividad. Distinguen cooperación (no confrontación y negociación) y competición (lucha indirecta y lucha directa). La solución de problemas es la conducta más activa y más agradable. Su idea más original es la conglomeración: en los conflictos reales se combinan varias conductas, y la eficacia depende de cómo se mezclan.",
    v: [
      "Agradabilidad=Grado en que una conducta resulta relajada y amistosa para la otra parte",
      "Actividad=Grado en que una conducta es abierta, directa y espontánea",
      "No confrontación=Cooperación pasiva: evitación y acomodación",
      "Negociación=Cooperación activa: compromiso y solución de problemas",
      "Lucha indirecta=Competición pasiva: resistencia encubierta y control del proceso",
      "Lucha directa=Competición activa: confrontación abierta, presión o amenazas",
      "Conglomeración=Uso combinado de varias conductas de gestión en un mismo conflicto",
      "Solución de problemas=La conducta a la vez más activa y más agradable del modelo"
    ],
    g: [
      "Van de Vliert y Euwema organizan las conductas según la agradabilidad y la ___.|actividad|asertividad|cooperatividad",
      "Buscar aliados contra alguien en el grupo del equipo sin enfrentarse abiertamente es lucha ___.|indirecta|directa|abierta",
      "La evitación es pasiva y algo menos ___ que la acomodación.|agradable|frecuente|eficaz",
      "Según el modelo, la ___ combina mucha actividad y poca agradabilidad.|lucha directa|lucha indirecta|acomodación",
      "Una dosis de contender dentro de una conducta mayoritariamente ___ puede mejorar el resultado.|integradora|evitadora|servicial"
    ],
    tf: [
      "Las dimensiones de agradabilidad y actividad proceden del modelo de Thomas y Kilmann.|F|Son de Van de Vliert y Euwema (1994). Thomas y Kilmann usan asertividad y cooperatividad.",
      "El modelo de Van de Vliert y Euwema clasifica conductas concretas, no intenciones.|V",
      "La misma dosis de contender que mejora una conducta integradora suele escalar el conflicto si no hay integración.|V",
      "La lucha indirecta encaja bien en el plano asertividad × cooperatividad de los modelos clásicos.|F|No encaja bien en ese plano. Es una de las conductas que el modelo de Van de Vliert y Euwema permite entender."
    ],
    q: [
      "Una delegada analiza con el profesor el problema de la fecha, insiste con firmeza en que coincide con otros exámenes y acepta un cambio de formato. ¿Qué concepto lo describe?|Conglomeración|Complementariedad|Diferenciación|Combina solución de problemas, lucha directa suave y compromiso. Para Van de Vliert y Euwema importa cómo se mezclan las conductas.",
      "En el nivel 2 del modelo, ¿dónde se sitúan el compromiso y la solución de problemas?|Negociación|No confrontación|Lucha indirecta|Son la cooperación activa. La no confrontación agrupa la evitación y la acomodación, que son pasivas.",
      "Un miembro del equipo obstaculiza a escondidas el trabajo de un compañero. Según el modelo, es…|lucha indirecta|lucha directa|evitación|Es competición pasiva o encubierta: resistencia y control del proceso. La evitación es cooperación pasiva.",
      "¿Qué cambio de evaluación propone este modelo?|Observar conductas concretas en una interacción|Preguntar a cada persona qué estilo prefiere|Puntuar cada estilo en un cuestionario como el TKI|En lugar de preguntar por el estilo preferido, se observa qué hacen las partes y cómo combinan sus conductas."
    ],
    inc: [
      "Sobre el modelo de Van de Vliert y Euwema|La acomodación es activa y poco agradable|La solución de problemas es activa y agradable|La lucha directa es activa y poco agradable|La acomodación es agradable y pasiva. Activa y poco agradable es la lucha directa."
    ],
    seq: [],
    cls: [
      "Conducta según el nivel 1|Cooperación: evitación; acomodación; compromiso; solución de problemas|Competición: resistencia encubierta; control del proceso; confrontación abierta"
    ] }
] },
{ n: 10, t: "Negociar", cap: 5, pir: "media", mods: [
  { t: "¿Qué estilo funciona mejor?",
    tip: "La perspectiva única defiende que la colaboración es el estilo superior y la competición el más destructivo. La contingente sostiene que todos los estilos pueden ser eficaces según la situación. La compleja atiende a cómo se combinan y suceden: complejidad simultánea, temporal (de la diferenciación a la integración) y secuencial (reciprocidad ante la integración, complementariedad ante la dominación). Hoy se favorecen las perspectivas contingente y compleja.",
    v: [
      "Perspectiva única=Existe un estilo superior a los demás: la colaboración",
      "Perspectiva contingente=Todos los estilos pueden ser eficaces según la situación",
      "Complejidad simultánea=Uso de patrones que mezclan varios estilos al mismo tiempo",
      "Complejidad temporal=Cambio de los estilos a lo largo de las fases del conflicto",
      "Complejidad secuencial=La eficacia depende de cómo se responden mutuamente las conductas",
      "Diferenciación=Fase inicial en que cada parte marca sus posiciones",
      "Reciprocidad=Responder con integración a las conductas integradoras del otro",
      "Complementariedad=Responder con integración a la dominación para romper el ciclo"
    ],
    g: [
      "Para dividir los gastos de un viaje con poder equilibrado, el estilo más útil es ___.|comprometer|colaborar|acomodarse",
      "Dejar para mañana una discusión que empezó a las dos de la madrugada es un uso adaptativo de ___.|evitar|acomodarse|comprometer",
      "Un monitor que impone una norma de seguridad en una excursión ilustra el uso útil de ___.|competir|colaborar|evitar",
      "En la complejidad temporal es habitual pasar de la diferenciación a la ___.|integración|evitación|dominación",
      "Ante conductas dominantes, responder con dominación alimenta un ciclo de ataque y ___.|defensa|retirada|venganza"
    ],
    tf: [
      "Según la perspectiva única, la competición es el estilo con resultados más destructivos.|V",
      "La perspectiva contingente sostiene que la colaboración es siempre el estilo más eficaz.|F|Eso es la perspectiva única. La contingente defiende que todos los estilos pueden ser eficaces según la situación.",
      "El metaanálisis de Tehrani y Yamini (2020) demuestra qué estilos de gestión son más eficaces.|F|Relaciona la personalidad con los estilos que las personas dicen usar, pero no evalúa su eficacia.",
      "Los mejores resultados aparecen cuando las partes se vuelven flexibles y creativas en las fases finales.|V"
    ],
    q: [
      "Un compañero exige que su parte del informe vaya primero y amenaza con no presentarse. ¿Qué respuesta recomienda la complejidad secuencial?|Preguntarle qué le preocupa del orden|Hacer su parte y quitarle el nombre|Ceder sin más para no discutir|Responder a la dominación con integración (complementariedad) rompe el ciclo de ataque y defensa y descubre el interés de fondo.",
      "¿Cuándo es útil acomodarse según la perspectiva contingente?|Si el asunto importa mucho más al otro|Si hay urgencia y hay que decidir rápido|Si es un reparto puro con poder equilibrado|También cuando se quiere cuidar la relación. La urgencia favorece competir, y el reparto puro, comprometer.",
      "Según la perspectiva contingente, ¿qué estilo conviene en asuntos complejos con intereses que pueden integrarse?|Colaborar|Comprometer|Competir|Colaborar es útil cuando los intereses pueden integrarse y conviene implicar a todas las partes.",
      "Según la complejidad simultánea, ¿qué patrones son más eficaces?|Variados, con predominio de la integración|Puros, basados solo en la integración|Variados, con predominio de la firmeza|Predomina la integración, pero sin renunciar del todo a la firmeza, en línea con la conglomeración."
    ],
    inc: [
      "Sobre la eficacia de los estilos|Es defendible elegir un estilo para todos los conflictos|La evitación puede ser útil en conflictos triviales|La colaboración se asocia con mejores resultados relacionales|Lo que no es defendible es elegir un estilo «para siempre»: la eficacia depende de la situación y de la combinación."
    ],
    seq: [],
    cls: [
      "Uso útil según la perspectiva contingente|Comprometer: reparto de suma cero; poder equilibrado|Evitar: conflicto trivial; enfriar emociones|Competir: urgencia; decisión rápida"
    ] },
  { t: "Actitudes ante el conflicto",
    tip: "La otra parte de un conflicto es un objeto de actitud. Pruitt y Rubin describieron cómo las actitudes negativas hacia ella alimentan la escalada: búsqueda de culpables, lectura amenazante de lo ambiguo, menos comunicación, menos empatía, menos inhibición de la agresión y más negociación distributiva. Forman un círculo vicioso. Romperlo exige separar a las personas del problema, restablecer la comunicación, hacer gestos de buena voluntad y buscar metas comunes.",
    v: [
      "Actitud=Evaluación favorable o desfavorable de un objeto",
      "Escalada=Intensificación del conflicto alimentada por actitudes negativas y respuestas hostiles",
      "Búsqueda de culpables=Tendencia a culpar de lo desagradable a quien nos cae mal",
      "Lectura amenazante=Interpretar como ataque la acción ambigua de alguien en quien no se confía",
      "Menos inhibición de la agresión=Mayor facilidad para atacar a quien se rechaza",
      "Círculo vicioso=Cuanto más escala el conflicto, más negativas son las actitudes, y al revés",
      "Gestos de buena voluntad=Acciones pequeñas y claras que reducen la amenaza percibida",
      "Metas comunes=Objetivos compartidos que obligan a las partes a cooperar"
    ],
    g: [
      "Una acción ambigua de alguien en quien no se confía se interpreta como un ___.|ataque|descuido|error",
      "Con desconfianza mutua aumenta la negociación ___.|distributiva|integrativa|mediada",
      "Se evita hablar con quien se percibe hostil, de modo que los ___ no se corrigen.|malentendidos|acuerdos|compromisos",
      "A medida que escala el conflicto, el adversario pasa a ser un ___.|enemigo|socio|mediador",
      "Decir «cuando el material queda fuera, no podemos usar la mesa» en vez de «lo hacéis a propósito» es separar a las personas del ___.|problema|resultado|proceso"
    ],
    tf: [
      "Según Pruitt y Rubin, ante una experiencia desagradable se concede el beneficio de la duda a quien nos cae bien.|V",
      "Las actitudes negativas hacia el oponente aumentan la comunicación, porque se necesita vigilarlo.|F|La reducen: se evita hablar con quien se percibe hostil, de modo que los malentendidos no se corrigen.",
      "Con frecuencia, la hostilidad del otro es en parte una reacción a la nuestra.|V",
      "Para romper la espiral basta con resolver el problema de fondo, sin tocar las actitudes.|F|Hay que intervenir también sobre las actitudes: separar personas y problema, comunicar, hacer gestos y buscar metas comunes."
    ],
    q: [
      "Una asociación cambia la cerradura del armario compartido «por seguridad» y la otra lo vive como un ataque. ¿Qué mecanismo actúa?|La lectura amenazante de lo ambiguo|La búsqueda de metas comunes|La difusión de la responsabilidad|Una acción ambigua de alguien en quien no se confía se interpreta como ataque y provoca respuestas defensivas.",
      "¿Qué recomendación sirve para romper la espiral de escalada?|Restablecer la comunicación directa|Recurrir antes a la autoridad|Evitar el contacto con la otra parte|Conviene restablecer la comunicación directa antes de recurrir a terceros o a la autoridad.",
      "¿Por qué las actitudes negativas favorecen la negociación distributiva?|Cada parte busca ganar a costa de la otra|Ambas partes intentan aumentar el valor total|Un tercero impone el reparto final|Con desconfianza mutua, cada parte se centra en ganar lo máximo a costa de la otra.",
      "¿Por qué disminuye la empatía durante la escalada?|Cuesta ponerse en el lugar de quien parece hostil|Se percibe al otro como más parecido a uno mismo|Se dedica más tiempo a vigilar al adversario|Cuesta ponerse en el lugar de alguien a quien se percibe como diferente y hostil, lo que alimenta el círculo vicioso."
    ],
    inc: [
      "Sobre los efectos de las actitudes negativas hacia el oponente|Aumentan la inhibición de la agresión|Reducen la empatía hacia el otro|Favorecen la búsqueda de culpables|Ocurre lo contrario: disminuye la inhibición de la agresión, porque es más fácil atacar a quien se rechaza."
    ],
    seq: [],
    cls: [
      "Efecto sobre la escalada|Alimenta la espiral: búsqueda de culpables; menos comunicación; menos empatía|Rompe la espiral: gestos de buena voluntad; metas comunes; comunicación directa"
    ] },
  { t: "Medios de gestión y negociación distributiva e integrativa",
    tip: "Un conflicto se resuelve de forma individual (imponerse o someterse) o conjunta: negociación, mediación y arbitraje. En la mediación deciden las partes y el mediador solo facilita. En el arbitraje decide el árbitro y su solución es vinculante. La negociación distributiva reparte una cantidad fija (suma cero) y la integrativa aumenta el valor total (suma variable). El precio de reserva, la ZOPA y la MAAN sirven para analizar el reparto.",
    v: [
      "Negociación=Medio conjunto en que las propias partes deciden sin un tercero",
      "Mediación=Un tercero neutral facilita la comunicación sin decidir el acuerdo",
      "Arbitraje=Un tercero escucha a las partes y dicta una solución vinculante",
      "Negociación distributiva=Reparto de una cantidad fija: lo que gana una parte lo pierde la otra",
      "Negociación integrativa=Búsqueda de soluciones que aumentan el valor total para ambas partes",
      "Precio de reserva=Límite a partir del cual una parte prefiere no cerrar el acuerdo",
      "ZOPA=Intervalo entre los precios de reserva en el que el acuerdo es posible",
      "MAAN=Lo que una parte hará si no hay acuerdo (en inglés, BATNA)"
    ],
    g: [
      "En la negociación distributiva, lo que gana una parte lo pierde la otra: es de suma ___.|cero|variable|positiva",
      "Un tercero que escucha a las partes y dicta una solución vinculante es un ___.|árbitro|mediador|negociador",
      "Cuanto mejor es la MAAN de una parte, más ___ tiene en la negociación.|poder|riesgo|dependencia",
      "Si los precios de reserva de las partes no se ___, no hay acuerdo posible.|solapan|igualan|conocen",
      "La negociación integrativa es posible cuando hay varios asuntos que las partes ___ de forma distinta.|valoran|ignoran|redactan"
    ],
    tf: [
      "En la mediación, el mediador escucha a las partes y decide el acuerdo.|F|El mediador solo facilita la comunicación y la búsqueda de acuerdo: deciden las partes. Quien decide es el árbitro.",
      "Si una parte puede imponerse sin coste, no necesita negociar.|V",
      "En una negociación solo están en juego aspectos tangibles, como el dinero o los plazos.|F|También hay aspectos intangibles, como el prestigio o sentirse respetado.",
      "La MAAN de cada parte determina dónde sitúa su precio de reserva.|V"
    ],
    q: [
      "Una estudiante no venderá su bicicleta por menos de 120 euros, lo que le ofrece una tienda, y un comprador pagaría hasta 160. ¿Cuál es la ZOPA?|De 120 a 160 euros|De 0 a 120 euros|De 160 euros en adelante|Es el intervalo entre los precios de reserva: cualquier precio en ese tramo es mejor para ambos que no cerrar el trato.",
      "En ese mismo caso, ¿qué es para la vendedora la oferta de 120 euros de la tienda?|Su MAAN|Su ZOPA|Su posición|Es su mejor alternativa a un acuerdo negociado, lo que hará si no hay trato, y fija su precio de reserva.",
      "Un comité de competición resuelve con carácter vinculante la disputa entre dos clubes. ¿Qué medio se ha usado?|Arbitraje|Mediación|Negociación|Decide un tercero y su solución es vinculante. En la mediación y en la negociación deciden las partes.",
      "¿Qué podría convertir en integrativa la venta de la bicicleta?|Negociar también la entrega y los accesorios|Fijar el precio en el punto medio de la ZOPA|Mejorar la MAAN de la vendedora|Con varios asuntos valorados de forma distinta, cada parte cede en lo que le importa menos y gana en lo que le importa más."
    ],
    inc: [
      "Sobre los rasgos de una situación de negociación|Una parte domina por completo a la otra|Existe un conflicto de intereses|Hay intercambio de ofertas y contraofertas|Hace falta cierto equilibrio de poder: si una parte puede imponerse sin coste, no necesita negociar."
    ],
    seq: [],
    cls: [
      "Tipo de negociación|Distributiva: suma cero; cantidad fija; regatear un precio|Integrativa: suma variable; varios asuntos; aumentar el valor total"
    ] },
  { t: "El proceso de negociación y el método de Harvard",
    tip: "Las fases de la negociación siguen una lógica común: preparación, apertura o antagonismo, señales y propuestas, intercambio, y cierre y acuerdo. Kennedy et al. (1990) las desglosan en ocho. Fisher y Ury (1981) propusieron en Getting to Yes la negociación basada en principios, alternativa a la posicional: separar a las personas del problema, centrarse en los intereses, inventar opciones de beneficio mutuo e insistir en criterios objetivos, además de conocer la MAAN.",
    v: [
      "Preparación=Fase de diagnosticar, fijar objetivos a varios niveles y conocer la propia MAAN",
      "Apertura o antagonismo=Fase de posiciones exigentes y firmeza para marcar lo importante",
      "Concesión condicionada=Ceder solo a cambio de algo de la otra parte",
      "Negociación posicional=Cada parte defiende una posición y cede poco a poco",
      "Negociación basada en principios=Método de Fisher y Ury (1981) propuesto en Getting to Yes",
      "Posición=Lo que una parte pide en la negociación",
      "Interés=Motivo de fondo por el que una parte pide lo que pide",
      "Criterios objetivos=Referencias independientes de la voluntad de las partes"
    ],
    g: [
      "La regla básica del intercambio es ___ las concesiones.|condicionar|anticipar|multiplicar",
      "El método de Harvard lo propusieron Fisher y ___ en 1981.|Ury|Kennedy|Rubin",
      "Según el método de Harvard, hay que ser suave con las personas y firme con el ___.|problema|acuerdo|oponente",
      "Kennedy et al. (1990) desglosan el proceso de negociación en ___ fases.|ocho|cinco|cuatro",
      "Enlazar varios asuntos en un ___ permite compensar unos con otros.|paquete|calendario|arbitraje"
    ],
    tf: [
      "En la fase de apertura, las posiciones exigentes cumplen funciones, como sondear hasta dónde se puede presionar.|V",
      "La MAAN equivale a un mínimo innegociable rígido que nunca se debe cruzar.|F|No es un mínimo rígido: sirve para comparar cada oferta con la mejor alternativa real.",
      "Tras la tensión de las fases previas, el alivio del cierre puede llevar a descuidar detalles importantes.|V",
      "El método de Harvard elimina los conflictos de reparto al convertir toda negociación en integrativa.|F|No los elimina: obliga a preguntarse si el pastel es realmente fijo y, cuando es posible, la vuelve integrativa."
    ],
    q: [
      "Dos compañeros piden la misma franja de la sala: uno necesita silencio y el otro un proyector. ¿Qué principio de Harvard sugiere el caso?|Centrarse en los intereses|Insistir en criterios objetivos|Separar personas y problema|La posición es lo que se pide (la franja) y el interés, por qué se pide (silencio o proyector).",
      "Fijar el precio de una bicicleta con el precio medio de las de segunda mano en las webs de venta aplica el principio de…|insistir en criterios objetivos|inventar opciones de beneficio mutuo|centrarse en los intereses|Es una referencia independiente de la voluntad de las partes.",
      "¿En qué fase las partes envían mensajes que matizan su posición sin comprometerse?|Señales y propuestas|Apertura o antagonismo|Intercambio|Por ejemplo, «con esos plazos nos resulta difícil…». En el intercambio ya se concretan concesiones.",
      "¿Para qué sirve conocer la propia MAAN?|Para no aceptar un mal trato ni rechazar uno bueno|Para fijar una posición de apertura muy exigente|Para averiguar el precio de reserva de la otra parte|Saber qué se hará si no hay acuerdo protege de aceptar un mal trato y de rechazar uno bueno."
    ],
    inc: [
      "Sobre los principios del método de Harvard|Conviene elegir una solución antes de buscar otras|Las emociones y el asunto se tratan por separado|Se generan varias opciones antes de decidir|Inventar opciones de beneficio mutuo exige generar varias soluciones antes de decidir, por ejemplo con una lluvia de ideas."
    ],
    seq: [
      "Fases de la negociación|Preparación>Apertura o antagonismo>Señales y propuestas>Intercambio>Cierre y acuerdo"
    ],
    cls: [] }
] },
{ n: 11, t: "¿Por qué ayudamos?", cap: 6, pir: "alta", mods: [
  { t: "Conducta prosocial y conducta altruista",
    tip: "La conducta prosocial abarca cualquier conducta que beneficia a otros o a la sociedad. La conducta de ayuda es un tipo más concreto, dirigido a una persona determinada. La altruista beneficia a otro sin esperar nada a cambio y su fin último es el bienestar de esa persona: la diferencia está en la motivación. Para Batson (1991), el altruismo es un estado motivacional, opuesto al egoísmo. Toda conducta altruista es prosocial, pero no al revés.",
    v: [
      "Conducta prosocial=Cualquier conducta que beneficia a otras personas o a la sociedad",
      "Conducta de ayuda=Conducta dirigida a mejorar la situación de una persona determinada",
      "Conducta altruista=Ayuda cuyo fin último es el bienestar del otro, sin esperar nada a cambio",
      "Egoísmo=Estado motivacional cuyo objetivo último es el propio bienestar",
      "Altruismo según Batson=Estado motivacional orientado a aumentar el bienestar de otra persona",
      "Responsabilidad atribuida=Considerar culpable a la víctima de su situación, lo que reduce la ayuda",
      "Semejanza=Percibir al otro como parecido o del propio grupo, lo que aumenta la ayuda",
      "Creencia en un mundo justo=Valor personal que la investigación ha relacionado con la ayuda"
    ],
    g: [
      "La diferencia entre conducta prosocial y altruista está en la ___.|motivación|apariencia|frecuencia",
      "Según Weiner (1980), si se considera que la víctima es ___ de su situación, la motivación para ayudar disminuye.|culpable|consciente|ignorante",
      "Según Eagly y Crowley (1986), los hombres ayudan más en situaciones de ___ con desconocidos.|riesgo|cuidado|apoyo",
      "Toda conducta altruista es ___, pero no al revés.|prosocial|egoísta|espontánea",
      "Las personas con más empatía ayudan más, sobre todo a ___.|desconocidos|familiares|amigos"
    ],
    tf: [
      "Recoger del suelo a alguien que se ha caído es una conducta de ayuda.|V",
      "Una conducta que beneficia a otros es altruista aunque se haga para mejorar el currículum.|F|Es prosocial, pero no altruista: su fin último es el propio interés, no el bienestar del otro.",
      "En las situaciones de riesgo, las mujeres suelen recibir más ayuda que los hombres.|V",
      "Las mujeres ayudan menos que los hombres en todas las formas de ayuda.|F|Los hombres ayudan más en situaciones de riesgo con desconocidos. En el cuidado continuado, las mujeres tienen un papel destacado."
    ],
    q: [
      "Dos estudiantes dan clases gratuitas a niños de un barrio: uno porque le importa que aprueben y otra para su currículum. ¿Qué se puede afirmar?|Ambas conductas son prosociales|Ambas conductas son altruistas|Ninguna conducta es prosocial|La conducta es la misma y ambas benefician a otros, pero solo la primera sería altruista, porque su fin último es el otro.",
      "¿Por qué es difícil saber si una conducta es altruista?|La motivación no se observa directamente|La conducta altruista es muy poco frecuente|Solo se da entre parientes cercanos|Además, casi toda ayuda produce algún beneficio a quien la presta, como satisfacción, reconocimiento o alivio.",
      "¿Qué rasgo distingue la conducta de ayuda de la conducta prosocial en general?|Se dirige a una persona concreta|Su fin último es el bienestar ajeno|No espera nada a cambio|Ayudar es mejorar la situación de alguien determinado. El fin último en el otro y no esperar nada definen el altruismo.",
      "La atribución de responsabilidad a la víctima, que reduce la motivación para ayudar, depende a su vez de…|la semejanza con ella|el número de testigos|el sexo de quien ayuda|Atribuir la culpa a la víctima, que reduce la ayuda (Weiner, 1980), depende de la semejanza percibida con ella."
    ],
    inc: [
      "Sobre la relación entre los tipos de conducta|Toda conducta prosocial es altruista|Toda conducta altruista es prosocial|La conducta de ayuda es un tipo de prosocial|La inclusión es la contraria: la altruista es un subtipo de la prosocial, definido por su motivación."
    ],
    seq: [],
    cls: [
      "Factor relacionado con la ayuda|Aumenta la ayuda: empatía; semejanza; identificación con el grupo|Reduce la ayuda: culpa atribuida a la víctima; alto egocentrismo"
    ] },
  { t: "Explicaciones evolucionistas",
    tip: "Las explicaciones evolucionistas sostienen que ciertas tendencias de ayuda se mantuvieron porque favorecieron la transmisión de los genes de quienes las tenían. La selección de parentesco (Hamilton, 1964) explica la ayuda a parientes con la regla rB mayor que C. El altruismo recíproco (Trivers, 1971) explica la ayuda a no parientes con encuentros repetidos. La selección de grupo es la más discutida. Explican el porqué último, no los motivos conscientes.",
    v: [
      "Selección de parentesco=Se favorece la ayuda a parientes porque comparten genes (Hamilton, 1964)",
      "Regla de Hamilton=La ayuda a un pariente se favorece si rB supera a C",
      "Coeficiente de parentesco=Proporción de genes compartidos por ascendencia común",
      "Altruismo recíproco=Ayuda a no parientes basada en que el favor se devuelva (Trivers, 1971)",
      "Norma de reciprocidad=Obligación, presente en todas las culturas, de devolver los favores",
      "Selección de grupo=Los grupos con más miembros cooperativos superan a los egoístas",
      "Porqué último=Razón evolutiva de que exista una tendencia, no el motivo consciente",
      "Coste C=Pérdida reproductiva que asume quien presta la ayuda"
    ],
    g: [
      "Entre hermanos, el coeficiente de parentesco es de ___.|0,5|0,25|0,125",
      "En la regla de Hamilton, B es el beneficio reproductivo para quien ___ la ayuda.|recibe|presta|evita",
      "El altruismo recíproco exige mecanismos para detectar y ___ a quienes reciben sin devolver.|castigar|premiar|imitar",
      "La propuesta evolucionista más discutida es la selección de ___.|grupo|parentesco|especie",
      "El altruismo recíproco fue propuesto por ___ en 1971.|Trivers|Hamilton|Batson"
    ],
    tf: [
      "Según la selección de parentesco, cuanto más cercano es el parentesco, más probable es la ayuda, sobre todo si el coste es alto.|V",
      "El altruismo recíproco explica sobre todo la ayuda entre parientes cercanos.|F|Explica la ayuda entre no emparentados. La ayuda a parientes la explica la selección de parentesco de Hamilton.",
      "Las explicaciones evolucionistas explican bien la donación anónima de sangre a desconocidos.|F|Es uno de sus límites: no explican bien la ayuda a desconocidos a los que nunca se volverá a ver.",
      "Las explicaciones evolucionistas no pretenden describir los motivos conscientes de quien ayuda.|V"
    ],
    q: [
      "Ayudar a un hermano cuesta 3 unidades reproductivas y le aporta un beneficio de 8. Según la regla de Hamilton, ¿se favorece la ayuda?|Sí, porque rB vale 4 y supera a C|No, porque rB vale 4 y no llega a C|No, porque B no duplica a C|Con r de 0,5 entre hermanos, rB vale 4, que es mayor que el coste de 3: la ayuda se favorece.",
      "¿Qué condición exige el altruismo recíproco?|Encuentros repetidos entre los mismos individuos|Parentesco entre quien ayuda y quien recibe|Pertenencia a un grupo que compite con otros|También capacidad de reconocer a quién se ha ayudado y mecanismos para detectar y castigar a quienes no devuelven.",
      "Una doctoranda ayuda a un colega con el que no tiene parentesco y con el que trabajará durante años. ¿Qué explicación evolucionista encaja mejor?|Altruismo recíproco|Selección de parentesco|Selección de grupo|Ayuda a un no pariente con quien habrá nuevos encuentros, lo que hace probable que el favor se devuelva.",
      "¿A qué pregunta responden las explicaciones evolucionistas?|Por qué existe la tendencia a ayudar|Qué piensa quien ayuda en ese momento|Cuándo se interpreta algo como emergencia|Responden al porqué último. Nadie calcula su coeficiente de parentesco antes de ayudar a su prima."
    ],
    inc: [
      "Sobre las explicaciones evolucionistas|Hamilton propuso el altruismo recíproco|La norma de reciprocidad aparece en todas las culturas|La selección de grupo es la propuesta más discutida|Hamilton (1964) propuso la selección de parentesco. El altruismo recíproco es de Trivers (1971)."
    ],
    seq: [],
    cls: [
      "Teoría evolucionista|Selección de parentesco: Hamilton; parientes; genes compartidos|Altruismo recíproco: Trivers; no parientes; devolución del favor|Selección de grupo: miembros del propio grupo; grupos cooperativos"
    ] },
  { t: "Empatía-altruismo frente a alivio del estado negativo",
    tip: "Batson distingue el malestar personal (motivación egoísta) y la preocupación empática (motivación altruista). Con empatía alta se sigue ayudando aunque escapar sea fácil, lo que para Batson (1991) indica altruismo genuino. Cialdini et al. (1987) proponen que se ayuda para aliviar la propia tristeza: si el ánimo mejora antes, la ayuda baja. Ambos modelos tienen apoyo y el debate no está resuelto. Lo prudente es hablar de motivos mixtos.",
    v: [
      "Malestar personal=Angustia propia ante el sufrimiento ajeno que genera motivación egoísta",
      "Preocupación empática=Compasión y ternura dirigidas al otro, que generan motivación altruista",
      "Facilidad de escape=Variable clave para contrastar la motivación egoísta y la altruista",
      "Hipótesis empatía-altruismo=Postura de Batson: la compasión por el otro produce ayuda genuinamente altruista",
      "Alivio del estado negativo=Modelo según el cual se ayuda para reducir la propia tristeza",
      "Tristeza asociada a la empatía=Emoción que, según Cialdini, produce ver sufrir a alguien cercano",
      "Motivos mixtos=Convivencia de la preocupación por el otro y del deseo de sentirse mejor",
      "Paradigma de las descargas=Experimentos de Batson en que se podía sustituir a quien recibía descargas"
    ],
    g: [
      "Según Batson, el malestar personal genera una motivación ___.|egoísta|altruista|empática",
      "En los experimentos de Batson, con empatía ___ se ayudaba incluso cuando era fácil escapar.|alta|baja|nula",
      "Según Cialdini, la ayuda mejora el ánimo porque se ha asociado durante la ___ con recompensas.|socialización|evolución|herencia",
      "Si la motivación es egoísta, cuando es fácil marcharse la ayuda debería ___.|caer|mantenerse|aumentar",
      "Según Cialdini, si ayudar no cambiará el ánimo, la empatía no debería aumentar la ___.|ayuda|tristeza|activación"
    ],
    tf: [
      "Batson propone que la ayuda empática se explica por el deseo de aliviar la propia tristeza.|F|Esa es la explicación de Cialdini et al. (1987). Para Batson, la preocupación empática genera motivación altruista.",
      "El modelo del alivio del estado negativo acepta que la empatía aumenta la ayuda.|V",
      "Los experimentos de Batson zanjaron el debate a favor de la existencia del altruismo genuino.|F|Ambos modelos tienen apoyo experimental y el debate no está resuelto. Se habla de motivos mixtos.",
      "Cialdini et al. (1987) hallaron que, al neutralizar la posibilidad de mejorar el ánimo ayudando, el efecto de la empatía sobre la ayuda se reducía.|V"
    ],
    q: [
      "Un participante con empatía alta puede marcharse con facilidad, pero se ofrece a sustituir a quien recibe descargas. ¿Qué modelo lo interpreta como altruismo genuino?|El de Batson|El de Cialdini|El de Piliavin|Para Batson, seguir ayudando cuando escapar es fácil indica que el fin último es aliviar el sufrimiento del otro.",
      "Antes de poder ayudar, un participante empático recibe un elogio inesperado que mejora su ánimo. ¿Qué predice el modelo de Cialdini?|Que ayudará menos|Que ayudará más|Que no cambiará su ayuda|Si el ánimo mejora antes, ya no necesita ayudar para sentirse bien. Batson predice que seguirá ayudando.",
      "¿Qué emoción genera motivación altruista según Batson?|La compasión dirigida al otro|La angustia por el sufrimiento ajeno|La tristeza asociada a la empatía|Es la preocupación empática. La angustia propia es malestar personal, egoísta, y la tristeza es la clave del modelo de Cialdini.",
      "¿Cuál es la conclusión más razonable del debate?|La ayuda puede tener motivos mixtos|El altruismo genuino está demostrado|Toda ayuda es en el fondo egoísta|Pueden convivir la preocupación por el otro y el deseo de sentirse mejor, con un peso que varía según la situación."
    ],
    inc: [
      "Sobre los dos modelos|Para Cialdini, la ayuda busca el bienestar del otro|Para Batson, el malestar personal motiva de forma egoísta|Los dos modelos tienen apoyo experimental|Para Cialdini, el fin último es el bienestar propio, aliviar la tristeza. El bienestar del otro es el fin según Batson."
    ],
    seq: [],
    cls: [
      "Modelo|Empatía-altruismo: Batson; preocupación empática; bienestar del otro|Alivio del estado negativo: Cialdini; tristeza; bienestar propio"
    ] },
  { t: "El modelo de activación-coste-recompensa",
    tip: "Piliavin et al. (1969, 1981) combinan un componente emocional y otro de decisión. Presenciar una emergencia produce una activación desagradable, y se elige la respuesta que la reduce con el menor coste neto, comparando los costes de ayudar y los de no ayudar (personales y empáticos). Ayudar barato y no ayudar caro lleva a la ayuda directa. Ambos altos, a la ayuda indirecta o la reinterpretación. Ayudar caro y no ayudar barato, al abandono o la negación.",
    v: [
      "Activación=Respuesta fisiológica desagradable ante el sufrimiento de otra persona",
      "Costes de ayudar=Esfuerzo, tiempo, peligro, gasto o riesgo de hacer el ridículo",
      "Costes personales de no ayudar=Culpa, vergüenza o crítica de los demás por no intervenir",
      "Costes empáticos=Malestar por saber que la víctima sigue sufriendo si no se interviene",
      "Ayuda indirecta=Buscar que otros ayuden, como llamar al 112 o avisar a seguridad",
      "Reinterpretación=Redefinir la situación para reducir el coste de no ayudar",
      "Menor coste neto=Criterio para elegir la respuesta que reduce la activación",
      "Estudio del metro=Investigación de campo en Nueva York con un pasajero que se desplomaba"
    ],
    g: [
      "En el estudio del metro, la ayuda fue más rápida cuando la víctima llevaba un ___ y parecía enferma.|bastón|maletín|paraguas",
      "Con coste de ayudar bajo y de no ayudar alto, la respuesta típica es la ayuda ___.|directa|indirecta|diferida",
      "Pensar «seguro que alguien ya habrá llamado» es una forma de ___ la situación.|reinterpretar|dramatizar|resolver",
      "Al modelo se le ha criticado su visión ___, centrada en el propio interés.|economicista|evolucionista|altruista",
      "Con ambos costes bajos, la respuesta depende sobre todo de las normas ___.|personales|legales|grupales"
    ],
    tf: [
      "Según Piliavin, cuando ambos costes son altos lo típico es la ayuda directa.|F|Lo típico es la ayuda indirecta, como llamar al 112, o reinterpretar la situación para reducir el coste de no ayudar.",
      "Saber que la víctima sigue sufriendo es un coste empático de no ayudar.|V",
      "Cuanto más intensa, cercana y clara es la emergencia, mayor es la activación.|V",
      "El modelo explica sin dificultad las reacciones impulsivas en emergencias muy graves.|F|Es una de sus críticas: en emergencias claras y graves muchas personas ayudan de inmediato, sin cálculo aparente."
    ],
    q: [
      "Un niño perdido llora en un supermercado. Acompañarlo a información cuesta poco y no hacerlo sería muy reprobable. ¿Qué predice Piliavin?|Ayuda directa|Ayuda indirecta|Reinterpretación|Con coste de ayudar bajo y de no ayudar alto, lo típico es intervenir directamente.",
      "Alguien que parece ebrio pide dinero en la calle y un peatón cruza de acera. Según la matriz, ¿qué combinación de costes lo explica?|Ayudar caro y no ayudar barato|Ayudar barato y no ayudar caro|Ayudar caro y no ayudar caro|Con coste de ayudar alto y de no ayudar bajo, lo típico es el abandono o la negación del problema.",
      "Una mujer presencia una pelea violenta: teme intervenir, pero se sentiría muy culpable sin hacer nada. ¿Qué es lo más probable según Piliavin?|Que llame al 112|Que intervenga ella misma|Que se marche sin más|Con ambos costes altos lo típico es la ayuda indirecta o reinterpretar la situación para reducir el coste de no ayudar.",
      "¿Por qué en el estudio del metro se ayudó más rápido a la víctima con bastón que a la que parecía ebria?|Ayudar al ebrio parece más costoso|La víctima ebria generaba menos activación|Solo la del bastón pedía ayuda|Ayudar a alguien que parece ebrio se percibe como más costoso y desagradable."
    ],
    inc: [
      "Sobre los costes del modelo de Piliavin|La culpa por no ayudar es un coste de ayudar|El peligro es un coste de ayudar|Saber que la víctima sufre es un coste empático|La culpa, la vergüenza y la crítica de los demás son costes personales de no ayudar."
    ],
    seq: [
      "Modelo de activación-coste-recompensa|Presenciar la emergencia>Activación fisiológica desagradable>Atribución de la activación a la emergencia>Cálculo de costes y recompensas>Respuesta de menor coste neto"
    ],
    cls: [
      "Tipo de coste|De ayudar: esfuerzo; peligro; gasto; hacer el ridículo|De no ayudar: culpa; vergüenza; víctima que sigue sufriendo"
    ] }
] },
{ n: 12, t: "El espectador y el voluntario", cap: 6, pir: "alta", mods: [
  { t: "El modelo de decisión de Latané y Darley",
    tip: "Latané y Darley (1970) describen la intervención como una secuencia de cinco decisiones: advertir el suceso, interpretarlo como emergencia, asumir la responsabilidad, decidir cómo ayudar y actuar. Una respuesta negativa en cualquiera de los pasos lleva a no ayudar, por eso la ayuda es frágil. Las prisas reducen la probabilidad de advertir (Darley y Batson, 1973). Cada paso sugiere intervenciones concretas, como preguntar directamente o asignar tareas.",
    v: [
      "Advertir el suceso=Primer paso: darse cuenta de que algo ocurre",
      "Interpretar como emergencia=Segundo paso: decidir que una situación ambigua es grave",
      "Asumir la responsabilidad=Tercer paso: sentir que a uno le toca intervenir",
      "Decidir cómo ayudar=Cuarto paso: saber qué hacer y sentirse capaz",
      "Actuar=Quinto paso, que puede frenarse por miedo a las consecuencias o al ridículo",
      "Darley y Batson (1973)=Estudio en que quienes iban con prisa ayudaron menos a un hombre caído",
      "Asignar tareas=Pedir a alguien concreto que intervenga para que no se diluya la responsabilidad",
      "Kitty Genovese=Caso de 1964 que llevó a Latané y Darley a estudiar la falta de ayuda"
    ],
    g: [
      "En el modelo, una respuesta negativa en ___ de los pasos lleva a no ayudar.|cualquiera|el primero|el último",
      "Ante la duda, se tiende a elegir la interpretación más ___.|tranquilizadora|alarmante|detallada",
      "Decir «Tú, la de la chaqueta roja, llama al 112» facilita el paso de asumir la ___.|responsabilidad|interpretación|iniciativa",
      "La formación en primeros auxilios facilita el paso de decidir ___ ayudar.|cómo|cuándo|dónde",
      "Preguntar directamente «¿Se encuentra bien?» facilita el paso de ___ el suceso.|interpretar|advertir|ignorar"
    ],
    tf: [
      "Saber que basta con llamar al 112 ofrece una opción de ayuda a quien no sabe hacer una reanimación.|V",
      "En el estudio de Darley y Batson (1973), las prisas apenas influyeron en la ayuda.|F|Los estudiantes con prisa por llegar a una cita ayudaron menos al hombre caído que quienes iban con tiempo.",
      "El relato periodístico del caso Genovese era exagerado, pero la investigación que inspiró sigue vigente.|V",
      "Quien reconoce que hay una emergencia ya ha superado el filtro principal y ayudará casi siempre.|F|Aún debe asumir la responsabilidad, decidir cómo ayudar y actuar: la ayuda es frágil porque hay cinco filtros."
    ],
    q: [
      "¿Qué paso va inmediatamente antes de actuar?|Decidir cómo ayudar|Asumir la responsabilidad|Interpretar el suceso|El orden es advertir, interpretar, asumir la responsabilidad, decidir cómo ayudar y actuar.",
      "Un peatón ve a alguien tumbado en un banco y duda si duerme o está inconsciente. Como nadie se inmuta, sigue andando. ¿Qué paso ha fallado?|El segundo, interpretar|El primero, advertir|El tercero, asumir|Lo advirtió, pero ante la ambigüedad eligió la interpretación tranquilizadora, guiada por la calma de los demás.",
      "Una persona reconoce una parada cardíaca y siente que le toca actuar, pero se bloquea porque no sabe hacer una reanimación. ¿Qué facilitaría ese paso?|Saber que llamar al 112 también ayuda|Asignarle la tarea de forma directa|Prestar más atención al entorno|Falla decidir cómo ayudar. Conocer el 112 o formarse en primeros auxilios ofrece una opción al alcance.",
      "¿Qué bloquea típicamente el paso de actuar?|El miedo al ridículo|La sobrecarga de estímulos|La falta de conocimientos|La sobrecarga de estímulos bloquea el paso de advertir, y la falta de conocimientos, el de decidir cómo ayudar."
    ],
    inc: [
      "Sobre el modelo de Latané y Darley|La intervención es un acto único e inmediato|Las prisas reducen la probabilidad de advertir|La presencia de alguien más indicado diluye la responsabilidad|La intervención es el resultado de una secuencia de cinco decisiones, no un acto único."
    ],
    seq: [
      "Modelo de Latané y Darley|Advertir el suceso>Interpretarlo como emergencia>Asumir la responsabilidad>Decidir cómo ayudar>Actuar"
    ],
    cls: [] },
  { t: "Difusión de responsabilidad e ignorancia pluralista",
    tip: "Tres procesos explican el efecto espectador. La difusión de responsabilidad afecta sobre todo al tercer paso: en el ataque epiléptico (Darley y Latané, 1968) ayudó el 85 % de quienes se creían solos, el 62 % con un testigo más y el 31 % con cuatro. La ignorancia pluralista afecta al segundo: en la sala con humo informó el 75 % de quienes estaban solos y el 10 % con dos cómplices impasibles. La aprensión a la evaluación afecta al quinto. Los tres se refuerzan.",
    v: [
      "Efecto espectador=Reducción de la probabilidad individual de ayudar cuando hay otros testigos",
      "Difusión de responsabilidad=Reparto de la obligación de intervenir entre los testigos presentes",
      "Ignorancia pluralista=Interpretación colectiva errónea basada en la calma aparente de los demás",
      "Aprensión a la evaluación=Miedo al juicio ajeno que frena la intervención",
      "Ataque epiléptico=Experimento de Darley y Latané (1968) con participantes en cabinas separadas",
      "Sala con humo=Experimento de Latané y Darley (1968) con humo que entraba por una rejilla",
      "Cómplices impasibles=Colaboradores que seguían rellenando el cuestionario como si nada",
      "Intercomunicador=Medio por el que conversaban los participantes del experimento del ataque"
    ],
    g: [
      "En el experimento del ataque epiléptico, ayudó el ___ de quienes creían estar solos con la víctima.|85 %|62 %|31 %",
      "En la sala con humo, con dos cómplices impasibles solo informó alrededor del ___ de los participantes.|10 %|75 %|31 %",
      "La ignorancia pluralista afecta sobre todo al paso de ___.|interpretar|advertir|actuar",
      "La aprensión a la evaluación afecta sobre todo al paso de ___.|actuar|interpretar|advertir",
      "En el ataque epiléptico, el efecto no se debía a imitar a los demás, porque los participantes no podían ___.|verse|oírse|hablar"
    ],
    tf: [
      "El experimento de la sala con humo ilustra sobre todo la difusión de responsabilidad.|F|Ilustra la ignorancia pluralista: la calma de los cómplices llevó a interpretar que el humo no era peligroso.",
      "En el experimento del ataque epiléptico, la ayuda disminuía al aumentar el número de supuestos testigos.|V",
      "En la ignorancia pluralista, cada persona puede estar preocupada en privado aunque aparente calma.|V",
      "La difusión de responsabilidad requiere que los testigos se vean y se imiten unos a otros.|F|En el ataque epiléptico no podían verse: bastaba saber que había otros que también podían ayudar."
    ],
    q: [
      "¿Qué proceso ilustra el experimento de la sala con humo?|La ignorancia pluralista|La difusión de responsabilidad|La aprensión a la evaluación|La calma de los cómplices llevó a interpretar que el humo no era peligroso: falla el paso de interpretar.",
      "Un compañero publica en el chat de clase un mensaje preocupante y cada uno supone que otro le escribirá en privado. ¿Qué proceso actúa?|Difusión de responsabilidad|Ignorancia pluralista|Aprensión a la evaluación|Suponer que otro ya actuará reparte la responsabilidad. Escribirle directamente rompe los tres procesos.",
      "Un estudiante ve desmayarse a una compañera en clase, pero no se levanta porque teme quedar mal si al final no era nada. ¿Qué proceso lo frena?|Aprensión a la evaluación|Ignorancia pluralista|Difusión de responsabilidad|El miedo al juicio ajeno y al ridículo frena la acción. Afecta sobre todo al quinto paso, actuar.",
      "¿Qué manipularon Darley y Latané (1968) en el experimento del ataque epiléptico?|El número de oyentes|La calma de los cómplices|La gravedad del ataque|Se manipuló cuántas personas creía el participante que estaban escuchando. Los cómplices impasibles son de la sala con humo."
    ],
    inc: [
      "Sobre los procesos del efecto espectador|La aprensión a la evaluación afecta sobre todo a advertir|La difusión de responsabilidad afecta sobre todo al tercer paso|La ignorancia pluralista afecta sobre todo al segundo paso|La aprensión a la evaluación afecta sobre todo al quinto paso, actuar: el miedo al ridículo frena la intervención."
    ],
    seq: [],
    cls: [
      "Proceso inhibidor|Ignorancia pluralista: sala con humo; paso de interpretar|Difusión de responsabilidad: ataque epiléptico; paso de asumir la responsabilidad|Aprensión a la evaluación: miedo al ridículo; paso de actuar"
    ] },
  { t: "La evidencia actual: metaanálisis, cámaras y el caso Genovese",
    tip: "El metaanálisis de Fischer et al. (2011), con 105 tamaños del efecto, muestra un efecto espectador real pero moderado (g de −0,35), que se atenúa en emergencias peligrosas, con el agresor presente y con costes físicos. Philpot et al. (2020) hallaron en 219 conflictos grabados que intervino alguien en el 90,9 % de los casos, y más cuantos más espectadores. Hay que distinguir el nivel individual del grupal. El relato de los 38 testigos de Genovese no se sostiene.",
    v: [
      "Fischer et al. (2011)=Metaanálisis con 105 tamaños del efecto y más de 7.700 participantes",
      "Philpot et al. (2020)=Análisis de 219 conflictos reales grabados por cámaras de vigilancia",
      "Nivel individual=Probabilidad de que una persona concreta ayude, que baja con más testigos",
      "Nivel grupal=Probabilidad de que al menos un testigo ayude, que sube con más espectadores",
      "Manning, Levine y Collins=Autores que revisaron en 2007 las fuentes del caso Genovese",
      "Emergencias peligrosas=Situaciones que se reconocen antes y atenúan el efecto espectador",
      "Apoyo físico=Función de los demás espectadores cuando intervenir entraña riesgo",
      "Efecto paradójico del relato=Dejó en la sombra la capacidad de los grupos para promover la ayuda"
    ],
    g: [
      "Philpot et al. (2020) hallaron que intervino al menos un transeúnte en el ___ de los casos.|90,9 %|35 %|62 %",
      "En 2016, The New York Times reconoció que había exagerado el número de ___.|testigos|agresores|llamadas",
      "Según Fischer et al. (2011), el efecto espectador se atenúa si el ___ está presente en la escena.|agresor|policía|familiar",
      "Para quien necesita ayuda, lo que importa es el nivel ___.|grupal|individual|experimental",
      "Los experimentos clásicos miden la probabilidad de ayudar en el nivel ___.|individual|grupal|colectivo"
    ],
    tf: [
      "Según Philpot et al. (2020), cuantos más espectadores había, más probable era que alguien ayudara.|V",
      "El metaanálisis de Fischer et al. (2011) concluyó que el efecto espectador no existe en situaciones reales.|F|El efecto es real pero moderado (g de −0,35), y se atenúa en emergencias peligrosas.",
      "Según Manning, Levine y Collins (2007), en el caso Genovese hubo llamadas a la policía y una vecina acudió a socorrer a la víctima.|V",
      "Los resultados de Philpot et al. (2020) invalidan los experimentos de Latané y Darley.|F|No los contradicen: la ayuda individual baja con más testigos, pero aumenta la probabilidad de que alguien ayude."
    ],
    q: [
      "¿En qué circunstancia se atenúa el efecto espectador según Fischer et al. (2011)?|En emergencias peligrosas|En situaciones ambiguas|En situaciones de bajo riesgo|También con el agresor presente y con costes físicos. En lo ambiguo y de bajo riesgo es donde más inhibe la presencia de otros.",
      "¿Cómo se concilian el efecto espectador y los datos de Philpot et al. (2020)?|Distinguiendo el nivel individual del grupal|Atribuyéndolo a diferencias culturales|Considerando que las cámaras distorsionan|Cada persona ayuda menos con más testigos, pero hay más personas que pueden hacerlo, y aumenta que alguien ayude.",
      "Un profesor presenta el caso Genovese como prueba de que «la gente no ayuda cuando hay más gente». ¿Qué corrección procede?|No hay pruebas de los 38 testigos impasibles|El caso es real, pero ocurrió en otro barrio|El número real de testigos fue aún mayor|Manning, Levine y Collins (2007) no hallaron pruebas de 38 testigos que vieran el asesinato sin hacer nada.",
      "¿Por qué en emergencias peligrosas los demás espectadores pueden favorecer la ayuda?|Ofrecen apoyo físico al intervenir|Aumentan la difusión de responsabilidad|Hacen más ambigua la situación|Intervenir con otros es más seguro que hacerlo solo. Además, el peligro reduce la ambigüedad."
    ],
    inc: [
      "Sobre la evidencia actual|El caso Genovese prueba el efecto espectador|El efecto espectador tiene un tamaño moderado|Los experimentos clásicos siguen siendo válidos|El relato de los 38 testigos impasibles no se sostiene, y debe corregirse su uso como prueba."
    ],
    seq: [],
    cls: [
      "Nivel de análisis|Individual: probabilidad de que una persona ayude; experimentos clásicos; baja con más testigos|Grupal: probabilidad de que alguien ayude; cámaras de Philpot; sube con más testigos"
    ] },
  { t: "La ayuda planificada: el voluntariado",
    tip: "El voluntariado es ayuda planificada. Según Penner (2002), es prolongada, libre, deliberada, dirigida a desconocidos y se da en un contexto organizativo. Las variables con más apoyo son las motivacionales. Desde el enfoque funcional, el Inventario de Funciones del Voluntariado (Clary et al., 1998) mide seis: valores, comprensión, social, carrera, protectora y mejora. Omoto y Snyder (1995) describen un proceso de antecedentes, experiencias y consecuencias en tres niveles.",
    v: [
      "Voluntariado=Ayuda planificada, libre y prolongada a desconocidos dentro de una organización",
      "Función de valores=Motivo de expresar ideales altruistas y humanitarios",
      "Función de comprensión=Motivo de aprender y adquirir conocimientos y habilidades",
      "Función social=Motivo de encajar con personas cercanas que valoran el voluntariado",
      "Función de carrera=Motivo de ganar experiencia útil para el futuro profesional",
      "Función protectora=Motivo de reducir sentimientos negativos o escapar de los propios problemas",
      "Función de mejora=Motivo de aumentar la autoestima y el crecimiento personal",
      "Modelo del proceso=Antecedentes, experiencias y consecuencias del voluntariado (Omoto y Snyder)"
    ],
    g: [
      "El Inventario de Funciones del Voluntariado lo elaboraron Clary et al. en ___.|1998|1995|2002",
      "El enfoque funcional parte de la teoría funcional de las actitudes de ___.|Katz|Penner|Batson",
      "En el modelo de Omoto y Snyder, la permanencia o el abandono forman parte de las ___.|consecuencias|experiencias|antecedentes",
      "Las variables con más apoyo empírico para explicar el voluntariado son las ___.|motivacionales|situacionales|demográficas",
      "Según Penner (2002), el voluntariado tiene lugar en un contexto ___.|organizativo|familiar|espontáneo"
    ],
    tf: [
      "La satisfacción y la permanencia aumentan cuando la experiencia satisface los motivos que llevaron al voluntario a la organización.|V",
      "Según Penner (2002), el voluntariado se dirige sobre todo a familiares y amigos.|F|Beneficia a personas que, en principio, son desconocidas, y se da en un contexto organizativo.",
      "Que existan motivos de carrera o de mejora personal impide que los valores altruistas estén presentes.|F|Casi nadie es voluntario por un solo motivo: los motivos interesados pueden convivir con los valores altruistas.",
      "El modelo de Omoto y Snyder analiza el voluntariado en los niveles individual, organizacional y social.|V"
    ],
    q: [
      "Una voluntaria explica que colaborar en la asociación «le ayuda a no pensar en lo suyo». ¿Qué función predomina?|Protectora|De mejora|De valores|La función protectora busca reducir sentimientos negativos o escapar de los propios problemas. La de mejora busca autoestima.",
      "Una ONG capta a estudiantes que buscan experiencia profesional y solo les asigna tareas repetitivas. ¿Qué cabe esperar?|Dificultades para retenerlos|Mayor permanencia por compromiso|Un aumento de la función protectora|La permanencia aumenta cuando la experiencia satisface los motivos del voluntario, aquí los de carrera.",
      "Un estudiante se hace voluntario para conocer de cerca la realidad de las personas refugiadas. ¿Qué función predomina?|Comprensión|Protectora|Valores|La función de comprensión busca aprender y adquirir conocimientos. La de valores expresa ideales altruistas.",
      "¿Qué rasgo distingue el voluntariado de la ayuda en emergencias?|Es planificado y sostenido|Se dirige a desconocidos|Exige reaccionar con rapidez|La ayuda en emergencias es espontánea y breve. El voluntariado es planificado, prolongado y organizado."
    ],
    inc: [
      "Sobre las etapas de Omoto y Snyder|La integración en la entidad es un antecedente|Las motivaciones previas son un antecedente|La permanencia o el abandono son consecuencias|La integración en la organización forma parte de las experiencias, junto con la satisfacción con las tareas."
    ],
    seq: [
      "Modelo del proceso de Omoto y Snyder|Antecedentes>Experiencias>Consecuencias"
    ],
    cls: [] }
] }
);

// SAIMAP Psicología · Interacción Social · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Mayorías y minorías", cap: 7, pir: "alta", mods: [
  { t: "Influencia normativa e informativa",
    tip: "Deutsch y Gerard (1955) distinguieron la influencia informativa, que toma el juicio ajeno como evidencia sobre la realidad (necesidad de tener razón), y la normativa, que busca ser aceptado (necesidad de pertenecer). La informativa predomina en situaciones ambiguas y produce aceptación privada, y la normativa, en respuestas públicas ante un grupo valorado, y produce sobre todo cumplimiento. Kelman distinguió sumisión, identificación e interiorización, y solo esta última resiste cuando la fuente desaparece.",
    v: [
      "Influencia social=Cambio de opiniones, emociones o conductas por la presencia real, imaginada o implícita de otros",
      "Influencia informativa=Aceptar el juicio ajeno como evidencia sobre la realidad, para tener razón",
      "Influencia normativa=Ajustarse a los demás para ser aceptado y evitar el rechazo o el ridículo",
      "Cumplimiento=Cambio público de conducta sin cambio de la opinión privada",
      "Aceptación=Cambio real y privado de la opinión, que se mantiene sin el grupo delante",
      "Sumisión=Nivel de Kelman: se cambia para obtener una recompensa o evitar un castigo",
      "Identificación=Nivel de Kelman: se cambia para parecerse a alguien valorado",
      "Interiorización=Nivel de Kelman: se adopta el punto de vista por considerarlo correcto"
    ],
    g: [
      "La influencia ___ responde a la necesidad de tener razón.|informativa|normativa|minoritaria",
      "Reírse de un chiste que no se ha entendido para no desentonar ilustra la influencia ___.|normativa|informativa|innovadora",
      "De los tres niveles de Kelman, solo la ___ resiste cuando la fuente desaparece.|interiorización|identificación|sumisión",
      "Según Cialdini, la ___ social es influencia informativa en estado puro.|prueba|presión|comparación",
      "La conformidad baja cuando se responde de forma ___, como comprobaron Deutsch y Gerard.|anónima|pública|oral"
    ],
    tf: [
      "La influencia normativa exige que el grupo esté presente y amenace con alguna sanción.|F|Basta con que la respuesta sea pública y el grupo importe a la persona, sin presencia ni amenaza.",
      "La influencia informativa predomina en situaciones ambiguas, nuevas o difíciles.|V",
      "La obediencia se distingue de las demás modalidades de influencia por su fuente: una autoridad que da órdenes explícitas.|V",
      "La influencia normativa produce sobre todo aceptación privada y duradera.|F|La aceptación privada es propia de la informativa. La normativa produce sobre todo cumplimiento público."
    ],
    q: [
      "En un restaurante de otro país, Lucía mira qué hacen los demás comensales para saber si se deja propina. ¿Qué influencia muestra?|Informativa|Normativa|De identificación|Usa la conducta ajena como información válida sobre la realidad en una situación nueva y ambigua.",
      "Un empleado repite en las reuniones la opinión de su jefa para conseguir un buen horario, aunque en privado sigue pensando lo contrario. ¿Qué nivel de Kelman ilustra?|Sumisión|Identificación|Interiorización|Cambia para obtener una recompensa, sin cambio privado. Es el nivel más superficial y desaparece con la fuente.",
      "¿Qué modalidad de influencia consiste en que una minoría sin poder logra cambiar la norma de la mayoría?|Innovación|Normalización|Conformidad|Siguiendo a Moscovici, la innovación es la influencia minoritaria. La normalización es de Sherif y la conformidad, de Asch.",
      "¿Qué tipo de cambio se asocia con la influencia informativa?|Privado y duradero|Público y transitorio|Público y duradero|Al tomar el juicio ajeno como evidencia, la persona cambia de verdad: es aceptación, no simple cumplimiento."
    ],
    inc: [
      "Sobre la influencia normativa e informativa|La prueba social de Cialdini es influencia normativa|Deutsch y Gerard distinguieron ambos motivos en 1955|La normativa predomina en respuestas públicas ante un grupo valorado|La prueba social (si otros lo hacen, será correcto) es influencia informativa en estado puro."
    ],
    seq: [],
    cls: [
      "Motivo de influencia|Informativa: tener razón; situaciones ambiguas; aceptación privada|Normativa: pertenecer; respuestas públicas; cumplimiento"
    ] },
  { t: "Normalización: Sherif",
    tip: "Sherif (1935) usó el efecto autocinético, la ilusión de movimiento de un punto de luz fijo en una sala a oscuras, en la que no hay respuesta correcta. Las estimaciones individuales convergían en una norma grupal sin que nadie lo pidiera, y la norma se mantenía al volver a estar solo, lo que indica aceptación privada e influencia informativa. Jacobs y Campbell (1961) mostraron que una norma arbitraria se transmite durante varias generaciones de participantes.",
    v: [
      "Efecto autocinético=Ilusión de movimiento de un punto de luz fijo en una sala totalmente a oscuras",
      "Normalización=Creación de una norma común por influencia recíproca sin marco de referencia",
      "Norma grupal=Valor común en torno al cual convergen las estimaciones de los miembros",
      "Sherif (1935)=Estudio de cómo nacen las normas cuando no existe un criterio objetivo",
      "Jacobs y Campbell=Mostraron en 1961 que una norma arbitraria pasa de una generación a otra",
      "Estímulo ambiguo=Situación sin respuesta correcta en la que los juicios ajenos sirven de evidencia",
      "Aceptación privada=Lo que indica que la norma persista cuando el participante vuelve a estar solo",
      "Embudo de convergencia=Patrón en que las diferencias iniciales entre estimaciones se reducen"
    ],
    g: [
      "Sherif aprovechó el efecto ___ para estudiar la formación de normas.|autocinético|estereocinético|cinestésico",
      "En el estudio de Sherif, la tarea era ___ a propósito.|ambigua|evidente|competitiva",
      "Cuando se empezaba en grupo, la norma se ___ al volver a estar solo.|mantenía|disolvía|invertía",
      "Jacobs y Campbell sustituyeron a los miembros uno a uno y la norma arbitraria se fue ___ poco a poco.|suavizando|reforzando|polarizando",
      "Los participantes de Sherif solían ___ que los otros les hubieran influido.|negar|reconocer|exagerar"
    ],
    tf: [
      "En el estudio de Sherif, los participantes recibían la instrucción de ponerse de acuerdo sobre el movimiento de la luz.|F|Nadie les pidió ponerse de acuerdo. La norma surgió al decir las estimaciones en voz alta.",
      "Que la norma persistiera en solitario indica aceptación privada y no simple cumplimiento.|V",
      "El estudio de Sherif se interpreta como un caso de influencia normativa ante una mayoría unánime.|F|Es influencia informativa: en una situación ambigua, los juicios ajenos se usan como evidencia sobre la realidad.",
      "En el experimento de Jacobs y Campbell, la norma arbitraria sobrevivió a quienes la habían creado.|V"
    ],
    q: [
      "En un grupo de prácticas nuevo nadie sabe cuánto escribir en el informe semanal. Al cabo de unas semanas todos escriben lo mismo y los recién llegados lo imitan. ¿Qué proceso lo explica?|Normalización|Conformidad|Innovación|Sin marco de referencia, los primeros informes crean una norma común que luego se transmite, como en Sherif y en Jacobs y Campbell.",
      "¿Qué demostraron Jacobs y Campbell (1961)?|Que una norma arbitraria se transmite entre generaciones|Que una minoría consistente cambia la norma del grupo|Que un aliado reduce la conformidad ante la mayoría|Con cómplices que exageraban y sustitución de miembros uno a uno, la norma pasó por varias generaciones, aunque se suavizó.",
      "¿Por qué el movimiento de la luz en el estudio de Sherif no tiene respuesta correcta?|Porque el punto de luz no se mueve|Porque la luz cambia en cada ensayo|Porque los cómplices dan valores falsos|El movimiento es ilusorio: falta cualquier referencia visual para localizar el punto, así que no hay valor correcto.",
      "¿Qué limitación del estudio de Sherif motivó la investigación de Asch?|Que la tarea era ambigua a propósito|Que los grupos eran de dos o tres personas|Que no se medía el juicio en solitario|Quedaba por saber si la gente se dejaría llevar cuando la respuesta correcta es evidente. Esa fue la pregunta de Asch."
    ],
    inc: [
      "Sobre el estudio de Sherif|Los participantes reconocían que los demás les influían|Las estimaciones individuales convergían en una norma grupal|La norma formada en grupo se mantenía en solitario|Los participantes solían negar la influencia de los otros, lo que indica un proceso poco consciente."
    ],
    seq: [
      "Sherif: primero solos y después en grupo|Estimaciones en solitario>Estabilización en un valor personal>Sesiones de grupo en voz alta>Convergencia en una norma grupal"
    ],
    cls: [] },
  { t: "Conformidad: Asch y su réplica cultural",
    tip: "Asch usó una tarea no ambigua: decir qué línea de comparación igualaba a la de referencia, ante cómplices que en los ensayos críticos daban por unanimidad una respuesta errónea. Alrededor de un tercio de las respuestas críticas fueron conformistas, unos tres de cada cuatro participantes cedieron alguna vez y una cuarta parte nunca. Se interpreta sobre todo como influencia normativa y cumplimiento público. La variable más potente es la unanimidad, y la conformidad varía entre culturas y épocas (Bond y Smith, 1996).",
    v: [
      "Conformidad=Ceder ante la presión de una mayoría pese a tener un criterio propio",
      "Ensayos críticos=Ensayos en que los cómplices daban por unanimidad la misma respuesta errónea",
      "Línea de referencia=Estímulo con el que se comparaban las tres líneas A, B y C",
      "Aliado=Persona que rompe la unanimidad del grupo, aunque no tenga razón",
      "Unanimidad=Variable más potente: si se rompe, la conformidad cae drásticamente",
      "Tamaño de la mayoría=Variable cuyo efecto crece hasta unos tres o cuatro cómplices",
      "Bond y Smith=Metaanálisis de 133 estudios en 17 países con la tarea de Asch (1996)",
      "36,8 %=Proporción aproximada de respuestas críticas conformistas en Asch"
    ],
    g: [
      "Aproximadamente ___ de cada cuatro participantes de Asch se conformaron al menos una vez.|tres|dos|uno",
      "Alrededor de una ___ parte de los participantes no se conformó nunca.|cuarta|tercera|décima",
      "La conformidad aumenta hasta unos ___ cómplices y a partir de ahí apenas crece.|tres o cuatro|siete u ocho|diez o doce",
      "Según Bond y Smith, la conformidad es mayor en culturas ___.|colectivistas|individualistas|anglosajonas",
      "Cuanto más ___ es la tarea, más conformidad, porque pesa la influencia informativa.|difícil|sencilla|breve"
    ],
    tf: [
      "La tarea de Asch era ambigua, como la de Sherif, para que los cómplices resultaran creíbles.|F|La tarea no era ambigua: en solitario casi nadie se equivocaba. Atribuirle ambigüedad es una trampa típica.",
      "En el experimento de Asch casi todos los participantes se plegaron a la mayoría.|F|Unos dos tercios de las respuestas críticas fueron independientes y una cuarta parte de los participantes no cedió nunca.",
      "Un aliado reduce mucho la conformidad aunque no tenga razón: basta con que rompa la unanimidad.|V",
      "En Estados Unidos, la conformidad en la tarea de Asch ha descendido desde los años cincuenta.|V"
    ],
    q: [
      "En una reunión de equipo todos apoyan una propuesta con la que Marta no está de acuerdo. Según Asch, ¿qué facilitaría más que Marta discrepara?|Que otra persona discrepara antes|Que el grupo fuera algo mayor|Que la cuestión fuera más difícil|Romper la unanimidad es la variable más potente. Un grupo mayor o una tarea más difícil aumentan la conformidad.",
      "¿Por qué se interpreta la conformidad de Asch sobre todo como normativa?|Porque la tarea era clara y bajaba en privado|Porque los participantes dudaban de su vista|Porque el estímulo carecía de referencia|Con un estímulo no ambiguo y menos conformidad al responder en privado, el motivo principal era no desentonar.",
      "¿Qué dijeron muchos de quienes cedieron en las entrevistas de Asch?|Que dudaron o no querían desentonar|Que vieron las líneas como el grupo|Que no notaron la discrepancia|Muy pocos afirmaron haber visto las líneas como el grupo. Muchos dudaron de su juicio y otros sabían que el grupo erraba.",
      "¿Qué concluyeron Bond y Smith (1996) sobre la conformidad?|Que depende del contexto cultural e histórico|Que es una constante de la naturaleza humana|Que ha aumentado en Estados Unidos desde 1950|Es mayor en culturas colectivistas y ha descendido en Estados Unidos, así que no es una constante."
    ],
    inc: [
      "Sobre las variables que modulan la conformidad en Asch|La conformidad crece sin límite con el tamaño de la mayoría|Responder de forma anónima la reduce mucho|Un grupo valorado aumenta la presión normativa|El efecto del tamaño se estanca a partir de unos tres o cuatro cómplices. Creer que crece sin límite es una trampa típica."
    ],
    seq: [],
    cls: [
      "Efecto sobre la conformidad|La aumentan: tarea difícil o ambigua; grupo valorado; más cómplices hasta tres o cuatro|La reducen: aliado que rompe la unanimidad; respuesta por escrito; respuesta anónima"
    ] },
  { t: "Innovación: la influencia de las minorías (Moscovici)",
    tip: "Moscovici criticó el modelo en que la influencia va siempre de la mayoría al individuo y estudió la innovación: una minoría sin poder cambia la norma mayoritaria. En el experimento de las diapositivas azules (1969), dos cómplices que decían «verde» de forma consistente lograron un 8 % de respuestas «verde», frente al 1 % si eran inconsistentes. La consistencia es la condición clave, junto con compromiso, autonomía, flexibilidad y ajuste al momento social. Según la teoría de la conversión, la minoría provoca validación y un cambio privado, indirecto y a menudo latente.",
    v: [
      "Innovación=Influencia que una minoría sin poder ejerce sobre la mayoría",
      "Consistencia diacrónica=Mantener la misma posición minoritaria a lo largo del tiempo",
      "Consistencia sincrónica=Acuerdo en la posición entre los miembros de la minoría",
      "Conversión=Cambio privado y a menudo latente producido por una minoría",
      "Validación=Examen de los argumentos ajenos que la minoría obliga a hacer",
      "Comparación social=Proceso ante la mayoría: fijarse en quién dice qué y ceder sin examinar",
      "Estilo de comportamiento=Forma de actuar de la minoría que determina su capacidad de influir",
      "Flexibilidad=Evitar la rigidez dogmática que resta influencia a la minoría (Mugny)"
    ],
    g: [
      "Con cómplices consistentes, alrededor del ___ de las respuestas fueron «verde».|8 %|1 %|32 %",
      "Según Mugny (1982), una minoría que no negocia nada parece ___ y pierde influencia.|dogmática|autónoma|consistente",
      "La minoría genera ___ y obliga a un proceso de validación.|conflicto|cumplimiento|obediencia",
      "Una minoría ___ resulta más creíble que una homogénea.|heterogénea|numerosa|unánime",
      "El metaanálisis de ___ (1994) apoya que la influencia minoritaria es mayor en medidas privadas e indirectas.|Wood et al.|Bond y Smith|Deutsch y Gerard"
    ],
    tf: [
      "La influencia de una minoría consistente se nota sobre todo en cambios públicos e inmediatos.|F|Se nota sobre todo en medidas privadas, indirectas y diferidas, como muestra Wood et al. (1994).",
      "Con cómplices inconsistentes, las respuestas «verde» cayeron a niveles prácticamente iguales a los del grupo control.|V",
      "Que mayorías y minorías actúan mediante procesos distintos es un hecho establecido.|F|Es un debate: Moscovici defiende dos procesos y los modelos de un solo proceso, como el de Latané (1981), lo niegan.",
      "Las minorías que van en la dirección de los cambios de su época tienen más éxito.|V"
    ],
    q: [
      "Dos socias de un club proponen toda la temporada separar residuos en el vestuario. Nadie las apoya en la asamblea, pero al año siguiente la mayoría recicla en casa. ¿Qué ilustra?|Una conversión latente|Un cumplimiento público|Una normalización informativa|La minoría consistente produce un cambio privado y diferido que no se aprecia en la respuesta pública inmediata.",
      "En Moscovici, Lage y Naffrechoux (1969), ¿qué condición determinó la influencia de los cómplices?|Que dijeran «verde» de forma consistente|Que fueran mayoría dentro del grupo|Que tuvieran estatus superior al resto|Con consistencia se alcanzó en torno al 8 % de respuestas «verde» y sin ella, el 1 %. Los cómplices eran dos de seis.",
      "¿Qué modelo se opone a la idea de Moscovici de que mayoría y minoría actúan por procesos distintos?|La teoría del impacto social|La teoría de la conversión|El modelo de identidad social|Latané (1981) propone un solo proceso que cambia en intensidad. La conversión es precisamente la teoría de Moscovici.",
      "Según la teoría de la conversión, ¿qué proceso activa una mayoría?|Comparación social|Validación de argumentos|Conversión latente|Ante la mayoría, la persona se fija en quién dice qué y cede en público sin examinar el contenido."
    ],
    inc: [
      "Sobre la influencia minoritaria según Moscovici|La consistencia debe llevarse hasta la rigidez|La minoría debe parecer convencida y sin intereses ocultos|La consistencia puede ser diacrónica o sincrónica|La consistencia no debe convertirse en rigidez. Una minoría que no negocia parece dogmática y pierde influencia (Mugny, 1982)."
    ],
    seq: [],
    cls: [
      "Fuente de influencia (Moscovici)|Mayoría: comparación social; cumplimiento público; efecto inmediato|Minoría: validación; conversión privada; efecto latente"
    ] }
] },
{ n: 14, t: "Autoridad y anonimato", cap: 7, pir: "alta", mods: [
  { t: "Obediencia: el experimento de Milgram",
    tip: "La obediencia es el cambio de conducta ante la orden explícita de una autoridad: la fuente tiene estatus superior, la presión es directa y la conducta no tiene por qué imitar a quien manda. En Milgram (1963), el participante hacía de maestro y debía castigar con descargas crecientes, de 15 a 450 V, a un alumno cómplice. El 65 % (26 de 40) llegó a 450 V y nadie se detuvo antes de 300 V. Milgram lo explicó con el estado agéntico, en el que la persona traslada la responsabilidad a la autoridad.",
    v: [
      "Obediencia=Cambio de conducta en respuesta a la orden explícita de una autoridad",
      "Estado agéntico=Verse como instrumento de la autoridad y cederle la responsabilidad",
      "Estado autónomo=Estado en que la persona se siente responsable de sus propios actos",
      "Maestro=Papel que siempre tocaba al participante real mediante un sorteo amañado",
      "Alumno=Cómplice que fallaba pares de palabras y fingía recibir descargas",
      "Experimentador=Figura con bata gris que representaba a la autoridad científica",
      "Incitaciones=Cuatro frases fijas, de menor a mayor presión, para que el maestro siguiera",
      "Compromiso progresivo=Cada paso era solo 15 V mayor que el anterior, sin un punto claro para romper"
    ],
    g: [
      "En la versión original, ___ de 40 participantes llegaron a la descarga de 450 V.|26|14|36",
      "El generador tenía 30 interruptores separados por ___ V.|15|30|50",
      "La última incitación era «no tiene otra ___, debe continuar».|opción|excusa|salida",
      "En la versión de 1963, el alumno golpeaba la pared hacia los ___ V y después dejaba de responder.|300|150|450",
      "Antes de empezar, el maestro recibía una descarga ___ de muestra.|real|simulada|máxima"
    ],
    tf: [
      "Las personas a las que Milgram pidió una predicción, incluidos psiquiatras, creían que la mayoría llegaría al final.|F|Pensaban que solo una pequeña minoría llegaría al final. El 65 % superó con mucho lo previsto.",
      "La obediencia se distingue de la conformidad en que la conducta no tiene por qué parecerse a la de quien manda.|V",
      "Los participantes obedientes de Milgram siguieron adelante con calma y sin señales de tensión.|F|Muchos sudaban, temblaban, protestaban o reían nerviosamente, pero siguieron.",
      "El experimento de Milgram es uno de los casos que impulsaron los códigos éticos de la investigación con personas.|V"
    ],
    q: [
      "Un participante dice al terminar: «Yo solo hacía lo que me mandaban, la responsabilidad era del investigador». ¿Qué concepto de Milgram ilustra?|Estado agéntico|Estado autónomo|Seguimiento comprometido|Al integrarse en la jerarquía se ve como instrumento y traslada la responsabilidad a quien manda.",
      "¿Qué rasgo diferencia la obediencia de la conformidad?|La fuente tiene un estatus superior|La presión es indirecta y simbólica|La conducta imita a la de la fuente|En la obediencia la fuente tiene estatus superior, la presión es directa y la conducta no tiene por qué parecerse a la suya.",
      "¿Qué porcentaje de participantes llegó a 450 V en la versión de 1963?|65 %|35 %|82,5 %|Fueron 26 de 40 participantes, muy por encima de lo que predijeron los expertos consultados.",
      "¿Qué factor, además del estado agéntico, contribuía a la obediencia según Milgram?|El compromiso progresivo de 15 en 15 V|El anonimato del maestro ante el alumno|La recompensa económica por cada descarga|Cada paso era solo 15 V mayor que el anterior y no había un momento claro para romper. También pesaba la legitimidad de la institución."
    ],
    inc: [
      "Sobre el procedimiento de Milgram (1963)|Maestro y alumno se veían durante toda la sesión|El alumno era un cómplice que no recibía descargas|El papel de maestro se asignaba con un sorteo amañado|En la versión original no se veían: el alumno estaba en la sala contigua."
    ],
    seq: [
      "Incitaciones del experimentador|Continúe, por favor>El experimento requiere que continúe>Es absolutamente esencial que continúe>No tiene otra opción, debe continuar"
    ],
    cls: [] },
  { t: "Réplicas y reinterpretaciones",
    tip: "Las variantes de Milgram (1974) muestran que se obedece menos cuanto más cerca está la víctima y más lejos la autoridad: 65 % con retroalimentación remota, 62,5 % con voz, 40 % en la misma sala, 30 % con contacto y 22,5 % con órdenes por teléfono. Las réplicas éticas de Burger (2009) y Doliński et al. (2017) confirman la obediencia alta. Lo que se discute es por qué: Haslam y Reicher proponen un seguimiento comprometido basado en la identificación con el experimentador y su proyecto.",
    v: [
      "Retroalimentación remota=Condición en que el alumno solo golpea la pared, con un 65 % de obediencia",
      "Contacto físico=Variante en que el maestro fuerza la mano del alumno sobre una placa (30 %)",
      "Órdenes por teléfono=Variante con la autoridad ausente en que la obediencia cae al 22,5 %",
      "Burger (2009)=Réplica parcial que se detenía en los 150 V, cuando el alumno pide salir",
      "Doliński et al.=Réplica polaca de 2017 en la que el 90 % pulsó el botón más alto",
      "Seguimiento comprometido=Obedecer por identificarse con la autoridad y su proyecto",
      "Gina Perry=Revisó los archivos de Yale y dudó de que todos creyeran reales las descargas",
      "Compañeros rebeldes=Variante con dos «maestros» que se niegan, que reduce mucho la obediencia"
    ],
    g: [
      "Con la víctima en la misma sala, la obediencia fue del ___.|40 %|65 %|22,5 %",
      "Burger detuvo su réplica en los ___ V, cuando el alumno pide salir por primera vez.|150|300|450",
      "La cuarta incitación, la única que es una orden ___, era la que menos obediencia producía.|directa|implícita|amable",
      "En Burger (2009) continuó el ___ de los participantes, frente al 82,5 % del experimento 5 de Milgram.|70 %|30 %|50 %",
      "Para Haslam y Reicher, se continuaba en la medida en que el participante se ___ con el experimentador.|identificaba|enfrentaba|comparaba"
    ],
    tf: [
      "La obediencia aumentó cuando la víctima estaba en la misma sala que el maestro.|F|Bajó del 65 % al 40 %. Cuanto más cerca está la víctima, menos se obedece. Es una trampa típica.",
      "Las réplicas éticas recientes confirman niveles altos de obediencia en el paradigma de Milgram.|V",
      "El modelo del estado agéntico predice que las órdenes directas deberían funcionar mejor que las apelaciones al proyecto.|V",
      "Los archivos de Yale demuestran que todos los participantes de Milgram creían reales las descargas.|F|La revisión de Gina Perry sugiere que no todos lo creían, y cuántos lo hacían sigue en debate."
    ],
    q: [
      "Un investigador repite el paradigma, pero el experimentador da las órdenes por teléfono. Según Milgram (1974), ¿qué cabe esperar?|Una obediencia mucho menor|Una obediencia similar al 65 %|Una obediencia algo mayor|Con la autoridad ausente, la obediencia cayó al 22,5 % (9 de 40).",
      "¿Qué dato apoya la reinterpretación de Haslam y Reicher?|La orden directa era la que menos obedecían|La obediencia subía con la víctima cerca|Nadie se detuvo antes de los 300 V|Si fuera obediencia ciega, la orden directa funcionaría mejor. Al oírla, muchos se plantaban.",
      "¿Por qué Burger detuvo su réplica en los 150 V?|Casi todos los que pasaban de ahí llegaban al final|Era el punto en que el alumno dejaba de responder|Los comités éticos prohíben superar esa cifra|En el original, la gran mayoría de quienes superaban los 150 V llegaban al final, así que se evitaba la parte más dura.",
      "En las variantes de Milgram, ver a otros dos «maestros» negarse a seguir…|redujo mucho la obediencia|no alteró la obediencia|aumentó la obediencia|Conecta con el aliado de Asch y, según Haslam y Reicher, rompe la identificación con la autoridad."
    ],
    inc: [
      "Sobre las réplicas del paradigma de Milgram|En Doliński et al. (2017) obedeció menos de la mitad|Burger (2009) halló un 70 % frente al 82,5 % original|Las variantes muestran que el 65 % no es un rasgo fijo|En la réplica polaca, el 90 % de 80 participantes pulsó el botón de mayor intensidad."
    ],
    seq: [
      "Obediencia según la cercanía de la víctima, de mayor a menor|Retroalimentación remota>Voz del alumno>Misma sala>Contacto físico"
    ],
    cls: [
      "Interpretación de la obediencia|Estado agéntico: Milgram (1974); cesión de responsabilidad; órdenes directas más eficaces|Seguimiento comprometido: Haslam y Reicher; identificación con el proyecto; apelaciones más eficaces"
    ] },
  { t: "Stanford y el BBC Prison Study",
    tip: "En Stanford (Zimbardo, 1971), 24 estudiantes varones fueron asignados al azar a guardias o presos, y el estudio se suspendió a los seis días. La lectura clásica, que el rol corrompe por sí solo, no se sostiene: los guardias recibieron instrucciones (Le Texier, 2019), Zimbardo ejerció un liderazgo de identidad, hubo características de la demanda, sesgo de muestra y ausencia de controles. En el BBC Prison Study (Reicher y Haslam, 2006), sin instrucciones, los guardias no asumieron la tiranía y los presos los desafiaron.",
    v: [
      "Zimbardo (1971)=Autor de la prisión simulada en el sótano del departamento de Stanford",
      "Le Texier (2019)=Mostró en los archivos que los guardias recibieron instrucciones",
      "Liderazgo de identidad=Influencia del líder al definir un «nosotros» y lo que ese grupo debe hacer",
      "Características de la demanda=Claves que indican al participante qué se espera de él",
      "Carnahan y McFarland=Hallaron que anunciar la «vida en prisión» atraía a voluntarios más agresivos",
      "BBC Prison Study=Réplica de 2002 con controles éticos y sin instrucciones a los guardias",
      "Superintendente=Papel que Zimbardo asumió en la prisión simulada",
      "Identidad compartida=Lo que desarrollaron los presos de la BBC para desafiar a los guardias"
    ],
    g: [
      "El estudio de Stanford estaba previsto para dos semanas y se suspendió a los ___ días.|seis|tres|diez",
      "En Stanford se asignó ___ a 24 estudiantes varones a los papeles de guardia o preso.|al azar|por méritos|por afinidad",
      "Haslam, Reicher y Van Bavel atribuyen la conducta de los guardias al liderazgo de ___ de Zimbardo.|identidad|tarea|autoridad",
      "La principal limitación del BBC Prison Study es su formato ___.|televisivo|experimental|longitudinal",
      "Para Reicher y Haslam, la tiranía surge de grupos que se identifican con un proyecto ___ cuando la alternativa fracasa.|autoritario|igualitario|científico"
    ],
    tf: [
      "El experimento de Stanford demostró que cualquier persona con uniforme de guardia se vuelve cruel.|F|Los guardias recibieron instrucciones y el investigador ejerció un liderazgo activo. Sin instrucciones, en la BBC no hubo tiranía.",
      "El experimento de Stanford carecía de condiciones de control.|V",
      "En el BBC Prison Study, los guardias recibieron las mismas instrucciones que en Stanford.|F|No recibieron instrucciones, y no asumieron la tiranía: dudaban de su papel.",
      "Stanford sigue siendo útil para enseñar ética y métodos de investigación.|V"
    ],
    q: [
      "Un profesor presenta Stanford como prueba de que el rol de guardia corrompe automáticamente. ¿Qué dato lo contradice mejor?|Los guardias recibieron indicaciones de conducta|Los participantes se asignaron al azar a los roles|El estudio se suspendió antes de lo previsto|Le Texier (2019) mostró en los archivos que la crueldad no fue espontánea. La asignación al azar no la cuestiona.",
      "¿Qué hallaron Carnahan y McFarland (2007)?|Un sesgo en quién se ofrecía voluntario|Que los guardias recibieron instrucciones|Que el estudio carecía de grupo control|Un anuncio sobre la «vida en prisión» atraía a voluntarios con más agresividad y autoritarismo.",
      "En el BBC Prison Study, ¿cómo se comportaron los presos?|Desafiaron a los guardias como grupo|Cayeron en la pasividad y el colapso|Se sometieron a los guardias desde el inicio|Desarrollaron una identidad compartida. La pasividad y el colapso corresponden a Stanford.",
      "¿Qué papel desempeñaba Zimbardo en su propio estudio?|Superintendente de la prisión|Observador externo y neutral|Guardia de uno de los turnos|Animaba a los guardias a ser «duros» en nombre de un objetivo compartido, lo que se interpreta como liderazgo de identidad."
    ],
    inc: [
      "Sobre la revisión del experimento de Stanford|La crueldad de los guardias surgió de forma espontánea|El diseño se inspiró en un ejercicio previo de alumnos|Los participantes sabían qué se esperaba de ellos|Le Texier (2019) mostró que los guardias recibieron indicaciones, así que la crueldad no fue espontánea."
    ],
    seq: [],
    cls: [
      "Estudio de prisión|Stanford (1971): instrucciones a los guardias; pasividad de los presos; el rol corrompe|BBC (2002): sin instrucciones; presos con identidad compartida; identidad y liderazgo"
    ] },
  { t: "Desindividuación y modelo SIDE",
    tip: "La teoría clásica de la desindividuación (Zimbardo, 1969) sostenía que el anonimato, la difusión de responsabilidad y la activación reducen la autoconciencia y liberan conducta antinormativa. Johnson y Downing (1979) mostraron que el anonimato acentúa la norma de la situación: con capuchas tipo Ku Klux Klan las descargas tendían a subir y con uniformes de enfermera bajaban. Postmes y Spears (1998) hallaron efectos pequeños. El modelo SIDE propone que el anonimato no borra el yo, sino que hace saliente la identidad social y sus normas, antisociales o prosociales.",
    v: [
      "Desindividuación=Pérdida de autoconciencia en el grupo que liberaría conducta antinormativa",
      "Le Bon (1895)=Describió la multitud como un espacio de pérdida de control e irracionalidad",
      "Festinger, Pepitone y Newcomb=Dieron nombre en 1952 al estado de pérdida de individualidad en grupo",
      "Johnson y Downing=Compararon capuchas tipo Ku Klux Klan con uniformes de enfermera (1979)",
      "Postmes y Spears=Metaanálisis de 60 estudios con efectos pequeños sobre la conducta antinormativa",
      "Modelo SIDE=El anonimato hace saliente la identidad social y las normas del grupo",
      "Componente cognitivo=Sin rasgos individuales visibles, la identidad social presente gana saliencia",
      "Componente estratégico=Efecto de ser identificable ante un exogrupo sobre lo que se expresa"
    ],
    g: [
      "En el experimento de Zimbardo (1969), las mujeres con ___ aplicaban descargas más largas.|capuchas|batas|gafas",
      "Con uniformes de enfermera, las descargas ___ en el estudio de Johnson y Downing.|disminuyeron|aumentaron|se mantuvieron",
      "Según Postmes y Spears, la conducta se ajusta a las normas de la ___.|situación|persona|especie",
      "El componente ___ del modelo SIDE se refiere a la identificabilidad ante un exogrupo.|estratégico|cognitivo|afectivo",
      "Lejos de lo que describía Le Bon, las acciones colectivas suelen tener ___.|límites|víctimas al azar|un origen irracional"
    ],
    tf: [
      "Según el modelo SIDE, el anonimato produce siempre conducta agresiva y antinormativa.|F|Refuerza las normas del grupo saliente, que pueden ser antisociales o prosociales.",
      "El metaanálisis de Postmes y Spears (1998) halló poco apoyo a la existencia de un estado desindividuado.|V",
      "En el estudio de Johnson y Downing, el anonimato liberó el lado oscuro con independencia del atuendo.|F|El efecto dependió del atuendo: con capuchas tipo Klan las descargas tendían a subir y con uniformes de enfermera bajaban.",
      "Ser anónimo ante un exogrupo permite actuar según las normas propias aunque estén mal vistas fuera.|V"
    ],
    q: [
      "En un foro de estudiantes con seudónimos predomina la ayuda mutua. Según el modelo SIDE, ¿qué efecto tiene el anonimato?|Refuerza las normas de ayuda del foro|Libera la agresividad reprimida|Reduce cualquier identidad del usuario|El anonimato hace saliente la identidad del grupo y sus normas, en este caso prosociales.",
      "¿Qué concluyeron Johnson y Downing (1979)?|El anonimato acentúa la norma del atuendo|El anonimato aumenta siempre la agresión|El atuendo no influye cuando hay anonimato|Con capuchas tipo Klan las descargas tendían a subir y con uniformes de enfermera bajaban.",
      "Unos manifestantes con el rostro cubierto ante la policía corean consignas que su grupo comparte, pero que están mal vistas fuera. ¿Qué componente de SIDE lo explica?|Estratégico|Cognitivo|Agéntico|La identificabilidad ante un exogrupo influye en lo que el grupo se atreve a expresar.",
      "¿Qué factores reducían la autoconciencia según el modelo de desindividuación de Zimbardo (1969)?|Anonimato, difusión de responsabilidad y activación|Saliencia de la identidad social y de sus normas|Identificabilidad ante un exogrupo y su vigilancia|Para la teoría clásica, ese estado liberaba conducta antinormativa. La saliencia de la identidad es la propuesta de SIDE."
    ],
    inc: [
      "Sobre la desindividuación y el modelo SIDE|Postmes y Spears hallaron efectos grandes y consistentes|Le Bon describió la multitud como irracional|SIDE fue propuesto por Reicher, Spears y Postmes|El efecto de la desindividuación sobre la conducta antinormativa fue pequeño (60 estudios, 4.714 participantes)."
    ],
    seq: [],
    cls: [
      "Explicación del anonimato|Desindividuación clásica: pérdida de autoconciencia; conducta antinormativa; Zimbardo (1969)|Modelo SIDE: identidad social saliente; normas del grupo; Reicher, Spears y Postmes"
    ] }
] },
{ n: 15, t: "Decidir en grupo", cap: 8, pir: "alta", mods: [
  { t: "Cómo decide un grupo",
    tip: "Una decisión grupal pasa por orientación, discusión, decisión e implementación. Laughlin distinguió tareas intelectivas, con solución demostrable, y tareas de juicio, donde pesan preferencias e influencia social. Steiner clasificó las tareas según cómo se combinan las aportaciones: aditivas, compensatorias, disyuntivas, conjuntivas y discrecionales. En tareas de juicio la regla de la mayoría predice bien la decisión y en las intelectivas «la verdad gana». En el perfil oculto, los grupos discuten sobre todo la información compartida.",
    v: [
      "Tarea intelectiva=Tarea con una solución correcta que puede demostrarse a los demás",
      "Tarea de juicio=Tarea sin respuesta demostrable, en la que pesan preferencias y valores",
      "Tarea disyuntiva=Se elige una aportación, así que el resultado depende del mejor miembro",
      "Tarea conjuntiva=Todos deben lograrlo, así que el resultado depende del peor miembro",
      "Tarea compensatoria=Las aportaciones se promedian, como al estimar un presupuesto",
      "Pluralidad=Regla en la que gana la opción más votada aunque no supere la mitad",
      "La verdad gana=Esquema de las tareas intelectivas: basta un miembro con la solución demostrable",
      "Perfil oculto=Información clave repartida entre miembros que discuten sobre todo la compartida"
    ],
    g: [
      "Recoger firmas para una petición es una tarea ___.|aditiva|disyuntiva|conjuntiva",
      "En una cordada de montaña, el rendimiento depende del ___ miembro.|peor|mejor|primer",
      "En tareas de juicio, la regla de la ___ predice bastante bien lo que decide un grupo.|mayoría|unanimidad|pluralidad",
      "Stasser y Titus mostraron que los grupos tienden a pasar por alto la información ___.|exclusiva|compartida|redundante",
      "La primera fase de la toma de decisiones grupal es la ___.|orientación|discusión|implementación"
    ],
    tf: [
      "La psicología de los grupos se ha centrado en las tareas intelectivas, porque en ellas los sesgos tienen más margen.|F|Se ha centrado en las tareas de juicio, en las que los sesgos de la interacción tienen más margen.",
      "El sesgo del perfil oculto se reduce asignando roles de experto y dando más tiempo a la discusión.|V",
      "Los grupos suelen superar al miembro medio, pero no siempre igualan a su mejor miembro.|V",
      "En una tarea discrecional, el resultado depende del esfuerzo sumado de todos los miembros.|F|Eso describe la tarea aditiva. En la discrecional, el grupo decide cómo combinar las aportaciones."
    ],
    q: [
      "Un grupo debe resolver un acertijo con una única solución. Uno de los miembros la encuentra y la explica. ¿Qué cabe esperar?|Que el grupo la adopte|Que se imponga la mayoría|Que se promedien las ideas|Es una tarea intelectiva: rige «la verdad gana» y una respuesta demostrable convence a los demás.",
      "Un comité elige entre cuatro candidatos y gana el que tiene un 40 % de los votos. ¿Qué regla han aplicado?|Pluralidad|Mayoría|Unanimidad|La pluralidad da la victoria a la opción más votada aunque no supere la mitad.",
      "¿Por qué fallan los grupos en las tareas de perfil oculto?|Discuten sobre todo lo que ya saben todos|Los miembros ocultan datos a propósito|Aplican la regla de unanimidad|La información exclusiva, que llevaría a la mejor opción, se queda sin discutir (Stasser y Titus, 1985).",
      "Cinco amigos estiman el presupuesto de una fiesta y se quedan con la media. Según Steiner, es una tarea…|compensatoria|aditiva|discrecional|Las aportaciones se promedian, así que el resultado depende de la media de los juicios."
    ],
    inc: [
      "Sobre las tareas y las reglas de decisión|En una tarea conjuntiva el resultado depende del mejor miembro|Laughlin distinguió tareas intelectivas y de juicio|En una tarea aditiva las aportaciones se suman|En la conjuntiva todos deben lograrlo, así que depende del peor miembro. Del mejor depende la disyuntiva."
    ],
    seq: [
      "Fases de la toma de decisiones grupal|Orientación>Discusión>Decisión>Implementación"
    ],
    cls: [
      "Tipo de tarea (Laughlin)|Intelectiva: problema de lógica; error de cálculo; la verdad gana|De juicio: destino del viaje de fin de curso; elegir a quién contratar; regla de la mayoría"
    ] },
  { t: "El pensamiento grupal (Janis)",
    tip: "Janis (1972, 1982) llamó pensamiento grupal al modo de pensar de grupos muy cohesionados que priorizan mantener el acuerdo sobre evaluar de forma realista las alternativas. El modelo es una cadena causal: antecedentes (alta cohesión, defectos estructurales, contexto provocador), búsqueda de concordancia, ocho síntomas, defectos en la toma de decisiones y mayor probabilidad de una mala decisión. Su caso emblemático es la bahía de Cochinos (1961), y después se aplicó al Challenger (1986).",
    v: [
      "Pensamiento grupal=Búsqueda de acuerdo que prevalece sobre la evaluación realista de alternativas",
      "Búsqueda de concordancia=Prioridad de la unanimidad sobre la calidad de la decisión",
      "Ilusión de unanimidad=Creer que todos están de acuerdo porque nadie expresa sus dudas",
      "Guardianes de la mente=Miembros que protegen al grupo de la información que cuestiona su decisión",
      "Autocensura=Callarse las propias dudas para no romper el acuerdo",
      "Racionalización colectiva=Descartar entre todos las advertencias con justificaciones",
      "Ilusión de invulnerabilidad=Síntoma de sobreestimación por el que el grupo se cree a salvo del fracaso",
      "Bahía de Cochinos=Invasión de 1961, caso emblemático analizado por Janis"
    ],
    g: [
      "Janis consideraba la alta cohesión necesaria pero no ___.|suficiente|relevante|frecuente",
      "El liderazgo ___ que deja clara desde el principio su preferencia es un defecto estructural.|directivo|imparcial|democrático",
      "La visión estereotipada del exogrupo pertenece a los síntomas de mentalidad ___.|cerrada|uniforme|colectiva",
      "Más tarde, el modelo se aplicó al lanzamiento del transbordador ___ (1986).|Challenger|Columbia|Discovery",
      "Según el modelo, la mala decisión se vuelve más ___, aunque no inevitable.|probable|costosa|rápida"
    ],
    tf: [
      "Según Janis, la alta cohesión basta por sí sola para que aparezca el pensamiento grupal.|F|Janis la consideraba necesaria pero no suficiente. Se suman defectos estructurales y un contexto provocador.",
      "La autocensura, la ilusión de unanimidad y los guardianes de la mente son presiones hacia la uniformidad.|V",
      "El modelo de Janis afirma que el pensamiento grupal conduce inevitablemente a un mal resultado.|F|Solo aumenta la probabilidad de un resultado desfavorable. El modelo no afirma que sea inevitable.",
      "Los síntomas del pensamiento grupal no requieren mala fe: basta el deseo de seguir unidos.|V"
    ],
    q: [
      "El tesorero de una asociación duda del presupuesto del festival, pero no dice nada para no estropear el buen ambiente. ¿Qué síntoma ilustra?|Autocensura|Ilusión de unanimidad|Racionalización colectiva|Callar las propias dudas es autocensura. La ilusión de unanimidad es interpretar ese silencio como acuerdo.",
      "Un asesor filtra los informes críticos para que no lleguen al líder antes de la votación. ¿Qué síntoma de Janis representa?|Guardián de la mente|Presión sobre el disidente|Ilusión de invulnerabilidad|Protege al grupo de la información incómoda. Es una de las presiones hacia la uniformidad.",
      "¿Qué antecedente forma parte del contexto provocador según Janis?|Estrés elevado por una amenaza externa|Aislamiento respecto de opiniones externas|Homogeneidad de experiencias e ideología|El aislamiento y la homogeneidad son defectos estructurales. El contexto provocador incluye amenaza y poca esperanza de algo mejor.",
      "¿Qué caracteriza los defectos en la toma de decisiones según Janis?|Pocas alternativas y riesgos sin examinar|Exceso de alternativas y planes de reserva|Búsqueda amplia de información externa|El grupo examina pocas alternativas, no analiza los riesgos ni prepara planes de contingencia."
    ],
    inc: [
      "Sobre los síntomas del pensamiento grupal|La autocensura es un síntoma de sobreestimación del grupo|La creencia en la moralidad del grupo es sobreestimación|La racionalización colectiva indica mentalidad cerrada|La autocensura pertenece a las presiones hacia la uniformidad. La sobreestimación incluye invulnerabilidad y moralidad."
    ],
    seq: [
      "Modelo del pensamiento grupal de Janis|Antecedentes>Búsqueda de concordancia>Síntomas>Defectos en la toma de decisiones>Mala decisión"
    ],
    cls: [
      "Síntomas de Janis|Sobreestimación del grupo: ilusión de invulnerabilidad; creencia en la moralidad del grupo|Mentalidad cerrada: racionalización colectiva; visión estereotipada del exogrupo|Presiones hacia la uniformidad: autocensura; ilusión de unanimidad; guardianes de la mente"
    ] },
  { t: "Críticas y prevención del pensamiento grupal",
    tip: "El apoyo empírico al pensamiento grupal es más débil de lo que su fama sugiere: Janis partió de estudios de caso retrospectivos, Esser (1998) halló solo once experimentos con resultados mixtos y Baron (2005) concluyó que los síntomas son frecuentes, pero la alta cohesión no es necesaria. La cohesión de tarea suele mejorar las decisiones y la social se asocia a evitar el conflicto. Los remedios de Janis siguen siendo útiles: líder imparcial, abogado del diablo, expertos externos, subgrupos y reunión de segunda oportunidad.",
    v: [
      "Estudio de caso retrospectivo=Análisis de decisiones ya fracasadas buscando en ellas los síntomas",
      "Esser (1998)=Revisión que halló solo once estudios de laboratorio con resultados mixtos",
      "Baron (2005)=Concluyó que los síntomas son frecuentes y la alta cohesión no es necesaria",
      "Cohesión de tarea=Compromiso con los objetivos del grupo, que suele mejorar las decisiones",
      "Cohesión social=Deseo de mantener las relaciones y la pertenencia, asociado a evitar el conflicto",
      "Abogado del diablo=Miembro encargado de plantear objeciones a la opción preferida",
      "Segunda oportunidad=Reunión previa a la decisión definitiva para revisar las dudas",
      "Método Delphi=Expertos que no se reúnen responden por rondas y reciben resúmenes anónimos"
    ],
    g: [
      "Esser (1998) encontró solo ___ estudios de laboratorio sobre el pensamiento grupal.|once|treinta|sesenta",
      "En la técnica de grupo ___, cada miembro anota primero sus propuestas en solitario.|nominal|focal|interactivo",
      "Para evitar que el líder condicione la discusión, Janis recomendaba un líder ___.|imparcial|directivo|carismático",
      "Si el abogado del diablo es siempre la misma persona, el grupo aprende a ___ sus objeciones.|descontar|valorar|anticipar",
      "Lo problemático no es que el grupo esté unido, sino que el deseo de ser ___ pese más que la tarea.|aceptado|eficaz|evaluado"
    ],
    tf: [
      "Los estudios de laboratorio muestran de forma consistente que la cohesión produce los síntomas del pensamiento grupal.|F|Esser (1998) halló pocos estudios y resultados mixtos. La cohesión no producía de forma consistente los síntomas.",
      "La presión hacia la uniformidad puede surgir en grupos poco cohesionados si hay una identidad compartida saliente, un líder que marca la línea o una amenaza.|V",
      "El pensamiento grupal está demostrado: los grupos muy unidos toman siempre peores decisiones.|F|Se basó en casos analizados a posteriori, la evidencia experimental es escasa y la cohesión de tarea suele mejorar las decisiones.",
      "Las recomendaciones de Janis siguen siendo útiles aunque su modelo causal no esté demostrado.|V"
    ],
    q: [
      "Ante una crisis, una asesora propone dividir el equipo en dos grupos que analicen el problema por separado y luego comparen conclusiones. ¿Qué problema ataca?|Las pocas alternativas|El aislamiento externo|El liderazgo directivo|Los subgrupos se proponen contra las pocas alternativas. Contra el aislamiento se consulta a expertos externos.",
      "¿Qué crítica hace Baron (2005) al modelo de Janis?|Los antecedentes no son necesarios|Los síntomas son muy infrecuentes|Los casos históricos eran falsos|Los síntomas son muy frecuentes, pero la alta cohesión no es necesaria para que aparezcan.",
      "¿Por qué los estudios de caso de Janis son una evidencia débil?|Partían de fracasos ya conocidos|Usaban grupos sin cohesión|Se basaban en experimentos breves|No permiten saber cuántas decisiones con los mismos síntomas salieron bien y favorecen hallar lo que se busca.",
      "En el método Delphi, los expertos…|no se reúnen y responden por rondas|discuten cara a cara sin críticas|votan a mano alzada tras debatir|Reciben un resumen anónimo de las respuestas de los demás, lo que reduce la autocensura y la presión de los primeros en hablar."
    ],
    inc: [
      "Sobre la prevención del pensamiento grupal|El líder debe expresar su preferencia al inicio|Conviene consultar a expertos externos|Informar sobre el pensamiento grupal es útil|El líder debe ser imparcial y no expresar su preferencia al principio, para no condicionar la discusión."
    ],
    seq: [],
    cls: [
      "Remedio de Janis|Contra el aislamiento: expertos externos; personas de confianza ajenas al grupo|Contra la falta de objeciones: evaluador crítico; abogado del diablo|Contra la precipitación: reunión de segunda oportunidad"
    ] },
  { t: "La polarización grupal",
    tip: "Stoner (1961) halló con dilemas de elección que los grupos recomendaban opciones más arriesgadas que la media individual previa: el desplazamiento hacia el riesgo. Después aparecieron dilemas con desplazamiento hacia la cautela, y se concluyó que la discusión acentúa la tendencia inicial dominante. Moscovici y Zavalloni (1969) lo generalizaron a las actitudes. La polarización no es división ni cualquier extremización. Se explica por argumentos persuasivos, comparación social y autocategorización, que probablemente actúan a la vez.",
    v: [
      "Polarización grupal=Desplazamiento de la posición del grupo, tras discutir, hacia el polo preferido",
      "Desplazamiento hacia el riesgo=Decisiones grupales más arriesgadas que la media individual previa",
      "Dilema de elección=Situación en que un personaje elige entre una opción segura y otra arriesgada",
      "Extremización=Alejarse del punto neutro en cualquier dirección",
      "Argumentos persuasivos=Explicación informativa: se oyen razones nuevas a favor de la postura dominante",
      "Comparación social=Explicación normativa: situarse un poco más allá de la norma del grupo",
      "Autocategorización=Ajuste a la posición prototípica que diferencia al grupo de otros (Turner)",
      "Moscovici y Zavalloni=Generalizaron en 1969 el fenómeno a las actitudes con estudiantes franceses"
    ],
    g: [
      "Tras discutir, los estudiantes franceses se volvieron más ___ hacia De Gaulle.|favorables|críticos|indiferentes",
      "La polarización exige una tendencia ___: un grupo dividido a partes iguales no se polariza.|inicial|final|neutral",
      "La explicación de los argumentos persuasivos se asocia a Burnstein y ___ (1977).|Vinokur|Zavalloni|Stoner",
      "Según la autocategorización, la polarización aumenta cuando la identidad del grupo es ___.|saliente|difusa|personal",
      "Toda polarización es una ___, pero no al revés.|extremización|división|normalización"
    ],
    tf: [
      "La polarización grupal consiste en que el grupo se divide en dos bandos enfrentados.|F|Consiste en reforzar la postura que ya era mayoritaria. Definirla como división es una trampa típica.",
      "La discusión en grupo lleva siempre a decisiones más arriesgadas.|F|Hay dilemas en los que el grupo se vuelve más cauto. La discusión acentúa la tendencia inicial dominante.",
      "La polarización grupal es un efecto robusto en el laboratorio.|V",
      "Según la autocategorización, la posición prototípica del grupo suele ser más extrema que la media.|V"
    ],
    q: [
      "Unos vecinos algo favorables a peatonalizar su calle discuten la propuesta y terminan mucho más favorables. ¿Qué fenómeno ilustra?|Polarización grupal|Pensamiento grupal|Normalización|La discusión desplaza la posición media hacia el polo que ya preferían los miembros.",
      "Un miembro descubre que el grupo valora la postura ecologista y se presenta como algo más ecologista que los demás. ¿Qué explicación de la polarización ilustra?|Comparación social|Argumentos persuasivos|Autocategorización|Es influencia normativa: se conoce la norma y uno se coloca un poco más allá para dar buena imagen.",
      "¿Qué afirma la evidencia sobre las redes sociales y la polarización política?|Es mixta y no permite atribuirles la causa|Demuestra que los algoritmos son la causa|Muestra que las redes reducen la polarización|Su papel es objeto de debate: no puede afirmarse que las plataformas sean la causa principal.",
      "¿Qué distingue la polarización de la extremización?|La polarización sigue la tendencia inicial|La extremización exige una tendencia inicial|La polarización supone dividirse en bandos|La extremización es alejarse del punto neutro en cualquier dirección. La polarización exige ir hacia la tendencia inicial."
    ],
    inc: [
      "Sobre la polarización grupal|Stoner halló decisiones grupales más prudentes que las individuales|Los dilemas de elección enfrentan una opción segura y otra arriesgada|Las tres explicaciones probablemente actúan a la vez|Stoner halló decisiones más arriesgadas, el desplazamiento hacia el riesgo. La cautela apareció en dilemas posteriores."
    ],
    seq: [],
    cls: [
      "Explicación de la polarización|Informativa: argumentos persuasivos; Burnstein y Vinokur|Normativa: comparación social; presentarse de forma favorable|Identitaria: autocategorización; Turner; posición prototípica"
    ] }
] },
{ n: 16, t: "Rendir en grupo", cap: 8, pir: "alta", mods: [
  { t: "La facilitación social",
    tip: "Triplett (1898) observó que los ciclistas rendían más acompañados. Zajonc (1965) integró resultados contradictorios con la teoría del impulso: la mera presencia de otros aumenta la activación, que favorece la respuesta dominante, así que mejora el rendimiento en tareas simples o bien aprendidas (facilitación) y lo empeora en las complejas o nuevas (inhibición). Otras teorías discuten qué produce la activación. Bond y Titus (1983) confirmaron el patrón, con efectos pequeños.",
    v: [
      "Facilitación social=Mejora del rendimiento en tareas simples por la presencia de otros",
      "Inhibición social=Empeoramiento en tareas complejas o nuevas por la presencia de otros",
      "Respuesta dominante=La respuesta más probable en el repertorio de una persona",
      "Coactores=Personas presentes que hacen la misma tarea",
      "Aprensión a la evaluación=Activación producida por creer que los demás nos evalúan (Cottrell)",
      "Distracción-conflicto=Atender a la vez a la tarea y a los demás genera activación",
      "Autopresentación=Deseo de dar buena imagen, que en tareas difíciles empeora por la vergüenza",
      "Triplett (1898)=Observó mejores tiempos en ciclistas que competían o iban acompañados"
    ],
    g: [
      "Según Zajonc, la activación favorece la respuesta ___.|dominante|correcta|novedosa",
      "Las cucarachas de Zajonc recorrían más deprisa un ___ cuando otras las observaban.|pasillo recto|laberinto|túnel curvo",
      "La teoría de la aprensión a la evaluación es de ___ (1972).|Cottrell|Zajonc|Bond",
      "Según Bond y Titus, la presencia de otros explica entre el 0,3 % y el ___ de la varianza del rendimiento.|3 %|30 %|13 %",
      "El efecto de la presencia se reduce cuando el público tiene los ojos ___.|vendados|abiertos|clavados en él"
    ],
    tf: [
      "La presencia de otros mejora el rendimiento sea cual sea la tarea.|F|Mejora las tareas simples o bien aprendidas y empeora las complejas o nuevas. Es una trampa típica.",
      "Para Cottrell, la activación ante los demás es aprendida y no innata.|V",
      "Según Bond y Titus (1983), la facilitación social produce efectos grandes sobre el rendimiento.|F|Confirmaron el patrón, pero los efectos son pequeños: entre el 0,3 % y el 3 % de la varianza.",
      "La teoría de la autoconciencia propone que los demás nos hacen compararnos con un estándar ideal.|V"
    ],
    q: [
      "Un estudiante que acaba de aprender una pieza de guitarra la toca ante sus amigos y se equivoca más que a solas. ¿Qué lo explica según Zajonc?|La respuesta dominante es un error|Sus amigos no prestan atención|La tarea está bien aprendida|En una tarea nueva, la activación potencia la respuesta dominante, que suele ser errónea: inhibición social.",
      "¿Qué dato apoya particularmente la aprensión a la evaluación?|El efecto baja si el público no presta atención|El efecto aparece también en las cucarachas|El efecto se da solo en tareas aditivas|Si el público tiene los ojos vendados o no atiende, el efecto se reduce. Aun así, la mera presencia también influye.",
      "¿Qué teoría sostiene que la mera presencia de otros activa de forma innata?|Impulso|Aprensión a la evaluación|Autopresentación|Es la teoría de Zajonc (1965). Cottrell sostiene que la activación es aprendida.",
      "¿Qué estudió Triplett con niños en el laboratorio?|Enrollar sedal en un carrete|Tirar de una cuerda en grupo|Aplaudir lo más fuerte posible|Muchos lo hacían más deprisa con otro niño. La cuerda es de Ringelmann y los aplausos, de Latané y colaboradores."
    ],
    inc: [
      "Sobre la teoría del impulso de Zajonc|En tareas complejas la respuesta dominante suele ser la correcta|La mera presencia de otros aumenta la activación|La activación favorece la respuesta dominante|En las tareas complejas o nuevas, la respuesta dominante suele ser un error, y por eso el rendimiento empeora."
    ],
    seq: [
      "Teoría del impulso de Zajonc|Presencia de otros>Aumento de la activación>Potenciación de la respuesta dominante>Mejora en tareas simples o empeora en complejas"
    ],
    cls: [
      "Efecto de la presencia de otros|Facilitación: tarea simple; tarea bien aprendida; pasillo recto|Inhibición: tarea compleja; tarea nueva; laberinto"
    ] },
  { t: "La holgazanería social",
    tip: "Ringelmann (1913) mostró que el rendimiento por persona en el tiro de cuerda bajaba al crecer el grupo. Steiner lo formuló así: la productividad real es la potencial menos las pérdidas de proceso, de coordinación o de motivación. Ingham et al. (1974) aislaron la pérdida motivacional con pseudogrupos. Latané, Williams y Harkins (1979) acuñaron el término holgazanería social, que aparece sobre todo en tareas aditivas sin identificación de aportaciones, favorecida por la difusión de responsabilidad, la baja evaluabilidad y los efectos polizón y primo.",
    v: [
      "Efecto Ringelmann=Descenso del rendimiento por persona al aumentar el tamaño del grupo",
      "Pérdidas de proceso=Diferencia entre la productividad potencial y la real del grupo (Steiner)",
      "Pérdidas de coordinación=Esfuerzos que no se sincronizan, como tirar cuando otros aflojan",
      "Pérdidas de motivación=Reducción del esfuerzo que pone cada persona en el grupo",
      "Pseudogrupo=Situación en que se cree trabajar con otros, pero en realidad se trabaja solo",
      "Holgazanería social=Menor esfuerzo individual al trabajar en grupo con aportaciones combinadas",
      "Efecto polizón=Aprovecharse del trabajo ajeno cuando la aportación propia parece prescindible",
      "Efecto primo=Reducir el esfuerzo para no ser «el tonto» que trabaja por todos (Kerr)"
    ],
    g: [
      "En grupos de ocho, el rendimiento por persona en el tiro de cuerda rondaba ___ sobre 100.|49|85|93",
      "El término «holgazanería social» lo acuñaron Latané, Williams y ___.|Harkins|Ringelmann|Karau",
      "En los estudios de Latané, los participantes debían aplaudir y ___ lo más fuerte posible.|gritar|tirar|pedalear",
      "Kerr (1983) describió el efecto ___, que lleva a reducir el esfuerzo para no ser el tonto.|primo|polizón|Ringelmann",
      "La holgazanería aparece sobre todo en tareas ___ en las que el resultado se mide en conjunto.|aditivas|disyuntivas|conjuntivas"
    ],
    tf: [
      "Ringelmann acuñó el término «holgazanería social» a partir de sus estudios con cuerdas.|F|Ringelmann describió el fenómeno, pero el término lo acuñaron Latané, Williams y Harkins (1979).",
      "En los pseudogrupos de Ingham, cualquier caída del rendimiento se debía a la motivación.|V",
      "La holgazanería social es cosa de personas vagas: los trabajadores no la muestran.|F|Es un efecto situacional que aparece en casi cualquiera cuando la aportación no se identifica y el resultado no importa.",
      "Ringelmann no pudo separar las pérdidas de coordinación de las de motivación.|V"
    ],
    q: [
      "En un trabajo con nota común, Pablo deja de esforzarse porque sospecha que sus compañeros se aprovechan de él. ¿Qué proceso ilustra?|Efecto primo|Efecto polizón|Compensación social|Reduce su esfuerzo para no ser el tonto que trabaja por todos (Kerr, 1983). El polizón se aprovecha del trabajo ajeno.",
      "¿Qué permitieron demostrar los pseudogrupos de Ingham et al. (1974)?|Que existe una pérdida motivacional real|Que la caída se debe solo a la coordinación|Que el rendimiento crece con el tamaño|Como no había nadie con quien coordinarse, la caída al creer que había más personas solo podía ser motivacional.",
      "Según Steiner (1972), la productividad real de un grupo es…|la potencial menos las pérdidas de proceso|la suma de las aportaciones individuales|la del mejor miembro más las ganancias|Las pérdidas pueden ser de coordinación, si no se sincronizan los esfuerzos, o de motivación.",
      "¿En qué condición es más probable la holgazanería social?|Resultado medido solo en conjunto|Aportaciones evaluadas una a una|Tareas en que solo cuenta el mejor|Aparece sobre todo en tareas aditivas medidas en conjunto, con baja evaluabilidad y difusión de responsabilidad."
    ],
    inc: [
      "Sobre la holgazanería social|Desaparece cuando se trabaja en pseudogrupos|La favorece la difusión de responsabilidad|La favorece la baja evaluabilidad de las aportaciones|En los pseudogrupos también apareció: el esfuerzo bajaba al creer que había más personas, sin necesidad de coordinarse."
    ],
    seq: [],
    cls: [
      "Tipo de pérdida de proceso|Coordinación: esfuerzos no sincronizados; tirar cuando otros aflojan|Motivación: efecto polizón; efecto primo; difusión de responsabilidad"
    ] },
  { t: "El modelo del esfuerzo colectivo",
    tip: "Karau y Williams (1993), con un metaanálisis de 78 estudios, mostraron que la holgazanería es robusta y propusieron el modelo del esfuerzo colectivo, basado en la teoría de la expectativa-valor: el esfuerzo depende del producto de expectativa, instrumentalidad y valencia, así que basta que uno falle para que caiga. La holgazanería disminuye con la evaluabilidad, la tarea significativa, el grupo valorado y el tamaño pequeño, y es menor en culturas colectivistas y en mujeres. Si la tarea importa y se espera poco de los compañeros aparece la compensación social.",
    v: [
      "Esfuerzo colectivo=Modelo según el cual el esfuerzo depende de expectativa, instrumentalidad y valencia",
      "Expectativa=Creer que el esfuerzo propio mejorará el rendimiento",
      "Instrumentalidad=Creer que el rendimiento llevará a un resultado como la nota o el éxito",
      "Valencia=Valor que la persona concede al resultado",
      "Compensación social=Esforzarse más cuando la tarea importa y se espera que los compañeros rindan poco",
      "Evaluabilidad=Posibilidad de identificar y valorar la aportación individual",
      "Karau y Williams=Metaanálisis de 78 estudios que mostró la robustez de la holgazanería (1993)",
      "Expectativa-valor=Teoría de la motivación en la que se basa el modelo de Karau y Williams"
    ],
    g: [
      "Como los tres factores se ___, basta con que uno valga cero para que la motivación caiga.|multiplican|suman|promedian",
      "El metaanálisis de Karau y Williams incluyó ___ estudios.|78|241|133",
      "La holgazanería es menor en culturas ___.|colectivistas|individualistas|occidentales",
      "Quien ocupa un papel visible, como el de ___, tiene poco margen para holgazanear.|líder|observador|suplente",
      "La compensación social la describieron Williams y ___ (1991).|Karau|Harkins|Latané"
    ],
    tf: [
      "Según el modelo, la holgazanería disminuye cuando el grupo es grande.|F|Disminuye cuando el grupo es pequeño y cada aportación pesa más.",
      "La compensación social es el fenómeno opuesto a la holgazanería social.|V",
      "Según el metaanálisis, la holgazanería es mayor en las mujeres que en los hombres.|F|Es menor en las mujeres. Si refleja valores o diferencias en las tareas estudiadas es objeto de debate.",
      "La holgazanería aparece en tareas físicas, cognitivas y de evaluación.|V"
    ],
    q: [
      "En la última semana, Inés rehace la parte de un compañero porque cree que no la hará bien y la nota le importa. ¿Qué fenómeno ilustra?|Compensación social|Efecto primo|Facilitación social|Trabaja más que en solitario para salvar el resultado del grupo. Confundirla con la holgazanería es una trampa típica.",
      "Una estudiante valora la nota y cree que su esfuerzo mejora el trabajo, pero el profesor pone a todos la misma nota sin leerlo. ¿Qué factor del modelo falla?|La instrumentalidad|La expectativa propia|La valencia del resultado|El rendimiento no lleva al resultado. Como los factores se multiplican, basta con que uno falle para que la motivación caiga.",
      "¿Por qué un líder tiene poco margen para holgazanear según el modelo?|Su contribución se ve y se le atribuye|Suele tener más capacidad que el resto|Su grupo es siempre más pequeño|Al ser visible su papel, la relación entre esfuerzo y recompensa se mantiene estrecha.",
      "¿Cuándo predice el modelo la compensación social?|Tarea importante y compañeros poco fiables|Tarea trivial y compañeros muy capaces|Tarea aditiva sin evaluación individual|Si la tarea importa y se espera que los demás rindan poco, la persona trabaja más que en solitario."
    ],
    inc: [
      "Sobre los moderadores de la holgazanería|Aumenta cuando la persona valora el grupo|Disminuye si la tarea es significativa|Disminuye si la aportación puede evaluarse|Valorar el grupo o identificarse con él reduce la holgazanería, no la aumenta."
    ],
    seq: [
      "Cadena del modelo del esfuerzo colectivo|Esfuerzo propio>Rendimiento>Resultado>Valoración del resultado"
    ],
    cls: [
      "Efecto sobre la holgazanería|La reducen: evaluabilidad; tarea significativa; grupo valorado; grupo pequeño|La aumentan: aportación no identificable; grupo grande; tarea poco significativa"
    ] },
  { t: "Cómo mejorar el rendimiento de los grupos",
    tip: "Contra las pérdidas de motivación conviene hacer identificable la aportación, evaluar también de forma individual, dar sentido a la tarea, reforzar la identidad del grupo, mantener grupos pequeños y fijar metas concretas con retroalimentación. Contra las de coordinación, ajustar el procedimiento al tipo de tarea. En la lluvia de ideas, los grupos nominales producen más ideas que los interactivos, sobre todo por el bloqueo de la producción (Diehl y Stroebe, 1987). La relación entre cohesión y rendimiento es positiva pero modesta.",
    v: [
      "Grupo nominal=Personas que trabajan solas y suman después sus ideas",
      "Bloqueo de la producción=Esperar turno para hablar hace olvidar ideas o dejar de generarlas",
      "Diehl y Stroebe=Autores que en 1987 explicaron la pobreza de la lluvia de ideas en grupo",
      "Mullen y Copper=Metaanálisis de 1994: cohesión y rendimiento unidos sobre todo por la tarea",
      "Beal et al. (2003)=Relación más fuerte si el rendimiento se mide como conducta y no como resultado",
      "Lluvia de ideas=Generar ideas en grupo sin críticas, menos productivo de lo que se cree",
      "Identificabilidad=Posibilidad de saber qué aporta cada miembro, clave contra la holgazanería",
      "Metas exigentes=Objetivos concretos y difíciles acompañados de retroalimentación"
    ],
    g: [
      "En una tarea disyuntiva hay que asegurarse de que se escucha al miembro más ___.|competente|rezagado|veterano",
      "En una tarea conjuntiva conviene apoyar al miembro que va más ___.|rezagado|adelantado|motivado",
      "La causa principal de la baja productividad de la lluvia de ideas en grupo es el ___ de la producción.|bloqueo|exceso|reparto",
      "Según Mullen y Copper, la relación entre cohesión y rendimiento se debe sobre todo al compromiso con la ___.|tarea|amistad|institución",
      "La lluvia de ideas mejora si las ideas se generan primero en ___ y luego se ponen en común.|solitario|voz alta|asamblea"
    ],
    tf: [
      "Un grupo interactivo de lluvia de ideas produce más ideas que un grupo nominal del mismo tamaño.|F|Ocurre lo contrario: los grupos nominales producen más ideas, sobre todo por el bloqueo de la producción.",
      "La relación entre cohesión y rendimiento es positiva pero modesta.|V",
      "Según Mullen y Copper, estar unido hace ganar más de lo que ganar une.|F|Es al revés: la dirección del rendimiento a la cohesión es más fuerte. Ganar une más de lo que estar unido hace ganar.",
      "Las herramientas electrónicas en las que todos escriben a la vez mejoran la lluvia de ideas.|V"
    ],
    q: [
      "Una profesora quiere evitar que en los trabajos en grupo dos personas lo hagan todo. ¿Qué medida es más coherente con la evidencia?|Repartir tareas y registrar aportaciones|Formar grupos más grandes y variados|Poner solo una nota común al producto|Hacer identificable la aportación de cada miembro reduce las pérdidas de motivación.",
      "Según Beal et al. (2003), la relación entre cohesión y rendimiento es más fuerte cuando…|la tarea exige alta interdependencia|el rendimiento se mide como resultado|la cohesión es solo atracción personal|También es más fuerte cuando el rendimiento se mide como conducta y no como resultado.",
      "¿Qué procesos, además del bloqueo, reducen la productividad de la lluvia de ideas en grupo?|Aprensión a la evaluación y holgazanería|Facilitación social y polarización grupal|Normalización y conversión minoritaria|Se suman al bloqueo de la producción, que es la causa principal (Diehl y Stroebe, 1987).",
      "En un trabajo de clase sin instrucciones sobre cómo combinar las aportaciones, ¿qué conviene hacer?|Acordar al inicio cómo se combinarán|Dejar que decida el miembro más rápido|Sumar las aportaciones al final sin más|Es una tarea discrecional: conviene acordar desde el principio el procedimiento."
    ],
    inc: [
      "Sobre las estrategias contra las pérdidas de motivación|Conviene formar grupos grandes para repartir el esfuerzo|Conviene evaluar también de forma individual|Conviene dar sentido a la tarea|Se recomiendan grupos pequeños, en los que cada aportación es visible y necesaria."
    ],
    seq: [],
    cls: [
      "Tipo de estrategia|Contra la pérdida de motivación: aportación identificable; evaluación individual; grupos pequeños|Contra la pérdida de coordinación: escuchar al más competente; apoyar al rezagado; acordar el procedimiento"
    ] }
] }
);

SP.register(window.COURSE);
})({});
