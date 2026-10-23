// SAIMAP Psicología · Fundamentos de Estadística · Unidades 9–12
window.COURSE.units.push(
{ n: 9, t: "Forma, puntuaciones típicas y gráficos", cap: 2, pir: "alta", mods: [
  { t: "Asimetría",
    tip: "La forma de una distribución se resume con la asimetría y la curtosis. El signo de la asimetría lo marca el lado de la cola larga: positiva si se alarga hacia los valores altos, negativa si se alarga hacia los bajos. Todos los índices valen 0 con simetría, y el de Fisher (g₁) es el más usado. Un solo atípico puede cambiar mucho el índice, así que siempre hay que mirar el gráfico.",
    v: [
      "Asimetría positiva=Forma con la cola más larga hacia los valores altos",
      "Asimetría negativa=Forma con la cola más larga hacia los valores bajos",
      "Distribución simétrica=Sus dos mitades son imágenes especulares respecto al centro",
      "Efecto techo=Prueba demasiado fácil en la que casi todos se acercan al máximo",
      "Índice de Pearson=Diferencia entre media y moda dividida por la desviación típica",
      "Índice basado en cuartiles=Compara Q₃ − Md con Md − Q₁ y divide entre la amplitud intercuartil",
      "Índice de Fisher (g₁)=Desviaciones al cubo promediadas y divididas por S³; el más usado",
      "Asimetría=Grado en que los datos no se reparten por igual a ambos lados del centro"
    ],
    g: [
      "Si la mayoría puntúa bajo y unos pocos muy alto, la asimetría es ___.|positiva|negativa|nula",
      "El índice de Fisher eleva las desviaciones a la potencia ___, lo que conserva su signo.|tercera|segunda|cuarta",
      "Con x̄ = 12, Mo = 10 y S = 4, el índice de asimetría de Pearson vale ___.|0,5|2|−0,5",
      "Con Q₁ = 20, Md = 24 y Q₃ = 30, el índice de asimetría basado en cuartiles vale ___.|0,2|2|−0,2",
      "Una prueba demasiado fácil produce un efecto ___ y asimetría negativa.|techo|suelo|halo"
    ],
    tf: [
      "La asimetría positiva corresponde a una distribución con la cola larga hacia los valores altos.|V",
      "En una prueba muy fácil, con casi todos cerca del máximo, la asimetría es positiva.|F|La cola se alarga hacia los valores bajos: es asimetría negativa (efecto techo).",
      "Todos los índices de asimetría valen 0 en una distribución simétrica.|V",
      "Un único valor atípico apenas modifica el índice de asimetría de Fisher en una muestra de 20 datos.|F|En un ejemplo con 20 datos, un solo 24 lleva el índice de −0,20 a 1,44; por eso hay que mirar el gráfico."
    ],
    q: [
      "En una tarea, casi todos los tiempos de reacción son rápidos y unos pocos, muy lentos. ¿Qué forma esperas?|Asimetría positiva|Asimetría negativa|Distribución simétrica|La cola se alarga hacia los valores altos (los tiempos lentos), así que la asimetría es positiva.",
      "Con x̄ = 30, Mo = 33 y S = 6, ¿cuánto vale el índice de asimetría de Pearson?|−0,5|0,5|−3|Aₚ = (30 − 33) / 6 = −0,5. Sin dividir por S se obtiene −3; el signo positivo invierte la resta.",
      "SPSS da una asimetría de 1,2 con un error típico de 0,4. Según la práctica extendida, ¿qué se concluye?|Apreciable: el cociente es 3|No apreciable: 1,2 no llega a 1,96|Apreciable: el cociente es 0,33|1,2 / 0,4 = 3, que supera 1,96. Ojo: este criterio depende mucho del tamaño muestral y su uso se debate.",
      "Con Q₁ = 10, Md = 15 y Q₃ = 18, el índice de asimetría basado en cuartiles indica…|asimetría negativa (−0,25)|asimetría positiva (0,25)|simetría perfecta (0)|(18 + 10 − 30) / 8 = −0,25: la mediana está más cerca de Q₃, así que la cola va hacia los valores bajos."
    ],
    inc: [
      "Sobre la asimetría|La asimetría negativa tiene la cola hacia los valores altos|El índice de Fisher (g₁) es el más usado en la práctica|Con asimetría positiva, los índices dan valores positivos|El signo lo marca el lado de la cola larga: con asimetría negativa, la cola se alarga hacia los valores bajos."
    ],
    seq: [],
    cls: [
      "Tipo de asimetría habitual|Positiva: tiempos de reacción; ingresos; número de síntomas en población general|Negativa: prueba demasiado fácil; efecto techo"
    ] },
  { t: "Curtosis",
    tip: "La curtosis compara la forma con la de una normal de igual media y varianza, y refleja sobre todo el peso de las colas, no la altura del pico. El índice de Fisher resta 3 para que la normal valga 0 (exceso de curtosis): g₂ > 0 indica leptocurtosis, g₂ ≈ 0 mesocurtosis y g₂ < 0 platicurtosis. Un solo atípico puede disparar el índice.",
    v: [
      "Curtosis=Grado en que una distribución concentra peso en el centro y las colas respecto a la normal",
      "Leptocúrtica=Más apuntada y con colas más pesadas que la normal",
      "Mesocúrtica=Con el mismo peso de centro y colas que la normal",
      "Platicúrtica=Más aplanada y con colas más ligeras que la normal",
      "Exceso de curtosis=Índice de Fisher al que se resta 3 para que la normal valga 0",
      "Distribución uniforme=Ejemplo de forma aplanada, con un exceso de curtosis de −1,2",
      "Distribución de Laplace=Ejemplo de forma apuntada, con un exceso de curtosis de 3",
      "Error típico del índice=Valor entre el que se divide el índice para juzgar si es apreciable"
    ],
    g: [
      "Una distribución con colas más pesadas que la normal es ___.|leptocúrtica|platicúrtica|mesocúrtica",
      "Para que la normal valga 0, al índice de curtosis de Fisher se le resta ___.|3|1|1,96",
      "Si Σ(xᵢ − x̄)⁴ / (n · S⁴) vale 4,5, el exceso de curtosis g₂ vale ___.|1,5|4,5|−1,5",
      "Hoy se subraya que la curtosis refleja sobre todo el peso de ___.|las colas|el pico|la media",
      "La distribución uniforme tiene un exceso de curtosis de ___, por lo que es platicúrtica.|−1,2|3|0"
    ],
    tf: [
      "Una distribución platicúrtica tiene colas más ligeras que la normal.|V",
      "Un g₂ positivo indica una distribución más aplanada que la normal.|F|g₂ > 0 indica leptocurtosis, con colas más pesadas; la forma aplanada (platicúrtica) da g₂ < 0.",
      "La curtosis refleja ante todo la altura del pico de la distribución.|F|Hoy se subraya que refleja sobre todo el peso de las colas, es decir, la presencia de valores extremos.",
      "Un solo valor atípico puede disparar el índice de curtosis.|V"
    ],
    q: [
      "Si Σ(xᵢ − x̄)⁴ / (n · S⁴) vale 2,4, la distribución es…|platicúrtica (g₂ = −0,6)|leptocúrtica (g₂ = 2,4)|mesocúrtica (g₂ = 0)|g₂ = 2,4 − 3 = −0,6 < 0: platicúrtica. Olvidar restar 3 llevaría a creerla leptocúrtica.",
      "SPSS da una curtosis de 0,9 con un error típico de 0,6. Con el criterio de ±1,96, ¿qué se concluye?|No es apreciable (1,5)|Es apreciable (1,5)|Es apreciable (0,54)|0,9 / 0,6 = 1,5, que no supera 1,96 (0,54 sale de multiplicar). El criterio depende del tamaño muestral y no hay acuerdo.",
      "Al comparar una distribución leptocúrtica, una mesocúrtica y una platicúrtica, ¿qué pueden tener en común?|Media y varianza|Media y curtosis|Varianza y curtosis|La curtosis se define frente a una normal con la misma media y varianza; lo que cambia entre las tres es la curtosis.",
      "En una muestra, un solo dato de 24 lleva la curtosis a 4,15. ¿Qué refleja sobre todo ese valor?|Una cola con un extremo|Un pico central muy alto|Una forma aplanada|La curtosis refleja sobre todo el peso de las colas, y un único atípico puede dispararla."
    ],
    inc: [
      "Sobre la curtosis|La normal tiene un exceso de curtosis de 3|La leptocúrtica tiene g₂ mayor que 0|La platicúrtica tiene colas más ligeras|Al índice de Fisher se le resta 3 precisamente para que la normal valga 0."
    ],
    seq: [],
    cls: [
      "Curtosis según g₂|Leptocúrtica: g₂ mayor que 0; colas pesadas; distribución de Laplace|Mesocúrtica: g₂ próximo a 0; distribución normal|Platicúrtica: g₂ menor que 0; colas ligeras; distribución uniforme"
    ] },
  { t: "Puntuaciones típicas (z) y escalas derivadas",
    tip: "La puntuación z expresa un dato como su distancia a la media en desviaciones típicas: z = (x − x̄) / S. Las z de una muestra tienen media 0 y desviación típica 1, no tienen unidades y conservan la forma de la distribución: tipificar no normaliza. Las escalas derivadas las transforman linealmente: T = 50 + 10 · z y CI = 100 + 15 · z.",
    v: [
      "Puntuación z=Distancia de un dato a la media expresada en desviaciones típicas",
      "Puntuación T=Escala derivada con media 50 y desviación típica 10",
      "Escala de CI=Escala derivada con media 100 y desviación típica 15",
      "z nula=El dato coincide exactamente con la media del grupo",
      "Adimensional=Sin unidades; permite comparar variables medidas en escalas distintas",
      "Tipificar=Restar la media a cada dato y dividir por la desviación típica",
      "Escala derivada=Transformación lineal de z con otra media y otra desviación típica",
      "Puntuación directa=Valor bruto obtenido en la prueba, que aislado dice poco"
    ],
    g: [
      "Con x̄ = 40 y S = 4, una puntuación directa de 46 equivale a z = ___.|1,5|6|−1,5",
      "Una persona con z = −1 tiene una puntuación T de ___.|40|60|49",
      "Con z = 1,5, la puntuación en la escala de CI es ___.|122,5|115|101,5",
      "La desviación típica de las puntuaciones z de una muestra es ___.|1|0|n − 1",
      "Al tipificar, la forma de la distribución ___.|se conserva|se normaliza|se simetriza"
    ],
    tf: [
      "Las puntuaciones z de una muestra tienen media 0 y desviación típica 1.|V",
      "Tipificar una distribución asimétrica la convierte en normal.|F|Es una transformación lineal: conserva la forma. Solo si la original es normal, las z siguen la normal tipificada.",
      "Aunque la distribución no sea normal, z = 1,5 deja por debajo el 93,3 % de los casos.|F|Esa correspondencia entre z y percentil solo vale si la variable se distribuye normalmente.",
      "Al pasar de z a T o a CI, la posición relativa de cada persona no cambia.|V"
    ],
    q: [
      "Una persona saca 46 en memoria (media 40, S 4) y 70 en atención (media 80, S 20). ¿En cuál rinde mejor respecto a su grupo?|En memoria (z = 1,5)|En atención (z = −0,5)|Igual en ambas (z = 1)|z(memoria) = (46 − 40) / 4 = 1,5; z(atención) = (70 − 80) / 20 = −0,5. Las directas llevarían a la conclusión contraria.",
      "En un test con x̄ = 20 y S = 5, ¿qué puntuación directa corresponde a z = −0,4?|18|22|19,6|x = 20 + 5 · (−0,4) = 18. 22 resulta de cambiar el signo y 19,6, de restar z sin multiplicarla por S.",
      "Un paciente obtiene T = 35 en un test. ¿Qué CI equivalente le corresponde?|77,5|85|65|z = (35 − 50) / 10 = −1,5; CI = 100 + 15 · (−1,5) = 77,5. 85 correspondería a z = −1.",
      "Al guardar puntuaciones tipificadas desde Analizar > Estadísticos descriptivos > Descriptivos, ¿qué desviación típica usa SPSS?|sₙ₋₁|S, con n|σ poblacional|SPSS usa sₙ₋₁. Puede usarse S o sₙ₋₁; lo importante es usar la misma en todos los datos."
    ],
    inc: [
      "Sobre las puntuaciones z|Tipificar vuelve simétrica la distribución|Permiten comparar variables con escalas distintas|Su media es 0 y su desviación típica es 1|Tipificar es una transformación lineal y conserva la forma: la asimetría es la misma antes y después."
    ],
    seq: [
      "De la puntuación directa a la puntuación T|Restar la media del grupo>Dividir por la desviación típica>Multiplicar la z por 10>Sumar 50"
    ],
    cls: [] },
  { t: "Diagrama de caja y valores atípicos",
    tip: "El diagrama de caja resume centro, dispersión, asimetría y atípicos. La caja va de Q₁ a Q₃ (su longitud es el RIC) con la mediana dentro; las vallas, Q₁ − 1,5 · RIC y Q₃ + 1,5 · RIC, separan los atípicos, y a más de 3 RIC de la caja están los extremos. Ante un atípico, primero se comprueba si es un error; si es real, no se elimina de forma automática.",
    v: [
      "Caja=Rectángulo entre Q₁ y Q₃ que contiene el 50 % central de los datos",
      "Línea interior=Marca la mediana dentro del rectángulo central",
      "Vallas=Límites no dibujados en Q₁ − 1,5 · RIC y Q₃ + 1,5 · RIC",
      "Bigotes=Líneas que llegan hasta el dato más extremo dentro de las vallas",
      "Valor atípico=Dato a más de 1,5 RIC por debajo de Q₁ o por encima de Q₃",
      "Valor extremo=Dato a más de 3 RIC de la caja, marcado con asterisco en SPSS",
      "Índices resistentes=Mediana, RIC o media recortada, poco afectados por los atípicos",
      "Explorar=Procedimiento de SPSS con descriptivos, cajas, tallo y hojas e histogramas"
    ],
    g: [
      "Con Q₁ = 20 y Q₃ = 30, la valla superior para detectar atípicos está en ___.|45|40|60",
      "Con Q₁ = 12 y Q₃ = 20, la valla inferior está en ___.|0|8|−4",
      "SPSS marca los valores extremos con ___ y los atípicos con un círculo.|un asterisco|un triángulo|una cruz",
      "Si la mediana está cerca de Q₁ y el bigote superior es largo, hay asimetría ___.|positiva|negativa|nula",
      "La longitud de la caja coincide con la amplitud ___.|intercuartil|total|semiintercuartil"
    ],
    tf: [
      "El criterio de valor atípico se aplica con 1,5 RIC desde los cuartiles, no desde la mediana.|V",
      "Los bigotes llegan siempre hasta las vallas.|F|Llegan hasta el dato más extremo que queda dentro de las vallas; las vallas no se dibujan.",
      "Un valor atípico real debe eliminarse siempre antes del análisis.|F|Si no es un error, no se elimina sin más: se analiza con y sin él o se usan índices resistentes.",
      "La caja contiene el 50 % central de los datos.|V"
    ],
    q: [
      "Con Q₁ = 7,75 y Q₃ = 12, ¿cómo se clasifica un dato de 24?|Atípico, pero no extremo|Extremo, pues supera 18,375|Típico, pues no llega a 24,75|RIC = 4,25; valla superior 18,375; límite de extremos 12 + 3 · 4,25 = 24,75. El 24 supera la valla, pero no ese límite.",
      "En un test, Q₁ = 40, Md = 45 y Q₃ = 50. ¿Cómo se clasifica un dato de 28?|Típico: no baja de 25|Atípico: baja de 30|Atípico: baja de 35|RIC = 10; valla inferior = 40 − 15 = 25, y 28 queda dentro. Medir desde la mediana (45 − 15 = 30) es el error típico.",
      "Un participante tiene un tiempo de reacción muy superior al del resto. ¿Qué conviene hacer primero?|Comprobar si es un error|Eliminarlo del análisis|Sustituirlo por la media|Primero se comprueba si es un error de registro o de codificación; si lo es, se corrige. Si es real, no se elimina sin más.",
      "¿Qué indica un diagrama de caja con la mediana centrada y bigotes de longitud parecida?|Simetría aproximada|Asimetría positiva|Ausencia de atípicos|Mediana centrada y bigotes parecidos indican una distribución aproximadamente simétrica."
    ],
    inc: [
      "Sobre el diagrama de caja|Los bigotes acaban en las vallas|La línea interior es la mediana|La caja va de Q₁ a Q₃|Los bigotes llegan al dato más extremo que queda dentro de las vallas, que no se dibujan."
    ],
    seq: [
      "Detectar atípicos con el diagrama de caja|Calcular Q₁ y Q₃>Obtener el RIC>Calcular las vallas con 1,5 · RIC>Marcar como atípicos los datos fuera de las vallas"
    ],
    cls: [] }
] },
{ n: 10, t: "Fundamentos de probabilidad", cap: 3, pir: "baja", mods: [
  { t: "Experimentos aleatorios, espacio muestral y sucesos",
    tip: "Un experimento aleatorio puede repetirse en condiciones análogas, tiene resultados posibles conocidos y no permite predecir cuál saldrá en cada realización. El espacio muestral reúne todos esos resultados, y un suceso es cualquier subconjunto suyo. La unión (A ∪ B) se lee «A o B», la intersección (A ∩ B), «A y B», y dos sucesos son incompatibles si su intersección es vacía.",
    v: [
      "Experimento aleatorio=Repetible, con resultados conocidos pero impredecibles en cada realización",
      "Experimento determinista=Produce siempre el mismo resultado en las mismas condiciones",
      "Espacio muestral=Conjunto de todos los resultados posibles, representado por E u Ω",
      "Suceso elemental=Subconjunto con un único resultado",
      "Suceso seguro=Coincide con el espacio muestral y ocurre siempre",
      "Suceso imposible=No contiene ningún resultado (∅)",
      "Complementario de A=Ocurre cuando no ocurre A; se escribe Ā o A′",
      "Sucesos incompatibles=No pueden ocurrir a la vez; su intersección es vacía"
    ],
    g: [
      "La ___ de A y B ocurre cuando se dan A y B a la vez.|intersección|unión|partición",
      "Con un dado, A = {2, 4, 6} y B = {4, 5, 6}; la intersección A ∩ B es ___.|{4, 6}|{2, 4, 5, 6}|{6}",
      "Con un dado, la unión de «par» y «mayor que 4» contiene ___ resultados.|cuatro|cinco|tres",
      "«Sacar un 2» y «sacar un 5» en una sola tirada son sucesos ___.|incompatibles|independientes|complementarios",
      "«Sacar un 7» con un dado es un suceso ___.|imposible|elemental|compuesto"
    ],
    tf: [
      "«Sacar par» y «sacar más de 4» con un dado son sucesos incompatibles.|F|Comparten el 6, así que su intersección no es vacía.",
      "Un suceso es cualquier subconjunto del espacio muestral.|V",
      "El complementario de «par» al lanzar un dado es {1, 3, 5}.|V",
      "Un experimento es aleatorio si da siempre el mismo resultado en condiciones análogas.|F|Eso define un experimento determinista; en el aleatorio no se puede predecir el resultado de cada realización."
    ],
    q: [
      "Se lanza una moneda dos veces y se anota el resultado de cada lanzamiento. ¿Cuántos sucesos elementales tiene el espacio muestral?|4|2|3|E = {CC, CX, XC, XX}. Anotar solo «cara» o «cruz» da 2, y contar el número de caras (0, 1 o 2) da 3.",
      "Una persona responde a un ítem de tres opciones y se anota la opción elegida. ¿Cuál es el espacio muestral?|{a, b, c}|{acierto, error, omisión}|{a, b}|El espacio muestral reúne todos los resultados posibles del experimento: las tres opciones del ítem.",
      "Con un dado, A = «menor que 3» y B = «impar». ¿Qué es A ∩ B?|{1}|{1, 2, 3, 5}|{1, 2}|A = {1, 2} y B = {1, 3, 5}; solo el 1 está en ambos. {1, 2, 3, 5} es la unión.",
      "Cada paciente de un servicio se clasifica como «con ansiedad» o «sin ansiedad». ¿Qué relación tienen esos dos sucesos?|Incompatibles y complementarios|Independientes y compatibles|Compatibles, pero no complementarios|No pueden darse a la vez y su unión es todo el espacio muestral: uno es el complementario del otro."
    ],
    inc: [
      "Sobre los sucesos|El suceso seguro es el conjunto vacío|La intersección exige que ocurran A y B|La unión de A y B se lee «A o B»|El conjunto vacío (∅) es el suceso imposible; el seguro coincide con el espacio muestral."
    ],
    seq: [],
    cls: [
      "Tipo de suceso al lanzar un dado|Elemental: sacar un 5; sacar un 2|Compuesto: sacar par; sacar más de 4|Imposible: sacar un 7; sacar un 0"
    ] },
  { t: "Tres formas de entender la probabilidad",
    tip: "La probabilidad es un número entre 0 y 1. El enfoque clásico (Laplace) divide casos favorables entre posibles, pero exige resultados equiprobables. El frecuentista la define como el límite de la frecuencia relativa en muchas repeticiones y es el de la inferencia clásica. El subjetivo o bayesiano la entiende como grado de creencia coherente. Los tres obedecen las mismas reglas de cálculo.",
    v: [
      "Enfoque clásico=Casos favorables entre casos posibles, con resultados equiprobables",
      "Enfoque frecuentista=Límite de la frecuencia relativa al repetir muchas veces el experimento",
      "Enfoque subjetivo=Grado de creencia coherente de una persona sobre un suceso",
      "Ley de los grandes números=Estabilización de la frecuencia relativa al aumentar las repeticiones",
      "Pierre-Simon Laplace=Sistematizó el enfoque clásico a principios del siglo XIX",
      "Frecuencia relativa=Cociente entre las veces que ocurre un suceso y las repeticiones",
      "Falacia del jugador=Creer que el azar compensa las rachas a corto plazo",
      "Probabilidad=Número entre 0 y 1 que expresa lo esperable que es un suceso"
    ],
    g: [
      "Con un dado equilibrado, la probabilidad de sacar un múltiplo de 3 es ___.|1/3|1/2|1/6",
      "Si 45 de 300 pacientes de un registro amplio abandonan la terapia, la probabilidad estimada de abandono es ___.|0,15|0,45|0,30",
      "El enfoque ___ es el que usa la estadística inferencial clásica.|frecuentista|clásico|subjetivo",
      "El enfoque clásico exige que los resultados sean ___.|equiprobables|repetibles|independientes",
      "En el enfoque subjetivo, las creencias se actualizan con los datos mediante el teorema de ___.|Bayes|Kolmogórov|Laplace"
    ],
    tf: [
      "El enfoque clásico permite calcular la probabilidad de que un paciente abandone la terapia.|F|Abandonar y no abandonar no tienen por qué ser igual de probables; el enfoque clásico exige simetría.",
      "Con pocas repeticiones, la frecuencia relativa oscila mucho; con muchas, se estabiliza.|V",
      "Tras diez rojos seguidos en una ruleta, es más probable que salga negro.|F|Cada tirada es independiente: es la falacia del jugador. El azar no compensa las rachas a corto plazo.",
      "Los tres enfoques de la probabilidad obedecen las mismas reglas de cálculo.|V"
    ],
    q: [
      "Una clínica estima en un 70 % la probabilidad de que un tratamiento funcione en un paciente concreto. ¿Qué enfoque usa?|Subjetivo|Clásico|Frecuentista|Es un grado de creencia sobre un suceso único, propio del enfoque subjetivo o bayesiano.",
      "Se elige al azar a un participante de una lista de 40, de los que 12 son zurdos. ¿Cuál es la probabilidad de elegir a un zurdo?|0,30|0,12|0,70|Con extracción al azar, los 40 son equiprobables: 12/40 = 0,30. 0,70 es la probabilidad del complementario.",
      "¿Cuál es la principal limitación del enfoque frecuentista?|Exige repetir el experimento|Exige resultados simétricos|Depende de quién la asigna|El frecuentista necesita poder repetir el experimento; la simetría la exige el clásico y la dependencia de quien asigna es del subjetivo.",
      "Con 10 lanzamientos de una moneda salen 7 caras; con 10 000, la proporción de caras es 0,502. ¿Qué ilustra?|La ley de los grandes números|La falacia del jugador en rachas|El axioma de la suma de Kolmogórov|Con muchas repeticiones, la frecuencia relativa se estabiliza en torno a la probabilidad."
    ],
    inc: [
      "Sobre los enfoques de la probabilidad|El frecuentista exige resultados equiprobables|El clásico exige que haya simetría entre resultados|El subjetivo depende de quién la asigna|La equiprobabilidad la exige el enfoque clásico; el frecuentista exige poder repetir el experimento."
    ],
    seq: [],
    cls: [
      "Enfoque de probabilidad en cada caso|Clásico: tirar un dado equilibrado; extraer al azar de una lista|Frecuentista: tasa de abandono en un registro amplio; frecuencia a largo plazo|Subjetivo: confianza de un clínico en un caso único; grado de creencia personal"
    ] },
  { t: "Axiomas y propiedades básicas",
    tip: "Kolmogórov (1933) formuló tres axiomas: P(A) ≥ 0, P(E) = 1 y, si A y B son incompatibles, P(A ∪ B) = P(A) + P(B). De ellos se deducen la acotación entre 0 y 1, P(∅) = 0, la regla del complementario, P(Ā) = 1 − P(A), y la monotonía. El complementario simplifica cálculos del tipo «al menos uno».",
    v: [
      "Andréi Kolmogórov=Formuló en 1933 la probabilidad como teoría basada en tres axiomas",
      "Primer axioma=La probabilidad de cualquier suceso es no negativa",
      "Segundo axioma=El suceso seguro tiene probabilidad 1",
      "Tercer axioma=Con sucesos incompatibles, la probabilidad de la unión es la suma",
      "Acotación=Toda probabilidad está entre 0 y 1",
      "Regla del complementario=La probabilidad de que no ocurra A es 1 menos P(A)",
      "Monotonía=Si A está incluido en B, P(A) no supera P(B)",
      "P(∅)=Probabilidad del suceso imposible, que vale 0"
    ],
    g: [
      "Si P(A) = 0,30, la probabilidad de su complementario es ___.|0,70|0,30|1,30",
      "Al lanzar dos dados, P(ningún 6) = ___.|25/36|5/6|11/36",
      "Al lanzar dos dados, P(al menos un 6) es aproximadamente ___.|0,306|0,333|0,167",
      "Por la propiedad de ___, «sacar un 6» no puede ser más probable que «sacar par».|monotonía|acotación|complementariedad",
      "Kolmogórov formuló sus axiomas de la probabilidad en ___.|1933|1763|1951"
    ],
    tf: [
      "Los axiomas de Kolmogórov solo son válidos en el enfoque frecuentista.|F|Son válidos para cualquiera de los tres enfoques: clásico, frecuentista y subjetivo.",
      "La probabilidad del suceso imposible es 0.|V",
      "Si A está incluido en B, entonces P(A) ≤ P(B).|V",
      "El tercer axioma establece que P(A ∪ B) = P(A) + P(B) para dos sucesos cualesquiera.|F|Solo vale para sucesos incompatibles; si comparten resultados hay que restar la intersección."
    ],
    q: [
      "Un alumno responde al azar dos ítems independientes de tres opciones. ¿Qué probabilidad tiene de acertar al menos uno?|5/9|2/3|1/9|P(ningún acierto) = (2/3) · (2/3) = 4/9; P(al menos uno) = 1 − 4/9 = 5/9. 2/3 suma 1/3 + 1/3 y 1/9 es acertar ambos.",
      "Un cálculo da P(A) = 1,15. ¿Qué indica?|Un error: viola la acotación|Que A es casi seguro|Que A incluye su complementario|Ninguna probabilidad supera 1; suele deberse a sumar sin restar la intersección.",
      "Si P(Ā) = 0,85, ¿cuánto vale P(A)?|0,15|0,85|1,85|P(A) = 1 − P(Ā) = 1 − 0,85 = 0,15.",
      "¿Qué propiedad garantiza que P(sacar un 6) ≤ P(sacar par) con un dado?|La monotonía|El primer axioma|La regla del complementario|{6} está incluido en {2, 4, 6}, así que su probabilidad no puede ser mayor."
    ],
    inc: [
      "Sobre los axiomas y sus propiedades|Un suceso muy raro puede tener P negativa|El suceso seguro tiene probabilidad 1|P(Ā) es igual a 1 menos P(A)|El primer axioma exige P(A) ≥ 0 para cualquier suceso, por raro que sea."
    ],
    seq: [],
    cls: [
      "Axioma o propiedad deducida|Axiomas: P(A) no negativa; P(E) igual a 1; suma de incompatibles|Propiedades: acotación entre 0 y 1; P(∅) igual a 0; regla del complementario; monotonía"
    ] },
  { t: "Regla de la suma e intersección de sucesos",
    tip: "Para dos sucesos cualesquiera, P(A ∪ B) = P(A) + P(B) − P(A ∩ B): se resta la intersección porque, si no, los casos comunes se cuentan dos veces. Si son incompatibles, la intersección vale 0. Con sucesos independientes, P(A ∩ B) = P(A) · P(B). Ojo: dos sucesos incompatibles con probabilidad mayor que cero son dependientes.",
    v: [
      "Regla de la suma=P(A ∪ B) es P(A) más P(B) menos P(A ∩ B)",
      "Intersección=Ocurrencia simultánea de dos sucesos",
      "Unión=Ocurre uno de los sucesos, el otro o ambos",
      "Probabilidad marginal=Probabilidad de un suceso por separado, en los márgenes de la tabla",
      "Casilla interior=Frecuencia conjunta que, dividida por el total, da una intersección",
      "Sucesos independientes=Su probabilidad conjunta coincide con el producto de las de cada uno",
      "Sucesos asociados=Su intersección observada difiere del producto de sus probabilidades",
      "Tabla de doble entrada=Formato habitual de los datos para obtener probabilidades conjuntas"
    ],
    g: [
      "Si P(A) = 0,30, P(I) = 0,25 y P(A ∩ I) = 0,15, P(A ∪ I) vale ___.|0,40|0,55|0,075",
      "Con sucesos incompatibles, P(A ∩ B) vale ___.|0|1|P(A) · P(B)",
      "Una probabilidad de la unión mayor que 1 suele deberse a no restar la ___.|intersección|unión|marginal",
      "Si A y B son independientes, P(A ∩ B) = ___.|P(A) · P(B)|P(A) + P(B)|0",
      "Dos sucesos con probabilidad mayor que cero que son incompatibles son siempre ___.|dependientes|independientes|complementarios"
    ],
    tf: [
      "Dos sucesos incompatibles son, por eso mismo, independientes.|F|Si ocurre uno, el otro no puede ocurrir: conocer uno cambia la probabilidad del otro, así que son dependientes.",
      "En una tabla de doble entrada, las casillas interiores divididas por el total dan las intersecciones.|V",
      "Si P(A) = 0,6 y P(B) = 0,5, la probabilidad de la unión es 1,1.|F|Ninguna probabilidad supera 1: falta restar P(A ∩ B), que aquí vale al menos 0,1.",
      "Si P(A ∩ B) = 0, la regla de la suma se reduce al tercer axioma.|V"
    ],
    q: [
      "En una residencia de 200 estudiantes, 60 tienen ansiedad, 50 insomnio y 30 ambos. ¿Qué proporción tiene exactamente uno de los dos problemas?|0,25|0,40|0,55|Solo ansiedad 30 y solo insomnio 20: 50/200 = 0,25. 0,40 es la unión y 0,55, sumar sin restar.",
      "En esa residencia, P(A) = 0,30, P(I) = 0,25 y P(A ∩ I) = 0,15. ¿Son independientes ansiedad e insomnio?|No: el producto sería 0,075|Sí: la intersección no es 0|No: son incompatibles|Con independencia, P(A ∩ I) sería 0,30 · 0,25 = 0,075; la observada es el doble, así que están asociados.",
      "En un grupo, P(depresión) = 0,20, P(ansiedad) = 0,30 y P(ambas) = 0,10. ¿Qué probabilidad hay de no tener ninguna?|0,60|0,50|0,40|P(D ∪ A) = 0,20 + 0,30 − 0,10 = 0,40; P(ninguna) = 1 − 0,40 = 0,60. 0,50 resulta de no restar la intersección.",
      "Con un dado, ¿cuánto vale P(impar ∪ menor que 3)?|4/6|5/6|3/6|Impar = {1, 3, 5} y menor que 3 = {1, 2}; comparten el 1: 3/6 + 2/6 − 1/6 = 4/6."
    ],
    inc: [
      "Sobre la regla de la suma|Para sucesos compatibles basta sumar P(A) y P(B)|Si son incompatibles, la intersección vale 0|Se resta la intersección para no contarla dos veces|Si comparten resultados, sumar sin restar P(A ∩ B) cuenta dos veces los casos comunes."
    ],
    seq: [],
    cls: [
      "Relación entre sucesos|Incompatibles: P(A ∩ B) igual a 0; sacar un 2 y sacar un 5 en una tirada|Independientes: P(A ∩ B) igual a P(A) · P(B); resultados de dos dados distintos"
    ] }
] },
{ n: 11, t: "Probabilidad condicionada y teorema de Bayes", cap: 3, pir: "media", mods: [
  { t: "Probabilidad condicionada y regla del producto",
    tip: "P(A ∣ B) = P(A ∩ B) / P(B) es la probabilidad de A sabiendo que ha ocurrido B: el espacio muestral se reduce a los casos de B. No es simétrica, y confundir P(A ∣ B) con P(B ∣ A) es la falacia de la inversión de la condicional. Despejando se obtiene la regla del producto, P(A ∩ B) = P(B) · P(A ∣ B), útil en extracciones sucesivas.",
    v: [
      "Probabilidad condicionada=Probabilidad de A sabiendo que ha ocurrido B",
      "Regla del producto=Intersección obtenida como P(B) multiplicada por P(A ∣ B)",
      "Inversión de la condicional=Falacia de confundir P(A ∣ B) con P(B ∣ A)",
      "Sin reposición=Extracción en la que el elegido no vuelve al grupo",
      "Con reposición=Extracción en la que la misma persona puede volver a salir",
      "Espacio muestral reducido=Los casos de B, a los que se limita el cálculo al condicionar",
      "Requisito P(B) > 0=Condición para que P(A ∣ B) esté definida",
      "Extracciones sucesivas=Situación típica en la que se aplica la regla del producto"
    ],
    g: [
      "En la residencia, P(A ∣ I) = 0,15 / 0,25 = ___.|0,60|0,50|0,0375",
      "De los 60 estudiantes con ansiedad, 30 tienen insomnio, así que P(I ∣ A) = ___.|0,50|0,60|0,15",
      "Si P(B) = 0,4 y P(A ∣ B) = 0,5, entonces P(A ∩ B) = ___.|0,20|0,90|0,80",
      "Al elegir dos de 10 personas sin reposición, con 4 de puntuación alta, P(ambas altas) es aproximadamente ___.|0,133|0,160|0,400",
      "La probabilidad condicionada no es ___: P(A ∣ B) suele diferir de P(B ∣ A).|simétrica|aditiva|acotada"
    ],
    tf: [
      "P(A ∣ B) y P(B ∣ A) son siempre iguales.|F|No es simétrica: en la residencia, P(A ∣ I) = 0,60 y P(I ∣ A) = 0,50.",
      "Al condicionar por B, el espacio muestral se reduce a los casos de B.|V",
      "Con reposición, la probabilidad de elegir dos veces a alguien con puntuación alta en un grupo de 10 con 4 altos es 0,16.|V",
      "En extracciones sin reposición, la segunda probabilidad no depende de la primera.|F|Tras sacar a una persona quedan menos casos: la segunda probabilidad cambia (3/9 en lugar de 4/10)."
    ],
    q: [
      "En una clase de 20, 8 tienen ansiedad alta. Se eligen dos sin reposición. ¿Qué probabilidad hay de que ambos tengan ansiedad alta?|0,147|0,160|0,400|(8/20) · (7/19) = 56/380 ≈ 0,147. 0,160 = (8/20)² supondría reposición; 0,400 es solo la primera extracción.",
      "Un 40 % de la muestra recibe terapia (T) y P(mejora ∣ T) = 0,70. ¿Qué proporción del total recibe terapia y mejora?|0,28|0,70|0,57|P(T ∩ M) = 0,40 · 0,70 = 0,28. 0,57 resulta de dividir 0,40 entre 0,70.",
      "En un estudio, P(positivo ∩ trastorno) = 0,06 y P(trastorno) = 0,08. ¿Cuánto vale P(positivo ∣ trastorno)?|0,75|0,14|0,0048|0,06 / 0,08 = 0,75. 0,0048 multiplica en vez de dividir y 0,14 suma ambas probabilidades.",
      "Un clínico razona: «casi todos los pacientes con este trastorno tienen cefalea; esta paciente tiene cefalea, luego casi seguro lo tiene». ¿Qué error comete?|Invertir la condicional|La falacia del jugador|Restringir el rango|Confunde P(cefalea ∣ trastorno) con P(trastorno ∣ cefalea), dos probabilidades distintas."
    ],
    inc: [
      "Sobre la probabilidad condicionada|P(A ∣ B) se define aunque P(B) valga 0|P(A ∩ B) es igual a P(A) · P(B ∣ A)|P(A ∣ B) puede diferir de P(B ∣ A)|La definición exige P(B) > 0, porque P(B) está en el denominador."
    ],
    seq: [],
    cls: [] },
  { t: "Independencia de sucesos",
    tip: "A y B son independientes cuando saber que uno ha ocurrido no cambia la probabilidad del otro: P(A ∣ B) = P(A). La comprobación más rápida es P(A ∩ B) = P(A) · P(B). La independencia se comprueba con números, no con el sentido común, y aplicada a variables enteras es la base de la prueba χ² de la Unidad 14.",
    v: [
      "Independencia=Conocer un suceso no modifica la probabilidad del otro",
      "Dependencia=Conocer B cambia la probabilidad de A",
      "Comprobación por el producto=Ver si P(A ∩ B) coincide con P(A) · P(B)",
      "Incompatibilidad=Intersección con probabilidad cero",
      "Prueba χ²=Aplica la idea de independencia a dos variables categóricas",
      "Frecuencia esperada=Producto de las probabilidades marginales por el total, bajo independencia",
      "Sucesos asociados=La intersección observada difiere de la esperada por azar",
      "Sentido común=Guía poco fiable para juzgar la independencia sin calcular"
    ],
    g: [
      "Si P(A) = 0,4, P(B) = 0,5 y P(A ∩ B) = 0,2, los sucesos son ___.|independientes|incompatibles|dependientes",
      "Si P(A) = 0,3, P(B) = 0,2 y P(A ∩ B) = 0,1, los sucesos son ___.|dependientes|independientes|incompatibles",
      "Si A y B son independientes y P(A) = 0,25, entonces P(A ∣ B) = ___.|0,25|0,75|0,50",
      "Si A y B son independientes, con P(A) = 0,5 y P(B) = 0,2, P(A ∩ B) vale ___.|0,10|0,70|0,40",
      "En la residencia, saber que alguien duerme mal ___ la probabilidad de que tenga ansiedad.|duplica|reduce a la mitad|no modifica"
    ],
    tf: [
      "Dos sucesos son independientes si P(A ∩ B) = 0.|F|Eso define sucesos incompatibles; la independencia exige P(A ∩ B) = P(A) · P(B).",
      "Si P(A ∣ B) = P(A), A y B son independientes.|V",
      "Dos sucesos que parecen relacionados pueden ser independientes; por eso se comprueba con números.|V",
      "La independencia entre sucesos no guarda relación con la prueba χ².|F|χ² aplica la misma idea a variables: con independencia, la frecuencia esperada es el producto de marginales por el total."
    ],
    q: [
      "En 100 pacientes, 40 son mujeres, 30 mejoran y 12 son mujeres que mejoran. ¿Son independientes sexo y mejora?|Sí, porque 0,40 · 0,30 = 0,12|No, porque 0,12 no es 0|No, porque 0,40 + 0,30 ≠ 0,12|P(mujer ∩ mejora) = 0,12 coincide con P(mujer) · P(mejora) = 0,40 · 0,30 = 0,12: son independientes.",
      "Se sabe que P(A) = 0,30 y P(A ∣ B) = 0,60. ¿Qué se concluye?|Que son dependientes|Que son independientes|Que son incompatibles|Conocer B duplica la probabilidad de A; si fueran independientes, P(A ∣ B) sería 0,30.",
      "Se clasifica a 200 personas en dos variables independientes, con P(A) = 0,30 y P(B) = 0,25. ¿Cuántas se esperan en la casilla «A y B»?|15|30|110|200 · 0,30 · 0,25 = 15. 110 resulta de sumar (200 · 0,55) en lugar de multiplicar.",
      "¿Cuál de estas condiciones indica que A y B son dependientes?|P(A ∩ B) ≠ P(A) · P(B)|P(A ∣ B) = P(A)|P(A ∩ B) = P(A) · P(B)|Si la intersección difiere del producto de las marginales, conocer uno cambia la probabilidad del otro."
    ],
    inc: [
      "Sobre la independencia|Incompatibles e independientes son sinónimos|Si son independientes, P(A ∣ B) coincide con P(A)|Con dependencia, conocer B cambia P(A)|Dos sucesos incompatibles con probabilidad positiva son dependientes: si ocurre uno, el otro ya no puede ocurrir."
    ],
    seq: [],
    cls: [
      "Relación entre los sucesos|Independientes: P(A) 0,4, P(B) 0,5 y P(A ∩ B) 0,2; P(A ∣ B) igual a P(A)|Dependientes: P(A) 0,3, P(B) 0,2 y P(A ∩ B) 0,1; incompatibles con probabilidad positiva"
    ] },
  { t: "Probabilidad total y teorema de Bayes",
    tip: "Si B₁, …, Bₖ forman una partición, P(A) es la suma de P(Bᵢ) · P(A ∣ Bᵢ): teorema de la probabilidad total. El teorema de Bayes da la vuelta a la condicional: P(Bᵢ ∣ A) = P(Bᵢ) · P(A ∣ Bᵢ) / P(A). Sus piezas son la probabilidad a priori, la verosimilitud y la probabilidad a posteriori, y es la base de la estadística bayesiana.",
    v: [
      "Partición=Sucesos incompatibles cuya unión es todo el espacio muestral",
      "Probabilidad total=Suma de P(Bᵢ) · P(A ∣ Bᵢ) sobre todas las partes",
      "Teorema de Bayes=Obtiene P(Bᵢ ∣ A) a partir de las P(A ∣ Bᵢ)",
      "Probabilidad a priori=Lo que se sabe de Bᵢ antes de observar A, como la prevalencia",
      "Verosimilitud=Lo probable que es la observación A si Bᵢ es cierto",
      "Probabilidad a posteriori=Probabilidad de Bᵢ actualizada tras observar A",
      "Thomas Bayes=Reverendo cuyo ensayo se publicó póstumamente en 1763",
      "Estadística bayesiana=Trata los parámetros como inciertos y actualiza creencias con datos"
    ],
    g: [
      "Si P(B) = 0,2, P(A ∣ B) = 0,5 y P(A ∣ B̄) = 0,1, por probabilidad total P(A) = ___.|0,18|0,60|0,10",
      "Con esos mismos datos, P(B ∣ A) vale aproximadamente ___.|0,56|0,50|0,10",
      "En un cribado, la sensibilidad desempeña en el teorema de Bayes el papel de la ___.|verosimilitud|probabilidad a priori|probabilidad a posteriori",
      "La prevalencia de un trastorno es su probabilidad ___.|a priori|a posteriori|condicionada",
      "Laplace ___ el teorema de Bayes poco después de su publicación.|desarrolló|refutó|tradujo"
    ],
    tf: [
      "Para aplicar la probabilidad total, los sucesos Bᵢ deben ser incompatibles y cubrir todo el espacio muestral.|V",
      "La verosimilitud es la probabilidad de la hipótesis una vez observados los datos.|F|Esa es la probabilidad a posteriori; la verosimilitud es P(A ∣ Bᵢ), lo probable que es la observación si Bᵢ es cierto.",
      "El teorema de Bayes se deduce de la regla del producto y de la probabilidad total.|V",
      "Thomas Bayes publicó su teorema en vida y Laplace lo refutó poco después.|F|Su ensayo se publicó póstumamente en 1763, y Laplace lo desarrolló y generalizó."
    ],
    q: [
      "En un centro, el 30 % de los pacientes recibe TCC y el 70 %, otra terapia. Mejoran el 60 % con TCC y el 40 % con la otra. ¿Qué proporción total mejora?|0,46|0,50|0,18|0,30 · 0,60 + 0,70 · 0,40 = 0,18 + 0,28 = 0,46. Promediar 0,60 y 0,40 sin ponderar da 0,50.",
      "En ese mismo centro, si un paciente ha mejorado, ¿qué probabilidad hay de que recibiera TCC?|≈ 0,39|0,60|0,30|P(TCC ∣ mejora) = 0,18 / 0,46 ≈ 0,39. 0,60 es la verosimilitud P(mejora ∣ TCC) y 0,30, la a priori.",
      "En el teorema de Bayes, ¿qué es el denominador P(A)?|La probabilidad total de A|La verosimilitud de Bᵢ|La probabilidad a priori|P(A) se obtiene con el teorema de la probabilidad total sobre la partición.",
      "¿Qué hace la estadística bayesiana con los parámetros?|Los trata como inciertos|Los fija como constantes|Los estima sin datos previos|Trata los parámetros como inciertos y actualiza las creencias con los datos mediante el teorema de Bayes."
    ],
    inc: [
      "Sobre el teorema de Bayes|La a posteriori se obtiene antes de observar A|La a priori es lo que se sabe antes de observar A|La verosimilitud es P(A ∣ Bᵢ)|La probabilidad a posteriori es la actualizada después de observar A."
    ],
    seq: [],
    cls: [
      "Elemento del teorema de Bayes en un cribado|Probabilidad a priori: prevalencia del trastorno|Verosimilitud: sensibilidad de la prueba|Probabilidad a posteriori: valor predictivo positivo"
    ] },
  { t: "Cribado diagnóstico y frecuencias naturales",
    tip: "Sensibilidad y especificidad son propiedades de la prueba; los valores predictivos (VPP y VPN) dependen además de la prevalencia y se obtienen con Bayes. Con un trastorno raro, los falsos positivos de la mayoría sana superan a los verdaderos: con prevalencia del 1 %, sensibilidad del 90 % y especificidad del 95 %, el VPP es ≈ 0,15. Ignorar la prevalencia es la falacia de la tasa base; las frecuencias naturales ayudan a evitarla.",
    v: [
      "Sensibilidad=Probabilidad de dar positivo si se tiene el trastorno",
      "Especificidad=Probabilidad de dar negativo si no se tiene el trastorno",
      "Valor predictivo positivo=Probabilidad de tener el trastorno si se da positivo",
      "Valor predictivo negativo=Probabilidad de no tener el trastorno si se da negativo",
      "Prevalencia=Proporción de la población con el trastorno; la a priori del cribado",
      "Falacia de la tasa base=Ignorar la probabilidad a priori al interpretar un resultado",
      "Frecuencias naturales=Recuentos sobre una población concreta, como 90 de cada 10 000",
      "Falso positivo=Persona sin el trastorno a la que la prueba clasifica como positiva"
    ],
    g: [
      "Con prevalencia del 1 %, sensibilidad del 90 % y especificidad del 95 %, el VPP es aproximadamente ___.|0,15|0,90|0,95",
      "De los 585 positivos del árbol de 10 000 personas, solo ___ tienen el trastorno.|90|495|100",
      "Con esa misma prueba, si la prevalencia sube al 10 %, el VPP pasa a ___.|0,667|0,154|0,900",
      "La probabilidad de dar negativo si no se tiene el trastorno es la ___.|especificidad|sensibilidad|prevalencia",
      "Un cribado poblacional de un trastorno raro sirve más para ___ que para diagnosticar.|descartar|confirmar|tratar"
    ],
    tf: [
      "El VPP de una prueba no depende de la prevalencia del trastorno.|F|Sensibilidad y especificidad son de la prueba; los valores predictivos cambian mucho con la prevalencia.",
      "Si una prueba tiene una sensibilidad del 90 %, un positivo implica un 90 % de probabilidad de tener el trastorno.|F|La sensibilidad es P(+ ∣ T); lo preguntado es P(T ∣ +), que depende de la prevalencia (≈ 0,15 con el 1 %).",
      "Tras un primer positivo, el VPP de ese paso se convierte en la probabilidad a priori de una segunda prueba.|V",
      "El contraste clásico proporciona P(datos ∣ H₀), no P(H₀ ∣ datos).|V"
    ],
    q: [
      "En 1 000 personas, con prevalencia del 10 %, sensibilidad del 90 % y especificidad del 90 %, ¿cuál es el VPP?|0,50|0,90|0,10|100 con trastorno → 90 positivos; 900 sin él → 90 falsos positivos. VPP = 90/180 = 0,50. 0,90 confunde VPP con sensibilidad.",
      "Con esos mismos datos (1 000 personas), ¿cuánto vale aproximadamente el VPN?|0,988|0,900|0,810|Negativos: 810 sin trastorno y 10 con él. VPN = 810/820 ≈ 0,988. 0,900 es la especificidad.",
      "Una psicóloga aplica la misma prueba en una unidad especializada en lugar de en población general. ¿Qué cambia?|Sube el VPP|Sube la sensibilidad|Baja la especificidad|Al aumentar la prevalencia (la a priori) sube el VPP; sensibilidad y especificidad son propiedades de la prueba.",
      "Con prevalencia del 1 %, sensibilidad del 90 % y especificidad del 95 %, ¿qué proporción de los positivos son falsos positivos?|≈ 0,85|≈ 0,05|≈ 0,10|495/585 ≈ 0,846. 0,05 es P(+ ∣ sin trastorno) y 0,10, el complemento de la sensibilidad."
    ],
    inc: [
      "Sobre los índices de un cribado|La especificidad depende de la prevalencia|El VPN responde a «si doy negativo, ¿no lo tengo?»|La sensibilidad es una propiedad de la prueba|Sensibilidad y especificidad son propiedades de la prueba; lo que cambia con la prevalencia son los valores predictivos."
    ],
    seq: [
      "Calcular el VPP con frecuencias naturales|Tomar una población de referencia, como 10 000 personas>Separar con y sin trastorno según la prevalencia>Repartir positivos y negativos en cada rama>Sumar todos los positivos>Dividir los verdaderos positivos entre el total de positivos"
    ],
    cls: [
      "Propiedad de la prueba o dependiente de la prevalencia|De la prueba: sensibilidad; especificidad|Depende de la prevalencia: VPP; VPN"
    ] }
] },
{ n: 12, t: "Asociación y causalidad", cap: 4, pir: "media", mods: [
  { t: "Relación no es causa",
    tip: "Dos variables están relacionadas cuando ciertos valores de una tienden a acompañar a ciertos valores de la otra. Una asociación entre X e Y admite al menos cinco explicaciones: X causa Y, causalidad inversa, causalidad bidireccional, una tercera variable o el azar. La asociación se describe con estadísticos; la causalidad no es un estadístico y depende sobre todo del diseño.",
    v: [
      "Asociación=Tendencia de los valores de dos variables a presentarse juntos",
      "Causalidad inversa=El supuesto efecto es en realidad la causa",
      "Causalidad bidireccional=Las dos variables se influyen mutuamente",
      "Tercera variable=Factor que influye a la vez en X y en Y",
      "Azar=Origen de una relación muestral que no existe en la población",
      "Covarianza y correlación=Estadísticos que describen la asociación entre variables cuantitativas",
      "χ² y sus coeficientes=Describen la asociación entre variables categóricas",
      "Diseño de investigación=Determina sobre todo si una conclusión causal es legítima"
    ],
    g: [
      "Si se supone que dormir bien mejora las notas, que ir bien en los estudios mejore el sueño sería causalidad ___.|inversa|directa|bidireccional",
      "Una relación causal implica asociación, pero una asociación no implica ___.|causalidad|covariación|dependencia",
      "La causalidad no es un ___, sino una conclusión que depende sobre todo del diseño.|estadístico|supuesto|requisito",
      "Un horario laboral exigente que reduce a la vez el sueño y el tiempo de estudio actúa como ___.|tercera variable|causa inversa|efecto bidireccional",
      "En una muestra pequeña puede aparecer por ___ una relación que no existe en la población.|azar|confusión|inversión"
    ],
    tf: [
      "Si una correlación es muy alta, puede concluirse que una variable causa la otra.|F|El tamaño de la correlación no garantiza causalidad: la conclusión causal depende del diseño.",
      "Toda relación causal implica asociación entre las variables.|V",
      "La causalidad bidireccional supone que X e Y se influyen mutuamente.|V",
      "Un coeficiente de correlación permite distinguir si X causa Y o si Y causa X.|F|El coeficiente describe la asociación, no su dirección causal; eso exige diseño y precedencia temporal."
    ],
    q: [
      "De 50 estudiantes que duermen más de 7 horas aprueban 40; de 50 que duermen menos, aprueban 20. ¿Qué puede afirmarse?|Hay asociación: 0,80 frente a 0,40|Dormir más causa el aprobado|No hay relación: aprueban 60|Las proporciones de aprobado difieren (40/50 = 0,80 y 20/50 = 0,40): hay covariación, pero el dato no dice por qué.",
      "En un grupo, 30 de 60 fumadores y 10 de 40 no fumadores presentan ansiedad. ¿Hay covariación entre ambas variables?|Sí: 0,50 frente a 0,25|No: hay 40 casos en 100|No: los grupos no son iguales|Se comparan proporciones dentro de cada grupo (30/60 = 0,50 y 10/40 = 0,25), no recuentos brutos ni tamaños.",
      "Los niños que ven más televisión violenta resultan ser más agresivos. ¿Qué explicación corresponde a la causalidad inversa?|Los agresivos buscan más violencia|La televisión causa la agresión|Un factor familiar causa ambas|En la causalidad inversa, el supuesto efecto (la agresividad) sería la causa de ver más televisión violenta.",
      "¿Con qué se describe la asociación entre dos variables categóricas?|Con χ² y sus coeficientes|Con la covarianza|Con el diseño experimental|La covarianza y la correlación describen variables cuantitativas; χ² y sus coeficientes, categóricas. El diseño no es un estadístico."
    ],
    inc: [
      "Explicaciones de una asociación entre X e Y|La asociación demuestra que X precede a Y|Y puede ser la causa de X|Una tercera variable puede causar X e Y|La asociación no informa del orden temporal ni de la dirección causal."
    ],
    seq: [],
    cls: [
      "Explicación de la asociación|Causalidad inversa: el buen rendimiento reduce el estrés y mejora el sueño|Tercera variable: el horario laboral reduce sueño y estudio; el calor aumenta helados y baños|Azar: relación en una muestra pequeña que no existe en la población"
    ] },
  { t: "Requisitos para inferir causalidad",
    tip: "Desde Mill, afirmar que X causa Y exige covariación, precedencia temporal y eliminación de explicaciones alternativas. El experimento cumple la tercera mediante manipulación y asignación aleatoria, y por eso tiene la mayor validez interna. Con datos observacionales se usan los criterios de Bradford Hill (1965), de los que solo la temporalidad es imprescindible. La confusión se controla en el diseño o en el análisis.",
    v: [
      "Covariación=Las dos variables están relacionadas",
      "Precedencia temporal=La causa ocurre antes que el efecto",
      "Asignación aleatoria=Reparto por azar de los participantes entre las condiciones",
      "Validez interna=Grado en que un diseño permite concluir causalidad",
      "Criterios de Bradford Hill=Guía epidemiológica de 1965 para valorar causas con datos observacionales",
      "Variable de confusión=Tercera variable ligada a la supuesta causa y al efecto",
      "Estratificar=Analizar por separado cada nivel de una variable",
      "Correlación espuria=Relación sin vínculo directo, debida a una tercera variable o al azar"
    ],
    g: [
      "De los criterios de Bradford Hill, el único imprescindible es la ___.|temporalidad|fuerza|consistencia",
      "El experimento elimina explicaciones alternativas mediante la manipulación y la ___.|asignación aleatoria|selección intencional|medición repetida",
      "Ventas de helados y ahogamientos crecen juntos por el calor: es una correlación ___.|espuria|inversa|restringida",
      "Mantener constante una variable es una forma de controlar la confusión en el ___.|diseño|análisis|muestreo",
      "Los criterios de Bradford Hill se usan en epidemiología desde ___.|1965|1854|1951"
    ],
    tf: [
      "Para Mill bastan la covariación y la precedencia temporal para afirmar causalidad.|F|Falta la tercera condición, la más difícil: eliminar explicaciones alternativas.",
      "La asignación aleatoria reparte por igual entre los grupos tanto las variables conocidas como las desconocidas.|V",
      "Cumplir uno de los criterios de Bradford Hill basta para afirmar causalidad.|F|Ninguno es suficiente por sí solo; solo la temporalidad es imprescindible.",
      "Una variable de confusión puede crear, ocultar o invertir una relación.|V"
    ],
    q: [
      "Un estudio observacional con 20 000 personas halla r = 0,70 entre ejercicio y bienestar. ¿Permite concluir causalidad?|No sin controlar la confusión|Sí, por el tamaño de la muestra|Sí, por la fuerza de la relación|Ni una muestra grande ni una correlación alta eliminan las variables de confusión.",
      "Se asigna al azar a 60 participantes a terapia o a lista de espera y después se mide la ansiedad. ¿Qué requisito asegura sobre todo el azar?|Eliminar alternativas|Precedencia temporal|Covariación|La asignación aleatoria reparte las demás características entre los grupos y descarta explicaciones alternativas.",
      "En un experimento mejoran 24 de 40 con terapia y 12 de 40 en lista de espera. ¿Qué diferencia de proporciones hay?|0,30|12|0,50|24/40 = 0,60 y 12/40 = 0,30: la diferencia es 0,30. 12 es la diferencia en recuentos, no en proporción.",
      "Para controlar la confusión en el análisis, un investigador examina la relación por separado en hombres y en mujeres. ¿Qué hace?|Estratificar|Aleatorizar|Emparejar|Analizar por separado cada nivel de la variable es estratificar; aleatorizar y emparejar se hacen en el diseño."
    ],
    inc: [
      "Sobre la inferencia causal|El experimento tiene la menor validez interna|La temporalidad es imprescindible en Bradford Hill|La aleatorización controla la confusión en el diseño|El experimento con asignación aleatoria es el diseño con mayor validez interna."
    ],
    seq: [],
    cls: [
      "Control de la confusión|En el diseño: aleatorización; emparejamiento; mantener constante la variable|En el análisis: estratificar; técnicas multivariadas"
    ] },
  { t: "La paradoja de Simpson y la restricción de rango",
    tip: "En la paradoja de Simpson, una relación presente en cada subgrupo desaparece o se invierte al juntar los datos, porque una variable de confusión se reparte de forma desigual entre los grupos; la conclusión correcta sale del análisis estratificado. La restricción de rango aparece cuando la muestra solo cubre parte de los valores de una variable: la correlación observada suele ser menor que en la población.",
    v: [
      "Paradoja de Simpson=Inversión o desaparición de una relación al agregar subgrupos",
      "Edward Simpson=Describió en 1951 la inversión de relaciones al juntar datos",
      "Restricción de rango=Reducción de la correlación al estudiar solo parte de los valores",
      "Datos agregados=Todos los subgrupos juntos, que pueden engañar",
      "Análisis estratificado=Examen de la relación dentro de cada subgrupo",
      "Gravedad del caso=Confusora en el ejemplo de las dos terapias",
      "Validación con admitidos=Situación típica de restricción en pruebas de selección",
      "Atenuación=Efecto habitual de un rango reducido sobre la correlación"
    ],
    g: [
      "En el ejemplo de las dos terapias, la terapia A mejora al ___ de los casos leves.|90 %|80 %|66 %",
      "En el total, la terapia A logra un 66 % de mejoría y la B, un ___.|74 %|60 %|50 %",
      "Al estudiar solo a los seleccionados, la correlación entre la prueba de admisión y el rendimiento baja de 0,60 a ___.|0,42|0,72|0,18",
      "La paradoja de Simpson ocurre cuando una variable de confusión se reparte de forma ___ entre los grupos.|desigual|aleatoria|equilibrada",
      "Restringir el rango de una variable suele ___ la correlación observada.|reducir|aumentar|invertir"
    ],
    tf: [
      "La paradoja de Simpson es un error de cálculo al sumar los subgrupos.|F|No es un error: muestra que los datos agregados pueden engañar cuando hay variables relevantes sin controlar.",
      "En el ejemplo de las terapias, la conclusión correcta procede del análisis estratificado.|V",
      "Estudiar la relación entre CI y rendimiento solo en universitarios tiende a inflar la correlación.|F|Su rango de CI es más reducido que el de la población general, así que la correlación tiende a ser menor.",
      "En la paradoja de Simpson, la relación global puede tener el signo contrario a la de cada grupo.|V"
    ],
    q: [
      "Con la terapia A mejoran 18 de 20 casos leves y 48 de 80 graves. ¿Qué porcentaje global de mejoría tiene?|66 %|75 %|60 %|(18 + 48) / 100 = 66 %. Promediar el 90 % y el 60 % sin ponderar da 75 %.",
      "Con la terapia B mejoran 64 de 80 leves y 10 de 20 graves. ¿Por qué B parece mejor que A en el total?|Trató sobre todo casos leves|Es mejor en ambos estratos|Tuvo más pacientes en total|B atendió 80 leves, que mejoran más con cualquier terapia; en cada estrato, A es mejor. La gravedad es la confusora.",
      "Una universidad valida su prueba de acceso solo con los admitidos y obtiene r = 0,20. ¿Qué cabe pensar?|Que subestima la validez real|Que la prueba no es válida|Que sobrestima la validez real|Al estudiar solo a los admitidos se restringe el rango de X y la correlación se atenúa.",
      "Con un fármaco mejoran 9 de 10 leves y 30 de 60 graves; sin él, 40 de 50 leves y 5 de 20 graves. ¿Qué ocurre?|Mejor en cada estrato, peor en total|Peor en cada estrato y en total|Mejor en cada estrato y en total|Leves 0,90 frente a 0,80 y graves 0,50 frente a 0,25, pero en total 39/70 ≈ 0,56 frente a 45/70 ≈ 0,64: Simpson."
    ],
    inc: [
      "Sobre Simpson y la restricción de rango|La restricción de rango suele aumentar la correlación|Simpson se da con variables cuantitativas y categóricas|La paradoja refleja una confusora mal repartida|Al reducir la variabilidad de una variable, la correlación observada suele ser menor, no mayor."
    ],
    seq: [],
    cls: [] },
  { t: "John Snow y el cólera: razonar con datos",
    tip: "En el brote de cólera del Soho (1854), John Snow, frente a la teoría de los miasmas, situó cada muerte en un mapa y vio que se concentraban en torno a la bomba de Broad Street. El mapa solo mostraba una asociación espacial; Snow reforzó la inferencia analizando las excepciones y comparando hogares abastecidos por dos compañías de agua, un experimento natural.",
    v: [
      "John Snow=Médico que defendió que el cólera se transmitía por el agua",
      "Teoría de los miasmas=Atribuía la enfermedad al aire contaminado",
      "Broad Street=Calle de la bomba de agua en torno a la que se acumulaban las muertes",
      "Asociación espacial=Lo que mostraba por sí solo el mapa de defunciones",
      "Experimento natural=Un factor externo asigna las condiciones de forma casi aleatoria",
      "Fábrica de cerveza=Excepción: sus trabajadores, con pozo propio, apenas enfermaron",
      "Comparación entre compañías=Hogares parecidos que solo diferían en el agua recibida",
      "1854=Año del brote de cólera del Soho"
    ],
    g: [
      "Snow situó cada muerte en un ___ del barrio del Soho.|mapa|censo|registro",
      "Entre las excepciones que reforzaron el argumento estaban los trabajadores de una fábrica de ___.|cerveza|tabaco|pan",
      "La comparación entre dos compañías de agua funcionó como un experimento ___.|natural|controlado|simulado",
      "Una de las compañías captaba el agua de un tramo del Támesis contaminado por ___.|aguas residuales|vertidos industriales|agua de mar",
      "La manivela de la bomba se retiró cuando el brote ya estaba ___.|remitiendo|empezando|en su pico"
    ],
    tf: [
      "La epidemia del Soho se detuvo de golpe al retirar la manivela de la bomba.|F|El brote ya remitía, en parte porque muchos vecinos habían huido; el argumento de Snow descansa en los datos.",
      "El mapa de Snow, por sí solo, mostraba una asociación espacial, no una prueba causal.|V",
      "Algunas víctimas que vivían lejos habían bebido agua de la bomba de Broad Street porque la preferían.|V",
      "En la comparación entre compañías, los hogares diferían en muchas características además del agua.|F|Eran parecidos en todo salvo en el agua recibida, lo que reducía el peligro de confusión."
    ],
    q: [
      "Al comparar los hogares de las dos compañías de agua, ¿qué encontró Snow?|Mortalidad muchas veces mayor con el agua contaminada|Mortalidad parecida con ambas compañías de agua|Mortalidad mayor con el agua captada río arriba|Los hogares abastecidos desde el tramo del Támesis contaminado por aguas residuales tuvieron una mortalidad muchas veces mayor.",
      "¿Por qué la comparación entre compañías reforzaba la inferencia causal?|El agua no dependía de las familias|Las muertes rodeaban la bomba|Snow retiró la manivela a tiempo|La «asignación» al agua contaminada no dependía de las características de las familias, lo que reducía la confusión.",
      "¿Qué parte del trabajo de Snow corresponde a la búsqueda de explicaciones alternativas?|El análisis de las excepciones|El recuento total de muertes|La teoría de los miasmas|Examinar casos que no encajaban, como la cervecería o las víctimas lejanas, puso a prueba su hipótesis.",
      "Antes de Snow, ¿a qué atribuía la teoría dominante el cólera?|Al aire contaminado|Al agua del Támesis|A la falta de higiene|La teoría de los miasmas atribuía la enfermedad al aire contaminado; Snow defendía la transmisión por el agua."
    ],
    inc: [
      "Sobre el caso de John Snow|Su argumento se basaba en retirar la manivela|Analizó las excepciones al patrón|Comparó la mortalidad de dos compañías de agua|Su argumento descansa en el patrón de los datos y en la comparación entre compañías, no en la retirada de la manivela."
    ],
    seq: [],
    cls: [
      "Elemento del argumento de Snow|Asociación: muertes en torno a la bomba; mapa de defunciones|Explicaciones alternativas: trabajadores de la cervecería; víctimas lejanas que preferían esa agua|Experimento natural: dos compañías de agua en las mismas calles"
    ] }
] }
);
