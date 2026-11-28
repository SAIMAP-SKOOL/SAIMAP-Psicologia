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
