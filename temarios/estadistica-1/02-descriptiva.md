# Capítulo 2 · Estadística descriptiva

Cómo organizar, resumir y representar los datos de una muestra: tablas de frecuencias, cuantiles, índices de tendencia central, de variabilidad y de forma, puntuaciones típicas y gráficos.

## Unidad 5 · Describir variables categóricas

**Objetivos:** construir e interpretar la distribución de frecuencias de una variable categórica; saber cuándo tiene sentido acumular frecuencias; elegir entre diagrama de barras y de sectores y aplicar buenas prácticas al elaborar gráficos.

### 5.1 La distribución de frecuencias

Tras recoger los datos, cada participante ocupa una fila de la **matriz de datos** y cada variable, una columna (Unidad 3). Si se pregunta a 50 personas que acuden a un servicio de psicología por su motivo principal de consulta, la columna «motivo» contiene 50 etiquetas. Leídas una a una no dicen casi nada. El primer paso de la estadística descriptiva es **contar**: cuántas veces aparece cada categoría.

El resultado es una **distribución de frecuencias**, una tabla que asocia a cada categoría su frecuencia. Para una variable categórica se usan tres columnas:

- **Frecuencia absoluta (nᵢ)**: número de casos de la categoría i.
- **Frecuencia relativa o proporción (pᵢ)**: parte del total que representa esa categoría.
- **Porcentaje (%ᵢ)**: la proporción multiplicada por 100.

> pᵢ = nᵢ / n
> %ᵢ = pᵢ × 100
> Σnᵢ = n    Σpᵢ = 1    Σ%ᵢ = 100

Con los datos ficticios del servicio de psicología:

| Motivo de consulta | nᵢ | pᵢ | %ᵢ |
| --- | --- | --- | --- |
| Ansiedad | 18 | 0,36 | 36 |
| Depresión | 14 | 0,28 | 28 |
| Estrés | 9 | 0,18 | 18 |
| Problemas de sueño | 5 | 0,10 | 10 |
| Otros | 4 | 0,08 | 8 |
| **Total** | **50** | **1,00** | **100** |

Algunas pautas para construir la tabla:

- Las categorías deben ser **exhaustivas** (todo caso cabe en alguna) y **mutuamente excluyentes** (ningún caso cabe en dos).
- En una variable **nominal** el orden de las filas es arbitrario. Suele ordenarse de mayor a menor frecuencia, con «Otros» al final.
- Al redondear, los porcentajes pueden sumar 99,9 o 100,1. No es un error; conviene indicarlo en una nota.
- La proporción y el porcentaje expresan lo mismo en distinta escala. En los textos científicos se suele dar el porcentaje junto con la frecuencia absoluta: «18 personas (36 %)».

### 5.2 Variables ordinales, frecuencias acumuladas y moda

Cuando las categorías tienen un orden (variable **ordinal**), la tabla puede incluir **frecuencias acumuladas**: lo que suman una categoría y todas las anteriores.

- **Frecuencia absoluta acumulada (nₐ)**: número de casos con esa categoría **o una inferior**.
- **Proporción acumulada (pₐ)** y **porcentaje acumulado (%ₐ)**: lo mismo, expresado sobre el total.

Ejemplo ficticio: 40 pacientes valoran su satisfacción con la terapia.

| Satisfacción | nᵢ | pᵢ | nₐ | %ₐ |
| --- | --- | --- | --- | --- |
| Muy insatisfecho | 2 | 0,050 | 2 | 5,0 |
| Insatisfecho | 5 | 0,125 | 7 | 17,5 |
| Neutral | 9 | 0,225 | 16 | 40,0 |
| Satisfecho | 16 | 0,400 | 32 | 80,0 |
| Muy satisfecho | 8 | 0,200 | 40 | 100,0 |
| **Total** | **40** | **1,000** | | |

La fila «Neutral» indica que el 40 % de los pacientes se declara neutral o menos satisfecho. Por diferencia, el 60 % (24 de 40) está satisfecho o muy satisfecho.

En una variable **nominal** acumular no tiene sentido: sumar «Ansiedad» y «Depresión» daría un número que depende del orden arbitrario en que se hayan escrito las filas.

La **moda (Mo)** es la categoría con mayor frecuencia. Es el único índice de tendencia central aplicable a variables nominales. En la tabla de motivos de consulta, Mo = Ansiedad; en la de satisfacción, Mo = Satisfecho. Dos precisiones:

- La moda es la **categoría**, no su frecuencia. Decir «la moda es 18» es un error frecuente.
- Puede haber **dos modas** (distribución bimodal), varias (multimodal) o ninguna, si todas las categorías tienen la misma frecuencia.

En variables ordinales también puede calcularse la **mediana** (Unidad 7): la categoría que ocupa la posición central. Con 40 casos, el centro está entre los casos 20 y 21. La columna nₐ pasa de 16 a 32 en «Satisfecho», así que ambos casos están en esa categoría y Md = Satisfecho.

**Datos perdidos.** Si algunas personas no responden, el porcentaje puede calcularse sobre el total de la muestra o solo sobre las respuestas válidas. SPSS muestra las dos columnas («Porcentaje» y «Porcentaje válido»), y el porcentaje acumulado se calcula sobre los casos válidos. Hay que indicar siempre cuál se está usando.

### 5.3 Diagramas de barras y de sectores

Una tabla da los valores exactos; un gráfico muestra el patrón de un vistazo. Para variables categóricas hay dos gráficos básicos.

- **Diagrama de barras**: una barra por categoría, con una altura proporcional a nᵢ o a %ᵢ. Las barras van **separadas**, porque entre categorías no hay continuidad. En una variable ordinal se respeta el orden natural de las categorías; en una nominal se pueden ordenar por frecuencia.
- **Diagrama de sectores** (circular o «de tarta»): un círculo dividido en porciones cuyo ángulo es proporcional a la frecuencia relativa. Comunica la idea de **parte de un todo**.

> ángulo del sector = pᵢ × 360°

Para «Ansiedad», 0,36 × 360° = 129,6°.

![](barras-sectores.png)

Figura 5.1. **La misma distribución en un diagrama de barras y en uno de sectores.** Motivo de consulta en 50 personas: Ansiedad 18 (36 %), Depresión 14 (28 %), Estrés 9 (18 %), Sueño 5 (10 %) y Otros 4 (8 %). Elaboración propia (SAIMAP), datos ficticios.

Comparar en la Figura 5.1 la diferencia entre Ansiedad (36 %) y Depresión (28 %) es inmediato en las barras y bastante más difícil en los sectores. El motivo es perceptivo: juzgamos con más precisión longitudes alineadas sobre una base común que ángulos o áreas. Por eso el diagrama de barras suele ser la opción por defecto, y el de sectores se reserva para pocas categorías y para mensajes del tipo «qué parte del total».

Para comparar **dos o más grupos** (por ejemplo, el motivo de consulta en hombres y mujeres) se usan barras agrupadas o apiladas con **porcentajes dentro de cada grupo**, no frecuencias absolutas, porque los grupos rara vez tienen el mismo tamaño. Esta idea se desarrolla con las tablas de contingencia (Unidad 14).

### 5.4 Buenas prácticas, un ejemplo histórico y software

Un gráfico mal hecho puede transmitir una conclusión falsa con datos correctos. Pautas básicas:

- En un diagrama de barras, el eje vertical **empieza en cero**. Si se corta, las diferencias pequeñas parecen grandes.
- **Sin efectos tridimensionales** ni perspectiva: deforman las alturas y las áreas.
- Ejes rotulados, con la variable y la unidad (frecuencia o porcentaje), y el tamaño de la muestra (n) a la vista.
- Pocas categorías en los sectores; las minoritarias pueden agruparse en «Otros».
- Colores distinguibles también por personas con daltonismo, y sin depender solo del color para transmitir información.
- Un título que diga qué muestra el gráfico, no solo el nombre de la variable.

Los gráficos estadísticos tienen una larga historia como herramienta de argumentación. **Florence Nightingale**, enfermera en la guerra de Crimea, presentó en 1858 un diagrama de área polar con las causas de muerte del ejército británico. Cada cuña corresponde a un mes y su área es proporcional al número de muertes. El gráfico mostraba que la mayoría de los soldados morían de enfermedades infecciosas prevenibles, no de heridas de combate, y sirvió para impulsar reformas sanitarias.

![](nightingale.jpg)

Figura 5.2. **Diagrama de Nightingale sobre las causas de mortalidad del ejército británico en la guerra de Crimea (abril 1854–marzo 1856).** Cuñas azules: enfermedades infecciosas prevenibles; rojas: heridas; negras: otras causas. A la derecha, el primer año; a la izquierda, el segundo. Florence Nightingale (1858). Dominio público, vía Wikimedia Commons.

**Con software.** En SPSS, las tablas de frecuencias se obtienen en **Analizar > Estadísticos descriptivos > Frecuencias**; el botón «Gráficos» de ese cuadro permite pedir diagramas de barras o de sectores. Para gráficos más elaborados está **Gráficos > Generador de gráficos**. En jamovi, **Exploration > Descriptives** ofrece la opción de tablas de frecuencias y diagrama de barras. Antes de interpretar la salida conviene comprobar que la variable está definida como nominal u ordinal y que los códigos numéricos (1, 2, 3…) tienen sus etiquetas.

### Mito frecuente

**Mito:** «Un porcentaje dice lo mismo sea cual sea el tamaño de la muestra.»

**Realidad:** «El 50 % mejoró» puede significar 2 de 4 personas o 200 de 400. Con muestras pequeñas, un solo caso cambia mucho el porcentaje (en n = 4, cada persona vale 25 puntos). Por eso se informa siempre de la frecuencia absoluta o del tamaño de la muestra junto al porcentaje.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Frecuencia absoluta (nᵢ) | Número de casos que pertenecen a una categoría |
| Frecuencia relativa (pᵢ) | Proporción de casos de una categoría: nᵢ / n |
| Porcentaje (%ᵢ) | Frecuencia relativa multiplicada por 100 |
| Frecuencia acumulada (nₐ) | Casos de una categoría y de todas las inferiores; solo tiene sentido con orden |
| Moda | Categoría o valor con mayor frecuencia |
| Porcentaje válido | Porcentaje calculado excluyendo los datos perdidos |
| Diagrama de barras | Gráfico con barras separadas de altura proporcional a la frecuencia |
| Diagrama de sectores | Círculo dividido en porciones de ángulo proporcional a la frecuencia relativa |

### Clave PIR

**Prioridad baja.** Rara vez se pregunta directamente, pero es la base de todo lo demás. Trampas típicas: confundir la moda con su frecuencia, acumular frecuencias en una variable nominal o elegir un gráfico propio de variables cuantitativas (histograma) para una categórica.

### Autoevaluación

**1.** En una muestra de 80 personas, 20 tienen un diagnóstico de fobia social. La frecuencia relativa de esa categoría es…
a) 20
b) 0,25
c) 0,20

**2.** ¿En qué tipo de variable carece de sentido calcular frecuencias acumuladas?
a) Nominal
b) Ordinal
c) Cuantitativa discreta

**3.** Si en una tabla la categoría «Depresión» tiene la frecuencia más alta, 14, la moda es…
a) 14
b) la frecuencia relativa de Depresión
c) Depresión

**4.** Para comparar con precisión la frecuencia de seis categorías, el gráfico más recomendable es…
a) el diagrama de sectores
b) el diagrama de barras
c) el histograma

**5.** En SPSS, el «porcentaje válido» se calcula…
a) excluyendo los casos con datos perdidos
b) incluyendo los casos con datos perdidos
c) solo con la categoría más frecuente

### Soluciones

**1 b.** pᵢ = 20 / 80 = 0,25. **2 a.** En una variable nominal el orden de las categorías es arbitrario. **3 c.** La moda es la categoría, no su frecuencia. **4 b.** Las longitudes sobre una base común se comparan mejor que los ángulos; el histograma es para variables cuantitativas. **5 a.** El porcentaje simple usa como denominador el total, incluidos los perdidos.

## Unidad 6 · Tablas de frecuencias con intervalos y cuantiles

**Objetivos:** agrupar una variable cuantitativa en intervalos y representarla con histograma, polígono de frecuencias y ojiva; calcular e interpretar percentiles, cuartiles, deciles y rangos percentiles; construir un diagrama de tallo y hojas.

### 6.1 Agrupar en intervalos

Si una variable cuantitativa toma pocos valores distintos (número de hijos, número de sesiones a las que se falta), la tabla de frecuencias se construye igual que en una variable ordinal: una fila por valor. Pero si la variable toma muchos valores (una puntuación de 0 a 60, un tiempo de reacción en milisegundos), una fila por valor da una tabla enorme con frecuencias de 0, 1 o 2. La solución es **agrupar los valores en intervalos**.

Elementos de un intervalo:

- **Límites aparentes**: los que se escriben en la tabla. Si los datos son enteros, el intervalo 10–14 incluye 10, 11, 12, 13 y 14.
- **Límites exactos (o reales)**: los que cierran el hueco entre intervalos consecutivos, medio punto por debajo y por encima. El intervalo 10–14 va de 9,5 a 14,5.
- **Amplitud (a)**: diferencia entre los límites exactos superior e inferior. Aquí, 14,5 − 9,5 = 5.
- **Punto medio o marca de clase (xᵢ)**: el centro del intervalo. Aquí, (9,5 + 14,5) / 2 = 12. Representa a todos los casos del intervalo en los cálculos.

> a = Lₛ − Lᵢ
> xᵢ = (Lᵢ + Lₛ) / 2

Otra forma de escribir los intervalos, habitual con variables continuas, es la notación **[10, 15)**: incluye el 10 y excluye el 15. Así no hay hueco entre intervalos y los límites escritos son ya los exactos.

Pautas para agrupar: intervalos **de la misma amplitud** siempre que sea posible, exhaustivos y mutuamente excluyentes, y un número razonable de ellos; suele recomendarse entre 5 y 15, según el tamaño de la muestra. Pocos intervalos ocultan la forma de la distribución; demasiados la vuelven irregular.

Agrupar tiene un coste: **se pierde información**. Dentro de un intervalo ya no se sabe el valor exacto de cada caso. Los cálculos con datos agrupados suponen que los casos se reparten de forma uniforme dentro del intervalo, de modo que dan **aproximaciones**.

Ejemplo con datos simulados: puntuaciones en un cuestionario de ansiedad de 120 personas, agrupadas en intervalos [Lᵢ, Lₛ) de amplitud 5.

| Intervalo | xᵢ | nᵢ | pᵢ | nₐ | %ₐ |
| --- | --- | --- | --- | --- | --- |
| [10, 15) | 12,5 | 6 | 0,050 | 6 | 5,0 |
| [15, 20) | 17,5 | 19 | 0,158 | 25 | 20,8 |
| [20, 25) | 22,5 | 35 | 0,292 | 60 | 50,0 |
| [25, 30) | 27,5 | 39 | 0,325 | 99 | 82,5 |
| [30, 35) | 32,5 | 16 | 0,133 | 115 | 95,8 |
| [35, 40) | 37,5 | 4 | 0,033 | 119 | 99,2 |
| [40, 45) | 42,5 | 1 | 0,008 | 120 | 100,0 |
| **Total** | | **120** | **1,000** | | |

### 6.2 Histograma, polígono de frecuencias y ojiva

El **histograma** es el gráfico propio de una variable cuantitativa agrupada. Se parece a un diagrama de barras, con dos diferencias:

- Las barras van **juntas**, porque los intervalos son contiguos y la variable es continua.
- El eje horizontal es una **escala numérica**: cada barra ocupa exactamente su intervalo. Lo que representa la frecuencia es el **área** de la barra. Si todos los intervalos tienen la misma amplitud, basta con la altura; si no, la altura debe ser la densidad (frecuencia dividida por la amplitud).

El **polígono de frecuencias** une con segmentos los puntos situados sobre el punto medio de cada intervalo, a la altura de su frecuencia. Se cierra sobre el eje añadiendo un intervalo vacío a cada lado. Es útil para superponer las distribuciones de varios grupos en un mismo gráfico.

La **ojiva** representa las frecuencias acumuladas (en %). Cada punto se sitúa sobre el **límite superior exacto** del intervalo, porque hasta ese límite se han acumulado todos sus casos. Siempre es creciente, empieza en 0 % y termina en 100 %. Permite leer percentiles de forma aproximada: basta con trazar una horizontal desde el porcentaje deseado hasta la curva y bajar al eje.

![](histograma-ojiva.png)

Figura 6.1. **Histograma con polígono de frecuencias (izquierda) y ojiva (derecha).** Puntuaciones de ansiedad de 120 personas en intervalos de amplitud 5. En la ojiva, la línea del 50 % corta la curva en 25, que es la mediana. Elaboración propia (SAIMAP), datos simulados.

En la Figura 6.1 se ve que la mayor parte de los casos está entre 20 y 30 puntos (74 de 120, el 61,7 %), y que la cola derecha es algo más larga que la izquierda. La ojiva alcanza exactamente el 50 % en el límite 25, de modo que la mitad de la muestra puntúa por debajo de 25.

### 6.3 Percentiles, cuartiles y deciles

Los **cuantiles** son valores de la variable que dividen la distribución ordenada en partes con el mismo número de casos.

- **Percentil k (Pₖ)**: valor que deja por debajo el k % de los casos. Hay 99 percentiles.
- **Cuartiles**: Q₁ = P₂₅, Q₂ = P₅₀ y Q₃ = P₇₅. Dividen la distribución en cuatro partes.
- **Deciles**: D₁ = P₁₀, D₂ = P₂₀ … D₉ = P₉₀.
- **Mediana**: Md = Q₂ = D₅ = P₅₀.

Un percentil es una **puntuación**, no un porcentaje. Si P₉₀ = 32,8, el 90 % de las personas tiene 32,8 puntos o menos.

**Cálculo con datos sin agrupar.** Existen varios métodos, y programas y manuales no siempre usan el mismo. El más extendido en los manuales de psicología, y el que SPSS aplica por defecto (promedio ponderado), es:

1. Ordenar los datos de menor a mayor.
2. Calcular la **posición** del percentil: k · (n + 1) / 100.
3. Si la posición es entera, Pₖ es el dato que la ocupa. Si tiene decimales, se interpola entre los dos datos vecinos, con d = parte decimal de la posición.

> posición = k · (n + 1) / 100
> Pₖ = Yᵢ + d · (Yᵢ₊₁ − Yᵢ)

Ejemplo con 15 puntuaciones ficticias de estrés, ya ordenadas: 12, 15, 18, 21, 23, 23, 25, 27, 28, 30, 31, 34, 36, 41, 47.

- P₃₀: posición 30 · 16 / 100 = 4,8. Entre el 4.º dato (21) y el 5.º (23): P₃₀ = 21 + 0,8 · (23 − 21) = 22,6.
- P₂₅: posición 4, exacta: Q₁ = 21.
- P₅₀: posición 8: Md = 27.
- P₇₅: posición 12: Q₃ = 34.

Con otro método (el que usan por defecto R o Excel) se obtendría P₃₀ = 23 y Q₃ = 32,5. Las diferencias son pequeñas y se reducen al aumentar n, pero en un examen hay que usar el método que indique el manual de la asignatura.

**Cálculo con datos agrupados.** Se localiza el **intervalo crítico**, el primero cuya frecuencia acumulada nₐ alcanza k · n / 100, y se interpola dentro de él:

> Pₖ = Lᵢ + ((k · n / 100 − nₐ₍ᵢ₋₁₎) / nᵢ) · a

donde Lᵢ es el límite inferior exacto del intervalo crítico, nₐ₍ᵢ₋₁₎ la frecuencia acumulada hasta el intervalo anterior, nᵢ la frecuencia del intervalo crítico y a su amplitud. El ejemplo resuelto aplica esta fórmula a la tabla de ansiedad.

### 6.4 Rango percentil y diagrama de tallo y hojas

El **rango percentil (RP)** es la operación inversa: dada una puntuación, indica qué porcentaje de casos queda por debajo de ella. Si una persona obtiene 27 puntos en el cuestionario de ansiedad y su rango percentil es 63, supera al 63 % de la muestra. Con datos agrupados:

> RP(x) = ((nₐ₍ᵢ₋₁₎ + ((x − Lᵢ) / a) · nᵢ) / n) · 100

Los percentiles y rangos percentiles son la base de los **baremos** de los tests psicológicos: la puntuación de una persona se interpreta comparándola con un grupo normativo.

Una propiedad importante: los percentiles son una escala **ordinal**. Distancias iguales en percentiles no equivalen a distancias iguales en puntuaciones. En la tabla de ansiedad, cerca del centro de la distribución hay muchos casos y pocos puntos separan percentiles alejados; en las colas ocurre lo contrario. Pasar del percentil 50 al 60 exige menos puntos que pasar del 90 al 99, por lo que no tiene sentido promediar percentiles ni restarlos como si fueran puntuaciones.

El **diagrama de tallo y hojas** organiza los datos como un histograma pero **conserva los valores originales**. Cada dato se divide en un **tallo** (los dígitos iniciales, aquí las decenas) y una **hoja** (el último dígito, aquí las unidades). Con las 15 puntuaciones de estrés:

```
Tallo | Hojas
  1   | 2 5 8
  2   | 1 3 3 5 7 8
  3   | 0 1 4 6
  4   | 1 7

Unidad de la hoja: 1   (2 | 1 = 21)
```

Girado 90°, el diagrama muestra la forma de la distribución: la mayoría de los datos está en la veintena y hay una cola hacia los valores altos. Además, permite ordenar los datos y localizar la mediana sin perder información. Es muy útil con muestras pequeñas o medianas; con cientos de datos resulta poco manejable. SPSS lo genera en **Analizar > Estadísticos descriptivos > Explorar**, botón «Gráficos».

### Ejemplo resuelto · Cuartiles, percentil 90 y rango percentil con datos agrupados

Con la tabla de ansiedad (n = 120, amplitud a = 5):

**Q₁ = P₂₅.** k · n / 100 = 25 · 120 / 100 = 30. La primera nₐ que alcanza 30 es la de [20, 25) (nₐ = 60). Entonces Lᵢ = 20, nₐ₍ᵢ₋₁₎ = 25, nᵢ = 35.

> P₂₅ = 20 + ((30 − 25) / 35) · 5 = 20 + 0,714 = 20,71

**Md = P₅₀.** 50 · 120 / 100 = 60. El intervalo crítico vuelve a ser [20, 25).

> P₅₀ = 20 + ((60 − 25) / 35) · 5 = 20 + 5 = 25

**Q₃ = P₇₅.** 75 · 120 / 100 = 90. El intervalo crítico es [25, 30): Lᵢ = 25, nₐ₍ᵢ₋₁₎ = 60, nᵢ = 39.

> P₇₅ = 25 + ((90 − 60) / 39) · 5 = 25 + 3,846 = 28,85

**P₉₀.** 90 · 120 / 100 = 108. El intervalo crítico es [30, 35): Lᵢ = 30, nₐ₍ᵢ₋₁₎ = 99, nᵢ = 16.

> P₉₀ = 30 + ((108 − 99) / 16) · 5 = 30 + 2,8125 = 32,81

**Rango percentil de x = 27.** Está en [25, 30).

> RP(27) = ((60 + ((27 − 25) / 5) · 39) / 120) · 100 = ((60 + 15,6) / 120) · 100 = 63

**Interpretación.** El 25 % de la muestra puntúa por debajo de 20,71; la mitad, por debajo de 25; el 10 % más ansioso, por encima de 32,81. Quien obtiene 27 puntos supera aproximadamente al 63 % del grupo.

**Comprobación.** Con los 120 datos originales sin agrupar, SPSS (promedio ponderado) da Q₁ = 20,25, Md = 24,5 y Q₃ = 28. Los valores agrupados son aproximaciones cercanas, como cabe esperar al perder la información interna de cada intervalo.

### Mito frecuente

**Mito:** «Estar en el percentil 80 de un test significa haber acertado el 80 % de las preguntas.»

**Realidad:** el percentil indica la **posición relativa** respecto a un grupo de referencia, no la proporción de aciertos. Una persona puede acertar el 50 % de los ítems y estar en el percentil 80 si el test es difícil y la mayoría acierta menos.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Límites exactos | Límites de un intervalo que no dejan huecos con los intervalos contiguos |
| Amplitud del intervalo | Diferencia entre sus límites exactos superior e inferior |
| Punto medio (marca de clase) | Centro del intervalo; representa a todos sus casos en los cálculos |
| Histograma | Gráfico de barras contiguas cuya área es proporcional a la frecuencia de cada intervalo |
| Ojiva | Gráfico de las frecuencias acumuladas sobre los límites superiores exactos |
| Percentil (Pₖ) | Puntuación que deja por debajo el k % de los casos |
| Rango percentil | Porcentaje de casos que queda por debajo de una puntuación dada |
| Diagrama de tallo y hojas | Representación que agrupa los datos conservando sus valores originales |

### Clave PIR

**Prioridad media.** Los percentiles aparecen sobre todo en preguntas de psicometría y baremos. Trampas típicas: confundir el percentil (una puntuación) con el rango percentil (un porcentaje), creer que el percentil indica el porcentaje de aciertos y tratar los percentiles como una escala de intervalo.

### Autoevaluación

**1.** Si los datos son enteros, ¿cuáles son los límites exactos del intervalo 20–24?
a) 19,5 y 24,5
b) 20 y 24
c) 20 y 25

**2.** Si P₄₀ = 18 en un test, significa que…
a) el 40 % de las personas acierta 18 preguntas
b) 18 personas superan al 40 % del grupo
c) el 40 % de las personas puntúa 18 o menos

**3.** La ojiva representa…
a) las frecuencias absolutas sobre los puntos medios
b) las frecuencias acumuladas sobre los límites superiores
c) las frecuencias relativas sobre los límites inferiores

**4.** Pasar del percentil 50 al 60 y pasar del percentil 90 al 99 de una distribución normal…
a) exige recorrer la misma distancia en puntuaciones
b) exige más puntos en el primer caso que en el segundo
c) exige menos puntos en el primer caso que en el segundo

**5.** Una ventaja del diagrama de tallo y hojas frente al histograma es que…
a) conserva los valores originales de los datos
b) es más adecuado para muestras muy grandes
c) sirve para variables nominales

### Soluciones

**1 a.** Se amplía medio punto por cada lado. **2 c.** El percentil es la puntuación que deja por debajo ese porcentaje de casos. **3 b.** Cada punto se sitúa donde terminan los casos acumulados. **4 c.** En el centro hay más casos por punto, así que los percentiles están más juntos. **5 a.** Con muchos datos resulta poco manejable, y solo sirve para variables cuantitativas.

## Unidad 7 · Tendencia central

**Objetivos:** calcular e interpretar la media, la mediana y la moda; conocer las propiedades de la media y su sensibilidad a los valores atípicos; elegir el índice adecuado según la escala de medida y la forma de la distribución.

### 7.1 La media aritmética

Un **índice de tendencia central** resume en un solo valor dónde se sitúa el «centro» de una distribución. El más usado es la **media aritmética**: la suma de todos los valores dividida entre el número de casos.

> x̄ = Σxᵢ / n

En la población, la media se representa con μ (Unidad 4). Para calcular una media, la variable debe ser cuantitativa (escala de intervalo o de razón).

Ejemplo ficticio: número de despertares nocturnos de 8 personas durante una semana: 2, 4, 4, 4, 5, 5, 7, 9.

> x̄ = (2 + 4 + 4 + 4 + 5 + 5 + 7 + 9) / 8 = 40 / 8 = 5

**Media con datos agrupados.** Si solo se dispone de una tabla con intervalos, cada caso se representa por el punto medio de su intervalo:

> x̄ ≈ Σ(nᵢ · xᵢ) / n

Con la tabla de ansiedad de la Unidad 6: Σ(nᵢ · xᵢ) = 2 980, y 2 980 / 120 = 24,83. La media exacta de los 120 datos originales es 24,28. La diferencia es el precio de agrupar.

**Media ponderada.** Cuando se combinan grupos de distinto tamaño, la media global no es el promedio simple de las medias, sino que cada media pesa según su número de casos:

> x̄ₚ = Σ(nⱼ · x̄ⱼ) / Σnⱼ

Ejemplo ficticio: tres grupos de terapia con 10, 30 y 20 pacientes y medias de 20, 26 y 23 puntos en una escala de bienestar.

> x̄ₚ = (10 · 20 + 30 · 26 + 20 · 23) / 60 = 1 440 / 60 = 24

El promedio simple de las tres medias sería (20 + 26 + 23) / 3 = 23, que da al grupo pequeño el mismo peso que al grande. Solo coinciden si todos los grupos tienen el mismo tamaño.

### 7.2 Propiedades de la media

La media tiene varias propiedades que explican su papel central en la estadística:

1. **La suma de las desviaciones respecto a la media es cero.** Con los despertares: las desviaciones (xᵢ − x̄) son −3, −1, −1, −1, 0, 0, 2 y 4, que suman 0. La media es el punto de equilibrio de los datos.

> Σ(xᵢ − x̄) = 0

2. **La suma de las desviaciones al cuadrado respecto a la media es mínima.** Respecto a 5 (la media), Σ(xᵢ − 5)² = 32; respecto a 4,5 (la mediana), 34; respecto a 4 (la moda), 40. Ningún otro valor da una suma menor. Esta propiedad es la base de la varianza (Unidad 8) y del método de mínimos cuadrados.

3. **Se ve afectada por las transformaciones lineales de forma predecible.** Si a cada dato se le suma una constante, la media aumenta en esa constante; si se multiplica, la media queda multiplicada:

> Si Y = a + b · X, entonces ȳ = a + b · x̄

Sumar 10 a los despertares da una media de 15; multiplicarlos por 3 da también 15 (3 · 5).

4. **Usa todos los datos**, lo que la hace eficiente, pero también **sensible a los valores atípicos**. Si la persona con 9 despertares tuviera en realidad 41, la suma pasaría a 72 y la media a 9. La mediana seguiría siendo 4,5. Un solo dato extremo ha desplazado la media por encima de siete de los ocho valores.

Para reducir esta sensibilidad existe la **media recortada**: se elimina un porcentaje de casos en cada extremo y se promedia el resto. Con los 8 datos que incluyen el 41, recortar un 12,5 % por cada lado elimina el 2 y el 41, y la media de los 6 restantes es 4,83, muy cerca de la mediana. SPSS ofrece la media recortada al 5 % en **Analizar > Estadísticos descriptivos > Explorar**.

### 7.3 Mediana y moda

La **mediana (Md)** es el valor que ocupa la posición central de los datos ordenados: deja la mitad de los casos por debajo y la mitad por encima. Es el percentil 50.

- Con n impar, es el dato que ocupa la posición (n + 1) / 2.
- Con n par, es la media de los dos datos centrales.

Con los despertares (n = 8), los datos centrales son el 4.º y el 5.º (4 y 5), así que Md = 4,5.

La mediana solo exige que los datos se puedan **ordenar**: sirve para variables ordinales y cuantitativas. Es **resistente**: no depende de lo extremos que sean los valores de las colas, solo de su posición. Por eso, en el ejemplo anterior, cambiar el 9 por un 41 no la altera. Con datos agrupados se calcula con la fórmula de los percentiles (Unidad 6); en la tabla de ansiedad, Md = 25.

La **moda (Mo)** es el valor más frecuente. En los despertares, Mo = 4, que aparece tres veces. Propiedades:

- Es el único índice válido para variables **nominales**, aunque puede usarse con cualquier escala.
- Puede no ser única (bimodal, multimodal) o no existir (si ningún valor se repite).
- Con datos agrupados se habla de **intervalo modal**, el de mayor frecuencia: [25, 30) en la tabla de ansiedad.
- Es poco estable: en muestras pequeñas, cambiar un solo dato puede cambiar la moda.

Una distribución **bimodal** suele indicar que se han mezclado dos grupos distintos (por ejemplo, tiempos de reacción de personas que respondieron al azar y de personas que leyeron la instrucción). En ese caso, ningún índice de tendencia central resume bien los datos y conviene analizar los grupos por separado.

### 7.4 Elegir el índice: escala de medida y forma de la distribución

El primer criterio es la **escala de medida** (Unidad 3):

| Escala | Índices aplicables | Índice habitual |
| --- | --- | --- |
| Nominal | Moda | Moda |
| Ordinal | Moda, mediana | Mediana |
| Intervalo o razón | Moda, mediana, media | Media si la distribución es simétrica; mediana si es asimétrica o hay atípicos |

El segundo criterio es la **forma de la distribución**. En una distribución unimodal y simétrica, media, mediana y moda coinciden. Cuando hay **asimetría**, la media se desplaza hacia la cola larga, porque recoge el peso de los valores extremos, mientras que la mediana se mantiene más cerca del grueso de los datos:

- **Asimetría positiva** (cola larga a la derecha): Mo < Md < x̄. Es típica de tiempos de reacción, ingresos o número de síntomas.
- **Asimetría negativa** (cola larga a la izquierda): x̄ < Md < Mo. Es típica de exámenes muy fáciles, donde muchas personas se acercan a la nota máxima.

![](asimetria.png)

Figura 7.1. **Posición de la media, la mediana y la moda según la forma de la distribución.** En la asimetría negativa, x̄ < Md < Mo; en la simétrica, x̄ = Md = Mo; en la positiva, Mo < Md < x̄. Elaboración propia (SAIMAP).

Este orden es una regla orientativa para distribuciones unimodales y continuas; en distribuciones discretas o multimodales puede no cumplirse. Aun así, comparar la media y la mediana es una primera pista rápida sobre la asimetría.

Recomendación práctica: informar de un índice de tendencia central **junto con uno de variabilidad** coherente con él: la media con la desviación típica, la mediana con la amplitud intercuartil (Unidad 8).

### Ejemplo resuelto · Tiempos de reacción con un valor extremo

Diez participantes responden a un estímulo visual. Sus tiempos de reacción, en milisegundos y ya ordenados, son (datos ficticios): 310, 325, 330, 340, 345, 350, 360, 375, 410, 655.

**Media.**

> x̄ = 3 800 / 10 = 380 ms

**Mediana.** n = 10 es par; los datos centrales son el 5.º (345) y el 6.º (350).

> Md = (345 + 350) / 2 = 347,5 ms

**Moda.** Ningún valor se repite: la distribución es **amodal**.

**Media recortada al 10 %.** Se elimina un caso por cada extremo (310 y 655) y se promedian los 8 restantes.

> x̄ recortada = 2 835 / 8 = 354,4 ms

**Interpretación.** La media (380 ms) es mayor que la mediana (347,5 ms): señal de asimetría positiva, provocada por el 655, quizá un despiste del participante. Ocho de los diez tiempos están por debajo de la media, así que 380 ms no describe bien al participante «típico». La mediana o la media recortada son mejores resúmenes. Antes de decidir nada sobre el 655 conviene revisar si es un error de registro (Unidad 9).

### Consenso y debate

**Consenso:** las puntuaciones totales de escalas formadas por muchos ítems (por ejemplo, un cuestionario de ansiedad de 20 ítems) se tratan habitualmente como cuantitativas, y se describen con la media y la desviación típica.

**Debate:** si es legítimo calcular la media de un **único ítem tipo Likert** (de 1 = «nada» a 5 = «mucho»). Desde la teoría de la medida de Stevens, esa escala es ordinal y la media no estaría justificada; en la práctica se hace con frecuencia y a menudo da conclusiones similares. Una opción prudente es informar también de la mediana y de la distribución de frecuencias.

### Mito frecuente

**Mito:** «La media es siempre el valor más representativo de un grupo.»

**Realidad:** la media representa bien al grupo cuando la distribución es aproximadamente simétrica y sin valores extremos. En distribuciones asimétricas, como los ingresos o los tiempos de reacción, la mayoría de los casos puede quedar por debajo de la media, y la mediana describe mejor el caso típico.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Media aritmética | Suma de los valores dividida entre el número de casos |
| Media ponderada | Media en la que cada valor o grupo pesa según su tamaño o importancia |
| Media recortada | Media calculada tras eliminar un porcentaje de casos en cada extremo |
| Mediana | Valor que deja por debajo y por encima la mitad de los casos ordenados |
| Moda | Valor o categoría más frecuente |
| Intervalo modal | Intervalo con mayor frecuencia en una tabla agrupada |
| Resistencia | Propiedad de un índice poco afectado por los valores extremos |
| Distribución bimodal | Distribución con dos valores o zonas de máxima frecuencia |

### Clave PIR

**Prioridad media.** Se pregunta qué índice corresponde a cada escala, el orden de media, mediana y moda en distribuciones asimétricas y las propiedades de la media (suma de desviaciones igual a cero, efecto de sumar o multiplicar una constante). Trampa típica: creer que la mediana es la media de los dos valores extremos o que la moda es su frecuencia.

### Autoevaluación

**1.** En una distribución con asimetría positiva, lo habitual es que…
a) Mo < Md < x̄
b) x̄ < Md < Mo
c) x̄ = Md = Mo

**2.** Si a todas las puntuaciones de un grupo se les suman 5 puntos, la media…
a) no cambia
b) se multiplica por 5
c) aumenta en 5 puntos

**3.** ¿Qué índice de tendencia central es el más adecuado para la variable «estado civil»?
a) La moda
b) La mediana
c) La media

**4.** Dos grupos de 10 y 40 personas tienen medias de 12 y 22. La media del conjunto es…
a) 17
b) 20
c) 22

**5.** ¿Cuál de estos índices es más resistente a los valores atípicos?
a) La media aritmética
b) La mediana
c) La media ponderada

### Soluciones

**1 a.** La cola derecha arrastra la media hacia valores altos. **2 c.** ȳ = a + x̄ con a = 5. **3 a.** Es una variable nominal. **4 b.** (10 · 12 + 40 · 22) / 50 = 1 000 / 50 = 20. **5 b.** Depende de la posición de los datos, no de su magnitud.

## Unidad 8 · Variabilidad

**Objetivos:** calcular e interpretar la amplitud total, la amplitud intercuartil, la varianza, la desviación típica y el coeficiente de variación; distinguir la varianza calculada con n de la cuasivarianza calculada con n − 1; predecir el efecto de las transformaciones lineales sobre los índices de variabilidad.

### 8.1 Por qué medir la variabilidad. La amplitud total

Dos grupos pueden tener la misma media y ser muy distintos. Si dos clases tienen una media de 100 en un test de inteligencia, en una todos pueden estar entre 95 y 105 y en la otra puede haber desde 70 hasta 130. La **variabilidad** (o dispersión) indica cuánto se diferencian los datos entre sí o respecto a su centro. Sin ella, un índice de tendencia central está incompleto: cuanto menor es la variabilidad, mejor representa la media a cada caso.

![m](dispersion.png)

Figura 8.1. **Misma media, distinta variabilidad.** El grupo A (x̄ = 100, s = 5) está concentrado alrededor de la media; el grupo B (x̄ = 100, s = 15) está mucho más disperso. Elaboración propia (SAIMAP).

El índice más sencillo es la **amplitud total** (o rango): la distancia entre el valor máximo y el mínimo.

> AT = xₘₐₓ − xₘᵢₙ

Con los despertares de la Unidad 7 (2, 4, 4, 4, 5, 5, 7, 9): AT = 9 − 2 = 7.

Es fácil de calcular y de entender, pero tiene dos limitaciones: solo usa dos datos y depende por completo de los extremos. Si el 9 fuera un 41, la amplitud pasaría de 7 a 39 aunque los otros siete datos no hubieran cambiado. Además, tiende a crecer con el tamaño de la muestra, porque con más casos es más probable encontrar valores extremos.

### 8.2 La amplitud intercuartil

La **amplitud intercuartil** (AIQ, también llamada rango intercuartil o RIC) es la distancia entre el tercer y el primer cuartil. Abarca el **50 % central** de los datos.

> RIC = Q₃ − Q₁

Con los despertares, mediante el método de SPSS (Unidad 6):

- Q₁: posición 25 · 9 / 100 = 2,25. Los datos 2.º y 3.º son 4 y 4, así que Q₁ = 4.
- Q₃: posición 75 · 9 / 100 = 6,75. Los datos 6.º y 7.º son 5 y 7: Q₃ = 5 + 0,75 · (7 − 5) = 6,5.
- RIC = 6,5 − 4 = 2,5.

Como con cualquier cuantil, el resultado depende del método de cálculo: con el método por defecto de R o Excel, Q₃ = 5,5 y RIC = 1,5. En muestras tan pequeñas la diferencia es apreciable; con muestras grandes se vuelve irrelevante.

El RIC ignora el 25 % de casos de cada extremo, así que es **resistente** a los valores atípicos: sustituir el 9 por un 41 no lo cambia. Es el índice de variabilidad que acompaña a la mediana y es la base del diagrama de caja (Unidad 9).

### 8.3 Varianza y desviación típica

Para medir la variabilidad usando todos los datos, parece natural promediar las **desviaciones** de cada dato respecto a la media, (xᵢ − x̄). El problema es que siempre suman cero (Unidad 7). La solución es elevarlas al cuadrado antes de promediarlas. Así se obtiene la **varianza**:

> S² = Σ(xᵢ − x̄)² / n

La **desviación típica** (o desviación estándar) es su raíz cuadrada, y devuelve el índice a las unidades originales de la variable:

> S = √S²

Con los despertares (x̄ = 5):

| xᵢ | 2 | 4 | 4 | 4 | 5 | 5 | 7 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| xᵢ − x̄ | −3 | −1 | −1 | −1 | 0 | 0 | 2 | 4 |
| (xᵢ − x̄)² | 9 | 1 | 1 | 1 | 0 | 0 | 4 | 16 |

> Σ(xᵢ − x̄)² = 32
> S² = 32 / 8 = 4
> S = √4 = 2 despertares

Una fórmula equivalente, cómoda para calcular a mano, es la media de los cuadrados menos el cuadrado de la media:

> S² = (Σxᵢ² / n) − x̄² = (232 / 8) − 5² = 29 − 25 = 4

**Interpretación.** La varianza está en unidades al cuadrado («despertares al cuadrado»), lo que dificulta interpretarla. La desviación típica, en cambio, está en las unidades de la variable y se interpreta como la **distancia típica de los datos a su media**: aquí, los despertares se alejan de 5 unas 2 unidades por término medio (en sentido cuadrático). Ambos índices son siempre ≥ 0 y valen 0 solo si todos los datos son iguales. Como la media, son sensibles a los valores atípicos.

**Varianza con n y cuasivarianza con n − 1.** Existe una segunda versión que divide entre n − 1 en lugar de n. Se llama **cuasivarianza** (o varianza insesgada):

> s²ₙ₋₁ = Σ(xᵢ − x̄)² / (n − 1)
> sₙ₋₁ = √s²ₙ₋₁

Con los despertares: s²ₙ₋₁ = 32 / 7 = 4,571 y sₙ₋₁ = 2,138. Las dos versiones se relacionan así:

> s²ₙ₋₁ = S² · n / (n − 1)

La diferencia no es de corrección, sino de objetivo:

- **S² (con n)** describe la variabilidad de la propia muestra.
- **s²ₙ₋₁ (con n − 1)** se usa cuando la muestra sirve para **estimar** la varianza de la población, σ². Dividir entre n tiende a quedarse corto, porque las desviaciones se miden respecto a x̄, que está siempre en el centro de la muestra, y no respecto a la media poblacional μ. Dividir entre n − 1 corrige ese sesgo (Unidad 16).

**SPSS, jamovi, JASP y R** dan por defecto la versión con n − 1. Con muestras grandes la diferencia es mínima: con n = 100, la cuasivarianza solo es un 1 % mayor. Atención a la notación: los manuales españoles no coinciden, y algunos usan S² precisamente para la versión con n − 1. Antes de aplicar una fórmula conviene comprobar su denominador.

### 8.4 Coeficiente de variación y transformaciones lineales

La desviación típica depende de las unidades de la variable, así que no sirve para comparar la variabilidad de variables medidas en escalas distintas, ni la de variables con medias muy diferentes. Para eso se usa el **coeficiente de variación**, que expresa la desviación típica como porcentaje de la media:

> CV = (S / x̄) × 100

Con los despertares: CV = (2 / 5) × 100 = 40 %.

Ejemplo ficticio: en una tarea de atención, el tiempo de reacción tiene x̄ = 400 ms y S = 60 ms (CV = 15 %), y el número de errores tiene x̄ = 5 y S = 2 (CV = 40 %). Aunque 60 es mucho mayor que 2, los errores son relativamente más variables.

El CV solo tiene sentido en variables de **razón** con media positiva. En una escala de intervalo, el cero es arbitrario y el CV cambiaría simplemente al cambiar el origen de la escala.

**Transformaciones lineales.** Si cada dato se transforma según Y = a + b · X:

- **Sumar una constante (a)** desplaza toda la distribución, pero no cambia las distancias entre los datos: la amplitud, el RIC, la varianza y la desviación típica **no cambian**.
- **Multiplicar por una constante (b)** multiplica las distancias: la desviación típica, la amplitud y el RIC quedan multiplicados por el valor absoluto de b, y la varianza por b².

> S(Y) = |b| · S(X)
> S²(Y) = b² · S²(X)

Si a los despertares se les aplica Y = 50 + 10 · X, la nueva media es 50 + 10 · 5 = 100, la desviación típica 10 · 2 = 20 y la varianza 10² · 4 = 400. Si solo se suman 10 puntos, S sigue siendo 2, pero la media pasa a 15 y el CV baja de 40 % a 13,3 %: otra muestra de que el CV no tiene sentido cuando el cero de la escala es arbitrario.

Estas reglas permiten cambiar de unidades sin recalcular nada: pasar de horas a minutos multiplica la media y la desviación típica por 60, y la varianza por 3 600.

### Ejemplo resuelto · Variabilidad de las horas de sueño

Seis estudiantes informan de cuántas horas durmieron la noche anterior (datos ficticios): 5, 6, 7, 7, 8, 9.

**Media.** x̄ = 42 / 6 = 7 horas.

**Amplitud total.** AT = 9 − 5 = 4 horas.

**Amplitud intercuartil** (método de SPSS).

- Q₁: posición 25 · 7 / 100 = 1,75 → Q₁ = 5 + 0,75 · (6 − 5) = 5,75.
- Q₃: posición 75 · 7 / 100 = 5,25 → Q₃ = 8 + 0,25 · (9 − 8) = 8,25.
- RIC = 8,25 − 5,75 = 2,5 horas.

**Varianza y desviación típica.** Las desviaciones son −2, −1, 0, 0, 1 y 2; sus cuadrados, 4, 1, 0, 0, 1 y 4.

> Σ(xᵢ − x̄)² = 10
> S² = 10 / 6 = 1,667    S = 1,291 horas
> s²ₙ₋₁ = 10 / 5 = 2    sₙ₋₁ = 1,414 horas

**Coeficiente de variación.**

> CV = (1,291 / 7) × 100 = 18,4 %

(Con sₙ₋₁ sería 20,2 %. Hay que indicar cuál se ha usado.)

**Cambio de unidades.** En minutos, la media sería 420 y la desviación típica, 60 · 1,291 = 77,46 minutos, sin necesidad de recalcular.

**Interpretación.** Los estudiantes duermen de media 7 horas, con una desviación típica de 1,3 horas. Si un programa como SPSS diera «Desv. típ. = 1,414», no habría contradicción: es la misma variabilidad calculada con n − 1.

### Mito frecuente

**Mito:** «La varianza con n está mal calculada; la buena es la de n − 1.»

**Realidad:** las dos son correctas para propósitos distintos. La de n describe la dispersión de la muestra que se tiene delante; la de n − 1 estima sin sesgo la varianza de la población. Lo que no es correcto es mezclarlas en un mismo cálculo o no indicar cuál se usa.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Amplitud total | Diferencia entre el valor máximo y el mínimo |
| Amplitud intercuartil (RIC) | Diferencia Q₃ − Q₁; recoge el 50 % central de los datos |
| Desviación | Distancia de un dato a la media, xᵢ − x̄ |
| Varianza (S²) | Media de las desviaciones al cuadrado respecto a la media |
| Cuasivarianza (s²ₙ₋₁) | Suma de desviaciones al cuadrado dividida entre n − 1; estima σ² sin sesgo |
| Desviación típica | Raíz cuadrada de la varianza, en las unidades de la variable |
| Coeficiente de variación | Desviación típica expresada como porcentaje de la media |
| Transformación lineal | Cambio Y = a + b · X; sumar no altera la variabilidad, multiplicar sí |

### Clave PIR

**Prioridad media.** Lo más preguntado es el efecto de las transformaciones lineales: sumar una constante no cambia la desviación típica ni la varianza; multiplicar por b multiplica la desviación típica por |b| y la varianza por b². También se pregunta cuándo usar el coeficiente de variación y la resistencia del RIC frente a la desviación típica.

### Autoevaluación

**1.** Si a todas las puntuaciones de un grupo se les suman 10 puntos, la desviación típica…
a) aumenta en 10 puntos
b) no cambia
c) se multiplica por 10

**2.** Si todas las puntuaciones se multiplican por 3, la varianza…
a) se multiplica por 9
b) se multiplica por 3
c) no cambia

**3.** ¿Qué índice de variabilidad es más resistente a los valores atípicos?
a) La amplitud total
b) La desviación típica
c) La amplitud intercuartil

**4.** En una muestra de n = 5, la suma de las desviaciones al cuadrado es 20. La cuasivarianza vale…
a) 4
b) 5
c) 2

**5.** El coeficiente de variación es especialmente útil para…
a) comparar la variabilidad de variables con distintas unidades
b) describir variables nominales
c) detectar valores atípicos

### Soluciones

**1 b.** Desplazar los datos no cambia las distancias entre ellos. **2 a.** S²(Y) = b² · S²(X) = 9 · S²(X). **3 c.** Prescinde del 25 % de casos de cada extremo. **4 b.** 20 / (5 − 1) = 5; la varianza con n sería 20 / 5 = 4. **5 a.** Es un índice relativo, sin unidades, aplicable a variables de razón.

## Unidad 9 · Forma, puntuaciones típicas y gráficos

**Objetivos:** describir e interpretar la asimetría y la curtosis de una distribución; calcular puntuaciones típicas (z) y transformarlas en escalas derivadas; construir e interpretar un diagrama de caja y detectar valores atípicos.

### 9.1 Asimetría

Una distribución queda bien descrita con tres rasgos: su centro (Unidad 7), su variabilidad (Unidad 8) y su **forma**. La forma se resume con dos características: la asimetría y la curtosis.

La **asimetría** indica si los datos se reparten por igual a ambos lados del centro (Figura 7.1):

- **Simétrica**: las dos mitades son imágenes especulares.
- **Asimetría positiva**: la cola se alarga hacia los valores **altos**. Es la forma habitual de tiempos de reacción, ingresos o número de síntomas en población general, donde la mayoría puntúa bajo y unos pocos, muy alto.
- **Asimetría negativa**: la cola se alarga hacia los valores **bajos**. Aparece, por ejemplo, en una prueba demasiado fácil (efecto techo), en la que casi todos se acercan al máximo.

Hay varios índices de asimetría. Todos valen 0 en una distribución simétrica, son positivos con asimetría positiva y negativos con asimetría negativa:

> Índice de Pearson: Aₚ = (x̄ − Mo) / S
> Índice basado en cuartiles: Aq = (Q₃ + Q₁ − 2 · Md) / (Q₃ − Q₁)
> Índice de Fisher: g₁ = Σ(xᵢ − x̄)³ / (n · S³)

El índice de Fisher es el más usado. Al elevar las desviaciones al cubo conserva su signo, así que las desviaciones grandes de un lado no se compensan con las del otro. SPSS y jamovi muestran una versión corregida para muestras pequeñas, que en muestras grandes es prácticamente igual a g₁.

Con los 20 datos de la Figura 9.2 (3, 5, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, 14, 15, 24), SPSS da una asimetría de 1,44. Si se elimina el 24, pasa a −0,20. Un único valor atípico basta para convertir una distribución casi simétrica en una claramente asimétrica según el índice, lo que obliga a mirar siempre el gráfico.

### 9.2 Curtosis

La **curtosis** compara la forma de la distribución con la de una normal con la misma media y varianza. Se fija en cuánto peso tienen el centro y, sobre todo, las colas:

- **Leptocúrtica**: más apuntada en el centro y con **colas más pesadas** que la normal; los valores extremos son más frecuentes.
- **Mesocúrtica**: como la normal.
- **Platicúrtica**: más aplanada, con colas más ligeras.

![m](curtosis.png)

Figura 9.1. **Tres distribuciones con la misma media y la misma varianza.** Leptocúrtica (más apuntada, colas pesadas), mesocúrtica (normal) y platicúrtica (más aplanada). Elaboración propia (SAIMAP).

El índice habitual es el de Fisher, al que se resta 3 para que la normal valga 0 (por eso a veces se llama **exceso de curtosis**):

> g₂ = [Σ(xᵢ − x̄)⁴ / (n · S⁴)] − 3

g₂ > 0 indica leptocurtosis; g₂ ≈ 0, mesocurtosis; g₂ < 0, platicurtosis. Como referencia, en la Figura 9.1 la distribución leptocúrtica (de Laplace) tiene un exceso de curtosis de 3 y la platicúrtica (uniforme), de −1,2. SPSS y jamovi muestran también una versión corregida de este índice, con la normal en 0.

Hoy se subraya que la curtosis refleja sobre todo el peso de las colas, es decir, la presencia de valores extremos, más que la «altura del pico». Por eso un solo atípico puede disparar el índice: con los 20 datos anteriores, SPSS da una curtosis de 4,15.

**¿Cuándo es «grande» un índice?** Los programas dan también el error típico de cada índice. Una práctica extendida es dividir el índice entre su error típico y considerar que hay asimetría o curtosis apreciable si el cociente supera ±1,96. Con los 20 datos: 1,444 / 0,512 = 2,82 para la asimetría y 4,153 / 0,992 = 4,19 para la curtosis. En ambos casos el responsable es el 24.

### 9.3 Puntuaciones típicas (z) y escalas derivadas

Una puntuación directa aislada dice poco. Sacar 46 puntos en un test de memoria puede ser mucho o poco, según cómo haya puntuado el grupo. La **puntuación típica** o **puntuación z** expresa cada dato como su distancia a la media en unidades de desviación típica:

> zᵢ = (xᵢ − x̄) / S

- z = 0: el dato coincide con la media.
- z = 1,5: está 1,5 desviaciones típicas por encima de la media.
- z = −0,5: está media desviación típica por debajo.

Con los despertares (x̄ = 5, S = 2), las puntuaciones z son −1,5, −0,5, −0,5, −0,5, 0, 0, 1 y 2.

Propiedades del conjunto de puntuaciones z de una muestra:

- Su media es **0** y su desviación típica es **1**.
- Son **adimensionales**: no tienen unidades, lo que permite comparar la posición de una persona en variables medidas con escalas distintas.
- Son una transformación lineal, y por tanto **conservan la forma** de la distribución. La asimetría de los despertares es la misma antes y después de tipificar (g₁ = 0,66).

Si la variable sigue una distribución normal, cada z se corresponde con un percentil concreto. Por ejemplo, z = 1,5 deja por debajo el 93,3 % de los casos (Unidad 15). Si la distribución no es normal, esa correspondencia no vale.

Para calcular z se puede usar S (con n) o sₙ₋₁. SPSS, al guardar las puntuaciones tipificadas como nuevas variables desde **Analizar > Estadísticos descriptivos > Descriptivos**, usa sₙ₋₁. Lo importante es usar la misma en todos los datos.

**Escalas derivadas.** Las puntuaciones z tienen decimales y signos negativos, incómodos para comunicar resultados. Por eso los tests las transforman linealmente en escalas con otra media y otra desviación típica:

> Puntuación derivada = media de la nueva escala + desviación típica de la nueva escala · z
> Puntuaciones T: T = 50 + 10 · z
> Escala de CI: CI = 100 + 15 · z

Una persona con z = 1,5 tiene T = 65 y un CI de 122,5. Como son transformaciones lineales, la posición relativa de cada persona no cambia: solo cambia la escala en que se expresa.

### 9.4 Diagrama de caja y valores atípicos

El **diagrama de caja** (o de caja y bigotes, *box plot*) resume en un solo gráfico el centro, la dispersión, la asimetría y los valores atípicos de una distribución. Sus elementos:

- **Caja**: va de Q₁ a Q₃, así que su longitud es el RIC y contiene el 50 % central de los datos.
- **Línea interior**: la mediana.
- **Vallas** (no se dibujan): Q₁ − 1,5 · RIC y Q₃ + 1,5 · RIC.
- **Bigotes**: llegan hasta el dato más extremo que queda dentro de las vallas.
- **Valores atípicos**: los que quedan fuera de las vallas, dibujados como puntos. SPSS marca con un círculo los atípicos y con un asterisco los **extremos**, situados a más de 3 RIC de la caja.

> Valla inferior = Q₁ − 1,5 · RIC
> Valla superior = Q₃ + 1,5 · RIC

![](boxplot.png)

Figura 9.2. **Partes del diagrama de caja.** 20 datos con Q₁ = 7,75, Md = 10 y Q₃ = 12 (cuartiles por interpolación lineal), RIC = 4,25 y valla superior Q₃ + 1,5 · RIC = 18,375. Los bigotes llegan a 3 y a 15; el 24 queda fuera y es un valor atípico. Elaboración propia (SAIMAP).

Con los datos de la Figura 9.2:

- RIC = 12 − 7,75 = 4,25.
- Valla inferior: 7,75 − 1,5 · 4,25 = 1,375. Ningún dato queda por debajo, así que el bigote inferior llega al mínimo, 3.
- Valla superior: 12 + 1,5 · 4,25 = 18,375. El dato más alto por debajo es 15, donde termina el bigote. El 24 la supera: es **atípico**.
- Límite de los extremos: 12 + 3 · 4,25 = 24,75. El 24 no lo alcanza, así que es atípico, pero no extremo.

La figura calcula los cuartiles por interpolación lineal. Con el promedio ponderado de la Unidad 6, Q₁ = 7,25, Q₃ = 12 y RIC = 4,75; la valla superior queda en 19,125 y el 24 sigue siendo atípico.

**Cómo leer la forma.** Si la mediana está centrada en la caja y los bigotes tienen una longitud parecida, la distribución es aproximadamente simétrica. Si la mediana está cerca de Q₁ y el bigote superior es largo, hay asimetría positiva. Varias cajas en paralelo permiten comparar grupos de un vistazo (por ejemplo, la ansiedad en tres tipos de tratamiento).

**Qué hacer con un atípico.** Primero, comprobar si es un **error** de registro o de codificación; si lo es, se corrige. Si es un valor real, no se elimina de forma automática: puede ser el dato más informativo del estudio. Las opciones razonables son analizar con y sin él e informar de ambos resultados, o usar índices resistentes (mediana, RIC, media recortada). Cualquier exclusión debe justificarse y comunicarse.

**Con software.** En SPSS, **Analizar > Estadísticos descriptivos > Explorar** reúne casi todo lo de este capítulo: media, media recortada al 5 %, mediana, varianza, desviación típica, RIC, asimetría y curtosis con sus errores típicos, y gráficos de caja, de tallo y hojas e histogramas. Admite además una variable de agrupación para obtener todo por grupos. En jamovi, **Exploration > Descriptives** ofrece los mismos estadísticos y el diagrama de caja.

### Ejemplo resuelto · Comparar el rendimiento en dos tests

Una persona obtiene 46 puntos en un test de memoria (media del grupo normativo 40, desviación típica 4) y 70 puntos en un test de atención (media 80, desviación típica 20). ¿En cuál rinde mejor en relación con su grupo?

**Puntuaciones z.**

> z(memoria) = (46 − 40) / 4 = 1,5
> z(atención) = (70 − 80) / 20 = −0,5

**Puntuaciones T.**

> T(memoria) = 50 + 10 · 1,5 = 65
> T(atención) = 50 + 10 · (−0,5) = 45

**Escala de CI** (media 100, desviación típica 15).

> 100 + 15 · 1,5 = 122,5    100 + 15 · (−0,5) = 92,5

**Interpretación.** En memoria, la persona está 1,5 desviaciones típicas por encima de la media; en atención, media desviación típica por debajo. Comparar las puntuaciones directas (46 frente a 70) llevaría a la conclusión contraria. Si las dos variables se distribuyeran normalmente en el grupo normativo, z = 1,5 equivaldría a superar al 93,3 % del grupo y z = −0,5, a superar al 30,9 %.

### Consenso y debate

**Consenso:** antes de usar la media y la desviación típica, o pruebas que suponen normalidad, hay que examinar la forma de la distribución con gráficos (histograma, diagrama de caja) e índices de asimetría y curtosis.

**Debate:** cómo decidir si la asimetría o la curtosis son «demasiado grandes». El criterio de dividir el índice entre su error típico y compararlo con ±1,96 depende mucho del tamaño de la muestra: con muestras grandes, desviaciones mínimas resultan «significativas», y con muestras pequeñas pasan inadvertidas desviaciones importantes. Otros autores proponen umbrales fijos para el valor del índice, y no hay acuerdo sobre cuáles. Lo más defendible es combinar los índices con la inspección de los gráficos y con el conocimiento de la variable.

### Mito frecuente

**Mito:** «Convertir las puntuaciones en puntuaciones z hace que la distribución sea normal.»

**Realidad:** tipificar es una transformación lineal: cambia la media a 0 y la desviación típica a 1, pero conserva la forma. Una distribución asimétrica sigue igual de asimétrica tras tipificarla. Solo si la distribución original es normal, las puntuaciones z siguen la normal tipificada.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Asimetría positiva | Forma con la cola más larga hacia los valores altos |
| Curtosis | Grado en que una distribución concentra peso en el centro y las colas respecto a la normal |
| Leptocúrtica | Distribución más apuntada y con colas más pesadas que la normal |
| Puntuación z | Distancia de un dato a la media expresada en desviaciones típicas |
| Puntuación T | Escala derivada con media 50 y desviación típica 10: T = 50 + 10 · z |
| Diagrama de caja | Gráfico con la mediana, los cuartiles, los bigotes y los valores atípicos |
| Valor atípico | Dato situado a más de 1,5 RIC por debajo de Q₁ o por encima de Q₃ |
| Valor extremo | Dato situado a más de 3 RIC de la caja; SPSS lo marca con un asterisco |

### Clave PIR

**Prioridad alta.** Las puntuaciones típicas y las escalas derivadas (T, CI) son de lo más preguntado de la estadística descriptiva, también en las preguntas de psicometría sobre baremos. Trampas típicas: creer que tipificar normaliza la distribución, confundir el signo de la asimetría (positiva = cola a la derecha) y olvidar que el criterio de atípico es 1,5 RIC desde los cuartiles, no desde la mediana.

### Autoevaluación

**1.** En una distribución con la cola larga hacia los valores bajos, la asimetría es…
a) positiva
b) negativa
c) nula

**2.** Una persona obtiene z = −1. Su puntuación T es…
a) 40
b) 60
c) 49

**3.** Al convertir en puntuaciones z los datos de una distribución con asimetría positiva, la distribución resultante…
a) pasa a ser normal
b) pasa a ser simétrica pero no normal
c) mantiene la misma asimetría

**4.** Con Q₁ = 20 y Q₃ = 30, ¿a partir de qué valor un dato alto se considera atípico?
a) 40
b) 45
c) 60

**5.** Una distribución con colas más pesadas que la normal y mayor frecuencia de valores extremos es…
a) platicúrtica
b) mesocúrtica
c) leptocúrtica

### Soluciones

**1 b.** El signo de la asimetría lo marca el lado de la cola larga. **2 a.** T = 50 + 10 · (−1) = 40. **3 c.** Tipificar es una transformación lineal y conserva la forma. **4 b.** RIC = 10; valla superior = 30 + 1,5 · 10 = 45. **5 c.** La curtosis positiva refleja colas pesadas.
