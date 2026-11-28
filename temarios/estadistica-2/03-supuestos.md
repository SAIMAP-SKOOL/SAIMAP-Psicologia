# Capítulo 3 · Antes de analizar: diagnóstico de supuestos y remedios

Toda prueba estadística descansa en un modelo, y todo modelo hace supuestos sobre los datos. Este capítulo explica qué exige el modelo lineal (linealidad, normalidad de los residuos, varianzas homogéneas e independencia), cómo se diagnostica cada condición sin caer en rituales y qué hacer cuando alguna falla: revisar atípicos, transformar, usar métodos robustos, bootstrap o pruebas no paramétricas.

## Unidad 7 · Supuestos del modelo lineal: linealidad y normalidad

**Objetivos:** distinguir pruebas paramétricas y no paramétricas y situar cada prueba en un árbol de decisión; explicar la idea de resultado = modelo + error y el supuesto de linealidad y aditividad; entender qué debe ser normal en el modelo lineal y qué aporta el teorema central del límite; diagnosticar la normalidad con gráficos, índices tipificados y pruebas formales, conociendo sus límites.

### 7.1 Qué separa una prueba paramétrica de una no paramétrica

Las **pruebas paramétricas** (t, ANOVA, Pearson, regresión) estiman **parámetros** de la población, como medias o pendientes, suponiendo un modelo para el error, normalmente la distribución normal. Requieren una variable dependiente cuantitativa y, si sus supuestos se cumplen razonablemente, son las de **más potencia**.

Las **pruebas no paramétricas** (Mann-Whitney, Wilcoxon, Kruskal-Wallis, Friedman, Spearman) trabajan con **rangos** o signos. Hacen menos supuestos sobre la forma de la distribución, toleran mejor los valores extremos y son la opción natural con una variable dependiente **ordinal**. A cambio, si los supuestos paramétricos se cumplen, son algo menos potentes, y contrastan otra hipótesis: no comparan medias, sino si las puntuaciones de un grupo tienden a superar a las del otro (Unidad 9). «Menos supuestos» no significa «ningún supuesto» (apartado 8.4).

| Rasgo | Paramétricas | No paramétricas |
| --- | --- | --- |
| Qué usan | Los valores originales | Rangos o signos |
| Qué contrastan | Parámetros (medias, pendientes) | Tendencia de unas puntuaciones a superar a otras |
| Variable dependiente | Cuantitativa | Ordinal o cuantitativa |
| Potencia si se cumplen los supuestos | Mayor | Algo menor |
| Sensibilidad a atípicos | Alta (la media se desplaza) | Baja |

Elegir la prueba depende, antes que de los supuestos, de **la pregunta y del diseño**: qué se compara, si se mide a personas distintas o a las mismas y qué tipo de variable se usa. Como muestra la figura 7.1, cada rama del árbol tiene una prueba de referencia y una alternativa basada en rangos.

![](arbol-pruebas.png)

Figura 7.1. **Árbol de decisión para elegir la prueba.** Según se comparen dos condiciones, tres o más, o se estudie la relación entre variables, y según los grupos sean independientes o se trate de las mismas personas, se llega a la prueba de referencia y, entre paréntesis, a su alternativa no paramétrica. Las variables categóricas se analizan con χ² o McNemar. Esquema ilustrativo. Elaboración propia (SAIMAP).

Dos matices. Para dos grupos independientes, la referencia es ya la **t de Welch**, que controla mejor el error tipo I cuando las varianzas o los tamaños difieren y apenas pierde potencia cuando son iguales (Delacre, Lakens y Leys, 2017; Unidad 9). Y el árbol no incluye un paso previo del tipo «pasar Shapiro-Wilk y Levene y elegir rama según el resultado»: esa costumbre está desaconsejada (Zimmerman, 2004; apartado 8.4).

Un ejemplo. Se quiere saber si la calidad del sueño, medida con un cuestionario de 0 a 21 puntos, difiere entre estudiantes que usan el móvil en la cama y los que no. Son personas distintas y la variable es cuantitativa: t de Welch. Si la respuesta fuera una sola pregunta («mal / regular / bien / muy bien»), la variable sería ordinal y encajaría mejor Mann-Whitney. Si se midiera a los mismos estudiantes antes y después de sacar el móvil del dormitorio, el diseño sería intrasujeto: t relacionada o Wilcoxon (Unidad 10).

La t, el ANOVA, la regresión y el ANCOVA son casos de un mismo marco, el **modelo lineal general** (Unidad 16), y por eso comparten supuestos.

### 7.2 Resultado = modelo + error: linealidad y aditividad

Field (2024) resume la lógica del análisis de datos en una frase: **resultado = modelo + error**. Cada puntuación se descompone en lo que predice el modelo y lo que queda sin explicar, el **residuo**:

> Yᵢ = (b₀ + b₁X₁ᵢ + b₂X₂ᵢ + … + b_kX_kᵢ) + eᵢ

> eᵢ = Yᵢ − Ŷᵢ

En una regresión, el residuo es la distancia vertical de cada punto a la recta. En una t o un ANOVA, el modelo pronostica para cada persona **la media de su grupo**, y el residuo es la diferencia entre su puntuación y esa media. Esta idea aclara a qué se refieren los supuestos: casi todos hablan de los **errores**, no de los datos en bruto.

El primer supuesto, y el más importante según Field (2024), es la **linealidad y aditividad**:

- **Linealidad**: la relación entre cada predictor cuantitativo y el resultado se describe bien con una recta.
- **Aditividad**: los efectos de los predictores se **suman**; el efecto de X₁ es el mismo sea cual sea X₂. Si no, hay una **interacción** y el modelo debe incluirla (Unidad 14).

Si falla, el modelo está **mal especificado**: los coeficientes describen una relación que no existe en esa forma, y ninguna corrección de la normalidad o de las varianzas lo arregla.

Dos ejemplos. La nota de un examen suele crecer deprisa con las primeras horas de estudio semanales y aplanarse después: pasar de 0 a 4 horas mejora mucho; de 16 a 20, poco. Una recta infraestimará la nota en la zona intermedia y la sobrestimará en los extremos. Y si un programa de ejercicio reduce más la ansiedad en quienes duermen bien que en quienes duermen mal, un modelo con «ejercicio» y «sueño» sin término de interacción promediará dos efectos distintos.

**Cómo se diagnostica.** Con gráficos:

1. **Diagrama de dispersión** de cada predictor con el resultado. El cuarteto de Anscombe (ver Fundamentos de Estadística) mostró que un mismo coeficiente puede resumir patrones muy distintos.
2. **Residuos frente a valores pronosticados**: si el modelo es adecuado, forman una nube sin forma alrededor de 0; una curva en U indica que falta un término no lineal (figura 8.1).
3. En diseños factoriales, el **gráfico de medias**: líneas no paralelas sugieren interacción.

Con un predictor de grupos, como en la t o el ANOVA de un factor, la linealidad no plantea problemas: el modelo estima una media por grupo sin imponer ninguna forma. El supuesto pesa en regresión y en el ANCOVA (Unidades 15 y 16).

**Qué hacer si falla.** Añadir un término cuadrático, transformar el **predictor** (un logaritmo recoge bien las relaciones que se aplanan) o incluir la interacción. Transformar el predictor para lograr linealidad es útil; transformar la variable resultado tiene más inconvenientes (Field, 2024; apartado 8.3).

### 7.3 Residuos normales y teorema central del límite

La **normalidad** es probablemente el supuesto peor entendido. Lo que el modelo lineal necesita no es que «los datos sean normales», sino (Field, 2024):

- que los **residuos** se distribuyan de forma aproximadamente normal en la población, o
- que la **distribución muestral** del estimador (la media, la diferencia de medias, la pendiente b) sea aproximadamente normal.

Si los errores son normales, la distribución muestral de la media o de b también lo es, para cualquier n. En regresión **nunca** se exige que X o Y sean normales: un predictor puede ser asimétrico, o tener solo dos valores. En la t y el ANOVA se examina la forma **dentro de cada grupo**, no la de todas las puntuaciones mezcladas: si dos grupos difieren mucho, la distribución conjunta puede salir bimodal aunque cada grupo sea normal.

**Para qué hace falta.** No para calcular las estimaciones, sino para la **inferencia**: los p y los IC se obtienen de las distribuciones t y F, exactas solo si los errores son normales. Con muestras pequeñas y errores muy alejados de la normalidad, pueden no ser fiables.

**El teorema central del límite** (TCL; ver Fundamentos de Estadística) explica por qué el supuesto pesa menos de lo que se cree: aunque la población no sea normal, la distribución muestral de la media se aproxima a la normal al crecer n. Con una población exponencial, la asimetría teórica de la media vale 2/√n: 0,89 con n = 5; 0,37 con n = 30, y 0,20 con n = 100. La simulación de la figura 7.2 da valores próximos (0,95; 0,42 y 0,17).

![](tcl-asimetrica.png)

Figura 7.2. **El teorema central del límite con una población asimétrica.** A la izquierda, una población exponencial; a la derecha, la distribución de 10.000 medias simuladas con n = 5, 30 y 100. La asimetría de las medias se reduce al crecer n, aunque con n = 30 aún no ha desaparecido del todo. Simulación. Elaboración propia (SAIMAP).

Box (1953) acuñó el término **robusto** para los procedimientos que siguen funcionando cuando un supuesto no se cumple del todo. Blanca et al. (2017) simularon un ANOVA de tres grupos con muchas distribuciones no normales y tamaños iguales y desiguales: el error tipo I quedó controlado en todos los casos. No evaluaron la potencia ni la heterocedasticidad. Además, la no normalidad real suele ser moderada: de 693 distribuciones de variables psicológicas, aproximadamente el 80 % tenía asimetría y curtosis entre −1,25 y 1,25 (Blanca et al., 2013).

**Límites del TCL.** El teorema es asintótico: no dice a partir de qué n exacto funciona, y la regla de «n > 30» es solo orientativa. Con asimetrías fuertes o colas pesadas pueden hacer falta muestras mucho mayores. Sobre todo, el TCL no arregla la **sensibilidad de la media a los atípicos**: unos pocos valores extremos la desplazan e hinchan la varianza, con pérdida de potencia, aunque la muestra sea grande (Wilcox, 2022). Para eso, los métodos robustos del apartado 8.4 son mejor remedio que confiar en el n.

### 7.4 Diagnosticar la normalidad: gráficos, índices y pruebas formales

Hay tres familias de herramientas complementarias. La asimetría y la curtosis se definieron en Fundamentos de Estadística.

**1. Gráficos.** El **histograma** y el **diagrama de caja** muestran la forma y los extremos. El más informativo es el **gráfico Q-Q normal**, que enfrenta los cuantiles observados con los esperados en una normal. Como muestra la figura 7.3:

- puntos sobre la diagonal: forma compatible con la normal;
- puntos que se curvan en forma de **arco**: asimetría;
- puntos en forma de **S**, separados de la diagonal en los dos extremos: colas más pesadas o más ligeras que la normal;
- tramos escalonados: mezcla de grupos o valores muy repetidos.

![](qq-plots.png)

Figura 7.3. **Histogramas y gráficos Q-Q de cuatro formas de distribución.** Con 200 datos simulados en cada columna: normal (puntos sobre la diagonal), asimetría positiva (arco), colas pesadas (forma de S con los extremos alejados de la línea) y bimodal (patrón ondulado, con un escalón en el centro). Simulación ilustrativa. Elaboración propia (SAIMAP).

**2. Asimetría y curtosis tipificadas.** Cada índice se divide por su error típico para obtener una puntuación z:

> z_asimetría = asimetría / ET_asimetría

> z_curtosis = curtosis / ET_curtosis

Los cortes son orientativos (Field, 2024): 1,96 en valor absoluto con muestras pequeñas y criterios más laxos, 2,58 o 3,29, al crecer la muestra, porque el error típico disminuye con n y una asimetría mínima acaba dando una z enorme. Con muestras muy grandes importan más el índice y el gráfico que la z.

**3. Pruebas formales.** Contrastan H₀: «la población de la que proceden los datos es normal».

- **Kolmogorov-Smirnov** (Kolmogorov, 1933; Smirnov, 1948) compara la distribución acumulada observada con la teórica. Si la media y la desviación típica se estiman con la misma muestra, necesita la **corrección de Lilliefors** (1967), la que aplica SPSS.
- **Shapiro-Wilk** (Shapiro y Wilk, 1965) es la más potente: el orden fue Shapiro-Wilk > Anderson-Darling > Lilliefors > Kolmogorov-Smirnov (Razali y Wah, 2011).

Su potencia depende de n justo al revés de lo que interesa: con muestras **pequeñas**, cuando la normalidad importa más, apenas detectan desviaciones; con muestras **grandes**, cuando el TCL ya protege la inferencia, declaran «no normal» cualquier desviación trivial. Además, su p no es la probabilidad de que los datos sean normales, y un p > 0,05 no demuestra normalidad. No son, por tanto, un buen criterio para elegir la prueba: pesan más los gráficos y los índices.

**En SPSS:** **Analizar > Estadísticos descriptivos > Explorar**, con la variable dependiente como dependiente y el grupo como factor. Los descriptivos dan la asimetría y la curtosis con su error típico; en **Gráficos**, la opción de gráficos con pruebas de normalidad añade Kolmogorov-Smirnov (con Lilliefors), Shapiro-Wilk y los Q-Q. Los residuos de una regresión se guardan desde el análisis y se exploran igual. **En jamovi y JASP**, alternativas libres, Shapiro-Wilk y el Q-Q aparecen como casillas dentro de cada análisis.

### Ejemplo resuelto · Puntuaciones z de asimetría y curtosis

Se compara la **latencia de sueño** (minutos que se tarda en dormirse) entre estudiantes que usan el móvil en la cama (grupo M, n = 36) y que lo dejan fuera del dormitorio (grupo F, n = 40). Explorar da estos índices (datos ficticios):

| Grupo | n | Asimetría | ET | Curtosis | ET |
| --- | --- | --- | --- | --- | --- |
| F (fuera) | 40 | 0,62 | 0,374 | −0,35 | 0,733 |
| M (móvil) | 36 | 1,10 | 0,393 | 1,45 | 0,768 |

**1. Errores típicos.** Solo dependen de n. Para la asimetría:

> ET_asimetría = √[6n(n − 1) / ((n − 2)(n + 1)(n + 3))]

Con n = 40 da 0,374, y con n = 36, 0,393. El de la curtosis es aproximadamente el doble. Las aproximaciones √(6/n) y √(24/n) dan valores parecidos (0,387 y 0,775 con n = 40).

**2. Grupo F.**

> z_asimetría = 0,62 / 0,374 = 1,66

> z_curtosis = −0,35 / 0,733 = −0,48

Ambas quedan dentro de ±1,96.

**3. Grupo M.**

> z_asimetría = 1,10 / 0,393 = 2,80

> z_curtosis = 1,45 / 0,768 = 1,89

La asimetría supera 1,96 y 2,58: hay una cola derecha apreciable, esperable en una latencia, que no baja de 0 y algunas noches se alarga mucho.

**4. Decisión.** La z no es un semáforo. La asimetría de 1,10 es moderada y los n son parecidos. Lo sensato es mirar el Q-Q y el diagrama de caja de cada grupo: si la cola la producen uno o dos valores extremos, comprobar si son errores (apartado 8.3) y, si son legítimos, añadir una media recortada o un bootstrap como análisis de sensibilidad (apartado 8.4).

**5. Efecto del tamaño muestral.** Con n = 400 y la misma asimetría de 0,62, el error típico sería 0,122 y la z, 5,08, por encima de cualquier corte con idéntica forma.

**6. Informe.** «La latencia de sueño mostró asimetría positiva, moderada en el grupo M (asimetría = 1,10; z = 2,80) y leve en el grupo F (asimetría = 0,62; z = 1,66). Los gráficos Q-Q no mostraron valores extremos aislados, por lo que se aplicó la prueba t de Welch.»

### Consenso y debate

**Consenso:** el supuesto más importante es que el modelo esté bien especificado (linealidad y aditividad). Deben ser aproximadamente normales los residuos o la distribución muestral, no los datos brutos, y en regresión no se exige que X o Y sean normales (Field, 2024). Las pruebas de normalidad son un mal criterio de decisión; la más potente es Shapiro-Wilk (Razali y Wah, 2011). La F controla bien el error tipo I ante no normalidad (Blanca et al., 2017).

**Debate:** cuánta desviación es tolerable y a partir de qué n, pues depende de la forma concreta y de si preocupa el error tipo I o la potencia; y si, con colas pesadas, debe usarse por defecto un método robusto (Wilcox, 2022) o basta la robustez de las pruebas clásicas.

### Mito frecuente

**Mito:** «Para usar una t o un ANOVA, los datos tienen que ser normales».

**Realidad:** el supuesto se refiere a los residuos (la forma dentro de cada grupo) o a la distribución muestral del estadístico, que el TCL aproxima a la normal al crecer n (Field, 2024). En regresión no se exige la normalidad de X ni de Y, y la F controla el error tipo I con muchas distribuciones no normales (Blanca et al., 2017). Lo que de verdad perjudica a la media son los atípicos y las colas pesadas (Wilcox, 2022).

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Prueba paramétrica | Prueba que estima parámetros suponiendo un modelo para el error, normalmente normal |
| Prueba no paramétrica | Prueba basada en rangos o signos, con menos supuestos sobre la forma de la distribución |
| Residuo | Diferencia entre la puntuación observada y la pronosticada por el modelo |
| Linealidad y aditividad | La relación es recta y los efectos de los predictores se suman sin interacciones omitidas |
| Robustez | Capacidad de una prueba de seguir funcionando cuando un supuesto no se cumple del todo (Box, 1953) |
| Gráfico Q-Q | Gráfico que enfrenta los cuantiles observados con los esperados en una distribución normal |
| z de asimetría | Índice de asimetría dividido por su error típico; crece con n aunque la forma no cambie |
| Shapiro-Wilk | Prueba de normalidad más potente; poco útil con n pequeño y demasiado sensible con n grande |

### Clave PIR

**Prioridad media.** Se pregunta qué evalúa cada prueba de supuestos (Shapiro-Wilk o Kolmogorov-Smirnov, normalidad; Levene, varianzas), la diferencia entre pruebas paramétricas y no paramétricas y la elección de la prueba según el diseño. Trampas típicas: afirmar que deben ser normales los datos y no los residuos, interpretar p > 0,05 en Shapiro-Wilk como prueba de normalidad y creer que con n > 30 la normalidad está garantizada.

### Autoevaluación

**1.** En una prueba t para dos grupos independientes, el supuesto de normalidad se refiere sobre todo a…
a) la distribución de todas las puntuaciones juntas, sin separar grupos
b) la distribución de los residuos, es decir, la forma dentro de cada grupo
c) la distribución de la variable que define los grupos

**2.** Según Field (2024), el supuesto más importante del modelo lineal es…
a) la normalidad de la variable dependiente
b) la homogeneidad de las varianzas entre grupos
c) la linealidad y aditividad de la relación

**3.** Un gráfico Q-Q en el que los puntos forman un arco respecto a la diagonal sugiere…
a) asimetría de la distribución
b) independencia de los residuos
c) una distribución perfectamente normal

**4.** Con n = 40, una asimetría de 0,62 tiene un error típico de 0,374. ¿Cuánto vale su puntuación z?
a) 0,23
b) 2,80
c) 1,66

**5.** Con n = 2.000, Shapiro-Wilk da p = 0,003, pero el gráfico Q-Q es casi recto. Lo más razonable es concluir que…
a) los datos no son normales y hay que usar una prueba no paramétrica
b) la desviación es probablemente trivial y la prueba lo detecta por el n grande
c) hay un 0,3 % de probabilidad de que los datos sean normales

### Soluciones

**1 b.** Los residuos son las desviaciones respecto a la media de cada grupo; mezclar grupos puede crear una forma bimodal. **2 c.** Si el modelo está mal especificado, corregir los demás supuestos no lo arregla. **3 a.** El arco indica asimetría; la forma de S, colas pesadas o ligeras. **4 c.** 0,62 / 0,374 = 1,66, dentro de ±1,96. **5 b.** Con n grande, las pruebas de normalidad detectan desviaciones sin importancia, y el TCL protege la inferencia; p no es la probabilidad de que los datos sean normales.

## Unidad 8 · Varianzas, independencia y qué hacer cuando fallan los supuestos

**Objetivos:** explicar la homocedasticidad, sus consecuencias y los límites de la prueba de Levene; reconocer las violaciones de la independencia e interpretar el estadístico de Durbin-Watson; tratar los valores atípicos y valorar las transformaciones; elegir entre Welch, métodos robustos, bootstrap y pruebas no paramétricas sin recurrir a un procedimiento en dos etapas.

### 8.1 Varianzas iguales y la prueba de Levene

La **homocedasticidad** exige que la varianza de los residuos sea la misma en todos los niveles del predictor: en una t o un ANOVA, igual varianza poblacional en los grupos; en regresión, dispersión constante alrededor de la recta. Su incumplimiento es la **heterocedasticidad**. Field (2024) agrupa homocedasticidad e independencia bajo la etiqueta de **errores esféricos**, distinta de la esfericidad del ANOVA de medidas repetidas (Unidad 13).

**Por qué importa.** Las estimaciones no cambian, pero sí sus **errores típicos**, y con ellos los p y los IC. Student usa una varianza combinada, s²ₚ, ponderada por los gl de cada grupo: con tamaños muy distintos, se parece sobre todo a la del grupo grande. Un ejemplo con datos ficticios:

| Caso | Grupo 1 | Grupo 2 | ET de Student | ET de Welch |
| --- | --- | --- | --- | --- |
| A | n = 10, s = 12 | n = 40, s = 6 | 2,65 | 3,91 |
| B | n = 10, s = 6 | n = 40, s = 12 | 3,93 | 2,68 |
| C | n = 25, s = 12 | n = 25, s = 6 | 2,68 | 2,68 |

En el caso A, el grupo pequeño es el más variable y Student **subestima** el error típico: la prueba se vuelve **liberal** y rechaza H₀ verdadera más de lo que dice α. En una simulación ilustrativa propia con 20.000 réplicas de este caso, la t de Student rechazó H₀ verdadera en torno al 18 % de las veces, frente a un 5 % aproximado con Welch. En el caso B la prueba se vuelve **conservadora** y pierde potencia. En el C, con tamaños iguales, ambos errores típicos coinciden, como anticipó Box (1954): la F es relativamente robusta ante varianzas desiguales si los n son iguales. El peligro está en **combinar** varianzas y tamaños distintos (Zimmerman, 2004).

**Cómo se diagnostica.**

- **Gráfico de residuos frente a pronosticados.** Como muestra la figura 8.1, una nube de anchura constante es compatible con la homocedasticidad; un **embudo**, que se abre o se cierra, indica heterocedasticidad; una **curva en U** indica otro problema, la no linealidad (apartado 7.2). En SPSS, en la regresión, botón **Gráficos**, se pide el gráfico de ZRESID (residuos tipificados, eje Y) frente a ZPRED (pronósticos tipificados, eje X).
- **Razón de varianzas.** La **Fmax de Hartley** divide la varianza mayor por la menor; en el caso A, 144 / 36 = 4. Sirve solo como orientación.
- **Prueba de Levene** (Levene, 1960). Calcula, para cada persona, la desviación absoluta respecto a la media de su grupo y hace un ANOVA sobre esas desviaciones: si un grupo es más disperso, sus desviaciones serán mayores. La variante de **Brown y Forsythe** (1974) usa la mediana en lugar de la media y resiste mejor la asimetría. H₀: las varianzas poblacionales son iguales.

![](residuos-patrones.png)

Figura 8.1. **Tres patrones en el gráfico de residuos frente a valores pronosticados.** Nube homogénea alrededor de 0 (supuestos razonables), embudo que se abre a la derecha (heterocedasticidad) y curva en U (no linealidad). Simulación ilustrativa. Elaboración propia (SAIMAP).

**En SPSS**, Levene aparece automáticamente en la prueba t y puede pedirse en el ANOVA y en Explorar. La tabla de Explorar da cuatro filas: basada en la media (la versión original), en la mediana (Brown-Forsythe), en la mediana con gl ajustados y en la media recortada. **En jamovi y JASP** se marca como comprobación de supuestos dentro de cada análisis.

**Los límites de Levene** son los de las pruebas de normalidad: con grupos pequeños y desiguales, cuando la heterocedasticidad más daña, apenas tiene potencia; con muestras grandes, señala diferencias triviales; y p > 0,05 no demuestra varianzas iguales. Por eso se recomienda usar **Welch directamente** (Delacre, Lakens y Leys, 2017; Unidad 9) y, en regresión, errores típicos robustos (apartado 8.4).

### 8.2 Errores independientes y Durbin-Watson

La **independencia** exige que conocer el residuo de una persona no dé ninguna pista sobre el de otra. Es el supuesto que menos se comprueba y uno de los más graves, porque **no lo protege el tamaño muestral**: con dependencia, añadir casos aporta menos información de la que aparenta.

**Cómo se rompe.** Casi siempre por el diseño o por la forma de recoger los datos:

- **Agrupamiento**: alumnos de una misma clase o pacientes del mismo terapeuta comparten influencias que los hacen parecerse.
- **Medidas repetidas tratadas como independientes**: el antes y el después de una persona no son dos casos distintos (Unidades 10 y 13).
- **Dependencia temporal**: en registros diarios o sesiones sucesivas, el valor de un día se parece al del anterior.
- **Contaminación entre participantes**: si los participantes de una misma sesión comentan las tareas entre ellos, sus respuestas dejan de ser independientes.

**Por qué importa.** Con dependencia positiva, que es la más habitual, los errores típicos calculados son **demasiado pequeños**: el análisis trata como información nueva lo que es en parte repetido. Los IC salen demasiado estrechos y el error tipo I se infla, a veces mucho. Ninguna transformación corrige este problema.

**Cómo se diagnostica.** Lo primero es **conocer el diseño**: quién se midió, cuándo, dónde y con quién (ver Métodos y Diseños de Investigación). Cuando los datos tienen un orden con sentido (temporal o de recogida), puede usarse el estadístico de **Durbin-Watson** (Durbin y Watson, 1950, 1951), que mide la correlación entre residuos consecutivos:

> DW = Σ(eₜ − eₜ₋₁)² / Σeₜ²

> DW ≈ 2(1 − r₁), donde r₁ es la correlación entre cada residuo y el anterior

| Valor de DW | Interpretación |
| --- | --- |
| Cercano a 2 | Sin autocorrelación apreciable |
| Por debajo de 2 | Autocorrelación positiva (residuos consecutivos parecidos) |
| Por encima de 2 | Autocorrelación negativa (residuos consecutivos alternan) |
| Menor que 1 o mayor que 3 | Valores preocupantes (regla orientativa de Field) |

Un ejemplo con datos ficticios. Una persona registra su nivel de estrés durante diez días consecutivos y se ajusta un modelo que lo predice a partir de las horas de trabajo. Los residuos, en orden, son 3, 2, 2, 1, 0, −1, −2, −2, −1 y −2. Se suceden de forma muy ordenada: varios positivos seguidos y luego varios negativos. El cálculo da DW = 0,22 (la correlación entre cada residuo y el anterior es de 0,92; con solo diez casos, la aproximación 2(1 − r₁) es tosca), muy por debajo de 1: los errores no son independientes, quizá porque el estrés tiene inercia de un día a otro y el modelo no lo recoge.

Dos advertencias. Primera: DW solo tiene sentido si el orden de los casos significa algo; si los casos están ordenados por apellido, el valor depende de ese orden arbitrario. Segunda: DW solo detecta la dependencia entre casos **consecutivos**, no la que procede del agrupamiento. En SPSS se pide en **Analizar > Regresión > Lineal**, botón **Estadísticos**; se verá de nuevo en la Unidad 16.

**Qué hacer si falla.** Usar el análisis que corresponde a la estructura real de los datos: pruebas de medidas repetidas, modelos que incluyen el agrupamiento (como los modelos mixtos, Unidad 13) o modelos para series temporales. La solución está en el modelo, no en los datos.

### 8.3 Valores atípicos y transformaciones

Un **valor atípico** es una observación muy alejada del resto. La media, la desviación típica, la correlación y la pendiente son **muy sensibles** a unos pocos extremos, que pueden crear o borrar un efecto y restar potencia.

**Cómo se detectan.**

- **Puntuaciones z**: los valores con |z| > 3,29 se consideran sospechosos.
- **Diagrama de caja**: marca los valores situados más allá de 1,5 veces el rango intercuartílico desde los cuartiles.
- En regresión, residuos tipificados y medidas de influencia como la distancia de Cook (Unidad 16).

Un ejemplo con datos ficticios. Doce personas anotan cuántos mensajes de texto envían en un día: 4, 6, 7, 9, 10, 12, 14, 15, 18, 22, 35 y 80. La media es 19,33 y la mediana, 13. El valor 80 tiene una z de solo 2,91, por debajo de 3,29, aunque a simple vista es claramente extremo. La razón es que el propio atípico **hincha la desviación típica** (20,88) y se «enmascara». Con muestras pequeñas, el criterio de la z es poco sensible, y conviene mirar también el diagrama de caja.

**Qué hacer con un atípico.** No existe una regla automática. Hay que averiguar su origen:

| Origen | Ejemplo | Decisión razonable |
| --- | --- | --- |
| Error de registro | Una edad de 233 años por un dígito duplicado | Corregir si se puede comprobar; si no, eliminar el dato |
| Caso ajeno a la población | En un estudio con población no clínica, alguien que indica estar en tratamiento por el mismo problema que se mide | Excluirlo, con un criterio fijado de antemano |
| Valor legítimo pero extremo | Una persona que envía de verdad 80 mensajes al día | Conservarlo y usar métodos robustos o un análisis de sensibilidad |

Las buenas prácticas son tres: fijar los criterios de exclusión **antes** de ver los resultados (idealmente en el preregistro), **informar** de cuántos casos se excluyeron y por qué, y, cuando la decisión sea discutible, presentar el resultado **con y sin** esos casos. Eliminar atípicos hasta que el resultado sea significativo es una forma de p-hacking (Unidad 5). En el ejemplo, quitar el 80 baja la media de 19,33 a 13,82: un cambio así debe discutirse, no esconderse.

**Transformaciones.** Consisten en aplicar la misma función a todos los valores de la variable:

| Transformación | Cuándo se usa | Precauciones |
| --- | --- | --- |
| Logaritmo, log(X) | Asimetría positiva fuerte; relaciones que se aplanan | No admite 0 ni negativos: se usa log(X + 1) |
| Raíz cuadrada, √X | Asimetría positiva moderada; recuentos | Efecto más suave que el logaritmo |
| Inversa, 1/X | Asimetría positiva muy fuerte | Invierte el orden de los valores; conviene reflejar la variable |

En el ejemplo de los mensajes, la asimetría de los datos originales es 2,60; con la raíz cuadrada baja a 1,82, y con el logaritmo, a 0,75.

Pero tienen un coste. Cambian la **hipótesis**: comparar las medias de log(X) equivale a comparar **medias geométricas** en la escala original. Complican la **interpretación**, porque los resultados quedan en unidades transformadas. Y lo que corrige un grupo puede empeorar otro. Por eso Field (2024) distingue: transformar el **predictor** para lograr linealidad es útil; transformar la **variable resultado** para corregir la normalidad o la heterocedasticidad rara vez compensa, y los métodos robustos suelen ser mejor opción. Si se transforma, debe decidirse con criterios teóricos o previos y aplicarse a todos los grupos por igual.

### 8.4 Métodos robustos, bootstrap y alternativas no paramétricas

Cuando los supuestos fallan de forma relevante, hay mejores opciones que forzar los datos (Field y Wilcox, 2017; Wilcox, 2022).

**Medias recortadas y winsorizadas.** La **media recortada al 20 %** elimina el 20 % de los valores más bajos y el 20 % de los más altos y promedia el resto. En los datos de mensajes del apartado 8.3 (n = 12), se quitan los dos valores menores y los dos mayores y la media de los ocho restantes es 13,38, frente a 19,33 de la media aritmética. **Winsorizar** consiste en no descartar esos extremos, sino igualarlos al valor más bajo o más alto que queda tras el recorte; con el mismo 20 %, la media winsorizada es 13,75. Para comparar dos grupos con medias recortadas se usa la **prueba de Yuen**, que combina el recorte con un error típico adecuado y no supone varianzas iguales. Recortar no es «eliminar datos que molestan»: es un estimador del centro definido de antemano.

**Otros estimadores robustos.** Los **M-estimadores** dan menos peso a los valores cuanto más se alejan del centro, en lugar de eliminarlos. En regresión, los **errores típicos robustos a la heterocedasticidad** (como los HC3) mantienen las pendientes de mínimos cuadrados pero corrigen sus errores típicos, y con ellos los p y los IC.

**Bootstrap.** Propuesto por Efron (1979), consiste en tratar la muestra como si fuera la población:

1. Se extrae de la muestra, **con reposición**, una nueva muestra del mismo tamaño.
2. Se calcula en ella el estadístico de interés (una media, una diferencia, una pendiente).
3. Se repite el proceso miles de veces.
4. La distribución de esos miles de valores aproxima la distribución muestral del estadístico, sin suponer que sea normal.

El **IC percentil** toma los percentiles 2,5 y 97,5 de esa distribución; el **IC BCa** corrige además el sesgo y la asimetría. El bootstrap no hace milagros con muestras muy pequeñas o con datos no independientes, pero es muy útil para estadísticos cuya distribución muestral no tiene una fórmula sencilla. SPSS lo ofrece como opción dentro de muchos procedimientos.

**Pruebas no paramétricas.** Siguen siendo útiles con variables ordinales y muestras pequeñas, pero no son la solución universal. Tienen **supuestos propios**: independencia de las observaciones y, para poder hablar de medianas, que las distribuciones tengan la **misma forma y dispersión**. Mann-Whitney y Kruskal-Wallis también se ven afectadas por la heterocedasticidad. Y contrastan otra hipótesis: Mann-Whitney evalúa si P(X > Y) = 0,5, no la igualdad de medianas, salvo que las distribuciones solo difieran en su posición (Unidad 9).

**Del ritual al plan.** La figura 8.2 compara dos formas de proceder. El flujo clásico encadena pruebas: Shapiro-Wilk y Levene primero y, según el valor p, prueba clásica o no paramétrica. Zimmerman (2004) mostró que este procedimiento en dos etapas **altera el error tipo I** de la prueba final, porque la elección depende de pruebas preliminares con potencia variable; es mejor aplicar la prueba de varianzas separadas de forma incondicional. El flujo recomendado parte del diseño y de la pregunta, usa Welch por defecto, mira los gráficos de residuos y solo cambia de estrategia si hay atípicos, colas pesadas o una variable ordinal.

![](flujo-supuestos.png)

Figura 8.2. **Dos maneras de tratar los supuestos.** A la izquierda, el flujo clásico desaconsejado, que decide la prueba según Shapiro-Wilk y Levene. A la derecha, el recomendado: planificar el análisis, usar Welch por defecto, revisar los gráficos de residuos, recurrir a medias recortadas, bootstrap o pruebas no paramétricas cuando esté justificado e informar siempre el tamaño del efecto con su IC. Esquema ilustrativo. Elaboración propia (SAIMAP).

La estrategia, incluidos los remedios previstos, se decide **antes** de ver los resultados (Unidad 5), y si un método robusto y uno clásico discrepan mucho, esa discrepancia debe comunicarse.

### Consenso y debate

**Consenso:** el procedimiento en dos etapas (Levene, después Student o Welch) altera el error tipo I, y es preferible usar Welch de forma incondicional (Zimmerman, 2004; Delacre, Lakens y Leys, 2017). La heterocedasticidad es más dañina con tamaños de grupo desiguales; con n iguales, la F es relativamente robusta (Box, 1954). La independencia se garantiza con el diseño, no con una prueba. Los atípicos no se eliminan sin justificación y las exclusiones se informan.

**Debate:** cuándo debe preferirse un método robusto (medias recortadas, M-estimadores, bootstrap) a la prueba clásica y qué porcentaje de recorte usar; si las transformaciones de la variable resultado siguen teniendo un lugar o deben sustituirse por métodos robustos (Field, 2024), y qué papel les queda a las pruebas no paramétricas cuando existen alternativas robustas (Field y Wilcox, 2017).

### Mito frecuente

**Mito:** «Antes de elegir la prueba hay que pasar Shapiro-Wilk y Levene: si dan p > 0,05, se usa la prueba clásica; si no, la no paramétrica».

**Realidad:** decidir la prueba final en función de pruebas preliminares altera su tasa de error tipo I (Zimmerman, 2004), y esas pruebas tienen poca potencia con n pequeño y demasiada con n grande. Lo recomendado es usar Welch por defecto para dos grupos independientes (Delacre, Lakens y Leys, 2017), revisar los gráficos de residuos y elegir el remedio según el problema concreto, no según un valor p.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Homocedasticidad | Igualdad de la varianza de los residuos en todos los niveles del predictor |
| Prueba de Levene | ANOVA sobre las desviaciones absolutas respecto a la media de cada grupo (Levene, 1960) |
| Independencia de los errores | El residuo de una observación no informa sobre el residuo de otra |
| Durbin-Watson | Estadístico de autocorrelación de residuos consecutivos; de 0 a 4, con 2 sin autocorrelación |
| Valor atípico | Observación muy alejada del resto; una z mayor que 3,29 en valor absoluto es sospechosa |
| Media recortada al 20 % | Media calculada tras eliminar el 20 % de valores más bajos y el 20 % más altos |
| Bootstrap | Remuestreo con reposición de la muestra para aproximar la distribución de un estadístico (Efron, 1979) |
| Procedimiento en dos etapas | Elegir la prueba según una prueba preliminar de supuestos; altera el error tipo I |

### Clave PIR

**Prioridad media.** Se pregunta qué supuesto evalúa cada prueba (Levene, varianzas; Durbin-Watson, independencia), cómo se interpreta un valor de Durbin-Watson próximo a 2 y en qué condiciones la heterocedasticidad es más grave. Trampas típicas: atribuir a Levene la evaluación de la normalidad, creer que las pruebas no paramétricas no tienen supuestos y pensar que una muestra grande compensa la falta de independencia.

### Autoevaluación

**1.** Una investigadora compara dos grupos: el pequeño (n = 12) tiene una varianza tres veces mayor que el grande (n = 60). Con la t de Student, lo esperable es que…
a) la prueba sea liberal y rechace H₀ verdadera más de lo que indica α
b) la prueba sea conservadora y pierda potencia
c) el error tipo I no cambie, porque la t es robusta

**2.** ¿Qué evalúa la prueba de Levene?
a) La normalidad de los residuos en cada grupo
b) La independencia entre residuos consecutivos
c) La igualdad de las varianzas poblacionales de los grupos

**3.** En una regresión con datos diarios, el estadístico de Durbin-Watson vale 0,6. Indica…
a) ausencia de autocorrelación entre los residuos
b) autocorrelación positiva preocupante entre residuos consecutivos
c) heterocedasticidad en forma de embudo

**4.** Tras aplicar un logaritmo a la variable resultado y comparar las medias de log(X), la comparación en la escala original corresponde a…
a) las medias geométricas
b) las medias aritméticas
c) las medianas de los grupos

**5.** Sobre las pruebas no paramétricas, es correcto afirmar que…
a) no tienen ningún supuesto y pueden usarse siempre sin riesgo
b) siempre contrastan la igualdad de las medianas de los grupos
c) exigen independencia y se ven afectadas por la heterocedasticidad

### Soluciones

**1 a.** La varianza combinada se parece a la del grupo grande, menos variable, y el error típico se subestima. **2 c.** Hace un ANOVA sobre las desviaciones absolutas respecto a la media; no evalúa la normalidad. **3 b.** Está por debajo de 1, lejos de 2, y señala que los residuos consecutivos se parecen. **4 a.** Deshacer el logaritmo de una media de logaritmos da la media geométrica, lo que cambia la hipótesis. **5 c.** Comparten el supuesto de independencia y, para hablar de medianas, exigen distribuciones de igual forma y dispersión.
