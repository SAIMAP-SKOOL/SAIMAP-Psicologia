# Capítulo 2 · La estadística después de la crisis de replicación

Desde comienzos de la década de 2010, varios proyectos de réplica a gran escala mostraron que una parte importante de los resultados publicados en psicología no se reproducía con datos nuevos. Este capítulo explica qué revelaron esas réplicas, qué prácticas inflan los falsos positivos y qué reformas se proponen, y presenta dos herramientas que completan al valor p: las pruebas de equivalencia y los factores de Bayes.

## Unidad 5 · La crisis de replicación y la ciencia abierta

**Objetivos:** describir qué revelaron las grandes réplicas de la psicología y cómo leer sus cifras; explicar cómo el p-hacking, el HARKing y la flexibilidad analítica inflan los falsos positivos; conocer el preregistro, los informes registrados y los datos abiertos como remedios; valorar las propuestas sobre el umbral de significación.

### 5.1 Qué revelaron las grandes réplicas

Un resultado científico gana credibilidad cuando se **replica**: otro equipo repite el estudio con el mismo método y participantes nuevos, y obtiene un resultado compatible. En una **réplica directa** se reproduce el procedimiento lo más fielmente posible; en una **réplica conceptual** se pone a prueba la misma hipótesis con otro método. Durante décadas, las réplicas directas fueron raras en psicología porque las revistas preferían resultados nuevos.

El trabajo que hizo visible el problema fue el **Proyecto de Reproducibilidad** (Open Science Collaboration, 2015). Se repitieron 100 estudios publicados en 2008 en tres revistas de psicología. Ya se presentó en Fundamentos de Estadística; aquí interesa leer sus cifras con detalle.

| Indicador | Resultado |
| --- | --- |
| Estudios originales con p < 0,05 | 97 % |
| Réplicas con p < 0,05 | 36 % (35 de 97) |
| Efecto original dentro del IC 95 % de la réplica | 47 % |
| Equipos que consideraron que el efecto «se replicó» | 39 % |
| Tamaño del efecto medio, en r | 0,403 en el original; 0,197 en la réplica |
| Original y réplica combinados, con p < 0,05 | 68 % |

![m](osc-2015.png)

Figura 5.1. **Resultados del Proyecto de Reproducibilidad.** El panel A compara el porcentaje de estudios originales significativos (97 %) con el de réplicas significativas (36 %). El panel B muestra que el tamaño del efecto medio se redujo a la mitad, de r = 0,403 a r = 0,197. Datos de Open Science Collaboration (2015). Elaboración propia (SAIMAP).

Como muestra la figura 5.1, el dato más citado es el salto del 97 % al 36 %, pero el más informativo es el panel B: **los efectos de las réplicas fueron, de media, la mitad de grandes** que los originales. Que una réplica no alcance p < 0,05 no demuestra que el efecto sea nulo, porque la réplica puede tener poca potencia. Que los efectos se reduzcan de forma sistemática sí indica que muchos originales **sobrestimaban** su magnitud.

¿Por qué ocurre esa sobrestimación? Si los estudios tienen poca potencia (Unidad 3) y solo se publican los significativos, solo superan el filtro las muestras que, por azar, dieron efectos grandes. La literatura publicada queda así formada por los «golpes de suerte» de muchos estudios pequeños.

El segundo gran proyecto fue **Many Labs 2** (Klein et al., 2018). Se replicaron 28 efectos en 125 muestras de 36 países, con N = 15.305. Sus resultados:

- 15 de los 28 efectos (54 %) fueron significativos con p < 0,05, y 14 (50 %) con p < 0,0001.
- La mediana del tamaño del efecto pasó de d = 0,60 en los originales a d = 0,15 en las réplicas.
- 21 de los 28 efectos (75 %) fueron menores que en el estudio original.
- La variación de los resultados entre muestras fue pequeña.

Este último dato importa: hace menos probable que los fracasos de réplica se deban a detalles del contexto de cada laboratorio o país.

Ninguna cifra única resume la «tasa de replicación»: depende del criterio. Lo consistente entre proyectos es el patrón: **efectos menores de lo publicado y muchos resultados frágiles**.

### 5.2 p-hacking, HARKing y grados de libertad del investigador

Entre la recogida de datos y el artículo publicado hay muchas decisiones: qué variables analizar, cuándo dejar de recoger participantes, qué casos excluir, qué covariables incluir, qué condiciones comparar. Simmons, Nelson y Simonsohn (2011) llamaron a este margen **grados de libertad del investigador**. Ninguna de estas decisiones es fraudulenta por sí sola. El problema aparece cuando se toman **después de ver los datos** y se eligen las que dan un resultado significativo.

Las **prácticas de investigación cuestionables** más conocidas son:

- **p-hacking**: probar varios análisis y comunicar solo el que da p < 0,05.
- **Parada opcional**: mirar los datos cada pocos participantes y detener la recogida en cuanto el resultado es significativo.
- **HARKing** (*Hypothesizing After the Results are Known*; Kerr, 1998): presentar como hipótesis previa lo que se descubrió al explorar los datos.
- **Sesgo de publicación** o efecto **cajón de archivo**: los estudios no significativos no se envían o no se publican, y la literatura solo muestra una parte sesgada de lo investigado.

Simmons et al. (2011) cuantificaron el efecto de esta flexibilidad con una simulación de 15.000 muestras. Generaron dos condiciones con 20 observaciones por celda y **sin ningún efecto real**: cualquier resultado significativo era, por tanto, un falso positivo. Con un único análisis fijado de antemano, la tasa era la nominal, del 5 %. Después introdujeron cuatro decisiones flexibles: (A) analizar dos variables dependientes correlacionadas (r = 0,50) y quedarse con la que funcione; (B) añadir 10 observaciones por celda si el primer análisis no es significativo; (C) controlar el sexo o su interacción con el tratamiento; (D) eliminar o no una de tres condiciones.

![m](simmons-2011.png)

Figura 5.2. **Tasa de falsos positivos según la flexibilidad analítica.** Sin flexibilidad, el 5 %; cada decisión por separado la eleva hasta el 7,7–12,6 %, y combinando las cuatro llega al 60,7 %. Datos de Simmons, Nelson y Simonsohn (2011), simulación sin efecto real. Elaboración propia (SAIMAP).

Como muestra la figura 5.2, cada decisión aislada parece inocente: ninguna supera el 12,6 %. Combinadas, el efecto se multiplica: A y B juntas dan un 14,4 %; A, B y C, un 30,9 %, y las cuatro, un **60,7 %**. Con suficiente flexibilidad, encontrar un resultado «significativo» en datos sin efecto es más probable que no encontrarlo.

Un ejemplo cotidiano. Una estudiante prepara su TFG sobre el uso del móvil antes de dormir y la calidad del sueño. Pasa tres cuestionarios de sueño, recoge 40 personas y no obtiene nada; recoge 20 más y repite el análisis; prueba a excluir a quienes trabajan de noche y a controlar la edad. Al final, uno de los cuestionarios da p = 0,04, y ese es el que aparece en la memoria, presentado como la hipótesis inicial. No ha mentido en ningún dato, pero el valor p que comunica ya no significa lo que dice: el 5 % de error tipo I solo vale si el análisis estaba fijado de antemano.

Simmons et al. (2011) propusieron seis requisitos para los autores y cuatro pautas para los revisores. Entre ellos, tener al menos 20 observaciones por celda e **informar de todas las variables y condiciones**, incluidas las que no dieron resultado.

### 5.3 Preregistro, informes registrados y datos abiertos

Las propuestas de reforma comparten una idea: **separar lo que se decidió antes de ver los datos de lo que se decidió después**, y hacer visible todo el proceso. Ese conjunto de prácticas se conoce como **ciencia abierta**.

**Preregistro.** Consiste en depositar, antes de recoger o analizar los datos, un documento con fecha que fija las hipótesis, el tamaño muestral y su justificación, las variables, los criterios de exclusión y el plan de análisis. Las plataformas más usadas son OSF y AsPredicted. El preregistro no prohíbe explorar: obliga a **etiquetar** qué análisis eran confirmatorios y cuáles exploratorios, tal como piden los estándares JARS-Quant (Unidad 1). Lo que se descubre explorando es una hipótesis para el siguiente estudio, no una confirmación. Los aspectos de diseño del preregistro se tratan en Métodos y Diseños de Investigación.

**Informes registrados.** Van un paso más allá. El artículo se revisa en dos fases. En la primera, la revista evalúa la introducción, el método y el plan de análisis **antes de que existan los datos**; si los aprueba, se compromete a publicar el trabajo sea cual sea el resultado, siempre que se siga el protocolo. En la segunda, se revisa que el estudio se haya hecho como se anunció. Así se corta el sesgo de publicación de raíz: la decisión editorial ya no depende de que p sea menor que 0,05.

**Datos, materiales y código abiertos.** Publicar los datos anonimizados, los instrumentos y la sintaxis del análisis permite que otros comprueben los resultados, detecten errores y reutilicen el material. Es la base de la **reproducibilidad computacional** (obtener los mismos números con los mismos datos) y de los principios FAIR, vistos en la Unidad 1. Las **directrices TOP** sirven para que las revistas declaren qué grado de transparencia exigen.

**Acumular evidencia.** Ningún estudio aislado es definitivo. Los **metaanálisis** combinan los tamaños del efecto de muchos estudios, y las **réplicas multilaboratorio**, como Many Labs 2, reúnen muestras grandes y diversas con un protocolo común.

| Problema | Remedio principal | Qué consigue |
| --- | --- | --- |
| p-hacking y parada opcional | Preregistro del plan de análisis y de la regla de parada | El error tipo I vuelve a ser el nominal |
| HARKing | Preregistro de hipótesis | Distingue confirmación de exploración |
| Sesgo de publicación | Informes registrados | Se publica con independencia del resultado |
| Errores de cálculo o de codificación | Datos y código abiertos | Otros pueden verificar los resultados |
| Baja potencia | Análisis de potencia a priori; réplicas multilaboratorio | Estudios capaces de detectar el efecto |

Conviene no convertir estas herramientas en un nuevo ritual. Un preregistro vago («analizaremos los datos con la prueba adecuada») deja casi la misma flexibilidad que no tenerlo. Desviarse de él no es un fraude si se declara y se justifica; lo problemático es ocultarlo.

Un ejemplo de preregistro breve para el TFG del apartado anterior: «Hipótesis: quienes usan el móvil más de 30 minutos antes de dormir tendrán peor calidad del sueño. VD: puntuación total de un único cuestionario, fijado de antemano. N = 64 por grupo, calculado para d = 0,5 con potencia 0,80. Se excluirán quienes trabajen en turno de noche. Análisis: t de Welch bilateral, con d y su IC 95 %».

### 5.4 El debate sobre el umbral de significación

Fundamentos de Estadística presentó en pocas líneas el debate sobre α = 0,05. Aquí se exponen los argumentos de cada postura.

**El punto de partida.** En 2016, la American Statistical Association publicó una declaración con seis principios sobre el valor p (Wasserstein y Lazar, 2016). Entre ellos: p indica lo incompatibles que son los datos con un modelo, no mide la probabilidad de que la hipótesis sea cierta, no mide el tamaño ni la importancia del efecto y las decisiones no deben basarse solo en si cruza un umbral. Greenland et al. (2016) recopilaron 25 interpretaciones erróneas habituales de p, los IC y la potencia. Gigerenzer (2004, 2018) describió el uso mecánico de p < 0,05 como un **ritual**: un híbrido entre Fisher y Neyman-Pearson que se aplica sin pensar (Unidad 2).

**Propuesta 1: un umbral más exigente.** Benjamin et al. (2018), un grupo de 72 autores, propusieron usar **p < 0,005** para afirmar «nuevos descubrimientos» y considerar «sugerentes» los resultados entre 0,005 y 0,05. Sus argumentos:

- Un p = 0,005 bilateral corresponde, aproximadamente, a un factor de Bayes de entre 14 y 26 a favor de H₁, una evidencia mucho más sólida que la de p = 0,05 (Unidad 6).
- En el Proyecto de Reproducibilidad se replicó el 50 % de los estudios con p original < 0,005, frente al 24 % de los que tenían p entre 0,005 y 0,05.
- El coste es asumible: mantener una potencia de 0,80 exigiría alrededor de un 70 % más de muestra. Para d = 0,5 en dos grupos independientes, se pasa de 64 a 109 personas por grupo.

La lógica puede verse con un cálculo ilustrativo. Supongamos 1.000 hipótesis puestas a prueba, de las que solo el 10 % son verdaderas.

| Escenario | Positivos verdaderos | Falsos positivos | Proporción de significativos que son falsos |
| --- | --- | --- | --- |
| α = 0,05; potencia 0,35 | 35 | 45 | 56 % |
| α = 0,05; potencia 0,80 | 80 | 45 | 36 % |
| α = 0,005; potencia 0,80 | 80 | 4,5 | 5 % |

Con poca potencia y α = 0,05, más de la mitad de los resultados significativos serían falsos. Las cifras dependen de los supuestos, pero el razonamiento es el de Ioannidis (2005): con poca potencia y muchas hipótesis falsas, buena parte de lo publicado puede ser falso.

**Propuesta 2: justificar α.** Lakens et al. (2018) respondieron que ningún umbral universal sirve para todo. Un estudio exploratorio barato y un ensayo que decidirá un tratamiento no tienen los mismos costes de error. Cada investigación debería **justificar su α**, y su potencia, según las consecuencias de los errores tipo I y II.

**Propuesta 3: dejar de dicotomizar.** Wasserstein, Schirm y Lazar (2019), en un editorial que acompañaba a 43 artículos, recomendaron **abandonar la expresión «estadísticamente significativo»** e informar p como una medida continua, junto con estimaciones e incertidumbre. Lo resumieron en la fórmula **ATOM**: aceptar la incertidumbre y ser reflexivo, abierto y modesto.

Las tres posturas coinciden más de lo que parece: ninguna defiende seguir usando p < 0,05 como único criterio. Lo que se discute es si conviene cambiar el umbral, adaptarlo o prescindir de él. En la práctica actual, el mínimo exigible es informar p exacto, el tamaño del efecto con su IC y no leer p > 0,05 como prueba de que no hay efecto.

### Consenso y debate

**Consenso:** las grandes réplicas mostraron efectos de media mucho menores que los publicados (Open Science Collaboration, 2015; Klein et al., 2018). La flexibilidad analítica no declarada infla mucho el error tipo I (Simmons et al., 2011). El preregistro, los informes registrados, los datos abiertos y los análisis de potencia a priori reducen estos problemas, y p no debe ser el único criterio para decidir (Wasserstein y Lazar, 2016).

**Debate:** qué tasa de replicación es «aceptable» y qué criterio usar para medirla. Si conviene un umbral más estricto (Benjamin et al., 2018), un α justificado en cada estudio (Lakens et al., 2018) o abandonar la etiqueta «estadísticamente significativo» (Wasserstein et al., 2019).

### Mito frecuente

**Mito:** «Si la réplica de un estudio no es significativa, queda demostrado que el efecto original no existe».

**Realidad:** p > 0,05 no demuestra la ausencia de efecto: la ausencia de evidencia no es evidencia de ausencia. Una réplica no significativa puede deberse a poca potencia. En el Proyecto de Reproducibilidad, el 47 % de los efectos originales caía dentro del IC 95 % de su réplica, y combinando ambos estudios el 68 % era significativo (Open Science Collaboration, 2015). Para afirmar que un efecto es nulo o despreciable hacen falta IC, pruebas de equivalencia (Lakens, 2017) o factores de Bayes a favor de H₀ (Unidad 6).

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Réplica directa | Repetición de un estudio con el mismo método y participantes nuevos |
| Grados de libertad del investigador | Decisiones de recogida y análisis que pueden tomarse tras ver los datos |
| p-hacking | Probar varios análisis y comunicar solo el que resulta significativo |
| HARKing | Presentar como hipótesis previa lo hallado al explorar los datos (Kerr, 1998) |
| Parada opcional | Detener la recogida de datos en cuanto el resultado es significativo |
| Sesgo de publicación | Publicación preferente de resultados significativos, que distorsiona la literatura |
| Preregistro | Documento con fecha que fija hipótesis, muestra y análisis antes de los datos |
| Informe registrado | Artículo revisado y aceptado antes de recoger los datos, sea cual sea el resultado |

### Clave PIR

**Prioridad baja.** La ciencia abierta aparece poco en el PIR, pero sus ideas sostienen preguntas de prioridad alta: qué significa p, qué implica p > 0,05 y por qué la significación no equivale a relevancia. Puede preguntarse qué práctica describe un caso (HARKing, parada opcional) o qué remedio corresponde a cada problema. Trampas típicas: creer que una réplica no significativa prueba que el efecto es falso y confundir preregistro con informe registrado.

### Autoevaluación

**1.** En el Proyecto de Reproducibilidad (Open Science Collaboration, 2015), el tamaño del efecto medio…
a) se mantuvo casi igual en las réplicas
b) se redujo aproximadamente a la mitad
c) aumentó al usar muestras más grandes

**2.** Un investigador analiza los datos cada 10 participantes y detiene la recogida al obtener p < 0,05. Esta práctica se llama…
a) HARKing
b) informe registrado
c) parada opcional

**3.** En la simulación de Simmons et al. (2011), sin efecto real, combinar las cuatro decisiones flexibles elevó la tasa de falsos positivos a…
a) un 60,7 %
b) un 12,6 %
c) un 30,9 %

**4.** ¿Qué rasgo distingue a un informe registrado de un preregistro simple?
a) Solo el informe registrado declara las hipótesis antes de recoger los datos
b) La revista acepta el trabajo antes de los datos, sea cual sea el resultado
c) El informe registrado prohíbe incluir cualquier análisis exploratorio

**5.** Señale la afirmación INCORRECTA sobre la propuesta de Benjamin et al. (2018).
a) Propone p < 0,005 para afirmar nuevos descubrimientos
b) Exigiría alrededor de un 70 % más de muestra para mantener la potencia
c) Propone eliminar los valores p de los artículos científicos

### Soluciones

**1 b.** Pasó de r = 0,403 a r = 0,197, lo que indica que los originales sobrestimaban los efectos. **2 c.** Detener la recogida según el resultado infla el error tipo I. **3 a.** Cada decisión por separado no pasaba del 12,6 %, y la combinación de tres daba un 30,9 %. **4 b.** Ambos fijan hipótesis y análisis antes; el informe registrado añade la aceptación previa, que corta el sesgo de publicación. **5 c.** Benjamin et al. proponen cambiar el umbral, no eliminar p; abandonar la etiqueta «significativo» es la propuesta de Wasserstein et al. (2019).

## Unidad 6 · Más allá del valor p: equivalencia y factores de Bayes

**Objetivos:** aplicar e interpretar una prueba de equivalencia TOST con sus límites de equivalencia; explicar la lógica bayesiana de actualización de la creencia previa a la posterior; calcular e interpretar factores de Bayes y odds posteriores; leer en paralelo un análisis frecuentista y uno bayesiano en JASP o jamovi.

### 6.1 Afirmar la ausencia de un efecto relevante: pruebas TOST

Si p > 0,05, el contraste clásico no permite concluir que el efecto sea nulo: quizá existe y faltó potencia. Sin embargo, muchas preguntas de investigación buscan justamente eso: ¿un examen en línea da notas **equivalentes** a uno presencial?, ¿una versión breve de un tratamiento funciona **igual de bien** que la completa?

Las **pruebas de equivalencia** invierten el planteamiento. Primero se fija el **menor efecto de interés** (SESOI, *smallest effect size of interest*): la diferencia por debajo de la cual el efecto se considera despreciable. Esa cantidad define unos **límites de equivalencia**, −Δ y +Δ. Después se contrasta si el efecto real es menor que esos límites.

El procedimiento más usado es el **TOST** (*two one-sided tests*; Lakens, 2017), que realiza dos contrastes unilaterales:

> H₀₁: diferencia ≤ −Δ   frente a   H₁₁: diferencia > −Δ

> H₀₂: diferencia ≥ +Δ   frente a   H₁₂: diferencia < +Δ

> t₁ = (dif + Δ) / ET     t₂ = (dif − Δ) / ET

Si se rechazan **las dos** hipótesis nulas, el efecto queda dentro de los límites y se concluye equivalencia. El valor p del TOST es el mayor de los dos. Hay una forma equivalente y más visual de decidir: se calcula el **IC al 90 %** de la diferencia y se comprueba si cae entero dentro de (−Δ, +Δ). Se usa el 90 % porque cada prueba es unilateral con α = 0,05.

**Un ejemplo** (datos ficticios). Un departamento compara las notas de 100 estudiantes examinados en línea (M = 6,9; DT = 1,2) con las de 100 examinados de forma presencial (M = 6,8; DT = 1,2). Antes de recoger datos fija Δ = 0,5 puntos: una diferencia menor no cambiaría ninguna decisión académica.

| Análisis | Resultado |
| --- | --- |
| Diferencia y error típico | 0,10; ET = 0,17 |
| t clásica (H₀: diferencia = 0) | t(198) = 0,59; p = 0,556 |
| Prueba contra −0,5 | t(198) = 3,54; p < 0,001 |
| Prueba contra +0,5 | t(198) = −2,36; p = 0,010 |
| IC 90 % de la diferencia | [−0,18; 0,38] |

La prueba clásica no es significativa, lo que por sí solo no permite concluir nada. El TOST sí: las dos pruebas unilaterales son significativas (p del TOST = 0,010) y el IC 90 % queda dentro de (−0,5; 0,5). Se concluye que las notas son **equivalentes** en la escala que el departamento considera relevante.

![m](tost.png)

Figura 6.1. **Cuatro resultados posibles al combinar el contraste clásico y el de equivalencia.** Cada línea es un IC 90 % frente a los límites −Δ y +Δ (zona sombreada): equivalente y no diferente; diferente y no equivalente; diferente pero equivalente (efecto trivial); e indeterminado, cuando el intervalo es tan ancho que contiene el 0 y sobrepasa los límites. Esquema ilustrativo. Elaboración propia (SAIMAP).

Como muestra la figura 6.1, combinar ambas pruebas da cuatro resultados. El tercero aclara la diferencia entre significación y relevancia: con muestras muy grandes, un efecto puede ser distinto de 0 y, a la vez, demasiado pequeño para importar. El cuarto, típico de estudios pequeños, no permite afirmar nada.

La parte más delicada es **elegir Δ**. Puede basarse en un criterio clínico (la diferencia mínima que un paciente notaría; ver Evaluación Psicológica) o en un argumento teórico, en unidades brutas o en d. En todo caso, debe justificarse **antes** de ver los datos, idealmente en el preregistro. Fijar Δ después permite «demostrar» la equivalencia que se desee.

### 6.2 La lógica bayesiana: de la creencia previa a la posterior

El enfoque frecuentista trata la probabilidad como la frecuencia a largo plazo de un procedimiento. El enfoque **bayesiano** la entiende como un **grado de creencia** que se actualiza con los datos. La herramienta es el teorema de Bayes, que en Fundamentos de Estadística se aplicó a las pruebas diagnósticas. Aplicado a hipótesis:

> P(H | datos) ∝ P(datos | H) × P(H)

> posterior ∝ verosimilitud × priori

- La **probabilidad previa** (priori), P(H), expresa lo plausible que era la hipótesis antes del estudio.
- La **verosimilitud**, P(datos | H), indica lo probables que son los datos observados si la hipótesis fuera cierta.
- La **probabilidad posterior**, P(H | datos), es la creencia actualizada.

El contraste con p es directo. El valor p es una probabilidad de los datos suponiendo H₀; la posterior es una probabilidad de la hipótesis dados los datos. Son cosas distintas, y confundirlas es el error más frecuente al leer p (Unidad 2).

Con dos hipótesis, el teorema se escribe de forma cómoda con **odds** (razón entre probabilidades):

> odds posteriores = [P(datos | H₁) / P(datos | H₀)] × odds previas

**Un minicaso** (cifras ficticias). Dos equipos evalúan el mismo resultado: los datos son 0,30 de probables si un programa de tutorías mejora el rendimiento (H₁) y 0,05 si no lo mejora (H₀). La razón de verosimilitudes es 0,30 / 0,05 = 6.

| Equipo | P(H₁) previa | Odds previas | Odds posteriores | P(H₁) posterior |
| --- | --- | --- | --- | --- |
| Neutral | 0,50 | 1 | 6 | 0,86 |
| Escéptico | 0,10 | 0,11 | 0,67 | 0,40 |

Los mismos datos aumentan la creencia en H₁ en ambos casos, pero el equipo escéptico termina por debajo de 0,50. La posterior depende de dónde se parte; la razón de verosimilitudes, no. Por eso en el apartado 6.3 se usa esa razón, el factor de Bayes, como medida de la evidencia aportada por los datos.

**Estimar parámetros.** El enfoque bayesiano no se limita a comparar hipótesis. Para estimar una diferencia de medias o un δ se asigna una **distribución previa** a sus posibles valores y los datos la convierten en una **distribución posterior**. De ella se obtiene el **intervalo de credibilidad**: el rango que contiene el parámetro con una probabilidad dada. A diferencia del IC frecuentista, sí admite la frase «hay un 95 % de probabilidad de que el parámetro esté en este intervalo», siempre **dado el modelo y la priori**.

**El problema de la priori.** La crítica principal al enfoque bayesiano es que la priori introduce subjetividad: dos investigadores con prioris distintas pueden llegar a conclusiones distintas. Las respuestas habituales son tres:

1. Usar **prioris por defecto**, poco informativas y acordadas por convención, como las que incluyen JASP y jamovi (6.3).
2. Declarar la priori de forma **transparente** y justificarla antes de analizar.
3. Hacer un **análisis de sensibilidad**: repetir el análisis con varias prioris razonables y comprobar si la conclusión cambia.

Con muchos datos, la posterior depende cada vez menos de la priori; con muestras pequeñas, su influencia es mayor.

### 6.3 El factor de Bayes y cómo leerlo

El **factor de Bayes** (BF) es la razón de verosimilitudes del minicaso anterior, aplicada a dos hipótesis estadísticas:

> BF₁₀ = P(datos | H₁) / P(datos | H₀)

> BF₀₁ = 1 / BF₁₀

> odds posteriores = BF₁₀ × odds previas

BF₁₀ indica **cuántas veces más probables son los datos** con H₁ que con H₀. Un BF₁₀ = 6 significa que los datos son seis veces más probables si hay efecto que si no lo hay. Un BF₁₀ = 0,2 equivale a BF₀₁ = 5: los datos son cinco veces más probables con H₀. Esa es una ventaja clave frente a p: **el BF puede aportar evidencia a favor de H₀**, no solo «no rechazarla».

Para leerlo se usa una escala orientativa, la de Jeffreys adaptada por Lee y Wagenmakers:

| BF₁₀ | BF₀₁ equivalente | Evidencia |
| --- | --- | --- |
| 1–3 | 1–1/3 | Anecdótica a favor de H₁ |
| 3–10 | 1/3–1/10 | Moderada a favor de H₁ |
| 10–30 | 1/10–1/30 | Fuerte a favor de H₁ |
| 30–100 | 1/30–1/100 | Muy fuerte a favor de H₁ |
| > 100 | < 1/100 | Extrema a favor de H₁ |

![m](bf-escala.png)

Figura 6.2. **Escala de evidencia del factor de Bayes.** Eje logarítmico de BF₁₀ entre 1/100 y 100: a la derecha del 1, evidencia a favor de H₁; a la izquierda, a favor de H₀, con las mismas bandas de forma simétrica. Arriba, la relación odds posteriores = BF₁₀ × odds previas. Esquema ilustrativo. Elaboración propia (SAIMAP).

Como muestra la figura 6.2, la escala es simétrica en escala logarítmica: BF₁₀ = 10 y BF₁₀ = 1/10 representan la misma fuerza de evidencia en sentidos opuestos. Las bandas son una ayuda para comunicar, no umbrales de decisión: un BF de 2,9 y otro de 3,1 aportan casi la misma evidencia.

**Qué hipótesis H₁ se compara.** Para calcular P(datos | H₁) hay que concretar qué tamaños del efecto se esperan si H₁ es cierta. En la prueba t, el estándar es la **priori JZS** (Rouder et al., 2009), que asigna a δ una distribución de Cauchy centrada en 0. JASP y jamovi usan por defecto una anchura **r = 0,707**: se espera que la mitad de los efectos plausibles estén entre −0,707 y 0,707. Una priori más ancha da más peso a efectos grandes y, si el efecto observado es modesto, produce un BF₁₀ menor. Por eso conviene informar de la priori y comprobar la sensibilidad del resultado.

**Errores de lectura frecuentes.**

- **El BF no es la probabilidad posterior.** BF₁₀ = 3 no significa que H₁ sea tres veces más probable que H₀; eso solo es cierto si las odds previas eran 1. Con odds previas de 1:4 (0,25), las posteriores serían 0,75 y H₀ seguiría siendo más plausible.
- **El BF no mide el tamaño del efecto.** Con mucha muestra, un efecto pequeño puede dar un BF enorme, igual que puede dar un p minúsculo.
- **Un BF cercano a 1 no favorece a H₀.** Indica que los datos no discriminan entre las hipótesis: hacen falta más datos.

Esto enlaza con la Unidad 5: según Benjamin et al. (2018), p = 0,005 bilateral equivale aproximadamente a un BF de 14 a 26. Un p cercano a 0,05 aporta bastante menos, como muestra el ejemplo de 6.4.

### 6.4 Análisis frecuentista y bayesiano en paralelo con JASP y jamovi

**JASP** y **jamovi** son programas libres y gratuitos con una interfaz parecida a la de SPSS. JASP permite pedir el mismo análisis en versión clásica y bayesiana y produce tablas con formato APA. La versión 0.95 (2025) incluye además un módulo ESCI (Calin-Jageman) orientado a la estimación con IC. jamovi (versión 2.7.x en 2025–2026) se basa en R y puede ampliarse con módulos. Para calcular potencia y tamaños muestrales sigue siendo habitual G∗Power (Unidad 3). En SPSS, la parte clásica del ejemplo se obtiene en **Analizar > Comparar medias**, leyendo la fila «No se asumen varianzas iguales» (Welch; Unidad 9).

**Un ejemplo** (datos ficticios). Se compara el bienestar (escala de 0 a 40) entre 40 personas que siguen un programa breve de actividad física y 40 de un grupo control en lista de espera. Grupo programa: M = 25,0; DT = 6,5. Grupo control: M = 22,0; DT = 6,8. Salida elaborada para este manual:

| Análisis clásico (t de Welch) | Valor |
| --- | --- |
| t (gl) | 2,02 (77,84) |
| p bilateral | 0,047 |
| Diferencia de medias e IC 95 % | 3,00 [0,04; 5,96] |
| d de Cohen e IC 95 % | 0,45 [0,01; 0,89] |
| g de Hedges | 0,45 |

| Análisis bayesiano (priori Cauchy) | BF₁₀ | BF₀₁ |
| --- | --- | --- |
| r = 0,707 (por defecto) | 1,33 | 0,75 |
| r = 1 (ancha) | 1,09 | 0,92 |
| r = 1,414 (muy ancha) | 0,84 | 1,19 |

**Cómo leerlo.**

1. **Análisis clásico.** p = 0,047 está por debajo de 0,05: el resultado es «significativo». Pero el IC 95 % de la diferencia va de 0,04 a 5,96 puntos, y el de d, de 0,01 a 0,89. Los datos son compatibles con un efecto casi nulo y con uno grande. La estimación es muy imprecisa.
2. **Factor de Bayes.** Con la priori por defecto, BF₁₀ = 1,33: los datos son solo 1,33 veces más probables con H₁ que con H₀. Es evidencia **anecdótica** (figura 6.2). Con odds previas de 1, la probabilidad posterior de H₁ sería 1,33 / 2,33 = 0,57, apenas por encima del punto de partida.
3. **Sensibilidad.** Con prioris más anchas, el BF baja hasta 0,84 y pasa a favorecer levemente a H₀. La conclusión «no hay evidencia clara en ningún sentido» se mantiene con todas las prioris.
4. **Conclusión conjunta.** Los dos enfoques no se contradicen: ambos indican un efecto incierto. El bayesiano deja más claro que un p justo por debajo de 0,05 aporta poca evidencia. Lo razonable es ampliar la muestra o replicar antes de afirmar que el programa funciona.

Nota técnica: la t bayesiana usa la t de Student; con grupos iguales, su valor coincide con el de Welch y solo cambian los gl (78 frente a 77,84).

**Cómo se informaría.** «El grupo del programa (M = 25,0; DT = 6,5) mostró un bienestar mayor que el grupo control (M = 22,0; DT = 6,8), t(77,84) = 2,02, p = 0,047, d = 0,45, IC 95 % [0,01; 0,89]. El factor de Bayes, con una priori de Cauchy por defecto (r = 0,707), indicó evidencia anecdótica a favor de una diferencia, BF₁₀ = 1,33.»

### Consenso y debate

**Consenso:** un p > 0,05 no permite afirmar que el efecto sea nulo; para defender la ausencia de un efecto relevante hacen falta pruebas de equivalencia (Lakens, 2017) o factores de Bayes a favor de H₀. El factor de Bayes mide la evidencia relativa que aportan los datos, no la probabilidad de las hipótesis, que depende también de las odds previas. Los límites de equivalencia y la priori deben justificarse antes del análisis.

**Debate:** si conviene sustituir el análisis frecuentista por el bayesiano o usarlos en paralelo. Cómo elegir la distribución previa y si las prioris por defecto, como la Cauchy con r = 0,707 (Rouder et al., 2009), son adecuadas para cada área. También se discute cómo fijar el menor efecto de interés cuando no hay un criterio clínico claro.

### Mito frecuente

**Mito:** «Un IC 95 % de [0,04; 5,96] significa que hay un 95 % de probabilidad de que la diferencia real esté entre 0,04 y 5,96».

**Realidad:** en el enfoque frecuentista, el 95 % se refiere al **procedimiento**: a la larga, el 95 % de los intervalos así construidos contiene el parámetro, pero un intervalo concreto lo contiene o no. Hoekstra et al. (2014) documentaron que esta mala interpretación es frecuente incluso entre investigadores. La frase del mito solo es válida para un **intervalo de credibilidad** bayesiano, y siempre dado el modelo y la priori.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Menor efecto de interés (SESOI) | Efecto más pequeño que se considera relevante; define los límites de equivalencia |
| TOST | Dos pruebas unilaterales contra −Δ y +Δ para concluir equivalencia (Lakens, 2017) |
| Probabilidad previa | Plausibilidad de una hipótesis o parámetro antes de ver los datos |
| Verosimilitud | Probabilidad de los datos observados si una hipótesis fuera cierta |
| Probabilidad posterior | Creencia actualizada en una hipótesis tras combinar la priori con los datos |
| Factor de Bayes (BF₁₀) | Razón entre la probabilidad de los datos con H₁ y con H₀ |
| Priori JZS | Priori de Cauchy para δ en la t bayesiana; por defecto r = 0,707 (Rouder et al., 2009) |
| Intervalo de credibilidad | Rango que contiene el parámetro con una probabilidad dada, según el modelo y la priori |

### Clave PIR

**Prioridad baja.** La inferencia bayesiana y las pruebas de equivalencia se preguntan poco en el PIR, pero ayudan a resolver preguntas frecuentes sobre la interpretación de p y de los IC. Si aparecen, se pide leer un BF₁₀ o un BF₀₁ o distinguir un intervalo de confianza de uno de credibilidad. Trampas típicas: leer BF₁₀ como la probabilidad de H₁, creer que un BF cercano a 1 apoya a H₀ y concluir equivalencia a partir de un p > 0,05.

### Autoevaluación

**1.** Una prueba TOST con límites de ±0,4 da un IC 90 % de la diferencia de [−0,15; 0,28]. Se concluye que…
a) las condiciones son equivalentes según esos límites
b) hay una diferencia significativa entre condiciones
c) el resultado es indeterminado por falta de potencia

**2.** Un estudio obtiene BF₁₀ = 0,25. ¿Cómo se interpreta?
a) Hay un 25 % de probabilidad de que H₁ sea cierta
b) Los datos no permiten distinguir entre H₀ y H₁
c) Los datos son cuatro veces más probables con H₀ que con H₁

**3.** Si BF₁₀ = 4 y las odds previas a favor de H₁ son 1:3, la probabilidad posterior de H₁ es aproximadamente…
a) 0,25
b) 0,57
c) 0,80

**4.** ¿Qué afirmación sobre la priori por defecto de la t bayesiana en JASP es correcta?
a) Es una distribución de Cauchy centrada en 0 con anchura r = 0,707
b) Es una distribución uniforme entre d = −1 y d = 1
c) Es una normal centrada en el efecto observado en la muestra

**5.** Un análisis da p = 0,047 y BF₁₀ = 1,33. Lo más adecuado es concluir que…
a) el efecto queda demostrado, porque p es menor que 0,05
b) los datos favorecen la ausencia de efecto, según el BF
c) la evidencia es débil y conviene ampliar la muestra o replicar

### Soluciones

**1 a.** El IC 90 % cae entero dentro de (−0,4; 0,4), y además contiene el 0. **2 c.** BF₀₁ = 1/0,25 = 4: evidencia moderada a favor de H₀; el BF no es una probabilidad. **3 b.** Odds posteriores = 4 × 1/3 = 1,33; probabilidad = 1,33 / 2,33 ≈ 0,57. **4 a.** Es la priori JZS de Rouder et al. (2009); nunca se centra en el efecto observado. **5 c.** Un BF₁₀ de 1,33 es evidencia anecdótica: no apoya con claridad ni a H₁ ni a H₀.
