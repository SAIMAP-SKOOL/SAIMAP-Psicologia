# Capítulo 3 · Probabilidad

La probabilidad es el lenguaje con el que la estadística cuantifica la incertidumbre. Este capítulo presenta sus conceptos básicos, las reglas de cálculo, la probabilidad condicionada y el teorema de Bayes, y explica por qué todo ello es imprescindible para pasar de la muestra a la población.

## Unidad 10 · Fundamentos de probabilidad

**Objetivos:** definir experimento aleatorio, espacio muestral y suceso; distinguir los enfoques clásico, frecuentista y subjetivo de la probabilidad; aplicar los axiomas y las reglas del complementario, la suma y la intersección.

### 10.1 Experimentos aleatorios, espacio muestral y sucesos

Un **experimento aleatorio** es cualquier proceso que cumple tres condiciones: puede repetirse en condiciones análogas, se conocen de antemano todos sus resultados posibles y no se puede predecir cuál de ellos se obtendrá en una realización concreta. Lanzar un dado, extraer al azar a un participante de una lista o registrar si una persona responde correctamente a un ítem de elección múltiple son experimentos aleatorios.

Un experimento es **determinista** cuando, en las mismas condiciones, produce siempre el mismo resultado. La estadística se ocupa de los aleatorios.

El **espacio muestral** (E, a veces Ω) es el conjunto de todos los resultados posibles del experimento. Cada resultado individual es un **suceso elemental**.

- Lanzar un dado: E = {1, 2, 3, 4, 5, 6}.
- Responder a un ítem con tres opciones: E = {a, b, c}.
- Clasificar a una persona según tenga o no diagnóstico de ansiedad: E = {sí, no}.

Un **suceso** es cualquier subconjunto del espacio muestral. «Obtener un número par» es el suceso A = {2, 4, 6}. Hay algunos sucesos con nombre propio:

| Tipo de suceso | Definición | Ejemplo con un dado |
| --- | --- | --- |
| **Elemental** | Contiene un único resultado | {5} |
| **Compuesto** | Contiene dos o más resultados | «Par» = {2, 4, 6} |
| **Seguro** | Coincide con el espacio muestral; ocurre siempre | {1, 2, 3, 4, 5, 6} |
| **Imposible** | No contiene ningún resultado (∅) | «Sacar un 7» |
| **Complementario de A** (Ā o A′) | Ocurre cuando no ocurre A | «Impar» = {1, 3, 5} |

Entre dos sucesos A y B se definen dos operaciones básicas:

- **Unión (A ∪ B):** ocurre A, ocurre B o ocurren ambos. Se lee «A o B».
- **Intersección (A ∩ B):** ocurren A y B a la vez. Se lee «A y B».

Dos sucesos son **incompatibles** (o mutuamente excluyentes) cuando no pueden ocurrir a la vez, es decir, cuando A ∩ B = ∅. «Sacar un 2» y «sacar un 5» en una sola tirada son incompatibles. «Sacar par» y «sacar más de 4» no lo son, porque comparten el 6.

### 10.2 Tres formas de entender la probabilidad

La **probabilidad** de un suceso es un número entre 0 y 1 que expresa lo esperable que es. Hay tres enfoques principales para asignarla.

**Enfoque clásico (Laplace).** Si todos los resultados del espacio muestral son igualmente probables, la probabilidad de un suceso es el cociente entre los casos favorables y los casos posibles:

> P(A) = casos favorables / casos posibles

Con un dado equilibrado, P(par) = 3/6 = 0,5. Este enfoque, que Pierre-Simon Laplace sistematizó a principios del siglo XIX, solo sirve cuando hay simetría: dados, monedas, urnas o extracciones al azar de una lista. No sirve para preguntas como «¿cuál es la probabilidad de que un paciente abandone la terapia?», porque los dos resultados no tienen por qué ser igual de probables.

**Enfoque frecuentista.** La probabilidad de un suceso es el valor al que tiende su **frecuencia relativa** cuando el experimento se repite un número muy grande de veces:

> P(A) = límite de nₐ / n cuando n tiende a infinito

Con pocas repeticiones la frecuencia relativa oscila mucho; con muchas, se estabiliza. Esta regularidad se conoce como **ley de los grandes números**. Es el enfoque que usa la estadística inferencial clásica: si en un registro amplio el 20 % de los pacientes abandona la terapia, se estima que la probabilidad de abandono es de 0,20. Su limitación es que exige poder repetir el experimento, algo que no siempre es posible.

**Enfoque subjetivo (o bayesiano).** La probabilidad expresa el **grado de creencia** de una persona sobre un suceso, a partir de la información de la que dispone. Un clínico que estima en un 70 % la probabilidad de que un tratamiento funcione en un paciente concreto usa este enfoque. Las creencias deben ser coherentes (respetar los axiomas) y se actualizan con los datos mediante el teorema de Bayes (Unidad 11).

| Enfoque | Qué es la probabilidad | Cuándo se usa | Limitación |
| --- | --- | --- | --- |
| **Clásico** | Casos favorables / casos posibles | Resultados equiprobables | Exige simetría |
| **Frecuentista** | Límite de la frecuencia relativa | Experimentos repetibles | Exige repetición |
| **Subjetivo** | Grado de creencia coherente | Sucesos únicos; estadística bayesiana | Depende de quién la asigna |

Los tres enfoques no compiten en la práctica: todos obedecen las mismas reglas de cálculo.

### 10.3 Axiomas y propiedades básicas

En 1933, Andréi Kolmogórov formuló la probabilidad como una teoría matemática basada en tres **axiomas**, válidos para cualquiera de los tres enfoques:

1. La probabilidad de cualquier suceso es no negativa: P(A) ≥ 0.
2. La probabilidad del suceso seguro es 1: P(E) = 1.
3. Si A y B son incompatibles, la probabilidad de su unión es la suma de sus probabilidades: P(A ∪ B) = P(A) + P(B).

De los axiomas se deducen varias **propiedades**:

- **Acotación:** 0 ≤ P(A) ≤ 1.
- **Suceso imposible:** P(∅) = 0.
- **Complementario:** la probabilidad de que no ocurra A es uno menos la de que ocurra.

> P(Ā) = 1 − P(A)

- **Monotonía:** si A está incluido en B, entonces P(A) ≤ P(B). «Sacar un 6» no puede ser más probable que «sacar par».

La regla del complementario es muy útil cuando calcular P(A) directamente es largo. Por ejemplo, la probabilidad de obtener **al menos un 6** al lanzar dos dados es más fácil de obtener a partir de su complementario, «ningún 6»: P(ningún 6) = (5/6) · (5/6) = 25/36, de modo que P(al menos un 6) = 1 − 25/36 = 11/36 ≈ 0,306. Contar los 36 resultados posibles da lo mismo: 11 contienen al menos un 6.

### 10.4 Regla de la suma e intersección de sucesos

**Regla de la suma.** Para dos sucesos cualesquiera, la probabilidad de que ocurra uno u otro es:

> P(A ∪ B) = P(A) + P(B) − P(A ∩ B)

Se resta la intersección porque, al sumar P(A) y P(B), los resultados comunes se cuentan dos veces. Con un dado, sea A = «par» = {2, 4, 6} y B = «mayor que 4» = {5, 6}. Entonces P(A) = 3/6, P(B) = 2/6 y P(A ∩ B) = P({6}) = 1/6:

> P(A ∪ B) = 3/6 + 2/6 − 1/6 = 4/6 ≈ 0,667

En efecto, A ∪ B = {2, 4, 5, 6}, cuatro de seis resultados.

Si A y B son **incompatibles**, P(A ∩ B) = 0 y la regla se reduce al tercer axioma: P(A ∪ B) = P(A) + P(B). Un error frecuente es sumar sin restar la intersección cuando los sucesos sí comparten resultados; el síntoma típico es obtener una probabilidad mayor que 1.

**Intersección.** La probabilidad de que ocurran A y B a la vez, P(A ∩ B), se puede obtener de dos formas:

- **Contando** en una tabla o en el espacio muestral los casos en que se dan ambos sucesos.
- Con la **regla del producto**, que exige la probabilidad condicionada y se estudia en la Unidad 11. En el caso particular de sucesos **independientes**, P(A ∩ B) = P(A) · P(B). Así se calculó antes P(ningún 6) = (5/6) · (5/6), porque los dos dados no se influyen.

**Incompatibles no es lo mismo que independientes.** Si dos sucesos con probabilidad mayor que cero son incompatibles, saber que ha ocurrido uno indica con certeza que el otro no ha ocurrido; por tanto, son **dependientes**. Es una confusión muy repetida en los exámenes.

En psicología, los datos suelen llegar en forma de **tabla de doble entrada**. Las probabilidades se obtienen dividiendo cada frecuencia entre el total: las casillas interiores dan las intersecciones y los márgenes dan las probabilidades de cada suceso por separado (probabilidades **marginales**).

### Ejemplo resuelto · Ansiedad e insomnio en una residencia universitaria

En una residencia universitaria con 200 estudiantes (datos ficticios), 60 cumplen criterios de ansiedad (A), 50 refieren insomnio (I) y 30 presentan ambos problemas. Se elige a un estudiante al azar.

| | Insomnio (I) | Sin insomnio | Total |
| --- | --- | --- | --- |
| **Ansiedad (A)** | 30 | 30 | 60 |
| **Sin ansiedad** | 20 | 120 | 140 |
| **Total** | 50 | 150 | 200 |

1. **Probabilidades marginales:** P(A) = 60/200 = 0,30; P(I) = 50/200 = 0,25.
2. **Intersección:** P(A ∩ I) = 30/200 = 0,15.
3. **Unión:** P(A ∪ I) = 0,30 + 0,25 − 0,15 = 0,40. El 40 % presenta al menos uno de los dos problemas.
4. **Complementario de la unión:** P(ni ansiedad ni insomnio) = 1 − 0,40 = 0,60, que coincide con 120/200.
5. **Complementario de A:** P(Ā) = 1 − 0,30 = 0,70.
6. **Solo ansiedad:** P(A) − P(A ∩ I) = 0,30 − 0,15 = 0,15 (30 estudiantes).
7. **Exactamente uno de los dos problemas:** (30 + 20) / 200 = 0,25.

¿Son incompatibles A e I? No, porque P(A ∩ I) = 0,15 ≠ 0. ¿Son independientes? Si lo fueran, se cumpliría P(A ∩ I) = P(A) · P(I) = 0,30 · 0,25 = 0,075. Como la intersección observada (0,15) es el doble, los sucesos están **asociados**: entre quienes tienen ansiedad, el insomnio es más frecuente de lo esperable por azar. La Unidad 11 retoma este ejemplo con probabilidades condicionadas.

### Mito frecuente

**Mito:** «Si en una ruleta ha salido rojo diez veces seguidas, ahora es más probable que salga negro».

**Realidad:** cada tirada es independiente de las anteriores, y la probabilidad no cambia por lo que haya pasado antes. Es la **falacia del jugador**. La ley de los grandes números habla de la estabilización de la frecuencia relativa a largo plazo, no de que el azar «compense» las rachas a corto plazo.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Experimento aleatorio | Proceso repetible con resultados posibles conocidos pero impredecibles en cada realización |
| Espacio muestral | Conjunto de todos los resultados posibles de un experimento |
| Suceso | Subconjunto del espacio muestral |
| Sucesos incompatibles | Sucesos que no pueden ocurrir a la vez: A ∩ B = ∅ |
| Enfoque clásico | Casos favorables / casos posibles, con resultados equiprobables |
| Enfoque frecuentista | Probabilidad como límite de la frecuencia relativa en muchas repeticiones |
| Regla del complementario | P(Ā) = 1 − P(A) |
| Regla de la suma | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) |

### Clave PIR

**Prioridad baja.** La probabilidad pura casi no se pregunta de forma aislada, pero sus reglas sostienen la interpretación del valor p y de los errores de decisión. Conviene tener claro el enfoque frecuentista, la regla de la suma con la resta de la intersección y la diferencia entre sucesos incompatibles e independientes, que es la trampa más habitual.

### Autoevaluación

**1.** Según el enfoque frecuentista, la probabilidad de un suceso es…
a) el cociente entre casos favorables y casos posibles
b) el límite de su frecuencia relativa al repetir el experimento
c) el grado de creencia razonable de quien la asigna

**2.** Con un dado, ¿cuánto vale P(par ∪ mayor que 4)?
a) 5/6
b) 4/6
c) 3/6

**3.** Si P(A) = 0,30, la probabilidad de su complementario es…
a) 0,70
b) 0,30
c) 1,30

**4.** Dos sucesos con probabilidad mayor que cero que son incompatibles…
a) son siempre independientes
b) pueden ser independientes o no
c) son siempre dependientes

**5.** En la residencia del ejemplo, P(A) = 0,30, P(I) = 0,25 y P(A ∩ I) = 0,15. ¿Cuánto vale P(A ∪ I)?
a) 0,55
b) 0,075
c) 0,40

### Soluciones

**1 b.** La opción a) es el enfoque clásico y la c), el subjetivo. **2 b.** 3/6 + 2/6 − 1/6 = 4/6, porque el 6 está en los dos sucesos. **3 a.** P(Ā) = 1 − 0,30. **4 c.** Si ocurre uno, el otro ya no puede ocurrir, así que la información de uno cambia la probabilidad del otro. **5 c.** 0,30 + 0,25 − 0,15 = 0,40; sumar sin restar la intersección da 0,55.

## Unidad 11 · Probabilidad condicionada y teorema de Bayes

**Objetivos:** calcular probabilidades condicionadas y aplicar la regla del producto; comprobar si dos sucesos son independientes; aplicar el teorema de la probabilidad total y el de Bayes, en especial al cribado diagnóstico; entender por qué la probabilidad es la base de la inferencia.

### 11.1 Probabilidad condicionada y regla del producto

La **probabilidad condicionada** de A dado B, P(A | B), es la probabilidad de que ocurra A sabiendo que ha ocurrido B. Al conocer B, el espacio muestral se reduce a los casos de B, y dentro de él se cuenta cuántos son también A:

> P(A | B) = P(A ∩ B) / P(B), siempre que P(B) > 0

En la residencia de la Unidad 10 (200 estudiantes; 60 con ansiedad, 50 con insomnio, 30 con ambos), la probabilidad de tener ansiedad sabiendo que un estudiante tiene insomnio es:

> P(A | I) = 0,15 / 0,25 = 0,60

Contado directamente en la tabla: de los 50 estudiantes con insomnio, 30 tienen ansiedad, y 30/50 = 0,60.

La condicionada **no es simétrica**. La probabilidad de insomnio sabiendo que hay ansiedad es P(I | A) = 30/60 = 0,50, distinta de P(A | I) = 0,60. Confundir P(A | B) con P(B | A) es la **falacia de la inversión de la condicional**, origen de muchos errores de razonamiento clínico y, como se verá en la Unidad 16, de la mala interpretación del valor p.

Despejando la intersección de la definición se obtiene la **regla del producto**:

> P(A ∩ B) = P(B) · P(A | B) = P(A) · P(B | A)

Es útil cuando los sucesos ocurren en secuencia. Por ejemplo, en un grupo de 10 participantes, 4 tienen puntuaciones altas de ansiedad. Si se eligen dos al azar **sin reposición**, la probabilidad de que los dos tengan puntuaciones altas es:

> P(1.º alto ∩ 2.º alto) = (4/10) · (3/9) = 12/90 ≈ 0,133

La segunda probabilidad es 3/9 porque, tras elegir al primero, quedan 9 personas y 3 con puntuación alta. Si la extracción fuera **con reposición** (la misma persona puede volver a salir), la segunda extracción no dependería de la primera y la probabilidad sería (4/10) · (4/10) = 0,16.

### 11.2 Independencia de sucesos

Dos sucesos son **independientes** cuando saber que uno ha ocurrido no modifica la probabilidad del otro:

> P(A | B) = P(A)

De forma equivalente, y es la comprobación más rápida:

> P(A ∩ B) = P(A) · P(B)

En la residencia, P(A | I) = 0,60, mientras que P(A) = 0,30. Saber que alguien duerme mal **duplica** la probabilidad de que tenga ansiedad, así que los sucesos son dependientes. La misma conclusión se obtiene con el producto: P(A) · P(I) = 0,075 ≠ 0,15.

La independencia es una propiedad de las probabilidades, no del sentido común. Dos sucesos pueden parecer relacionados y ser independientes, o al revés. Por eso se comprueba con números. Esta misma idea, aplicada a variables enteras en lugar de a dos sucesos, es la base de la prueba χ² de la Unidad 14: si dos variables categóricas son independientes, la frecuencia esperada de cada casilla es el producto de las probabilidades marginales por el total.

| Relación | Definición | Consecuencia |
| --- | --- | --- |
| **Incompatibles** | P(A ∩ B) = 0 | P(A ∪ B) = P(A) + P(B) |
| **Independientes** | P(A ∩ B) = P(A) · P(B) | P(A ∣ B) = P(A) |
| **Dependientes** | P(A ∩ B) ≠ P(A) · P(B) | Conocer B cambia la probabilidad de A |

### 11.3 Probabilidad total y teorema de Bayes

**Teorema de la probabilidad total.** Si los sucesos B₁, B₂, …, Bₖ son incompatibles entre sí y su unión es todo el espacio muestral (forman una **partición**), la probabilidad de cualquier suceso A se obtiene sumando lo que aporta cada parte:

> P(A) = P(B₁) · P(A | B₁) + P(B₂) · P(A | B₂) + … + P(Bₖ) · P(A | Bₖ)

En el caso más sencillo, la partición es un suceso y su complementario: P(A) = P(B) · P(A | B) + P(B̄) · P(A | B̄).

**Teorema de Bayes.** Permite «dar la vuelta» a una condicional: obtener P(Bᵢ | A) cuando se conocen las P(A | Bᵢ). Se deduce de la regla del producto y de la probabilidad total:

> P(Bᵢ | A) = P(Bᵢ) · P(A | Bᵢ) / P(A)

Sus elementos tienen nombre propio:

- **Probabilidad a priori**, P(Bᵢ): lo que se sabe de Bᵢ antes de observar A (por ejemplo, la prevalencia de un trastorno).
- **Verosimilitud**, P(A | Bᵢ): lo probable que es la observación A si Bᵢ es cierto (por ejemplo, la sensibilidad de una prueba).
- **Probabilidad a posteriori**, P(Bᵢ | A): la probabilidad de Bᵢ actualizada tras observar A.

El teorema lleva el nombre del reverendo Thomas Bayes, cuyo ensayo se publicó póstumamente en 1763; Laplace lo desarrolló y generalizó poco después. Hoy es la base de la **estadística bayesiana**, que trata los parámetros como inciertos y actualiza las creencias con los datos. En psicología clínica, su aplicación más directa es la interpretación de pruebas diagnósticas.

### 11.4 Cribado diagnóstico y frecuencias naturales

Una prueba de cribado clasifica a las personas como **positivas** (+) o **negativas** (−). Su calidad se describe con cuatro índices:

| Índice | Definición | Pregunta que responde |
| --- | --- | --- |
| **Sensibilidad** | P(+ ∣ trastorno) | ¿Qué proporción de quienes tienen el trastorno detecta la prueba? |
| **Especificidad** | P(− ∣ sin trastorno) | ¿Qué proporción de quienes no lo tienen descarta la prueba? |
| **Valor predictivo positivo (VPP)** | P(trastorno ∣ +) | Si doy positivo, ¿qué probabilidad hay de que tenga el trastorno? |
| **Valor predictivo negativo (VPN)** | P(sin trastorno ∣ −) | Si doy negativo, ¿qué probabilidad hay de que no lo tenga? |

La sensibilidad y la especificidad son propiedades de la prueba. Los valores predictivos, en cambio, **dependen de la prevalencia** (la probabilidad a priori) y son lo que interesa al paciente y al clínico. El paso de unos a otros es exactamente el teorema de Bayes.

Las personas razonan mucho mejor con **frecuencias naturales** (recuentos sobre una población concreta, como «90 de cada 10 000») que con probabilidades condicionadas expresadas en tantos por uno. Un árbol de frecuencias hace visible el cálculo (Figura 11.1).

![](bayes-arbol.png)

Figura 11.1. **Árbol de frecuencias naturales de un cribado.** De 10 000 personas, 100 tienen el trastorno (prevalencia del 1 %): la prueba detecta a 90 (sensibilidad del 90 %) y deja escapar a 10. De las 9 900 sin trastorno, 9 405 dan negativo (especificidad del 95 %) y 495 dan positivo. De los 585 positivos, solo 90 tienen el trastorno: P(T | +) = 90/585 ≈ 0,15. Elaboración propia (SAIMAP).

La **falacia de la tasa base** consiste en ignorar la probabilidad a priori y quedarse solo con la sensibilidad. Ante una prueba «que acierta en el 90 % de los casos», mucha gente estima que un positivo indica el trastorno con una probabilidad cercana al 90 %. Pero cuando el trastorno es poco frecuente, los falsos positivos procedentes de la gran mayoría sana superan con mucho a los verdaderos positivos.

La prevalencia cambia mucho el VPP con la misma prueba (sensibilidad 90 %, especificidad 95 %):

| Prevalencia | VPP | VPN |
| --- | --- | --- |
| 1 % (población general) | 0,154 | 0,999 |
| 10 % (atención primaria con síntomas) | 0,667 | 0,988 |
| 30 % (unidad especializada) | 0,885 | 0,957 |

Por eso un cribado poblacional de un trastorno raro produce muchos falsos positivos, y un positivo debe confirmarse siempre con una evaluación más completa. Si a los positivos se les aplica una segunda prueba independiente con las mismas características, la probabilidad a priori pasa a ser 0,154 y el nuevo VPP sube a ≈ 0,766: la posterior de un paso se convierte en la a priori del siguiente.

**Para qué sirve todo esto en psicología.** La probabilidad es el puente entre la muestra y la población. La inferencia estadística (Capítulo 5) se pregunta cuán probable sería un resultado como el observado si en la población no hubiera efecto. Esa pregunta es una probabilidad condicionada, P(datos | H₀), y no debe confundirse con P(H₀ | datos), que es la que de verdad interesa pero que el contraste clásico no proporciona. Es la misma inversión de la condicional que se ha visto en el cribado.

### Ejemplo resuelto · Valor predictivo de un cribado de depresión

Un cuestionario breve de cribado de depresión tiene una sensibilidad del 90 % y una especificidad del 95 % (datos ficticios). Se aplica en una población con una prevalencia del 1 %. Una persona da positivo. ¿Qué probabilidad hay de que tenga depresión?

**1. Datos.** P(T) = 0,01; P(T̄) = 0,99; P(+ | T) = 0,90; P(+ | T̄) = 1 − 0,95 = 0,05.

**2. Probabilidad total de dar positivo.**

> P(+) = P(T) · P(+ | T) + P(T̄) · P(+ | T̄)
> P(+) = 0,01 · 0,90 + 0,99 · 0,05 = 0,009 + 0,0495 = 0,0585

**3. Teorema de Bayes.**

> P(T | +) = 0,009 / 0,0585 ≈ 0,154

**4. Comprobación con frecuencias naturales.** En 10 000 personas: 100 con depresión (90 positivos y 10 negativos) y 9 900 sin ella (495 positivos y 9 405 negativos). Hay 90 + 495 = 585 positivos, que son el 5,85 % del total, y VPP = 90/585 ≈ 0,154.

**5. Valor predictivo negativo.** VPN = 9 405 / (9 405 + 10) = 9 405/9 415 ≈ 0,999.

**Interpretación.** Solo alrededor de **15 de cada 100 positivos** tienen depresión; los otros 85 son falsos positivos (495/585 ≈ 0,846). En cambio, un negativo descarta el trastorno casi con seguridad. El cuestionario es útil para descartar, no para diagnosticar: los positivos deben pasar a una entrevista clínica.

### Mito frecuente

**Mito:** «Si una prueba tiene una sensibilidad del 90 %, un resultado positivo significa que hay un 90 % de probabilidad de tener el trastorno».

**Realidad:** la sensibilidad es P(+ | trastorno), y lo que se pregunta es P(trastorno | +). Son probabilidades distintas, y la segunda depende de la prevalencia. Con una prevalencia del 1 % y una especificidad del 95 %, esa probabilidad es de solo ≈ 0,15.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Probabilidad condicionada | P(A ∣ B) = P(A ∩ B) / P(B): probabilidad de A sabiendo que ha ocurrido B |
| Regla del producto | P(A ∩ B) = P(B) · P(A ∣ B) |
| Sucesos independientes | Sucesos que cumplen P(A ∩ B) = P(A) · P(B) |
| Probabilidad total | Suma de P(Bᵢ) · P(A ∣ Bᵢ) sobre una partición del espacio muestral |
| Teorema de Bayes | Obtiene la probabilidad a posteriori a partir de la a priori y la verosimilitud |
| Sensibilidad | Probabilidad de dar positivo si se tiene el trastorno |
| Especificidad | Probabilidad de dar negativo si no se tiene el trastorno |
| Valor predictivo positivo | Probabilidad de tener el trastorno si se da positivo; depende de la prevalencia |

### Clave PIR

**Prioridad media.** Las preguntas de Bayes suelen plantearse como casos de cribado: hay que calcular o comparar el VPP sabiendo prevalencia, sensibilidad y especificidad. La trampa típica es confundir sensibilidad con VPP o creer que el VPP no depende de la prevalencia. También aparece la diferencia entre P(A | B) y P(B | A), clave para interpretar correctamente el valor p.

### Autoevaluación

**1.** En la residencia, 30 de los 50 estudiantes con insomnio tienen ansiedad. ¿Cuánto vale P(A | I)?
a) 0,60
b) 0,50
c) 0,15

**2.** A y B son independientes si…
a) P(A ∩ B) = 0
b) P(A ∩ B) = P(A) · P(B)
c) P(A ∪ B) = P(A) + P(B)

**3.** ¿Cuál de estos índices depende de la prevalencia del trastorno?
a) La sensibilidad
b) La especificidad
c) El valor predictivo positivo

**4.** Prevalencia 1 %, sensibilidad 90 %, especificidad 95 %. ¿Cuánto vale aproximadamente el VPP?
a) 0,90
b) 0,15
c) 0,95

**5.** La falacia de la tasa base consiste en…
a) ignorar la probabilidad a priori al interpretar un resultado
b) creer que el azar compensa las rachas
c) sumar probabilidades sin restar la intersección

### Soluciones

**1 a.** 30/50 = 0,60; 0,50 sería P(I | A) y 0,15 es la intersección. **2 b.** La a) define sucesos incompatibles y la c) es la regla de la suma para incompatibles. **3 c.** Sensibilidad y especificidad son propiedades de la prueba; los valores predictivos cambian con la prevalencia. **4 b.** 0,009 / 0,0585 ≈ 0,154. **5 a.** La b) es la falacia del jugador y la c), un error de cálculo con la regla de la suma.
