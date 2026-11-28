# Capítulo 5 · Comparar varias medias: el análisis de varianza

Cuando un estudio tiene tres o más condiciones, comparar las medias de dos en dos deja de ser una buena estrategia. Este capítulo presenta el análisis de varianza (ANOVA), que examina todas las medias a la vez, y los procedimientos para averiguar después qué grupos difieren. Termina con los diseños de medidas repetidas, factoriales y mixtos.

## Unidad 11 · ANOVA de un factor entre grupos

**Objetivos:** explicar por qué varias pruebas t inflan el error tipo I y calcular la tasa de error por familia; descomponer la variabilidad total en variabilidad entre grupos e intragrupo y construir la razón F; leer una tabla de ANOVA e informar η², ω² y f; elegir entre el ANOVA clásico, el de Welch, el de Brown-Forsythe y la prueba de Kruskal-Wallis.

### 11.1 Por qué no hacer varias pruebas t: la tasa de error por familia

Imagina un estudio sobre tres formas de repasar antes de un examen: en silencio, con música instrumental y con música con letra. La tentación es hacer tres pruebas t, una por cada par, y ver cuáles salen significativas. El problema está en el error tipo I (Unidad 3). Con α = 0,05, **cada** prueba tiene un 5 % de probabilidad de dar un falso positivo si H₀ es cierta, pero lo que importa es la probabilidad de equivocarse **al menos una vez** en el conjunto.

Esa probabilidad es la **tasa de error por familia** (en inglés *familywise error rate*, FWER). Si las m comparaciones fueran independientes:

> FWER = 1 − (1 − α)^m

Con tres comparaciones, FWER = 1 − 0,95³ ≈ 0,143: casi tres veces el 5 % que se pretendía. El número de comparaciones por pares crece deprisa con el número de grupos, porque es k(k − 1)/2:

| Grupos (k) | Comparaciones por pares (m) | FWER si fueran independientes |
| --- | --- | --- |
| 3 | 3 | 0,14 |
| 4 | 6 | 0,26 |
| 5 | 10 | 0,40 |

![m](fwer.png)

Figura 11.1. **Tasa de error por familia según el número de comparaciones.** Curva de FWER = 1 − 0,95^m para m = 1 a 20 comparaciones independientes, con α = 0,05 en cada una; se marcan m = 3 (0,14), m = 6 (0,26) y m = 10 (0,40). Elaboración propia (SAIMAP).

Como muestra la figura 11.1, con diez comparaciones la probabilidad de al menos un falso positivo ronda el 40 %. Las comparaciones por pares de un mismo estudio no son del todo independientes, porque comparten grupos, así que la fórmula es una aproximación; pero el mensaje no cambia: **multiplicar las pruebas multiplica las ocasiones de equivocarse**.

El **análisis de varianza** (ANOVA), desarrollado por Fisher (1925), resuelve este problema con un único contraste global. Su hipótesis nula afirma que todas las medias poblacionales son iguales:

> H₀: μ₁ = μ₂ = … = μ_k

La alternativa no es «todas distintas», sino que **al menos una media difiere** de las demás. Es un error frecuente escribir H₁ como μ₁ ≠ μ₂ ≠ μ₃: basta con que una sola media se aparte para que H₀ sea falsa. Por eso un ANOVA significativo dice que hay alguna diferencia, pero no dónde está; esa es la tarea de los procedimientos de la Unidad 12.

El ANOVA de un factor entre grupos se aplica cuando hay:

- una **variable dependiente cuantitativa** (la puntuación en el examen);
- una **variable independiente** o **factor** con tres o más **niveles** (el tipo de repaso);
- grupos **independientes**: cada persona aparece en una sola condición. Si las mismas personas pasan por todas las condiciones, el análisis es el de medidas repetidas (Unidad 13).

Con dos grupos, el ANOVA y la t de Student dan la misma decisión, porque F = t². El ANOVA generaliza la t a más de dos grupos, y ambos forman parte del **modelo lineal general** (Unidad 16). Si el factor es una variable de clasificación (nivel de estudios, tipo de jornada), la conclusión es asociativa, no causal (ver Métodos y Diseños de Investigación).

### 11.2 Repartir la variabilidad: la razón F

El análisis compara **medias**, pero lo hace analizando **varianzas**: la variabilidad total se descompone en dos partes.

- **Variabilidad entre grupos**: cuánto se alejan las medias de los grupos de la **media general**. Recoge el posible efecto del factor y el azar.
- **Variabilidad intragrupo** (o error): cuánto se aleja cada persona de la media de **su** grupo. Recoge diferencias individuales y error de medida, pero no el efecto, porque dentro de un grupo todos reciben la misma condición.

Cada parte se cuantifica con una **suma de cuadrados** (SC). Con x̄_j la media del grupo j, n_j su tamaño y x̄ la media general:

> SC_entre = Σ n_j (x̄_j − x̄)²

> SC_intra = Σ Σ (x_ij − x̄_j)²

> SC_total = Σ Σ (x_ij − x̄)² = SC_entre + SC_intra

![](particion-varianza.png)

Figura 11.2. **Partición de la variabilidad en el ANOVA de un factor.** A la izquierda, las puntuaciones de tres grupos con su media y la media general: la distancia de cada media a la media general es la desviación entre grupos y la de cada punto a la media de su grupo, la desviación intragrupo. A la derecha, la barra apilada SC total = SC entre + SC intra y la razón F = MC entre / MC intra. Esquema ilustrativo. Elaboración propia (SAIMAP).

Como muestra la figura 11.2, si las medias están muy separadas en comparación con la dispersión dentro de cada grupo, es difícil atribuir la diferencia al azar. Para comparar ambas fuentes, cada SC se divide por sus **grados de libertad** (gl), y se obtiene una **media cuadrática** (MC), que es una estimación de varianza:

> MC_entre = SC_entre / (k − 1)

> MC_intra = SC_intra / (N − k)

donde k es el número de grupos y N el número total de observaciones. Los gl también se suman: (k − 1) + (N − k) = N − 1.

El estadístico de contraste es la **razón F**, llamada así en honor de Fisher por Snedecor:

> F = MC_entre / MC_intra

MC_intra estima la varianza del error sea cierta H₀ o no. MC_entre estima esa misma varianza **solo si H₀ es cierta**; si las medias poblacionales difieren, le suma un componente debido al efecto. Por eso, bajo H₀, F vale alrededor de 1, y cuanto mayor es el efecto, más crece. Un F menor que 1 no indica un efecto «negativo»: solo que las medias se parecen más de lo esperable por azar.

Si H₀ es cierta y se cumplen los supuestos, F sigue una **distribución F** con gl del numerador (k − 1) y del denominador (N − k). Es asimétrica positiva, de modo que el contraste es siempre de **cola derecha**, aunque la hipótesis sobre las medias no tenga dirección. Por ejemplo, con cuatro grupos de 10 personas, MC_entre = 30 y MC_intra = 10, F(3, 36) = 3,00, que supera por poco el valor crítico al 5 % (2,87).

Los supuestos son los del modelo lineal (Unidades 7 y 8): independencia de las observaciones, normalidad de los **residuos** (desviaciones respecto a la media del propio grupo, no las puntuaciones brutas) y varianzas iguales. La independencia es el más delicado: si se incumple, por ejemplo porque los participantes de un grupo trabajaron juntos, ninguna corrección posterior lo arregla.

### 11.3 La tabla del ANOVA y sus tamaños del efecto

Los resultados del ANOVA se resumen en una tabla con una fila por fuente de variabilidad. Su estructura es siempre la misma:

| Fuente | SC | gl | MC | F | p |
| --- | --- | --- | --- | --- | --- |
| Entre grupos | SC_entre | k − 1 | SC_entre / (k − 1) | MC_entre / MC_intra | área a la derecha de F |
| Intragrupo (error) | SC_intra | N − k | SC_intra / (N − k) | | |
| Total | SC_total | N − 1 | | | |

Saber reconstruir una tabla incompleta es una destreza útil: a partir de dos casillas suelen deducirse las demás, porque las SC y los gl se suman y cada MC es su SC dividida por sus gl.

**Lectura en SPSS.** Con Analizar > Comparar medias > ANOVA de un factor, la tabla «ANOVA» tiene las filas «Entre grupos», «Dentro de grupos» y «Total», y la columna «Sig.» da el valor p. Con Analizar > Modelo lineal general > Univariado, la tabla «Pruebas de efectos inter-sujetos» añade filas (modelo corregido, intersección, total corregido); en un diseño de un factor, la fila del factor coincide con la del modelo corregido, y la de error es la intragrupo. jamovi y JASP, alternativas libres, ofrecen el mismo análisis.

**Tamaños del efecto.** El valor p no informa de la magnitud (Unidad 4). En el ANOVA se usan índices de **varianza explicada**:

> η² = SC_entre / SC_total

**Eta cuadrado** (η²) es la proporción de la variabilidad total asociada al factor. Está **sesgado al alza**: las medias muestrales siempre difieren algo por azar, y η² lo cuenta como efecto, sobre todo con muestras pequeñas y muchos grupos. **Omega cuadrado** (ω²) corrige ese sesgo:

> ω² = [SC_entre − (k − 1) · MC_intra] / (SC_total + MC_intra)

Para el análisis de potencia se usa a menudo la **f de Cohen**, que expresa la dispersión de las medias en unidades de desviación típica:

> f = √[η² / (1 − η²)]

Los cortes orientativos de Cohen (1988) son η² = 0,01, 0,06 y 0,14, y f = 0,10, 0,25 y 0,40 (pequeño, mediano, grande). Son un último recurso (Unidad 4): un η² de 0,03 puede ser relevante en una intervención barata aplicada a miles de personas.

SPSS, en Univariado, ofrece **eta cuadrado parcial** (η²p = SC_efecto / [SC_efecto + SC_error]). En el ANOVA de un factor entre grupos, η² y η²p **coinciden**, porque SC_efecto + SC_error es la SC total; en los factoriales ya no (Olejnik y Algina, 2003; Unidad 14). Además, η² describe el efecto global: para dos grupos concretos se calcula una d de Cohen por pares (Unidad 9), con √MC_intra como estandarizador.

### Ejemplo resuelto · ANOVA de un factor a mano

Una profesora de academia asigna al azar a 18 estudiantes a tres condiciones de repaso durante 30 minutos: **silencio** (S), **música instrumental** (I) y **música con letra** (L). Después pasa una prueba de 25 preguntas (datos ficticios):

| Condición | Puntuaciones | n | Media | Varianza (n − 1) |
| --- | --- | --- | --- | --- |
| Silencio | 15, 18, 14, 19, 16, 20 | 6 | 17 | 5,6 |
| Instrumental | 14, 16, 12, 17, 13, 18 | 6 | 15 | 5,6 |
| Con letra | 11, 15, 10, 14, 12, 16 | 6 | 13 | 5,6 |

**1. Hipótesis.** H₀: μ_S = μ_I = μ_L; H₁: al menos una media difiere. α = 0,05.

**2. Media general.** Con n iguales, x̄ = (17 + 15 + 13) / 3 = 15.

**3. SC entre grupos.**

> SC_entre = 6 · [(17 − 15)² + (15 − 15)² + (13 − 15)²] = 6 · 8 = 48

**4. SC intragrupo.** Cada grupo aporta su varianza por n − 1: 5,6 · 5 = 28.

> SC_intra = 28 + 28 + 28 = 84

> SC_total = 48 + 84 = 132

**5. Grados de libertad y medias cuadráticas.** gl_entre = 3 − 1 = 2; gl_intra = 18 − 3 = 15.

> MC_entre = 48 / 2 = 24; MC_intra = 84 / 15 = 5,6

**6. Razón F y decisión.**

> F = 24 / 5,6 = 4,29

El valor crítico de F(2, 15) al 5 % es 3,68. Como 4,29 > 3,68, se rechaza H₀; el valor p exacto es 0,034.

**7. Tamaños del efecto.**

> η² = 48 / 132 = 0,36

> ω² = (48 − 2 · 5,6) / (132 + 5,6) = 36,8 / 137,6 = 0,27

> f = √(0,364 / 0,636) = 0,76

La distancia entre η² y ω² refleja el sesgo de η² con muestras tan pequeñas.

**8. Informe (estilo APA).** «La puntuación difirió según la condición de repaso, F(2, 15) = 4,29, p = 0,034, η² = 0,36, ω² = 0,27 (silencio: M = 17,0; instrumental: M = 15,0; con letra: M = 13,0; DT = 2,37 en los tres grupos).» Qué grupos difieren se retoma en la Unidad 12.

### 11.4 ANOVA de Welch, Brown-Forsythe y Kruskal-Wallis

El ANOVA clásico supone que todas las poblaciones tienen la misma varianza. ¿Qué ocurre si no es así?

**Robustez de la F clásica.** Box (1954) mostró que la F es relativamente robusta ante varianzas desiguales **si los grupos tienen el mismo tamaño**. Con n distintos, el problema es serio: si el grupo más pequeño es el más variable, la F se vuelve **liberal** (rechaza H₀ de más); si es el menos variable, se vuelve **conservadora** y pierde potencia. Frente a la no normalidad es más resistente: en la simulación de Blanca et al. (2017), con tres grupos y muchas distribuciones, el error tipo I se mantuvo controlado en todos los casos. Ese estudio no evaluó la potencia ni la heterocedasticidad.

**ANOVA de Welch** (Welch, 1951). Extiende la lógica de la t de Welch (Unidad 9): no combina las varianzas en una sola MC_intra, sino que pondera cada grupo según su tamaño y su varianza, y corrige los gl del denominador, que dejan de ser enteros.

**ANOVA de Brown-Forsythe** (Brown y Forsythe, 1974). Mantiene el numerador clásico y modifica el denominador para tener en cuenta la varianza de cada grupo. No debe confundirse con la variante de la prueba de Levene del mismo nombre (Unidad 8).

En SPSS, el ANOVA de un factor muestra ambas en la tabla «Pruebas robustas de igualdad de las medias». Con dos grupos se recomienda Welch por defecto porque pierde muy poca potencia si las varianzas son iguales (Delacre et al., 2017); por la misma razón, es preferible usar Welch con n desiguales que decidir según Levene, un procedimiento en dos etapas que altera el error tipo I (Zimmerman, 2004).

**Prueba de Kruskal-Wallis** (Kruskal y Wallis, 1952). Es la alternativa por rangos al ANOVA entre grupos y la extensión de la U de Mann-Whitney a más de dos grupos:

1. Ordenar **todas** las puntuaciones juntas, sin tener en cuenta el grupo, y asignarles rangos.
2. Calcular el rango medio de cada grupo.
3. Calcular el estadístico H, que mide cuánto se separan los rangos medios entre sí.
4. Comparar H con una distribución **χ² con k − 1 gl**, a la que se aproxima.

Conviene cuando la VD es **ordinal** (posiciones en una clasificación) o hay atípicos o colas pesadas. No es una solución universal: como la U de Mann-Whitney, no compara medianas salvo que las distribuciones tengan la misma forma, y le afecta la heterocedasticidad. En SPSS está en Analizar > Pruebas no paramétricas > Muestras independientes; en la tabla de comparaciones por parejas hay que leer la columna «Sig. ajust.», ya corregida por comparaciones múltiples.

| Situación | Procedimiento razonable |
| --- | --- |
| VD cuantitativa, n iguales, varianzas parecidas | ANOVA clásico (o Welch, con resultado casi idéntico) |
| VD cuantitativa, n desiguales o varianzas distintas | ANOVA de Welch (o Brown-Forsythe) |
| VD ordinal, o atípicos y colas pesadas | Kruskal-Wallis, o métodos robustos (Unidad 8) |
| Mismas personas en todas las condiciones | ANOVA de medidas repetidas o Friedman (Unidad 13) |

### Consenso y debate

**Consenso:** las pruebas t sucesivas sin corrección inflan la tasa de error por familia. F = MC_entre / MC_intra vale alrededor de 1 si H₀ es cierta. La F clásica tolera bien la no normalidad moderada (Blanca et al., 2017) y las varianzas desiguales con n iguales (Box, 1954), pero no la combinación de varianzas y n desiguales. Hay que informar un tamaño del efecto, y ω² está menos sesgado que η².

**Debate:** si el ANOVA de Welch debe ser la opción por defecto siempre, como se propone para dos grupos (Delacre et al., 2017), o solo con n desiguales; si tiene sentido el ANOVA global cuando las hipótesis son comparaciones concretas (Unidad 12), y la utilidad de los cortes de Cohen para η².

### Mito frecuente

**Mito:** «Si los supuestos del ANOVA no se cumplen, basta con pasar a Kruskal-Wallis: las pruebas no paramétricas no tienen supuestos».

**Realidad:** las pruebas no paramétricas tienen menos supuestos sobre la forma de la distribución, pero no carecen de ellos. Exigen independencia de las observaciones, y para interpretarlas como comparación de medianas hace falta que las distribuciones tengan la misma forma y dispersión. Kruskal-Wallis, como Mann-Whitney, también se ve afectada por la heterocedasticidad. Si el problema son las varianzas desiguales, el ANOVA de Welch suele ser mejor remedio, y con atípicos o colas pesadas existen métodos robustos (Field y Wilcox, 2017).

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Tasa de error por familia | Probabilidad de al menos un error tipo I en un conjunto de contrastes |
| Factor | Variable independiente categórica cuyos niveles definen los grupos que se comparan |
| SC entre grupos | Variabilidad de las medias de los grupos respecto a la media general, ponderada por n |
| SC intragrupo | Variabilidad de las puntuaciones respecto a la media de su propio grupo |
| Razón F | Cociente MC_entre / MC_intra; vale alrededor de 1 si H₀ es cierta |
| Eta cuadrado (η²) | Proporción de la SC total asociada al factor; sesgada al alza |
| Omega cuadrado (ω²) | Estimación menos sesgada de la varianza explicada en la población |
| Kruskal-Wallis | Alternativa por rangos al ANOVA entre grupos; H se compara con χ² con k − 1 gl |

### Clave PIR

**Prioridad alta.** Se pregunta por qué no se hacen varias pruebas t, el cálculo de los gl de cada fuente (k − 1 y N − k), la reconstrucción de una tabla de ANOVA y la elección entre ANOVA y Kruskal-Wallis frente a medidas repetidas y Friedman. Trampas típicas: escribir H₁ como «todas las medias distintas», usar N − 1 como gl del error y creer que un F significativo indica qué grupos difieren.

### Autoevaluación

**1.** Un estudio compara cinco grupos con pruebas t por pares, cada una con α = 0,05. Si las comparaciones fueran independientes, la probabilidad de al menos un falso positivo sería de…
a) 0,05
b) 0,23
c) 0,40

**2.** En un ANOVA de un factor con cinco grupos de 8 personas, los gl del numerador y del denominador son…
a) 4 y 35
b) 5 y 40
c) 4 y 39

**3.** Si H₀ es cierta y se cumplen los supuestos, el valor esperado de F es aproximadamente…
a) 0
b) 1
c) k − 1

**4.** En una muestra pequeña con varios grupos, ¿qué índice estima mejor la varianza explicada en la población?
a) η², porque usa la SC total
b) η²p, porque excluye el error
c) ω², porque corrige el sesgo de η²

**5.** Tres grupos de tamaño muy desigual muestran varianzas claramente distintas, y el grupo más pequeño es el más variable. La opción más adecuada es…
a) el ANOVA clásico, porque la F es robusta
b) el ANOVA de Welch
c) la prueba de Kruskal-Wallis, que no tiene supuestos

### Soluciones

**1 c.** Con cinco grupos hay 10 pares: 1 − 0,95¹⁰ ≈ 0,40. **2 a.** gl_entre = k − 1 = 4 y gl_intra = N − k = 40 − 5 = 35. **3 b.** Bajo H₀, MC_entre y MC_intra estiman la misma varianza. **4 c.** η² está sesgado al alza y, en un factor, η²p coincide con η². **5 b.** Con n desiguales y el grupo pequeño más variable, la F clásica se vuelve liberal; Kruskal-Wallis también se ve afectada por la heterocedasticidad.

## Unidad 12 · Después de la F: contrastes y comparaciones múltiples

**Objetivos:** formular contrastes planificados con sus coeficientes y comprobar si son ortogonales; aplicar las correcciones de Bonferroni y Holm; distinguir Tukey, Scheffé, Games-Howell, Dunnett y la LSD de Fisher; elegir un procedimiento según las hipótesis y los supuestos, e informar de los resultados.

### 12.1 Contrastes planificados y ortogonalidad

Un ANOVA significativo dice que alguna media difiere, pero no cuál. Si las hipótesis estaban definidas **antes** de ver los datos, se usan **contrastes planificados** (o a priori); si se quiere explorar, **comparaciones post hoc** (o a posteriori; apartados 12.2 y 12.3).

Un **contraste** es una comparación entre medias definida mediante unos **coeficientes** (c) que suman cero:

> L = c₁ · x̄₁ + c₂ · x̄₂ + … + c_k · x̄_k, con Σ c_j = 0

Los coeficientes positivos señalan un lado de la comparación y los negativos, el otro. Con los grupos de la Unidad 11 (silencio, instrumental y con letra), dos preguntas naturales serían:

| Contraste | Pregunta | c_S | c_I | c_L |
| --- | --- | --- | --- | --- |
| C1 | ¿Rinde más el silencio que la música, sea del tipo que sea? | 2 | −1 | −1 |
| C2 | ¿Importa que la música tenga letra? | 0 | 1 | −1 |

C1 compara un grupo con la media de otros dos; es un **contraste complejo**, que las comparaciones por pares no permiten formular. C2 es un contraste simple entre dos medias.

Cada contraste se pone a prueba con una t que usa MC_intra como estimación de la varianza del error, con los gl del error del ANOVA:

> t = L / √[MC_intra · Σ (c_j² / n_j)]

Con las medias 17, 15 y 13, n = 6 por grupo y MC_intra = 5,6:

- C1: L = 2 · 17 − 15 − 13 = 6; error típico = √(5,6 · 6/6) = 2,37; t(15) = 2,54; p = 0,023.
- C2: L = 15 − 13 = 2; error típico = √(5,6 · 2/6) = 1,37; t(15) = 1,46; p = 0,164.

El silencio rinde más que la música, y la diferencia entre los dos tipos de música no es concluyente con estos datos.

**Ortogonalidad.** Dos contrastes son **ortogonales** (independientes) si, con grupos del mismo tamaño, la suma de los productos de sus coeficientes es cero. Para C1 y C2: 2 · 0 + (−1) · 1 + (−1) · (−1) = 0. Cada uno responde a una pregunta distinta. Con k grupos caben como máximo **k − 1** contrastes ortogonales, tantos como gl del factor, y un conjunto completo **reparte la SC entre grupos** sin dejar nada fuera: aquí, SC_C1 = 36 y SC_C2 = 12 suman los 48 de la SC entre.

Ventajas de los contrastes planificados:

1. **Más potencia**: pocas comparaciones, las que interesan.
2. **Más claridad**: cada contraste traduce una hipótesis.
3. **No dependen de la F global**: un contraste puede ser significativo aunque el ANOVA no lo sea, porque la F reparte el efecto entre todas las diferencias posibles.

La condición es que estén **planificados de verdad**, idealmente en un preregistro (Unidad 5); elegirlos tras mirar las medias y presentarlos como planificados es una forma de HARKing. Con pocos contrastes ortogonales, muchos autores no corrigen α; si son muchos o no ortogonales, conviene corregir (apartado 12.2). Cuando los niveles están ordenados (0, 1 y 2 sesiones de entrenamiento), son útiles los **contrastes polinómicos** de tendencia lineal o cuadrática.

### 12.2 Corregir α: Bonferroni y Holm

Cuando se hacen varias comparaciones, el objetivo es mantener la **tasa de error por familia** (FWER) en el α deseado, normalmente 0,05. La forma más sencilla es exigir más a cada comparación individual.

**Corrección de Bonferroni.** Cada una de las m comparaciones se contrasta con un nivel α/m:

> α por comparación = α / m

Con tres comparaciones, el umbral es 0,05/3 = 0,0167; con seis, 0,0083; con diez, 0,005. De forma equivalente, se puede multiplicar cada p por m (sin pasar de 1) y comparar el resultado, el **p ajustado**, con 0,05. Esta es la versión que muestran los programas.

Bonferroni es fácil, sirve para cualquier tipo de comparación (pares, contrastes complejos, pruebas sobre variables distintas) y **no requiere que las pruebas sean independientes**. Su defecto es que es **conservadora**, cada vez más a medida que crece m: la protección contra el error tipo I se paga con más errores tipo II.

**Procedimiento de Holm** (Holm, 1979). Es una versión **secuencial** de Bonferroni que controla igual la FWER y es siempre al menos igual de potente:

1. Ordenar los m valores p de menor a mayor: p(1) ≤ p(2) ≤ … ≤ p(m).
2. Comparar el más pequeño con α/m. Si no es menor, se paran las comparaciones y no se rechaza ninguna hipótesis.
3. Si es menor, se rechaza su hipótesis y se compara el siguiente con α/(m − 1).
4. Se sigue así, con umbrales α/(m − 2), …, α/1, hasta el primer p que no supere su umbral. A partir de ahí, no se rechaza ninguna más.

La lógica es intuitiva: una vez rechazada la primera hipótesis, queda una comparación menos de la que protegerse, y el umbral se relaja. En formato de p ajustados, el i-ésimo p se multiplica por (m − i + 1), y se impone que cada p ajustado no sea menor que el anterior.

| Rasgo | Bonferroni | Holm |
| --- | --- | --- |
| Control de la FWER | Sí | Sí |
| Umbral | α/m para todas | α/m, α/(m − 1), …, α |
| Potencia | Menor | Igual o mayor |
| Supuestos | Ninguno sobre la dependencia | Ninguno sobre la dependencia |
| Uso típico | Pocas comparaciones, cálculo rápido | Cualquier caso en que se usaría Bonferroni |

Como Holm nunca es peor que Bonferroni, es preferible siempre que se quiera una corrección de este tipo. jamovi y JASP lo incluyen, y se aplica a mano con cualquier salida que dé los p sin ajustar.

Un matiz: estas correcciones protegen **la familia que se define**. Quien hace veinte comparaciones y corrige solo por las cinco que informa tiene un control ilusorio; hay que declarar todas (grados de libertad del investigador, Simmons et al., 2011; Unidad 5).

### Ejemplo resuelto · Holm frente a Bonferroni con tres comparaciones

Un centro de formación compara tres formatos de un curso: presencial (P), en línea en directo (D) y vídeo grabado (V). Tras el ANOVA, compara los tres pares con pruebas t de Welch y obtiene estos p sin ajustar (datos ficticios): P–V, p = 0,004; D–V, p = 0,019; P–D, p = 0,030. Se quiere una FWER de 0,05.

**1. Bonferroni.** Umbral común 0,05/3 = 0,0167.

| Comparación | p | p ajustado (p · 3) | Decisión |
| --- | --- | --- | --- |
| P–V | 0,004 | 0,012 | Se rechaza H₀ |
| D–V | 0,019 | 0,057 | No se rechaza |
| P–D | 0,030 | 0,090 | No se rechaza |

**2. Holm.** Se ordenan los p y cada uno se compara con su umbral.

| Paso | Comparación | p | Umbral | p ajustado | Decisión |
| --- | --- | --- | --- | --- | --- |
| 1 | P–V | 0,004 | 0,05/3 = 0,0167 | 0,004 · 3 = 0,012 | Se rechaza H₀ |
| 2 | D–V | 0,019 | 0,05/2 = 0,025 | 0,019 · 2 = 0,038 | Se rechaza H₀ |
| 3 | P–D | 0,030 | 0,05/1 = 0,05 | máx(0,030; 0,038) = 0,038 | Se rechaza H₀ |

**3. Comparación.** Con la misma FWER, Bonferroni detecta una diferencia y Holm, tres, porque relaja el umbral tras cada rechazo. En el paso 3, el p ajustado se iguala al anterior para que los ajustados no disminuyan.

**4. Informe (estilo APA).** «Las comparaciones por pares, con corrección de Holm, mostraron diferencias entre los tres formatos: presencial frente a vídeo, p ajustado = 0,012; en directo frente a vídeo, p ajustado = 0,038; presencial frente a en directo, p ajustado = 0,038.» El informe completo añadiría la diferencia de medias de cada par con su IC y una d de Cohen.

### 12.3 Tukey, Scheffé, Games-Howell y Dunnett

Además de Bonferroni y Holm, válidos para cualquier conjunto de pruebas, hay procedimientos diseñados para comparar medias tras un ANOVA.

**Tukey (HSD).** La prueba de Tukey (1949; la versión HSD, *honestly significant difference*, procede de un manuscrito de 1953) compara **todos los pares de medias** controlando la FWER. Se basa en la distribución del **rango estudentizado** (la distancia entre la media mayor y la menor dividida por el error típico) y calcula una diferencia mínima: todo par que la supere es significativo. Con todos los pares y varianzas parecidas, es más potente que Bonferroni. Con n desiguales se usa la variante de Tukey-Kramer, que los programas suelen aplicar de forma automática.

**Scheffé.** La prueba de Scheffé (1953) protege **cualquier contraste posible**, incluidos los complejos decididos tras ver los datos («el grupo 1 frente a la media de los grupos 2 y 3»). Por eso es la **más conservadora** cuando solo se comparan pares; tiene sentido para explorar contrastes complejos no planificados.

**Games-Howell.** La prueba de Games y Howell (1976) está pensada para **varianzas desiguales**, con n iguales o no: para cada par usa las varianzas de los dos grupos y gl corregidos, como la t de Welch. Es la compañera natural del ANOVA de Welch.

**Dunnett.** Compara cada grupo experimental **con un único grupo control**, por ejemplo, tres aplicaciones de meditación frente a una lista de espera. Al hacer solo k − 1 comparaciones, es más potente que Tukey para esa pregunta.

**LSD de Fisher.** La diferencia mínima significativa (en SPSS, «DMS») hace pruebas t por pares **sin corregir** α. Solo se justifica en su versión «protegida» (si la F global es significativa), y aun así solo controla la FWER con **tres grupos**.

![m](posthoc-espectro.png)

Figura 12.1. **Espectro orientativo de los procedimientos post hoc.** Eje que va de «más potencia / menos control» a «menos potencia / más control» del error tipo I: LSD de Fisher (sin corrección), Holm, Tukey, Bonferroni y Scheffé. Se anotan Games-Howell para varianzas distintas y Dunnett para la comparación frente a un grupo control. Esquema ilustrativo; el orden es orientativo para comparaciones por pares. Elaboración propia (SAIMAP).

Como muestra la figura 12.1, ganar control del error tipo I supone perder potencia. El orden exacto entre Holm, Tukey y Bonferroni depende del número de grupos y de cuántas hipótesis sean falsas.

| Procedimiento | Qué compara | Supuesto sobre las varianzas | Rasgo principal |
| --- | --- | --- | --- |
| Tukey | Todos los pares | Iguales | Buena potencia con todos los pares |
| Scheffé | Cualquier contraste | Iguales | El más conservador para pares |
| Games-Howell | Todos los pares | Pueden diferir | Versión tipo Welch por pares |
| Dunnett | Cada grupo frente al control | Iguales | Más potente para esa pregunta |
| LSD de Fisher | Todos los pares | Iguales | Sin corrección; aceptable solo con 3 grupos y F previa |

En SPSS, el cuadro de post hoc separa los procedimientos que asumen varianzas iguales de los que no, como Games-Howell. La tabla «Comparaciones múltiples» muestra cada par dos veces (A–B y B–A), con la diferencia de medias, su error típico, la significación ya ajustada y el IC. jamovi y JASP ofrecen procedimientos equivalentes.

### 12.4 Elegir el procedimiento e informar

La elección depende de **qué pregunta** se quiere responder y de **qué supuestos** son razonables, y debe hacerse antes de ver los datos. Una guía práctica:

| Situación | Procedimiento recomendado |
| --- | --- |
| Hipótesis concretas definidas de antemano | Contrastes planificados (con Holm si son varios o no ortogonales) |
| Todos los pares, varianzas parecidas | Tukey |
| Todos los pares, varianzas o n desiguales | Games-Howell |
| Cada grupo frente a un control | Dunnett |
| Unas pocas comparaciones seleccionadas | Holm (mejor que Bonferroni) |
| Contrastes complejos sugeridos por los datos | Scheffé |
| Tras Kruskal-Wallis | Comparaciones por parejas con p ajustado |

**¿Hace falta que la F sea significativa?** Solo para la LSD de Fisher. Tukey, Games-Howell, Bonferroni, Holm y Dunnett controlan la FWER por sí mismos. Puede ocurrir que la F no sea significativa y una comparación concreta sí, porque la F diluye una diferencia grande entre dos grupos si los demás se parecen. Lo ilegítimo es probar procedimientos hasta que uno «salga».

**Qué informar.** Siguiendo las pautas de la APA y de JARS-Quant (Appelbaum et al., 2018; Unidad 1):

1. Qué procedimiento se usó y **por qué**, y si las comparaciones eran **planificadas o exploratorias**.
2. **Cuántas** comparaciones formaban la familia.
3. Para cada comparación: la **diferencia de medias** con su **IC** (ajustado, si el programa lo da), el **p ajustado** y un **tamaño del efecto** por pares, como la d de Cohen.

Con los datos de la Unidad 11, la prueba de Tukey da: silencio frente a con letra, diferencia = 4,0, IC 95 % [0,45; 7,55], p = 0,026; silencio frente a instrumental, diferencia = 2,0, p = 0,335; instrumental frente a con letra, diferencia = 2,0, p = 0,335. Un informe podría ser: «Las comparaciones post hoc de Tukey mostraron que el grupo de silencio superó al de música con letra (diferencia = 4,0 puntos; IC 95 % [0,45; 7,55]; p = 0,026; d = 1,69). Las demás diferencias no fueron significativas (p = 0,335).» La d tan grande procede de un ejemplo ficticio con muestras muy pequeñas; el IC, muy ancho, recuerda que la estimación es imprecisa.

Dos advertencias. Una comparación no significativa no demuestra que dos grupos sean iguales; para eso están la equivalencia y los factores de Bayes (Unidad 6). Y que A difiera de C y B no difiera de C **no** implica que A y B sean distintos: la diferencia entre «significativo» y «no significativo» no es, en sí misma, significativa (Gelman y Stern, 2006). Hay que contrastarlo directamente.

### Consenso y debate

**Consenso:** las comparaciones múltiples deben controlar la tasa de error por familia, y la familia debe declararse completa. Holm controla la FWER igual que Bonferroni y es al menos igual de potente. Tukey es adecuada para todos los pares con varianzas parecidas, Games-Howell con varianzas desiguales y Dunnett frente a un control; Scheffé es la más conservadora para pares. La LSD sin corrección solo es defendible con tres grupos y F previa significativa.

**Debate:** si los contrastes planificados y ortogonales necesitan corrección; si conviene corregir por todas las pruebas de un estudio o solo por cada familia de hipótesis, y si el ANOVA global sigue teniendo sentido cuando las hipótesis son comparaciones concretas. Detrás está el equilibrio entre errores tipo I y II, que depende del coste de cada uno en cada estudio (Lakens et al., 2018).

### Mito frecuente

**Mito:** «No se pueden hacer comparaciones post hoc si la F del ANOVA no es significativa».

**Realidad:** la F previa solo es necesaria en la LSD de Fisher «protegida», que no corrige α por sí misma. Tukey, Games-Howell, Holm, Bonferroni y Dunnett controlan la tasa de error por familia sin necesidad de una F significativa. Exigir la F como filtro añade un paso que no aporta protección y reduce la potencia. Lo que sí debe evitarse es probar procedimientos hasta encontrar uno significativo.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Contraste planificado | Comparación entre medias definida antes de ver los datos con coeficientes que suman cero |
| Contrastes ortogonales | Contrastes cuya suma de productos de coeficientes es cero; con k grupos, como máximo k − 1 |
| Corrección de Bonferroni | Contrastar cada una de las m comparaciones con α/m |
| Procedimiento de Holm | Corrección secuencial con umbrales α/m, α/(m − 1)…; más potente que Bonferroni (Holm, 1979) |
| Prueba de Tukey | Comparación de todos los pares basada en el rango estudentizado |
| Prueba de Scheffé | Protege cualquier contraste posible; la más conservadora para pares (Scheffé, 1953) |
| Prueba de Games-Howell | Comparaciones por pares sin suponer varianzas iguales (Games y Howell, 1976) |
| Prueba de Dunnett | Compara cada grupo experimental con un único grupo control |

### Clave PIR

**Prioridad media.** Se pregunta el umbral de Bonferroni (α/m), qué prueba es más conservadora (Scheffé), cuál se usa con varianzas desiguales (Games-Howell) o frente a un control (Dunnett) y la diferencia entre contrastes a priori y a posteriori. Trampas típicas: creer que los post hoc exigen siempre una F significativa, confundir Tukey (todos los pares) con Dunnett (frente al control) y olvidar que Bonferroni es más conservadora cuantas más comparaciones hay.

### Autoevaluación

**1.** Con tres grupos (A, B, C), ¿qué pareja de contrastes es ortogonal?
a) (1, −1, 0) y (1, 0, −1)
b) (1, −1, 0) y (1, 1, −2)
c) (2, −1, −1) y (1, 0, −1)

**2.** Un investigador hace cinco comparaciones y aplica Bonferroni para mantener la FWER en 0,05. Cada comparación se contrasta con…
a) α = 0,01
b) α = 0,05
c) α = 0,25

**3.** Con Holm y tres comparaciones, el p más pequeño es 0,010 y el siguiente, 0,030. ¿Qué ocurre con la segunda comparación?
a) Se rechaza H₀, porque 0,030 < 0,05
b) No se rechaza, porque 0,030 > 0,025
c) Se rechaza H₀, porque la primera fue significativa

**4.** Tras un ANOVA de Welch con varianzas claramente distintas, se quieren comparar todos los pares. El procedimiento más adecuado es…
a) la LSD de Fisher
b) la prueba de Games-Howell
c) la prueba de Dunnett

**5.** La F global de un ANOVA con cuatro grupos da p = 0,08. ¿Qué afirmación es correcta?
a) Se puede aplicar Tukey, porque controla la FWER por sí misma
b) No se puede hacer ninguna comparación post hoc
c) Solo puede usarse la LSD de Fisher protegida

### Soluciones

**1 b.** 1 · 1 + (−1) · 1 + 0 · (−2) = 0; en a) la suma es 1 y en c) es 3. **2 a.** 0,05/5 = 0,01. **3 b.** El primer p (0,010) es menor que 0,05/3 y se rechaza; el segundo se compara con 0,05/2 = 0,025 y no lo supera, así que el procedimiento se detiene. **4 b.** Games-Howell no supone varianzas iguales; Dunnett compara solo con un control y la LSD no corrige α. **5 a.** La F previa solo es necesaria en la LSD protegida, que precisamente exigiría una F significativa.
