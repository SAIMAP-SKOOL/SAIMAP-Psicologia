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
