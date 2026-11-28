## Unidad 3 · Equivocarse al decidir: errores, potencia y tamaño muestral

**Objetivos:** relacionar el error tipo I, el error tipo II y la potencia en una misma representación gráfica; identificar los factores de los que depende la potencia de una prueba; calcular el tamaño muestral necesario antes de recoger los datos; valorar la potencia real de la investigación psicológica y por qué la potencia observada post hoc no aporta información.

### 3.1 Error tipo I, error tipo II y su equilibrio

Toda decisión tomada con una muestra puede fallar en dos direcciones. La tabla de decisiones se estudió en Fundamentos de Estadística; aquí se recuerda para trabajar con ella.

| Decisión / Realidad | H₀ verdadera | H₀ falsa |
| --- | --- | --- |
| Rechazar H₀ | **Error tipo I** (falso positivo), probabilidad α | Acierto, probabilidad 1 − β (**potencia**) |
| Mantener H₀ | Acierto, probabilidad 1 − α | **Error tipo II** (falso negativo), probabilidad β |

**α** la fija quien investiga antes de ver los datos: es el riesgo máximo de falso positivo que acepta. **β** no se elige directamente: depende del tamaño real del efecto, de n, de α y de la variabilidad de las medidas. La **potencia** (1 − β) es la probabilidad de rechazar H₀ cuando hay un efecto del tamaño supuesto. Por convención se pide al menos 0,80 (Cohen, 1988): un 20 % de riesgo de no detectar ese efecto.

Para verlo se dibujan a la vez dos distribuciones del estadístico: la que tendría si H₀ fuera cierta y la que tendría con una H₁ concreta. En una t de dos grupos independientes, la distribución bajo H₁ se desplaza unas d·√(n/2) unidades, donde d es el tamaño del efecto y n las personas por grupo.

![](h0-h1-potencia.png)

Figura 3.1. **Errores y potencia con dos tamaños muestrales.** En el panel A, con d = 0,5 y 32 personas por grupo, las distribuciones bajo H₀ (azul) y H₁ (rojo) se solapan mucho: α/2 queda en cada cola de H₀, β a la izquierda del valor crítico y la potencia, de 0,50, a la derecha. En el panel B, con 64 por grupo, se separan más y la potencia sube a 0,80. Esquema con valores calculados. Elaboración propia (SAIMAP).

Como muestra la figura 3.1, los valores críticos los marca solo la distribución de H₀. Una vez colocados, la parte de la distribución de H₁ que cae en la zona de no rechazo es β, y la que cae en la zona de rechazo es la potencia. De ahí salen dos ideas muy preguntadas:

- **Con n y efecto fijos, α y β varían en sentido inverso.** Si se pasa de α = 0,05 a 0,01, los valores críticos se alejan y más parte de la distribución de H₁ queda en la zona de no rechazo. Menos falsos positivos se pagan con más falsos negativos.
- **Para reducir los dos errores a la vez** hay que separar o estrechar las distribuciones: más participantes, medidas más precisas o diseños más eficientes.

El equilibrio entre errores no es solo técnico. En un cribado de riesgo de suicidio, un falso negativo es mucho más grave que un falso positivo, que solo supone una entrevista más. Al anunciar que un tratamiento nuevo supera al estándar, en cambio, un falso positivo puede llevar a abandonar algo que funciona. Por eso se defiende **justificar** α y la potencia según el coste de cada error, en lugar de aplicarlos por inercia (Lakens et al., 2018).

Dos matices. Primero, α es una probabilidad **condicionada** a que H₀ sea cierta: no es la proporción de resultados significativos que son falsos, que depende también de la potencia y de cuántas hipótesis estudiadas son verdaderas (Ioannidis, 2005). Segundo, la potencia se calcula **para un efecto supuesto**: no existe «la potencia de un estudio» sin decir para qué efecto.

### 3.2 De qué depende la potencia

La potencia aumenta cuando la distribución de H₁ se aleja de la de H₀ o cuando ambas se estrechan. Esos dos movimientos tienen cinco palancas:

| Factor | Efecto sobre la potencia | Precio que se paga |
| --- | --- | --- |
| Tamaño del efecto mayor | Aumenta | No se controla: es una propiedad de la realidad |
| n mayor | Aumenta | Más tiempo, dinero y participantes |
| α mayor | Aumenta | Más errores tipo I |
| Menor variabilidad (medidas fiables, muestras homogéneas, diseño intrasujeto) | Aumenta | Instrumentos mejores; efectos de orden en el diseño intrasujeto |
| Contraste unilateral en la dirección correcta | Aumenta | Ninguna potencia para detectar un efecto en la dirección contraria |

**El tamaño del efecto.** Es la palanca más potente y la única que no se elige. La n necesaria crece con el cuadrado del inverso del efecto: con α = 0,05 bilateral y potencia 0,80, una t de dos grupos necesita 26 personas por grupo si d = 0,8, 64 si d = 0,5 y 394 si d = 0,2 (ver Fundamentos de Estadística).

**El tamaño de la muestra.** Al crecer n, el error típico baja con √n. Con d = 0,5, pasar de 32 a 64 personas por grupo eleva la potencia de 0,50 a 0,80 (figura 3.1). Con 20 por grupo se queda en 0,34: dos de cada tres estudios así no detectarían un efecto mediano real.

**La variabilidad.** Todo lo que reduce el «ruido» aumenta la potencia. Un instrumento poco fiable añade error de medida y diluye las diferencias (la atenuación se estudia en Psicometría). El **diseño intrasujeto** reduce mucho la variabilidad, porque cada persona es su propio control: con d = 0,5 y una correlación de 0,5 entre las dos medidas, una t relacionada alcanza la potencia de 0,80 con 34 personas, frente a las 128 (64 + 64) del diseño entre grupos. A cambio, aparecen efectos de práctica, fatiga o arrastre que obligan a contrabalancear (Unidad 10 y Métodos y Diseños de Investigación).

**α y el número de colas.** Subir α aumenta la potencia, pero traslada el riesgo de un error al otro. El contraste unilateral concentra α en una cola (con d = 0,5 bastan 51 por grupo en lugar de 64), pero solo es legítimo si la dirección se fijó antes de ver los datos (Unidad 2). Bajar α encarece el estudio: con α = 0,005, el umbral propuesto por Benjamin et al. (2018), hacen falta 109 personas por grupo en lugar de 64, aproximadamente un 70 % más.

La potencia no es una propiedad fija de la prueba, sino del **diseño completo**: la misma t puede tener una potencia de 0,30 o de 0,95 según el efecto, la muestra, la fiabilidad y el diseño. Cuando se cumplen los supuestos paramétricos, las pruebas no paramétricas suelen ser algo menos potentes (Unidad 7).

### 3.3 Calcular el tamaño muestral antes de recoger datos

El **análisis de potencia a priori** responde a la pregunta «¿cuántas personas necesito?» antes de empezar. Se fijan tres valores y se despeja el cuarto:

1. **α** (habitualmente 0,05 bilateral, o el que se justifique).
2. **La potencia deseada** (0,80 como mínimo; 0,90 si un falso negativo es costoso).
3. **El tamaño del efecto** que se quiere poder detectar.
4. Resultado: **n** por grupo.

El paso delicado es el tercero. De mejor a peor justificadas:

- **El menor efecto de interés** (SESOI, *smallest effect size of interest*): la diferencia más pequeña con importancia práctica o teórica, como la reducción mínima en una escala de insomnio que un clínico consideraría relevante. Es la opción más defendible (Unidad 6).
- **Un metaanálisis** sobre la misma pregunta, mejor si corrige el sesgo de publicación.
- **Un estudio previo aislado o un piloto.** Es la más arriesgada, porque los efectos de estudios pequeños tienden a estar inflados. En la Open Science Collaboration (2015), el efecto medio pasó de r = 0,403 en los originales a r = 0,197 en las réplicas; en Many Labs 2, la mediana de d bajó de 0,60 a 0,15 (Klein et al., 2018). Un efecto inflado lleva a muestras demasiado pequeñas.

![m](potencia-curvas.png)

Figura 3.2. **Potencia según el tamaño de cada grupo.** Curvas de potencia de la t para dos grupos independientes (α = 0,05 bilateral) con d = 0,2, 0,5 y 0,8; la línea horizontal marca 0,80, que se alcanza con 26 y 64 personas por grupo para d = 0,8 y 0,5. Para d = 0,2 harían falta 394 por grupo: con 200, la potencia ronda 0,51. Calculado con la t no central. Elaboración propia (SAIMAP).

La figura 3.2 muestra que las curvas no son rectas: al principio cada participante añadido sube mucho la potencia, y cerca de 0,80 cada punto cuesta más. También muestra lo caros que son los efectos pequeños.

Para una t de dos grupos, una aproximación basada en la normal ayuda a entender la lógica:

> n por grupo ≈ 2 · (z₁₋α/₂ + z₁₋β)² / d²

Con α = 0,05 bilateral, z₁₋α/₂ = 1,96; con potencia 0,80, z₁₋β = 0,84. El cálculo exacto usa la **distribución t no central** y da valores algo mayores. En la práctica se usa software: **G∗Power** es el programa gratuito más extendido para este fin, y R ofrece funciones equivalentes. El resultado debe **declararse en el informe**: JARS-Quant pide justificar el tamaño muestral (Appelbaum et al., 2018) y el preregistro lo deja fijado antes de los datos (Unidad 5).

Dos ajustes habituales: prever las **pérdidas** (con un 15 % de abandonos, se divide la n entre 0,85) y, si habrá varias comparaciones con α corregido, calcular la potencia con ese α (Unidad 12).

### Ejemplo resuelto · Tamaño muestral para un ensayo con dos grupos

Un servicio universitario quiere comparar un taller de higiene del sueño con una lista de espera. La variable dependiente es una escala de insomnio. El equipo considera que una reducción de 3 puntos es la menor diferencia clínicamente relevante y, por estudios con la misma escala, estima una DT de 7,5 puntos (datos ficticios).

**1. Tamaño del efecto de interés.**

> d = 3 / 7,5 = 0,40

**2. Criterios.** α = 0,05 bilateral, potencia 0,80, dos grupos independientes del mismo tamaño.

**3. Aproximación normal.**

> n ≈ 2 · (1,96 + 0,84)² / 0,40² = 2 · 7,84 / 0,16 ≈ 98 por grupo

**4. Cálculo exacto (t no central).** Hacen falta **100 personas por grupo**. Con potencia 0,90 serían 133 por grupo.

**5. Pérdidas previstas del 15 %.**

> 100 / 0,85 = 117,6 → 118 por grupo, 236 en total

**6. Con menos muestra.** Con 50 por grupo, la potencia para d = 0,40 sería de 0,51. Si se hubiera planificado con un d = 0,80 de un piloto pequeño, se habrían reclutado 26 por grupo, con una potencia real de 0,29.

**7. Informe.** «Con 100 participantes por grupo, una prueba t bilateral (α = 0,05) tiene una potencia de 0,80 para detectar la diferencia mínima clínicamente relevante de 3 puntos (d = 0,40); se reclutarán 118 por grupo para compensar un 15 % de pérdidas.»

### 3.4 La potencia real de la psicología y el mito de la potencia observada

Cohen (1962) revisó los artículos de un volumen de 1960 de una revista de psicología anormal y social y calculó su potencia para efectos de distinto tamaño. Para efectos medianos, la potencia mediana rondaba 0,46: menos que lanzar una moneda. Más de veinte años después, Sedlmeier y Gigerenzer (1989) repitieron el análisis con una revista de 1984 y obtuvieron una mediana de 0,37; solo 2 de los 64 experimentos mencionaban la potencia.

![m](potencia-historia.png)

Figura 3.3. **Potencia mediana para efectos medianos a lo largo del tiempo.** Cohen (1962): ≈ 0,46; Sedlmeier y Gigerenzer (1989): 0,37; Szucs e Ioannidis (2017, corregido): 0,46. En otro color, la potencia mediana para todos los efectos en neurociencia según Button et al. (2013): 0,21. La línea marca 0,80. Datos publicados. Elaboración propia (SAIMAP).

Como muestra la figura 3.3, la situación apenas ha cambiado. Szucs e Ioannidis (2017) analizaron 26.841 resultados estadísticos de 3.801 artículos de psicología cognitiva y neurociencia y estimaron potencias medianas de 0,12, 0,46 y 0,78 para efectos pequeños, medianos y grandes. Button et al. (2013) estimaron una potencia mediana del 21 % en 730 estudios de 49 metaanálisis de neurociencia.

La baja potencia tiene tres consecuencias:

- **Muchos falsos negativos**, que a menudo se leen, erróneamente, como ausencia de efecto (Unidad 2).
- **Menos resultados significativos verdaderos**: cuanto menos potentes son los estudios de un campo, mayor es la parte de sus resultados significativos que son falsos positivos (Ioannidis, 2005; Button et al., 2013).
- **Efectos inflados**: con poca potencia, solo superan el umbral las muestras que por azar sobrestiman el efecto; si además solo se publica lo significativo, la literatura acumula efectos exagerados (Unidad 5).

**La potencia observada.** Algunos programas ofrecen una potencia «observada» o post hoc, calculada tomando como verdadero el efecto de la propia muestra. Parece útil para interpretar un resultado no significativo, pero no lo es: para una prueba dada, es una **transformación directa del valor p** y no contiene información nueva (Hoenig y Heisey, 2001). Con p = 0,05 exacto, la potencia observada ronda 0,50; con p mayor, es menor. Decir «no fue significativo porque la potencia era baja», con la potencia calculada sobre el mismo resultado, es un razonamiento circular.

Después del estudio sirven otras herramientas: el **intervalo de confianza del efecto** (Unidad 4), que muestra qué efectos son compatibles con los datos; el **análisis de sensibilidad**, que indica el menor efecto que podía detectar el estudio con su n, y, para afirmar que no hay un efecto relevante, una prueba de equivalencia o un factor de Bayes (Unidad 6).

### Consenso y debate

**Consenso:** el tamaño muestral se planifica antes de recoger los datos y se justifica en el informe (Appelbaum et al., 2018), con una potencia mínima habitual de 0,80 para el efecto de interés (Cohen, 1988). La potencia observada post hoc no añade nada a p (Hoenig y Heisey, 2001). La potencia de la psicología ha sido baja durante décadas (Cohen, 1962; Szucs e Ioannidis, 2017).

**Debate:** qué α usar: 0,005 para nuevos descubrimientos, a costa de un 70 % más de muestra (Benjamin et al., 2018), o un α justificado en cada estudio (Lakens et al., 2018). También se discute qué efecto usar al planificar cuando no hay un menor efecto de interés claro y los publicados pueden estar inflados.

### Mito frecuente

**Mito:** «Si un resultado no es significativo, se calcula la potencia observada: si es baja, el efecto existe pero faltó muestra».

**Realidad:** la potencia observada usa el efecto de la propia muestra y es una transformación de p: un p alto implica siempre una potencia observada baja (Hoenig y Heisey, 2001). Para interpretar un resultado no significativo hay que mirar el IC del efecto, un análisis de sensibilidad o una prueba de equivalencia.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Error tipo I | Rechazar H₀ siendo verdadera; su probabilidad máxima es α |
| Error tipo II | Mantener H₀ siendo falsa; su probabilidad es β |
| Potencia | Probabilidad de rechazar H₀ cuando existe un efecto del tamaño supuesto (1 − β) |
| Análisis de potencia a priori | Cálculo de la n necesaria a partir de α, la potencia deseada y el efecto de interés |
| Menor efecto de interés (SESOI) | Tamaño del efecto más pequeño que tendría importancia práctica o teórica |
| t no central | Distribución del estadístico t cuando H₁ es cierta; se usa para calcular la potencia |
| Análisis de sensibilidad | Cálculo del menor efecto que un estudio podía detectar con su n, α y potencia |
| Potencia observada | Potencia calculada con el efecto muestral; equivale a una transformación de p |

### Clave PIR

**Prioridad alta.** Se pregunta la definición de α, β y potencia, qué factores aumentan la potencia y la relación inversa entre α y β con n y efecto fijos. Es frecuente el formato «señale la INCORRECTA» con opciones como «aumentar n eleva α» o «el bilateral es más potente que el unilateral en la dirección correcta». Otra trampa es confundir α con la proporción de resultados significativos que son falsos.

### Autoevaluación

**1.** Con el tamaño del efecto y n fijos, si se reduce α de 0,05 a 0,01…
a) aumenta la potencia del contraste
b) aumenta la probabilidad de error tipo II
c) aumenta la probabilidad de error tipo I

**2.** Para una t de dos grupos independientes con α = 0,05 bilateral, potencia 0,80 y d = 0,5, hacen falta aproximadamente…
a) 64 personas por grupo
b) 26 personas por grupo
c) 394 personas por grupo

**3.** Un estudio obtiene p = 0,05 exactamente. Su potencia observada post hoc será aproximadamente…
a) 0,80
b) 0,95
c) 0,50

**4.** ¿Qué cambio en el diseño reduce la potencia?
a) Pasar de un diseño entre grupos a uno intrasujeto
b) Usar un instrumento con menor fiabilidad
c) Aumentar α de 0,05 a 0,10

**5.** Planificar la muestra con el tamaño del efecto de un estudio piloto pequeño tiende a…
a) sobrestimar la n necesaria
b) no afectar a la n si α es 0,05
c) infraestimar la n necesaria

### Soluciones

**1 b.** Los valores críticos se alejan y una parte mayor de la distribución de H₁ queda en la zona de no rechazo. **2 a.** 26 corresponde a d = 0,8 y 394 a d = 0,2. **3 c.** La potencia observada es una transformación de p; con p = 0,05 el estadístico coincide con el valor crítico y la potencia observada ronda 0,50. **4 b.** El error de medida aumenta la variabilidad y diluye el efecto; las otras dos opciones aumentan la potencia. **5 c.** Los efectos de estudios pequeños suelen estar inflados, así que la muestra calculada resulta insuficiente.

## Unidad 4 · Cuánto importa un resultado: tamaños del efecto e intervalos

**Objetivos:** explicar para qué sirve un tamaño del efecto y distinguir las familias d y r; calcular e interpretar d, g, η², ω² y otros índices habituales; construir e interpretar correctamente un intervalo de confianza; valorar la magnitud de un efecto según el contexto y no solo según los cortes de Cohen.

### 4.1 Para qué sirve un tamaño del efecto: familias d y r

El valor p dice si los datos son compatibles con H₀ (Unidad 2), no **cuánto** difieren los grupos. Como depende a la vez del efecto y de n, una diferencia trivial con 20.000 participantes puede dar p < 0,001 y una importante con 15 puede no ser significativa. El **tamaño del efecto** cuantifica la magnitud de una diferencia o relación con independencia de n. Sirve para **interpretar** un resultado, para **comparar y acumular** estudios con escalas distintas (los metaanálisis combinan tamaños del efecto, no valores p) y para **planificar** la potencia (Unidad 3).

Los índices se agrupan en dos familias:

| Familia | Qué expresa | Índices habituales | Uso típico |
| --- | --- | --- | --- |
| **d** (diferencias) | Diferencia de medias en unidades de desviación típica | d de Cohen, g de Hedges, Δ de Glass, d_z | Prueba t, comparación de dos condiciones |
| **r** (asociación) | Grado de relación o proporción de varianza explicada | r, R², η², ω², f | Correlación, regresión, ANOVA |

Las dos familias son convertibles. Con grupos de igual tamaño:

> r = d / √(d² + 4)

> d = 2r / √(1 − r²)

Los cortes de una familia no coinciden con los de la otra: un d = 0,5, «mediano», equivale a r ≈ 0,24, por debajo del r = 0,3 que Cohen llamó mediano.

Un d es una cifra abstracta. Para hacerlo tangible se traduce a índices de **solapamiento** entre las dos distribuciones:

- **Probabilidad de superioridad** (PS): probabilidad de que una persona al azar del grupo 1 puntúe más que una al azar del grupo 2. Con normales de igual DT, PS = Φ(d/√2), donde Φ es la función de distribución de la normal tipificada.
- **U3 de Cohen**: proporción del grupo 1 que supera la media del grupo 2, U3 = Φ(d).

![](solapamiento-d.png)

Figura 4.1. **Solapamiento de dos distribuciones según d.** Dos normales de igual DT separadas d = 0,2, 0,5 y 0,8. La probabilidad de superioridad es 0,56, 0,64 y 0,71, y el U3 de Cohen, 58 %, 69 % y 79 %. Esquema con valores calculados. Elaboración propia (SAIMAP).

Como muestra la figura 4.1, incluso un efecto «grande» deja dos distribuciones muy solapadas. Si un programa de lectura tiene d = 0,8 frente a la enseñanza habitual, un alumno al azar del programa leerá mejor que uno del grupo habitual en el 71 % de los emparejamientos, no siempre, y un 21 % del programa queda por debajo de la media habitual. Esta traducción ayuda a comunicar resultados y protege contra la idea de que un efecto afecta igual a todo el mundo.

Además, todo tamaño del efecto muestral es una **estimación** con su propio error: informar «d = 0,67» sin intervalo es como dar una media sin error típico (apartado 4.3).

### 4.2 Índices de diferencia de medias y de varianza explicada

**La familia d.** Todos los índices de esta familia dividen una diferencia de medias por una desviación típica. Lo que cambia es **qué desviación típica** se usa, y por eso Lakens (2013) recomienda indicar siempre el **estandarizador**.

| Índice | Fórmula | Cuándo se usa |
| --- | --- | --- |
| d de Cohen (d_s) | (M₁ − M₂) / sₚ | Dos grupos independientes, DT combinada |
| g de Hedges | d · [1 − 3 / (4(n₁ + n₂) − 9)] | Igual que d, con corrección del sesgo en muestras pequeñas (Hedges, 1981) |
| Δ de Glass | (M₁ − M₂) / s_control | Cuando el tratamiento cambia la variabilidad; se usa la DT del grupo de control (Glass, 1976) |
| d_z, d_av, d_rm | Varían según el denominador | Medidas repetidas (Unidad 10) |

La DT combinada es:

> sₚ = √{[(n₁ − 1)s₁² + (n₂ − 1)s₂²] / (n₁ + n₂ − 2)}

Si solo se dispone del estadístico t de dos grupos independientes, d se recupera así:

> d = t · √(1/n₁ + 1/n₂)

La d de Cohen **sobrestima ligeramente** el efecto poblacional en muestras pequeñas. La **g de Hedges** la multiplica por un factor algo menor que 1 que se acerca a 1 al crecer n: con 38 participantes vale 0,979; con 200, más de 0,99. Con muestras pequeñas se prefiere g. Las versiones recientes de SPSS dan d y g en la salida de la prueba t, y jamovi y JASP también los calculan.

**La familia r.** Para dos variables cuantitativas se usa r de Pearson (ver Fundamentos de Estadística) y r², la proporción de varianza compartida. En el ANOVA, el índice básico es **eta cuadrado**, la proporción de la variabilidad total asociada al factor:

> η² = SC_entre / SC_total

Está **sesgado al alza**: en la muestra siempre aparece algo de variabilidad entre grupos aunque en la población no haya diferencias. **Omega cuadrado** corrige ese sesgo:

> ω² = [SC_entre − (k − 1) · MC_intra] / (SC_total + MC_intra)

Por ejemplo, en un ANOVA con 3 grupos y 60 personas, con SC_entre = 30 y SC_total = 200 (datos ficticios), MC_intra = 170/57 = 2,98, η² = 0,15 y ω² = 0,12. La diferencia se reduce al crecer la muestra.

Otros índices de la familia aparecerán más adelante: la **f de Cohen**, f = √[η² / (1 − η²)], que usan los programas de potencia para el ANOVA (en el ejemplo, f = 0,42); el **η² parcial**, que SPSS da por defecto y que en diseños factoriales no coincide con η² (Unidad 14), y **R²** y **f²** en regresión (Unidades 15 y 16).

Si la pregunta es «cuánto difieren dos condiciones», la familia d es más directa; si es «cuánta variabilidad explica un factor», lo es la familia r. Y cuando la escala tiene un significado claro (minutos de sueño, cigarrillos, días de baja), la **diferencia de medias en la escala original** con su intervalo suele ser el tamaño del efecto más informativo.

### 4.3 Intervalos de confianza: construcción e interpretación

Un **intervalo de confianza** (IC) acompaña a una estimación puntual con un rango de valores compatibles con los datos. La construcción básica es la misma para casi cualquier parámetro:

> IC = estimación ± valor crítico · error típico

Para la diferencia entre dos medias independientes se usa la t con n₁ + n₂ − 2 gl y el error típico de la diferencia. Para d, una aproximación habitual del error típico es:

> ET_d ≈ √[(n₁ + n₂)/(n₁ · n₂) + d² / (2(n₁ + n₂))]

Los programas usan la t no central, más exacta, pero la aproximación basta para ver de qué depende. Con d = 0,5 y 20 personas por grupo, el IC 95 % va de −0,13 a 1,13: compatible con un efecto ligeramente negativo y con uno muy grande. Con 100 por grupo, va de 0,22 a 0,78.

**Amplitud.** El intervalo se ensancha al subir la confianza (99 % frente a 95 %) y con más variabilidad, y se estrecha al crecer n: para reducir la amplitud a la mitad hay que **cuadruplicar** la muestra. La amplitud mide la **precisión**: un intervalo ancho avisa de que el estudio informa poco, sea o no significativo.

**Interpretación correcta.** El 95 % es una propiedad del **procedimiento**: si se repitiera el estudio muchas veces, alrededor del 95 % de los intervalos calculados contendría el parámetro.

![m](danza-ic.png)

Figura 4.2. **La danza de los intervalos.** IC 95 % calculados con la t en 25 muestras simuladas de n = 20 de una población con μ = 50 y σ = 10. En esta tirada, 23 intervalos contienen μ y 2 no (en rojo). Cada intervalo concreto acierta o falla; el 95 % describe el método. Simulación. Elaboración propia (SAIMAP).

Como muestra la figura 4.2, los intervalos «bailan» de una muestra a otra: cambian de centro y de amplitud, y de vez en cuando uno no alcanza μ. Un intervalo concreto contiene el parámetro o no. Para decir que hay un 95 % de probabilidad de que el parámetro esté en un intervalo hace falta un **intervalo de credibilidad** bayesiano, que admite esa lectura dado el modelo y la distribución previa (Unidad 6).

**Relación con el contraste.** Un contraste bilateral con nivel α rechaza H₀ si y solo si el valor de H₀ queda fuera del IC al (1 − α) · 100 % (ver Fundamentos de Estadística). El IC contiene, pues, la decisión del contraste y añade magnitud y precisión. Es la idea central de la **«nueva estadística»** (Cumming, 2014): pasar de «¿hay efecto?» a «¿cuánto efecto, y con qué precisión?», y acumular la evidencia con metaanálisis.

Dos cautelas. Que los IC de dos grupos se solapen **no** implica que su diferencia no sea significativa: hay que mirar el IC de la diferencia. Y el IC refleja solo el error de muestreo, no los sesgos de diseño, de medida o de selección de resultados.

### 4.4 Cortes de Cohen, contexto y relevancia clínica

Cohen (1988; 1992) propuso unos valores de referencia para los índices más habituales:

| Índice | Pequeño | Mediano | Grande |
| --- | --- | --- | --- |
| d | 0,2 | 0,5 | 0,8 |
| r | 0,1 | 0,3 | 0,5 |
| f (ANOVA) | 0,10 | 0,25 | 0,40 |
| η² | 0,01 | 0,06 | 0,14 |
| f² (regresión) | 0,02 | 0,15 | 0,35 |

El propio Cohen los presentó como un **último recurso** para cuando no hubiera mejor referencia, no como una escala universal. Hay tres razones para usarlos con prudencia.

**No reflejan lo habitual en cada campo.** Gignac y Szodorai (2016) recopilaron correlaciones publicadas en psicología y, a partir de sus percentiles, propusieron considerar pequeño, típico y grande un r de 0,10, 0,20 y 0,30. Con esa referencia, un r = 0,30, «mediano» para Cohen, está entre los efectos más grandes que suelen encontrarse.

**La importancia depende del contexto.** Un efecto pequeño puede ser muy relevante si se aplica a toda la población, si la intervención es barata o si el resultado es grave. Una campaña escolar sobre el alcohol con d = 0,2, aplicada a miles de alumnos, puede tener más impacto total que una terapia con d = 0,8 que llega a pocas personas. Y un efecto «grande» en una tarea de laboratorio puede no tener trascendencia práctica. Además, un índice estandarizado depende de la DT de la muestra: la misma mejora de 20 minutos de sueño da un d mayor en una muestra homogénea, con DT pequeña, que en una muy variada, y también cambia con la fiabilidad de la medida. Comparar d de estudios con muestras o instrumentos muy distintos exige cautela.

**Significación estadística no es significación clínica.** En clínica importa si el cambio de cada persona es real y suficiente. Para ello se usan la **diferencia mínima clínicamente importante** (el menor cambio que pacientes o clínicos consideran relevante) y el **índice de cambio fiable** de Jacobson y Truax (1991), que se estudia en Evaluación Psicológica. Un tratamiento puede producir una diferencia media significativa y dejar a la mayoría de los pacientes sin un cambio clínicamente relevante.

Interpretar un efecto exige responder a varias preguntas:

1. ¿Qué tamaño tiene y con qué precisión se ha estimado (IC)?
2. ¿Cómo se compara con los efectos habituales del campo o con otras intervenciones para el mismo problema?
3. ¿Supera el menor efecto de interés fijado de antemano?
4. ¿Qué significa en la escala original o en personas (PS, U3, proporción que mejora)?
5. ¿Qué cuesta conseguirlo?

Un informe que se limita a decir «el efecto fue mediano (d = 0,52)» no ha interpretado el resultado. APA (2020) y JARS-Quant (Appelbaum et al., 2018) piden el tamaño del efecto con su intervalo; valorar su importancia corresponde a la discusión y exige razones del contexto.

### Ejemplo resuelto · Calcular d, g y su intervalo

Un centro de secundaria compara la ansiedad ante los exámenes (escala de 0 a 60) de un grupo que hizo un taller de regulación emocional y un grupo de control (datos ficticios).

| Grupo | n | M | DT |
| --- | --- | --- | --- |
| Taller | 18 | 24,5 | 8,2 |
| Control | 20 | 29,8 | 7,6 |

**1. DT combinada.**

> sₚ² = (17 · 8,2² + 19 · 7,6²) / 36 = 62,24 → sₚ = 7,89

**2. Prueba t.** La diferencia es 29,8 − 24,5 = 5,30 puntos a favor del taller (menos ansiedad).

> ET = √[62,24 · (1/18 + 1/20)] = 2,56

> t(36) = 5,30 / 2,56 = 2,07; p = 0,046

**3. IC 95 % de la diferencia en la escala original.** Con t crítico = 2,03:

> 5,30 ± 2,03 · 2,56 = [0,10; 10,50]

**4. d de Cohen.**

> d = 5,30 / 7,89 = 0,67

**5. g de Hedges.**

> factor = 1 − 3 / (4 · 38 − 9) = 0,979 → g = 0,67 · 0,979 = 0,66

**6. IC 95 % de d.**

> ET_d = √(38/360 + 0,67² / 76) = 0,334

> d ± 1,96 · 0,334 = [0,02; 1,33]

Con la t no central se obtiene [0,01; 1,32], prácticamente igual.

**7. Traducción.** PS = Φ(0,67/√2) = 0,68: en el 68 % de los emparejamientos al azar, el alumno del taller tendría menos ansiedad que el de control.

**8. Interpretación.** El efecto estimado es moderado-grande, pero muy impreciso: el intervalo va de casi nulo a muy grande. Con esta muestra no se sabe si la mejora es trivial o importante.

**9. Informe APA.** «El grupo del taller (M = 24,5; DT = 8,2) mostró menos ansiedad ante los exámenes que el grupo de control (M = 29,8; DT = 7,6), t(36) = 2,07, p = 0,046, g = 0,66, IC 95 % [0,02; 1,30]; diferencia de medias = 5,30 puntos, IC 95 % [0,10; 10,50].»

**En SPSS:** Analizar > Comparar medias, prueba t para muestras independientes; las versiones recientes añaden una tabla con d y g. En jamovi y JASP se pide el tamaño del efecto en la misma prueba.

### Consenso y debate

**Consenso:** todo resultado debe informar el tamaño del efecto con su IC, además del estadístico, los gl y el p exacto (APA, 2020; Appelbaum et al., 2018), indicando el índice y su estandarizador (Lakens, 2013). El 95 % de un IC se refiere al procedimiento. Significación estadística no equivale a importancia práctica ni clínica.

**Debate:** la utilidad de los cortes de Cohen frente a referencias empíricas (Gignac y Szodorai, 2016) o al menor efecto de interés; índices estandarizados o diferencias en la escala original, y el alcance de la «nueva estadística» (Cumming, 2014) frente a mantener el contraste bien usado.

### Mito frecuente

**Mito:** «Si el IC 95 % de una diferencia es [0,10; 10,50], hay un 95 % de probabilidad de que la diferencia real esté entre 0,10 y 10,50».

**Realidad:** en el enfoque frecuentista el parámetro es fijo y cada intervalo lo contiene o no; el 95 % es la tasa de acierto del método a largo plazo. Hoekstra et al. (2014) documentaron este error incluso entre investigadores. La lectura probabilística corresponde al intervalo de credibilidad bayesiano (Unidad 6).

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Tamaño del efecto | Índice que cuantifica la magnitud de una diferencia o relación con independencia de n |
| d de Cohen | Diferencia de medias dividida por la desviación típica combinada |
| g de Hedges | d corregida por su sesgo al alza en muestras pequeñas (Hedges, 1981) |
| Probabilidad de superioridad | Probabilidad de que un caso al azar de un grupo supere a uno al azar del otro |
| η² | Proporción de la variabilidad total asociada a un factor; sesgada al alza |
| ω² | Versión de η² corregida por el sesgo; estima mejor la proporción poblacional |
| Intervalo de confianza | Rango de valores obtenido con un método que contiene el parámetro en el 95 % de las muestras |
| Diferencia mínima clínicamente importante | Menor cambio que pacientes o clínicos consideran relevante |

### Clave PIR

**Prioridad media.** Se pregunta qué mide el tamaño del efecto y por qué no depende de n, los cortes de Cohen para d y r, y la interpretación y la amplitud del IC (qué ocurre al aumentar n o el nivel de confianza). Trampas típicas: leer el IC como una probabilidad sobre el parámetro, creer que un p más pequeño indica un efecto mayor y afirmar que η² y ω² coinciden o que η² no tiene sesgo.

### Autoevaluación

**1.** Con dos distribuciones normales de igual DT separadas d = 0,5, la probabilidad de superioridad es aproximadamente…
a) 0,50
b) 0,64
c) 0,69

**2.** ¿Qué diferencia mejor ω² de η²?
a) ω² corrige el sesgo al alza de η²
b) ω² solo se usa en la prueba t
c) ω² siempre es mayor que η²

**3.** Un estudio obtiene d = 0,67, IC 95 % [0,02; 1,33]. ¿Qué lectura es la más adecuada?
a) Hay un 95 % de probabilidad de que δ esté entre 0,02 y 1,33
b) El efecto es grande y está estimado con mucha precisión
c) Los datos son compatibles con efectos desde casi nulos hasta muy grandes

**4.** Si se cuadruplica el tamaño de la muestra, la amplitud de un IC 95 %…
a) se reduce aproximadamente a la mitad
b) se reduce aproximadamente a la cuarta parte
c) no cambia, porque depende solo del nivel de confianza

**5.** Según los percentiles empíricos de Gignac y Szodorai (2016), un r pequeño, típico y grande en psicología es…
a) 0,10, 0,30 y 0,50
b) 0,10, 0,20 y 0,30
c) 0,20, 0,50 y 0,80

### Soluciones

**1 b.** PS = Φ(0,5/√2) = 0,64; 0,69 es el U3 de Cohen. **2 a.** η² sobrestima la proporción poblacional; ω² es menor y la diferencia se reduce al crecer n. **3 c.** El intervalo es muy ancho; la opción a confunde el IC con un intervalo de credibilidad. **4 a.** El error típico baja con √n, y √4 = 2. **5 b.** La opción a son los cortes de Cohen para r y la c, los de d.
