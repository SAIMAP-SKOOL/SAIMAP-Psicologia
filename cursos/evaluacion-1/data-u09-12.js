// SAIMAP Psicología · Evaluación I · Unidades 09–12
window.COURSE.units.push(
{ n: 9, t: "Fiabilidad, error de medida y puntuaciones", cap: 3, pir: "alta", mods: [
  { t: "Teoría clásica de los tests y concepto de fiabilidad",
    tip: "La fiabilidad es la precisión de una medida, el grado en que está libre de error aleatorio. La teoría clásica de los tests, que arranca de Spearman (1904), descompone la puntuación observada en verdadera más error y define la fiabilidad como la proporción de varianza observada que es varianza verdadera. No es una propiedad fija del test, sino de las puntuaciones en una muestra y unas condiciones, y es necesaria pero no suficiente para la validez.",
    v: [
      "Fiabilidad=Precisión de una medida, grado en que está libre de error aleatorio",
      "Puntuación verdadera=Media de las puntuaciones en infinitas aplicaciones en las mismas condiciones",
      "Puntuación observada=La que se obtiene realmente al aplicar el test",
      "Coeficiente rxx=Índice de 0 a 1 de la proporción de varianza observada que es verdadera",
      "Error sistemático=Sesgo constante, como una báscula que marca siempre dos kilos de más",
      "Teoría de la generalizabilidad=Marco de Cronbach y col. (1972) que separa varias fuentes de error a la vez",
      "TRI=Marco que estima la precisión para cada nivel del atributo",
      "Spearman (1904)=Autor de los trabajos de los que arranca la teoría clásica"
    ],
    g: [
      "Uno de los supuestos de la TCT es que el error medio de medida es ___.|cero|positivo|constante",
      "Un rxx de 0,90 indica que el ___ de las diferencias observadas refleja diferencias reales.|90 %|10 %|81 %",
      "En muestras muy homogéneas, el coeficiente de fiabilidad tiende a ___.|bajar|subir|mantenerse",
      "Un error ___ no reduce la fiabilidad, pero sí afecta a la validez.|sistemático|aleatorio|de muestreo",
      "La idea de la teoría de la generalizabilidad la retomó ___ al proponer su cubo.|Cone|Spearman|Messick"
    ],
    tf: [
      "La fiabilidad es una propiedad fija del test, válida para cualquier muestra.|F|Es de las puntuaciones en una muestra y unas condiciones: en muestras homogéneas baja aunque el test no cambie.",
      "Según la TCT, el error no se relaciona con la puntuación verdadera.|V",
      "Un test que da resultados muy estables mide necesariamente lo que pretende medir.|F|La fiabilidad es necesaria pero no suficiente: un test estable puede medir con precisión otra cosa.",
      "En el test-retest, cuanto mayor es el intervalo, más cambio real y menor coeficiente.|V"
    ],
    q: [
      "Un test de vocabulario muy fiable en población general da un coeficiente bastante menor en licenciados en Filología. ¿Qué lo explica mejor?|La menor variabilidad de la muestra|Un cambio en el contenido del test|Un error sistemático de corrección|En muestras homogéneas, que puntúan todos alto, el coeficiente baja aunque el test sea el mismo.",
      "Una báscula marca siempre dos kilos de más. ¿Qué garantía se ve afectada?|La validez, no la fiabilidad|La fiabilidad, no la validez|Ambas en la misma medida|Es un error sistemático: no reduce la precisión entre medidas, pero sesga la conclusión.",
      "Según la TCT, la fiabilidad se define como…|la proporción de varianza verdadera|la correlación con un criterio externo|la media de los errores de medida|Es la proporción de la varianza observada que se debe a la varianza verdadera, expresada con rxx.",
      "¿Qué marco estima un error distinto para cada nivel del atributo?|La teoría de respuesta al ítem|La teoría clásica de los tests|La teoría de la generalizabilidad|La TRI da la precisión por niveles y es la base de los tests adaptativos. La TCT ofrece un único coeficiente."
    ],
    inc: [
      "Sobre la TCT y la fiabilidad|Alargar el test con ítems equivalentes la reduce|El error medio se supone igual a cero|Instrucciones confusas añaden error a la medida|Con más ítems equivalentes los errores se compensan y la fiabilidad sube."
    ],
    seq: [],
    cls: [
      "Efecto sobre la fiabilidad|La aumenta: más ítems equivalentes; muestra heterogénea|La reduce: instrucciones confusas; muestra homogénea; corrección subjetiva; intervalo largo en el retest"
    ] },
  { t: "Tipos de fiabilidad",
    tip: "Cada tipo de fiabilidad responde a una fuente de error: test-retest (estabilidad), formas paralelas (equivalencia), consistencia interna (dos mitades con Spearman-Brown, KR-20, α y ω) y entre jueces (kappa para categorías, CCI para puntuaciones). El test-retest sirve para rasgos, no para estados. Un α alto no demuestra unidimensionalidad: eso se comprueba con análisis factorial.",
    v: [
      "Test-retest=Mismo test aplicado dos veces a las mismas personas para ver su estabilidad",
      "Formas paralelas=Dos versiones de contenido distinto pero equivalente que se correlacionan",
      "Dos mitades=Correlación entre partes del test, como pares e impares, corregida después",
      "KR-20=Coeficiente de consistencia interna para ítems dicotómicos",
      "α de Cronbach=Generalización de 1951 para ítems de cualquier formato, como los Likert",
      "ω de McDonald=Coeficiente factorial que no exige que todos los ítems pesen igual",
      "Kappa de Cohen=Acuerdo entre jueces en categorías, corregido por el azar",
      "CCI=Coeficiente intraclase para el acuerdo entre jueces en puntuaciones cuantitativas"
    ],
    g: [
      "Si las dos mitades correlacionan 0,70, Spearman-Brown estima para el test completo un ___.|0,82|0,70|0,85",
      "Si un test con rxx de 0,60 se alarga al doble, su fiabilidad estimada pasa a ___.|0,75|0,80|0,72",
      "Según Landis y Koch, un kappa por encima de 0,80 indica un acuerdo ___.|casi perfecto|sustancial|moderado",
      "Para ítems de acierto o error, el coeficiente clásico de consistencia interna es el ___.|KR-20|CCI|kappa",
      "Las decisiones sobre ___ exigen coeficientes de fiabilidad más altos.|individuos|grupos|muestras"
    ],
    tf: [
      "Un α de 0,92 en un test largo demuestra que mide un único constructo.|F|El α depende del número de ítems y de su correlación media. La unidimensionalidad exige análisis factorial.",
      "El test-retest es poco adecuado para estimar la fiabilidad de una escala de ansiedad estado.|V",
      "El CCI es el índice indicado para el acuerdo entre jueces en categorías nominales.|F|Para categorías se usa el kappa de Cohen. El CCI se reserva para puntuaciones cuantitativas.",
      "Si el α de Cronbach debe sustituirse de forma general por el ω de McDonald es una cuestión en debate.|V"
    ],
    q: [
      "Un equipo crea un sistema de observación de conductas disruptivas en el aula que dos observadores codifican en categorías. ¿Qué fiabilidad debe priorizar?|El acuerdo entre jueces con kappa|La estabilidad con test-retest|La consistencia interna con α|Cuando la puntuación depende del juicio de evaluadores y hay categorías, se usa el kappa de Cohen.",
      "¿Por qué se aplica la fórmula de Spearman-Brown en el método de las dos mitades?|Porque cada mitad es más corta|Porque los ítems son dicotómicos|Porque las mitades no son paralelas|La correlación entre mitades corresponde a un test de la mitad de longitud, y hay que corregirla.",
      "¿Qué supuesto del α de Cronbach no exige el ω de McDonald?|Que todos los ítems pesen igual|Que los ítems sean dicotómicos|Que haya dos aplicaciones|El ω parte de un modelo factorial y admite pesos distintos, un supuesto del α que rara vez se cumple.",
      "Para comprobar que un cuestionario mide una sola dimensión, ¿qué procede?|Un análisis factorial|Calcular el α de Cronbach|Aplicar Spearman-Brown|La unidimensionalidad es una evidencia de estructura interna y se comprueba con análisis factorial, no con el α."
    ],
    inc: [
      "Sobre los tipos de fiabilidad|El α se estima con dos aplicaciones del mismo test|Kappa corrige el acuerdo debido al azar|Las escalas de tres o cuatro ítems suelen tener fiabilidad modesta|El α es un índice de consistencia interna y se estima con una sola aplicación."
    ],
    seq: [],
    cls: [
      "Procedimiento de estimación|Una sola aplicación: dos mitades; KR-20; α de Cronbach; ω de McDonald|Dos aplicaciones o formas: test-retest; formas paralelas|Dos o más evaluadores: kappa de Cohen; CCI"
    ] },
  { t: "Error típico de medida e intervalos de confianza",
    tip: "El error típico de medida (ETM) es la desviación típica de los errores y se calcula multiplicando la DT del test por la raíz de 1 − rxx. Describe cuánto oscilaría la puntuación de una misma persona, mientras que la DT describe cuánto difieren las personas entre sí. Con él se construyen intervalos: X ± 1·ETM al 68 % y X ± 1,96·ETM al 95 %. Hay que informar con intervalos y ser prudente con los puntos de corte, las diferencias y el cambio.",
    v: [
      "Error típico de medida=Desviación típica de los errores de una misma persona",
      "Desviación típica del test=Cuánto difieren las personas entre sí en sus puntuaciones",
      "Intervalo del 68 %=Puntuación observada más y menos un error típico",
      "Intervalo del 95 %=Puntuación observada más y menos 1,96 errores típicos",
      "Fiabilidad perfecta=Caso en que el error típico vale cero",
      "Fiabilidad nula=Caso en que el error típico iguala la desviación típica del test",
      "Precisión en la TRI=Error distinto por nivel, que suele ser menor en la zona central",
      "Art. 48 del Código=Pide expresar el grado de certeza de las conclusiones"
    ],
    g: [
      "Con DT de 15 y rxx de 0,91, el ETM es de ___ puntos.|4,5|1,35|9",
      "Con DT de 10 y rxx de 0,64, el ETM es de ___ puntos.|6|3,6|4",
      "Para el intervalo del 95 % se multiplica el ETM por ___.|1,96|1|1,64",
      "Con ETM de 3 y un CI observado de 100, el intervalo del 95 % va de 94,1 a ___.|105,9|103|106,5",
      "En una escala de CI, pasar de rxx 0,84 a 0,96 reduce el ETM ___.|a la mitad|un 12 %|a la décima parte"
    ],
    tf: [
      "El ETM describe cuánto difieren las personas entre sí en el test.|F|Eso lo describe la DT. El ETM indica cuánto variaría la puntuación de una misma persona por el error.",
      "Una mejora de 4 puntos entre dos evaluaciones puede ser solo error si el ETM es de 5 puntos.|V",
      "Cada centésima que gana la fiabilidad reduce el ETM en la misma cantidad.|F|La relación no es lineal: cerca de 1, cada mejora de la fiabilidad recorta mucho más el error.",
      "En la TCT, el ETM es el mismo para todas las puntuaciones del test.|V"
    ],
    q: [
      "Un centro exige un CI de 130 para un programa de altas capacidades. Una alumna obtiene 128 con un ETM de 3. ¿Qué puede afirmarse?|Que no consta que esté por debajo|Que está por debajo del corte|Que su CI verdadero es 128|Su intervalo del 95 % llega hasta casi 134, así que no puede afirmarse que esté por debajo del corte.",
      "Un test tiene media 100, DT 15 y rxx 0,75. Un estudiante obtiene 112. ¿Qué permite concluir el intervalo del 95 %?|Que no consta que supere la media|Que supera la media con seguridad|Que está por debajo de la media|El ETM es 7,5 y el intervalo va de 97,3 a 126,7, que incluye valores por debajo de 100.",
      "¿Qué ocurre con el ETM si la fiabilidad del test es nula?|Iguala la desviación típica|Duplica la desviación típica|Se vuelve igual a cero|Con rxx de 0 la puntuación no dice nada de la persona: el error es tan grande como la DT del test.",
      "Un estudiante obtiene 112 en un test con ETM de 4,5. ¿Cómo se expresa mejor en el informe?|Entre 103 y 121 al 95 %|CI exacto de 112 puntos|Entre 107 y 117 al 95 %|112 ± 1,96·4,5 da de 103,18 a 120,82. El intervalo de 107,5 a 116,5 es el del 68 %."
    ],
    inc: [
      "Sobre el ETM y los intervalos|El intervalo del 95 % se obtiene con X ± 1·ETM|Informar con intervalos refleja lo que se sabe|Los tests suelen medir mejor en la zona central|El intervalo X ± 1·ETM es el del 68 %. Para el del 95 % se usa 1,96·ETM."
    ],
    seq: [
      "Interpretar una puntuación con su error|Calcular el ETM>Multiplicar el ETM por 1,96>Sumar y restar a la puntuación observada>Interpretar el intervalo resultante"
    ],
    cls: [] },
  { t: "Baremos y puntuaciones típicas",
    tip: "Una puntuación directa no significa nada sin una referencia. La interpretación normativa la compara con un grupo mediante baremos representativos, amplios y actuales, y la criterial, con un criterio de dominio. Las escalas típicas se obtienen de z con transformaciones lineales: T (50 y 10), CI (100 y 15), escalar Wechsler (10 y 3), eneatipo (5 y 2) y decatipo (5,5 y 2). El percentil es ordinal y no se puede promediar ni restar.",
    v: [
      "Baremo=Tabla que transforma puntuaciones directas en derivadas según una muestra normativa",
      "Muestra normativa=Grupo representativo, amplio y actual con el que se elabora el baremo",
      "Puntuación z=Distancia a la media expresada en desviaciones típicas",
      "Puntuación T=Escala de media 50 y desviación típica 10",
      "Escalar Wechsler=Escala de media 10 y desviación típica 3 de las subpruebas",
      "Eneatipo=Escala de 1 a 9 con media 5 y desviación típica 2",
      "Decatipo=Escala de 1 a 10 con media 5,5 y desviación típica 2",
      "Percentil=Porcentaje del grupo normativo con puntuación igual o inferior"
    ],
    g: [
      "Una puntuación T de 35 equivale a un CI de ___.|77,5|85|92,5",
      "Con z de 1, en una distribución normal, la persona se sitúa en torno al percentil ___.|84|68|75",
      "A dos desviaciones típicas por debajo de la media, la puntuación escalar Wechsler es ___.|4|7|6",
      "Un CI de 112 en una escala de media 100 y DT 15 equivale a una T de ___.|58|62|56",
      "Entre P90 y P99 hay una diferencia de ___ una desviación típica.|más de|menos de|justo"
    ],
    tf: [
      "Si un niño está en el percentil 50 en una subprueba y en el 99 en otra, su percentil medio es 74,5.|F|Los percentiles son ordinales y no se promedian. Para combinar se usan z o T, o el baremo de la compuesta.",
      "De P50 a P60 hay menos distancia en el atributo que de P90 a P99.|V",
      "Las equivalencias exactas entre percentiles y típicas valen con cualquier distribución.|F|Solo valen si la distribución es normal. Si no lo es, el baremo debe dar los percentiles empíricos.",
      "Un percentil 84 también tiene su intervalo de confianza.|V"
    ],
    q: [
      "Una orientadora quiere saber si un alumno domina el 80 % de las operaciones aritméticas del curso, sin compararlo con nadie. ¿Qué interpretación usa?|Criterial|Normativa|Ipsativa|Compara con un criterio de dominio o un punto de corte. No importa cómo lo hagan los demás.",
      "Una persona obtiene un eneatipo de 7. ¿A qué puntuación T equivale?|60|70|57|z vale (7 − 5) / 2, es decir 1, y la T es 50 + 10·1, que da 60.",
      "Un adolescente español se compara con un baremo elaborado hace décadas en otro país. ¿Qué requisito falla?|Que sea representativo y actual|Que tenga fiabilidad entre jueces|Que admita interpretación criterial|Un baremo útil exige una muestra normativa representativa, suficientemente amplia y actual.",
      "Un decatipo de 7,5 equivale a una puntuación z de…|1|1,25|0,75|(7,5 − 5,5) / 2 da 1. Usar media 5 en lugar de 5,5 lleva al error de 1,25."
    ],
    inc: [
      "Sobre las puntuaciones derivadas|Los percentiles forman una escala de intervalo|z es la base de las demás escalas típicas|La T se usa en cuestionarios clínicos y de personalidad|Los percentiles son ordinales: las distancias entre ellos no son iguales en el atributo medido."
    ],
    seq: [],
    cls: [
      "Tipo de interpretación|Normativa: baremo; muestra normativa; percentil; puntuación T|Criterial: punto de corte de dominio; porcentaje de operaciones dominadas"
    ] }
] },
{ n: 10, t: "Validez y calidad de los tests", cap: 3, pir: "alta", mods: [
  { t: "La validez según los Standards (2014)",
    tip: "Según los Standards (AERA, APA y NCME, 2014), la validez es el grado en que la evidencia y la teoría apoyan las interpretaciones de las puntuaciones para los usos propuestos. No se valida el test, sino una interpretación para un uso, y la validez es gradual y unitaria, con cinco fuentes de evidencia. Supera la visión trinitaria: Cronbach y Meehl (1955) definieron la validez de constructo y Messick (1989) la unificó. La validez aparente no es una evidencia técnica.",
    v: [
      "Validez=Grado en que evidencia y teoría apoyan interpretar las puntuaciones para un uso",
      "Visión trinitaria=Clasificación clásica en validez de contenido, criterio y constructo",
      "Cronbach y Meehl (1955)=Autores que definieron la validez de constructo",
      "Messick (1989)=Defendió que toda validez es de constructo e incorporó las consecuencias",
      "Procesos de respuesta=Fuente que comprueba si se responde con los procesos que el test supone",
      "Estructura interna=Fuente que examina si las relaciones entre ítems coinciden con la teoría",
      "Validez aparente=Grado en que el test parece adecuado a quien lo responde",
      "Utilidad=Criterio añadido: que el test aporte algo a la decisión y compense su coste"
    ],
    g: [
      "Según los Standards, la validez es una cuestión de ___, no de todo o nada.|grado|tipo|método",
      "Las entrevistas cognitivas sobre cómo se interpreta cada ítem aportan evidencia de ___.|procesos de respuesta|estructura interna|contenido",
      "Que jueces expertos comprueben que un examen de conducir cubre todas las normas es evidencia de ___.|contenido|consecuencias|estructura interna",
      "Messick incorporó a la validez las ___ del uso del test.|consecuencias|evidencias|fuentes",
      "En la terminología clásica, la validez de ___ abarca hoy todo el argumento.|constructo|criterio|contenido"
    ],
    tf: [
      "La validez aparente es una de las cinco fuentes técnicas de evidencia de los Standards.|F|No es evidencia técnica: un test puede parecer adecuado y no medir bien. Sí influye en la colaboración.",
      "Un cuestionario puede estar bien respaldado para el cribado en atención primaria y no para seleccionar personal.|V",
      "Según los Standards, hay tres tipos de validez independientes que se evalúan por separado.|F|La validez es unitaria: hay distintas fuentes de evidencia que contribuyen a un mismo argumento.",
      "Si las consecuencias del uso deben formar parte de la validez es una cuestión en debate.|V"
    ],
    q: [
      "Una prueba de selección perjudica sin justificación a un grupo de candidatos. ¿Qué fuente de evidencia lo pone de manifiesto?|Consecuencias|Contenido|Procesos de respuesta|Las consecuencias examinan los efectos, previstos o no, de usar el test. Su lugar dentro de la validez sigue en debate.",
      "Un psicólogo escribe en su informe «este test es válido». ¿Qué objeción haría alguien que siga los Standards?|Que falta precisar para qué uso|Que falta un α de al menos 0,90|Que la validez es solo aparente|Se valida una interpretación para un uso, no el test: válido para qué, con quién y para tomar qué decisión.",
      "Un análisis factorial confirma las tres dimensiones que propone la teoría. ¿Qué evidencia aporta?|Estructura interna|Procesos de respuesta|Relaciones con otras variables|Comprobar que las relaciones entre los ítems coinciden con la teoría es evidencia de estructura interna.",
      "Varios pacientes abandonan un cuestionario porque les parece absurdo. ¿Qué aspecto está fallando?|La validez aparente|La validez de contenido|La validez predictiva|No es una evidencia técnica, pero si el test parece absurdo la persona colabora poco o lo abandona."
    ],
    inc: [
      "Sobre la validez según los Standards|Se valida el test en sí, una vez publicado|La validez es unitaria y una cuestión de grado|Distinguen cinco fuentes de evidencia de validez|Lo que se valida es la interpretación de las puntuaciones para un uso, no el test."
    ],
    seq: [],
    cls: [
      "Fuente de evidencia|Contenido: jueces expertos; representatividad del dominio|Estructura interna: análisis factorial; dimensiones previstas por la teoría|Procesos de respuesta: entrevistas cognitivas; interpretación de cada ítem"
    ] },
  { t: "Evidencias convergentes, discriminantes y de criterio",
    tip: "Las relaciones con otras variables son la fuente de evidencia más usada. La convergente exige correlaciones altas con medidas del mismo constructo, y la discriminante, bajas con constructos distintos. La de criterio puede ser predictiva, concurrente o retrospectiva y depende de la calidad del criterio. La matriz multirrasgo-multimétodo de Campbell y Fiske (1959) reúne ambas evidencias y permite detectar la varianza de método.",
    v: [
      "Evidencia convergente=Correlación alta con otras medidas del mismo constructo",
      "Evidencia discriminante=Correlación baja con medidas de constructos distintos",
      "Validez predictiva=El criterio se mide después de aplicar el test",
      "Validez concurrente=El criterio se recoge a la vez que el test",
      "Validez retrospectiva=El criterio procede del pasado, como el historial académico",
      "Contaminación del criterio=Quien valora el criterio conoce las puntuaciones del test",
      "Varianza de método=Parte de lo medido que se debe al instrumento y no al rasgo",
      "Matriz multirrasgo-multimétodo=Varios rasgos medidos con varios métodos (Campbell y Fiske)"
    ],
    g: [
      "Con rxx de 0,81 y ryy de 0,64, el coeficiente de validez máximo posible es ___.|0,72|0,52|0,81",
      "En la matriz de Campbell y Fiske, los valores más altos deben estar en la diagonal de ___.|fiabilidad|validez convergente|validez discriminante",
      "Mismo rasgo con distinto método corresponde a la diagonal de validez ___.|convergente|discriminante|incremental",
      "Campbell y Fiske propusieron la matriz multirrasgo-multimétodo en ___.|1959|1955|1989",
      "Correlacionar un cuestionario actual con el historial académico previo es evidencia ___.|retrospectiva|concurrente|predictiva"
    ],
    tf: [
      "Si dos rasgos distintos medidos con el mismo método correlacionan más que un mismo rasgo con métodos distintos, hay varianza de método.|V",
      "Un criterio poco fiable no afecta a la correlación entre un buen test y ese criterio.|F|Si el criterio es poco fiable, la correlación baja aunque el test sea bueno.",
      "Si una escala de depresión correlaciona tanto con deseabilidad social como con otra de depresión, falla la evidencia convergente.|F|Falla la discriminante: debería correlacionar bajo con un constructo distinto como la deseabilidad social.",
      "El coeficiente de validez no puede superar la raíz cuadrada del producto de las fiabilidades del test y del criterio.|V"
    ],
    q: [
      "Un cuestionario de cribado se aplica el mismo día que una entrevista estructurada que sirve de criterio diagnóstico. ¿Qué evidencia se obtiene?|Concurrente|Predictiva|Retrospectiva|El criterio se mide a la vez que el test. Si se midiera después, sería evidencia predictiva.",
      "Un supervisor valora el rendimiento de unos empleados conociendo sus puntuaciones en la prueba de selección. ¿Qué problema hay?|Contaminación del criterio|Varianza de método|Falta de validez aparente|El juicio del supervisor puede estar influido por las puntuaciones del test.",
      "En una matriz multirrasgo-multimétodo, la ansiedad por autoinforme correlaciona 0,30 con la ansiedad observada y 0,65 con la extraversión por autoinforme. ¿Qué indica?|Varianza de método|Buena validez convergente|Alta fiabilidad del autoinforme|Rasgos distintos con el mismo método correlacionan más que el mismo rasgo con métodos distintos.",
      "¿En qué fuente de evidencia de los Standards se integra la validez de criterio?|Relaciones con otras variables|Contenido del dominio evaluado|Procesos de respuesta al ítem|La validez de criterio, con sus variantes predictiva, concurrente y retrospectiva, forma parte de las relaciones con otras variables."
    ],
    inc: [
      "Sobre las relaciones con otras variables|La predictiva recoge el criterio a la vez que el test|La evidencia discriminante exige correlaciones bajas|Un criterio poco fiable limita el coeficiente de validez|En la predictiva el criterio se mide después. Medirlo a la vez corresponde a la validez concurrente."
    ],
    seq: [],
    cls: [
      "Evidencia de criterio|Predictiva: rendimiento en el puesto un año después; criterio medido después|Concurrente: diagnóstico por entrevista el mismo día; criterio medido a la vez|Retrospectiva: historial académico previo; criterio del pasado"
    ] },
  { t: "Utilidad diagnóstica: sensibilidad, especificidad y curvas ROC",
    tip: "Cuando un test clasifica, su validez se expresa con índices de utilidad diagnóstica frente a un criterio. La sensibilidad y la especificidad son propiedades del test, mientras que los valores predictivos dependen de la tasa base. Bajar el punto de corte sube la sensibilidad y baja la especificidad, y la elección depende del coste de cada error. La curva ROC muestra todos los puntos de corte, y su área (AUC) va de 0,5, azar, a 1, discriminación perfecta.",
    v: [
      "Utilidad diagnóstica=Validez de un test que clasifica, expresada frente a un criterio",
      "Criterio de referencia=Clasificación, como una entrevista estructurada, con la que se compara el test",
      "Valor predictivo positivo=Proporción de positivos que realmente tienen el trastorno",
      "Valor predictivo negativo=Proporción de negativos que realmente no lo tienen",
      "Verdadero negativo=Persona sin el trastorno a la que el test clasifica como negativa",
      "Curva ROC=Sensibilidad frente a 1 − especificidad para cada punto de corte",
      "AUC=Área bajo la curva, índice resumen de discriminación",
      "Punto de corte=Valor a partir del cual una puntuación continua se considera positiva"
    ],
    g: [
      "Con 34 verdaderos positivos y 16 falsos positivos, el VPP es ___.|0,68|0,85|0,90",
      "Un test detecta a 45 de 50 personas con el trastorno, así que su sensibilidad es ___.|0,90|0,69|0,45",
      "En un cribado, donde un positivo solo lleva a una evaluación más completa, se prefiere una ___ alta.|sensibilidad|especificidad|tasa base",
      "Un AUC de ___ indica que el test no discrimina mejor que el azar.|0,5|0,7|1",
      "En la curva ROC, el eje horizontal representa ___.|1 − especificidad|la sensibilidad|el VPP"
    ],
    tf: [
      "El AUC solo puede calcularse una vez fijado el punto de corte.|F|El AUC resume todos los puntos de corte a la vez y permite comparar tests con independencia de él.",
      "Bajar el punto de corte aumenta la sensibilidad y reduce la especificidad.|V",
      "La sensibilidad indica la probabilidad de tener el trastorno cuando se ha dado positivo.|F|Eso es el VPP. La sensibilidad es la proporción de personas con el trastorno que el test detecta.",
      "Si el criterio de referencia también se equivoca, los índices de utilidad diagnóstica quedan distorsionados.|V"
    ],
    q: [
      "Un cuestionario se aplica a 100 personas, 20 con el trastorno según la entrevista. Detecta a 16 de ellas y da positivo en 8 de las 80 sanas. ¿Cuál es su VPP?|0,67|0,80|0,90|VPP de 16 / 24, es decir 0,67. La sensibilidad sería 16 / 20 (0,80) y la especificidad, 72 / 80 (0,90).",
      "Un test va a apoyar una medida judicial con consecuencias graves. ¿Qué conviene priorizar al fijar el punto de corte?|Una especificidad alta|Una sensibilidad alta|Un VPN elevado|Cuando un positivo tiene consecuencias graves se prefiere una especificidad alta, que reduce los falsos positivos.",
      "¿Cómo puede interpretarse un AUC de 0,80?|Que un afectado al azar supere a un sano|Que detecta al 80 % de los afectados|Que el 80 % de los positivos lo tienen|El AUC es la probabilidad de que una persona del grupo con el trastorno puntúe más que una del grupo sin él.",
      "Un cribado de depresión da 34 verdaderos positivos, 16 falsos positivos, 6 falsos negativos y 144 verdaderos negativos. ¿Cuál es el VPN?|0,96|0,90|0,85|144 / 150 da 0,96. El 0,90 es la especificidad (144 / 160), y el 0,85, la sensibilidad (34 / 40)."
    ],
    inc: [
      "Sobre la utilidad diagnóstica|Un AUC de 1 indica un test que no discrimina|Subir el punto de corte aumenta la especificidad|Los valores predictivos dependen de la tasa base|Un AUC de 1 es discriminación perfecta. El azar corresponde a 0,5."
    ],
    seq: [],
    cls: [
      "Celda de la tabla de clasificación|Test positivo: verdaderos positivos; falsos positivos|Test negativo: verdaderos negativos; falsos negativos"
    ] },
  { t: "Calidad y uso de los tests: CET-R, directrices ITC y uso en España",
    tip: "Quien evalúa es sobre todo usuario de tests y debe escogerlos con información fiable. El CET-R (Hernández et al., 2016), revisión del cuestionario de Prieto y Muñiz (2000) basada en el modelo de la EFPA, guía la revisión experta, y la Comisión de Test del COP publica revisiones desde 2010. La ITC tiene directrices de uso, adaptación (2.ª ed., 2017), seguridad y control de calidad. En España dominan los tests psicométricos, pero solo el 22,5 % conocía las revisiones.",
    v: [
      "CET-R=Cuestionario revisado en 2016 para valorar la calidad de un test",
      "Prieto y Muñiz (2000)=Autores de la primera versión del cuestionario de evaluación de tests",
      "Modelo EFPA=Modelo europeo de evaluación de tests en que se basa el CET-R",
      "Comisión de Test del COP=Publica revisiones periódicas de tests editados en España desde 2010",
      "Directriz de adaptación=Norma ITC para llevar un test a otra lengua y cultura con equivalencia",
      "Directriz de seguridad=Norma ITC para proteger los materiales y los resultados",
      "Control de calidad=Norma ITC para asegurar la aplicación, la corrección y el informe",
      "Muñiz y Fernández-Hermida=Hallaron en 2000 que los tests de inteligencia eran los más usados"
    ],
    g: [
      "El CET-R se publicó en ___.|2016|2000|2013",
      "En la encuesta de 2010, el test más usado en España fue el ___.|WISC|MCMI|MMPI",
      "Según la encuesta de 2020, solo el ___ conocía las revisiones de la Comisión de Test.|22,5 %|52,5 %|12,5 %",
      "La segunda edición de la directriz ITC de traducción y adaptación es de ___.|2017|2015|2010",
      "En la encuesta de 2020, los 25 tests más usados eran todos ___.|psicométricos|proyectivos|conductuales"
    ],
    tf: [
      "Para adaptar un test a otra cultura basta con una buena traducción de sus ítems.|F|Hay que comprobar que los ítems significan lo mismo, que la estructura se mantiene y que hay baremos propios.",
      "La encuesta de Muñiz y Fernández-Hermida (2000) reunió a 3.455 psicólogos.|V",
      "En la encuesta de 2010, el MCMI ocupó el primer lugar, por delante del WISC.|F|Fue al revés: el WISC quedó en primer lugar y el MCMI, en segundo.",
      "Elegir un test solo porque es el que hay en el centro, sin revisar sus evidencias para ese uso, contradice las buenas prácticas.|V"
    ],
    q: [
      "Una psicóloga va a usar en España un cuestionario traducido por un compañero, sin estudios de equivalencia ni baremos propios. ¿Qué directriz incumple?|La de traducción y adaptación|La de seguridad de materiales|La de control de calidad|La adaptación exige equivalencia de significado y de estructura y baremos propios. También choca con los arts. 6 y 18.",
      "¿En qué modelo se basa el CET-R?|El modelo europeo de la EFPA|Las directrices de la ITC|Los Standards de la AERA|La revisión de 2016 siguió el modelo europeo de evaluación de tests de la EFPA (Evers et al., 2013).",
      "¿Qué dato de las encuestas españolas resulta más preocupante?|Que pocos conocen las revisiones|Que los proyectivos lideran el uso|Que el WISC ha dejado de usarse|Solo el 22,5 % conocía las revisiones de la Comisión de Test: la información existe, pero no se consulta.",
      "Antes de usar un test, ¿qué pregunta de la lista de comprobación remite al art. 17 del Código?|Si se es competente para usarlo|Si sus baremos son actuales y amplios|Si lo revisó la Comisión de Test|El art. 17 exige competencia para aplicar, corregir e interpretar el test."
    ],
    inc: [
      "Sobre la calidad y el uso de los tests|El CET-R se usa para corregir cada protocolo|La ITC tiene una directriz sobre seguridad|El WISC era el más usado en la encuesta de 2010|El CET-R es una guía para que revisores expertos valoren la calidad de un test con criterios explícitos."
    ],
    seq: [
      "Hitos en la evaluación de la calidad de los tests|Primer cuestionario de Prieto y Muñiz>Inicio de las revisiones de la Comisión de Test>Modelo europeo de la EFPA>Publicación del CET-R>Encuesta de Muñiz, Hernández y Fernández-Hermida"
    ],
    cls: [
      "Directriz de la ITC|Uso de los tests: elección del test; comunicación de resultados|Traducción y adaptación: equivalencia cultural; baremos propios|Seguridad: protección de materiales; protección de resultados"
    ] }
] },
{ n: 11, t: "La entrevista: concepto, clasificación y habilidades", cap: 4, pir: "media", mods: [
  { t: "Concepto, ventajas y limitaciones",
    tip: "La entrevista psicológica es una conversación dirigida con propósito evaluador, con objetivo previo, roles diferenciados, interacción en dos sentidos y doble canal. El entrevistador es a la vez instrumento y fuente de error. Tiene el máximo ancho de banda (Cronbach y Gleser), pero una fidelidad variable, y en el cubo de Cone ocupa el extremo más indirecto. Sus limitaciones proceden sobre todo de la falta de control.",
    v: [
      "Entrevista psicológica=Conversación dirigida con propósito evaluador para obtener información de otro",
      "Ancho de banda=Amplitud de aspectos que abarca un método en poco tiempo",
      "Fidelidad=Precisión con la que un método mide cada aspecto",
      "Doble canal=Recoger lo que se dice y cómo se dice",
      "Roles diferenciados=Uno pregunta y dirige y el otro informa, en una relación asimétrica",
      "Interacción en dos sentidos=Lo que dice cada uno modifica lo que pregunta o cuenta el otro",
      "Efecto halo=Extender una característica llamativa al juicio global",
      "Primacía y recencia=Dar más peso a lo dicho al principio o al final"
    ],
    g: [
      "En términos de Cronbach y Gleser, la entrevista es el método de máximo ___.|ancho de banda|grado de fidelidad|nivel de control",
      "En el cubo de Cone, la entrevista ocupa el extremo más ___ de los métodos.|indirecto|directo|objetivo",
      "Por parte del entrevistado, la ___ social lleva a presentarse de forma favorable.|deseabilidad|aceptación|desinhibición",
      "A diferencia de la entrevista, un ___ busca obtener datos aunque sea contra la voluntad del otro.|interrogatorio|cuestionario|coloquio",
      "Como el entrevistador forma parte de la medida, la entrevista exige más ___ que aplicar un cuestionario.|formación|brevedad|rigidez"
    ],
    tf: [
      "Una charla entre amigos cumple los rasgos de la entrevista si hay interacción en dos sentidos.|F|Le faltan el objetivo fijado de antemano y los roles diferenciados.",
      "La entrevista es útil con personas que no saben o no pueden leer.|V",
      "Que la entrevista tenga gran ancho de banda significa que mide cada aspecto con gran precisión.|F|La precisión en cada aspecto es la fidelidad, que en la entrevista es variable.",
      "Si dos entrevistadores no preguntan lo mismo ni deciden con los mismos criterios, pueden llegar a conclusiones distintas.|V"
    ],
    q: [
      "Un psicólogo recibe a un joven derivado por problemas de conducta, lo imagina enseguida como consumidor de drogas y no explora el acoso escolar que sufre. ¿Qué sesgo actúa?|Sesgo de confirmación|Efecto de recencia|Efecto halo|La primera impresión guía las preguntas. La solución es estructurar la entrevista y contrastar con otros métodos.",
      "¿Qué rasgo distingue la entrevista de una charla entre amigos?|El objetivo fijado de antemano|La interacción en dos sentidos|El uso del canal no verbal|Ambas tienen interacción y canal no verbal. Lo propio de la entrevista es el objetivo previo y los roles diferenciados.",
      "¿De dónde proceden sobre todo las limitaciones de la entrevista?|De la falta de control|Del escaso ancho de banda|De su coste económico|Si no se pregunta lo mismo ni se decide con los mismos criterios, aumentan la variación y los sesgos.",
      "Un entrevistador da más peso a lo que el paciente dijo en los últimos minutos de la sesión. ¿Qué efecto actúa?|Recencia|Primacía|Halo|La recencia da más peso a lo dicho al final. La primacía, a lo dicho al principio."
    ],
    inc: [
      "Sobre la entrevista como método|Su fiabilidad es alta aunque no tenga estructura|Permite observar a la vez la conducta no verbal|Ayuda a construir la relación de trabajo|Sin estructura, la fiabilidad de la entrevista es baja."
    ],
    seq: [],
    cls: [
      "Ventaja o limitación de la entrevista|Ventajas: flexibilidad; acceso a la historia personal; observación no verbal; útil con quien no sabe leer|Limitaciones: coste en tiempo; sesgos del entrevistador; deseabilidad social; información difícil de ordenar"
    ] },
  { t: "Clasificación de las entrevistas",
    tip: "Las entrevistas se clasifican por grado de estructura, objetivo, número de participantes y momento del proceso, y los criterios se combinan. La estructura es el criterio más importante porque condiciona la fiabilidad: la libre es la menos fiable, la semiestructurada la más habitual en clínica y la estructurada la más fiable. En selección, la estructurada predice mejor el desempeño (r ≈ 0,42 frente a 0,19, según Sackett et al., 2022).",
    v: [
      "Entrevista libre=Sin guion: se sigue el hilo de lo que cuenta la persona",
      "Entrevista semiestructurada=Guion de áreas y preguntas que se adapta en orden y profundidad",
      "Entrevista estructurada=Preguntas, orden y codificación fijados, con resultado por reglas",
      "Entrevista conjunta=Con una pareja o una familia, permite ver cómo interactúan",
      "Entrevista de anamnesis=Reconstruye la historia vital, a veces con una línea de vida",
      "Entrevista de profundización=Explora áreas concretas o contrasta hipótesis",
      "Entrevista de orientación=Ayuda a decidir un itinerario, como elegir estudios",
      "Comparabilidad=Todas las personas reciben las mismas preguntas y criterios"
    ],
    g: [
      "En selección, la entrevista no estructurada predice el desempeño con r ≈ ___.|0,19|0,42|0,38",
      "La entrevista ___ es la más fiable y la más adecuada para investigación.|estructurada|semiestructurada|libre",
      "Por su objetivo, la entrevista motivacional se clasifica como entrevista ___.|terapéutica|diagnóstica|de selección",
      "En la entrevista ___, cuanto mayor es el grupo, menos detalle se obtiene de cada miembro.|grupal|conjunta|individual",
      "La entrevista de ___ valora la evolución tras una intervención.|seguimiento|profundización|devolución"
    ],
    tf: [
      "Una misma entrevista puede ser a la vez semiestructurada, diagnóstica, individual e inicial.|V",
      "La entrevista libre es la más válida porque es más profunda y se adapta a cada persona.|F|Su fiabilidad es la más baja: la flexibilidad aumenta la variación entre entrevistadores.",
      "En la entrevista estructurada, el resultado se obtiene por la impresión global del entrevistador.|F|Se obtiene aplicando reglas de codificación fijadas, no por impresión del entrevistador.",
      "En la entrevista conjunta, cada miembro puede callar cosas delante de los demás.|V"
    ],
    q: [
      "Una adolescente acude obligada por su familia. ¿Qué secuencia de formatos es la más probable?|De abierta a semiestructurada|De estructurada a libre|Estructurada de principio a fin|Se empieza de forma abierta para construir la relación y se pasa después a un formato semiestructurado.",
      "Un estudio epidemiológico con muchas personas y entrevistadores formados necesita datos comparables. ¿Qué entrevista conviene?|Estructurada de investigación|Libre de orientación|Semiestructurada terapéutica|La estructurada da comparabilidad y es la más adecuada para investigación y cribados amplios.",
      "¿Qué entrevista, según el momento del proceso, analiza la demanda, establece la relación e informa del proceso?|Inicial|De profundización|De seguimiento|Es el primer contacto. La de profundización explora áreas concretas y la de seguimiento valora la evolución.",
      "¿Qué ganan sobre todo las entrevistas estructuradas frente a las libres?|Comparabilidad entre personas|Mayor ancho de banda temático|Flexibilidad ante cada caso|Todas las personas reciben las mismas preguntas y se juzgan con los mismos criterios."
    ],
    inc: [
      "Sobre la clasificación de las entrevistas|La semiestructurada impide cambiar el orden|La estructurada es la más fiable de las tres|La libre sirve en los primeros minutos|En la semiestructurada se puede cambiar el orden, reformular y añadir preguntas de seguimiento."
    ],
    seq: [],
    cls: [
      "Grado de estructura|Libre: sin guion; fiabilidad más baja|Semiestructurada: guion adaptable; la más habitual en clínica|Estructurada: codificación por reglas; la más fiable"
    ] },
  { t: "Actitudes del entrevistador",
    tip: "Carl Rogers describió tres actitudes básicas, hoy necesarias en cualquier entrevista: empatía (comprender desde el marco del otro y comunicárselo), aceptación incondicional o calidez y autenticidad o congruencia. La escucha activa las pone en práctica. No son un adorno: facilitan la franqueza y ayudan a controlar la deseabilidad social. Empatía no es complicidad ni darle la razón a la persona.",
    v: [
      "Empatía=Comprender la experiencia del otro desde su marco y comunicárselo",
      "Aceptación incondicional=Respeto por la persona con independencia de lo que cuente",
      "Autenticidad=Coherencia entre lo que se piensa, se dice y se expresa con el cuerpo",
      "Escucha activa=Atender sin interrumpir, mostrar que se sigue y devolver lo escuchado",
      "Carl Rogers=Autor humanista que describió las tres actitudes básicas",
      "Discrepancia no verbal=Desajuste entre lo que se cuenta y cómo se expresa",
      "Complicidad=Tomar partido por el paciente y cerrar la exploración",
      "Vigilar la propia influencia=Atender a las expectativas, reacciones y estilo del entrevistador"
    ],
    g: [
      "Otro nombre de la autenticidad es ___.|congruencia|calidez|aceptación",
      "Otro nombre de la aceptación incondicional es ___.|calidez|empatía|congruencia",
      "La empatía es la base de la técnica del ___.|reflejo|resumen|embudo",
      "Ante lo no verbal, lo útil es fijarse en las ___.|discrepancias|regularidades|gesticulaciones",
      "Desde el principio hay que garantizar la confidencialidad y explicar sus ___.|límites|ventajas|orígenes"
    ],
    tf: [
      "Empatía significa sentir lo mismo que la persona y darle la razón.|F|Consiste en entender qué siente y por qué, y comunicárselo, sin sentir lo mismo ni darle la razón.",
      "Las actitudes rogerianas se consideran necesarias en cualquier entrevista de evaluación, sea cual sea el modelo.|V",
      "La autenticidad obliga al entrevistador a contar todo lo que piensa.|F|No significa contarlo todo, sino no fingir: un interés impostado se nota.",
      "Quien no se siente juzgado tiene menos motivos para presentarse de forma favorable.|V"
    ],
    q: [
      "Un paciente dice que deja de ir a trabajar porque su jefe «es insoportable». ¿Qué respuesta es empática?|«Ir a trabajar se le hace muy cuesta arriba»|«Es normal, yo en su lugar haría lo mismo»|«Tiene que intentar ir aunque le cueste»|Reconoce el malestar y deja abierta la conversación. Dar la razón es complicidad y cierra la exploración.",
      "Un entrevistador muestra rechazo ante un consumo elevado de alcohol. ¿Qué efecto es más probable?|Que la persona rebaje las cifras|Que la persona aumente su franqueza|Que mejore la alianza de trabajo|Falla la aceptación incondicional: la persona tenderá a rebajar las cifras en la siguiente pregunta.",
      "Una paciente cuenta una pérdida reciente con una sonrisa. ¿Cómo conviene tratarlo?|Como una discrepancia a entender|Como una prueba de que miente|Como un gesto de significado fijo|Hay que fijarse en las discrepancias y tratarlas con tacto como pistas, no como pruebas de que la persona miente.",
      "¿Qué actitud se refiere a la coherencia entre lo que el entrevistador piensa, dice y expresa con el cuerpo?|Autenticidad|Empatía|Aceptación|La autenticidad o congruencia no exige contarlo todo, sino no fingir."
    ],
    inc: [
      "Sobre las actitudes del entrevistador|Aceptar a la persona implica aprobar su conducta|La escucha activa pone en juego las tres actitudes|Hay que hablar como habla la persona|Se acepta a la persona, no necesariamente su conducta."
    ],
    seq: [],
    cls: [
      "Actitud básica|Empatía: marco de referencia del otro; base del reflejo|Aceptación incondicional: calidez; respeto sin juzgar|Autenticidad: congruencia; no fingir interés"
    ] },
  { t: "Técnicas de entrevista",
    tip: "Hay técnicas para obtener información (preguntas) y para devolverla (escucha). Las preguntas abiertas, semiabiertas y cerradas se ordenan en embudo, o en embudo invertido con personas poco habladoras o ansiosas, y conviene evitar las sugestivas, dobles y encadenadas. La clarificación es una pregunta que pide precisar, la paráfrasis devuelve el contenido, el reflejo la emoción y el resumen ordena varios temas. La confrontación exige una relación ya establecida.",
    v: [
      "Pregunta abierta=Permite que la persona elija qué contar y con qué palabras",
      "Pregunta semiabierta=Acota el tema sin dar la respuesta, como «¿En qué situaciones le pasa?»",
      "Pregunta sugestiva=Contiene la respuesta esperada",
      "Pregunta doble=Plantea dos cuestiones a la vez",
      "Clarificación=Pregunta que pide precisar algo ambiguo",
      "Paráfrasis=Devuelve con otras palabras el contenido de lo dicho",
      "Reflejo=Devuelve la emoción percibida, aunque no se haya nombrado",
      "Resumen=Recoge varios temas de la sesión y los ordena"
    ],
    g: [
      "La secuencia que va de las preguntas abiertas a las cerradas se llama ___.|embudo|abanico|escalera",
      "«¿Duerme y come bien?» es un ejemplo de pregunta ___.|doble|sugestiva|encadenada",
      "«Supongo que discuten mucho, ¿no?» es una pregunta ___.|sugestiva|doble|semiabierta",
      "La paráfrasis se queda en los hechos, y el reflejo apunta a los ___.|sentimientos|contenidos|problemas",
      "Las expresiones breves como «ya» o «siga» se llaman ___.|facilitaciones|clarificaciones|paráfrasis"
    ],
    tf: [
      "La clarificación es una técnica de devolución, igual que la paráfrasis y el reflejo.|F|La clarificación es una pregunta que pide precisar algo ambiguo, no una devolución.",
      "La paráfrasis y el reflejo se formulan de forma tentativa para que la persona pueda corregir.|V",
      "La confrontación es más eficaz en los primeros minutos, antes de que la persona se ponga a la defensiva.|F|Solo debe usarse con la relación ya establecida. Al principio suele provocar una actitud defensiva.",
      "Las preguntas cerradas son precisas, pero pueden dejar fuera lo importante si se usan demasiado pronto.|V"
    ],
    q: [
      "Una paciente dice: «Desde que empecé el trabajo nuevo no duermo y llego a casa agotada». El psicólogo responde: «Parece que se siente desbordada con esta etapa». ¿Qué técnica usa?|Reflejo|Paráfrasis|Clarificación|Devuelve una emoción que no se ha nombrado. La paráfrasis devolvería el contenido: duerme mal y acaba sin energía.",
      "Una paciente dice que no duerme desde que cambió de trabajo, y el psicólogo pregunta: «¿Le cuesta dormirse o se despierta por la noche?». ¿Qué técnica es?|Clarificación|Paráfrasis|Resumen|Pide precisar algo ambiguo. Es una pregunta, no una técnica de devolución.",
      "«Me cuenta que la relación con su hermano va bien, y a la vez que lleva meses sin cogerle el teléfono.» ¿Qué técnica es?|Confrontación|Paráfrasis|Clarificación|Señala una discrepancia sin tono acusador. Exige que la relación ya esté establecida.",
      "Con un paciente muy ansioso y poco hablador, ¿qué secuencia de preguntas conviene?|Embudo invertido|Embudo clásico|Preguntas encadenadas|Se empieza por preguntas concretas y fáciles y se abre a medida que la persona se siente cómoda."
    ],
    inc: [
      "Sobre las técnicas de entrevista|El reflejo devuelve el contenido de lo dicho|El resumen recoge y ordena varios temas de la sesión|Los silencios invitan a la persona a seguir hablando|El reflejo devuelve la emoción. Devolver el contenido con otras palabras es la paráfrasis."
    ],
    seq: [],
    cls: [
      "Tipo de técnica|Obtener información: pregunta abierta; pregunta cerrada; pregunta semiabierta; clarificación|Devolver información: paráfrasis; reflejo; resumen"
    ] }
] },
{ n: 12, t: "El proceso y los tipos de entrevista", cap: 4, pir: "media", mods: [
  { t: "Fases de la entrevista",
    tip: "La entrevista tiene cinco fases: preentrevista (análisis de la demanda, guion y encuadre), apertura (presentación, información y rapport), desarrollo (exploración hipotético-deductiva en embudo), cierre (resumen, dudas y siguientes pasos) y reflexión posterior (ordenar notas, separar lo observado de lo inferido y revisar hipótesis). Suele repartirse en varias sesiones y el proceso no es lineal.",
    v: [
      "Preentrevista=Análisis de la demanda y preparación del guion y del encuadre",
      "Encuadre=Espacio tranquilo, sin interrupciones y con tiempo suficiente",
      "Rapport=Clima de confianza y colaboración que facilita hablar con franqueza",
      "Apertura=Fase en que el entrevistador se presenta, informa y crea el clima",
      "Desarrollo=Fase central de exploración guiada por hipótesis",
      "Cierre=Resumir, resolver dudas y explicar los siguientes pasos",
      "Reflexión posterior=Ordenar notas, separar lo observado de lo inferido y revisar hipótesis",
      "Razonamiento hipotético-deductivo=Formular hipótesis provisionales y elegir preguntas que las contrasten"
    ],
    g: [
      "Analizar quién pide la evaluación y para qué corresponde a la ___.|preentrevista|apertura|reflexión posterior",
      "El objetivo principal de la apertura es crear ___.|rapport|hipótesis|encuadre",
      "En el cierre conviene no abrir temas nuevos con carga ___.|emocional|cognitiva|diagnóstica",
      "Quedarse con la primera hipótesis es el error típico de la fase de ___.|desarrollo|apertura|cierre",
      "En la reflexión posterior, el entrevistador separa lo observado de lo ___.|inferido|olvidado|deseado"
    ],
    tf: [
      "Pasar directamente a las preguntas cerradas es el error típico de la apertura.|V",
      "Mezclar lo observado con lo interpretado es el error típico del cierre.|F|Es el error típico de la reflexión posterior, cuando se ordenan los datos y se revisan las hipótesis.",
      "El proceso de entrevista es lineal: cada fase se completa antes de pasar a la siguiente.|F|No es lineal: una respuesta inesperada puede obligar a recordar la confidencialidad o a replantear hipótesis.",
      "Lo habitual es que la entrevista de evaluación no se complete en una sola sesión.|V"
    ],
    q: [
      "Tras la sesión, una psicóloga ordena sus notas y se pregunta si guio demasiado al paciente. ¿En qué fase está?|Reflexión posterior|Cierre de la sesión|Desarrollo final|En la reflexión posterior también se examina la propia actuación: si se guio demasiado o quedaron áreas sin explorar.",
      "Un entrevistador avisa de que queda poco tiempo, resume lo principal y explica que habrá cuestionarios para casa. ¿Qué fase es?|Cierre|Desarrollo|Apertura|El cierre incluye avisar, resumir, resolver dudas y explicar los siguientes pasos.",
      "En la apertura, ¿qué se pide a la persona?|Que cuente el motivo a su manera|Que conteste preguntas cerradas|Que precise frecuencia y duración|Se la invita a exponer el motivo de consulta con sus palabras, sin interrumpirla, para crear rapport.",
      "¿Qué riesgo tiene empezar el desarrollo por preguntas cerradas?|Imponer el mapa del entrevistador|Obtener datos demasiado precisos|Alargar en exceso la entrevista|La persona se limita a contestar lo que se le pregunta y no aparecen temas imprevistos."
    ],
    inc: [
      "Sobre las fases de la entrevista|El rapport se crea sobre todo en la reflexión posterior|El desarrollo sigue un razonamiento hipotético-deductivo|La preentrevista incluye cuidar el encuadre|El rapport se crea en la apertura. La reflexión posterior tiene lugar después de la sesión."
    ],
    seq: [
      "Fases de la entrevista|Preentrevista>Apertura>Desarrollo>Cierre>Reflexión posterior"
    ],
    cls: [] },
  { t: "Entrevistas estandarizadas y diagnóstico",
    tip: "Dos clínicos discrepan porque preguntan cosas distintas o porque deciden con criterios distintos, y las entrevistas estandarizadas reducen ambas fuentes. La SCID-5 y la ADIS-5 son semiestructuradas y las aplican clínicos, mientras que la CIDI y la MINI son estructuradas. Aportan exhaustividad, comparabilidad y formación, pero no explican el caso. Rettew et al. (2009) hallaron una concordancia media baja con el diagnóstico rutinario (κ 0,27), lo que no prueba que este sea peor.",
    v: [
      "SCID-5=Entrevista semiestructurada según el DSM-5 aplicada por clínicos (First et al.)",
      "ADIS-5=Entrevista semiestructurada centrada en la ansiedad y trastornos relacionados",
      "CIDI=Entrevista estructurada que aplican entrevistadores legos entrenados",
      "MINI=Entrevista estructurada breve, útil para cribados y como primer paso",
      "Exhaustividad=Obligación de explorar todas las áreas previstas",
      "Comparabilidad=Posibilidad de comparar pacientes, centros y estudios",
      "Rettew et al. (2009)=Metaanálisis de 38 estudios sobre diagnóstico rutinario frente a estandarizado",
      "Brown y Barlow (2014)=Autores de la entrevista específica para los trastornos de ansiedad"
    ],
    g: [
      "En Rettew et al. (2009), la concordancia más baja fue en el trastorno de ansiedad generalizada, con un κ de ___.|0,19|0,27|0,86",
      "La SCID-5 sigue los criterios del ___.|DSM-5|CIE-11|DSM-IV",
      "En las entrevistas ___, la decisión se obtiene por reglas y pueden aplicarlas legos entrenados.|estructuradas|semiestructuradas|libres",
      "La concordancia más alta en Rettew et al. se dio en la ___.|anorexia|depresión|esquizofrenia",
      "El metaanálisis de Rettew et al. reunió a ___ personas.|15.967|3.455|2.500"
    ],
    tf: [
      "La SCID-5 es una entrevista estructurada pensada para que la apliquen entrevistadores legos.|F|La SCID-5 es semiestructurada y la aplican clínicos. Lo de legos entrenados corresponde a la CIDI.",
      "Una entrevista estandarizada dice si se cumplen unos criterios, pero no explica qué mantiene el problema.|V",
      "Rettew et al. (2009) demostraron que el diagnóstico clínico rutinario es peor que el estandarizado.|F|Los autores advierten que solo indica que ambas vías no llegan al mismo resultado, no cuál es peor.",
      "En la SCID-5, el clínico puede añadir preguntas para aclarar y decide con su juicio si se cumple un criterio.|V"
    ],
    q: [
      "Dos psicólogas atienden al mismo paciente con preocupación y tensión. Una explora la duración y el control de la preocupación, y la otra, los sucesos recientes. Llegan a diagnósticos distintos. ¿Qué lo habría evitado mejor?|Una entrevista semiestructurada|Una entrevista libre y más larga|Más tiempo dedicado al rapport|Con la misma entrevista semiestructurada, ambas habrían explorado los mismos criterios.",
      "Un estudio epidemiológico con miles de personas contará con entrevistadores sin formación clínica. ¿Qué entrevista es adecuada?|CIDI|SCID-5|ADIS-5|La CIDI es estructurada y la pueden aplicar entrevistadores legos entrenados en estudios epidemiológicos amplios.",
      "¿Qué dos fuentes de desacuerdo entre clínicos reducen las entrevistas estandarizadas?|Preguntar y decidir de forma distinta|Edad del paciente y tipo de centro|Rapport y duración de la sesión|Fijan qué hay que preguntar y cómo se codifica cada respuesta respecto a los criterios diagnósticos.",
      "Un servicio de ansiedad busca una entrevista semiestructurada específica de sus trastornos. ¿Cuál elegiría?|ADIS-5|CIDI|MINI|La ADIS-5 (Brown y Barlow, 2014) es semiestructurada y se centra en los trastornos de ansiedad y relacionados."
    ],
    inc: [
      "Sobre las entrevistas estandarizadas|Sustituyen a la evaluación completa del caso|Obligan a explorar todas las áreas previstas|Su calidad depende del entrenamiento de quien las usa|No sustituyen a la evaluación completa: dicen si se cumplen criterios, no por qué aparece el problema."
    ],
    seq: [],
    cls: [
      "Formato de la entrevista diagnóstica|Semiestructurada, aplicada por clínicos: SCID-5; ADIS-5|Estructurada: CIDI; MINI"
    ] },
  { t: "Entrevista clínica, conductual y motivacional",
    tip: "La entrevista clínica incluye el examen del estado mental, de tradición médica, que revisa aspecto, lenguaje, afecto, pensamiento, percepción, cognición y juicio. La conductual no busca una etiqueta, sino las conductas problema y las variables que las controlan, organizadas con E-O-R-K-C (Kanfer y Saslow, 1965). La motivacional de Miller y Rollnick (1991) ayuda a resolver la ambivalencia ante el cambio con el estilo OARS y se considera terapéutica.",
    v: [
      "Examen del estado mental=Exploración ordenada de cómo se presenta la persona en la entrevista",
      "Insight=Conciencia del problema",
      "Afecto y humor=Estado emocional observado y el que la persona describe",
      "Fórmula E-O-R-K-C=Estímulos, organismo, respuesta, contingencia y consecuencias",
      "Ambivalencia=No tener claro que se quiera cambiar una conducta",
      "OARS=Abiertas, afirmaciones, reflejos y resúmenes",
      "Afirmaciones=Expresiones que reconocen esfuerzos y capacidades",
      "Miller y Rollnick (1991)=Autores de la entrevista motivacional"
    ],
    g: [
      "El examen del estado mental procede de la tradición ___.|médica|conductual|humanista",
      "En las siglas OARS, la A corresponde a ___.|afirmaciones|aclaraciones|acuerdos",
      "La entrevista motivacional se usa mucho con conductas ___ y de salud.|adictivas|psicóticas|disociativas",
      "La tercera edición de la obra de Miller y Rollnick sobre la entrevista motivacional es de ___.|2013|2009|2002",
      "En la entrevista conductual, las preguntas más útiles suelen ser las de qué, cuándo, dónde y ___.|cómo|por qué|quién"
    ],
    tf: [
      "La entrevista conductual busca sobre todo asignar una etiqueta diagnóstica.|F|Busca identificar las conductas problema y las variables que las controlan, como alternativa a la clasificación.",
      "La entrevista motivacional suele clasificarse como entrevista terapéutica o de intervención.|V",
      "El examen del estado mental se basa sobre todo en cuestionarios autoaplicados.|F|Se basa sobre todo en la observación y en preguntas específicas durante la entrevista.",
      "Las entrevistas clínica, conductual y motivacional pueden combinarse en una misma consulta.|V"
    ],
    q: [
      "Un paciente dice: «Me pongo fatal en las reuniones». ¿Qué pregunta es más propia de la entrevista conductual?|«¿Qué estaba haciendo justo antes?»|«¿Cómo era su relación con su padre?»|«¿Qué diagnóstico cree que tiene?»|Busca antecedentes concretos para convertir la queja vaga en una cadena de hechos observables.",
      "En una entrevista motivacional, el psicólogo dice: «Venir hoy ya ha supuesto un paso». ¿Qué elemento de OARS es?|Afirmación|Reflejo|Resumen|Reconoce un esfuerzo o una capacidad de la persona: es una afirmación.",
      "«Por un lado le relaja, y por otro le está costando discusiones en casa.» ¿Qué elemento de OARS es?|Reflejo|Resumen|Afirmación|Devuelve los dos lados de la ambivalencia: es un reflejo.",
      "Explorar la orientación, la atención y la memoria del paciente corresponde al área de…|cognición|percepción|juicio e insight|En el examen del estado mental, la cognición incluye orientación, atención y memoria."
    ],
    inc: [
      "Sobre los tipos de entrevista clínica|La motivacional requiere un deseo claro de cambio|La conductual organiza la información con E-O-R-K-C|El estado mental incluye percepción y cognición|Se usa cuando la persona no tiene claro que quiera cambiar, para ayudarla a resolver su ambivalencia."
    ],
    seq: [],
    cls: [
      "Área del examen del estado mental|Cognición: orientación; atención; memoria|Pensamiento: curso; contenido; ideas de muerte|Aspecto y conducta: aseo; actividad motora; colaboración"
    ] },
  { t: "Entrevista forense, de selección y con niños",
    tip: "La entrevista cognitiva de Fisher y Geiselman combina cuatro técnicas: reinstauración del contexto, informar de todo, cambio de orden y cambio de perspectiva. Aumenta mucho los detalles correctos y poco los incorrectos, pero no protege frente a la sugestión posterior. La entrevista de selección estructurada predice mejor el desempeño, y con niños hay que adaptar el lenguaje, evitar la sugestión y contar con varios informantes.",
    v: [
      "Entrevista cognitiva=Entrevista forense con cuatro técnicas basadas en la memoria",
      "Reinstauración del contexto=Reconstruir mentalmente el lugar, el momento y lo que se sentía",
      "Informar de todo=Contar cualquier detalle aunque parezca irrelevante o incompleto",
      "Cambio de orden=Relatar los hechos en otra secuencia, por ejemplo desde el final",
      "Cambio de perspectiva=Describir lo ocurrido como lo habría visto otra persona presente",
      "Escalas con anclajes=Describen cómo es una respuesta pobre, aceptable o excelente",
      "Memoria reconstructiva=Razón por la que las preguntas sugestivas pueden añadir detalles falsos",
      "Köhnken et al. (1999)=Metaanálisis con unos 2.500 entrevistados sobre la entrevista cognitiva"
    ],
    g: [
      "Según Köhnken et al. (1999), la entrevista cognitiva aumentó los detalles correctos con una d de ___.|0,87|0,28|1,20",
      "Con la entrevista cognitiva, la exactitud global fue del 85 % frente al ___ de la estándar.|82 %|62 %|75 %",
      "En Memon, Meissner y Fraser (2010), las confabulaciones aumentaron con una d de solo ___.|0,08|0,24|0,91",
      "Sackett et al. (2022) revisaron a la baja las cifras de ___ y Hunter (1998).|Schmidt|Salgado|Lievens",
      "La revisión de Sackett et al. (2022) fue criticada por Oh, Le y ___ (2023).|Roth|Hunter|Fiske"
    ],
    tf: [
      "La entrevista cognitiva protege al testigo frente a la información engañosa que reciba después.|F|Es su límite real: no protege frente a la sugestión posterior.",
      "El efecto de la entrevista cognitiva es algo menor en niños.|V",
      "Según Schmidt y Hunter (1998), la entrevista estructurada tenía una validez de 0,42.|F|Schmidt y Hunter daban 0,51 y 0,38. El 0,42 es la cifra revisada de Sackett et al. (2022).",
      "Con niños conviene usar frases cortas, palabras conocidas y una sola pregunta cada vez.|V"
    ],
    q: [
      "Una policía pide a una testigo que cuente el robo empezando por el final. ¿Qué técnica de la entrevista cognitiva usa?|Cambio de orden|Cambio de perspectiva|Reinstauración del contexto|Relatar los hechos en otro orden, por ejemplo desde el final, es la técnica del cambio de orden.",
      "Una empresa quiere que su entrevista de selección prediga mejor el desempeño. ¿Qué cambio es más eficaz?|Usar escalas con anclajes|Dar libertad al entrevistador|Confiar en la primera impresión|La versión que mejor funciona usa las mismas preguntas, escalas con anclajes y varios evaluadores independientes.",
      "Al entrevistar a una niña de cinco años, el psicólogo repite una pregunta que ella ya ha contestado. ¿Qué riesgo corre?|Que crea que su respuesta era errónea|Que recuerde mejor lo que ocurrió|Que gane confianza en el entrevistador|Los niños pequeños tienden a contestar lo que creen que el adulto espera, y repetir la pregunta sugiere que la primera respuesta falló.",
      "Según la evidencia, ¿qué consigue la entrevista cognitiva frente a la estándar?|Más detalles correctos y pocos más errores|Más errores que detalles correctos nuevos|Igual número de errores y de aciertos|d de 0,87 en correctos y de 0,28 en incorrectos, con una exactitud global similar (85 % frente a 82 %)."
    ],
    inc: [
      "Sobre la entrevista forense, de selección y con niños|La entrevista cognitiva llena el testimonio de errores|En la selección conviene que puntúen varios evaluadores|Con niños son útiles apoyos como el dibujo o el juego|Aumenta mucho los detalles correctos y poco los incorrectos, y la exactitud global se mantiene."
    ],
    seq: [],
    cls: [
      "Rasgo de la entrevista|Entrevista cognitiva: reinstauración del contexto; cambio de perspectiva; informar de todo|Selección estructurada: escalas con anclajes; varios evaluadores; mismas preguntas para todos|Entrevista con niños: apoyo del dibujo o el juego; varios informantes; lenguaje acorde con la edad"
    ] }
] }
);
