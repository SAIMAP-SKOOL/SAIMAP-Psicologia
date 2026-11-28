# Capítulo 6 · Predecir y explicar: correlación y regresión lineal

La correlación dice si dos variables varían juntas; la regresión da un paso más y construye una ecuación para predecir una a partir de otra u otras. Este capítulo parte de la regresión simple, con su recta, su bondad de ajuste y sus residuos, y llega a la regresión múltiple, sus diagnósticos y el ANCOVA, que muestran que t, ANOVA y regresión son casos de un mismo modelo lineal.

## Unidad 15 · Correlación y regresión lineal simple

**Objetivos:** elegir entre la correlación de Pearson, la de Spearman y la de medidas repetidas según los datos; calcular e interpretar la recta de mínimos cuadrados y sus coeficientes; evaluar el ajuste con R², el error típico de estimación y la prueba F; usar los residuos para revisar los supuestos del modelo.

### 15.1 Correlación de Pearson, Spearman y de medidas repetidas

La **correlación de Pearson** (r) mide la intensidad y el sentido de la relación **lineal** entre dos variables cuantitativas. Va de −1 a +1, y su cuadrado, r², es la proporción de varianza compartida. Su cálculo, la covarianza y la matriz de correlaciones se estudiaron en Fundamentos de Estadística; aquí se repasan solo las ideas necesarias para la regresión.

Para contrastar si la correlación poblacional (ρ) es distinta de cero se usa un estadístico t con n − 2 gl:

> t = r · √(n − 2) / √(1 − r²)

Con n grande, correlaciones muy pequeñas resultan significativas; con n pequeño, correlaciones notables pueden no serlo. Por eso r se informa con su intervalo de confianza y su magnitud se valora en contexto (Consenso y debate).

**Primero, mirar los datos.** Un mismo r puede proceder de nubes de puntos muy distintas.

![](anscombe.png)

Figura 15.1. **Cuarteto de Anscombe.** Cuatro conjuntos de datos publicados con la misma recta, Ŷ = 3 + 0,5X, y la misma correlación, r ≈ 0,82: una relación lineal con ruido, una curva, una recta con un atípico y una nube vertical con un solo punto alejado que crea por sí solo la correlación. Elaboración propia (SAIMAP) a partir de los datos de Anscombe (1973).

Como muestra la figura 15.1, solo en el primer conjunto tiene sentido resumir la relación con r y una recta.

**Spearman.** La correlación de **Spearman** (rₛ) es la de Pearson aplicada a los **rangos**. Conviene cuando las variables son ordinales, cuando la relación es **monótona** pero no lineal o cuando hay valores extremos que dominarían r. No exige que la relación avance a ritmo constante.

**Correlación de medidas repetidas.** Un error frecuente aparece cuando cada persona aporta varias observaciones: por ejemplo, 30 estudiantes registran durante diez días sus horas de sueño y su estado de ánimo. Si se calcula r con las 300 filas como si fueran independientes, se viola la independencia de las observaciones y se mezclan dos preguntas distintas:

| Pregunta | Nivel | Qué análisis responde |
| --- | --- | --- |
| ¿Quienes duermen más, en promedio, tienen mejor ánimo? | Entre personas | Pearson con una media por persona |
| ¿Los días en que una persona duerme más, está de mejor ánimo? | Dentro de cada persona | Correlación de medidas repetidas |

La **correlación de medidas repetidas** (Bakdash y Marusich, 2017) estima la asociación común **dentro de las personas**: elimina las diferencias medias entre participantes y calcula cuánto covarían las dos variables alrededor de la media de cada uno. Las dos correlaciones pueden diferir mucho, e incluso tener signo contrario.

**Lo que r no dice.** Correlación **no implica causalidad**: puede haber una tercera variable o causalidad inversa (ver Métodos y Diseños de Investigación). Además, la **restricción del rango** reduce r, y los errores de medida lo **atenúan**: con instrumentos poco fiables, la correlación observada infraestima la verdadera (corrección por atenuación, ver Psicometría).

**En SPSS:** **Analizar > Correlacionar > Bivariadas**, marcando Pearson o Spearman. En jamovi y JASP, el módulo de regresión incluye la matriz de correlaciones con diagramas de dispersión.

### 15.2 La recta de mínimos cuadrados

La **regresión lineal simple** busca la recta que mejor predice una variable criterio (Y) a partir de un predictor (X):

> Ŷ = b₀ + b₁X

> Y = b₀ + b₁X + e

**Ŷ** es el valor pronosticado y **e** es el **residuo**, la parte de cada puntuación que la recta no predice: e = Y − Ŷ.

![s](wm-galton.jpg)

Figura 15.2. **Francis Galton**, que dio nombre a la regresión al estudiar la «regresión a la media» de la estatura. Fuente: autor desconocido, Wikimedia Commons, dominio público.

El nombre procede de Galton (figura 15.2): los hijos de padres muy altos tendían a ser altos, pero menos extremos que sus padres. Esa **regresión a la media** aparece siempre que dos medidas no correlacionan perfectamente, y es una amenaza a la validez cuando se seleccionan personas por puntuaciones extremas (ver Métodos y Diseños de Investigación).

**El criterio de mínimos cuadrados.** Entre todas las rectas posibles se elige la que hace mínima la suma de los residuos al cuadrado, Σ(Y − Ŷ)². El método se atribuye a Legendre (1805) y a Gauss. Elevar al cuadrado evita que los residuos positivos y negativos se compensen.

![](minimos-cuadrados.png)

Figura 15.3. **La recta de mínimos cuadrados.** Doce puntos ficticios con la recta ajustada, los residuos como segmentos verticales hasta la recta y la media de Y como referencia; a la derecha, la suma de cuadrados total dividida en la parte explicada por la regresión y la residual, con el R² resultante. Esquema ilustrativo. Elaboración propia (SAIMAP).

Como muestra la figura 15.3, los residuos son distancias **verticales**: el modelo predice Y, no X. Por eso la recta de Y sobre X no coincide con la de X sobre Y, salvo que r = ±1.

**Los coeficientes.** La solución de mínimos cuadrados es:

> b₁ = r · (sᵧ / sₓ) = SPxy / SCx

> b₀ = Ȳ − b₁X̄

| Coeficiente | Qué indica | Unidades |
| --- | --- | --- |
| **b₁** (pendiente) | Cambio medio pronosticado en Y por cada unidad que aumenta X | Las de Y por unidad de X |
| **b₀** (constante) | Valor pronosticado de Y cuando X = 0 | Las de Y |
| **β** (pendiente tipificada) | Cambio en desviaciones típicas de Y por cada desviación típica de X | Sin unidades |

En la regresión simple, **β = r**. La pendiente b₁ depende de las unidades: si X se mide en minutos en lugar de horas, b₁ se divide por 60 y la relación no cambia. La recta pasa siempre por el punto (X̄, Ȳ) y los residuos suman cero.

**Interpretar con cuidado.**

- **b₀ puede no tener sentido**. Si X es la edad de adultos, Y pronosticada a los 0 años es solo un punto de anclaje.
- **No extrapolar**. La recta vale para el rango de X observado.
- **Predecir no es explicar**. Una pendiente significativa indica asociación lineal, no que cambiar X vaya a cambiar Y.

Un ejemplo: en un grupo de opositores, Ŷ = 40 + 2,5X relaciona las horas semanales de simulacros (X) con la nota de un examen de prueba (Y, 0–100). Para quien hace 8 horas se pronostican 40 + 2,5 · 8 = 60 puntos; si nadie del grupo pasó de 12 horas, el pronóstico para 30 no tiene apoyo en los datos.

### 15.3 Bondad del ajuste: R², error típico de estimación y F

Una recta siempre se puede calcular. La pregunta es cuánto mejora la predicción respecto a no usar X y pronosticar a todos la media de Y. La respuesta está en la **partición de la variabilidad**, la misma lógica del ANOVA (Unidad 11):

> SC_T = SC_reg + SC_res

- **SC_T** = Σ(Y − Ȳ)²: variabilidad total de Y alrededor de su media.
- **SC_reg** = Σ(Ŷ − Ȳ)²: parte que la recta explica.
- **SC_res** = Σ(Y − Ŷ)²: parte que queda en los residuos.

**El coeficiente de determinación.**

> R² = SC_reg / SC_T = 1 − SC_res / SC_T

R² es la proporción de la varianza de Y explicada por el modelo. En la regresión simple coincide con r². No tiene cortes universales; como tamaño del efecto puede expresarse con f² = R² / (1 − R²), para el que Cohen (1988) propuso 0,02, 0,15 y 0,35.

**El error típico de estimación.** Es la desviación típica de los residuos, la distancia típica entre lo observado y lo pronosticado:

> Sₑ = √MC_res = √[SC_res / (n − 2)]

Se expresa en las unidades de Y: un Sₑ de 4 puntos en una escala de 0 a 40 indica cuánto suele equivocarse la predicción individual.

**La prueba F del modelo.** Contrasta si el modelo explica más de lo esperable por azar. H₀: la pendiente poblacional es cero (el modelo no predice). Se organiza en una tabla de ANOVA:

| Fuente | SC | gl | MC | F |
| --- | --- | --- | --- | --- |
| Regresión | SC_reg | k | SC_reg / k | MC_reg / MC_res |
| Residual | SC_res | n − k − 1 | SC_res / (n − k − 1) | |
| Total | SC_T | n − 1 | | |

Con un predictor, k = 1. También se puede calcular a partir de R²:

> F = (R² / k) / [(1 − R²) / (n − k − 1)]

**La prueba t de la pendiente.** Contrasta H₀: b₁ = 0 con t = b₁ / ET_b, con n − 2 gl en la regresión simple. Con un solo predictor, la F del modelo, la t de la pendiente y la t de la correlación son la misma prueba: **F = t²** y el valor p coincide. Junto a b₁ debe darse su **IC al 95 %**, que indica con qué precisión se ha estimado la pendiente.

Un ejemplo con datos ficticios: en 50 estudiantes, el tiempo de pantalla antes de dormir explica el 16 % de la varianza de la latencia del sueño (R² = 0,16; r = 0,40). Entonces F(1, 48) = (0,16 / 1) / (0,84 / 48) = 9,14, p = 0,004, y f² = 0,19. Es un efecto claro, pero el 84 % de la variabilidad depende de otras cosas.

**La salida de SPSS.** En **Analizar > Regresión > Lineales**, la VD se coloca en «Dependientes» y el predictor en «Independientes». La salida se lee en tres tablas:

| Tabla | Qué se mira |
| --- | --- |
| Resumen del modelo | R, R², R² corregido, error típico de la estimación y, si se pide, Durbin-Watson |
| ANOVA | F del modelo, sus gl y su significación |
| Coeficientes | B (b₀ y b₁) con su error típico, Beta (β), t, significación e IC de B si se solicita |

En jamovi (**Regression > Linear Regression**) y JASP aparecen tablas equivalentes.

### 15.4 Residuos y diagnóstico básico

Los coeficientes y sus pruebas se apoyan en supuestos sobre los **errores**, no sobre las variables. Siguiendo a Field (2024), son estos, y el primero es el más importante:

1. **Linealidad y aditividad**: la media de Y cambia de forma lineal con X. Si la relación es curva, el modelo está mal especificado y nada de lo demás lo arregla.
2. **Errores con media cero** para cada valor de X.
3. **Homocedasticidad**: la varianza de los errores es la misma en todo el rango de X.
4. **Independencia de los errores**: el residuo de un caso no informa del de otro.
5. **Normalidad de los errores**, relevante sobre todo para los IC y las pruebas con muestras pequeñas.

En regresión **nunca se exige que X o Y sean normales** (Field, 2024): lo que se examina son los residuos.

**Las herramientas.** Los residuos se suelen tipificar (en SPSS, **ZRESID**) para leerlos en una escala común. Las comprobaciones básicas son:

| Comprobación | Herramienta | Qué indica un problema |
| --- | --- | --- |
| Linealidad y homocedasticidad | Residuos tipificados frente a pronosticados (ZRESID × ZPRED) | Curva en U o forma de embudo |
| Normalidad de los errores | Histograma, gráfico P-P o Q-Q de los residuos | Puntos que se alejan de la diagonal |
| Independencia | Durbin-Watson | Valores lejos de 2 |
| Casos extraños | Residuos estudentizados | Valores absolutos mayores que 3 |

El gráfico de residuos frente a pronosticados es el más informativo. Una nube homogénea alrededor de cero indica que los supuestos son razonables; un embudo señala heterocedasticidad, y una curva, falta de linealidad (Unidad 8). El gráfico Q-Q se lee como en la Unidad 7.

**Durbin-Watson.** Va de 0 a 4; un valor próximo a 2 indica ausencia de autocorrelación y, como regla orientativa de Field, valores por debajo de 1 o por encima de 3 son preocupantes. Tiene sentido cuando el orden de los casos significa algo, como mediciones en días sucesivos.

**Qué hacer si algo falla.**

- **No linealidad**: añadir un término cuadrático, transformar una variable o usar un modelo distinto; no basta con informar R².
- **Heterocedasticidad**: errores típicos robustos (como HC3) o bootstrap de los coeficientes (Unidad 8).
- **Residuos extremos**: comprobar primero si son errores de registro. Un caso no se elimina solo por ser incómodo; si se excluye, se justifica y se informa del resultado con y sin él.

**En SPSS**, el cuadro **Gráficos** de la regresión permite situar ZPRED en el eje X y ZRESID en el eje Y y pedir el histograma y el gráfico de probabilidad normal de los residuos; Durbin-Watson se marca en **Estadísticos**. jamovi y JASP ofrecen los mismos gráficos en su apartado de comprobación de supuestos.

Un ejemplo: al predecir la satisfacción laboral a partir del salario, el gráfico muestra un embudo, porque entre los salarios altos la satisfacción se dispersa más. La pendiente puede ser válida, pero su error típico clásico no es fiable.

### Ejemplo resuelto · Recta de regresión con seis casos

Un servicio universitario de orientación registra en seis estudiantes el número de sesiones de un taller de habilidades sociales a las que asistieron (X) y su puntuación final en una escala de asertividad de 0 a 40 (Y). Datos ficticios.

| Caso | X | Y | X − X̄ | Y − Ȳ | (X − X̄)(Y − Ȳ) | (X − X̄)² |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 10 | −2 | −10 | 20 | 4 |
| 2 | 2 | 16 | −1 | −4 | 4 | 1 |
| 3 | 2 | 20 | −1 | 0 | 0 | 1 |
| 4 | 3 | 22 | 0 | 2 | 0 | 0 |
| 5 | 4 | 26 | 1 | 6 | 6 | 1 |
| 6 | 6 | 26 | 3 | 6 | 18 | 9 |
| Suma | 18 | 120 | 0 | 0 | 48 | 16 |

**1. Medias.** X̄ = 18 / 6 = 3; Ȳ = 120 / 6 = 20.

**2. Coeficientes.**

> b₁ = SPxy / SCx = 48 / 16 = 3

> b₀ = Ȳ − b₁X̄ = 20 − 3 · 3 = 11

La recta es **Ŷ = 11 + 3X**: cada sesión adicional se asocia con 3 puntos más de asertividad.

**3. Pronósticos y residuos.** Ŷ = 14, 17, 17, 20, 23 y 29. Los residuos (Y − Ŷ) son −4, −1, 3, 2, 3 y −3; suman 0, como debe ocurrir.

**4. Sumas de cuadrados.** SC_T = Σ(Y − Ȳ)² = 100 + 16 + 0 + 4 + 36 + 36 = 192. SC_res = 16 + 1 + 9 + 4 + 9 + 9 = 48. SC_reg = 192 − 48 = 144.

**5. Ajuste.**

> R² = 144 / 192 = 0,75; r = √0,75 = 0,87

> Sₑ = √(48 / 4) = √12 = 3,46

El número de sesiones explica el 75 % de la varianza de la asertividad en esta muestra. Con solo seis casos, R² corregido es 0,69.

**6. Prueba F.** MC_reg = 144 / 1 = 144; MC_res = 48 / 4 = 12; F(1, 4) = 144 / 12 = 12,00, p = 0,026.

**7. Pendiente.** ET_b = Sₑ / √SCx = 3,46 / 4 = 0,87; t(4) = 3 / 0,87 = 3,46, y 3,46² = 12 = F. Con t crítico de 2,78, IC 95 % de b₁ = 3 ± 2,78 · 0,87 = [0,60; 5,40]. Como en una regresión simple β = r, β = 0,87.

**8. Pronóstico.** Con 5 sesiones, Ŷ = 11 + 3 · 5 = 26 puntos; con 12 no se debe pronosticar (el máximo observado es 6).

**9. Informe APA.** «El número de sesiones predijo la asertividad final, F(1, 4) = 12,00, p = 0,026, R² = 0,75. Cada sesión adicional se asoció con un aumento medio de 3 puntos, b = 3,00, IC 95 % [0,60; 5,40], β = 0,87.»

**10. Límites.** El IC es muy ancho por el n tan pequeño, y sin asignación aleatoria no se sabe si el taller aumenta la asertividad o si los más asertivos asisten más.

### Consenso y debate

**Consenso:** antes de calcular r o ajustar una recta hay que representar los datos (Anscombe, 1973). La correlación y la pendiente indican asociación, no causalidad. Los supuestos se refieren a los errores del modelo, no a la distribución de X o Y (Field, 2024). Junto a R² se informa b con su IC.

**Debate:** cómo valorar la magnitud de una correlación. Los cortes de Cohen (1988) se siguen usando, pero Gignac y Szodorai (2016) muestran que en psicología los valores típicos son más bajos (0,10, 0,20 y 0,30). También se discute cuándo basta la correlación de medidas repetidas (Bakdash y Marusich, 2017) y cuándo hacen falta modelos más complejos para datos con varias observaciones por persona.

### Mito frecuente

**Mito:** «Un R² alto indica que el modelo es bueno y que X causa Y».

**Realidad:** R² mide la proporción de varianza explicada en esa muestra, no si el modelo está bien especificado ni la dirección causal. En el cuarteto de Anscombe (1973), cuatro conjuntos con el mismo r ≈ 0,82, y por tanto el mismo R² ≈ 0,67, corresponden a una recta adecuada, a una curva, a un atípico y a un solo punto influyente. Un R² alto puede deberse a un atípico, a una relación no lineal o a una tercera variable; solo el diseño permite hablar de causalidad.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Correlación de Spearman | Correlación de Pearson aplicada a los rangos; mide relaciones monótonas |
| Correlación de medidas repetidas | Asociación común dentro de las personas cuando cada una aporta varias observaciones |
| Mínimos cuadrados | Criterio que elige la recta que hace mínima la suma de los residuos al cuadrado |
| Pendiente (b₁) | Cambio medio pronosticado en Y por cada unidad de aumento en X |
| Residuo | Diferencia entre el valor observado y el pronosticado: e = Y − Ŷ |
| Coeficiente de determinación (R²) | Proporción de la varianza de Y explicada por el modelo: SC_reg / SC_T |
| Error típico de estimación | Desviación típica de los residuos, en las unidades de Y: √MC_res |
| Regresión a la media | Tendencia de las puntuaciones extremas a acercarse a la media en una segunda medida |

### Clave PIR

**Prioridad alta.** Se pregunta la interpretación de r, R², b₁ y b₀, la relación b₁ = r · (sᵧ / sₓ), los gl de la F del modelo y el cálculo de un pronóstico o un residuo con una recta dada. Trampas típicas: leer R² como prueba de causalidad, creer que X o Y deben ser normales, confundir la pendiente con la correlación y olvidar que en la regresión simple β coincide con r.

### Autoevaluación

**1.** El cuarteto de Anscombe (1973) enseña sobre todo que…
a) una correlación de 0,82 garantiza una relación lineal
b) conjuntos con el mismo r pueden tener formas muy distintas
c) la recta de regresión cambia siempre que cambia la forma

**2.** Si r = 0,50, sᵧ = 10 y sₓ = 5, la pendiente de la recta de Y sobre X vale…
a) 0,25
b) 2,50
c) 1,00

**3.** Con la recta Ŷ = 11 + 3X, una persona con X = 4 obtiene Y = 20. Su residuo es…
a) −3
b) 3
c) 9

**4.** En una regresión simple, R² = 0,36 significa que…
a) X causa el 36 % de los cambios que se producen en Y
b) el 36 % de los casos queda exactamente sobre la recta
c) el 36 % de la varianza de Y se explica por su relación lineal con X

**5.** ¿Qué supuesto de la regresión lineal se formula correctamente?
a) Los errores del modelo se distribuyen de forma aproximadamente normal
b) La variable predictora debe tener una distribución normal
c) La variable criterio debe ser normal en la muestra completa

### Soluciones

**1 b.** Tienen la misma recta y el mismo r, pero solo uno es una relación lineal con ruido; hay que mirar los datos. **2 c.** b₁ = 0,50 · (10 / 5) = 1. **3 a.** Ŷ = 11 + 3 · 4 = 23, y e = 20 − 23 = −3. **4 c.** Es varianza explicada en sentido estadístico, no causal ni proporción de casos. **5 a.** Los supuestos se refieren a los errores; ni X ni Y tienen que ser normales.

## Unidad 16 · Regresión múltiple y ANCOVA

**Objetivos:** interpretar los coeficientes b y β de una regresión múltiple, sus pruebas t y el R² ajustado; detectar colinealidad, casos atípicos y casos influyentes con sus índices; distinguir la entrada forzada, la jerárquica y la de pasos sucesivos; entender el ANCOVA y el ANOVA como casos del modelo lineal general.

### 16.1 Coeficientes b y β, pruebas t y R² ajustado

La **regresión múltiple** pronostica Y a partir de varios predictores a la vez:

> Ŷ = b₀ + b₁X₁ + b₂X₂ + … + bₖXₖ

El criterio sigue siendo el de mínimos cuadrados; lo nuevo es la interpretación de los coeficientes.

**Coeficientes parciales.** Cada bⱼ indica el cambio medio pronosticado en Y por cada unidad que aumenta Xⱼ **manteniendo constantes los demás predictores**. Es un efecto **parcial**: lo que Xⱼ aporta una vez descontado lo que comparte con los otros. Por eso un predictor puede correlacionar con Y y tener un b cercano a cero en el modelo múltiple, si lo que aporta ya lo explican otros.

![m](venn-colinealidad.png)

Figura 16.1. **Varianza única y compartida.** Diagramas de Venn de Y, X₁ y X₂ con predictores poco correlacionados (izquierda) y con colinealidad alta (derecha): parte de la varianza de Y la explica solo X₁, otra solo X₂, otra ambos a la vez y otra queda sin explicar. Con colinealidad alta, el solapamiento entre X₁ y X₂ crece, la parte única de cada predictor se reduce y los errores típicos de b aumentan (VIF). Esquema ilustrativo. Elaboración propia (SAIMAP).

Como muestra la figura 16.1, los coeficientes reflejan la parte **única** de cada predictor; la zona compartida cuenta para R², pero no se atribuye a ninguno.

**b frente a β.** El coeficiente **b** está en las unidades originales: sirve para pronosticar y para describir efectos con sentido práctico («cada hora extra semanal se asocia con un punto más de agotamiento»). El coeficiente tipificado **β** expresa el cambio en desviaciones típicas de Y por cada desviación típica de Xⱼ:

> β = b · (sₓ / sᵧ)

β permite comparar predictores medidos en escalas distintas, pero con cautela: depende de la variabilidad de cada predictor en la muestra y, con predictores correlacionados, deja de ser una medida limpia de importancia relativa (Mito frecuente).

**Pruebas.** Hay dos niveles de contraste:

| Prueba | H₀ | Estadístico | gl |
| --- | --- | --- | --- |
| Modelo global | Todos los b poblacionales (salvo b₀) son 0 | F = (R² / k) / [(1 − R²) / (n − k − 1)] | k y n − k − 1 |
| Cada coeficiente | bⱼ = 0, controlando los demás | t = bⱼ / ETbⱼ | n − k − 1 |

Una F significativa dice que el conjunto predice; no indica qué predictores lo hacen. Puede ocurrir que la F sea significativa y ninguna t lo sea: es una señal típica de colinealidad (16.2).

**R² ajustado.** R² nunca baja al añadir predictores, aunque sean ruido, porque cada uno capta algo de la variabilidad aleatoria de la muestra. El **R² ajustado** corrige ese sesgo:

> R²aj = 1 − (1 − R²) · (n − 1) / (n − k − 1)

Con n = 30, seis predictores y R² = 0,40, el R² ajustado es 0,24: buena parte del ajuste puede ser específica de la muestra.

**Un ejemplo de salida.** Un estudio ficticio con 120 profesionales de enfermería predice el agotamiento emocional (0–40) a partir de las horas extra semanales, el apoyo percibido del equipo y los años de experiencia. El modelo es significativo, F(3, 116) = 31,91, p < 0,001, R² = 0,45, R² ajustado = 0,44.

| Predictor | b | ET | IC 95 % de b | β | t(116) | p |
| --- | --- | --- | --- | --- | --- | --- |
| Constante | 19,51 | 2,30 | [14,95; 24,07] | | 8,48 | < 0,001 |
| Horas extra | 1,03 | 0,13 | [0,77; 1,29] | 0,54 | 7,81 | < 0,001 |
| Apoyo del equipo | −0,40 | 0,07 | [−0,53; −0,26] | −0,39 | −5,73 | < 0,001 |
| Experiencia (años) | −0,10 | 0,06 | [−0,22; 0,02] | −0,11 | −1,58 | 0,117 |

Cada hora extra se asocia con un punto más de agotamiento, a igual apoyo y experiencia; cada punto de apoyo, con 0,40 menos. El IC de la experiencia incluye el 0: los datos son compatibles con un efecto nulo y con efectos pequeños en ambas direcciones. En SPSS es la tabla «Coeficientes» (B, Error estándar, Beta, t y Sig.).

### 16.2 Colinealidad, casos influyentes y otros diagnósticos

**Colinealidad.** Hay **colinealidad** (o multicolinealidad) cuando un predictor puede predecirse bien a partir de los demás. No sesga los coeficientes, pero los vuelve **inestables**: sus errores típicos crecen, los IC se ensanchan y pequeños cambios en los datos pueden alterar su valor o su signo. Se diagnostica para cada predictor con R²ⱼ, la proporción de su varianza que explican los otros predictores:

> Tolerancia = 1 − R²ⱼ

> VIF = 1 / (1 − R²ⱼ)

El **factor de inflación de la varianza** (VIF; FIV en la salida en español de SPSS) indica cuánto se multiplica la varianza de bⱼ por la colinealidad. Con dos predictores que correlacionan 0,90, R²ⱼ = 0,81 y VIF = 5,26: el error típico de cada b se multiplica por √5,26 ≈ 2,29. Los criterios habituales son orientativos:

| Índice | Preocupa | Criterio más estricto |
| --- | --- | --- |
| VIF | > 10 | > 5 |
| Tolerancia | < 0,1 | < 0,2 |

En el ejemplo del agotamiento (16.1), todos los VIF eran cercanos a 1. Un caso típico de colinealidad alta es incluir dos escalas de ansiedad casi equivalentes: la solución es conceptual (combinarlas, quedarse con una o asumir que su efecto no puede repartirse).

**Centrar no es un remedio general.** Restar la media a los predictores reduce solo la colinealidad **no esencial**, la que se crea al construir términos de interacción (X₁ · X₂) o polinómicos (X²). Si dos predictores están muy correlacionados entre sí, centrarlos no cambia esa correlación.

**Atípicos, leverage e influencia.** Un caso puede ser extraño de tres maneras distintas:

- **Atípico en Y**: tiene un residuo grande. Se detecta con los **residuos estudentizados**; valores con |e| > 3 son sospechosos.
- **Leverage alto** (influencia potencial): su combinación de valores en los predictores está lejos del resto. El leverage medio es (k + 1) / n, y preocupan los valores que lo superan dos o tres veces. Con 3 predictores y 100 casos, el medio es 0,04, y la alarma se sitúa entre 0,08 y 0,12.
- **Influyente**: si se elimina, los coeficientes cambian de forma apreciable. Lo resume la **distancia de Cook** (Cook, 1977), que combina residuo y leverage. El criterio clásico es D > 1; uno más liberal, D > 4/n.

![](influencia.png)

Figura 16.2. **Atípicos, leverage e influencia.** Izquierda: un caso atípico en Y con leverage bajo apenas mueve la recta. Centro: un caso con leverage alto situado en la línea no influye. Derecha: un caso con leverage alto fuera de la línea tiene una distancia de Cook alta y cambia la recta; la línea continua incluye el punto y la discontinua lo excluye. Esquema ilustrativo. Elaboración propia (SAIMAP).

Como muestra la figura 16.2, ni un residuo grande ni un leverage alto bastan por sí solos: la influencia aparece cuando se combinan.

**Qué hacer con un caso influyente.** Primero, comprobar si hay un error de registro. Si el dato es legítimo, se analiza con y sin el caso, se informa de ambos resultados y, si hace falta, se usan métodos robustos o bootstrap (Unidad 8). Linealidad, homocedasticidad e independencia se revisan como en la regresión simple (15.4).

**En SPSS:** en **Estadísticos** se piden los diagnósticos de colinealidad (tolerancia y FIV en la tabla de coeficientes) y en **Guardar** se crean variables con los residuos estudentizados, los valores de influencia y las distancias de Cook para revisarlas caso a caso. jamovi y JASP incluyen opciones equivalentes en su apartado de diagnósticos.

### 16.3 Métodos de entrada: jerárquico frente a pasos sucesivos

Con varios predictores hay que decidir cómo entran en el modelo. Es una decisión de diseño, no técnica.

**Entrada forzada** («Introducir» en SPSS). Todos los predictores entran a la vez. Es la opción por defecto cuando hay razones teóricas para incluirlos a todos y no se quiere imponer un orden. Responde a la pregunta: ¿qué aporta cada uno controlando los demás?

**Regresión jerárquica.** El investigador introduce los predictores en **bloques**, en un orden fijado por la teoría o por el diseño antes de ver los datos. Normalmente, primero las variables de control o ya conocidas, y después las nuevas. Lo que interesa es el **cambio en R²** (ΔR²) de cada bloque, que se contrasta con una F de cambio:

> F_cambio = (ΔR² / kₐ) / [(1 − R²_completo) / (n − k_completo − 1)]

donde kₐ es el número de predictores añadidos en el bloque y k_completo, el total del modelo final. Así se responde a una pregunta precisa: ¿explican las variables nuevas algo más allá de lo que ya explicaban las de control?

En el ejemplo ficticio del agotamiento (16.1), un primer bloque con los años de experiencia explica una parte despreciable de la varianza (R² = 0,001). Al añadir horas extra y apoyo del equipo, R² sube a 0,452: ΔR² = 0,45, F_cambio(2, 116) = 47,76, p < 0,001. Las condiciones de trabajo predicen el agotamiento más allá de la experiencia.

**Pasos sucesivos** (*stepwise*). El programa decide qué predictores entran o salen según criterios estadísticos: hacia delante (va añadiendo el que más mejora el ajuste), hacia atrás (parte de todos y elimina los que menos aportan) o por pasos (combina ambos). Sus problemas son serios:

1. **Capitaliza el azar**: elige los predictores que mejor funcionan en esta muestra, incluidas sus peculiaridades aleatorias.
2. **Sesga R² al alza y los valores p a la baja**, porque las pruebas no tienen en cuenta las muchas comparaciones previas.
3. **Es inestable**: con otra muestra, pueden salir predictores distintos.
4. **Sustituye la teoría por un algoritmo**: entre dos predictores colineales, entra el que por poco correlacione más con Y.

| Método | Quién decide el orden | Uso adecuado |
| --- | --- | --- |
| Forzado | Nadie: entran todos | Modelo completo justificado por la teoría |
| Jerárquico | El investigador, antes de los datos | Comprobar el aporte incremental de variables nuevas |
| Pasos sucesivos | El algoritmo, según los datos | Exploración, con validación en otra muestra |

El orden de los bloques de la jerárquica debe fijarse antes de analizar; el preregistro es la forma natural de documentarlo (ver Métodos y Diseños de Investigación).

**Predictores categóricos.** Una variable con dos categorías, como haber recibido o no formación, entra codificada 0/1: su b es la diferencia de medias pronosticada entre los grupos, a igualdad de los demás predictores. Con más de dos categorías se crean k − 1 variables ficticias (*dummy*), cada una comparada con una categoría de referencia. Esta idea conecta directamente con el siguiente apartado.

**En SPSS:** los bloques se definen con el botón «Siguiente» del cuadro de independientes, se elige el método de cada bloque y en **Estadísticos** se marca el cambio en R². En jamovi, la regresión lineal permite definir bloques del modelo y muestra la comparación entre ellos; JASP ofrece opciones parecidas.

### 16.4 El ANCOVA y el modelo lineal general

Las pruebas de este temario parecen técnicas distintas, pero casi todas son casos de un único marco: el **modelo lineal general** (MLG), en el que una VD cuantitativa se expresa como una combinación lineal de predictores más un error:

> Y = b₀ + b₁X₁ + … + bₖXₖ + e

- Una **prueba t** de dos grupos independientes es una regresión con un predictor 0/1: b₁ es la diferencia de medias y su t coincide con la de Student.
- Un **ANOVA de un factor** con k grupos es una regresión con k − 1 variables ficticias; la F del modelo es la F del ANOVA y R² es η².
- Una **regresión múltiple** combina predictores cuantitativos y, si se desea, categóricos.

Por eso comparten supuestos (linealidad, homocedasticidad, independencia, normalidad de los residuos) y diagnósticos (Unidades 7 y 8).

**El ANCOVA.** El **análisis de covarianza** combina un factor categórico (por ejemplo, el grupo de tratamiento) con una o más **covariables** cuantitativas relacionadas con la VD. Tiene dos funciones:

1. **Reducir el error**: la parte de la VD que explica la covariable sale del término de error, lo que aumenta la potencia. Es la misma lógica con la que el diseño de medidas repetidas extrae la variabilidad de los sujetos (Unidad 13).
2. **Ajustar las medias**: compara los grupos como si todos tuvieran el mismo valor medio en la covariable. Son las **medias ajustadas** (en SPSS, medias marginales estimadas).

Un ejemplo: se comparan dos programas para reducir la ansiedad ante los exámenes, con asignación aleatoria. La ansiedad previa (pretest) predice mucho la ansiedad final. Incluida como covariable, retira del error las diferencias individuales previas, y la comparación entre programas gana precisión.

**Supuestos propios.** Además de los del modelo lineal, el ANCOVA exige:

| Supuesto | Qué significa | Cómo se comprueba |
| --- | --- | --- |
| **Homogeneidad de las pendientes** | La relación covariable–VD es igual en todos los grupos | Contrastar la interacción grupo × covariable; debe ser despreciable |
| Relación lineal covariable–VD | La covariable se relaciona linealmente con la VD | Diagrama de dispersión por grupo |
| Covariable independiente del tratamiento | El tratamiento no ha alterado la covariable | Medirla antes de la intervención |

Si las pendientes difieren, el efecto del grupo depende del valor de la covariable y no hay una única diferencia ajustada que informar; es, en realidad, una interacción (Unidad 14).

**Una advertencia importante.** El ANCOVA es más claro en diseños con asignación aleatoria, donde los grupos solo difieren por azar en la covariable. Con grupos naturales que ya difieren en ella (por ejemplo, comparar pacientes y no pacientes controlando la gravedad), ajustar las medias no los convierte en equivalentes: pueden diferir en otras variables no medidas, y la covariable puede formar parte del propio fenómeno. La covariable no sustituye a la asignación aleatoria (ver Métodos y Diseños de Investigación).

**En SPSS:** **Analizar > Modelo lineal general > Univariado**, con la VD en «Variable dependiente», el grupo en «Factores fijos» y la covariable en «Covariables». Para comprobar la homogeneidad de las pendientes se especifica un modelo personalizado que incluya la interacción grupo × covariable. Por defecto se usan sumas de cuadrados de tipo III. En jamovi y JASP, el ANCOVA está en el menú ANOVA, con opción de pedir medias marginales estimadas.

### Consenso y debate

**Consenso:** en regresión múltiple los coeficientes son parciales y se interpretan controlando los demás predictores. Hay que diagnosticar colinealidad, atípicos y casos influyentes antes de interpretar. La regresión jerárquica guiada por la teoría es preferible a los pasos sucesivos, que capitalizan el azar y sesgan R² y p. La t, el ANOVA, la regresión y el ANCOVA son casos del modelo lineal general, y el ANCOVA exige homogeneidad de las pendientes.

**Debate:** los puntos de corte son convencionales: VIF > 10 o > 5, y distancia de Cook > 1 o > 4/n, según el criterio. También se discute el uso del ANCOVA para «igualar» grupos no aleatorizados y cómo cuantificar la importancia relativa de predictores correlacionados.

### Mito frecuente

**Mito:** «El predictor con la β más alta es, sin discusión, el más importante».

**Realidad:** β refleja la contribución única de cada predictor controlando los demás y depende de la variabilidad de las variables en esa muestra. Con predictores correlacionados, la varianza compartida no se asigna a ninguno, los errores típicos crecen y las β pueden cambiar mucho, o incluso de signo, con pequeños cambios en los datos o en el conjunto de predictores (Field, 2024). La β más alta no basta para afirmar qué variable importa más.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Coeficiente parcial (b) | Cambio medio en Y por unidad de Xⱼ manteniendo constantes los demás predictores |
| Coeficiente tipificado (β) | Coeficiente expresado en desviaciones típicas: β = b · (sₓ / sᵧ) |
| R² ajustado | R² corregido por el número de predictores y el tamaño de la muestra |
| VIF | Inflación de la varianza de b por colinealidad: 1 / (1 − R²ⱼ) |
| Leverage | Distancia de un caso al resto en los predictores; influencia potencial sobre el modelo |
| Distancia de Cook | Cambio global en los coeficientes al eliminar un caso (Cook, 1977) |
| Regresión jerárquica | Entrada de predictores en bloques ordenados por la teoría, evaluando ΔR² |
| ANCOVA | Comparación de grupos con una covariable que reduce el error y ajusta las medias |

### Clave PIR

**Prioridad media.** Lo más preguntado es la diferencia entre b y β, la interpretación de los coeficientes parciales, los gl de la F (k y n − k − 1) y para qué sirven el VIF, la tolerancia y la distancia de Cook. Trampa típica: leer β como medida segura de importancia o creer que el R² ajustado puede superar al R²; también aparece el supuesto de homogeneidad de las pendientes del ANCOVA en preguntas de «señale la INCORRECTA».

### Autoevaluación

**1.** Al añadir a un modelo un predictor que solo aporta ruido, lo esperable es que…
a) el R² baje y el R² ajustado suba
b) el R² suba un poco y el R² ajustado pueda bajar
c) el R² y el R² ajustado se mantengan iguales

**2.** Un predictor tiene una tolerancia de 0,20. Su VIF vale…
a) 5
b) 0,80
c) 1,25

**3.** El principal problema de la regresión por pasos sucesivos es que…
a) obliga a introducir todos los predictores a la vez
b) solo admite predictores categóricos codificados 0/1
c) capitaliza el azar y sesga R² al alza y p a la baja

**4.** En un modelo con 200 casos se usa el criterio liberal de la distancia de Cook. Un caso preocupa si supera…
a) 1
b) 0,02
c) 0,20

**5.** ¿Qué supuesto es específico del ANCOVA?
a) La homogeneidad de las pendientes de regresión entre grupos
b) La normalidad de la covariable en cada grupo
c) La esfericidad de las diferencias entre los niveles

### Soluciones

**1 b.** R² nunca baja al añadir predictores; el ajustado penaliza el predictor inútil. **2 a.** VIF = 1 / tolerancia = 1 / 0,20 = 5. **3 c.** Elige predictores por su rendimiento en la muestra, incluidas sus peculiaridades aleatorias. **4 b.** 4/n = 4 / 200 = 0,02; el criterio clásico es D > 1. **5 a.** La relación covariable–VD debe ser igual en todos los grupos; la esfericidad pertenece a las medidas repetidas.
