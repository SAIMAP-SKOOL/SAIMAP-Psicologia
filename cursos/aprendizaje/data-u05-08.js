// SAIMAP Psicología · Aprendizaje · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "Modelos teóricos del condicionamiento clásico", cap: 2, pir: "alta", mods: [
  { t: "El modelo de Rescorla-Wagner",
    tip: "Rescorla y Wagner (1972) convirtieron en regla matemática la idea de que solo se aprende lo que sorprende: en cada ensayo, el cambio de fuerza asociativa depende del error de predicción (λ − ΣV), ponderado por α y β. De la regla se derivan la adquisición, la extinción, el bloqueo, el ensombrecimiento, la sobreexpectativa y la inhibición condicionada. No explica la inhibición latente, la extinción de un inhibidor, la recuperación espontánea, la renovación ni la revaluación retrospectiva.",
    v: [
      "Error de predicción=Diferencia entre el EI que ocurre y el que anuncian los estímulos presentes",
      "Fuerza asociativa (V)=Grado en que un EC predice el EI. Si es negativa, el EC es un inhibidor",
      "Parámetro α=Saliencia del EC, que fija la velocidad con que se aprende sobre él",
      "Parámetro β=Valor ligado al EI que también influye en la velocidad de aprendizaje",
      "Lambda (λ)=Máximo condicionamiento que puede sostener el EI, nulo si no hay EI",
      "ΣV=Suma de las fuerzas asociativas de todos los estímulos presentes en el ensayo",
      "Sobreexpectativa=Pérdida de fuerza de dos EC entrenados por separado al presentarse juntos con el EI",
      "Regla delta=Regla de Widrow-Hoff del conexionismo, formalmente equivalente al modelo"
    ],
    g: [
      "Al inicio de la adquisición ΣV vale 0, el error es grande y V crece ___.|deprisa|despacio|linealmente",
      "En los ensayos de extinción, λ vale ___ y el error de predicción es negativo.|0|1|ΣV",
      "En un compuesto, el estímulo con mayor ___ se queda con la mayor parte de λ.|saliencia|latencia|contingencia",
      "El error de predicción tiene un correlato en la actividad de las neuronas ___.|dopaminérgicas|serotoninérgicas|colinérgicas",
      "Que presentar un inhibidor solo no le quite su capacidad inhibitoria lo mostraron Zimmer-Hart y ___ (1974).|Rescorla|Wagner|Kamin"
    ],
    tf: [
      "Según el modelo, en la sobreexpectativa los dos EC pierden fuerza aunque sigan emparejándose con el EI.|V",
      "El modelo de Rescorla-Wagner explica la inhibición latente porque el EC preexpuesto adquiere un V negativo.|F|Con V y λ nulos el error es 0 y nada cambia. La inhibición latente queda fuera del modelo.",
      "El modelo trata el contexto como un estímulo más, que puede acumular fuerza y bloquear al EC.|V",
      "Según Rescorla-Wagner, la extinción deja intacta la asociación original y añade un aprendizaje nuevo.|F|Para el modelo, extinguir es desaprender: V baja. Por eso no explica la recuperación espontánea ni la renovación."
    ],
    q: [
      "Una rata aprende que un tono predice una descarga. Después recibe el tono junto con una luz, seguidos de la misma descarga. Según Rescorla-Wagner, ¿qué aprende la luz?|Casi nada, porque no queda error|Mucho, por ser un estímulo nuevo|Un valor negativo, como inhibidor|En los ensayos con el compuesto ΣV ya está cerca de λ, no hay error de predicción y la luz apenas gana fuerza: es el bloqueo.",
      "En la ecuación de Rescorla-Wagner, ¿qué representa el término λ − ΣV?|El error de predicción|La saliencia del EC|El máximo que sostiene el EI|Es la diferencia entre lo que ocurre y lo anunciado. α es la saliencia del EC, y λ, el máximo que sostiene el EI.",
      "A predice el EI, y el compuesto AX se presenta sin EI. ¿Qué predice el modelo para X?|V negativo, como inhibidor|V positivo, como excitador|V nulo, sin ningún cambio|El error negativo empuja a X por debajo de cero, y un V negativo define a un inhibidor condicionado.",
      "¿Cuál de estos fenómenos queda fuera del modelo de Rescorla-Wagner?|La renovación|La sobreexpectativa|El ensombrecimiento|Si la extinción fuera desaprender, la RC no volvería al cambiar de contexto. Los otros dos se derivan de la regla."
    ],
    inc: [
      "Sobre el modelo de Rescorla-Wagner|Actualiza también estímulos ausentes|Deriva la sobreexpectativa sin añadidos|Trata el contexto como un estímulo más|Solo actualiza los estímulos presentes, así que no explica la revaluación retrospectiva (desbloqueo hacia atrás)."
    ],
    seq: [],
    cls: [
      "Fenómeno según Rescorla-Wagner|Lo explica: adquisición; bloqueo; ensombrecimiento; sobreexpectativa; inhibición condicionada|No lo explica: inhibición latente; recuperación espontánea; renovación; extinción de un inhibidor"
    ] },
  { t: "Modelos atencionales: Mackintosh y Pearce-Hall",
    tip: "Los modelos atencionales convierten en variable la saliencia α, que Rescorla y Wagner trataban como fija. Para Mackintosh (1975), la atención aumenta para el mejor predictor del EI y disminuye para los peores. Para Pearce y Hall (1980), aumenta para los estímulos de consecuencias inciertas y cae cuando ya se sabe lo que anuncian. Ambos tienen apoyo, y una forma de reconciliarlos es suponer dos tipos de atención.",
    v: [
      "Modelo de Mackintosh=La atención crece para el mejor predictor del EI y baja para los peores (1975)",
      "Modelo de Pearce-Hall=La atención crece para los estímulos de consecuencias inciertas (1980)",
      "Saliencia variable=Supuesto atencional de que α cambia con la experiencia",
      "Saliencia fija=Supuesto de Rescorla y Wagner sobre α que los modelos atencionales rechazan",
      "Desbloqueo=X aprende si en la fase AX se cambia algo del EI, como su intensidad",
      "Primer ensayo del compuesto=Momento en que, según Mackintosh, X todavía puede aprender algo",
      "Dos tipos de atención=Propuesta que combina explotar las claves útiles y explorar las inciertas",
      "Inhibición latente=Retraso del condicionamiento de un EC preexpuesto, explicado por pérdida de atención"
    ],
    g: [
      "Según Mackintosh, la atención a un EC aumenta si es el ___ predictor disponible del EI.|mejor|peor|único",
      "Según Pearce y Hall, un estímulo que ya predice bien sigue provocando la RC, pero deja de recibir ___.|atención|refuerzo|respuesta",
      "En el desbloqueo se cambia en la fase AX algo del EI, por ejemplo su ___.|intensidad|saliencia|contigüidad",
      "La explicación más directa de la inhibición latente es la del modelo de ___.|Pearce-Hall|Mackintosh|Rescorla-Wagner",
      "Mackintosh publicó su modelo atencional en ___.|1975|1980|1972"
    ],
    tf: [
      "Para Pearce y Hall, la atención aumenta para el estímulo que mejor predice el EI.|F|Esa es la regla de Mackintosh. Para Pearce y Hall, la atención aumenta cuando las consecuencias son inciertas.",
      "Según Mackintosh, en el primer ensayo del compuesto AX el estímulo X todavía puede aprender algo.|V",
      "En los modelos atencionales cambian con la experiencia tanto V como α.|V",
      "Los modelos atencionales sitúan el error que importa solo en el procesamiento del EI.|F|Eso corresponde a Rescorla-Wagner. Los modelos atencionales lo sitúan en la atención al EC."
    ],
    q: [
      "El tono del primer correo del día anuncia siempre bien el humor de la jefa de Marta. Según Pearce-Hall, ¿adónde irá su atención?|A señales aún inciertas, como la hora|Al tono del primer correo, el mejor predictor|A todas las señales por igual|Mientras el correo acierte, dejará de vigilarse. Mackintosh predeciría lo contrario: atender sobre todo al mejor predictor.",
      "¿Cómo explica Mackintosh el bloqueo?|X pierde atención tras el primer ensayo AX|X no genera error por estar el EI predicho|X compara su fuerza con la de A en la prueba|A ya predice el EI, X no añade nada y su α baja. La falta de error es la explicación de Rescorla-Wagner.",
      "¿Qué fenómeno ilustra con más claridad que, para Pearce y Hall, la sorpresa aumenta la atención al EC?|El desbloqueo|La sobreexpectativa|El ensombrecimiento|Al cambiar la intensidad del EI en la fase AX reaparece la sorpresa, la atención a X sube y X aprende.",
      "¿Qué parámetro de Rescorla-Wagner convierten en variable los modelos atencionales?|α, la saliencia del EC|β, el parámetro del EI|λ, el máximo del EI|Rescorla y Wagner trataron α como fijo. Los modelos atencionales proponen que cambia porque el organismo aprende a qué atender."
    ],
    inc: [
      "Sobre los modelos atencionales|Mackintosh no puede explicar la inhibición latente|Pearce-Hall explica el bloqueo por falta de sorpresa|Ambos modelos tienen apoyo experimental|Mackintosh también la explica: un EC sin consecuencias no predice mejor que el contexto y pierde atención."
    ],
    seq: [],
    cls: [
      "Regla de atención|Mackintosh (1975): mejor predictor del EI; atención como inversión|Pearce y Hall (1980): consecuencias inciertas; sorpresa; desbloqueo"
    ] },
  { t: "SOP de Wagner e hipótesis del comparador",
    tip: "El SOP de Wagner (1981) describe en tiempo real los estados de los elementos de cada nodo: inactivo, A1 y A2. Hay asociación excitatoria cuando EC y EI están a la vez en A1, y lo esperado, que ya está en parte en A2, se procesa menos. La hipótesis del comparador (Miller y Matzel, 1988) sitúa la competición entre claves en la ejecución: el estímulo bloqueado aprendió, pero no lo muestra en la prueba.",
    v: [
      "SOP=Sometimes opponent process, modelo de Wagner (1981) en tiempo real",
      "Nodo de memoria=Representación de un estímulo compuesta por muchos elementos",
      "Estado A1=Procesamiento pleno y focal, solo con el estímulo realmente presente",
      "Estado A2=Procesamiento periférico, como un recuerdo, al decaer de A1 o al ser evocado",
      "Estado inactivo=Reposo: el estímulo no se está procesando",
      "Hipótesis del comparador=La RC depende de comparar el EC con otras claves asociadas al EI en la prueba",
      "Estímulo comparador=Otro elemento del compuesto o contexto presente durante el entrenamiento",
      "Miller y Matzel (1988)=Autores que situaron el déficit del estímulo bloqueado en la ejecución"
    ],
    g: [
      "En SOP, se forma una asociación excitatoria cuando el EC y el EI están a la vez en ___.|A1|A2|inactivo",
      "Si el EC está en A1 mientras el EI está en A2, se forma una asociación ___.|inhibitoria|excitatoria|de segundo orden",
      "Un estímulo presentado hace poco sigue en A2 y provoca menos respuesta, lo que SOP explica como habituación a ___ plazo.|corto|largo|medio",
      "Para SOP, el EC provoca la respuesta que corresponde al estado ___ del EI.|A2|A1|inactivo",
      "Según el comparador, extinguir el estímulo bloqueador debería ___ la respuesta al estímulo bloqueado.|recuperar|reducir|invertir"
    ],
    tf: [
      "Según SOP, un estímulo esperado se procesa más porque ya está activado en A2.|F|Se procesa menos: al estar en parte en A2, menos elementos pueden pasar a A1 cuando se presenta.",
      "SOP explica la inhibición latente porque el contexto anticipa el EC preexpuesto y lo lleva a A2.|V",
      "La hipótesis del comparador sostiene que el estímulo bloqueado aprende poco durante la adquisición.|F|Sostiene que sí aprende y que el déficit está en la ejecución, al compararlo en la prueba con otras claves.",
      "El proceso es «a veces» oponente porque la RC será opuesta a la RI cuando la respuesta A2 sea contraria a la A1.|V"
    ],
    q: [
      "Tras un procedimiento de bloqueo, un equipo extingue el estímulo bloqueador A y, sin más entrenamiento, la respuesta a X aumenta. ¿Qué enfoque lo predice?|La hipótesis del comparador|El modelo de Rescorla-Wagner|El modelo de Mackintosh|Al debilitar el comparador, la asociación que X sí había aprendido se expresa. Los modelos centrados en la adquisición no lo predicen.",
      "¿Cómo explica SOP el bloqueo?|A lleva el EI a A2 y no alcanza A1|X no recibe atención tras el primer ensayo|X se compara con A en el momento de la prueba|El EI ya está anticipado por A, no llega lo bastante a A1 y X no se asocia con él.",
      "En SOP, ¿qué estado alcanza solo un estímulo que se presenta realmente?|A1|A2|Inactivo|La activación primaria exige el estímulo físico. A2 se alcanza al decaer desde A1 o cuando otro estímulo lo evoca.",
      "¿En qué se diferencia la hipótesis del comparador de Rescorla-Wagner, Mackintosh y SOP?|Sitúa el déficit en la ejecución|Sitúa el déficit en el aprendizaje|Niega que exista competición entre claves|Los otros tres dicen que el estímulo bloqueado aprendió poco. El comparador, que aprendió, pero no lo muestra."
    ],
    inc: [
      "Sobre el modelo SOP|Los elementos pueden volver directamente de A2 a A1|La habituación a corto plazo se explica por el estado A2|Lo esperado se procesa menos que lo inesperado|De A2 se pasa al estado inactivo. No es posible volver directamente de A2 a A1."
    ],
    seq: [
      "Recorrido de un elemento en SOP al presentar un estímulo|Estado inactivo>Activación primaria (A1)>Activación secundaria (A2)>Vuelta al estado inactivo"
    ],
    cls: [
      "Dónde sitúa el déficit del estímulo bloqueado|Aprendizaje: Rescorla-Wagner; Mackintosh; Pearce-Hall; SOP|Ejecución: hipótesis del comparador"
    ] },
  { t: "Qué se asocia y qué es la RC",
    tip: "La RC no es siempre igual a la RI: puede parecerse a ella (sustitución del estímulo, Pavlov), prepararla (respuesta preparatoria, Kimble) o ser su contraria (respuesta compensatoria, Siegel). Para saber qué se asocia se usa la devaluación del EI: si la RC baja, el EC activaba una representación del EI, una asociación E-E, lo habitual en el primer orden. En el segundo orden, la asociación es más próxima a la E-R.",
    v: [
      "Sustitución del estímulo=Teoría de Pavlov: el EC activa los mismos centros nerviosos que el EI",
      "Respuesta preparatoria=La RC prepara al organismo para el EI que se avecina (Kimble, 1961)",
      "Respuesta compensatoria=RC opuesta a la RI que contrarresta su efecto (Siegel, 1975)",
      "Asociación E-E=El EC queda conectado con una representación del EI",
      "Asociación E-R=El EC queda conectado directamente con la respuesta",
      "Devaluación del EI=Reducir el valor del EI tras condicionar, en ausencia del EC",
      "Saciedad=Uno de los modos de devaluar el EI, junto con la habituación o el malestar",
      "Condicionamiento palpebral=Preparación en que el párpado se cierra justo antes del soplo de aire"
    ],
    g: [
      "El cierre del párpado justo antes del soplo de aire apoya la teoría de la respuesta ___.|preparatoria|compensatoria|sustitutiva",
      "La sustitución del estímulo encaja bien con la ___, en la que RC y RI se parecen mucho.|salivación|tolerancia|analgesia",
      "En el condicionamiento de ___ orden predomina la asociación E-E.|primer|segundo|tercer",
      "Una vez establecido el segundo orden, si se extingue el EC1 la respuesta al EC2 suele ___.|mantenerse|desaparecer|invertirse",
      "Tras empacharse de churros, el olor de la churrería deja de apetecer: el olor evocaba una ___ de los churros.|representación|consecuencia|evaluación"
    ],
    tf: [
      "La conclusión de consenso es que la RC es siempre una copia más débil de la RI.|F|La RC puede parecerse a la RI, ser una parte de ella, prepararla o ser su contraria.",
      "En la prueba de devaluación, el valor del EI se reduce en ausencia del EC.|V",
      "Si la RC disminuye tras devaluar el EI, el EC dispara la respuesta sin pasar por el EI.|F|Indica lo contrario: el EC activa una representación del EI cuyo valor actual importa, una asociación E-E.",
      "La idea de respuesta compensatoria es la base de la tolerancia condicionada a las drogas.|V"
    ],
    q: [
      "Se condiciona un tono con comida y, después, se sacia al animal fuera de la situación de condicionamiento. La RC ante el tono disminuye. ¿Qué indica?|Una asociación E-E|Una asociación E-R|Una asociación de segundo orden|El tono evoca una representación de la comida cuyo valor actual importa. Con una asociación E-R, la RC no cambiaría.",
      "¿Qué teoría sobre la RC deja de servir como explicación general ante el hallazgo de RC opuestas a la RI?|La sustitución del estímulo|La respuesta preparatoria|La respuesta compensatoria|Si la RC puede ser contraria a la RI, el EC no «sustituye» al EI. Por eso la sustitución no sirve como explicación general.",
      "¿Con qué autor se asocia la teoría de la respuesta preparatoria?|Kimble|Siegel|Pavlov|Kimble (1961) propuso que la RC prepara al organismo para el EI, como el cierre del párpado antes del soplo de aire.",
      "En el condicionamiento de segundo orden, ¿qué tipo de asociación parece formar el EC2?|Más próxima a la E-R|Más próxima a la E-E|Más bien inhibitoria|Extinguir el EC1 no suele afectar a la respuesta al EC2, que la provoca de forma directa."
    ],
    inc: [
      "Sobre la naturaleza de la RC|La RC reproduce siempre la RI|La RC puede ser contraria a la RI|La RC puede preparar para el EI|La RC no es siempre igual a la RI. La salivación encaja con la sustitución del estímulo, pero no es la norma general."
    ],
    seq: [],
    cls: [
      "Teoría sobre la RC|Sustitución del estímulo: Pavlov; RC parecida a la RI; salivación|Respuesta preparatoria: Kimble; cierre del párpado antes del soplo|Respuesta compensatoria: Siegel; RC opuesta a la RI; tolerancia"
    ] }
] },
{ n: 6, t: "Restricciones biológicas y condicionamiento en la vida real", cap: 2, pir: "alta", mods: [
  { t: "Aversión condicionada al sabor y relevancia",
    tip: "La aversión condicionada al sabor puede adquirirse en un solo ensayo, tolera demoras de horas y es muy selectiva. Garcia y Koelling (1966) hallaron un cruce: el sabor se asociaba con el malestar, y la luz y el ruido, con la descarga. Como los dos grupos bebieron el mismo compuesto, el resultado se debe a la combinación EC-EI (relevancia), no a la saliencia. Fue el fenómeno que más contribuyó a desmontar la equipotencialidad.",
    v: [
      "Equipotencialidad=Supuesto, hoy rechazado, de que cualquier EC se asocia igual de fácil con cualquier EI",
      "Aversión al sabor=Rechazo de un sabor seguido de malestar, posible en un ensayo y con horas de demora",
      "Relevancia=Mayor facilidad para asociar ciertos EC con ciertos EI (belongingness)",
      "Agua brillante y ruidosa=Compuesto de sabor, luz y clic que se presentaba al lamer el bebedero",
      "Cloruro de litio=EI que producía malestar, como la radiación X, en Garcia y Koelling",
      "Chivo expiatorio=Sabor novedoso antes de la quimioterapia para que la aversión recaiga en él",
      "Náuseas anticipatorias=Reacción ante las claves del hospital en pacientes de quimioterapia",
      "Garcia y Koelling (1966)=Experimento del cruce entre tipo de EC y tipo de EI en ratas"
    ],
    g: [
      "En Garcia y Koelling, las ratas que sufrieron malestar evitaron sobre todo el agua ___.|con sabor|con luz|con ruido",
      "La aversión al sabor tolera demoras de ___ entre el sabor y el malestar.|horas|segundos|semanas",
      "Para una rata, que es ___, lo que come es la causa más probable de un malestar digestivo.|omnívora|herbívora|carnívora",
      "La aversión al sabor aparece aunque la persona ___ que la comida no causó el malestar.|sepa|ignore|olvide",
      "En quimioterapia se propone ofrecer un sabor ___ y poco importante antes de cada sesión.|novedoso|familiar|habitual"
    ],
    tf: [
      "La diferencia entre grupos en Garcia y Koelling se debía a que el sabor era más saliente que la luz y el ruido.|F|Ambos grupos bebieron el mismo compuesto. La diferencia se debe a la combinación EC-EI, no a la saliencia.",
      "La aversión al sabor puede aparecer aunque la persona sepa que el malestar se debió a una gastroenteritis.|V",
      "En la aversión al sabor, como en el parpadeo, unos pocos segundos de intervalo ya dificultan el condicionamiento.|F|La aversión al sabor tolera demoras de horas. Los intervalos de segundos son críticos en el parpadeo.",
      "Lo que se aprende depende de la historia evolutiva de la especie y no solo de la relación temporal entre estímulos.|V"
    ],
    q: [
      "Tras una gastroenteritis, Pablo rechaza la paella que comió esa noche, aunque sabe que el virus no tuvo nada que ver. ¿Qué explica mejor su rechazo?|Una aversión al sabor por relevancia|Una creencia causal sobre la paella|Una RC compensatoria al malestar|El aprendizaje sabor-malestar no requiere creer en la relación causal y aparece aunque la persona conozca la causa real.",
      "¿Qué EI recibía el grupo de malestar en Garcia y Koelling?|Radiación o cloruro de litio|Descargas eléctricas en las patas|Una inyección de ciclofosfamida|Un grupo recibía radiación X o cloruro de litio, y el otro, descargas. La ciclofosfamida es del estudio de Ader y Cohen.",
      "La aversión al sabor fue el fenómeno que más contribuyó a desmontar un supuesto. ¿Cuál?|La equipotencialidad|La contingencia|La generalización|Mostró que no cualquier EC se asocia igual de fácil con cualquier EI.",
      "Según la relevancia, ¿qué combinación se aprende con más facilidad en la rata?|Sabor y malestar|Sabor y descarga|Luz y malestar|Sabor y malestar encajan entre sí, igual que luz y ruido con la descarga. Las combinaciones cruzadas apenas se aprendieron."
    ],
    inc: [
      "Sobre la aversión condicionada al sabor|Requiere muchos ensayos|Puede adquirirse en un solo ensayo|Muestra una selectividad muy marcada|Puede bastar un único ensayo. Los muchos ensayos caracterizan a preparaciones como la salivación o el parpadeo."
    ],
    seq: [
      "Diseño de Garcia y Koelling (1966)|Beber agua con sabor, luz y clic>Recibir malestar o descarga según el grupo>Probar por separado el sabor y el estímulo audiovisual>Comparar cuánto se evita cada tipo de agua"
    ],
    cls: [
      "Rasgo|Aversión al sabor: un ensayo; demoras de horas; selectividad muy marcada|Preparaciones clásicas: muchos ensayos; segundos o menos; selectividad menos marcada"
    ] },
  { t: "Preparación biológica y fobias",
    tip: "Seligman (1970) generalizó la relevancia en un continuo de preparación: asociaciones preparadas, no preparadas y contrapreparadas, que dependen de la especie. Lo aplicó a las fobias, mucho más frecuentes ante amenazas evolutivas que ante enchufes. Öhman y Mineka (2001) hallaron que esos miedos se adquieren con más facilidad y, en algunos estudios, se extinguen peor. Preparado no significa innato, y el concepto se critica por circularidad.",
    v: [
      "Preparación=Continuo de facilidad con que una especie aprende una asociación (Seligman, 1970)",
      "Asociación preparada=Se aprende muy deprisa, a veces en un solo ensayo",
      "No preparada=Se aprende de forma gradual, con muchos ensayos, como tono y comida",
      "Contrapreparada=Se aprende con gran dificultad o no se aprende, como sabor y descarga en la rata",
      "Fobia preparada=Miedo a estímulos evolutivamente relevantes que se condiciona con especial facilidad",
      "Öhman y Mineka (2001)=Estudiaron en laboratorio el miedo condicionado a serpientes y arañas",
      "Circularidad=Llamar preparado a lo que se condiciona fácil y usarlo para explicar esa facilidad",
      "Equipotencialidad fuerte=Idea, considerada falsa, de que todas las asociaciones se aprenden igual"
    ],
    g: [
      "Que una rata aprenda con gran dificultad a asociar sabor y descarga es una asociación ___.|contrapreparada|no preparada|preparada",
      "Las aves que buscan comida guiándose por la vista asocian con el malestar más fácilmente el ___ del alimento.|color|sabor|olor",
      "Son muy raras las fobias a ___, aunque causen más daños en la vida moderna.|enchufes|serpientes|alturas",
      "Lo preparado no es el miedo en sí, sino la ___ para aprenderlo.|facilidad|necesidad|ocasión",
      "Junto a la aversión al sabor, la deriva ___ del operante muestra que la equipotencialidad fuerte es falsa.|instintiva|conductual|genética"
    ],
    tf: [
      "Según Seligman, las fobias preparadas son miedos innatos que no requieren aprendizaje.|F|Lo preparado es la facilidad para aprender el miedo, no el miedo en sí. Confundir preparado con innato es una trampa típica.",
      "Una misma asociación puede estar preparada para una especie y no para otra.|V",
      "Todos los estudios con personas muestran que los miedos a serpientes y arañas se extinguen peor que otros.|F|La peor extinción aparece solo en algunos estudios, y el apoyo depende de la medida y del procedimiento.",
      "Además del condicionamiento directo, el miedo puede adquirirse por observación e información.|V"
    ],
    q: [
      "Ana recibió una pequeña descarga al enchufar un cargador y solo tuvo cuidado unos días. Su amigo vio una serpiente en una excursión, sin que le pasara nada, y desarrolló un miedo intenso. ¿Qué lo explica mejor?|La serpiente es un estímulo más preparado|La descarga fue una experiencia más leve|El miedo a las serpientes es innato|La experiencia aversiva fue mayor con el enchufe, pero la serpiente es una amenaza evolutiva preparada para asociarse con el miedo.",
      "¿Por qué se acusa de circular al concepto de preparación?|Define y explica con el mismo dato|Se basa en un solo experimento|Confunde lo preparado con lo innato|Si un estímulo es preparado porque se condiciona fácil, la preparación no puede explicar esa facilidad. Hacen falta criterios independientes.",
      "¿Qué criterio independiente se propone para evitar esa circularidad?|La relevancia evolutiva de la amenaza|La rapidez con que se adquiere el miedo|La intensidad de la experiencia aversiva|Se propone apoyarse en la relevancia evolutiva o en la comparación entre especies, no en la propia facilidad de condicionar.",
      "¿Qué patrón de las fobias apoya la idea de preparación?|No siguen la frecuencia de los accidentes|Son proporcionales al daño sufrido|Aparecen sobre todo ante objetos modernos|Son frecuentes ante serpientes, arañas o alturas y raras ante enchufes o martillos, aunque estos causen más daños hoy."
    ],
    inc: [
      "Sobre la preparación biológica|Es igual en todas las especies|Seligman la describió como un continuo|Las fobias a alturas son frecuentes|Depende de la especie: las aves que se guían por la vista asocian el color con el malestar más fácilmente que el sabor."
    ],
    seq: [],
    cls: [
      "Grado de preparación en la rata|Preparado: sabor y malestar; a veces un solo ensayo|No preparado: tono y comida; muchos ensayos|Contrapreparado: sabor y descarga; gran dificultad"
    ] },
  { t: "Tolerancia condicionada a las drogas",
    tip: "Siegel (1975) mostró que parte de la tolerancia es aprendida: las claves del consumo actúan como EC y llegan a provocar una RC compensatoria, opuesta al efecto de la droga. El efecto neto es la suma de ambas fuerzas, así que la tolerancia es específica del contexto. La misma dosis en un lugar nuevo no se compensa, lo que explica algunas sobredosis (Siegel et al., 1982). Este mecanismo se suma a los farmacológicos.",
    v: [
      "Tolerancia=Disminución del efecto de una droga con el consumo repetido",
      "Tolerancia condicionada=Menor efecto de una droga por RC compensatorias ante las claves del contexto",
      "RC compensatoria=Reacción anticipatoria y opuesta al efecto del fármaco",
      "Claves del contexto=Lugar, jeringuilla, ritual y personas que actúan como EC del consumo",
      "Siegel et al. (1982)=Mayor mortalidad con heroína en ratas tolerantes en un contexto nuevo",
      "Efecto neto=Suma del efecto del fármaco y de la RC compensatoria",
      "Extinción de la tolerancia=Reducción al presentar las claves del consumo sin la droga",
      "Proceso b=Proceso oponente de Solomon y Corbit que se fortalece con la repetición"
    ],
    g: [
      "Si una droga produce analgesia, la RC compensatoria ___ la sensibilidad al dolor.|aumenta|reduce|mantiene",
      "Si una droga produce hipotermia, la RC compensatoria ___ la temperatura.|eleva|baja|estabiliza",
      "Siegel et al. (1982) comprobaron el papel del contexto con ___ en ratas.|heroína|morfina|alcohol",
      "En el modelo de Siegel, el proceso compensatorio lo provocan claves ___.|asociadas|nuevas|innatas",
      "Si las claves del consumo provocan la RC sin que llegue la droga, aparecen reacciones parecidas a la ___.|abstinencia|intoxicación|sobredosis"
    ],
    tf: [
      "En la tolerancia condicionada, la RC se parece al efecto de la droga y lo potencia.|F|La RC es opuesta al efecto de la droga y lo contrarresta. Creer que se parece es una trampa típica.",
      "La tolerancia condicionada sustituye a las explicaciones farmacológicas de la tolerancia.|F|No las sustituye, sino que se suma a mecanismos como las adaptaciones de los receptores o del metabolismo.",
      "Según este modelo, volver al barrio o al grupo de consumo es un factor de riesgo de recaída.|V",
      "En animales se ha observado que la tolerancia se extingue presentando las claves sin la droga.|V"
    ],
    q: [
      "Un consumidor habitual de heroína se inyecta su dosis de siempre en un piso desconocido y sufre una sobredosis. Según Siegel, ¿por qué?|Faltan las claves de la RC compensatoria|El estrés del lugar potencia el fármaco|El fármaco se absorbe más rápido allí|Sin las claves habituales no aparece la compensación, y el organismo recibe el efecto completo del fármaco.",
      "¿En qué se diferencia el modelo de Siegel de la teoría de Solomon y Corbit?|En Siegel, lo provocan claves asociadas|En Siegel, el proceso es innato|En Siegel, el proceso b crece con la repetición|En Siegel la compensación la provocan claves asociadas. En Solomon y Corbit, el proceso b se fortalece con la repetición del estímulo.",
      "Según el modelo, ¿qué papel tienen la jeringuilla y el ritual de preparación?|Actúan como EC|Actúan como EI|Actúan como RC|Las claves del consumo son el EC, el efecto de la droga es el EI, y las reacciones compensatorias, la RC.",
      "¿Qué significa que la tolerancia sea específica del contexto?|Es menor fuera del lugar habitual|Es mayor en un lugar nuevo|Solo depende de los receptores|La RC compensatoria aparece ante las claves habituales. Fuera de ellas, el efecto neto del fármaco es mayor."
    ],
    inc: [
      "Sobre la tolerancia condicionada de Siegel|El efecto observado es solo el del fármaco|Cada consumo funciona como un ensayo de condicionamiento|La RC es anticipatoria y opuesta al fármaco|El efecto observado es la suma del efecto del fármaco y de la RC compensatoria."
    ],
    seq: [
      "Desarrollo de la tolerancia condicionada|Las claves acompañan a cada consumo>Las claves quedan asociadas al efecto de la droga>Las claves provocan una RC compensatoria>El efecto neto de la dosis disminuye"
    ],
    cls: [
      "Elemento del modelo de Siegel|EC: lugar; jeringuilla; ritual de preparación|EI: efecto de la droga|RC: reacción compensatoria; opuesta al fármaco"
    ] },
  { t: "Condicionamiento evaluativo e inmunitario",
    tip: "El condicionamiento evaluativo cambia la valencia de un estímulo neutro al emparejarlo con estímulos agradables o desagradables, como busca la publicidad. Es relativamente resistente a la extinción, y se debate si requiere consciencia de la contingencia. Ader y Cohen (1975) mostraron inmunosupresión condicionada al emparejar sacarina con ciclofosfamida. Fue el origen de la psiconeuroinmunología, y sus aplicaciones clínicas siguen en investigación.",
    v: [
      "Condicionamiento evaluativo=Cambio de agrado de un estímulo neutro por emparejarlo con otros agradables o no",
      "Valencia=Agrado o desagrado que provoca un estímulo",
      "Inmunosupresión condicionada=Supresión inmunitaria provocada por un EC asociado a un fármaco",
      "Ader y Cohen (1975)=Demostraron que las respuestas inmunitarias pueden condicionarse",
      "Sacarina=EC gustativo del estudio de Ader y Cohen",
      "Ciclofosfamida=Fármaco que produce malestar y suprime la respuesta inmunitaria",
      "Psiconeuroinmunología=Campo nacido de mostrar que el sistema inmunitario es sensible al aprendizaje",
      "Efecto placebo=Parte del efecto de un tratamiento producida por las claves asociadas a él"
    ],
    g: [
      "Asociar una marca con música alegre para que resulte agradable es condicionamiento ___.|evaluativo|inmunitario|de huella",
      "El condicionamiento evaluativo se mide con valoraciones de agrado y medidas ___.|implícitas|fisiológicas|motoras",
      "El objetivo inicial de Ader y Cohen era estudiar una ___ al sabor.|aversión|preferencia|habituación",
      "El hallazgo mostró que el sistema inmunitario, que se consideraba ___, se comunica con el sistema nervioso.|autónomo|innato|periférico",
      "Que la marca deje de aparecer con música alegre no significa que deje de ___.|gustar|anunciarse|venderse"
    ],
    tf: [
      "El condicionamiento evaluativo se extingue con la misma facilidad que la RC clásica típica.|F|Es relativamente resistente a la extinción: una vez adquirida, la valencia no se elimina con facilidad.",
      "Está establecido que el condicionamiento evaluativo requiere consciencia de la relación entre los estímulos.|F|El papel de la consciencia de la contingencia sigue en debate.",
      "En el estudio de Ader y Cohen, la sacarina presentada sola llegó a reducir la respuesta inmunitaria.|V",
      "Mantener el efecto de un fármaco con dosis menores mediante condicionamiento es una línea de investigación, no una práctica establecida.|V"
    ],
    q: [
      "Una canción que sonaba durante una ruptura dolorosa sigue desagradando a Irene años después, aunque la ha oído muchas veces en contextos neutros. ¿Qué rasgo ilustra?|La resistencia a la extinción|La recuperación espontánea de la RC|La inmunosupresión condicionada|Es condicionamiento evaluativo: la valencia adquirida resiste aunque el estímulo se presente solo muchas veces.",
      "¿Qué se transfiere en el condicionamiento evaluativo?|Una evaluación del estímulo|Una respuesta refleja concreta|Una expectativa sobre el EI|El estímulo empieza a gustar o a disgustar. En el condicionamiento clásico típico se aprende que el EC anuncia el EI.",
      "¿Qué papel tenía la sacarina en el estudio de Ader y Cohen?|Era el EC|Era el EI|Era la RI|La sacarina era el EC, y la ciclofosfamida, el EI que producía malestar e inmunosupresión.",
      "¿Con qué fenómeno se relaciona también el condicionamiento inmunitario?|El efecto placebo|La deriva instintiva|El ensombrecimiento|En el efecto placebo, las claves asociadas a un tratamiento pueden producir parte de su efecto."
    ],
    inc: [
      "Sobre el condicionamiento inmunitario|Ya es una práctica clínica establecida|Está en el origen de la psiconeuroinmunología|Se relaciona con el efecto placebo|Sus aplicaciones clínicas siguen en investigación, no son una práctica establecida."
    ],
    seq: [],
    cls: [
      "Tipo de condicionamiento|Clásico típico: el EC anuncia el EI; RC fisiológica o conductual; se extingue con el EC solo|Evaluativo: el estímulo resulta agradable o no; valoraciones de agrado; resistente a la extinción"
    ] }
] },
{ n: 7, t: "Extinción, recaída y terapia de exposición", cap: 2, pir: "alta", mods: [
  { t: "La extinción como nuevo aprendizaje",
    tip: "La extinción es presentar el EC sin el EI y el descenso resultante de la RC. Para Bouton no borra la asociación original, sino que añade un aprendizaje inhibitorio EC–no EI, y el EC queda con dos significados que el contexto desambigua. Lo aprendido en extinción depende más del contexto que lo aprendido en adquisición. El contexto incluye el lugar, el estado interno, las personas presentes y el paso del tiempo.",
    v: [
      "Extinción=Presentar el EC sin el EI y descenso resultante de la RC",
      "Desaprendizaje=Visión de la extinción como debilitamiento de la asociación hasta cero",
      "Aprendizaje inhibitorio=Asociación EC–no EI que se añade sin borrar la original",
      "Mark Bouton=Autor de la interpretación de consenso de la extinción como nuevo aprendizaje",
      "Dos significados=El EC significa «EI» y también «no EI», como una palabra ambigua",
      "Contexto=Lugar, estado interno, personas y paso del tiempo que acompañan al aprendizaje",
      "Asimetría de Bouton=La extinción depende más del contexto que la adquisición",
      "Error de predicción negativo=Omisión de un EI esperado, que impulsa el nuevo aprendizaje"
    ],
    g: [
      "Según Bouton, lo que decide qué significado del EC se expresa en cada momento es el ___.|contexto|reforzador|intervalo",
      "El aprendizaje de ___ se generaliza con facilidad a otros contextos.|adquisición|extinción|inhibición",
      "Un estado de ánimo o el efecto de una droga pueden actuar como contexto ___.|interno|físico|temporal",
      "Que la RC extinguida pueda volver ya lo conocía ___.|Pavlov|Bouton|Wolpe",
      "La omisión de un EI esperado genera un error de predicción ___.|negativo|positivo|nulo"
    ],
    tf: [
      "Según Bouton, tras la extinción la asociación EC-EI se conserva intacta.|V",
      "Lo aprendido en extinción depende del contexto menos que lo aprendido en adquisición.|F|Es al revés: la extinción queda más ligada al contexto, y la adquisición se generaliza con facilidad.",
      "El modelo de Rescorla-Wagner entiende la extinción como un debilitamiento de la asociación.|V",
      "Si un tratamiento de exposición tiene éxito, el miedo ya no puede volver.|F|La extinción no borra: el miedo puede volver con el tiempo, con un cambio de contexto o tras un nuevo encuentro con el EI."
    ],
    q: [
      "Lucía siente ansiedad con el sonido de las videollamadas tras una mala entrevista. Tras semanas de videollamadas con su familia desde su habitación, la ansiedad desaparece. Según Bouton, ¿qué ha ocurrido?|Ha aprendido que allí no traen nada malo|Ha olvidado la asociación con la entrevista|Se ha habituado a cualquier videollamada|Añadió un aprendizaje inhibitorio ligado a ese contexto. En la oficina, con un desconocido, la ansiedad puede volver.",
      "Según Bouton, ¿qué ocurre con la asociación EC-EI tras la extinción?|Se conserva junto a otra inhibitoria|Se debilita hasta volver a cero|Se transforma en una asociación E-R|La asociación original sigue intacta, y el contexto decide qué significado del EC se expresa.",
      "En el marco de Bouton, ¿qué puede actuar como contexto?|Lugar, estado interno, personas y tiempo|Solo el lugar físico del aprendizaje|Solo los estímulos presentes en la prueba|Contexto tiene un sentido amplio: todo lo que acompaña al aprendizaje, incluido el paso del tiempo.",
      "¿Qué objetivo clínico se deriva de que la extinción no borre?|Recuperar lo nuevo en muchos contextos|Borrar por completo la asociación original|Lograr que la ansiedad baje en cada sesión|Como el éxito no garantiza que el miedo no vuelva, se busca que el aprendizaje inhibitorio se recupere en el mayor número de situaciones."
    ],
    inc: [
      "Sobre la extinción según Bouton|Elimina la asociación EC-EI original|El EC queda con dos significados|El contexto desambigua el significado del EC|No la elimina: añade un aprendizaje inhibitorio EC–no EI que compite con la asociación original."
    ],
    seq: [],
    cls: [
      "Concepción de la extinción|Desaprendizaje: la asociación se debilita; no se añade nada; la RC no debería volver|Nuevo aprendizaje: la asociación se conserva; se añade EC–no EI; la RC puede volver"
    ] },
  { t: "Recuperación espontánea, renovación y restablecimiento",
    tip: "Los fenómenos de retorno prueban que la extinción no borra. La recuperación espontánea aparece al pasar el tiempo, un cambio de contexto temporal. La renovación aparece al cambiar el contexto físico: ABA es la más robusta, ABC también la produce y AAB, de forma más débil. El restablecimiento aparece al presentar el EI solo, y la readquisición rápida, al volver a emparejar EC y EI. Son modelos de laboratorio de la recaída.",
    v: [
      "Recuperación espontánea=Reaparición parcial de la RC extinguida tras el paso del tiempo",
      "Renovación=Reaparición de la RC extinguida al cambiar el contexto respecto al de extinción",
      "Restablecimiento=Reaparición de la RC extinguida tras presentar el EI solo",
      "Readquisición rápida=Recuperación de la RC más deprisa que al principio al volver a emparejar EC y EI",
      "Diseño ABA=Adquirir en A, extinguir en B y probar en A, la forma más robusta",
      "Diseño ABC=Probar en un contexto nuevo tras adquirir en A y extinguir en B",
      "Diseño AAB=Adquirir y extinguir en el mismo contexto y probar en otro",
      "Fenómenos de retorno=Reaparición de una RC extinguida sin volver a emparejar EC y EI"
    ],
    g: [
      "La renovación más robusta se obtiene con el diseño ___.|ABA|ABC|AAB",
      "En el marco de Bouton, la recuperación espontánea es un cambio de contexto ___.|temporal|físico|interno",
      "El restablecimiento suele ser mayor si el EI se presenta en el ___ contexto en que luego se prueba el EC.|mismo|otro|primer",
      "En el diseño ABC, la RC vuelve en un contexto ___.|nuevo|de extinción|de adquisición",
      "Que la RC vuelva incluso en el diseño ___ muestra que la extinción queda ligada al contexto aunque la adquisición ocurriera en él.|AAB|ABA|ABC"
    ],
    tf: [
      "El diseño AAB no produce renovación porque la adquisición y la extinción ocurrieron en el mismo contexto.|F|Sí la produce, aunque más débil. Creer que no la produce es una trampa típica.",
      "En el restablecimiento se vuelven a emparejar el EC y el EI tras la extinción.|F|Eso es la readquisición. En el restablecimiento se presenta el EI solo, sin el EC.",
      "La readquisición rápida es otro signo de que la asociación original seguía allí.|V",
      "Una explicación del restablecimiento es que el EI condiciona el contexto.|V"
    ],
    q: [
      "Jorge dejó de sentir deseo de fumar en casa, pero lo siente con fuerza al volver al bar donde fumaba. ¿Qué fenómeno es?|Renovación ABA|Restablecimiento|Recuperación espontánea|Adquirió el deseo en el bar (A), lo extinguió en casa (B) y vuelve a A: es la forma más robusta de renovación.",
      "Tras extinguir el miedo a un tono, se presentan varias descargas solas y el miedo al tono reaparece. ¿Qué fenómeno es?|Restablecimiento|Readquisición|Renovación AAB|En la readquisición se vuelven a emparejar EC y EI. Aquí solo se presenta el EI.",
      "Meses después del alta, un miedo bien tratado reaparece en parte sin causa aparente. ¿Qué fenómeno ilustra?|Recuperación espontánea|Renovación por contexto nuevo|Restablecimiento tras el EI|Es la reaparición parcial de la RC con el paso del tiempo, que Bouton entiende como un cambio de contexto temporal.",
      "¿Por qué el diseño ABA produce la renovación más fuerte?|Suma dos factores contextuales|Implica tres contextos distintos|Presenta el EI durante la prueba|Combina la ausencia del contexto de extinción con la presencia de un contexto asociado al EI."
    ],
    inc: [
      "Sobre los fenómenos de retorno|Requieren volver a emparejar el EC con el EI|Apoyan que la extinción no borra lo aprendido|Son modelos de laboratorio de la recaída|La RC reaparece sin volver a emparejar EC y EI. Si se reemparejan, se habla de readquisición."
    ],
    seq: [
      "Diseño de renovación ABA|Adquisición en el contexto A>Extinción en el contexto B>Prueba de vuelta en el contexto A"
    ],
    cls: [
      "Fenómeno tras la extinción|Recuperación espontánea: dejar pasar el tiempo; contexto temporal|Renovación: cambiar el contexto físico; ABA; ABC; AAB|Restablecimiento: presentar el EI solo; contexto asociado al EI"
    ] },
  { t: "De la desensibilización sistemática al aprendizaje inhibitorio",
    tip: "Mary Cover Jones (1924) redujo el miedo de Peter a los conejos con una aproximación gradual. Wolpe (1958) basó la desensibilización sistemática en la inhibición recíproca: relajación, jerarquía y presentación gradual. Después se vio que el componente activo es la exposición. Craske et al. (2008, 2014) mostraron que la reducción del miedo en la sesión no predice bien el resultado: el objetivo es un aprendizaje inhibitorio fuerte y recuperable.",
    v: [
      "Claves de recuperación=Recordatorios de lo aprendido en terapia que se llevan a otros contextos",
      "Inhibición recíproca=No se puede estar a la vez relajado y ansioso",
      "Desensibilización sistemática=Exposición gradual a una jerarquía temida en relajación (Wolpe, 1958)",
      "Inundación=Exposición desde el inicio a la máxima ansiedad, sin posibilidad de escape",
      "Exposición in vivo=Exposición con los estímulos reales, gradual o intensa",
      "Conducta de seguridad=Conducta que impide comprobar que lo temido no ocurre y mantiene el miedo",
      "Violación de expectativas=Diseñar la exposición para que contradiga lo que se teme",
      "Extinción profundizada=Extinguir varios EC por separado y luego juntos"
    ],
    g: [
      "Wolpe fundamentó la desensibilización sistemática en la inhibición ___.|recíproca|latente|condicionada",
      "Con el tiempo se comprobó que el componente activo principal de la desensibilización sistemática era la ___.|exposición|relajación|jerarquía",
      "Incluir de forma infrecuente algún emparejamiento con el EI es la extinción ___ ocasional.|reforzada|profundizada|variable",
      "Sentarse siempre junto a la puerta del metro es una conducta de ___.|seguridad|recuperación|exposición",
      "Poner palabras a la emoción durante la exposición se llama etiquetado ___.|afectivo|cognitivo|conductual"
    ],
    tf: [
      "Según Craske et al., terminar una sesión con mucha ansiedad indica que la exposición ha fracasado.|F|La reducción del miedo dentro de la sesión no predice bien el resultado: se puede acabar ansioso y mejorar.",
      "La jerarquía de la desensibilización sistemática se ordena de menor a mayor ansiedad.|V",
      "Todas las estrategias del modelo de aprendizaje inhibitorio tienen eficacia clínica añadida demostrada.|F|Varias proceden de la investigación básica y siguen en evaluación clínica.",
      "Los contextos múltiples y las claves de recuperación responden al problema de la renovación.|V"
    ],
    q: [
      "Elena teme desmayarse en el metro a los cinco minutos. Según el modelo de aprendizaje inhibitorio, ¿cómo debería ser su exposición?|Que dure hasta ver que no se desmaya|Que acabe en cuanto baje su ansiedad|Que la haga sentada junto a la puerta|Es la violación de expectativas: se aprende más si el resultado contradice lo temido. Sentarse junto a la puerta es una conducta de seguridad.",
      "¿En qué principio basó Wolpe la desensibilización sistemática?|Inhibición recíproca|Error de predicción|Inhibición latente|No se puede estar relajado y ansioso a la vez, así que una respuesta incompatible con la ansiedad puede debilitarla.",
      "Una terapeuta expone a un paciente desde el primer momento a la situación de máxima ansiedad, sin posibilidad de escapar. ¿Qué técnica usa?|Inundación|Desensibilización sistemática|Extinción profundizada|La inundación empieza por lo más temido. La desensibilización avanza por una jerarquía, en relajación.",
      "¿Qué antecedente de la desensibilización sistemática contrasta con el caso del pequeño Albert?|El caso de Peter (Jones)|El trabajo de Watson y Rayner|La inhibición recíproca de Wolpe|Mary Cover Jones (1924) redujo el miedo de Peter a los conejos con una aproximación gradual mientras comía algo que le gustaba."
    ],
    inc: [
      "Sobre el modelo de aprendizaje inhibitorio|El objetivo es que el miedo baje en cada sesión|El aprendizaje EC–no EI debe ser recuperable|Variar los estímulos es una de sus estrategias|El objetivo es un aprendizaje inhibitorio fuerte y recuperable, no la reducción del miedo dentro de la sesión."
    ],
    seq: [
      "Desensibilización sistemática de Wolpe|Entrenamiento en relajación>Construcción de la jerarquía de situaciones temidas>Presentación gradual de la jerarquía en relajación"
    ],
    cls: [
      "Técnica de exposición|Desensibilización sistemática: relajación; jerarquía; Wolpe (1958)|Inundación: máxima ansiedad desde el inicio; sin posibilidad de escape"
    ] },
  { t: "Reconsolidación: promesa y réplicas",
    tip: "Según la hipótesis de la reconsolidación, un recuerdo consolidado vuelve a ser inestable al reactivarse y necesita estabilizarse de nuevo. Nader, Schafe y LeDoux (2000) redujeron el miedo en ratas con anisomicina en la amígdala tras reactivarlo. Schiller et al. (2010) aplicaron en humanos un recordatorio y extinción unos 10 minutos después. Kindt y Soeter (2013) no lo replicaron. Es una línea prometedora, no una técnica clínica consolidada.",
    v: [
      "Consolidación=Estabilización de un recuerdo nuevo, frágil al principio",
      "Reconsolidación=Reestabilización de un recuerdo reactivado, durante la cual podría modificarse",
      "Reactivación=Presentación de una clave que vuelve inestable un recuerdo consolidado",
      "Anisomicina=Fármaco que bloquea la síntesis de proteínas",
      "Nader, Schafe y LeDoux=Reactivaron el miedo en ratas e inyectaron anisomicina en la amígdala (2000)",
      "Schiller et al. (2010)=Recordatorio y extinción unos 10 minutos después, en humanos y sin fármacos",
      "Kindt y Soeter (2013)=No replicaron en humanos el procedimiento de recordatorio y extinción",
      "Condiciones límite=Equilibrio para desestabilizar el recuerdo sin que el recordatorio sea extinción"
    ],
    g: [
      "Nader, Schafe y LeDoux inyectaron la anisomicina en la ___.|amígdala|hipocampo|corteza",
      "En Schiller et al. (2010), la extinción empezaba unos ___ después del recordatorio.|10 minutos|10 segundos|10 horas",
      "Sin ___, la anisomicina no reducía el miedo al tono.|reactivación|extinción|consolidación",
      "El recordatorio de Schiller et al. era una sola presentación del ___.|EC|EI|contexto",
      "Los resultados pueden diferir según se mida la respuesta fisiológica o el informe ___.|verbal|motor|neural"
    ],
    tf: [
      "La reconsolidación tiene apoyo sólido en la investigación animal.|V",
      "La reconsolidación es ya una técnica clínica probada para eliminar miedos en humanos.|F|Su aplicación en humanos no está establecida: hay una no réplica y réplicas parciales.",
      "Schiller et al. (2010) interpretaron que la extinción dentro de la ventana actualizaba el recuerdo original.|V",
      "Schiller et al. (2010) bloquearon la síntesis de proteínas con anisomicina en personas.|F|No usaron fármacos: aplicaron extinción tras un recordatorio. La anisomicina se usó en ratas (Nader et al., 2000)."
    ],
    q: [
      "Un equipo condiciona miedo a una imagen, la presenta una vez y, 10 minutos después, aplica extinción. Al día siguiente hay menos retorno del miedo que en un grupo sin recordatorio. ¿Qué estudio reproduce?|Schiller et al. (2010)|Kindt y Soeter (2013)|Nader et al. (2000)|Es el procedimiento de recordatorio y extinción en humanos. Nader et al. trabajaron con ratas y anisomicina.",
      "¿Qué encontraron Kindt y Soeter (2013)?|No hallaron el efecto|Un efecto mayor que el original|El efecto solo con anisomicina|Su no replicación del procedimiento de recordatorio y extinción en humanos es la base del debate actual.",
      "¿Qué dificultad se discute en las réplicas de la reconsolidación?|Distinguir modificación de aprendizaje nuevo|Medir la síntesis de proteínas en humanos|Encontrar recuerdos de miedo consolidados|Cuesta demostrar que se ha modificado el recuerdo original y no se ha creado un aprendizaje nuevo más resistente.",
      "¿Qué diferencia teórica hay entre la extinción y la reconsolidación?|Una compite y la otra modifica el original|Una borra y la otra refuerza el original|Una actúa en ratas y la otra en humanos|La extinción crea un aprendizaje que compite con el original. La reconsolidación permitiría modificar el propio recuerdo."
    ],
    inc: [
      "Sobre la reconsolidación|El efecto de Nader no exigía reactivar|Un recuerdo reactivado se vuelve inestable|Hay réplicas parciales en humanos|Sin reactivación, la anisomicina no reducía el miedo. La reactivación era imprescindible."
    ],
    seq: [
      "Procedimiento de Nader, Schafe y LeDoux (2000)|Condicionar el miedo emparejando tono y descarga>Esperar a que la memoria se consolide>Presentar el tono para reactivarla>Inyectar anisomicina en la amígdala>Probar el miedo al tono"
    ],
    cls: [
      "Estudio|Nader, Schafe y LeDoux (2000): ratas; anisomicina; miedo muy reducido|Schiller et al. (2010): humanos; recordatorio y extinción; menos retorno del miedo|Kindt y Soeter (2013): humanos; mismo procedimiento; no replicación"
    ] }
] },
{ n: 8, t: "El condicionamiento instrumental: de Thorndike a Skinner", cap: 3, pir: "alta", mods: [
  { t: "Thorndike y la ley del efecto",
    tip: "Thorndike (1898, 1911) sustituyó la anécdota por el experimento con cajas problema y midió la latencia de escape, que bajaba de forma gradual e irregular: ensayo y error, sin comprensión súbita. Su conexionismo es una teoría E-R regida por la ley del efecto y la del ejercicio. La consecuencia no se asocia con la respuesta, solo sella la conexión. En 1932 abandonó la ley del ejercicio y la mitad negativa de la ley del efecto.",
    v: [
      "Caja problema=Jaula de listones de la que el gato salía accionando un mecanismo",
      "Latencia de escape=Tiempo que tardaba el animal en salir de la caja",
      "Ensayo y error=Aprendizaje gradual sin comprensión súbita ni razonamiento",
      "Ley del efecto=Las respuestas seguidas de satisfacción se fortalecen y tienden a repetirse",
      "Ley del ejercicio=Las conexiones se fortalecen con el uso y se debilitan con el desuso",
      "Conexionismo=Teoría de Thorndike de conexiones entre situación y respuesta",
      "Estado satisfactorio=Estado que el animal no evita y que a menudo intenta mantener",
      "Animal Intelligence=Obra de 1911 que amplió la tesis doctoral de Thorndike"
    ],
    g: [
      "Thorndike presentó su tesis doctoral en ___.|1898|1911|1932",
      "La latencia de escape descendía de forma ___, con subidas ocasionales.|irregular|brusca|lineal",
      "Para Thorndike, la consecuencia no se asocia con la respuesta: solo ___ la conexión entre situación y respuesta.|sella|anula|sustituye",
      "Thorndike abandonó la ley del ___ porque la repetición sin consecuencias no fortalecía la conexión.|ejercicio|efecto|contraste",
      "La interpretación de Thorndike contrasta con el ___ que Köhler defendería con chimpancés.|insight|moldeamiento|ensayo y error"
    ],
    tf: [
      "Thorndike concluyó que el gato acababa entendiendo cómo funcionaba el mecanismo de la caja.|F|Concluyó que no lo entendía: el aprendizaje era gradual, por ensayo y error, y no requería razonamiento.",
      "Tras su revisión de 1932, Thorndike sostuvo que la satisfacción fortalece, pero el malestar no debilita de forma comparable.|V",
      "La investigación posterior confirmó que el castigo nunca suprime la conducta con eficacia.|F|La ha matizado: el castigo puede suprimir la conducta con eficacia en determinadas condiciones.",
      "Según Thorndike, el gato aprende a tirar de la cuerda cuando está en esa caja, no que tirar de ella produce comida.|V"
    ],
    q: [
      "Raúl estrena una cafetera con varios botones, prueba combinaciones hasta que sale el café y, en una semana, pulsa la secuencia correcta sin pensar. ¿Qué describe mejor su aprendizaje?|Ensayo y error|Insight súbito|Aprendizaje latente|Es un aprendizaje gradual regulado por la consecuencia, como el de los gatos de Thorndike en las cajas problema.",
      "¿Qué variable registraba Thorndike en cada ensayo?|La latencia de escape|La tasa de respuesta|El número de errores|Medía el tiempo que tardaba el animal en salir. La tasa de respuesta es la variable propia de la caja de Skinner.",
      "¿Qué parte de su teoría conservó Thorndike tras revisarla en 1932?|La mitad positiva de la ley del efecto|La ley del ejercicio completa|La mitad negativa de la ley del efecto|La satisfacción fortalece, pero el malestar no debilita de forma comparable. La ley del ejercicio la abandonó.",
      "¿Cómo definió Thorndike un estado «satisfactorio»?|De forma conductual|Por el placer subjetivo|Por la reducción del impulso|Es un estado que el animal no evita y que a menudo intenta mantener. La reducción del impulso es de Hull."
    ],
    inc: [
      "Sobre Thorndike|La consecuencia se asocia con la respuesta|Su teoría es de tipo estímulo-respuesta|Sustituyó la anécdota por el experimento|La consecuencia solo sella la conexión entre situación y respuesta. No se asocia con la respuesta."
    ],
    seq: [],
    cls: [
      "Ley de Thorndike|Ley del efecto: satisfacción y malestar; mitad positiva conservada|Ley del ejercicio: uso y desuso; abandonada en 1932"
    ] },
  { t: "Neoconductismo: Watson, Hull, Tolman y Guthrie",
    tip: "Watson (1913) propuso estudiar la conducta observable para predecirla y controlarla. El neoconductismo admitió variables intervinientes, y el esquema E-R pasó a ser E-O-R. Hull, con método hipotético-deductivo, definió el refuerzo como reducción del impulso y el potencial de reacción como D × H. Tolman, con su conductismo propositivo, habló de expectativas y mapas cognitivos y situó el efecto del refuerzo en la ejecución. Guthrie defendió la contigüidad en un solo ensayo.",
    v: [
      "Variable interviniente=Proceso interno no observable definido de forma operacional",
      "Método hipotético-deductivo=Postulados precisos de los que se derivan predicciones contrastables",
      "Reducción del impulso=Para Hull, lo que hace que una respuesta quede reforzada",
      "Fuerza del hábito (sHr)=Fuerza de la conexión E-R, que crece con los ensayos reforzados",
      "Potencial de reacción=Producto de impulso y hábito en la versión simplificada de Hull",
      "Conductismo propositivo=Enfoque de Tolman con conducta molar dirigida a metas",
      "Mapa cognitivo=Representación del entorno que forman los animales según Tolman (1948)",
      "Conductismo radical=El de Skinner, que rechaza las variables intervinientes como explicación"
    ],
    g: [
      "Con las variables intervinientes, el esquema E-R pasó a ser E-___-R.|O|C|S",
      "Para Tolman, la conducta es ___: se estudia en unidades con sentido, como «ir hacia la comida».|molar|molecular|refleja",
      "Según Guthrie, la asociación alcanza su fuerza plena en ___ ensayo.|un solo|el décimo|el último",
      "Hull publicó su teoría formalizada en ___.|1943|1948|1935",
      "Según Hull, sin ___ no hay conducta aunque el hábito sea fuerte.|impulso|refuerzo|estímulo"
    ],
    tf: [
      "Para Tolman, el refuerzo influye sobre todo en el aprendizaje, no en la ejecución.|F|Es al revés: para Tolman el refuerzo influye sobre todo en la ejecución, como mostró el aprendizaje latente.",
      "Para Guthrie, el refuerzo no fortalece nada: solo cambia la situación y evita que otra respuesta sustituya a la última.|V",
      "Hull y Tolman suelen situarse en el conductismo metodológico, que admite procesos internos inferidos.|V",
      "Skinner admitía las variables intervinientes como explicación de la conducta.|F|El conductismo radical las rechaza como explicación y se limita a las relaciones entre ambiente y conducta."
    ],
    q: [
      "Una rata con un hábito muy fuerte de recorrer un laberinto no lo recorre cuando está saciada. ¿Qué teoría lo predice de forma más directa?|La de Hull|La de Guthrie|La de Watson|Para Hull, el potencial de reacción es el producto de impulso y hábito: sin impulso no hay conducta aunque el hábito sea fuerte.",
      "¿Qué autor propuso que los animales forman mapas cognitivos del entorno?|Tolman|Hull|Guthrie|Tolman (1948) habló de expectativas y mapas cognitivos y fue un precursor del enfoque cognitivo.",
      "¿Cómo explicaba Guthrie la mejora gradual del aprendizaje?|Cada estímulo se asocia por separado|El hábito crece con cada refuerzo|Las expectativas se van confirmando|Cada situación incluye muchos estímulos, y cada uno debe asociarse con el movimiento por separado.",
      "¿Qué distingue al conductismo radical del metodológico?|Rechaza las variables intervinientes|Admite procesos internos inferidos|Estudia solo los reflejos innatos|Skinner se limita a las relaciones entre ambiente y conducta. Hull y Tolman admitían procesos internos inferidos."
    ],
    inc: [
      "Sobre el neoconductismo|Rechazó que los datos debieran ser conductuales|Muchos de sus autores admitían variables intervinientes|Se desarrolló entre los años treinta y cincuenta|Aceptaba que los datos debían ser conductuales, aunque muchos autores admitían procesos internos inferidos."
    ],
    seq: [],
    cls: [
      "Autor neoconductista|Hull: hipotético-deductivo; reducción del impulso; sHr|Tolman: conductismo propositivo; expectativas; mapas cognitivos|Guthrie: contigüidad; un solo ensayo; el refuerzo cambia la situación"
    ] },
  { t: "Skinner: conducta operante, caja y registro acumulativo; tipo S frente a tipo R",
    tip: "Skinner (1938) distinguió la conducta respondiente, provocada por un estímulo, de la operante, emitida y controlada por sus consecuencias. En el condicionamiento tipo S el reforzador depende de un estímulo, y en el tipo R, de una respuesta. Su caja permite el operante libre, con la tasa de respuesta como variable principal. En el registro acumulativo, la pendiente indica la tasa, y un tramo horizontal, que no hubo respuestas.",
    v: [
      "Conducta respondiente=Conducta provocada por un estímulo antecedente identificable",
      "Conducta operante=Conducta emitida cuya frecuencia depende de sus consecuencias",
      "Condicionamiento tipo S=El reforzador depende de un estímulo, como en el pavloviano",
      "Condicionamiento tipo R=El reforzador depende de una respuesta, como al pulsar una palanca",
      "Manipulando=Palanca para ratas o tecla iluminada para palomas",
      "Operante libre=Procedimiento en que el animal responde cuando quiere y cuantas veces quiere",
      "Registro acumulativo=Gráfica cuya pendiente indica la tasa de respuesta",
      "Ensayos discretos=El animal responde una vez y se le vuelve a colocar en la salida"
    ],
    g: [
      "En la caja de Skinner, la variable dependiente principal es la ___ de respuesta.|tasa|latencia|fuerza",
      "En el registro acumulativo, cuanto más ___ es la línea, más rápido se responde.|inclinada|horizontal|larga",
      "La conducta operante es ___ por el organismo, no provocada por un estímulo concreto.|emitida|elicitada|imitada",
      "Skinner prefirió los diseños de caso ___, con mediciones repetidas de pocos sujetos.|único|control|mixto",
      "La lógica de Skinner es la base del análisis ___ que se usa en modificación de conducta.|funcional|factorial|correlacional"
    ],
    tf: [
      "En un registro acumulativo, la línea baja cuando la tasa de respuesta disminuye.|F|La línea nunca baja: una tasa menor se ve como menos pendiente, y la ausencia de respuestas, como un tramo horizontal.",
      "En el operante, el estímulo discriminativo señala la ocasión, pero no provoca la respuesta.|V",
      "Las cajas de Thorndike y la caja de Skinner usan el mismo procedimiento de ensayos discretos.|F|Las cajas de Thorndike usan ensayos discretos. La de Skinner permite el procedimiento de operante libre.",
      "El condicionamiento clásico y el operante comparten fenómenos como la extinción y la generalización.|V"
    ],
    q: [
      "Un perro aprende a sentarse para recibir una golosina y, además, saliva al oír el ruido de la bolsa. ¿Qué ilustra?|Que ambos procesos se dan juntos|Que el operante es un tipo de clásico|Que la salivación es una conducta operante|Sentarse es una relación operante, y el sonido de la bolsa, un EC que provoca salivación: en la práctica se dan juntos.",
      "En un registro acumulativo aparece un tramo horizontal largo. ¿Qué significa?|No hubo respuestas|La tasa fue máxima|Se reforzó cada respuesta|La línea solo sube con cada respuesta. Si no hay respuestas, avanza en horizontal.",
      "¿Qué diferencia el condicionamiento tipo R del tipo S?|El reforzador depende de una respuesta|El reforzador depende de un estímulo|La respuesta es visceral o emocional|En el tipo R la comida llega solo si se pulsa la palanca. En el tipo S, el EI llega tras el EC haga lo que haga el animal.",
      "¿Qué permitió la caja de Skinner frente a los laberintos y las cajas problema?|Responder en cualquier momento|Medir la latencia de escape|Presentar ensayos discretos|El operante libre permite responder en cualquier momento y tantas veces como se quiera, y medir la tasa de respuesta."
    ],
    inc: [
      "Sobre la conducta operante|La provoca un estímulo concreto|Su frecuencia depende de sus consecuencias|Opera sobre el ambiente|Esa es la conducta respondiente. La operante es emitida, sin un estímulo concreto que la desencadene."
    ],
    seq: [],
    cls: [
      "Tipo de conducta|Respondiente: provocada; salivación ante la comida; parpadeo ante un soplo de aire|Operante: emitida; pulsar una palanca; controlada por sus consecuencias"
    ] },
  { t: "Contingencias, tipos de reforzadores, moldeamiento y encadenamiento",
    tip: "La triple contingencia es Ed, respuesta y consecuencia: el Ed señala la ocasión, y el EΔ, que no habrá refuerzo. Positivo y negativo significan añadir y quitar, y refuerzo y castigo, aumentar y reducir la conducta. Los reforzadores pueden ser primarios, secundarios o generalizados. El moldeamiento refuerza aproximaciones sucesivas, y en el encadenamiento cada eslabón es Ed del siguiente y reforzador condicionado del anterior.",
    v: [
      "Triple contingencia=Estímulo discriminativo, respuesta y consecuencia",
      "EΔ (ese delta)=Señal de que la respuesta no será reforzada",
      "Reforzamiento negativo=Retirar o evitar un aversivo tras la respuesta, lo que aumenta la conducta",
      "Coste de respuesta=Pérdida de un reforzador ya obtenido tras la conducta",
      "Tiempo fuera=Retirada del acceso a los reforzadores durante un periodo",
      "Reforzador generalizado=Condicionado asociado con muchos reforzadores, como el dinero",
      "Moldeamiento=Reforzamiento de aproximaciones sucesivas a una conducta nueva",
      "Entrenamiento de omisión=La respuesta cancela un reforzador que habría llegado"
    ],
    g: [
      "Abrocharse el cinturón para que se apague el pitido del coche es reforzamiento ___.|negativo|positivo|diferencial",
      "Perder puntos del carné por exceso de velocidad es castigo ___.|negativo|positivo|primario",
      "El sonido de un clicker en el adiestramiento de perros es un reforzador ___.|secundario|primario|generalizado",
      "El moldeamiento combina el reforzamiento diferencial y la ___.|extinción|evitación|recompensa",
      "El encadenamiento hacia atrás empieza por el eslabón ___, el más próximo al reforzador.|último|primero|central"
    ],
    tf: [
      "En el castigo negativo deja de llegar el reforzador que mantenía la conducta.|F|Eso es la extinción. En el castigo negativo se retira un reforzador distinto del que mantenía la conducta.",
      "El Ed provoca la respuesta de la misma forma que un EC provoca la RC.|F|El Ed no provoca la respuesta, solo señala la ocasión en que será reforzada. Confundirlo con un EC es una trampa típica.",
      "El reforzamiento negativo incluye el escape y la evitación.|V",
      "Incluso demoras cortas del refuerzo reducen mucho el aprendizaje.|V"
    ],
    q: [
      "Un adolescente pierde parte de la paga que ya tenía cada vez que llega tarde, y deja de hacerlo. ¿Qué procedimiento es?|Coste de respuesta|Tiempo fuera|Reforzamiento negativo|Pierde un reforzador ya obtenido: es castigo negativo en su modalidad de coste de respuesta.",
      "Laura toma un analgésico cuando le duele la cabeza, y cada vez lo hace antes. ¿Qué contingencia actúa?|Reforzamiento negativo|Reforzamiento positivo|Castigo negativo|La conducta aumenta porque retira un estímulo aversivo. Tomar el refuerzo negativo por castigo es la trampa más típica.",
      "En el encadenamiento, ¿qué función cumple cada eslabón intermedio?|Ed del siguiente y reforzador del anterior|Reforzador primario del siguiente eslabón|Estímulo incondicionado de toda la cadena|Es Ed del eslabón siguiente y reforzador condicionado del anterior. Solo el último recibe el reforzador final.",
      "¿Qué reforzador no depende de una privación concreta?|El generalizado|El primario|El de un clicker|Los generalizados, como el dinero o las fichas, se asocian con muchos reforzadores distintos."
    ],
    inc: [
      "Sobre refuerzo y castigo|Positivo significa agradable|Refuerzo y castigo se definen por su efecto|El tiempo fuera es un castigo negativo|Positivo y negativo significan añadir y quitar, no bueno y malo."
    ],
    seq: [
      "Moldeamiento de la presión de palanca|Reforzar que la rata se acerque a la palanca>Reforzar que la toque>Reforzar solo que la presione"
    ],
    cls: [
      "Efecto sobre la conducta|Aumenta: reforzamiento positivo; reforzamiento negativo; escape; evitación|Reduce: castigo positivo; coste de respuesta; tiempo fuera; entrenamiento de omisión"
    ] }
] }
);
