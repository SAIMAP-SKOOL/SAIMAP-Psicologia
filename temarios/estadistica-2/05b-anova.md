## Unidad 13 · Medidas repetidas: esfericidad y correcciones

**Objetivos:** explicar por qué el ANOVA de medidas repetidas es más potente que el de grupos independientes y repartir su variabilidad; definir la esfericidad, valorar la prueba de Mauchly y aplicar las correcciones épsilon; elegir las comparaciones posteriores y conocer las alternativas multivariada y de modelos mixtos; aplicar la prueba de Friedman y leer la salida del programa.

### 13.1 Extraer la variabilidad de los sujetos

En un **diseño intrasujeto** las mismas personas pasan por todas las condiciones o se miden en varios momentos. Con dos medidas basta la t relacionada (Unidad 10); con tres o más se usa el **ANOVA de medidas repetidas**. Los efectos de orden y el contrabalanceo se estudian en Métodos y Diseños de Investigación.

Las personas difieren mucho entre sí, y de forma bastante estable: quien lee bien suele leer bien en cualquier condición. En el ANOVA entre grupos esas diferencias forman parte del error. En medidas repetidas cada persona es su propio control, así que se puede calcular cuánto se aparta su media de la media general y **sacar esa parte del error**:

> SC_T = SC_sujetos + SC_intrasujeto

> SC_intrasujeto = SC_tratamiento + SC_residual

> F = MC_tratamiento / MC_residual, con gl (k − 1) y (k − 1)(n − 1)

Con n personas y k condiciones, los gl son n − 1 para los sujetos, k − 1 para el tratamiento, (k − 1)(n − 1) para el residual y nk − 1 en total. La SC de sujetos no suele contrastarse, porque no interesa saber que las personas difieren entre sí: simplemente deja de contar como error. El **residual** es la interacción sujeto × tratamiento, es decir, lo **inconsistente** que es el efecto de una persona a otra.

![m](particion-mr.png)

Figura 13.1. **Partición de la variabilidad en los diseños entre grupos y de medidas repetidas.** En el diseño entre grupos, la SC total se reparte entre el efecto y el error; en el de medidas repetidas, la SC de sujetos sale del error y el denominador de F se reduce. Esquema ilustrativo. Elaboración propia (SAIMAP).

**Un ejemplo.** Ocho estudiantes leen tres textos de dificultad equivalente en tres condiciones (silencio, música instrumental y música con letra), con el orden variado entre participantes, y responden a una prueba de comprensión de 0 a 20 (datos ficticios):

| Persona | Silencio | Instrumental | Con letra | Media |
| --- | --- | --- | --- | --- |
| 1 | 14 | 12 | 11 | 12,33 |
| 2 | 18 | 19 | 15 | 17,33 |
| 3 | 11 | 10 | 9 | 10,00 |
| 4 | 16 | 13 | 14 | 14,33 |
| 5 | 12 | 13 | 8 | 11,00 |
| 6 | 19 | 17 | 16 | 17,33 |
| 7 | 13 | 11 | 12 | 12,00 |
| 8 | 15 | 14 | 10 | 13,00 |
| Media | 14,75 | 13,63 | 11,88 | 13,42 |

| Fuente | SC | gl | MC | F | p |
| --- | --- | --- | --- | --- | --- |
| Condición | 33,58 | 2 | 16,79 | 11,15 | 0,001 |
| Sujetos | 157,17 | 7 | 22,45 | | |
| Residual | 21,08 | 14 | 1,51 | | |
| Total | 211,83 | 23 | | | |

En este ejemplo, el 74 % de la variabilidad total (157,17 de 211,83) se debe a diferencias entre personas, la parte que la figura 13.1 representa como SC de sujetos. Si los mismos datos se analizaran como tres grupos distintos, el error sería 157,17 + 21,08 = 178,25 con 21 gl, la MC de error valdría 8,49 en lugar de 1,51 y el resultado, F(2, 21) = 1,98, p = 0,163. Mismas medias, conclusión opuesta: se pierden gl de error (de 21 a 14), pero el denominador se reduce mucho más.

SPSS da por defecto el **η² parcial**, η²p = 33,58 / (33,58 + 21,08) = 0,61, que excluye la variabilidad de los sujetos y no es comparable con el η² de un diseño entre grupos. El **η² generalizado** (aquí, SC_condición / SC_T = 0,16) sí lo es (Olejnik y Algina, 2003; apartado 14.3).

### 13.2 Esfericidad, prueba de Mauchly y corrección épsilon

El ANOVA de medidas repetidas supone independencia **entre** personas (no entre las medidas de una misma persona), residuos aproximadamente normales (Unidad 7) y un supuesto propio: la **esfericidad**. Hay esfericidad cuando las **varianzas de las diferencias** entre cada par de niveles son iguales. Con tres condiciones hay tres diferencias (1−2, 1−3, 2−3); con k niveles, k(k − 1)/2. Una condición suficiente es la **simetría compuesta**: todas las varianzas iguales y todas las covarianzas iguales.

Un caso que se pregunta a menudo: **con dos niveles la esfericidad se cumple siempre**, porque solo hay una diferencia y no hay nada con qué compararla.

![m](esfericidad.png)

Figura 13.2. **Esfericidad y su violación.** A la izquierda, varianzas de las diferencias similares (20, 22 y 21); a la derecha, muy distintas (10, 30 y 45). Al lado, el rango de ε de Greenhouse-Geisser con tres niveles, de 1/(k − 1) = 0,5 a 1, y su efecto: multiplicar los gl por ε. Esquema con valores ficticios. Elaboración propia (SAIMAP).

Cuando la esfericidad no se cumple, la F de medidas repetidas se vuelve **liberal**: rechaza H₀ verdadera con más frecuencia que el α nominal. En el ejemplo de la lectura, las varianzas de las diferencias son 2,13 (silencio − instrumental), 1,55 (silencio − con letra) y 5,36 (instrumental − con letra), un patrón parecido al de la derecha de la figura 13.2.

**La prueba de Mauchly** (Mauchly, 1940) contrasta H₀: hay esfericidad. Su estadístico W vale 1 con esfericidad perfecta y se aproxima con χ². Tiene el problema de todas las pruebas previas de supuestos (Unidad 8): **poca potencia con n pequeños** y exceso de potencia con n grandes. En el ejemplo, W = 0,38, χ²(2) = 5,78, p = 0,056: no es significativa, y sin embargo el épsilon indica una desviación notable.

**La corrección épsilon.** El índice **ε** mide cuánto se aleja la matriz de la esfericidad: vale 1 si se cumple y su mínimo es 1/(k − 1). La corrección consiste en multiplicar los dos gl por ε. El valor de F no cambia; cambia la distribución con la que se compara, y el valor p aumenta:

> gl corregidos = ε · (k − 1) y ε · (k − 1)(n − 1)

- **Greenhouse-Geisser** (Greenhouse y Geisser, 1959): tiende a ser **conservadora**.
- **Huynh-Feldt** (Huynh y Feldt, 1976): **más liberal**; puede superar 1, y entonces se trunca en 1.
- **Límite inferior**: usa el ε mínimo; es la corrección más severa.

| Corrección | ε | gl | p |
| --- | --- | --- | --- |
| Esfericidad asumida | 1 | 2 y 14 | 0,001 |
| Greenhouse-Geisser | 0,62 | 1,24 y 8,65 | 0,007 |
| Huynh-Feldt | 0,68 | 1,37 y 9,58 | 0,005 |
| Límite inferior | 0,50 | 1 y 7 | 0,012 |

Una regla orientativa (Girden, 1992) es usar Huynh-Feldt si ε > 0,75 y Greenhouse-Geisser si ε < 0,75. Aquí ε = 0,62, así que se informa F(1,24; 8,65) = 11,15, p = 0,007. La recomendación actual es **aplicar la corrección siempre** en lugar de decidir según la significación de Mauchly: si la esfericidad se cumple, ε se acerca a 1 y la corrección apenas cambia nada; si no se cumple, protege aunque Mauchly no lo haya detectado, como en este ejemplo.

### 13.3 Comparaciones posteriores, enfoque multivariado y modelos mixtos

Una F significativa indica que no todas las medias de las condiciones son iguales, pero no cuáles difieren. Hay tres estrategias, ya conocidas en grupos independientes (Unidad 12), con algunas particularidades.

**Comparaciones por pares.** Se hacen t relacionadas entre cada par de niveles y se corrige α con **Bonferroni** o **Holm**. Cada comparación usa su propio término de error, la varianza de esa diferencia concreta, de modo que **no depende de la esfericidad**. Por eso se recomienda en medidas repetidas, en lugar de procedimientos pensados para un error común, como Tukey. En el ejemplo de la lectura:

| Comparación | Diferencia | t(7) | p sin corregir | p Holm | p Bonferroni |
| --- | --- | --- | --- | --- | --- |
| Silencio − instrumental | 1,13 | 2,18 | 0,065 | 0,131 | 0,196 |
| Silencio − con letra | 2,88 | 6,52 | < 0,001 | 0,001 | 0,001 |
| Instrumental − con letra | 1,75 | 2,14 | 0,070 | 0,131 | 0,209 |

Solo la diferencia entre silencio y música con letra se mantiene tras la corrección. Las otras dos no son significativas con ocho personas, lo que no demuestra que no existan (Unidad 3). En SPSS estas comparaciones se piden en **Medias marginales estimadas**, marcando la comparación de efectos principales y eligiendo el ajuste. La opción «DMS» (diferencia mínima significativa) es la LSD de Fisher, **sin corrección**, no un procedimiento de Tukey.

**Contrastes planificados y de tendencia.** Si los niveles están ordenados (semanas de tratamiento, dosis), suele interesar más la **forma del cambio** que las diferencias por pares. SPSS ofrece por defecto contrastes **polinómicos** (tendencia lineal, cuadrática…) en la tabla «Pruebas de contrastes intrasujetos». Con tres momentos, una tendencia cuadrática significativa indica, por ejemplo, que la mejora se produce entre el pre y el post y luego se estabiliza.

**Enfoque multivariado (MANOVA).** Trata las k − 1 diferencias entre niveles como varias variables dependientes y **no exige esfericidad**. SPSS lo incluye en la tabla «Pruebas multivariadas» (lambda de Wilks, traza de Pillai). Su limitación es que necesita bastantes más personas que niveles y, con muestras pequeñas, suele ser menos potente que la F corregida.

**Modelos lineales mixtos** (o multinivel). Modelan cada observación con un efecto aleatorio de la persona. Su gran ventaja es que **aprovechan los datos incompletos**: el ANOVA de medidas repetidas elimina a quien le falte una sola medida, algo frecuente en estudios longitudinales con abandonos. También admiten momentos desigualmente espaciados y modelan la estructura de covarianzas en lugar de suponer esfericidad. En SPSS están en **Analizar > Modelos mixtos**.

| Enfoque | Exige esfericidad | Datos incompletos | Comentario |
| --- | --- | --- | --- |
| ANOVA univariado sin corregir | Sí | Elimina el caso | Liberal si falla la esfericidad |
| ANOVA con corrección ε | No (la corrige) | Elimina el caso | Opción por defecto razonable |
| MANOVA | No | Elimina el caso | Necesita n bastante mayor que k |
| Modelo lineal mixto | No (se modela) | Usa todos los datos | Más flexible y más complejo |

### 13.4 La prueba de Friedman y la lectura de la salida

La **prueba de Friedman** (Friedman, 1937) es la alternativa basada en rangos al ANOVA de un factor de medidas repetidas. Se ordenan las puntuaciones **dentro de cada persona** (de 1 a k) y se comparan las sumas de rangos de las condiciones. Con R_j como suma de rangos de la condición j:

> χ²_F = [12 / (n · k · (k + 1))] · ΣR_j² − 3n(k + 1), con gl = k − 1

En el ejemplo, ninguna persona tiene empates y las sumas de rangos son 22 (silencio), 16 (instrumental) y 10 (con letra):

> χ²_F = [12 / (8 · 3 · 4)] · (22² + 16² + 10²) − 3 · 8 · 4 = 0,125 · 840 − 96 = 9,00

Con 2 gl, p = 0,011. Un tamaño del efecto habitual es la **W de Kendall**, W = χ²_F / [n(k − 1)] = 9 / 16 = 0,56, que va de 0 (sin acuerdo entre personas) a 1 (todas ordenan igual las condiciones). Friedman no está libre de supuestos: exige independencia entre personas y una VD al menos ordinal, y compara rangos, no medias. Si se cumplen los supuestos del ANOVA, es menos potente. Tras una prueba significativa se usan comparaciones por pares (Wilcoxon, Unidad 10) con corrección.

**La salida de SPSS.** El ANOVA está en **Analizar > Modelo lineal general > Medidas repetidas**: se da nombre al factor intrasujeto, se indica el número de niveles y se asigna cada variable a su nivel. Friedman está en **Analizar > Pruebas no paramétricas > Muestras relacionadas**. En jamovi y JASP ambos análisis están en el menú ANOVA (Repeated Measures ANOVA); JASP ofrece además la versión bayesiana.

| Tabla | Qué contiene | Qué mirar |
| --- | --- | --- |
| Factores intrasujetos | Qué variable corresponde a cada nivel | Que el orden sea el previsto |
| Estadísticos descriptivos | Media, DT y N por nivel | N: solo cuenta casos completos |
| Pruebas multivariadas | Wilks, Pillai y otros | Enfoque multivariado (13.3) |
| Prueba de esfericidad de Mauchly | W, χ², gl, p y los tres ε | Sobre todo el valor de ε |
| Pruebas de efectos intrasujetos | F con filas sin corregir, Greenhouse-Geisser, Huynh-Feldt y límite inferior | La fila corregida: F, gl, p y η²p |
| Pruebas de contrastes intrasujetos | Tendencias polinómicas | Útil si los niveles están ordenados |
| Pruebas de efectos intersujetos | La intersección | En un factor no interesa: contrasta que la media general sea 0 |
| Comparaciones por parejas | Diferencias, ET, p ajustada e IC | Qué ajuste se ha aplicado |

**Informe en estilo APA:** «La comprensión lectora varió según la condición de audición, F(1,24; 8,65) = 11,15, p = 0,007, η²p = 0,61, η²G = 0,16 (corrección de Greenhouse-Geisser, ε = 0,62). Con la corrección de Holm, solo difirieron el silencio y la música con letra (diferencia = 2,88 puntos; p = 0,001).»

### Consenso y debate

**Consenso:** el diseño de medidas repetidas gana potencia porque saca del error la variabilidad entre personas. La esfericidad es su supuesto específico, se cumple siempre con dos niveles y, si falla, la F sin corregir es liberal. Las comparaciones por pares con Bonferroni u Holm no dependen de la esfericidad. Hay que indicar qué corrección y qué tamaño del efecto se informan (Lakens, 2013).

**Debate:** si basta con aplicar la corrección cuando Mauchly es significativa o conviene corregir siempre, como se recomienda cada vez más dada la escasa fiabilidad de la prueba previa; qué ε elegir (la regla de Girden, 1992, es orientativa), y en qué casos sustituir el ANOVA de medidas repetidas por el enfoque multivariado o por modelos mixtos, sobre todo cuando hay datos perdidos.

### Mito frecuente

**Mito:** «Un ANOVA de medidas repetidas equivale a hacer varias t relacionadas, una para cada par de momentos».

**Realidad:** hacer todas las t por pares sin corregir infla la tasa de error por familia (≈ 0,14 con tres comparaciones). El ANOVA contrasta una sola hipótesis global con un término de error común, que reúne la información de todas las condiciones y cuyos gl son (k − 1)(n − 1). Por eso exige el supuesto de esfericidad (Mauchly, 1940), que se corrige con ε (Greenhouse y Geisser, 1959). Las t por pares son útiles después, como comparaciones con α corregido, no como sustituto del análisis.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| ANOVA de medidas repetidas | ANOVA en el que las mismas personas pasan por todos los niveles del factor |
| SC de sujetos | Variabilidad debida a diferencias estables entre personas; sale del término de error |
| SC residual | Interacción sujeto × tratamiento; es el error de la F intrasujeto, con (k − 1)(n − 1) gl |
| Esfericidad | Igualdad de las varianzas de las diferencias entre todos los pares de niveles |
| Prueba de Mauchly | Contraste de la esfericidad; poca potencia con n pequeños y exceso con n grandes |
| Épsilon (ε) | Índice de alejamiento de la esfericidad, de 1/(k − 1) a 1; multiplica los gl |
| Greenhouse-Geisser | Corrección de los gl por ε, conservadora; Huynh-Feldt es más liberal |
| Prueba de Friedman | Alternativa por rangos dentro de cada persona; χ² con k − 1 gl |

### Clave PIR

**Prioridad alta.** Se pregunta qué evalúa la prueba de Mauchly, que la esfericidad se cumple siempre con dos niveles, el cálculo de los gl del efecto y del error, y la elección entre Friedman, Kruskal-Wallis y Wilcoxon según el diseño. Trampas típicas: aplicar Mauchly a un factor de dos niveles, usar los gl del ANOVA entre grupos (N − k) para el error intrasujeto y creer que la corrección ε cambia el valor de F en lugar de los gl.

### Autoevaluación

**1.** En un ANOVA de medidas repetidas con 15 personas medidas en 4 momentos, los gl del efecto y del error son…
a) 3 y 56
b) 4 y 42
c) 3 y 42

**2.** Un factor intrasujeto tiene solo dos niveles. Respecto a la esfericidad…
a) se cumple siempre, porque solo hay una diferencia
b) hay que comprobarla con la prueba de Mauchly
c) solo se cumple si las dos varianzas son iguales

**3.** Con k = 3 niveles, ε de Greenhouse-Geisser vale 0,5. Esto indica…
a) que la esfericidad se cumple casi por completo
b) la máxima violación posible de la esfericidad
c) que hay que dividir el valor de F entre 2

**4.** Con 10 participantes, la prueba de Mauchly da p = 0,20. Lo más adecuado es…
a) concluir que la esfericidad está demostrada y no corregir
b) usar la prueba de Friedman, porque el supuesto falla
c) tener en cuenta su poca potencia e informar la F corregida

**5.** ¿Por qué el ANOVA de medidas repetidas suele ser más potente que el de grupos independientes?
a) Porque saca del error la variabilidad debida a las diferencias entre personas
b) Porque tiene más grados de libertad en el término de error
c) Porque no necesita cumplir ningún supuesto sobre las varianzas

### Soluciones

**1 c.** Efecto: k − 1 = 3; error: (k − 1)(n − 1) = 3 · 14 = 42. **2 a.** Con una sola diferencia no hay varianzas que comparar. **3 b.** El mínimo de ε es 1/(k − 1) = 0,5; la corrección multiplica los gl, no divide F. **4 c.** Una p no significativa con n pequeño no demuestra la esfericidad; corregir siempre protege sin apenas coste. **5 a.** Tiene menos gl de error, pero reduce mucho más la MC de error; además exige esfericidad.

## Unidad 14 · Dos factores a la vez: interacción y diseños mixtos

**Objetivos:** distinguir efectos principales e interacción y repartir la variabilidad en un diseño factorial; leer un gráfico de interacción y analizar efectos simples sin caer en el error de comparar significaciones; elegir e interpretar η², η²p y η²G; analizar un diseño mixto con un factor entre grupos y otro intrasujeto.

### 14.1 Efectos principales e interacción

En un **diseño factorial** se cruzan dos o más factores: cada nivel de A se combina con cada nivel de B, y cada combinación es una **celda**. Un diseño 2 × 3 tiene seis celdas. Frente a hacer dos estudios por separado, aporta dos ventajas: es **económico**, porque cada participante informa sobre los dos factores, y permite estudiar la **interacción**. Los tipos de diseño factorial se estudian en Métodos y Diseños de Investigación.

En un ANOVA de dos factores hay tres efectos:

- **Efecto principal de A**: diferencias entre las medias marginales de A, promediando sobre los niveles de B.
- **Efecto principal de B**: lo mismo para B.
- **Interacción A × B**: el efecto de un factor **depende** del nivel del otro. En un 2 × 2, es una **diferencia de diferencias**.

> SC_T = SC_A + SC_B + SC_A×B + SC_error

> gl: (a − 1), (b − 1), (a − 1)(b − 1) y N − ab

Cada efecto tiene su F, con la misma MC_error en el denominador.

**Un ejemplo.** Cuarenta voluntarios, diez por celda, se asignan al azar a dormir con normalidad o a pasar una noche sin dormir y, a la mañana siguiente, a tomar cafeína o un placebo. La VD son los aciertos en una tarea de atención; la DT dentro de cada celda es 6 (datos ficticios).

| Sueño | Placebo | Cafeína | Media marginal |
| --- | --- | --- | --- |
| Normal | 30 | 31 | 30,5 |
| Privación | 20 | 27 | 23,5 |
| Media marginal | 25 | 29 | 27 |

La cafeína añade 1 punto con sueño normal y 7 con privación: la diferencia de diferencias es 7 − 1 = 6.

| Fuente | SC | gl | MC | F | p | η²p |
| --- | --- | --- | --- | --- | --- | --- |
| Sueño | 490 | 1 | 490 | 13,61 | < 0,001 | 0,27 |
| Cafeína | 160 | 1 | 160 | 4,44 | 0,042 | 0,11 |
| Sueño × cafeína | 90 | 1 | 90 | 2,50 | 0,123 | 0,06 |
| Error | 1.296 | 36 | 36 | | | |
| Total | 2.036 | 39 | | | | |

Hay efectos principales de sueño y de cafeína, y la interacción no es significativa. Con diez personas por celda, la potencia para detectar la interacción es baja, y no rechazar H₀ no demuestra que el efecto de la cafeína sea igual en las dos condiciones de sueño (Unidad 3). El intervalo de la diferencia de diferencias, IC 95 % [−1,70; 13,70], es compatible tanto con ninguna interacción como con una muy grande.

![](interacciones.png)

Figura 14.1. **Seis patrones posibles en un diseño 2 × 2.** Factor A en el eje horizontal y una línea para cada nivel de B: sin efectos; solo efecto de A; solo efecto de B; efectos de A y B sin interacción (líneas paralelas); interacción ordinal, e interacción cruzada sin efectos principales. Esquema ilustrativo. Elaboración propia (SAIMAP).

La figura 14.1 muestra que los tres efectos son, en principio, independientes: cualquier combinación es posible. Los supuestos son los del ANOVA de un factor (Unidad 8): independencia, residuos aproximadamente normales y varianzas similares en las celdas. En SPSS el análisis está en **Analizar > Modelo lineal general > Univariante**, que usa por defecto **SC de tipo III**. Con celdas de distinto tamaño los factores dejan de ser independientes entre sí, y las SC de tipo III evalúan cada efecto ajustado por los demás. En jamovi y JASP está en ANOVA > ANOVA.

### 14.2 Efectos simples y cómo leer un gráfico de interacción

En un **gráfico de interacción** un factor va en el eje horizontal y cada nivel del otro es una línea. Se lee así:

- **Líneas paralelas**: no hay interacción; el efecto de un factor es el mismo en todos los niveles del otro.
- **Interacción ordinal**: las líneas no son paralelas, pero no se cruzan en el rango estudiado. El efecto cambia de tamaño, pero no de dirección. Es el patrón de las medias del ejemplo de la cafeína.
- **Interacción cruzada** (o desordinal): las líneas se cruzan y el efecto **se invierte**. Un tratamiento que mejora a un grupo y empeora a otro puede dar un efecto principal nulo, aunque el factor importe mucho.

De ahí la regla práctica: **se interpreta primero la interacción**. Un efecto principal es un promedio sobre los niveles del otro factor; con una interacción cruzada, ese promedio describe una situación que no se da en ningún grupo real. Con una interacción ordinal, el efecto principal puede seguir siendo informativo si se interpreta con cuidado.

Dos precauciones al mirar el gráfico. Primera, un eje vertical recortado puede hacer que una diferencia trivial parezca enorme. Segunda, unas líneas no paralelas en la muestra pueden deberse al azar: el gráfico sugiere, la F de la interacción contrasta. Conviene representar las medias con su IC.

**Efectos simples.** Son los efectos de un factor **en cada nivel** del otro. Se calculan con la MC_error del modelo completo y, si son varios, con corrección de α (Unidad 12). En el ejemplo:

| Efecto de la cafeína | Diferencia | F(1, 36) | p | p Bonferroni |
| --- | --- | --- | --- | --- |
| Con sueño normal | 1 | 0,14 | 0,712 | 1 |
| Con privación | 7 | 6,81 | 0,013 | 0,026 |

Es tentador concluir que «la cafeína solo funciona tras una noche sin dormir». Sería un error: un efecto significativo en un nivel y otro no significativo en el otro **no demuestran que los efectos difieran**. La diferencia entre «significativo» y «no significativo» no es en sí misma significativa (Gelman y Stern, 2006). La pregunta «¿depende el efecto de la cafeína del sueño?» la responde la interacción, y aquí no es significativa. Lo correcto es informar que los datos son compatibles con un efecto mayor tras la privación, pero no permiten afirmarlo.

En SPSS los efectos simples se obtienen desde las medias marginales estimadas de la interacción, o con la sintaxis EMMEANS con la opción COMPARE y un ajuste, por ejemplo Bonferroni. Lo habitual es analizarlos cuando la interacción es relevante, para describir su forma. Con tres factores aparecen tres interacciones dobles y una triple (A × B × C): la interacción doble cambia según el nivel del tercer factor. La lógica es la misma, pero la interpretación se complica rápidamente.

### 14.3 Tamaños del efecto parciales y generalizados

En un diseño factorial hay tres formas habituales de expresar la varianza explicada:

> η² = SC_efecto / SC_T

> η²p = SC_efecto / (SC_efecto + SC_error)

El **η² parcial** es el que da SPSS por defecto («eta cuadrado parcial»). En el ANOVA de un factor entre grupos coincide con η², pero en un factorial **η²p es mayor o igual** que η², y la suma de los η²p de todos los efectos puede **superar 1** (Olejnik y Algina, 2003), como muestra la figura 14.2.

![m](eta-parcial.png)

Figura 14.2. **η² frente a η²p en un diseño factorial ficticio.** Con SC_A = 30, SC_B = 20, SC_A×B = 10 y SC_error = 40 (SC_T = 100), los η² son 0,30, 0,20 y 0,10 (suman 0,60) y los η²p, 0,43, 0,33 y 0,20 (suman 0,96): los η²p no se suman como proporciones del total. Esquema con valores ficticios. Elaboración propia (SAIMAP).

El problema de η²p es que **depende del diseño**. Si se añade al estudio un factor que explica mucha varianza, la SC_error disminuye y el η²p de los demás factores aumenta, aunque su efecto real no haya cambiado. Lo mismo ocurre en medidas repetidas: en el ejemplo de la lectura (Unidad 13), η²p = 0,61 porque la variabilidad de las personas ya no está en el denominador. Por eso un η²p de un diseño intrasujeto no puede compararse con el de uno entre grupos, ni utilizarse sin más en un metaanálisis.

El **η² generalizado** (η²G; Olejnik y Algina, 2003) resuelve este problema. Su denominador incluye la variabilidad que existiría en cualquier diseño que estudiara ese efecto: las diferencias individuales entre sujetos y los factores **medidos** (no manipulados), como el sexo o el diagnóstico. Excluye la de otros factores **manipulados**. Tres casos:

- Factorial entre grupos con todos los factores manipulados: η²G = η²p.
- Si en la figura 14.2 el factor B fuera medido (por ejemplo, el sexo), el η²G de A sería 30 / (30 + 20 + 10 + 40) = 0,30, no 0,43.
- En medidas repetidas incluye la SC de sujetos: 0,16 en el ejemplo de la lectura.

Lakens (2013) recomienda indicar siempre qué índice se informa y usar η²G (o ω², menos sesgado; Unidad 11) cuando se quieren comparar estudios con diseños distintos. Los cortes orientativos de Cohen (1988) para η² (0,01, 0,06 y 0,14) se propusieron como último recurso. Aplicarlos a η²p de diseños intrasujeto lleva a calificar de «grande» casi cualquier efecto.

| Índice | Denominador | Uso principal |
| --- | --- | --- |
| η² | SC total | Proporción de la variabilidad de ese estudio; los efectos suman como máximo 1 |
| η²p | SC del efecto + SC de su error | Comparar efectos dentro de un mismo diseño; SPSS por defecto |
| η²G | Efecto + sujetos + factores medidos | Comparar entre diseños y en metaanálisis |
| ω² | Versión corregida del sesgo | Estimación menos sesgada en la población |

En el ejemplo de la cafeína, con los dos factores manipulados, η²G coincide con η²p (0,27, 0,11 y 0,06), y los η² son algo menores (0,24, 0,08 y 0,04) porque cada uno se divide por la SC total.

### 14.4 ANOVA mixto: un factor entre grupos y otro intrasujeto

El **ANOVA mixto** (o *split-plot*) combina un factor **entre grupos** y otro **intrasujeto**. Es el análisis típico de un ensayo controlado: un grupo recibe tratamiento, otro está en lista de espera, y ambos se miden en el pre, el post y el seguimiento.

- **Grupo**: ¿difieren los grupos, promediando los momentos?
- **Momento**: ¿cambian las puntuaciones con el tiempo, promediando los grupos? Puede deberse a la remisión espontánea, a la práctica con el instrumento o a la regresión a la media.
- **Grupo × momento**: ¿cambian los grupos de forma **distinta**? En un ensayo es casi siempre la pregunta principal.

Hay **dos términos de error**: el grupo se contrasta frente a la variabilidad entre personas del mismo grupo; el momento y la interacción, frente al residual intrasujeto. Con a grupos de n personas y b momentos:

| Fuente | gl | Error con el que se contrasta |
| --- | --- | --- |
| Grupo (A) | a − 1 | Sujetos dentro de grupos |
| Sujetos dentro de grupos | a(n − 1) | |
| Momento (B) | b − 1 | B × sujetos dentro de grupos |
| A × B | (a − 1)(b − 1) | B × sujetos dentro de grupos |
| B × sujetos dentro de grupos | a(n − 1)(b − 1) | |

**Un ejemplo.** Veinticuatro estudiantes con ansiedad ante los exámenes se asignan al azar a una terapia breve o a lista de espera (12 por grupo) y responden a una escala de ansiedad en el pre, el post y el seguimiento (datos ficticios):

| Grupo | Pre | Post | Seguimiento |
| --- | --- | --- | --- |
| Terapia | 30,33 | 22,50 | 22,92 |
| Lista de espera | 32,50 | 29,50 | 29,67 |

La prueba de Mauchly no es significativa, W = 0,86, χ²(2) = 3,23, p = 0,199, pero, siguiendo el criterio de 13.2, se aplica Greenhouse-Geisser (ε = 0,88):

| Efecto | F | gl | p | η²p | η²G |
| --- | --- | --- | --- | --- | --- |
| Grupo | 5,78 | 1 y 22 | 0,025 | 0,21 | 0,18 |
| Momento | 25,73 | 1,75 y 38,51 | < 0,001 | 0,54 | 0,16 |
| Grupo × momento | 5,13 | 1,75 y 38,51 | 0,013 | 0,19 | 0,04 |

La interacción es significativa: del pre al post, la ansiedad baja 7,83 puntos con terapia y 3 en lista de espera. Los efectos simples del grupo, con Bonferroni, lo confirman: la diferencia es de 2,17 puntos en el pre (p corregida = 1), de 7 en el post (p = 0,043) y de 6,75 en el seguimiento (p = 0,014). El efecto principal del grupo **no debe interpretarse aislado**: los grupos partían de niveles similares y solo se separan tras la intervención, así que refleja la interacción. Nótese también la distancia entre η²p y η²G en la interacción (0,19 frente a 0,04; apartado 14.3).

**Supuestos.** Se suman los de ambos diseños: independencia entre personas; residuos aproximadamente normales; varianzas similares entre grupos **en cada momento** (Levene en cada medida); **homogeneidad de las matrices de covarianzas** entre grupos (**M de Box**), y esfericidad para el factor intrasujeto y la interacción. Como las demás pruebas previas, la M de Box detecta diferencias triviales con muestras grandes y tiene poca potencia con muestras pequeñas.

**En SPSS:** **Analizar > Modelo lineal general > Medidas repetidas**, añadiendo el grupo en «Factores inter-sujetos». La salida incluye las pruebas de Box y de Mauchly, los efectos intrasujetos (momento y momento × grupo), la prueba de Levene y los efectos intersujetos (grupo). En jamovi y JASP se añade el factor entre grupos en Repeated Measures ANOVA.

**Informe en estilo APA:** «La interacción grupo × momento fue significativa, F(1,75; 38,51) = 5,13, p = 0,013, η²p = 0,19 (corrección de Greenhouse-Geisser, ε = 0,88): la ansiedad disminuyó más en el grupo de terapia que en el de lista de espera.»

### Consenso y debate

**Consenso:** en un factorial, la interacción se examina antes que los efectos principales, y con una interacción cruzada los efectos principales pueden ser engañosos. Que un efecto sea significativo en un grupo y no en otro no prueba una interacción: hay que contrastarla (Gelman y Stern, 2006). η²p depende del diseño y no sirve para comparar estudios con diseños distintos; hay que indicar el índice e informar η²G u ω² para comparar (Olejnik y Algina, 2003; Lakens, 2013). En un ensayo con medidas pre-post, el efecto de interés es la interacción grupo × momento.

**Debate:** qué tamaño del efecto debe ser el estándar (η²p, η²G u ω²) y si tiene sentido aplicar los cortes de Cohen a índices parciales; cuándo analizar efectos simples si la interacción no es significativa, y si el ANOVA mixto debe dar paso a los modelos lineales mixtos en estudios longitudinales con abandonos.

### Mito frecuente

**Mito:** «Si la interacción no es significativa, el efecto de un factor es idéntico en todos los niveles del otro».

**Realidad:** una interacción no significativa solo indica que los datos no permiten afirmar que los efectos difieran, a menudo por falta de potencia. En el ejemplo de la cafeína, el IC de la diferencia de diferencias va de −1,70 a 13,70. El error inverso también es frecuente: concluir que hay interacción porque un efecto es significativo en un grupo y no en otro (Gelman y Stern, 2006). Nieuwenhuis, Forstmann y Wagenmakers (2011) revisaron 513 artículos de neurociencia: de los 157 en que se podía cometer este error, en torno a la mitad (79) usó el procedimiento incorrecto.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Diseño factorial | Diseño en el que se cruzan todos los niveles de dos o más factores |
| Efecto principal | Diferencia entre las medias marginales de un factor, promediando sobre el otro |
| Interacción | El efecto de un factor cambia según el nivel en que esté el otro; en un 2 × 2, una diferencia de diferencias |
| Interacción cruzada | Las líneas se cruzan y el efecto se invierte; los efectos principales pueden engañar |
| Efecto simple | Efecto de un factor dentro de un nivel concreto del otro |
| η² parcial | SC del efecto / (SC del efecto + SC del error); depende del diseño |
| η² generalizado | Índice comparable entre diseños; incluye sujetos y factores medidos (Olejnik y Algina, 2003) |
| ANOVA mixto | Factorial con un factor entre grupos y otro intrasujeto, con dos términos de error |

### Clave PIR

**Prioridad alta.** Se pregunta el cálculo de los gl de cada fuente, la identificación de efectos principales e interacción a partir de un gráfico o una tabla de medias y la interpretación de la interacción grupo × tiempo en un diseño mixto (en la convocatoria de enero de 2026 apareció una pregunta de este tipo). Trampas típicas: interpretar un efecto principal con una interacción cruzada, deducir una interacción comparando dos valores p y tomar η²p como proporción de la varianza total.

### Autoevaluación

**1.** En un ANOVA entre grupos 3 × 4 con 10 personas por celda, los gl de la interacción y del error son…
a) 6 y 108
b) 5 y 108
c) 6 y 117

**2.** En un gráfico de interacción 2 × 2 las líneas se cruzan en forma de X y las medias marginales de los dos factores son iguales. Lo correcto es…
a) concluir que ningún factor influye en la VD
b) interpretar la interacción, porque los dos factores importan
c) interpretar solo los efectos principales, que son nulos

**3.** En un factorial, SC_A = 30, SC_error = 40 y SC_T = 100. El η² parcial de A vale…
a) 0,30
b) 0,75
c) 0,43

**4.** En un ensayo con grupo de tratamiento y de control medidos en el pre y el post, ¿qué efecto indica que el tratamiento funciona mejor que el control?
a) El efecto principal del momento
b) La interacción grupo × momento
c) El efecto principal del grupo

**5.** Un programa reduce la ansiedad de forma significativa en mujeres (p = 0,01) y no en hombres (p = 0,30). Para afirmar que el efecto depende del sexo hay que…
a) contrastar la interacción programa × sexo
b) comprobar que la diferencia entre ambas p supera 0,05
c) repetir el análisis con más hombres que mujeres

### Soluciones

**1 a.** Interacción: (3 − 1)(4 − 1) = 6; error: N − ab = 120 − 12 = 108. **2 b.** Con una interacción cruzada los efectos se anulan al promediar, pero cada factor influye según el nivel del otro. **3 c.** 30 / (30 + 40) = 0,43; 0,30 sería el η². **4 b.** Que los grupos cambien de forma distinta es la interacción; el efecto del momento puede deberse a cambios que ocurren en ambos grupos. **5 a.** La diferencia entre un resultado significativo y otro no significativo no es en sí significativa (Gelman y Stern, 2006).
