(function(window){
// SAIMAP Psicología · Psicología Social
// Contenido alineado con el temario SAIMAP «Psicología Social» (v1.0, octubre de 2026).
window.COURSE = {
  id: "social",
  title: "Psicología Social",
  short: "Social",
  area: "Psicología social",
  rutas: { grado: { curso: 1 }, pir: { bloque: "Desarrollo y social" } },
  temario: "Psicologia-Social_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "La psicología social y su método", from: 1, to: 2 },
    { n: 2, t: "Cognición social", from: 3, to: 4 },
    { n: 3, t: "La atribución", from: 5, to: 6 },
    { n: 4, t: "El self: autoconcepto, identidad y autoestima", from: 7, to: 8 },
    { n: 5, t: "Actitudes y persuasión", from: 9, to: 12 },
    { n: 6, t: "Estereotipo, prejuicio y discriminación", from: 13, to: 14 },
    { n: 7, t: "Ampliación PIR: influencia, grupos y relaciones", from: 15, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Social · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "Qué es la psicología social", cap: 1, pir: "baja", mods: [
  { t: "Lo social en la mente: Triplett y la definición de Allport",
    tip: "Triplett (1898) comprobó que los ciclistas rendían mejor con marcador o compitiendo, y lo puso a prueba con niños que enrollaban carretes, aunque no todos reaccionaron igual. Es un antecedente de la facilitación social, pero la teoría del impulso es de Zajonc (1965). G. W. Allport (1954) definió la disciplina como el estudio de cómo la presencia real, imaginada o implícita de otros influye en pensamientos, sentimientos y conductas.",
    v: [
      "Psicología social=Estudio científico de cómo la presencia de otros influye en lo que pensamos, sentimos y hacemos",
      "Presencia real=Otras personas están físicamente delante mientras actuamos",
      "Presencia imaginada=Pensar en cómo nos verían o qué dirían otras personas",
      "Presencia implícita=Normas, roles y cultura que actúan sin nadie delante ni en mente",
      "Facilitación social=Cambio del rendimiento ante la presencia de otros",
      "Norman Triplett=Autor que en 1898 comparó ciclistas solos, con marcador y en competición",
      "Teoría del impulso=Explicación de Zajonc (1965): la presencia activa la respuesta dominante",
      "Floyd H. Allport=Hermano de Gordon y autor del manual Social Psychology de 1924"
    ],
    g: [
      "Triplett pidió a niños que ___ el hilo de un carrete lo más deprisa posible.|enrollaran|cortaran|desenredaran",
      "La definición más citada de psicología social procede de ___ (1954).|G. W. Allport|F. H. Allport|Kurt Lewin",
      "Repasar un mensaje pensando en cómo lo leerá un profesor ilustra la presencia ___.|imaginada|implícita|real",
      "Según Zajonc (1965), la presencia de otros favorece la respuesta ___.|dominante|correcta|novedosa",
      "Según los registros de Triplett, los ciclistas rendían peor cuando corrían ___ contra el reloj.|solos|en pareja|con marcador"
    ],
    tf: [
      "Triplett (1898) observó que todos los niños enrollaban más rápido cuando competían en pareja.|F|Muchos niños iban más rápido en pareja, pero no todos reaccionaron igual.",
      "Ponerse el cinturón de seguridad en un aparcamiento vacío puede ilustrar la presencia implícita de otros.|V",
      "La teoría del impulso, que explica la facilitación social, la formuló Triplett a partir de sus carretes.|F|Triplett aportó datos pioneros. La teoría del impulso es de Zajonc (1965).",
      "Según la definición de Allport, la psicología social abarca la cognición, el afecto y la conducta.|V"
    ],
    q: [
      "Lucía corrige su redacción imaginando la cara que pondrá su tutora al leerla, aunque está sola en casa. ¿Qué tipo de presencia actúa?|Imaginada|Implícita|Real|Piensa en cómo la verá una persona concreta. La presencia implícita no requiere pensar en nadie.",
      "¿Quién escribió el manual Social Psychology de 1924?|Floyd H. Allport|Gordon W. Allport|William McDougall|Es una trampa típica: Gordon W. Allport es el autor de la definición de 1954, y su hermano Floyd, del manual de 1924.",
      "¿Qué situación usó Triplett para su comprobación controlada?|Niños enrollando carretes|Ciclistas en un velódromo|Estudiantes resolviendo anagramas|Tras revisar registros de carreras, pidió a niños que enrollaran el hilo de un carrete solos o en parejas que competían.",
      "Según el metaanálisis de Bond y Titus (1983), la mera presencia de otros explica…|una parte muy pequeña de la varianza|casi la mitad de la varianza del rendimiento|la mayor parte del rendimiento en tareas fáciles|Con 241 estudios, la mera presencia explicó entre el 0,3 y el 3 % de la varianza del rendimiento."
    ],
    inc: [
      "Sobre la definición de Allport (1954)|La influencia social exige alguien físicamente delante|La influencia entre personas es recíproca|Subrayar el contexto no niega el peso de la persona|La presencia puede ser real, imaginada o implícita, de modo que la influencia social no necesita público."
    ],
    seq: [],
    cls: [
      "Tipo de presencia|Real: correr más rápido si nos adelantan en el parque; ciclista con marcador|Imaginada: repasar un mensaje pensando en el profesor; pensar en qué dirían otros|Implícita: hacer cola en la farmacia sin que nadie lo pida; cinturón en un aparcamiento vacío"
    ] },
  { t: "La psicología social entre disciplinas afines",
    tip: "La psicología social se distingue por su unidad de análisis, la persona en su contexto social, y por estudiar los procesos que median entre ese contexto y la conducta. Dentro de ella conviven una tradición psicológica, centrada en el experimento, y otra sociológica. Doise (1982) ordenó las explicaciones en cuatro niveles complementarios: intraindividual, interindividual y situacional, posicional e ideológico.",
    v: [
      "Psicología social psicológica=Tradición centrada en procesos individuales y en el experimento de laboratorio",
      "Psicología social sociológica=Tradición interesada por la interacción, los grupos amplios y los significados compartidos",
      "Nivel intraindividual=Cómo organiza la persona su experiencia: percepción, memoria y evaluación",
      "Nivel interindividual=Lo que ocurre en la interacción concreta, entre personas intercambiables",
      "Nivel posicional=Diferencias de estatus, rol o pertenencia que cada uno trae a la situación",
      "Nivel ideológico=Creencias, valores y normas compartidos en una sociedad",
      "Economía conductual=Disciplina que estudia decisiones con incentivos y se nutre de los heurísticos",
      "Sociología=Disciplina centrada en grupos, instituciones y estructuras"
    ],
    g: [
      "Willem Doise propuso sus niveles de análisis en ___.|1982|1954|1973",
      "Los niveles de Doise no compiten entre sí, sino que se ___.|complementan|excluyen|jerarquizan",
      "Preguntar si cambia el reciclaje cuando se cobra por bolsa de basura es propio de la ___.|economía conductual|psicología básica|antropología",
      "La psicología social europea reivindicó los niveles posicional e ___.|ideológico|intraindividual|interindividual",
      "La psicología social toma de la sociología conceptos como rol, estatus y ___.|norma|esquema|heurístico"
    ],
    tf: [
      "Según Doise, un mismo fenómeno puede explicarse a la vez en varios niveles sin contradicción.|V",
      "El nivel posicional de Doise se refiere a las creencias y valores compartidos en una sociedad.|F|Eso es el nivel ideológico. El posicional recoge diferencias de estatus, rol o pertenencia.",
      "La unidad de análisis de la psicología social son los grupos y las instituciones, igual que en sociología.|F|Su unidad de análisis es la persona en su contexto social. Grupos, instituciones y estructuras son el foco de la sociología.",
      "La psicología social comparte con la personalidad temas como el autoritarismo.|V"
    ],
    q: [
      "Una estudiante en prácticas no corrige un error de su tutor porque en su entorno se considera una falta de respeto contradecir a un superior. ¿Qué nivel de Doise invoca esta explicación?|Ideológico|Posicional|Interindividual|Apela a creencias y normas culturales sobre la jerarquía, no al rango concreto que ella ocupa.",
      "«¿Recicla más alguien que cree que sus vecinos lo hacen?» es una pregunta típica de…|la psicología social|la psicología básica|la economía conductual|Relaciona la conducta individual con el contexto social percibido, la unidad de análisis propia de la psicología social.",
      "¿En qué nivel de Doise se trata a las personas como intercambiables dentro de la interacción concreta?|En el interindividual|En el posicional|En el intraindividual|El nivel interindividual y situacional atiende a lo que ocurre en la interacción, sin considerar diferencias de estatus.",
      "¿Por qué se describe a la psicología social como disciplina puente?|Une la psicología con las ciencias sociales|Usa solo métodos de la economía conductual|Rechaza el experimento de laboratorio|Estudia los procesos psicológicos que median entre el contexto social y la conducta, a caballo entre ambos campos."
    ],
    inc: [
      "Sobre los niveles de Doise|Son niveles alternativos y hay que elegir uno|Van de lo más individual a lo más colectivo|El nivel posicional incluye estatus y rol|Los cuatro niveles se complementan: varias explicaciones del mismo fenómeno pueden ser ciertas a la vez."
    ],
    seq: [
      "Niveles de Doise, de lo individual a lo colectivo|Intraindividual>Interindividual y situacional>Posicional>Ideológico"
    ],
    cls: [] },
  { t: "Los orígenes (1898-1945)",
    tip: "Los antecedentes europeos fueron la psicología de los pueblos (Lazarus, Steinthal, Wundt) y la de las masas (Le Bon). En 1908 aparecieron dos manuales titulados Social Psychology, el del psicólogo McDougall y el del sociólogo Ross. F. H. Allport (1924) dio el giro experimental e individualista. Thurstone y Likert midieron actitudes, Sherif estudió normas con el efecto autocinético y Lewin fundó la dinámica de grupos.",
    v: [
      "Psicología de los pueblos=Tradición alemana que estudiaba lenguaje, mitos y costumbres como productos colectivos",
      "Psicología de las masas=Idea de Le Bon de una mente colectiva más impulsiva en la multitud",
      "William McDougall=Psicólogo que en 1908 buscó la base de la conducta social en los instintos",
      "Ross (1908)=Sociólogo centrado en la imitación y la difusión de modas y opiniones",
      "Efecto autocinético=Ilusión de que un punto de luz inmóvil se mueve en la oscuridad",
      "Dinámica de grupos=Campo fundado por Lewin sobre el funcionamiento de los grupos",
      "Investigación-acción=Unión de la investigación con la intervención sobre problemas sociales",
      "LaPiere (1934)=Mostró que lo dicho por carta puede no coincidir con lo hecho cara a cara"
    ],
    g: [
      "El manual de 1908 de ___ buscaba las bases de la conducta social en los instintos.|McDougall|Ross|Le Bon",
      "Thurstone y ___ desarrollaron escalas de actitudes que todavía se usan.|Likert|Sherif|Lewin",
      "En el estudio de Sherif (1935), la norma del grupo ___ después en solitario.|persistía|desaparecía|se invertía",
      "Lewin emigró de ___ a Estados Unidos.|Alemania|Francia|Austria",
      "F. H. Allport sostuvo que los grupos no tienen una ___ propia.|mente|norma|cultura"
    ],
    tf: [
      "Ross, autor de uno de los manuales de 1908, era psicólogo y se centró en los instintos.|F|Ross era sociólogo y se centró en la imitación. Los instintos eran el foco del psicólogo McDougall.",
      "Con el efecto autocinético, las estimaciones individuales convergían en una norma común al hacerse en grupo.|V",
      "La Segunda Guerra Mundial desplazó el centro de gravedad de la disciplina hacia Estados Unidos.|V",
      "Antes de 1945 la psicología social carecía aún de método experimental y de temas propios.|F|Ya tenía nombre, método experimental y temas propios (actitudes, normas, grupos), aunque era pequeña."
    ],
    q: [
      "¿Qué postura defendió F. H. Allport en su manual de 1924?|Solo existen individuos que se influyen|Los grupos tienen una mente colectiva|La conducta social nace de instintos|Defendió una ciencia experimental e individualista. La mente colectiva era la idea de Le Bon, y los instintos, la de McDougall.",
      "Un investigador pide a varias personas que estimen en la oscuridad cuánto se mueve un punto de luz que está quieto, primero en grupo y luego a solas. ¿Qué cabe esperar según Sherif (1935)?|Que mantengan a solas la norma del grupo|Que vuelvan a sus estimaciones iniciales|Que cada uno exagere su postura previa|Las estimaciones convergían en una norma común en grupo, y esa norma persistía después en solitario.",
      "¿Qué idea resume la fórmula de Lewin?|La conducta depende de persona y ambiente|La conducta depende solo de la situación|La conducta refleja instintos heredados|Su fórmula expresa la conducta como función de la persona y del ambiente, no de uno solo de ellos.",
      "¿Cuál fue una de las vías por las que la Segunda Guerra Mundial aceleró la disciplina?|La demanda de los gobiernos|El cierre de las revistas europeas|La fundación de la EASP en Europa|Los gobiernos necesitaban saber de propaganda o moral, y el exilio de europeos como Lewin trasladó la disciplina a Estados Unidos."
    ],
    inc: [
      "Sobre los orígenes de la disciplina|Le Bon negó la existencia de una mente colectiva|McDougall y Ross publicaron manuales en 1908|Lewin impulsó la investigación-acción|Le Bon sostenía que en la multitud surge una mente colectiva. Quien negó que los grupos tengan mente propia fue F. H. Allport."
    ],
    seq: [
      "Hitos fundacionales|Carretes de Triplett>Manuales de McDougall y Ross>Manual de F. H. Allport>Efecto autocinético de Sherif"
    ],
    cls: [
      "Manual de 1908|McDougall: psicólogo; instintos y tendencias individuales|Ross: sociólogo; imitación; difusión de modas y opiniones"
    ] },
  { t: "De la posguerra a la crisis de replicación",
    tip: "Tras 1945 la disciplina se expandió con programas como los de Hovland en Yale, Adorno, Asch, Allport, Festinger y Milgram. En los setenta llegó una crisis de relevancia, ética y validez externa, con Gergen (1973) como crítico destacado. La psicología social europea (Tajfel, Moscovici) reivindicó lo grupal, y la cognición social se consolidó con Fiske y Taylor (1984). Desde 2011, la crisis de replicación ha cambiado la forma de investigar.",
    v: [
      "Gergen (1973)=Sostuvo que la psicología social es en buena parte historia",
      "Henri Tajfel=Autor de los experimentos del grupo mínimo (1970) y de la teoría de la identidad social",
      "Serge Moscovici=Mostró que una minoría consistente también puede influir",
      "Cognición social=Estudio de cómo procesamos la información sobre las personas",
      "Fiske y Taylor (1984)=Autoras del manual que consolidó el área de la cognición social",
      "Open Science Collaboration=Proyecto que replicó 100 estudios y halló significación en un tercio",
      "Caso Stapel=Psicólogo social conocido que inventó datos durante años",
      "Hovland, Janis y Kelley=Programa de Yale (1953) sobre qué hace persuasivo un mensaje"
    ],
    g: [
      "El European Journal of Social Psychology se publica desde ___.|1971|1965|1984",
      "Gergen (1973) sostuvo que la psicología social es en buena parte ___.|historia|biología|filosofía",
      "El programa de Yale estudió qué hace ___ un mensaje.|persuasivo|memorable|ambiguo",
      "Adorno et al. (1950) buscaron una personalidad propensa al ___.|prejuicio|conformismo|liderazgo",
      "En 2011, Bem afirmó haber encontrado ___ en una revista de primera línea.|precognición|telepatía|clarividencia"
    ],
    tf: [
      "La crisis de los años setenta se centró en la relevancia, la ética y la validez externa.|V",
      "La revolución de la cognición social se sitúa en los años cincuenta, de la mano de Festinger.|F|Se sitúa en los años setenta y ochenta, y la consolidó el manual de Fiske y Taylor (1984).",
      "La Open Science Collaboration (2015) obtuvo resultados significativos en casi todas sus réplicas.|F|Solo en torno a un tercio de los 100 estudios replicados dio resultados significativos.",
      "La sentencia Brown contra el Consejo de Educación (1954) se apoyó en parte en trabajos de científicos sociales.|V"
    ],
    q: [
      "¿Qué autor de la psicología social europea mostró que una minoría consistente puede influir?|Moscovici|Tajfel|Gergen|Moscovici estudió la influencia minoritaria. Tajfel, el grupo mínimo y la identidad social, y Gergen criticó la generalización histórica.",
      "¿Qué tres hechos coincidieron en 2011?|Bem, Stapel y Simmons et al.|Milgram, Asch y Festinger|Tajfel, Moscovici y Gergen|El artículo de Bem sobre precognición, el fraude de Stapel y el trabajo de Simmons, Nelson y Simonsohn sobre falsos positivos.",
      "Un crítico argumenta que unos resultados obtenidos con estudiantes estadounidenses en 1965 quizá no valgan para otra cultura ni otra época. ¿Qué punto de la crisis de los setenta recoge?|La validez externa|La ética del engaño|La falta de relevancia|Es la duda sobre la generalización a otras personas, culturas o épocas, que Gergen (1973) llevó al extremo.",
      "¿Qué idea central aportó la cognición social sobre el juicio?|Suele ser rápido, automático y sesgado|Sigue siempre un razonamiento lógico|Depende ante todo de los instintos|Buena parte del juicio social es rápida, automática y sesgada, no fruto de un razonamiento lógico."
    ],
    inc: [
      "Sobre la posguerra y la crisis|Milgram estudió la formación de impresiones|Festinger estudió la comparación social y la disonancia|Asch estudió la conformidad ante el grupo|Milgram estudió la obediencia. La formación de impresiones fue un tema de Asch (1946)."
    ],
    seq: [
      "Etapas de la disciplina|Expansión de posguerra>Crisis de los años setenta>Revolución de la cognición social>Crisis de replicación"
    ],
    cls: [] }
] },
{ n: 2, t: "Cómo investiga la psicología social", cap: 1, pir: "media", mods: [
  { t: "Diseños de investigación",
    tip: "El experimento se define por la manipulación de la variable independiente y la asignación aleatoria, y junto con el experimento de campo es el diseño que mejor permite inferir causalidad. El experimento de campo conserva ambas en un entorno natural. El cuasiexperimento compara grupos ya existentes. Los diseños correlacionales, la encuesta, la observación y el archivo miden y relacionan, pero correlación no implica causalidad.",
    v: [
      "Variable independiente=Condición que el investigador crea o manipula",
      "Variable dependiente=Medida que se compara entre condiciones tras la manipulación",
      "Asignación aleatoria=Reparto al azar que iguala las diferencias previas entre condiciones",
      "Cómplice=Colaborador del investigador que finge ser un participante más",
      "Cuasiexperimento=Comparación de grupos ya existentes, sin asignación al azar",
      "Causalidad inversa=Que el supuesto efecto sea en realidad la causa",
      "Tercera variable=Factor que influye en ambas variables y crea una relación aparente",
      "Diseño longitudinal=Mide a las mismas personas varias veces a lo largo del tiempo"
    ],
    g: [
      "El experimento de campo conserva la manipulación y la ___, pero en un entorno natural.|asignación aleatoria|medición automática|historia de cobertura",
      "La discriminación en la contratación se mide enviando ___ ficticios idénticos salvo en el nombre.|currículos|anuncios|cuestionarios",
      "Analizar registros policiales para relacionar temperatura y delitos es un estudio de ___.|archivo|encuesta|observación",
      "La técnica del pie en la puerta se estudió llamando a ___ reales.|domicilios|empresas|laboratorios",
      "El límite principal de la encuesta es que depende de lo que las personas quieren y saben ___.|contar|recordar|calcular"
    ],
    tf: [
      "El experimento de campo renuncia a la asignación aleatoria a cambio de realismo.|F|Es una trampa típica: mantiene manipulación y asignación aleatoria. Lo que pierde es control.",
      "Un diseño longitudinal ayuda a interpretar una relación, pero no sustituye al experimento.|V",
      "El cuasiexperimento garantiza que los grupos comparados sean equivalentes desde el principio.|F|Al no asignar al azar, los grupos pueden diferir en otras cosas desde el principio.",
      "La confianza en un resultado crece cuando se obtiene con métodos y laboratorios distintos.|V"
    ],
    q: [
      "Un estudio halla que quienes pasan más horas en redes sociales tienen menos autoestima. Un compañero sugiere que la soledad podría causar ambas cosas. ¿Qué problema señala?|Una tercera variable|La causalidad inversa|Un sesgo de publicación|La soledad afectaría a la vez al uso de redes y a la autoestima, de modo que la relación sería aparente.",
      "Se comparan dos institutos porque uno aplica un programa contra el acoso y el otro no. ¿Qué diseño es?|Un cuasiexperimento|Un experimento de campo|Un estudio de archivo|No hay asignación aleatoria: se comparan grupos que ya existían y que pueden diferir en otras cosas.",
      "¿Qué dos rasgos definen el experimento de laboratorio?|Manipular la VI y asignar al azar|Medir la VD y usar cómplices|Controlar el entorno y encuestar|La manipulación de la VI y la asignación aleatoria permiten atribuir a la manipulación las diferencias en la VD.",
      "Que la baja autoestima lleve a pasar más horas en redes, y no al revés, es un ejemplo de…|causalidad inversa|tercera variable|validez externa|La dirección de la relación sería la contraria a la supuesta, algo que un diseño correlacional no puede descartar."
    ],
    inc: [
      "Sobre los diseños de investigación|La encuesta permite inferir qué causa qué|La observación registra conductas en su contexto|El estudio de archivo usa datos ya existentes|Los diseños no experimentales miden y relacionan, pero no permiten saber qué causa qué."
    ],
    seq: [],
    cls: [
      "Tipo de diseño|Experimental: laboratorio con asignación aleatoria; experimento de campo; currículos ficticios|Cuasiexperimental: dos institutos ya formados; grupos sin asignación al azar|No experimental: correlacional; encuesta; observación; archivo"
    ] },
  { t: "Validez, artefactos y ética",
    tip: "La validez interna asegura que el cambio en la VD se debe a la VI, y la externa, que el resultado se generaliza. Suelen estar en tensión. Aronson y Carlsmith (1968) distinguieron el realismo mundano del experimental. Los artefactos (demanda, experimentador, deseabilidad social) se controlan con doble ciego, medición automática e historias de cobertura. El engaño exige consentimiento informado, derecho a retirarse, debriefing y revisión por un comité de ética.",
    v: [
      "Validez interna=Seguridad de que el cambio en la VD se debe a la VI",
      "Validez externa=Grado en que un resultado se generaliza a otras personas, situaciones y momentos",
      "Realismo mundano=Parecido de la situación experimental con la vida cotidiana",
      "Realismo experimental=Grado en que la situación absorbe al participante y le hace actuar con naturalidad",
      "Características de la demanda=Pistas que llevan al participante a actuar según lo que cree que se espera",
      "Efecto del experimentador=Influencia involuntaria de quien conoce la hipótesis (Rosenthal, 1966)",
      "Doble ciego=Ni el participante ni el experimentador conocen la condición asignada",
      "Debriefing=Revelar al final el engaño, explicar el objetivo y resolver dudas o malestar"
    ],
    g: [
      "Las características de la demanda fueron descritas por ___ (1962).|Orne|Rosenthal|Baumrind",
      "Los experimentos de Milgram tenían poco realismo ___ y mucho realismo experimental.|mundano|ecológico|interno",
      "Baumrind (___) criticó los estudios de Milgram por la presión ejercida sobre los participantes.|1964|1962|1968",
      "Burger (2009) replicó a Milgram deteniéndose en los ___ voltios.|150|450|300",
      "Las ___ ocultan la hipótesis al participante para evitar artefactos.|historias de cobertura|instrucciones estandarizadas|mediciones automáticas"
    ],
    tf: [
      "Cuanto más controlado es un laboratorio, más segura es la causalidad, aunque más artificial puede ser la situación.|V",
      "El efecto del experimentador lo describió Orne (1962) al estudiar las pistas que buscan los participantes.|F|Orne describió las características de la demanda. El efecto del experimentador se asocia a Rosenthal (1966).",
      "El engaño se considera justificado si el estudio lo merece, aunque existan alternativas sin engaño.|F|Solo se justifica si no hay alternativa, el estudio lo merece y no causa daño relevante.",
      "Ante las características de la demanda, los participantes pueden colaborar o llevar la contraria.|V"
    ],
    q: [
      "Un investigador que conoce la hipótesis cronometra a mano a los participantes y, sin darse cuenta, detiene antes el reloj en una condición. ¿Qué artefacto es?|Efecto del experimentador|Características de la demanda|Deseabilidad social|Quien conoce la hipótesis influye sin querer en el registro. Se evita con doble ciego y medición automática.",
      "¿Qué tipo de realismo tenían, sobre todo, los experimentos de Milgram?|Experimental|Mundano|Ecológico|Nadie aplica descargas en su día a día, pero los participantes estaban visiblemente tensos: la situación los absorbía.",
      "¿Qué principio ético se aplica al terminar el estudio, cuando se revela el engaño?|El debriefing|El consentimiento informado|La confidencialidad|Al terminar se revela el engaño, se explica el objetivo y se resuelven dudas o malestar.",
      "En un cuestionario sobre hábitos, los participantes declaran reciclar más de lo que reciclan. ¿Qué artefacto actúa?|Deseabilidad social|Efecto del experimentador|Causalidad inversa|En los cuestionarios se tiende a dar la respuesta mejor vista socialmente."
    ],
    inc: [
      "Sobre validez y artefactos|La asignación aleatoria garantiza la validez externa|El doble ciego controla el efecto del experimentador|Validez interna y externa suelen estar en tensión|La asignación aleatoria es garantía de validez interna. La externa depende de que el resultado se generalice."
    ],
    seq: [],
    cls: [
      "Artefacto o defensa|Artefacto: características de la demanda; efecto del experimentador; deseabilidad social|Defensa: doble ciego; medición automática; historias de cobertura"
    ] },
  { t: "La crisis de replicación",
    tip: "Desde 2011 se comprobó que muchos hallazgos publicados no se repetían. Las causas fueron el sesgo de publicación, las muestras pequeñas, las prácticas de investigación cuestionables y, con menos frecuencia, el fraude. La Open Science Collaboration (2015) replicó en torno a un tercio de 100 estudios, y el primer Many Labs, la mayoría de trece efectos. Las réplicas registradas fijan el protocolo antes de recoger datos, y una réplica fallida abre una discusión sobre el procedimiento.",
    v: [
      "Sesgo de publicación=Tendencia a publicar sobre todo resultados significativos",
      "Potencia estadística=Capacidad de un estudio para detectar efectos reales",
      "Prácticas cuestionables=Decisiones analíticas flexibles que disparan los falsos positivos",
      "Many Labs=Proyecto que aplicó trece efectos en decenas de laboratorios (Klein et al., 2014)",
      "RRR=Réplica con protocolo revisado y prerregistrado aplicada en muchos laboratorios",
      "Power posing=Posturas de poder sin efectos hormonales ni sobre el riesgo en la réplica",
      "Simmons, Nelson y Simonsohn=Mostraron en 2011 cómo la flexibilidad analítica infla los falsos positivos",
      "Hipótesis a posteriori=Presentar como previsto lo que se descubrió después"
    ],
    g: [
      "Con muestras pequeñas, los efectos reales que se detectan aparecen ___.|inflados|reducidos|invertidos",
      "La causa menos frecuente de la crisis de replicación es el ___.|fraude|sesgo de publicación|tamaño muestral",
      "Vaidis et al. (2024) confirmaron que el ensayo contrario a la propia opinión cambia la actitud, pero no que la ___ aumente ese cambio.|elección libre|recompensa alta|disonancia previa",
      "La réplica de Ranehill et al. (2015) no halló efectos hormonales del ___.|power posing|priming de ancianos|agotamiento del ego",
      "En la réplica registrada, el protocolo se revisa por pares ___ de recoger los datos.|antes|después|en mitad"
    ],
    tf: [
      "La conclusión de la crisis de replicación es que casi ningún efecto de la psicología social se replica.|F|Unos efectos son sólidos y otros no. El problema era que la literatura publicada no permitía distinguirlos.",
      "En la Open Science Collaboration, los efectos replicados fueron en promedio bastante más pequeños que los originales.|V",
      "Añadir participantes hasta lograr un resultado significativo es una práctica de investigación cuestionable.|V",
      "La Open Science Collaboration (2015) aplicó trece efectos en decenas de laboratorios.|F|Eso fue el primer Many Labs (Klein et al., 2014). La OSC intentó replicar 100 estudios publicados."
    ],
    q: [
      "Una investigadora prueba cinco análisis distintos de sus datos y publica solo el que da significativo, sin mencionar los demás. ¿Qué describe?|Una práctica cuestionable|Un caso de fraude|Un sesgo de publicación|No inventa datos, pero la flexibilidad analítica no declarada dispara los falsos positivos, como mostraron Simmons et al. (2011).",
      "¿Cuál es el rasgo esencial de una réplica registrada multilaboratorio?|El protocolo se fija antes de los datos|Se analiza solo en el laboratorio original|Se publica únicamente si replica el efecto|El protocolo se revisa y se prerregistra antes de recoger datos, de modo que nadie puede ajustarlo según lo que salga.",
      "¿Qué resultado obtuvo el primer Many Labs (Klein et al., 2014)?|Replicó la mayoría de trece efectos|Replicó un tercio de cien estudios|No replicó ninguno de sus efectos|Aplicó trece efectos en decenas de laboratorios y replicó la mayoría, aunque no todos. Lo del tercio fue la Open Science Collaboration.",
      "Según el temario, ¿qué supone una réplica fallida como la de la disonancia (Vaidis et al., 2024)?|Abre una discusión sobre el procedimiento|Refuta el efecto de manera definitiva|Demuestra que hubo fraude en el original|Una réplica fallida abre una discusión sobre el procedimiento, no la cierra de golpe."
    ],
    inc: [
      "Sobre las causas de la crisis|El fraude fue la causa más frecuente|El sesgo de publicación exageró los efectos|Las muestras pequeñas restaban potencia|El fraude es la causa menos frecuente, aunque el caso Stapel minó la confianza."
    ],
    seq: [
      "Réplica registrada multilaboratorio|Protocolo detallado>Revisión por pares previa>Prerregistro>Aplicación en muchos laboratorios>Metaanálisis conjunto"
    ],
    cls: [] },
  { t: "Metaanálisis, réplicas registradas y ciencia abierta",
    tip: "Significativo no equivale a grande: por eso se informa del tamaño del efecto, como la d de Cohen (0,2 pequeño, 0,5 mediano, 0,8 grande) o la correlación r. El metaanálisis combina cuantitativamente muchos estudios para estimar el efecto medio y sus moderadores, pero hereda el sesgo de publicación. La ciencia abierta responde con prerregistro, informes registrados, datos abiertos y grandes colaboraciones.",
    v: [
      "d de Cohen=Diferencia entre dos medias expresada en desviaciones típicas",
      "Correlación r=Relación entre dos variables, con valores de −1 a 1",
      "Metaanálisis=Combinación cuantitativa de muchos estudios para estimar un efecto medio",
      "Moderador=Variable de la que depende el tamaño de un efecto",
      "Revisión narrativa=Resumen de la literatura hecho por un autor sin cálculos comunes",
      "Prerregistro=Publicar hipótesis, diseño y plan de análisis antes de recoger datos",
      "Informe registrado=Artículo aceptado por su pregunta y su método antes de conocer resultados",
      "Datos abiertos=Materiales y registros disponibles para que cualquiera revise los análisis"
    ],
    g: [
      "Según Cohen (1988), una d de 0,5 se considera un efecto ___.|mediano|pequeño|grande",
      "Pettigrew y Tropp (2006) reunieron ___ estudios sobre el contacto intergrupal.|515|266|241",
      "Mezulis et al. (2004) metaanalizaron 266 estudios sobre el sesgo de ___.|autoservicio|negatividad|publicación",
      "En los estudios prerregistrados sobre el contacto, el efecto se reducía a cerca de ___.|0,016|0,39|0,16",
      "Con una muestra ___, una diferencia minúscula resulta significativa.|enorme|pequeña|aleatoria"
    ],
    tf: [
      "Un resultado significativo indica que el efecto es grande e importante.|F|Solo indica que es poco probable por azar. Con una muestra enorme, una diferencia minúscula resulta significativa.",
      "El metaanálisis y la revisión narrativa son dos nombres del mismo procedimiento.|F|El metaanálisis combina cuantitativamente los estudios. La revisión narrativa los resume sin cálculos comunes.",
      "Un efecto pequeño puede tener relevancia práctica si afecta a millones de personas.|V",
      "Si los estudios publicados están sesgados, el promedio de un metaanálisis también lo estará.|V"
    ],
    q: [
      "Un estudio con decenas de miles de participantes halla una diferencia significativa con una d de 0,05. ¿Cómo debe interpretarse?|Existe, pero es muy pequeña|Es grande por ser significativa|Se debe necesariamente al azar|Significativo no es lo mismo que grande: una d de 0,05 queda muy por debajo del umbral de efecto pequeño (0,2).",
      "¿Qué ventaja específica tienen los informes registrados?|Eliminan el incentivo de publicar lo significativo|Garantizan que el efecto estudiado sea real y grande|Hacen innecesario replicar los estudios publicados|La revista acepta el artículo por su pregunta y su método antes de conocer los resultados.",
      "Paluck, Green y Green (2019) analizaron estudios aleatorizados sobre el contacto. ¿Qué ocurría en los prerregistrados?|El efecto se reducía casi a cero|El efecto se duplicaba con creces|El efecto era igual que en el resto|En los prerregistrados bajaba a cerca de 0,016, frente al 0,39 del conjunto, lo que apunta al sesgo de publicación.",
      "¿Qué valor de d se considera, por convención, un efecto grande?|0,8|0,5|0,2|Según Cohen (1988), 0,2 es pequeño, 0,5 mediano y 0,8 grande, aunque son convenciones y no leyes."
    ],
    inc: [
      "Sobre la ciencia abierta|El prerregistro garantiza que un resultado es verdadero|Los datos abiertos permiten revisar los análisis|El prerregistro separa lo previsto de lo descubierto|Estas prácticas no garantizan la verdad, pero facilitan detectar errores."
    ],
    seq: [],
    cls: [
      "Tamaño del efecto en la evidencia actual|Prácticamente nulo: agotamiento del ego; asimetría actor-observador|Pequeño: amenaza del estereotipo en exámenes reales|Grande y robusto: sesgo de autoservicio"
    ] }
] },
{ n: 3, t: "Esquemas, heurísticos y automatismo", cap: 2, pir: "media", mods: [
  { t: "Del buscador de consistencia al estratega motivado",
    tip: "La cognición social estudia cómo percibimos, interpretamos, recordamos y usamos la información social. Su imagen de la persona ha pasado por cuatro metáforas: buscador de consistencia, científico ingenuo, avaro cognitivo y estratega motivado. Bargh (1994) propuso que lo automático cumple en distinto grado cuatro criterios: conciencia, intención, eficiencia y control. Lo automático propone una interpretación y lo controlado la corrige si hay motivación y recursos.",
    v: [
      "Buscador de consistencia=Metáfora de los años 50 y 60 centrada en evitar la incoherencia",
      "Científico ingenuo=Metáfora de quien analiza los datos sobre los demás de forma casi lógica",
      "Avaro cognitivo=Metáfora de quien ahorra recursos limitados con atajos (Fiske y Taylor)",
      "Estratega motivado=Metáfora de quien elige estrategias rápidas o lentas según sus metas",
      "Procesamiento automático=Proceso que puede darse sin conciencia ni intención y con poco esfuerzo",
      "Procesamiento controlado=Proceso consciente, deliberado y costoso que puede interrumpirse",
      "Procesamiento dual=Modelos que combinan procesos automáticos y controlados",
      "Nisbett y Wilson (1977)=Mostraron que explicamos con seguridad causas que no coinciden con lo manipulado"
    ],
    g: [
      "La metáfora del científico ingenuo se asocia sobre todo al estudio de la ___.|atribución|disonancia|persuasión",
      "Para Bargh (1994), lo automático no es un bloque ___.|único|consciente|costoso",
      "El criterio de ___ distingue un proceso que consume pocos recursos de otro que exige esfuerzo.|eficiencia|intención|conciencia",
      "Para Lewin, la conducta depende del ambiente tal como se ___.|percibe|recuerda|diseña",
      "La metáfora del avaro cognitivo marcó la revolución de los años ___.|setenta y ochenta|cincuenta y sesenta|noventa"
    ],
    tf: [
      "La metáfora del estratega motivado sustituye y anula la del avaro cognitivo.|F|No la anula, sino que la completa: la misma persona piensa con cuidado o despacha el juicio según le importe.",
      "Un proceso automático es difícil de detener una vez iniciado.|V",
      "Según Bargh, un proceso automático debe cumplir siempre los cuatro criterios a la vez.|F|Lo automático no es un bloque único: puede cumplir cada criterio en distinto grado.",
      "La mayor parte de los juicios sociales mezcla procesos automáticos y controlados.|V"
    ],
    q: [
      "Al entrar en una cafetería, Pablo clasifica sin pensar a la persona del delantal como «camarero». Después se para a decidir si fue grosero o solo estaba agobiado. ¿Qué describe la secuencia?|De lo automático a lo controlado|De lo controlado a lo automático|Dos procesos controlados seguidos|Lo automático propone la categoría y lo controlado revisa el juicio cuando hay motivación y recursos.",
      "¿Qué tema se estudia bajo la metáfora del buscador de consistencia?|La disonancia|La atribución causal|Los heurísticos de juicio|En los años 50 y 60 se pensaba que buscamos coherencia y que la incoherencia incomoda, como en la disonancia.",
      "¿Qué demostraron Nisbett y Wilson (1977)?|Que la introspección tiene límites|Que la introspección es muy precisa|Que las causas se recuerdan siempre|Las personas explican con seguridad su conducta aunque sus explicaciones no coincidan con lo que el experimento manipuló.",
      "¿Qué metáfora resume la imagen de la persona desde los años noventa?|Estratega motivado|Avaro cognitivo|Científico ingenuo|El estratega motivado dispone de estrategias rápidas y lentas y elige según sus metas y emociones."
    ],
    inc: [
      "Sobre el procesamiento automático y controlado|Lo controlado consume pocos recursos atencionales|Lo automático puede ocurrir sin darnos cuenta|Lo controlado se puede interrumpir o corregir|Lo que consume pocos recursos es lo automático. El procesamiento controlado exige atención y esfuerzo."
    ],
    seq: [
      "Metáforas de la cognición social|Buscador de consistencia>Científico ingenuo>Avaro cognitivo>Estratega motivado"
    ],
    cls: [
      "Tipo de procesamiento|Automático: sin conciencia; sin intención; eficiente; difícil de detener|Controlado: consciente; deliberado; costoso; interrumpible"
    ] },
  { t: "Esquemas y prototipos",
    tip: "Un esquema es una estructura de conocimiento organizado sobre un dominio que guía la atención, la interpretación, la memoria y la inferencia. Hay esquemas de personas, de roles, autoesquemas y guiones. Su principal coste es la persistencia, como muestra la perseverancia de creencias (Ross, Lepper y Hubbard, 1975). Para aplicar un esquema antes hay que categorizar, mediante prototipos (Rosch, 1975) o ejemplares.",
    v: [
      "Esquema=Estructura de conocimiento organizado sobre un dominio",
      "Esquema de rol=Expectativas sobre quien ocupa una posición social",
      "Autoesquema=Creencias organizadas sobre uno mismo (Markus, 1977)",
      "Guion=Secuencia típica de acciones en una situación (Schank y Abelson)",
      "Perseverancia de creencias=Mantener una creencia tras desmentirse la información que la originó",
      "Prototipo=Representación del miembro más típico o promedio de una categoría",
      "Ejemplar=Individuo concreto conocido con el que se compara a alguien nuevo",
      "Cantor y Mischel (1977)=Llevaron los prototipos a la percepción de personas"
    ],
    g: [
      "En el estudio de Ross, Lepper y Hubbard (1975), los participantes debían distinguir notas de ___ auténticas de inventadas.|suicidio|despedida|rescate",
      "Pasar el control de seguridad de un aeropuerto es un ejemplo de esquema de ___.|sucesos|roles|personas",
      "Lo que pasa desapercibido y no encaja con el esquema tiende a ___ en el recuerdo hacia lo esperado.|corregirse|borrarse|reforzarse",
      "La representación por ejemplares conserva la ___ del grupo.|variabilidad|media|identidad",
      "Suponer que en una boda hubo invitados y comida, aunque nadie lo diga, ilustra la función de ___ de los esquemas.|inferencia|atención|interpretación"
    ],
    tf: [
      "En la perseverancia de creencias, la impresión desaparece en cuanto se explica que los datos eran falsos.|F|Sigue en pie: la explicación que la persona construyó sostiene la creencia aunque desaparezca la prueba.",
      "La información que no encaja con el esquema puede recordarse bien si llama la atención y se piensa en ella.|V",
      "Los prototipos pueden llevarnos a «recordar» rasgos típicos que nadie mencionó.|V",
      "Prototipos y ejemplares son incompatibles, y solo uno de los dos describe cómo categorizamos.|F|Lo más probable es que usemos ambas formas de representación, según el contexto."
    ],
    q: [
      "A Irene le dicen que tiene gran habilidad para detectar notas falsas. Luego le explican que el resultado se asignó al azar, pero sigue creyéndose hábil. ¿Qué fenómeno ilustra?|Perseverancia de creencias|Profecía que se cumple|Falacia de la conjunción|La explicación que construyó para su habilidad sostiene la creencia aunque se desmienta la prueba.",
      "«Soy una persona organizada» es un ejemplo de…|autoesquema|esquema de rol|guion|Son creencias organizadas sobre uno mismo, un concepto que propuso Markus (1977).",
      "Un mismo empujón en el metro parece mala educación o simple prisa según lo que se piense de quien empuja. ¿Qué función del esquema actúa?|La interpretación|La memoria selectiva|La atención|Un gesto ambiguo se entiende de forma distinta según el esquema que esté activado.",
      "Si nos presentan a un fisioterapeuta y lo comparamos con el que nos trató la rodilla el año pasado, usamos…|un ejemplar|un prototipo|un guion|Comparamos con un individuo concreto conocido, no con un resumen abstracto del fisioterapeuta típico."
    ],
    inc: [
      "Sobre esquemas y prototipos|Un esquema aplicado a un grupo social se llama guion|Los guiones son esquemas sobre secuencias de acciones|Los prototipos recogen los rasgos más típicos|Aplicado a un grupo social, el esquema se convierte en estereotipo. El guion es un esquema de sucesos."
    ],
    seq: [],
    cls: [
      "Tipo de esquema|De roles: lo que debe hacer una árbitra; expectativas ligadas a una posición|Autoesquema: «soy una persona organizada»; creencias sobre uno mismo|Guion: pasar un control de aeropuerto; secuencia típica de acciones"
    ] },
  { t: "Heurísticos de juicio",
    tip: "Un heurístico es una regla sencilla para juzgar rápido bajo incertidumbre que produce sesgos sistemáticos (Tversky y Kahneman, 1974). La representatividad juzga por el parecido con el prototipo e ignora las tasas base, y de ella deriva la falacia de la conjunción. La disponibilidad juzga por la facilidad con que vienen ejemplos a la mente. En el anclaje, el ajuste se queda corto. Gigerenzer y Goldstein (1996) defendieron su valor adaptativo.",
    v: [
      "Heurístico=Regla sencilla para emitir un juicio rápido en condiciones de incertidumbre",
      "Representatividad=Juzgar la pertenencia a una categoría por el parecido con su prototipo",
      "Disponibilidad=Juzgar la frecuencia por la facilidad con que vienen ejemplos a la mente",
      "Anclaje y ajuste=Estimar desde un valor inicial y corregirlo de forma insuficiente",
      "Tasa base=Frecuencia real de cada categoría en la población",
      "Falacia de la conjunción=Juzgar más probable la unión de dos sucesos que uno de ellos solo",
      "Pensamiento contrafáctico=Imaginar cómo podrían haber sido las cosas",
      "Heurístico de simulación=Juzgar lo probable de un suceso por lo fácil que es imaginarlo"
    ],
    g: [
      "La mayoría cree que en inglés hay más palabras que empiezan por K que con K en ___ posición.|tercera|segunda|última",
      "En el problema de «Linda», muchos juzgaban más probable que fuera «cajera de banco y ___».|feminista|ecologista|abogada",
      "Según Medvec, Madey y Gilovich (1995), los medallistas de plata parecían ___ contentos que los de bronce.|menos|más|igual de",
      "Gigerenzer y Goldstein (1996) defendieron que las reglas sencillas pueden ser tan ___ como los cálculos complejos.|precisas|lentas|costosas",
      "La disponibilidad contribuye a la ___ entre grupos minoritarios y conductas poco frecuentes.|correlación ilusoria|falacia de la conjunción|perseverancia de creencias"
    ],
    tf: [
      "La falacia de la conjunción se explica por el heurístico de anclaje y ajuste.|F|Se explica por la representatividad: el parecido con el prototipo se impone a la lógica de probabilidades.",
      "El ancla influye en la estimación incluso cuando es claramente irrelevante.|V",
      "Los sesgos que producen los heurísticos son errores aleatorios e imprevisibles.|F|Son sesgos sistemáticos: errores previsibles que no se distribuyen al azar.",
      "Cuanto más fácil es imaginar una alternativa mejor, más intensa es la frustración.|V"
    ],
    q: [
      "Tras ver varias noticias sobre un accidente aéreo, Andrés tiene más miedo a volar, aunque el riesgo no ha cambiado. ¿Qué heurístico actúa?|Disponibilidad|Representatividad|Anclaje y ajuste|Lo llamativo y reciente viene con facilidad a la mente e infla la estimación de su frecuencia.",
      "Describen a un hombre callado, meticuloso y lector, y Sara cree que es bibliotecario y no comercial, aunque hay muchos más comerciales. ¿Qué pasa por alto?|Las tasas base|El ancla inicial|El prototipo|Usa la representatividad: el parecido con el prototipo de bibliotecario le hace olvidar la frecuencia real de cada profesión.",
      "¿Qué heurístico aprovecha quien anuncia un piso con un precio alto para situar la negociación?|Anclaje y ajuste|Disponibilidad|Simulación|El precio inicial actúa como ancla y las contraofertas se ajustan a partir de él de forma insuficiente.",
      "¿Qué discuten Tversky y Kahneman frente a Gigerenzer y Goldstein?|Si los heurísticos son errores o adaptaciones|Si los heurísticos se observan en el laboratorio|Si los sesgos que producen son aleatorios o no|Ambas posturas aceptan los mismos datos, pero discrepan sobre si deben leerse como errores o como adaptaciones."
    ],
    inc: [
      "Sobre los heurísticos de juicio|El anclaje solo actúa si el ancla es pertinente|La representatividad lleva a ignorar tasas base|La disponibilidad sobrestima lo llamativo|El ancla funciona incluso cuando es claramente irrelevante, como el número de la rueda de Tversky y Kahneman."
    ],
    seq: [],
    cls: [
      "Heurístico|Representatividad: problema de Linda; bibliotecario o comercial; olvido de tasas base|Disponibilidad: palabras con K; miedo a volar tras las noticias; correlación ilusoria|Anclaje: rueda y países africanos en la ONU; precio de salida de un piso"
    ] },
  { t: "Accesibilidad y priming: lo que se mantiene y lo que no",
    tip: "La accesibilidad es la facilidad con que un concepto viene a la mente y se usa para interpretar la información. Depende de la activación reciente (priming), la frecuencia de uso y la aplicabilidad. El efecto de la accesibilidad sobre la interpretación de información ambigua es robusto (Higgins, Rholes y Jones, 1977). En cambio, el priming de ancianos de Bargh, Chen y Burrows (1996) no se replicó con cronometraje automático (Doyen et al., 2012).",
    v: [
      "Accesibilidad=Facilidad con que un concepto viene a la mente y se usa para interpretar",
      "Priming=Preparación de un concepto que se acaba de usar",
      "Accesibilidad crónica=Disposición estable de un concepto por su uso frecuente",
      "Aplicabilidad=Encaje necesario entre el concepto activado y el estímulo",
      "Priming conductual=Idea de que activar un concepto cambia directamente la conducta",
      "Donald=Joven descrito de forma ambigua en el estudio de Higgins, Rholes y Jones",
      "Srull y Wyer (1979)=A más activación de hostilidad, más hostil parecía una persona ambigua",
      "Priming semántico=Acelera el reconocimiento de palabras relacionadas"
    ],
    g: [
      "En el estudio de «Donald», los rasgos activados solo influían si eran ___ a la conducta descrita.|aplicables|contrarios|ajenos",
      "Doyen et al. (2012) midieron la velocidad al caminar con un cronometraje ___.|automático|a mano|subjetivo",
      "Entre las palabras positivas de Higgins et al. figuraban «aventurero» y «___».|persistente|terco|engreído",
      "Quien piensa a diario en la puntualidad tiene ese concepto ___ accesible.|crónicamente|recientemente|escasamente",
      "Si no hay ___ que resolver, el priming apenas actúa.|ambigüedad|motivación|información"
    ],
    tf: [
      "En el estudio de Higgins, Rholes y Jones (1977), cualquier rasgo activado, aplicable o no, sesgaba el juicio sobre Donald.|F|El efecto solo aparecía con rasgos aplicables a la conducta descrita.",
      "En la réplica de Doyen et al., la lentitud solo aparecía cuando los experimentadores esperaban encontrarla.|V",
      "La lección del caso del priming de ancianos es que el priming no existe.|F|El efecto sobre la interpretación es robusto. Hay que separar efectos sólidos de efectos espectaculares con estudios pequeños.",
      "El priming semántico acelera el reconocimiento de palabras relacionadas.|V"
    ],
    q: [
      "En una tarea perceptiva, un grupo memoriza «temerario» y «engreído» y otro, «aventurero» y «seguro de sí». Luego leen la misma descripción ambigua de un joven. ¿Qué cabe esperar?|El segundo grupo lo valora mejor|Ambos grupos lo valoran igual|El primer grupo lo valora mejor|Los rasgos activados y aplicables sesgan la interpretación de la conducta ambigua en su mismo sentido.",
      "¿Qué tipo de efecto se considera robusto según el temario?|La accesibilidad sobre la interpretación|El priming sobre conductas complejas|Los efectos con muestras pequeñas|Activar un concepto sesga la interpretación de información ambigua. Los efectos grandes de estímulos sutiles sobre la conducta están en duda.",
      "¿Qué mostraron Srull y Wyer (1979)?|Más activación de hostilidad, juicio más hostil|Caminar más despacio tras leer sobre la vejez|Ningún efecto de la activación previa|Cuanto más se activaba el concepto de hostilidad, más hostil parecía después una persona descrita de forma ambigua.",
      "En la réplica de Doyen et al. (2012), ¿dónde parecía estar la lentitud al caminar?|En las expectativas de quien medía|En el priming de los participantes|En la edad de los participantes|Solo surgía cuando cronometraban experimentadores que esperaban el efecto. Con medición automática desaparecía."
    ],
    inc: [
      "Sobre la accesibilidad|Se aplica aunque no encaje con el estímulo|La activación reciente aumenta la accesibilidad|La frecuencia de uso crea accesibilidad crónica|El concepto accesible solo se aplica si encaja con el estímulo: la aplicabilidad es uno de sus tres factores."
    ],
    seq: [],
    cls: [
      "Estado de la evidencia|Se mantiene: rasgos que sesgan el juicio sobre Donald; accesibilidad crónica; priming semántico|No se sostiene o en duda: caminar despacio tras palabras de vejez; grandes efectos de estímulos sutiles; efectos con muestras pequeñas sin prerregistro"
    ] }
] },
{ n: 4, t: "Impresiones, afecto y motivación", cap: 2, pir: "media", mods: [
  { t: "El modelo configuracional de Asch (1946)",
    tip: "Para Asch (1946), la impresión es un todo organizado, distinto de la suma de sus partes. Cambiar «cálido» por «frío» transformaba la impresión global, mientras que «educado» y «brusco» apenas la alteraban: son rasgos centrales y periféricos, y la centralidad depende del resto de la lista. Asch halló también un efecto de primacía, que explicó por cambio de significado. Las teorías implícitas de la personalidad y el efecto halo completan el cuadro.",
    v: [
      "Rasgo central=Rasgo que reorganiza toda la impresión, como «cálido» o «frío»",
      "Rasgo periférico=Rasgo que apenas altera la impresión global, como «educado»",
      "Efecto de primacía=Mayor peso de la información que llega primero",
      "Cambio de significado=Reinterpretación de los rasgos posteriores a la luz de los primeros",
      "Teoría implícita de personalidad=Creencias sobre qué rasgos suelen ir juntos (Bruner y Tagiuri)",
      "Efecto halo=Extensión de una impresión global positiva a rasgos sin relación (Thorndike)",
      "Kelley (1950)=Estudio con un profesor invitado descrito como cálido o frío",
      "Modelo configuracional=Visión gestáltica de la impresión como un todo organizado"
    ],
    g: [
      "Rosenberg et al. (1968) hallaron que los rasgos se organizan en una dimensión social y otra ___.|intelectual|emocional|moral",
      "«Cálido» pesa mucho cuando el resto de rasgos de la lista habla de ___.|competencia|sociabilidad|moralidad",
      "En el estudio de Kelley (1950), quienes leyeron «cálido» ___ más en la discusión.|participaban|se aburrían|se distraían",
      "El atractivo físico es una fuente clásica de efecto ___.|halo|primacía|anclaje",
      "Asch abordó la formación de impresiones desde la psicología de la ___.|Gestalt|conducta|personalidad"
    ],
    tf: [
      "La centralidad de un rasgo es una propiedad fija del adjetivo, sea cual sea la lista.|F|Depende del resto de la lista: «cálido» pesa mucho cuando los demás rasgos dejan abierta la dimensión social.",
      "En el estudio de Kelley (1950), la etiqueta previa cambiaba también la forma de relacionarse con el profesor.|V",
      "Para Asch, «terco» puede leerse como tenacidad en alguien inteligente y como cerrazón en alguien envidioso.|V",
      "El efecto halo lo describió Asch (1946) en su experimento cálido-frío.|F|El efecto halo lo describió Thorndike (1920). Asch estudió los rasgos centrales y la primacía."
    ],
    q: [
      "Antes de una charla, la mitad del público lee que el ponente es «muy cálido» y la otra mitad, «bastante frío». Todos asisten a la misma charla. ¿Qué cabe esperar según Kelley (1950)?|Lo valora mejor quien leyó «cálido»|Ambas mitades lo valoran igual|Lo valora mejor quien leyó «frío»|La etiqueta previa cambia la impresión: quienes leyeron «cálido» valoraban mejor al profesor y participaban más.",
      "Si en la lista de Asch el par crítico es «educado» frente a «brusco», en lugar de «cálido» frente a «frío»…|la impresión apenas varía|la impresión cambia por completo|solo cambian los juicios de inteligencia|«Educado» y «brusco» funcionaban como rasgos periféricos: las diferencias en la impresión eran pequeñas.",
      "¿Cómo explicó Asch el efecto de primacía?|Por cambio de significado|Por disminución de la atención|Por mayor peso algebraico|La explicación de Asch es el cambio de significado. La menor atención y el mayor peso son alternativas desde Anderson.",
      "¿Por qué «cálido» resulta un rasgo central, según Rosenberg et al. (1968)?|Carga mucho en la dimensión social|Es el primer rasgo de la lista|Tiene un valor muy positivo|Los rasgos se organizan en una dimensión social y otra intelectual, y «cálido» carga mucho en la social."
    ],
    inc: [
      "Sobre el modelo de Asch|Cada rasgo conserva su valor al combinarse|La impresión es distinta de la suma de sus partes|Los primeros rasgos fijan una dirección|Que los rasgos conserven su valor es la idea de Anderson. Para Asch, cada rasgo cambia de sentido según los demás."
    ],
    seq: [],
    cls: [
      "Tipo de rasgo en Asch|Central: cálido; frío|Periférico: educado; brusco"
    ] },
  { t: "Los modelos de combinación lineal",
    tip: "En la teoría de la integración de información de Anderson, cada rasgo tiene un valor y la impresión resulta de una regla algebraica. Añadir un rasgo moderadamente positivo a dos muy positivos hace subir la suma y bajar la media, y los datos se ajustaron mejor al promedio. El modelo con mejor ajuste en conjunto fue el promedio ponderado, cuyos pesos explican la primacía, el sesgo de negatividad y el efecto del contexto.",
    v: [
      "Integración de información=Teoría de Anderson que combina los valores de los rasgos con una regla algebraica",
      "Modelo aditivo=La impresión es la suma de los valores de los rasgos",
      "Modelo de promedio=La impresión es la media de los valores de los rasgos",
      "Promedio ponderado=Media en la que cada rasgo cuenta según su importancia",
      "Valor de un rasgo=Lo positivo o negativo que resulta un dato sobre alguien",
      "Peso=Importancia que tiene un rasgo en un contexto concreto",
      "Sesgo de negatividad=Mayor peso de lo negativo que de lo positivo de valor equivalente",
      "Disminución de la atención=Explicación de la primacía por atender menos a lo posterior"
    ],
    g: [
      "Con los rasgos +3, +3 y −1, el modelo aditivo predice una impresión de ___.|+5|+1,67|+2,2",
      "Si a dos rasgos muy positivos se añade uno moderadamente positivo, la suma sube, pero la media ___.|baja|sube|se mantiene",
      "Fiske (1980) mostró que la conducta negativa o ___ atrae más la atención.|extrema|ambigua|reciente",
      "Para elegir compañera de piso, la limpieza recibe más ___ que el gusto musical.|peso|valor|significado",
      "El modelo que mejor se ajustó en conjunto fue el de ___.|promedio ponderado|promedio simple|suma ponderada"
    ],
    tf: [
      "Según Anderson, los rasgos cambian de significado al combinarse en la impresión.|F|Esa es la idea de Asch. En Anderson los valores se mantienen y se promedian, y solo cambia su peso.",
      "Un elogio tibio junto a dos entusiastas puede empeorar la impresión.|V",
      "El modelo aditivo fue el que mejor se ajustó a los datos de formación de impresiones.|F|Los datos favorecieron el promedio, y el mejor ajuste en conjunto fue el del promedio ponderado.",
      "Desde el promedio ponderado, los rasgos centrales de Asch se entienden como rasgos con mucho peso.|V"
    ],
    q: [
      "De un nuevo compañero de trabajo se sabe que es muy puntual (+3), muy amable (+3) y algo desordenado (−1). ¿Qué impresión predice el modelo de promedio?|+1,67|+5|+7|La media de 3, 3 y −1 es +1,67. La suma daría +5, que es la predicción del modelo aditivo.",
      "Una sola mentira descubierta pesa más que muchos gestos amables. ¿Qué fenómeno ilustra?|Sesgo de negatividad|Efecto de primacía|Efecto halo|La información negativa recibe más peso que la positiva de valor equivalente (Fiske, 1980).",
      "¿Qué diferencia de fondo separa a Asch de Anderson?|Si los rasgos cambian de significado o de peso|Si las impresiones se forman rápido o despacio|Si los rasgos negativos pesan más o menos|Para Asch los rasgos se reinterpretan entre sí. Para Anderson conservan su valor y solo cambia su peso.",
      "¿A qué tradición pertenece la teoría de Anderson?|Medición psicológica y álgebra cognitiva|Psicología de la Gestalt|Teorías implícitas de la personalidad|Anderson ofrece predicciones cuantitativas precisas. La Gestalt es la tradición de Asch."
    ],
    inc: [
      "Sobre los modelos de combinación|Con la suma, un rasgo positivo más empeora la impresión|Con la media, un rasgo tibio puede bajar la impresión|Con pesos, el contexto cambia la importancia de cada rasgo|En el modelo aditivo, cualquier rasgo positivo añadido sube la impresión. Solo con la media puede bajar."
    ],
    seq: [],
    cls: [
      "Modelo de impresiones|Asch: Gestalt; cambio de significado; impresión como totalidad|Anderson: álgebra cognitiva; valor y peso; promedio ponderado"
    ] },
  { t: "Afecto y cognición",
    tip: "La cognición «caliente» estudia la influencia mutua entre lo que pensamos, sentimos y queremos. Schwarz y Clore (1983) mostraron que usamos el estado de ánimo como información, salvo que advirtamos que tiene otra causa. El modelo de infusión afectiva de Forgas (1995) predice infusión baja con el acceso directo y el procesamiento motivado, y alta con el heurístico y el sustantivo. La retroalimentación facial con lápiz no ha dado resultados concluyentes en las réplicas.",
    v: [
      "Cognición caliente=Influencia mutua entre lo que pensamos, sentimos y queremos",
      "Afecto=Término general que incluye emociones y estados de ánimo",
      "Afecto como información=Usar el propio ánimo como dato para emitir un juicio",
      "Infusión afectiva=Entrada del estado de ánimo en el juicio (Forgas, 1995)",
      "Acceso directo=Estrategia que recupera un juicio ya almacenado",
      "Procesamiento sustantivo=Elaboración de un juicio nuevo y complejo",
      "Memoria congruente=Recuerdo más fácil de lo que coincide con el ánimo actual (Bower, 1981)",
      "Many Smiles=Proyecto de 2022 con 3.878 participantes de 19 países sobre retroalimentación facial"
    ],
    g: [
      "Schwarz y Clore (1983) llamaron por ___ a personas en días soleados o lluviosos.|teléfono|carta|correo",
      "Según el modelo de Forgas, la infusión afectiva es alta con el procesamiento heurístico y el ___.|sustantivo|motivado|de acceso directo",
      "En Strack et al. (1988), sostener un lápiz con los ___ forzaba una mueca parecida a una sonrisa.|dientes|labios|dedos",
      "Tras un mal día vienen con facilidad a la mente otros ___.|fracasos|éxitos|planes",
      "Many Smiles encontró un efecto pequeño al sonreír de forma ___.|voluntaria|involuntaria|inconsciente"
    ],
    tf: [
      "Según el modelo de infusión afectiva, pensar mucho protege del influjo del estado de ánimo.|F|Al elaborar un juicio nuevo, el ánimo activa material congruente que entra en el juicio: la infusión es alta.",
      "En el estudio de Schwarz y Clore, la diferencia entre días de sol y de lluvia desaparecía al preguntar antes por el tiempo.|V",
      "Wagenmakers et al. (2016) replicaron con éxito el efecto del lápiz en una réplica multilaboratorio.|F|No lo replicaron. Many Smiles (2022) halló un efecto pequeño con sonrisa voluntaria y no concluyente con el lápiz.",
      "El procesamiento motivado, guiado por una meta concreta, implica una infusión afectiva baja.|V"
    ],
    q: [
      "Un encuestador llama en un día lluvioso y, antes de preguntar por la satisfacción vital, comenta: «¿Qué tal el tiempo por ahí?». ¿Qué cabe esperar?|Que el mal tiempo deje de influir|Que la satisfacción sea aún menor|Que la satisfacción sea mucho mayor|Al advertir la causa de su ánimo, la persona deja de usarlo como información sobre su vida.",
      "Según Forgas (1995), ¿cuándo influye menos el estado de ánimo en el juicio?|Al recuperar un juicio ya almacenado|Al elaborar un juicio nuevo y complejo|Al juzgar con poca implicación|Con el acceso directo la infusión es baja. Con el procesamiento sustantivo y el heurístico es alta.",
      "¿Qué concluyó el proyecto Many Smiles (Coles et al., 2022) sobre el lápiz?|Que el resultado no fue concluyente|Que el efecto era grande y robusto|Que el efecto se invertía siempre|Con el lápiz no fue concluyente. Sí halló un efecto pequeño al imitar expresiones o sonreír de forma voluntaria.",
      "Una estudiante, triste tras suspender, recuerda sobre todo otros suspensos de años anteriores. ¿Qué fenómeno ilustra?|Memoria congruente con el ánimo|Infusión por acceso directo|Afecto usado como información|Se recuerda con más facilidad la información cuyo tono coincide con el ánimo actual (Bower, 1981)."
    ],
    inc: [
      "Sobre afecto y cognición|El ánimo influye más cuando hay un juicio almacenado|El ánimo se usa como dato salvo si se advierte su causa|Pensar mucho no protege del estado de ánimo|Con un juicio ya almacenado, el acceso directo, la infusión afectiva es baja."
    ],
    seq: [],
    cls: [
      "Infusión afectiva según Forgas|Baja: acceso directo; procesamiento motivado|Alta: procesamiento heurístico; procesamiento sustantivo"
    ] },
  { t: "Motivación y cognición",
    tip: "Kunda (1990) distinguió las metas de precisión de las direccionales, que sesgan la búsqueda y la evaluación de la información pero exigen poder justificar la conclusión. La necesidad de cierre (Kruglanski y Webster, 1996) lleva a agarrarse a la primera respuesta y congelarla. El modelo del continuo de Fiske y Neuberg (1990) va de la categoría a la individualización. El agotamiento del ego no se ha replicado en réplicas registradas.",
    v: [
      "Metas de precisión=Deseo de acertar que lleva a procesar con más cuidado",
      "Metas direccionales=Deseo de llegar a una conclusión concreta",
      "Razonamiento motivado=Procesamiento sesgado por lo que se desea concluir (Kunda, 1990)",
      "Necesidad de cierre=Deseo de una respuesta firme que evite la ambigüedad",
      "Modelo del continuo=Impresiones entre la categoría y la información individual (Fiske y Neuberg)",
      "Individualización=Avance hacia la información propia de la persona concreta",
      "Modelo de fuerza=Autocontrol como recurso limitado que se gasta con el uso",
      "Agotamiento del ego=Supuesta pérdida de autocontrol tras un esfuerzo previo, no replicada"
    ],
    g: [
      "Quien tiene alta necesidad de cierre tiende a agarrarse a una respuesta y ___ después.|congelarla|revisarla|olvidarla",
      "En Baumeister et al. (1998), quienes comían ___ en lugar de galletas persistían menos después.|rábanos|zanahorias|manzanas",
      "Hagger et al. (2016) aplicaron un mismo protocolo prerregistrado en ___ laboratorios.|23|36|19",
      "La necesidad de cierre aumenta con la prisa, el cansancio o el ___.|ruido|silencio|interés",
      "Según Neuberg y Fiske (1987), se avanza hacia la individualización cuando ___ de esa persona.|dependemos|desconfiamos|nos alejamos"
    ],
    tf: [
      "Las metas direccionales permiten creer cualquier cosa sin necesidad de justificación.|F|Hace falta justificar la conclusión, y esa justificación se construye seleccionando recuerdos, reglas y datos.",
      "Según el modelo del continuo, por defecto empezamos por la categoría.|V",
      "La réplica de Vohs et al. (2021), con protocolos elegidos por defensores del modelo, obtuvo un efecto moderado.|F|Obtuvo una d de 0,06, no significativa, en 36 laboratorios con 3.531 participantes.",
      "El fracaso de las réplicas no implica que el autocontrol no se canse nunca.|V"
    ],
    q: [
      "Un aficionado ve la repetición de una jugada polémica y encuentra argumentos razonables para pensar que el árbitro perjudicó a su equipo. ¿Qué describe?|Razonamiento motivado|Necesidad de cierre|Meta de precisión|Una meta direccional guía la búsqueda de argumentos, y por eso el sesgo se vive como un juicio objetivo.",
      "Marta va a conocer al compañero con quien hará un trabajo de grupo con nota. Según Fiske y Neuberg, ¿qué es más probable?|Que se fije en lo que él hace|Que se base solo en su grupo|Que ignore toda la información|Depender de alguien aumenta la motivación y la atención, lo que impulsa la individualización.",
      "¿Qué tamaño del efecto obtuvieron Hagger et al. (2016) en 23 laboratorios?|Una d de 0,04|Una d de 0,60|Una d de 0,06|Hagger et al. obtuvieron 0,04. El 0,06 corresponde a Vohs et al. (2021), en 36 laboratorios.",
      "¿Qué tiende a hacer una persona con alta necesidad de cierre?|Apoyarse en la primera impresión|Buscar datos que contradigan su idea|Retrasar el juicio hasta saber más|Se agarra a la primera respuesta disponible y la congela, por lo que se apoya más en estereotipos y primeras impresiones."
    ],
    inc: [
      "Sobre motivación y cognición|La necesidad de cierre disminuye con la prisa y el cansancio|Las metas direccionales sesgan la evaluación de datos|Las metas de precisión llevan a considerar más información|La necesidad de cierre aumenta con la prisa, el cansancio o el ruido."
    ],
    seq: [],
    cls: [
      "Meta según Kunda|Precisión: procesar con más cuidado; considerar más información; estrategias más complejas|Direccional: buscar apoyo a la conclusión; examinar con dureza lo contrario; justificar lo que se desea"
    ] }
] }
);

// SAIMAP Psicología · Social · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Teorías clásicas de la atribución", cap: 3, pir: "alta", mods: [
  { t: "Heider y la psicología ingenua",
    tip: "La atribución es el proceso por el que asignamos una causa a la conducta propia o ajena, sobre todo ante lo inesperado, lo negativo o lo que nos afecta. Heider (1958) trató al perceptor como un psicólogo ingenuo que ve la conducta como motivada, prefiere las causas estables y distingue causas internas (disposicionales) y externas (situacionales). También señaló que el actor domina el campo perceptivo, idea que anticipa el error fundamental.",
    v: [
      "Atribución=Proceso por el que se asigna una causa a una conducta propia o ajena",
      "Psicólogo ingenuo=Perceptor que construye teorías de sentido común sobre por qué actúan los demás",
      "Atribución interna=Explicación que sitúa la causa en la capacidad, el esfuerzo o el carácter del actor",
      "Atribución externa=Explicación que sitúa la causa en la tarea, la presión de otros o la suerte",
      "Heider y Simmel (1944)=Animación de figuras geométricas que los observadores narraban con intenciones",
      "Lo que la persona puede=Su capacidad comparada con la dificultad de la tarea",
      "Lo que la persona intenta=Su esfuerzo y su intención",
      "Campo perceptivo=Espacio que la conducta del actor tiende a dominar, dejando la situación detrás"
    ],
    g: [
      "Buscamos causas sobre todo cuando un resultado es ___, inesperado o nos afecta de cerca.|negativo|positivo|habitual",
      "Heider publicó «The Psychology of Interpersonal Relations» en ___.|1958|1944|1965",
      "Atribuir el suspenso de Javier a un recorrido con mucho tráfico es una atribución ___.|externa|interna|disposicional",
      "Según Heider, preferimos las causas ___ porque permiten predecir mejor.|estables|externas|internas",
      "La distinción de Heider entre capacidad y esfuerzo reaparece en la teoría de ___.|Weiner|Kelley|Rotter"
    ],
    tf: [
      "En el estudio de Heider y Simmel, casi todos los observadores describieron las figuras como personajes con intenciones.|V",
      "Según Heider, la situación tiende a dominar el campo perceptivo del observador.|F|Es el actor quien domina el campo perceptivo y la situación queda en segundo plano, idea que anticipa el error fundamental.",
      "Explicar la conducta ajena permite predecirla y da sensación de control sobre el entorno social.|V",
      "Atribuir un suspenso a que el alumno no practicó lo suficiente es una atribución externa.|F|La falta de práctica o de esfuerzo está en la persona: es una atribución interna o disposicional."
    ],
    q: [
      "Una amiga que siempre contesta enseguida lleva dos días sin responder un mensaje, y Marta empieza a barajar causas. ¿Qué dispara esta búsqueda?|Que la conducta es inesperada|Que la conducta es habitual|Que la causa es estable|Buscamos causas sobre todo ante lo inesperado, lo negativo o lo que nos afecta. Si contestara como siempre, nadie preguntaría por qué.",
      "¿Qué idea de Heider ilustra el estudio de Heider y Simmel (1944)?|Que vemos la conducta como motivada|Que preferimos las causas estables|Que distinguimos dos clases de causas|Los observadores atribuían intenciones y emociones a simples triángulos y un círculo: percibimos la conducta como motivada incluso sin vida.",
      "Para Heider, que una persona logre algo requiere combinar…|lo que puede y lo que intenta|el consenso y la distintividad|la estabilidad y el locus|Capacidad frente a dificultad (poder) y esfuerzo e intención (intentar). La distinción reaparece en la teoría de Weiner.",
      "¿Qué metáfora de la cognición social procede de la obra de Heider?|El científico ingenuo|El avaro cognitivo|El táctico motivado|Heider vio a las personas como psicólogos ingenuos que razonan como científicos, aunque sin su rigor."
    ],
    inc: [
      "Sobre Heider|La situación domina el campo perceptivo del observador|Las personas tienden a ver intenciones tras los actos|Preferimos causas estables porque predicen mejor|Es al revés: la conducta del actor domina el campo perceptivo y la situación queda en segundo plano."
    ],
    seq: [],
    cls: [
      "Tipo de atribución|Interna: capacidad; esfuerzo; carácter; intención|Externa: dificultad de la tarea; presión de otros; suerte"
    ] },
  { t: "Jones y Davis: inferencias correspondientes",
    tip: "Una inferencia correspondiente concluye que un acto refleja una disposición estable del actor (Jones y Davis, 1965). Primero se atribuye intención y después se infiere la disposición. La favorecen la elección libre, los pocos efectos no comunes y la baja deseabilidad social, junto con la relevancia hedónica y el personalismo. Al ponerla a prueba, Jones y Harris (1967) dieron con el error fundamental de atribución.",
    v: [
      "Inferencia correspondiente=Conclusión de que un acto refleja una disposición estable del actor",
      "Atribución de intención=Primer paso, juzgar que el actor conocía las consecuencias y podía producirlas",
      "Elección libre=Condición en la que la conducta, al no ser impuesta, informa más del actor",
      "Efectos no comunes=Consecuencias exclusivas de la opción elegida que revelan la intención",
      "Baja deseabilidad social=Conducta poco esperada en esa situación, que se atribuye a la persona",
      "Relevancia hedónica=El acto tiene consecuencias directas para el observador",
      "Personalismo=El observador cree que la conducta iba dirigida a él",
      "Efecto accidental=Consecuencia no buscada que no dice nada del carácter"
    ],
    g: [
      "Si Lucía elige, entre dos empleos casi iguales, el que permite teletrabajar, inferimos que valora la ___.|flexibilidad|estabilidad|retribución",
      "Una inferencia correspondiente es más clara cuando la opción elegida tiene ___ efectos no comunes.|pocos|muchos|varios",
      "Dar las gracias al recibir un regalo informa poco porque su deseabilidad social es ___.|alta|baja|nula",
      "Jones y Davis presentaron su teoría en ___.|1965|1967|1972",
      "Si alguien se cuela justo delante de nosotros mirándonos, interviene el ___.|personalismo|consenso|descuento"
    ],
    tf: [
      "Quien rompe un vaso al gesticular no lleva a inferir agresividad, porque falta la atribución de intención.|V",
      "Una conducta que todo el mundo haría en esa situación favorece una inferencia correspondiente.|F|Informa poco. La favorecen las conductas de baja deseabilidad social, que se apartan de lo esperado.",
      "El principio de descuento forma parte de la teoría de Jones y Davis.|F|Es de Kelley (1972). Se parece en su lógica a la elección libre, pero asignarlo a Jones y Davis es una trampa típica.",
      "Una limitación de la teoría es que se ocupa de actos aislados y no de la información acumulada.|V"
    ],
    q: [
      "En un debate de clase, a Pablo le asignan al azar defender una postura. Según Jones y Davis, ¿qué revela esa conducta de su opinión?|Poco, porque no la eligió|Mucho, porque la defiende en público|Lo mismo que si la hubiera elegido|Sin elección libre, la conducta dice poco de la persona. Que en la práctica se le atribuya igualmente es el error fundamental.",
      "¿Qué dos factores motivacionales añadieron Jones y Davis?|Relevancia hedónica y personalismo|Elección libre y efectos no comunes|Consenso y distintividad|La elección y los efectos no comunes son condiciones principales. Consenso y distintividad pertenecen al modelo de Kelley.",
      "¿Qué orden sigue el observador según Jones y Davis?|Primero intención, luego disposición|Primero disposición, luego intención|Primero consenso, luego disposición|Primero debe pensar que el actor sabía las consecuencias y podía producirlas, y después decide si el acto refleja un rasgo estable.",
      "¿Qué hallaron Jones y Harris (1967) al poner a prueba la teoría?|Se atribuía opinión aun sin elección|La elección no influyó en los juicios|Se atribuía la opinión contraria|La elección influyó, pero se seguía atribuyendo al autor la opinión del texto impuesto, origen del estudio del error fundamental."
    ],
    inc: [
      "Sobre la teoría de Jones y Davis|Explica sobre todo la información acumulada en muchas ocasiones|Describe más cómo deberíamos razonar que cómo razonamos|Favorece la inferencia una conducta poco deseable socialmente|Se ocupa de actos aislados. La información acumulada en muchas ocasiones es el terreno de Kelley."
    ],
    seq: [
      "Inferencia correspondiente|Observar el acto>Atribuir intención>Inferir la disposición"
    ],
    cls: [
      "Factor de Jones y Davis|Condiciones principales: elección libre; efectos no comunes; baja deseabilidad social|Factores motivacionales: relevancia hedónica; personalismo"
    ] },
  { t: "Kelley: covariación y esquemas causales",
    tip: "Kelley propuso dos modelos. Con muchas observaciones, el de covariación (1967) combina consenso, distintividad y consistencia para atribuir a la persona, al estímulo o a las circunstancias, aunque el consenso se infrautiliza (McArthur, 1972). Con una sola observación se usan esquemas causales (1972): causas suficientes múltiples con el principio de descuento, principio de aumento y causas necesarias múltiples. Es un ideal: rara vez se dispone de los tres tipos de información.",
    v: [
      "Principio de covariación=Se atribuye el efecto a la causa presente cuando aparece y ausente cuando no",
      "Consenso=Grado en que otras personas reaccionan igual ante el mismo estímulo",
      "Distintividad=Grado en que la persona reacciona así solo ante ese estímulo y no ante otros",
      "Consistencia=Grado en que la persona reacciona igual ante el estímulo en otros momentos",
      "Esquema causal=Creencia aprendida sobre cómo se combinan las causas para producir un efecto",
      "Principio de descuento=Una causa evidente resta peso a otras causas posibles del mismo efecto",
      "Principio de aumento=La conducta que ocurre pese a una causa inhibidora refuerza la facilitadora",
      "Causas necesarias múltiples=Esquema para efectos extremos que exigen varias causas a la vez"
    ],
    g: [
      "McArthur (1972) halló que la información de ___ se infrautiliza.|consenso|distintividad|consistencia",
      "Con consistencia ___, la conducta se atribuye a las circunstancias.|baja|alta|media",
      "Si un influencer elogia una crema en una publicación patrocinada, se aplica el principio de ___.|descuento|aumento|covariación",
      "Ganar una maratón se explica con un esquema de causas ___ múltiples.|necesarias|suficientes|inhibidoras",
      "Kelley presentó el modelo de covariación en ___ y los esquemas causales en 1972.|1967|1965|1958"
    ],
    tf: [
      "Con consenso alto, distintividad alta y consistencia alta, la conducta se atribuye al estímulo.|V",
      "La distintividad indica si la persona reacciona igual ante el mismo estímulo en distintos momentos.|F|Eso es la consistencia. La distintividad indica si reacciona así solo ante ese estímulo o ante muchos.",
      "Según McArthur (1972), el consenso es la información que más pesa en las atribuciones.|F|Es la que menos pesa: el consenso se infrautiliza frente a la distintividad y la consistencia.",
      "El efecto de sobrejustificación es una aplicación a uno mismo del principio de descuento.|V"
    ],
    q: [
      "Todos los compañeros elogian a una profesora, Leo solo elogia a esta profesora y lo hace siempre. Según Kelley, ¿a qué se atribuye el elogio de Leo?|A la profesora|Al propio Leo|A las circunstancias|Consenso alto, distintividad alta y consistencia alta llevan a una atribución al estímulo.",
      "Iván suele llegar puntual al gimnasio, pero hoy ha llegado tarde. ¿Qué dato hace atribuir su retraso a las circunstancias?|La baja consistencia|El bajo consenso|La alta distintividad|Cuando la conducta no se repite ante el mismo estímulo en otras ocasiones, se atribuye a algo de ese momento concreto.",
      "Una trabajadora denuncia una irregularidad sabiendo que puede perder el empleo y parece muy convencida. ¿Qué esquema se aplica?|Principio de aumento|Principio de descuento|Causas necesarias múltiples|La conducta se produce a pesar de una causa que la inhibe, lo que refuerza la causa facilitadora.",
      "¿Para qué situación propuso Kelley los esquemas causales?|Cuando hay una sola observación|Cuando hay muchas observaciones|Cuando la causa es intencional|Con muchas observaciones se usa la covariación. Con información escasa se recurre a creencias aprendidas sobre cómo se combinan las causas."
    ],
    inc: [
      "Sobre el modelo de Kelley|El principio de descuento pertenece a Jones y Davis|Con consistencia baja se atribuye a las circunstancias|Rara vez se conocen los tres tipos de información|El principio de descuento es de Kelley (1972). Asignarlo a Jones y Davis es una trampa típica del PIR."
    ],
    seq: [],
    cls: [
      "Esquema causal de Kelley|Causas suficientes múltiples: principio de descuento; publicación patrocinada|Principio de aumento: causa inhibidora; denunciar arriesgando el empleo|Causas necesarias múltiples: efectos extremos; ganar una maratón"
    ] },
  { t: "Weiner: dimensiones causales y emoción",
    tip: "Weiner (1986) aplicó la atribución al logro. Toda causa percibida se describe por locus, estabilidad y controlabilidad, y cada dimensión tiene consecuencias propias: el locus afecta a la autoestima, la estabilidad a las expectativas y la controlabilidad a emociones sociales como culpa, ira y compasión. Importa la causa percibida, no la real, y su locus de causalidad no es el locus de control de Rotter.",
    v: [
      "Locus=Dimensión que indica si la causa es interna o externa a la persona",
      "Estabilidad=Dimensión que indica si la causa se mantiene en el tiempo o es pasajera",
      "Controlabilidad=Dimensión que indica si la persona puede modificar la causa",
      "Capacidad=Causa interna y estable del rendimiento",
      "Esfuerzo=Causa interna e inestable, la controlable por excelencia",
      "Dificultad de la tarea=Causa externa y estable del rendimiento",
      "Suerte=Causa externa e inestable del rendimiento",
      "Locus de control=Creencia general de personalidad propuesta por Rotter (1966)"
    ],
    g: [
      "Según Weiner, la estabilidad de la causa influye sobre todo en ___.|las expectativas|la autoestima|la compasión",
      "Tras un resultado aparece primero una emoción general que ___ de la causa.|no depende|depende siempre|procede",
      "Si un compañero que no fue a clase en todo el cuatrimestre pide los apuntes la víspera, sentimos ___.|ira|compasión|culpa",
      "Para Weiner importa la causa ___, no la real.|percibida|probable|objetiva",
      "La reformulación de la indefensión aprendida añadió la dimensión de ___.|globalidad|controlabilidad|intencionalidad"
    ],
    tf: [
      "Según Weiner, la estabilidad de la causa afecta sobre todo a la autoestima.|F|Afecta a las expectativas de futuro. La autoestima depende sobre todo del locus.",
      "Capacidad y esfuerzo son causas internas, pero difieren en estabilidad y en control.|V",
      "El locus de causalidad de Weiner y el locus de control de Rotter son el mismo concepto.|F|El de Weiner es propiedad de cada causa concreta. El de Rotter (1966) es una creencia general de personalidad.",
      "La búsqueda causal se inicia sobre todo si el resultado es negativo, inesperado o importante.|V"
    ],
    q: [
      "Tras suspender, Elena piensa «no valgo para la estadística». ¿Cómo es la causa a la que lo atribuye según Weiner?|Interna, estable e incontrolable|Interna, inestable y controlable|Externa, estable e incontrolable|La falta de capacidad es interna y estable y no depende de la voluntad. Atribuirlo a empezar tarde sería falta de esfuerzo.",
      "Un compañero pide ayuda porque ha faltado por una enfermedad imprevista. ¿Qué predice Weiner?|Compasión y ayuda|Ira y negativa a ayudar|Culpa y abandono|Una causa incontrolable genera compasión y aumenta la ayuda. Si la causa fuera controlable, aparecería ira.",
      "¿Qué dimensión de Weiner se relaciona con el orgullo y la vergüenza?|El locus|La estabilidad|La controlabilidad|El éxito atribuido a causas internas produce orgullo, y el fracaso interno, vergüenza.",
      "¿Qué causa clásica del rendimiento es externa y estable?|La dificultad de la tarea|La falta de esfuerzo|La mala suerte del día|La dificultad es externa y estable. La suerte es externa e inestable, y el esfuerzo, interno e inestable."
    ],
    inc: [
      "Sobre la teoría de Weiner|La controlabilidad influye sobre todo en las expectativas|El locus se relaciona con el orgullo y la vergüenza|La estabilidad se relaciona con la esperanza o desesperanza|La controlabilidad se relaciona con emociones sociales como culpa, ira y compasión. Las expectativas dependen de la estabilidad."
    ],
    seq: [
      "Secuencia atribucional de Weiner|Resultado>Emoción general>Búsqueda causal>Atribución descrita por sus dimensiones>Emociones específicas y expectativas>Conducta posterior"
    ],
    cls: [
      "Dimensión de Weiner|Locus: autoestima; orgullo; vergüenza|Estabilidad: expectativas; esperanza; desesperanza|Controlabilidad: culpa; ira; compasión"
    ] }
] },
{ n: 6, t: "Sesgos de atribución y sus consecuencias", cap: 3, pir: "alta", mods: [
  { t: "El error fundamental de atribución",
    tip: "El error fundamental de atribución (Ross, 1977) es la tendencia a explicar la conducta ajena por disposiciones e infravalorar la situación. Gilbert y Malone (1995) lo llamaron sesgo de correspondencia. Jones y Harris (1967) mostraron que se atribuía al autor la opinión de un ensayo aunque la postura fuera asignada. Se explica por saliencia, desconocimiento de la situación, corrección incompleta y cultura (Morris y Peng, 1994).",
    v: [
      "Error fundamental de atribución=Explicar la conducta ajena por disposiciones infravalorando la situación",
      "Sesgo de correspondencia=Nombre de Gilbert y Malone para inferir rasgos que la situación ya explica",
      "Ross (1977)=Autor que dio nombre al error fundamental",
      "Jones y Harris (1967)=Estudio con ensayos sobre Fidel Castro de postura elegida o asignada",
      "Estudio del concurso=Quien inventaba las preguntas parecía más culto solo por su papel",
      "Saliencia perceptiva=El actor domina el campo visual y la situación es poco visible",
      "Corrección incompleta=El rasgo se infiere rápido y ajustarlo a la situación cuesta y se queda corto",
      "Morris y Peng (1994)=Hallaron más preferencia disposicional en estadounidenses que en chinos"
    ],
    g: [
      "En Jones y Harris, el ensayo trataba sobre ___.|Fidel Castro|la pena de muerte|el aborto",
      "Con la postura asignada, la actitud atribuida seguía el sentido del ensayo, aunque de forma más ___.|moderada|extrema|inversa",
      "En el estudio del concurso, quien ___ las preguntas era juzgado más culto.|inventaba|respondía|leía",
      "La preferencia por causas disposicionales es mayor en las culturas ___.|individualistas|colectivistas|orientales",
      "El sesgo se acentúa cuando el observador está cansado, distraído o con prisa, porque la ___ requiere esfuerzo.|corrección|inferencia|categorización"
    ],
    tf: [
      "En el estudio del concurso, también quienes respondían juzgaban más culto a quien preguntaba.|V",
      "En Jones y Harris, cuando la postura era asignada, los participantes no atribuían ninguna actitud al autor.|F|Seguían atribuyéndole una actitud acorde con el ensayo, aunque más moderada. La situación se tuvo en cuenta, pero no lo suficiente.",
      "Ross (1977) prefirió llamar a este sesgo «sesgo de correspondencia».|F|Ross le dio el nombre de error fundamental. «Sesgo de correspondencia» es la denominación de Gilbert y Malone (1995).",
      "Morris y Peng (1994) hallaron que en culturas más colectivistas se presta más atención al contexto.|V"
    ],
    q: [
      "Un camarero tarda en atender y un cliente concluye que es poco profesional, sin saber que esa noche atiende solo toda la terraza. ¿Qué sesgo comete?|El error fundamental|El error último|El falso consenso|Infravalora la situación y explica la conducta ajena por una disposición. El error último se aplica a grupos.",
      "Según Gilbert y Malone, ¿por qué falla la corrección de la inferencia disposicional?|Requiere esfuerzo y se queda corta|Se aplica antes de inferir el rasgo|Depende solo de la cultura del perceptor|El rasgo se infiere de forma rápida y casi automática. Ajustarlo a la situación requiere esfuerzo, sobre todo con cansancio o prisa.",
      "¿Qué pretendían comprobar inicialmente Jones y Harris (1967)?|Que sin elección hay menos inferencia|Que la cultura modula la atribución|Que el actor domina el campo visual|Querían probar la teoría de Jones y Davis. La elección influyó, pero no tanto como se esperaba.",
      "Fuera del laboratorio, ¿qué consecuencia típica tiene este sesgo?|Culpar de su situación a quien está en paro|Creer que todos comparten nuestras opiniones|Atribuir nuestros éxitos al propio esfuerzo|Se infravalora la situación y se sobrevalora la disposición, también al juzgar a quien ocupa un cargo."
    ],
    inc: [
      "Sobre el error fundamental de atribución|Es universal e idéntico en todas las culturas|Se acentúa cuando el observador tiene prisa|El observador puede desconocer las presiones del actor|Varía con la cultura: la preferencia disposicional es mayor en culturas individualistas (Morris y Peng, 1994)."
    ],
    seq: [
      "Corrección incompleta (Gilbert y Malone)|Observar la conducta>Inferir el rasgo de forma casi automática>Corregir por la situación con esfuerzo"
    ],
    cls: [] },
  { t: "La asimetría actor‑observador",
    tip: "Jones y Nisbett (1971) propusieron que los actores explican su conducta por la situación y los observadores por disposiciones, por la perspectiva perceptiva y la información disponible. Storms (1973) apoyó la explicación perceptiva. Pero el metaanálisis de Malle (2006), con 173 estudios, halló un efecto global prácticamente nulo. Esto no contradice el error fundamental, y parte de las diferencias se deben al sesgo de autoservicio.",
    v: [
      "Asimetría actor-observador=Hipótesis de que el actor se explica por la situación y el observador por rasgos",
      "Jones y Nisbett (1971)=Propusieron la asimetría como extensión del error fundamental",
      "Perspectiva perceptiva=El actor ve la situación y el observador tiene al actor en el centro",
      "Información disponible=El actor conoce su conducta en otras situaciones y el observador no",
      "Storms (1973)=Al verse en vídeo desde el interlocutor, los participantes se atribuían más rasgos",
      "Malle (2006)=Metaanálisis de 173 estudios con un efecto global casi nulo",
      "Tamaño del efecto d=Índice que osciló entre −0,016 y 0,095 en el metaanálisis de Malle",
      "Explicación alternativa=El sesgo de autoservicio, que explica parte de las diferencias halladas"
    ],
    g: [
      "El metaanálisis de Malle (2006) reunió ___ estudios.|173|115|266",
      "Storms (1973) apoyó la explicación ___ de la asimetría.|perceptiva|informativa|motivacional",
      "Según Malle, el tamaño del efecto global de la asimetría es prácticamente ___.|nulo|grande|moderado",
      "Parte de las diferencias halladas pueden deberse al sesgo de ___.|autoservicio|falso consenso|correspondencia",
      "Según Jones y Nisbett, el actor explicaría su propia conducta por la ___.|situación|disposición|cultura"
    ],
    tf: [
      "El metaanálisis de Malle (2006) confirmó la asimetría actor-observador como un efecto general y moderado.|F|Halló un efecto global prácticamente nulo, con d entre −0,016 y 0,095. No puede considerarse una tendencia general.",
      "Que la asimetría sea casi nula no contradice el error fundamental de atribución.|V",
      "Los actores también se explican a menudo por sus rasgos, deseos e intenciones.|V",
      "Storms (1973) halló que, al verse desde el punto de vista del interlocutor, los participantes se atribuían más causas situacionales.|F|Sus atribuciones sobre sí mismos se volvieron más disposicionales, lo que apoyaba la explicación perceptiva."
    ],
    q: [
      "Un manual afirma que es una ley general que explicamos lo nuestro por la situación y lo ajeno por la forma de ser. ¿Qué responde la evidencia?|Que el efecto global es casi nulo|Que es un efecto grande y robusto|Que solo falla en culturas colectivistas|Malle (2006) reunió 173 estudios. La asimetría aparecía en algunos y en otros desaparecía o se invertía.",
      "¿Qué dos razones dieron Jones y Nisbett para la asimetría?|Perspectiva perceptiva e información|Autoestima y motivación del actor|Cultura y deseabilidad de la conducta|El actor ve la situación, no a sí mismo, y sabe cómo varía su conducta. El observador ve al actor y solo esa conducta.",
      "¿Qué sesgo puede explicar parte de las diferencias entre actores y observadores que sí aparecen?|El sesgo de autoservicio|El error último|La falsa singularidad|Ante un fracaso el actor busca causas externas, y ante un éxito, internas. Lo decisivo es si el resultado le favorece o le perjudica.",
      "¿Qué tamaño de efecto halló Malle (2006) para la asimetría?|Entre −0,016 y 0,095|Alrededor de 0,96|Moderado y fiable|Queda por debajo de cualquier umbral de efecto pequeño. El 0,96 corresponde al sesgo de autoservicio."
    ],
    inc: [
      "Sobre la asimetría actor-observador|Malle (2006) la confirmó como una ley general|La propusieron Jones y Nisbett en 1971|Storms (1973) apoyó su explicación perceptiva|Malle halló un efecto global prácticamente nulo: aparecía en algunos estudios y en otros desaparecía o se invertía."
    ],
    seq: [],
    cls: [
      "Fenómeno|Error fundamental: bien documentado; varía con la cultura; Jones y Harris (1967)|Asimetría actor-observador: efecto casi nulo; Malle (2006); Jones y Nisbett (1971)"
    ] },
  { t: "Falso consenso, autoservicio y error último",
    tip: "El falso consenso sobrestima cuántos comparten nuestras opiniones y conductas (Ross, Greene y House, 1977), y la falsa singularidad subestima cuántos igualan nuestras capacidades y virtudes. El sesgo de autoservicio atribuye los éxitos a causas internas y los fracasos a externas (Miller y Ross, 1975) y es grande (Mezulis et al., 2004). Pettigrew (1979) describió el error último, que traslada estos sesgos a los grupos.",
    v: [
      "Falso consenso=Sobrestimar cuántos comparten las propias opiniones y conductas",
      "Falsa singularidad=Subestimar cuántos comparten las propias capacidades y virtudes",
      "Sesgo de autoservicio=Atribuir los éxitos propios a causas internas y los fracasos a externas",
      "Autoensalzamiento=Componente del autoservicio que se apropia de los éxitos",
      "Autoprotección=Componente del autoservicio que se desentiende de los fracasos",
      "Error último de atribución=Patrón que favorece al endogrupo y culpa al exogrupo (Pettigrew, 1979)",
      "Mullen et al. (1985)=Metaanálisis de 115 contrastes que halló un falso consenso moderado",
      "Mezulis et al. (2004)=Metaanálisis de 266 estudios con un autoservicio grande, d de 0,96"
    ],
    g: [
      "En el estudio del cartel, quienes lo llevarían estimaron que aceptaría un ___ de sus compañeros.|64,6 %|35,4 %|68,8 %",
      "El sesgo de autoservicio es menor en personas con ___.|depresión|narcisismo|autoestima alta",
      "La explicación ___ del autoservicio sostiene que un éxito encaja con los planes y el esfuerzo.|cognitiva|motivacional|cultural",
      "Creerse más honrado que la mayoría es un ejemplo de falsa ___.|singularidad|consenso|unanimidad",
      "Si un aficionado dice que la falta dura de un jugador de su equipo fue sin querer, hace una atribución ___.|externa|interna|estable"
    ],
    tf: [
      "El falso consenso se refiere sobre todo a capacidades y virtudes.|F|Se refiere a opiniones, preferencias y conductas. Para capacidades y virtudes aparece la falsa singularidad.",
      "El metaanálisis de Mezulis et al. (2004) halló un sesgo de autoservicio grande.|V",
      "El error último de atribución es el error fundamental aplicado a individuos de otra cultura.|F|Es el autoservicio trasladado a los grupos: favorece al endogrupo y culpa al exogrupo (Pettigrew, 1979).",
      "En el estudio 4 de Ross, Greene y House, con decisión real, el falso consenso se repitió.|V"
    ],
    q: [
      "Nerea cree que casi todos sus compañeros comparten su rechazo al nuevo horario, y también que pocos son tan constantes como ella. ¿Qué sesgos muestra, por orden?|Falso consenso y falsa singularidad|Falsa singularidad y falso consenso|Falso consenso y autoservicio|Para opiniones aparece el falso consenso, y para capacidades y virtudes, la falsa singularidad.",
      "Una aficionada atribuye la entrada dura de un rival a que es un jugador sucio, y la de uno de su equipo a la tensión del partido. ¿Qué sesgo es?|El error último|El error fundamental|El falso consenso|Lo negativo del exogrupo se atribuye a su forma de ser, y lo del endogrupo, a las circunstancias. El error fundamental se aplica a individuos.",
      "¿Qué dos componentes suelen distinguirse en el sesgo de autoservicio?|Autoensalzamiento y autoprotección|Autoverificación y autoafirmación|Falso consenso y falsa singularidad|El autoensalzamiento se apropia de los éxitos, y la autoprotección se desentiende de los fracasos.",
      "¿En qué muestras era menor el sesgo de autoservicio según Mezulis et al. (2004)?|Depresión y algunas asiáticas|Narcisismo y algunas europeas|Varones y algunas estadounidenses|Encaja con el estilo atribucional depresivo, que explica los fracasos por causas internas."
    ],
    inc: [
      "Sobre estos sesgos|El falso consenso es un efecto grande, con d de 0,96|El autoservicio tiene una explicación motivacional|La falsa singularidad afecta a capacidades y virtudes|El falso consenso es fiable y moderado (Mullen et al., 1985). El d de 0,96 corresponde al sesgo de autoservicio."
    ],
    seq: [],
    cls: [
      "Sesgo|Falso consenso: opiniones; errores; preferencias|Falsa singularidad: capacidades; virtudes; habilidad"
    ] },
  { t: "Consecuencias de las atribuciones",
    tip: "Las atribuciones influyen en lo que sentimos, esperamos y hacemos. El estilo atribucional depresivo explica los fracasos por causas internas, estables y globales (Abramson, Seligman y Teasdale, 1978). En las parejas con malestar, lo negativo del otro se atribuye a causas internas, estables y globales (Bradbury y Fincham, 1990). La creencia en un mundo justo (Lerner, 1980) lleva a culpar a las víctimas.",
    v: [
      "Estilo atribucional depresivo=Explicar los fracasos por causas internas, estables y globales",
      "Globalidad=Dimensión por la que el problema se extiende a otros ámbitos de la vida",
      "Reentrenamiento atribucional=Intervención que enseña a revisar las explicaciones de los fracasos",
      "Bradbury y Fincham (1990)=Revisión que relacionó las atribuciones en la pareja con la satisfacción",
      "Creencia en un mundo justo=Convicción de que cada uno recibe lo que merece (Lerner, 1980)",
      "Culpabilizar a la víctima=Suponer que quien sufre una desgracia inmerecida algo hizo para merecerla",
      "Abramson, Seligman y Teasdale=Reformularon en 1978 la teoría de la indefensión aprendida",
      "Parejas satisfechas=Explican la conducta del otro con el patrón inverso al de las parejas con malestar"
    ],
    g: [
      "Pensar «me pasa en todo» tras un fracaso es una atribución ___.|global|estable|interna",
      "El estilo atribucional depresivo es el patrón ___ del sesgo de autoservicio.|contrario|idéntico|reforzado",
      "En las parejas con malestar, las conductas positivas del otro se atribuyen a causas ___.|externas|internas|globales",
      "La creencia en un mundo justo fue descrita por ___ (1980).|Lerner|Weiner|Pettigrew",
      "Si se percibe que la situación de alguien depende de él, aparece la ___ y disminuye la ayuda.|ira|culpa|compasión"
    ],
    tf: [
      "En el estilo atribucional depresivo, la dimensión estable genera desesperanza sobre el futuro.|V",
      "Pensar «este tema lo preparé mal, pero el siguiente irá mejor» es una atribución interna, estable y global.|F|Es interna, pero inestable y específica, el patrón asociado a menor vulnerabilidad a la depresión.",
      "La creencia en un mundo justo da seguridad, pero puede llevar a culpar a las víctimas.|V",
      "En las parejas con malestar, las conductas negativas del otro se atribuyen a causas externas y pasajeras.|F|Se atribuyen a causas internas, estables y globales. Las externas y pasajeras se reservan para las conductas positivas."
    ],
    q: [
      "Tras suspender, Sergio piensa «soy un inútil y nunca sacaré la carrera». ¿Qué atribución hace?|Interna, estable y global|Interna, inestable y específica|Externa, estable y global|«Soy un inútil» es interna y global, y «nunca», estable. Es el estilo atribucional depresivo.",
      "Tras conocer un robo, un vecino comenta que la víctima no tendría que haber vuelto sola a esas horas. ¿Qué explica mejor su reacción?|La creencia en un mundo justo|El sesgo de autoservicio|El efecto de falso consenso|Suponer que la víctima algo hizo para merecerlo mantiene la creencia de que cada uno recibe lo que merece (Lerner, 1980).",
      "¿En qué idea de Weiner se basa el reentrenamiento atribucional?|La causa percibida importa y puede cambiar|La capacidad es estable e incontrolable|La suerte explica la mayoría de fracasos|Lo que importa es la causa percibida, y esta puede revisarse y cambiar.",
      "«Hoy está amable porque quiere algo.» ¿En qué tipo de pareja es típica esta atribución?|Una pareja con malestar|Una pareja satisfecha|Una pareja reciente|Atribuir lo positivo del otro a causas externas y pasajeras es típico de las parejas con malestar (Bradbury y Fincham, 1990)."
    ],
    inc: [
      "Sobre el estilo atribucional depresivo|Atribuye los éxitos a causas internas y estables|Atribuye los fracasos a causas globales|Se asocia a mayor vulnerabilidad a la depresión|Se refiere a los sucesos negativos: los fracasos se atribuyen a causas internas, estables y globales."
    ],
    seq: [],
    cls: [
      "Dimensión del estilo depresivo|Interna: «es culpa mía»; afecta a la autoestima|Estable: «siempre será así»; desesperanza|Global: «me pasa en todo»; se extiende a otros ámbitos"
    ] }
] },
{ n: 7, t: "El autoconcepto", cap: 4, pir: "media", mods: [
  { t: "Conciencia de uno mismo",
    tip: "El autoconcepto es el conjunto de creencias sobre los propios rasgos, capacidades, roles, valores y pertenencias, y tiene un origen social (el yo espejo de Cooley, Mead). Es multidimensional, dinámico y cultural, y se organiza en autoesquemas (Markus, 1977). La autoconciencia objetiva (Duval y Wicklund, 1972) lleva a compararse con estándares, y Carver y Scheier (1981) distinguieron la privada de la pública.",
    v: [
      "Autoconcepto=Creencias de una persona sobre sus rasgos, capacidades, roles, valores y pertenencias",
      "Yo espejo=Idea de Cooley de que nos vemos como creemos que nos ven los demás",
      "Autoconcepto de trabajo=Parte del conocimiento sobre uno mismo que está activa en cada momento",
      "Self interdependiente=Definido por relaciones y roles, más común en culturas colectivistas",
      "Autoesquema=Estructura de conocimiento sobre una faceta propia relevante que guía el procesamiento",
      "Aesquemático=Persona para quien una dimensión no es importante y no muestra ventaja al juzgarla",
      "Autoconciencia objetiva=Estado en que la persona se toma como objeto de atención y se compara con estándares",
      "Autoconciencia pública=Atención a la imagen que uno ofrece a los demás"
    ],
    g: [
      "William James distinguió el yo que conoce y el ___ conocido.|mí|self|ego",
      "Según Mead (1934), el self surge en la ___.|interacción|introspección|herencia",
      "Markus y Kitayama (1991) asociaron el self ___ con las culturas individualistas.|independiente|interdependiente|colectivo",
      "La autoconciencia ___ lleva a una conducta más coherente con las propias actitudes.|privada|pública|colectiva",
      "Carver y Scheier describieron la autoconciencia como un bucle de retroalimentación de tipo ___.|TOTE|TPB|ELM"
    ],
    tf: [
      "Según Markus (1977), tenemos autoesquemas de casi todas nuestras características.|F|Solo de lo que nos importa o en lo que destacamos. Las personas aesquemáticas en una dimensión no muestran ventaja al procesarla.",
      "Que critiquen un dibujo puede afectar a cómo uno se ve como artista sin cambiar apenas su valoración global.|V",
      "Según Duval y Wicklund, ante una discrepancia con el estándar la persona intenta reducirla o desvía la atención.|V",
      "La autoconciencia pública se centra en los pensamientos, emociones y valores propios.|F|Eso es la privada. La pública atiende a la imagen que uno ofrece a los demás y a las normas sociales."
    ],
    q: [
      "Antes de hablar en público, Laura se ve en el espejo del pasillo y empieza a compararse con cómo querría presentarse. Según Duval y Wicklund, ¿qué estado se ha activado?|La autoconciencia objetiva|La desindividuación|La comparación descendente|Verse en un espejo vuelve la atención hacia uno mismo y lleva a comparar el estado actual con los estándares propios.",
      "Markus (1977) halló que las personas esquemáticas en una dimensión…|rechazaban con más firmeza la información contraria|juzgaban más despacio los adjetivos relacionados|recordaban menos ejemplos de su propia conducta|Además juzgaban más rápido los adjetivos relacionados y recordaban más ejemplos de su conducta.",
      "¿Qué autores distinguieron el self independiente del interdependiente?|Markus y Kitayama|Carver y Scheier|Duval y Wicklund|Markus y Kitayama (1991) vincularon el self independiente a culturas individualistas y el interdependiente a colectivistas.",
      "Según Carver y Scheier, ¿qué autoconciencia lleva a ajustarse más a lo que se espera y a cuidar la imagen?|La pública|La privada|La interiorizada|La pública usa como estándares las normas sociales y las expectativas ajenas. La privada se guía por estándares personales."
    ],
    inc: [
      "Sobre el autoconcepto|Es estable y no cambia con los roles ni el contexto|Incluye facetas académicas, físicas, sociales y morales|Su componente evaluativo es la autoestima|Es dinámico: cambia con la experiencia, los roles y el contexto, y en cada momento solo una parte está activa."
    ],
    seq: [
      "Bucle de Carver y Scheier|Comparar la conducta con el estándar>Actuar para reducir la diferencia>Volver a comprobar>Salir cuando encajan"
    ],
    cls: [
      "Autoconciencia|Privada: pensamientos propios; estándares interiorizados; coherencia con las actitudes|Pública: imagen ante los demás; normas sociales; cuidado de la imagen"
    ] },
  { t: "Autopercepción y comparación social",
    tip: "Según Bem, cuando los estados internos son débiles o ambiguos inferimos nuestras actitudes de la propia conducta, como haría un observador. De ahí el efecto de sobrejustificación (Lepper, Greene y Nisbett, 1973). Fazio, Zanna y Cooper (1977) repartieron el terreno con la disonancia. Festinger (1954) propuso que, sin criterio objetivo, nos comparamos con otros similares, de forma ascendente o descendente.",
    v: [
      "Autopercepción=Inferir las propias actitudes de la conducta cuando los estados internos son débiles",
      "Sobrejustificación=Pérdida de interés intrínseco tras una recompensa externa esperada por la tarea",
      "Latitud de aceptación=Conductas que la persona ya veía como aceptables",
      "Comparación social=Evaluar opiniones y capacidades frente a otros cuando falta un criterio objetivo",
      "Comparación ascendente=Compararse con alguien que está mejor, para inspirarse o fijar metas",
      "Comparación descendente=Compararse con alguien que está peor, a menudo para proteger la autoestima",
      "Wills (1981)=Mostró que la comparación con quien está peor aumenta ante una amenaza a la autoestima",
      "Festinger (1954)=Propuso que nos evaluamos frente a otros similares en lo relevante"
    ],
    g: [
      "En Lepper, Greene y Nisbett, dibujaron menos después los niños que recibieron un premio ___.|prometido|inesperado|simbólico",
      "Según Festinger, preferimos compararnos con personas ___ en lo relevante.|similares|superiores|distintas",
      "Según Fazio, Zanna y Cooper, la ___ explica los cambios tras conductas dentro de la latitud de aceptación.|autopercepción|disonancia|autoafirmación",
      "La comparación ascendente motiva si la meta parece ___.|alcanzable|lejana|imposible",
      "Bem planteó la autopercepción como rival de la teoría de la ___.|disonancia|autoafirmación|comparación"
    ],
    tf: [
      "Según Bem, conocemos nuestras actitudes de un modo distinto a como conocemos las de los demás.|F|Cuando los estados internos son débiles o ambiguos, las inferimos de la conducta igual que haríamos con otra persona.",
      "El efecto de sobrejustificación aparece sobre todo con recompensas esperadas y ligadas a la mera realización de la tarea.|V",
      "Según Wills (1981), la comparación descendente se usa sobre todo cuando la autoestima está amenazada.|V",
      "En Lepper, Greene y Nisbett (1973), los niños del diploma por sorpresa dibujaron después menos que los que no recibieron nada.|F|Dibujaron menos solo los del premio prometido: el efecto aparece con recompensas esperadas."
    ],
    q: [
      "A Hugo le encanta tocar la guitarra. Sus padres empiezan a pagarle cada vez que practica, y meses después apenas toca si no hay pago. Según la autopercepción, ¿qué ha pasado?|Reinterpreta que toca por el pago|Siente disonancia por cobrar|Se compara con otros guitarristas|Es la sobrejustificación: la recompensa esperada lleva a atribuir la conducta a una causa externa, como en Lepper, Greene y Nisbett (1973).",
      "Según Fazio, Zanna y Cooper (1977), ¿cuándo explica mejor la autopercepción el cambio de actitud?|Tras conductas en la latitud de aceptación|Tras conductas claramente contraactitudinales|Tras conductas impuestas con amenazas|Las conductas claramente contraactitudinales generan activación desagradable y son terreno de la disonancia.",
      "Tras un despido, Rosa piensa en conocidos que lo están pasando peor y se siente aliviada. ¿Qué hace?|Una comparación descendente|Una comparación ascendente|Una autoafirmación|Compararse con quien está peor protege el ánimo, sobre todo cuando la autoestima está amenazada (Wills, 1981).",
      "Marta se descubre eligiendo siempre el documental en lugar de la película de acción y concluye: «parece que me interesa la ciencia». ¿Qué teoría lo explica?|La autopercepción de Bem|La comparación social|La disonancia cognitiva|Con estados internos débiles, inferimos nuestras actitudes de la propia conducta, igual que haría un observador."
    ],
    inc: [
      "Sobre la comparación social|Se hace preferentemente con personas muy distintas|Se usa cuando falta un criterio objetivo|La ascendente puede inspirar o hacer sentir inferior|Festinger (1954) propuso que nos comparamos preferentemente con personas similares en lo relevante."
    ],
    seq: [],
    cls: [
      "Tipo de comparación|Ascendente: alguien que está mejor; inspirar; sentirse inferior|Descendente: alguien que está peor; proteger el ánimo; conformarse"
    ] },
  { t: "Los límites de la introspección",
    tip: "Nisbett y Wilson (1977) mostraron que tenemos poco acceso a los procesos que causan nuestra conducta. En el estudio de las medias idénticas, los transeúntes preferían el par de la derecha, daban razones de calidad y negaban la posición. Explicamos con teorías causales implícitas y confabulamos con convicción. La introspección accede bien a los contenidos, no a las causas, y analizar razones puede empeorar decisiones (Wilson et al., 1993).",
    v: [
      "Efecto de posición=Preferencia por los pares de la derecha en el estudio de las medias",
      "Teoría causal implícita=Idea de lo que suele explicar una conducta así, usada en vez de la causa real",
      "Confabular=Dar con total convicción una explicación que no corresponde a la causa real",
      "Contenidos mentales=Lo que se piensa, se siente o se atiende en un momento, bien accesible",
      "Causas de la conducta=Por qué se eligió o qué influyó, poco accesible a la introspección",
      "Wilson et al. (1993)=Estudio en que analizar razones antes de elegir un póster redujo la satisfacción",
      "Nisbett y Wilson (1977)=Revisión que mostró el escaso acceso a los procesos que causan la conducta",
      "Observador externo=Quien, adivinando, daría las mismas explicaciones que el propio actor"
    ],
    g: [
      "En el estudio de las medias, los pares más elegidos eran los situados a la ___.|derecha|izquierda|centro",
      "Los cuatro pares de medias expuestos eran ___.|idénticos|distintos|de marcas conocidas",
      "La introspección da buen acceso a los ___ de la mente.|contenidos|procesos|motivos",
      "En Wilson et al. (1993), quienes analizaron sus razones quedaron ___ satisfechos con el póster.|menos|más|igual de",
      "Al explicar su conducta, las personas a menudo aplican teorías causales ___.|implícitas|explícitas|científicas"
    ],
    tf: [
      "En el estudio de las medias, cuando se sugería la influencia de la posición, los participantes la reconocían.|F|La negaban. Daban razones sobre la calidad o el tacto y casi ninguno mencionaba la posición.",
      "Las explicaciones de los participantes coincidían con las que daría un observador externo que se limitara a adivinar.|V",
      "Según Nisbett y Wilson, las personas se sienten inseguras al explicar sus elecciones.|F|No se sienten inseguras: confabulan con total convicción.",
      "Preguntar a alguien por qué lo hizo no sustituye a manipular la causa en un experimento.|V"
    ],
    q: [
      "Álvaro jura que elige restaurante por la calidad de la comida, pero casi siempre acaba en el más cercano al metro. ¿Qué ilustra?|La explicación sincera no es la causa|La introspección accede bien a las causas|Sus contenidos mentales son inaccesibles|Su explicación es una reconstrucción plausible. El patrón de su conducta revela una causa probable distinta.",
      "¿Qué falla según Nisbett y Wilson?|El acceso a las causas de la conducta|El acceso a lo que se piensa ahora|El acceso a lo que se está sintiendo|La introspección accede bien a los contenidos del momento. Lo que falla es saber por qué elegimos o qué nos influyó.",
      "¿Por qué empeoraba la elección del póster al analizar las razones?|Primaban aspectos fáciles de verbalizar|Se dejaban llevar por la posición del póster|Pensaban más en lo que opinarían los demás|Se guiaban por aspectos fáciles de explicar, aunque no fueran los que más les importaban.",
      "Una explicación dada por introspección será correcta cuando…|la teoría causal plausible lo sea|la persona se sienta muy segura|la persona tenga autoestima alta|Se aplica una teoría causal implícita: si es acertada, la explicación también. La seguridad no garantiza nada, porque se confabula con convicción."
    ],
    inc: [
      "Sobre Nisbett y Wilson (1977)|La introspección no accede a ningún contenido|Las personas confabulan con total convicción|Aplicamos teorías causales implícitas para explicarnos|La introspección accede bien a los contenidos, como qué pienso o siento. Lo que falla es el acceso a las causas."
    ],
    seq: [],
    cls: [
      "Acceso por introspección|Bueno: qué pienso; qué siento; en qué me fijo|Escaso: por qué elegí; por qué me cae bien alguien; qué me influyó"
    ] },
  { t: "Discrepancias del self y foco regulador",
    tip: "Higgins (1987) distingue el self real, el ideal y el debido, que funcionan como guías. La discrepancia real-ideal supone ausencia de resultados positivos y produce abatimiento (tristeza, decepción), y la real-debido, posible presencia de negativos y agitación (ansiedad, culpa). En el foco regulador (Higgins, 1998), la promoción se orienta a ideales, ganancias y aproximación, y la prevención, a deberes, pérdidas y evitación.",
    v: [
      "Self real=Atributos que la persona cree poseer",
      "Self ideal=Atributos que querría poseer, sus esperanzas y aspiraciones",
      "Self debido=Atributos que cree que debería poseer, sus deberes y obligaciones",
      "Guías del self=Estándares ideal y debido con los que se compara el self real",
      "Discrepancia real-ideal=Ausencia de resultados positivos, asociada a tristeza y decepción",
      "Discrepancia real-debido=Posible presencia de resultados negativos, asociada a ansiedad y culpa",
      "Foco de promoción=Sistema orientado al crecimiento, sensible a ganancias y con aproximación",
      "Foco de prevención=Sistema orientado a la seguridad, sensible a pérdidas y con evitación"
    ],
    g: [
      "La discrepancia real-ideal se asocia con emociones de ___.|abatimiento|agitación|vergüenza",
      "En el foco de prevención, lograr la meta produce ___.|calma|alegría|orgullo",
      "Higgins propuso la teoría del foco regulador en ___.|1998|1987|1972",
      "El foco de promoción se basa en la necesidad de crecimiento y ___.|logro|seguridad|protección",
      "Plantear un examen final como algo que no se puede suspender refleja un foco de ___.|prevención|promoción|logro"
    ],
    tf: [
      "La discrepancia real-ideal se asocia sobre todo con ansiedad y culpa.|F|Se asocia con abatimiento: tristeza y decepción. La ansiedad y la culpa corresponden a la discrepancia real-debido.",
      "Cada dominio del self puede considerarse desde el punto de vista propio o desde el de otra persona significativa.|V",
      "El foco de prevención se apoya en los ideales y aspiraciones de la persona.|F|Se apoya en deberes y obligaciones. Los ideales guían el foco de promoción.",
      "El foco regulador depende de diferencias individuales y también del contexto.|V"
    ],
    q: [
      "Dos opositoras suspenden el mismo examen. Para Sara aprobar era su sueño, y para Nuria, lo que su familia esperaba tras años de esfuerzo. ¿Qué siente cada una según Higgins?|Sara desánimo, y Nuria nervios y culpa|Sara nervios y culpa, y Nuria desánimo|Ambas, sobre todo nervios y culpa|Sara se compara con su self ideal (abatimiento), y Nuria, con un self debido desde el punto de vista de su familia (agitación).",
      "¿Qué estrategia prefiere una persona con foco de promoción?|Buscar oportunidades|No cometer errores|Evitar las pérdidas|La promoción usa estrategias de aproximación. No cometer errores y evitar pérdidas son propios de la prevención.",
      "¿Qué añade Higgins a la idea de Duval y Wicklund?|El tipo de discrepancia predice la emoción|Comparar con un estándar produce malestar|El malestar lleva a desviar la atención|Duval y Wicklund ya decían que la discrepancia con un estándar produce malestar. Higgins añade que su tipo predice la emoción.",
      "Una persona sensible a la presencia o ausencia de pérdidas, cuando falla, siente sobre todo…|agitación|abatimiento|alegría|Es un foco de prevención. Si falla, aparece agitación, y si logra la meta, calma o alivio."
    ],
    inc: [
      "Sobre el foco regulador|La promoción es sensible a las pérdidas|La prevención busca seguridad y protección|La promoción se asocia con alegría si se logra|La promoción es sensible a la presencia o ausencia de ganancias. Las pérdidas son lo propio de la prevención."
    ],
    seq: [],
    cls: [
      "Foco regulador|Promoción: ideales; ganancias; aproximación; alegría|Prevención: deberes; pérdidas; evitación; alivio"
    ] }
] },
{ n: 8, t: "Motivos, identidad social y autoestima", cap: 4, pir: "media", mods: [
  { t: "Para qué buscamos conocernos",
    tip: "Se distinguen tres motivos del self: valoración (exactitud), verificación (confirmar lo que uno ya cree, Swann, 1983) y ensalzamiento (verse bien). Sedikides (1993) halló que el ensalzamiento es el más fuerte, seguido de la verificación, y que la valoración queda en último lugar. Steele (1988) propuso que protegemos la integridad global del self, de modo que afirmar una faceta valiosa reduce la defensa ante una amenaza.",
    v: [
      "Valoración=Motivo de conocerse con exactitud aunque la verdad sea desagradable",
      "Autoverificación=Motivo de confirmar la imagen de uno mismo, aunque sea negativa",
      "Autoensalzamiento=Motivo de verse bien y sentirse valioso aunque no sea del todo exacto",
      "Información diagnóstica=Datos que informan de cómo es uno, sean buenos o malos",
      "Swann (1983)=Autor de la teoría sobre la búsqueda de coherencia con el autoconcepto",
      "Autoafirmación=Reforzar una faceta valiosa del self ante una amenaza a otra",
      "Steele (1988)=Propuso que lo protegido es la integridad global del self",
      "Sedikides (1993)=Enfrentó los tres motivos haciendo elegir preguntas sobre los propios rasgos"
    ],
    g: [
      "Según Sedikides (1993), el segundo motivo en fuerza fue la ___.|verificación|valoración|autoafirmación",
      "Hacer un test de nivel antes de matricularse en un curso refleja el motivo de ___.|valoración|verificación|ensalzamiento",
      "La autoafirmación es también una explicación alternativa de la ___.|disonancia|autopercepción|sobrejustificación",
      "Cuando hay que tomar una decisión con consecuencias, como elegir carrera, gana peso la necesidad de ___.|exactitud|coherencia|ensalzamiento",
      "Las personas con imagen negativa de sí mismas tienden a preferir parejas que las ven de forma ___.|negativa|positiva|neutra"
    ],
    tf: [
      "En los experimentos de Sedikides (1993), la valoración fue el motivo más fuerte.|F|Fue el más débil. El ensalzamiento resultó el más fuerte, seguido de la verificación.",
      "La autoverificación puede llevar a buscar información que confirme una imagen negativa de uno mismo.|V",
      "Según Steele, lo que las personas protegen es cada faceta concreta del self por separado.|F|Protegen la integridad global del self: afirmar otra faceta valiosa reduce la necesidad de defenderse.",
      "Los tres motivos del self no se excluyen, y el contexto modula su peso.|V"
    ],
    q: [
      "Tras una crítica dura en el trabajo, Irene escribe primero sobre la honestidad, un valor central para ella, y luego reacciona con menos actitud defensiva. ¿Qué teoría lo explica?|La autoafirmación|La autoverificación|El sociómetro|Afirmar una faceta valiosa protege la integridad global del self y reduce la necesidad de defenderse (Steele, 1988).",
      "Pablo se considera desordenado y busca amigos que se lo confirmen, aunque no le guste. ¿Qué motivo actúa?|La verificación|El ensalzamiento|La valoración|Buscar coherencia con el autoconcepto, aunque sea negativo, es autoverificación (Swann, 1983).",
      "¿Qué orden de fuerza halló Sedikides (1993)?|Ensalzamiento, verificación, valoración|Valoración, verificación, ensalzamiento|Verificación, ensalzamiento, valoración|Las personas preferían explorar sus rasgos positivos y centrales y evitaban profundizar en los negativos.",
      "Según Swann, ¿por qué buscamos autoverificarnos?|Un self estable hace el mundo predecible|Una imagen positiva protege de la ansiedad|La información exacta mejora las decisiones|Un autoconcepto estable hace el mundo predecible y las interacciones más fluidas."
    ],
    inc: [
      "Sobre los motivos del self|La verificación busca solo lo favorable|La valoración busca información diagnóstica|El ensalzamiento busca verse bien y valioso|La verificación busca información coherente con el autoconcepto, sea positiva o negativa. La favorable la busca el ensalzamiento."
    ],
    seq: [],
    cls: [
      "Motivo del self|Valoración: ¿cómo soy de verdad?; información diagnóstica|Verificación: ¿soy como creo que soy?; coherencia con el autoconcepto|Ensalzamiento: ¿soy valioso?; información favorable"
    ] },
  { t: "Identidad social y grupo mínimo",
    tip: "La teoría de la identidad social (Tajfel y Turner, 1979) distingue la identidad personal de la social, que procede de pertenecer a grupos. En el grupo mínimo, una categorización trivial y sin interacción bastaba para el favoritismo endogrupal, y muchos preferían maximizar la diferencia. El proceso va de la categorización a la distintividad positiva y, si la identidad es negativa, caben la movilidad individual, la creatividad social o la competición social.",
    v: [
      "Identidad social=Parte del autoconcepto que procede de pertenecer a grupos y de su valor emocional",
      "Identidad personal=Parte del autoconcepto basada en rasgos y relaciones propios",
      "Grupo mínimo=Paradigma en que una categorización trivial basta para el favoritismo endogrupal",
      "Favoritismo endogrupal=Tratar mejor al propio grupo que al ajeno",
      "Distintividad positiva=Búsqueda de una comparación favorable para el propio grupo",
      "Movilidad individual=Abandonar el grupo cuando sus fronteras son permeables",
      "Creatividad social=Cambiar la dimensión de comparación o su valor",
      "Despersonalización=Percibirse a uno y a los otros como ejemplos intercambiables del grupo"
    ],
    g: [
      "En el grupo mínimo, los grupos se formaron según la supuesta preferencia por cuadros de Klee o de ___.|Kandinsky|Picasso|Miró",
      "Muchos participantes preferían ___ la diferencia a favor de su grupo, aunque ganara menos en términos absolutos.|maximizar|reducir|igualar",
      "Reivindicar mejoras colectivas mediante la movilización es una estrategia de ___ social.|competición|creatividad|movilidad",
      "La teoría de la autocategorización la desarrollaron Turner et al. en ___.|1987|1979|1971",
      "Ocultar el acento de origen para «pasar» por otro grupo es un caso de movilidad ___.|individual|social|colectiva"
    ],
    tf: [
      "En el paradigma del grupo mínimo, el favoritismo solo aparecía tras una historia de conflicto entre los grupos.|F|Bastaba la mera categorización: no había interacción, ni historia de conflicto, ni ganancia personal.",
      "Los participantes repartían puntos canjeables por dinero entre miembros anónimos de ambos grupos.|V",
      "Según la autocategorización, cuando una identidad social se vuelve saliente la persona adopta las normas del grupo.|V",
      "La creatividad social consiste en disputar directamente la posición del grupo.|F|Eso es la competición social. La creatividad social cambia la dimensión de comparación o su valor."
    ],
    q: [
      "Los estudiantes de un campus pequeño, peor situado en los rankings, presumen de que allí el trato con el profesorado es mucho más cercano. ¿Qué estrategia usan?|Creatividad social|Competición social|Movilidad individual|Cambian la dimensión de comparación por otra en la que su grupo sale favorecido.",
      "Una aficionada se siente «yo» en la oficina y «nosotros» en el estadio, ante el rival. ¿Qué concepto lo explica?|La saliencia de una identidad|La movilidad individual|El efecto mejor que la media|Según la autocategorización, el contexto hace saliente una identidad social y produce despersonalización.",
      "¿Qué buscaban averiguar Tajfel et al. (1971)?|Las condiciones mínimas para discriminar|El efecto del conflicto sobre los grupos|Cómo se forma la identidad personal|Querían saber qué condiciones mínimas bastaban para que apareciera discriminación entre grupos.",
      "¿Qué demuestra el paradigma del grupo mínimo?|Basta categorizar para favorecer al endogrupo|Hace falta competir para favorecer al endogrupo|Hace falta conocerse para favorecer al endogrupo|Sin contacto, sin conflicto y sin ganancia personal, la mera categorización producía favoritismo endogrupal."
    ],
    inc: [
      "Sobre el grupo mínimo|Los miembros se conocían antes de repartir|Los criterios de agrupación eran triviales|Se usaron matrices de recompensas|No conocían a los otros miembros ni interactuaban con ellos: bastaba la mera categorización."
    ],
    seq: [
      "Proceso de la identidad social|Categorización>Identificación>Comparación social>Distintividad positiva"
    ],
    cls: [
      "Estrategia ante una identidad negativa|Movilidad individual: abandonar el grupo; ocultar el acento|Creatividad social: cambiar la dimensión de comparación; «aquí se vive mejor»|Competición social: disputar la posición del grupo; movilización colectiva"
    ] },
  { t: "La autoestima",
    tip: "La autoestima es la evaluación global de uno mismo, el componente evaluativo del autoconcepto, con niveles global, específicos, rasgo y estado. Se mide sobre todo con la escala de Rosenberg (1965). El sociómetro (Leary et al., 1995) la ve como indicador de aceptación social, y el manejo del terror, como amortiguador ante la mortalidad. Baumeister et al. (2003) concluyeron que se asocia a felicidad e iniciativa, pero no causa el rendimiento.",
    v: [
      "Autoestima=Evaluación global, positiva o negativa, que una persona hace de sí misma",
      "Autoestima específica=Valoración de una faceta concreta, como la física o la académica",
      "Autoestima estado=Oscilación del momento, por ejemplo tras un rechazo o un éxito",
      "Escala de Rosenberg=Diez afirmaciones sobre la valoración global, la mitad en sentido negativo",
      "Teoría del sociómetro=La autoestima como indicador interno de aceptación social",
      "Manejo del terror=Sentirse valioso amortigua la ansiedad de saberse mortal",
      "Baumeister et al. (2003)=Revisión con conclusiones modestas sobre lo que explica la autoestima",
      "Ítems invertidos=Afirmaciones negativas que se recodifican antes de sumar"
    ],
    g: [
      "La escala de Rosenberg consta de ___ afirmaciones.|diez|veinte|cinco",
      "Las puntuaciones medias en la escala de Rosenberg se sitúan ___ del punto medio.|por encima|por debajo|a la altura",
      "La teoría del sociómetro compara la autoestima con el indicador de ___ de un coche.|combustible|velocidad|temperatura",
      "Según Baumeister et al., la autoestima alta se relaciona claramente con la ___.|felicidad|violencia|productividad",
      "La teoría del manejo del terror la propusieron Greenberg, Pyszczynski y ___ (1986).|Solomon|Leary|Swann"
    ],
    tf: [
      "Según Baumeister et al. (2003), la autoestima alta causa un mejor rendimiento escolar.|F|La correlación es modesta y no causal. Parte va en sentido inverso: sacar buenas notas eleva la autoestima.",
      "En los experimentos, ser excluido hace bajar la autoestima del momento.|V",
      "Según Baumeister et al. (2003), la autoestima baja es una causa importante de la violencia.|F|La revisión concluyó que la autoestima baja no es la causa de la agresión.",
      "Las personas con autoestima alta actúan más y persisten más tras un fracaso.|V"
    ],
    q: [
      "Un colegio duda entre dos programas: repetir a los alumnos que «son geniales» o enseñarles técnicas de estudio. ¿Cuál mejorará más probablemente las notas?|El de técnicas de estudio|El de mensajes de ánimo|Los dos por igual|Elevar la autoestima por sí sola no mejora el rendimiento. Mejorar las competencias sí, y la autoestima suele subir después.",
      "¿Qué función atribuye a la autoestima la teoría del sociómetro?|Indicar el grado de aceptación social|Amortiguar la ansiedad ante la muerte|Causar el éxito académico y laboral|Avisa cuando la aceptación de los demás baja. La defensa ante la mortalidad corresponde al manejo del terror.",
      "Alguien se valora mucho como amigo y poco por su aspecto. ¿Qué ilustra?|Autoestimas específicas distintas|Una autoestima estado inestable|Un sesgo de autoservicio|Las autoestimas específicas valoran facetas concretas y pueden diferir entre sí y de la global.",
      "¿Cómo se explica parte de la correlación entre autoestima y rendimiento?|Las buenas notas elevan la autoestima|La autoestima alta mejora las notas|Ambas dependen de la inteligencia|Parte de la relación va en sentido inverso: el éxito eleva la autoestima, no al revés."
    ],
    inc: [
      "Sobre la autoestima|Elevarla por sí sola mejora las notas|La escala de Rosenberg es la medida más usada|Distingue un nivel global y otros específicos|Los programas que solo elevan la autoestima no mejoran el rendimiento. Lo que funciona es mejorar las competencias."
    ],
    seq: [],
    cls: [
      "Teoría de la autoestima|Sociómetro: Leary et al. (1995); aceptación social; indicador de combustible|Manejo del terror: Greenberg, Pyszczynski y Solomon (1986); conciencia de la mortalidad; visión cultural del mundo"
    ] },
  { t: "Las ilusiones positivas",
    tip: "Taylor y Brown (1988) describieron tres ilusiones positivas: autovaloración inflada (efecto mejor que la media), ilusión de control (Langer, 1975) y optimismo irreal (Weinstein, 1980). Sostuvieron que favorecen el bienestar y citaron el realismo depresivo (Alloy y Abramson, 1979). Las críticas apuntan al grado, el ámbito y la medida, y la síntesis razonable es que lo adaptativo es un sesgo positivo ligero.",
    v: [
      "Efecto mejor que la media=Considerarse por encima de la media en cualidades deseables",
      "Ilusión de control=Sobrestimar la propia influencia sobre sucesos que dependen del azar",
      "Optimismo irreal=Creer que lo bueno es más probable y lo malo menos para uno que para los demás",
      "Realismo depresivo=Estimación más exacta del control en personas con síntomas depresivos",
      "Taylor y Brown (1988)=Defendieron que las ilusiones positivas favorecen el bienestar",
      "Langer (1975)=Quien elegía su boleto de lotería pedía más dinero por venderlo",
      "Weinstein (1980)=Mostró que se esperan menos divorcios, enfermedades y accidentes que los demás",
      "Sesgo positivo ligero=Verse algo mejor de lo que uno es sin perder el contacto con la información"
    ],
    g: [
      "En los estudios de Langer, quienes habían ___ su boleto pedían más dinero por venderlo.|elegido|recibido|ganado",
      "El realismo depresivo lo describieron Alloy y ___ (1979).|Abramson|Seligman|Teasdale",
      "Según las críticas, las ilusiones ___ se asocian con malas decisiones y peor ajuste social.|extremas|moderadas|ligeras",
      "El optimismo irreal sobre la salud puede llevar a descuidar conductas ___.|preventivas|arriesgadas|impulsivas",
      "El efecto mejor que la media, por definición, no puede ser cierto para ___.|todos|nadie|muchos"
    ],
    tf: [
      "Taylor y Brown sostuvieron que las ilusiones positivas son un fallo que perjudica el bienestar.|F|Sostuvieron lo contrario: favorecen el bienestar, la motivación y la persistencia.",
      "En tareas de juicio de contingencia, las personas con síntomas depresivos estimaban su control con más exactitud.|V",
      "La generalidad del realismo depresivo está plenamente establecida.|F|Se discute. Una de las críticas a Taylor y Brown se refiere a la medida, y la generalidad del realismo depresivo está en debate.",
      "Las ilusiones extremas pueden hacer que los demás perciban a la persona como arrogante.|V"
    ],
    q: [
      "Un estudiante está convencido de que aprobará sin estudiar, y otro confía en aprobar y estudia con ganas. ¿Qué ilustra la diferencia?|Que lo adaptativo es un sesgo ligero|Que toda ilusión positiva es dañina|Que el realismo siempre es mejor|Verse algo mejor de lo que uno es motiva, siempre que no se pierda el contacto con la información que permite corregir errores.",
      "Marcos cree que tiene muchas menos probabilidades que sus amigos de sufrir un accidente de moto y no usa casco. ¿Qué ilusión y qué coste ilustra?|Optimismo irreal, menos prevención|Ilusión de control, más apuestas|Mejor que la media, conflictos|El optimismo irreal sobre la salud puede llevar a descuidar conductas preventivas, como no usar casco.",
      "¿Qué tres críticas principales recibió la tesis de Taylor y Brown?|Grado, ámbito y medida|Grado, cultura y edad|Ámbito, duración y muestra|Las ilusiones extremas perjudican, en salud pueden restar prevención y su medida y el realismo depresivo se discuten.",
      "¿Qué dato citaron Taylor y Brown en apoyo de su tesis?|El realismo depresivo|La teoría del sociómetro|El efecto de falso consenso|Las personas con síntomas depresivos estimaban su control con más exactitud (Alloy y Abramson, 1979)."
    ],
    inc: [
      "Sobre las ilusiones positivas|Elegir el boleto no cambia su precio|La mayoría se cree por encima de la media|Se espera menos enfermedad que los demás|En Langer (1975), quienes elegían su boleto pedían más dinero por venderlo, como si elegir aumentara las probabilidades."
    ],
    seq: [],
    cls: [
      "Ilusión positiva|Autovaloración inflada: mejor que la media; más honesto que los demás|Ilusión de control: boleto de lotería; Langer (1975)|Optimismo irreal: menos divorcios; Weinstein (1980)"
    ] }
] }
);

// SAIMAP Psicología · Social · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Las actitudes: estructura, funciones y medida", cap: 5, pir: "alta", mods: [
  { t: "Qué es una actitud",
    tip: "Una actitud es una evaluación global, favorable o desfavorable, de un objeto concreto. Como constructo hipotético, se infiere de lo que la persona dice, siente o hace ante él. El modelo tripartito (Rosenberg y Hovland, 1960) distingue componentes cognitivo, afectivo y conductual, pero hoy predomina la concepción unidimensional, que los trata como fuentes y manifestaciones de la evaluación. La ambivalencia no es indiferencia, y las actitudes fuertes son estables, resistentes y predictivas.",
    v: [
      "Actitud=Evaluación global, favorable o desfavorable, de un objeto concreto",
      "Constructo hipotético=Variable no observable que se infiere de lo que la persona dice, siente o hace",
      "Componente cognitivo=Creencias y pensamientos sobre el objeto",
      "Componente afectivo=Sentimientos y emociones que despierta el objeto",
      "Componente conductual=Tendencias de acción e intenciones hacia el objeto",
      "Concepción unidimensional=Creencias, emociones y conductas son fuentes y manifestaciones de la evaluación",
      "Ambivalencia=Evaluaciones positivas y negativas intensas y simultáneas del mismo objeto",
      "Accesibilidad=Rapidez con que la evaluación viene a la mente al encontrar el objeto"
    ],
    g: [
      "El modelo tripartito de la actitud se atribuye a Rosenberg y ___ (1960).|Hovland|Fishbein|Festinger",
      "Eagly y Chaiken (1993) definieron la actitud como una tendencia que se expresa al ___ algo con agrado o desagrado.|evaluar|percibir|recordar",
      "«El café tiene cafeína» es un ejemplo de ___, sin evaluación necesaria.|creencia|actitud|opinión",
      "Una actitud ___ es estable, resiste el cambio y predice mejor la conducta.|fuerte|ambivalente|implícita",
      "En una escala simple, la ambivalencia y la ___ pueden dar el mismo valor central.|indiferencia|certeza|intensidad"
    ],
    tf: [
      "Una actitud tiene dirección e intensidad y se refiere siempre a un objeto concreto.|V",
      "La ambivalencia equivale a la indiferencia, porque ambas dan un valor central en una escala simple.|F|Coinciden en la escala, pero la ambivalencia combina evaluaciones intensas de signo opuesto y es más inestable.",
      "Una opinión puede no coincidir con la actitud si la persona prefiere adaptarse a lo que se espera de ella.|V",
      "Según la concepción hoy predominante, los tres componentes del modelo tripartito coinciden siempre.|F|No siempre coinciden. Hoy la actitud es la evaluación, y creencias, emociones y conductas, sus fuentes y manifestaciones."
    ],
    q: [
      "A Sergio le encanta el sabor del tabaco y a la vez le preocupa mucho su salud. En una escala de 1 a 7 marca un 4. ¿Qué describe mejor su actitud?|Ambivalencia|Indiferencia|Accesibilidad|Combina evaluaciones intensas de signo opuesto. En una escala simple puede parecer indiferencia, pero es más inestable.",
      "«Disfruto pedaleando, pero el tráfico me da miedo» ilustra el componente…|afectivo|cognitivo|conductual|Recoge sentimientos y emociones. Las creencias corresponden al componente cognitivo, y las intenciones, al conductual.",
      "¿Cuál de estos es un indicador de la fuerza de una actitud?|La certeza con que se mantiene|La ambivalencia ante el objeto|La indiferencia hacia el objeto|Accesibilidad, importancia, certeza y experiencia directa indican fuerza. La ambivalencia hace la actitud más inestable.",
      "¿Por qué medir una actitud es un problema técnico serio?|Porque es un constructo hipotético|Porque cambia cada pocos minutos|Porque carece de una dirección clara|No se observa directamente: se infiere de lo que la persona dice, siente o hace ante el objeto."
    ],
    inc: [
      "Sobre el concepto de actitud|Puede haber actitudes «en general», sin objeto|Tiene dirección positiva o negativa e intensidad|Puede basarse sobre todo en afecto o en información|Toda actitud se refiere a un objeto de actitud concreto: no hay actitudes «en general»."
    ],
    seq: [],
    cls: [
      "Componente del modelo tripartito|Cognitivo: «es barata y no contamina»; «hay pocos carriles bici»|Afectivo: «disfruto pedaleando»; «el tráfico me da miedo»|Conductual: «iré en bici los días sin lluvia»; intención de usarla para ir al trabajo"
    ] },
  { t: "Funciones y formación de las actitudes",
    tip: "Katz (1960) propuso que mantenemos actitudes porque satisfacen necesidades psicológicas: funciones utilitaria, defensiva del yo, expresiva de valores y de conocimiento. Una misma actitud puede cumplir funciones distintas, y un mensaje persuade más si apunta a la función que la sostiene. Se forman por experiencia directa, mera exposición, condicionamiento evaluativo y operante, aprendizaje observacional y autopercepción, con una influencia genética parcial a través del temperamento.",
    v: [
      "Función utilitaria=Ayuda a obtener recompensas y a evitar castigos",
      "Función defensiva del yo=Protege la autoestima frente a verdades incómodas o conflictos internos",
      "Función expresiva de valores=Permite mostrar a uno mismo y a los demás quién se es y qué se defiende",
      "Función de conocimiento=Organiza y simplifica el mundo para no evaluar desde cero",
      "Mera exposición=El contacto repetido con un estímulo neutro aumenta el agrado (Zajonc, 1968)",
      "Condicionamiento evaluativo=El objeto adquiere el valor afectivo del estímulo con que se empareja",
      "Aprendizaje observacional=Adopción de las evaluaciones que muestran los modelos",
      "Influencia genética parcial=Se heredan predisposiciones ligadas al temperamento, no evaluaciones concretas"
    ],
    g: [
      "El enfoque funcional de las actitudes se debe a ___ (1960).|Katz|Kelley|Heider",
      "La mera exposición la describió ___ en 1968.|Zajonc|Osgood|Thurstone",
      "La repetición no vuelve agradable un estímulo que de entrada ___.|desagrada|es neutro|agrada poco",
      "El condicionamiento evaluativo es una forma de condicionamiento ___ en la que se transfiere el valor afectivo.|clásico|operante|vicario",
      "Las actitudes basadas en experiencia ___ suelen ser más accesibles y predecir mejor la conducta.|directa|indirecta|vicaria"
    ],
    tf: [
      "Una misma actitud puede cumplir funciones distintas en personas diferentes.|V",
      "Argumentar sobre el precio es la mejor forma de mover una actitud que expresa valores.|F|Un mensaje funciona mejor si apunta a la función que sostiene la actitud, y el precio no mueve una actitud expresiva de valores.",
      "Las actitudes concretas se heredan directamente de los padres por vía genética.|F|La influencia genética es parcial y actúa a través del temperamento y la personalidad: se heredan predisposiciones.",
      "La autopercepción permite inferir la propia actitud a partir de la propia conducta.|V"
    ],
    q: [
      "Un repartidor que cobra por pedido valora muy bien la aplicación que más encargos le asigna. Según Katz, ¿qué función cumple su actitud?|Utilitaria|Expresiva de valores|De conocimiento|Valoramos bien lo que nos beneficia: la actitud ayuda a obtener recompensas y evitar castigos.",
      "Un refresco aparece siempre en anuncios con escenas de verano y amistad, y acaba resultando agradable. ¿Qué vía de formación actúa?|Condicionamiento evaluativo|Condicionamiento operante|Aprendizaje observacional|El objeto adquiere el valor afectivo del estímulo agradable con el que se empareja de forma sistemática.",
      "Una niña rechaza a los perros porque ve que su madre los rechaza. ¿Qué vía de formación ilustra?|Aprendizaje observacional|Condicionamiento evaluativo|Mera exposición|Adopta la evaluación de un modelo. Si el grupo premiara su rechazo con aprobación, sería condicionamiento operante.",
      "Dos personas rechazan un recorte en educación: una defiende la escuela pública como valor y otra teme por su empleo. ¿Qué ilustra?|Una actitud con funciones distintas|Dos actitudes de signo opuesto|Una actitud ambivalente compartida|La misma actitud cumple una función expresiva de valores en una persona y utilitaria en la otra."
    ],
    inc: [
      "Sobre la formación de las actitudes|La mera exposición vuelve agradable lo que desagrada|El condicionamiento operante refuerza su expresión|La autopercepción las infiere de la propia conducta|La mera exposición funciona con estímulos neutros o algo agradables, pero no vuelve agradable lo que desagrada."
    ],
    seq: [],
    cls: [
      "Función según Katz|Utilitaria: valorar la app que da más encargos; apreciar lo que nos beneficia|Defensiva del yo: «la asignatura suspendida no sirve»; despreciar a un grupo para sentirse superior|Expresiva de valores: comprar comercio justo; mostrar lo que uno defiende"
    ] },
  { t: "Medidas explícitas",
    tip: "Las medidas explícitas son autoinformes: la persona sabe qué se le pregunta y controla su respuesta. Thurstone usa jueces e intervalos aparentemente iguales, Likert es sumativa, el diferencial semántico de Osgood mide evaluación, potencia y actividad, y Guttman es acumulativa. Son baratas y fiables, pero vulnerables a la deseabilidad social y al acceso limitado, y la falsa tubería (Jones y Sigall, 1971) intenta reducir el primer problema.",
    v: [
      "Escala de Thurstone=Enunciados escalados por jueces a intervalos aparentemente iguales",
      "Escala de Likert=Formato sumativo de grado de acuerdo, normalmente de 5 o 7 puntos",
      "Diferencial semántico=Escalas de 7 puntos ancladas por adjetivos opuestos (Osgood)",
      "Escala de Guttman=Formato acumulativo: aceptar un enunciado implica aceptar los menos extremos",
      "Deseabilidad social=Dar la respuesta que se considera aceptable en lugar de la propia",
      "Falsa tubería=Aparato que, se dice, detecta las reacciones verdaderas, pero no mide nada",
      "Acceso limitado=No saber con exactitud qué se siente y construir la respuesta en el momento",
      "Dimensión evaluativa=Eje bueno‑malo, el que mejor corresponde a la actitud"
    ],
    g: [
      "En la escala de Likert, la puntuación total se obtiene ___ las respuestas.|sumando|promediando|ordenando",
      "En la escala de Thurstone, la puntuación es la media o la ___ de los valores aceptados.|mediana|moda|suma",
      "La dimensión de potencia del diferencial semántico se ancla con pares como ___.|fuerte‑débil|bueno‑malo|activo‑pasivo",
      "Como implica engaño, la falsa tubería exige ___.|debriefing|un grupo control|doble ciego",
      "Las medidas ___ indican activación, pero a menudo no su dirección.|fisiológicas|implícitas|sumativas"
    ],
    tf: [
      "La escala de Guttman es sumativa y la de Likert, acumulativa.|F|Es al revés: Likert es sumativa y Guttman, acumulativa. Thurstone se basa en valores fijados por jueces.",
      "En la escala de Thurstone, la persona solo marca con qué enunciados está de acuerdo.|V",
      "La falsa tubería es una medida implícita basada en tiempos de reacción.|F|Es un procedimiento para reducir la deseabilidad social en un autoinforme. El aparato no mide nada.",
      "En la escala de Likert hay que invertir los ítems redactados en sentido contrario antes de sumar.|V"
    ],
    q: [
      "Una investigadora pide a varios jueces que ordenen muchos enunciados sobre la inmigración según lo favorables que les parecen y elige los que cubren todo el continuo. ¿Qué escala construye?|Thurstone|Guttman|Likert|Los jueces fijan los valores escalares y se eligen enunciados a intervalos aparentemente iguales.",
      "Quien acepta tener como cuñada a una persona de otro país aceptará también tenerla como vecina. ¿Qué propiedad, y de qué escala, refleja?|La acumulativa de Guttman|La sumativa de Likert|Los intervalos de Thurstone|Los enunciados se ordenan por intensidad: aceptar uno implica aceptar todos los menos extremos.",
      "Osgood encontró que los juicios del diferencial semántico se agrupan en…|evaluación, potencia y actividad|evaluación, intensidad y certeza|dirección, potencia y accesibilidad|La actitud corresponde sobre todo a la dimensión evaluativa, bueno‑malo.",
      "¿Qué problema pretende reducir la falsa tubería (Jones y Sigall, 1971)?|La deseabilidad social|La fiabilidad test‑retest baja|El acceso limitado|Quien cree que mentir será descubierto tiende a responder con más sinceridad, aunque el aparato no mida nada."
    ],
    inc: [
      "Sobre las escalas explícitas|Thurstone es acumulativa y usa adjetivos opuestos|Likert suma el grado de acuerdo con varios enunciados|Guttman permite situar a la persona con un solo número|Thurstone usa enunciados escalados por jueces. Acumulativa es la de Guttman, y los adjetivos opuestos son del diferencial semántico."
    ],
    seq: [],
    cls: [
      "Escala de actitud|Sumativa (Likert): grado de acuerdo en 5 o 7 puntos; suma de respuestas|Acumulativa (Guttman): enunciados ordenados por intensidad; punto de corte del patrón|Con jueces (Thurstone): intervalos aparentemente iguales; media o mediana de valores"
    ] },
  { t: "Medidas implícitas: el IAT y sus límites",
    tip: "Las medidas implícitas infieren la actitud a partir de la ejecución en una tarea, normalmente tiempos de reacción, lo que reduce la deseabilidad social. En el IAT (Greenwald, McGhee y Schwartz, 1998), la puntuación es una diferencia de latencias entre bloques con emparejamientos invertidos. Predice la conducta débilmente, no supera a las medidas explícitas en discriminación étnico‑racial y no sirve para diagnosticar a individuos, aunque es útil para investigar con grupos.",
    v: [
      "Medida implícita=Infiere la actitud por la ejecución en una tarea, sin preguntar por ella",
      "Priming evaluativo=Un estímulo previo acelera o frena la clasificación de palabras positivas o negativas",
      "IAT=Clasificación rápida en la que categorías y atributos comparten tecla (Greenwald et al., 1998)",
      "Diferencia de latencias=Puntuación que compara bloques con emparejamientos invertidos",
      "Greenwald et al. (2009)=Metaanálisis en que el IAT predijo la conducta con r de 0,27 aproximadamente",
      "Oswald et al. (2013)=Sin ventaja del IAT sobre las explícitas en discriminación étnico‑racial",
      "Forscher et al. (2019)=492 estudios: cambios implícitos débiles y sin efecto en la conducta",
      "Asociaciones culturales=Vínculos aprendidos del entorno que la persona conoce aunque no comparta"
    ],
    g: [
      "El priming evaluativo como medida de actitudes se asocia a ___ et al. (1995).|Fazio|Greenwald|Osgood",
      "En el metaanálisis de Oswald et al. (2013), el IAT predijo la discriminación étnico‑racial con una r de ___.|0,148|0,27|0,52",
      "Forscher et al. (2019) revisaron ___ estudios sobre el cambio de las medidas implícitas.|492|128|185",
      "La fiabilidad test‑retest del IAT es ___ y no está validado para uso individual.|modesta|excelente|nula",
      "Las correlaciones entre medidas implícitas y explícitas del mismo objeto suelen ser ___.|bajas|altas|negativas"
    ],
    tf: [
      "Las medidas implícitas reducen la deseabilidad social porque no preguntan directamente por la actitud.|V",
      "El IAT predice la conducta mejor que las medidas explícitas, sobre todo en discriminación étnico‑racial.|F|Predice débilmente y, en discriminación étnico‑racial, sin ventaja sobre las explícitas (Oswald et al., 2013).",
      "Asociar más deprisa «mayor» con «desagradable» no demuestra que alguien vaya a tratar peor a su abuela.|V",
      "Forscher et al. (2019) hallaron que modificar la puntuación implícita produce cambios claros en la conducta.|F|Los cambios en las medidas implícitas fueron débiles (d menor de 0,30 en valor absoluto) y no cambiaron la conducta."
    ],
    q: [
      "Una empresa propone usar el IAT para descartar a candidatos con «sesgo oculto». ¿Qué objeción es la más sólida?|No está validado para uso individual|Mide solo actitudes conscientes|Exige un aparato que detecte mentiras|Su fiabilidad test‑retest es modesta: es una herramienta de investigación con grupos, no un detector personal.",
      "En un bloque del IAT, «joven» y «agradable» comparten tecla, y en otro, «mayor» y «agradable». Ana responde más rápido en el primero. ¿Qué se interpreta?|Una asociación joven‑positivo más fuerte|Una actitud explícita negativa hacia mayores|Una conducta discriminatoria probable|Se infiere la fuerza relativa de una asociación en la memoria, no una conducta ni una actitud declarada.",
      "¿Qué interpretaciones se han dado a la baja correlación entre medidas implícitas y explícitas?|Dos actitudes o asociaciones culturales|Primacía o recencia de la respuesta|Ruta central o ruta periférica|Para unos hay una actitud automática y otra deliberada. Para otros, el IAT capta asociaciones culturales y factores de la tarea.",
      "¿Para qué se consideran útiles hoy las medidas implícitas?|Para investigar con grupos|Para diagnosticar a individuos|Para cambiar la conducta|Captan asociaciones automáticas útiles en la investigación con grupos, pero no diagnostican ni cambian la conducta."
    ],
    inc: [
      "Sobre el IAT|Su puntuación diagnostica el prejuicio de una persona|Se basa en tiempos de reacción al clasificar estímulos|Una categoría y un atributo comparten tecla|Su fiabilidad no permite diagnosticar a individuos: no está validado para uso individual."
    ],
    seq: [
      "Procedimiento del IAT|Practicar por separado la clasificación de categorías y la de atributos>Bloque combinado con un emparejamiento>Bloque con el emparejamiento invertido>Calcular la diferencia de latencias"
    ],
    cls: [
      "Tipo de medida|Explícita: escala de Likert; diferencial semántico; falsa tubería|Implícita: IAT; priming evaluativo de Fazio"
    ] }
] },
{ n: 10, t: "De la actitud a la conducta", cap: 5, pir: "alta", mods: [
  { t: "LaPiere y Wicker: la crisis de las actitudes",
    tip: "LaPiere (1934) recorrió EE. UU. con una pareja china: en persona solo 1 de 251 establecimientos les negó el servicio, pero por carta cerca del 92 % de las 128 respuestas fue «no». Wicker (1969) halló correlaciones actitud‑conducta que rara vez superaban 0,30, lo que abrió la crisis de las actitudes. La salida fue preguntarse cuándo predicen la conducta, y Ajzen y Fishbein (1977) respondieron con el principio de compatibilidad.",
    v: [
      "LaPiere (1934)=Contrastó la atención real a una pareja china con las respuestas por carta",
      "Wicker (1969)=Revisión con correlaciones actitud‑conducta rara vez superiores a 0,30",
      "Crisis de las actitudes=Periodo de duda sobre si las evaluaciones predicen la conducta",
      "Principio de compatibilidad=Medir actitud y conducta con igual especificidad (Ajzen y Fishbein, 1977)",
      "Índice agregado=Suma de muchas conductas relacionadas a lo largo del tiempo",
      "Acción=Elemento de compatibilidad que responde a qué conducta se predice",
      "Contexto=Elemento de compatibilidad que responde a dónde y en qué situación",
      "Varianza compartida=Con r de 0,30, apenas un 9 % entre actitud y conducta"
    ],
    g: [
      "En persona, solo ___ de los 251 establecimientos se negó a atender a la pareja.|uno|doce|cuarenta",
      "Por carta respondieron 128 establecimientos, y aproximadamente el ___ contestó que no.|92 %|52 %|30 %",
      "Wicker llegó a plantear que quizá convenía ___ el concepto de actitud.|abandonar|redefinir|ampliar",
      "Una actitud general hacia el medio ambiente predice mejor un ___ de conductas ecológicas.|índice agregado|acto concreto|hábito diario",
      "Una correlación de 0,30 equivale a compartir apenas un ___ de la varianza.|9 %|30 %|3 %"
    ],
    tf: [
      "Una crítica a LaPiere es que quien atendió a la pareja no era necesariamente quien respondió la carta.|V",
      "LaPiere midió la actitud de los establecimientos antes de la visita.|F|No hubo medida previa. Es una de sus limitaciones, junto con un interlocutor, un objeto y una situación distintos.",
      "Según el principio de compatibilidad, actitud y conducta deben coincidir en acción, objetivo, contexto y tiempo.|V",
      "Tras la revisión de Wicker, la psicología social abandonó el concepto de actitud.|F|La salida no fue abandonarlo, sino preguntarse cuándo predicen las actitudes la conducta."
    ],
    q: [
      "Un estudio usa la actitud general hacia la medicina para predecir quién donará sangre el próximo mes en la campaña universitaria, y la correlación es baja. ¿Qué lo explica mejor?|Falta de compatibilidad entre medidas|Ausencia de una norma subjetiva medida|Las actitudes no predicen la conducta|Actitud general y conducta concreta difieren en especificidad. La actitud hacia esa donación concreta predeciría mucho mejor.",
      "¿Qué diferencia de objeto se señala en el estudio de LaPiere?|Pareja concreta frente a categoría abstracta|Hoteles en persona frente a restaurantes|Viaje en coche frente a viaje en tren|En persona llegó una pareja bien vestida que hablaba inglés con soltura, y la carta preguntaba por una categoría.",
      "¿Qué cuatro elementos incluye el principio de compatibilidad?|Acción, objetivo, contexto y tiempo|Actitud, norma, control e intención|Fuente, mensaje, receptor y canal|Ajzen y Fishbein (1977) exigieron medir actitud y conducta al mismo nivel de especificidad en esos cuatro elementos.",
      "¿Por qué rechazar a alguien cara a cara no equivale a contestar «no» por carta?|Tiene un coste social mayor|Exige más tiempo de respuesta|Implica a la misma persona|Es la crítica de la distinta situación: negarse en persona tiene un coste social que no tiene una respuesta escrita."
    ],
    inc: [
      "Sobre la revisión de Wicker (1969)|Fue un metaanálisis de estudios compatibles|Reunió estudios con actitud y conducta medidas|Dio paso a la crisis de las actitudes|Era una revisión narrativa que mezclaba estudios con niveles de compatibilidad muy distintos."
    ],
    seq: [],
    cls: [
      "Crítica al estudio de LaPiere|Distinto objeto: pareja concreta y bien vestida; pregunta por una categoría abstracta|Distinta situación: coste social del rechazo cara a cara; contestar «no» por escrito"
    ] },
  { t: "Acción razonada y conducta planificada",
    tip: "En la TRA (Fishbein y Ajzen, 1975), la intención es el mejor predictor de la conducta voluntaria y depende de la actitud hacia la conducta, no hacia el objeto, y de la norma subjetiva. La TPB (Ajzen, 1991) añade el control conductual percibido, que influye en la intención y también directamente en la conducta. El peso de cada factor varía según la conducta y la población.",
    v: [
      "TRA=Teoría de la acción razonada (Fishbein y Ajzen, 1975)",
      "TPB=Teoría de la conducta planificada (Ajzen, 1991)",
      "Intención conductual=Predictor inmediato de la conducta voluntaria en ambos modelos",
      "Actitud hacia la conducta=Creencias sobre consecuencias combinadas con la valoración de cada una",
      "Norma subjetiva=Presión social percibida de las personas importantes",
      "Motivación para acomodarse=Cuánto importa complacer a cada referente importante",
      "Control conductual percibido=Facilidad o dificultad que se cree tener para realizar algo",
      "Expectativa por valor=Combinación de lo que se espera de una conducta con cuánto se valora"
    ],
    g: [
      "La TRA usa la actitud hacia la ___, no hacia el objeto.|conducta|categoría|situación",
      "En la TPB, el control percibido llega ___ a la conducta, además de hacerlo a través de la intención.|directamente|tardíamente|parcialmente",
      "La norma subjetiva combina las creencias ___ con la motivación para acomodarse.|normativas|conductuales|de control",
      "Si la gente no recicla porque cree que nadie lo hace, la intervención debe trabajar la ___.|norma subjetiva|actitud hacia la conducta|percepción de control",
      "La TRA funciona bien con conductas bajo control ___.|voluntario|social|percibido"
    ],
    tf: [
      "La TRA queda incluida en la TPB: basta con eliminar el control percibido.|V",
      "En la TPB, la norma subjetiva es el factor con efecto directo sobre la conducta.|F|El efecto directo corresponde al control conductual percibido, en la medida en que refleja el control real.",
      "La TRA predice si alguien se vacunará este otoño a partir de su actitud hacia la gripe.|F|La TRA usa la actitud hacia la conducta, «vacunarme de la gripe este otoño», no hacia el objeto.",
      "En las conductas que exigen habilidad o recursos, el control percibido suele pesar más.|V"
    ],
    q: [
      "Iván tiene una intención firme de vacunarse, pero le cambian el turno y el centro solo vacuna por la mañana. ¿Qué variable de la TPB recoge este obstáculo?|Control conductual percibido|Norma subjetiva|Actitud hacia la conducta|Si el control percibido refleja el control real, predice la conducta más allá de la intención.",
      "La médica y la pareja de Iván quieren que se vacune, y su opinión le importa. ¿Qué componente se describe?|La norma subjetiva|La actitud hacia la conducta|El control percibido|Combina las creencias normativas con la motivación para acomodarse a cada referente.",
      "Iván cree que vacunarse le evitará una semana en cama, algo que valora mucho. ¿Qué componente se está calculando?|La actitud hacia la conducta|La norma subjetiva|El control conductual percibido|Se combinan creencias sobre consecuencias con su valoración, en un modelo de expectativa por valor.",
      "¿Por qué falla la TRA con conductas como dejar de fumar?|No dependen solo de querer|No implican actitudes|Carecen de norma social|Se puede tener una intención firme y no lograrlo: la conducta no está del todo bajo control voluntario."
    ],
    inc: [
      "Sobre la TPB|El control percibido solo actúa a través de la intención|Actitud, norma y control predicen la intención|Incluye conductas con obstáculos o que exigen recursos|El control percibido tiene dos vías: indirecta, a través de la intención, y directa sobre la conducta."
    ],
    seq: [
      "Teoría de la conducta planificada|Actitud, norma subjetiva y control percibido>Intención conductual>Conducta"
    ],
    cls: [
      "Modelo|TRA (1975): sin vía directa a la conducta; solo conductas bajo control voluntario|TPB (1991): control conductual percibido; vía directa a la conducta; conductas con obstáculos"
    ] },
  { t: "El modelo MODE",
    tip: "Fazio (1990) propuso que la motivación y la oportunidad determinan cómo pasa la actitud a la conducta. Con ambas hay un procesamiento deliberado, parecido al que describe la TPB. Sin ellas, la conducta sigue a la actitud solo si esta se activa automáticamente y sesga la percepción del objeto, de modo que la variable clave es la accesibilidad. El modelo admite también procesos mixtos.",
    v: [
      "MODE=Motivation and Opportunity as DEterminants (Fazio, 1990)",
      "Procesamiento deliberado=Análisis de costes y beneficios cuando hay motivación y oportunidad",
      "Procesamiento espontáneo=La actitud activada automáticamente guía la conducta sin razonar",
      "Accesibilidad=Fuerza de la asociación en la memoria entre el objeto y su evaluación",
      "Motivación=Condición presente si la decisión importa o habrá que justificarla",
      "Oportunidad=Tiempo y recursos cognitivos disponibles para pensar",
      "Procesos mixtos=Una actitud activada automáticamente se corrige si aparecen motivación y tiempo",
      "Rapidez de respuesta=Indicador con el que se mide la accesibilidad de una actitud"
    ],
    g: [
      "La accesibilidad aumenta con la expresión ___ de la actitud.|repetida|pública|escrita",
      "En la vía espontánea, la actitud activada ___ la percepción del objeto.|sesga|bloquea|sustituye",
      "La accesibilidad se mide por la ___ con que la persona responde sobre su actitud.|rapidez|certeza|coherencia",
      "El priming evaluativo de Fazio et al. (1995) nació para medir actitudes que se activan de forma ___.|automática|deliberada|consciente",
      "Con motivación y oportunidad, el MODE describe un procesamiento parecido al de la ___.|TPB|ELM|IAT"
    ],
    tf: [
      "Según el MODE, sin motivación ni oportunidad cualquier actitud guía la conducta de forma espontánea.|F|Solo la guía si se activa automáticamente, lo que depende de su accesibilidad.",
      "La experiencia directa con el objeto aumenta la accesibilidad de la actitud.|V",
      "El MODE no admite que una actitud activada automáticamente pueda corregirse después.|F|Admite procesos mixtos: puede corregirse si aparecen la motivación y la oportunidad de hacerlo.",
      "Según el MODE, la fuerza de la actitud, y no solo su dirección, determina si influye en la conducta.|V"
    ],
    q: [
      "Elena, con prisa, cuelga una llamada comercial en cuanto oye el nombre de una compañía que detesta tras varias malas experiencias. ¿Cómo lo explica el MODE?|Actitud accesible activada automáticamente|Análisis deliberado de costes y beneficios|Control conductual percibido muy bajo|Sin oportunidad para pensar, la actitud muy accesible se activó al oír el nombre y tiñó la percepción de la llamada.",
      "¿Qué determina en el MODE el tipo de procesamiento?|La motivación y la oportunidad|La norma y el control percibido|La fuente y el mensaje recibido|Si hay motivación y oportunidad, se delibera. Si falta alguna, actúa la vía espontánea.",
      "Otro día, Elena compara con calma tarifas para toda la familia y examina la oferta de esa misma compañía. ¿Qué ha cambiado?|Hay motivación y oportunidad|Su actitud ya no es accesible|Su actitud se ha vuelto positiva|Con tiempo y una decisión importante puede deliberar, aunque la actitud negativa siga ahí.",
      "¿Con qué contenidos conecta el MODE?|Procesamiento dual y medidas implícitas|Disonancia y justificación del esfuerzo|Programa de Yale y efecto durmiente|Enlaza con el procesamiento dual de la cognición social y con el priming evaluativo, creado para medir actitudes automáticas."
    ],
    inc: [
      "Sobre el modelo MODE|La vía espontánea analiza costes y beneficios|La accesibilidad es clave en la vía espontánea|Lo propuso Fazio en 1990|En la vía espontánea no se razona: la actitud activada sesga la percepción y guía la conducta."
    ],
    seq: [
      "Vía espontánea del MODE|Encuentro con el objeto>Activación automática de la actitud accesible>Percepción sesgada del objeto>Conducta"
    ],
    cls: [
      "Procesamiento en el MODE|Deliberado: decisión importante; tiempo y recursos; análisis de costes y beneficios|Espontáneo: prisa; actitud muy accesible; percepción sesgada del objeto"
    ] },
  { t: "Qué dicen los metaanálisis",
    tip: "Los metaanálisis son más optimistas que Wicker: Glasman y Albarracín (2006) hallaron una r de 0,52, más alta con actitudes accesibles, experiencia directa e información unilateral. La TPB explica en torno al 39 % de la varianza de la intención y el 27 % de la conducta (Armitage y Conner, 2001). La brecha intención‑conducta se debe a obstáculos, hábitos, intenciones débiles y tiempo, y la pregunta pasa a ser cuándo y cómo predicen las actitudes.",
    v: [
      "Metaanálisis=Combinación cuantitativa de los resultados de muchos estudios",
      "Glasman y Albarracín (2006)=128 estudios: r de 0,52 entre actitud y conducta futura",
      "Armitage y Conner (2001)=185 estudios con la TPB: 39 % de la intención y 27 % de la conducta",
      "McEachan et al. (2011)=TPB en salud: 44,3 % de la intención y 19,3 % de la conducta",
      "Información unilateral=Datos coherentes en un solo sentido que dan actitudes menos ambivalentes",
      "Brecha intención‑conducta=Distancia entre lo que uno se propone y lo que acaba haciendo",
      "Hábito=Conducta repetida en contextos estables que depende poco de la intención",
      "Revisión narrativa=Síntesis no cuantitativa, como la de Wicker, que mezclaba niveles de compatibilidad"
    ],
    g: [
      "Glasman y Albarracín (2006) hallaron una correlación media actitud‑conducta de ___.|0,52|0,30|0,27",
      "Según Armitage y Conner (2001), la TPB explica en torno al ___ de la varianza de la intención.|39 %|27 %|19 %",
      "En conductas de salud, la TPB explica la intención aún mejor, pero la conducta ___.|peor|igual|mejor",
      "Coger el coche cada mañana depende más del ___ que de la intención.|hábito|control|afecto",
      "Una r de 0,52 equivale a compartir algo más de un ___ de la varianza.|cuarto|tercio|décimo"
    ],
    tf: [
      "La relación actitud‑conducta fue más fuerte cuando la actitud se había formado con información bilateral.|F|Fue más fuerte con información unilateral, coherente en un solo sentido, que da actitudes menos ambivalentes.",
      "La diferencia entre la varianza explicada de la intención y la de la conducta refleja la brecha intención‑conducta.|V",
      "Cuanto más lejos está la conducta del momento en que se mide la intención, más cosas pueden cambiar.|V",
      "En McEachan et al. (2011), la TPB explicó más varianza de la conducta que de la intención.|F|Explicó el 44,3 % de la varianza de la intención y solo el 19,3 % de la conducta."
    ],
    q: [
      "Nuria se propone en enero ir al gimnasio tres días por semana, pero su intención es débil y ambivalente, y en marzo ya no va. ¿Qué fenómeno ilustra?|La brecha intención‑conducta|El principio de compatibilidad|El efecto de mera exposición|Las intenciones débiles o ambivalentes se abandonan ante la primera dificultad, una de las fuentes de la brecha.",
      "¿Qué condición fortaleció la relación actitud‑conducta en Glasman y Albarracín (2006)?|La experiencia directa con el objeto|La información bilateral sobre el objeto|La ambivalencia hacia el objeto|También la fortalecieron la accesibilidad y la información unilateral, que produce actitudes menos ambivalentes.",
      "¿En qué se diferencia la revisión de Wicker de los metaanálisis posteriores?|Era narrativa y no cuantitativa|Incluía muestras mucho más amplias|Solo recogía estudios de laboratorio|Wicker revisó de forma narrativa estudios con compatibilidad muy distinta. Los metaanálisis combinan los datos cuantitativamente.",
      "¿Qué resume el balance actual sobre actitudes y conducta?|La pregunta ya no es si predicen, sino cuándo|Las actitudes apenas predicen la conducta real|Las actitudes predicen siempre cualquier conducta|La predicción mejora con compatibilidad, actitudes fuertes y accesibles, conducta bajo control y agregación de conductas."
    ],
    inc: [
      "Sobre la brecha intención‑conducta|Desaparece cuando la conducta es habitual|Puede deberse a obstáculos imprevistos|Crece si pasa mucho tiempo hasta actuar|En conductas habituales la conducta depende más de la costumbre que de la intención, lo que agranda la brecha."
    ],
    seq: [],
    cls: [
      "Metaanálisis|Glasman y Albarracín (2006): r de 0,52; 128 estudios|Armitage y Conner (2001): 185 estudios; 39 % de la intención|McEachan et al. (2011): conductas de salud; 19,3 % de la conducta"
    ] }
] },
{ n: 11, t: "La disonancia cognitiva", cap: 5, pir: "alta", mods: [
  { t: "La teoría de Festinger",
    tip: "Festinger (1957) propuso que mantener cogniciones disonantes produce una tensión desagradable que empuja a reducirla, igual que el hambre empuja a comer. Su magnitud depende de la importancia de las cogniciones y de la proporción entre disonantes y consonantes. Como la conducta realizada es difícil de cambiar, suele ajustarse la actitud, y además se tiende a la exposición selectiva.",
    v: [
      "Cognición=Cualquier elemento de conocimiento: creencia, actitud o conducta propia",
      "Cogniciones consonantes=Una se sigue de la otra",
      "Cogniciones disonantes=Una implica lo contrario de la otra",
      "Cogniciones irrelevantes=No guardan relación entre sí",
      "Disonancia cognitiva=Tensión desagradable por mantener a la vez elementos de conocimiento incompatibles",
      "Magnitud de la disonancia=Depende de la importancia y de la proporción de cogniciones en conflicto",
      "Exposición selectiva=Buscar datos que apoyan las propias decisiones y evitar los que las cuestionan",
      "Teorías de la consistencia=Familia que ve a la persona como buscadora de coherencia"
    ],
    g: [
      "Festinger formuló la teoría de la disonancia en ___.|1957|1959|1956",
      "Cuantas más razones a favor de lo que se ha hecho, ___ es la disonancia.|menor|mayor|igual",
      "Decidir que el impacto de un solo vuelo es despreciable es cambiar una ___.|cognición|conducta|norma",
      "La conducta ya realizada suele ser lo más ___ de cambiar.|difícil|sencillo|rápido",
      "Festinger, Riecken y Schachter (1956) observaron un grupo que esperaba el ___ en una fecha concreta.|fin del mundo|regreso del líder|cambio de era"
    ],
    tf: [
      "La magnitud de la disonancia depende de la importancia de las cogniciones y de la proporción entre disonantes y consonantes.|V",
      "Cuando la profecía falló, los miembros más comprometidos del grupo abandonaron la creencia.|F|La reinterpretaron y redoblaron sus esfuerzos por convencer a otros.",
      "La teoría de la disonancia explica sobre todo cómo las actitudes guían la conducta.|F|Recorre el camino inverso: explica cómo la propia conducta puede cambiar las actitudes.",
      "Contradecir un valor central produce más disonancia que contradecir una preferencia trivial.|V"
    ],
    q: [
      "Marta, muy comprometida con el medio ambiente, compra un vuelo barato y se dice: «hay problemas ambientales más urgentes que los vuelos». ¿Qué estrategia usa?|Restar importancia a lo disonante|Cambiar la conducta realizada|Añadir cogniciones consonantes|Reduce la importancia de la cognición disonante. Cancelar el vuelo sería cambiar la conducta.",
      "¿Cuál es la predicción más llamativa de la teoría de la disonancia?|La actitud se acerca a lo que se ha hecho|Más recompensa produce más cambio de actitud|La conducta se ajusta a la actitud previa|Después de actuar en contra de lo que se piensa, se tiende a pensar de forma más parecida a lo que se ha hecho.",
      "¿Qué relación hay entre «me importa el clima» y «mañana hará sol»?|Son irrelevantes|Son disonantes|Son consonantes|No guardan relación entre sí, así que ni generan disonancia ni la reducen.",
      "¿Por qué la generalidad de la teoría fue también su punto débil?|Obligó a precisar cuándo surge la disonancia|Impidió predicciones contrarias al sentido común|Excluyó la conducta propia como cognición|Al ser tan general, hubo que concretar después sus condiciones, lo que dio lugar a revisiones como el New Look."
    ],
    inc: [
      "Sobre la teoría de Festinger|Una cognición solo puede ser una creencia sobre el mundo|La disonancia motiva a reducirla, como el hambre a comer|Pertenece a la familia de las teorías de la consistencia|También son cogniciones las actitudes y el conocimiento de la propia conducta."
    ],
    seq: [
      "Proceso de la disonancia|Cogniciones inconsistentes>Malestar o tensión desagradable>Reducción de la disonancia"
    ],
    cls: [
      "Estrategia de reducción|Cambiar la conducta: cancelar el vuelo; viajar en tren|Añadir cogniciones consonantes: «el resto del año apenas uso el coche»|Restar importancia: «hay problemas ambientales más urgentes»"
    ] },
  { t: "Paradigmas clásicos",
    tip: "En la complacencia inducida, Festinger y Carlsmith (1959) hallaron que quien mentía por 1 dólar valoraba mejor la tarea aburrida que quien cobraba 20, por justificación insuficiente. La libre elección (Brehm, 1956) produce dispersión de alternativas, la justificación del esfuerzo (Aronson y Mills, 1959) hace valorar lo que costó y la hipocresía inducida aumenta la conducta defendida. Trabajos posteriores llegaron a ver la elección libre como casi imprescindible.",
    v: [
      "Complacencia inducida=Actuar contra la propia actitud con poca justificación externa",
      "Justificación insuficiente=La razón externa no basta para explicar lo hecho y cambia la actitud",
      "Dispersión de alternativas=Tras elegir, lo elegido sube y lo rechazado baja (Brehm, 1956)",
      "Justificación del esfuerzo=Valorar más aquello que ha costado mucho",
      "Hipocresía inducida=Defender en público una conducta y recordar que uno no la cumple",
      "Libre elección=Paradigma en el que se decide entre alternativas igual de atractivas",
      "Iniciación severa=Prueba de admisión embarazosa de Aronson y Mills (1959)",
      "Axsom y Cooper (1985)=Aplicaron la justificación del esfuerzo a un programa para perder peso"
    ],
    g: [
      "En Festinger y Carlsmith, el grupo de ___ valoró mejor la tarea aburrida.|1 dólar|20 dólares|control",
      "En el grupo control, el agrado medio por la tarea fue de ___.|−0,45|+1,35|−0,05",
      "La dispersión de alternativas es mayor cuando las opciones eran igual de ___.|atractivas|caras|conocidas",
      "En la hipocresía inducida, la disonancia se reduce cambiando la ___, porque la actitud ya es favorable.|conducta|creencia|norma",
      "Aronson y Mills ofrecieron a estudiantes universitarias unirse a un grupo de ___.|discusión|estudio|voluntariado"
    ],
    tf: [
      "Una teoría del refuerzo predecía que el grupo de 20 dólares valoraría mejor la tarea.|V",
      "El grupo de 20 dólares cambió más su actitud porque recibió más refuerzo.|F|Cambió más el de 1 dólar: 20 dólares eran justificación externa de sobra y no generaban disonancia.",
      "Las participantes con la prueba de admisión severa valoraron el grupo más favorablemente.|V",
      "La hipocresía inducida busca sobre todo cambiar una actitud desfavorable.|F|La actitud ya es favorable: se busca cambiar la conducta recordando que no se cumple lo que se defiende."
    ],
    q: [
      "Tras dudar entre dos pisos de alquiler parecidos, Raúl firma por uno y semanas después asegura que el otro «tenía muy poca luz». ¿Qué paradigma ilustra?|Libre elección|Justificación del esfuerzo|Hipocresía inducida|Tras una decisión difícil hay dispersión de alternativas: lo elegido se valora más y lo rechazado menos.",
      "Una campaña pide a estudiantes que den una charla sobre ahorrar agua y después les hace recordar sus duchas largas. ¿Qué cabe esperar?|Que ahorren más agua|Que cambie su actitud hacia el agua|Que valoren menos la charla|Es hipocresía inducida: como la actitud ya es favorable, la disonancia se reduce cambiando la conducta.",
      "¿Cómo explicó Festinger el resultado del grupo de 1 dólar?|Justificación insuficiente|Refuerzo positivo|Dispersión de alternativas|Un dólar no bastaba para justificar la mentira, así que la disonancia se redujo creyendo que la tarea no era tan aburrida.",
      "¿Qué se medía al final del experimento de Festinger y Carlsmith?|El agrado declarado por la tarea|La cantidad de dinero aceptada|El tiempo dedicado a la tarea|Todos valoraban cuánto les había gustado la tarea en una escala de −5 a +5."
    ],
    inc: [
      "Sobre los paradigmas clásicos|En la justificación del esfuerzo se valora menos lo que costó|En la libre elección lo rechazado pierde valor|En la complacencia inducida la actitud se acerca a lo dicho|Ocurre lo contrario: si algo ha costado mucho, cuesta admitir que no valía la pena y se valora más."
    ],
    seq: [],
    cls: [
      "Paradigma|Complacencia inducida: mentir por 1 dólar; actuar contra la actitud con poca recompensa|Libre elección: elegir un regalo entre dos productos; dudar entre dos pisos|Justificación del esfuerzo: iniciación severa; programa para perder peso"
    ] },
  { t: "Revisiones y teorías rivales",
    tip: "El New Look (Cooper y Fazio, 1984) exige consecuencias aversivas previsibles, responsabilidad y una activación atribuida a la propia conducta, como sugirieron Zanna y Cooper (1974) con una pastilla inerte. Bem explica el cambio por autopercepción, sin malestar, y Fazio, Zanna y Cooper (1977) repartieron el terreno según la latitud de aceptación. Las versiones del self (Aronson, Steele) y el modelo de acción de Harmon‑Jones cambian el mecanismo, no el hecho.",
    v: [
      "New Look=Revisión de Cooper y Fazio (1984) centrada en consecuencias aversivas",
      "Consecuencias aversivas=Perjuicio previsible, a alguien o a uno mismo, causado por la conducta",
      "Atribución errónea=Achacar la activación a otra fuente, como una pastilla inerte",
      "Autopercepción=Inferir la actitud de la propia conducta, sin estado aversivo (Bem)",
      "Latitud de aceptación=Rango de posturas que no se alejan mucho de la propia",
      "Autoconsistencia=Malestar porque la conducta choca con la imagen de persona honesta y competente",
      "Autoafirmación=Afirmar otro valor importante reduce la necesidad de cambiar de actitud (Steele)",
      "Modelo de acción=Reducir la disonancia ayuda a actuar con eficacia tras decidir (Harmon‑Jones)"
    ],
    g: [
      "En Zanna y Cooper (1974), quienes atribuían su tensión a una ___ apenas cambiaban de actitud.|pastilla|tarea|recompensa",
      "La autopercepción explica mejor los cambios tras conductas que caen dentro de la latitud de ___.|aceptación|rechazo|elección",
      "La versión de la autoafirmación se debe a ___.|Steele|Aronson|Bem",
      "El modelo de acción de Harmon‑Jones encaja con la ___ de alternativas.|dispersión|justificación|reducción",
      "Según el New Look, la clave no es la inconsistencia ___, sino haber causado algo negativo.|lógica|afectiva|social"
    ],
    tf: [
      "Según Bem, el cambio de actitud tras la complacencia inducida requiere un estado de malestar.|F|La autopercepción no supone malestar: la persona infiere su actitud de su conducta, como un observador.",
      "Según el New Look, la persona debe sentirse responsable porque eligió actuar así.|V",
      "Según Fazio, Zanna y Cooper (1977), la disonancia explica mejor los cambios tras conductas claramente contrarias a la actitud.|V",
      "Las propuestas rivales niegan que la conducta pueda cambiar la actitud.|F|Coinciden en que la conducta puede cambiar la actitud y difieren en el mecanismo."
    ],
    q: [
      "Tras escribir un texto contrario a su opinión, Lara redacta otro sobre lo que más le importa en la vida y apenas cambia de actitud. ¿Qué teoría lo predice?|Autoafirmación de Steele|Autoconsistencia de Aronson|Autopercepción de Bem|Afirmar otro valor importante restaura la integridad del self y reduce la necesidad de cambiar de actitud.",
      "Un participante toma una pastilla inerte que, según le dicen, produce tensión, y luego defiende una postura contraria a la suya. ¿Qué predice el New Look?|Cambiará poco su actitud|Cambiará mucho su actitud|Cambiará solo su conducta|Atribuye el malestar a la pastilla y no a su conducta, como en Zanna y Cooper (1974).",
      "¿Qué condiciones exige el New Look de Cooper y Fazio (1984)?|Consecuencias aversivas previsibles y responsabilidad|Inconsistencia lógica y una recompensa externa grande|Actitud débil y conducta dentro de la latitud de aceptación|Además, la activación debe atribuirse a la propia conducta. El foco pasa de la inconsistencia a la responsabilidad.",
      "Según Aronson, mentir a alguien molesta sobre todo porque…|choca con la imagen de uno mismo|aumenta la activación fisiológica|impide actuar de forma eficaz|En la autoconsistencia, la disonancia surge cuando la conducta contradice la imagen de persona honesta, competente y moral."
    ],
    inc: [
      "Sobre las teorías rivales|El modelo de acción prescinde del malestar|La autopercepción no requiere estado aversivo|La autoconsistencia pone el foco en el self|En el modelo de acción el malestar es central: resulta desagradable porque las cogniciones en conflicto dificultan actuar."
    ],
    seq: [],
    cls: [
      "Papel del malestar|Central: Festinger (1957); New Look; autoconsistencia de Aronson; modelo de acción|Innecesario: autopercepción de Bem; inferencia como la de un observador externo"
    ] },
  { t: "La réplica multilaboratorio de 2024",
    tip: "Vaidis et al. (2024) replicaron la complacencia inducida con un ensayo contraactitudinal en tres condiciones: alta elección, baja elección y ensayo neutro. Se confirmó que escribir contra la propia opinión cambia la actitud y aumenta el malestar, pero alta y baja elección no difirieron (d de −0,027). Harmon‑Jones y Harmon‑Jones (2024) atribuyen el resultado a una manipulación débil de la baja elección, así que el papel de la elección sigue en debate.",
    v: [
      "Réplica registrada multilaboratorio=Protocolo común prerregistrado que aplican muchos equipos independientes",
      "Ensayo contraactitudinal=Texto que defiende una postura contraria a la propia",
      "Alta elección=Condición que subrayaba que escribir era una decisión libre",
      "Baja elección=Condición en la que no se insistía en la libertad para negarse",
      "Ensayo neutro=Texto no contrario a la propia actitud, usado como comparación",
      "Vaidis et al. (2024)=Réplica en la que la actitud cambió igual con alta y baja elección",
      "Harmon‑Jones y Harmon‑Jones (2024)=Objetan que la manipulación de baja elección fue débil",
      "Prerregistro=Fijar y revisar el protocolo antes de recoger los datos"
    ],
    g: [
      "En la condición de alta elección participaron ___ personas.|1.448|1.344|2.800",
      "La diferencia entre alta y baja elección fue de d ___, no significativa.|−0,027|0,52|−0,27",
      "La actitud final con el ensayo neutro fue de ___.|2,14|2,60|2,66",
      "La réplica puso a prueba un solo paradigma: la ___ inducida con ensayo.|complacencia|hipocresía|elección",
      "Además del cambio de actitud, el ensayo contraactitudinal aumentó el ___ declarado.|malestar|agrado|esfuerzo"
    ],
    tf: [
      "En Vaidis et al. (2024), el ensayo contraactitudinal cambió la actitud frente al ensayo neutro.|V",
      "La réplica de 2024 demostró que la disonancia cognitiva no existe.|F|El cambio de actitud sí se observó. Lo que queda en cuestión es que la elección sea una condición necesaria.",
      "La réplica de 2024 puso a prueba también la libre elección, el esfuerzo y la hipocresía.|F|Solo probó la complacencia inducida con ensayo, no los demás paradigmas.",
      "Según Harmon‑Jones y Harmon‑Jones (2024), quienes estaban en baja elección pudieron sentir igualmente que podían negarse.|V"
    ],
    q: [
      "A dos grupos se les pide escribir a favor de subir las tasas universitarias, y solo a uno se le subraya que es libre de negarse. Según Vaidis et al. (2024), ¿qué cabe esperar?|Cambio de actitud similar en ambos|Cambio de actitud solo en el grupo libre|Ningún cambio en ninguno de los grupos|Los datos de 2024 sugieren que el cambio aparece con alta y con baja elección, aunque el papel de la elección sigue en debate.",
      "¿Qué caracteriza a una réplica registrada multilaboratorio?|Un protocolo prerregistrado aplicado por muchos equipos|Un único equipo que controla todo el procedimiento|Una muestra pequeña, pero muy homogénea y controlada|El protocolo común se revisa y prerregistra antes de los datos, y los resultados de todos los equipos se analizan juntos.",
      "¿Cómo debe presentarse hoy el papel de la elección en la disonancia?|Como objeto de debate|Como condición demostrada|Como efecto refutado|No moderó el efecto en Vaidis et al. (2024), pero Harmon‑Jones y Harmon‑Jones (2024) cuestionan la manipulación.",
      "En Vaidis et al. (2024), la actitud final con alta elección fue de 2,60, y con baja elección, de…|2,66|2,14|1,35|La diferencia fue nula (d de −0,027). Las dos condiciones superaron al ensayo neutro, que quedó en 2,14."
    ],
    inc: [
      "Sobre la réplica de Vaidis et al. (2024)|La alta elección cambió más la actitud|Se usó un ensayo contraactitudinal escrito|Se comparó con un ensayo no contraactitudinal|Alta y baja elección dieron resultados casi idénticos, 2,60 frente a 2,66, sin diferencia significativa."
    ],
    seq: [
      "Réplica registrada multilaboratorio|Diseño de un protocolo común>Revisión y prerregistro>Recogida independiente en muchos laboratorios>Análisis conjunto de los resultados"
    ],
    cls: [
      "Resultado de Vaidis et al. (2024)|Confirmado: cambio de actitud frente al ensayo neutro; aumento del malestar declarado|No confirmado: moderación por la libre elección; diferencia entre alta y baja elección"
    ] }
] },
{ n: 12, t: "La persuasión", cap: 5, pir: "alta", mods: [
  { t: "El programa de Yale",
    tip: "Hovland, Janis y Kelley (1953) estudiaron quién dice qué a quién: fuente, mensaje y receptor. Entendían la persuasión como un aprendizaje en fases: atención, comprensión, aceptación y retención. Destacan la credibilidad de la fuente (pericia y fiabilidad), el efecto durmiente, los mensajes bilaterales para audiencias informadas o contrarias, el miedo con recomendación concreta y la inoculación de McGuire.",
    v: [
      "Persuasión=Cambio de actitud por un mensaje elaborado con intención de influir",
      "Credibilidad de la fuente=Pericia y fiabilidad percibidas en quien emite el mensaje",
      "Pericia=Saber de lo que se habla",
      "Fiabilidad=No tener intención de engañar",
      "Efecto durmiente=Aumento tardío de la persuasión al separarse el contenido de una fuente dudosa",
      "Mensaje bilateral=Presenta también los argumentos contrarios y los refuta",
      "Inoculación=Ataque débil con su refutación que protege frente a ataques más fuertes (McGuire)",
      "Compromiso previo=Postura ya defendida, sobre todo en público, que dificulta el cambio"
    ],
    g: [
      "La pregunta guía del grupo de Yale era quién dice qué a ___.|quién|cuántos|cuándo",
      "Las apelaciones al miedo funcionan si incluyen una ___ concreta para evitar la amenaza.|recomendación|estadística|imagen",
      "Un mensaje unilateral funciona con audiencias poco informadas o ya ___.|de acuerdo|en contra|divididas",
      "El equipo de Yale lo reunió Carl ___.|Hovland|Kelley|Janis",
      "En el efecto durmiente, el recuerdo del contenido se ___ del recuerdo de la fuente.|separa|refuerza|alimenta"
    ],
    tf: [
      "Un mensaje bilateral que refuta los argumentos contrarios funciona mejor con audiencias informadas o inicialmente en contra.|V",
      "En el efecto durmiente, el mensaje de una fuente muy creíble pierde fuerza con el tiempo.|F|Es el mensaje de una fuente poco creíble el que gana efecto con el tiempo, al olvidarse de dónde venía.",
      "Sin una salida concreta, la apelación al miedo lleva a quitar importancia al peligro o a evitar el mensaje.|V",
      "El programa de Yale dejó una teoría del proceso que resolvía sus resultados contradictorios.|F|Dejó un catálogo de variables con resultados a menudo contradictorios. La falta de una teoría del proceso llevó a los modelos duales."
    ],
    q: [
      "Un instituto enseña a su alumnado a desmontar un ejemplo leve de bulo antes de que le lleguen otros más elaborados. ¿Qué aplica?|La inoculación de McGuire|El efecto durmiente|El mensaje unilateral|Exponer a un ataque débil, acompañado de su refutación, vuelve más resistente a ataques posteriores más fuertes.",
      "¿Qué dos componentes forman la credibilidad de la fuente?|Pericia y fiabilidad|Atractivo y simpatía|Pericia y atractivo|La credibilidad combina saber de lo que se habla y no tener intención de engañar. El atractivo es otra característica distinta.",
      "Para convencer a un público bien informado y contrario a una propuesta, ¿qué mensaje conviene más?|Bilateral, que refute los contrarios|Unilateral, solo con argumentos a favor|Emocional, sin recomendación concreta|Con audiencias informadas o en contra funciona mejor presentar los argumentos contrarios y refutarlos.",
      "¿A qué elemento del programa de Yale pertenecen el compromiso y el conocimiento previo?|Al receptor|A la fuente|Al mensaje|El compromiso previo, sobre todo si se ha expresado en público, hace más difícil el cambio del receptor."
    ],
    inc: [
      "Sobre el programa de Yale|El compromiso público previo facilita el cambio|El atractivo de la fuente aumenta la persuasión|La persuasión exigía atención y comprensión|El compromiso previo, sobre todo si se ha expresado en público, hace más difícil el cambio."
    ],
    seq: [
      "Fases de la persuasión según el grupo de Yale|Atención>Comprensión>Aceptación>Retención"
    ],
    cls: [
      "Elemento del programa de Yale|Fuente: pericia; fiabilidad; atractivo|Mensaje: unilateral o bilateral; apelación al miedo con recomendación|Receptor: compromiso previo; inoculación"
    ] },
  { t: "El modelo de probabilidad de elaboración",
    tip: "En el ELM (Petty y Cacioppo, 1986), la probabilidad de elaborar depende de la motivación (implicación personal, necesidad de cognición) y de la capacidad (distracción, conocimiento previo). Con ambas se sigue la ruta central, con cambios duraderos que predicen la conducta, y si falta alguna, la periférica, guiada por claves. Petty, Cacioppo y Goldman (1981) mostraron esa interacción, y una misma variable puede cumplir varios papeles.",
    v: [
      "Elaboración=Grado en que se piensa en los argumentos y se relacionan con lo ya sabido",
      "Ruta central=Cambio basado en el análisis de los argumentos, duradero y resistente",
      "Ruta periférica=Cambio basado en claves superficiales, temporal y frágil",
      "Implicación personal=El tema afecta directamente al receptor",
      "Necesidad de cognición=Rasgo estable de las personas que disfrutan pensando",
      "Distracción=Factor que reduce la capacidad de procesar un mensaje",
      "Clave periférica=Indicio simple, como el atractivo o el número de argumentos",
      "Contraargumentos=Pensamientos en contra que genera un argumento débil"
    ],
    g: [
      "En el ELM, la distracción reduce la ___ para procesar.|capacidad|motivación|implicación",
      "En Petty, Cacioppo y Goldman (1981), el mensaje proponía un ___ obligatorio antes de graduarse.|examen general|trabajo final|curso extra",
      "Con implicación alta, la actitud dependía sobre todo de la ___ de los argumentos.|calidad|cantidad|longitud",
      "Las dos rutas del ELM son extremos de un ___, no compartimentos estancos.|continuo|ciclo|sistema",
      "El conocimiento previo del tema aumenta la ___ para procesar.|capacidad|necesidad|presión"
    ],
    tf: [
      "En la ruta central, unos argumentos débiles pueden reforzar la postura inicial del receptor.|V",
      "Los cambios de actitud por la ruta periférica son duraderos y predicen bien la conducta.|F|Son temporales y frágiles, y predicen débilmente la conducta. Los duraderos son los de la ruta central.",
      "Según el ELM, el atractivo de quien anuncia un champú puede funcionar como argumento.|V",
      "En Petty, Cacioppo y Goldman (1981), con implicación alta la pericia de la fuente decidía la actitud.|F|Con implicación alta decidía la calidad de los argumentos. La pericia pesaba con implicación baja."
    ],
    q: [
      "Lucía va a contratar una hipoteca y lee con calma las condiciones de dos bancos. ¿Qué ruta sigue y qué pesará más?|Central, la calidad de los argumentos|Periférica, la pericia de la fuente|Central, el número de argumentos|Hay motivación y capacidad, así que analiza los argumentos. El número de argumentos actúa como clave periférica.",
      "¿Qué variable aumenta la motivación para procesar un mensaje?|La necesidad de cognición|El conocimiento previo del tema|La ausencia de distracción|La motivación crece con la implicación y la necesidad de cognición. El conocimiento y la distracción afectan a la capacidad.",
      "¿Cómo resolvió el ELM las contradicciones del programa de Yale?|Su efecto depende del nivel de elaboración|La fuente pesa siempre más que el mensaje|El receptor anula el efecto de las demás|Una misma variable puede ser clave, argumento, motivo para atender o sesgo, según cuánto se elabore.",
      "Un estudiante, distraído viendo una serie, oye un anuncio que da muchas razones para cambiar de banco. Según el ELM, ¿qué puede influirle?|El número de argumentos como clave|La calidad de cada argumento|Los contraargumentos que genere|Sin capacidad para procesar, sigue la ruta periférica, y el número de argumentos actúa como clave."
    ],
    inc: [
      "Sobre las rutas del ELM|La periférica resiste bien los contraargumentos|La ruta central exige motivación y capacidad|La ruta periférica se guía por claves sencillas|La resistencia a los contraargumentos es alta en la ruta central y baja en la periférica."
    ],
    seq: [],
    cls: [
      "Ruta del ELM|Central: calidad de los argumentos; cambio duradero; buena predicción de la conducta|Periférica: atractivo de la fuente; número de argumentos; cambio temporal"
    ] },
  { t: "El modelo heurístico‑sistemático y las críticas",
    tip: "El HSM de Chaiken (1980) distingue un procesamiento sistemático y otro heurístico, que pueden coexistir e influirse, y añade el principio de suficiencia: se procesa hasta alcanzar la confianza que se considera bastante. Al ELM se le critica la falsabilidad, por cómo define la calidad de los argumentos, y el unimodelo de Kruglanski y Thompson (1999) propone un solo proceso. Además, el ELM no se ha sometido a una réplica registrada multilaboratorio.",
    v: [
      "HSM=Modelo heurístico‑sistemático de Chaiken (1980)",
      "Procesamiento sistemático=Examen cuidadoso del contenido y de los argumentos",
      "Procesamiento heurístico=Uso de reglas sencillas aprendidas para juzgar el mensaje",
      "Principio de suficiencia=Se procesa hasta alcanzar la confianza bastante para juzgar",
      "Coexistencia=Los dos modos de procesar pueden actuar a la vez e influirse",
      "Unimodelo=Clave y argumento son información de un mismo proceso (Kruglanski y Thompson)",
      "Falsabilidad=Posibilidad de que algún resultado contradiga una teoría",
      "Heurístico de pericia=Regla «los expertos suelen tener razón»"
    ],
    g: [
      "El HSM lo propuso Shelly ___ en 1980.|Chaiken|Petty|Cacioppo",
      "Si la decisión es importante, el umbral de ___ sube y se procesa de forma sistemática.|suficiencia|elaboración|activación",
      "«Un mensaje largo tendrá buenos motivos» es un ___ en el sentido del HSM.|heurístico|argumento|principio",
      "El unimodelo lo defendieron Kruglanski y ___ (1999).|Thompson|Chaiken|Fazio",
      "En el ELM, la calidad de un argumento se define en la práctica por los ___ que genera.|pensamientos|cambios|recuerdos"
    ],
    tf: [
      "En el HSM, como en el ELM, más elaboración implica siempre menos peso de las claves.|F|En el HSM los dos modos pueden actuar a la vez, y lo heurístico influye incluso con procesamiento sistemático.",
      "Según el unimodelo, lo que varía con la motivación y los recursos es cuánta información, y de qué complejidad, se procesa.|V",
      "El ELM se ha sometido, como la disonancia, a una réplica registrada multilaboratorio.|F|A diferencia de la disonancia o del agotamiento del ego, el ELM no tiene una réplica de ese tipo.",
      "Ninguna crítica niega que no todos los mensajes se procesan con el mismo cuidado.|V"
    ],
    q: [
      "Andrés analiza los argumentos de un informe ambiguo y, a la vez, se deja orientar por el prestigio del organismo que lo firma. ¿Qué modelo describe mejor el caso?|El HSM de Chaiken|El ELM de Petty y Cacioppo|El unimodelo de Kruglanski|Los modos sistemático y heurístico pueden coexistir, sobre todo cuando los argumentos son ambiguos.",
      "¿Por qué se critica la falsabilidad del ELM?|Define la calidad del argumento por su efecto|No distingue entre dos rutas de persuasión|Ignora la capacidad de procesar del receptor|Un argumento es fuerte si produce pensamientos favorables, lo que hace difícil saber qué resultado contradiría el modelo.",
      "Según Kruglanski y Thompson (1999), muchos experimentos confundían el tipo de proceso con…|la complejidad de la información|la credibilidad de la fuente|el estado de ánimo del receptor|Las claves eran breves y fáciles, y los argumentos, largos y complejos.",
      "¿Qué añade el HSM, además de la motivación y la capacidad, para explicar cuánto se procesa?|El principio de suficiencia|La necesidad de cognición|La latitud de aceptación|Se procesa hasta alcanzar una confianza suficiente. Si el heurístico ya la da, no se sigue procesando."
    ],
    inc: [
      "Sobre el HSM|Sus dos modos son incompatibles entre sí|Distingue procesamiento sistemático y heurístico|Incluye el principio de suficiencia|Los procesamientos sistemático y heurístico pueden darse a la vez e influirse."
    ],
    seq: [],
    cls: [
      "Modelo dual|ELM: ruta central y periférica; claves periféricas de muchos tipos; extremos de un continuo|HSM: sistemático y heurístico; principio de suficiencia; modos que coexisten"
    ] },
  { t: "Principios de influencia y técnicas de cumplimiento",
    tip: "Cialdini estudió el cumplimiento, aceptar una petición aunque la actitud no cambie, y lo agrupó en reciprocidad, compromiso y coherencia, prueba social, simpatía, autoridad y escasez, más la unidad desde 2016. El pie en la puerta (Freedman y Fraser, 1966) se apoya en la coherencia, la puerta en la cara (Cialdini et al., 1975) en la reciprocidad y la bola baja (Cialdini et al., 1978) en el compromiso. Funcionan cuando se procesa poco.",
    v: [
      "Cumplimiento=Aceptar una petición directa aunque la actitud no cambie",
      "Reciprocidad=Obligación sentida de devolver lo recibido",
      "Prueba social=Hacer lo que hacen otros parecidos a nosotros",
      "Reactancia psicológica=Desear más algo cuando se amenaza la libertad de elegirlo (Brehm, 1966)",
      "Pie en la puerta=Petición pequeña aceptada seguida de otra mayor (Freedman y Fraser, 1966)",
      "Puerta en la cara=Petición exagerada rechazada seguida de una moderada (Cialdini et al., 1975)",
      "Bola baja=Compromiso con una oferta atractiva cuyas condiciones luego empeoran",
      "Efecto de tercera persona=Creer que la publicidad influye en los demás pero no en uno mismo"
    ],
    g: [
      "«Últimas plazas a este precio» apela al principio de ___.|escasez|autoridad|reciprocidad",
      "La puerta en la cara se apoya sobre todo en la ___.|reciprocidad|coherencia|escasez",
      "El pie en la puerta se apoya en la ___: quien aceptó lo pequeño se ve como alguien que colabora.|coherencia|reciprocidad|autoridad",
      "En 2016, Cialdini añadió un séptimo principio, la ___.|unidad|simpatía|escasez",
      "El vendedor que comparte aficiones con el cliente aprovecha la ___.|simpatía|autoridad|escasez"
    ],
    tf: [
      "En la puerta en la cara se empieza con una petición pequeña que casi todo el mundo acepta.|F|Eso es el pie en la puerta. La puerta en la cara empieza con una petición exagerada que se espera que se rechace.",
      "La bola baja consigue el compromiso con una oferta atractiva y después empeora las condiciones.|V",
      "La técnica «esto no es todo» mejora la oferta antes de que el cliente responda.|V",
      "Frente a estas técnicas, la mejor defensa es decidir de forma rápida e intuitiva.|F|Actúan cuando se procesa poco, así que la mejor defensa es detenerse a pensar en la petición en sí."
    ],
    q: [
      "Carla compra un billete barato en internet, en el último paso aparecen unos «gastos de gestión» y lo paga igualmente. ¿Qué técnica ha sufrido?|Bola baja|Pie en la puerta|«Esto no es todo»|Se logra el compromiso con una oferta atractiva y después se empeoran las condiciones.",
      "Una vecina firma una petición sencilla para poner un banco en el parque y semanas después acepta coordinar una recogida de firmas. ¿Qué técnica se usó?|Pie en la puerta|Puerta en la cara|Bola baja|Tras aceptar algo pequeño, la persona se ve como alguien que colabora y acepta más fácilmente la petición mayor.",
      "¿Cómo se relaciona la escasez con la reactancia psicológica?|Lo que amenaza nuestra libertad se desea más|La reactancia resta valor a lo que escasea|La escasez elimina la reactancia del cliente|Según Brehm (1966), cuando sentimos amenazada la libertad de elegir algo, lo deseamos más.",
      "Una bata blanca en un anuncio de pasta de dientes apela al principio de…|autoridad|prueba social|unidad|Seguimos a quien parece experto o tiene poder, y la bata blanca transmite pericia."
    ],
    inc: [
      "Sobre los principios de Cialdini|Persiguen ante todo un cambio profundo de actitud|Funcionan como atajos que suelen ser razonables|Se basan en experimentos y en observar a vendedores|Buscan el cumplimiento, que se acepte una petición, aunque la actitud no cambie."
    ],
    seq: [
      "Puerta en la cara|Petición exagerada>Rechazo esperado>Petición moderada>Aceptación como concesión recíproca"
    ],
    cls: [
      "Principio en que se apoya|Compromiso y coherencia: pie en la puerta; bola baja|Reciprocidad: puerta en la cara; muestra gratuita en el supermercado|Escasez: «últimas plazas a este precio»; reactancia psicológica"
    ] }
] }
);

// SAIMAP Psicología · Social · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Los estereotipos", cap: 6, pir: "media", mods: [
  { t: "Estereotipo, prejuicio y discriminación",
    tip: "Siguiendo el modelo tripartito, el estereotipo es el componente cognitivo, el prejuicio el afectivo y la discriminación el conductual. Un estereotipo puede ser positivo, pero el prejuicio es por definición negativo. Los estereotipos se forman por socialización, experiencia y sesgos como la correlación ilusoria y la homogeneidad del exogrupo, y se mantienen por atención selectiva, reinterpretación y subtipos. Devine (1989) mostró que se activan de forma automática y que quien tiene poco prejuicio los corrige de forma controlada.",
    v: [
      "Estereotipo=Creencias compartidas sobre los rasgos de un grupo, positivas o negativas",
      "Prejuicio=Actitud negativa hacia un grupo y sus miembros por el hecho de pertenecer a él",
      "Discriminación=Trato desigual por la pertenencia a un grupo, no por los rasgos individuales",
      "Correlación ilusoria=Asociación percibida, pero inexistente, entre dos sucesos poco frecuentes",
      "Homogeneidad del exogrupo=Ver a los miembros de otros grupos más parecidos entre sí que a los propios",
      "Subtipo=Categoría de «excepción» que aísla al miembro atípico y deja intacta la creencia general",
      "Devine (1989)=Estereotipos que se activan de forma automática y se corrigen de forma controlada",
      "Weber y Crocker (1983)=La información contraria repartida entre muchos miembros cambia más la creencia"
    ],
    g: [
      "Descartar un currículum por el apellido del candidato es un ejemplo de ___.|discriminación|prejuicio|estereotipo",
      "En el modelo tripartito, el prejuicio corresponde al componente ___.|afectivo|cognitivo|conductual",
      "En Hamilton y Gifford (1976), ambos grupos tenían la misma ___ de conductas deseables e indeseables.|proporción|cantidad|valoración",
      "Un estudiante de Medicina que describe a «los de Derecho» como todos iguales muestra la homogeneidad del ___.|exogrupo|endogrupo|prototipo",
      "La información contraria cambia menos el estereotipo si se concentra en unos pocos casos muy ___.|atípicos|típicos|frecuentes"
    ],
    tf: [
      "Un estereotipo puede ser positivo, pero el prejuicio, por definición, es negativo.|V",
      "Según Devine (1989), a las personas con poco prejuicio no se les llegan a activar los estereotipos de su cultura.|F|Casi todo el mundo los conoce y se le activan de forma automática. Quien tiene poco prejuicio los corrige de forma controlada.",
      "En Hamilton y Gifford, el grupo minoritario realizaba en proporción más conductas negativas que el mayoritario.|F|La proporción era la misma. Se le atribuyeron más porque lo infrecuente unido a lo infrecuente llama la atención.",
      "Las normas de la situación pueden frenar o facilitar la discriminación aunque la actitud no cambie.|V"
    ],
    q: [
      "Lucía cree que los conductores mayores son torpes y considera a su abuelo, que conduce con soltura, «un caso especial». ¿Qué mecanismo mantiene su estereotipo?|La creación de un subtipo|La correlación ilusoria|La homogeneidad del exogrupo|El miembro que contradice el estereotipo se aparta como excepción y la creencia general queda intacta.",
      "¿Qué distingue, según Devine (1989), a las personas con poco prejuicio?|Corrigen el estereotipo activado|No conocen los estereotipos culturales|El estereotipo no se les activa nunca|Casi todos conocen los estereotipos y se activan de forma automática. La diferencia está en la corrección controlada.",
      "¿Por qué se atribuyeron más conductas negativas al grupo pequeño en el estudio de Hamilton y Gifford?|Por coincidir dos sucesos infrecuentes|Porque su conducta se describía mejor|Porque hacía más conductas indeseables|La combinación de grupo poco frecuente y conducta poco frecuente resulta llamativa, aunque la proporción fuera la misma.",
      "Según Weber y Crocker (1983), ¿qué información contraria cambia más un estereotipo?|Repartida entre muchos miembros|Concentrada en pocos casos atípicos|Aportada por un miembro muy conocido|Los casos muy atípicos son fáciles de aislar como subtipo. La información dispersa resiste mejor esa maniobra."
    ],
    inc: [
      "Sobre estereotipo, prejuicio y discriminación|El prejuicio puede ser positivo, como el estereotipo|La discriminación es el componente conductual|Una actitud no siempre se traduce en conducta|Es la trampa típica: un estereotipo puede ser positivo, pero el prejuicio es por definición una actitud negativa."
    ],
    seq: [],
    cls: [
      "Término|Estereotipo: componente cognitivo; creencias sobre los rasgos del grupo; «los informáticos son poco sociables»|Prejuicio: componente afectivo; emociones negativas hacia el grupo; incomodidad al tratar con alguien del grupo|Discriminación: componente conductual; trato desigual; descartar un currículum por el apellido"
    ] },
  { t: "El modelo del contenido de los estereotipos",
    tip: "El modelo del contenido de los estereotipos (Fiske, Cuddy, Glick y Xu, 2002) organiza los estereotipos en calidez y competencia. La competición percibida predice la calidez, y el estatus, la competencia. Al cruzarlas aparecen admiración, paternalismo, envidia y desprecio, y muchos estereotipos resultan ambivalentes. El mapa BIAS (Cuddy et al., 2007) liga la calidez a conductas activas y la competencia a conductas pasivas.",
    v: [
      "Calidez=Percepción de buenas o malas intenciones del grupo hacia nosotros",
      "Competencia=Percepción de la capacidad del grupo para llevar a cabo sus intenciones",
      "Admiración=Emoción ante grupos cálidos y competentes, como el endogrupo o la clase media",
      "Paternalismo=Emoción ante grupos cálidos pero poco capaces, como las personas mayores",
      "Envidia=Emoción ante grupos capaces pero fríos, como los ricos o los profesionales",
      "Desprecio=Emoción ante grupos fríos e incapaces, como las personas sin hogar",
      "Estereotipo ambivalente=Contenido positivo en una dimensión y negativo en la otra",
      "Mapa BIAS=Extensión del modelo a la conducta propuesta por Cuddy et al. (2007)"
    ],
    g: [
      "Según el SCM, la calidez atribuida a un grupo se predice sobre todo a partir de la ___ percibida.|competición|competencia|similitud",
      "Según el SCM, la competencia atribuida a un grupo se predice a partir de su ___.|estatus|tamaño|cercanía",
      "En el mapa BIAS, la calidez predice sobre todo conductas ___.|activas|pasivas|verbales",
      "En tiempos de crisis, el grupo que suscita ___ puede convertirse en blanco de agresión activa.|envidia|desprecio|paternalismo",
      "Durante et al. (2017) hallaron estereotipos más ambivalentes en sociedades con desigualdad ___.|moderada|extrema|mínima"
    ],
    tf: [
      "El SCM propone que a los grupos que compiten con nosotros por recursos se les ve como poco competentes.|F|La competición predice la calidez: a los competidores se les ve como fríos. La competencia se predice por el estatus.",
      "Hablar con condescendencia a una persona mayor puede nacer de un estereotipo en apariencia simpático.|V",
      "En el mapa BIAS, el desprecio se asocia sobre todo con el abandono y la exclusión.|V",
      "Según el SCM, la mayoría de los estereotipos son uniformemente negativos en ambas dimensiones.|F|Su aportación principal es mostrar que muchos son ambivalentes: cálidos pero incapaces, o capaces pero fríos."
    ],
    q: [
      "En una empresa, el equipo de ventas describe al de ingeniería como «brillantes, pero imposibles de tratar». ¿Qué emoción predice el SCM?|Envidia|Admiración|Paternalismo|Competencia alta y calidez baja corresponden a la envidia. El paternalismo es la combinación inversa.",
      "Un grupo percibido como cálido pero poco competente suscita, según el SCM…|paternalismo o compasión|envidia hacia el grupo|desprecio y exclusión|Calidez alta y competencia baja corresponden al paternalismo, como con las personas mayores o con discapacidad.",
      "Según el mapa BIAS, ¿qué dimensión predice sobre todo conductas pasivas, como colaborar por conveniencia o ignorar?|La competencia|La calidez|El estatus|La calidez predice conductas activas, como ayudar o atacar, y la competencia, conductas pasivas.",
      "¿Qué función atribuyen Durante et al. (2017) a la ambivalencia de los estereotipos?|Hacer aceptables las diferencias|Aumentar la hostilidad entre grupos|Reducir la desigualdad económica|Con desigualdad moderada, repartir virtudes y defectos ayuda a aceptar las diferencias, lo que conecta con la justificación del sistema."
    ],
    inc: [
      "Sobre el modelo del contenido de los estereotipos|El estatus percibido predice la calidez del grupo|La calidez responde a si el grupo viene a ayudar|El endogrupo suele situarse en la admiración|Es la inversión típica: el estatus predice la competencia, y la competición percibida, la calidez."
    ],
    seq: [],
    cls: [
      "Dimensión del SCM|Calidez: amable; sincero; de confianza; predicha por la competición|Competencia: hábil; eficaz; inteligente; predicha por el estatus"
    ] },
  { t: "La justificación del sistema",
    tip: "Tajfel (1981) distinguió funciones individuales y sociales de los estereotipos. La teoría de la justificación del sistema (Jost y Banaji, 1994) añade un motivo para ver el orden social como legítimo, justo y estable. En los grupos desfavorecidos, ese motivo choca con la justificación del yo y del grupo, lo que explica que acepten estereotipos que les perjudican. Su efecto paliativo reduce el malestar ante la desigualdad, pero también el apoyo al cambio social.",
    v: [
      "Justificación del sistema=Motivación para ver el orden social existente como legítimo y justo",
      "Jost y Banaji (1994)=Autores de la teoría que atribuye a los estereotipos una función ideológica",
      "Función ideológica=Hacer que las diferencias de estatus y poder parezcan naturales o merecidas",
      "Justificación del yo=Motivo que defiende la propia imagen",
      "Justificación del grupo=Motivo que defiende la imagen del endogrupo",
      "Estereotipos complementarios=Compensan una desventaja con una virtud, como «pobres pero honrados»",
      "Favoritismo exogrupal=Evaluar mejor al grupo dominante, propio de grupos de estatus bajo",
      "Efecto paliativo=Menos malestar ante la desigualdad y más sensación de orden y control"
    ],
    g: [
      "Tajfel (1981) incluyó entre las funciones ___ de los estereotipos justificar las acciones contra otros grupos.|sociales|individuales|cognitivas",
      "Para los grupos ___, los motivos de justificar el yo, el grupo y el sistema van en la misma dirección.|favorecidos|desfavorecidos|minoritarios",
      "Atribuir las posiciones sociales al esfuerzo individual es una creencia ___.|meritocrática|complementaria|paternalista",
      "Las creencias meritocráticas conectan con la creencia en un mundo justo de ___.|Lerner|Tajfel|Allport",
      "El precio de la justificación del sistema es que disminuye el apoyo al ___ social.|cambio|orden|control"
    ],
    tf: [
      "La teoría de la identidad social explica por sí sola que los grupos desfavorecidos favorezcan al exogrupo de estatus alto.|F|Eso es lo que deja sin explicar. La justificación del sistema lo atribuye al motivo de legitimar el orden social.",
      "La justificación del sistema puede reducir el apoyo al cambio social incluso entre quienes se beneficiarían de él.|V",
      "«Las mujeres son menos racionales pero más sensibles» es un ejemplo de estereotipo complementario.|V",
      "Que la justificación del sistema sea un motivo propio, distinto de la identidad social, es un hecho consensuado.|F|Está en debate si es un motivo propio o una consecuencia de otros procesos, como la identidad social."
    ],
    q: [
      "Unas trabajadoras de limpieza que cobran mucho menos que el personal de oficina dicen que «es lógico, porque los de arriba han estudiado más». ¿Qué proceso ilustran?|Justificación del sistema|Homogeneidad del exogrupo|Correlación ilusoria|Convierten una diferencia discutible en algo legítimo, aunque las perjudique: es el motivo de justificar el sistema.",
      "«Si no me ascienden, es porque no he tenido suerte.» ¿Qué motivo expresa esta frase?|Justificación del yo|Justificación del grupo|Justificación del sistema|Defiende la propia imagen. Justificar el sistema sería presentar el orden social como justo.",
      "¿Por qué parte de los miembros de un grupo desfavorecido acepta estereotipos que les perjudican?|Justificar el sistema choca con los otros motivos|Buscan una identidad positiva por comparación|Perciben al exogrupo como más homogéneo|Para los desfavorecidos, el motivo de justificar el sistema entra en conflicto con justificar el yo y el grupo.",
      "¿Con qué forma de prejuicio enlaza el análisis de la justificación del sistema?|El sexismo benévolo|El racismo aversivo|El prejuicio manifiesto|Un trato protector y aparentemente positivo puede contribuir a mantener una desigualdad."
    ],
    inc: [
      "Sobre la justificación del sistema|Aumenta el malestar ante la desigualdad|Hace que la desigualdad parezca merecida|Explica el favoritismo exogrupal en grupos de estatus bajo|Su efecto es paliativo: reduce la incomodidad ante la desigualdad y da sensación de orden y control."
    ],
    seq: [],
    cls: [
      "Motivo|Justificación del yo: la propia imagen; «no he tenido suerte»|Justificación del grupo: la imagen del endogrupo; «los de mi barrio son más trabajadores»|Justificación del sistema: el orden social en su conjunto; «quien se esfuerza, llega»"
    ] },
  { t: "Amenaza del estereotipo y profecías que se cumplen",
    tip: "Steele y Aronson (1995) mostraron que temer confirmar un estereotipo negativo puede empeorar el rendimiento cuando la prueba se presenta como diagnóstica. Hoy se matiza: hay sesgo de publicación (Flore y Wicherts, 2015) y en condiciones de examen real el efecto es pequeño, d de −0,14 (Shewach et al., 2019). Las profecías autocumplidas existen (Word, Zanna y Cooper, 1974), pero el efecto Pigmalión es pequeño, no se acumula y muchas expectativas docentes son precisas (Jussim y Harber, 2005).",
    v: [
      "Amenaza del estereotipo=Peor rendimiento por temor a confirmar una creencia negativa sobre el propio grupo",
      "Steele y Aronson (1995)=Prueba verbal difícil presentada o no como diagnóstica de la capacidad",
      "Profecía autocumplida=Expectativa falsa que provoca conductas que acaban haciéndola verdadera",
      "Efecto Pigmalión=Mejora de alumnos elegidos al azar de quienes el profesorado espera mucho",
      "Word, Zanna y Cooper=Entrevistas frías a candidatos negros y peor rendimiento de blancos tratados igual",
      "Jussim y Harber (2005)=Efectos de las expectativas docentes reales, pequeños y no acumulativos",
      "Sesgo de publicación=Más probabilidad de publicar resultados positivos, lo que infla el efecto",
      "Shewach, Sackett y Quint=Metaanálisis de 45 estudios en condiciones de examen real (2019)"
    ],
    g: [
      "En Steele y Aronson, la diferencia aparecía cuando la prueba se presentaba como ___ de la capacidad intelectual.|diagnóstica|independiente|ajena",
      "Flore y Wicherts (2015) hallaron indicios de sesgo de ___ en los estudios sobre niñas y matemáticas.|publicación|selección|respuesta",
      "En condiciones parecidas a las de un examen real, la amenaza del estereotipo mostró un efecto ___.|pequeño|grande|nulo",
      "Según Jussim y Harber, los efectos de las expectativas del profesorado no se ___ con los años.|acumulan|reducen|detectan",
      "En Rosenthal y Jacobson, la mejora se observó sobre todo en los ___ cursos.|primeros|últimos|intermedios"
    ],
    tf: [
      "Entre los mecanismos propuestos para la amenaza del estereotipo figuran la ansiedad y la menor memoria de trabajo disponible.|V",
      "La amenaza del estereotipo basta por sí sola para explicar las diferencias de rendimiento entre grupos.|F|Existe en el laboratorio, pero en situaciones reales su tamaño parece pequeño y no basta para explicarlas.",
      "Muchas expectativas del profesorado predicen el rendimiento porque reflejan información válida sobre el alumno.|V",
      "En Word, Zanna y Cooper, los candidatos blancos tratados con estilo frío rindieron mejor por el reto añadido.|F|Rindieron peor y fueron evaluados como menos adecuados: la expectativa generó la conducta que parecía confirmarla."
    ],
    q: [
      "Un entrenador convencido de que una jugadora nueva «no tiene carácter» le da menos minutos. Ella progresa menos, y él lo toma como prueba. ¿Qué fenómeno es?|Una profecía autocumplida|La amenaza del estereotipo|Un estereotipo complementario|La expectativa inicial provoca un trato que genera la conducta que parece confirmarla.",
      "¿Qué concluye la revisión de Jussim y Harber (2005) sobre el efecto Pigmalión?|Que es real, pero pequeño|Que es grande y acumulativo|Que no existe en ningún caso|Los efectos de las expectativas son reales, pequeños y no se acumulan, y muchas expectativas docentes son precisas.",
      "¿Qué tamaño de efecto obtuvieron Shewach, Sackett y Quint (2019) en condiciones de examen real?|Pequeño, de −0,14|Grande, cercano a 0,8|Moderado, cercano a 0,5|Con 45 estudios y 3.532 participantes, el efecto fue pequeño, lo que obliga a matizar el alcance del fenómeno.",
      "En Steele y Aronson, ¿qué ocurría cuando la prueba se presentaba como un simple ejercicio de laboratorio?|La diferencia se reducía mucho|La diferencia aumentaba mucho|Los dos grupos rendían peor|Solo al presentarla como diagnóstica de la capacidad intelectual aparecía con fuerza el peor rendimiento del grupo estereotipado."
    ],
    inc: [
      "Sobre las expectativas y la amenaza del estereotipo|Las expectativas docentes elevan mucho el CI a largo plazo|Rosenthal y Jacobson eligieron a los alumnos al azar|El efecto Pigmalión fue muy criticado por su método|Es el mito frecuente: el efecto es pequeño y no se acumula, y muchas expectativas aciertan porque reflejan información real."
    ],
    seq: [
      "Profecía autocumplida en Word, Zanna y Cooper|Expectativa negativa del entrevistador>Trato frío en la entrevista>Peor rendimiento del candidato>Expectativa aparentemente confirmada"
    ],
    cls: [] }
] },
{ n: 14, t: "Prejuicio y discriminación: causas, formas y remedios", cap: 6, pir: "alta", mods: [
  { t: "Teorías de personalidad",
    tip: "Adorno et al. (1950) describieron la personalidad autoritaria desde un marco psicoanalítico y la midieron con la escala F, criticada por tener todos los ítems en la misma dirección y por no explicar cambios rápidos ni prejuicios compartidos. Altemeyer (1981) la redujo al RWA: sumisión autoritaria, agresión autoritaria y convencionalismo. Pratto et al. (1994) definieron la SDO como la preferencia por la jerarquía entre grupos. Ambas se correlacionan de forma moderada y hoy se ven como actitudes ideológicas sensibles al contexto.",
    v: [
      "Personalidad autoritaria=Perfil de sumisión, rigidez y hostilidad a los débiles (Adorno et al., 1950)",
      "Escala F=Instrumento de Adorno et al. con todos los ítems redactados en la misma dirección",
      "RWA=Sumisión autoritaria, agresión autoritaria y convencionalismo (Altemeyer, 1981)",
      "SDO=Preferencia por la jerarquía y la desigualdad entre grupos (Pratto et al., 1994)",
      "Convencionalismo=Adhesión a las normas tradicionales",
      "Agresión autoritaria=Hostilidad contra quienes las autoridades señalan como desviados",
      "Sumisión autoritaria=Acatamiento de las autoridades consideradas legítimas",
      "Aquiescencia=Tendencia a estar de acuerdo con cualquier afirmación, que inflaba la escala F"
    ],
    g: [
      "La escala F debe su nombre al ___.|fascismo|freudismo|formalismo",
      "Adorno et al. situaron el origen de la personalidad autoritaria en una crianza muy estricta y ___.|punitiva|permisiva|inconsistente",
      "Según Adorno et al., la hostilidad hacia los padres se ___ hacia blancos más débiles.|desplazaría|sublimaría|disolvería",
      "La ___ predice sobre todo el prejuicio hacia grupos de estatus bajo y el rechazo de las políticas de igualdad.|SDO|RWA|escala F",
      "RWA y SDO se correlacionan solo de forma ___.|moderada|perfecta|negativa"
    ],
    tf: [
      "La preferencia por la jerarquía entre grupos es uno de los tres componentes de la RWA.|F|Define la SDO. Los componentes de la RWA son sumisión autoritaria, agresión autoritaria y convencionalismo.",
      "Una crítica teórica a la personalidad autoritaria es que no explica cambios rápidos del prejuicio en toda una sociedad.|V",
      "RWA y SDO aportan cada una una parte propia a la predicción del prejuicio.|V",
      "Hoy RWA y SDO se entienden como rasgos fijos de personalidad que no dependen del contexto.|F|Se entienden más como actitudes ideológicas que pueden aumentar si el mundo se percibe como peligroso o competitivo."
    ],
    q: [
      "Ante la llegada de refugiados, a Andrés le preocupa sobre todo que «quieran los mismos derechos». ¿Qué dimensión explica mejor su rechazo?|La SDO|La RWA|La escala F|Remite a la preferencia por la jerarquía entre grupos. Con RWA alta preocuparía más que «cambien nuestras costumbres».",
      "¿Qué crítica metodológica recibió la escala F?|Sus ítems iban en la misma dirección|Se basaba en tiempos de reacción|Medía actitudes y no la conducta|La tendencia a estar de acuerdo con cualquier afirmación inflaba las puntuaciones.",
      "¿Qué límite de la personalidad autoritaria ilustra la segregación legal en EE. UU.?|Que el prejuicio puede ser una norma compartida|Que la escala F inflaba las puntuaciones|Que la crianza punitiva es difícil de medir|Cuando la discriminación está en las leyes, no hace falta una personalidad especial: basta con conformarse a la norma.",
      "¿Qué autor reformuló el autoritarismo en tres componentes, con una escala mejor construida?|Altemeyer|Pratto|Adorno|Altemeyer (1981) propuso el autoritarismo de derechas. Pratto et al. definieron la SDO, y Adorno et al., la escala F."
    ],
    inc: [
      "Sobre la personalidad autoritaria|Su explicación sobre la crianza era fácil de poner a prueba|Partía de un marco teórico psicoanalítico|Incluía la intolerancia a la ambigüedad|La explicación psicoanalítica sobre la crianza era difícil de poner a prueba, una de sus críticas metodológicas."
    ],
    seq: [],
    cls: [
      "Dimensión|RWA: sumisión autoritaria; agresión autoritaria; convencionalismo; grupos vistos como amenaza al orden|SDO: preferencia por la jerarquía; desigualdad entre grupos; grupos de estatus bajo"
    ] },
  { t: "Conflicto, identidad y evolución",
    tip: "Sherif atribuyó el prejuicio a la competición por recursos escasos. En Robbers Cave, con 22 chicos divididos en Eagles y Rattlers, la competición generó hostilidad, y no la redujo el simple contacto, sino las metas supraordinadas. Perry (2018) aconseja leerlo como una demostración. El grupo mínimo de Tajfel muestra favoritismo sin competición, y la autocategorización añade la despersonalización. Cottrell y Neuberg (2005) proponen emociones específicas ante amenazas específicas.",
    v: [
      "Conflicto realista=Prejuicio nacido de la competición por recursos escasos (Sherif)",
      "Robbers Cave=Campamento de Oklahoma donde se estudió a los Eagles y los Rattlers",
      "Meta supraordinada=Objetivo que ningún grupo alcanza solo y que exige cooperar",
      "Grupo mínimo=Paradigma de Tajfel en que una categorización trivial ya genera favoritismo",
      "Autocategorización=Teoría de Turner et al. (1987) sobre la saliencia de la identidad grupal",
      "Despersonalización=Verse a uno mismo y a los demás como ejemplares intercambiables de la categoría",
      "Perry (2018)=Documentó problemas en Robbers Cave, como un experimento fallido de 1953",
      "Cottrell y Neuberg (2005)=Reacciones emocionales específicas ante amenazas específicas de otros grupos"
    ],
    g: [
      "En Robbers Cave participaron ___ chicos de unos 11 años.|22|40|12",
      "El simple contacto en actividades ___ no bastó para reducir la hostilidad en Robbers Cave.|agradables|competitivas|obligatorias",
      "Una avería en el suministro de agua del campamento funcionó como una meta ___.|supraordinada|intermedia|subordinada",
      "Según Cottrell y Neuberg, un grupo percibido como amenaza a los recursos provoca sobre todo ___.|ira|miedo|asco",
      "Ver a alguien solo como «uno de ellos» refleja la ___ descrita por la autocategorización.|despersonalización|desindividuación|deshumanización"
    ],
    tf: [
      "En Robbers Cave, la hostilidad se redujo sobre todo gracias al contacto en actividades agradables.|F|Ese contacto no bastó. Lo que funcionó fueron las metas supraordinadas, que exigían cooperar de forma repetida.",
      "Los experimentos del grupo mínimo los realizó Sherif para mostrar que basta una categorización trivial.|F|Son de Tajfel. Sherif es el autor de Robbers Cave y de la teoría del conflicto realista.",
      "Según Cottrell y Neuberg, dos grupos igual de rechazados pueden suscitar emociones y conductas distintas.|V",
      "Un origen evolutivo del prejuicio no lo hace inevitable, porque las normas y el contacto lo modulan.|V"
    ],
    q: [
      "Dos clases rivales de un instituto deben organizar juntas un viaje que ninguna puede pagar sola. Según Sherif, ¿qué cabe esperar si cooperan varias veces?|Que se reduzca la hostilidad|Que aumente el favoritismo|Que se polarice el conflicto|Es una meta supraordinada: la cooperación repetida en objetivos comunes redujo la hostilidad en Robbers Cave.",
      "¿Qué explica la teoría de la identidad social que el conflicto realista deja sin explicar?|El prejuicio sin competición|La hostilidad por recursos|La eficacia de las metas comunes|El grupo mínimo muestra favoritismo endogrupal sin competición, por la búsqueda de una identidad social positiva.",
      "Según Cottrell y Neuberg (2005), un grupo asociado con contagio o con valores contrarios suscita sobre todo…|asco|miedo|ira|La amenaza física provoca miedo, la amenaza a los recursos, ira, y el contagio o los valores contrarios, asco.",
      "¿Cómo conviene leer hoy Robbers Cave tras el trabajo de Perry (2018)?|Como una demostración|Como una prueba causal firme|Como un estudio sin valor|No prueba que la competición genere hostilidad de forma automática, pero conserva valor como demostración."
    ],
    inc: [
      "Sobre las teorías intergrupales del prejuicio|La autocategorización lo atribuye a la escasez de recursos|El prejuicio también se aprende por observación|Las normas del grupo pueden mantener el prejuicio|La escasez de recursos es la teoría del conflicto realista de Sherif. La autocategorización describe la despersonalización."
    ],
    seq: [
      "Fases de Robbers Cave|Formación de los grupos por separado>Competición en torneos con premio>Reducción del conflicto con metas supraordinadas"
    ],
    cls: [
      "Emoción según la amenaza (Cottrell y Neuberg)|Miedo: amenaza física|Ira: amenaza a los recursos|Asco: contagio; valores contrarios"
    ] },
  { t: "Formas modernas: prejuicio sutil, sexismo ambivalente e interseccionalidad",
    tip: "La expresión abierta del prejuicio ha descendido, pero ha cambiado de forma. Pettigrew y Meertens (1995) distinguen el prejuicio manifiesto del sutil, que combina defensa de valores tradicionales, exageración de diferencias culturales y negación de emociones positivas. El racismo aversivo discrimina solo cuando hay una excusa. Glick y Fiske (1996) combinan sexismo hostil y benévolo, y Crenshaw (1989) mostró con la interseccionalidad que las categorías sociales no se suman sin más.",
    v: [
      "Prejuicio manifiesto=Rechazo abierto con percepción de amenaza y rechazo del contacto íntimo",
      "Prejuicio sutil=Rechazo frío e indirecto, sin emociones positivas hacia el exogrupo",
      "Racismo simbólico=Rechazo expresado como defensa de valores como el esfuerzo (Kinder y Sears)",
      "Racismo aversivo=Personas igualitarias que discriminan si la situación es ambigua y justificable",
      "Racismo ambivalente=Actitudes positivas y negativas que dan respuestas inestables y extremas",
      "Sexismo hostil=Antipatía hacia las mujeres que se perciben como desafiantes del poder masculino",
      "Sexismo benévolo=Actitudes protectoras en apariencia positivas que mantienen la desigualdad",
      "Interseccionalidad=Combinación de categorías sociales que produce formas propias de discriminación"
    ],
    g: [
      "La persona ___ no se considera prejuiciosa, pero apoya medidas que perjudican al exogrupo si parecen razonables.|sutil|fanática|igualitaria",
      "«Un hombre no está completo sin una mujer» corresponde a la faceta de intimidad ___ del sexismo benévolo.|heterosexual|complementaria|protectora",
      "El sexismo hostil y el benévolo se miden con el Inventario de Sexismo ___.|Ambivalente|Moderno|Implícito",
      "Crenshaw acuñó el término interseccionalidad a partir del caso DeGraffenreid v. ___.|General Motors|Ford Motor|Board of Education",
      "En el racismo ___, el rechazo se expresa como defensa del esfuerzo y el mérito.|simbólico|aversivo|ambivalente"
    ],
    tf: [
      "Según Glick et al. (2000), el sexismo hostil y el benévolo son independientes y no se correlacionan.|F|Ambas formas se correlacionan, y sus medias nacionales predicen la desigualdad de género de cada país.",
      "La negación de emociones positivas hacia el exogrupo forma parte del prejuicio sutil.|V",
      "En el racismo aversivo, la discriminación aparece sobre todo en situaciones claras y sin excusa disponible.|F|Es al revés: en situaciones claras no discriminan. Lo hacen cuando hay una excusa, como un currículum con un punto débil.",
      "En DeGraffenreid v. General Motors, el tribunal no apreció discriminación ni por raza ni por sexo.|V"
    ],
    q: [
      "Marta rechaza la discriminación abierta, pero dice de los inmigrantes: «No tengo nada contra ellos, pero deberían adaptarse más». Según Pettigrew y Meertens, ¿qué tipo es?|Sutil|Fanática|Igualitaria|Manifiesto bajo y sutil alto, con defensa de valores tradicionales. Los fanáticos puntúan alto en ambos.",
      "«Las mujeres deben ser protegidas y mantenidas por los hombres» corresponde a…|paternalismo protector|sexismo hostil|diferenciación complementaria|Es una faceta del sexismo benévolo. La diferenciación complementaria atribuye a las mujeres más pureza o sensibilidad.",
      "Un seleccionador que se considera igualitario descarta a un candidato de un grupo minoritario alegando un punto débil que pasa por alto en otros. ¿Qué describe mejor su conducta?|Racismo aversivo|Prejuicio manifiesto|Racismo simbólico|Discrimina solo cuando la situación es ambigua y puede justificarlo por otro motivo.",
      "¿Qué componente forma parte del prejuicio manifiesto según Pettigrew y Meertens?|El rechazo del contacto íntimo|La defensa de los valores tradicionales|La exageración de las diferencias|El manifiesto incluye la percepción de amenaza y el rechazo del contacto íntimo. Las otras dos opciones pertenecen al sutil."
    ],
    inc: [
      "Sobre el sexismo ambivalente|El benévolo se reconoce fácilmente por su hostilidad|El paternalismo protector es una faceta del benévolo|Glick y Fiske (1996) propusieron el modelo|Cuesta reconocerlo porque se vive como cortesía, aunque premia los roles tradicionales y limita la autonomía."
    ],
    seq: [],
    cls: [
      "Tipo de prejuicio (Pettigrew y Meertens)|Manifiesto: percepción de amenaza; rechazo del contacto íntimo|Sutil: defensa de valores tradicionales; exageración de diferencias culturales; negación de emociones positivas"
    ] },
  { t: "La discriminación medida y cómo reducir el prejuicio",
    tip: "Los experimentos de campo con currículos equivalentes evitan depender de lo que la gente declara. Quillian et al. (2017) hallaron un 36 % más de llamadas para blancos que para afroamericanos, sin descenso desde 1989. El IAT predice poco la discriminación (r de 0,148). La hipótesis del contacto de Allport tiene apoyo (Pettigrew y Tropp, 2006), y sus condiciones favorecen el efecto sin ser imprescindibles, aunque su magnitud se discute (Paluck, Green y Green, 2019).",
    v: [
      "Experimento de campo=Envío de currículos equivalentes que solo difieren en un indicio del grupo",
      "Quillian et al. (2017)=Metaanálisis de 28 experimentos de campo con 55.842 solicitudes en EE. UU.",
      "Hipótesis del contacto=El trato intergrupal reduce el prejuicio, sobre todo en ciertas condiciones",
      "Pettigrew y Tropp (2006)=Metaanálisis de 515 estudios que asoció el contacto con menos prejuicio",
      "Contacto extendido=Saber que un amigo del endogrupo tiene amigos en el exogrupo",
      "Contacto imaginado=Representarse una interacción positiva con un miembro del exogrupo",
      "Recategorización=Crear una identidad endogrupal común que incluya a ambos grupos",
      "Lai et al. (2016)=Nueve intervenciones que reducían el sesgo implícito solo en el momento"
    ],
    g: [
      "En Quillian et al. (2017), los blancos recibían un ___ más de llamadas que los latinos con currículos equivalentes.|24 %|36 %|50 %",
      "La discriminación hacia los afroamericanos en la contratación no había disminuido desde ___.|1989|1964|2001",
      "Quillian y Lee (2023) reunieron ___ experimentos de campo de seis países.|90|28|515",
      "Entre las condiciones de Allport figuran el igual estatus, las metas comunes, la cooperación y el apoyo ___.|institucional|familiar|económico",
      "Paluck, Green y Green (2019) revisaron solo los estudios ___ con seguimiento de al menos un día.|aleatorizados|correlacionales|cualitativos"
    ],
    tf: [
      "Según Pettigrew y Tropp (2006), las condiciones de Allport son imprescindibles para que el contacto tenga efecto.|F|Favorecen el efecto, pero no son imprescindibles: el contacto se asoció con menos prejuicio sin todas ellas.",
      "En los estudios prerregistrados revisados por Paluck, Green y Green (2019), el efecto del contacto fue casi nulo.|V",
      "En Quillian et al. (2017), la ventaja de los candidatos blancos fue mayor frente a los afroamericanos que frente a los latinos.|V",
      "Quillian y Lee (2023) encontraron descensos de la discriminación en la contratación en la mayoría de los países.|F|No los encontraron en la mayoría, en contraste con la caída del prejuicio declarado."
    ],
    q: [
      "Laura no conoce a nadie del exogrupo, pero sabe que su mejor amiga tiene amigos en él, y su prejuicio baja. ¿Qué variante del contacto actúa?|Contacto extendido|Contacto imaginado|Recategorización|Basta saber que alguien del propio grupo tiene amigos en el exogrupo: no exige trato directo.",
      "Lai et al. (2016) probaron 9 intervenciones breves sobre el sesgo implícito. ¿Qué hallaron?|Efectos que no duraban horas o días|Efectos estables durante meses|Ningún efecto, ni siquiera inmediato|Todas reducían el sesgo implícito en el momento, pero ninguna mantenía el efecto horas o días después.",
      "«Todos somos de este barrio» es un ejemplo de…|recategorización|contacto extendido|contacto imaginado|Crear una identidad endogrupal común que incluya a ambos grupos es la recategorización de Gaertner y Dovidio.",
      "¿Por qué los experimentos de campo miden la discriminación mejor que las encuestas?|No dependen de lo que se declara|Usan muestras más representativas|Miden el prejuicio implícito|Comparan llamadas reales ante currículos equivalentes, sin depender de lo que la gente está dispuesta a declarar."
    ],
    inc: [
      "Sobre la reducción del prejuicio|El contacto tiene más efecto en los estudios prerregistrados|El contacto extendido no exige trato directo con el exogrupo|Las metas supraordinadas se parecen a la recategorización|En los prerregistrados el efecto fue de solo ≈ 0,016, frente a 0,39 de media en los aleatorizados."
    ],
    seq: [],
    cls: [
      "Medida|Experimentos de campo: currículos equivalentes; 36 % más de llamadas; Quillian et al. (2017)|Medidas implícitas: IAT; r de 0,148; promedios de grupo"
    ] }
] },
{ n: 15, t: "Influencia social y procesos grupales", cap: 7, pir: "alta", mods: [
  { t: "Conformidad e influencia minoritaria",
    tip: "Sherif (1935), con el efecto autocinético, mostró cómo surgen normas en la ambigüedad. Asch planteó una tarea evidente: el 36,8 % de las respuestas en los ensayos críticos fue conformista, un 25 % de los participantes no se conformó nunca y un 75 % lo hizo al menos una vez. Deutsch y Gerard (1955) distinguieron influencia informativa (aceptación privada) y normativa (complacencia pública). Moscovici mostró que una minoría consistente produce conversión latente.",
    v: [
      "Conformidad=Cambio de conducta o juicio para ajustarse al grupo sin petición explícita",
      "Efecto autocinético=Punto de luz fijo que parece moverse en una habitación a oscuras",
      "Ensayos críticos=Los 12 de 18 en que los cómplices de Asch erraban por unanimidad",
      "Influencia informativa=Aceptar la opinión ajena como dato sobre la realidad, sobre todo en la ambigüedad",
      "Influencia normativa=Ajustarse al grupo para ser aceptado aunque no se esté de acuerdo",
      "Aceptación privada=Cambio interno de opinión, efecto habitual de la influencia informativa",
      "Complacencia pública=Ajuste externo sin cambio interno, habitual ante un grupo unánime",
      "Conversión latente=Cambio privado y a veces diferido producido por una minoría consistente"
    ],
    g: [
      "En los ensayos críticos de Asch, el ___ de las respuestas siguió al grupo.|36,8 %|75 %|65 %",
      "En Asch, la conformidad aumentaba con el tamaño del grupo hasta unas ___ personas.|3 o 4|7 u 8|12 o 15",
      "Basta un ___ que dé la respuesta correcta para que la conformidad baje mucho.|aliado|líder|experto",
      "En Moscovici, Lage y Naffrechoux (1969), los cómplices llamaban «___» a unas diapositivas azules.|verde|amarillo|violeta",
      "Según Bond y Smith (1996), la conformidad tipo Asch es mayor en culturas ___.|colectivistas|individualistas|occidentales"
    ],
    tf: [
      "En los experimentos de Asch, casi todos los participantes se plegaron al grupo en la mayoría de los ensayos.|F|Solo el 36,8 % de las respuestas críticas fue conformista, y un 25 % de los participantes no se conformó nunca.",
      "Las normas que surgían con el efecto autocinético persistían cuando cada persona respondía sola.|V",
      "Según Bond y Smith (1996), la conformidad tipo Asch aumentó en EE. UU. a lo largo de las décadas.|F|Descendió en EE. UU. con las décadas, y es mayor en culturas colectivistas.",
      "Con cómplices inconsistentes, la influencia minoritaria en Moscovici fue mucho menor que con cómplices consistentes.|V"
    ],
    q: [
      "En un restaurante extranjero, Pablo pide lo mismo que la mesa de al lado porque no entiende la carta. ¿Qué influencia actúa?|Informativa|Normativa|Minoritaria|Usa a los demás como fuente de información sobre la realidad en una situación ambigua.",
      "Aproximadamente, ¿qué porcentaje de los participantes de Asch se conformó al menos una vez?|75 %|37 %|25 %|El 36,8 % corresponde a respuestas, y alrededor del 25 % de los participantes no se conformó nunca.",
      "Según Moscovici, la influencia de una minoría consistente se manifiesta sobre todo como…|cambio privado y diferido|complacencia pública inmediata|obediencia a la autoridad|La mayoría logra complacencia pública sin cambio interno, y la minoría, conversión latente.",
      "Con cómplices consistentes, ¿qué porcentaje de respuestas «verde» dieron los participantes de Moscovici et al. (1969)?|Alrededor del 8 %|Alrededor del 1 %|Alrededor del 32 %|Con cómplices inconsistentes fue en torno al 1 %, y en el control, cerca del 0,25 %. El efecto público es pequeño."
    ],
    inc: [
      "Sobre la conformidad|Asch usó una tarea ambigua sin solución clara|Sherif aprovechó el efecto autocinético|Un aliado reduce mucho la conformidad en Asch|La tarea de Asch tenía una respuesta evidente. La ambigüedad es propia del paradigma de Sherif."
    ],
    seq: [],
    cls: [
      "Tipo de influencia (Deutsch y Gerard)|Informativa: querer acertar; ambigüedad; Sherif; aceptación privada|Normativa: ser aceptado; grupo unánime; Asch; complacencia pública"
    ] },
  { t: "Obediencia a la autoridad y el caso Stanford",
    tip: "En Milgram (1963), 26 de 40 participantes (65 %) llegaron a 450 V, y la obediencia bajaba con la víctima cerca o la autoridad ausente. Burger (2009) se detuvo en 150 V: un 70 % estaba dispuesto a seguir, frente al 82,5 % de Milgram en ese punto. Doliński et al. (2017) obtuvieron un 90 %. El efecto se mantiene, y se discute su interpretación, como el seguimiento comprometido. Le Texier (2019) mostró que Stanford es una demostración, no una prueba.",
    v: [
      "Obediencia=Cumplimiento de una orden directa de una autoridad percibida como legítima",
      "Maestro=Papel del participante real, que administraba las supuestas descargas",
      "Aprendiz=Cómplice que fallaba, protestaba y no recibía descargas reales",
      "450 V=Voltaje máximo del generador, alcanzado por el 65 % en 1963",
      "Burger (2009)=Réplica detenida en el punto en que el aprendiz pide por primera vez salir",
      "Doliński et al. (2017)=Réplica en Polonia en la que 72 de 80 llegaron al máximo permitido",
      "Seguimiento comprometido=Obedecer por identificarse con la causa científica del experimentador",
      "Le Texier (2019)=Análisis de archivos que cuestiona el experimento de la prisión de Stanford"
    ],
    g: [
      "En el estudio de 1963, ___ de los 40 participantes llegaron hasta los 450 V.|26|36|33",
      "El generador de Milgram subía de 15 en 15 voltios hasta ___.|450 V|300 V|150 V",
      "En Burger (2009), ver a otro participante negarse redujo la obediencia solo hasta el ___.|63,3 %|30 %|10 %",
      "La obediencia disminuía cuando la autoridad estaba ausente y daba las órdenes por ___.|teléfono|escrito|megafonía",
      "Le Texier (2019) señaló que los guardias de Stanford recibieron ___ sobre cómo comportarse.|instrucciones|recompensas|sanciones"
    ],
    tf: [
      "En la réplica de Burger (2009), el procedimiento se detuvo en 150 V por razones éticas.|V",
      "Las réplicas de Burger y de Doliński et al. muestran que la obediencia tipo Milgram ha desaparecido.|F|El efecto se mantiene: 70 % dispuesto a pasar de 150 V en Burger y 90 % en Doliński et al. Se discute su interpretación.",
      "La obediencia en Milgram aumentaba cuando la víctima estaba en la misma sala que el maestro.|F|Disminuía cuando la víctima estaba más cerca, en la misma sala o con contacto físico.",
      "El experimento de la prisión de Stanford nunca se publicó como un experimento con condición de control.|V"
    ],
    q: [
      "Según la comparación de Burger (2009), ¿qué porcentaje de los participantes de Milgram estaba dispuesto a pasar de 150 V?|82,5 %|70 %|65 %|El 70 % es la cifra de Burger en ese punto, y el 65 %, la de Milgram hasta los 450 V.",
      "En una réplica, un participante dice que sigue porque «es importante para la ciencia» y confía en el investigador. ¿Qué interpretación apoya su caso?|Seguimiento comprometido|Obediencia ciega a la orden|Influencia minoritaria|Haslam y Reicher sostienen que se continúa por identificarse con la causa científica, no por simple acatamiento.",
      "¿Qué crítica de Le Texier (2019) a Stanford se refiere a que los participantes sabían qué se esperaba de ellos?|Características de la demanda|Presentación selectiva de datos|Diseño tomado de un ejercicio|Hubo fuertes características de la demanda, además de instrucciones a los guardias y datos presentados de forma selectiva.",
      "¿En qué punto se detuvo Burger (2009) y por qué?|En 150 V, cuando pide que lo suelten|En 450 V, tras la última protesta|En 300 V, cuando el aprendiz calla|Es el punto en que el aprendiz pide por primera vez que lo suelten, lo que permite estimar la obediencia sin el procedimiento completo."
    ],
    inc: [
      "Sobre el experimento de Stanford|Demuestra que los roles bastan para volverse cruel|Se suspendió a los seis días de empezar|El diseño se tomó de un ejercicio previo de estudiantes|Hoy se considera una demostración: hubo instrucciones a los guardias y fuertes características de la demanda (Le Texier, 2019)."
    ],
    seq: [],
    cls: [
      "Estudio de obediencia|Milgram (1963): 40 participantes; 65 % hasta 450 V|Burger (2009): detenido en 150 V; 70 % dispuesto a seguir; 63,3 % con un compañero que se niega|Doliński et al. (2017): Polonia; 72 de 80 participantes; 90 % hasta el máximo permitido"
    ] },
  { t: "Facilitación social y holgazanería",
    tip: "Triplett (1898) observó que los ciclistas rendían más compitiendo. Zajonc (1965) explicó los resultados contradictorios con la teoría del impulso: la presencia de otros aumenta la activación, que facilita la respuesta dominante, correcta en tareas fáciles y errónea en difíciles. Cottrell añadió la aprensión a la evaluación, y Baron, la distracción‑conflicto. La holgazanería social aparece cuando el esfuerzo no se identifica, y el modelo del esfuerzo colectivo explica cuándo se reduce.",
    v: [
      "Facilitación social=Mejora en tareas fáciles y empeoramiento en difíciles ante otras personas",
      "Triplett (1898)=Ciclistas más rápidos compitiendo y niños que enrollaban carretes en parejas",
      "Respuesta dominante=La más probable en el repertorio de la persona",
      "Teoría del impulso=Explicación de Zajonc basada en la activación y la respuesta dominante",
      "Aprensión a la evaluación=Activación porque los demás pueden evaluarnos (Cottrell, 1968)",
      "Distracción‑conflicto=Activación por la pugna entre atender a la tarea y a los demás (Baron, 1986)",
      "Holgazanería social=Menos esfuerzo cuando las contribuciones se suman y no se identifican",
      "Esfuerzo colectivo=Modelo según el cual uno se esfuerza si cree influir en un resultado valorado"
    ],
    g: [
      "Zajonc (1965) propuso la teoría del ___ para explicar la facilitación social.|impulso|esfuerzo|refuerzo",
      "Según Bond y Titus (1983), la presencia de otros explica entre el 0,3 % y el ___ de la varianza del rendimiento.|3 %|30 %|13 %",
      "Latané, Williams y Harkins (1979) pidieron a los participantes gritar o ___ lo más fuerte posible.|aplaudir|empujar|golpear",
      "La holgazanería social suele ser ___ en culturas colectivistas.|menor|mayor|nula",
      "Según la teoría del impulso, un pianista ___ toca mejor ante el público.|experto|novato|ansioso"
    ],
    tf: [
      "La explicación de distracción‑conflicto de Baron (1986) atribuye la activación al temor a ser evaluado.|F|El temor a la evaluación es la propuesta de Cottrell (1968). Baron la atribuye a la pugna entre atender a la tarea y a los demás.",
      "Según Cottrell (1968), lo que activa no es la mera presencia de otros, sino que puedan evaluarnos.|V",
      "En el estudio de Latané, Williams y Harkins, el menor ruido por persona en grupo se debía solo a la falta de coordinación.|F|No solo: también había menos esfuerzo individual, que es lo que se llama holgazanería social.",
      "Facilitación y holgazanería no se contradicen: la clave está en si hay evaluación individual.|V"
    ],
    q: [
      "En un trabajo de clase con nota única para todo el grupo, varios alumnos se esfuerzan menos que cuando trabajan solos. ¿Qué cambio lo reduciría más?|Evaluar la parte de cada uno|Aumentar el tamaño del grupo|Mantener el anonimato del grupo|La evaluabilidad de la contribución individual reduce la holgazanería, según el modelo del esfuerzo colectivo.",
      "Según Zajonc, ¿qué ocurre con el rendimiento ante público en una tarea nueva y difícil?|Empeora, porque domina el error|Mejora, por la mayor activación|No cambia, porque falta evaluación|En tareas nuevas la respuesta dominante suele ser un error, y la activación la hace más probable.",
      "¿Qué concluyó el metaanálisis de Karau y Williams (1993) sobre la holgazanería social?|Que es un efecto robusto|Que solo aparece en EE. UU.|Que se debe a la coordinación|Con 78 estudios mostró que la holgazanería es robusta, y propusieron el modelo del esfuerzo colectivo.",
      "¿Qué explicación de la facilitación atribuye la activación a la pugna entre atender a la tarea y a los demás?|La distracción‑conflicto|La aprensión a la evaluación|La mera presencia|Es la de Baron (1986). Cottrell (1968) propuso la aprensión a la evaluación."
    ],
    inc: [
      "Sobre la holgazanería social|Aumenta cuando la tarea es importante para la persona|Disminuye si la contribución puede identificarse|Disminuye si el grupo es valorado o cohesionado|Es al revés: si la tarea es importante o interesante, la holgazanería se reduce."
    ],
    seq: [
      "Teoría del impulso de Zajonc|Mera presencia de otros>Aumento de la activación>Respuesta dominante más probable>Mejora en tareas fáciles o empeoramiento en difíciles"
    ],
    cls: [
      "Fenómeno|Facilitación social: Triplett (1898); teoría del impulso; aprensión a la evaluación|Holgazanería social: gritar o aplaudir en grupo; esfuerzo colectivo; contribución no identificable"
    ] },
  { t: "Polarización y pensamiento grupal",
    tip: "Moscovici y Zavalloni (1969) mostraron que, tras discutir, la postura media del grupo se vuelve más extrema en la dirección que ya predominaba, sea arriesgada o prudente. La explican los argumentos persuasivos, la comparación social y la identidad social. Janis (1972) llamó pensamiento grupal a la búsqueda de unanimidad que deteriora la decisión en grupos cohesionados, con apoyo empírico mixto. La polarización cambia la posición media, y el pensamiento grupal es un proceso de decisión defectuoso.",
    v: [
      "Polarización grupal=Postura media más extrema, tras discutir, en la dirección que ya predominaba",
      "Desplazamiento hacia el riesgo=Nombre inicial con el que se descubrió la polarización",
      "Argumentos persuasivos=Mecanismo informativo: abundan las razones a favor de la postura dominante",
      "Comparación social=Mecanismo normativo: situarse un poco más allá de la posición valorada",
      "Pensamiento grupal=Búsqueda de unanimidad en un grupo cohesionado que deteriora la decisión",
      "Bahía de Cochinos=Decisión política desastrosa analizada por Janis",
      "Autocensura=Síntoma en el que cada miembro calla sus propias dudas",
      "Abogado del diablo=Medida de prevención que obliga a cuestionar la opción preferida"
    ],
    g: [
      "Si la inclinación inicial del grupo era prudente, tras discutir el grupo se vuelve más ___.|prudente|arriesgado|moderado",
      "Janis propuso el concepto de pensamiento grupal en ___.|1972|1969|1955",
      "Entre los antecedentes del pensamiento grupal figura un liderazgo ___.|directivo|imparcial|democrático",
      "La ilusión de ___ es uno de los síntomas del pensamiento grupal.|invulnerabilidad|vulnerabilidad|incertidumbre",
      "El mecanismo de los argumentos persuasivos corresponde a una influencia ___.|informativa|normativa|minoritaria"
    ],
    tf: [
      "La polarización grupal lleva siempre al grupo hacia decisiones más arriesgadas.|F|Extrema la tendencia inicial: si predominaba la prudencia, el grupo se vuelve más prudente.",
      "Los experimentos confirman que la cohesión, por sí sola, empeora las decisiones del grupo.|F|No lo confirman. El apoyo del pensamiento grupal es mixto y se basa mucho en casos elegidos a posteriori.",
      "La polarización puede producirse en cualquier grupo que discuta, esté cohesionado o no.|V",
      "Desde la identidad social, la persona se ajusta a un prototipo del endogrupo que suele ser más extremo que la media.|V"
    ],
    q: [
      "Un grupo de amigos algo escépticos con una vacuna sale de una cena convencido de que es peligrosa, aunque nadie aportó datos nuevos. ¿Qué fenómeno muestra?|Polarización grupal|Pensamiento grupal|Conversión latente|La postura media se ha extremado en la dirección que ya predominaba. No se describe un proceso de decisión defectuoso.",
      "En un comité de vecinos muy unido, nadie menciona el presupuesto de la reforma para no romper el buen ambiente. ¿Qué se observa?|Síntomas de pensamiento grupal|Un caso de polarización grupal|Un caso de holgazanería social|Callar las dudas para preservar la unanimidad es autocensura, un síntoma del pensamiento grupal de Janis.",
      "¿Qué medida propone Janis para prevenir el pensamiento grupal?|Nombrar un abogado del diablo|Reforzar la cohesión del grupo|Aislar al grupo del exterior|También un líder imparcial, expertos externos y subgrupos independientes. La cohesión y el aislamiento son antecedentes.",
      "¿Qué mecanismo de la polarización corresponde a la influencia normativa?|La comparación social|Los argumentos persuasivos|La conversión latente|Cada persona quiere situarse en una posición valorada y, al conocer la de los demás, se desplaza un poco más allá."
    ],
    inc: [
      "Sobre el pensamiento grupal|Tiene un apoyo empírico sólido en experimentos|Se propuso a partir de decisiones políticas desastrosas|Es útil como lista de riesgos en las decisiones|Su apoyo empírico es mixto: muchos estudios son análisis de casos históricos elegidos a posteriori."
    ],
    seq: [],
    cls: [
      "Elemento del pensamiento grupal|Antecedentes: alta cohesión; aislamiento del exterior; liderazgo directivo; estrés por la decisión|Síntomas: ilusión de invulnerabilidad; autocensura; presión sobre los disidentes|Prevención: líder imparcial; abogado del diablo; expertos externos"
    ] }
] },
{ n: 16, t: "Agresión, ayuda y atracción", cap: 7, pir: "alta", mods: [
  { t: "La agresión",
    tip: "La agresión es la conducta dirigida a dañar a alguien que desea evitarlo, y lo decisivo es la intención. Puede ser hostil o instrumental. Berkowitz (1989) reformuló la hipótesis de frustración‑agresión de Dollard et al. (1939): la frustración genera afecto negativo que puede desencadenarla. Las claves agresivas, el aprendizaje observacional de Bandura y el GAM de Anderson y Bushman (2002) completan el cuadro. La catarsis es un mito: desahogarse aumenta la ira y la agresión (Bushman, 2002).",
    v: [
      "Agresión=Conducta dirigida a causar daño a alguien que desea evitarlo",
      "Agresión hostil=El daño es el fin en sí mismo y suele acompañarse de ira",
      "Agresión instrumental=Daño causado como medio para conseguir otro fin",
      "Frustración=Bloqueo de una meta",
      "Efecto de las armas=Más agresión en personas enfadadas cuando hay un arma presente",
      "Muñeco Bobo=Juguete hinchable golpeado por un adulto ante niños (Bandura, Ross y Ross, 1961)",
      "GAM=Modelo de entradas, estado interno y valoración y decisión (Anderson y Bushman, 2002)",
      "Catarsis=Supuesta reducción de la agresión al desahogarse, contradicha por Bushman (2002)"
    ],
    g: [
      "Según Dollard et al. (1939), la frustración conduce ___ a alguna forma de agresión.|siempre|a veces|rara vez",
      "En el estudio de Berkowitz y LePage (1967), el objeto de control junto al aparato eran raquetas de ___.|bádminton|tenis|pádel",
      "En Bushman (2002), golpear un saco tras una provocación ___ la ira y la agresión posteriores.|aumentó|redujo|no alteró",
      "En el GAM, las cogniciones hostiles, el afecto negativo y la activación forman el ___.|estado interno|conjunto de entradas|proceso de valoración",
      "Robar un móvil empujando a su dueño es un ejemplo de agresión ___.|instrumental|hostil|reactiva"
    ],
    tf: [
      "Un dentista que provoca dolor durante un tratamiento está cometiendo una agresión.|F|Lo decisivo es la intención de dañar a quien desea evitarlo. El dentista no agrede, y quien dispara y falla sí.",
      "Según Berkowitz, un dolor, un calor sofocante o un olor desagradable pueden favorecer la agresión.|V",
      "Los niños de Bandura, Ross y Ross reprodujeron la agresión observada e incluso añadieron agresiones nuevas.|V",
      "Desahogarse golpeando un cojín libera la ira y reduce la agresión posterior.|F|Bushman (2002) halló más ira y más agresión: desahogarse ensaya la respuesta agresiva en lugar de agotarla."
    ],
    q: [
      "Tras discutir con un compañero, Raúl va al gimnasio a golpear un saco «para descargar». Según Bushman (2002), ¿qué cabe esperar?|Más ira y agresión después|Menos ira y agresión después|Ningún cambio en la agresión|Desahogarse ensaya la respuesta agresiva. Lo eficaz es reducir la activación o reinterpretar la provocación.",
      "¿Cómo reformuló Berkowitz (1989) la hipótesis de frustración‑agresión?|La frustración genera afecto negativo que puede desencadenarla|Toda agresión procede siempre de una frustración previa|La frustración refuerza agresiones aprendidas por imitación|El malestar media, sobre todo si la frustración parece injusta o intencionada. La relación automática era de Dollard et al.",
      "En el GAM, que una persona a la que empujan en el metro respire y se aparte corresponde a la fase de…|valoración y decisión|entradas personales|estado interno|Es una respuesta reflexiva, que depende del tiempo y los recursos disponibles. El empujón sería una entrada.",
      "¿Qué explica el GAM sobre la exposición repetida a modelos violentos?|Refuerza guiones y creencias agresivas|Agota la agresión por catarsis|Solo afecta a la conducta inmediata|Los efectos a largo plazo se deben a guiones y creencias agresivas que hacen más probable la agresión futura."
    ],
    inc: [
      "Sobre las teorías de la agresión|Dollard et al. no ligaron siempre frustración y agresión|Berkowitz destacó las claves agresivas que ofrece el entorno|Bandura mostró el aprendizaje observacional|Dollard et al. (1939) propusieron que la frustración conduce siempre a la agresión y que toda agresión procede de ella."
    ],
    seq: [
      "Modelo general de agresión (GAM)|Entradas personales y situacionales>Estado interno de cognición, afecto y activación>Valoración y decisión"
    ],
    cls: [
      "Tipo de agresión|Hostil: el daño es el fin; suele acompañarse de ira|Instrumental: el daño es un medio; robar un móvil"
    ] },
  { t: "Por qué ayudamos",
    tip: "La conducta prosocial beneficia a otros, y el altruismo busca el bienestar ajeno y no el propio. La evolución explica la ayuda por selección por parentesco y por reciprocidad. Batson defiende un altruismo genuino nacido de la empatía, Cialdini atribuye la ayuda al alivio de la tristeza propia y Piliavin, a un cálculo de costes para reducir la activación. Latané y Darley (1970) describen la ayuda en emergencias como cinco pasos en los que puede detenerse.",
    v: [
      "Conducta prosocial=Cualquier acción que beneficia a otros",
      "Altruismo=Ayuda motivada por el bienestar del otro, no por el beneficio propio",
      "Selección por parentesco=Ayudar a familiares favorece la transmisión de genes compartidos",
      "Reciprocidad=Ayudar a quien probablemente devolverá el favor",
      "Empatía‑altruismo=Modelo de Batson: la preocupación empática genera una motivación genuina",
      "Alivio del estado negativo=Modelo de Cialdini: ayudar alivia la tristeza propia",
      "Coste‑recompensa=Modelo de Piliavin: minimizar los costes de ayudar y de no ayudar",
      "Latané y Darley (1970)=Modelo de cinco decisiones para la ayuda en emergencias"
    ],
    g: [
      "La selección por parentesco predice más ayuda a parientes cercanos, sobre todo en situaciones de ___.|vida o muerte|poco coste|rutina diaria",
      "Según Batson, cuando la empatía es ___, la ayuda depende de lo fácil que sea escapar.|baja|alta|máxima",
      "Según Piliavin, si ayudar y no ayudar son muy costosos, la persona puede buscar soluciones ___.|indirectas|altruistas|inmediatas",
      "Señalar a alguien concreto («usted, llame al 112») deshace el obstáculo del paso ___ del modelo.|tercero|segundo|quinto",
      "En el primer paso del modelo, las prisas o el ___ pueden impedir notar el suceso.|ruido|peligro|coste"
    ],
    tf: [
      "El modelo de Batson es el que defiende la existencia de un altruismo genuino.|V",
      "Según Cialdini, si el malestar propio se alivia de otra forma, la ayuda aumenta.|F|Disminuye: si ayudar es un medio para sentirse mejor, aliviar antes la tristeza reduce el motivo para ayudar.",
      "En el modelo de Latané y Darley, asumir la responsabilidad es el paso previo a interpretar el suceso como emergencia.|F|El orden es notar, interpretar como emergencia, asumir la responsabilidad, saber cómo ayudar y decidir ayudar.",
      "La norma de reciprocidad reaparece también en el estudio de la persuasión.|V"
    ],
    q: [
      "Una persona se desploma en un andén lleno. Ana la ve, pero piensa que estará bebida porque nadie reacciona. ¿En qué paso se detiene su ayuda?|Interpretar como emergencia|Asumir la responsabilidad|Notar el suceso|Ana sí lo ha notado. La calma de los demás la lleva a concluir que no pasa nada, que es el segundo paso.",
      "Con empatía alta, según Batson, ¿qué ocurre aunque sea fácil marcharse?|Se ayuda igualmente|Se ayuda menos|Se elige huir|La empatía alta genera motivación altruista. Con empatía baja, la ayuda depende de lo fácil que sea escapar.",
      "¿Qué modelo describe la ayuda como un cálculo para reducir la activación desagradable de la emergencia?|El de Piliavin|El de Cialdini|El de Batson|El modelo de activación y coste‑recompensa elige la respuesta que minimiza los costes de ayudar y de no ayudar.",
      "Un testigo de un accidente con fuego teme quemarse, pero se sentiría culpable si no hiciera nada, y llama a emergencias. ¿Qué modelo lo predice mejor?|Coste‑recompensa de Piliavin|Empatía‑altruismo de Batson|Alivio del estado negativo|Si ayudar y no ayudar son costosos, se buscan soluciones indirectas, como llamar a emergencias."
    ],
    inc: [
      "Sobre el modelo de cinco pasos|Saber cómo ayudar es el primer paso de la secuencia|La ayuda puede detenerse en cualquiera de los pasos|La formación en primeros auxilios facilita un paso|El primer paso es notar el suceso. Saber cómo ayudar es el cuarto."
    ],
    seq: [
      "Modelo de cinco pasos de Latané y Darley|Notar el suceso>Interpretarlo como emergencia>Asumir la responsabilidad>Saber cómo ayudar>Decidir ayudar"
    ],
    cls: [
      "Modelo de la ayuda|Batson: empatía‑altruismo; altruismo genuino|Cialdini: alivio del estado negativo; aliviar la tristeza propia|Piliavin: coste‑recompensa; reducir la activación desagradable"
    ] },
  { t: "El efecto espectador y el mito de Genovese",
    tip: "En Darley y Latané (1968) avisaron antes del final del ataque el 85 % de quienes se creían solos, el 62 % con otro testigo y el 31 % con cuatro. La difusión de la responsabilidad y la ignorancia pluralista explican el efecto espectador, que Fischer et al. (2011) confirmaron y que se atenúa en emergencias peligrosas. La cifra de 38 testigos impasibles de Genovese no tiene base, y en conflictos reales interviene alguien en un 91 % de los casos (Philpot et al., 2020).",
    v: [
      "Efecto espectador=Menor probabilidad de que cada individuo ayude cuantos más testigos hay",
      "Difusión de la responsabilidad=Reparto entre los testigos de la obligación de actuar",
      "Ignorancia pluralista=Tomar la calma ajena como señal de que no pasa nada, aunque todos duden",
      "Kitty Genovese=Mujer asesinada en Nueva York en 1964, símbolo de la supuesta apatía urbana",
      "Manning, Levine y Collins=Revisión de fuentes de 2007 que desmontó la cifra de 38 testigos impasibles",
      "Sala con humo=Experimento en que quienes estaban con personas impasibles tardaban más en avisar",
      "Fischer et al. (2011)=Metaanálisis con más de 7.700 participantes que confirmó el efecto (g de −0,35)",
      "Philpot et al. (2020)=219 conflictos grabados en Ámsterdam, Ciudad del Cabo y Lancaster"
    ],
    g: [
      "En Darley y Latané (1968), avisó antes del final del ataque el ___ de quienes creían que había cuatro testigos.|31 %|62 %|85 %",
      "En el experimento del intercomunicador, la supuesta víctima parecía sufrir un ataque ___.|epiléptico|cardíaco|de asma",
      "Según Fischer et al. (2011), el efecto espectador se atenúa en emergencias ___.|peligrosas|ambiguas|cotidianas",
      "En Philpot et al. (2020), la probabilidad de que alguien interviniera ___ con el número de testigos.|aumentaba|disminuía|no variaba",
      "La difusión de la responsabilidad corresponde al paso ___ del modelo de Latané y Darley.|tercero|segundo|cuarto"
    ],
    tf: [
      "El efecto espectador implica que, cuantos más testigos hay, menos probable es que la víctima reciba ayuda.|F|Se refiere a cada individuo. Con más testigos es más probable que alguno actúe (Philpot et al., 2020).",
      "Según Manning, Levine y Collins (2007), en el caso Genovese hubo llamadas a la policía.|V",
      "La ignorancia pluralista afecta sobre todo a decidir quién debe actuar.|F|Afecta a si se interpreta que hay emergencia (paso 2). Quién debe actuar es la difusión de la responsabilidad.",
      "En Philpot et al. (2020), intervino al menos una persona en alrededor del 91 % de los conflictos.|V"
    ],
    q: [
      "En un aula sale humo por una rejilla durante un examen. Cada alumno mira a los demás, los ve tranquilos y sigue escribiendo. ¿Qué proceso actúa?|Ignorancia pluralista|Difusión de la responsabilidad|Atribución errónea de la activación|Interpretan la calma ajena como señal de que no pasa nada, como en la sala con humo de Latané y Darley.",
      "En Darley y Latané (1968), ¿qué variable clave se manipulaba?|Cuántos creían que oían el ataque|El tiempo que duraba el ataque|El sexo de la supuesta víctima|La probabilidad de avisar caía conforme aumentaba el número de testigos que el participante imaginaba.",
      "¿Cómo se concilian el efecto espectador y los datos de Philpot et al. (2020)?|Hablan de niveles distintos|Uno de los dos no se replica|Ambos dependen del país|Cada individuo ayuda menos en grupo, pero con más testigos es más probable que alguno actúe.",
      "¿Qué concluyeron Manning, Levine y Collins (2007) sobre los 38 testigos del caso Genovese?|Que la cifra no tiene base|Que todos vieron el ataque|Que eran 38 los que llamaron|Varios vecinos oyeron poco o nada, pocos vieron el ataque y hubo llamadas a la policía."
    ],
    inc: [
      "Sobre el efecto espectador|Fischer et al. lo hallaron mayor en emergencias peligrosas|Darley y Latané se inspiraron en el caso de Kitty Genovese|La difusión de la responsabilidad contribuye a explicarlo|Fischer et al. (2011) hallaron que se atenúa en emergencias peligrosas, quizá porque son más claras."
    ],
    seq: [],
    cls: [
      "Proceso del efecto espectador|Difusión de la responsabilidad: paso 3; quién debe actuar; más testigos, menos obligación|Ignorancia pluralista: paso 2; si hay emergencia; sala con humo"
    ] },
  { t: "La atracción interpersonal",
    tip: "La proximidad (Festinger, Schachter y Back, 1950), la mera exposición (Zajonc, 1968), la semejanza de actitudes (Byrne, 1971) y el atractivo físico (Walster et al., 1966) predicen la atracción inicial. Dutton y Aron (1974) mostraron que una activación causada por otra fuente puede atribuirse a la atracción. Sternberg (1986) describe el amor con intimidad, pasión y compromiso, y Hazan y Shaver (1987) trasladan los estilos de apego a la pareja.",
    v: [
      "Proximidad=Cercanía física o funcional que facilita encuentros frecuentes y poco costosos",
      "Mera exposición=Más agrado por un estímulo neutro tras verlo repetidas veces (Zajonc, 1968)",
      "Semejanza=Compartir actitudes, lo que aumenta el agrado hacia un desconocido (Byrne, 1971)",
      "Walster et al. (1966)=Baile con parejas al azar en el que el atractivo físico fue el mejor predictor",
      "Atribución errónea de la activación=Atribuir a la atracción un nerviosismo causado por otra fuente",
      "Amor consumado=Reúne intimidad, pasión y compromiso",
      "Encaprichamiento=Pasión sin intimidad ni compromiso",
      "Amor de compañeros=Intimidad y compromiso sin pasión"
    ],
    g: [
      "Festinger, Schachter y Back estudiaron las amistades en unas ___ universitarias.|residencias|facultades|bibliotecas",
      "Byrne (1971) halló que el agrado aumenta con la ___ de actitudes compartidas.|proporción|intensidad|novedad",
      "En Dutton y Aron (1974), llamaron más a la entrevistadora quienes habían cruzado el puente ___.|colgante|firme|peatonal",
      "En la teoría triangular de Sternberg, el amor ___ reúne los tres componentes.|consumado|de compañeros|romántico",
      "Hazan y Shaver (1987) describieron en la pareja los estilos seguro, evitativo y ___.|ansioso‑ambivalente|temeroso‑evitativo|desorganizado"
    ],
    tf: [
      "La idea de que «los polos opuestos se atraen» tiene un apoyo sólido como regla general.|F|Tiene poco apoyo. Byrne mostró que la semejanza de actitudes aumenta el agrado.",
      "La mera exposición explica en parte el efecto de la proximidad.|V",
      "En el baile de Walster et al. (1966), la semejanza de personalidad predijo el agrado mejor que el atractivo físico.|F|El mejor predictor fue el atractivo físico de la pareja, por encima de otras características medidas.",
      "El atractivo físico pesa sobre todo en las primeras impresiones.|V"
    ],
    q: [
      "Tras cruzar un puente colgante, un hombre conoce a una entrevistadora y siente una atracción inesperada. ¿Qué proceso lo explicaría según Dutton y Aron?|Atribución errónea de la activación|Exposición repetida al estímulo|Proporción de actitudes compartidas|Parte del nerviosismo provocado por el puente se atribuye a la atracción por la entrevistadora.",
      "En el estudio de Festinger, Schachter y Back, ¿quiénes hacían más amistades?|Quienes vivían junto a zonas de paso|Quienes compartían más actitudes|Quienes eran más atractivos|Escaleras y buzones facilitaban encuentros frecuentes y poco costosos: es el efecto de la proximidad.",
      "Según la teoría triangular, la pasión sin intimidad ni compromiso corresponde al…|encaprichamiento|amor de compañeros|amor consumado|El amor de compañeros es intimidad y compromiso sin pasión, y el consumado reúne los tres componentes.",
      "¿Qué propusieron Hazan y Shaver (1987)?|Que la pareja reproduce estilos de apego infantiles|Que el amor combina intimidad, pasión y compromiso|Que la semejanza de actitudes aumenta el agrado|Aplicaron los estilos seguro, evitativo y ansioso‑ambivalente a la pareja. La teoría triangular es de Sternberg."
    ],
    inc: [
      "Sobre la atracción interpersonal|La mera exposición solo funciona con recompensa|La proximidad funcional incluye espacios digitales|El atractivo físico pesa sobre todo al principio|Zajonc (1968) mostró que la exposición repetida aumenta el agrado sin necesidad de recompensa."
    ],
    seq: [],
    cls: [
      "Modelo de las relaciones|Teoría triangular: intimidad; pasión; compromiso|Apego adulto: seguro; evitativo; ansioso‑ambivalente"
    ] }
] }
);

SP.register(window.COURSE);
})({});
