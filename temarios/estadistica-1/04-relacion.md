# Capítulo 4 · Relación entre variables

Buena parte de las preguntas de la psicología son preguntas sobre relaciones: si el sueño se asocia con el rendimiento, si la ansiedad varía con el sexo o si una terapia se relaciona con la mejoría. Este capítulo explica cómo describir esas relaciones con variables cuantitativas y categóricas, y por qué una relación no basta para afirmar una causa.

## Unidad 12 · Asociación y causalidad

**Objetivos:** distinguir asociación y causalidad; conocer los requisitos para inferir una relación causal; reconocer variables de confusión, correlaciones espurias, la paradoja de Simpson y la restricción de rango; valorar el ejemplo histórico de John Snow.

### 12.1 Relación no es causa

Dos variables están **relacionadas** (o asociadas, o covarían) cuando los valores de una tienden a ir acompañados de ciertos valores de la otra. Si quienes duermen más horas suelen obtener mejores notas, sueño y rendimiento están relacionados.

Que haya relación no dice **por qué** la hay. Ante una asociación entre X e Y caben, al menos, cinco explicaciones:

| Explicación | Esquema | Ejemplo |
| --- | --- | --- |
| **X causa Y** | X → Y | Dormir más mejora el rendimiento |
| **Y causa X (causalidad inversa)** | Y → X | Ir bien en los estudios reduce el estrés y deja dormir mejor |
| **Causalidad bidireccional** | X ⇄ Y | Sueño y rendimiento se influyen mutuamente |
| **Tercera variable** | Z → X y Z → Y | Un horario laboral exigente reduce a la vez el sueño y el tiempo de estudio |
| **Azar** | — | En una muestra pequeña aparece una relación que no existe en la población |

Una relación causal implica asociación, pero una asociación no implica causalidad. Por eso la frase «correlación no implica causalidad» es uno de los principios más repetidos de la metodología.

La **asociación** se describe con estadísticos como la covarianza y la correlación (Unidad 13) o con χ² y sus coeficientes (Unidad 14). La **causalidad** no es un estadístico: es una conclusión que depende sobre todo del **diseño** de la investigación (Unidad 2).

### 12.2 Requisitos para inferir causalidad

Desde John Stuart Mill, se acepta que para afirmar que X causa Y deben cumplirse tres condiciones:

1. **Covariación:** X e Y están relacionadas.
2. **Precedencia temporal:** la causa ocurre antes que el efecto.
3. **Eliminación de explicaciones alternativas:** se descartan terceras variables y otras causas posibles.

La tercera es la más difícil. El **experimento** la resuelve mediante la **manipulación** de la variable independiente y la **asignación aleatoria** de los participantes a las condiciones. El azar reparte por igual entre los grupos las demás características, conocidas o no. Por eso un experimento bien hecho tiene la mayor **validez interna** y es el diseño que mejor permite concluir causalidad.

En los estudios **correlacionales** u **observacionales**, donde no se manipula nada, la inferencia causal es mucho más arriesgada. Aun así, en epidemiología se usan desde 1965 los **criterios de Bradford Hill** para valorar la plausibilidad de una relación causal con datos observacionales: fuerza de la asociación, consistencia entre estudios, especificidad, temporalidad, gradiente dosis-respuesta, plausibilidad biológica, coherencia con lo conocido, evidencia experimental y analogía. Ninguno es suficiente por sí solo, y solo la temporalidad es imprescindible.

Una **variable de confusión** (o confusora) es una tercera variable que está relacionada a la vez con la supuesta causa y con el efecto, y que puede crear, ocultar o invertir una relación. El control de la confusión puede hacerse en el **diseño** (aleatorización, emparejamiento, mantener constante la variable) o en el **análisis** (estratificar, es decir, analizar por separado cada nivel de la variable; o técnicas multivariadas que se estudian en cursos posteriores).

Una **correlación espuria** es una relación entre dos variables que no se debe a ningún vínculo directo entre ellas, sino a una tercera variable o al azar. El ejemplo clásico: en los meses en que se venden más helados hay más ahogamientos. No es que los helados provoquen ahogamientos: el calor aumenta a la vez el consumo de helados y los baños. Con muchas variables y muchos datos, además, siempre aparecen correlaciones llamativas por puro azar.

### 12.3 La paradoja de Simpson y la restricción de rango

**Paradoja de Simpson.** Una relación que aparece en cada uno de los subgrupos de una muestra puede desaparecer o **invertirse** al juntar todos los datos. Edward Simpson la describió en 1951. Ocurre cuando una variable de confusión está distribuida de forma desigual entre los grupos.

Con variables cuantitativas se ve en la Figura 12.1: dentro de cada uno de los tres grupos, la relación entre X e Y es positiva, pero los grupos están colocados de tal manera que, al juntarlos, la relación global es claramente negativa.

![](simpson.png)

Figura 12.1. **Paradoja de Simpson con variables cuantitativas.** En cada uno de los tres grupos la relación entre X e Y es positiva (r > 0), pero con todos los datos juntos la correlación global es r = −0,78 (línea discontinua). Elaboración propia (SAIMAP), datos simulados.

Con variables categóricas la lógica es la misma. Supóngase un servicio con dos terapias (datos ficticios) y casos leves y graves:

| | Leves: mejoran | Graves: mejoran | Total: mejoran |
| --- | --- | --- | --- |
| **Terapia A** | 18 de 20 (90 %) | 48 de 80 (60 %) | 66 de 100 (66 %) |
| **Terapia B** | 64 de 80 (80 %) | 10 de 20 (50 %) | 74 de 100 (74 %) |

La terapia A obtiene mejores resultados **tanto en leves como en graves**, pero en el total parece peor. La razón es que A se aplicó sobre todo a casos graves, que mejoran menos con cualquier terapia. La gravedad es la variable de confusión. La conclusión correcta procede del análisis estratificado, no del total. La paradoja no es un error de cálculo: muestra que los datos agregados pueden engañar cuando hay variables relevantes sin controlar.

**Restricción de rango.** Cuando la muestra solo incluye una parte del rango de valores de una variable, la correlación observada suele ser **menor** que la que existe en la población completa. Ocurre a menudo en la validación de pruebas de selección: solo se conoce el rendimiento posterior de quienes fueron admitidos, que son los que puntuaron alto en la prueba de admisión.

![](restriccion-rango.png)

Figura 12.2. **Restricción de rango.** Con los 400 casos, la correlación entre la prueba de admisión (X) y el rendimiento posterior (Y) es r = 0,60. Si solo se observan los seleccionados (X > 1), baja a r = 0,42. Elaboración propia (SAIMAP), datos simulados.

La consecuencia práctica es importante: una prueba de selección puede parecer poco válida simplemente porque solo se ha estudiado a los seleccionados. Lo mismo ocurre si se estudia la relación entre CI y rendimiento académico solo en estudiantes universitarios, un grupo con un rango de CI más reducido que la población general.

### 12.4 John Snow y el cólera: razonar con datos

En 1854 un brote de cólera causó cientos de muertes en pocos días en el barrio del Soho, en Londres. La teoría dominante atribuía la enfermedad a los «miasmas», el aire contaminado. El médico John Snow defendía que se transmitía por el agua.

Snow situó cada muerte en un mapa del barrio. Las defunciones se concentraban alrededor de la bomba de agua pública de Broad Street (Figura 12.3). Además, examinó las excepciones, que son las que dan fuerza al argumento: los trabajadores de una fábrica de cerveza cercana, que bebían cerveza y agua de un pozo propio, apenas enfermaron; y algunas víctimas que vivían lejos resultaron haber bebido agua de esa bomba porque la preferían.

![m](snow.jpg)

Figura 12.3. **Mapa del brote de cólera del Soho.** Cada barra negra representa una muerte; en el centro se ve la bomba de agua de Broad Street (*Broad Street Pump*), alrededor de la cual se acumulan las defunciones. John Snow (1855), *On the mode of communication of cholera*, 2.ª ed. Dominio público, vía Wikimedia Commons.

El mapa por sí solo mostraba una **asociación espacial**. Snow reforzó la inferencia causal con un segundo análisis: comparó la mortalidad de los hogares abastecidos por dos compañías de agua que servían a las mismas calles, una que captaba el agua de un tramo del Támesis contaminado por aguas residuales y otra que la captaba río arriba. Los hogares eran parecidos en todo salvo en el agua que recibían, y la mortalidad fue muchas veces mayor entre los abastecidos por la primera. Funcionaba como un **experimento natural**: la «asignación» al agua contaminada no dependía de las características de las familias, lo que reducía el peligro de confusión.

El caso reúne casi todo lo visto en la unidad: covariación, precedencia temporal, búsqueda activa de explicaciones alternativas, análisis de las excepciones y un diseño que se acerca a la comparación controlada.

### Consenso y debate

**Consenso:** la causalidad no se deduce de un coeficiente, sino del diseño. Un experimento con asignación aleatoria es la vía más sólida; los datos observacionales pueden apoyar conclusiones causales solo si se controlan las variables de confusión y se acumulan evidencias convergentes, como hizo Snow.

**Debate:** hasta qué punto es legítimo hablar de causas con datos observacionales. Hoy existen métodos formales de inferencia causal (diagramas causales, emparejamiento, variables instrumentales) que lo permiten bajo supuestos explícitos, pero esos supuestos no pueden comprobarse por completo con los datos, y su uso en psicología es todavía desigual.

### Mito frecuente

**Mito:** «Cuando Snow retiró la manivela de la bomba de Broad Street, la epidemia se detuvo de golpe».

**Realidad:** la manivela se retiró cuando el brote ya estaba remitiendo, en parte porque muchos vecinos habían huido del barrio. El propio Snow lo reconoció. Su argumento no descansa en ese gesto, sino en el patrón de los datos y en la comparación entre compañías de agua.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Asociación | Tendencia de los valores de dos variables a presentarse juntos |
| Causalidad inversa | El supuesto efecto es en realidad la causa |
| Variable de confusión | Tercera variable relacionada con la supuesta causa y con el efecto |
| Correlación espuria | Relación sin vínculo directo, debida a una tercera variable o al azar |
| Precedencia temporal | Requisito de que la causa ocurra antes que el efecto |
| Paradoja de Simpson | Inversión o desaparición de una relación al agregar subgrupos |
| Restricción de rango | Reducción de la correlación al estudiar solo parte del rango de una variable |
| Experimento natural | Situación en que un factor externo asigna las condiciones de forma casi aleatoria |

### Clave PIR

**Prioridad media.** Se pregunta qué permite concluir causalidad (manipulación y asignación aleatoria), qué es una variable de confusión y qué efecto tiene la restricción de rango sobre la correlación (la reduce). La trampa típica es aceptar una conclusión causal a partir de un estudio correlacional por el mero hecho de que la correlación sea alta.

### Autoevaluación

**1.** Para inferir que X causa Y, además de la covariación hace falta…
a) una correlación mayor que 0,50 en una muestra amplia
b) precedencia temporal y descartar explicaciones alternativas
c) que ambas variables se midan en una escala cuantitativa

**2.** Ventas de helados y ahogamientos aumentan a la vez porque ambos dependen del calor. Es un ejemplo de…
a) correlación espuria
b) causalidad inversa
c) restricción de rango

**3.** Si una relación positiva en cada subgrupo se vuelve negativa al juntar los datos, se trata de…
a) la falacia de la tasa base
b) un error de medida
c) la paradoja de Simpson

**4.** Al estudiar la validez de una prueba de admisión solo con los admitidos, la correlación observada…
a) suele ser menor que en la población completa
b) suele ser mayor que en la población completa
c) no se ve afectada

**5.** El diseño que mejor permite eliminar las variables de confusión es…
a) el estudio de encuesta
b) el experimento con asignación aleatoria
c) el estudio observacional con muestra grande

### Soluciones

**1 b.** El tamaño de la correlación no garantiza causalidad, y la escala de las variables tampoco. **2 a.** La relación se debe a una tercera variable, la temperatura. **3 c.** La variable que define los subgrupos actúa como confusora. **4 a.** Al reducir la variabilidad de X se atenúa la correlación. **5 b.** La aleatorización reparte por igual entre los grupos las variables conocidas y desconocidas; un tamaño grande no elimina la confusión.

## Unidad 13 · Covarianza y correlación de Pearson

**Objetivos:** construir e interpretar un diagrama de dispersión; calcular la covarianza y el coeficiente de correlación de Pearson; interpretar r y r²; conocer las matrices de varianzas-covarianzas y de correlaciones y las limitaciones de r.

### 13.1 Diagrama de dispersión y covarianza

Para estudiar la relación entre dos variables **cuantitativas**, el primer paso es siempre el **diagrama de dispersión** (o nube de puntos): cada caso es un punto con coordenadas (xᵢ, yᵢ). El diagrama muestra tres cosas:

- **Dirección:** positiva (los puntos suben de izquierda a derecha), negativa (bajan) o nula.
- **Forma:** lineal o curvilínea.
- **Intensidad:** cuánto se ajustan los puntos a una línea. Además, deja ver casos atípicos y grupos.

La **covarianza** (Sₓᵧ) cuantifica cuánto varían conjuntamente dos variables. Se basa en las **puntuaciones diferenciales** (distancia de cada valor a su media):

> Sₓᵧ = Σ(xᵢ − x̄)(yᵢ − ȳ) / n

La lógica es sencilla. Si un caso está por encima de la media en X y también en Y, el producto de sus diferenciales es positivo; si está por debajo en ambas, también. Si está por encima en una y por debajo en la otra, el producto es negativo. Al promediar los productos:

- **Sₓᵧ > 0:** relación lineal positiva (directa).
- **Sₓᵧ < 0:** relación lineal negativa (inversa).
- **Sₓᵧ ≈ 0:** no hay relación lineal, lo que no excluye una relación curvilínea.

Como ocurre con la varianza (Unidad 8), hay dos versiones. La de la fórmula anterior divide entre **n** y describe la muestra. La **cuasicovarianza** divide entre **n − 1** y es la que da SPSS por defecto, porque estima sin sesgo la covarianza de la población. Los manuales españoles difieren en la notación; lo importante es saber cuál se ha usado. La varianza de una variable es su covarianza consigo misma: Sₓₓ = Sₓ².

La covarianza tiene un problema: **depende de las unidades de medida**. Si el tiempo de reacción se registra en milisegundos en lugar de segundos, la covarianza se multiplica por 1 000 aunque la relación sea idéntica. Además, no tiene un máximo fijo. Por eso no permite decir si una relación es fuerte o débil. Para eso se estandariza.

### 13.2 El coeficiente de correlación de Pearson

El **coeficiente de correlación de Pearson** (rₓᵧ) es la covarianza dividida entre el producto de las desviaciones típicas. Equivale a la covarianza de las puntuaciones típicas z:

> rₓᵧ = Sₓᵧ / (Sₓ · Sᵧ)
> rₓᵧ = Σ(zₓ · zᵧ) / n

Si en el numerador y en el denominador se usan las versiones con n − 1, el resultado es el mismo: **r no depende de si se divide entre n o entre n − 1**, siempre que se use el mismo criterio arriba y abajo.

**Propiedades de r:**

- Varía entre **−1 y +1**. El signo indica la dirección; el valor absoluto, la intensidad de la relación **lineal**.
- r = ±1 indica una relación lineal perfecta: todos los puntos están sobre una recta.
- r = 0 indica ausencia de relación **lineal**, no ausencia de relación.
- No tiene unidades y **no cambia** si se suma una constante o se multiplica por una constante positiva cualquiera de las variables. Si se multiplica por una constante negativa, cambia el signo pero no el valor absoluto.
- Es **simétrico**: rₓᵧ = rᵧₓ.
- Es **sensible a los casos atípicos** y a la **restricción de rango** (Unidad 12).

![](dispersion-r.png)

Figura 13.1. **Diagramas de dispersión y valor de r.** Cinco nubes con relaciones lineales de distinta dirección e intensidad (r = −0,92, −0,49, −0,01, 0,49 y 0,92) y una relación curvilínea en forma de U con r = 0,04: hay una relación muy clara, pero no es lineal. Elaboración propia (SAIMAP), datos simulados.

Como orientación general, Cohen propuso considerar pequeña una correlación de 0,10, media una de 0,30 y grande una de 0,50, en valor absoluto. Son referencias orientativas: lo que es una relación importante depende del campo y del uso.

**Correlación no es pendiente.** r mide lo bien que los puntos se ajustan a una recta, no lo inclinada que es. La pendiente de la recta de regresión de Y sobre X es b = Sₓᵧ / Sₓ² = r · (Sᵧ / Sₓ), de modo que depende de las unidades y de las desviaciones típicas. Dos nubes pueden tener la misma r con pendientes muy distintas, y una recta muy inclinada puede tener puntos muy dispersos a su alrededor. Cuando r = 0, la pendiente también es 0, y las dos comparten siempre el signo.

**Correlación de Spearman.** Cuando las variables son **ordinales**, o la relación es monótona pero no lineal, o hay atípicos influyentes, se usa el coeficiente de **Spearman** (rₛ): es la correlación de Pearson calculada sobre los **rangos** (los números de orden) en lugar de sobre los valores.

### 13.3 Coeficiente de determinación y matrices

El **coeficiente de determinación** es el cuadrado de la correlación:

> r² = (rₓᵧ)²

Indica la **proporción de varianza compartida** por las dos variables. En el contexto de la regresión, se interpreta como la proporción de la varianza de Y que se explica por su relación lineal con X. Con r = 0,50, r² = 0,25: las variables comparten el 25 % de su varianza. La diferencia, 1 − r², es la proporción **no compartida**.

r² hace ver que correlaciones que parecen grandes dejan mucha variabilidad sin explicar. También ayuda a no sobrevalorar las diferencias: r = 0,60 no es «el doble» que r = 0,30 en varianza compartida, sino el cuádruple (0,36 frente a 0,09).

Cuando hay más de dos variables se resumen en matrices cuadradas y **simétricas**:

- **Matriz de varianzas-covarianzas:** en la diagonal están las varianzas de cada variable; fuera de ella, las covarianzas entre cada par.
- **Matriz de correlaciones:** en la diagonal hay unos (toda variable correlaciona perfectamente consigo misma); fuera de ella, las correlaciones entre cada par.

Basta con leer el triángulo superior o el inferior, porque son iguales. Estas matrices son la materia prima de técnicas posteriores, como el análisis factorial o la regresión múltiple.

**En SPSS:** **Analizar > Correlacionar > Bivariadas**. Se pasan las variables a la lista, se marca **Pearson** (por defecto) o **Spearman**, y el programa devuelve la matriz de correlaciones con el valor p de cada coeficiente y el número de casos. En **Opciones** puede pedirse también la covarianza, que SPSS calcula con n − 1. El diagrama de dispersión se obtiene en **Gráficos > Generador de gráficos**. **En jamovi:** **Regression > Correlation Matrix**, con casillas para Pearson y Spearman y opción de mostrar los diagramas de dispersión.

### 13.4 Limitaciones de r: el cuarteto de Anscombe

En 1973, el estadístico Francis Anscombe construyó cuatro conjuntos de 11 pares de datos con resúmenes numéricos prácticamente idénticos y formas completamente diferentes. Su mensaje: **antes de calcular, hay que mirar los datos**.

![](anscombe.png)

Figura 13.2. **Cuarteto de Anscombe.** Los cuatro conjuntos tienen la misma media de X (9) y de Y (7,50), varianza de Y ≈ 4,12, la misma recta y = 3 + 0,5x y r ≈ 0,82 (0,816 en I–III; 0,817 en IV por redondeo). I: relación lineal con ruido; II: relación curva; III: relación lineal perfecta salvo un atípico; IV: todos los puntos en x = 8 salvo uno, que genera por sí solo la correlación. Elaboración propia (SAIMAP) a partir de los datos de Anscombe (1973).

Solo en el conjunto I es razonable resumir la relación con r. En el II, la relación es fuerte pero no lineal y r la describe mal. En el III, un único atípico **rebaja** una correlación que sin él sería prácticamente perfecta. En el IV, un único caso **fabrica** una correlación que sin él no podría calcularse, porque X no varía.

De aquí se derivan las precauciones al usar r:

- Mide solo relación **lineal**: siempre hay que mirar el diagrama de dispersión.
- Es muy sensible a **atípicos**.
- Se atenúa con la **restricción de rango** y con la baja fiabilidad de las medidas.
- Puede estar inflada o invertida por **subgrupos** (paradoja de Simpson).
- No indica **causalidad** (Unidad 12).
- En muestras pequeñas es muy inestable; su significación se estudia con los métodos de inferencia del Capítulo 5.

### Ejemplo resuelto · Calidad del sueño y rendimiento en una tarea de memoria

Se registran la calidad subjetiva del sueño la noche anterior en una escala de 1 a 5 (X) y los aciertos en una tarea de memoria (Y) de cinco estudiantes (datos ficticios).

| Caso | xᵢ | yᵢ | xᵢ − x̄ | yᵢ − ȳ | (xᵢ − x̄)(yᵢ − ȳ) | (xᵢ − x̄)² | (yᵢ − ȳ)² |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 2 | −2 | −2 | 4 | 4 | 4 |
| 2 | 2 | 4 | −1 | 0 | 0 | 1 | 0 |
| 3 | 3 | 5 | 0 | 1 | 0 | 0 | 1 |
| 4 | 4 | 4 | 1 | 0 | 0 | 1 | 0 |
| 5 | 5 | 5 | 2 | 1 | 2 | 4 | 1 |
| **Σ** | 15 | 20 | 0 | 0 | **6** | **10** | **6** |

**1. Medias.** x̄ = 15/5 = 3; ȳ = 20/5 = 4.

**2. Covarianza.**

> Sₓᵧ = 6 / 5 = 1,2 (con n)
> cuasicovarianza = 6 / 4 = 1,5 (con n − 1)

Es positiva: mejor calidad del sueño se asocia con más aciertos.

**3. Varianzas y desviaciones típicas (con n).**

> Sₓ² = 10 / 5 = 2, Sₓ = √2 ≈ 1,414
> Sᵧ² = 6 / 5 = 1,2, Sᵧ = √1,2 ≈ 1,095

**4. Correlación de Pearson.**

> rₓᵧ = 1,2 / (1,414 · 1,095) ≈ 0,775

Con las versiones de n − 1 se obtiene lo mismo: 1,5 / (√2,5 · √1,5) ≈ 0,775.

**5. Coeficiente de determinación.** r² = 0,775² ≈ 0,60: sueño y aciertos comparten el 60 % de su varianza.

**6. Matrices.** Con n − 1, como las da SPSS:

| | X | Y |
| --- | --- | --- |
| **X** | 2,5 | 1,5 |
| **Y** | 1,5 | 1,5 |

Matriz de correlaciones: 1 en la diagonal y 0,775 fuera de ella.

**7. Pendiente.** b = Sₓᵧ / Sₓ² = 1,2 / 2 = 0,6 aciertos por cada punto de X. La pendiente (0,6) y la correlación (0,775) son números distintos que responden a preguntas distintas.

**Interpretación.** Relación lineal positiva y fuerte en estos cinco casos. Con solo cinco observaciones, la estimación es muy imprecisa: el contraste de la Unidad 16 no la declararía significativa (p ≈ 0,12). Con los mismos datos, la correlación de Spearman es rₛ ≈ 0,74.

### Mito frecuente

**Mito:** «Si r = 0, las dos variables no tienen ninguna relación».

**Realidad:** r = 0 solo indica ausencia de relación **lineal**. En la Figura 13.1 hay una relación en forma de U muy clara con r = 0,04. Por ejemplo, la relación entre activación y rendimiento puede tener forma de U invertida, y r la pasaría por alto.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Diagrama de dispersión | Gráfico en el que cada caso es un punto (xᵢ, yᵢ) |
| Covarianza | Media de los productos de las puntuaciones diferenciales de X e Y |
| Cuasicovarianza | Covarianza calculada con n − 1; la que da SPSS por defecto |
| Correlación de Pearson | Covarianza estandarizada; mide la relación lineal entre −1 y +1 |
| Coeficiente de determinación | r²: proporción de varianza compartida por dos variables |
| Matriz de correlaciones | Tabla simétrica con unos en la diagonal y las correlaciones entre pares |
| Correlación de Spearman | Correlación de Pearson aplicada a los rangos; para datos ordinales |
| Cuarteto de Anscombe | Cuatro conjuntos con la misma r y formas distintas; obliga a mirar los datos |

### Clave PIR

**Prioridad alta.** Es uno de los contenidos de estadística que más se pregunta. Hay que dominar las propiedades de r (invarianza ante transformaciones lineales, cambio de signo con constantes negativas, sensibilidad a atípicos y a la restricción de rango), interpretar r² como varianza compartida y recordar que r = 0 no excluye una relación curvilínea. Trampa típica: confundir correlación con pendiente o con causalidad.

### Autoevaluación

**1.** La principal limitación de la covarianza como medida de relación es que…
a) solo puede ser positiva
b) depende de las unidades de medida
c) no se puede calcular con n − 1

**2.** Si se multiplican todos los valores de X por −2, la correlación con Y…
a) cambia de signo y mantiene su valor absoluto
b) se multiplica por −2
c) no cambia en absoluto

**3.** Con r = 0,60, la proporción de varianza compartida es…
a) 0,60
b) 0,77
c) 0,36

**4.** Un valor de r próximo a 0 indica que…
a) no hay relación de ningún tipo
b) no hay relación lineal
c) la pendiente es muy pronunciada

**5.** Para dos variables ordinales es preferible…
a) la correlación de Spearman
b) la covarianza con n − 1
c) el coeficiente de determinación

### Soluciones

**1 b.** Por eso se estandariza dividiendo entre las desviaciones típicas. **2 a.** Multiplicar por una constante negativa invierte el signo; el valor absoluto no cambia. **3 c.** 0,60² = 0,36. **4 b.** Puede haber una relación curvilínea intensa, como en la Figura 13.1. **5 a.** Trabaja con los rangos, que es la información que tienen los datos ordinales.

## Unidad 14 · Tablas de contingencia y chi cuadrado

**Objetivos:** construir e interpretar una tabla de contingencia con frecuencias conjuntas, marginales y condicionadas; calcular las frecuencias esperadas bajo independencia y el estadístico χ²; medir la intensidad de la asociación con φ y la V de Cramer.

### 14.1 Tablas de contingencia

Cuando las dos variables son **categóricas** (nominales u ordinales con pocas categorías), los datos se resumen en una **tabla de contingencia** o tabla de doble entrada. Las categorías de una variable van en las filas y las de la otra, en las columnas. Una tabla con I filas y J columnas se llama tabla I × J.

| | Aprueba | Suspende | Total |
| --- | --- | --- | --- |
| **Taller** | 30 | 20 | 50 |
| **Sin taller** | 20 | 30 | 50 |
| **Total** | 50 | 50 | 100 |

En la tabla aparecen tres tipos de frecuencias:

- **Frecuencias conjuntas** (nᵢⱼ): las de cada casilla. 30 estudiantes hicieron el taller y aprobaron.
- **Frecuencias marginales**: los totales de cada fila (nᵢ₊) y de cada columna (n₊ⱼ). Describen cada variable por separado. 50 estudiantes hicieron el taller; 50 aprobaron.
- **Total** (N): número de casos, 100.

Las frecuencias absolutas se comparan mal cuando los grupos tienen tamaños distintos. Por eso se calculan **porcentajes**, que pueden ser de tres tipos:

- **Por fila:** cada casilla entre el total de su fila. Responde a «de los que hicieron el taller, ¿qué porcentaje aprobó?».
- **Por columna:** cada casilla entre el total de su columna. Responde a «de los que aprobaron, ¿qué porcentaje hizo el taller?».
- **Sobre el total:** cada casilla entre N.

Los porcentajes por fila o por columna son **distribuciones condicionadas** (Unidad 11). La regla práctica es **calcular los porcentajes en la dirección de la variable explicativa** y comparar en la otra dirección. Si el taller es la posible causa y el aprobado el resultado, se calculan por fila: aprobó el 60 % de los que hicieron el taller (30/50) frente al 40 % de los que no lo hicieron (20/50).

Si las distribuciones condicionadas son iguales en todas las filas, las variables son **independientes**: saber la fila no cambia la probabilidad de cada columna. Si difieren, hay **asociación**. La pregunta estadística es si la diferencia es mayor de lo que cabría esperar por azar.

### 14.2 Frecuencias esperadas y estadístico χ²

Las **frecuencias esperadas** (eᵢⱼ) son las que habría en cada casilla si las dos variables fueran independientes y se mantuvieran los totales marginales. Se obtienen aplicando la regla del producto para sucesos independientes:

> eᵢⱼ = (total de la fila i × total de la columna j) / N

El **estadístico chi cuadrado de Pearson** (χ²) compara las frecuencias observadas (nᵢⱼ) con las esperadas:

> χ² = Σ (nᵢⱼ − eᵢⱼ)² / eᵢⱼ

Cada sumando mide cuánto se aleja una casilla de lo esperado, en relación con lo esperado. Por eso:

- **χ² = 0** cuando las observadas coinciden con las esperadas: independencia perfecta en la muestra.
- Cuanto **mayor** es χ², mayor es la discrepancia respecto a la independencia.
- χ² **nunca es negativo**, porque las diferencias se elevan al cuadrado.

Los **grados de libertad** de una tabla I × J son:

> gl = (I − 1) · (J − 1)

Una tabla 2 × 2 tiene 1 grado de libertad: fijados los marginales, basta conocer una casilla para deducir las demás.

Para decidir si la asociación es estadísticamente significativa, el valor de χ² se compara con la **distribución χ²** con esos grados de libertad, que se estudiará junto a la lógica del contraste en la Unidad 16. Con gl = 1 y α = 0,05, el valor crítico es 3,84; con gl = 2, es 5,99. Si χ² supera el valor crítico (o, de forma equivalente, si p < 0,05), se rechaza la hipótesis de independencia.

**Supuesto de las frecuencias esperadas.** La distribución χ² solo es una buena aproximación cuando las frecuencias **esperadas** no son demasiado pequeñas. La regla habitual pide que **ninguna esperada sea menor que 1 y que no más del 20 % de las casillas tenga esperadas menores que 5**; en tablas 2 × 2 se suele exigir que todas sean al menos 5. La regla se refiere a las esperadas, no a las observadas. Si no se cumple, puede agruparse categorías con sentido teórico o, en tablas 2 × 2, usar la **prueba exacta de Fisher**. Además, cada caso debe aparecer en una sola casilla (observaciones independientes).

### 14.3 Intensidad de la asociación: φ y V de Cramer

χ² tiene una limitación importante: **depende del tamaño de la muestra**. Si se multiplican todas las frecuencias de una tabla por 10, las proporciones no cambian, pero χ² se multiplica por 10. Por eso un χ² grande indica que la asociación es poco compatible con el azar, pero no que sea fuerte. Para medir la intensidad se usan coeficientes que eliminan el efecto de N.

**Coeficiente phi (φ)**, para tablas 2 × 2:

> φ = √(χ² / N)

Varía entre 0 y 1 cuando se calcula así. También puede calcularse directamente con las frecuencias de la tabla, y entonces lleva signo (entre −1 y +1); en ese caso equivale a la correlación de Pearson entre dos variables dicotómicas codificadas con 0 y 1. El signo depende de cómo se ordenen las categorías, de modo que en variables nominales se interpreta sobre todo su valor absoluto.

**V de Cramer**, para tablas de cualquier tamaño:

> V = √(χ² / (N · (k − 1)))

donde k es el **menor** de los números de filas y columnas. Varía entre 0 (independencia) y 1 (asociación perfecta). En una tabla 2 × 2, k − 1 = 1 y V coincide con el valor absoluto de φ.

Como orientación para tablas 2 × 2, se suele considerar pequeña una asociación de 0,10, media de 0,30 y grande de 0,50. En tablas mayores esas referencias cambian con el número de categorías, así que conviene interpretarlas con prudencia y siempre acompañadas de los porcentajes.

| Medida | Para qué sirve | Depende de N |
| --- | --- | --- |
| **χ²** | Valorar si la asociación es compatible con el azar | Sí |
| **φ** | Intensidad en tablas 2 × 2 | No |
| **V de Cramer** | Intensidad en tablas de cualquier tamaño | No |

### 14.4 Tablas de contingencia en SPSS e informe de resultados

**En SPSS:** **Analizar > Estadísticos descriptivos > Tablas cruzadas**. Se coloca una variable en **Filas** y otra en **Columnas** (habitualmente, la explicativa en filas). En **Estadísticos** se marcan **Chi-cuadrado** y **Phi y V de Cramer**. En **Casillas** se pueden pedir las frecuencias **esperadas** y los porcentajes por **fila**, por **columna** o del **total**.

La salida incluye varias tablas. En la de pruebas de chi cuadrado conviene saber que:

- La fila **Chi-cuadrado de Pearson** es el estadístico explicado en esta unidad.
- En tablas 2 × 2 aparece además la **corrección de continuidad** (de Yates), una versión más conservadora, y la **prueba exacta de Fisher**.
- Una nota al pie indica cuántas casillas tienen frecuencia esperada menor que 5. Es la forma rápida de comprobar el supuesto.

**En jamovi:** **Frequencies > Contingency Tables > Independent Samples**, con χ² por defecto y opciones para φ, V de Cramer, frecuencias esperadas y porcentajes.

Para informar, se dan las frecuencias o los porcentajes relevantes, el estadístico con sus grados de libertad y N, el valor p y una medida de intensidad. Por ejemplo: «Aprobó el 60 % de quienes hicieron el taller frente al 40 % de quienes no lo hicieron, χ²(1, N = 100) = 4,00, p = 0,046, φ = 0,20».

### Ejemplo resuelto · Taller de técnicas de estudio y aprobado

Cien estudiantes de primer curso se reparten **al azar** en dos grupos de 50: uno recibe un taller de técnicas de estudio y el otro no. Al final del cuatrimestre se registra si aprueban una asignatura (datos ficticios; tabla del apartado 14.1).

**1. Porcentajes por fila.** Taller: 30/50 = 60 % aprueba. Sin taller: 20/50 = 40 % aprueba. Hay una diferencia de 20 puntos.

**2. Frecuencias esperadas.** Todas las filas suman 50 y todas las columnas, 50:

> eᵢⱼ = (50 × 50) / 100 = 25 en las cuatro casillas

Todas son mayores que 5, así que se cumple el supuesto.

**3. Estadístico χ².** Cada casilla se aleja 5 unidades de lo esperado:

> χ² = (30 − 25)²/25 + (20 − 25)²/25 + (20 − 25)²/25 + (30 − 25)²/25
> χ² = 1 + 1 + 1 + 1 = 4,00

**4. Grados de libertad y decisión.** gl = (2 − 1) · (2 − 1) = 1. Como 4,00 > 3,84, se rechaza la independencia con α = 0,05. El valor p es 0,046. (Con la corrección de Yates, que SPSS muestra en la fila siguiente, χ² = 3,24 y p = 0,072: el resultado está en el límite y conviene no darle más peso del que tiene.)

**5. Intensidad.**

> φ = √(4,00 / 100) = 0,20

V de Cramer coincide: V = √(4,00 / (100 · 1)) = 0,20. Es una asociación pequeña-media.

**6. El efecto de N.** Si la misma tabla tuviera diez veces más casos (300, 200 / 200, 300; N = 1 000), los porcentajes serían idénticos (60 % frente a 40 %), pero χ² = 40, con un valor p minúsculo. En cambio, φ seguiría valiendo 0,20. χ² informa de si la asociación es compatible con el azar; φ, de cuán fuerte es.

**Interpretación.** Los datos indican una asociación entre hacer el taller y aprobar. Como la asignación fue aleatoria, la diferencia puede atribuirse con razonable confianza al taller (Unidad 12). Si los estudiantes hubieran elegido libremente hacer el taller, la motivación podría ser una variable de confusión.

### Mito frecuente

**Mito:** «Cuanto mayor es χ², más fuerte es la relación entre las variables».

**Realidad:** χ² crece con el tamaño de la muestra. Con proporciones idénticas, la tabla de N = 1 000 da un χ² diez veces mayor que la de N = 100. Para la intensidad hay que mirar φ o la V de Cramer, y los porcentajes.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Tabla de contingencia | Tabla de doble entrada con las frecuencias conjuntas de dos variables categóricas |
| Frecuencias marginales | Totales de cada fila y de cada columna |
| Distribución condicionada | Porcentajes por fila o por columna |
| Frecuencia esperada | (total de fila × total de columna) / N: lo esperable si hay independencia |
| Chi cuadrado de Pearson | Σ (n − e)² / e: discrepancia entre frecuencias observadas y esperadas |
| Grados de libertad | (I − 1) · (J − 1) en una tabla I × J |
| Coeficiente phi | √(χ² / N): intensidad de la asociación en tablas 2 × 2 |
| V de Cramer | √(χ² / (N · (k − 1))): intensidad en tablas de cualquier tamaño |

### Clave PIR

**Prioridad media.** Se pregunta cómo se calculan las frecuencias esperadas y los grados de libertad, qué indica χ² = 0, el supuesto de las esperadas mayores o iguales que 5 y la diferencia entre χ² (depende de N) y φ o V (no dependen de N). Trampa típica: aplicar el criterio de 5 a las frecuencias observadas en lugar de a las esperadas.

### Autoevaluación

**1.** En una tabla de contingencia, la frecuencia esperada de una casilla se calcula como…
a) total de la fila × total de la columna / N
b) frecuencia observada / N
c) total de la fila / total de la columna

**2.** ¿Cuántos grados de libertad tiene una tabla 3 × 4?
a) 12
b) 6
c) 7

**3.** Si se multiplican por 10 todas las frecuencias de una tabla…
a) χ² y φ se multiplican por 10
b) χ² no cambia y φ se multiplica por 10
c) χ² se multiplica por 10 y φ no cambia

**4.** El supuesto de que las frecuencias sean al menos 5 se refiere a las frecuencias…
a) observadas
b) esperadas
c) marginales

**5.** Para medir la intensidad de la asociación en una tabla 3 × 3 se usa…
a) la V de Cramer
b) el coeficiente phi
c) el valor de χ²

### Soluciones

**1 a.** Es la frecuencia que habría si las variables fueran independientes con los mismos marginales. **2 b.** (3 − 1) · (4 − 1) = 6. **3 c.** Las proporciones no cambian, así que la intensidad tampoco; χ² crece con N. **4 b.** Es un error frecuente aplicarlo a las observadas. **5 a.** φ es para tablas 2 × 2, y χ² no mide intensidad.
