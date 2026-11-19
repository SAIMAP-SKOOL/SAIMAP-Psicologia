(function(window){
// SAIMAP Psicología · Psicología Penitenciaria
// Contenido alineado con el temario SAIMAP «Psicología Penitenciaria» (v1.0, noviembre de 2026).
window.COURSE = {
  id: "penitenciaria",
  title: "Psicología Penitenciaria",
  short: "Penitenciaria",
  area: "Psicología aplicada",
  rutas: { grado: { curso: 4 }, pir: null },
  temario: "Psicologia-Penitenciaria_SAIMAP.pdf",
  capitulos: [
    { n: 1, t: "La prisión y sus reglas: historia, derecho y funcionamiento", from: 1, to: 3 },
    { n: 2, t: "Castigar, ¿para qué? Fines de la pena y respuestas sin cárcel", from: 4, to: 5 },
    { n: 3, t: "El psicólogo y la vida en prisión: funciones e impacto del encierro", from: 6, to: 8 },
    { n: 4, t: "¿Por qué se delinque? De la biología a los modelos integradores", from: 9, to: 10 },
    { n: 5, t: "Evaluar en prisión: la persona, el riesgo y el doble rol", from: 11, to: 13 },
    { n: 6, t: "Tratar para reinsertar: programas, eficacia y regímenes de vida", from: 14, to: 16 }
  ],
  units: []
};

// SAIMAP Psicología · Penitenciaria · Unidades 01–04
window.COURSE.units.push(
{ n: 1, t: "De la custodia a la penitenciaría: el nacimiento de la prisión moderna", cap: 1, pir: "media", mods: [
  { t: "Las reglas tras los muros: legalidad y sujeción especial",
    tip: "La prisión concentra un enorme poder sobre la persona, y por eso necesita reglas claras. Por el principio de legalidad, la Administración solo restringe derechos si una norma lo permite y debe motivar sus decisiones. La relación de sujeción especial limita derechos sin suprimir los fundamentales (art. 25.2 CE). Toda prisión tiene, además, una dimensión formal y otra informal.",
    v: [
      "Principio de legalidad=Solo se restringen derechos si una norma lo permite, con decisiones motivadas y revisables",
      "Relación de sujeción especial=Vínculo con la Administración que limita derechos sin suprimir los fundamentales",
      "Dimensión formal=Leyes, reglamentos, instrucciones, horarios y procedimientos del centro",
      "Dimensión informal=Códigos internos, jerarquías, favores y economías ilícitas entre internos",
      "Microsociedad=Visión de la cárcel con un orden interno propio, surgida tras los motines de los años cincuenta",
      "Sykes (1958)=Autor de «The Society of Captives»",
      "Foucault (1975)=Situó la prisión en un análisis sobre poder, vigilancia y control social",
      "Autogobierno criminal=Orden impuesto por grupos de internos donde el Estado deja de controlar el centro"
    ],
    g: [
      "Según el art. 25.2 CE, el penado conserva sus derechos fundamentales salvo los limitados por el fallo, el sentido de la pena y la ___.|ley penitenciaria|Junta de Tratamiento|instrucción del centro",
      "La persona presa pierde la libertad ___, pero no la libertad religiosa ni el derecho a acudir a un juez.|ambulatoria|de expresión|de reunión",
      "Un interno con influencia que «cede» su turno de llamadas a cambio de tabaco ilustra la dimensión ___ de la prisión.|informal|formal|asistencial",
      "Sykes desarrolló la idea de la cárcel como microsociedad en una obra publicada en ___.|1958|1975|1964",
      "Donde el Estado deja de controlar los centros, son grupos de internos quienes imponen el orden, lo que se denomina ___ criminal.|autogobierno|subcultura|jerarquía"
    ],
    tf: [
      "La relación de sujeción especial deja a la persona presa fuera del Estado de derecho mientras cumple condena.|F|La custodia es de veinticuatro horas, pero la persona no queda fuera del Estado de derecho y conserva sus derechos fundamentales.",
      "Una sanción, un traslado o la denegación de un permiso deben ajustarse a un procedimiento previsto y estar motivados.|V",
      "La idea de la cárcel como microsociedad surgió en Europa a partir de la obra de Foucault.|F|Surgió en Estados Unidos tras los motines de los años cincuenta y la desarrolló Sykes (1958). Foucault es de 1975.",
      "Que existan leyes penitenciarias es una condición necesaria, pero no una garantía, de que la prisión respete derechos.|V"
    ],
    q: [
      "Un interno pide asistir a un oficio religioso y un funcionario se lo niega alegando que «los presos pierden sus derechos». ¿Qué es correcto?|Conserva la libertad religiosa|Solo la recupera en tercer grado|La pierde con el fallo condenatorio|Pierde la libertad ambulatoria, pero conserva derechos fundamentales como la libertad religiosa (art. 25.2 CE).",
      "¿Qué tres elementos pueden limitar los derechos fundamentales del penado según el art. 25.2 CE?|Fallo, sentido de la pena y ley penitenciaria|Fallo, reglamento interno y Junta de Tratamiento|Sentencia, Juez de Vigilancia y Centro Directivo|Son el fallo condenatorio, el sentido de la pena y la ley penitenciaria. Es la base de la relación de sujeción especial.",
      "¿Por qué conocer las normas es imprescindible para el psicólogo penitenciario?|Sus informes forman parte de procedimientos|Su labor se limita a la consulta privada|Le corresponde imponer las sanciones|Sus evaluaciones e informes los leerán la Junta de Tratamiento, el Juez de Vigilancia y, a menudo, la defensa.",
      "¿Qué autor situó la prisión en el centro de un análisis sobre poder, vigilancia y control social?|Foucault|Sykes|Alda Mejías|Foucault (1975) reforzó la exigencia de transparencia. Sykes (1958) estudió la cárcel como microsociedad."
    ],
    inc: [
      "Sobre la relación de sujeción especial|Suprime los derechos fundamentales del interno|Supone una custodia de veinticuatro horas|Mantiene a la persona en el Estado de derecho|Limita derechos, pero no suprime los fundamentales, que se conservan salvo los limitados por el fallo, la pena y la ley penitenciaria."
    ],
    seq: [],
    cls: [
      "Dimensión de la prisión|Formal: leyes y reglamentos; horarios; turno de llamadas fijado por la dirección|Informal: códigos internos; jerarquías; favores; economías ilícitas"
    ] },
  { t: "Ilustración y reforma: Beccaria, Howard y Bentham",
    tip: "Hasta el siglo XVIII la cárcel servía sobre todo para la custodia preventiva, y las penas eran corporales, de galeras o de muerte. Beccaria (1764) defendió la legalidad, la proporcionalidad y la certeza antes que la severidad. Howard (1777) hizo la primera inspección sistemática de cárceles, y Bentham (1791) propuso el panóptico, que Foucault convirtió en metáfora del poder disciplinario.",
    v: [
      "Custodia preventiva=Uso histórico de la cárcel para retener a alguien hasta el juicio o el castigo",
      "Beccaria (1764)=Autor de «De los delitos y de las penas»",
      "Howard (1777)=Autor de la primera inspección sistemática de cárceles",
      "Panóptico=Edificio circular con celdas en torno a una torre desde la que se vigila sin ser visto",
      "Poder disciplinario=Control por observación, rutina y normalización más que por castigo físico",
      "Certeza del castigo=Según Beccaria, disuade más que la dureza de la pena",
      "Proporcionalidad=Relación que debe guardar la pena con la gravedad del delito",
      "Positivismo criminológico=Corriente del siglo XIX que introdujo la peligrosidad y los «tipos» de delincuente"
    ],
    g: [
      "Beccaria publicó «De los delitos y de las penas» en ___.|1764|1784|1777",
      "Con el panóptico, la vigilancia deja de depender de muchos guardias y pasa a depender de la ___.|arquitectura|disciplina|normativa",
      "Hasta el siglo XVIII, la celda funcionaba como una sala de ___, no como el castigo en sí.|espera|trabajo|reflexión",
      "Howard denunció la ___ y el desorden de las cárceles que inspeccionó.|insalubridad|clemencia|austeridad",
      "Con el positivismo criminológico, del que Lombroso (___) fue figura destacada, surgió la idea de que la cárcel podía «tratar».|1876|1764|1829"
    ],
    tf: [
      "Beccaria ya defendía la rehabilitación del condenado como fin principal de la pena.|F|Beccaria no hablaba aún de rehabilitación, sino de un castigo limitado y útil frente a la arbitrariedad del Antiguo Régimen.",
      "Beccaria rechazaba la tortura y la pena de muerte.|V",
      "Howard aportó a la reforma penitenciaria un enfoque empírico.|V",
      "El tratamiento que introdujo el positivismo del siglo XIX equivale al tratamiento penitenciario actual.|F|Tenía poco que ver con el actual, entendido como intervención profesional voluntaria y con garantías."
    ],
    q: [
      "En una prisión, los internos nunca saben si los observan desde la torre central y acaban comportándose como si los vigilaran siempre. ¿Qué diseño se aplica?|El panóptico de Bentham|El sistema de marcas|La celda filadélfica|El panóptico de Bentham (1791) hace que la vigilancia dependa de la arquitectura y no de muchos guardias.",
      "¿Qué intuición de Beccaria ha respaldado la investigación empírica sobre la disuasión?|Certeza mejor que severidad|Severidad mejor que certeza|Inocuizar mejor que corregir|Disuade más la seguridad de ser castigado que la dureza del castigo (Unidad 4).",
      "Antes del siglo XVIII, ¿cuáles eran las penas propiamente dichas?|Corporales, galeras o muerte|Prisión, multa o destierro|Trabajos, multa o prisión|La cárcel servía sobre todo para la custodia preventiva hasta el juicio o la ejecución del castigo.",
      "¿Qué orden cronológico es el correcto?|Beccaria, Howard, Bentham|Howard, Beccaria, Bentham|Beccaria, Bentham, Howard|Beccaria es de 1764, Howard de 1777 y el panóptico de Bentham de 1791."
    ],
    inc: [
      "Sobre la reforma ilustrada|Beccaria publicó su obra principal en 1784|Howard denunció la insalubridad carcelaria|Bentham propuso el panóptico en 1791|Fechar a Beccaria en 1784 es un error frecuente: «De los delitos y de las penas» es de 1764."
    ],
    seq: [
      "Reforma del castigo en orden cronológico|Beccaria (1764)>Howard (1777)>Panóptico de Bentham (1791)>Lombroso (1876)"
    ],
    cls: [
      "Autor de la reforma ilustrada|Beccaria: legalidad; proporcionalidad; certeza mejor que severidad|Howard: inspección sistemática; denuncia de la insalubridad|Bentham: panóptico; torre central de vigilancia"
    ] },
  { t: "Celda, silencio y progreso: los grandes modelos penitenciarios",
    tip: "El sistema filadélfico (Eastern State, 1829) imponía aislamiento continuo, con trabajo en la celda. El auburniano (años 1820) aislaba solo de noche y obligaba al trabajo común en silencio. Los progresivos dividían la condena en fases de menos a más libertad según la conducta: Maconochie (1840), Crofton (años 1850) y Elmira (1876). Son el antecedente de los grados actuales.",
    v: [
      "Sistema filadélfico=Aislamiento continuo, día y noche, con trabajo y comidas en la propia celda",
      "Sistema auburniano=Aislamiento nocturno y trabajo común diurno bajo la regla del silencio",
      "Sistema progresivo=Condena dividida en fases de menos a más libertad según conducta y trabajo",
      "Sistema de marcas=Puntos ganados con trabajo y conducta para avanzar, ideado por Maconochie",
      "Sistema irlandés=Modelo de Crofton que añadió una fase intermedia de semilibertad",
      "Condena indeterminada=Duración del encierro ligada a la evolución del interno, introducida en Elmira",
      "Walnut Street Jail=Prisión donde se ensayó en 1790 el modelo celular",
      "Contagio entre presos=Riesgo que el aislamiento celular pretendía evitar"
    ],
    g: [
      "El sistema filadélfico alcanzó su forma más conocida en la Eastern State Penitentiary (___).|1829|1876|1840",
      "En el sistema auburniano, los internos trabajaban de día en común bajo la regla del ___.|silencio|orden|respeto",
      "Maconochie creó su sistema de marcas en la isla de ___ en 1840.|Norfolk|Elmira|Auburn",
      "Crofton desarrolló en los años 1850 el sistema ___.|irlandés|inglés|escocés",
      "Los sistemas progresivos introducen la idea de que la pena puede ___ según la evolución de la persona.|modularse|suspenderse|agravarse"
    ],
    tf: [
      "El sistema auburniano mantenía el aislamiento continuo, de día y de noche.|F|El aislamiento continuo es propio del filadélfico. El auburniano aislaba solo de noche, con trabajo común en silencio de día.",
      "En el sistema filadélfico se pensaba que la soledad favorecería la reflexión del interno.|V",
      "El reformatorio de Elmira introdujo la fase intermedia de semilibertad antes de la salida.|F|Esa fase la añadió Crofton en el sistema irlandés. Elmira (1876) introdujo la condena indeterminada.",
      "Los sistemas progresivos son el antecedente de los grados penitenciarios actuales.|V"
    ],
    q: [
      "Un joven condenado por robo en el siglo XIX duerme solo en su celda y trabaja de día en un taller junto a compañeros a los que no puede dirigir la palabra. ¿En qué sistema está?|Auburniano|Filadélfico|Progresivo|Aislamiento nocturno y trabajo común en silencio definen el auburniano. En el filadélfico trabajaría en su propia celda.",
      "¿Qué aportó Walter Crofton a los sistemas progresivos?|Una fase intermedia de semilibertad|Un sistema de puntos por conducta|La condena de duración indeterminada|Crofton creó el sistema irlandés. Los puntos son de Maconochie, y la condena indeterminada, de Elmira.",
      "¿Qué rasgo distingue a los sistemas progresivos de los modelos filadélfico y auburniano?|El avance por fases según la conducta|El trabajo en común durante el día|El aislamiento nocturno en la celda|En los progresivos, la conducta y el trabajo abren fases con más libertad, antecedente de los grados actuales.",
      "¿Qué rasgo comparten los sistemas filadélfico y auburniano?|El aislamiento nocturno|El trabajo en la propia celda|El avance por fases de libertad|El filadélfico aísla de día y de noche, y el auburniano solo de noche: ambos aíslan por la noche."
    ],
    inc: [
      "Sobre los modelos penitenciarios|Elmira introdujo el sistema de marcas|Auburn combinaba celda nocturna y taller común|Filadelfia aislaba de forma continua al interno|El sistema de marcas es de Maconochie (Norfolk, 1840). Elmira (1876) introdujo la condena indeterminada."
    ],
    seq: [
      "Modelos penitenciarios en orden cronológico|Walnut Street Jail (1790)>Auburn (años 1820)>Eastern State Penitentiary (1829)>Maconochie en Norfolk (1840)>Crofton (años 1850)>Elmira (1876)"
    ],
    cls: [
      "Sistema penitenciario|Filadélfico: aislamiento continuo; trabajo en la celda; Eastern State|Auburniano: aislamiento nocturno; trabajo común; regla del silencio|Progresivo: avance por fases; sistema de marcas; sistema irlandés"
    ] },
  { t: "La tradición española: de Montesinos a la LOGP",
    tip: "Montesinos dirigió el presidio de Valencia (1834–1854) con trabajo, confianza y salidas al exterior, un precedente de los sistemas progresivos. Concepción Arenal es la gran referente del correccionalismo, y Victoria Kent fue nombrada directora general de Prisiones en 1931. La LOGP (1979), primera ley orgánica de la democracia, adopta la individualización científica (art. 72 LOGP), que no obliga a recorrer todos los grados.",
    v: [
      "Manuel Montesinos=Coronel que dirigió el presidio de Valencia entre 1834 y 1854",
      "Correccionalismo=Corriente que concibe la pena como medio para corregir y mejorar a la persona",
      "Concepción Arenal=Visitadora de prisiones y gran referente de la corriente correccionalista",
      "Victoria Kent=Nombrada directora general de Prisiones en 1931",
      "LOGP=Ley Orgánica 1/1979, de 26 de septiembre, primera ley orgánica de la democracia",
      "Individualización científica=Clasificación directa en el grado adecuado, sin recorrer todos (art. 72 LOGP)",
      "Ley 39/1970=Norma que creó el Cuerpo Técnico de Instituciones Penitenciarias",
      "Reglas Nelson Mandela=Revisión de 2015 de las Reglas Mínimas de Naciones Unidas de 1955"
    ],
    g: [
      "Montesinos dirigió el presidio de ___ entre 1834 y 1854.|Valencia|Madrid|Sevilla",
      "Junto a Concepción Arenal, otro nombre destacado del correccionalismo español es Rafael ___.|Salillas|Montesinos|Crofton",
      "La Central Penitenciaria de Observación se creó en ___.|1967|1970|1979",
      "El art. 1 LOGP fija como fin primordial de las instituciones penitenciarias la reeducación y ___ social.|reinserción|integración|readaptación",
      "En la individualización científica, la clasificación se revisa como máximo cada ___.|seis meses|dos meses|doce meses"
    ],
    tf: [
      "La experiencia de Montesinos en Valencia es posterior al sistema irlandés de Crofton.|F|Es anterior al sistema irlandés (años 1850) y contemporánea de los ensayos de Maconochie.",
      "La LOGP permite clasificar a una persona inicialmente en tercer grado.|V",
      "En la individualización científica, el primer grado es el punto de partida habitual.|F|Es excepcional, para peligrosidad extrema o inadaptación grave. Era el punto de partida en los sistemas progresivos clásicos.",
      "Con la LOGP se puede avanzar y retroceder de grado, aunque sin escalones obligatorios.|V"
    ],
    q: [
      "Una mujer de 40 años, sin antecedentes, condenada a dos años por un delito contra la Hacienda Pública, con trabajo estable y apoyo familiar, ingresa en prisión. ¿Qué permite la LOGP?|Clasificarla en tercer grado desde el inicio|Clasificarla en tercer grado tras pasar por el segundo|Mantenerla en primer grado durante seis meses|La individualización científica permite la clasificación inicial en tercer grado si la evaluación lo justifica (art. 72.3–4 LOGP).",
      "¿Qué criterio guía la clasificación en la individualización científica, frente al sistema progresivo clásico?|Evaluación técnica y evolución|Tiempo cumplido y conducta|Gravedad del delito cometido|El progresivo clásico atendía al tiempo cumplido y la conducta. La LOGP, a la evaluación técnica de la persona y su evolución.",
      "¿Qué figura fue nombrada en 1931 al frente de la Dirección General de Prisiones?|Victoria Kent|Concepción Arenal|Rafael Salillas|Victoria Kent fue directora general de Prisiones en 1931. Arenal y Salillas son referentes del correccionalismo del siglo XIX.",
      "¿Por qué es impreciso llamar «progresivo» sin más al sistema español?|No impone escalones obligatorios|No permite retroceder de grado|No revisa nunca la clasificación|Conserva la idea de progresión, pues se puede avanzar y retroceder, pero sin obligar a pasar por todos los grados."
    ],
    inc: [
      "Sobre la tradición española|La LOGP adopta un sistema progresivo clásico|La LOGP fue la primera ley orgánica democrática|Montesinos organizó el presidio en torno al trabajo|La LOGP adopta la individualización científica (art. 72 LOGP), que no obliga a recorrer todos los grados."
    ],
    seq: [
      "Hitos de la tradición penitenciaria española|Montesinos en Valencia (1834)>Victoria Kent (1931)>Central Penitenciaria de Observación (1967)>Decreto 162/1968>Ley 39/1970>LOGP (1979)"
    ],
    cls: [
      "Modelo de cumplimiento|Progresivo clásico: paso sucesivo por fases; tiempo cumplido y conducta; primer grado habitual|Individualización científica: ubicación directa en el grado; evaluación técnica; primer grado excepcional"
    ] }
] },
{ n: 2, t: "El derecho que regula la ejecución de las penas", cap: 1, pir: "alta", mods: [
  { t: "Qué es el derecho penitenciario y si es una disciplina propia",
    tip: "El derecho penitenciario regula la ejecución de las penas y medidas privativas de libertad y empieza donde termina el juicio. También alcanza a los presos preventivos. La mayoría de la doctrina le reconoce autonomía científica y legislativa por tres razones: normas propias, una relación jurídica singular y un juez especializado. Quienes la matizan recuerdan que figuras como la libertad condicional están en el Código Penal.",
    v: [
      "Derecho penitenciario=Normas que regulan la ejecución de las penas y medidas privativas de libertad",
      "Derecho penal=Define qué conductas son delito y qué pena les corresponde",
      "Derecho procesal penal=Regula cómo se investiga y se juzga un delito",
      "Relación jurídico-penitenciaria=Vínculo de derechos y deberes entre la persona interna y la Administración",
      "Personas preventivas=Internos aún no juzgados, regidos además por la Ley de Enjuiciamiento Criminal",
      "Autonomía científica y legislativa=Posición mayoritaria de la doctrina sobre el estatus de la disciplina",
      "Garantías=Quejas, recursos y control judicial frente a la Administración",
      "Límites a la Administración=Legalidad, proporcionalidad y motivación de las decisiones"
    ],
    g: [
      "El derecho penitenciario empieza donde termina el ___.|juicio|delito|recurso",
      "Las personas preventivas se rigen además por la Ley de ___ Criminal.|Enjuiciamiento|Procedimiento|Ejecución",
      "Un argumento a favor de la autonomía es la existencia de un juez especializado, el Juez de ___ Penitenciaria.|Vigilancia|Ejecución|Instrucción",
      "Quienes matizan la autonomía recuerdan que la libertad condicional está regulada en el ___.|Código Penal|Reglamento Penitenciario|art. 72 LOGP",
      "Un informe del Equipo Técnico es ___ para conceder un permiso.|preceptivo|vinculante|opcional"
    ],
    tf: [
      "El derecho penitenciario solo se aplica a las personas ya condenadas.|F|También alcanza a la estancia en prisión de las personas preventivas, que se rigen además por la Ley de Enjuiciamiento Criminal.",
      "La posición mayoritaria reconoce autonomía al derecho penitenciario sin romper sus vínculos con el derecho penal y el procesal.|V",
      "Gran parte de la actividad penitenciaria es actuación administrativa sujeta a las reglas generales del derecho administrativo.|V",
      "La doctrina mayoritaria considera el derecho penitenciario un simple apéndice del derecho administrativo.|F|La posición mayoritaria le reconoce autonomía científica y legislativa. La tesis del apéndice es la que se debate."
    ],
    q: [
      "Un interno pide matricularse en un curso de formación profesional de otro módulo y la dirección lo deniega por seguridad. ¿Qué exige el derecho penitenciario?|Que la denegación se motive y pueda recurrirse|Que se conceda siempre el curso solicitado|Que decida directamente el Centro Directivo|La seguridad puede limitar el derecho a la formación si la norma lo prevé, pero hay que motivarlo y cabe queja ante el JVP.",
      "¿Qué rama del derecho regula cómo se investiga y se juzga un delito?|El derecho procesal penal|El derecho penitenciario|El derecho penal sustantivo|El derecho penal define delitos y penas, el procesal regula la investigación y el juicio, y el penitenciario, la ejecución.",
      "¿Cuál es uno de los argumentos a favor de la autonomía del derecho penitenciario?|Regula una relación jurídica singular|Incluye la regulación de la libertad condicional|Se somete al derecho administrativo general|Los otros dos son argumentos de quienes matizan la autonomía. A favor están las normas propias, esa relación singular y el JVP.",
      "Un interno considera injustificada la denegación de una actividad. ¿A qué bloque del derecho penitenciario pertenece su queja ante el JVP?|Garantías|Límites a la Administración|Deberes de la Administración|Las quejas, los recursos y el control judicial forman el bloque de garantías."
    ],
    inc: [
      "Sobre el derecho penitenciario|Se ocupa de definir qué conductas son delito|Regula la ejecución de penas privativas de libertad|Alcanza también a las personas preventivas|Definir delitos y penas corresponde al derecho penal. El penitenciario regula lo que ocurre cuando la pena se cumple."
    ],
    seq: [
      "Del delito a la ejecución de la pena|Derecho penal: delito y pena>Derecho procesal penal: investigación y juicio>Derecho penitenciario: cumplimiento de la pena"
    ],
    cls: [
      "Bloque del derecho penitenciario|Deberes de la Administración: seguridad; atención sanitaria; programas de intervención|Derechos y deberes de los internos: comunicaciones; trabajo; respetar los horarios|Garantías: quejas; recursos; control judicial"
    ] },
  { t: "Las normas de la prisión: fuentes españolas e internacionales",
    tip: "Las normas penitenciarias se ordenan por jerarquía: la Constitución (art. 25.2), la LOGP y el Código Penal, el Reglamento Penitenciario (RD 190/1996) y, en la base, las instrucciones y circulares de la SGIP. Las Reglas Mandela, las de Bangkok y las Reglas Penitenciarias Europeas no son tratados vinculantes, pero orientan la interpretación. El Convenio Europeo para la Prevención de la Tortura sí es un tratado y crea el CPT.",
    v: [
      "Reglamento Penitenciario=RD 190/1996, que desarrolla la LOGP",
      "Art. 282 RP de 1981=Precepto aún vigente, con rango de resolución, que describe las funciones del psicólogo",
      "Código Penal=LO 10/1995, que regula penas, suspensión, libertad condicional y período de seguridad",
      "Reglas Nelson Mandela=Reglas mínimas de Naciones Unidas para el tratamiento de los reclusos (Res. 70/175)",
      "Reglas de Bangkok=Resolución 65/229 de 2010 sobre las necesidades específicas de las mujeres presas",
      "CPT=Comité creado por un convenio de 1987 que visita lugares de privación de libertad",
      "MNP=Mecanismo integrado en el Defensor del Pueblo que visita centros y hace recomendaciones",
      "Instrucción 3/2025=Instrucción de la SGIP, de 18 de julio, sobre el art. 100.2 RP"
    ],
    g: [
      "El art. ___ CE prohíbe la tortura y las penas o tratos inhumanos o degradantes.|15|24.1|117.3",
      "El art. 117.3 CE atribuye a jueces y tribunales juzgar y hacer ___ lo juzgado.|ejecutar|revisar|publicar",
      "El RD ___ regula la relación laboral especial de los internos.|782/2001|840/2011|419/2011",
      "La Instrucción 2/2025 implanta un protocolo social digital en la aplicación ___.|HELENA|RisCanvi|TPFE",
      "Las Reglas Penitenciarias Europeas (2006, revisadas en 2020) son una recomendación del ___.|Consejo de Europa|Parlamento Europeo|Defensor del Pueblo"
    ],
    tf: [
      "Las Reglas Nelson Mandela son un tratado internacional vinculante para España.|F|Son una resolución de Naciones Unidas: no vinculan como un tratado, pero orientan la interpretación y la cultura profesional.",
      "El Reglamento Penitenciario de 1996 mantiene vigentes algunos artículos del Reglamento de 1981.|V",
      "Una circular de un centro que limite las visitas más de lo que permite el Reglamento no puede aplicarse.|V",
      "El RD 840/2011 regula los ficheros de internos de especial seguimiento (FIES).|F|Los FIES los regula el RD 419/2011. El RD 840/2011 regula los trabajos en beneficio de la comunidad y la suspensión."
    ],
    q: [
      "La dirección de un centro dicta una circular que reduce las visitas familiares de un modo que el Reglamento no permite. ¿Qué ocurre?|No puede aplicarse y cabe recurso|Se aplica por ser norma del centro|Prevalece sobre el Reglamento|Por jerarquía normativa, una norma inferior no puede contradecir a una superior, y el interno afectado puede recurrir.",
      "¿Cuál de estas normas internacionales tiene naturaleza de tratado?|El Convenio Europeo contra la Tortura|La Resolución 70/175 de Naciones Unidas|La Recomendación de 2006 del Consejo de Europa|El Convenio Europeo para la Prevención de la Tortura (1987) crea el CPT. Las Reglas Mandela y las Europeas no son vinculantes.",
      "¿Qué precepto constitucional reconoce la tutela judicial efectiva?|El art. 24.1 CE|El art. 117.3 CE|El art. 25.2 CE|El 117.3 atribuye a los jueces juzgar y ejecutar lo juzgado, y el 25.2 orienta las penas y fija los derechos del penado.",
      "¿Desde cuándo está en vigor el protocolo social digital de la Instrucción 2/2025?|Desde el 1-7-2025|Desde el 18-7-2025|Desde el 1-10-2021|El 18 de julio de 2025 es la fecha de la Instrucción 3/2025, y el 1-10-2021, la del traspaso al País Vasco."
    ],
    inc: [
      "Sobre las fuentes del derecho penitenciario|Las Reglas de Bangkok vinculan como un tratado|El RD 190/1996 es el Reglamento Penitenciario|La LOGP es la LO 1/1979, de 26 de septiembre|Las Reglas de Bangkok (Res. 65/229, 2010) son una resolución de Naciones Unidas, no un tratado vinculante."
    ],
    seq: [
      "Jerarquía de las fuentes españolas, de mayor a menor rango|Constitución Española>LOGP y Código Penal>Reglamento Penitenciario>Instrucciones y circulares de la SGIP"
    ],
    cls: [
      "Origen de la norma internacional|Naciones Unidas: Reglas Nelson Mandela; Reglas de Bangkok|Consejo de Europa: Reglas Penitenciarias Europeas; Convenio para la Prevención de la Tortura; CPT"
    ] },
  { t: "Constitución, humanidad y el equilibrio entre seguridad y tratamiento",
    tip: "El art. 25.2 CE orienta las penas a la reeducación y reinserción social, prohíbe los trabajos forzados y reconoce derechos como el trabajo remunerado. Para el Tribunal Constitucional es un mandato, no un derecho fundamental amparable (SSTC 2/1987 y 28/1988). El art. 1 LOGP fija tres funciones, el art. 6 LOGP prohíbe los malos tratos y el art. 71 LOGP subordina el régimen al tratamiento.",
    v: [
      "Art. 25.2 CE=Orienta las penas a la reeducación y reinserción y prohíbe los trabajos forzados",
      "SSTC 2/1987 y 28/1988=Sentencias que niegan que la reinserción sea un derecho fundamental amparable",
      "Art. 1 LOGP=Fija la reinserción como fin primordial, junto a la custodia y la labor asistencial",
      "Principio de humanidad=Prohibición de tratos inhumanos o degradantes (art. 15 CE y art. 6 LOGP)",
      "Art. 71 LOGP=Subordina el régimen a la consecución de los fines del tratamiento",
      "Régimen=Normas de seguridad, orden y convivencia del centro",
      "Aislamiento prolongado=Según las Reglas Mandela, el que supera los 15 días consecutivos",
      "Reglas Mandela 43 y 44=Prohíben el aislamiento indefinido y el prolongado"
    ],
    g: [
      "Según el art. 25.2 CE, las penas privativas de libertad no podrán consistir en trabajos ___.|forzados|remunerados|comunitarios",
      "Con base en el art. 25.2 CE, la persona presa ___ exigir en amparo su excarcelación por estar ya reinsertada.|no puede|puede|debe",
      "El art. 1 LOGP señala, junto a la reinserción y la custodia, una labor ___ a internos y liberados.|asistencial|disciplinaria|sancionadora",
      "Las Reglas Mandela consideran prolongado el aislamiento que supera los ___ días consecutivos.|15|14|30",
      "El art. 25.2 CE reconoce a la persona condenada el derecho a un trabajo ___.|remunerado|voluntario|obligatorio"
    ],
    tf: [
      "Según las SSTC 2/1987 y 28/1988, el penado puede exigir la excarcelación si la pena ya ha cumplido su función resocializadora.|F|La orientación a la reinserción es un mandato, no un derecho fundamental, y no permite exigir la excarcelación por esa vía.",
      "El modelo de la LOGP no elimina la dimensión de castigo, pero la subordina a la reinserción.|V",
      "El principio de humanidad se apoya en el art. 15 CE y en el art. 6 LOGP.|V",
      "El art. 76 LOGP subordina el régimen penitenciario a los fines del tratamiento.|F|Lo hace el art. 71 LOGP. El art. 76 LOGP regula al Juez de Vigilancia Penitenciaria."
    ],
    q: [
      "Una semana falta personal de vigilancia y la dirección suspende el programa de habilidades sociales por seguridad. Si esto se repite, ¿qué queda en riesgo?|La orientación real del art. 25.2 CE|La legalidad formal de la suspensión|La competencia del Centro Directivo|Nadie incumple la ley, pero si la seguridad desplaza siempre al tratamiento, la orientación a la reinserción queda vacía.",
      "¿Qué riesgo se asocia a que la seguridad y la custodia dominen en exceso?|Menos formación y contacto exterior|Preocupación social por nuevos delitos|Exceso de salidas y de autonomía|La preocupación por el riesgo de nuevos delitos es lo que se teme si domina en exceso el tratamiento.",
      "Según el art. 1 LOGP, ¿cuál es el fin primordial de las instituciones penitenciarias?|La reeducación y reinserción social|La retención y custodia de los penados|La labor asistencial a los liberados|La retención y custodia y la labor asistencial son también funciones, pero el fin primordial es la reinserción.",
      "¿Qué establecen las Reglas Mandela 43 y 44?|Prohíben el aislamiento indefinido y el prolongado|Exigen que el Juez de Vigilancia apruebe todo aislamiento|Permiten el aislamiento prolongado si hay motivo grave|Prohíben el aislamiento indefinido y el prolongado, entendido como el que supera los 15 días consecutivos."
    ],
    inc: [
      "Sobre el art. 25.2 CE|Es un derecho fundamental que se reclama en amparo|Prohíbe que las penas sean trabajos forzados|Reconoce el acceso de la persona presa a la cultura|Es un mandato al legislador y a la Administración, no un derecho fundamental amparable (SSTC 2/1987 y 28/1988)."
    ],
    seq: [],
    cls: [
      "Objetivo de la prisión|Seguridad y custodia: cacheos; recuentos; restricción de movimientos|Tratamiento y reinserción: programas; salidas; autonomía progresiva"
    ] },
  { t: "Quién gestiona y quién controla: SGIP, comunidades autónomas y Juez de Vigilancia",
    tip: "La SGIP, dependiente del Ministerio del Interior, gestiona los centros de la AGE. Cataluña (desde 1984) y el País Vasco (desde el 1-10-2021) tienen competencias transferidas y aplican la misma legislación estatal con instrumentos propios. El Juez de Vigilancia Penitenciaria (art. 76 LOGP y art. 94 LOPJ) controla la legalidad y resuelve recursos, pero no decide la clasificación inicial: la propone la Junta de Tratamiento y la resuelve el Centro Directivo.",
    v: [
      "SGIP=Secretaría General del Ministerio del Interior que gestiona los centros de la AGE",
      "Cataluña=Comunidad con competencias penitenciarias desde 1984 (RD 3482/1983)",
      "País Vasco=Comunidad que gestiona sus prisiones desde el 1-10-2021 (RD 474/2021)",
      "RisCanvi=Protocolo de valoración del riesgo que se usa en Cataluña",
      "Tabla de Variables de Riesgo=Instrumento de la SGIP para valorar el riesgo en los permisos",
      "Juez de Vigilancia Penitenciaria=Controla la legalidad de la ejecución y protege derechos (art. 76 LOGP)",
      "Junta de Tratamiento=Órgano del centro que propone clasificación, progresiones y permisos",
      "Centro Directivo=Órgano de la SGIP que resuelve la clasificación"
    ],
    g: [
      "El JVP está regulado en el art. 76 LOGP y en el art. ___ de la Ley Orgánica del Poder Judicial.|94|76|117",
      "El JVP aprueba las sanciones de aislamiento de más de ___ días.|14|15|7",
      "El JVP autoriza los permisos de salida de más de ___ días.|dos|siete|cuatro",
      "Cataluña y el País Vasco aplican la misma legislación ___ que la AGE.|estatal|autonómica|europea",
      "Según la Fiscalía, a 31-12-2024 la AGE, sin Cataluña ni País Vasco, tenía ___ internos.|48.947|59.226|8.028"
    ],
    tf: [
      "El Juez de Vigilancia Penitenciaria decide la clasificación inicial de los penados.|F|La propone la Junta de Tratamiento y la resuelve el Centro Directivo. El JVP solo interviene si la persona recurre.",
      "Los datos penitenciarios de una administración no son directamente extrapolables a otra.|V",
      "El CPT y el Mecanismo Nacional de Prevención de la Tortura ejercen controles externos no judiciales.|V",
      "El País Vasco gestiona sus prisiones desde 1984, y Cataluña, desde 2021.|F|Es al revés: Cataluña desde 1984 (RD 3482/1983) y el País Vasco desde el 1-10-2021 (RD 474/2021)."
    ],
    q: [
      "Un interno sancionado por una pelea considera que la sanción es desproporcionada. ¿Ante quién puede recurrirla?|Ante el Juez de Vigilancia Penitenciaria|Ante la Junta de Tratamiento del centro|Ante el Mecanismo Nacional de Prevención|El JVP revisa si la falta estaba tipificada, si se respetó el procedimiento y si la sanción es proporcionada.",
      "Un interno recién condenado es clasificado en segundo grado. ¿Qué órgano formuló la propuesta?|La Junta de Tratamiento|El Centro Directivo|El Juez de Vigilancia|La Junta propone y el Centro Directivo resuelve. El JVP solo interviene por vía de recurso.",
      "¿Qué instrumento de valoración del riesgo utiliza Cataluña?|RisCanvi|La TVR|La M-CCP|La TVR y la M-CCP son tablas de la SGIP para los permisos en la AGE.",
      "El MNP visita centros y recomienda programas específicos para mujeres. ¿Qué tipo de control ejerce?|Externo no judicial|Judicial de legalidad|Interno de la SGIP|El MNP, integrado en el Defensor del Pueblo, y el CPT son controles externos no judiciales."
    ],
    inc: [
      "Sobre las funciones del JVP|Resuelve la clasificación inicial de los penados|Resuelve los recursos contra la clasificación|Aprueba los aislamientos de más de 14 días|La clasificación inicial la propone la Junta de Tratamiento y la resuelve el Centro Directivo."
    ],
    seq: [
      "Clasificación y control judicial|Propuesta de la Junta de Tratamiento>Resolución del Centro Directivo>Recurso del interno>Decisión del Juez de Vigilancia"
    ],
    cls: [
      "Órgano|Junta de Tratamiento: propone la clasificación; propone progresiones; propone permisos|Centro Directivo: resuelve la clasificación|Juez de Vigilancia: controla la legalidad; resuelve recursos; aprueba aislamientos de más de 14 días"
    ] }
] },
{ n: 3, t: "Del ingreso a la libertad: el recorrido penitenciario", cap: 1, pir: "alta", mods: [
  { t: "Grados y cómo se decide la clasificación",
    tip: "Solo se clasifica a las personas penadas, no a las preventivas. El primer grado es el régimen cerrado (art. 10 LOGP), el segundo, el ordinario, y el tercero, el abierto (arts. 80–88 RP). La Junta de Tratamiento propone en dos meses (art. 103 RP), resuelve el Centro Directivo y se revisa como máximo cada seis meses (art. 105 RP). El período de seguridad, la responsabilidad civil y el terrorismo limitan el tercer grado.",
    v: [
      "Clasificación en grado=Asignación a un régimen de vida según la evaluación de la persona penada",
      "Primer grado=Régimen cerrado para peligrosidad extrema o inadaptación grave (art. 10 LOGP)",
      "Segundo grado=Régimen ordinario de la mayoría, con vida en módulos y actividades comunes",
      "Tercer grado=Régimen abierto de semilibertad (arts. 80–88 RP)",
      "Progresión=Paso a un grado con más libertad",
      "Regresión=Vuelta a un grado más restrictivo",
      "Período de seguridad=Con penas de más de cinco años, el régimen abierto puede exigir cumplir la mitad",
      "Art. 72.6 LOGP=Exige signos inequívocos de abandono de la actividad terrorista"
    ],
    g: [
      "La Junta de Tratamiento formula la propuesta de clasificación en un plazo de ___ (art. 103 RP).|dos meses|seis meses|un mes",
      "La clasificación se revisa como máximo cada seis meses, según el art. ___ RP.|105|103|102",
      "El requisito de satisfacer la responsabilidad civil para el tercer grado está en el art. ___ LOGP.|72.5|72.6|36.2",
      "El requisito del art. 72.6 LOGP sobre terrorismo lo introdujo la LO ___.|7/2003|1/2015|10/2022",
      "A 31-12-2024, el ___ % de los penados clasificados de la AGE estaba en primer grado.|1,1|18,1|8,1"
    ],
    tf: [
      "Las personas preventivas se clasifican en segundo grado mientras esperan juicio.|F|Las preventivas no se clasifican en grado, porque todavía no hay pena que cumplir.",
      "En tercer grado está el 32,0 % de las mujeres penadas de la AGE, frente al 17,0 % de los hombres.|V",
      "El plazo de dos meses para la propuesta se cuenta desde que el centro recibe el testimonio de la sentencia.|V",
      "La clasificación se revisa como máximo cada dos meses, según el art. 103 RP.|F|Dos meses es el plazo de la propuesta inicial (art. 103 RP). La revisión es como máximo cada seis meses (art. 105 RP)."
    ],
    q: [
      "Javier, de 29 años, ingresa condenado a cuatro años por robo con violencia, con consumo activo de cocaína y sin apoyo familiar estable. La Junta propone segundo grado y deshabituación. ¿Cuándo se valorará su evolución?|Como máximo a los seis meses|Al cumplir la mitad de la condena|Solo si recurre ante el Juez de Vigilancia|La clasificación se revisa como máximo cada seis meses (art. 105 RP) y puede llevar a una progresión o a una regresión.",
      "¿Qué variables enumeran el art. 63 LOGP y el art. 102 RP para clasificar?|Personalidad, historial, pena, medio y recursos|Delito, edad, sexo, nacionalidad y conducta|Pena, antecedentes, fianza, empleo y salud|Se valoran la personalidad, el historial, la duración de la pena, el medio al que retornará y los recursos con que cuenta.",
      "¿Qué artículo regula el primer grado como régimen cerrado?|Art. 10 LOGP|Art. 100.2 RP|Art. 90 CP|El art. 100.2 RP recoge el principio de flexibilidad, y el art. 90 CP, la libertad condicional.",
      "Un penado a seis años, en un supuesto previsto por la ley, pide el tercer grado tras cumplir un tercio de la condena. ¿Qué regla puede impedirlo?|El período de seguridad del art. 36.2 CP|El requisito del art. 72.6 LOGP sobre terrorismo|El plazo de propuesta del art. 103 RP|Con penas de más de cinco años, en los supuestos legales, el tercer grado puede exigir haber cumplido la mitad."
    ],
    inc: [
      "Sobre los límites al tercer grado|El período de seguridad rige con penas de dos años|Se valora la satisfacción de la responsabilidad civil|En terrorismo se exige abandonar esa actividad|El período de seguridad (art. 36.2 CP) afecta a penas de más de cinco años, en los supuestos que fija la ley."
    ],
    seq: [
      "Itinerario penitenciario|Ingreso con condena firme>Propuesta de la Junta de Tratamiento>Resolución del Centro Directivo>Permisos desde la cuarta parte de la condena>Libertad condicional (art. 90 CP)>Libertad definitiva"
    ],
    cls: [
      "Grado penitenciario|Primero: régimen cerrado; art. 10 LOGP; 1,1 % de los penados|Segundo: régimen ordinario; vida en módulos; 80,8 % de los penados|Tercero: régimen abierto; arts. 80–88 RP; 18,1 % de los penados"
    ] },
  { t: "Permisos de salida y principio de flexibilidad",
    tip: "Los permisos son un instrumento del tratamiento: ni un premio arbitrario ni un derecho incondicionado. Los ordinarios (art. 47.2 LOGP y art. 154 RP) exigen segundo o tercer grado, la cuarta parte de la condena, no observar mala conducta e informe preceptivo del Equipo Técnico, y duran hasta 7 días. El art. 100.2 RP combina aspectos de distintos grados, y la Instrucción 3/2025 aclara que no crea grados intermedios.",
    v: [
      "Permiso ordinario=Salida de hasta 7 días con 2.º o 3.º grado y la cuarta parte de la condena cumplida",
      "Permiso extraordinario=Salida por motivos importantes, como un fallecimiento o un nacimiento",
      "Informe del Equipo Técnico=Requisito preceptivo del permiso, en el que participa el psicólogo",
      "TVR=Tabla de la SGIP que estima el riesgo de no volver o de delinquir durante el permiso",
      "M-CCP=Tabla de concurrencia de circunstancias peculiares",
      "Principio de flexibilidad=Combinación de aspectos de distintos grados en un programa específico (art. 100.2 RP)",
      "Instrucción 3/2025=Aclara que el art. 100.2 RP no crea grados intermedios",
      "Modelo de aplicación=Documento normalizado que exige la aplicación del art. 100.2 RP"
    ],
    g: [
      "Cada permiso ordinario dura hasta ___ días.|7|2|15",
      "En segundo grado se pueden disfrutar como máximo ___ días de permiso ordinario al año.|36|48|30",
      "Un permiso de más de dos días a un interno en segundo grado lo autoriza el ___.|Juez de Vigilancia|Centro Directivo|Equipo Técnico",
      "Si el Juez de Vigilancia no aprueba la aplicación del art. 100.2 RP, su ejecución se ___.|suspende|mantiene|recurre",
      "Un estudio sobre RisCanvi cifró la tasa anual de quebrantamiento en el ___.|0,21 %|2,1 %|21 %"
    ],
    tf: [
      "Cumplir los requisitos del art. 154 RP garantiza la concesión del permiso.|F|Cumplirlos es la condición para que se estudie. La Junta valora el caso con el informe del Equipo Técnico.",
      "El nacimiento de un hijo puede justificar un permiso extraordinario.|V",
      "La Instrucción 3/2025 creó un grado intermedio entre el segundo y el tercero.|F|Aclara justo lo contrario: el art. 100.2 RP no crea grados intermedios.",
      "La tasa de quebrantamiento hallada con RisCanvi no puede extrapolarse sin más a la AGE.|V"
    ],
    q: [
      "Ana cumple condena en segundo grado y una empresa de catering le ofrece un contrato, pero aún no reúne las condiciones para el tercer grado. ¿Qué cabe proponer?|Aplicarle el art. 100.2 RP|Concederle un permiso extraordinario|Clasificarla en un grado intermedio|El principio de flexibilidad le permite trabajar fuera y volver cada tarde, con aprobación judicial. No existen grados intermedios.",
      "Un interno en segundo grado ha cumplido un quinto de la condena, no observa mala conducta y tiene informe favorable. ¿Puede obtener un permiso ordinario?|No, le falta la cuarta parte|Sí, cumple todos los requisitos|Sí, si lo autoriza el Centro Directivo|El art. 154 RP exige haber cumplido la cuarta parte de la condena, además del grado, la conducta y el informe.",
      "¿Cuántos días de permiso ordinario al año puede disfrutar como máximo una persona en tercer grado?|48|36|7|En segundo grado el máximo es de 36 días al año, y 7 días es la duración máxima de cada permiso.",
      "¿Qué estiman la TVR y la M-CCP?|El riesgo de no volver o de delinquir|El grado que corresponde al interno|La duración adecuada del permiso|Estiman el riesgo de que la persona no vuelva o cometa un delito durante el permiso (Unidad 12)."
    ],
    inc: [
      "Sobre los permisos de salida|Son un derecho incondicionado|Mantienen los vínculos familiares|Preparan para la vida en libertad|Son un instrumento del tratamiento: no un premio arbitrario, pero tampoco un derecho incondicionado."
    ],
    seq: [],
    cls: [
      "Tipo de permiso|Ordinario: art. 47.2 LOGP; art. 154 RP; cuarta parte de la condena|Extraordinario: art. 47.1 LOGP; art. 155 RP; enfermedad grave de un familiar"
    ] },
  { t: "Tipos de establecimientos, trabajo y día a día en un módulo",
    tip: "La LOGP distingue establecimientos preventivos (art. 8), de cumplimiento (art. 9) y especiales (art. 11). Existen además CIS, Unidades Dependientes, Unidades de Madres, módulos de respeto y UTE. El trabajo es derecho y deber, con relación laboral especial (RD 782/2001), y desde el Código Penal de 1995 no reduce automáticamente la condena. La participación en el PIT es voluntaria (art. 112 RP).",
    v: [
      "Establecimientos preventivos=Centros para personas a la espera de juicio (art. 8 LOGP)",
      "Establecimientos especiales=Hospitalarios, psiquiátricos y de rehabilitación social (art. 11 LOGP)",
      "CIS=Centros de Inserción Social que acogen sobre todo a personas en tercer grado",
      "Unidades Dependientes=Viviendas fuera del recinto gestionadas con entidades sociales",
      "Unidades de Madres=Permiten convivir con hijos de hasta tres años (art. 38.2 LOGP)",
      "Módulos de respeto=Compromiso con normas de convivencia y tareas, iniciado en Mansilla de las Mulas (2001)",
      "UTE=Espacios libres de drogas con experiencia de referencia en Villabona (1992)",
      "TPFE=Entidad estatal que gestiona el trabajo penitenciario"
    ],
    g: [
      "Los establecimientos de cumplimiento están regulados en el art. ___ LOGP.|9|8|11",
      "Los hospitales psiquiátricos penitenciarios están en Alicante y ___.|Sevilla|Valencia|Madrid",
      "El trabajo penitenciario se rige por una relación laboral ___.|especial|común|voluntaria",
      "El régimen disciplinario se regula en los arts. ___ LOGP.|41–45|51–53|26–35",
      "Desde el Código Penal de ___, trabajar ya no reduce automáticamente la condena.|1995|1979|2015"
    ],
    tf: [
      "Rechazar el Programa Individualizado de Tratamiento puede sancionarse como falta disciplinaria.|F|La participación es voluntaria (art. 112 RP): no participar no se sanciona, aunque influye al valorar la evolución.",
      "El trabajo penitenciario es a la vez un derecho y un deber.|V",
      "Las UTE comenzaron en Mansilla de las Mulas en 2001.|F|En Mansilla de las Mulas (2001) empezaron los módulos de respeto. La experiencia de referencia de las UTE es Villabona (1992).",
      "Tras los delitos contra el patrimonio, los más frecuentes en prisión son los delitos contra la salud pública.|V"
    ],
    q: [
      "Luis, de 45 años, en su primer ingreso, se queja de que «no hace nada en todo el día». ¿Qué documento debería fijar sus actividades recomendadas?|El Programa Individualizado de Tratamiento|El modelo de aplicación del art. 100.2 RP|La Tabla de Variables de Riesgo|El PIT fija las actividades recomendadas, como un curso o un puesto en la lavandería. Participar en él es voluntario.",
      "Una interna quiere convivir en prisión con su hijo de dos años. ¿Qué unidad lo permite?|Una Unidad de Madres|Una Unidad Dependiente|Un Centro de Inserción Social|Las Unidades de Madres permiten la convivencia con hijos de hasta tres años (art. 38.2 LOGP).",
      "¿Qué doble efecto psicológico tiene la rutina de un módulo?|Orden y previsibilidad, pero pasividad|Reflexión y soledad, pero contagio|Autonomía plena, pero falta de normas|Aporta orden a vidas desorganizadas, pero puede generar pasividad y dependencia de la institución (prisionización, Unidad 7).",
      "¿Qué delitos eran los más frecuentes en la población reclusa a 31-12-2024?|Contra el patrimonio|Contra la salud pública|De violencia de género|Hubo 18.054 por delitos contra el patrimonio, 7.531 contra la salud pública y 5.497 por violencia de género."
    ],
    inc: [
      "Sobre el trabajo penitenciario|Reduce de forma automática la condena|Lo gestiona la entidad estatal TPFE|Su acceso depende de las plazas disponibles|Desde el Código Penal de 1995, trabajar ya no reduce automáticamente la condena."
    ],
    seq: [
      "Rutina diaria en un módulo de segundo grado|Apertura de celdas>Recuento>Desayuno>Actividades de mañana>Comida>Nuevo recuento>Actividades de tarde>Cena>Cierre"
    ],
    cls: [
      "Tipo de establecimiento|Preventivo: art. 8 LOGP; personas a la espera de juicio|De cumplimiento: art. 9 LOGP; régimen ordinario o abierto|Especial: art. 11 LOGP; hospitalarios y psiquiátricos"
    ] },
  { t: "Desafíos actuales del sistema: cifras, envejecimiento y digitalización",
    tip: "A 31-12-2024 había en España 59.226 personas presas, en torno a un 7 % mujeres y un 32,65 % extranjeras. Tras el mínimo de 2021, la población ha vuelto a crecer. La tasa de la AGE está cerca de la media europea y por encima de la mediana. Los retos son el envejecimiento, la población extranjera, la salud mental y el suicidio, la digitalización, los algoritmos de riesgo, la brecha de género y la justicia restaurativa.",
    v: [
      "SPACE I=Estadística del Consejo de Europa para comparar la población reclusa entre países",
      "HELENA=Aplicación de la SGIP en la que se implanta el protocolo social digital",
      "Justicia restaurativa=Encuentros voluntarios centrados en el daño causado y en quién debe repararlo",
      "Auditoría de RisCanvi=Estudio de 2024 según el cual otros modelos mejorarían el AUC entre un 3 % y un 30 %",
      "Brecha de género=Programas y módulos diseñados pensando en hombres",
      "Envejecimiento=Aumento de presos mayores de 65 años que obliga a adaptar espacios y programas",
      "Programa de Prevención de Suicidios=Incluía a 2.031 personas en la AGE en 2023",
      "Densidad penitenciaria=Ocupación de las plazas, del 74 % en España según SPACE I 2024"
    ],
    g: [
      "A 31-12-2024 había en España ___ personas presas.|59.226|55.097|66.765",
      "La población reclusa española alcanzó su mínimo en ___.|2021|2013|2024",
      "A 31-12-2024, el ___ % de la población reclusa era extranjera.|32,65|7,0|18,1",
      "Según SPACE I 2024, la duración media del encarcelamiento en España era de ___ meses.|19,3|12,7|27,4",
      "La justicia restaurativa es un ___ del proceso penal, no una alternativa a él.|complemento|sustituto|requisito"
    ],
    tf: [
      "La tasa de presos de la AGE está muy por debajo de la mediana europea.|F|Con 124 por 100.000, está cerca de la media europea (127) y por encima de la mediana (110).",
      "En 2023 se registraron en la AGE 31 o 32 suicidios, según la fuente consultada.|V",
      "La justicia restaurativa sustituye al proceso penal cuando víctima e infractor se reúnen.|F|Es un complemento del proceso penal, no una alternativa, con encuentros voluntarios entre víctima, infractor y comunidad.",
      "La prevalencia de trastornos mentales en prisión es mayor que en la población general.|V"
    ],
    q: [
      "Un centro recibe cada año más internos mayores de 65 años y debe adaptar espacios y programas. ¿Qué reto ilustra?|El envejecimiento|La brecha de género|La digitalización|SPACE I 2025 registra un aumento de las personas presas mayores de 65 años, lo que obliga a adaptar espacios y programas.",
      "¿Qué concluyó la auditoría externa de RisCanvi de 2024?|Que otros modelos mejorarían su AUC|Que su AUC equivale a un 70 % de aciertos|Que debe sustituirse por la TVR|Modelos alternativos podrían mejorar su capacidad predictiva (AUC) entre un 3 % y un 30 %, y se abrió el debate sobre los algoritmos.",
      "¿Qué recomienda el MNP respecto a las mujeres presas?|Programas específicos para mujeres|Módulos mixtos en todos los centros|Más plazas en tercer grado|Los programas y módulos se diseñaron pensando en hombres, y el MNP recomienda programas específicos para mujeres.",
      "Según SPACE I 2024, ¿qué tasa de presos por 100.000 habitantes tenía España a 31-1-2024?|117,2|124|127|124 es la tasa de la AGE con datos de SPACE I 2025, y 127, la media europea."
    ],
    inc: [
      "Sobre la población reclusa española|Desciende de forma continua desde 2013|Casi un tercio es de nacionalidad extranjera|Las mujeres son en torno al 7 %|Tras el mínimo de 55.097 personas en 2021, ha vuelto a crecer hasta 59.226 en 2024."
    ],
    seq: [
      "Evolución de la población reclusa en España|66.765 en 2013>55.097 en 2021>56.698 en 2023>59.226 en 2024"
    ],
    cls: [] }
] },
{ n: 4, t: "Concepto y fines de la pena", cap: 2, pir: "alta", mods: [
  { t: "La pena como respuesta jurídica al delito",
    tip: "La pena es la privación o restricción de bienes jurídicos que el Estado impone, mediante un proceso y conforme a la ley, a quien ha cometido un delito. Rige el principio de legalidad (art. 25.1 CE), y la pena debe ser proporcionada y respetar la dignidad. La prisión preventiva, las sanciones administrativas y disciplinarias y las medidas de seguridad no son penas.",
    v: [
      "Pena=Privación o restricción de bienes jurídicos impuesta por un juez, según la ley, a quien delinque",
      "Principio de legalidad=No hay delito ni pena sin una ley previa que los establezca (art. 25.1 CE)",
      "Monopolio público=El castigo legítimo corresponde al Estado y sustituye a la venganza privada",
      "Reproche=Desaprobación social del hecho que expresa la pena",
      "Prisión preventiva=Privación cautelar de libertad mientras dura el proceso, sin condena",
      "Sanción administrativa=Castigo impuesto por la Administración, como una multa de Tráfico",
      "Medida de seguridad=Internamiento o tratamiento basado en la peligrosidad, no en la culpabilidad",
      "Sanción disciplinaria=Corrección por una falta cometida dentro de la prisión"
    ],
    g: [
      "El principio de legalidad penal se recoge en el art. ___ CE.|25.1|25.2|24.1",
      "La medida de seguridad se basa en la ___, no en la culpabilidad.|peligrosidad|proporcionalidad|reincidencia",
      "La localización permanente es una pena privativa de ___.|libertad|otros derechos|bienes",
      "La pena no es un efecto secundario, sino un mal ___ que expresa el reproche social.|deliberado|accidental|cautelar",
      "Ni la víctima ni su familia pueden castigar por su cuenta: la pena sustituye a la venganza ___.|privada|pública|judicial"
    ],
    tf: [
      "El Código Penal considera la prisión preventiva una pena anticipada.|F|El Código Penal aclara que la detención, la prisión preventiva y las sanciones disciplinarias o gubernativas no son penas.",
      "La mayoría de las condenas no acaban en una celda.|V",
      "Una sanción disciplinaria penitenciaria responde a la convivencia del centro, no a un delito.|V",
      "La multa solo existe como sanción administrativa, nunca como pena.|F|La multa es también una pena, junto a las privativas de libertad y las privativas de otros derechos."
    ],
    q: [
      "Una conductora da positivo en un control de alcoholemia con una tasa que solo supera el límite administrativo. ¿Qué recibe?|Una multa de Tráfico, que no es pena|Una pena de multa impuesta por un juez|Una medida de seguridad por peligrosidad|Solo si alcanza la tasa que el Código Penal fija como delito puede un juez imponerle una pena.",
      "¿Qué diferencia la prisión preventiva de la pena de prisión?|No castiga: aún no hay condena|La impone la Administración|Se basa en la peligrosidad|La prisión preventiva es cautelar mientras dura el proceso. Basarse en la peligrosidad es propio de las medidas de seguridad.",
      "¿En qué grupo de penas se incluye la prisión permanente revisable?|Privativas de libertad|Privativas de otros derechos|Medidas de seguridad|Junto a la prisión y la localización permanente. Las medidas de seguridad no son penas.",
      "¿Qué elemento de la definición de pena exige que solo un juez o tribunal la imponga tras un procedimiento con garantías?|La exigencia de un proceso|El principio de humanidad|La proporcionalidad|El proceso garantiza presunción de inocencia, defensa y prueba. Humanidad y proporcionalidad son otros límites de la pena."
    ],
    inc: [
      "Sobre la pena|Puede imponerla la Administración sin juez|Exige una ley previa que la establezca|Debe respetar la dignidad de la persona|Solo un juez o tribunal puede imponerla, tras un proceso con garantías. Las multas administrativas no son penas."
    ],
    seq: [],
    cls: [
      "Tipo de pena|Privativa de libertad: prisión; prisión permanente revisable; localización permanente|Privativa de otros derechos: inhabilitaciones; privación del permiso de conducir; trabajos en beneficio de la comunidad"
    ] },
  { t: "Retribuir o prevenir: teorías absolutas, relativas y mixtas",
    tip: "Las teorías absolutas castigan «quia peccatum est»: la pena se justifica por ser merecida (Kant, Hegel) y aporta proporcionalidad y culpabilidad como límites. Las relativas castigan «ne peccetur» y tienen cuatro variantes: general negativa (Feuerbach), general positiva (Jakobs), especial negativa o inocuización y especial positiva (Von Liszt, 1882). En España dominan las teorías mixtas.",
    v: [
      "Teorías absolutas=Justifican la pena como retribución justa del delito cometido (Kant, Hegel)",
      "Quia peccatum est=Lema retributivo: «porque se ha delinquido»",
      "Ne peccetur=Lema preventivo: «para que no se delinca»",
      "Prevención general negativa=Intimidar a la población con la amenaza de la pena (Feuerbach)",
      "Prevención general positiva=Reafirmar la vigencia de la norma y la confianza en el derecho (Jakobs)",
      "Prevención especial negativa=Inocuizar al condenado, que privado de libertad no puede delinquir fuera",
      "Prevención especial positiva=Resocializar a quien ha delinquido (Von Liszt, 1882)",
      "Programa de Marburgo=Texto de Von Liszt: corregir, intimidar o inocuizar según cada persona"
    ],
    g: [
      "Hegel concibió la pena como la ___ de la negación del derecho.|negación|afirmación|retribución",
      "Feuerbach formuló la prevención general negativa como una «coacción ___».|psicológica|jurídica|moral",
      "Kant (___) defendió que castigar por un beneficio social sería usar a la persona como medio.|1797|1821|1882",
      "En las teorías mixtas, cuando el juez impone la pena, marca el límite la proporcionalidad con la ___.|culpabilidad|peligrosidad|prevención",
      "Llevada al extremo, la prevención especial positiva puede conducir a penas ___.|indeterminadas|ejemplares|inútiles"
    ],
    tf: [
      "Von Liszt es el principal representante de la prevención general negativa.|F|Von Liszt desarrolló la prevención especial positiva (Programa de Marburgo, 1882). La general negativa es de Feuerbach.",
      "La raíz de las teorías retributivas, la ley del talión, ya imponía un límite al castigo.|V",
      "En las teorías mixtas, la prevención especial positiva pasa a primer plano en la fase de ejecución.|V",
      "Las teorías absolutas justifican la pena por las consecuencias sociales que produce.|F|La justifican por sí misma, como respuesta justa a un hecho culpable. Su problema es que no explican para qué sirve."
    ],
    q: [
      "Tras un robo con violencia, un profesional se pregunta por qué lo hizo el autor (cocaína, deudas, compañías) y qué necesita para no repetirlo. ¿Qué fin de la pena le guía?|Prevención especial positiva|Prevención general negativa|Retribución proporcional|Mirar a la persona condenada y a su resocialización es prevención especial positiva, el plano de la psicología penitenciaria.",
      "Un tribunal afirma que la condena «reafirma la confianza de la ciudadanía en el derecho». ¿Qué teoría expresa?|Prevención general positiva|Prevención general negativa|Prevención especial negativa|La general negativa intimida a la población. La positiva, asociada a Jakobs, reafirma la vigencia de la norma.",
      "¿Qué aportan las teorías retributivas a la justificación de la pena?|Proporcionalidad y culpabilidad como límites|Una explicación de la utilidad social de la pena|La resocialización como fin de la ejecución|Su aportación son esos límites. Su problema es justamente que no explican para qué sirve la pena.",
      "Según el Programa de Marburgo de Von Liszt, ¿qué debe hacerse con quien no necesita corrección?|Intimidarlo|Corregirlo|Inocuizarlo|Hay que corregir a quien puede y necesita corrección, intimidar a quien no la necesita e inocuizar a quien no es corregible."
    ],
    inc: [
      "Sobre las teorías de la pena|En España dominan en solitario las relativas|Las teorías mixtas combinan retribución y prevención|Hegel ve en la pena el restablecimiento del derecho|En España dominan las teorías mixtas o eclécticas, que combinan retribución y prevención."
    ],
    seq: [
      "Fin predominante según el momento en las teorías mixtas|Amenaza legal: prevención general>Imposición judicial: proporcionalidad con la culpabilidad>Ejecución: prevención especial positiva"
    ],
    cls: [
      "Teoría de la pena|Absolutas: Kant; Hegel; quia peccatum est|Relativas: Feuerbach; Jakobs; Von Liszt; ne peccetur|Mixtas: dominantes en España; fines distintos según el momento"
    ] },
  { t: "Provención, reeducación y lo que se sabe sobre la disuasión",
    tip: "La provención (Burton, 1990) propone actuar sobre las necesidades humanas básicas que originan el conflicto antes de que estalle. No es una teoría jurídica de la pena, sino un marco de intervención. Reeducar no es cambiar la personalidad, sino ofrecer medios, y el tratamiento es voluntario. La certeza del castigo disuade más que su severidad (Nagin, 2013), y la prisión no reduce la reincidencia más que otras sanciones (Nagin, Cullen y Jonson, 2009).",
    v: [
      "Provención=Actuar sobre las necesidades básicas que originan el conflicto antes de que estalle",
      "John Burton (1990)=Propuso el término desde la teoría de la resolución de conflictos",
      "Necesidades humanas básicas=Seguridad, identidad o reconocimiento, cuya frustración origina conflictos",
      "Reeducar=Ofrecer medios para que la persona pueda vivir sin delinquir, no cambiar su personalidad",
      "Nagin (2013)=Concluyó que disuade sobre todo la probabilidad de ser detenido y sancionado",
      "Nagin, Cullen y Jonson=Revisión de 2009 con efectos nulos o ligeramente criminógenos de la prisión",
      "Efecto criminógeno=Aumento de la reincidencia asociado a una sanción",
      "Populismo punitivo=Tendencia a endurecer las penas pese a la escasa evidencia de su eficacia disuasoria"
    ],
    g: [
      "La provención es un enfoque ___ que entiende el conflicto como oportunidad de cambio.|proactivo|reactivo|retributivo",
      "La provención encaja con la prevención ___ y con los programas de tratamiento.|especial positiva|general negativa|especial negativa",
      "Según Nagin (2013), aumentar una pena que ya es larga apenas añade efecto ___.|disuasorio|criminógeno|retributivo",
      "Nagin, Cullen y Jonson (2009) hallaron que la prisión tiene efectos nulos o ligeramente ___ frente a otras sanciones.|criminógenos|disuasorios|protectores",
      "Según la evidencia, el tratamiento adecuado reduce la reincidencia con un efecto ___.|moderado|nulo|enorme"
    ],
    tf: [
      "La provención es una teoría jurídica de la pena equiparable a las retributivas y preventivas.|F|No es una teoría jurídica de la pena, sino un marco de intervención que encaja con la prevención especial positiva.",
      "Lo que la evidencia cuestiona no es que la pena prevenga, sino que endurecerla sea eficaz.|V",
      "Quienes pasan por prisión reinciden claramente menos que quienes reciben sanciones no privativas de libertad.|F|La revisión de Nagin, Cullen y Jonson (2009) halló efectos nulos o ligeramente criminógenos del encarcelamiento.",
      "En el tratamiento penitenciario, la Administración ofrece y la persona decide si participa.|V"
    ],
    q: [
      "Un ayuntamiento duplica la multa por exceso de velocidad, pero retira todos los radares. Según la evidencia sobre disuasión, ¿qué cabe esperar?|Un efecto disuasorio mucho menor|Un efecto disuasorio doble|Un efecto criminógeno inmediato|Disuade sobre todo la probabilidad percibida de ser detenido, no la cuantía de la sanción (Nagin, 2013).",
      "¿Qué autor anticipó en 1764 que la certeza del castigo importa más que su crueldad?|Beccaria|Feuerbach|Burton|Beccaria lo defendió en 1764, y Nagin (2013) lo confirmó al revisar la evidencia sobre disuasión.",
      "¿Qué significa «reeducar» en el marco de la LOGP?|Ofrecer medios para vivir sin delinquir|Cambiar la personalidad del condenado|Modificar las ideas de la persona|Reeducar es ofrecer tratamiento, formación, trabajo y contacto con el exterior, no cambiar la personalidad ni las ideas.",
      "¿Por qué la amenaza de penas más duras influye poco en muchos delitos?|Se cometen por impulso o bajo sustancias|Las penas largas no previenen ningún delito|La población conoce bien cada pena|Casi nadie conoce la pena exacta de cada delito, y muchos se cometen de forma impulsiva o bajo los efectos de sustancias."
    ],
    inc: [
      "Sobre la disuasión|Las penas más largas disuaden siempre más|La probabilidad de detección disuade|El tratamiento adecuado reduce la reincidencia|Endurecer penas que ya son largas apenas añade efecto disuasorio. Lo que más pesa es la certeza del castigo (Nagin, 2013)."
    ],
    seq: [],
    cls: [
      "Qué dice la evidencia|Respaldado: la probabilidad de detección disuade; el tratamiento adecuado reduce la reincidencia|No respaldado: alargar penas ya largas disuade más; la prisión reduce la reincidencia frente a alternativas"
    ] },
  { t: "El artículo 25.2 de la Constitución ante el Tribunal Constitucional",
    tip: "Para las SSTC 2/1987 y 28/1988, el art. 25.2 CE es un mandato dirigido al legislador, a la Administración y a los jueces, no un derecho fundamental amparable. La reeducación no es el único fin legítimo de la pena, y la Administración debe ofrecer tratamiento, no garantizar el resultado. El mandato limita al legislador: la STC 169/2021 avaló la prisión permanente revisable porque prevé revisión y una posibilidad real de reinserción.",
    v: [
      "Mandato del art. 25.2 CE=Orientación obligatoria a la reinserción, no amparable como derecho fundamental",
      "STC 169/2021=Declaró constitucional la prisión permanente revisable",
      "Prisión permanente revisable=Pena introducida por la LO 1/2015, con revisión periódica",
      "Reeducación=Trabajo sobre competencias, actitudes y hábitos de la persona",
      "Reinserción=Vuelta a la sociedad en condiciones de vivir sin delinquir",
      "Readaptación=Término usado en Latinoamérica que sugería «corregir» a la persona",
      "Recurso de amparo=Vía ante el Tribunal Constitucional que no cabe para exigir la reinserción",
      "Vías ordinarias=Recursos ante el Juez de Vigilancia contra decisiones penitenciarias concretas"
    ],
    g: [
      "La prisión permanente revisable la introdujo la LO ___.|1/2015|7/2003|10/1995",
      "La STC 169/2021 avaló la prisión permanente revisable porque prevé una ___ periódica.|revisión|progresión|suspensión",
      "Según el Tribunal Constitucional, la reeducación ___ el único fin legítimo de la pena.|no es|es|debe ser",
      "La Administración debe ofrecer medios de tratamiento, pero no ___ el resultado.|garantizar|evaluar|documentar",
      "La reinserción depende también del empleo, la vivienda, la familia o el ___.|estigma|delito|grado"
    ],
    tf: [
      "La Constitución excluye la retribución y la prevención general como fines de la pena.|F|No las excluye: la reeducación no es el único fin legítimo, pero la ejecución debe orientarse a la reinserción.",
      "El mandato del art. 25.2 CE se dirige también a los jueces.|V",
      "El art. 25.2 CE sirve como criterio para juzgar la constitucionalidad de una pena.|V",
      "La STC 169/2021 declaró inconstitucional la prisión permanente revisable por ser potencialmente indefinida.|F|La declaró constitucional porque prevé revisión periódica y una posibilidad real de reinserción."
    ],
    q: [
      "Andrés ha completado un programa de deshabituación y trabaja en el taller, pero la Junta no propone su tercer grado. Alega que «la Constitución le da derecho a reinsertarse». ¿Qué cabe responderle?|Puede recurrir ante el Juez de Vigilancia|Puede acudir en amparo por el art. 25.2 CE|Tiene derecho al tercer grado por el programa|El art. 25.2 CE obliga a orientar su condena a la reinserción, no a concederle un grado concreto. Cabe recurso ante el JVP.",
      "¿Qué distingue la reeducación de la reinserción?|Una mira a la persona, la otra a su retorno|Una es un derecho, la otra un mandato|Una es española, la otra latinoamericana|La reeducación trabaja competencias y hábitos. La reinserción es la vuelta a la sociedad, que depende también del entorno.",
      "¿En qué sentido actúa el art. 25.2 CE como límite al legislador?|Exige un horizonte real de reinserción|Impide toda pena de larga duración|Obliga a conceder permisos periódicos|Sin revisión ni horizonte de salida, una pena perdería su orientación constitucional (STC 169/2021).",
      "¿Por qué hoy se prefiere hablar de «reinserción» y no de «readaptación»?|Readaptación sugería «corregir» a la persona|Readaptación es un término solo jurídico|Readaptación excluye el tratamiento voluntario|El término readaptación, usado durante décadas en Latinoamérica, sugería «corregir» a la persona."
    ],
    inc: [
      "Sobre reeducación y reinserción|La reinserción depende solo de la persona|La reeducación trabaja actitudes y hábitos|Readaptación sugería «corregir» a la persona|La reinserción depende también del empleo, la vivienda, la familia o el estigma, no solo del trabajo sobre la persona."
    ],
    seq: [],
    cls: [
      "Término|Reeducación: competencias; actitudes; hábitos|Reinserción: empleo; vivienda; familia; estigma"
    ] }
] }
);

// SAIMAP Psicología · Penitenciaria · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Penas sin cárcel: alternativas a la privación de libertad", cap: 2, pir: "alta", mods: [
  { t: "Suspensión, expulsión y otras opciones del Código Penal",
    tip: "Para muchos delitos de gravedad baja o media, la cárcel no reduce la reincidencia y rompe el empleo y los vínculos familiares. La suspensión de la ejecución (arts. 80–87 CP) es la alternativa más utilizada: ordinaria para penas de hasta 2 años, extraordinaria y para drogodependientes, con penas de hasta 5 años. La LO 1/2015 suprimió la sustitución general del antiguo art. 88 CP, pero subsiste la expulsión de extranjeros (art. 89 CP). Ninguna de estas figuras es un perdón.",
    v: [
      "Medidas alternativas a la prisión=Respuestas penales que evitan o acortan el ingreso y se cumplen en la comunidad",
      "Suspensión de la ejecución=Aplazamiento del ingreso condicionado a no delinquir y a cumplir deberes",
      "Suspensión ordinaria=Modalidad del art. 80 CP para penas que, sumadas, no superan 2 años",
      "Suspensión extraordinaria=Modalidad excepcional del art. 80.3 CP para quien no reúne todos los requisitos",
      "Suspensión para drogodependientes=Modalidad del art. 80.5 CP para penas de hasta 5 años, con tratamiento",
      "Revocación=Pérdida de la suspensión por incumplimiento grave o nuevo delito, con ingreso en prisión",
      "Expulsión=Sustitución de la pena de una persona extranjera por su salida de España (art. 89 CP)",
      "Antiguo art. 88 CP=Permitía sustituir penas cortas de prisión por multa o TBC hasta 2015"
    ],
    g: [
      "La suspensión ordinaria se aplica a penas que, sumadas, no superan ___.|2 años|3 años|5 años",
      "La suspensión para drogodependientes alcanza penas de hasta ___.|5 años|2 años|3 años",
      "La LO 1/2015 suprimió la ___ general de penas cortas del antiguo art. 88 CP.|sustitución|suspensión|revocación",
      "Si la persona cumple las condiciones de la suspensión, la pena se da por ___.|extinguida|revocada|sustituida",
      "La suspensión extraordinaria se regula en el art. ___ CP.|80.3|80.5|89"
    ],
    tf: [
      "La suspensión ordinaria exige no tener antecedentes computables y satisfacer la responsabilidad civil o comprometerse a hacerlo.|V",
      "La expulsión de extranjeros desapareció con la LO 1/2015, junto con la sustitución general.|F|La LO 1/2015 suprimió la sustitución general del antiguo art. 88 CP, pero la expulsión subsiste en el art. 89 CP.",
      "La suspensión de la ejecución equivale a un perdón, porque la persona no llega a ingresar en prisión.|F|No es un perdón: supone condiciones, control y amenaza de ingreso si se incumplen. Lo que evita es la ruptura con la vida normal.",
      "La suspensión puede condicionarse a participar en programas formativos o de prevención de la violencia.|V"
    ],
    q: [
      "Laura, sin antecedentes, es condenada a 1 año de prisión por un robo cometido para pagar su consumo de cocaína. El juez le impone tratamiento en un centro de adicciones y no ingresa. ¿Qué figura se ha aplicado?|La suspensión de la ejecución|La sustitución por multa o TBC|La libertad condicional adelantada|El juez condena a prisión, pero deja en suspenso el ingreso con condiciones. La sustitución general se suprimió en 2015.",
      "Un condenado a 4 años de prisión por un delito cometido a causa de su dependencia pide no ingresar. ¿Qué precepto puede amparar la suspensión?|El art. 80.5 CP|El art. 80 CP|El antiguo art. 88 CP|Solo la modalidad para drogodependientes alcanza penas de hasta 5 años y exige deshabituación o tratamiento.",
      "¿Por qué se discute la expulsión del art. 89 CP?|Mezcla política penal y de extranjería|Sustituye la pena por trabajo no retribuido|Obliga a cumplir la pena en el domicilio|Mezcla fines penales y de extranjería y encaja mal con la reinserción. El trabajo no retribuido son los TBC, y el domicilio, la localización.",
      "Una persona con la pena suspendida comete un nuevo delito durante el plazo. ¿Qué puede ocurrir?|Que se revoque la suspensión|Que la pena se dé por extinguida|Que la pena se convierta en multa|Si incumple gravemente o comete un nuevo delito, la suspensión puede revocarse y la persona ingresa en prisión."
    ],
    inc: [
      "Sobre la suspensión de la ejecución|La ordinaria alcanza penas de hasta 5 años|Puede revocarse si se comete un nuevo delito|Puede exigir no acercarse a la víctima|La ordinaria se limita a penas que, sumadas, no superan 2 años. Hasta 5 años llega la modalidad para drogodependientes."
    ],
    seq: [],
    cls: [
      "Modalidad de suspensión|Ordinaria: art. 80 CP; penas de hasta 2 años; sin antecedentes computables|Extraordinaria: art. 80.3 CP; carácter excepcional; esfuerzo por reparar el daño|Drogodependientes: art. 80.5 CP; penas de hasta 5 años; tratamiento de la adicción"
    ] },
  { t: "Trabajos en beneficio de la comunidad, localización permanente y multa",
    tip: "Los TBC (art. 49 CP, desarrollados por el RD 840/2011) son una actividad no retribuida de utilidad pública que exige el consentimiento del condenado, porque el art. 25.2 CE prohíbe los trabajos forzados. Los gestionan los servicios de gestión de penas y medidas alternativas, bajo el control del Juez de Vigilancia, y muchos se cumplen en programas como PRIA-MA, PROBECO o TASEVAL. La localización permanente (art. 37 CP) es privativa de libertad, y la multa (arts. 50–53 CP) sigue el sistema de días-multa.",
    v: [
      "TBC=Actividad no retribuida de utilidad pública que exige el consentimiento del condenado",
      "RD 840/2011=Norma que desarrolla los trabajos en beneficio de la comunidad",
      "Localización permanente=Pena privativa breve que obliga a permanecer en el domicilio o lugar fijado",
      "Días-multa=Número de días según la gravedad y cuota diaria según la capacidad económica",
      "Responsabilidad personal subsidiaria=Consecuencia del impago de la multa, cumplible en prisión, localización o TBC",
      "PRIA-MA=Programa en medidas alternativas para violencia de género",
      "PROBECO=Programa en medidas alternativas de habilidades prosociales y pensamiento",
      "TASEVAL y PROSEVAL=Programas en medidas alternativas sobre seguridad vial"
    ],
    g: [
      "Los TBC no pueden imponerse sin consentimiento porque el art. 25.2 CE prohíbe los trabajos ___.|forzados|retribuidos|privados",
      "La localización permanente se regula en el art. ___ CP.|37|49|50",
      "En el sistema de días-multa, la cuota diaria se fija según la ___ de la persona.|capacidad económica|gravedad del hecho|responsabilidad civil",
      "La ejecución de los TBC está bajo el control del ___.|Juez de Vigilancia|Centro Directivo|Equipo Técnico",
      "La localización permanente puede cumplirse de forma continuada o en ___ y días no laborables.|fines de semana|horario nocturno|días alternos"
    ],
    tf: [
      "La localización permanente es una pena privativa de libertad.|V",
      "Los TBC pueden imponerse aunque el condenado se oponga, siempre que no sean degradantes.|F|Requieren el consentimiento de la persona condenada, porque la Constitución prohíbe los trabajos forzados (art. 25.2 CE).",
      "En la multa, el número de días depende de la capacidad económica, y la cuota, de la gravedad del hecho.|F|Es al revés: la extensión en días depende de la gravedad del hecho, y la cuota diaria, de la capacidad económica.",
      "Una parte importante de los TBC se cumple en programas de intervención.|V"
    ],
    q: [
      "Sergio, condenado por conducir con una tasa de alcohol constitutiva de delito, acepta una pena de TBC que incluye un taller. ¿Qué programa de la SGIP encaja con su delito?|TASEVAL|PROBECO|PRIA-MA|TASEVAL y PROSEVAL son los programas de seguridad vial. PROBECO trabaja habilidades prosociales, y PRIA-MA, violencia de género.",
      "¿Qué problema de equidad plantea la multa?|El impago puede acabar en prisión por pobreza|La cuota diaria ignora la capacidad económica|No admite cumplirse mediante trabajos|Si no hay recursos, la responsabilidad subsidiaria puede terminar en prisión. Por eso tiene sentido que pueda cumplirse mediante TBC.",
      "¿Qué papel tiene el psicólogo en la pena de multa?|Prácticamente ninguno|Valorar el perfil del condenado|Aplicar programas de intervención|En la multa su papel es prácticamente nulo. Los programas y la valoración del perfil corresponden a los TBC.",
      "¿Quién gestiona la ejecución de los TBC?|Gestión de penas y medidas alternativas|Servicios sociales de cada ayuntamiento|Juntas de Tratamiento de los centros|La gestionan los servicios de gestión de penas y medidas alternativas de IIPP, bajo el control del Juez de Vigilancia."
    ],
    inc: [
      "Sobre los trabajos en beneficio de la comunidad|Son una actividad retribuida de utilidad pública|Requieren el consentimiento del condenado|No pueden supeditarse a fines económicos privados|Los TBC son una actividad no retribuida de utilidad pública, que no debe ser degradante."
    ],
    seq: [],
    cls: [
      "Pena alternativa|TBC: art. 49 CP; restringe el tiempo libre; programas de intervención|Localización permanente: art. 37 CP; restringe el movimiento; medios telemáticos|Multa: arts. 50–53 CP; restringe el patrimonio; días-multa"
    ] },
  { t: "La libertad condicional tras la reforma de 2015",
    tip: "Desde la LO 1/2015, la libertad condicional es una suspensión de la ejecución del resto de la pena. La concede el Juez de Vigilancia Penitenciaria con tercer grado, tres cuartas partes cumplidas y buena conducta (art. 90 CP). Hay modalidad adelantada (2/3), para primarios (mitad) y para mayores de 70 años o enfermos muy graves incurables (art. 91 CP). Si se revoca, el tiempo en libertad no se computa. No es un «cuarto grado».",
    v: [
      "Libertad condicional=Suspensión del resto de la pena desde la LO 1/2015",
      "Requisitos del art. 90 CP=Tercer grado, tres cuartas partes de la condena y buena conducta",
      "Modalidad adelantada=Acceso a los 2/3 con participación continuada en actividades laborales o culturales",
      "Modalidad para primarios=Acceso a la mitad en una primera condena de prisión no superior a 3 años",
      "Art. 91 CP=Supuesto de mayores de 70 años y enfermos muy graves incurables",
      "Art. 92 CP=Régimen específico de revisión para la prisión permanente revisable",
      "Revocación sin abono=El tiempo pasado en libertad no cuenta como cumplido si se revoca la medida",
      "Sesgo de selección=Quienes acceden ya tenían buen pronóstico, lo que infla su menor reincidencia"
    ],
    g: [
      "La modalidad ordinaria exige haber cumplido ___ de la condena.|tres cuartas partes|dos terceras partes|la mitad",
      "La modalidad adelantada del art. 90.2 CP permite el acceso a los ___ de la condena.|dos tercios|tres cuartos|cuatro quintos",
      "La libertad condicional para primarios exige una primera condena de prisión no superior a ___.|3 años|2 años|5 años",
      "La libertad condicional la concede el ___.|Juez de Vigilancia|Centro Directivo|Equipo Técnico",
      "En la AGE hubo ___ liberados condicionales en 2024, según la SGIP.|3.165|1.996|2.031"
    ],
    tf: [
      "Si se revoca la libertad condicional, el tiempo pasado en libertad se descuenta del resto de la pena.|F|Desde 2015 no se computa: al revocarse, hay que cumplir el resto completo de la pena.",
      "La idea de «cuarto grado» procede de la letra del art. 72.1 LOGP, no adaptada a la reforma de 2015.|V",
      "Los estudios del CEJFE prueban que la libertad condicional reduce por sí sola la reincidencia.|F|La asocian a menos reincidencia, pero parte se debe al sesgo de selección, y los datos catalanes no son extrapolables.",
      "El art. 91 CP permite el acceso de los mayores de 70 años sin haber cumplido las fracciones generales.|V"
    ],
    q: [
      "Rosa cumple 6 años, está en tercer grado y obtiene la libertad condicional a los 2/3. A los ocho meses comete un nuevo delito y se revoca. ¿Qué debe cumplir?|Todo el resto, sin descontar los ocho meses|El resto menos los ocho meses en libertad|Solo los ocho meses que pasó en libertad|Desde la LO 1/2015, el tiempo en libertad condicional no se computa como pena cumplida si se revoca.",
      "Un penado en tercer grado y con buena conducta cumple su primera condena de prisión, de 2 años y medio. ¿Cuándo puede acceder a la libertad condicional?|Al cumplir la mitad de la condena|Al cumplir los dos tercios|Al cumplir las tres cuartas partes|Es la modalidad para primarios del art. 90.3 CP. Los 2/3 corresponden a la adelantada, y los 3/4, a la ordinaria.",
      "¿Qué cambió la LO 1/2015 en la naturaleza de la libertad condicional?|Pasó a ser una suspensión del resto|Pasó a ser el último grado penitenciario|Pasó a computar el tiempo si se revoca|Dejó de ser una forma de cumplir la pena en libertad y pasó a ser una suspensión de la ejecución del resto.",
      "¿Qué exige la modalidad adelantada, además de los 2/3 de la condena?|Participación continuada en actividades|Una primera condena no superior a 3 años|Tener más de 70 años o enfermedad grave|Exige participación continuada en actividades laborales, culturales u ocupacionales (art. 90.2 CP)."
    ],
    inc: [
      "Sobre la libertad condicional tras 2015|La persona sigue clasificada en un cuarto grado|La concede el Juez de Vigilancia Penitenciaria|Exige haber observado buena conducta|La persona deja de estar clasificada y sometida al régimen penitenciario: lo que hay es una pena suspendida con condiciones."
    ],
    seq: [
      "Momento de acceso a la libertad condicional, de antes a después|Mitad de la condena, para primarios>Dos tercios, en la adelantada>Tres cuartas partes, en la ordinaria"
    ],
    cls: [
      "Modalidad de libertad condicional|Ordinaria: art. 90 CP; tres cuartas partes|Adelantada: art. 90.2 CP; dos tercios; actividades continuadas|Para primarios: art. 90.3 CP; mitad de la condena; primera condena hasta 3 años"
    ] },
  { t: "Alternativas en Latinoamérica y criterios de los tribunales",
    tip: "La regulación latinoamericana es muy heterogénea, frente al modelo relativamente uniforme español de LOGP y RP. Allí las alternativas se han extendido sobre todo por el hacinamiento, el uso intensivo de la prisión preventiva y el autogobierno criminal de algunos centros. En España, los tribunales han fijado que el art. 25.2 CE es un mandato y no un derecho fundamental amparable, que los permisos son un instrumento del tratamiento y que la prisión permanente revisable es constitucional (STC 169/2021).",
    v: [
      "Ley 24.660=Norma argentina de ejecución de la pena privativa de la libertad (1996)",
      "Ley 18.216=Norma chilena de penas sustitutivas, reformada en 2012",
      "Ley 65 de 1993=Código Penitenciario y Carcelario de Colombia",
      "Ley Nacional de Ejecución Penal=Norma mexicana de ejecución aprobada en 2016",
      "Autogobierno criminal=Control de hecho de la vida carcelaria por grupos de internos",
      "Medio libre=Cumplimiento en la comunidad, casi la mitad de las personas a cargo del INPE peruano",
      "SSTC 2/1987 y 28/1988=Fijaron que el art. 25.2 CE es un mandato y no un derecho amparable",
      "STC 169/2021=Declaró constitucional la prisión permanente revisable"
    ],
    g: [
      "Perú regula la ejecución en su Código de Ejecución Penal de ___.|1991|1993|1996",
      "Los permisos de salida son un instrumento del ___, no un derecho incondicionado.|tratamiento|régimen|control",
      "Tras anularse la instrucción que regulaba los FIES, su regulación pasó al RD ___.|419/2011|840/2011|190/1996",
      "En Latinoamérica, el lenguaje oficial pasó de la ___ a la reinserción.|readaptación|reeducación|retribución",
      "Una sentencia del Tribunal Supremo de ___ anuló la instrucción que regulaba los FIES.|2009|2011|2015"
    ],
    tf: [
      "Según el INPE, en abril de 2024 casi la mitad de las personas a su cargo cumplían en medio libre.|V",
      "La prisión permanente revisable es constitucional porque prevé revisión y una posibilidad real de reinserción.|V",
      "La Ley 18.216 de Chile es su Código Penitenciario y Carcelario.|F|La Ley 18.216 chilena regula las penas sustitutivas. El Código Penitenciario y Carcelario es la Ley 65 de 1993 de Colombia.",
      "La regulación de la ejecución penal en Latinoamérica es relativamente uniforme, como en España.|F|Es muy heterogénea, frente al modelo relativamente uniforme de España, basado en la LOGP y el RP."
    ],
    q: [
      "A Marcos se le deniega un permiso por «riesgo de quebrantamiento» y recurre ante el Juez de Vigilancia. El informe solo repite una puntuación. ¿Qué hace vulnerable la decisión?|Que no explica qué factores la justifican|Que el permiso es un derecho incondicionado|Que el informe lo firma un solo psicólogo|La denegación debe estar motivada. Un buen informe explica qué factores justifican la puntuación y qué podría cambiarla.",
      "En algunos sistemas latinoamericanos, grupos de internos controlan de hecho la vida carcelaria. ¿Cómo se denomina este fenómeno?|Autogobierno criminal|Código del recluso|Prisionización|Alda Mejías (2021) lo señala, junto al hacinamiento y la prisión preventiva, entre los problemas que impulsan las alternativas.",
      "¿Cuál es el hilo común de los criterios de los tribunales españoles?|Legalidad, motivación y reinserción|Seguridad, disciplina y custodia|Retribución, disuasión y control|Los informes psicológicos forman parte de esa motivación, y por eso deben ser claros, basados en datos y explícitos sobre sus límites.",
      "En las alternativas latinoamericanas, ¿qué valora el psicólogo?|La capacidad de cumplir en el entorno|La duración de la prisión preventiva|La legalidad de la vigilancia electrónica|Valora la capacidad de cumplir en el entorno y el riesgo de incumplimiento, o facilita los procesos restaurativos."
    ],
    inc: [
      "Sobre las alternativas en Latinoamérica|Se extendieron sobre todo por la baja criminalidad|Responden en parte al hacinamiento carcelario|Ganan peso la vigilancia electrónica y la mediación|Se extendieron como respuesta a problemas estructurales: hacinamiento, uso intensivo de la prisión preventiva y autogobierno criminal."
    ],
    seq: [],
    cls: [
      "Norma latinoamericana|Argentina: Ley 24.660; 1996|México: Ley Nacional de Ejecución Penal; 2016|Chile: Ley 18.216; penas sustitutivas"
    ] }
] },
{ n: 6, t: "La figura del psicólogo en Instituciones Penitenciarias", cap: 3, pir: "alta", mods: [
  { t: "De la observación al tratamiento: cómo nació la profesión",
    tip: "La psicología entró en la prisión española de forma gradual: la Central Penitenciaria de Observación (1967), el Decreto 162/1968, con la observación y el tratamiento científicos, y la Ley 39/1970, que creó el Cuerpo Técnico. La LOGP (LO 1/1979) fijó la reeducación y reinserción como fin primordial y adoptó la individualización científica. Las funciones del psicólogo siguen en el art. 282 del RP de 1981, vigente con rango de resolución. Hoy el núcleo es estimar y reducir el riesgo, con el modelo RNR.",
    v: [
      "Central Penitenciaria de Observación=Servicio de 1967 que estudiaba a los internos para orientar su clasificación",
      "Decreto 162/1968=Introdujo la observación y el tratamiento científicos con equipos de observación",
      "Ley 39/1970=Creó el Cuerpo Técnico de Instituciones Penitenciarias",
      "LOGP=LO 1/1979, primera ley orgánica de la democracia",
      "Individualización científica=Clasificación en grados según el estudio técnico de cada caso (art. 72 LOGP)",
      "Art. 282 RP 1981=Recoge las funciones del psicólogo y sigue vigente con rango de resolución",
      "Instrucción 3/2025=Regula la aplicación del principio de flexibilidad del art. 100.2 RP",
      "Modelo RNR=Referencia actual para estimar y reducir el riesgo (Andrews, Bonta y Hoge, 1990)"
    ],
    g: [
      "En la etapa del Decreto 162/1968, el trabajo del psicólogo era sobre todo ___.|diagnóstico|terapéutico|preventivo",
      "Según el art. 1 LOGP, el fin primordial de las instituciones penitenciarias es la reeducación y ___ social.|reinserción|integración|prevención",
      "El Reglamento Penitenciario vigente es el RD ___.|190/1996|162/1968|840/2011",
      "La LOGP se aprobó el 26 de septiembre de ___.|1979|1981|1970",
      "El psicólogo trabaja para la reinserción dentro de una organización que también debe garantizar la ___.|seguridad|formación|asistencia"
    ],
    tf: [
      "Las funciones del psicólogo penitenciario se recogen en el Reglamento Penitenciario de 1996.|F|Siguen en el art. 282 del RP de 1981, que el RD 190/1996 mantuvo en vigor con rango de resolución.",
      "La Ley 39/1970 creó los equipos de observación.|F|Los equipos de observación los introdujo el Decreto 162/1968. La Ley 39/1970 creó el Cuerpo Técnico.",
      "La individualización científica clasifica según un estudio técnico del caso y no por el simple paso del tiempo.|V",
      "El cambio de fondo de la profesión va de preguntar cómo es la persona a preguntar qué riesgo presenta y qué lo reduce.|V"
    ],
    q: [
      "¿Qué orden cronológico es el correcto?|Central de Observación, Decreto 162/1968, Ley 39/1970|Decreto 162/1968, Central de Observación, Ley 39/1970|Ley 39/1970, Decreto 162/1968, Central de Observación|La Central Penitenciaria de Observación es de 1967, el Decreto de 1968 y la Ley que creó el Cuerpo Técnico, de 1970.",
      "Una opositora debe citar la norma que recoge hoy las funciones del psicólogo penitenciario. ¿Cuál es?|El art. 282 del RP de 1981|El art. 59 de la LOGP|El art. 274 del RP de 1996|Atribuir las funciones al RP de 1996 es una trampa típica. El art. 59 LOGP define el tratamiento.",
      "¿Qué norma fue la primera ley orgánica de la democracia?|La LOGP de 1979|La Ley 39/1970|El RD 190/1996|La LO 1/1979, de 26 de septiembre, fijó la reeducación y reinserción como fin y adoptó la individualización científica.",
      "¿Por qué sigue vigente el art. 282 del RP de 1981?|El RP de 1996 lo mantuvo como resolución|La LOGP lo elevó a rango de ley orgánica|La Instrucción 3/2025 lo volvió a aprobar|El RD 190/1996 sustituyó al reglamento anterior, pero mantuvo algunos artículos en vigor con rango de resolución."
    ],
    inc: [
      "Sobre el origen de la profesión|La Ley 39/1970 trajo la observación científica|La Central de Observación se creó en 1967|La LOGP adoptó la individualización científica|La observación y el tratamiento científicos los introdujo el Decreto 162/1968. La Ley 39/1970 creó el Cuerpo Técnico."
    ],
    seq: [
      "Hitos de la psicología penitenciaria en España|Central Penitenciaria de Observación (1967)>Decreto 162/1968>Ley 39/1970>LOGP (1979)>Reglamento Penitenciario de 1981>Reglamento Penitenciario de 1996>Instrucción 3/2025"
    ],
    cls: [] },
  { t: "Qué hace hoy un psicólogo penitenciario",
    tip: "El psicólogo de la AGE pertenece normalmente al Cuerpo Superior de Técnicos de Instituciones Penitenciarias (subgrupo A1). Sus funciones del art. 282 del RP de 1981 se agrupan en estudiar la personalidad, participar en la clasificación y el PIT, aplicar programas, emitir informes y colaborar en formación e investigación. Interviene en casi todas las decisiones sobre la persona presa, y su principal problema ético es el doble rol.",
    v: [
      "Cuerpo Superior de Técnicos=Cuerpo del subgrupo A1 al que pertenece el psicólogo de la AGE",
      "Clasificación inicial=La propone la Junta en dos meses y la resuelve el Centro Directivo (art. 103 RP)",
      "Revisión de grado=Debe hacerse como máximo cada seis meses (art. 105 RP)",
      "Informe del Equipo Técnico=Requisito preceptivo de los permisos ordinarios (art. 154 RP)",
      "TVR=Tabla de Variables de Riesgo, herramienta de la SGIP para los permisos",
      "PAIEM=Programa de atención integral a personas con enfermedad mental",
      "PICOVI=Programa específico de la SGIP para conductas violentas",
      "Doble rol=Quien trata a un interno elabora también los informes que influyen en su libertad"
    ],
    g: [
      "La clasificación inicial se propone en un plazo de ___ desde que se recibe el testimonio de sentencia.|dos meses|seis meses|un mes",
      "El grado se revisa como máximo cada ___.|seis meses|dos meses|tres meses",
      "El programa específico de la SGIP para agresores sexuales es el ___.|PCAS|PRIA|PICOVI",
      "Valorar la idoneidad de un interno para un destino en un taller corresponde al área ___.|del trabajo|educativa|forense",
      "Para los permisos ordinarios es preceptivo el informe del ___.|Equipo Técnico|Centro Directivo|Juez de Vigilancia"
    ],
    tf: [
      "La clasificación inicial la resuelve la Junta de Tratamiento.|F|La Junta la propone, y la resuelve el Centro Directivo (art. 103 RP).",
      "El psicólogo atiende también problemas no criminógenos, como la ansiedad o las dificultades de adaptación al ingreso.|V",
      "El doble rol obliga a explicar desde el primer contacto qué información puede acabar en un informe.|V",
      "Las funciones del psicólogo se limitan al diagnóstico y a los informes de clasificación.|F|Incluyen también aplicar programas de tratamiento, participar en el PIT y colaborar en formación e investigación."
    ],
    q: [
      "En una jornada, una psicóloga entrevista a un joven angustiado que ingresa, dirige un grupo de violencia de género y redacta un informe sobre un permiso. ¿Qué rasgo de la profesión ilustra?|La variedad de áreas en que interviene|La separación entre clínica y evaluación|El predominio de la función diagnóstica|En una sola jornada ha sido clínica, terapeuta de grupo y evaluadora. El trabajo se parece poco al de una consulta.",
      "Un interno cuenta en el grupo algo que podría pesar en su próximo permiso, y el mismo psicólogo que dirige el grupo redactará el informe. ¿Qué problema ético aparece?|El doble rol|La prisionización|La normalización|La misma persona trata al interno y elabora los informes que influyen en su libertad.",
      "¿En qué plazo debe proponerse la clasificación inicial?|Dos meses desde el testimonio de sentencia|Seis meses desde el ingreso en prisión|Un mes desde la firmeza de la sentencia|La Junta la propone en dos meses desde que recibe el testimonio de sentencia (art. 103 RP). Los seis meses son el plazo máximo de revisión.",
      "¿Qué herramienta de la SGIP se usa en los informes sobre permisos?|La Tabla de Variables de Riesgo|El programa individualizado de tratamiento|El Programa de Prevención de Suicidios|Para los permisos ordinarios es preceptivo el informe del Equipo Técnico, en el que se usa la TVR."
    ],
    inc: [
      "Sobre las funciones del psicólogo penitenciario|Su referencia normativa es el RP de 1996|Emite informes sobre permisos y libertad condicional|Diseña, aplica o coordina programas específicos|Las funciones siguen en el art. 282 del RP de 1981, vigente con rango de resolución."
    ],
    seq: [],
    cls: [
      "Tarea del psicólogo|Evaluar: estudio de la personalidad; informe sobre un permiso; pronóstico para la libertad condicional|Intervenir: programas específicos; sesiones de grupo; atención a la ansiedad del ingreso"
    ] },
  { t: "El concepto legal de tratamiento y el programa individualizado",
    tip: "El art. 59 LOGP define el tratamiento como el conjunto de actividades directamente dirigidas a la reeducación y reinserción social de los penados. No se reduce a la psicoterapia: incluye formación, trabajo, deporte, cultura y contactos con el exterior (arts. 59–62 LOGP), y el régimen está a su servicio (art. 71 LOGP). El PIT lo diseña la Junta de Tratamiento a partir de la evaluación del Equipo Técnico. La participación es voluntaria (art. 112 RP), aunque no neutra.",
    v: [
      "Tratamiento penitenciario=Actividades directamente dirigidas a la reeducación y reinserción de los penados",
      "Art. 59 LOGP=Artículo que define legalmente el tratamiento",
      "Art. 71 LOGP=Establece que el régimen está al servicio del tratamiento",
      "Régimen=Normas de convivencia, orden y seguridad del centro",
      "PIT=Plan concreto de actividades diseñado para cada persona penada",
      "Necesidad criminógena=Factor de riesgo modificable relacionado con el delito",
      "Art. 112 RP=Establece que la participación en el tratamiento es voluntaria",
      "Art. 25.2 CE=Orienta las penas privativas de libertad hacia la reeducación y reinserción social"
    ],
    g: [
      "Según el art. 71 LOGP, el ___ está al servicio del tratamiento.|régimen|personal|programa",
      "El PIT lo diseña la ___ a partir de la evaluación del Equipo Técnico.|Junta de Tratamiento|Subdirección Médica|Comisión Disciplinaria",
      "Como cabe una clasificación inicial en tercer grado, no es exacto describir el sistema como ___ sin matices.|progresivo|individualizado|científico",
      "Rechazar el tratamiento ___ una falta disciplinaria.|no constituye|constituye siempre|puede constituir",
      "Para clasificar se tienen en cuenta la personalidad, el historial, la duración de la pena y el ___ al que la persona va a volver.|medio|centro|módulo"
    ],
    tf: [
      "Un curso de soldadura puede ser tratamiento si forma parte de un plan dirigido a la reinserción.|V",
      "Para clasificar, el art. 63 LOGP atiende solo al delito cometido y a la duración de la pena.|F|También se valoran la personalidad, el historial individual, familiar y social, el medio al que volverá y sus recursos.",
      "Como la participación es voluntaria, la evolución en el tratamiento no influye en permisos ni progresiones.|F|Es voluntaria, pero la evolución pesa en permisos, progresión y libertad condicional, así que la elección no es neutra.",
      "Un PIT acorde con el modelo RNR identifica necesidades criminógenas y fija indicadores de evolución.|V"
    ],
    q: [
      "Raúl, de 35 años, cometió varios robos con fuerza tras consumir alcohol, no tiene empleo estable y su hermana mantiene el contacto. ¿Qué PIT es más coherente con la LOGP?|Programa de alcohol, formación, taller y vínculo familiar|Psicoterapia individual como única actividad del plan|Destino en el taller sin intervenir sobre el alcohol|Ninguna de esas piezas es por sí sola psicoterapia, y todas son tratamiento. El PIT actúa sobre las necesidades criminógenas.",
      "¿Qué artículos de la LOGP muestran que el tratamiento no se reduce a la psicoterapia?|Arts. 59–62 LOGP|Arts. 272–273 RP|Arts. 41–45 LOGP|Incluyen formación, trabajo, deporte, cultura y contactos con el exterior. Los arts. 272–273 RP regulan la Junta de Tratamiento.",
      "Un interno acude a todas las sesiones de un programa solo para obtener un permiso. ¿Qué debe evitar el psicólogo?|Confundir participación formal con cambio real|Sancionarle por falta de motivación genuina|Excluirle del programa de forma inmediata|Su tarea es motivar sin coaccionar y no confundir acudir a las sesiones con el cambio real. Rechazar o fingir no es falta.",
      "¿Qué naturaleza tiene, según el Tribunal Constitucional, la orientación a la reinserción del art. 25.2 CE?|Un mandato al legislador y a la Administración|Un derecho fundamental exigible en amparo|Un derecho subjetivo a un programa concreto|Lo precisaron las SSTC 2/1987 y 28/1988. Creer que la reinserción es un derecho fundamental es un mito frecuente."
    ],
    inc: [
      "Sobre el tratamiento penitenciario|Se reduce a los programas psicológicos|Incluye el trabajo, la formación y el deporte|El régimen está a su servicio, según el art. 71|Según los arts. 59–62 LOGP, incluye formación, trabajo, deporte, cultura y contactos con el exterior, además de los programas."
    ],
    seq: [],
    cls: [
      "Concepto legal|Tratamiento: formación; trabajo; actividad deportiva; contactos con el exterior; programas psicológicos|Régimen: normas de convivencia; orden; seguridad"
    ] },
  { t: "Órganos colegiados y trabajo en equipo",
    tip: "Cada centro combina órganos unipersonales y colegiados. La Junta de Tratamiento (arts. 272–273 RP), presidida por el director, propone y decide sobre clasificación, progresiones, permisos, art. 100.2 RP, libertad condicional y PIT. Los Equipos Técnicos (arts. 274–275 RP), multidisciplinares, trabajan con la persona, ejecutan los programas e informan. La clasificación la resuelve el Centro Directivo, y cabe recurso ante el Juez de Vigilancia (art. 76 LOGP).",
    v: [
      "Junta de Tratamiento=Órgano colegiado que propone y decide sobre la situación del interno",
      "Equipo Técnico=Grupo multidisciplinar que observa, ejecuta programas e informa",
      "Arts. 272–273 RP=Regulan la Junta de Tratamiento",
      "Arts. 274–275 RP=Regulan los Equipos Técnicos",
      "Órganos unipersonales=Director, subdirectores y administrador del centro",
      "Juez de Vigilancia Penitenciaria=Controla la legalidad de la ejecución y protege los derechos (art. 76 LOGP)",
      "Centro Directivo=Órgano que resuelve la clasificación propuesta por la Junta",
      "Psicólogo facilitador=Comparte criterios con los funcionarios y recoge sus observaciones"
    ],
    g: [
      "La Junta de Tratamiento está presidida por el ___.|Director|Subdirector de Tratamiento|Jefe de Servicios",
      "Los Equipos Técnicos dependen de la Subdirección de ___.|Tratamiento|Seguridad|Régimen",
      "Los permisos los acuerda la Junta con informe previo del ___.|Equipo Técnico|Consejo de Dirección|Jefe de Servicios",
      "La Comisión Disciplinaria y la Junta Económico-Administrativa son órganos ___.|colegiados|unipersonales|externos",
      "La persona presa puede recurrir su clasificación ante el ___.|Juez de Vigilancia|Centro Directivo|Equipo Técnico"
    ],
    tf: [
      "El informe del psicólogo sobre la evolución en un programa es un acto de la Junta de Tratamiento.|F|Es un acto del Equipo Técnico. La propuesta de progresión de grado, en cambio, corresponde a la Junta.",
      "En la Junta de Tratamiento participan un trabajador social, un educador y el Jefe de Servicios.|V",
      "Los funcionarios de vigilancia pueden reforzar o desactivar lo que se trabaja en un programa.|V",
      "El Equipo Técnico formula las propuestas de clasificación y diseña el PIT.|F|Eso corresponde a la Junta de Tratamiento. El Equipo Técnico trabaja con la persona, ejecuta los programas e informa."
    ],
    q: [
      "Un interno practica en el grupo cómo pedir algo sin amenazar, pero en el módulo solo las amenazas consiguen respuesta. ¿Qué conviene que haga el psicólogo?|Compartir criterios con los funcionarios|Separar la vigilancia de la intervención|Trasladar al interno a otro módulo|Si el módulo no refuerza lo aprendido, se pierde. El psicólogo puede facilitar una visión común con los funcionarios.",
      "¿Qué órgano propone la progresión a tercer grado de un interno?|La Junta de Tratamiento|El Equipo Técnico|El Juez de Vigilancia|La Junta propone y resuelve sobre la situación del interno. El Equipo Técnico trabaja con él e informa.",
      "¿Quién preside la Junta de Tratamiento?|El Director del centro|El Subdirector de Tratamiento|El Jefe de Servicios|La preside el Director. El Subdirector de Tratamiento y el Jefe de Servicios son miembros, y de esa Subdirección dependen los Equipos.",
      "¿Por qué deben estar bien fundamentados los informes del psicólogo?|Los leerán el juez y, a menudo, la defensa|El Equipo Técnico los resuelve sin recurso|Sustituyen a la decisión de la Junta|La clasificación puede recurrirse ante el Juez de Vigilancia, que controla la legalidad de la ejecución."
    ],
    inc: [
      "Sobre la Junta de Tratamiento y el Equipo Técnico|El Equipo Técnico resuelve sobre la situación del interno|La Junta propone la aplicación del art. 100.2 RP|El Equipo Técnico depende de la Subdirección de Tratamiento|La regla práctica: el Equipo trabaja con la persona e informa, y la Junta resuelve sobre su situación."
    ],
    seq: [
      "Recorrido de la clasificación inicial|Testimonio de sentencia>Estudio del Equipo Técnico>Propuesta de la Junta de Tratamiento>Resolución del Centro Directivo>Posible recurso ante el Juez de Vigilancia"
    ],
    cls: [
      "Órgano|Junta de Tratamiento: la preside el Director; propone la clasificación; diseña el PIT; acuerda permisos|Equipo Técnico: multidisciplinar; ejecuta los programas; emite informes; seguimiento de los internos"
    ] }
] },
{ n: 7, t: "La sociedad de los presos: prisionización y poder informal", cap: 3, pir: "media", mods: [
  { t: "Clemmer, Sykes y los dolores del encarcelamiento",
    tip: "Toda prisión tiene una organización formal y otra informal creada por los internos. Clemmer («The Prison Community», 1940) acuñó la prisionización, la asunción en mayor o menor grado de la cultura carcelaria, y la atribuyó sobre todo a rasgos del interno. Sykes («The Society of Captives», 1958) vio la cultura de los presos como respuesta colectiva a cinco dolores del encarcelamiento: privación de libertad, de bienes y servicios, de relaciones heterosexuales, de autonomía y de seguridad.",
    v: [
      "Prisionización=Asunción en mayor o menor grado de los usos y la cultura de la prisión",
      "The Prison Community=Obra de Clemmer publicada en 1940",
      "The Society of Captives=Obra de Sykes de 1958 sobre una prisión de máxima seguridad",
      "Organización informal=Normas no escritas, jerarquías, lealtades y mercados clandestinos de los internos",
      "Dolores del encarcelamiento=Cinco privaciones del encierro que amenazan la imagen de uno mismo",
      "Privación de autonomía=Tener que pedir permiso para casi cualquier cosa",
      "Privación de seguridad=Estar alerta por la convivencia forzada con personas que pueden ser violentas",
      "Dependencia institucional=Dificultad para organizar la vida al salir tras años sin decidir"
    ],
    g: [
      "Para Clemmer, la prisionización es una forma de ___ orientada hacia el medio carcelario.|socialización|reeducación|normalización",
      "No poder elegir qué ropa ponerse o qué comer ilustra la privación de ___.|bienes y servicios|autonomía|libertad",
      "No poder acudir al cumpleaños de un hijo ilustra la privación de ___.|libertad|autonomía|seguridad",
      "Las condenas largas y la pérdida de vínculos con el exterior ___ la prisionización.|intensifican|amortiguan|estabilizan",
      "Sykes estudió una prisión estadounidense de ___ seguridad.|máxima|media|mínima"
    ],
    tf: [
      "Clemmer situó la clave de la prisionización sobre todo en la propia institución.|F|La situó sobre todo en las características del interno, sin cuestionar la propia institución.",
      "El término prisionización lo acuñó Sykes en 1958.|F|Lo acuñó Clemmer en «The Prison Community» (1940). Sykes describió los dolores del encarcelamiento.",
      "Para Sykes, cada dolor del encarcelamiento amenaza la imagen que la persona tiene de sí misma.|V",
      "Aunque algunas privaciones se han atenuado, el núcleo del modelo de Sykes sigue vigente.|V"
    ],
    q: [
      "Un hombre de 40 años, padre y con trabajo hasta su detención, ingresa en un módulo y pronto busca una reputación de duro y un hueco en la economía del módulo. ¿Cómo lo explicaría Sykes?|Como respuesta a los dolores del encierro|Como valores importados de su barrio|Como rasgo estable de su personalidad|Pierde su papel, su intimidad, su tiempo y su seguridad, y la cultura informal le ofrece formas de recuperar estatus.",
      "¿Qué factor amortigua la prisionización, según Clemmer?|Mantener relaciones positivas fuera|Integrarse en grupos carcelarios|Cumplir una condena larga|También la amortiguan las condenas cortas y una personalidad estable. Los otros dos factores la intensifican.",
      "Tener que pedir permiso para casi cualquier cosa corresponde a la privación de…|autonomía|libertad|bienes y servicios|La privación de autonomía se asocia a dependencia institucional: al salir cuesta organizar horarios y comidas.",
      "¿Qué distingue el enfoque de Sykes del de Clemmer?|Ve la cultura de los presos como respuesta al encierro|Atribuye la adaptación a la personalidad del interno|Niega que exista una organización informal|Clemmer no cuestionaba la institución. Sykes situó el origen de la cultura carcelaria en el sufrimiento que produce el encierro."
    ],
    inc: [
      "Sobre los dolores del encarcelamiento de Sykes|Incluyen la privación de formación|Incluyen la privación de seguridad|Incluyen la privación de autonomía|Las cinco son libertad, bienes y servicios, relaciones heterosexuales, autonomía y seguridad."
    ],
    seq: [],
    cls: [
      "Autor|Clemmer: prisionización; «The Prison Community» (1940); rasgos del interno|Sykes: dolores del encarcelamiento; «The Society of Captives» (1958); prisión de máxima seguridad"
    ] },
  { t: "Privación, importación y código del recluso",
    tip: "El modelo de privación, desarrollado a partir de Sykes (1958), sostiene que la subcultura nace dentro como respuesta a los dolores del encierro, por lo que importan las condiciones del centro. El de importación (Irwin y Cressey, 1962) destaca los valores e identidades que los internos traen de fuera. Hoy predomina el modelo integrado. El código del recluso (Sykes y Messinger, 1960) da cohesión, pero castiga la colaboración, y diversos estudios lo describen como debilitado.",
    v: [
      "Modelo de privación=La subcultura nace dentro como respuesta a los dolores del encierro",
      "Modelo de importación=La cultura de los presos refleja lo que cada uno trae de fuera",
      "Irwin y Cressey (1962)=Señalaron que los internos no llegan a prisión como páginas en blanco",
      "Modelo integrado=La adaptación depende a la vez de la institución y de lo que trae cada persona",
      "Código del recluso=Normas informales: no delatar, lealtad, no colaborar y mostrar fortaleza",
      "Sykes y Messinger (1960)=Describieron los principios básicos de las normas informales de los presos",
      "Chivato=Etiqueta temida por quien colabora con la institución",
      "Zamble y Porporino (1988)=Mostraron que la adaptación varía mucho y no sigue un deterioro uniforme"
    ],
    g: [
      "Según el modelo de privación, cuanto más duras son las condiciones del centro, más ___ es la subcultura de oposición.|fuerte|débil|estable",
      "El modelo de importación se debe a Irwin y Cressey, en ___.|1962|1958|1960",
      "Un interno evita que lo vean entrar en el despacho del psicólogo por miedo a la etiqueta de ___.|chivato|novato|blando",
      "En muchas prisiones actuales, la solidaridad colectiva habría cedido ante estrategias más ___.|individuales|organizadas|grupales",
      "Hoy predomina el modelo ___ de adaptación a la prisión.|integrado|de privación|de importación"
    ],
    tf: [
      "Los modelos de privación e importación se consideran hoy incompatibles.|F|Hoy predomina el modelo integrado: las condiciones del centro y lo que trae cada persona interactúan.",
      "Según el código del recluso, hay que aguantar sin quejarse y no dar señales de debilidad.|V",
      "El debilitamiento del código tradicional ha reducido con claridad la desconfianza entre internos.|F|Puede haber menos violencia organizada y, a la vez, más desconfianza entre internos y más dependencia de la institución.",
      "El cambio del código se relaciona con el peso de las decisiones técnicas sobre grados y permisos.|V"
    ],
    q: [
      "Un interno que consumía drogas y pertenecía a una banda reproduce en el módulo las mismas lealtades y hábitos que tenía fuera. ¿Qué modelo lo explica mejor?|El de importación|El de privación|El de normalización|Irwin y Cressey (1962) destacan que los internos traen valores, identidades y relaciones de su vida anterior.",
      "Un centro endurece sus condiciones y crece el mercado clandestino del módulo. ¿Qué modelo predice este efecto?|El de privación|El de importación|El de etiquetamiento|Si la institución priva de bienes, surge un mercado clandestino: cuanto más duras las condiciones, más fuerte la subcultura.",
      "¿Qué función cumple el código del recluso?|Da cohesión a quienes sufren lo mismo|Favorece la colaboración con la institución|Facilita la reinserción tras la salida|Da cohesión y regula una convivencia que la vigilancia no controla del todo, pero refuerza la oposición a las normas.",
      "¿Qué consecuencia práctica tiene el modelo integrado?|Mejorar el centro y evaluar a cada persona|Centrarse solo en las condiciones del centro|Centrarse solo en la historia previa|Si ambos factores interactúan, hay que mejorar las condiciones del centro y evaluar a cada persona y su contexto previo."
    ],
    inc: [
      "Sobre el código del recluso|Premia la colaboración con los funcionarios|Prohíbe delatar a otro interno|Exige lealtad al grupo frente a la autoridad|Castiga, a veces con violencia, a quien colabora: uno de sus principios es no colaborar con la institución."
    ],
    seq: [],
    cls: [
      "Modelo de adaptación|Privación: Sykes (1958); nace dentro de la prisión; importan las condiciones del centro|Importación: Irwin y Cressey (1962); valores traídos de fuera; rivalidades del barrio"
    ] },
  { t: "Jerarquías, economías ilegales y violencia entre internos",
    tip: "La sociedad de los presos tiene una estratificación informal basada en el delito, la capacidad de coerción, la experiencia carcelaria y la pertenencia a grupos. Los condenados por delitos sexuales, sobre todo contra menores, ocupan el escalón más bajo. La privación de bienes alimenta mercados clandestinos que generan deudas, presión y violencia. La organización del centro influye mediante la separación interior, los módulos de respeto, el régimen disciplinario y programas como PICOVI.",
    v: [
      "Estratificación informal=Orden no escrito que decide prestigio, protección y exposición",
      "Capacidad de coerción=Fuerza, reputación de violencia o respaldo de un grupo para imponerse",
      "Trapicheo=Intercambio de objetos y favores en la economía clandestina",
      "Módulos de respeto=Imponen normas de convivencia que debilitan la subcultura de oposición",
      "Separación interior=Medida organizativa que protege a los internos más vulnerables",
      "Arts. 41–45 LOGP=Regulan el régimen disciplinario",
      "Deuda carcelaria=Obligación que somete al interno a presión, amenazas o tareas impuestas",
      "Roles de Sykes=Papeles con nombres de la jerga, como el que delata o el que comercia"
    ],
    g: [
      "Los condenados por delitos ___, sobre todo contra menores, ocupan el escalón más bajo.|sexuales|violentos|económicos",
      "A finales de 2024, la población extranjera en prisión era del ___.|32,65 %|17,0 %|7,0 %",
      "Según Sykes, gozaba del mayor respeto el interno que ___ la prisión con entereza.|soporta|domina|denuncia",
      "Cuando los funcionarios toleran ciertas prácticas informales, se refuerza la autoridad de los ___ informales.|líderes|códigos|mercados",
      "En el ingreso, el psicólogo valora no solo el riesgo que la persona supone para otros, sino también el que ___.|corre|calcula|provoca"
    ],
    tf: [
      "Las figuras de liderazgo pueden presentarse como defensoras de los presos y, a la vez, extorsionar a los más débiles.|V",
      "La violencia entre internos se explica sobre todo por la historia previa de cada persona, no por el encierro.|F|Privación e importación se combinan: el mismo grupo se comporta distinto en un módulo masificado que en uno con normas y ocupación.",
      "Un interno joven que acepta droga a crédito en su primera semana puede quedar sometido a quien se la dio.|V",
      "Los condenados por delitos sexuales suelen recibir la protección informal del grupo por su vulnerabilidad.|F|Ocupan el escalón más bajo y sufren con frecuencia rechazo y agresiones, por lo que pueden necesitar medidas de protección."
    ],
    q: [
      "Ingresa por primera vez un joven con discapacidad intelectual. Al proponer su ubicación, ¿qué debe valorar especialmente el psicólogo?|El riesgo que corre él en el módulo|Su capacidad de coerción sobre otros|Su posición en la economía del módulo|Un joven sin experiencia penitenciaria o con discapacidad intelectual puede necesitar medidas de protección.",
      "¿Qué mecanismo explica que la privación de bienes acabe generando violencia?|Los mercados clandestinos crean deudas|La separación interior aísla a los débiles|Los módulos de respeto imponen normas|La demanda no cubierta genera mercados clandestinos, y sus deudas generan presión, amenazas y violencia.",
      "¿Qué medida institucional impone normas de convivencia que debilitan la subcultura de oposición?|Los módulos de respeto|La separación interior|El régimen disciplinario|La separación interior protege a los vulnerables, y el régimen disciplinario responde a la violencia.",
      "¿Qué criterio de jerarquía tiene peso en muchas prisiones españolas, con un 32,65 % de población extranjera?|La pertenencia a grupos por origen|La experiencia carcelaria previa|El tipo de delito cometido|Bandas, grupos de barrio y agrupaciones por origen nacional organizan alianzas y rivalidades."
    ],
    inc: [
      "Sobre la jerarquía entre internos|Es igualitaria dentro de cada módulo|Depende en parte del delito cometido|La experiencia carcelaria da ventaja|La sociedad de los presos no es igualitaria: hay una estratificación informal de prestigio, protección y exposición."
    ],
    seq: [],
    cls: [
      "Elemento|Economía ilegal: trapicheo; venta de drogas; préstamo con intereses; venta de protección|Respuesta institucional: separación interior; módulos de respeto; régimen disciplinario; PICOVI"
    ] },
  { t: "Goffman y Foucault: institución total y vigilancia",
    tip: "Goffman («Asylums», 1961, traducido como «Internados») definió la institución total como un lugar donde muchas personas viven aisladas bajo una rutina administrada formalmente, que transforma la identidad mediante la mortificación del yo. En «Estigma» (1963) trató el antecedente penitenciario como estigma del carácter. Foucault («Vigilar y castigar», 1975) vio la prisión como tecnología de poder disciplinario, con el panóptico de Bentham como modelo. Ambos son marcos interpretativos más que teorías comprobadas.",
    v: [
      "Institución total=Lugar donde muchas personas viven aisladas bajo una rutina administrada formalmente",
      "Mortificación del yo=Despersonalización que empieza con las ceremonias de ingreso",
      "Ceremonias de ingreso=Entregar pertenencias, ser fotografiado, recibir un número y ser registrado",
      "Colonización=Adaptación de quien se instala cómodamente en la institución",
      "Conversión=Adaptación de quien adopta por completo la visión del personal",
      "Estigma del carácter=Tipo al que pertenece el antecedente penitenciario, según Goffman (1963)",
      "Normalización=Medir a las personas respecto a una norma y corregir las desviaciones",
      "Panóptico=Diseño de Bentham (1791) en que quien se sabe observado acaba vigilándose"
    ],
    g: [
      "Goffman elaboró el concepto de institución total a partir de su trabajo de campo en un ___.|hospital psiquiátrico|centro penitenciario|cuartel militar",
      "Foucault publicó «Vigilar y castigar» en ___.|1975|1961|1963",
      "Para Foucault, la prisión busca producir individuos dóciles y ___.|útiles|aislados|culpables",
      "Para Foucault, allí donde hay poder hay ___.|resistencia|vigilancia|disciplina",
      "Oponerse de forma ___ es una de las adaptaciones descritas por Goffman.|intransigente|estratégica|colaboradora"
    ],
    tf: [
      "El concepto de institución total se debe a Foucault.|F|Es de Goffman (1961). Foucault desarrolló el poder disciplinario y la lectura del panóptico.",
      "Para Foucault, lo esencial del panóptico no es el edificio, sino el principio de vigilancia constante.|V",
      "Una prisión actual, con permisos y comunicaciones, es plenamente equiparable a las instituciones que observó Goffman.|F|Es menos «total» que esas instituciones, y cuánto se le aplica el concepto sigue en debate.",
      "Los algoritmos de riesgo pueden leerse como una forma actual del principio panóptico.|V"
    ],
    q: [
      "Tras años en prisión, un interno adopta por completo la visión del personal y la defiende ante sus compañeros. ¿Qué adaptación de Goffman muestra?|Conversión|Colonización|Retirada|La colonización es instalarse cómodamente en la institución, y la retirada, desconectar.",
      "¿Qué consecuencia tiene para el psicólogo la lectura foucaultiana?|Usar la evaluación con rigor y transparencia|Abandonar los tests y las clasificaciones|Limitar la evaluación al ingreso en prisión|Sus informes y tests forman parte del «examen» disciplinario. Eso no invalida la evaluación, pero exige conciencia de sus efectos.",
      "¿Qué práctica actual responde al principio panóptico?|El control telemático en tercer grado|Las comunicaciones íntimas con la pareja|El economato del módulo|La videovigilancia, el control telemático y los algoritmos de riesgo prolongan el principio de vigilancia constante.",
      "En «Estigma» (1963), ¿qué tipos de estigma distinguió Goffman?|Del cuerpo, del carácter y tribales|Del cuerpo, de la mente y sociales|Penales, sociales y sanitarios|El antecedente penitenciario es un estigma del carácter que dificulta el empleo y las relaciones tras la salida."
    ],
    inc: [
      "Sobre Goffman y Foucault|Foucault acuñó el concepto de institución total|Goffman describió la mortificación del yo|Foucault tomó el panóptico como modelo ideal|La institución total es de Goffman (1961). Atribuirla a Foucault es una trampa típica."
    ],
    seq: [
      "Obras de la sociología de la prisión|Clemmer (1940)>Sykes (1958)>Sykes y Messinger (1960)>Goffman (1961)>Irwin y Cressey (1962)>Foucault (1975)"
    ],
    cls: [
      "Autor|Goffman: institución total; mortificación del yo; «Internados»; estigma|Foucault: poder disciplinario; panóptico; normalización; «Vigilar y castigar»"
    ] }
] },
{ n: 8, t: "Lo que la prisión deja en las personas", cap: 3, pir: "alta", mods: [
  { t: "Adaptación, salud mental y suicidio: qué muestran los estudios",
    tip: "Zamble y Porporino (1988) hallaron que el malestar es máximo al ingreso y tiende a disminuir, sin deterioro generalizado y progresivo, y que el mejor predictor es el afrontamiento previo. Según Fazel y Seewald (2012), la psicosis ronda el 3,6 % en hombres y el 3,9 % en mujeres, y la depresión mayor, el 10,2 % y el 14,1 %, así que los trastornos graves no son mayoritarios. El riesgo de suicidio supera al de la población general, y en 2023 casi todos los suicidios en la AGE ocurrieron fuera del PPS.",
    v: [
      "Zamble y Porporino (1988)=Estudio longitudinal canadiense sobre la adaptación desde el ingreso",
      "Afrontamiento previo=Mejor predictor de la adaptación a la prisión",
      "Fazel y Seewald (2012)=Metaanálisis de 109 muestras, 33.588 personas y 24 países",
      "Estudio PRECA=Halló un 76,2 % de trastornos por consumo de sustancias a lo largo de la vida",
      "PAIEM=Atendió a 1.996 personas en la AGE en 2023, en torno al 4,7 %",
      "Mundt et al. (2024)=Incidencia agrupada de suicidio de 50 por 100.000 personas-año",
      "Fazel, Ramesh y Hawton=Analizaron 3.906 suicidios en 24 países de renta alta entre 2011 y 2014",
      "PPS=Programa de la SGIP que detecta y sigue a internos con riesgo de suicidio"
    ],
    g: [
      "Según Fazel y Seewald, la depresión mayor afecta en torno al ___ de los hombres presos.|10,2 %|3,6 %|14,1 %",
      "Según Zamble y Porporino, el malestar emocional es máximo ___.|al ingreso|a mitad de condena|antes de la salida",
      "Lo mayoritario en prisión son los trastornos por consumo de sustancias y los trastornos de la ___.|personalidad|ansiedad|alimentación",
      "Mundt et al. (2024) estimaron una incidencia agrupada de suicidio de ___ por 100.000 personas-año.|50|23|180",
      "En 2023, 29 de los 31 suicidios en la AGE correspondían a personas ___ en el PPS.|no incluidas|incluidas|dadas de alta"
    ],
    tf: [
      "El PAIEM atendió en 2023 a la mayoría de la población reclusa de la AGE.|F|Atendió a 1.996 personas, en torno al 4,7 % de la población (dato secundario).",
      "En el análisis de Fazel, Ramesh y Hawton (2017), Estados Unidos tenía la tasa de suicidio en prisión más alta.|F|Tenía la más baja del análisis, 23 por 100.000, frente a 180 en Noruega.",
      "Según Zamble y Porporino, quien afrontaba mal los problemas fuera tiende a afrontar mal la prisión.|V",
      "Las comparaciones de tasas de suicidio entre países exigen cautela por cómo se registra cada caso.|V"
    ],
    q: [
      "Un hombre sin diagnóstico previo, no incluido en el PPS, pierde en una semana su trabajo y el contacto con sus hijos. ¿Qué procede?|Valorarlo con cuidado por riesgo de suicidio|Esperar a que reúna criterios diagnósticos|Descartar el riesgo por no estar en el PPS|El riesgo no se limita a los casos identificados: la prevención combina el cribado al ingreso con la observación continua.",
      "¿Qué prevalencia de psicosis hallaron Fazel y Seewald en las mujeres presas?|3,9 %|14,1 %|3,6 %|El 3,6 % corresponde a los hombres, y el 14,1 %, a la depresión mayor en mujeres.",
      "¿Qué conclusión práctica se extrae del estudio de Zamble y Porporino?|El ingreso es un momento crítico|El deterioro crece con cada año|La adaptación es igual para todos|El malestar es máximo al ingreso, no hay deterioro progresivo y los efectos dependen mucho de la persona.",
      "¿Por qué es difícil atribuir al encierro la alta prevalencia de trastornos en prisión?|Parte es importada y parte se agrava dentro|Los estudios no incluyen a mujeres presas|Los diagnósticos se hacen solo al salir|Una parte de la prevalencia es importada y otra puede agravarse con el encierro, y separar ambos efectos es difícil."
    ],
    inc: [
      "Sobre la salud mental y el suicidio en prisión|La depresión mayor es más frecuente en hombres|El riesgo de suicidio supera al de la población general|Los trastornos graves no son mayoritarios|Según Fazel y Seewald (2012), es más frecuente en mujeres, con un 14,1 %, que en hombres, con un 10,2 %."
    ],
    seq: [],
    cls: [
      "Prevalencia según Fazel y Seewald (2012)|Psicosis: 3,6 % en hombres; 3,9 % en mujeres|Depresión mayor: 10,2 % en hombres; 14,1 % en mujeres"
    ] },
  { t: "Aislamiento y el debate sobre el experimento de Stanford",
    tip: "Haney (2003, 2018) documentó daños graves del aislamiento prolongado, y O'Keefe et al. (2010) no hallaron mayor deterioro, con resultados muy discutidos. Las Reglas Mandela (2015) prohíben el aislamiento indefinido y el prolongado, de más de 15 días consecutivos. Stanford (Zimbardo, 1971) no demostró que cualquiera se vuelva verdugo: Le Texier (2019) mostró instrucciones a los guardias y falta de controles, y en el BBC Prison Study (Reicher y Haslam, 2006) pesaron la identidad social y el liderazgo.",
    v: [
      "Reglas Mandela=Reglas de 2015 que prohíben el aislamiento indefinido y el prolongado",
      "Aislamiento prolongado=El que dura más de 15 días consecutivos",
      "Aislamiento=Encierro de 22 horas o más al día sin contacto humano apreciable",
      "Haney (2003, 2018)=Documentó ansiedad, hipersensibilidad e ideas paranoides tras el encierro solitario",
      "O'Keefe et al. (2010)=Estudio de Colorado sin mayor deterioro, muy discutido por su método",
      "Características de la demanda=Señales que indican lo que se espera de los participantes",
      "Le Texier (2019)=Revisó los archivos de Stanford y mostró instrucciones a los guardias",
      "BBC Prison Study=Estudio de Reicher y Haslam (2006) sin tiranía espontánea de los guardias"
    ],
    g: [
      "En España, las sanciones de aislamiento de más de ___ días requieren la aprobación del Juez de Vigilancia.|14|15|22",
      "El experimento de Stanford, previsto para dos semanas, se interrumpió a los ___ días.|seis|diez|tres",
      "Zimbardo reclutó a ___ universitarios para el experimento de Stanford.|24|12|36",
      "En el BBC Prison Study, la conducta se explicó por la identidad social y el ___.|liderazgo|uniforme|rol asignado",
      "Zimbardo y ___ (2020) respondieron a las críticas defendiendo sus conclusiones generales.|Haney|Haslam|Reicher"
    ],
    tf: [
      "El primer grado equivale a un aislamiento prolongado.|F|El régimen cerrado limita la vida en común, pero es un régimen de vida con actividades, revisado periódicamente.",
      "El experimento de Stanford demostró que la situación convierte a cualquier persona normal en verdugo.|F|Le Texier (2019) mostró instrucciones, falta de controles y características de la demanda. La interpretación sigue en discusión.",
      "Sobre el aislamiento, el debate sigue abierto en el plano científico, pero hay un acuerdo amplio en el normativo.|V",
      "Las situaciones importan a través de cómo las personas se identifican con un grupo y de quién lo dirige.|V"
    ],
    q: [
      "Un directivo sostiene que basta poner un uniforme a un funcionario para que se vuelva abusivo, como «demostró» Stanford. ¿Qué responde la evidencia?|Importan la formación, las normas y el liderazgo|El uniforme produce abuso de forma automática|Solo la personalidad del funcionario es decisiva|La conducta del personal depende de la formación, las normas de la institución y el estilo de liderazgo, no del uniforme.",
      "¿Qué consideran aislamiento prolongado las reglas 43 y 44 de las Reglas Mandela?|El de más de 15 días consecutivos|El de más de 14 días por sanción|El de más de 22 horas al día|Más de 14 días es el umbral español para la aprobación judicial, y 22 horas al día, la definición de aislamiento.",
      "¿Qué hallaron Reicher y Haslam (2006) en el BBC Prison Study?|Los guardias no adoptaron una tiranía espontánea|Los guardias reprodujeron la crueldad de Stanford|Los presos asumieron de inmediato un rol pasivo|Con más controles, la conducta de los grupos se explicó por la identidad social compartida y el liderazgo.",
      "¿Por qué se discuten los resultados de O'Keefe et al. (2010)?|Por problemas de método|Por haber usado universitarios|Por haber durado solo seis días|No hallaron mayor deterioro en las personas aisladas, pero sus resultados han sido muy discutidos por problemas de método."
    ],
    inc: [
      "Sobre el experimento de Stanford|Los guardias no recibieron instrucciones|Se interrumpió a los seis días de empezar|Los papeles de guardia o preso se asignaron al azar|Le Texier (2019) mostró que los guardias recibieron instrucciones sobre cómo comportarse."
    ],
    seq: [
      "Debate sobre el experimento de Stanford|Zimbardo (1971)>Reicher y Haslam (2006)>Le Texier (2019)>Zimbardo y Haney (2020)"
    ],
    cls: [
      "Estudio|Zimbardo (1971): prisión de Stanford; 24 universitarios; interrumpido a los seis días|Reicher y Haslam (2006): BBC Prison Study; identidad social; liderazgo"
    ] },
  { t: "Mujeres presas: necesidades propias y Reglas de Bangkok",
    tip: "A 31-12-2024, las mujeres eran 4.123 de 59.226 personas presas en España, en torno al 7 %, en un sistema diseñado para hombres. Presentan más victimización previa, más depresión y cargas de cuidado, y suelen cumplir lejos de casa por la escasez de módulos. Las Reglas de Bangkok (Res. 65/229, 2010) piden atender sus necesidades propias y preferir medidas no privativas. En España pueden convivir con sus hijos hasta los 3 años (art. 38.2 LOGP).",
    v: [
      "Reglas de Bangkok=Reglas de la ONU de 2010 sobre reclusas y medidas no privativas para mujeres",
      "Res. 65/229=Resolución de la ONU que aprobó las reglas sobre mujeres presas",
      "Art. 38.2 LOGP=Permite que las madres convivan en prisión con sus hijos hasta los 3 años",
      "Unidades externas de madres=Recursos para madres situados fuera del recinto penitenciario",
      "Ser Mujer=Programa para reducir la vulnerabilidad y trabajar la violencia sufrida",
      "Brecha de género=Programas pensados para hombres y actividades que reproducen roles tradicionales",
      "Familia sustitutiva=Red de apoyo que construyen las internas entre ellas",
      "Mecanismo Nacional de Prevención=Ha recomendado desarrollar programas específicos para mujeres"
    ],
    g: [
      "A 31-12-2024, el ___ de las mujeres penadas clasificadas en la AGE estaba en tercer grado.|32,0 %|17,0 %|7,0 %",
      "Según Fazel y Seewald, la depresión mayor afecta al ___ de las mujeres presas.|14,1 %|10,2 %|3,9 %",
      "Las madres pueden convivir en prisión con sus hijos hasta los ___ años.|3|6|2",
      "Como hay pocos módulos de mujeres, muchas cumplen lejos de su domicilio, lo que favorece la ruptura ___.|familiar|laboral|educativa",
      "Las Reglas de Bangkok piden registros que respeten la dignidad y eviten la ___.|revictimización|reincidencia|prisionización"
    ],
    tf: [
      "La delincuencia de las mujeres presas suele ser más violenta que la de los hombres.|F|Suele ser menos violenta. Presentan más victimización previa, más depresión y más cargas de cuidado.",
      "Las Reglas de Bangkok prohíben el aislamiento de más de 15 días consecutivos.|F|Esa prohibición procede de las Reglas Mandela (2015). Las de Bangkok tratan de las necesidades de las mujeres presas.",
      "Tras el ingreso, la red de apoyo de las mujeres suele debilitarse más que la de los hombres.|V",
      "Las Reglas de Bangkok piden preferir medidas no privativas cuando sea posible, sobre todo con hijos a cargo.|V"
    ],
    q: [
      "Lucía, de 34 años, condenada por tráfico de drogas a pequeña escala, tiene dos hijos al cuidado de su madre, y el centro de mujeres más cercano está a 200 km. ¿Qué incluiría una evaluación con perspectiva de género?|La violencia sufrida y el impacto en sus hijos|Solo su riesgo de reincidir en delitos de tráfico|Su posición en la jerarquía informal del módulo|Valoraría su historia de pareja violenta, la separación de los niños y la viabilidad de un régimen abierto o una unidad dependiente.",
      "¿Qué porcentaje aproximado de la población presa en España eran mujeres a finales de 2024?|7 %|17 %|32 %|Eran 4.123 de 59.226. El 32 % es la proporción de penadas clasificadas en tercer grado, y el 17 %, la de los hombres.",
      "¿Qué ámbito de las Reglas de Bangkok pide valorar la victimización previa y las responsabilidades de cuidado?|Ingreso y clasificación|Salud y salud mental|Registros y seguridad|La seguridad se refiere a registros que respeten la dignidad, y la salud, a una atención adaptada a las mujeres.",
      "¿Qué crítica persiste en España pese a las Unidades de Madres y al programa Ser Mujer?|Una brecha de género en los programas|La prohibición de convivir con los hijos|La ausencia total de régimen abierto|Muchos programas se diseñaron para hombres y algunas actividades formativas reproducen roles tradicionales."
    ],
    inc: [
      "Sobre las mujeres presas en España|Están menos en tercer grado que los hombres|Son en torno al 7 % de la población presa|Muchas cumplen condena lejos de su domicilio|A 31-12-2024 estaba en tercer grado el 32,0 % de las penadas clasificadas, frente al 17,0 % de los hombres."
    ],
    seq: [],
    cls: [
      "Ámbito de las Reglas de Bangkok|Ingreso y clasificación: historia de victimización; responsabilidades de cuidado|Hijos: contacto con los hijos; atención a los que conviven con la madre|Alternativas: medidas no privativas; preferencia con hijos a cargo"
    ] },
  { t: "Criminología crítica, abolicionismo y alternativas al encierro",
    tip: "La criminología crítica pregunta por qué ciertas conductas y personas acaban en prisión. Sus antecedentes incluyen a Rusche y Kirchheimer (1939), y Baratta criticó la selectividad del derecho penal. El abolicionismo (Christie, Hulsman, Mathiesen) propone sustituir la prisión por respuestas no punitivas. La certeza del castigo disuade más que su severidad (Nagin, 2013), y la prisión tiene efectos nulos o ligeramente criminógenos frente a las alternativas (Nagin, Cullen y Jonson, 2009). Pero las alternativas pueden ampliar el control penal.",
    v: [
      "Criminología crítica=Pregunta por qué ciertas conductas y personas acaban en prisión",
      "Rusche y Kirchheimer (1939)=Relacionaron las formas de castigo con la estructura económica",
      "Baratta=Criticó el derecho penal por seleccionar a los grupos más desfavorecidos",
      "Abolicionismo=Propone sustituir la prisión por respuestas no punitivas al conflicto",
      "Los límites del dolor=Obra de Christie (1981) que ve el castigo como reparto deliberado de dolor",
      "Reduccionismo=Usar la prisión solo como último recurso y reducir su alcance",
      "Justicia restaurativa=Reparación del daño con la participación de víctima, infractor y comunidad",
      "Populismo punitivo=Endurecimiento penal por motivos electorales y no basado en datos"
    ],
    g: [
      "Según Nagin (2013), la ___ del castigo disuade más que su severidad.|certeza|duración|dureza",
      "Christie publicó «Los límites del dolor» en ___.|1981|1975|1939",
      "Según Nagin, Cullen y Jonson (2009), el encarcelamiento tiene efectos nulos o ligeramente ___ sobre la reincidencia.|criminógenos|preventivos|disuasorios",
      "Además de Christie, son autores de referencia del abolicionismo Hulsman y ___.|Mathiesen|Baratta|Kirchheimer",
      "Ante una alternativa, la pregunta relevante es si ___ a la prisión o se añade a ella.|sustituye|precede|refuerza"
    ],
    tf: [
      "La criminología crítica se centra en por qué delinque cada persona concreta.|F|Desplaza la pregunta hacia por qué ciertas conductas y ciertas personas acaban en prisión.",
      "Una pulsera telemática puede sumar control a quien antes habría quedado en libertad sin más.|V",
      "El reduccionismo propone abolir la prisión y sustituirla por respuestas no punitivas.|F|Esa es la propuesta abolicionista. El reduccionismo usa la prisión solo como último recurso y reduce su alcance.",
      "Los resultados de Nagin, Cullen y Jonson no demuestran por sí solos que la prisión sobre.|V"
    ],
    q: [
      "A un joven sin antecedentes, condenado por un robo sin violencia, se le proponen TBC con un programa formativo y un encuentro con la víctima si ambas partes lo aceptan. ¿Qué enfoque incorpora el encuentro?|Justicia restaurativa|Populismo punitivo|Reduccionismo penal|El encuentro busca reparar el daño con la participación de víctima e infractor, sin los costes conocidos del encierro.",
      "¿Qué propone el reduccionismo?|Usar la prisión solo como último recurso|Sustituir la prisión por respuestas no punitivas|Reparar el daño con la víctima y la comunidad|Sustituir la prisión es la propuesta abolicionista, y reparar el daño, la de la justicia restaurativa.",
      "¿Qué autores relacionaron las formas de castigo con el mercado de trabajo de cada época?|Rusche y Kirchheimer|Hulsman y Mathiesen|Reicher y Haslam|Rusche y Kirchheimer (1939) son antecedentes de la criminología crítica. Hulsman y Mathiesen son referentes del abolicionismo.",
      "Un partido propone duplicar las penas de robo para reducir los delitos. ¿Qué dato de la evidencia lo cuestiona?|La certeza disuade más que la severidad|La severidad disuade más que la certeza|La prisión reduce más la reincidencia|Según Nagin (2013), aumentar la duración de las penas apenas reduce los delitos."
    ],
    inc: [
      "Sobre las alternativas al encierro|Siempre reducen el alcance del control penal|Incluyen regímenes abiertos y control telemático|Pueden evitar los costes conocidos del encierro|Pueden ampliar el control penal a personas que antes no habrían recibido sanción, en lugar de sustituir a la prisión."
    ],
    seq: [],
    cls: [
      "Posición ante la prisión|Abolicionismo: sustituir la prisión; Christie; Hulsman; Mathiesen|Reduccionismo: prisión como último recurso; reducir su alcance|Justicia restaurativa: reparar el daño; participación de la víctima y la comunidad"
    ] }
] }
);

// SAIMAP Psicología · Penitenciaria · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Explicaciones biológicas y psicológicas del delito", cap: 4, pir: "alta", mods: [
  { t: "De Lombroso a la genética conductual",
    tip: "Lombroso (1876) defendió el delincuente nato como un retroceso evolutivo, el atavismo, reconocible por estigmas físicos. Goring (1913) no halló ese tipo físico al comparar presos y no presos. La genética conductual estima que algo más del 40 % de la variación en conducta antisocial se asocia a factores genéticos (Rhee y Waldman, 2002). La heredabilidad describe poblaciones, no personas, y no existe un «gen del delito».",
    v: [
      "Atavismo=Tesis de que el delincuente nato sería un retroceso evolutivo hacia formas primitivas",
      "Estigmas=Rasgos físicos, como medidas del cráneo o de la cara, que delatarían al delincuente nato",
      "L'uomo delinquente=Obra de Lombroso publicada en 1876",
      "Goring (1913)=Comparó estadísticamente presos y no presos sin hallar el tipo físico de Lombroso",
      "Heredabilidad=Proporción de la varianza de un rasgo en una población asociada a diferencias genéticas",
      "Estudios de gemelos=Comparan el parecido de idénticos y mellizos para estimar el peso genético",
      "Estudios de adopción=Comparan a la persona adoptada con su familia biológica y con la adoptiva",
      "Ambiente no compartido=Experiencias propias de cada persona, el 0,43 de la varianza en Rhee y Waldman"
    ],
    g: [
      "Lombroso desplazó la atención del delito como acto abstracto, propio de la escuela clásica de ___, a la persona.|Beccaria|Bentham|Howard",
      "En Rhee y Waldman (2002), la genética aditiva explica una proporción de la varianza de ___.|0,32|0,43|0,16",
      "Los gemelos idénticos comparten todos sus genes, y los mellizos, de media, ___.|la mitad|un cuarto|casi todos",
      "El metaanálisis de Rhee y Waldman reunió ___ estudios de gemelos y adopción.|51|27|73",
      "El consenso actual sobre las causas biológicas del delito es ___: predisponen, pero dependen del ambiente.|multifactorial|determinista|unicausal"
    ],
    tf: [
      "Goring (1913) confirmó estadísticamente los estigmas físicos descritos por Lombroso.|F|Comparó presos y hombres sin condenas y no encontró el tipo físico que Lombroso describía.",
      "Que la conducta antisocial sea en parte heredable no significa que sea inmodificable.|V",
      "Una heredabilidad del 40 % indica que el 40 % del delito de una persona concreta viene de los genes.|F|La heredabilidad describe poblaciones, no personas: no dice qué parte del delito de alguien concreto se debe a los genes.",
      "En Rhee y Waldman (2002), el ambiente compartido explica menos varianza que el no compartido.|V"
    ],
    q: [
      "Un periódico titula que «la mitad del delito es genética» a partir de un estudio de heredabilidad. ¿Qué precisión es la más importante?|Describe poblaciones, no individuos|Solo es válida en estudios de adopción|Se refiere al ambiente compartido|La heredabilidad estima qué parte de las diferencias de una población se asocia a los genes, no el origen del delito de una persona.",
      "¿Cuál fue la aportación histórica de Lombroso?|Centrar la atención en la persona|Demostrar el atavismo con datos|Fundar la escuela clásica penal|Desplazó el foco del delito como acto abstracto, propio de la escuela clásica de Beccaria, a la persona que lo comete.",
      "En el metaanálisis de Rhee y Waldman, ¿qué proporción aproximada de la variación se asocia al ambiente?|Casi el 60 %|Algo más del 40 %|Alrededor del 16 %|La genética aditiva y la no aditiva suman 0,41, y el ambiente compartido y el no compartido, 0,59.",
      "¿Por qué se afirma que no existe un «gen del delito»?|El delito es una categoría legal|Los genes no influyen en la conducta|Solo actúan genes no aditivos|Los genes influyen, con efectos pequeños y acumulados, en rasgos que hacen más probable la conducta antisocial."
    ],
    inc: [
      "Sobre la genética conductual del delito|Heredable equivale a inmodificable|Se heredan predisposiciones como la impulsividad|La heredabilidad describe poblaciones|Se heredan predisposiciones que el entorno puede activar o amortiguar, así que heredable no significa inmodificable."
    ],
    seq: [
      "Hitos de la explicación biológica del delito|Lombroso (1876)>Goring (1913)>Rhee y Waldman (2002)"
    ],
    cls: [
      "Componente de la varianza en Rhee y Waldman|Genético: aditivo 0,32; no aditivo 0,09|Ambiental: compartido 0,16; no compartido 0,43"
    ] },
  { t: "Genes, ambiente y cerebro: MAOA y neurocriminología",
    tip: "El gen MAOA codifica una enzima que degrada serotonina, noradrenalina y dopamina. En la cohorte de Dunedin, Caspi et al. (2002) hallaron más conducta antisocial solo cuando la variante de baja actividad coincidía con maltrato infantil, una interacción gen-ambiente. Byrd y Manuck (2014) la confirmaron en varones con efecto pequeño, y Haberstick et al. (2014) no la encontraron. Raine (2013) reunió correlatos cerebrales y fisiológicos que son asociaciones de grupo y pueden ser causa o consecuencia.",
    v: [
      "MAOA=Gen de la monoaminooxidasa A, enzima que degrada serotonina, noradrenalina y dopamina",
      "Interacción gen-ambiente=El efecto de una variante genética depende de la experiencia vivida",
      "Cohorte de Dunedin=Muestra neozelandesa de varones seguidos desde la infancia por Caspi et al.",
      "Byrd y Manuck (2014)=Revisión de 27 estudios que confirmó la interacción en varones con efecto pequeño",
      "Haberstick et al. (2014)=Estudio con la gran muestra Add Health que no encontró la interacción",
      "Gen del guerrero=Apodo mediático que transmite lo contrario de lo que muestran los datos",
      "The Anatomy of Violence=Obra de Raine (2013) sobre correlatos cerebrales y fisiológicos",
      "Baja frecuencia cardiaca=Uno de los correlatos fisiológicos de la conducta antisocial más replicados"
    ],
    g: [
      "Caspi et al. (2002) estudiaron la cohorte de Dunedin, en ___.|Nueva Zelanda|Estados Unidos|Reino Unido",
      "El gen MAOA está en el cromosoma ___, lo que complica su estudio en mujeres.|X|Y|21",
      "Byrd y Manuck revisaron ___ estudios sobre la interacción entre MAOA y maltrato.|27|51|73",
      "Según Raine, la disfunción ___ se asocia a peor control inhibitorio y planificación.|prefrontal|amigdalina|occipital",
      "Las alteraciones de la amígdala son relevantes en la ___, no en la mayoría de delitos.|psicopatía|reincidencia|toxicomanía"
    ],
    tf: [
      "En Dunedin, los varones con la variante de baja actividad sin maltrato mostraron más conducta antisocial que los demás.|F|Sin maltrato no se diferenciaban de los demás. El efecto solo apareció al combinarse la variante con el maltrato.",
      "En mujeres, la evidencia de la interacción entre MAOA y maltrato fue débil y no resistió los análisis de sensibilidad.|V",
      "La baja frecuencia cardiaca en reposo enlaza con la idea de Eysenck de una activación baja.|V",
      "Una disfunción prefrontal en un delincuente prueba que la alteración cerebral causó su conducta.|F|Puede ser causa o consecuencia: traumatismos, consumo o maltrato también alteran el cerebro."
    ],
    q: [
      "Dos chicos tienen la misma variante de baja actividad del MAOA. Uno crece con cuidados y límites, y el otro, con golpes y abandono. ¿Qué cabe esperar?|Algo más de riesgo en el segundo|El mismo riesgo alto en ambos|Ninguna diferencia entre ambos|La variante sola no predice nada. Con el maltrato la probabilidad sube algo, y la escuela, las amistades o las oportunidades pesarán más.",
      "¿Qué resultado obtuvieron Haberstick et al. (2014) con la muestra Add Health?|No hallaron la interacción|La confirmaron solo en mujeres|Hallaron un efecto grande|Con esa gran muestra estadounidense no encontraron la interacción entre la variante de baja actividad y el maltrato.",
      "¿Qué interpretación propone Raine para la baja frecuencia cardiaca en reposo?|Menos miedo y búsqueda de estimulación|Peor planificación y control inhibitorio|Menor sensibilidad al malestar ajeno|Una activación baja llevaría a buscar estimulación para compensarla. Las otras opciones corresponden a la corteza prefrontal y la amígdala.",
      "En prisión, ¿para qué sirve el conocimiento biológico sobre el delito?|Para entender riesgos personales|Para etiquetar a los internos|Para decidir la clasificación|No sirve para etiquetar, sino para entender riesgos personales, como la impulsividad o la ira, que se trabajan en tratamiento."
    ],
    inc: [
      "Sobre la interacción entre MAOA y maltrato|Tiene un efecto grande en ambos sexos|Se confirmó en varones con efecto pequeño|Un estudio con gran muestra no la halló|Byrd y Manuck (2014) la confirmaron solo en varones y con un efecto pequeño. En mujeres la evidencia fue débil."
    ],
    seq: [],
    cls: [
      "Hallazgo reunido por Raine|Baja frecuencia cardiaca: menos miedo; búsqueda de estimulación|Disfunción prefrontal: peor control inhibitorio; peor regulación emocional|Alteraciones de la amígdala: menor sensibilidad al miedo; relevante en la psicopatía"
    ] },
  { t: "Personalidad y aprendizaje: Eysenck, Sutherland, Akers y Bandura",
    tip: "Eysenck (1964) atribuyó la conciencia moral al condicionamiento: quien condiciona peor interioriza peor las normas, y lo relacionó con extraversión, neuroticismo y psicoticismo. Sutherland (1939/1947) sostuvo que el delito se aprende en grupos íntimos cuando priman las definiciones favorables a infringir la ley. Akers (1985) añadió refuerzo diferencial e imitación, y Bandura (1973) explicó la agresión por observación de modelos y describió la desconexión moral.",
    v: [
      "Condicionabilidad=Facilidad para adquirir respuestas condicionadas. Si es baja, cuesta interiorizar normas",
      "Asociación diferencial=Teoría de Sutherland: el delito se aprende si priman definiciones favorables",
      "Refuerzo diferencial=Mecanismo de Akers referido a las consecuencias de la conducta",
      "Definiciones=Actitudes hacia la ley, uno de los cuatro mecanismos de Akers",
      "Refuerzo vicario=Consecuencias observadas en otros que mantienen la conducta aprendida",
      "Desconexión moral=Mecanismos cognitivos que desactivan la autocensura ante la propia conducta dañina",
      "Frustración-agresión=Hipótesis de Dollard et al. (1939), luego matizada, sobre el origen de la agresión",
      "Razonamiento y Rehabilitación=Programa de Ross y Fabiano que originó en España el de Pensamiento Prosocial"
    ],
    g: [
      "Eysenck expuso su teoría en «Crime and Personality», publicada en ___.|1964|1973|1985",
      "Según Eysenck, la ___ se asocia a activación cortical baja y peor condicionamiento.|extraversión|introversión|estabilidad",
      "Burgess y Akers (1966) reformularon a Sutherland con los principios del condicionamiento ___.|operante|clásico|vicario",
      "«Éramos cinco» ilustra el mecanismo de ___ de la responsabilidad.|difusión|desplazamiento|distorsión",
      "Kohlberg describió tres niveles de razonamiento moral: preconvencional, convencional y ___.|posconvencional|preoperacional|autónomo"
    ],
    tf: [
      "La asociación diferencial es una teoría de Akers (1985).|F|Es de Sutherland (1939/1947). Akers la amplió en una teoría del aprendizaje social con cuatro mecanismos.",
      "Según Sutherland, en la interacción se aprenden técnicas delictivas, pero también motivos, actitudes y justificaciones.|V",
      "«Fue un ajuste de cuentas» es un ejemplo de comparación ventajosa.|F|Es lenguaje eufemístico. La comparación ventajosa contrasta la propia conducta con otras peores.",
      "Para Eysenck, el neuroticismo intensifica los hábitos ya adquiridos, incluidos los antisociales.|V"
    ],
    q: [
      "En una entrevista, un interno dice: «Ese tipo no vale nada, se lo buscó». ¿Qué mecanismo de desconexión moral emplea?|Deshumanización de la víctima|Justificación moral del acto|Distorsión de las consecuencias|Deshumanizar y culpar a la víctima desactiva la autocensura. La justificación moral apela a un fin noble, como defender a un hermano.",
      "Un adolescente ve que el chico mayor del barrio consigue dinero y respeto robando, y aprende la conducta antes de practicarla. ¿Qué autor lo explica mejor?|Bandura|Eysenck|Kohlberg|Bandura explicó la conducta por observación de modelos y por sus consecuencias, propias o vistas en otros.",
      "¿Qué cuatro mecanismos incluye la teoría del aprendizaje social de Akers?|Asociación, definiciones, refuerzo e imitación|Apego, compromiso, implicación y creencias|Condicionamiento, modelado, frustración y razonamiento|Son asociación diferencial, definiciones, refuerzo diferencial e imitación. Apego, compromiso, implicación y creencias son de Hirschi.",
      "¿Qué déficits de pensamiento señalaron Ross y Fabiano (1985)?|Impulsividad, rigidez y egocentrismo|Ansiedad, baja autoestima y tristeza|Atavismo, estigmas y baja activación|Señalaron impulsividad, rigidez para encontrar alternativas, egocentrismo y escasa resolución de problemas."
    ],
    inc: [
      "Sobre la teoría de Eysenck|Las tres dimensiones predicen el delito con igual consistencia|El psicoticismo implica frialdad, hostilidad y falta de empatía|La conciencia moral se adquiere en gran parte por condicionamiento|La relación con el delito no es igual de consistente para las tres dimensiones."
    ],
    seq: [
      "Teorías del aprendizaje del delito|Sutherland (1939/1947)>Burgess y Akers (1966)>Bandura (1973)>Akers (1985)"
    ],
    cls: [
      "Dimensión de Eysenck|Extraversión: activación cortical baja; búsqueda de estimulación|Neuroticismo: inestabilidad emocional; intensifica hábitos adquiridos|Psicoticismo: frialdad; hostilidad; falta de empatía"
    ] },
  { t: "Psicopatía: de Cleckley a la PCL-R",
    tip: "Cleckley describió en «The Mask of Sanity» (1941) una fachada de normalidad que oculta un déficit emocional profundo y lo resumió en 16 criterios. Hare lo convirtió en la PCL-R: 20 ítems puntuados 0, 1 o 2 por entrevista semiestructurada y revisión del expediente, con dos factores y cuatro facetas. La psicopatía no equivale al trastorno antisocial: la mayoría de quienes tienen un TAP no son psicópatas según la PCL-R. Su tratabilidad sigue en debate.",
    v: [
      "Máscara de cordura=Fachada de normalidad y encanto que oculta un déficit emocional profundo",
      "Cleckley (1941)=Psiquiatra que resumió el cuadro psicopático en 16 criterios clínicos",
      "PCL-R=Escala de Hare de 20 ítems, puntuada por entrevista y expediente, con dos factores",
      "Factor 1=Dimensión interpersonal-afectiva de la escala de Hare",
      "Factor 2=Dimensión de estilo de vida-antisocial de la escala de Hare",
      "Faceta afectiva=Ausencia de remordimiento, afecto superficial y falta de empatía",
      "TAP=Patrón de desprecio y violación de los derechos ajenos, definido sobre todo por conductas",
      "Rice, Harris y Cormier=En una comunidad terapéutica, los psicópatas tratados reincidieron más (1992)"
    ],
    g: [
      "La PCL-R tiene una puntuación total que va de 0 a ___.|40|20|60",
      "La segunda edición de la PCL-R es de ___.|2003|1991|1941",
      "El TAP exige tener más de 18 años e indicios de trastorno de conducta antes de los ___.|15|12|18",
      "La mentira patológica y la manipulación pertenecen a la faceta ___.|interpersonal|afectiva|antisocial",
      "La revocación de la libertad condicional es un ítem de la faceta ___.|antisocial|afectiva|interpersonal"
    ],
    tf: [
      "La PCL-R es un cuestionario de autoinforme que el interno rellena solo.|F|Se puntúa con una entrevista semiestructurada y la revisión del expediente y otras fuentes, y exige formación específica.",
      "La mayoría de quienes puntúan alto en la PCL-R cumplen criterios de TAP.|V",
      "La mayoría de las personas con un TAP son psicópatas según la PCL-R.|F|La relación es asimétrica: la mayoría de quienes tienen un TAP no son psicópatas según la PCL-R.",
      "Las puntuaciones altas en psicopatía se asocian a más reincidencia, en especial violenta.|V"
    ],
    q: [
      "Un interno simpático y locuaz tiene muchos delitos variados, pero no muestra pobreza afectiva ni manipulación. ¿Qué conclusión es correcta?|No basta para hablar de psicopatía|Cumple el perfil de psicópata|Su puntuación PCL-R será máxima|Ni el encanto ni los muchos delitos bastan. La psicopatía exige el núcleo interpersonal y afectivo del Factor 1.",
      "¿Qué añade la psicopatía al trastorno antisocial de la personalidad?|El núcleo interpersonal y afectivo|Problemas de conducta tempranos|La violación de derechos ajenos|El TAP se define sobre todo por conductas. La psicopatía añade el núcleo interpersonal y afectivo del Factor 1.",
      "¿Qué hallaron Rice, Harris y Cormier (1992) en una comunidad terapéutica intensiva?|Más reincidencia violenta en los tratados|Igual reincidencia en tratados y no tratados|Menos reincidencia tras el programa|Los internos con psicopatía tratados reincidieron violentamente más que los no tratados.",
      "¿Qué riesgo tiene confundir psicopatía y TAP en prisión?|Sobrestimar la psicopatía|Infravalorar el riesgo|Omitir el Factor 2|Como el TAP es frecuente en prisión, confundir ambos conceptos lleva a sobrestimar la psicopatía."
    ],
    inc: [
      "Sobre la PCL-R|Se puntúa solo con el relato del interno|Sus ítems se agrupan en dos grandes factores|Cada ítem se puntúa con 0, 1 o 2|Exige revisar el expediente y otras fuentes además de la entrevista. Aplicarla sin formación ni expediente es un error frecuente."
    ],
    seq: [],
    cls: [
      "Factor de la PCL-R|Factor 1: encanto superficial; mentira patológica; ausencia de remordimiento; falta de empatía|Factor 2: impulsividad; estilo de vida parásito; delincuencia juvenil; versatilidad delictiva"
    ] }
] },
{ n: 10, t: "Sociedad, riesgo e integración teórica", cap: 4, pir: "alta", mods: [
  { t: "Tensión, subculturas y control: las teorías sociológicas",
    tip: "Shaw y McKay (1942) vincularon el delito a la desorganización social del barrio. Merton (1938) explicó la anomia como desajuste entre metas culturales y medios legítimos, con cinco adaptaciones, y Agnew (1992) amplió la tensión a pérdidas y situaciones negativas. Cohen (1955) describió la subcultura delincuente. Hirschi (1969) preguntó por qué la mayoría no delinque y respondió con el vínculo social. El bajo autocontrol es de Gottfredson y Hirschi (1990).",
    v: [
      "Desorganización social=Delito alto en barrios pobres, con mucha movilidad e instituciones débiles",
      "Anomia=Desajuste entre metas culturales y medios legítimos para alcanzarlas (Merton, 1938)",
      "Innovación=Aceptar las metas culturales y rechazar los medios legítimos",
      "Retraimiento=Rechazar a la vez las metas culturales y los medios legítimos",
      "Teoría general de la tensión=Agnew (1992): pérdidas y situaciones negativas generan ira que puede acabar en delito",
      "Subcultura delincuente=Grupos que invierten los valores de clase media, donde pelear da estatus",
      "Vínculo social=Apego, compromiso, implicación y creencias que frenan el delito (Hirschi)",
      "Bajo autocontrol=Tendencia estable a buscar la gratificación inmediata (Gottfredson y Hirschi)"
    ],
    g: [
      "Según Merton, cumplir normas sin aspirar a nada es la adaptación de ___.|ritualismo|retraimiento|conformidad",
      "Conseguir dinero con el tráfico de drogas ilustra la adaptación de ___.|innovación|rebelión|ritualismo",
      "Para Agnew, las tensiones generan emociones negativas, sobre todo ___.|ira|miedo|tristeza",
      "En el vínculo de Hirschi, el tiempo ocupado en actividades convencionales es la ___.|implicación|creencia|integración",
      "Shaw y McKay hallaron tasas altas en las zonas de ___ próximas al centro.|transición|expansión|residencia"
    ],
    tf: [
      "El bajo autocontrol es el concepto central de la teoría del control de Hirschi (1969).|F|Es de Gottfredson y Hirschi (1990). Hirschi (1969) explicó la conformidad por el vínculo social.",
      "Shaw y McKay observaron que las tasas seguían altas aunque cambiaran los grupos que vivían en el barrio.|V",
      "En la subcultura delincuente de Cohen, robar daba estatus aunque no reportara beneficio.|V",
      "Para Agnew, la tensión procede únicamente de no alcanzar las metas de éxito económico.|F|También procede de perder algo valorado, como un empleo, o de sufrir situaciones negativas, como el acoso."
    ],
    q: [
      "Tras perder su empleo y sufrir acoso en el barrio, un joven acumula ira y acaba agrediendo a un vecino. ¿Qué teoría lo explica mejor?|La tensión general de Agnew|La anomia clásica de Merton|El vínculo social de Hirschi|Agnew amplió la tensión a perder algo valorado y a sufrir situaciones negativas, que generan ira.",
      "¿Qué pregunta central plantea Hirschi (1969)?|Por qué la mayoría no delinque|Por qué ciertos barrios delinquen más|Cómo se aprenden los motivos delictivos|Hirschi da por supuesta la motivación y explica la conformidad por el vínculo social.",
      "En la tipología de Merton, ¿qué adaptación sustituye tanto las metas como los medios?|Rebelión|Retraimiento|Innovación|La rebelión propone otro orden social. El retraimiento rechaza metas y medios sin sustituirlos.",
      "En prisión, ¿qué elementos del vínculo de Hirschi refuerzan el trabajo, la formación y el contacto familiar?|Compromiso, implicación y apego|Definiciones, refuerzo e imitación|Anomia, tensión y oportunidad|Según Hirschi, estos elementos frenan el delito. Definiciones, refuerzo e imitación son mecanismos de Akers."
    ],
    inc: [
      "Sobre las teorías sociológicas clásicas|Cohen (1955) definió la anomia y sus adaptaciones|Shaw y McKay propusieron la desorganización social|Agnew amplió la tensión a situaciones negativas|La anomia y sus cinco adaptaciones son de Merton (1938). Cohen describió la subcultura delincuente."
    ],
    seq: [
      "Teorías sociológicas por orden cronológico|Merton (1938)>Shaw y McKay (1942)>Cohen (1955)>Hirschi (1969)>Gottfredson y Hirschi (1990)>Agnew (1992)"
    ],
    cls: [
      "Teoría sociológica|Tensión: Merton (1938); Agnew (1992)|Subcultura: Cohen (1955)|Control: Hirschi (1969); Gottfredson y Hirschi (1990)"
    ] },
  { t: "Etiquetamiento, oportunidad y trayectorias delictivas",
    tip: "Lemert (1951) distinguió la desviación primaria de la secundaria, que surge al asumir la etiqueta de delincuente, y Becker (1963) definió la desviación como resultado de aplicar con éxito una etiqueta. Cohen y Felson (1979) explicaron el delito directo por la coincidencia de infractor motivado, objetivo adecuado y ausencia de guardián capaz. Moffitt (1993) separó la delincuencia limitada a la adolescencia de la persistente, y Sampson y Laub (1993) destacaron los puntos de inflexión.",
    v: [
      "Desviación primaria=Conductas ocasionales que no cambian la identidad de la persona",
      "Desviación secundaria=Conducta desviada que surge al asumir la etiqueta de delincuente (Lemert)",
      "Becker (1963)=La desviación resulta de que otros apliquen con éxito una norma y una etiqueta",
      "Actividades rutinarias=Coinciden infractor motivado, objetivo adecuado y falta de guardián capaz",
      "Guardián capaz=Persona, cámara o cerradura cuya ausencia facilita el delito directo",
      "Prevención situacional=Intervención sobre lugares y momentos basada en la teoría de la oportunidad",
      "Curva edad-delito=Aumenta en la adolescencia, culmina al final de esta y luego disminuye",
      "Punto de inflexión=Suceso vital, como un empleo o una pareja, que reorienta la trayectoria"
    ],
    g: [
      "Según Cohen y Felson, un patinete sin candado en un portal es un objetivo ___.|adecuado|motivado|capaz",
      "La teoría de las actividades rutinarias no explica la ___, pero sí la concentración del delito.|motivación|oportunidad|vigilancia",
      "Disuade más la ___ del castigo que su severidad (Nagin, 2013).|certeza|dureza|duración",
      "En la trayectoria persistente de Moffitt, el origen son déficits ___ que interactúan con un ambiente adverso.|neuropsicológicos|socioeconómicos|hormonales",
      "Sampson y Laub propusieron una teoría del control social informal graduado por la ___.|edad|clase|escuela"
    ],
    tf: [
      "La desviación secundaria es la conducta ocasional que no cambia la identidad de la persona.|F|Esa es la primaria. La secundaria aparece al asumir la etiqueta y reorganizar la vida en torno a ella.",
      "Cohen y Felson atribuyeron el aumento de delitos contra la propiedad tras la Segunda Guerra Mundial a cambios en la vida cotidiana.|V",
      "La delincuencia limitada a la adolescencia es propia de un grupo pequeño con problemas de conducta tempranos.|F|Es muy común. El grupo pequeño con inicio en la infancia corresponde a la trayectoria persistente.",
      "Para Sampson y Laub, los puntos de inflexión pueden favorecer el abandono del delito incluso en historias delictivas largas.|V"
    ],
    q: [
      "Un joven condenado por un hurto ve que sus antecedentes le cierran empleos y que solo lo acepta el grupo que ya delinquía. ¿Qué proceso describe?|El paso a la desviación secundaria|La adaptación de innovación|La pérdida del autocontrol|La etiqueta reduce sus alternativas y le empuja a reorganizar su identidad en torno a ella, como describió Lemert.",
      "¿Qué tres elementos deben coincidir según la teoría de las actividades rutinarias?|Infractor, objetivo y falta de guardián|Tensión, ira y falta de afrontamiento|Etiqueta, estigma y exclusión social|Un delincuente motivado, un objetivo adecuado y la ausencia de un guardián capaz, en el mismo espacio y tiempo.",
      "Según Moffitt, ¿qué origina la delincuencia limitada a la adolescencia?|Imitación y desfase madurativo|Déficits neuropsicológicos|Bajo autocontrol estable|Se origina en la imitación de iguales y en el desfase entre madurez biológica y social, y remite al asumir roles adultos.",
      "¿Qué recuerda el etiquetamiento al psicólogo penitenciario?|Sus informes también son etiquetas|Debe revisar la culpabilidad fijada|Debe evitar emitir cualquier diagnóstico|Sus informes y diagnósticos también son etiquetas con efectos sobre la persona."
    ],
    inc: [
      "Sobre las trayectorias delictivas|La persistente remite al asumir roles adultos|La limitada a la adolescencia es muy común|La persistente se inicia en la infancia|La persistente continúa y cambia de forma. Es la limitada a la adolescencia la que remite al asumir roles adultos."
    ],
    seq: [
      "Curva edad-delito|Aumento en la adolescencia>Máximo al final de la adolescencia o inicio de la edad adulta>Disminución posterior"
    ],
    cls: [
      "Trayectoria de Moffitt (1993)|Limitada a la adolescencia: muy común; imitación de iguales; remite con roles adultos|Persistente: grupo pequeño; inicio en la infancia; déficits neuropsicológicos"
    ] },
  { t: "Lo que no cambia, lo que sí y lo que protege: los «Central Eight»",
    tip: "Los factores estáticos, como la edad de inicio o las condenas previas, no cambian y dicen cuánto riesgo hay. Los dinámicos o necesidades criminógenas pueden cambiar y dicen dónde intervenir. Los factores de protección se evalúan por separado. Andrews y Bonta resumieron la investigación en los «Central Eight»: los «Big Four» (historia, personalidad, cogniciones y asociaciones antisociales) son los predictores más potentes, y familia, escuela o trabajo, ocio y consumo tienen peso moderado.",
    v: [
      "Factor de riesgo=Característica personal o del entorno asociada a más probabilidad de delinquir",
      "Factor estático=Hecho del pasado o rasgo que no cambia, útil para estimar el riesgo de base",
      "Necesidad criminógena=Factor de riesgo dinámico ligado al delito y modificable con tratamiento",
      "Factor de protección=Característica que reduce la probabilidad de delinquir o amortigua los riesgos",
      "Big Four=Historia, personalidad, cogniciones y asociaciones antisociales",
      "Necesidad no criminógena=Problema como la baja autoestima cuyo tratamiento aislado no reduce la reincidencia",
      "Cogniciones antisociales=Justificaciones y desconexión moral, objetivo de la reestructuración de actitudes",
      "Andrews y Bonta=Autores que sintetizaron ocho factores principales de riesgo y necesidad"
    ],
    g: [
      "Los factores estáticos dicen ___ riesgo hay, y los dinámicos, dónde intervenir.|cuánto|qué|cuándo",
      "El número de condenas previas es un factor de riesgo ___.|estático|dinámico|protector",
      "El consumo de sustancias es uno de los cuatro factores de peso ___.|moderado|máximo|nulo",
      "Un ocio sin estructura ligado a contextos de riesgo se trabaja con actividades ___.|prosociales|punitivas|clínicas",
      "La baja autoestima es, para Andrews y Bonta, una necesidad ___.|no criminógena|criminógena|estática"
    ],
    tf: [
      "El consumo de sustancias forma parte de los «Big Four».|F|Es uno de los cuatro factores moderados. Los «Big Four» son historia, personalidad, cogniciones y asociaciones antisociales.",
      "Los factores de protección no equivalen a la ausencia de riesgo y se evalúan por separado.|V",
      "Los factores dinámicos pueden mejorar con el tratamiento, pero también empeorar con una crisis.|V",
      "La historia de conducta antisocial, al ser estática, no tiene utilidad para planificar la intervención.|F|No se modifica, pero orienta la intensidad de la intervención."
    ],
    q: [
      "Una mujer con una larga lista de estafas salda sus deudas de juego, consigue empleo y deja de ver a quienes la animaban. ¿Qué ocurre con su riesgo?|Baja su riesgo actual|No cambia, por su historia|Baja su riesgo de base|Su historia estática se mantiene, pero los factores dinámicos han mejorado, así que su riesgo actual baja.",
      "¿Cuál de estos factores pertenece a los «Big Four»?|Las cogniciones antisociales|La relación familiar o de pareja|El consumo de alcohol o drogas|Familia o pareja y consumo de sustancias son factores de peso moderado, no de los «Big Four».",
      "¿Para qué sirven sobre todo los factores dinámicos?|Fijar objetivos y medir el cambio|Estimar el riesgo de base del interno|Clasificar el tipo de delito cometido|Fijan los objetivos del tratamiento y permiten medir el cambio. El riesgo de base lo estiman los estáticos.",
      "¿Qué cabe esperar si se trata de forma aislada una necesidad no criminógena como la ansiedad?|Que no se reduzca la reincidencia|Que aumente la reincidencia|Que desaparezca el riesgo estático|Puede merecer atención por bienestar, pero su tratamiento aislado no reduce la reincidencia."
    ],
    inc: [
      "Sobre los «Central Eight»|El consumo es el predictor más potente|La familia o pareja es un factor moderado|Las cogniciones antisociales son un «Big Four»|El consumo de sustancias es uno de los cuatro factores de peso moderado, no de los predictores más potentes."
    ],
    seq: [],
    cls: [
      "Factor de los «Central Eight»|Big Four: historia antisocial; personalidad antisocial; cogniciones antisociales; asociaciones antisociales|Moderados: familia o pareja; escuela o trabajo; ocio y tiempo libre; consumo de sustancias"
    ] },
  { t: "RNR, Triple Riesgo, Vidas Buenas y desistimiento: un caso para integrarlos",
    tip: "El modelo RNR (Andrews, Bonta y Hoge, 1990) responde a quién, qué y cómo: intensidad proporcional al riesgo, objetivos en las necesidades criminógenas y métodos cognitivo-conductuales adaptados. El Triple Riesgo Delictivo (Redondo, 2008) combina riesgos personales, carencias de apoyo prosocial y oportunidades. El modelo de Vidas Buenas (Ward, 2002) busca lograr bienes humanos primarios sin dañar, y Maruna (2001) estudió el relato de quienes desisten. RNR y Vidas Buenas se ven hoy como complementarios.",
    v: [
      "Principio de riesgo=La intensidad de la intervención debe ser proporcional a la probabilidad de reincidir",
      "Principio de necesidad=Los objetivos del tratamiento deben ser las necesidades criminógenas",
      "Responsividad general=Los métodos cognitivo-conductuales son los más eficaces",
      "Responsividad específica=Adaptar los métodos a capacidad, motivación, cultura, género o razonamiento moral",
      "Triple Riesgo Delictivo=Riesgos personales, carencias de apoyo prosocial y oportunidades (Redondo, 2008)",
      "Bienes humanos primarios=Relaciones, autonomía, conocimiento, trabajo valioso o paz interior",
      "Desistimiento=Proceso por el que una persona deja de delinquir",
      "Making Good=Obra de Maruna (2001) sobre el relato del «yo verdadero» de quienes desisten"
    ],
    g: [
      "El modelo RNR lo formularon Andrews, Bonta y Hoge en ___.|1990|2002|2008",
      "El modelo de Vidas Buenas se debe a ___.|Ward|Maruna|Redondo",
      "En el Triple Riesgo, la falta de empleo o de formación es una ___ de apoyo prosocial.|carencia|oportunidad|fuente",
      "«El dueño tiene seguro» es una ___ de las consecuencias que habrá que trabajar.|distorsión|justificación|difusión",
      "La participación en el Programa Individualizado de Tratamiento es voluntaria según el art. ___ RP.|112|102|154"
    ],
    tf: [
      "El principio de necesidad establece que la intensidad del tratamiento debe ajustarse al riesgo.|F|Ese es el principio de riesgo. El de necesidad indica que los objetivos deben ser las necesidades criminógenas.",
      "Aplicar intervenciones intensivas a personas de riesgo bajo puede empeorar los resultados.|V",
      "Según Maruna, quienes persistían en el delito construían un relato en el que su «yo verdadero» era bueno.|F|Eso describe a quienes desistían. Quienes persistían se veían atrapados por las circunstancias.",
      "En el Triple Riesgo, muchos riesgos personales pueden no acabar en delito si hay apoyo y pocas oportunidades.|V"
    ],
    q: [
      "Iván, de 24 años, dice que «quizá» deje la cocaína al salir, aunque ahora no ve motivo. Desde el RNR, ¿qué principio atiende esta ambivalencia?|Responsividad|Necesidad|Riesgo|La motivación ambivalente es un aspecto de responsividad y se aborda, por ejemplo, con entrevista motivacional.",
      "En el caso de Iván, ¿qué lectura corresponde al modelo de Vidas Buenas?|Busca respeto, pertenencia y excitación|Tiene asociaciones y cogniciones antisociales|Presenta riesgo medio-alto y ambivalencia|Vidas Buenas identifica los bienes buscados y propone lograrlos sin delinquir, con deporte reglado u oficio con reconocimiento.",
      "¿Cómo se ven hoy RNR y Vidas Buenas?|Como modelos complementarios|Como modelos incompatibles|Como el mismo modelo|RNR dice qué riesgos trabajar, y Vidas Buenas, para qué cambiar. Su compatibilidad sigue en debate.",
      "¿Qué propone el Triple Riesgo para el caso de Iván?|Deshabituación, formación y plan de salida|Deporte reglado, oficio y apoyo de la abuela|Permisos que consoliden una identidad nueva|Tratar la dependencia, dar formación profesional y preparar la salida responde a riesgos, carencias y oportunidades."
    ],
    inc: [
      "Sobre el modelo RNR|La responsividad general adapta el método a cada persona|El riesgo responde a la pregunta de a quién intervenir|La necesidad responde a la pregunta de qué se interviene|Adaptar a cada persona es la responsividad específica. La general indica que los métodos cognitivo-conductuales son los más eficaces."
    ],
    seq: [],
    cls: [
      "Principio del modelo RNR|Riesgo: a quién; intensidad proporcional|Necesidad: qué; necesidades criminógenas|Responsividad: cómo; métodos cognitivo-conductuales adaptados"
    ] }
] },
{ n: 11, t: "Evaluar a la persona interna", cap: 5, pir: "alta", mods: [
  { t: "Para qué se evalúa en prisión",
    tip: "En prisión, la evaluación forma parte del funcionamiento de la institución: el sistema de individualización científica (art. 72 LOGP) exige conocer a la persona. El art. 63 LOGP vincula el tratamiento a una clasificación previa, y el art. 102 RP enumera las variables que deben valorarse. Las funciones del psicólogo están en el art. 282 del Reglamento de 1981. La evaluación es continua, multidisciplinar y con destinatarios externos, y su objeto es la persona, no el delito.",
    v: [
      "Individualización científica=Sistema de la LOGP que ajusta la ejecución de la pena a cada persona",
      "Art. 63 LOGP=Vincula el tratamiento a una clasificación previa",
      "Art. 102 RP=Enumera personalidad, historial, pena, medio de retorno y recursos que deben valorarse",
      "Art. 282 RP de 1981=Recoge las funciones del psicólogo y sigue vigente con rango de resolución",
      "Art. 105 RP=Fija la revisión de la clasificación como máximo cada seis meses",
      "Junta de Tratamiento=Órgano que propone las decisiones, con el informe psicológico como una pieza más",
      "Equipo Técnico=Psicólogo, jurista, trabajador social y educador que trabajan juntos",
      "Art. 47.2 LOGP=Norma de referencia de los permisos ordinarios, junto al art. 154 RP"
    ],
    g: [
      "La clasificación se revisa como máximo cada ___ meses.|seis|dos|tres",
      "La libertad condicional se apoya en un pronóstico sobre la vida en libertad, regulado en el art. ___ CP.|90|100|25",
      "La justificación técnica del principio de flexibilidad remite al art. ___ RP.|100.2|102|154",
      "Los destinatarios externos del informe obligan a un estándar de rigor propio del ámbito ___.|forense|clínico|educativo",
      "La culpabilidad la fijó la ___ y no corresponde al psicólogo revisarla.|sentencia|Junta|instrucción"
    ],
    tf: [
      "Una evaluación de ingreso conserva su valor durante toda la condena sin necesidad de actualizarse.|F|La evaluación es continua: el grado se revisa como máximo cada seis meses y cada permiso exige una nueva valoración.",
      "Quien propone las decisiones es la Junta de Tratamiento, no el psicólogo de forma individual.|V",
      "El objeto de la evaluación psicológica penitenciaria es el delito cometido.|F|La culpabilidad ya la fijó la sentencia. El objeto es la persona que cumple la condena y su comportamiento futuro.",
      "En los tres bloques de objetivos de la evaluación importan también los factores de protección.|V"
    ],
    q: [
      "Un interno solicita su primer permiso ordinario. ¿Qué debe aportar sobre todo la evaluación psicológica?|El riesgo de mal uso del permiso|El perfil completo de personalidad|La revisión de su culpabilidad|Para los permisos ordinarios (art. 47.2 LOGP y art. 154 RP), la evaluación valora el riesgo de mal uso del permiso.",
      "¿Qué artículo enumera las variables que deben valorarse para clasificar?|El art. 102 RP|El art. 72 LOGP|El art. 90 CP|El art. 102 RP recoge personalidad, historial, pena, medio de retorno y recursos. El 72 LOGP fija la individualización científica.",
      "¿Quién puede leer un informe psicológico si hay recurso?|El Juez de Vigilancia y la defensa|Solo la Junta de Tratamiento del centro|Únicamente el psicólogo que lo firma|Lo leen la Junta, el Centro Directivo y, si hay recurso, el Juez de Vigilancia Penitenciaria y la defensa.",
      "¿Qué tres bloques de objetivos tiene la evaluación en prisión?|Comprender, orientar y estimar|Diagnosticar, tratar y sancionar|Clasificar, castigar y prevenir|Comprender la conducta delictiva, orientar la intervención y estimar probabilidades, como reincidir o autolesionarse."
    ],
    inc: [
      "Sobre la evaluación en prisión|El informe psicológico es la decisión final|La evaluación es continua y se actualiza|El psicólogo trabaja en un equipo multidisciplinar|Quien propone es la Junta de Tratamiento. El informe psicológico es una pieza más, no la decisión."
    ],
    seq: [],
    cls: [
      "Norma de referencia|LOGP: art. 47.2 permisos; art. 63 clasificación; art. 72 individualización científica|RP: art. 100.2 flexibilidad; art. 102 variables; art. 105 revisión de grado|CP: art. 90 libertad condicional"
    ] },
  { t: "Qué se explora: historia, socialización, cognición y emoción",
    tip: "La información se organiza en cuatro áreas: historia personal y familiar, socialización, área cognitiva y área personal-emocional, y todas se alimentan de entrevista, observación, tests y expediente. La familia es a la vez posible fuente de riesgo y uno de los apoyos más importantes. El modelo RNR separa las necesidades criminógenas de las no criminógenas. Distinguirlas evita dedicar el programa a lo que no reduce el riesgo e ignorar el sufrimiento.",
    v: [
      "Historia personal y familiar=Familia de origen y actual, salud mental o problemas con la justicia y vínculos",
      "Socialización=Interiorización de normas a través de la escuela, la disciplina, el trabajo y la justicia",
      "Área cognitiva=Locus de control, distorsiones, empatía, resolución de problemas y nivel intelectual",
      "Área personal-emocional=Ánimo, ansiedad, ira, impulsos, drogas, prisionización y motivación al cambio",
      "Locus de control=Atribuir lo que ocurre a uno mismo o a causas externas",
      "Distorsión cognitiva=Pensamiento que justifica el delito, como culpar a la víctima por llevar el móvil",
      "Prisionización=Grado en que se ha absorbido la cultura carcelaria",
      "Motivación al tratamiento=Deseo de cambiar que se valora en el área personal-emocional"
    ],
    g: [
      "La edad de inicio delictivo aparece en el área de ___.|socialización|historia familiar|cognición",
      "Una persona con discapacidad intelectual necesita ___ en el programa y en la comunicación de decisiones.|adaptaciones|sanciones|exenciones",
      "El riesgo de suicidio se detecta sobre todo en el área ___.|personal-emocional|cognitiva|de socialización",
      "Las necesidades no criminógenas, por sí solas, predicen ___ la reincidencia.|poco|mucho|siempre",
      "En el caso de Andrés, la hermana que le ofrece trabajo es un factor de ___.|protección|riesgo|socialización"
    ],
    tf: [
      "La familia solo se explora como fuente de riesgo de la persona interna.|F|Es a la vez posible fuente de riesgo y uno de los apoyos más importantes para la vida en libertad.",
      "Cada área de evaluación se explora con una técnica específica distinta.|F|Ninguna se explora con una sola técnica: entrevista, observación, tests y expediente aportan datos a todas.",
      "La capacidad intelectual importa también por razones prácticas, como adaptar el programa.|V",
      "Ignorar el sufrimiento de un interno porque «no es criminógeno» es uno de los errores que evita la distinción del RNR.|V"
    ],
    q: [
      "Andrés atribuye sus robos a la «mala suerte» y a que «los comercios tienen seguro». ¿A qué área corresponde esta información?|Cognitiva|Socialización|Personal-emocional|Refleja externalización y minimización, distorsiones propias del área cognitiva.",
      "Andrés consume cannabis a diario y se irrita cuando se le contradice. ¿Qué área recoge estos datos?|Personal-emocional|Historia personal y familiar|Socialización|La relación con las drogas y el manejo de la ira se valoran en el área personal y emocional.",
      "Desde el RNR, ¿cómo se clasifica la ansiedad de una persona interna?|Necesidad no criminógena|Necesidad criminógena|Factor de riesgo estático|Merece atención por el bienestar de la persona, pero por sí sola predice poco la reincidencia.",
      "¿Qué incluye el área de socialización?|Escuela, disciplina e historia laboral|Locus de control, empatía y nivel intelectual|Ánimo, ansiedad, ira y relación con drogas|Recoge cómo se interiorizaron las normas: trayectoria escolar, disciplina, primeros contactos con la justicia e historia laboral."
    ],
    inc: [
      "Sobre las áreas de evaluación|La prisionización se valora en el área cognitiva|La motivación al tratamiento es área personal-emocional|El locus de control se valora en el área cognitiva|La prisionización, cuánto ha absorbido la cultura carcelaria, se valora en el área personal y emocional."
    ],
    seq: [],
    cls: [
      "Área de evaluación|Socialización: trayectoria escolar; primeros contactos con la justicia; historia laboral|Cognitiva: locus de control; distorsiones cognitivas; nivel intelectual|Personal-emocional: manejo de la ira; consumo de drogas; motivación al tratamiento"
    ] },
  { t: "Entrevista, observación y tests",
    tip: "La entrevista es la técnica principal y se desarrolla en un contexto no voluntario. Exige transparencia desde el inicio, rapport sin complicidad, manejo de la resistencia con entrevista motivacional y contraste con el expediente, porque la deseabilidad social es esperable. La observación aporta datos de contextos sin evaluación explícita. Los tests dan medidas estandarizadas, pero el MMPI-2 no predice la reincidencia y la PCL-R exige formación y expediente.",
    v: [
      "Contexto no voluntario=Evaluación a la que se acude por obligación o por un beneficio, no por demanda",
      "Rapport sin complicidad=Escuchar con respeto sin dar por buena cualquier versión",
      "Entrevista motivacional=Ayuda a ver la distancia entre lo que se dice querer y lo que se hace",
      "Deseabilidad social=Tendencia a dar una imagen favorable, esperable si hay beneficios en juego",
      "Observación=Datos de funcionarios, educadores o monitores sobre la conducta diaria en el módulo",
      "MMPI-2=Inventario de personalidad y psicopatología con escalas de validez de la respuesta",
      "IPDE=Instrumento de cribado y entrevista diagnóstica de los trastornos de la personalidad",
      "BDI-II=Test del estado de ánimo que apoya la detección del riesgo de suicidio"
    ],
    g: [
      "Antes de empezar se explica el objetivo de la entrevista y a qué ___ podrá llegar su contenido.|órganos|familiares|internos",
      "Discutir de frente una versión poco creíble suele ___ a la persona.|cerrar|motivar|convencer",
      "Las matrices de Raven se usan para valorar la ___.|inteligencia|personalidad|ansiedad",
      "El límite de la observación es que también puede estar ___.|sesgada|registrada|estandarizada",
      "La PCL-R se aplica con entrevista y una revisión exhaustiva del ___.|expediente|historial médico|registro de visitas"
    ],
    tf: [
      "El MMPI-2 es útil para valorar la validez de las respuestas, pero no está construido para estimar el riesgo delictivo.|V",
      "Para evitar sesgos, conviene no explicar al interno a qué órganos llegará el contenido de la entrevista.|F|Ocultarlo es éticamente inaceptable y destruye la confianza cuando se descubre. Se explica desde el inicio.",
      "La observación es valiosa porque procede de contextos donde no hay una evaluación explícita.|V",
      "El HCR-20 v3 se incluye entre los tests de personalidad y psicopatología.|F|Es un instrumento de riesgo de violencia y reincidencia. Los de personalidad son el MMPI-2, el PAI o el MCMI."
    ],
    q: [
      "Un interno dice que lleva meses sin conflictos, su BDI-II apunta a una depresión moderada y el educador cuenta que apenas sale de la celda. ¿Qué conclusión es más prudente?|La calma puede ser retraimiento|Su mejoría es clara y estable|El BDI-II no es fiable en prisión|Las tres fuentes juntas cuentan una historia que ninguna contaba completa: la ausencia de conflictos puede ser retraimiento.",
      "¿Qué error se comete al usar el MMPI-2 para predecir la reincidencia?|No se construyó para el riesgo|No mide la psicopatología|No tiene escalas de validez|Describe personalidad, psicopatología y validez de la respuesta, pero no se construyó para estimar el riesgo delictivo.",
      "Ante una versión poco creíble del interno, ¿qué estrategia se recomienda?|Entrevista motivacional|Confrontación directa|Aceptarla sin contraste|Discutir de frente suele cerrar a la persona. La entrevista motivacional le ayuda a ver la distancia entre lo que dice y lo que hace.",
      "¿Qué instrumento se usa como cribado de los trastornos de la personalidad?|IPDE|PAI|SARA|El IPDE sirve de cribado y entrevista diagnóstica. El PAI es de personalidad y psicopatología, y el SARA, de riesgo."
    ],
    inc: [
      "Sobre la entrevista penitenciaria|El rapport exige dar por buena la versión del interno|Lo que cuenta se compara con el expediente|La deseabilidad social es esperable con beneficios|Escuchar sin juzgar no equivale a dar por buena cualquier versión: se mantiene la distancia profesional."
    ],
    seq: [],
    cls: [
      "Área del test|Inteligencia: WAIS; matrices de Raven|Personalidad y psicopatología: MMPI-2; PAI; MCMI|Riesgo de violencia y reincidencia: HCR-20 v3; Static-99R; LSI-R"
    ] },
  { t: "Expediente e informe psicológico",
    tip: "El expediente contiene condenas, resoluciones, grados, informes previos y faltas. Aporta hechos que no dependen del relato y permite ver la evolución, y conviene leerlo antes de la entrevista sin llegar con una conclusión formada. El informe es lo único de la evaluación que llega a quien decide. Debe responder a la pregunta, describir conductas antes que poner etiquetas, separar dato e interpretación, explicitar los límites, incluir solo lo necesario y escribirse para lectores no psicólogos.",
    v: [
      "Expediente penitenciario=Registro de situación penal, resoluciones, clasificación, informes y sanciones",
      "Discrepancia con la sentencia=Diferencia entre el relato del interno y los hechos probados, que es un dato clínico",
      "Evolución=Respuesta a permisos previos, regresiones y programas iniciados o terminados",
      "Demanda y destinatario=Apartado que indica quién pide el informe, para qué decisión y quién lo leerá",
      "Fuentes y técnicas=Apartado con entrevistas y sus fechas, observación, tests, expediente y otros informes",
      "Conclusiones=Respuesta a la pregunta planteada, con los límites del pronóstico",
      "Propuesta=Intervención recomendada y condiciones que reducirían el riesgo",
      "Informe psicológico=Documento que responde a una demanda concreta con datos, conclusiones y límites"
    ],
    g: [
      "Si la demanda es un permiso, el informe debe pronunciarse sobre el ___.|permiso|delito|grado",
      "En el apartado de resultados se separa lo observado de lo ___.|inferido|medido|declarado",
      "Conviene leer el expediente ___ de la entrevista para preguntar mejor.|antes|después|en lugar",
      "Los datos íntimos que no guardan relación con la decisión no deben ___, aunque se conozcan.|aparecer|valorarse|ocultarse",
      "El informe lo leerán juristas, el Juez de Vigilancia y la ___.|defensa|víctima|prensa"
    ],
    tf: [
      "«Ha tenido dos sanciones por amenazas en el último año» informa más que «es agresivo».|V",
      "Un buen informe para un permiso debe repetir el estudio completo de personalidad.|F|Debe responder a la pregunta: si la demanda es un permiso, el informe se pronuncia sobre el permiso.",
      "Conviene llegar a la entrevista con una conclusión formada a partir del expediente.|F|Se lee antes para preguntar mejor, pero sin una conclusión formada que solo se busque confirmar.",
      "Un pronóstico es una estimación con incertidumbre y debe indicar qué se predice, en qué plazo y en qué condiciones.|V"
    ],
    q: [
      "La sentencia describe una agresión con arma, y el interno habla de «una discusión». ¿Cómo debe tratarse esta diferencia?|Como un dato clínico en sí mismo|Como un error del expediente judicial|Como un asunto que no compete|La discrepancia entre el relato y los hechos del expediente es en sí misma un dato clínico.",
      "¿Por qué se prefiere una frase detallada sobre la PCL-R a «presenta un perfil psicopático»?|Dice de dónde sale cada afirmación|Usa términos técnicos más precisos|Evita mencionar el pronóstico|Explica fuentes, significado y qué podría hacerse, de modo que un juez puede discutirla. La etiqueta solo puede aceptarse o rechazarse.",
      "¿En qué apartado del informe se responde a la pregunta planteada?|Conclusiones|Resultados|Propuesta|Las conclusiones responden a la pregunta con los límites del pronóstico. La propuesta recoge la intervención recomendada.",
      "¿Qué regla incumple un informe lleno de tecnicismos sin explicar?|Escribir para no psicólogos|Separar el dato de la interpretación|Incluir solo lo que es necesario|Lo leerán juristas, el Juez de Vigilancia y la defensa, así que los términos técnicos se explican o se evitan."
    ],
    inc: [
      "Sobre el expediente penitenciario|Solo recoge lo que la persona cuenta|Permite ver la respuesta a permisos previos|Incluye las faltas impuestas al interno|Contiene hechos que no dependen del relato de la persona, como condenas y resoluciones."
    ],
    seq: [
      "Estructura del informe psicológico|Identificación>Demanda y destinatario>Fuentes y técnicas>Resultados>Conclusiones>Propuesta"
    ],
    cls: [] }
] },
{ n: 12, t: "Predecir la reincidencia: herramientas y límites", cap: 5, pir: "alta", mods: [
  { t: "Juicio clínico, actuarial y estructurado",
    tip: "Valorar el riesgo es estimar la probabilidad de una conducta concreta, en un plazo y unas condiciones, y qué puede reducirla. El juicio clínico no estructurado es flexible, pero poco fiable y vulnerable a sesgos, y rinde peor desde Meehl (1954). El actuarial usa ítems fijos y reglas de combinación y es fiable, pero sus ítems suelen ser estáticos y su probabilidad es de grupo. El juicio profesional estructurado incluye factores dinámicos, escenarios y medidas de gestión.",
    v: [
      "Juicio clínico no estructurado=Conclusión basada en la experiencia con la información que se considera relevante",
      "Juicio actuarial=Predicción con ítems fijos y reglas de combinación derivadas de estudios de seguimiento",
      "Juicio profesional estructurado=Valoración guiada de factores con conclusión integrada y plan de gestión",
      "Meehl (1954)=Trabajo clásico sobre predicción clínica frente a estadística",
      "Escenario de riesgo=Qué podría ocurrir, con quién y en qué circunstancias",
      "Fiabilidad=Dos evaluadores bien formados obtienen casi siempre la misma puntuación",
      "Grupo de referencia=Personas con puntuación similar cuya tasa de reincidencia observada se conoce",
      "Factor dinámico=Factor de riesgo que puede cambiar y ser objetivo de intervención"
    ],
    g: [
      "El juicio actuarial sitúa a la persona en un ___ cuya tasa de reincidencia observada se conoce.|grupo|perfil|tramo",
      "La fuerza del enfoque actuarial es la ___ y la transparencia.|fiabilidad|flexibilidad|individualización",
      "En el juicio profesional estructurado, la conclusión final no sale de ___ puntos.|sumar|restar|ponderar",
      "Dejarse llevar por la buena impresión de una entrevista es un ___ del juicio clínico.|sesgo|acierto|criterio",
      "Un actuarial solo es válido en poblaciones ___ a aquella en la que se construyó.|parecidas|ajenas|superiores"
    ],
    tf: [
      "Cualquier forma de juicio estructurado supera al juicio clínico no estructurado.|V",
      "El juicio profesional estructurado es claramente más preciso que el actuarial.|F|Su precisión es parecida. El debate se centra en la utilidad para el tratamiento, la transparencia y la discrecionalidad.",
      "Como muchos de sus ítems son estáticos, el actuarial no orienta bien la intervención.|V",
      "En el juicio actuarial, la probabilidad obtenida se refiere a la persona concreta evaluada.|F|Se refiere a un grupo con puntuación similar cuya tasa observada se conoce, no a la persona concreta."
    ],
    q: [
      "Un condenado por lesiones pide un permiso. El psicólogo constata sus antecedentes juveniles, pero también año y medio sin consumo, un programa terminado y domicilio estable, y propone condiciones. ¿Qué enfoque aplica?|Juicio profesional estructurado|Juicio actuarial|Juicio clínico no estructurado|Integra factores estáticos y dinámicos y propone medidas de gestión, lo propio del juicio profesional estructurado.",
      "¿Qué enfoque combina la estructura del actuarial con la atención al caso del juicio clínico?|El juicio profesional estructurado|El juicio clínico no estructurado|La entrevista motivacional|Ofrece factores seleccionados con instrucciones precisas y deja al profesional integrar la información del caso.",
      "¿Cuál es un límite del juicio clínico no estructurado?|Profesionales distintos discrepan|Sus ítems son siempre estáticos|Solo vale en su población de origen|Con los mismos datos, dos profesionales pueden concluir distinto, y no siempre se sabe qué factores se han tenido en cuenta.",
      "¿En qué se centra hoy el debate entre el actuarial y el juicio profesional estructurado?|Utilidad clínica y transparencia|Su diferencia en precisión|La superioridad del juicio clínico|Su precisión es parecida, así que se discuten la utilidad para el tratamiento, la transparencia y la discrecionalidad."
    ],
    inc: [
      "Sobre el juicio actuarial|Orienta bien el tratamiento por sus ítems dinámicos|Usa reglas de combinación de estudios de seguimiento|Dos evaluadores formados suelen coincidir|Muchos de sus ítems son estáticos, como la edad o los antecedentes, y no orientan la intervención."
    ],
    seq: [],
    cls: [
      "Enfoque de valoración del riesgo|Actuarial: Static-99R; VRAG; LSI-R|Juicio profesional estructurado: HCR-20 v3; SVR-20; SARA; RisCanvi"
    ] },
  { t: "Instrumentos de valoración: HCR-20, Static-99R, LSI-R, RisCanvi y TVR",
    tip: "Cada instrumento se construyó para predecir un tipo de conducta en una población, y aplicarlo fuera de ese ámbito es un error metodológico. El HCR-20 v3 es el juicio profesional estructurado de referencia para la violencia general. SVR-20 y SARA siguen esa lógica para la violencia sexual y la de pareja. Static-99R y VRAG son actuariales, y el LSI-R evalúa la reincidencia general y las necesidades. RisCanvi se usa en Cataluña, y la TVR, en la Administración General del Estado.",
    v: [
      "HCR-20 v3=Referencia para la violencia física, con escalas histórica, clínica y de gestión del riesgo",
      "SVR-20=Juicio profesional estructurado para la violencia sexual",
      "SARA=Juicio profesional estructurado para la violencia contra la pareja",
      "Static-99R=Actuarial más usado para la reincidencia sexual en varones adultos",
      "VRAG=Actuarial de violencia que incluye la puntuación en la PCL-R entre sus ítems",
      "LSI-R=Actuarial con factores dinámicos para reincidencia general, ligado a Andrews y Bonta",
      "RisCanvi=Protocolo catalán que clasifica el riesgo en bajo, medio o alto de forma periódica",
      "TVR=Tabla de Variables de Riesgo de la SGIP para valorar los permisos"
    ],
    g: [
      "En el HCR-20, la letra R corresponde a la ___ del riesgo.|gestión|revisión|reducción",
      "La TVR y la M-CCP son tablas de la ___.|SGIP|CEJFE|LOGP",
      "El informe del Equipo Técnico para los permisos es preceptivo según el art. ___ RP.|154|102|105",
      "El RisCanvi lo describieron Andrés-Pueyo, Arbach-Lucioni y Redondo en ___.|2018|2008|2021",
      "La PCL-R mide la psicopatía y no es, en sentido estricto, un instrumento de ___.|riesgo|evaluación|personalidad"
    ],
    tf: [
      "El Static-99R recoge los cambios que produce el tratamiento.|F|Sus ítems son estáticos y no recogen los cambios del tratamiento.",
      "Las escalas clínica y de gestión del HCR-20 v3 recogen factores que pueden cambiar.|V",
      "La TVR sustituye al informe del Equipo Técnico en la concesión de permisos.|F|No lo sustituye, sino que lo estructura. El informe del Equipo Técnico es preceptivo (art. 154 RP).",
      "El LSI-R sirve también para identificar necesidades criminógenas.|V"
    ],
    q: [
      "En un centro de la Administración General del Estado se valora el primer permiso de un interno. ¿Qué herramienta de la SGIP estructura esa valoración?|La TVR|El RisCanvi|El VRAG|La Tabla de Variables de Riesgo y la M-CCP apoyan la valoración de permisos. El RisCanvi es el protocolo de Cataluña.",
      "¿Qué instrumento de juicio profesional estructurado se usa para la violencia contra la pareja?|SARA|SVR-20|Static-99R|El SARA es para la violencia de pareja. El SVR-20 es para la violencia sexual, y el Static-99R es actuarial.",
      "¿Qué instrumento es actuarial?|VRAG|HCR-20 v3|SVR-20|El VRAG es un actuarial de violencia. El HCR-20 v3 y el SVR-20 son de juicio profesional estructurado.",
      "¿Qué ha abierto debate sobre el RisCanvi?|Su cálculo mediante un algoritmo|Su uso fuera de Cataluña|Que solo use factores estáticos|Al calcularse con un algoritmo, se discute su uso en decisiones sobre la libertad. Combina factores estáticos y dinámicos."
    ],
    inc: [
      "Sobre los instrumentos de riesgo|Un instrumento sirve para cualquier conducta|El LSI-R se vincula al modelo de Andrews y Bonta|El Static-99R es actuarial de reincidencia sexual|Cada instrumento se construyó para un tipo de conducta y de población. Aplicarlo fuera de ese ámbito es un error metodológico."
    ],
    seq: [],
    cls: [
      "Qué estima el instrumento|Violencia sexual: SVR-20; Static-99R|Violencia: HCR-20 v3; VRAG|Reincidencia general: LSI-R"
    ] },
  { t: "Cuánto aciertan: AUC, valores predictivos y tasa base",
    tip: "La sensibilidad es la proporción de reincidentes clasificados de riesgo alto, y el VPP, la proporción de clasificados de riesgo alto que reinciden. El AUC es la probabilidad de que un reincidente al azar puntúe más que un no reincidente al azar, no un porcentaje de aciertos. Con tasas base bajas, cualquier instrumento produce muchos falsos positivos. En Fazel et al. (2012), el VPP mediano para la violencia fue del 41 % y el VPN, del 91 %.",
    v: [
      "Sensibilidad=Proporción de quienes reinciden que habían sido clasificados de riesgo alto",
      "Especificidad=Proporción de quienes no reinciden clasificados de riesgo bajo",
      "Valor predictivo positivo=Proporción de clasificados de riesgo alto que reinciden de verdad",
      "Valor predictivo negativo=Proporción de clasificados de riesgo bajo que no reinciden",
      "AUC=Probabilidad de que un reincidente al azar puntúe más que un no reincidente al azar",
      "Tasa base=Frecuencia de la conducta en la población. Cuanto más baja, más falsos positivos",
      "Fazel et al. (2012)=73 muestras de 13 países, con VPP mediano del 41 % y VPN del 91 % en violencia",
      "Falso positivo=Persona clasificada de riesgo alto que no comete la conducta"
    ],
    g: [
      "Un AUC de ___ indica que el instrumento no discrimina.|0,50|1|0,70",
      "En el ejemplo de 1.000 personas con tasa base del 10 %, el VPP queda en torno al ___.|31 %|80 %|97 %",
      "Un estudio sobre RisCanvi cifró la tasa anual de quebrantamiento en el ___.|0,21 %|2,1 %|21,1 %",
      "Karimi-Haghighi y Castillo obtuvieron con RisCanvi un AUC de ___ para la reincidencia violenta.|0,72|0,70|0,91",
      "Una auditoría externa de ___ señaló que modelos alternativos podrían mejorar el AUC del RisCanvi.|2024|2021|2012"
    ],
    tf: [
      "Un AUC de 0,70 significa que el instrumento clasifica bien al 70 % de las personas.|F|Indica que en siete de cada diez parejas de reincidente y no reincidente, el reincidente puntúa más.",
      "Según Fazel et al. (2012), más de la mitad de los clasificados de riesgo alto de violencia no la cometió.|V",
      "Cuanto más infrecuente es una conducta, más alto es el valor predictivo positivo del instrumento.|F|Es al revés: con tasas base bajas aumentan los falsos positivos y baja el VPP.",
      "Fazel et al. concluyeron que usar estos instrumentos como único criterio para privar de libertad no está respaldado.|V"
    ],
    q: [
      "Un instrumento con sensibilidad y especificidad del 80 % se aplica a 1.000 internos, de los que reincidirán 100. ¿Cuántos de los clasificados de riesgo alto reincidirán?|80 de 260|80 de 100|180 de 900|Detecta a 80 de los 100 reincidentes, pero clasifica de riesgo alto a 180 no reincidentes: 80 de 260, un VPP del 31 %.",
      "Un informe dice que «el 70 % de los clasificados de riesgo alto reincidirá». ¿Qué índice describe esa frase?|El VPP|La sensibilidad|El AUC|La proporción de clasificados de riesgo alto que reincide es el VPP. La sensibilidad parte de quienes reinciden.",
      "¿Qué lectura práctica se extrae de Fazel et al. (2012)?|Identifican mejor a quien no reincidirá|Identifican mejor a quien reincidirá|Aciertan por igual en ambos casos|Con un VPN mediano del 91 % frente a un VPP del 41 %, son mejores para descartar que para señalar.",
      "¿Por qué es tan difícil predecir el quebrantamiento?|Por su tasa base muy baja|Por el AUC bajo del RisCanvi|Por usar solo ítems dinámicos|Su tasa anual fue del 0,21 % en un estudio sobre RisCanvi, y con tasas tan bajas cualquier instrumento genera muchos falsos positivos."
    ],
    inc: [
      "Sobre los índices de precisión|La sensibilidad y el VPP miden lo mismo|Un AUC de 0,50 indica que no discrimina|El VPP depende de la tasa base|La sensibilidad parte de quienes reinciden, y el VPP, de quienes se clasifican de riesgo alto. Confundirlos es una trampa típica."
    ],
    seq: [],
    cls: [
      "Índice de precisión|Parte de la conducta real: sensibilidad; especificidad|Parte de la clasificación: valor predictivo positivo; valor predictivo negativo"
    ] },
  { t: "La reincidencia en España y un informe de riesgo comentado",
    tip: "En la Administración General del Estado no hay una tasa oficial de reincidencia publicada de forma periódica. La serie más completa es la del CEJFE en Cataluña: en el estudio de 2020, la reincidencia penitenciaria a cinco años fue del 21,1 %, frente al 28,7 % de ejecución penal y el 53,1 % judicial. Estos datos no pueden extrapolarse al resto de España. Un buen informe de riesgo dice qué se predice, en qué condiciones y qué factor cambiaría la estimación.",
    v: [
      "Reincidencia penitenciaria=Nuevo ingreso en prisión por un delito cometido tras la excarcelación",
      "CEJFE=Centro catalán que elabora la serie más completa de reincidencia",
      "Estudio de 2020=Siguió durante cinco años a 3.814 personas excarceladas en 2015",
      "Reincidencia judicial=Definición más amplia, que alcanzó el 53,1 % en el estudio de 2020",
      "Libertad sexual=Tipo de delito con la reincidencia penitenciaria más baja, el 5,3 %",
      "Propiedad sin violencia=Tipo de delito con la reincidencia penitenciaria más alta, el 38,4 %",
      "Riesgo alto en RisCanvi=Grupo con un 46 % de reincidencia, cuatro veces la del grupo de riesgo bajo",
      "Salida desde primer grado=Excarcelación seguida de una reincidencia del 57,9 %"
    ],
    g: [
      "En el estudio catalán de 2020, la reincidencia de ejecución penal fue del ___.|28,7 %|21,1 %|53,1 %",
      "El ___ de los reincidentes acumuló el 80 % de las reincidencias.|8 %|20 %|46 %",
      "La reincidencia penitenciaria catalana fue del ___ en los excarcelados en 2002.|40,3 %|37,9 %|30,2 %",
      "En el informe comentado, la abstinencia de cocaína se ha verificado mediante ___.|analíticas|entrevistas|autoinformes",
      "En el informe comentado, las actitudes justificadoras son una necesidad ___ pendiente para el PIT.|criminógena|estática|clínica"
    ],
    tf: [
      "La SGIP publica cada año una tasa oficial de reincidencia de la Administración General del Estado.|F|No existe una tasa oficial periódica en la AGE. La serie más completa procede de Cataluña (CEJFE).",
      "La reincidencia penitenciaria catalana ha descendido de forma clara en las dos últimas décadas.|V",
      "Más de la mitad del grupo de riesgo alto de RisCanvi no volvió a prisión.|V",
      "Los datos del CEJFE pueden extrapolarse al conjunto de España porque la legislación es estatal.|F|Describen Cataluña, con su propia administración y su protocolo de riesgo, y no pueden extrapolarse ni compararse sin más."
    ],
    q: [
      "Un informe concluye solo «riesgo medio-bajo». ¿Qué le falta?|Decir de qué y en qué condiciones|Incluir más tests de personalidad|Ofrecer una cifra de AUC concreta|Sin decir qué se predice ni en qué condiciones, no permite valorar el razonamiento.",
      "Un tertuliano afirma que en España reincide más de la mitad de los presos, citando el 53,1 % catalán. ¿Qué error comete?|Confunde definiciones y territorio|Usa un dato de otro siglo|Ignora la tasa oficial estatal|El 53,1 % es reincidencia judicial en Cataluña. La penitenciaria fue del 21,1 %, y no hay tasa oficial estatal.",
      "¿Qué tipo de delito tuvo la reincidencia penitenciaria más alta en el estudio catalán?|Propiedad sin violencia|Propiedad con violencia|Violencia de género|Los delitos contra la propiedad sin violencia llegaron al 38,4 %, frente al 27,4 % con violencia y el 17,7 % de violencia de género.",
      "En el informe comentado, ¿qué factor aumentaría el riesgo de mal uso del permiso?|Volver a su antiguo entorno de venta|Residir en el domicilio de su pareja|Acudir al centro de adicciones|El informe señala que el riesgo aumentaría si se produjera contacto con su antiguo entorno de venta."
    ],
    inc: [
      "Sobre el informe de riesgo comentado|Evita enumerar las fuentes empleadas|Describe conductas verificables|Dice qué factor cambiaría la estimación|El extracto enumera las fuentes: dos entrevistas, revisión del expediente, información del educador y la TVR."
    ],
    seq: [
      "Serie de reincidencia penitenciaria en Cataluña|37,9 % (estudio de 1992)>40,3 % (excarcelados en 2002)>30,2 % (estudio de 2014)>21,1 % (estudio de 2020)"
    ],
    cls: [] }
] }
);

// SAIMAP Psicología · Penitenciaria · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Terapeuta o perito: la doble función y su ética", cap: 5, pir: "alta", mods: [
  { t: "Dos roles en tensión",
    tip: "En el rol terapéutico la persona pide ayuda y la relación se basa en la confianza y la confidencialidad. En el rol pericial un tercero pide una valoración para decidir y la confidencialidad está limitada desde el inicio. Greenberg y Shuman (1997) hablaron de un «conflicto irreconciliable», pero en prisión el mismo psicólogo tiene ambas funciones (art. 282 del Reglamento de 1981), así que el conflicto se gestiona con encuadre, consentimiento y contraste.",
    v: [
      "Rol terapéutico=La persona pide ayuda por un malestar y el fin es aliviarlo",
      "Rol pericial=Evaluación para informar a un tercero que decide, con confidencialidad limitada",
      "Greenberg y Shuman (1997)=Autores que describieron un «conflicto irreconciliable» entre ambos roles",
      "Conflicto de lealtades=Tensión entre ayudar a la persona atendida e informar con objetividad",
      "Encuadre=Aclaración previa del propósito de la intervención y del uso de la información",
      "Escepticismo técnico=Actitud del perito que obliga a contrastar lo dicho con otras fuentes",
      "Art. 282 Reglamento 1981=Norma que encomienda al psicólogo penitenciario tratar e informar",
      "Contraste sistemático=Cotejar el juicio de quien trata con otras fuentes para compensar el sesgo"
    ],
    g: [
      "En el rol pericial, el cliente es ___ pide el informe.|quien|el interno que|el abogado que",
      "La actitud de apoyo de la terapia da paso, en la pericia, a un ___ técnico.|escepticismo|compromiso|acompañamiento",
      "Según las pautas, el consentimiento informado se ___ cuando cambia el propósito de la intervención.|renueva|presume|suspende",
      "En la práctica privada la solución es sencilla: quien trata no ___.|perita|deriva|acompaña",
      "Si el psicólogo ha construido una buena relación, puede valorar con ___ sin darse cuenta.|indulgencia|severidad|distancia"
    ],
    tf: [
      "En prisión, el mismo psicólogo aplica programas y emite informes de clasificación, permisos y libertad condicional.|V",
      "Greenberg y Shuman (1997) concluyeron que ambos roles se refuerzan cuando los ejerce la misma persona.|F|Hablaron de un «conflicto irreconciliable»: ejercer los dos con la misma persona compromete la eficacia de cada uno.",
      "Si la persona interna sabe que cada sesión puede contar, tenderá a mostrarse mejor de lo que está.|V",
      "Que el conflicto entre roles sea irreconciliable es hoy un hecho consensuado que el modelo español acepta.|F|Está en debate: el modelo español exige en la práctica gestionarlo con encuadre y transparencia."
    ],
    q: [
      "Un participante muy implicado en el grupo de control de la ira pide a su terapeuta una «carta de apoyo» para su permiso. ¿Qué debe hacer ella?|Remitirlo al cauce del Equipo Técnico|Redactarla destacando su implicación|Pedir a la Junta que la incluya|Una carta de su terapeuta no tiene valor técnico. La petición se valora por el procedimiento ordinario, con sus sanciones recientes.",
      "¿Quién puede ser el cliente del psicólogo cuando actúa como perito en prisión?|El Juez de Vigilancia Penitenciaria|La persona interna evaluada|La familia de la persona interna|El cliente es quien pide el informe: la Junta de Tratamiento, el Centro Directivo o el Juez de Vigilancia.",
      "¿Qué pauta exige separar momentos y, si es posible, profesionales?|Que otro evalúe para un beneficio|Que el terapeuta deje de informar|Que el juez designe a un perito|Cuando la organización lo permite, la evaluación para un beneficio puede hacerla otro miembro del equipo.",
      "Según Greenberg y Shuman (1997), ¿en qué difieren las fuentes de ambos roles?|Relato del paciente frente a varias|Tests frente a entrevista libre|Expediente frente a observación|El terapeuta se basa sobre todo en el relato del paciente, y el perito en fuentes múltiples."
    ],
    inc: [
      "Sobre la gestión del doble rol|Basta con informar de los límites al ingreso|El encuadre se aclara antes de cada intervención|El juicio de quien trata se contrasta con otras fuentes|No basta con informar una vez al ingreso: el consentimiento se renueva cuando cambia el propósito."
    ],
    seq: [],
    cls: [
      "Rol del psicólogo|Terapéutico: la persona pide ayuda; confidencialidad amplia; actitud de apoyo|Pericial: un tercero pide el informe; confidencialidad limitada; escepticismo técnico"
    ] },
  { t: "Diagnóstico y pronóstico: qué cambia cuando el fin es informar",
    tip: "La evaluación clínica busca diagnosticar y comprender el sufrimiento para tratarlo. La evaluación con fines forenses responde a una pregunta concreta sobre el riesgo y la evolución. Diagnóstico y riesgo no coinciden: el trastorno pesa en el riesgo cuando forma parte de la explicación del delito. Otro reto es distinguir el cambio auténtico de la adaptación instrumental.",
    v: [
      "Evaluación clínica=Busca diagnosticar y comprender el sufrimiento para tratarlo",
      "Evaluación con fines forenses=Responde a una pregunta concreta sobre el riesgo y la evolución",
      "Adaptación instrumental=Cumplir normas para obtener beneficios sin cambiar los factores de riesgo",
      "Cambio auténtico=Modificación real de lo que se relaciona con el delito, mantenida en el tiempo",
      "Coherencia entre contextos=La conducta en el despacho coincide con la del módulo y el taller",
      "Profundidad del relato=Explicar con palabras propias qué ha cambiado y qué riesgos prevé",
      "Evolución en el tiempo=El cambio se mantiene tras un permiso, un traslado o una frustración",
      "Pericia en sentido estricto=La que se ejerce ante tribunales, propia de Psicología Jurídica y Forense"
    ],
    g: [
      "En la evaluación con fines forenses, el centro de interés son las necesidades ___.|criminógenas|clínicas|afectivas",
      "La evaluación clínica usa los criterios del ___ para identificar un trastorno.|DSM-5-TR|HCR-20|LSI-R",
      "El trastorno mental pesa en el riesgo cuando forma parte de la ___ del delito.|explicación|condena|sentencia",
      "En un informe de riesgo, el sufrimiento solo aparece si es ___ para la pregunta planteada.|relevante|grave|reciente",
      "Para distinguir el cambio auténtico no basta con buena conducta: interesa si cambian los factores ___.|dinámicos|estáticos|clínicos"
    ],
    tf: [
      "Un diagnóstico grave implica siempre un riesgo de reincidencia alto.|F|Diagnóstico y riesgo no coinciden: alguien sin diagnóstico puede tener un riesgo alto por actitudes, amistades y consumo.",
      "El deber de detectar el riesgo de suicidio se mantiene aunque la entrevista tenga un fin evaluativo.|V",
      "En la evaluación forense, la fuente principal es el relato de la persona, que se acepta sin contrastar.|F|El relato se contrasta con expediente, observación y terceros. El relato como fuente principal es propio de la clínica.",
      "El resultado de la evaluación forense es un informe para quien decide, con los límites del pronóstico.|V"
    ],
    q: [
      "Una mujer con un trastorno de ansiedad cumple condena por fraude. Para su informe de riesgo, su diagnóstico…|puede informar poco de su riesgo|es el eje central del pronóstico|la excluye de los permisos|Necesita atención clínica, pero su ansiedad apenas informa sobre su riesgo de reincidencia.",
      "Un interno es puntual y participa en todo, pero en el taller le describen como provocador y mantiene sus contactos de siempre. ¿Qué sugiere?|Adaptación instrumental|Cambio auténtico consolidado|Disimulación de síntomas|Falta coherencia entre contextos y no cambian sus factores dinámicos: cumple normas sin cambio de riesgo.",
      "¿Cuándo pesa un trastorno mental en la valoración del riesgo?|Si explica parte del delito|Si su diagnóstico es grave|Si requiere medicación|Por ejemplo, cuando una agresión se produjo durante un episodio psicótico sin tratamiento.",
      "¿Qué pregunta es propia de la evaluación con fines forenses?|¿Qué riesgo hay y con qué condiciones?|¿Qué le pasa y cómo se le ayuda?|¿Qué trastorno explica su malestar?|La evaluación clínica pregunta qué le pasa a la persona. La forense, qué riesgo hay y en qué condiciones."
    ],
    inc: [
      "Sobre los indicios de cambio auténtico|Basta con repetir bien el lenguaje del programa|La conducta coincide entre despacho y módulo|El cambio se mantiene tras un permiso o traslado|Repetir el lenguaje del programa no basta: la persona debe explicar con sus palabras qué ha cambiado."
    ],
    seq: [],
    cls: [
      "Tipo de evaluación|Clínica: síntomas y malestar; relato de la persona; diagnóstico y plan de tratamiento|Con fines forenses: necesidades criminógenas; fuentes contrastadas; informe para quien decide"
    ] },
  { t: "Simulación, disimulación y deseabilidad social ante los beneficios",
    tip: "La simulación produce síntomas falsos o exagerados por incentivos externos, la disimulación los oculta para parecer rehabilitado y la deseabilidad social no equivale a mentir. El DSM-5-TR no considera la simulación un trastorno (código Z) y sus motivos de sospecha no son criterios diagnósticos. La validez se valora con instrumentos como SIMS, TOMM o SIRS-2 y con triangulación, nunca con un único indicador.",
    v: [
      "Simulación=Producción intencionada de síntomas falsos o exagerados por incentivos externos",
      "Sobresimulación=Amplificar los síntomas de un problema real para asegurarse atención",
      "Disimulación=Ocultar síntomas, impulsos o actitudes para parecer más sano o rehabilitado",
      "Deseabilidad social=Tendencia, no siempre consciente, a dar respuestas socialmente aceptables",
      "Código Z=Forma de recoger en el DSM-5-TR un problema que puede ser objeto de atención clínica",
      "TOMM=Prueba de validez del rendimiento que detecta esfuerzo insuficiente en memoria",
      "SIMS=Cribado que detecta síntomas improbables o caricaturescos",
      "Triangulación=Contraste de entrevista, instrumentos, observación y expediente"
    ],
    g: [
      "La distorsión más esperable al valorar permisos o la libertad condicional es la ___.|disimulación|simulación|exageración",
      "Las escalas L y K del MMPI-2 detectan la ___.|infradeclaración|sobredeclaración|simulación",
      "El SIRS-2 es una entrevista ___ que detecta patrones típicos de simulación.|estructurada|abierta|clínica libre",
      "Según Mittenberg et al. (2002), la simulación probable o la exageración rondaría el ___ de los casos penales.|19 %|9 %|39 %",
      "El PAI incluye escalas de impresión negativa y de impresión ___.|positiva|neutra|clínica"
    ],
    tf: [
      "El DSM-5-TR considera la simulación un trastorno mental de la personalidad.|F|No la considera un trastorno, sino un problema que puede ser objeto de atención clínica, recogido con un código Z.",
      "Simulación y trastorno pueden coexistir: alguien con un trastorno real puede exagerarlo.|V",
      "Una puntuación alta en una escala de simulación demuestra que el interno está fingiendo.|F|Es un mito: puede deberse a baja comprensión lectora, diferencias culturales o un malestar real expresado de forma desorganizada.",
      "El 19 % de Mittenberg et al. (2002) es una estimación de los profesionales, no una medición directa.|V"
    ],
    q: [
      "Tras un traslado de módulo que no quería, un interno dice haber perdido casi toda la memoria reciente, recuerda la fecha de su permiso y puntúa en el TOMM por debajo del azar. ¿Qué procede?|Estudiar la discrepancia entre fuentes|Diagnosticar ya una simulación|Atribuirlo a un deterioro real|Hay una discrepancia que merece estudio. Si además pide ir a enfermería, la hipótesis de simulación gana fuerza.",
      "Un interno oculta su consumo de alcohol para obtener la libertad condicional. ¿Qué distorsión muestra?|Disimulación|Simulación|Sobresimulación|Ocultar problemas para parecer rehabilitado es disimulación. Simular es producir síntomas.",
      "¿Qué escalas del MMPI-2 detectan sobredeclaración de síntomas?|F, Fb, Fp y FBS|L y K|Las del PAI|F, Fb, Fp y FBS detectan síntomas infrecuentes o atípicos. L y K, negación de defectos y actitud defensiva.",
      "¿Cuál de estos es un motivo de sospecha de simulación según el DSM-5-TR?|Un contexto médico-legal|Una comprensión lectora baja|Un trastorno de ansiedad|También la discrepancia entre quejas y hallazgos, la falta de cooperación y el trastorno antisocial."
    ],
    inc: [
      "Sobre la detección de la simulación|Los indicios del DSM-5-TR bastan para diagnosticarla|Exige contrastar varias fuentes de información|Un error en esta dirección puede privar de atención|Los motivos de sospecha del DSM-5-TR son indicios para investigar, no criterios diagnósticos."
    ],
    seq: [],
    cls: [
      "Dirección de la distorsión|Sobredeclaración: escalas F, Fb, Fp y FBS; SIMS; impresión negativa del PAI|Infradeclaración: escalas L y K; impresión positiva del PAI; disimulación"
    ] },
  { t: "Deontología, confidencialidad y diferencias con Latinoamérica",
    tip: "El marco ético combina el Código Deontológico del Consejo General de la Psicología (2010, revisado en 2015), las Specialty Guidelines for Forensic Psychology de la APA (2013) y los deberes del funcionario de IIPP. Hay que informar del propósito y de los límites de la confidencialidad, obtener el consentimiento y no incluir lo que no sea pertinente. En Latinoamérica la regulación es heterogénea y algunos sistemas separan más a quien trata de quien evalúa.",
    v: [
      "Código Deontológico=Norma ética del Consejo General de la Psicología (2010, revisada en 2015)",
      "Specialty Guidelines=Guías de la APA (2013), referencia internacional para la práctica forense",
      "Pertinencia de la información=En un informe solo se incluye lo necesario para la decisión",
      "Claridad de rol=Evitar situaciones en las que el papel del psicólogo resulte confuso",
      "Caso Tarasoff (1976)=Consolidó en EE. UU. el deber de proteger a una víctima identificable",
      "Ley 24.660=Ley de ejecución penal de Argentina",
      "Ley 65 de 1993=Norma que organiza la ejecución penal en Colombia",
      "Hacinamiento=Problema regional que obliga a evaluaciones breves, de cribado"
    ],
    g: [
      "El tratamiento es de participación voluntaria según el art. ___ RP.|112|100.2|154",
      "En la Administración General del Estado, el psicólogo es funcionario del Cuerpo Superior de ___ de IIPP.|Técnicos|Facultativos|Ayudantes",
      "La confidencialidad cede ante un riesgo grave para la vida o la ___ de la persona o de terceros.|integridad|intimidad|libertad",
      "México regula la ejecución penal con la Ley Nacional de Ejecución Penal de ___.|2016|1993|2010",
      "Separar a quien trata de quien evalúa protege la ___ terapéutica.|alianza|eficacia|neutralidad"
    ],
    tf: [
      "No informar del propósito y de los límites de la confidencialidad antes de evaluar es una falta ética grave.|V",
      "La confidencialidad en prisión funciona igual que en la clínica privada.|F|Es una trampa típica: en prisión la información puede acabar en un informe y los límites deben explicarse desde el inicio.",
      "Rechazar el tratamiento no debe convertirse en un castigo encubierto.|V",
      "El modelo español separa más que el latinoamericano a quien trata de quien evalúa para conceder beneficios.|F|Es al revés: algunos sistemas latinoamericanos separan más. El español ofrece más información con mayor tensión de roles."
    ],
    q: [
      "En una sesión terapéutica, un interno menciona un delito antiguo por el que nunca fue juzgado. ¿Qué exige el caso?|Ponderar, razonar y dejar constancia|Incluirlo siempre en el próximo informe|Omitirlo siempre por el secreto|No hay respuesta automática: se pondera lo informado, la relevancia y los deberes legales, y se razona el criterio.",
      "¿Qué principio impide volcar en un informe todo lo contado en terapia?|La pertinencia de la información|La claridad del propio rol|El consentimiento informado previo|Solo se incluye lo necesario para la decisión. Que algo se haya contado no lo convierte en material de informe.",
      "¿Qué ventaja tiene el modelo español frente a separar tratamiento y evaluación?|Ofrece más información del caso|Protege mejor la alianza|Reduce la tensión de roles|Se basa en una evaluación continuada. Separar roles protege la alianza, pero puede basar la evaluación en pocos contactos.",
      "¿Qué caso es la referencia clásica del deber de proteger a una víctima identificable?|Tarasoff (1976)|Mittenberg (2002)|Greenberg (1997)|El caso Tarasoff consolidó en Estados Unidos ese deber, que limita el secreto profesional."
    ],
    inc: [
      "Sobre la ética del psicólogo penitenciario|El consentimiento se presume al aceptar el ingreso|Hay que informar del propósito antes de evaluar|La confidencialidad cede ante un riesgo grave|Se requiere consentimiento informado para la evaluación y para cada programa, y se renueva si cambia el propósito."
    ],
    seq: [],
    cls: [
      "Ámbito de la referencia|España: Código Deontológico; guías del Colegio Oficial; deberes del funcionario|Internacional: Specialty Guidelines de la APA; caso Tarasoff|Latinoamérica: Ley 24.660; Ley 65 de 1993"
    ] }
] },
{ n: 14, t: "El catálogo de programas de la SGIP", cap: 6, pir: "alta", mods: [
  { t: "Delitos sexuales: el PCAS y su evaluación",
    tip: "El tratamiento penitenciario no es solo psicoterapia, y los programas específicos se dirigen a un tipo de delito o necesidad, con participación voluntaria (art. 112 RP). El PCAS (SGIP, 2006) es cognitivo-conductual y se basa en la prevención de recaídas: el objetivo es gestionar el riesgo. En Brians reincidieron el 4,1 % de los tratados frente al 18,2 % de los no tratados, pero el estudio fue cuasiexperimental y con muestras pequeñas.",
    v: [
      "Programa específico=Intervención dirigida a los factores de un tipo de delito o necesidad concreta",
      "PCAS=Programa cognitivo-conductual de la SGIP (2006) para agresores sexuales",
      "Cadena del delito=Secuencia de emociones, fantasías, permisos y preparativos previa a agredir",
      "Situación de alto riesgo=Circunstancia que acerca a la persona a la posibilidad de reincidir",
      "Decisión aparentemente irrelevante=Elección en apariencia inocente que acerca al riesgo",
      "Autobiografía=Herramienta de evaluación y tratamiento que muestra experiencias repetidas",
      "Respuestas de afrontamiento=Alternativas que se ensayan ante el primer eslabón del riesgo",
      "PIT=Programa Individualizado de Tratamiento en el que se integra cada programa"
    ],
    g: [
      "El PCAS se organiza en torno al modelo de ___ de recaídas.|prevención|análisis|control",
      "En el área de ___ se trabaja reconocer los hechos sin negar ni minimizar.|responsabilidad|control de la conducta|educación",
      "En Brians, la reincidencia sexual de los tratados fue del ___.|4,1 %|18,2 %|10,1 %",
      "El trabajo del PCAS es sobre todo ___, con ensayo de conducta.|grupal|individual|domiciliario",
      "El tratamiento penitenciario incluye formación, trabajo, deporte y contactos con el exterior (arts. ___ LOGP).|59–62|26–35|80–88"
    ],
    tf: [
      "El objetivo del PCAS es curar el deseo sexual desviado.|F|Su objetivo no es «curar» un deseo, sino que la persona aprenda a gestionar su riesgo.",
      "El PCAS se dirige tanto a quienes agredieron a menores como a quienes agredieron a adultos.|V",
      "La evaluación de Brians asignó aleatoriamente a los participantes al tratamiento.|F|Fue cuasiexperimental, sin asignación aleatoria y con 49 y 74 personas, de modo que los grupos podían diferir.",
      "Según el CEJFE, la reincidencia de los excarcelados por delitos sexuales fue la más baja de todas las tipologías.|V"
    ],
    q: [
      "Un hombre con antecedentes contra menores decide volver del trabajo por el parque infantil «porque es más corto». ¿Qué es esa elección?|Una decisión aparentemente irrelevante|Una respuesta de afrontamiento|Una distorsión de responsabilidad|Parece inocente, pero le acerca al riesgo. El PCAS enseña a detectarla como primer eslabón.",
      "¿Qué se trabaja en el área emocional del PCAS?|Las emociones negativas previas al delito|La educación sexual y el estilo de vida|Las distorsiones y la toma de decisiones|Se trata de reconocer y regular las emociones negativas que suelen preceder al delito.",
      "¿Qué estudio matiza el optimismo sobre el tratamiento de agresores sexuales?|El del SOTP británico de Mews et al.|El metaanálisis de Schmucker y Lösel|El de Brians de Redondo et al.|El SOTP se asoció a más reincidencia sexual. Schmucker y Lösel (2015) hallan un efecto positivo moderado.",
      "¿Qué tasa de reincidencia sexual dan los metaanálisis?|En torno al 10–14 %|En torno al 40–50 %|En torno al 1–2 %|Rebate el mito de que reinciden casi siempre. El tratamiento la reduce de forma moderada."
    ],
    inc: [
      "Sobre el PCAS|Su manual lo publicó la SGIP en 2015|Usa la autobiografía para evaluar y tratar|Analiza la cadena que llevó al delito|El manual del PCAS lo publicó la SGIP en 2006."
    ],
    seq: [],
    cls: [
      "Área del PCAS|Responsabilidad: reconocer los hechos; empatía con la víctima|Cognitiva: distorsiones y justificaciones; toma de decisiones|Control de la conducta: autocontrol; relajación; manejo de impulsos desviados"
    ] },
  { t: "Violencia de género y penas alternativas: PRIA, PRIA-MA y PROBECO",
    tip: "El PRIA es un programa grupal cognitivo-conductual para hombres condenados por violencia contra su pareja o expareja que están en prisión. El PRIA-MA es su versión para quienes cumplen medidas alternativas, como la suspensión condicionada o los trabajos en beneficio de la comunidad. El PROBECO trabaja habilidades prosociales y pensamiento con penados por delitos diversos, sin centrarse en un delito concreto.",
    v: [
      "PRIA=Programa grupal de la SGIP para hombres condenados por violencia de género",
      "PRIA-MA=Versión del programa para condenados por violencia de género en medidas alternativas",
      "PROBECO=Programa de habilidades prosociales y pensamiento en medidas alternativas",
      "Responsabilización=Abandonar la negación, la minimización y la culpa atribuida a la víctima",
      "Tiempo fuera=Técnica para frenar a tiempo la escalada de ira o de celos",
      "Ross y Fabiano (1985)=Autores del Razonamiento y Rehabilitación, base del PROBECO",
      "Pensamiento Prosocial=Adaptación española del Razonamiento y Rehabilitación",
      "Obligación judicial=Carácter de la asistencia en medidas alternativas, cuyo incumplimiento cuenta"
    ],
    g: [
      "A 31 de diciembre de 2024 había ___ internos por delitos de violencia de género.|5.497|7.531|4.123",
      "En el PRIA el cambio se mide al empezar, a mitad y al ___.|terminar|salir en libertad|año",
      "El PROBECO usa dilemas ___, ensayo de conducta y retroalimentación inmediata.|morales|clínicos|legales",
      "En medidas alternativas, el incumplimiento puede llevar a ___ la suspensión.|revocar|prorrogar|sustituir",
      "En 2025 se publicaron en el BOE ___ con universidades y asociaciones para el PRIA-MA.|convenios|sentencias|instrucciones"
    ],
    tf: [
      "El PRIA-MA se aplica dentro de prisión a internos condenados por violencia de género.|F|Es una trampa típica: el PRIA-MA es para quienes cumplen medidas alternativas, sin ingreso en prisión.",
      "El grupo del PRIA facilita el aprendizaje por modelado y el contraste entre iguales.|V",
      "El PROBECO se dirige a condenados por delitos contra la seguridad vial.|F|No se centra en un delito: trabaja déficits que atraviesan muchos, como impulsividad o resolución de problemas.",
      "Que el psicólogo informe del cumplimiento en medidas alternativas es un caso de la doble función.|V"
    ],
    q: [
      "Un hombre condenado por violencia de género tiene la pena de prisión suspendida con la condición de seguir un programa. ¿A cuál se le deriva?|Al PRIA-MA|Al PRIA|Al PROBECO|El PRIA-MA es la versión para medidas alternativas, como la suspensión condicionada.",
      "Una persona cumple trabajos en beneficio de la comunidad por un delito sin programa por tipología. ¿Qué programa encaja?|El PROBECO|El PRIA-MA|El PICOVI|El PROBECO atiende a penados en medidas alternativas por delitos diversos sin programa específico.",
      "¿Qué ventaja tiene intervenir en medidas alternativas?|Se trabaja lo ocurrido esa semana|La asistencia es voluntaria|El psicólogo no emite informes|La persona conserva trabajo y familia, y el grupo puede trabajar sobre lo que le pasó esa semana.",
      "¿Qué eje del PRIA aborda la idea de tener derecho a controlar a la pareja?|Las creencias|La regulación emocional|Las habilidades|El eje de creencias trabaja las actitudes sexistas y la idea de que se tiene derecho a controlar a la pareja."
    ],
    inc: [
      "Sobre los programas de violencia de género|El PRIA es de orientación psicodinámica|El PRIA incluye prevención de recaídas|El PRIA-MA se aplica sin ingreso en prisión|El PRIA se trabaja en grupo con sesiones pautadas de orientación cognitivo-conductual."
    ],
    seq: [],
    cls: [
      "Programa|PRIA: violencia de género; en prisión|PRIA-MA: violencia de género; medidas alternativas; suspensión condicionada|PROBECO: delitos diversos; habilidades prosociales; Pensamiento Prosocial"
    ] },
  { t: "Prevención del suicidio y atención a la discapacidad",
    tip: "El Programa de Prevención de Suicidios (Instrucción 14/2005, actualizado en 2014) sigue tres pasos: detectar, activar medidas de protección y revisar. El ingreso es un momento clave. Del estudio de la SGIP sobre 2023, 29 de los 31 fallecidos no estaban en el PPS, lo que muestra los límites de la detección por factores de riesgo. Las personas con discapacidad intelectual pasan a menudo desapercibidas y necesitan adaptación y apoyo.",
    v: [
      "PPS=Programa de detección del riesgo de suicidio, protección y revisión periódica",
      "Instrucción 14/2005=Norma que regula el programa de prevención de suicidios",
      "Interno de apoyo=Persona presa formada para acompañar a quien está en riesgo",
      "Detección=Identificar a quien presenta factores de riesgo, empezando por el ingreso",
      "Revisión periódica=Comprobar si las medidas de protección siguen siendo necesarias",
      "29 de 31=Fallecidos por suicidio en 2023 que no estaban incluidos en el programa",
      "Discapacidad intelectual=Condición que a menudo pasa desapercibida al ingresar",
      "Tercer sector=Entidades que colaboran en la atención a personas con discapacidad"
    ],
    g: [
      "El programa de prevención de suicidios se actualizó en ___.|2014|2005|2009",
      "En 2023 había ___ personas en el programa de prevención de suicidios.|2.031|1.982|1.996",
      "El ___ % de los suicidios de 2023 fueron de hombres.|90,3|76,2|80,8",
      "En 2022 hubo unos 35 suicidios, en torno a ___ por 10.000.|7,5|3,5|15",
      "El psicólogo puede proponer la inclusión en el programa en la entrevista de ___.|ingreso|clasificación|permiso"
    ],
    tf: [
      "Que la mayoría de los suicidios de 2023 ocurriera fuera del PPS demuestra que el programa es inútil.|F|No significa que sea inútil, sino que la detección por factores de riesgo tiene límites.",
      "La proximidad de la salida figura entre los factores de riesgo de suicidio que se vigilan.|V",
      "El estudio específico de la SGIP y el Informe General 2024 coinciden en 32 suicidios en 2023.|F|El estudio específico cuenta 31 y el Informe General 2024 da 32, una discrepancia no resuelta.",
      "Las personas con discapacidad intelectual son especialmente vulnerables a abusos y a sanciones por conductas que no entienden.|V"
    ],
    q: [
      "Un hombre ingresa por primera vez con una condena larga, acaba de saber que su pareja le deja y no tiene contacto con otros internos. ¿Qué procede?|Valorar su inclusión en el PPS|Esperar a una conducta autolesiva|Derivarlo a régimen cerrado|El ingreso, las rupturas y el aislamiento son factores de riesgo. La entrevista de ingreso es el momento de proponerlo.",
      "¿Cuál de estas es una medida de protección del PPS?|La celda compartida|El traslado a otro centro|El aislamiento preventivo|Se usan celda compartida, interno de apoyo, retirada de objetos, vigilancia, contacto familiar y derivación sanitaria.",
      "¿Por qué no basta con una lista de factores de riesgo para prevenir el suicidio?|Muchos con factores no lo intentan|Los factores aún no se conocen|Solo se aplica a las mujeres|Muchas personas con factores no lo intentan y otras sin ellos sí. Por eso se forma a todo el personal.",
      "¿En qué se basa la intervención con personas con discapacidad en prisión?|En adaptar y apoyar|En separar y vigilar|En sancionar y corregir|Incluye detección temprana, apoyos para el tratamiento, habilidades de autonomía y conexión con recursos externos."
    ],
    inc: [
      "Sobre el Programa de Prevención de Suicidios|Las salidas del programa no se documentan|Cada inclusión queda documentada|Las medidas se ajustan a cada caso|Cada inclusión y cada salida del programa quedan documentadas."
    ],
    seq: [
      "Lógica del Programa de Prevención de Suicidios|Detectar a quien presenta factores de riesgo>Activar medidas de protección>Revisar si siguen siendo necesarias"
    ],
    cls: [] },
  { t: "Drogodependencias: módulos terapéuticos, UTE y reducción de daños",
    tip: "El consumo de sustancias es el problema de salud mental más extendido en prisión: el 76,2 % de los varones del estudio PRECA tenía un trastorno por consumo a lo largo de la vida. Primero se supera la dependencia física (desintoxicación) y después los hábitos (deshabituación). Hay modalidad ambulatoria, módulo terapéutico y UTE (Villabona, 1992). La reducción de daños, con metadona e intercambio de jeringuillas, es una estrategia sanitaria aceptada.",
    v: [
      "Desintoxicación=Superar con ayuda médica el síndrome físico de la dependencia",
      "Deshabituación=Trabajo sobre hábitos, deseo y estilo de vida que sostenían el consumo",
      "UTE=Unidad Terapéutica y Educativa libre de drogas y cogestionada (Villabona, 1992)",
      "Módulo terapéutico=Módulo separado, estructurado y libre de drogas para un programa intensivo",
      "Centro de día=Modalidad con actividades terapéuticas sin salir del módulo ordinario",
      "Umbral bajo=Metadona con solo acudir a la dispensación, con fin sobre todo sanitario",
      "Umbral alto=Metadona unida a un trabajo psicológico y social para dejar las drogas",
      "Intercambio de jeringuillas=Entrega de material estéril para cortar el contagio de VIH y hepatitis"
    ],
    g: [
      "A 31 de diciembre de 2024 había ___ internos por delitos contra la salud pública.|7.531|5.497|2.031",
      "La UTE nació en el centro penitenciario de ___.|Villabona|Mansilla de las Mulas|Brians",
      "En la UTE, los funcionarios de ___ participan en el trabajo educativo.|vigilancia|sanidad|oficinas",
      "El Código Penal permite suspender penas de hasta ___ años a drogodependientes en tratamiento.|cinco|dos|tres",
      "Mantener a quien consume en contacto con el sistema sanitario facilita que acepte después la ___.|deshabituación|desintoxicación|metadona"
    ],
    tf: [
      "La UTE rompe con la separación tradicional entre régimen y tratamiento.|V",
      "En los programas de metadona de umbral bajo, la dispensación va unida a un trabajo psicosocial hacia la abstinencia.|F|Eso es el umbral alto. En el umbral bajo basta con acudir a la dispensación y el fin es sobre todo sanitario.",
      "Existen cifras oficiales recientes del número de personas en metadona en la AGE.|F|No hay cifras oficiales de 2023–2024, así que conviene no repetir datos antiguos como actuales.",
      "La deshabituación se aborda después de superar el síndrome físico de dependencia.|V"
    ],
    q: [
      "Un interno dependiente de heroína se niega a dejarla por ahora. Un compañero opina que darle metadona es «tolerar la droga». ¿Qué responde la salud pública?|Que reduce su riesgo y lo acerca a tratarse|Que la metadona exige abstinencia previa|Que solo procede en el tercer grado|Quien va a consumir tiene menos riesgo de infección o sobredosis en condiciones seguras, y el contacto sanitario facilita tratarse.",
      "¿Qué rasgo distingue a la UTE de un módulo terapéutico?|La cogestión con los internos|Estar libre de cualquier droga|Ser un módulo separado del resto|Ambos están libres de drogas. En la UTE todo el módulo es educativo y los internos asumen responsabilidades.",
      "¿Qué modalidad conviene a quien puede seguir en su módulo ordinario?|La ambulatoria o centro de día|El módulo terapéutico intensivo|La UTE cogestionada|La modalidad ambulatoria ofrece actividades terapéuticas sin salir del módulo ordinario.",
      "¿Qué artículo permite suspender penas a drogodependientes que sigan tratamiento?|Art. 80.5 CP|Art. 90 CP|Art. 91 CP|El art. 80.5 CP permite suspender penas de hasta cinco años a personas drogodependientes en tratamiento."
    ],
    inc: [
      "Sobre las drogodependencias en prisión|El consumo favorece la adherencia al tratamiento|El consumo alimenta la economía ilegal|El consumo dificulta la convivencia|El consumo dentro de la prisión reduce la adherencia al resto del tratamiento."
    ],
    seq: [
      "Objetivos de menos a más exigentes|Que quien no consume no empiece>Que quien consume reduzca el daño>Que llegue a dejarlo>Que salga preparado para no recaer"
    ],
    cls: [
      "Medida en drogodependencias|Orientada a la abstinencia: módulo terapéutico; UTE; metadona de umbral alto|Reducción de daños: metadona de umbral bajo; intercambio de jeringuillas"
    ] }
] },
{ n: 15, t: "Pruebas de eficacia: lo que reduce la reincidencia y lo que no", cap: 6, pir: "alta", mods: [
  { t: "De «nada funciona» al modelo RNR",
    tip: "Martinson (1974) dejó el lema «nada funciona», que los metaanálisis refutaron: Andrews et al. (1990) mostraron que el tratamiento apropiado reduce la reincidencia y la sanción sola no. El modelo RNR pide ajustar la intensidad al riesgo, intervenir sobre necesidades criminógenas y adaptar el método a cómo aprende la persona. El Good Lives Model (Ward, 2002) y el desistimiento (Maruna, 2001) se ven hoy como complementarios.",
    v: [
      "Nada funciona=Conclusión pesimista atribuida a Martinson (1974), refutada después",
      "Principio de riesgo=La intensidad de la intervención debe ser proporcional al riesgo",
      "Principio de necesidad=Los objetivos deben ser los factores dinámicos asociados al delito",
      "Principio de responsividad=El método se ajusta a cómo aprende la persona",
      "Andrews et al. (1990)=Mostraron en Criminology que el tratamiento apropiado reduce la reincidencia",
      "Good Lives Model=Propuesta de Ward (2002) de lograr bienes humanos básicos sin delinquir",
      "Desistimiento=Dejar el delito construyendo una nueva identidad (Maruna, 2001)",
      "Certeza del castigo=Rasgo de la pena que disuade más que su severidad (Nagin, 2013)"
    ],
    g: [
      "Martinson publicó su revisión en la revista ___.|The Public Interest|Criminology|Psychological Bulletin",
      "Frente a sanciones no privativas, el encarcelamiento tiene efectos nulos o ligeramente ___.|criminógenos|disuasorios|protectores",
      "Según la responsividad general, los métodos más eficaces son los ___.|cognitivo-conductuales|psicodinámicos|disuasorios",
      "La pregunta pasó a ser qué funciona, con quién y en qué ___.|condiciones|cárceles|países",
      "Hoy, el RNR indica dónde intervenir y el Good Lives Model ayuda a que la persona ___ hacerlo.|quiera|sepa|pueda"
    ],
    tf: [
      "Según el principio de riesgo, los casos de riesgo bajo deben recibir la intervención más intensa disponible.|F|Es al revés: los de riesgo alto necesitan más horas y recursos, y los de riesgo bajo, poco o nada.",
      "Trabajar la autoestima baja de un joven que roba coches ataca una necesidad criminógena principal.|F|La autoestima baja no figura entre los predictores principales. Sí lo son sus actitudes, amistades y ocio.",
      "El RNR fue formulado por Andrews, Bonta y Hoge en 1990.|V",
      "Los estudios sobre disuasión indican que endurecer la pena no sustituye a intervenir.|V"
    ],
    q: [
      "Un programa para jóvenes que roban coches dedica sus sesiones a mejorar su autoestima. ¿Qué principio del RNR descuida?|El de necesidad|El de riesgo|El de responsividad|La autoestima no es una necesidad criminógena. El principio de necesidad pide trabajar actitudes, amistades y ocio.",
      "Un equipo adapta el formato de un programa a la baja capacidad lectora de un grupo. ¿Qué principio aplica?|El de responsividad|El de necesidad criminógena|El de riesgo de reincidir|Adaptar el método a la capacidad, motivación, cultura o género de la persona es responsividad específica.",
      "¿Qué distinguieron Andrews et al. (1990) frente a la conclusión de Martinson?|Tratamiento apropiado y sanción sola|Programas psicodinámicos y conductuales|Delitos violentos y contra la propiedad|El tratamiento que respetaba ciertos principios reducía la reincidencia, y las sanciones sin tratamiento, no.",
      "¿Qué critica el Good Lives Model al RNR?|Que reducir riesgos no basta para motivar|Que ignora las necesidades criminógenas|Que intensifica el tratamiento en exceso|Sostiene que hay que ayudar a lograr bienes humanos básicos por vías no delictivas."
    ],
    inc: [
      "Sobre la investigación en rehabilitación|Andrews et al. (1990) confirmaron que nada funciona|Martinson publicó su revisión en 1974|Los metaanálisis permiten estimar un efecto medio|Andrews et al. (1990) refutaron a Martinson: el tratamiento apropiado reduce la reincidencia y la sanción sola no."
    ],
    seq: [
      "Etapas de la investigación sobre rehabilitación|Martinson (1974)>Andrews et al. (1990)>Maruna (2001)>Ward (2002)"
    ],
    cls: [
      "Principio del modelo RNR|Riesgo: intensidad proporcional; más horas en riesgo alto|Necesidad: necesidades criminógenas; factores dinámicos|Responsividad: métodos cognitivo-conductuales; adaptación a capacidad y motivación"
    ] },
  { t: "Los grandes metaanálisis internacionales y españoles",
    tip: "Los programas bien diseñados y aplicados reducen la reincidencia de forma moderada, en torno a un 25 % relativo. Landenberger y Lipsey (2005) hallaron un descenso del 40 % al 30 %, y Lipsey (2009) destacó el enfoque terapéutico, el riesgo alto y la calidad de la implementación. Con agresores sexuales, Schmucker y Lösel (2015) hallaron un 10,1 % frente a un 13,7 %. Un r de 0,12 no es despreciable: según la BESD equivale a unos 12 puntos.",
    v: [
      "Metaanálisis=Técnica que combina muchos estudios para estimar un efecto medio",
      "BESD=Traducción de un r a diferencia de tasas de éxito entre tratados y no tratados",
      "Landenberger y Lipsey (2005)=58 estudios cognitivo-conductuales con reincidencia del 40 % al 30 %",
      "Lipsey (2009)=548 estudios con jóvenes sobre los factores asociados a la eficacia",
      "Schmucker y Lösel (2015)=Metaanálisis de agresores sexuales con 10,1 % frente a 13,7 %",
      "Hanson et al. (2009)=Hallaron más efecto en programas sexuales que respetan el RNR",
      "Razonamiento y Rehabilitación=Programa de Ross y Fabiano (1985) adaptado en España",
      "Programa de marca=Programa con nombre propio que no superó a otros bien aplicados"
    ],
    g: [
      "En Schmucker y Lösel (2015), la reducción relativa de la reincidencia sexual fue del ___.|26,3 %|13,7 %|41 %",
      "Redondo, Sánchez-Meca y Garrido (1999) hallaron un efecto medio de r de ___.|0,12|0,15|0,21",
      "Un r de 0,21 equivale a una reincidencia del 39,5 % frente al ___.|60,5 %|51,0 %|79,0 %",
      "Redondo, Garrido y Sánchez-Meca (1997) analizaron ___ programas europeos.|57|32|26",
      "Schmucker y Lösel reunieron ___ muestras de agresores sexuales.|28|58|109"
    ],
    tf: [
      "Un r de 0,12 indica un efecto despreciable, de apenas un 1,2 % de diferencia.|F|Es una trampa típica: según la BESD equivale a unos 12 puntos, por ejemplo un 44 % frente a un 56 % de reincidencia.",
      "En Landenberger y Lipsey (2005), el efecto era mayor con participantes de riesgo alto.|V",
      "Los programas de marca obtuvieron mejores resultados que otros cognitivo-conductuales bien aplicados.|F|No los superaron: importa el contenido y su aplicación, no el nombre.",
      "El efecto medio de un metaanálisis puede ocultar mucha variabilidad entre programas.|V"
    ],
    q: [
      "Un director de centro descarta un programa porque su metaanálisis da r de 0,12. ¿Qué cabe responderle?|Equivale a unos 12 puntos menos|Supone un 88 % menos de reincidencia|Es un efecto nulo en la práctica|Según la BESD, por ejemplo un 44 % frente a un 56 %. Aplicado a miles de personas supone muchos delitos menos.",
      "Según Landenberger y Lipsey (2005), ¿qué componente se asoció a un efecto mayor?|El control de la ira|El nombre del programa|La duración de la condena|También la resolución de problemas interpersonales, el riesgo alto y la fidelidad en la aplicación.",
      "¿Qué factor no figura entre los tres que destacó Lipsey (2009)?|Un enfoque de disuasión|La calidad de la implementación|La aplicación a riesgo alto|Lipsey destacó un enfoque terapéutico frente a uno de control o disuasión, el riesgo alto y la implementación.",
      "¿Por qué un metaanálisis debe complementarse con la evaluación local?|Sus resultados no se trasladan sin más|Siempre sobrestima el efecto real|Solo incluye estudios de baja calidad|Mezcla estudios de calidad desigual y su resultado no se traslada sin más a otro sistema penitenciario."
    ],
    inc: [
      "Sobre Schmucker y Lösel (2015)|Hallaron más reincidencia en los tratados|Incluyeron 4.939 personas tratadas|Hallaron un efecto positivo moderado|La reincidencia sexual fue del 10,1 % en tratados frente al 13,7 % en no tratados. El efecto negativo es del SOTP."
    ],
    seq: [],
    cls: [
      "Metaanálisis|Internacional: Landenberger y Lipsey (2005); Lipsey (2009); Schmucker y Lösel (2015)|Español: Redondo, Garrido y Sánchez-Meca (1997); Redondo, Sánchez-Meca y Garrido (2002)"
    ] },
  { t: "Cuando el tratamiento falla o empeora: implementación e iatrogenia",
    tip: "Que un tipo de programa funcione en promedio no significa que todo programa de ese tipo funcione, y a veces es iatrogénico. El SOTP británico se asoció a más reincidencia sexual (10,0 % frente a 8,0 %) y se retiró en 2017. Scared Straight es el ejemplo clásico de iatrogenia. La evidencia sobre la psicopatía es mixta. Lo decisivo es la integridad terapéutica: la implementación importa tanto como el modelo.",
    v: [
      "Iatrogenia=Efecto perjudicial causado por la propia intervención",
      "Integridad terapéutica=Grado en que un programa se aplica tal como fue diseñado",
      "SOTP=Programa británico para agresores sexuales asociado a más reincidencia",
      "Mews, Di Bella y Purver=Evaluaron en 2017 a 2.562 tratados frente a 13.219 controles",
      "Scared Straight=Visitas de jóvenes a prisiones para asustarles, asociadas a más delito",
      "Rice, Harris y Cormier=Hallaron en 1992 más violencia en psicópatas tratados",
      "Error de selección=Asignar programas intensivos a casos de riesgo bajo",
      "Resultados evaluados=Criterio que valida un programa, más allá de su manual"
    ],
    g: [
      "En la evaluación del SOTP, el seguimiento medio fue de ___ años.|8,2|4,1|2,5",
      "Los controles del SOTP se emparejaron por puntuaciones de ___.|propensión|riesgo|psicopatía",
      "El estudio de Rice, Harris y Cormier se hizo en una comunidad ___.|terapéutica|educativa|abierta",
      "Un programa con objetivos no criminógenos mejora el ___ sin cambiar el riesgo.|bienestar|pronóstico|historial",
      "Sin continuidad tras la salida, se pierde lo aprendido en el nuevo ___.|entorno|grado|programa"
    ],
    tf: [
      "El SOTP fracasó porque su modelo era muy distinto al de otros programas eficaces.|F|Su modelo se parecía al de programas eficaces. Lo que muestra el caso es que la implementación importa tanto como el modelo.",
      "Entre las explicaciones del fracaso del SOTP está reunir en grupo a personas que podían normalizar sus distorsiones.|V",
      "El estudio de Rice, Harris y Cormier (1992) demostró que la psicopatía es intratable.|F|El programa era poco convencional y trabajos recientes son más optimistas. La evidencia es mixta y no justifica excluir a nadie.",
      "Los enfoques basados en la intimidación rinden peor que los terapéuticos.|V"
    ],
    q: [
      "Un joven de riesgo bajo, con trabajo y familia, entra en un programa intensivo junto a personas muy implicadas en el delito. ¿Qué riesgo corre?|Perder apoyos y ganar contactos antisociales|Recibir una dosis insuficiente|Que el programa no siga el modelo|Es un error de selección contrario al principio de riesgo: no aporta beneficio y puede ser contraproducente.",
      "En un centro, el programa se imparte con la mitad de las sesiones previstas a casos de riesgo alto. ¿Qué factor falla?|La dosis|La selección|El contenido|Menos horas de las previstas dejan una intervención insuficiente para casos de riesgo alto.",
      "¿Qué concluye con seguridad el caso del SOTP británico?|Que la implementación importa tanto como el modelo|Que la terapia cognitivo-conductual no funciona|Que no deben tratarse los delitos sexuales|Las causas exactas se discuten. Lo seguro es que el diseño, por sí solo, no garantiza el efecto.",
      "¿Qué implica la evidencia mixta sobre el tratamiento de la psicopatía?|Adaptar la intervención|Excluir del tratamiento|Aplicar solo la sanción|Justifica adaptar la intervención, no excluir a nadie de forma automática."
    ],
    inc: [
      "Sobre la integridad terapéutica|Un programa se valida por la calidad de su manual|La formación específica de los profesionales cuenta|Hay que registrar la asistencia y la fidelidad|Un programa no se valida por su manual, sino por sus resultados evaluados."
    ],
    seq: [],
    cls: [
      "Resultado del programa|Iatrogénico: SOTP británico; Scared Straight|Eficaz en promedio: Landenberger y Lipsey (2005); Schmucker y Lösel (2015)"
    ] },
  { t: "Diseñar una intervención basada en la evidencia: caso práctico",
    tip: "El caso de Óscar muestra cómo aplicar el RNR: se evalúa el riesgo y se ordenan sus necesidades según el Central Eight, se traducen en objetivos y recursos, se elige el cómo según su forma de aprender y se construye sobre sus fortalezas (Good Lives Model). Primero el consumo, después los programas cognitivos y de violencia, y la formación durante toda la condena. La pregunta final no es si completó los programas, sino si su riesgo ha bajado.",
    v: [
      "Central Eight=Ocho factores con los que se ordenan las necesidades del caso",
      "Riesgo moderado-alto=Nivel de Óscar que justifica una intervención intensiva",
      "PICOVI=Programa de la SGIP para conductas violentas",
      "Ensayo de conducta=Método prioritario para quien aprende mejor haciendo",
      "Trabajo motivacional=Paso previo útil ante poca asunción de responsabilidad",
      "Fortalezas=Recursos como el curso de soldadura o el apoyo de la hermana",
      "Plan de salida=Previsión de alojamiento, red y ocio prosociales al salir",
      "Evaluación del cambio=Medir antes y después consumo, actitudes e impulsividad"
    ],
    g: [
      "Óscar cumple en ___ grado una condena de tres años y medio.|segundo|primer|tercer",
      "Para su consumo de cocaína y alcohol, un recurso posible es el módulo terapéutico o la ___.|UTE|unidad de madres|sección abierta",
      "Como aprende mejor haciendo, conviene priorizar tareas ___.|prácticas|teóricas|escritas",
      "El PIT se ___ con Óscar y se le explica qué se informará y a quién.|pacta|impone|comunica",
      "Según la secuencia propuesta, lo primero que se aborda es el ___.|consumo|empleo|ocio"
    ],
    tf: [
      "En el caso de Óscar, su frase «si no hubiera ido con ellos, yo no habría hecho nada» indica poca asunción de responsabilidad.|V",
      "El éxito de la intervención se mide por el número de programas que Óscar complete.|F|La pregunta final es si su riesgo ha bajado, no si ha completado los programas.",
      "Desde el Good Lives Model, el curso de soldadura es un detalle secundario del plan.|F|Es la base de una identidad alternativa, junto con la relación con su hermana.",
      "Si las medidas antes y después no muestran cambios, se revisa el plan.|V"
    ],
    q: [
      "Óscar se aburre en las clases teóricas pero aprende rápido en el taller. ¿Qué principio orienta cómo intervenir?|La responsividad|La necesidad criminógena|El riesgo de reincidir|Ajustar el método a cómo aprende la persona es responsividad: ensayo de conducta y tareas prácticas.",
      "¿Qué recurso responde a la violencia de Óscar en los conflictos?|Un programa de conductas violentas|Un módulo terapéutico de drogas|La formación en soldadura|El objetivo es el control de la ira y la resolución de problemas, por ejemplo con el PICOVI.",
      "¿Por qué el consumo va primero en la secuencia del plan?|Porque condiciona todo lo demás|Porque es su factor estático|Porque es el delito principal|Primero el consumo, después los programas cognitivos y de violencia, y la formación a lo largo de la condena.",
      "¿Qué recurso aborda las amistades y el ocio antisociales de Óscar?|Deporte y plan de salida con su hermana|Formación en soldadura y trabajo|Programa grupal cognitivo-conductual|El objetivo es una red y un ocio prosociales. La soldadura responde al empleo inestable."
    ],
    inc: [
      "Sobre la intervención con Óscar|Su riesgo bajo aconseja una intervención mínima|Su participación en el tratamiento es voluntaria|Su hermana y el curso son una base para el cambio|Su riesgo es moderado-alto, de modo que el principio de riesgo justifica una intervención intensiva."
    ],
    seq: [
      "Pasos para diseñar la intervención|Evaluar el riesgo y las necesidades>Traducir las necesidades en objetivos y recursos>Elegir el cómo según la responsividad>Construir sobre sus fortalezas>Planificar la secuencia y la salida>Evaluar los cambios"
    ],
    cls: [] }
] },
{ n: 16, t: "Intervenir según el régimen y el colectivo", cap: 6, pir: "alta", mods: [
  { t: "Régimen cerrado: primer grado, FIES y módulos de respeto",
    tip: "El primer grado aplica el régimen cerrado (art. 10 LOGP, arts. 89–95 RP) a casos de peligrosidad extrema o inadaptación grave, y es excepcional: el 1,1 % de los clasificados en 2024. Su tratamiento es individual y busca la progresión. FIES no es un grado, sino una base de datos (art. 6.4 RP, RD 419/2011). Los módulos de respeto (Mansilla de las Mulas, 2001) organizan el régimen ordinario sobre un compromiso voluntario.",
    v: [
      "Régimen cerrado=Régimen del primer grado para peligrosidad extrema o inadaptación grave",
      "Departamentos especiales=Modalidad más restrictiva, para los casos de peligrosidad extrema",
      "Módulos de régimen cerrado=Modalidad para quienes muestran inadaptación grave",
      "FIES=Base de datos de internos de especial seguimiento, no un grado",
      "RD 419/2011=Norma que dio cobertura a FIES tras la anulación de su instrucción",
      "Reglas Mandela=Normas de la ONU que prohíben el aislamiento indefinido y el prolongado",
      "Módulo de respeto=Convivencia basada en el compromiso voluntario con normas",
      "Mansilla de las Mulas=Centro de León donde nacieron en 2001 los módulos de convivencia"
    ],
    g: [
      "A 31 de diciembre de 2024 había ___ personas penadas en primer grado en la AGE.|422|2.021|5.112",
      "El Juez de Vigilancia debe aprobar las sanciones de aislamiento de más de ___ días.|14|15|30",
      "Las Reglas Mandela consideran prolongado el aislamiento de más de ___ días consecutivos.|15|14|21",
      "Una sentencia del Tribunal ___ de 2009 anuló la instrucción que regulaba FIES.|Supremo|Constitucional|Europeo",
      "El tratamiento en primer grado es más ___ que grupal.|individual|familiar|comunitario"
    ],
    tf: [
      "FIES es un grado intermedio entre el primero y el segundo.|F|Es una trampa típica: FIES es una base de datos administrativa (art. 6.4 RP, RD 419/2011), no un grado.",
      "El régimen cerrado puede aplicarse también a preventivos en las mismas circunstancias.|V",
      "Los módulos de respeto son una modalidad del régimen cerrado.|F|Son una forma de organizar la vida en el régimen ordinario, basada en el compromiso voluntario del interno.",
      "La clasificación en primer grado se revisa periódicamente y no puede ser indefinida.|V"
    ],
    q: [
      "Un interno de un módulo de respeto incumple de forma reiterada las normas de convivencia. ¿Qué ocurre?|Vuelve a un módulo convencional|Pasa a los departamentos especiales|Se le clasifica en primer grado|Los módulos de respeto se basan en el compromiso voluntario. El incumplimiento reiterado supone volver a un módulo convencional.",
      "¿Qué fin tiene el tratamiento en primer grado?|Lograr la progresión de grado|Preparar la libertad condicional|Mantener el aislamiento|Se centra en la estabilización: atención individual, prevención del suicidio, control de impulsos y adaptación a normas.",
      "¿Qué artículo de la LOGP regula el régimen cerrado?|Art. 10 LOGP|Art. 38.2 LOGP|Art. 72.5 LOGP|El art. 10 LOGP, desarrollado en los arts. 89–95 RP.",
      "¿Qué derecho se conserva en el régimen cerrado, con las limitaciones de la seguridad?|La posibilidad de estudiar|Las salidas de fin de semana|Los permisos ordinarios|Se conservan derechos básicos como las comunicaciones, el acceso a la información o estudiar."
    ],
    inc: [
      "Sobre el régimen cerrado|Sus departamentos especiales atienden la inadaptación grave|Es una medida excepcional en la AGE|Su clasificación se revisa de forma periódica|Los departamentos especiales son para la peligrosidad extrema. La inadaptación grave corresponde a los módulos o centros de régimen cerrado."
    ],
    seq: [],
    cls: [
      "Forma de vida|Primer grado: peligrosidad o inadaptación; control externo e intenso; tratamiento individual|Módulo de respeto: compromiso voluntario; control del propio grupo; tratamiento grupal"
    ] },
  { t: "Régimen ordinario y abierto: segundo y tercer grado",
    tip: "El segundo grado corresponde al régimen ordinario y reúne al 80,8 % de los clasificados en la AGE, con la mayor parte de los programas. El tercer grado corresponde al régimen abierto (arts. 80–88 RP), basado en la confianza y la autorresponsabilidad, y no es libertad: la persona vuelve al centro para el control. En tercer grado lo central es consolidar y prevenir recaídas. La menor reincidencia asociada a la salida gradual refleja en parte un sesgo de selección.",
    v: [
      "Régimen ordinario=Régimen del segundo grado, organizado en módulos con formación y trabajo",
      "Régimen abierto=Régimen del tercer grado, de semilibertad y basado en la confianza",
      "Actividades prioritarias=Actúan sobre los factores del delito o sobre carencias básicas",
      "Actividades complementarias=Culturales, deportivas o de ocio para el desarrollo general",
      "CIS=Centro de Inserción Social donde se cumple el régimen abierto",
      "Tercer grado restringido=Modalidad del régimen abierto prevista en el art. 82 RP",
      "Período de seguridad=Requisito del art. 36.2 CP en algunas penas de más de cinco años",
      "Sesgo de selección=Quienes llegan al tercer grado ya eran quienes mejor evolucionaban"
    ],
    g: [
      "El control telemático en tercer grado se prevé en el art. ___ RP.|86.4|104.4|100.2",
      "El acceso al tercer grado exige haber satisfecho la responsabilidad civil (art. ___ LOGP).|72.5|47.2|38.2",
      "En 2024 hubo en la AGE 5.112 progresiones y ___ regresiones.|2.021|3.165|1.982",
      "Los permisos se regulan en el art. 47.2 LOGP y en el art. ___ RP.|154|112|82",
      "Según el CEJFE, quienes salen directamente desde primer grado reinciden en un ___.|57,9 %|18,1 %|32,0 %"
    ],
    tf: [
      "El tercer grado equivale a la libertad: la persona ya no vuelve al centro.|F|Es una trampa típica: es semilibertad, y la persona vuelve al centro para el control o se controla por medios telemáticos.",
      "Quien rechaza participar en las actividades no es sancionado, y se le clasifica por la observación y los informes técnicos.|V",
      "El tercer grado restringido se regula en el art. 86.4 RP.|F|Está en el art. 82 RP. El art. 86.4 RP prevé el control por medios telemáticos.",
      "Los enfermos muy graves pueden clasificarse en tercer grado según el art. 104.4 RP.|V"
    ],
    q: [
      "Una investigadora observa que quienes salen tras el tercer grado reinciden mucho menos que quienes salen desde primer grado. ¿Qué cautela debe aplicar?|Parte se debe a un sesgo de selección|El tercer grado causa toda la diferencia|Los datos son de un único centro|Quienes llegan al tercer grado ya evolucionaban mejor. Aun así, los datos apoyan una salida gradual.",
      "¿Qué porcentaje de los clasificados en la AGE estaba en tercer grado a finales de 2024?|18,1 %|80,8 %|1,1 %|El 80,8 % estaba en segundo grado y el 1,1 % en primer grado.",
      "¿Qué es lo central de la intervención en tercer grado?|Consolidar y prevenir recaídas|Lograr la estabilización|Aplicar programas intensivos|Lo central es consolidar lo aprendido en el entorno real: empleo, formación, familia y servicios comunitarios.",
      "El PRIA y la formación básica forman parte de las actividades…|prioritarias|complementarias|regimentales|Las prioritarias actúan sobre los factores del delito o sobre carencias básicas. Las complementarias son culturales o de ocio."
    ],
    inc: [
      "Sobre el tercer grado|Se cumple siempre en un módulo del centro ordinario|Se basa en la confianza y la autorresponsabilidad|Puede controlarse por medios telemáticos|Se cumple en CIS, secciones abiertas o unidades dependientes, y puede controlarse por medios telemáticos."
    ],
    seq: [
      "Función del tratamiento según el grado|Estabilización y progresión en primer grado>Necesidades criminógenas en segundo grado>Consolidación en la comunidad en tercer grado"
    ],
    cls: [
      "Grado|Segundo: régimen ordinario; módulos del centro; programas sobre necesidades criminógenas|Tercero: régimen abierto; CIS o unidad dependiente; consolidar empleo y redes de apoyo"
    ] },
  { t: "Mujeres, madres y salud mental en prisión",
    tip: "Las mujeres son en torno al 7 % de la población reclusa y tienen más victimización previa, más depresión y más cargas de cuidado. Las Reglas de Bangkok (2010) piden adaptar el sistema a sus necesidades. Las madres pueden convivir con sus hijos hasta los tres años (art. 38.2 LOGP). En salud mental predominan el consumo de sustancias y los trastornos de la personalidad, y la psicosis afecta a una minoría. Las prevalencias vitales y actuales no son comparables.",
    v: [
      "Reglas de Bangkok=Reglas de la ONU (2010) para el tratamiento de las mujeres presas",
      "Ser Mujer=Programa de la SGIP sobre la violencia sufrida y los factores de vulnerabilidad",
      "Unidad de madres=Espacio donde las madres presas conviven con sus hijos pequeños",
      "PRECA=Estudio de Vicens et al. (2011) con 707 varones de Cataluña, Madrid y Aragón",
      "Fazel y Seewald (2012)=Metaanálisis de 109 muestras sobre trastornos graves en prisión",
      "Prevalencia vital=Proporción que ha tenido el trastorno alguna vez en la vida",
      "Prevalencia actual=Proporción que presenta el trastorno en el momento del estudio",
      "PAIEM=Programa de Atención Integral a Enfermos Mentales de la SGIP (2009)"
    ],
    g: [
      "A 31 de diciembre de 2024 había en España ___ mujeres presas.|4.123|5.497|2.031",
      "La prevalencia actual de depresión mayor en mujeres presas es del ___.|14,1 %|10,2 %|3,9 %",
      "En el PRECA, el ___ había tenido algún trastorno mental a lo largo de la vida.|84,4 %|41,2 %|76,2 %",
      "Los hospitales psiquiátricos penitenciarios están en Alicante y ___.|Sevilla|Madrid|Valencia",
      "El PAIEM atendió a ___ personas en 2023.|1.996|2.031|4.123"
    ],
    tf: [
      "La mayoría de las personas presas tiene un trastorno mental grave, como la esquizofrenia.|F|Es un mito: la psicosis afecta al 3,6 % de los hombres presos. Lo mayoritario son el consumo y los trastornos de la personalidad.",
      "El 32,0 % de las mujeres clasificadas está en tercer grado, frente al 17,0 % de los hombres.|V",
      "La psicosis del 10,7 % del PRECA y el 3,6 % de Fazel y Seewald muestran que las cifras se contradicen.|F|No son comparables: el PRECA da prevalencia vital y Fazel y Seewald, actual.",
      "Como hay pocos módulos de mujeres, muchas cumplen lejos de su familia.|V"
    ],
    q: [
      "Una interna con un hijo de dos años pregunta si puede tenerlo con ella en prisión. ¿Qué dice la ley?|Sí, hasta que cumpla tres años|Sí, hasta que cumpla seis años|No, salvo en régimen abierto|El art. 38.2 LOGP permite la convivencia hasta los tres años, en unidades de madres internas o externas.",
      "Según Fazel y Seewald (2012), ¿cuál es la prevalencia actual de psicosis en hombres presos?|En torno al 3,6 %|En torno al 10,7 %|En torno al 41 %|El 10,7 % es la prevalencia vital de psicosis en el PRECA y el 41 % la de trastornos afectivos.",
      "¿Qué ejes articulan el PAIEM?|Atención, rehabilitación y continuidad|Detección, protección y revisión|Desintoxicación, deshabituación y salida|Atención clínica, rehabilitación psicosocial y continuidad del tratamiento tras la salida.",
      "¿Qué rasgo distingue el perfil de las mujeres presas del de los hombres?|Más victimización previa|Delitos más violentos|Menos depresión|Tienen más victimización previa, más depresión, más cargas de cuidado y, en general, delitos menos violentos."
    ],
    inc: [
      "Sobre la salud mental en prisión|La psicosis es el trastorno más frecuente|Lo mayoritario es el consumo de sustancias|Los trastornos de la personalidad son frecuentes|La psicosis afecta a una minoría, aunque superior a la población general. Lo mayoritario es el consumo de sustancias."
    ],
    seq: [],
    cls: [
      "Tipo de prevalencia|Vital (PRECA): sustancias 76,2 %; ansiedad 45,3 %; psicosis 10,7 %|Actual (Fazel y Seewald): psicosis 3,6 % en hombres; depresión 10,2 % en hombres; depresión 14,1 % en mujeres"
    ] },
  { t: "Penas largas y prisión permanente revisable",
    tip: "La prisión permanente revisable, introducida por la LO 1/2015 (arts. 36, 78 bis y 92 CP), es una pena indeterminada. La STC 169/2021 la declaró constitucional, condicionada a una revisión real y a una posibilidad efectiva de reinserción. Zamble y Porporino (1988) no hallaron un deterioro generalizado y progresivo en el encierro largo. Para intervenir se planifica por etapas, se protegen los vínculos y se ofrece autonomía.",
    v: [
      "Prisión permanente revisable=Pena indeterminada introducida en 2015, avalada con condiciones",
      "STC 169/2021=Sentencia que avaló la pena indeterminada con revisión y reinserción reales",
      "Zamble y Porporino (1988)=Estudio longitudinal sin deterioro generalizado en el encierro largo",
      "Dependencia institucional=Riesgo del encierro largo que se contrarresta con autonomía",
      "Planificación por etapas=Respuesta a la falta de horizonte con objetivos intermedios",
      "Art. 91 CP=Libertad condicional para mayores de 70 años y enfermos muy graves",
      "SPACE I 2025=Fuente que registra el aumento de presos mayores de 65 años",
      "Desfase con el exterior=Choque al salir por no haber hecho trámites ni manejado dinero"
    ],
    g: [
      "La prisión permanente revisable la introdujo la LO ___.|1/2015|1/1979|10/1995",
      "Sin posibilidad de reinserción, la pena chocaría con el art. ___ CE.|25.2|10.2|24.1",
      "La prohibición de penas inhumanas se recoge en el art. ___ CE.|15|25.2|17",
      "En Zamble y Porporino, el malestar era máximo al ___ y tendía a disminuir.|ingreso|salir|quinto año",
      "La evidencia sobre ___ no apoya que alargar las penas reduzca el delito.|disuasión|reincidencia|prisionización"
    ],
    tf: [
      "La STC 169/2021 declaró la prisión permanente revisable constitucional sin condiciones.|F|La declaró constitucional condicionada a una revisión real y a una posibilidad efectiva de reinserción.",
      "Según Zamble y Porporino (1988), la forma previa de afrontar los problemas predecía la adaptación.|V",
      "Zamble y Porporino hallaron un deterioro progresivo y generalizado en las penas largas.|F|No lo hallaron: el encierro largo no daña a todos por igual, aunque aleja a todos de la vida exterior.",
      "La mayoría de las personas mayores presas necesita sobre todo una atención adaptada dentro del centro.|V"
    ],
    q: [
      "Un hombre entró a los 30 años con una pena muy larga y saldrá con más de 50, sin haber manejado dinero ni hecho trámites digitales. ¿Qué reto ilustra?|El desfase con el exterior|La dependencia de la institución|La falta de horizonte temporal|Se responde con formación actualizada y salida progresiva con permisos y tercer grado.",
      "Un interno con una condena muy larga dice que no tiene sentido hacer nada. ¿Qué respuesta propone el temario?|Un proyecto personal valioso|Un módulo de régimen cerrado|Esperar a la revisión de la pena|Ante la pérdida de sentido, se construye un proyecto personal dentro de la condena, según el Good Lives Model.",
      "¿Qué artículos del CP regulan la prisión permanente revisable?|36, 78 bis y 92|80, 90 y 91|25, 36 y 72|Se introdujo con la LO 1/2015 y se regula en los arts. 36, 78 bis y 92 CP.",
      "¿Qué respuesta de intervención contrarresta la ruptura de vínculos?|Proteger los contactos familiares|Ofrecer espacios de autonomía|Planificar objetivos intermedios|Se protegen las comunicaciones y los contactos familiares desde el principio de la condena."
    ],
    inc: [
      "Sobre la intervención en penas largas|Conviene aplazar los contactos familiares a la salida|Se planifica por etapas con objetivos intermedios|Se ofrecen espacios de autonomía y responsabilidad|Las comunicaciones y los contactos familiares se protegen desde el principio de la condena."
    ],
    seq: [],
    cls: [
      "Pregunta sobre las penas largas|Efectos del encierro: prisionización; ruptura de vínculos; pérdida de habilidades|Cómo intervenir: planificar por etapas; proteger contactos familiares; salida progresiva"
    ] }
] }
);

SP.register(window.COURSE);
})({});
