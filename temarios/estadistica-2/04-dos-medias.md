# Capítulo 4 · ¿Difieren dos condiciones? La prueba t y sus alternativas

Comparar dos condiciones es la pregunta más frecuente de la investigación psicológica: un tratamiento frente a un control, antes frente a después. Este capítulo estudia la prueba t para grupos independientes y para medidas relacionadas, sus versiones robustas, sus tamaños del efecto y las alternativas basadas en rangos, con atención a qué contrasta realmente cada una.

## Unidad 9 · Dos grupos distintos: Student, Welch y Mann-Whitney

**Objetivos:** explicar la lógica de la prueba t de Student para grupos independientes y calcularla; justificar el uso de la prueba de Welch por defecto a partir de la evidencia de simulación; calcular e interpretar la d de Cohen y la g de Hedges con su intervalo; aplicar la U de Mann-Whitney sabiendo qué hipótesis contrasta, y leer la salida de SPSS, jamovi o JASP.

### 9.1 La lógica de la prueba t de Student

En Fundamentos de Estadística se vio la prueba t para una muestra: comparar una media con un valor de referencia cuando σ es desconocida. Aquí se compara la media de **dos grupos formados por personas distintas**, por ejemplo un grupo que recibe una intervención y otro que no.

La distribución t la publicó William S. Gosset (figura 9.1) en *Biometrika*, en el artículo «The probable error of a mean», con el seudónimo «Student» (Student, 1908). Trabajaba con muestras pequeñas, justo el caso en que sustituir σ por s deja de ser inocente.

![s](wm-gosset.jpg)

Figura 9.1. **William S. Gosset («Student»)**, químico de la cervecería Guinness que publicó la distribución t en 1908. Fuente: autor desconocido, Wikimedia Commons, dominio público.

La idea de la prueba es un cociente entre **señal** y **ruido**. La señal es la diferencia entre las medias, que recoge el posible efecto de la variable independiente (variación sistemática). El ruido es el **error típico de esa diferencia**, que depende de cuánto varían las personas dentro de cada grupo (variación no sistemática). En la versión de Student, las dos varianzas se combinan en una sola, la **varianza combinada**:

> s²ₚ = [(n₁ − 1)s₁² + (n₂ − 1)s₂²] / (n₁ + n₂ − 2)

> t = (M₁ − M₂) / √[s²ₚ(1/n₁ + 1/n₂)], con gl = n₁ + n₂ − 2

Si H₀ (μ₁ = μ₂) es cierta y se cumplen los supuestos, el estadístico sigue una t con esos gl.

Un ejemplo con datos ficticios. Un equipo compara el bienestar (escala de 0 a 50) de 25 estudiantes que usan durante cuatro semanas una aplicación de atención plena con el de 25 que no la usan. Obtiene M₁ = 32,4 (DT = 6,1) y M₂ = 29,0 (DT = 5,7):

> s²ₚ = (24 · 6,1² + 24 · 5,7²) / 48 = 34,85; sₚ = 5,90

> ET = √[34,85 · (1/25 + 1/25)] = 1,67

> t(48) = 3,4 / 1,67 = 2,04; p = 0,047

El valor crítico bilateral con 48 gl es 2,01, de modo que el resultado queda por poco en la región de rechazo. Este ejemplo se retoma en el apartado 9.3.

La forma de la t depende de los gl. Con pocos gl sus colas son más pesadas que las de la normal, porque s también varía de una muestra a otra, y hace falta un valor más extremo para rechazar H₀, como muestra la figura 9.2.

![m](distribuciones-t.png)

Figura 9.2. **La distribución t según sus grados de libertad.** Densidades t con 2, 5 y 30 gl junto a la normal tipificada; los valores críticos bilaterales al 5 % son 4,30, 2,57 y 2,04, frente a 1,96 en la normal. Elaboración propia (SAIMAP).

**Supuestos.** La prueba de Student exige:

1. **Independencia** de las observaciones: cada persona aporta un dato y pertenece a un solo grupo.
2. **Normalidad de los residuos**, o de la distribución muestral de la diferencia, no de los datos brutos (Unidad 7). Con n moderados el teorema central del límite ayuda, aunque no con cualquier forma ni ante valores atípicos.
3. **Homogeneidad de varianzas**: s²ₚ solo tiene sentido si las dos poblaciones tienen la misma varianza. Box (1954) mostró que la F, y por tanto la t, es relativamente robusta ante varianzas desiguales **si los n son iguales**. Con n desiguales el problema es serio, y de ahí el apartado siguiente.

### 9.2 Welch por defecto: lo que muestran las simulaciones

Welch (1947) propuso una versión que **no combina las varianzas**: cada grupo contribuye al error típico con la suya propia.

> t = (M₁ − M₂) / √(s₁²/n₁ + s₂²/n₂)

Los gl se calculan con la aproximación de **Welch-Satterthwaite**, que da valores no enteros, nunca mayores que n₁ + n₂ − 2, y tanto menores cuanto más distintas son las varianzas y los n.

**Por qué importa.** Cuando las varianzas difieren y los n también, la t de Student pierde el control del error tipo I, y lo hace en una dirección previsible:

- Si el **grupo pequeño tiene la varianza mayor**, s²ₚ queda dominada por el grupo grande, infraestima el error y la prueba se vuelve **liberal**: rechaza H₀ verdadera más a menudo que α.
- Si el **grupo grande tiene la varianza mayor**, ocurre lo contrario: la prueba es **conservadora** y pierde potencia.

La tabla resume una simulación propia sencilla (20.000 réplicas por fila, poblaciones normales, α = 0,05 bilateral):

| Condición (n y DT de cada grupo) | Tasa de rechazo con Student | Tasa de rechazo con Welch |
| --- | --- | --- |
| H₀ cierta: 10 (DT 2) frente a 40 (DT 1) | 18,4 % | 5,4 % |
| H₀ cierta: 10 (DT 1) frente a 40 (DT 2) | 0,5 % | 5,2 % |
| H₀ cierta: 25 (DT 1) frente a 25 (DT 2) | 5,2 % | 5,0 % |
| H₀ cierta: 25 frente a 25, DT iguales | 4,7 % | 4,6 % |
| d = 0,5: 64 frente a 64, DT iguales (potencia) | 80,6 % | 80,6 % |

La tercera fila confirma que, con n iguales, Student apenas se desvía aunque las varianzas difieran (Box, 1954). Las dos últimas muestran el otro lado de la cuestión: cuando las varianzas son iguales, Welch **apenas pierde nada**. Es el resultado que destacan Delacre, Lakens y Leys (2017) tras revisar la evidencia de simulación: Welch controla mejor el error tipo I con varianzas y n desiguales y la pérdida de potencia es mínima cuando las varianzas son iguales. Por eso recomiendan usarla **por defecto**. El lenguaje R ya lo hace: su función `t.test()` aplica Welch salvo que se indique lo contrario.

**El problema del procedimiento en dos etapas.** La práctica tradicional consiste en pasar la prueba de Levene y elegir según su resultado: Student si p > 0,05 y Welch si no. Zimmerman (2004) mostró que esta decisión condicional altera el error tipo I del conjunto, y que es preferible aplicar la prueba de varianzas separadas **sin condiciones**. Hay dos motivos de fondo. Con n pequeños, Levene tiene poca potencia y no detecta diferencias de varianza que sí afectan a Student; con n grandes, detecta diferencias triviales (Unidad 8). Además, una prueba no puede «demostrar» que las varianzas son iguales: un p > 0,05 no es evidencia de igualdad.

En la práctica, lo razonable es planificar el análisis con Welch, examinar los datos con gráficos (cajas por grupo, residuos) e informar las DT de ambos grupos. Si los datos tienen colas muy pesadas o atípicos influyentes, Welch no lo arregla todo, porque sigue comparando medias. Las medias recortadas (prueba de Yuen) y el bootstrap son entonces alternativas (Unidad 8; Field y Wilcox, 2017).

### 9.3 Tamaño del efecto: d y g de Hedges con su intervalo

El valor p no informa de la magnitud (Unidad 4). Para dos grupos independientes, el índice habitual es la **d de Cohen**, la diferencia de medias en unidades de desviación típica combinada. Puede obtenerse también a partir de t:

> d = (M₁ − M₂) / sₚ = t · √(1/n₁ + 1/n₂)

Con muestras pequeñas, d **sobrestima** ligeramente el efecto poblacional. La **g de Hedges** (Hedges, 1981) aplica un factor de corrección:

> g = d · [1 − 3 / (4(n₁ + n₂) − 9)]

En el ejemplo de la aplicación de atención plena:

> d = 3,4 / 5,90 = 0,58

> g = 0,58 · [1 − 3 / 191] = 0,58 · 0,984 = 0,57

La corrección es pequeña con 50 personas; con 10 por grupo el factor vale 0,958.

**El intervalo de d.** Un tamaño del efecto sin intervalo esconde su imprecisión. Los programas calculan el IC de d de forma exacta con la distribución t no central. Una aproximación sencilla usa el error típico:

> ET(d) ≈ √[(n₁ + n₂)/(n₁ · n₂) + d² / (2(n₁ + n₂))]

En el ejemplo, ET(d) ≈ 0,29 y el IC 95 % ≈ 0,58 ± 1,96 · 0,29 = [0,01; 1,14]; el método exacto da prácticamente lo mismo. El resultado es significativo, pero los datos son compatibles con un efecto casi nulo y con uno grande: con 25 personas por grupo, la estimación es muy imprecisa.

**Traducir d.** Además de los cortes orientativos de Cohen (0,2, 0,5 y 0,8), que él mismo propuso como último recurso, d puede expresarse como **probabilidad de superioridad**, la probabilidad de que una persona elegida al azar del primer grupo puntúe más que una del segundo, Φ(d/√2) si las distribuciones son normales con igual DT. Con d = 0,58 vale 0,66. La relevancia depende del contexto y de la diferencia mínima importante, no de la etiqueta (Unidad 4; Evaluación Psicológica para la significación clínica).

**Qué hay que declarar.** Lakens (2013) insiste en indicar **qué desviación típica estandariza** el efecto. En grupos independientes se habla de **d_s**, con sₚ en el denominador, para distinguirla de las versiones de medidas repetidas (Unidad 10). Si las varianzas son muy distintas, una DT combinada describe mal a ambos grupos; en ese caso conviene informar las dos DT junto al índice y no interpretarlo de forma mecánica.

Las versiones recientes de SPSS ofrecen d de Cohen y g de Hedges con su IC; jamovi y JASP también. El informe completo, según JARS-Quant (Appelbaum et al., 2018), incluye descriptivos, estadístico con gl, p exacto y tamaño del efecto con IC:

> t(48) = 2,04, p = 0,047, d = 0,58, IC 95 % [0,01; 1,14]

### 9.4 La U de Mann-Whitney y la lectura de la salida del programa

La **U de Mann-Whitney** (Mann y Whitney, 1947) es la alternativa basada en rangos para dos grupos independientes. Es equivalente a la **W de suma de rangos de Wilcoxon** (1945): dos formulaciones con el mismo valor p. Es útil con VD ordinales o con atípicos que distorsionan la media.

**Qué contrasta.** Su hipótesis nula no es «las medianas son iguales», sino la **igualdad estocástica**:

> H₀: P(X > Y) = 0,5

Es decir, que al tomar una persona al azar de cada grupo, es igual de probable que puntúe más alta la de un grupo que la del otro. Solo si las dos distribuciones tienen la misma forma y dispersión y difieren únicamente en su posición (**desplazamiento puro**) puede leerse como una prueba de medianas.

**Cálculo.** Se ordenan juntas todas las puntuaciones, se asignan rangos (los empates reciben el rango medio) y se suman los rangos de cada grupo:

> U₁ = R₁ − n₁(n₁ + 1)/2; U₁ + U₂ = n₁ · n₂

U₁ cuenta cuántas veces una puntuación del grupo 1 supera a una del grupo 2 entre todos los pares posibles. Ejemplo ficticio con minutos de lectura diaria: grupo A (4, 7, 9, 12, 15) y grupo B (6, 11, 14, 18, 20, 23). Los rangos de A son 1, 3, 4, 6 y 8 (R_A = 22), de modo que U_A = 22 − 15 = 7 y U_B = 30 − 7 = 23. La p exacta bilateral es 0,18.

**Tamaño del efecto.** El más directo es la **correlación biserial de rangos**, r_rb = (U_B − U_A)/(n₁n₂), que aquí vale (23 − 7)/30 = 0,53. Equivale a la probabilidad de superioridad U_B/(n₁n₂) = 0,77 reescalada entre −1 y 1.

**Sus supuestos.** Mann-Whitney exige independencia, y la dispersión distinta entre grupos también la afecta: con varianzas desiguales puede rechazar H₀ aunque las medianas coincidan.

**Leer la salida.** En SPSS, la prueba t está en Analizar > Comparar medias (Prueba T para muestras independientes) y Mann-Whitney en Analizar > Pruebas no paramétricas > Muestras independientes. La tabla siguiente reproduce, con formato propio, la salida de la prueba t para los datos del ejemplo resuelto:

| Fila | Levene F | Levene p | t | gl | p bilateral | Diferencia | IC 95 % de la diferencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Se asumen varianzas iguales | 34,24 | < 0,001 | −2,44 | 20 | 0,024 | −5,50 | [−10,20; −0,80] |
| No se asumen varianzas iguales | — | — | −1,89 | 7,56 | 0,098 | −5,50 | [−12,29; 1,29] |

La segunda fila es la de **Welch**, y es la que conviene leer siempre, sin depender de Levene. Los gl no enteros indican que se está leyendo Welch. La p de una cola solo es legítima si la dirección se fijó antes de ver los datos.

jamovi (T-Tests > Independent Samples T-Test) permite marcar Student, Welch y Mann-Whitney en la misma ventana, con tamaños del efecto y gráficos. JASP es equivalente y añade la versión bayesiana (Unidad 6).

### Ejemplo resuelto · Student y Welch con los mismos datos

Un servicio universitario compara la preocupación ante los exámenes (0 a 40; más es peor) de 8 estudiantes que han hecho un taller breve de afrontamiento con la de 14 en lista de espera (datos ficticios).

- Taller: 8, 22, 12, 25, 6, 18, 10, 27 → M = 16,0; DT = 8,09.
- Lista de espera: 22, 19, 24, 21, 18, 23, 20, 25, 22, 19, 24, 21, 23, 20 → M = 21,5; DT = 2,14.

**1. Hipótesis.** H₀: μ_taller = μ_espera; H₁: μ_taller ≠ μ_espera (bilateral, α = 0,05).

**2. Mirar los datos.** El taller ayuda mucho a unos y nada a otros: su varianza (65,43) es unas 14 veces la de la lista de espera (4,58), y además es el grupo pequeño. Es la situación en que Student se vuelve liberal.

**3. Student.**

> s²ₚ = (7 · 65,43 + 13 · 4,58) / 20 = 25,88

> t(20) = −5,5 / √[25,88 · (1/8 + 1/14)] = −5,5 / 2,25 = −2,44; p = 0,024

**4. Welch.**

> ET = √(65,43/8 + 4,58/14) = √(8,18 + 0,33) = 2,92

> t(7,56) = −5,5 / 2,92 = −1,89; p = 0,098

Los gl bajan de 20 a 7,56 porque casi todo el error procede del grupo pequeño.

**5. Tamaño del efecto.** d = −5,5 / 5,09 = −1,08 y g = −1,04. Al ser tan distintas las DT, el índice debe acompañarse de ambas.

**6. Contraste por rangos.** Mann-Whitney da U = 36, p = 0,18, r_rb = 0,36.

**7. Conclusión.** Con Student se habría anunciado un efecto significativo; con Welch, el IC de la diferencia [−12,29; 1,29] incluye el 0. En formato APA: «La preocupación fue menor en el grupo del taller (M = 16,0; DT = 8,09) que en la lista de espera (M = 21,5; DT = 2,14), pero la diferencia no fue estadísticamente significativa con la prueba de Welch, t(7,56) = −1,89, p = 0,098, diferencia = −5,5, IC 95 % [−12,29; 1,29]». La enorme variabilidad del taller merece estudiarse por sí misma: ¿a quién le sirve?

### Consenso y debate

**Consenso:** para dos grupos independientes se recomienda la prueba de Welch por defecto, porque controla el error tipo I con varianzas y n desiguales y apenas pierde potencia si las varianzas son iguales (Delacre et al., 2017). Elegir la prueba según el resultado de Levene altera el error tipo I (Zimmerman, 2004). El informe debe incluir descriptivos, estadístico con gl, p exacto y tamaño del efecto con su IC, indicando el estandarizador (Lakens, 2013).

**Debate:** qué tamaño del efecto informar cuando las varianzas son muy distintas, y hasta qué punto sirven los cortes de Cohen fuera de un contexto concreto. También se discute cuándo es preferible pasar a métodos robustos o de rangos frente a mantener Welch.

### Mito frecuente

**Mito:** «La U de Mann-Whitney compara las medianas de los dos grupos».

**Realidad:** Mann-Whitney (Mann y Whitney, 1947) contrasta la igualdad estocástica, P(X > Y) = 0,5. Solo equivale a una prueba de medianas si las distribuciones tienen la misma forma y dispersión y difieren solo en su posición. Con varianzas desiguales puede ser significativa con medianas idénticas; y no está libre de supuestos: exige independencia y le afecta la heterocedasticidad.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| t de Student | Diferencia de medias dividida por su error típico con varianza combinada; gl = n₁ + n₂ − 2 |
| Varianza combinada | Media ponderada por gl de las varianzas de los grupos; supone varianzas poblacionales iguales |
| t de Welch | Versión que usa la varianza de cada grupo y gl de Welch-Satterthwaite, no enteros |
| Prueba liberal | La que rechaza H₀ verdadera con más frecuencia que el α nominal |
| d de Cohen (d_s) | Diferencia de medias en unidades de la desviación típica combinada |
| g de Hedges | d corregida por su sesgo al alza en muestras pequeñas (Hedges, 1981) |
| U de Mann-Whitney | Prueba de rangos para dos grupos independientes; contrasta P(X > Y) = 0,5 |
| Correlación biserial de rangos | Tamaño del efecto de Mann-Whitney, entre −1 y 1, basado en U |

### Clave PIR

**Prioridad alta.** Se pregunta la elección de la prueba (Mann-Whitney para grupos independientes frente a Wilcoxon para medidas relacionadas), el cálculo de los gl (n₁ + n₂ − 2) y la lectura de la tabla de SPSS con Levene y las dos filas. Trampa típica: confundir la W de suma de rangos de Wilcoxon, equivalente a Mann-Whitney, con la prueba de Wilcoxon de rangos con signo. Otra: afirmar que Mann-Whitney compara medianas o que no tiene supuestos.

### Autoevaluación

**1.** Se comparan dos grupos independientes de 15 y 19 personas con la t de Student. ¿Cuántos grados de libertad tiene?
a) 33
b) 32
c) 34

**2.** El grupo pequeño de un estudio tiene una varianza mucho mayor que el grande. ¿Qué le ocurre a la t de Student?
a) Se vuelve conservadora y pierde potencia
b) Mantiene el error tipo I en el α nominal
c) Se vuelve liberal y rechaza H₀ de más

**3.** Con t(38) = 2,50 y 20 personas por grupo, ¿cuánto vale d?
a) 0,79
b) 0,40
c) 1,25

**4.** ¿Qué hipótesis nula contrasta la U de Mann-Whitney?
a) Que las dos medianas poblacionales son iguales
b) Que P(X > Y) = 0,5 entre los dos grupos
c) Que las dos varianzas poblacionales son iguales

**5.** En la salida de SPSS, Levene da p = 0,31. ¿Qué fila conviene leer según la recomendación actual?
a) La de Welch, «No se asumen varianzas iguales»
b) La de Student, porque Levene no es significativa
c) Ninguna, porque hay que pasar a Mann-Whitney

### Soluciones

**1 b.** gl = 15 + 19 − 2 = 32. **2 c.** La varianza combinada queda dominada por el grupo grande, infraestima el error y el error tipo I se dispara. **3 a.** d = 2,50 · √(1/20 + 1/20) = 2,50 · 0,316 = 0,79. **4 b.** Contrasta la igualdad estocástica; solo equivale a comparar medianas con desplazamiento puro. **5 a.** Welch se recomienda por defecto, sin condicionarla a Levene (Zimmerman, 2004; Delacre et al., 2017).

## Unidad 10 · Las mismas personas dos veces: t relacionada y Wilcoxon

**Objetivos:** distinguir los diseños entre grupos de los intrasujeto y explicar por qué se analizan las puntuaciones diferencia; calcular e interpretar la prueba t para muestras relacionadas; elegir entre d_z, d_av y d_rm y explicar cómo influye la correlación entre medidas; aplicar la prueba de Wilcoxon de rangos con signo y leer la salida del programa.

### 10.1 Diseños intrasujeto y puntuaciones diferencia

En un **diseño entre grupos** cada persona pasa por una sola condición. En un **diseño intrasujeto** (de medidas repetidas) las mismas personas pasan por todas. Hay tres situaciones típicas:

- **Antes y después** de una intervención: la ansiedad de un grupo de pacientes al inicio y al final de un programa.
- **Dos condiciones** experimentales en las mismas personas: memoria de palabras estudiadas en silencio y con música.
- **Pares emparejados**: personas distintas pero unidas, como gemelos, parejas o participantes igualados en una variable relevante.

La figura 10.1 resume estas estructuras y las de los diseños que se estudiarán en el capítulo siguiente.

![](disenos.png)

Figura 10.1. **Diseños según cómo se reparten las personas entre condiciones.** Cuadrículas de personas × condiciones: diseño entre grupos, intrasujeto con contrabalanceo (la mitad en orden AB y la otra mitad en BA), factorial 2 × 2 entre grupos y mixto 2 (grupo) × 3 (momento). Esquema ilustrativo. Elaboración propia (SAIMAP).

**Ventajas del diseño intrasujeto.** Cada persona actúa como su propio control. Las diferencias individuales estables, como que alguien sea en general más ansioso o tenga mejor memoria, afectan igual a las dos medidas y desaparecen al restar. El resultado es **más potencia con menos participantes**.

**Inconvenientes.** Aparecen los **efectos de orden**: práctica (se rinde mejor la segunda vez), fatiga (se rinde peor) y arrastre (lo vivido en la primera condición afecta a la segunda). El remedio habitual es el **contrabalanceo**: la mitad de la muestra empieza por una condición y la otra mitad por la otra. En los diseños antes-después no se puede contrabalancear, y la diferencia puede deberse al paso del tiempo, a la regresión a la media o a otros cambios. Sin grupo de control, una mejora pre-post no demuestra que la intervención funcione. Validez interna y contrabalanceo se estudian en Métodos y Diseños de Investigación.

**La clave del análisis: la puntuación diferencia.** Con dos medidas de las mismas personas no hay dos muestras independientes, sino **una sola muestra de diferencias**. Para cada persona se calcula:

> Dᵢ = X₁ᵢ − X₂ᵢ

y el problema se reduce a una prueba t para **una muestra** sobre D, con H₀: μ_D = 0. El sentido de la resta debe decidirse y declararse antes: si se calcula pre − post en una escala de ansiedad, una D positiva indica mejora.

Las dos medidas están **correlacionadas**: quien puntúa alto antes suele puntuar alto después. Esa correlación r es la que explica la ganancia de potencia, porque la varianza de las diferencias es:

> s_D² = s₁² + s₂² − 2 · r · s₁ · s₂

Cuanto mayor es r, menor es s_D² y menor el error típico. Si r fuera 0, el diseño no aportaría ventaja alguna.

El supuesto de **normalidad se refiere a las diferencias**, no a cada medida por separado. Y la **independencia** se exige entre personas: las dos medidas de alguien están relacionadas por diseño, pero cada par debe ser independiente de los demás.

### 10.2 La prueba t para muestras relacionadas

La prueba t para muestras relacionadas (o emparejadas) aplica la lógica de la t de una muestra a las diferencias:

> t = M_D / (s_D / √n), con gl = n − 1

donde M_D es la media de las diferencias, s_D su desviación típica y n el número de **pares**, no de observaciones. El IC de la diferencia media es:

> IC = M_D ± t_crít · s_D / √n

**Un ejemplo que muestra la ganancia.** Seis personas memorizan dos listas equivalentes de 25 palabras, una en silencio y otra con música de fondo, con el orden contrabalanceado (datos ficticios). Recuerdan:

| Persona | Silencio | Música | D |
| --- | --- | --- | --- |
| 1 | 14 | 12 | 2 |
| 2 | 18 | 14 | 4 |
| 3 | 11 | 12 | −1 |
| 4 | 16 | 13 | 3 |
| 5 | 20 | 17 | 3 |
| 6 | 13 | 11 | 2 |

> M_D = 2,17; s_D = 1,72; ET = 1,72 / √6 = 0,70

> t(5) = 2,17 / 0,70 = 3,08; p = 0,027

IC 95 % de la diferencia: [0,36; 3,97]. La correlación entre condiciones es r = 0,89: quien tiene buena memoria la tiene en las dos situaciones.

Si se analizaran por error los mismos números como si procedieran de dos grupos de seis personas distintas, se obtendría t(10) = 1,34, p = 0,209. La diferencia de medias es idéntica; lo que cambia es el error. La prueba independiente trata como ruido las diferencias entre personas, que el diseño intrasujeto ya ha controlado.

**Supuestos.** VD cuantitativa, pares independientes entre sí y normalidad de las diferencias, o n suficiente para que la distribución muestral de M_D sea aproximadamente normal. Con dos medidas **no hay supuesto de esfericidad ni de igualdad de varianzas**: al trabajar con una única variable D, ese problema desaparece. La esfericidad aparece con tres o más medidas (Unidad 13).

**El informe** sigue el mismo esquema que en grupos independientes, con los descriptivos de cada medida, la diferencia media con su IC y el tamaño del efecto indicando cuál se usa:

> t(5) = 3,08, p = 0,027, M_D = 2,17, IC 95 % [0,36; 3,97]

Hay un matiz importante: que el grupo mejore en promedio no significa que haya mejorado cada persona, y que una persona cambie no significa que el cambio supere el error de medida. Valorar el cambio individual es tarea del índice de cambio fiable (Jacobson y Truax, 1991), que se estudia en Evaluación Psicológica.

### 10.3 d_z, d_av y d_rm: elegir el denominador

En grupos independientes, la d tiene un estandarizador natural, la DT combinada. Con medidas relacionadas hay varias opciones, y dan resultados muy distintos con los mismos datos. Lakens (2013) recomienda declarar siempre cuál se usa.

| Índice | Fórmula | Qué estandariza |
| --- | --- | --- |
| d_z | M_D / s_D = t / √n | La DT de las diferencias |
| d_av | M_D / [(s₁ + s₂)/2] | La media de las DT de las dos medidas |
| d_rm | d_z · √[2(1 − r)] | Corrige d_z por la correlación entre medidas |

**d_z** responde a una pregunta sobre el **cambio**: cuánto se desplaza la media de las diferencias respecto a su propia variabilidad. Es la que interviene en el cálculo de la potencia de la prueba relacionada y la que dan por defecto varios programas: en muestras emparejadas, SPSS estandariza con la DT de las diferencias. Su problema es que **depende de r**. La misma diferencia de medias, en la misma escala, produce una d_z pequeña si las medidas están poco correlacionadas y una enorme si lo están mucho, como muestra la figura 10.2.

![m](dz-correlacion.png)

Figura 10.2. **d_z crece con la correlación entre medidas.** Para una diferencia fija equivalente a d_av = 0,5 con DT iguales, d_z = d_av/√[2(1 − r)] vale 0,35 con r = 0; 0,5 con r = 0,5, y 1,12 con r = 0,9. Esquema calculado. Elaboración propia (SAIMAP).

**d_av** y **d_rm** expresan la diferencia en la escala de la **variabilidad entre personas**, como una d de grupos independientes. Con DT iguales coinciden. Son las adecuadas para comparar el efecto con el de estudios entre grupos o para incluirlo en un metaanálisis junto a ellos, y son las que Lakens (2013) recomienda informar en medidas repetidas.

Un ejemplo. Si la ansiedad baja 4,5 puntos y la DT de las medidas ronda 6,7, el efecto es d_av ≈ 0,67: el grupo se desplaza unas dos terceras partes de una desviación típica. Si la correlación pre-post es 0,80, la DT de las diferencias es menor y d_z ≈ 1,07. Las dos cifras son correctas; responden a preguntas distintas. Lo incorrecto es informar d_z y compararla con los cortes de Cohen, pensados para grupos independientes, como si fuera una d_av: así se infla la impresión de magnitud.

Reglas prácticas:

1. Indicar siempre el índice con su subíndice.
2. Para describir la magnitud, usar d_av o d_rm; para planificar la potencia de un estudio intrasujeto, d_z (o d_av con una estimación de r).
3. Informar la correlación entre medidas, que permite pasar de un índice a otro.

En jamovi y JASP conviene comprobar qué índice calcula cada versión; si no es el deseado, se obtiene con las fórmulas de la tabla.

### 10.4 Wilcoxon de rangos con signo y lectura de la salida

La **prueba de Wilcoxon de rangos con signo** (Wilcoxon, 1945) es la alternativa de rangos a la t relacionada. Es útil con diferencias claramente no normales, con atípicos o con medidas ordinales. No debe confundirse con la W de suma de rangos de Wilcoxon, equivalente a Mann-Whitney para grupos independientes.

**Procedimiento.**

1. Calcular la diferencia D de cada par.
2. Descartar las diferencias iguales a 0 (en la versión clásica).
3. Ordenar las |D| de menor a mayor y asignar rangos; los empates reciben el rango medio.
4. Devolver a cada rango el signo de su diferencia y sumar por separado los rangos positivos (T₊) y negativos (T₋). Se cumple que T₊ + T₋ = n(n + 1)/2, con n el número de diferencias no nulas.
5. El estadístico es la menor de las dos sumas: si H₀ es cierta, T₊ y T₋ deberían parecerse.

Con muestras pequeñas se usa la distribución exacta; con mayores, una aproximación normal (z).

**Qué contrasta y qué supone.** A diferencia de la prueba de signos, Wilcoxon usa la magnitud de las diferencias a través de sus rangos, y por eso es más potente. A cambio, supone que la distribución de las diferencias es **simétrica**; solo así puede interpretarse como una prueba sobre la **mediana de las diferencias** (Wilcoxon, 1945). Exige también que los pares sean independientes. Es una prueba con menos supuestos, no sin supuestos.

**Tamaño del efecto.** La **correlación biserial de rangos para pares**, r_rb = (T₊ − T₋)/(T₊ + T₋), va de −1 a 1. Vale 1 si todas las diferencias van en la misma dirección.

**Leer la salida.** En SPSS, la t relacionada está en Analizar > Comparar medias (Prueba T para muestras relacionadas) y produce tres bloques:

| Bloque | Qué contiene | Para qué sirve |
| --- | --- | --- |
| Estadísticos de muestras emparejadas | M, DT, N y ET de cada medida | Descriptivos del informe |
| Correlaciones | r entre las dos medidas y su p | Explica la ganancia de potencia y permite calcular d_rm |
| Prueba de muestras emparejadas | M_D, s_D, ET, IC de la diferencia, t, gl, p de una y dos colas | Contraste e intervalo |

A ellos se añade, si se solicita, la tabla de tamaños del efecto (d de Cohen y g de Hedges con su IC). Wilcoxon se obtiene en Analizar > Pruebas no paramétricas > Muestras relacionadas. Su salida da el número de diferencias positivas, negativas y empates, el estadístico, z y la significación. En jamovi está en T-Tests > Paired Samples T-Test, con casillas para Student, Wilcoxon y tamaños del efecto; JASP ofrece lo mismo junto con su versión bayesiana.

Para comprobar el supuesto de normalidad hay que mirar **las diferencias**: crear la variable D (en SPSS, Transformar > Calcular variable) y examinar su histograma y su gráfico Q-Q (Unidad 7).

### Ejemplo resuelto · Antes y después de un programa de relajación

Diez personas con ansiedad elevada siguen un programa de relajación de seis semanas. Se mide su ansiedad estado (más es peor) al inicio y al final (datos ficticios). D = pre − post, de modo que una D positiva indica mejora.

| Persona | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Pre | 38 | 31 | 45 | 27 | 35 | 42 | 30 | 48 | 33 | 36 |
| Post | 35 | 28 | 39 | 18 | 32 | 33 | 32 | 39 | 26 | 38 |
| D | 3 | 3 | 6 | 9 | 3 | 9 | −2 | 9 | 7 | −2 |

**1. Hipótesis.** H₀: μ_D = 0; H₁: μ_D ≠ 0 (bilateral, α = 0,05).

**2. Descriptivos.** Pre: M = 36,5; DT = 6,79. Post: M = 32,0; DT = 6,60. Correlación pre-post: r = 0,80.

**3. Diferencias.** M_D = 4,5; s_D = 4,22.

**4. Estadístico.**

> ET = 4,22 / √10 = 1,34

> t(9) = 4,5 / 1,34 = 3,37; p = 0,008

**5. Intervalo.** Con t_crít(9) = 2,262:

> IC 95 % = 4,5 ± 2,262 · 1,34 = [1,48; 7,52]

**6. Tamaños del efecto.**

> d_z = 4,5 / 4,22 = 1,07

> d_av = 4,5 / [(6,79 + 6,60)/2] = 0,67

> d_rm = 1,07 · √[2(1 − 0,80)] = 0,67

Con DT pre y post casi iguales, d_av y d_rm coinciden. Se informa d_av; d_z sirve para planificar un estudio similar.

**7. Wilcoxon como comprobación.** Hay 8 diferencias positivas y 2 negativas. Los rangos de las negativas (las dos de −2) valen 1,5 cada uno: T₋ = 3 y T₊ = 52 (suma 55 = 10 · 11/2). La aproximación normal con corrección por empates da z = −2,51, p = 0,012; r_rb = (52 − 3)/55 = 0,89. La conclusión coincide.

**8. Informe APA.** «La ansiedad disminuyó desde el inicio (M = 36,5; DT = 6,79) hasta el final del programa (M = 32,0; DT = 6,60), t(9) = 3,37, p = 0,008, diferencia media = 4,5 puntos, IC 95 % [1,48; 7,52], d_av = 0,67 (r pre-post = 0,80).»

**9. Qué no se puede concluir.** Sin grupo de control, la mejora puede deberse al paso del tiempo o a la regresión a la media, probable al seleccionar a personas con ansiedad elevada. Además, dos de las diez personas empeoraron.

### Consenso y debate

**Consenso:** con dos medidas de las mismas personas se analizan las diferencias, y la normalidad que importa es la de esas diferencias. La correlación entre medidas explica la mayor potencia del diseño intrasujeto. Hay que declarar el estandarizador del tamaño del efecto e informar d_av o d_rm para describir la magnitud y la correlación entre medidas (Lakens, 2013).

**Debate:** qué índice es preferible en cada contexto (d_z para la potencia y el cambio, d_av o d_rm para comparar con diseños entre grupos y para el metaanálisis), y cómo tratar los empates y las diferencias nulas en Wilcoxon. Los diseños pre-post sin grupo de control siguen usándose mucho en la práctica clínica, pese a sus limitaciones de validez interna.

### Mito frecuente

**Mito:** «Las pruebas no paramétricas no tienen supuestos: si los datos dan problemas, Wilcoxon sirve siempre».

**Realidad:** Wilcoxon de rangos con signo exige pares independientes entre sí y supone que la distribución de las diferencias es simétrica para poder interpretarse como una prueba sobre su mediana (Wilcoxon, 1945). Lo mismo ocurre con Mann-Whitney, que se ve afectada por la heterocedasticidad. Las pruebas de rangos relajan el supuesto de normalidad, pero no eliminan los demás.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Diseño intrasujeto | Diseño en que las mismas personas pasan por todas las condiciones |
| Contrabalanceo | Variar el orden de las condiciones entre participantes para neutralizar efectos de orden |
| Puntuación diferencia | D = X₁ − X₂ para cada par; convierte el problema en una prueba de una muestra |
| t relacionada | M_D dividida por su error típico, s_D/√n; gl = n − 1, con n el número de pares |
| d_z | Diferencia media dividida por la DT de las diferencias; crece con la correlación |
| d_av | Diferencia media dividida por la media de las DT de las dos medidas |
| d_rm | d_z corregida por la correlación entre medidas, d_z · √[2(1 − r)] |
| Wilcoxon de rangos con signo | Prueba de rangos para medidas relacionadas; supone diferencias simétricas |

### Clave PIR

**Prioridad alta.** Se pregunta qué prueba corresponde a cada diseño (t relacionada o Wilcoxon de rangos con signo para dos medidas de las mismas personas; Mann-Whitney para grupos independientes), los gl (n − 1, con n el número de pares) y la ventaja de potencia del diseño intrasujeto. Trampas típicas: contar observaciones en lugar de pares al calcular los gl, creer que con dos medidas repetidas hay que comprobar la esfericidad y comparar una d_z con los cortes de Cohen como si fuera una d de grupos independientes.

### Autoevaluación

**1.** Se mide a 24 personas antes y después de un taller y se aplica la t relacionada. ¿Cuántos grados de libertad tiene?
a) 46
b) 23
c) 22

**2.** ¿Por qué la t relacionada suele ser más potente que la independiente con el mismo número de datos?
a) Porque la correlación entre medidas reduce la varianza de las diferencias
b) Porque usa un valor crítico menor que la prueba independiente
c) Porque elimina los efectos de orden entre las dos medidas

**3.** Con t(15) = 2,80 en una t relacionada con 16 pares, ¿cuánto vale d_z?
a) 0,18
b) 1,40
c) 0,70

**4.** Una d_av fija de 0,5 se acompaña de una correlación pre-post cada vez mayor. ¿Qué ocurre con d_z?
a) Disminuye
b) Aumenta
c) No cambia

**5.** ¿Qué supuesto necesita la prueba de Wilcoxon de rangos con signo para interpretarse como prueba de la mediana de las diferencias?
a) Normalidad de cada medida por separado
b) Igualdad de varianzas entre las dos medidas
c) Simetría de la distribución de las diferencias

### Soluciones

**1 b.** gl = n − 1 = 24 − 1 = 23, con n el número de pares. **2 a.** s_D² = s₁² + s₂² − 2rs₁s₂: cuanto mayor es r, menor es el error típico. **3 c.** d_z = t/√n = 2,80/4 = 0,70. **4 b.** d_z = d_av/√[2(1 − r)]: con r = 0,9 llega a 1,12 (figura 10.2). **5 c.** La simetría de las diferencias permite leerla como prueba de la mediana (Wilcoxon, 1945); no exige normalidad.
