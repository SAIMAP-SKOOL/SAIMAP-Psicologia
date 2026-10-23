// SAIMAP Psicología · Fundamentos de Estadística · Unidades 13–16
window.COURSE.units.push(
{ n: 13, t: "Covarianza y correlación de Pearson", cap: 4, pir: "alta", mods: [
  { t: "Diagrama de dispersión y covarianza",
    tip: "El diagrama de dispersión es el primer paso para estudiar dos variables cuantitativas: muestra la dirección, la forma y la intensidad de la relación, además de atípicos y grupos. La covarianza promedia los productos de las puntuaciones diferenciales: es positiva si la relación lineal es directa, negativa si es inversa y próxima a 0 si no hay relación lineal. Su problema es que depende de las unidades y no tiene un máximo fijo.",
    v: [
      "Diagrama de dispersión=Gráfico en el que cada caso es un punto con coordenadas (xᵢ, yᵢ)",
      "Covarianza=Media de los productos de las puntuaciones diferenciales de X e Y",
      "Cuasicovarianza=Versión que divide entre n − 1; la que da SPSS por defecto",
      "Puntuación diferencial=Distancia de cada valor a la media de su variable",
      "Relación directa=Al aumentar X tiende a aumentar Y; covarianza positiva",
      "Relación inversa=Al aumentar X tiende a disminuir Y; covarianza negativa",
      "Forma de la relación=Aspecto lineal o curvilíneo que adopta la nube de puntos",
      "Sₓₓ=Covarianza de una variable consigo misma, que coincide con su varianza"
    ],
    g: [
      "Si un caso está por debajo de la media en X y también en Y, el producto de sus diferenciales es ___.|positivo|negativo|nulo",
      "Una covarianza próxima a 0 indica ausencia de relación ___, pero no excluye una relación curvilínea.|lineal|causal|ordinal",
      "Si el tiempo de reacción pasa de segundos a milisegundos, la covarianza se multiplica por ___.|1 000|100|10",
      "SPSS ofrece la cuasicovarianza porque es un estimador ___ de la covarianza poblacional.|insesgado|robusto|estandarizado",
      "Si los productos de las diferenciales suman 16 en n = 4 casos, la covarianza (con n) vale ___.|4|5,33|16"
    ],
    tf: [
      "Una covarianza igual a 0 demuestra que las dos variables no tienen ninguna relación.|F|Solo indica ausencia de relación lineal; puede haber una relación curvilínea muy clara.",
      "La covarianza no tiene un máximo fijo, por lo que no permite juzgar si una relación es fuerte o débil.|V",
      "La covarianza de una variable consigo misma es su varianza.|V",
      "Como no depende de las unidades, la covarianza permite comparar relaciones medidas en escalas distintas.|F|Sí depende de ellas: pasar de segundos a milisegundos la multiplica por 1 000 aunque la relación sea idéntica."
    ],
    q: [
      "X: 1, 3, 5, 7; Y: 2, 2, 6, 6. Los productos de las puntuaciones diferenciales suman 16. ¿Cuánto vale la covarianza con n?|4|5,33|16|Sₓᵧ = 16/4 = 4. Dividir entre n − 1 (16/3 ≈ 5,33) da la cuasicovarianza; 16 es solo la suma de productos.",
      "Una investigadora registra horas de estudio y errores en un examen; la nube de puntos baja de izquierda a derecha. ¿Qué signo tendrá la covarianza?|Negativo|Positivo|Próximo a cero|Si los puntos bajan, quien está por encima de la media en X tiende a estar por debajo en Y: productos negativos.",
      "¿Qué tres aspectos de la relación muestra un diagrama de dispersión?|Dirección, forma e intensidad|Causa, dirección y significación|Media, varianza y asimetría|La nube de puntos muestra dirección (positiva, negativa o nula), forma (lineal o curva) e intensidad, además de atípicos.",
      "¿Qué versión de la covarianza da SPSS por defecto?|La que divide entre n − 1|La que divide entre n|La que divide entre n + 1|SPSS calcula la cuasicovarianza (n − 1), que estima sin sesgo la covarianza de la población."
    ],
    inc: [
      "Sobre la covarianza|Su valor máximo es 1, como el de r|Se basa en las puntuaciones diferenciales|Es positiva en una relación lineal directa|La covarianza no tiene máximo fijo y depende de las unidades; el rango entre −1 y +1 es propio de r."
    ],
    seq: [],
    cls: [
      "Signo de la covarianza|Positiva: relación directa; casos por encima de la media en ambas variables|Negativa: relación inversa; casos por encima en una y por debajo en la otra"
    ] },
  { t: "El coeficiente de correlación de Pearson",
    tip: "r es la covarianza dividida entre el producto de las desviaciones típicas: una covarianza estandarizada, sin unidades, entre −1 y +1. El signo indica la dirección y el valor absoluto, la intensidad de la relación lineal. No cambia al sumar constantes ni al multiplicar por constantes positivas; con una constante negativa solo cambia de signo. No es la pendiente: mide el ajuste a una recta, no su inclinación.",
    v: [
      "Correlación de Pearson=Covarianza dividida entre el producto de las desviaciones típicas",
      "Correlación perfecta=Todos los puntos están sobre una recta; r vale +1 o −1",
      "Simetría de r=La correlación de X con Y es la misma que la de Y con X",
      "Correlación de Spearman=Correlación de Pearson calculada sobre los rangos de los datos",
      "Pendiente (b)=Inclinación de la recta de regresión; depende de las unidades",
      "Correlación nula=Ausencia de relación lineal, no de cualquier relación",
      "Referencias de Cohen=0,10 pequeña, 0,30 media y 0,50 grande, en valor absoluto",
      "Invarianza de r=No cambia al sumar constantes o multiplicar por constantes positivas"
    ],
    g: [
      "Si se multiplica X por una constante negativa, r cambia de ___ pero no de valor absoluto.|signo|escala|unidades",
      "r no varía si la covarianza y las desviaciones típicas se calculan con n o con n − 1, siempre que se use el mismo ___ en todas.|divisor|signo|origen",
      "Con Sₓᵧ = 12, Sₓ = 4 y Sᵧ = 5, la correlación de Pearson vale ___.|0,60|0,03|1,33",
      "Para variables ordinales o con atípicos influyentes se prefiere la correlación de ___.|Spearman|Pearson|Cramer",
      "La correlación y la pendiente de la recta de regresión comparten siempre el ___.|signo|valor|origen"
    ],
    tf: [
      "Si dos muestras tienen r = 0,60, sus rectas de regresión tienen necesariamente la misma pendiente.|F|r mide el ajuste, no la inclinación: b = r · (Sᵧ / Sₓ) depende de las desviaciones típicas.",
      "Sumar 10 puntos a todas las puntuaciones de X no modifica su correlación con Y.|V",
      "Multiplicar X por −2 hace que r se multiplique por −2.|F|Con una constante negativa r solo cambia de signo; su valor absoluto se mantiene.",
      "Cuando r = 0, la pendiente de la recta de regresión también es 0.|V"
    ],
    q: [
      "Con Sₓᵧ = 12, Sₓ² = 16 y Sᵧ² = 25, ¿cuánto vale r?|0,60|0,03|1,33|r = 12/(4 · 5) = 0,60. Dividir entre el producto de varianzas (12/400) es un error, y 1,33 es imposible: r no supera 1.",
      "En un estudio, ansiedad y rendimiento correlacionan r = 0,40. Si las puntuaciones de ansiedad se multiplican por −1, ¿qué valor tendrá r?|−0,40|0,40|−0,16|Multiplicar por una constante negativa invierte el signo de r y mantiene su valor absoluto.",
      "Con r = 0,50, Sᵧ = 10 y Sₓ = 5, ¿cuánto vale la pendiente de Y sobre X?|1|0,50|0,25|b = r · (Sᵧ / Sₓ) = 0,50 · 2 = 1. La pendiente no coincide con r porque depende de las desviaciones típicas.",
      "¿Qué indica el valor absoluto de r?|La intensidad lineal|La dirección de la relación|La inclinación de la recta|El signo da la dirección; el valor absoluto, la intensidad de la relación lineal, no la pendiente."
    ],
    inc: [
      "Sobre las propiedades de r|Cambia al pasar de segundos a milisegundos|Su signo indica la dirección de la relación|Es muy sensible a los casos atípicos|r no tiene unidades: multiplicar una variable por una constante positiva, como 1 000, no lo altera."
    ],
    seq: [],
    cls: [
      "Efecto sobre r de transformar X|No cambia: sumar una constante; multiplicar por 3|Cambia de signo: multiplicar por −1; multiplicar por −0,5"
    ] },
  { t: "Coeficiente de determinación y matrices",
    tip: "El coeficiente de determinación, r², es la proporción de varianza compartida por dos variables; 1 − r² es la no compartida. Hace ver que correlaciones aparentemente altas dejan mucha variabilidad sin explicar y que r = 0,60 comparte cuatro veces más varianza que r = 0,30. Con más de dos variables se usan matrices cuadradas y simétricas: la de varianzas-covarianzas lleva varianzas en la diagonal y la de correlaciones, unos.",
    v: [
      "Coeficiente de determinación=Cuadrado de r; proporción de varianza compartida por dos variables",
      "1 − r²=Proporción de varianza que las dos variables no comparten",
      "Matriz de correlaciones=Tabla simétrica con unos en la diagonal y la r de cada par fuera",
      "Matriz de varianzas-covarianzas=Tabla con varianzas en la diagonal y covarianzas fuera de ella",
      "Unos en la diagonal=Reflejan que toda variable correlaciona perfectamente consigo misma",
      "Matriz simétrica=Su triángulo superior es igual que el inferior",
      "Bivariadas=Opción de SPSS, en Analizar > Correlacionar, para obtener r o rₛ",
      "Correlation Matrix=Opción de jamovi, dentro de Regression, para obtener correlaciones"
    ],
    g: [
      "Con r = 0,70, las dos variables comparten el ___ de su varianza.|49 %|70 %|51 %",
      "En la diagonal de una matriz de varianzas-covarianzas aparecen las ___.|varianzas|covarianzas|correlaciones",
      "Una correlación de 0,60 comparte ___ varianza que una de 0,30.|cuatro veces más|el doble de la|la mitad de la",
      "Basta con leer un triángulo de la matriz porque esta es ___.|simétrica|diagonal|triangular",
      "En SPSS, la covarianza que se pide en las Opciones de Bivariadas se calcula con ___.|n − 1|n|n + 1"
    ],
    tf: [
      "Con r = 0,50, las variables comparten el 50 % de su varianza.|F|La varianza compartida es r² = 0,25, es decir, el 25 %.",
      "En una matriz de correlaciones la diagonal está formada por unos.|V",
      "Una correlación de 0,60 supone el doble de varianza compartida que una de 0,30.|F|Supone el cuádruple: 0,36 frente a 0,09.",
      "Con r = −0,80, el coeficiente de determinación es 0,64.|V"
    ],
    q: [
      "Un estudio halla r = 0,70 entre horas de sueño y estado de ánimo. ¿Qué proporción de varianza no comparten?|0,51|0,30|0,49|1 − r² = 1 − 0,49 = 0,51. 0,30 resta r en vez de r², y 0,49 es la varianza compartida.",
      "Una matriz de varianzas-covarianzas tiene varianzas 9 y 16 y covarianza 6. ¿Cuánto vale r?|0,50|0,04|0,25|r = 6/(√9 · √16) = 6/12 = 0,50. Dividir entre el producto de varianzas (6/144) o dar r² son errores típicos.",
      "Si r = −0,80, ¿cuánto vale el coeficiente de determinación?|0,64|−0,64|0,80|Al elevar al cuadrado desaparece el signo: (−0,80)² = 0,64.",
      "¿Qué aporta r² frente a r al interpretar una correlación?|Muestra la varianza compartida|Indica la dirección del efecto|Demuestra una relación causal|r² expresa la proporción de varianza compartida; pierde el signo y no dice nada sobre causalidad."
    ],
    inc: [
      "Sobre las matrices de correlaciones|Fuera de la diagonal hay varianzas|Son matrices cuadradas y simétricas|Tienen unos en toda la diagonal|Las varianzas están en la diagonal de la matriz de varianzas-covarianzas; fuera de la diagonal de la de correlaciones hay correlaciones."
    ],
    seq: [],
    cls: [
      "Contenido de cada matriz|Varianzas-covarianzas: varianzas en la diagonal; covarianzas fuera de la diagonal|Correlaciones: unos en la diagonal; correlaciones fuera de la diagonal"
    ] },
  { t: "Limitaciones de r: el cuarteto de Anscombe",
    tip: "Anscombe (1973) construyó cuatro conjuntos de 11 pares con las mismas medias, la misma recta y r ≈ 0,82, pero con formas muy distintas: lineal, curva, lineal con un atípico y un único caso que fabrica la correlación. La lección es mirar los datos antes de calcular. r solo mide relación lineal, es sensible a atípicos, se atenúa con la restricción de rango y la baja fiabilidad, puede alterarse por subgrupos y no indica causalidad.",
    v: [
      "Cuarteto de Anscombe=Cuatro conjuntos con la misma r y formas muy distintas",
      "Francis Anscombe=Estadístico que en 1973 mostró la necesidad de mirar los datos",
      "Conjunto I=Relación lineal con ruido; el único bien resumido por r",
      "Conjunto II=Relación fuerte pero curva, que r describe mal",
      "Conjunto III=Relación lineal perfecta salvo un atípico que rebaja r",
      "Conjunto IV=X constante salvo un caso que fabrica por sí solo la correlación",
      "Restricción de rango=Reducción de la variabilidad de una variable que atenúa r",
      "Paradoja de Simpson=Relación inflada o invertida al mezclar subgrupos"
    ],
    g: [
      "En el conjunto III de Anscombe, un único atípico ___ una correlación que sin él sería casi perfecta.|rebaja|fabrica|invierte",
      "En el conjunto IV, todos los puntos están en x = 8 salvo ___.|uno|dos|tres",
      "Los cuatro conjuntos de Anscombe comparten r ≈ 0,82 y la recta y = 3 + ___x.|0,5|0,82|1,5",
      "La baja fiabilidad de las medidas tiende a ___ la correlación observada.|atenuar|inflar|invertir",
      "Con r ≈ 0,82, la varianza compartida en los conjuntos de Anscombe ronda el ___.|67 %|82 %|18 %"
    ],
    tf: [
      "Los cuatro conjuntos de Anscombe tienen la misma r porque sus nubes de puntos tienen formas parecidas.|F|Tienen la misma r con formas completamente distintas: lineal, curva, con un atípico y con un caso aislado.",
      "Solo en el conjunto I de Anscombe es razonable resumir la relación con r.|V",
      "La restricción de rango tiende a inflar el valor de r.|F|La restricción de rango atenúa r, igual que la baja fiabilidad de las medidas.",
      "En muestras pequeñas, r es muy inestable.|V"
    ],
    q: [
      "Una investigadora obtiene r = 0,02 entre activación y rendimiento, pero el diagrama muestra una U invertida muy clara. ¿Qué concluye?|Hay relación, pero no lineal|No hay relación entre ambas|La relación es lineal y débil|r solo capta la relación lineal; una U invertida es una relación clara que r pasa por alto.",
      "En el conjunto II de Anscombe, ¿por qué r describe mal la relación?|Porque es curva|Porque es débil|Porque X no varía|La relación del conjunto II es fuerte pero curvilínea, y r solo mide relación lineal.",
      "¿Qué enseñanza principal se extrae del cuarteto de Anscombe?|Hay que mirar los datos antes de calcular|r mide bien cualquier tipo de relación|Las medias resumen bien cualquier conjunto|Cuatro conjuntos con resúmenes casi idénticos tienen formas muy distintas: el diagrama de dispersión es imprescindible.",
      "Si en el conjunto III se eliminara el atípico, ¿qué ocurriría con r?|Se acercaría a 1|Se acercaría a 0|Cambiaría de signo|Sin el atípico la relación sería lineal perfecta: el atípico rebaja una r que sería prácticamente 1."
    ],
    inc: [
      "Sobre las limitaciones de r|Un valor alto de r demuestra que X causa Y|Es muy sensible a los casos atípicos|Puede inflarse o invertirse por subgrupos|Una correlación, por alta que sea, no indica causalidad (Unidad 12)."
    ],
    seq: [],
    cls: [
      "¿Resume bien r la relación?|Sí: conjunto I|No: conjunto II; conjunto III; conjunto IV"
    ] }
] },
{ n: 14, t: "Tablas de contingencia y chi cuadrado", cap: 4, pir: "media", mods: [
  { t: "Tablas de contingencia",
    tip: "Con dos variables categóricas, los datos se resumen en una tabla de contingencia: frecuencias conjuntas en las casillas, marginales en los totales y N en la esquina. Para comparar grupos de distinto tamaño se usan porcentajes por fila, por columna o sobre el total; los de fila y columna son distribuciones condicionadas. Se calculan en la dirección de la variable explicativa y se comparan en la otra.",
    v: [
      "Tabla de contingencia=Tabla de doble entrada con las frecuencias conjuntas de dos variables categóricas",
      "Frecuencia conjunta=Número de casos en una casilla, nᵢⱼ",
      "Frecuencias marginales=Totales de cada fila y de cada columna",
      "Tabla I × J=Tabla con I filas y J columnas",
      "Porcentaje por fila=Cada casilla dividida entre el total de su fila",
      "Porcentaje por columna=Cada casilla dividida entre el total de su columna",
      "Distribución condicionada=Porcentajes por fila o por columna de una tabla",
      "Independencia=Distribuciones condicionadas iguales en todas las filas"
    ],
    g: [
      "Los totales de cada fila y de cada columna son las frecuencias ___.|marginales|conjuntas|esperadas",
      "Si el taller es la posible causa y está en las filas, los porcentajes se calculan por ___.|fila|columna|total",
      "Una tabla con 3 filas y 4 columnas se denomina tabla ___.|3 × 4|4 × 3|12 × 1",
      "De 40 hombres, 10 presentan ansiedad; su porcentaje por fila es el ___.|25 %|10 %|40 %",
      "Si las distribuciones condicionadas difieren entre filas, se dice que hay ___.|asociación|independencia|causalidad"
    ],
    tf: [
      "Los porcentajes por fila y por columna son distribuciones condicionadas.|V",
      "Las frecuencias marginales describen la relación entre las dos variables.|F|Los marginales describen cada variable por separado; la relación se ve en las distribuciones condicionadas.",
      "Si las distribuciones condicionadas son iguales en todas las filas, las variables son independientes.|V",
      "Con grupos de distinto tamaño, lo adecuado es comparar las frecuencias absolutas de cada casilla.|F|Las frecuencias absolutas se comparan mal con grupos desiguales; por eso se calculan porcentajes."
    ],
    q: [
      "En una muestra, presentan ansiedad 10 de 40 hombres y 24 de 60 mujeres. ¿Qué porcentajes por fila se comparan?|25 % y 40 %|10 % y 24 %|29 % y 71 %|10/40 = 25 % y 24/60 = 40 %. 29 % y 71 % (10/34 y 24/34) serían porcentajes por columna.",
      "En la tabla del taller, 30 de los 50 aprobados hicieron el taller. ¿Qué responde ese 60 % por columna?|De los que aprobaron, cuántos hicieron el taller|De los que hicieron el taller, cuántos aprobaron|Qué parte del total hizo el taller y aprobó|El porcentaje por columna divide entre el total de la columna «Aprueba»: de los que aprobaron, el 60 % hizo el taller.",
      "Un estudio relaciona tipo de terapia (filas) y mejoría (columnas). ¿Cómo conviene calcular los porcentajes?|Por fila, en la dirección de la terapia|Por columna, en la dirección de la mejoría|Sobre el total de la tabla|Se calculan en la dirección de la variable explicativa (la terapia) y se comparan en la otra dirección.",
      "¿Qué significa que dos variables categóricas sean independientes?|La fila no altera la probabilidad de cada columna|Todas las filas tienen los mismos totales marginales|Todas las casillas presentan la misma frecuencia|Si son independientes, las distribuciones condicionadas son iguales: saber la fila no cambia la probabilidad de cada columna."
    ],
    inc: [
      "Sobre las tablas de contingencia|Las marginales están en el interior de la tabla|Las conjuntas son las frecuencias de cada casilla|N es el número total de casos de la tabla|Las marginales son los totales de filas y columnas; el interior lo ocupan las frecuencias conjuntas."
    ],
    seq: [],
    cls: [
      "Tipo de frecuencia en la tabla del taller|Conjunta: hicieron el taller y aprobaron; no hicieron el taller y suspendieron|Marginal: total de los que hicieron el taller; total de aprobados"
    ] },
  { t: "Frecuencias esperadas y estadístico χ²",
    tip: "Las frecuencias esperadas son las que habría con independencia manteniendo los marginales: total de fila por total de columna entre N. χ² suma, casilla a casilla, (n − e)²/e: vale 0 si observadas y esperadas coinciden y nunca es negativo. Sus gl son (I − 1) · (J − 1); con gl = 1 y α = 0,05 el valor crítico es 3,84. El supuesto de frecuencias mínimas se refiere a las esperadas, no a las observadas.",
    v: [
      "Frecuencia esperada=(total de fila × total de columna) / N; lo esperable con independencia",
      "Chi cuadrado de Pearson=Suma de (n − e)² / e; discrepancia entre observadas y esperadas",
      "Grados de libertad=(I − 1) · (J − 1) en una tabla I × J",
      "Valor crítico con gl 1=3,84, para α de 0,05",
      "Valor crítico con gl 2=5,99, para α de 0,05",
      "Prueba exacta de Fisher=Alternativa en tablas 2 × 2 si no se cumple el supuesto de las esperadas",
      "χ² nulo=Coincidencia total entre frecuencias observadas y esperadas",
      "Observaciones independientes=Cada caso aparece en una sola casilla de la tabla"
    ],
    g: [
      "Con un total de fila de 40, un total de columna de 50 y N = 200, la frecuencia esperada es ___.|10|0,8|2 000",
      "Una tabla 2 × 5 tiene ___ grados de libertad.|4|10|6",
      "El supuesto de que haya al menos 5 casos por casilla se refiere a las frecuencias ___.|esperadas|observadas|marginales",
      "Como las diferencias se elevan al cuadrado, χ² nunca es ___.|negativo|positivo|decimal",
      "Con gl = 1 y α = 0,05, se rechaza la independencia si χ² supera ___.|3,84|1,96|5,99"
    ],
    tf: [
      "χ² = 0 indica que las frecuencias observadas coinciden con las esperadas.|V",
      "Si alguna frecuencia observada es menor que 5, no puede aplicarse χ².|F|La regla se refiere a las frecuencias esperadas, no a las observadas.",
      "Una tabla 2 × 2 tiene 1 grado de libertad: fijados los marginales, una casilla determina las demás.|V",
      "Un χ² negativo indica una asociación inversa entre las variables.|F|χ² nunca es negativo, porque las diferencias entre observadas y esperadas se elevan al cuadrado."
    ],
    q: [
      "En la tabla del taller (30, 20 / 20, 30; N = 100), todas las esperadas valen 25. ¿Cuánto vale χ²?|4,00|1,00|4,17|Cada casilla aporta 5²/25 = 1 y la suma es 4,00. Dividir entre las observadas en vez de entre las esperadas da 4,17.",
      "¿Cuántos grados de libertad tiene una tabla 3 × 4?|6|12|7|(3 − 1) · (4 − 1) = 6. 12 es el número de casillas y 7, la suma de filas y columnas.",
      "En una tabla 2 × 2, una casilla tiene una frecuencia esperada de 3,2. ¿Qué se recomienda?|Usar la prueba exacta de Fisher|Aplicar χ² sin más cambios|Eliminar los casos de esa casilla|En 2 × 2 se suele exigir que todas las esperadas sean al menos 5; si no, se usa la prueba exacta de Fisher.",
      "Una tabla 3 × 2 da χ² = 4,50. Con α = 0,05, ¿qué se decide?|Mantener la independencia|Rechazar la independencia|Rechazar, porque supera 3,84|gl = (3 − 1)(2 − 1) = 2 y el crítico es 5,99, que 4,50 no supera. Comparar con 3,84 (gl = 1) es un error típico."
    ],
    inc: [
      "Sobre el estadístico χ²|Puede tomar valores negativos|Vale 0 con independencia perfecta|Crece con la discrepancia respecto a lo esperado|χ² suma cuadrados divididos entre frecuencias positivas, así que nunca es negativo."
    ],
    seq: [
      "Cálculo e interpretación de χ²|Calcular los totales marginales>Obtener las frecuencias esperadas>Calcular (n − e)²/e en cada casilla>Sumar los cocientes>Comparar con el valor crítico según los gl"
    ],
    cls: [] },
  { t: "Intensidad de la asociación: φ y V de Cramer",
    tip: "χ² depende del tamaño de la muestra: multiplicar todas las frecuencias por 10 multiplica χ² por 10 sin cambiar las proporciones. Por eso indica si la asociación es compatible con el azar, pero no si es fuerte. Para la intensidad se usan φ, en tablas 2 × 2, y la V de Cramer, en tablas de cualquier tamaño; ambas eliminan el efecto de N y van de 0 a 1.",
    v: [
      "Coeficiente phi=√(χ² / N); intensidad de la asociación en tablas 2 × 2",
      "V de Cramer=√(χ² / (N · (k − 1))); intensidad en tablas de cualquier tamaño",
      "k (V de Cramer)=Menor de los números de filas y columnas",
      "φ con signo=Correlación de Pearson entre dos dicotómicas codificadas con 0 y 1",
      "Dependencia de N=Propiedad de χ²: crece con la muestra aunque no cambien las proporciones",
      "Asociación pequeña (2 × 2)=Valor orientativo de φ o V en torno a 0,10",
      "Asociación media (2 × 2)=Valor orientativo de φ o V en torno a 0,30",
      "Asociación grande (2 × 2)=Valor orientativo de φ o V en torno a 0,50"
    ],
    g: [
      "Con χ² = 9 y N = 100, el coeficiente φ vale ___.|0,30|0,09|0,90",
      "En una tabla 2 × 2, la V de Cramer coincide con el valor absoluto de ___.|φ|χ²|r²",
      "Si se multiplican por 10 todas las frecuencias, χ² se multiplica por 10 y φ ___.|no cambia|se multiplica por 10|se divide entre 10",
      "En una tabla 3 × 4, el término k − 1 de la V de Cramer vale ___.|2|3|6",
      "Cuando φ se calcula con las frecuencias lleva signo, que depende del ___ de las categorías.|orden|número|tamaño"
    ],
    tf: [
      "Un χ² muy grande indica necesariamente una asociación fuerte.|F|χ² crece con N; para la intensidad hay que mirar φ o la V de Cramer y los porcentajes.",
      "La V de Cramer puede usarse en tablas de cualquier tamaño.|V",
      "El coeficiente φ es la medida de intensidad adecuada para una tabla 3 × 3.|F|φ es para tablas 2 × 2; en tablas mayores se usa la V de Cramer.",
      "En tablas mayores que 2 × 2, las referencias 0,10, 0,30 y 0,50 deben interpretarse con prudencia.|V"
    ],
    q: [
      "Una tabla 3 × 3 con N = 100 da χ² = 18. ¿Cuánto vale la V de Cramer?|0,30|0,42|0,18|V = √(18 / (100 · 2)) = √0,09 = 0,30. Olvidar k − 1 da √0,18 ≈ 0,42, y 0,18 es χ²/N sin raíz.",
      "Dos tablas 2 × 2 tienen las mismas proporciones en cada casilla, una con N = 100 y otra con N = 1 000. ¿Qué ocurre?|Igual φ y χ² diez veces mayor en la segunda|Igual χ² y φ diez veces mayor en la segunda|χ² y φ diez veces mayores en la segunda|Con las mismas proporciones, φ no cambia; χ² se multiplica por 10 (en la tabla del taller, de 4 a 40).",
      "Una tabla 2 × 2 con N = 100 da χ² = 4,00. ¿Cuánto vale φ?|0,20|0,04|2,00|φ = √(4/100) = 0,20. 0,04 olvida la raíz y 2,00 olvida dividir entre N.",
      "¿Qué pregunta responde χ² que no responden φ ni V?|Si la asociación es compatible con el azar|Cuán fuerte es la asociación entre ambas|Qué porcentaje de casos hay en cada fila|χ² valora la compatibilidad con la independencia; φ y V miden la intensidad sin depender de N."
    ],
    inc: [
      "Sobre φ y V de Cramer|Ambos aumentan al multiplicar N por 10|Eliminan el efecto del tamaño muestral|Valen 0 si las variables son independientes|Al multiplicar las frecuencias por 10 crece χ², pero φ y V no cambian porque las proporciones son las mismas."
    ],
    seq: [],
    cls: [
      "Qué informa cada medida|Compatibilidad con el azar: χ²; valor p de χ²|Intensidad de la asociación: φ; V de Cramer"
    ] },
  { t: "Tablas de contingencia en SPSS e informe de resultados",
    tip: "En SPSS se usa Analizar > Estadísticos descriptivos > Tablas cruzadas, con la explicativa habitualmente en filas; en Estadísticos se marcan Chi-cuadrado y Phi y V de Cramer, y en Casillas se piden esperadas y porcentajes. En tablas 2 × 2 la salida añade la corrección de Yates y la prueba exacta de Fisher, y una nota indica las casillas con esperada menor que 5. El informe da porcentajes, χ² con gl y N, p y una medida de intensidad.",
    v: [
      "Tablas cruzadas=Procedimiento de SPSS para tablas de contingencia y χ²",
      "Casillas=Botón de Tablas cruzadas para pedir esperadas y porcentajes",
      "Botón Estadísticos=Lugar donde se marcan Chi-cuadrado y Phi y V de Cramer",
      "Corrección de Yates=Versión más conservadora de χ² que SPSS muestra en tablas 2 × 2",
      "Nota al pie=Indica cuántas casillas tienen frecuencia esperada menor que 5",
      "Chi-cuadrado de Pearson=Fila de la salida con el estadístico explicado en la unidad",
      "Contingency Tables=Procedimiento de jamovi, dentro de Frequencies, para estas tablas",
      "Informe de χ²=Porcentajes, estadístico con gl y N, valor p y medida de intensidad"
    ],
    g: [
      "Con la corrección de Yates, el χ² del ejemplo del taller baja de 4,00 a ___.|3,24|3,84|2,00",
      "En Tablas cruzadas, la variable explicativa se coloca habitualmente en ___.|filas|columnas|capas",
      "Las frecuencias esperadas y los porcentajes se piden en el botón ___.|Casillas|Estadísticos|Formato",
      "La nota al pie informa de cuántas casillas tienen frecuencia esperada menor que ___.|5|1|10",
      "La corrección de continuidad de Yates es una versión más ___ del χ².|conservadora|permisiva|arriesgada"
    ],
    tf: [
      "En tablas 2 × 2, SPSS muestra además la corrección de Yates y la prueba exacta de Fisher.|V",
      "Para informar de una tabla de contingencia basta con dar el valor p de χ².|F|Hay que dar porcentajes, χ² con gl y N, el valor p y una medida de intensidad como φ.",
      "La nota al pie de la tabla de χ² permite comprobar rápidamente el supuesto de las frecuencias esperadas.|V",
      "La corrección de Yates es más liberal que el χ² de Pearson: rechaza la independencia con más facilidad.|F|Es más conservadora: en el ejemplo del taller χ² baja de 4,00 a 3,24 y p sube de 0,046 a 0,072."
    ],
    q: [
      "En el informe «χ²(1, N = 100) = 4,00, p = 0,046, φ = 0,20», ¿qué indica el 1?|Los grados de libertad|El número de tablas|El tamaño del efecto|Entre paréntesis van los gl, (2 − 1)(2 − 1) = 1, y el número de casos.",
      "En el estudio del taller, χ² = 4,00 (p = 0,046) y con Yates χ² = 3,24 (p = 0,072). ¿Qué lectura es la más prudente?|El resultado está en el límite|La asociación es muy fuerte|No hay ninguna asociación|El resultado está en el límite y conviene no darle más peso del que tiene; además, φ = 0,20 es una asociación pequeña-media.",
      "En el estudio del taller, los estudiantes se asignaron al azar a los grupos. ¿Por qué importa?|Permite atribuirla al taller|Hace que χ² no dependa de N|Garantiza esperadas mayores que 5|Con asignación aleatoria la diferencia puede atribuirse con razonable confianza al taller; si eligieran, la motivación podría confundir.",
      "¿Dentro de qué menú de SPSS se encuentra Tablas cruzadas?|Estadísticos descriptivos|Comparar medias y proporciones|Modelos lineales generales|La ruta es Analizar > Estadísticos descriptivos > Tablas cruzadas."
    ],
    inc: [
      "Sobre el informe de una tabla de contingencia|No hace falta indicar los gl ni N|Se dan los porcentajes relevantes|Se incluye φ o la V de Cramer|El formato es χ²(gl, N) seguido del valor, p y una medida de intensidad, como en χ²(1, N = 100) = 4,00."
    ],
    seq: [
      "Tabla de contingencia en SPSS|Abrir Analizar, Estadísticos descriptivos, Tablas cruzadas>Colocar una variable en Filas y otra en Columnas>Marcar Chi-cuadrado y Phi y V de Cramer en Estadísticos>Pedir esperadas y porcentajes en Casillas>Revisar la nota sobre esperadas menores que 5"
    ],
    cls: [] }
] },
{ n: 15, t: "Distribuciones muestrales y distribución normal", cap: 5, pir: "media", mods: [
  { t: "Variables aleatorias",
    tip: "Una variable aleatoria asigna un número a cada resultado de un experimento aleatorio. Las discretas toman valores contables y se describen con una función de probabilidad; las continuas, con una función de densidad de área total 1, en la que un valor exacto tiene probabilidad 0 y solo los intervalos tienen probabilidad. La esperanza μ y la varianza σ² son parámetros, y la función de distribución F(x) da la probabilidad acumulada.",
    v: [
      "Variable aleatoria=Regla que asigna un número a cada resultado de un experimento aleatorio",
      "Variable discreta=Toma valores aislados que se pueden contar",
      "Variable continua=Puede tomar cualquier valor dentro de un intervalo",
      "Función de probabilidad=Da la probabilidad de cada valor de una variable discreta",
      "Función de densidad=Curva de área total 1; las probabilidades son áreas bajo ella",
      "Esperanza=Media teórica de una variable aleatoria, E(X)",
      "Función de distribución=F(x); probabilidad acumulada hasta un valor, P(X ≤ x)",
      "Máquina de Galton=Dispositivo en el que la suma de muchos rebotes al azar forma una campana"
    ],
    g: [
      "En una variable continua, la probabilidad de un valor exacto es ___.|0|1|0,5",
      "El número de aciertos en un test de 20 ítems es una variable aleatoria ___.|discreta|continua|constante",
      "La función de distribución es la versión teórica de la frecuencia relativa ___.|acumulada|conjunta|marginal",
      "La esperanza y la varianza de una variable aleatoria son ___, no valores de un grupo concreto.|parámetros|estimadores|frecuencias",
      "Si F(a) = 0,70 en una variable continua, la probabilidad de superar a es ___.|0,30|0,70|1,70"
    ],
    tf: [
      "El tiempo de reacción en milisegundos es una variable aleatoria continua.|V",
      "En una variable continua, P(X = 20) se obtiene leyendo la altura de la función de densidad en 20.|F|En una continua, un valor exacto tiene probabilidad 0; solo los intervalos tienen probabilidad, igual al área.",
      "El área total bajo una función de densidad vale 1.|V",
      "La esperanza de una variable aleatoria es la media de un grupo concreto de datos.|F|Es un parámetro: describe la variable en la población o «a la larga», no un grupo concreto de datos."
    ],
    q: [
      "Un psicólogo registra cuántos episodios de insomnio tiene un paciente en un mes. ¿Cómo se describe esta variable?|Con una función de probabilidad|Con una función de densidad|Con una función de regresión|Es discreta (valores contables); la función de densidad es propia de las variables continuas.",
      "En una variable continua, F(10) = 0,40 y F(15) = 0,85. ¿Cuánto vale P(10 ≤ X ≤ 15)?|0,45|1,25|0,85|P = F(15) − F(10) = 0,85 − 0,40 = 0,45. Sumar las áreas o quedarse con F(15) son errores.",
      "¿Por qué muchas variables psicológicas tienden a tener forma de campana?|Suman muchos factores pequeños independientes|Dependen de un solo factor genético potente|Se miden siempre con escalas de intervalo|Genes, experiencias, estado del día y errores de medida se suman; como en la máquina de Galton, el resultado tiende a la campana.",
      "¿Qué tiene probabilidad distinta de 0 en una variable continua?|Los intervalos de valores|Cada valor exacto|Solo los valores enteros|La probabilidad es el área bajo la curva entre dos límites; un valor exacto no tiene área."
    ],
    inc: [
      "Sobre las variables aleatorias|La densidad da la probabilidad de cada valor exacto|Una discreta se describe con una función de probabilidad|F(x) es la probabilidad acumulada hasta x|En una continua, la probabilidad de un valor exacto es 0; solo los intervalos tienen probabilidad."
    ],
    seq: [],
    cls: [
      "Tipo de variable aleatoria|Discreta: aciertos en un test de 20 ítems; episodios de insomnio en un mes|Continua: tiempo de reacción en ms; estatura"
    ] },
  { t: "La distribución normal",
    tip: "La normal queda definida por μ y σ: es simétrica, con media, mediana y moda en μ, asintótica, con puntos de inflexión en μ − σ y μ + σ, y mesocúrtica. Sea cual sea la normal, μ ± 1σ recoge el 68,3 % de los casos, μ ± 2σ el 95,4 %, μ ± 3σ el 99,7 % y μ ± 1,96σ exactamente el 95 %. Tipificar con z = (x − μ)/σ la convierte en N(0, 1) sin cambiar su forma.",
    v: [
      "Distribución normal=Distribución continua, simétrica y en campana definida por μ y σ",
      "Normal tipificada=Normal con media 0 y desviación típica 1",
      "Asintótica=Sus colas se acercan al eje horizontal sin llegar a tocarlo",
      "Puntos de inflexión=En una normal, se sitúan en μ − σ y μ + σ",
      "μ ± 1σ=Intervalo que recoge el 68,3 % de los casos en una normal",
      "μ ± 1,96σ=Intervalo que recoge exactamente el 95 % de los casos",
      "Mesocúrtica=Apuntamiento de la normal, que sirve de referencia para la curtosis",
      "Tipificar=Restar la media y dividir entre la desviación típica"
    ],
    g: [
      "Con el CI, N(100, 15), alrededor del 95 % de la población puntúa entre 70 y ___.|130|115|145",
      "En una distribución normal, la media, la mediana y la moda ___.|coinciden|difieren|se anulan",
      "Con el CI, N(100, 15), una persona con 85 puntos tiene una z de ___.|−1|1|−15",
      "Algunos manuales escriben N(μ, σ²), con la ___ en lugar de la desviación típica.|varianza|media|mediana",
      "En una normal, por encima de μ + 1σ queda aproximadamente el ___ de los casos.|16 %|32 %|34 %"
    ],
    tf: [
      "En una normal, entre μ − 2σ y μ + 2σ queda exactamente el 95 % de los casos.|F|μ ± 2σ recoge el 95,4 %; el 95 % exacto corresponde a μ ± 1,96σ.",
      "Tipificar una variable normal cambia su escala, pero no su forma.|V",
      "Como la normal es asintótica, cualquier valor es posible, aunque los alejados de μ son muy improbables.|V",
      "Los puntos de inflexión de la normal están en μ − 2σ y μ + 2σ.|F|Están a una desviación típica de la media: en μ − σ y μ + σ."
    ],
    q: [
      "Con el CI distribuido como N(100, 15), ¿qué puntuación corresponde a z = 2?|130|115|102|x = μ + z · σ = 100 + 2 · 15 = 130. 102 suma z a la media sin multiplicar por σ.",
      "En una normal, ¿qué porcentaje aproximado de casos queda entre μ y μ + 1σ?|34 %|68 %|16 %|Por simetría, la mitad del 68,3 %: un 34 %. El 16 % es lo que queda por encima de μ + 1σ.",
      "Una escala normal tiene μ = 50 y σ = 10. ¿Qué z obtiene una persona con 35 puntos?|−1,5|1,5|−15|z = (35 − 50)/10 = −1,5. Olvidar dividir entre σ da −15; el signo indica que está por debajo de la media.",
      "Además de describir variables como el CI, ¿por qué es tan importante la normal?|Describe cómo varían las medias de muestras|Es la única distribución que puede tipificarse|Todas las variables psicológicas son normales|Su papel central es describir la distribución de las medias muestrales, base de toda la inferencia (15.4)."
    ],
    inc: [
      "Sobre la distribución normal|Su media y su mediana pueden diferir|Es simétrica respecto a μ|Su área total bajo la curva vale 1|En la normal, media, mediana y moda coinciden en μ."
    ],
    seq: [],
    cls: [
      "Proporción de casos en una normal|Alrededor del 68 %: μ ± 1σ|Alrededor del 95 %: μ ± 2σ; μ ± 1,96σ|Más del 99 %: μ ± 3σ"
    ] },
  { t: "La tabla de la normal tipificada",
    tip: "La tabla habitual da el área acumulada a la izquierda de z, P(Z ≤ z). Con ella y la simetría se resuelve todo: la cola derecha es 1 − P(Z ≤ a), los valores negativos se obtienen por simetría, los intervalos restando dos lecturas y los percentiles por búsqueda inversa. Conviene recordar 1,645 (5 % en una cola), 1,96 (95 % central), 2,576 (99 % central) y 0,84 (potencia de 0,80).",
    v: [
      "P(Z ≤ a)=Lectura directa en la tabla de áreas a la izquierda",
      "P(Z ≥ a)=Se obtiene como 1 − P(Z ≤ a)",
      "z de 1,645=Deja el 5 % en una cola; contraste unilateral con α de 0,05",
      "z de 1,96=Deja el 2,5 % en cada cola, el 95 % central",
      "z de 2,576=Deja el 0,5 % en cada cola, el 99 % central",
      "z de 0,84=Deja el 20 % en la cola derecha; se usa en el cálculo de la potencia",
      "Búsqueda inversa=Localizar una proporción en el cuerpo de la tabla para hallar su z",
      "Percentil 90 de Z=Valor de aproximadamente 1,28, que deja el 90 % por debajo"
    ],
    g: [
      "Si P(Z ≤ 1,50) = 0,9332, entonces P(Z ≥ 1,50) vale ___.|0,0668|0,9332|0,4332",
      "Por simetría, si P(Z ≤ 1,50) = 0,9332, P(Z ≤ −1,50) vale ___.|0,0668|0,4332|0,5668",
      "P(−1 ≤ Z ≤ 1) se calcula como 0,8413 − ___ = 0,6826.|0,1587|0,8413|0,5000",
      "El valor z que deja por debajo el 90 % de los casos es aproximadamente ___.|1,28|1,645|0,90",
      "Para un contraste unilateral con α = 0,05, el valor de referencia es z = ___.|1,645|1,96|2,576"
    ],
    tf: [
      "Todas las tablas de la normal dan el área acumulada a la izquierda de z.|F|Algunas dan el área entre 0 y z o solo la mitad derecha; hay que comprobar qué área recoge cada tabla.",
      "P(Z ≥ 2,00) vale 0,0228, algo más del 2 %.|V",
      "El valor 2,576 deja el 0,5 % en cada cola y se usa en el IC al 99 %.|V",
      "Si P(Z ≤ 1,5) = 0,9332, entonces P(Z ≤ −1,5) = 0,4332.|F|Por simetría, P(Z ≤ −1,5) = 1 − 0,9332 = 0,0668; 0,4332 es el área entre 0 y 1,5."
    ],
    q: [
      "Con el CI como N(100, 15) y P(Z ≤ 1,50) = 0,9332, ¿qué proporción tiene un CI de 122,5 o menos?|0,9332|0,0668|0,4332|z = (122,5 − 100)/15 = 1,50 y la tabla da directamente el área a la izquierda: 0,9332.",
      "Con el CI como N(100, 15) y P(Z ≤ 2) = 0,9772, ¿qué proporción supera 130?|0,0228|0,9772|0,0456|z = 2,00 y P(Z ≥ 2) = 1 − 0,9772 = 0,0228. 0,0456 suma las dos colas.",
      "Si P(Z ≤ 1,5) = 0,9332, ¿cuánto vale P(0 ≤ Z ≤ 1,5)?|0,4332|0,9332|0,0668|Se resta la mitad izquierda de la curva: 0,9332 − 0,5 = 0,4332.",
      "Con el CI como N(100, 15), ¿qué puntuación corresponde al percentil 90 (z ≈ 1,28)?|119,2|101,28|113,5|x = 100 + 1,28 · 15 = 119,2. 101,28 suma z sin multiplicar por σ, y 113,5 usa 0,90 como si fuera z."
    ],
    inc: [
      "Sobre los valores z que conviene recordar|1,96 deja el 5 % en cada cola|1,645 deja el 5 % en una cola|2,576 deja el 99 % en el centro|1,96 deja el 2,5 % en cada cola (95 % central); el 5 % en una sola cola corresponde a 1,645."
    ],
    seq: [
      "Calcular una proporción con la tabla normal|Tipificar el valor con z igual a (x − μ)/σ>Comprobar qué área recoge la tabla>Leer el área acumulada para ese z>Aplicar el complemento o la simetría si hace falta"
    ],
    cls: [] },
  { t: "Distribución muestral de la media y teorema central del límite",
    tip: "Las medias de muestras de tamaño n varían de una muestra a otra; su distribución muestral tiene media μ y desviación típica σ/√n, el error típico. Para reducir el error típico a la mitad hay que cuadruplicar n. Si la población es normal, x̄ es normal con cualquier n; si no, el TCL asegura que se aproxima a la normal al crecer n. El TCL habla de la media, no de los datos. Si σ se estima con s, se usa la t de Student.",
    v: [
      "Distribución muestral=Distribución de un estadístico en todas las muestras posibles de tamaño n",
      "Error típico de la media=Desviación típica de la distribución muestral de la media, σ/√n",
      "Teorema central del límite=La media muestral tiende a distribuirse normalmente al aumentar n",
      "E(x̄)=Media de la distribución muestral, que coincide con μ",
      "t de Student=Distribución que sustituye a la normal cuando σ se estima con s",
      "William S. Gosset=Químico de Guinness que publicó la t en 1908 como «Student»",
      "gl de la t=n − 1 en el contraste de una media, al estimar σ con s",
      "Regla de n ≥ 30=Criterio práctico, no teorema, para dar por buena la aproximación normal"
    ],
    g: [
      "Con σ = 20 y n = 100, el error típico de la media vale ___.|2|0,2|20",
      "Para reducir el error típico a la mitad hay que multiplicar n por ___.|4|2|√2",
      "Frente a la normal, la t de Student tiene colas más ___.|pesadas|ligeras|asimétricas",
      "El teorema central del límite se refiere a la distribución de la ___.|media muestral|puntuación individual|varianza muestral",
      "El valor t que deja el 95 % central con 24 gl es ___, frente a 1,96 en la normal.|2,064|1,984|1,645"
    ],
    tf: [
      "Con 30 o más participantes, la distribución de los datos de la muestra se vuelve normal.|F|El TCL dice que se aproxima a la normal la distribución de la media muestral, no la de los datos.",
      "Si la población es normal, la distribución de x̄ es normal para cualquier tamaño muestral.|V",
      "La t de Student se aproxima a la normal a medida que aumentan los grados de libertad.|V",
      "La regla n ≥ 30 es un teorema que garantiza la normalidad de x̄ en cualquier población.|F|Es una regla práctica: con poblaciones muy asimétricas o con valores extremos puede hacer falta bastante más."
    ],
    q: [
      "Con el CI como N(100, 15) y P(Z ≤ 2) = 0,9772, ¿qué probabilidad hay de que la media de 25 personas sea 106 o más?|0,0228|0,3446|0,9772|ET = 15/√25 = 3; z = 6/3 = 2 y P(Z ≥ 2) = 0,0228. 0,3446 es la probabilidad para una sola persona (z = 0,40).",
      "Una prueba tiene σ = 12. ¿Cuál es el error típico de la media con n = 36?|2|0,33|12|σ/√n = 12/6 = 2. 0,33 divide entre n (12/36) en lugar de entre √n; 12 confunde σ con el error típico.",
      "Un equipo amplía su muestra de n = 25 a n = 100. ¿Qué ocurre con el error típico?|Se reduce a la mitad|Se reduce a la cuarta parte|No cambia, depende de σ|El ET disminuye con √n: multiplicar n por 4 divide el ET entre √4 = 2.",
      "¿Por qué la t de Student tiene colas más pesadas que la normal?|Porque s varía entre muestras|Porque la población es asimétrica|Porque usa n en vez de n − 1|Al sustituir σ por s se añade incertidumbre, ya que s también cambia de una muestra a otra."
    ],
    inc: [
      "Sobre el error típico de la media|Mide cuánto difieren las personas entre sí|Disminuye al aumentar el tamaño muestral|Mide la precisión de x̄ para estimar μ|Cuánto difieren las personas lo mide σ; el error típico mide cuánto varían las medias de una muestra a otra."
    ],
    seq: [],
    cls: [
      "Desviación típica frente a error típico|Desviación típica (σ): variabilidad entre personas; no disminuye al crecer n|Error típico (σ/√n): variabilidad entre medias muestrales; disminuye al crecer n"
    ] }
] },
{ n: 16, t: "Estimación por intervalos y contraste de hipótesis", cap: 5, pir: "alta", mods: [
  { t: "Estimación puntual e intervalos de confianza",
    tip: "Un parámetro puede estimarse con un único valor (estimación puntual) o con un intervalo. Un buen estimador es insesgado, eficiente, consistente y suficiente; la cuasivarianza es insesgada y la varianza con n, sesgada. El IC para la media con σ conocida es x̄ ± z · σ/√n; su amplitud crece con la confianza y con σ y disminuye con n. El 95 % se refiere al procedimiento, no a un intervalo concreto.",
    v: [
      "Estimador insesgado=Su valor esperado coincide con el parámetro",
      "Estimador eficiente=Entre los insesgados, el que tiene menor varianza",
      "Estimador consistente=Se acerca cada vez más al parámetro al aumentar n",
      "Estimador suficiente=Aprovecha toda la información relevante de la muestra",
      "Intervalo de confianza=Rango de valores plausibles del parámetro, con un nivel de confianza",
      "Margen de error=z · σ/√n; mitad de la amplitud del intervalo",
      "Nivel de confianza=1 − α, normalmente el 95 %",
      "Cuasivarianza=Estimador insesgado de σ², calculado con n − 1"
    ],
    g: [
      "Con x̄ = 50, σ = 10 y n = 25, el margen de error al 95 % es ___.|3,92|1,96|19,6",
      "La varianza calculada con n tiende a quedarse ___ de σ².|por debajo|por encima|a la altura",
      "Para reducir el margen de error a la mitad hay que multiplicar n por ___.|4|2|8",
      "Al pasar del 95 % al 99 % de confianza, el valor z pasa de 1,96 a ___.|2,576|1,645|3,00",
      "Si σ es desconocida, en lugar de 1,96 se usa el valor crítico de la ___ con n − 1 gl.|t de Student|χ² de Pearson|normal tipificada"
    ],
    tf: [
      "Un IC al 95 % de [94,12; 105,88] significa que hay un 95 % de probabilidad de que μ esté en él.|F|En el enfoque clásico, el 95 % describe el método: alrededor del 95 % de los intervalos así construidos contiene μ.",
      "La amplitud del intervalo aumenta con el nivel de confianza y con la variabilidad.|V",
      "La media muestral es un estimador insesgado y consistente de μ.|V",
      "Al aumentar el tamaño de la muestra, el intervalo de confianza se hace más ancho.|F|Ocurre lo contrario: al crecer n baja el error típico y el intervalo se estrecha."
    ],
    q: [
      "Con x̄ = 50, σ = 10 y n = 25, ¿cuál es el IC al 95 % para μ?|[46,08; 53,92]|[48,04; 51,96]|[30,40; 69,60]|ET = 10/5 = 2 y margen = 1,96 · 2 = 3,92. Usar σ en lugar del ET da [30,40; 69,60]; olvidar el ET, [48,04; 51,96].",
      "Un estudio da un IC al 95 % de [94,12; 105,88] para μ. ¿Qué interpretación es correcta?|El 95 % de los IC así obtenidos contiene μ|El 95 % de las personas puntúa en ese rango|Hay un 95 % de probabilidad de que x̄ esté ahí|La confianza se refiere al procedimiento: el 95 % de los intervalos así construidos contiene μ. No habla de personas ni de x̄.",
      "Con x̄ = 50, σ = 10 y n = 25, ¿cuánto vale el margen de error al 99 %?|5,15|3,92|2,58|2,576 · 10/5 = 5,152 ≈ 5,15. 3,92 corresponde al 95 %, y 2,58 olvida multiplicar por el error típico.",
      "¿Qué caracteriza a un estimador eficiente?|Menor varianza entre los insesgados|Valor esperado igual al parámetro|Usa toda la información relevante|Eficiente es, entre los insesgados, el que menos varía de una muestra a otra. Las otras opciones definen insesgado y suficiente."
    ],
    inc: [
      "Sobre la amplitud del intervalo de confianza|Disminuye al aumentar el nivel de confianza|Aumenta con la variabilidad de la población|Disminuye al aumentar el tamaño muestral|Al subir la confianza (del 95 % al 99 %), z pasa de 1,96 a 2,576 y el intervalo se ensancha."
    ],
    seq: [],
    cls: [
      "Sesgo de los estimadores|Insesgado: x̄ para μ; cuasivarianza para σ²|Sesgado: varianza calculada con n para σ²"
    ] },
  { t: "La lógica del contraste de hipótesis",
    tip: "El contraste supone que no hay efecto (H₀) y comprueba si los datos serían raros bajo ese supuesto. H₀ incluye siempre la igualdad; H₁ puede ser bilateral o unilateral y debe fijarse antes de ver los datos. Si el estadístico cae en la región crítica, se rechaza H₀; si no, se mantiene, lo que no prueba que sea verdadera. Con α = 0,05, los críticos son ±1,96 (bilateral) y 1,645 (unilateral derecho).",
    v: [
      "Hipótesis nula (H₀)=Hipótesis de ausencia de efecto que se somete a contraste",
      "Hipótesis alternativa (H₁)=Lo que se acepta si se rechaza la hipótesis de ausencia de efecto",
      "Contraste bilateral=H₁ admite diferencias en cualquier dirección, con el signo ≠",
      "Contraste unilateral=H₁ fija una dirección, mayor o menor que el valor de H₀",
      "Nivel de significación (α)=Probabilidad máxima de rechazar H₀ siendo verdadera que se asume",
      "Región crítica=Valores del estadístico tan extremos que llevan a rechazar H₀",
      "Estadísticamente significativo=Resultado cuyo estadístico cae en la región crítica",
      "Mantener H₀=No rechazarla, sin que ello demuestre que es verdadera"
    ],
    g: [
      "La hipótesis nula siempre incluye la ___.|igualdad|diferencia|dirección",
      "En un contraste bilateral con α = 0,05, en cada cola queda una probabilidad de ___.|0,025|0,05|0,01",
      "Si el estadístico no cae en la región crítica, se dice que se ___ H₀.|mantiene|acepta|demuestra",
      "Con x̄ = 104, μ₀ = 100, σ = 12 y n = 36, el estadístico z vale ___.|2|0,33|4",
      "Elegir la cola después de ver los datos duplica en la práctica el riesgo de error ___.|tipo I|tipo II|de medida"
    ],
    tf: [
      "No rechazar H₀ demuestra que es verdadera.|F|Puede que el efecto exista y la muestra sea pequeña para detectarlo: H₀ se mantiene, no se acepta.",
      "Rechazar H₀ prueba que H₁ es verdadera.|F|Solo indica que los datos son poco compatibles con H₀; no prueba H₁.",
      "Un contraste unilateral solo es legítimo si la dirección se fijó antes de ver los datos.|V",
      "Con σ desconocida, el estadístico para una media sigue una t de Student con n − 1 gl si H₀ es verdadera.|V"
    ],
    q: [
      "Una muestra de 36 personas obtiene x̄ = 104 en una escala con μ₀ = 100 y σ = 12. Con contraste bilateral y α = 0,05, ¿qué se decide?|Rechazar H₀ (z = 2,00)|Mantener H₀ (z = 0,33)|Rechazar H₀ (z = 4,00)|ET = 12/√36 = 2 y z = 4/2 = 2,00 > 1,96: se rechaza H₀. 0,33 olvida la raíz de n y 4,00 no divide entre el ET.",
      "Un equipo plantea, antes de recoger datos, H₁: μ > 100. Con α = 0,05, ¿cuál es el valor crítico de z?|1,645|1,96|2,576|En un contraste unilateral derecho todo α está en una cola: z crítico 1,645. 1,96 corresponde al bilateral.",
      "¿Por qué se contrasta H₀ y no directamente H₁?|Fija un valor concreto del parámetro|Es la hipótesis de investigación|Siempre es la hipótesis verdadera|Al fijar un valor concreto, H₀ permite saber qué distribución seguiría el estadístico; la de investigación suele ser H₁.",
      "Un estudio con n = 12 no rechaza H₀. ¿Qué conclusión es correcta?|Los datos no permiten rechazar H₀|Queda demostrado que no hay efecto|Se debe aceptar H₀ como verdadera|Mantener no es aceptar: con muestras pequeñas un efecto real puede pasar inadvertido."
    ],
    inc: [
      "Sobre la formulación de hipótesis|H₀ puede plantearse como μ ≠ 100|H₁ puede ser bilateral o unilateral|H₀ afirma que no hay efecto ni diferencia|H₀ incluye siempre la igualdad; μ ≠ 100 es una H₁ bilateral."
    ],
    seq: [
      "Pasos del contraste de hipótesis|Formular H₀ y H₁>Comprobar los supuestos>Elegir el estadístico de contraste>Fijar el nivel de significación α>Determinar la región crítica>Calcular el estadístico>Decidir si se rechaza H₀"
    ],
    cls: [] },
  { t: "El valor p y el contraste mediante intervalos",
    tip: "El valor p es la probabilidad de obtener un resultado igual de extremo o más que el observado si H₀ es verdadera, y se rechaza H₀ si p ≤ α. No es la probabilidad de que H₀ sea cierta ni la de que el resultado se deba al azar, y no mide el tamaño del efecto. Un contraste bilateral rechaza H₀ si y solo si μ₀ queda fuera del IC al (1 − α) · 100 %. Qué hacer con el umbral de significación sigue en debate.",
    v: [
      "Valor p=Probabilidad de un resultado igual o más extremo si H₀ es verdadera",
      "Sig.=Etiqueta con la que SPSS muestra el valor p",
      "p bilateral=Suma de las dos colas; el doble de la cola del valor observado",
      "p unilateral=Área de la cola en la dirección prevista",
      "Regla de decisión=Rechazar H₀ cuando p es menor o igual que α",
      "Nueva estadística=Propuesta de centrarse en tamaños del efecto, IC y metaanálisis",
      "Factor de Bayes=Compara cuánto más probables son los datos con una hipótesis que con otra",
      "Declaración de la ASA=Seis principios sobre el valor p publicados en 2016"
    ],
    g: [
      "Con z = 2,30, la p unilateral es 0,0107 y la bilateral, aproximadamente ___.|0,021|0,011|0,989",
      "Se rechaza H₀ cuando el valor p es ___ que α.|menor o igual|mayor o igual|mucho mayor",
      "Si el IC al 95 % de una media es [101,02; 112,78], el contraste bilateral de H₀: μ = 100 con α = 0,05 es ___.|significativo|no significativo|indeterminado",
      "A diferencia de p, el factor de Bayes puede aportar evidencia a favor de ___.|H₀|H₁|α",
      "Benjamin et al. (2018) propusieron un α de ___ para afirmar nuevos descubrimientos.|0,005|0,01|0,10"
    ],
    tf: [
      "Un p = 0,021 significa que hay un 2,1 % de probabilidad de que H₀ sea cierta.|F|p se calcula suponiendo H₀ verdadera: es P(datos ∣ H₀), no P(H₀ ∣ datos).",
      "Un p más pequeño indica siempre un efecto más grande.|F|p depende también de n: con muestras muy grandes, efectos minúsculos dan p muy pequeños.",
      "Si μ₀ queda fuera del IC al 95 %, el contraste bilateral con α = 0,05 rechaza H₀.|V",
      "Un grupo de trabajo de la ASA defendió en 2021 que los valores p, bien aplicados, siguen siendo útiles.|V"
    ],
    q: [
      "Un contraste bilateral da z = 2,00. Si P(Z ≥ 2) = 0,0228, ¿cuál es el valor p?|0,0456|0,0228|0,9772|En un contraste bilateral se suman las dos colas: 2 · 0,0228 = 0,0456. 0,0228 sería la p unilateral.",
      "Un estudio obtiene p = 0,021 en un contraste bilateral. ¿Qué afirmación es correcta?|Con α = 0,01 se mantendría H₀|Hay un 97,9 % de probabilidad de efecto real|El resultado se replicará con un 97,9 % de probabilidad|0,021 > 0,01, así que con α = 0,01 no se rechaza. p no da la probabilidad de H₁ ni de replicación.",
      "Con 20 000 participantes se obtiene p < 0,001 y d = 0,05. ¿Qué conclusión es adecuada?|Significativo, pero de efecto muy pequeño|Efecto grande, porque p es muy pequeño|Error tipo I con toda seguridad|Con n muy grande, efectos minúsculos resultan significativos; p no mide la magnitud del efecto.",
      "¿Qué cuestión sigue abierta en el debate sobre el valor p?|Qué hacer con el umbral|Si mide la probabilidad de H₀|Si depende del tamaño muestral|Hay consenso en que p no da la probabilidad de H₀ y depende de n; lo que se discute es qué hacer con el umbral de significación."
    ],
    inc: [
      "Sobre la interpretación del valor p|Es la probabilidad de que H₀ sea cierta|Se calcula suponiendo que H₀ es verdadera|No mide el tamaño ni la importancia del efecto|Para obtener la probabilidad de H₀ hace falta un enfoque bayesiano con probabilidades previas."
    ],
    seq: [],
    cls: [
      "Interpretaciones del valor p|Correcta: probabilidad de datos tan extremos o más si H₀ fuera cierta|Incorrecta: probabilidad de que H₀ sea cierta; probabilidad de que el resultado se deba al azar; 1 − p como probabilidad de replicación"
    ] },
  { t: "Errores, potencia y tamaño del efecto",
    tip: "Rechazar H₀ siendo verdadera es un error tipo I (probabilidad α); mantenerla siendo falsa, un error tipo II (β). La potencia, 1 − β, es la probabilidad de detectar un efecto que existe; se busca al menos 0,80. Aumenta con el tamaño del efecto, con n, con α y con menor variabilidad; con n y efecto fijos, α y β varían en sentido contrario. La d de Cohen expresa la diferencia en desviaciones típicas, con independencia de n.",
    v: [
      "Error tipo I=Rechazar H₀ cuando es verdadera; falso positivo",
      "Error tipo II=Mantener H₀ cuando es falsa; falso negativo",
      "Potencia=Probabilidad de rechazar H₀ cuando es falsa, 1 − β",
      "β=Probabilidad de cometer un error tipo II",
      "d de Cohen=Diferencia de medias expresada en desviaciones típicas",
      "Análisis de potencia=Cálculo previo del n necesario para detectar un efecto plausible",
      "Tamaño del efecto=Magnitud de un efecto con independencia del tamaño muestral",
      "1 − α=Probabilidad de mantener H₀ cuando es verdadera"
    ],
    g: [
      "Si β = 0,20, la potencia del contraste es ___.|0,80|0,20|0,95",
      "Con n y tamaño del efecto fijos, al reducir α la probabilidad β ___.|aumenta|disminuye|no cambia",
      "Con x̄ = 106,9, μ₀ = 100 y σ = 15, la d de Cohen es ___.|0,46|2,30|6,90",
      "Para d = 0,5, α = 0,05 bilateral y potencia 0,80, una t de dos grupos necesita unas ___ personas por grupo.|64|26|394",
      "Un falso negativo es un error ___.|tipo II|tipo I|de medida"
    ],
    tf: [
      "La probabilidad de error tipo II la fija directamente el investigador al elegir α.|F|El investigador fija α (error tipo I); β depende del tamaño del efecto, de n y de α.",
      "Aumentar el tamaño muestral aumenta la potencia, porque reduce el error típico.|V",
      "Con n y tamaño del efecto fijos, reducir α reduce también β.|F|α y β varían en sentido contrario: un α más estricto aumenta β y reduce la potencia.",
      "Según Cohen, d = 0,5 se considera un efecto mediano.|V"
    ],
    q: [
      "Dos grupos obtienen medias de 52 y 48 con una desviación típica combinada de 8. ¿Cuánto vale d?|0,50|4,00|2,00|d = (52 − 48)/8 = 0,50, un efecto mediano. 4,00 es la diferencia bruta y 2,00 invierte el cociente (8/4).",
      "Un tratamiento eficaz no resulta significativo en un ensayo con 20 personas por grupo y d = 0,5. ¿Qué error es probable?|Error tipo II, por baja potencia|Error tipo I, por α demasiado alto|Ningún error: el efecto no existe|Con 20 por grupo y d = 0,5 la potencia es solo de 0,34: mantener H₀ siendo falsa es un error tipo II.",
      "¿Qué cambio aumenta la potencia de un contraste?|Usar medidas más fiables|Reducir el tamaño muestral|Pasar de α = 0,05 a 0,01|Menos variabilidad (medidas fiables) aumenta la potencia; reducir n o reducir α la disminuyen.",
      "¿Qué piden las normas APA (JARS) al informar de un contraste?|p exacto, tamaño del efecto e IC|Solo «p < 0,05» y la decisión|El estadístico, sin sus gl|Se pide el estadístico con sus gl, el p exacto, el tamaño del efecto con su IC y los descriptivos."
    ],
    inc: [
      "Sobre la potencia|Disminuye si el tamaño del efecto crece|Aumenta al aumentar el tamaño muestral|Por convención, se busca al menos 0,80|Un efecto mayor separa más las distribuciones de H₀ y H₁, así que aumenta la potencia."
    ],
    seq: [],
    cls: [
      "Tipo de decisión en un contraste|Error: rechazar H₀ verdadera; mantener H₀ falsa|Acierto: rechazar H₀ falsa; mantener H₀ verdadera"
    ] }
] }
);
