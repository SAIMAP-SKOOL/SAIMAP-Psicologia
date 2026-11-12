## Unidad 11 · Razonamiento inductivo y probabilístico

**Objetivos:** distinguir las modalidades de la inferencia inductiva y los factores que determinan su fuerza; explicar la tarea 2-4-6 y la estrategia de prueba positiva; describir las claves y los modelos del razonamiento causal y los usos de la inducción; comparar los modelos de casos con el modelo bayesiano y explicar el efecto de las frecuencias naturales.

### 11.1 Modalidades de la inferencia inductiva

La deducción conserva la verdad: si las premisas son verdaderas y el argumento es válido, la conclusión también lo es (Unidad 9). La **inducción** hace algo distinto. Parte de casos observados y llega a una conclusión que **va más allá** de ellos. Por eso amplía el conocimiento, pero no lo garantiza. Una conclusión inductiva puede ser falsa aunque todas las premisas sean verdaderas.

En inducción no se habla de validez, sino de **fuerza inductiva**: el grado en que las premisas hacen probable la conclusión. La fuerza es graduada. «Los diez mangos de esta frutería estaban maduros» apoya poco que todos los mangos lo estén, y bastante más que lo esté el próximo de esa frutería.

Las inferencias inductivas se agrupan en varias modalidades que, en la práctica, se combinan a menudo:

| Modalidad | Qué se infiere | Ejemplo |
| --- | --- | --- |
| Generalización | Una regla general a partir de varios casos | «Las tres veces que fui a las ocho, el gimnasio estaba lleno» |
| Analogía | Una propiedad de un caso nuevo por su parecido con otro (Unidad 8) | «Este casero es como el anterior: tardará en devolver la fianza» |
| Inducción causal | Que un suceso produce otro (apartado 11.3) | «Cuando riego de más, las hojas amarillean» |
| Inducción estadística | Una propiedad de una población a partir de una muestra | «El 60 % de los encuestados quiere más carril bici» |
| Razonamiento probabilístico | El grado de creencia en una hipótesis ante datos nuevos (apartado 11.4) | «Con este resultado, ¿será alergia?» |

La fuerza de una inducción depende sobre todo del **número** de casos, su **diversidad** y su **representatividad**. Diez opiniones de amigos del mismo grupo dicen menos sobre una ciudad que diez opiniones de personas de barrios, edades y trabajos distintos.

**La inducción basada en categorías.** Un caso muy estudiado es el de los argumentos que pasan una propiedad de unas categorías a otras: «los hipopótamos tienen la enzima X; los rinocerontes tienen la enzima X; por tanto, todos los mamíferos tienen la enzima X». Osherson et al. (1990) propusieron el **modelo de similitud-cobertura**, según el cual la fuerza de estos argumentos depende de dos componentes:

1. La **similitud** entre las categorías de las premisas y la de la conclusión.
2. La **cobertura**: el grado en que las premisas, en conjunto, representan bien la categoría más general que incluye a todas.

![m](similitud-cobertura.png)

Figura 11.1. **Similitud y cobertura.** «Hipopótamos» y «rinocerontes» son muy parecidos entre sí y cubren una parte pequeña de la categoría «mamíferos»; «hipopótamos» y «hámsteres» cubren una parte mucho mayor, de modo que el argumento resulta más fuerte (Osherson et al., 1990). Esquema de elaboración propia.

Como muestra la figura 11.1, dos premisas muy parecidas entre sí añaden poca cobertura: casi dicen lo mismo. Dos premisas **diversas** cubren mejor la categoría, y por eso el argumento con hámsteres se juzga más fuerte. Es la lógica de la buena investigación: una conclusión se apoya mejor en casos variados que en muchos casos casi idénticos. El modelo enlaza con lo visto sobre conceptos y tipicidad (Unidad 4).

### 11.2 Comprobar hipótesis: la tarea 2-4-6

Inducir no es solo generalizar a partir de lo que llega. También es **buscar** datos para poner a prueba una idea. El estudio clásico de esta búsqueda es la **tarea 2-4-6** de Wason (1960).

Se dice al participante que la serie «2, 4, 6» cumple una regla que el experimentador tiene en mente. Debe descubrirla proponiendo series de tres números; tras cada una, se le dice si cumple o no la regla. Cuando se siente seguro, la anuncia. La regla real era muy general: **cualquier serie de números ascendentes**.

Lo habitual es formular enseguida una hipótesis más estrecha, como «números que aumentan de dos en dos», y proponer series que la cumplen: 8, 10, 12; 20, 22, 24; 100, 102, 104. Todas reciben un «sí». La confianza crece y se anuncia una regla falsa.

![m](tarea-246.png)

Figura 11.2. **Hipótesis anidada en la regla.** La hipótesis «aumentan de dos en dos» es un subconjunto de la regla «cualquier serie ascendente»; probar solo series que la cumplen produce siempre un «sí» y nunca revela el error. En el estudio original, solo 6 de 29 participantes anunciaron la regla correcta sin haber anunciado antes alguna incorrecta. Datos de Wason (1960). Esquema de elaboración propia.

Como muestra la figura 11.2, el problema es estructural. Cuando la hipótesis está **dentro** de la regla verdadera, cualquier serie que la cumple también cumple la regla. Para descubrir el error hay que proponer series que la hipótesis **prohíbe**, como 1, 5, 20, y comprobar que también reciben un «sí». En el estudio de Wason (1960), de 29 participantes, 6 dieron con la regla sin anuncios incorrectos previos, 13 anunciaron una regla incorrecta antes de acertar, 9 anunciaron dos o más incorrectas y 1 no llegó a ninguna conclusión.

Wason interpretó el resultado como una tendencia a **confirmar** las propias hipótesis, antecedente directo de lo que hoy se llama **sesgo de confirmación** (Unidad 7). Klayman y Ha (1987) propusieron una lectura más fina. Las personas usan una **estrategia de prueba positiva**: examinan los casos que, según su hipótesis, deberían cumplir la regla. No equivale a buscar confirmación a toda costa: una prueba positiva puede dar un «no» y refutar la hipótesis. Es un **heurístico** razonable en muchos entornos reales, que falla de forma sistemática en un caso concreto: cuando la hipótesis es **más estrecha** que la regla verdadera, como ocurre en la tarea 2-4-6. La alternativa es la **prueba negativa**: proponer series que la hipótesis predice que no cumplen.

Un ejemplo cotidiano: alguien cree que su compañera de piso está molesta con él porque le contesta con monosílabos, y no comprueba si también contesta así a los demás cuando ha dormido poco. La pregunta útil es qué observaría si su hipótesis fuera **falsa**.

### 11.3 Razonamiento causal y usos de la inducción

**Claves de la causalidad.** Saber qué causa qué permite predecir y actuar. Hume señaló tres claves con las que inferimos una relación causal: la **contigüidad** espacial y temporal, la **prioridad temporal** de la causa sobre el efecto y la **conjunción constante**, es decir, que ambos aparezcan juntos de forma repetida. Ninguna de ellas, sola, garantiza la causa: el trueno sigue siempre al relámpago y no lo causa.

Mill propuso métodos para pasar de la observación a la hipótesis causal:

| Método de Mill | Lógica | Ejemplo |
| --- | --- | --- |
| Concordancia | Si varios casos del efecto solo comparten un factor, ese factor es candidato a causa | Varios amigos con dolor de estómago solo coincidieron en la misma ensaladilla |
| Diferencia | Si dos situaciones solo difieren en un factor y el efecto aparece en una, ese factor es candidato a causa | Dos noches iguales, salvo el café de la tarde; solo en una se duerme mal |
| Variaciones concomitantes | Si el efecto varía cuando varía un factor, ambos están relacionados | Cuantas más horas de pantalla por la noche, más se tarda en dormir |

**La contingencia y el poder causal.** Una forma de medir la relación entre una causa posible (c) y un efecto (e) es la **contingencia**: ΔP = P(e | c) − P(e | no c). Supongamos que, de 20 noches con café por la tarde, se duerme mal en 12 (0,6), y de 20 noches sin café, en 4 (0,2). ΔP = 0,4. Cheng (1997) propuso la **teoría del poder causal** (power PC), según la cual las personas no estiman solo la contingencia, sino el **poder** de la causa una vez descontado lo que ocurre sin ella: ΔP se divide entre 1 − P(e | no c). En el ejemplo, 0,4 / 0,8 = 0,5. La idea es que el efecto puede tener **otras causas**.

En la práctica se da mucho peso a los casos en que causa y efecto coinciden y poco a los demás, y se perciben causas en simples coincidencias. Una correlación no basta para afirmar una causa: dormir poco y rendir peor pueden deberse a un tercer factor, como el estrés.

**Usos de la inducción.** La misma maquinaria se usa con distinto rigor según el contexto:

- **Ciencia.** La inducción se somete a control: muestras planificadas, grupos de comparación, estadística y replicación. Las conclusiones son provisionales, pero se corrigen con datos.
- **Vida cotidiana.** Se infiere desde la experiencia personal y pocos casos. Suele funcionar en entornos conocidos.
- **Inducción heurística.** Se recurre a atajos como la representatividad, la disponibilidad o el anclaje (Unidad 7).
- **Clínica.** Un error frecuente es **desatender la prevalencia** del trastorno, lo que lleva a sobrestimar el **valor predictivo positivo** de una prueba: la probabilidad de tener de verdad el trastorno si se da positivo (apartado 11.4; véase también Psicopatología).

### 11.4 Modelos de casos y modelo bayesiano

**Modelos de casos.** Muchas inferencias no se basan en reglas generales, sino en la **comparación con experiencias concretas** guardadas en la memoria: se recupera un caso parecido y se traslada su desenlace al actual. Una fisioterapeuta ve una lesión que le recuerda a la de un paciente de hace años y prueba el mismo ejercicio. La idea se parece a la de los modelos de ejemplares en la categorización (Unidad 4) y al razonamiento analógico (Unidad 8): lo decisivo es la semejanza, mejor si es estructural (causas, efectos, contexto) que superficial.

Explican bien la rapidez de quien tiene mucha experiencia (Unidad 16). Su punto débil es que dependen de los casos que vienen a la mente, y los más recientes o llamativos se recuperan antes (disponibilidad).

**El modelo bayesiano.** Plantea que razonar bajo incertidumbre consiste en **actualizar** el grado de creencia en una hipótesis cuando llegan datos nuevos. Se parte de una **probabilidad a priori**, P(H), se tiene en cuenta lo esperable que es el dato si la hipótesis es cierta, P(D | H), y se obtiene una **probabilidad a posteriori**, P(H | D). El teorema de Bayes dice: P(H | D) = P(D | H) × P(H) / P(D). Es la norma con la que se juzga si un razonamiento probabilístico es correcto.

El problema de la mamografía muestra la dificultad. Un 1 % de las mujeres de cierto grupo tiene cáncer de mama. Si lo tiene, la mamografía da positivo en el 80 % de los casos; si no lo tiene, da positivo en un 9,6 %. Una mujer da positivo: ¿qué probabilidad hay de que tenga cáncer? Muchas personas dan valores cercanos al 80 %, la tasa de aciertos de la prueba. Es el **descuido de la tasa base**, que ya apareció en el problema del taxi (Unidad 7).

![](frecuencias.png)

Figura 11.3. **El problema de la mamografía en frecuencias naturales.** De 1.000 mujeres, 10 tienen cáncer y 8 de ellas dan positivo; de las 990 sin cáncer, 95 dan positivo. De los 103 positivos, solo 8 corresponden a cáncer: alrededor del 7,8 %. Datos de Gigerenzer y Hoffrage (1995). Elaboración propia.

Como muestra la figura 11.3, el problema resulta mucho más claro en **frecuencias naturales**, recuentos obtenidos al clasificar una muestra: basta comparar los positivos con cáncer (8) con todos los positivos (103).

![m](formato-bayes.png)

Figura 11.4. **Formato de la información y respuestas bayesianas.** Porcentaje de respuestas correctas con probabilidades frente a frecuencias naturales: del 16 % al 46 % con el menú estándar de datos y del 28 % al 50 % con el menú corto. Datos de Gigerenzer y Hoffrage (1995). Elaboración propia.

Como muestra la figura 11.4, las frecuencias naturales casi triplican los aciertos con el menú estándar (tasa base, tasa de aciertos y falsos positivos) y también los mejoran con el menú corto, que da solo los dos datos imprescindibles. Aun así, alrededor de la mitad de las respuestas siguen sin ser bayesianas. Hay dos explicaciones en **debate**. Para Gigerenzer, la mente está adaptada a la información tal como aparece en el entorno, en forma de recuentos (visión **ecológico-evolutiva**). Para Barbey y Sloman (2007), las frecuencias ayudan porque hacen visibles los **conjuntos anidados**: los positivos con cáncer son un subconjunto de todos los positivos.

El enfoque bayesiano se usa también como **teoría de la cognición**: Tenenbaum, Kemp, Griffiths y Goodman (2011) describen muchos aprendizajes inductivos como inferencia bayesiana. Se discute si estos modelos describen **qué problema** resuelve la mente (nivel computacional) o **cómo** lo resuelve (nivel de proceso).

### Consenso y debate

**Consenso:** la fuerza inductiva aumenta con la diversidad y la representatividad de los casos (Osherson et al., 1990). La estrategia de prueba positiva es un heurístico que falla de forma sistemática cuando la hipótesis es más estrecha que la regla (Klayman y Ha, 1987). Las personas tienden a descuidar la tasa base, y las frecuencias naturales mejoran el razonamiento bayesiano (Gigerenzer y Hoffrage, 1995).

**Debate:** por qué ayudan las frecuencias: adaptación ecológico-evolutiva (Gigerenzer) o conjuntos anidados visibles (Barbey y Sloman, 2007). También si los modelos bayesianos describen el proceso mental o solo el problema que se resuelve.

### Mito frecuente

**Mito:** «Las personas somos incapaces de razonar de forma bayesiana: ignorar la tasa base es inevitable».

**Realidad:** el rendimiento depende mucho del formato. Con frecuencias naturales, las respuestas bayesianas pasan del 16 % al 46 % y del 28 % al 50 % (Gigerenzer y Hoffrage, 1995). La mejora es grande, aunque no completa: alrededor de la mitad de las respuestas siguen sin ser bayesianas.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Fuerza inductiva | Grado en que las premisas hacen probable la conclusión de un argumento inductivo |
| Modelo de similitud-cobertura | La fuerza depende de la similitud premisas-conclusión y de su cobertura (Osherson et al., 1990) |
| Tarea 2-4-6 | Tarea de Wason (1960) para descubrir una regla proponiendo series de tres números |
| Prueba positiva | Examinar casos que la hipótesis predice que cumplen la regla (Klayman y Ha, 1987) |
| Contingencia (ΔP) | Diferencia entre la probabilidad del efecto con la causa y sin ella |
| Poder causal | Contingencia corregida por la tasa del efecto en ausencia de la causa (Cheng, 1997) |
| Descuido de la tasa base | Ignorar la probabilidad a priori al estimar la probabilidad a posteriori |
| Frecuencias naturales | Recuentos de casos que facilitan el razonamiento bayesiano (Gigerenzer y Hoffrage, 1995) |

### Clave PIR

**Prioridad alta.** Se pregunta la regla real de la tarea 2-4-6, por qué falla la prueba positiva, la resolución de un problema de tasa base y el efecto de las frecuencias naturales. Trampa típica: atribuir el fallo en la 2-4-6 a una búsqueda deliberada de confirmación, cuando para Klayman y Ha (1987) se debe a que la hipótesis está anidada en la regla. Otra es dar como probabilidad a posteriori la tasa de aciertos de la prueba.

### Autoevaluación

**1.** Según el modelo de similitud-cobertura, ¿qué par de premisas apoya mejor una conclusión sobre «todos los mamíferos»?
a) Hipopótamos y rinocerontes
b) Hipopótamos y hámsteres
c) Rinocerontes y elefantes

**2.** En la tarea 2-4-6, la estrategia de prueba positiva falla sobre todo cuando la hipótesis del participante es…
a) más estrecha que la regla verdadera
b) más amplia que la regla verdadera
c) idéntica a la regla verdadera

**3.** Si un efecto aparece en el 60 % de los casos con la causa y en el 20 % sin ella, ΔP vale…
a) 0,8
b) 0,5
c) 0,4

**4.** En el problema de la mamografía de Gigerenzer y Hoffrage (1995), la probabilidad de cáncer tras un positivo es de alrededor del…
a) 80 %
b) 7,8 %
c) 9,6 %

**5.** Según Barbey y Sloman (2007), las frecuencias naturales ayudan porque…
a) la mente evolucionó para procesar solo recuentos
b) obligan a usar la fórmula de Bayes de forma explícita
c) hacen visible la relación de conjuntos anidados

### Soluciones

**1 b.** Son premisas diversas que cubren mejor la categoría; hipopótamos y rinocerontes se parecen demasiado. **2 a.** Si la hipótesis está dentro de la regla, todas sus pruebas positivas reciben «sí» y el error no aparece. **3 c.** ΔP = 0,6 − 0,2 = 0,4; 0,5 sería el poder causal de Cheng. **4 b.** Solo 8 de los 103 positivos tienen cáncer; 80 % es la tasa de aciertos y 9,6 %, la de falsos positivos. **5 c.** Esa es la explicación de los conjuntos anidados; la evolutiva corresponde a Gigerenzer.

## Unidad 12 · Razonar en contexto

**Objetivos:** explicar el razonamiento reflexivo como detección de conflicto e inhibición de la respuesta intuitiva; distinguir capacidad cognitiva y disposiciones de pensamiento; comparar la racionalidad acotada y la racionalidad ecológica con el programa de heurísticos y sesgos; valorar el papel de la cultura, la emoción y la función argumentativa del razonamiento.

### 12.1 Razonamiento reflexivo e inhibición

El **razonamiento reflexivo** es el uso deliberado del análisis y la inferencia para examinar una conclusión antes de aceptarla. Conviene distinguirlo del **pensamiento reflexivo** de Dewey (1910), que es más amplio: incluye cualquier examen cuidadoso de una creencia y sus fundamentos (Unidad 6). Todo razonamiento reflexivo es pensamiento reflexivo, pero no al revés: pensar con calma sobre una ruptura sentimental es reflexivo y no exige necesariamente evaluar argumentos.

Desde los modelos duales (Unidad 6), el razonamiento reflexivo corresponde a los procesos de **Tipo 2**. Evans y Stanovich (2013) señalan que su rasgo definitorio no es la lentitud ni la conciencia, sino el uso de la **memoria de trabajo** y el **desacoplamiento cognitivo**: la capacidad de mantener una representación aparte, como una suposición, y razonar sobre ella sin confundirla con la realidad.

Reflexionar suele implicar tres pasos:

1. **Detectar el conflicto** entre la respuesta que surge sola y alguna otra consideración.
2. **Inhibir** esa respuesta inicial para que no se emita de forma automática.
3. **Generar y evaluar** una alternativa con procesamiento de Tipo 2.

El paso 2 es el que mide el Test de Reflexión Cognitiva (Frederick, 2005): sus ítems despiertan una respuesta intuitiva errónea que hay que frenar (Unidad 6). Un ejemplo cotidiano: un cartel anuncia «3 × 2 en yogures» y el pack de cuatro sale más barato por unidad. La primera impresión dice que la oferta es mejor; solo quien se detiene a dividir comprueba lo contrario.

Dos hallazgos matizan este esquema. Primero, De Neys (2012) mostró que muchas personas **detectan el conflicto** aunque acaben respondiendo mal: tardan más y se sienten menos seguras en los problemas con conflicto que en los problemas de control. Habría, por tanto, una sensibilidad intuitiva a la lógica, y el fallo estaría más en la inhibición que en la detección. Segundo, Thompson, Prowse Turner y Pennycook (2011) hallaron que un **sentimiento de acierto** intenso ante la primera respuesta reduce la probabilidad de reconsiderarla. La decisión de reflexionar depende de una señal metacognitiva que no siempre es fiable (Unidad 6).

| Paso | Qué puede fallar | Ejemplo |
| --- | --- | --- |
| Detección | No se percibe que haya un problema | Aceptar el titular sin notar que no cuadra con otro dato |
| Inhibición | Se percibe, pero la respuesta intuitiva se impone | «Algo no me encaja, pero firmo igual» |
| Alternativa | Se frena, pero no se sabe construir la respuesta correcta | Querer calcular la probabilidad y no saber cómo |

Reflexionar no garantiza acertar. El razonamiento de Tipo 2 también puede usarse para justificar una idea ya decidida (apartado 12.4). Y las intuiciones de una persona experta en su campo son a menudo correctas.

¿Se puede entrenar? Hay datos favorables, aunque modestos. La instrucción en pensamiento crítico tiene un efecto medio de g+ = 0,30 (Abrami et al., 2015), y la consigna de **considerar lo contrario** reduce algunos sesgos de juicio (Lord, Lepper y Preston, 1984). La transferencia a contextos nuevos no es automática: hay que practicarla de forma explícita (Unidad 7).

### 12.2 Disposiciones de pensamiento

Saber razonar y tender a hacerlo son cosas distintas. Stanovich lo formula separando dos niveles dentro de los procesos de Tipo 2. La **mente algorítmica** es la **capacidad**: la eficacia con que se mantiene información en la memoria de trabajo, se desacoplan representaciones y se ejecutan cálculos. Es lo que miden los tests de inteligencia. La **mente reflexiva** son las **disposiciones de pensamiento**: la tendencia a buscar más información, a dudar de la primera respuesta y a ajustar las creencias a la evidencia. Es la que decide si la capacidad se pone en marcha.

| Nivel | Qué es | Cómo se mide | Fallo típico |
| --- | --- | --- | --- |
| Mente autónoma (Tipo 1) | Procesos rápidos que no requieren memoria de trabajo | Tareas de respuesta automática | Respuesta intuitiva inadecuada |
| Mente algorítmica | Capacidad de cómputo y desacoplamiento | Tests de inteligencia | No saber resolver aunque se intente |
| Mente reflexiva | Disposiciones de pensamiento | Escalas de estilos de pensamiento, CRT | No intentar resolverlo |

Una disposición muy estudiada es el **pensamiento activamente abierto** (Baron; Stanovich y West): buscar razones en contra de la propia postura, dar a la evidencia contraria el mismo peso que a la favorable y estar dispuesto a cambiar de opinión. No es lo mismo que no tener opiniones. Quien piensa de forma activamente abierta puede defender una postura firme, pero sabe qué dato le haría cambiarla.

La consecuencia más importante de esta distinción es que muchos **sesgos son relativamente independientes de la capacidad cognitiva**. Si la tarea no avisa de que hay que razonar, una persona muy capaz puede responder con la misma intuición que cualquiera, simplemente porque no ha activado su capacidad. Lo que marca la diferencia en esos casos son las disposiciones. Por eso el CRT predice el rendimiento en tareas de razonamiento aunque no sea un test de inteligencia sin más: capta la tendencia a frenar la primera respuesta (Unidad 6).

Un ejemplo: dos estudiantes con notas parecidas en matemáticas leen un estudio que relaciona un alimento con la longevidad. Uno lo comparte enseguida; la otra se pregunta cuántas personas participaron y si había un grupo de comparación. No difieren en capacidad, sino en disposición.

Las disposiciones tienen dos ventajas prácticas. Pueden **cultivarse** con hábitos concretos: preguntarse «¿qué me haría cambiar de opinión?», buscar a propósito una fuente que defienda lo contrario o dejar pasar un tiempo antes de dar por buena una conclusión importante. Y ayudan a entender por qué la formación técnica no inmuniza contra los errores de juicio: un título universitario aporta conocimientos y capacidad, pero no garantiza el hábito de usarlos cuando la tarea no avisa de que hace falta. La relación entre inteligencia, estilos de pensamiento y rendimiento se trata con más detalle en Psicología Diferencial.

### 12.3 Racionalidad acotada y racionalidad ecológica

¿Qué significa razonar bien? La respuesta clásica es **normativa**: razonar bien es ajustarse a la lógica y a la teoría de la probabilidad (Unidad 9). Las Unidades 9 a 11 han mostrado que las personas se apartan a menudo de esas normas. Hay dos maneras de interpretar ese desajuste.

**Racionalidad acotada.** Simon (1955) argumentó que la norma ideal supone un agente con información completa, tiempo ilimitado y capacidad de cálculo infinita. Ningún ser humano cumple esas condiciones. Las personas tienen una **racionalidad acotada**: razonan y deciden lo mejor que pueden con recursos limitados, y a menudo buscan una opción **suficientemente buena** en lugar de la óptima (estrategia de satisfacción, Unidad 15).

A partir de aquí, dos programas de investigación tomaron caminos distintos:

| Rasgo | Heurísticos y sesgos | Heurísticos rápidos y frugales |
| --- | --- | --- |
| Autores de referencia | Tversky y Kahneman (1974) | Gigerenzer y Goldstein (1996) |
| Pregunta | ¿En qué se aparta el juicio de la norma? | ¿Cuándo funciona bien un atajo? |
| Heurísticos | Fuente de errores sistemáticos | Herramientas adaptadas a ciertos entornos |
| Criterio de éxito | Coherencia con la lógica y la probabilidad | Precisión y rapidez en el entorno real |
| Ejemplo de estudio | Falacia de la conjunción (Unidad 7) | Decidir con una sola señal válida |

**Racionalidad ecológica.** Gigerenzer y Goldstein (1996) mostraron que reglas muy simples pueden ser tan precisas como métodos que integran toda la información. El heurístico **tomar el mejor** ordena las señales según su validez, las examina una a una y decide con la primera que discrimina entre las opciones, sin mirar las demás. El **heurístico de reconocimiento** elige la opción que se reconoce cuando la otra no se reconoce. Estas reglas funcionan cuando están **ajustadas a la estructura del entorno**: el reconocimiento ayuda si lo conocido tiende a ser también lo mayor o lo mejor. Esa correspondencia entre la regla y el entorno es la **racionalidad ecológica**.

Un ejemplo: en una ciudad desconocida, elegir entre dos restaurantes por cuál tiene más gente dentro es un atajo razonable. Funciona porque la afluencia suele reflejar la calidad. Deja de funcionar en una calle turística donde todos están llenos por su ubicación.

Las dos posturas comparten más de lo que parece. Ambas aceptan que se usan atajos y que estos pueden fallar. Difieren en el énfasis: dónde se equivoca la mente o por qué acierta tan a menudo. La discusión se extiende a la arquitectura del pensamiento: Kruglanski y Gigerenzer (2011) defienden que intuición y deliberación siguen las mismas reglas, frente a los modelos de dos tipos de procesos (Unidad 6). El efecto de las frecuencias naturales (Unidad 11) es un argumento a favor de la visión ecológica: el formato habitual de la información en el entorno mejora el rendimiento.

### 12.4 Cultura, emoción y teoría argumentativa

El razonamiento no ocurre en el vacío. Los objetivos, el conocimiento previo, las emociones, la cultura y la situación social influyen en qué se razona y cómo.

**Cultura.** Nisbett, Peng, Choi y Norenzayan (2001) propusieron que las culturas de Asia oriental favorecen un estilo de pensamiento **holístico**, atento al contexto, a las relaciones y a la tolerancia de la contradicción, y que las culturas occidentales favorecen un estilo **analítico**, centrado en los objetos, las categorías y las reglas formales. La propuesta es influyente y está en **debate**: agrupa culturas muy diversas en dos bloques, la variación dentro de cada cultura es grande y los estilos cambian con la situación. Que la lengua y la cultura modulen el pensamiento no supone que lo determinen (Unidad 5).

**Emoción.** Las emociones no son solo ruido para el razonamiento. Pueden informar de lo que importa y orientar la elección cuando el análisis completo es imposible. La hipótesis del **marcador somático** de Damasio sostiene que las señales corporales asociadas a experiencias pasadas guían la decisión; sus apoyos y críticas se estudian en la Unidad 16 y en Motivación y Emoción. En el juicio moral, Haidt (2001) defiende que la intuición llega primero y el razonamiento sirve después para justificarla (Unidad 8). Las emociones también pueden sesgar: es más fácil aceptar una conclusión que agrada, en línea con el sesgo de creencia (Unidad 9).

**Teoría argumentativa.** Mercier y Sperber (2011) proponen un cambio de perspectiva. La función principal del razonamiento no sería buscar la verdad en solitario, sino **producir argumentos** para convencer a otros y **evaluar** los argumentos que otros presentan. Desde esta teoría, varios «defectos» cobran sentido:

- El **sesgo de confirmación** en la producción de argumentos es esperable: quien defiende una postura busca razones a su favor.
- Las personas son más exigentes al **evaluar** los argumentos ajenos que al producir los propios.
- El razonamiento debería funcionar mejor en el **diálogo** entre personas que discrepan, donde cada parte critica las razones de la otra.
- Cuando todos piensan igual, el intercambio solo aporta argumentos a favor, y las posturas pueden radicalizarse. La polarización grupal y el pensamiento grupal se estudian en Psicología Social.

| Enfoque | Para qué sirve razonar | Cómo ve el sesgo de confirmación |
| --- | --- | --- |
| Normativo clásico | Llegar a conclusiones verdaderas | Un error que hay que corregir |
| Teoría argumentativa | Convencer y evaluar argumentos ajenos | Un rasgo esperable al argumentar |

La teoría es sugerente y está en **debate**: explica bien muchos datos ya conocidos, y se discute cuánto añade a otras explicaciones y si el razonamiento individual queda reducido a un papel secundario. Su consecuencia práctica es clara: una buena forma de mejorar el razonamiento es exponer las ideas a la crítica de otras personas. Un trabajo de grupo en el que alguien asume el papel de llevar la contraria suele detectar fallos que nadie habría visto en solitario.

### Consenso y debate

**Consenso:** reflexionar exige detectar el conflicto e inhibir la respuesta intuitiva, y la sensación de acierto influye en si se reconsidera (Thompson et al., 2011). Capacidad cognitiva y disposiciones de pensamiento son dimensiones distintas, y muchos sesgos dependen más de las segundas. Los heurísticos simples pueden ser precisos cuando se ajustan a la estructura del entorno (Gigerenzer y Goldstein, 1996).

**Debate:** si intuición y deliberación son dos tipos de procesos o uno solo (Kruglanski y Gigerenzer, 2011), si la diferencia entre pensamiento holístico y analítico es tan general como se propuso (Nisbett et al., 2001) y cuánto explica la teoría argumentativa (Mercier y Sperber, 2011).

### Mito frecuente

**Mito:** «El sesgo de confirmación demuestra que el razonamiento humano está mal diseñado».

**Realidad:** si la función principal del razonamiento es producir argumentos y evaluar los ajenos, buscar razones a favor de la propia postura es esperable, y en el diálogo entre personas que discrepan cada parte corrige lo que a la otra se le escapa (Mercier y Sperber, 2011). Además, la prueba positiva es un heurístico razonable en muchos entornos (Klayman y Ha, 1987), y desde la racionalidad ecológica un atajo se valora por su ajuste al entorno, no solo por su distancia a la norma (Gigerenzer y Goldstein, 1996). El sesgo es real y tiene costes, sobre todo al razonar en solitario o entre quienes piensan igual, pero no prueba un diseño defectuoso.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Razonamiento reflexivo | Examen deliberado de una conclusión mediante análisis e inferencia antes de aceptarla |
| Desacoplamiento cognitivo | Mantener una representación aparte de la realidad para razonar sobre ella (Tipo 2) |
| Detección de conflicto | Percepción, a veces implícita, de que la respuesta intuitiva choca con otra consideración |
| Mente reflexiva | Nivel de las disposiciones de pensamiento que decide si se usa la capacidad (Stanovich) |
| Pensamiento activamente abierto | Disposición a buscar y ponderar razones contrarias y a cambiar de opinión |
| Racionalidad acotada | Razonar y decidir con información, tiempo y capacidad de cálculo limitados (Simon, 1955) |
| Racionalidad ecológica | Ajuste entre un heurístico y la estructura del entorno en que se aplica |
| Teoría argumentativa | El razonamiento sirve para producir y evaluar argumentos (Mercier y Sperber, 2011) |

### Clave PIR

**Prioridad media.** Se pregunta la distinción entre mente algorítmica y mente reflexiva, qué es la racionalidad acotada y la ecológica, y qué propone la teoría argumentativa. Trampa típica: suponer que la inteligencia protege por sí sola de los sesgos, o atribuir a Gigerenzer la visión de los heurísticos como fuente de errores, que corresponde al programa de Tversky y Kahneman. También se confunde la racionalidad acotada de Simon con la irracionalidad.

### Autoevaluación

**1.** Según De Neys (2012), muchas personas que fallan en problemas con conflicto…
a) no muestran ningún indicio de haber detectado el conflicto
b) tardan más y se sienten menos seguras que en los problemas de control
c) responden más deprisa que en los problemas de control

**2.** En la propuesta de Stanovich, la tendencia a dudar de la primera respuesta corresponde a…
a) la mente algorítmica
b) la mente autónoma
c) la mente reflexiva

**3.** El heurístico «tomar el mejor» consiste en…
a) decidir con la primera señal válida que discrimina
b) sumar todas las señales disponibles con su peso
c) elegir siempre la opción que se reconoce peor

**4.** La racionalidad acotada de Simon (1955) sostiene que las personas…
a) son irracionales porque se apartan de la lógica
b) deciden con información, tiempo y cálculo limitados
c) siempre encuentran la opción óptima si se esfuerzan

**5.** Según la teoría argumentativa de Mercier y Sperber (2011), el razonamiento debería funcionar mejor…
a) en solitario y sin distracciones
b) en grupos donde todos están de acuerdo
c) en el diálogo entre personas que discrepan

### Soluciones

**1 b.** La latencia y la menor confianza indican que el conflicto se detecta aunque se responda mal. **2 c.** Las disposiciones de pensamiento forman la mente reflexiva; la algorítmica es la capacidad. **3 a.** Examina las señales por orden de validez y se detiene en la primera que discrimina. **4 b.** No es irracionalidad, sino razonar lo mejor posible con recursos limitados. **5 c.** Cada parte critica las razones de la otra; en grupos homogéneos las posturas pueden radicalizarse.
