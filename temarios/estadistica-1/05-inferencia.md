# Capítulo 5 · Inferencia estadística

Cómo pasar de lo que se observa en una muestra a lo que probablemente ocurre en la población: la distribución normal, las distribuciones muestrales, los intervalos de confianza y el contraste de hipótesis.

## Unidad 15 · Distribuciones muestrales y distribución normal

**Objetivos:** distinguir variables aleatorias discretas y continuas; manejar la distribución normal y la tabla de la normal tipificada; entender qué es la distribución muestral de la media y qué dice el teorema central del límite.

### 15.1 Variables aleatorias

Una **variable aleatoria** es una regla que asigna un número a cada resultado de un experimento aleatorio (Unidad 10). Antes de observar a una persona no se sabe qué puntuación obtendrá en un test, pero sí qué valores son posibles y con qué probabilidad aparecen.

- **Discreta**: toma valores aislados que se pueden contar. Ejemplo: número de respuestas correctas en un test de 20 ítems (0, 1, 2… 20). Se describe con una **función de probabilidad**, que da la probabilidad de cada valor.
- **Continua**: puede tomar cualquier valor dentro de un intervalo. Ejemplo: tiempo de reacción en milisegundos. Se describe con una **función de densidad**, una curva cuya área total vale 1. En una variable continua la probabilidad de un valor exacto es 0; solo tienen probabilidad los **intervalos**, y esa probabilidad es el **área bajo la curva** entre sus límites.

Igual que una muestra tiene media y varianza (Unidades 7 y 8), una variable aleatoria tiene su **esperanza** o valor esperado, E(X) = μ, y su **varianza**, σ². Son parámetros: describen el comportamiento de la variable en la población o «a la larga», no en un grupo concreto de datos.

La **función de distribución**, F(x) = P(X ≤ x), da la probabilidad acumulada hasta un valor. Es la versión teórica de la frecuencia relativa acumulada y la que recogen las tablas estadísticas.

Muchas variables psicológicas son el resultado de sumar muchos factores pequeños e independientes (genes, experiencias, estado del día, errores de medida). Cuando ocurre eso, la distribución resultante tiende a tener forma de campana. La máquina de Galton lo muestra de forma física: cada bola rebota a izquierda o derecha en cada fila de clavos, y la posición final es la suma de muchos rebotes al azar.

![s](galton-box.jpg)

Figura 15.1. **Máquina de Galton.** Las bolas rebotan al azar en los clavos y se acumulan en los compartimentos con una forma aproximadamente normal. Fotografía: Rodrigo Argenton; pieza de Estes Objethos Atelier. CC BY-SA 4.0, vía Wikimedia Commons.

### 15.2 La distribución normal

La **distribución normal** (o de Gauss) es la distribución continua más importante en estadística, por dos motivos: describe bien muchas variables (puntuaciones de CI, errores de medida, estatura) y, sobre todo, describe cómo se distribuyen las **medias de muestras**, como se verá en 15.4.

Una normal queda definida por dos parámetros, su media μ y su desviación típica σ. Se escribe X ~ N(μ, σ). Algunos manuales escriben la varianza en lugar de la desviación típica, N(μ, σ²); conviene mirar qué convenio se usa antes de operar.

Propiedades:

- Es **simétrica** respecto a μ, con forma de campana.
- **Media, mediana y moda coinciden** en μ.
- Es **asintótica**: las colas se acercan al eje horizontal sin tocarlo nunca. Cualquier valor es posible, aunque los alejados son muy improbables.
- Tiene los **puntos de inflexión** en μ − σ y μ + σ.
- El **área total** bajo la curva es 1, y la mitad queda a cada lado de μ.
- Es **mesocúrtica**: sirve de referencia para la curtosis (Unidad 9).

Cualquiera que sea μ y σ, la proporción de casos a una distancia dada de la media, medida en desviaciones típicas, es siempre la misma:

| Intervalo | Proporción de casos |
| --- | --- |
| μ ± 1σ | 68,3 % |
| μ ± 2σ | 95,4 % |
| μ ± 3σ | 99,7 % |
| μ ± 1,96σ | 95 % exacto |

![](normal-68-95.png)

Figura 15.2. **Porcentaje de casos a 1, 2 y 3 desviaciones típicas de la media en una distribución normal.** Entre μ ± σ queda el 68,3 %; entre μ ± 2σ, el 95,4 %; entre μ ± 3σ, el 99,7 %. Elaboración propia (SAIMAP).

Con el CI, que se escala con μ = 100 y σ = 15, esto significa que en torno al 68 % de la población puntúa entre 85 y 115, y en torno al 95 % entre 70 y 130.

La **normal tipificada** (o estándar), Z ~ N(0, 1), es la normal con media 0 y desviación típica 1. Cualquier normal se convierte en ella restando la media y dividiendo por la desviación típica, igual que las puntuaciones típicas de la Unidad 9:

> z = (x − μ) / σ

> x = μ + z · σ

Tipificar no cambia la forma de la distribución; solo cambia la escala. Por eso basta con **una sola tabla** para calcular probabilidades de cualquier variable normal.

### 15.3 La tabla de la normal tipificada

La tabla más habitual da, para cada valor z, el área acumulada a su izquierda, P(Z ≤ z). La primera columna recoge la unidad y el primer decimal de z, y la primera fila, el segundo decimal. Por ejemplo, para z = 1,50 se lee 0,9332.

![](normal-z15.png)

Figura 15.3. **Área acumulada hasta z = 1,5.** P(Z ≤ 1,5) = 0,9332 (zona sombreada); la cola derecha vale 1 − 0,9332 = 0,0668. Elaboración propia (SAIMAP).

Con esa tabla y la simetría de la curva se resuelven todos los casos:

| Se busca | Cálculo | Ejemplo con la tabla |
| --- | --- | --- |
| P(Z ≤ a) | Lectura directa | P(Z ≤ 1,50) = 0,9332 |
| P(Z ≥ a) | 1 − P(Z ≤ a) | P(Z ≥ 1,50) = 0,0668 |
| P(Z ≤ −a) | 1 − P(Z ≤ a), por simetría | P(Z ≤ −1,50) = 0,0668 |
| P(a ≤ Z ≤ b) | P(Z ≤ b) − P(Z ≤ a) | P(−1 ≤ Z ≤ 1) = 0,8413 − 0,1587 = 0,6826 |
| Valor z que deja una proporción p por debajo | Búsqueda inversa: localizar p en el cuerpo de la tabla | p = 0,90 → z ≈ 1,28 |

Algunas tablas dan el área entre 0 y z o solo la mitad derecha: hay que comprobar siempre qué área recoge la tabla. Cualquier programa (SPSS, jamovi, JASP, R, una hoja de cálculo) calcula estas áreas con más decimales; la tabla sigue siendo útil para entender la lógica y para el examen.

Hay cuatro valores que conviene recordar porque reaparecen en la Unidad 16:

| z | Área que deja | Uso típico |
| --- | --- | --- |
| 1,645 | 5 % en una cola | Contraste unilateral con α = 0,05 |
| 1,96 | 2,5 % en cada cola (95 % central) | IC al 95 %; contraste bilateral con α = 0,05 |
| 2,576 | 0,5 % en cada cola (99 % central) | IC al 99 %; contraste bilateral con α = 0,01 |
| 0,84 | 20 % en la cola derecha | Cálculo de la potencia (0,80) |

### 15.4 Distribución muestral de la media y teorema central del límite

Si se extraen muchas muestras de tamaño n de la misma población y en cada una se calcula la media, las medias no coinciden: varían de una muestra a otra. La **distribución muestral de la media** es la distribución de probabilidad de x̄ considerando todas las muestras posibles de tamaño n. Es una distribución teórica: en la práctica solo se tiene una muestra, pero esa distribución permite saber cuánto puede alejarse esa única media del valor poblacional.

Sus propiedades son:

> E(x̄) = μ

> ET = σ / √n

- Su media es la media poblacional: x̄ no tiende a quedarse ni por encima ni por debajo de μ.
- Su desviación típica se llama **error típico de la media** (ET, en inglés *standard error*). Mide la precisión de x̄ como estimación de μ.
- El error típico **disminuye con √n**: para reducirlo a la mitad hay que multiplicar el tamaño de la muestra por 4.

No hay que confundir la desviación típica (σ, cuánto difieren las personas) con el error típico (σ/√n, cuánto difieren las medias de unas muestras a otras). Con el CI (σ = 15) y n = 25, el error típico es 15/√25 = 3.

¿Qué forma tiene esa distribución?

- Si la población es **normal**, la distribución de x̄ es normal para **cualquier n**.
- Si no lo es, interviene el **teorema central del límite** (TCL): siempre que la población tenga varianza finita, la distribución de la media muestral **se aproxima a la normal a medida que n aumenta**, con media μ y error típico σ/√n, sea cual sea la forma de la población de partida.

![](tcl.png)

Figura 15.4. **Teorema central del límite.** A la izquierda, una población exponencial muy asimétrica. A la derecha, la distribución de 20 000 medias de muestras de tamaño n = 2, 10 y 30, con la curva normal teórica superpuesta: al crecer n, la distribución de las medias se vuelve más simétrica, más estrecha y más próxima a la normal. Elaboración propia (SAIMAP), simulación.

Se suele decir que con n ≥ 30 la aproximación es suficiente. Es una regla práctica, no un teorema: con poblaciones casi simétricas basta un n menor, y con poblaciones muy asimétricas o con valores extremos puede hacer falta bastante más. El TCL habla de la **media**, no de los datos: aunque la muestra sea grande, la distribución de las puntuaciones individuales sigue teniendo la forma que tenga en la población.

**La t de Student.** Para usar σ/√n hay que conocer σ, algo que casi nunca ocurre. Si se sustituye σ por la desviación típica de la muestra calculada con n − 1 (s, la raíz de la cuasivarianza; Unidad 8), el estadístico tipificado ya no sigue una normal, sino una **distribución t de Student**:

> t = (x̄ − μ) / (s / √n), con gl = n − 1

La publicó en 1908 William S. Gosset, químico de la cervecera Guinness, con el seudónimo «Student». Sus propiedades: es simétrica y centrada en 0, como Z, pero tiene **colas más pesadas**, porque s también varía de una muestra a otra; hay una distinta para cada número de **grados de libertad** (gl); y **se aproxima a la normal** a medida que aumentan los gl. Por ejemplo, el valor que deja el 95 % central es 2,571 con 5 gl, 2,064 con 24 gl y 1,984 con 100 gl, frente a 1,96 en la normal. Es la distribución que usan SPSS, jamovi y JASP en las pruebas t, las más frecuentes en psicología.

### Ejemplo resuelto · Tipificar y buscar en la tabla normal

Las puntuaciones de CI se distribuyen como N(100, 15). Se usa la tabla de áreas a la izquierda con cuatro decimales.

**a) Proporción de personas con CI ≤ 122,5.**

> z = (122,5 − 100) / 15 = 1,50

P(Z ≤ 1,50) = **0,9332**. Un 93,32 % de la población puntúa 122,5 o menos.

**b) Proporción con CI ≥ 130.**

> z = (130 − 100) / 15 = 2,00

P(Z ≥ 2,00) = 1 − 0,9772 = **0,0228**, algo más del 2 %.

**c) Proporción con CI entre 90 y 120.**

> z₁ = (90 − 100) / 15 = −0,67

> z₂ = (120 − 100) / 15 = 1,33

P(Z ≤ 1,33) = 0,9082. Por simetría, P(Z ≤ −0,67) = 1 − 0,7486 = 0,2514. La proporción buscada es 0,9082 − 0,2514 = **0,6568**, casi dos de cada tres personas.

**d) Puntuación que deja por debajo al 90 % (percentil 90).** Se busca en el cuerpo de la tabla el área más próxima a 0,90: es 0,8997, que corresponde a z = 1,28. Se deshace la tipificación:

> x = 100 + 1,28 · 15 = 119,2

Con un programa, z = 1,2816 y x = 119,22. La diferencia se debe solo al redondeo de la tabla.

**e) Una persona frente a la media de un grupo.** La probabilidad de que una persona elegida al azar tenga un CI ≥ 106 es P(Z ≥ 0,40) = 1 − 0,6554 = 0,3446. La probabilidad de que la **media** de una muestra aleatoria de 25 personas sea ≥ 106 se calcula con el error típico, 15/√25 = 3:

> z = (106 − 100) / 3 = 2,00

P(Z ≥ 2,00) = **0,0228**. Un valor que es frecuente en un individuo (34 %) es raro como media de 25 (2 %): las medias varían mucho menos que las personas. Esta idea es la base de toda la Unidad 16.

### Mito frecuente

**Mito:** «Con 30 o más participantes, los datos se vuelven normales».

**Realidad:** el teorema central del límite se refiere a la distribución de la **media muestral**, no a la de los datos. Una muestra grande de una variable asimétrica (por ejemplo, tiempos de reacción o número de ingresos hospitalarios) sigue siendo asimétrica; lo que se aproxima a la normal es la distribución de las medias. Además, el umbral de 30 es orientativo y depende de la forma de la población.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Variable aleatoria | Regla que asigna un número a cada resultado de un experimento aleatorio |
| Función de densidad | Curva de una variable continua; las probabilidades son áreas bajo ella |
| Distribución normal | Distribución continua, simétrica y en forma de campana definida por μ y σ |
| Normal tipificada | Normal con media 0 y desviación típica 1, N(0, 1) |
| Distribución muestral | Distribución de un estadístico en todas las muestras posibles de tamaño n |
| Error típico de la media | Desviación típica de la distribución muestral de la media, σ/√n |
| Teorema central del límite | La media muestral tiende a distribuirse normalmente al aumentar n |
| t de Student | Distribución que sustituye a la normal cuando σ se estima con s; depende de los gl |

### Clave PIR

**Prioridad media.** Se pregunta el cálculo de áreas con la normal (sobre todo con 1,96 y 1,645), la diferencia entre desviación típica y error típico, el efecto del tamaño muestral sobre el error típico y qué afirma exactamente el teorema central del límite. Trampa típica: atribuir al TCL que los datos se vuelvan normales.

### Autoevaluación

**1.** En una distribución normal, ¿qué proporción aproximada de casos queda entre μ − 2σ y μ + 2σ?
a) 68 %
b) 95 %
c) 99 %

**2.** Si P(Z ≤ 1,5) = 0,9332, ¿cuánto vale P(Z ≤ −1,5)?
a) 0,0668
b) 0,4332
c) 0,9332

**3.** Si la población tiene σ = 20 y las muestras son de n = 100, el error típico de la media vale…
a) 0,2
b) 20
c) 2

**4.** El teorema central del límite afirma que, al aumentar n…
a) la distribución de las puntuaciones de la muestra se vuelve normal
b) la distribución de la media muestral se aproxima a la normal
c) la media muestral se aleja cada vez más de μ

**5.** Frente a la normal tipificada, la distribución t de Student…
a) tiene colas más pesadas y se acerca a la normal al aumentar los gl
b) es asimétrica positiva para muestras pequeñas
c) solo puede utilizarse cuando se conoce σ

### Soluciones

**1 b.** Con más precisión, el 95,4 %. **2 a.** Por simetría, 1 − 0,9332 = 0,0668. **3 c.** 20/√100 = 20/10 = 2. **4 b.** Habla de la media, no de los datos individuales. **5 a.** Es simétrica y se usa precisamente cuando σ es desconocida y se estima con s.

## Unidad 16 · Estimación por intervalos y contraste de hipótesis

**Objetivos:** calcular e interpretar correctamente un intervalo de confianza para la media; aplicar paso a paso un contraste de hipótesis e interpretar el valor p; relacionar errores tipo I y II, potencia y tamaño del efecto, e informar de un resultado según las normas APA.

### 16.1 Estimación puntual e intervalos de confianza

La inferencia tiene dos tareas: **estimar** parámetros (¿cuánto vale μ?) y **contrastar hipótesis** sobre ellos (¿es μ distinto de 100?).

**Estimación puntual.** Consiste en dar un único valor calculado con la muestra. La fórmula que se usa es el **estimador** (x̄ para μ, la proporción muestral p para π, la cuasivarianza s²ₙ₋₁ para σ²). Un buen estimador debe ser:

| Propiedad | Significado |
| --- | --- |
| **Insesgado** | Su valor esperado coincide con el parámetro: no tiende a sobrestimarlo ni a infraestimarlo |
| **Eficiente** | Entre los insesgados, es el que tiene menor varianza (varía menos de una muestra a otra) |
| **Consistente** | Al aumentar n, se acerca cada vez más al parámetro |
| **Suficiente** | Aprovecha toda la información de la muestra relevante para el parámetro |

La media muestral es un estimador insesgado y consistente de μ. La varianza con n (S²) es **sesgada**: tiende a quedarse por debajo de σ². La cuasivarianza (con n − 1) es **insesgada**; por eso la usan SPSS y la mayoría de programas (Unidad 8).

**Estimación por intervalo.** Un **intervalo de confianza** (IC) da un rango de valores plausibles para el parámetro junto con un **nivel de confianza** (1 − α), normalmente el 95 %. Para la media, si se conoce σ:

> IC = x̄ ± z · σ / √n

> Error máximo de estimación (margen de error) = z · σ / √n

Con el 95 %, z = 1,96. Por ejemplo, con x̄ = 100, σ = 15 y n = 25, el error típico es 15/5 = 3 y el margen de error es 1,96 · 3 = 5,88:

> IC 95 % = 100 ± 5,88 = [94,12; 105,88]

Si σ es desconocida, que es lo habitual, se usa s (con n − 1) y el valor crítico de la t de Student con n − 1 gl en lugar de 1,96.

**La amplitud del intervalo** aumenta con el **nivel de confianza** (al 99 % se usa 2,576) y con la **variabilidad** (σ), y disminuye con el **tamaño de la muestra**: para reducir el margen de error a la mitad hay que multiplicar n por 4.

**Interpretación correcta.** El 95 % se refiere al **procedimiento**: si se repitiera el muestreo muchas veces, alrededor del 95 % de los intervalos calculados contendría μ. Un intervalo concreto contiene μ o no lo contiene, y no se sabe cuál de las dos cosas ocurre. Por eso, en el enfoque clásico, no es correcto decir «hay un 95 % de probabilidad de que μ esté entre 94,12 y 105,88». Lo correcto es «con un 95 % de confianza, μ está entre 94,12 y 105,88», entendiendo esa confianza como la fiabilidad del método.

![](ic-cobertura.png)

Figura 16.1. **Cobertura de los intervalos de confianza.** Intervalos al 95 % calculados en 40 muestras distintas (n = 25) de una población con μ = 100 y σ = 15: 38 contienen μ y 2 no (en rojo). Cada intervalo concreto acierta o falla; el 95 % describe la tasa de acierto del método. Elaboración propia (SAIMAP), simulación.

### 16.2 La lógica del contraste de hipótesis

Un **contraste de hipótesis** decide, con los datos de una muestra, si una afirmación sobre la población es compatible con lo observado. Su lógica es indirecta: se supone que **no hay efecto** y se comprueba si los datos serían raros bajo ese supuesto.

**Hipótesis.**

- **Hipótesis nula (H₀)**: afirma que no hay efecto o diferencia; siempre incluye la igualdad. Ejemplo: H₀: μ = 100.
- **Hipótesis alternativa (H₁)**: lo que se acepta si se rechaza H₀. Puede ser **bilateral** (H₁: μ ≠ 100) o **unilateral** (H₁: μ > 100, o bien H₁: μ < 100).

La hipótesis de investigación suele coincidir con H₁. Se contrasta H₀ porque fija un valor concreto del parámetro y permite saber qué distribución seguiría el estadístico.

**Estadístico de contraste.** Para una media, μ₀ es el valor que fija H₀. Con σ conocida se usa z, que sigue la normal tipificada si H₀ es verdadera; con σ desconocida, t, que sigue la t de Student con n − 1 gl:

> z = (x̄ − μ₀) / (σ / √n)

> t = (x̄ − μ₀) / (s / √n)

**Pasos del contraste.**

1. **Formular H₀ y H₁** antes de ver los datos, y decidir si el contraste es bilateral o unilateral.
2. **Comprobar los supuestos** (muestreo aleatorio, independencia de las observaciones, normalidad de la población o n suficiente).
3. **Elegir el estadístico de contraste** y su distribución si H₀ es verdadera.
4. **Fijar el nivel de significación α**, la probabilidad máxima de rechazar H₀ siendo verdadera que se está dispuesto a asumir. Por convención, α = 0,05.
5. **Determinar la región crítica** (o de rechazo): los valores del estadístico tan extremos que, si H₀ fuera cierta, solo aparecerían con probabilidad α. En un contraste bilateral con α = 0,05, α se reparte entre las dos colas (0,025 en cada una) y los valores críticos son ±1,96. En uno unilateral derecho, todo α está en una cola y el valor crítico es 1,645.
6. **Calcular el estadístico** con los datos.
7. **Decidir**: si el estadístico cae en la región crítica, se **rechaza H₀** y se dice que el resultado es **estadísticamente significativo**; si no, se **mantiene H₀** (no se rechaza).

![](region-rechazo.png)

Figura 16.2. **Regiones de rechazo en un contraste bilateral con α = 0,05.** La región de rechazo está más allá de ±1,96 (α/2 = 0,025 en cada cola). Un z observado de 2,30 cae en ella; su valor p bilateral es 0,021. Elaboración propia (SAIMAP).

**Mantener no es aceptar.** No rechazar H₀ no demuestra que sea verdadera: puede que el efecto exista y la muestra sea pequeña para detectarlo. Por eso se dice «mantener» o «no rechazar» H₀, no «aceptarla». Igualmente, rechazar H₀ no **prueba** H₁; indica que los datos son poco compatibles con H₀.

**Unilateral o bilateral.** El unilateral tiene más potencia en la dirección prevista, pero no detecta efectos en la contraria. Solo es legítimo si la dirección se fijó antes de ver los datos; elegir la cola después duplica en la práctica el riesgo de error tipo I. Por defecto se usan contrastes bilaterales.

### 16.3 El valor p y el contraste mediante intervalos

El **valor p** (nivel crítico o significación observada, «Sig.» en SPSS) es la **probabilidad de obtener un resultado igual de extremo o más que el observado, suponiendo que H₀ es verdadera** (y que se cumplen los supuestos del modelo).

- En un contraste bilateral, se suman las dos colas: p = 2 · P(Z ≥ |z|).
- En uno unilateral, se toma solo la cola de la dirección prevista.

Con z = 2,30, P(Z ≤ 2,30) = 0,9893, de modo que p unilateral = 0,0107 y p bilateral = 2 · 0,0107 ≈ 0,021.

**Regla de decisión.** Se rechaza H₀ si **p ≤ α**, lo que equivale a comparar el estadístico con el valor crítico: z = 2,30 supera 1,96 y p = 0,021 es menor que 0,05. El valor p informa además de **cuánto** de incompatibles son los datos con H₀.

**Qué no es el valor p** (Greenland et al., 2016):

| Interpretación | ¿Correcta? |
| --- | --- |
| Probabilidad de datos tan extremos o más si H₀ fuera verdadera | **Sí** |
| Probabilidad de que H₀ sea verdadera | No. Para eso hace falta un enfoque bayesiano y probabilidades previas |
| Probabilidad de que el resultado se deba al azar | No. Ya supone que H₀ (el «azar») es cierta |
| 1 − p es la probabilidad de que el resultado se replique | No. La replicación depende sobre todo de la potencia |
| Un p más pequeño indica un efecto más grande o importante | No. p depende también de n |
| p > 0,05 demuestra que no hay efecto | No. Puede faltar potencia |

**Significación estadística no es relevancia.** Con muestras muy grandes, diferencias minúsculas resultan significativas; con muestras pequeñas, diferencias importantes pueden no serlo (como χ² y φ en la Unidad 14). Por eso el valor p debe ir siempre acompañado del **tamaño del efecto** y de su **intervalo de confianza**.

**Contraste mediante el intervalo de confianza.** Existe una correspondencia directa entre ambos procedimientos: un contraste bilateral con nivel α rechaza H₀: μ = μ₀ **si y solo si μ₀ queda fuera del IC al (1 − α) · 100 %**. Si el IC al 95 % de una media es [101,02; 112,78], el valor 100 queda fuera y el contraste bilateral con α = 0,05 es significativo. El IC aporta más que la decisión: muestra la magnitud estimada y su precisión. Es la propuesta central de la llamada «nueva estadística» (Cumming, 2014; Cumming y Calin-Jageman, 2024).

### 16.4 Errores, potencia y tamaño del efecto

Toda decisión basada en una muestra puede equivocarse:

| Decisión / Realidad | H₀ verdadera | H₀ falsa |
| --- | --- | --- |
| **Rechazar H₀** | **Error tipo I** (falso positivo). Probabilidad α | Decisión correcta. Probabilidad 1 − β (**potencia**) |
| **Mantener H₀** | Decisión correcta. Probabilidad 1 − α (nivel de confianza) | **Error tipo II** (falso negativo). Probabilidad β |

La probabilidad de error tipo I la fija el investigador con α. La de error tipo II, β, depende del tamaño real del efecto, de n y de α. La **potencia** (1 − β) es la probabilidad de detectar un efecto que existe; por convención (Cohen, 1988) se busca al menos 0,80.

![](errores-potencia.png)

Figura 16.3. **Errores tipo I y II y potencia en un contraste unilateral.** La curva azul es la distribución del estadístico si H₀ es verdadera, y la roja, si lo es H₁. A la derecha del valor crítico se rechaza H₀: el área gris bajo la curva azul es α = 0,05 (error tipo I) y el área rosada bajo la curva roja es la potencia, 1 − β = 0,80. A la izquierda del valor crítico, el área amarilla bajo la curva roja es β = 0,20 (error tipo II). Elaboración propia (SAIMAP).

**La potencia aumenta con:** un **tamaño del efecto** mayor (las distribuciones de H₀ y H₁ se separan más); un **n** mayor (baja el error típico); un **α** mayor, a costa de más errores tipo I (con n y efecto fijos, **α y β varían en sentido contrario**); menor **variabilidad** (medidas fiables, diseños intrasujeto), y un contraste **unilateral** en la dirección correcta.

**Análisis de potencia.** Antes de recoger datos se calcula el n necesario para la potencia deseada con un efecto plausible. Para una prueba t de dos grupos independientes, con α = 0,05 bilateral y potencia 0,80, hacen falta **26 personas por grupo** si d = 0,8, **64 por grupo** si d = 0,5 y **394 por grupo** si d = 0,2. Con 20 por grupo y d = 0,5, la potencia es solo de 0,34. La baja potencia, junto con la flexibilidad en el análisis (Simmons, Nelson y Simonsohn, 2011), se considera una causa de la baja replicabilidad observada en psicología (Open Science Collaboration, 2015; Klein et al., 2018).

![](potencia-n.png)

Figura 16.4. **Potencia de la prueba t para dos grupos independientes (α = 0,05 bilateral) según el número de participantes por grupo.** Para d = 0,8 la potencia de 0,80 se alcanza con unos 26 por grupo y para d = 0,5 con unos 64; para d = 0,2, incluso con 200 por grupo la potencia solo ronda 0,51. Elaboración propia (SAIMAP).

**Tamaño del efecto.** Indica la **magnitud** de un efecto con independencia de n. Para diferencias de medias, el más usado es la **d de Cohen**, la diferencia en desviaciones típicas:

> d = (x̄ − μ₀) / σ, o / s si σ es desconocida (una muestra frente a un valor de referencia)

> d = (x̄₁ − x̄₂) / s combinada (dos grupos)

Cohen (1988) propuso como orientación d = 0,2 (pequeño), 0,5 (mediano) y 0,8 (grande), advirtiendo que la relevancia depende del contexto. Otros tamaños del efecto ya vistos son r y r² (Unidad 13) y φ y V de Cramer (Unidad 14).

**Cómo informar.** Las normas de la APA (estándares JARS; Appelbaum et al., 2018) piden: el **estadístico** con sus gl, p. ej., t(24) = 2,30; el **valor p exacto** (p < 0,001 si es muy pequeño), no solo «p < 0,05»; el **tamaño del efecto** con su **IC**; los **descriptivos** (medias, desviaciones típicas, n), y si el análisis estaba **planificado** o es exploratorio. En inglés, APA omite el cero inicial en p y r (p = .021); en español con coma decimal la práctica varía (p = 0,021 o p = ,021).

### Ejemplo resuelto · Intervalo de confianza y contraste paso a paso

Un equipo aplica un programa de entrenamiento atencional a 25 estudiantes elegidos al azar y les pasa una escala de atención baremada con μ = 100 y σ = 15. Obtienen x̄ = 106,9 (datos ficticios). ¿Difiere de 100 la media de los estudiantes entrenados?

**1. Hipótesis.** No se puede descartar de antemano un efecto negativo, así que el contraste es bilateral:

> H₀: μ = 100

> H₁: μ ≠ 100

**2. Supuestos y criterio.** Muestra aleatoria, observaciones independientes, puntuaciones aproximadamente normales; σ = 15 se conoce por el baremo, así que se usa z. Con α = 0,05, la región crítica es |z| ≥ 1,96.

**3. Cálculo.**

> ET = 15 / √25 = 3

> z = (106,9 − 100) / 3 = 6,9 / 3 = 2,30

**4. Decisión.** 2,30 > 1,96: el valor cae en la región crítica (Figura 16.2) y se **rechaza H₀**.

**5. Valor p.** P(Z ≤ 2,30) = 0,9893.

> p = 2 · (1 − 0,9893) = 0,0214 ≈ 0,021

Como 0,021 ≤ 0,05, la decisión coincide. Si μ fuera 100, una media a 6,9 puntos o más de 100 (en cualquier dirección) aparecería en torno al 2 % de las muestras de 25 personas.

**6. Intervalo de confianza al 95 %.**

> IC 95 % = 106,9 ± 1,96 · 3 = 106,9 ± 5,88 = [101,02; 112,78]

El 100 queda fuera, lo que confirma el rechazo. El intervalo es ancho: los datos son compatibles con una mejora de 1 punto y con una de casi 13.

**7. Tamaño del efecto.**

> d = (106,9 − 100) / 15 = 0,46

Un efecto entre pequeño y mediano, próximo a mediano.

**8. Si σ no se conociera.** Si 15 fuera la s de la muestra (con n − 1), se usaría la t con 24 gl: t(24) = 2,30, valor crítico 2,064, p bilateral = 0,030 e IC 95 % = 106,9 ± 2,064 · 3 = [100,71; 113,09]. La conclusión no cambia; el intervalo es algo más ancho porque también se estima la variabilidad.

**9. Cómo se informaría (estilo APA, versión con t).** «La media de atención de los estudiantes entrenados (M = 106,9; DT = 15,0; n = 25) fue significativamente superior al valor normativo de 100, t(24) = 2,30, p = 0,030, d = 0,46, IC 95 % de la media [100,71; 113,09].»

**10. Qué no se puede concluir.** Sin grupo de control no se puede atribuir la diferencia al programa (validez interna, Unidad 4). El contraste dice que la media difiere de 100, no por qué.

**En SPSS:** menú **Analizar > Comparar medias** (en versiones recientes, «Comparar medias y proporciones»), opción de prueba t para una muestra. Se indica la variable y el **Valor de prueba** (100). La salida da t, gl, la significación bilateral, la diferencia de medias y su IC; las versiones recientes pueden añadir la p unilateral y la d de Cohen. Ojo: el IC es **de la diferencia** (x̄ − 100); para el de la media hay que sumar 100 a sus límites. **En jamovi:** **T-Tests > One Sample T-Test**, con el valor de prueba en *Test value*.

### Consenso y debate

**Consenso:** la declaración de la American Statistical Association (Wasserstein y Lazar, 2016) fijó seis principios: p indica la incompatibilidad de los datos con un modelo; no mide la probabilidad de que la hipótesis sea cierta; las conclusiones no deben basarse solo en si p cruza un umbral; hace falta transparencia completa; p no mide el tamaño ni la importancia del efecto, y, aislado, no es una buena medida de la evidencia. También hay acuerdo en informar tamaños del efecto e IC (Appelbaum et al., 2018).

**Debate:** lo que se discute es qué hacer con el umbral de significación.

- **Abandonar la etiqueta «estadísticamente significativo».** Un editorial de 2019 (Wasserstein, Schirm y Lazar) y un comentario en *Nature* con más de 800 firmantes (Amrhein, Greenland y McShane, 2019) propusieron dejar de dicotomizar los resultados e informar p como medida continua.
- **Mantener los valores p bien usados.** El editorial de 2019 no era una declaración oficial de la ASA. En 2021, un grupo de trabajo de la propia asociación (Benjamini et al., 2021) defendió que p y los contrastes de significación, bien aplicados, son útiles y no deben abandonarse.
- **Un α más estricto.** Benjamin et al. (2018) propusieron α = 0,005 para afirmar nuevos descubrimientos y llamar «sugerentes» a los resultados entre 0,005 y 0,05. Coste: con d = 0,5 y potencia 0,80, la t de dos grupos pasa de 64 a 109 personas por grupo.
- **Justificar α.** Lakens et al. (2018) respondieron que ningún umbral sirve para todo: α debe justificarse en cada estudio según el coste de los errores tipo I y II.
- **Estimación.** Cumming (2014) propone centrarse en tamaños del efecto, IC y metaanálisis.
- **Enfoque bayesiano.** Combina la información previa con los datos (teorema de Bayes, Unidad 11) para obtener la probabilidad de las hipótesis. El **factor de Bayes** compara cuánto más probables son los datos con una hipótesis que con otra y, a diferencia de p, puede aportar evidencia **a favor** de H₀. JASP lo facilita; la crítica principal es la elección de las distribuciones previas.

Estándar mínimo actual: p exacto, tamaño del efecto con su IC y no leer p > 0,05 como ausencia de efecto.

### Mito frecuente

**Mito:** «Un p = 0,021 significa que hay un 2,1 % de probabilidad de que la hipótesis nula sea cierta» (o, en su variante, «un 97,9 % de probabilidad de que el efecto sea real»).

**Realidad:** p se calcula **suponiendo** que H₀ es verdadera; no puede, por tanto, dar la probabilidad de que lo sea. Es la probabilidad de obtener datos tan extremos o más **si H₀ fuera cierta**: P(datos | H₀), no P(H₀ | datos). Confundirlas es el mismo error que confundir sensibilidad y valor predictivo (Unidad 11): la probabilidad de H₀ depende también de su plausibilidad previa y solo puede estimarse con un enfoque bayesiano.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Estimador insesgado | Estimador cuyo valor esperado coincide con el parámetro |
| Intervalo de confianza | Rango de valores plausibles del parámetro, obtenido con un método que acierta en el (1 − α) · 100 % de las muestras |
| Hipótesis nula (H₀) | Hipótesis de ausencia de efecto que se somete a contraste |
| Nivel de significación (α) | Probabilidad máxima de error tipo I que se acepta |
| Valor p | Probabilidad de un resultado igual o más extremo que el observado si H₀ es verdadera |
| Error tipo II (β) | Mantener H₀ cuando es falsa |
| Potencia (1 − β) | Probabilidad de rechazar H₀ cuando es falsa |
| d de Cohen | Diferencia de medias expresada en desviaciones típicas |

### Clave PIR

**Prioridad alta.** Es la unidad más preguntada del bloque: pocas preguntas de estadística por convocatoria, pero muy frecuentes en temas de metodología. Se pregunta la interpretación correcta del valor p y del IC, la definición de los errores tipo I y II y de la potencia, los factores que afectan a la potencia y la relación entre IC y contraste. Trampas típicas: leer p como la probabilidad de que H₀ sea cierta, «aceptar» H₀ al no rechazarla, confundir significación con importancia y olvidar que α y β varían en sentido contrario.

### Autoevaluación

**1.** Un IC al 95 % para la media es [94,12; 105,88]. ¿Cuál es la interpretación correcta?
a) El 95 % de las personas de la población puntúa entre 94,12 y 105,88
b) Hay un 95 % de probabilidad de que la media muestral esté en ese intervalo
c) El método empleado produce intervalos que contienen μ en el 95 % de las muestras

**2.** Si un contraste bilateral da p = 0,021, ¿qué se puede afirmar?
a) Con α = 0,05 se rechaza H₀, y el IC al 95 % no incluye el valor de H₀
b) La probabilidad de que H₀ sea verdadera es 0,021
c) Con α = 0,01 también se rechazaría H₀

**3.** El error tipo II consiste en…
a) rechazar H₀ cuando es verdadera
b) mantener H₀ cuando es falsa
c) rechazar H₀ cuando es falsa

**4.** Si se mantienen fijos el tamaño del efecto y α, ¿qué ocurre al aumentar n?
a) Aumenta α
b) Disminuye la potencia
c) Aumenta la potencia

**5.** Un estudio con 20 000 participantes obtiene p < 0,001 y d = 0,05. Lo más adecuado es concluir que…
a) el efecto es estadísticamente significativo, pero muy pequeño
b) el efecto es grande, porque p es muy pequeño
c) el resultado es un error tipo I con seguridad

### Soluciones

**1 c.** La confianza se refiere al procedimiento, no a las personas ni a x̄. **2 a.** p ≤ 0,05 y el contraste bilateral equivale a comprobar si μ₀ cae fuera del IC; con α = 0,01 no se rechazaría. **3 b.** Es un falso negativo; su probabilidad es β. **4 c.** Al bajar el error típico, se separan mejor las distribuciones de H₀ y H₁. **5 a.** Con n muy grande, efectos minúsculos son significativos; p no mide la magnitud.
