// SAIMAP Psicología · Fundamentos de Estadística · Unidades 5–8
window.COURSE.units.push(
{ n: 5, t: "Describir variables categóricas", cap: 2, pir: "baja", mods: [
  { t: "La distribución de frecuencias",
    tip: "El primer paso de la estadística descriptiva es contar cuántas veces aparece cada categoría. La distribución de frecuencias asocia a cada categoría su frecuencia absoluta (nᵢ), su proporción (pᵢ, que es nᵢ / n) y su porcentaje. Las categorías deben ser exhaustivas y mutuamente excluyentes, y en una variable nominal el orden de las filas es arbitrario.",
    v: [
      "Matriz de datos=Tabla con un participante por fila y una variable por columna",
      "Distribución de frecuencias=Tabla que asocia a cada categoría el número de veces que aparece",
      "Frecuencia absoluta=Número de casos que pertenecen a una categoría",
      "Frecuencia relativa=Parte del total que representa una categoría, nᵢ / n",
      "Porcentaje=Proporción de una categoría multiplicada por 100",
      "Exhaustividad=Propiedad de un sistema de categorías en el que todo caso cabe en alguna",
      "Exclusión mutua=Propiedad por la que ningún caso puede pertenecer a dos categorías",
      "Suma de las proporciones=Total de la columna pᵢ, que siempre vale 1"
    ],
    g: [
      "La proporción de una categoría se obtiene dividiendo nᵢ entre ___.|n|100|nₐ",
      "Si 12 de 48 personas eligen una categoría, su porcentaje es ___.|25 %|0,25 %|12 %",
      "En una variable nominal, el orden de las filas de la tabla es ___.|arbitrario|ascendente|obligatorio",
      "Si los porcentajes redondeados suman 100,1, conviene ___ en una nota.|indicarlo|corregirlo|ocultarlo",
      "En los textos científicos se suele dar el porcentaje junto con la frecuencia ___.|absoluta|acumulada|esperada"
    ],
    tf: [
      "Que los porcentajes redondeados de una tabla sumen 99,9 indica un error de cálculo.|F|Es efecto del redondeo; no es un error, aunque conviene indicarlo en una nota.",
      "La suma de las frecuencias absolutas de todas las categorías es igual al tamaño de la muestra.|V",
      "La proporción y el porcentaje expresan la misma información en distinta escala.|V",
      "En una variable nominal, las filas deben seguir el orden de los códigos numéricos asignados.|F|El orden es arbitrario; suele ordenarse de mayor a menor frecuencia, con «Otros» al final."
    ],
    q: [
      "De 40 personas atendidas, 6 presentan un trastorno obsesivo-compulsivo. ¿Cuál es la frecuencia relativa de esa categoría?|0,15|15|0,06|pᵢ = nᵢ / n = 6 / 40 = 0,15. El valor 15 es el porcentaje, y 0,06 resulta de dividir entre 100 en lugar de entre n.",
      "En una muestra de 50 personas, una categoría tiene pᵢ = 0,36. ¿Cuántos casos tiene?|18|36|14|nᵢ = pᵢ · n = 0,36 · 50 = 18; 36 confunde el porcentaje con el número de casos.",
      "Un investigador clasifica a los pacientes en «ansiedad», «depresión», «trastorno emocional» y «otros». ¿Qué pauta incumple?|La exclusión mutua de las categorías|La exhaustividad de las categorías|El orden natural de las categorías|Un mismo paciente podría caber en «trastorno emocional» y en otra categoría: las categorías se solapan.",
      "Sin redondeo, ¿cuánto suma la columna de porcentajes de una distribución de frecuencias?|100|1|n|Σ%ᵢ = 100; la suma de las proporciones es 1 y la de las frecuencias absolutas, n."
    ],
    inc: [
      "Sobre la distribución de frecuencias de una variable categórica|Las proporciones de todas las categorías suman 100|Las frecuencias absolutas suman el tamaño de la muestra|Las categorías deben ser exhaustivas y excluyentes|Las proporciones suman 1; son los porcentajes los que suman 100."
    ],
    seq: [],
    cls: [] },
  { t: "Variables ordinales, frecuencias acumuladas y moda",
    tip: "Cuando las categorías tienen orden, pueden acumularse frecuencias: la frecuencia acumulada de una categoría suma sus casos y los de todas las inferiores. En una variable nominal acumular no tiene sentido. La moda es la categoría más frecuente, no su frecuencia, y es el único índice de tendencia central aplicable a variables nominales; en las ordinales también puede calcularse la mediana.",
    v: [
      "Frecuencia absoluta acumulada=Casos de una categoría y de todas las inferiores",
      "Porcentaje acumulado=Porcentaje de casos con una categoría o una inferior",
      "Moda=Categoría con mayor frecuencia en la distribución",
      "Distribución bimodal=Distribución con dos categorías de máxima frecuencia",
      "Distribución multimodal=Distribución con varias modas",
      "Mediana en variable ordinal=Categoría que ocupa la posición central de los casos ordenados",
      "Porcentaje válido=Porcentaje calculado excluyendo los datos perdidos",
      "Datos perdidos=Respuestas que faltan porque algunas personas no contestan"
    ],
    g: [
      "Acumular frecuencias solo tiene sentido si las categorías tienen ___.|orden|etiqueta|código",
      "La moda de una variable nominal es una ___, no un número de casos.|categoría|frecuencia|proporción",
      "Si todas las categorías tienen la misma frecuencia, la distribución no tiene ___.|moda|mediana|total",
      "En SPSS, el porcentaje acumulado se calcula sobre los casos ___.|válidos|totales|perdidos",
      "Con frecuencias 6, 20, 14 y 10 en cuatro categorías ordenadas, la frecuencia acumulada de la tercera es ___.|40|14|34"
    ],
    tf: [
      "Decir «la moda es 18» cuando la categoría más frecuente tiene 18 casos es correcto.|F|La moda es la categoría (por ejemplo, «Ansiedad»), no su frecuencia.",
      "La moda es el único índice de tendencia central aplicable a variables nominales.|V",
      "En una variable nominal, la frecuencia acumulada dependería del orden arbitrario en que se escriban las filas.|V",
      "En una tabla con datos perdidos, el porcentaje y el porcentaje válido coinciden.|F|El porcentaje usa el total, incluidos los perdidos; el válido los excluye, así que difieren."
    ],
    q: [
      "50 estudiantes valoran una asignatura: Fácil 6, Normal 20, Difícil 14, Muy difícil 10. ¿Qué porcentaje la considera difícil o muy difícil?|48 %|28 %|80 %|(14 + 10) / 50 = 0,48, es decir, 48 %. El 80 % es el porcentaje acumulado hasta «Difícil», que incluye las categorías inferiores.",
      "Con esos mismos datos (Fácil 6, Normal 20, Difícil 14, Muy difícil 10), ¿cuál es la mediana?|Normal|Difícil|20|Con n = 50, los casos centrales son el 25.º y el 26.º; nₐ pasa de 6 a 26 en «Normal», así que ambos están en esa categoría.",
      "¿En qué variable tiene sentido calcular frecuencias acumuladas?|Nivel de estudios|Motivo de consulta|Lugar de nacimiento|El nivel de estudios es ordinal; el motivo de consulta y el lugar de nacimiento son nominales, sin orden.",
      "Una tabla tiene Ansiedad 18, Depresión 18, Estrés 9 y Otros 5. ¿Qué se puede decir de la moda?|Hay dos: Ansiedad y Depresión|No existe porque hay un empate|Es 18, la frecuencia máxima|Puede haber dos modas (distribución bimodal); y la moda es la categoría, no su frecuencia."
    ],
    inc: [
      "Sobre la moda|Es la frecuencia de la categoría más repetida|Puede haber más de una en la misma distribución|Es el único índice válido para variables nominales|La moda es la categoría más frecuente, no su frecuencia."
    ],
    seq: [],
    cls: [
      "¿Tiene sentido acumular frecuencias?|Sí, variable ordinal: Nivel de satisfacción; Nivel de estudios; Gravedad del síntoma|No, variable nominal: Motivo de consulta; Estado civil; Lugar de nacimiento"
    ] },
  { t: "Diagramas de barras y de sectores",
    tip: "El diagrama de barras representa cada categoría con una barra separada de altura proporcional a su frecuencia; el de sectores divide un círculo en porciones de ángulo pᵢ × 360°. Juzgamos con más precisión longitudes alineadas que ángulos o áreas, por eso las barras son la opción por defecto y los sectores se reservan para pocas categorías y mensajes de «parte de un todo». Para comparar grupos se usan porcentajes dentro de cada grupo.",
    v: [
      "Diagrama de barras=Gráfico con una barra separada por categoría, de altura proporcional a la frecuencia",
      "Diagrama de sectores=Círculo dividido en porciones de ángulo proporcional a la frecuencia relativa",
      "Ángulo del sector=Proporción de la categoría multiplicada por 360°",
      "Barras separadas=Rasgo que indica que entre categorías no hay continuidad",
      "Barras agrupadas o apiladas=Gráficos para comparar la distribución de una variable en varios grupos",
      "Porcentajes dentro del grupo=Base adecuada para comparar grupos de distinto tamaño",
      "Longitud sobre base común=Elemento visual que juzgamos con más precisión que ángulos o áreas",
      "Parte de un todo=Mensaje que mejor comunica el diagrama de sectores"
    ],
    g: [
      "Una categoría con pᵢ = 0,25 ocupa en el diagrama de sectores un ángulo de ___.|90°|25°|45°",
      "En el diagrama de barras de una variable categórica, las barras van ___.|separadas|contiguas|solapadas",
      "En una variable ordinal, las barras deben respetar el ___ natural de las categorías.|orden|color|tamaño",
      "Para comparar el motivo de consulta de hombres y mujeres conviene usar ___ dentro de cada grupo.|porcentajes|frecuencias absolutas|frecuencias acumuladas",
      "Juzgamos con más precisión longitudes alineadas que ___ o áreas.|ángulos|colores|texturas"
    ],
    tf: [
      "El diagrama de sectores permite comparar dos categorías de frecuencia parecida con más precisión que el de barras.|F|Al revés: comparamos mejor longitudes alineadas sobre una base común que ángulos o áreas.",
      "El histograma es un gráfico adecuado para una variable categórica.|F|El histograma es propio de variables cuantitativas; para las categóricas se usan barras o sectores.",
      "Una categoría con el 36 % de los casos ocupa en un diagrama de sectores un ángulo de 129,6°.|V",
      "Para comparar grupos de distinto tamaño se recomiendan porcentajes dentro de cada grupo, no frecuencias absolutas.|V"
    ],
    q: [
      "En una muestra de 30 pacientes, 9 abandonan la terapia. ¿Qué ángulo ocupa esa categoría en un diagrama de sectores?|108°|30°|90°|pᵢ = 9 / 30 = 0,30 y 0,30 × 360° = 108°; 30° toma el porcentaje como si fueran grados.",
      "Hay que representar la frecuencia de ocho motivos de consulta con porcentajes parecidos. ¿Qué gráfico es más adecuado?|Un diagrama de barras|Un diagrama de sectores|Un histograma|Con muchas categorías y diferencias pequeñas, las barras permiten comparar mejor; el histograma es para variables cuantitativas.",
      "¿Por qué se recomienda el diagrama de barras como opción por defecto?|Porque comparamos mejor longitudes que ángulos|Porque muestra mejor la idea de parte de un todo|Porque sus barras deben ir siempre contiguas|El motivo es perceptivo: juzgamos con más precisión longitudes alineadas sobre una base común.",
      "Un estudio compara el motivo de consulta de 200 mujeres y 50 hombres. ¿Qué conviene representar?|Porcentajes dentro de cada sexo|Frecuencias absolutas de cada sexo|Porcentajes sobre el total de 250|Los grupos tienen distinto tamaño: con frecuencias absolutas, cualquier categoría parecería mayor en las mujeres."
    ],
    inc: [
      "Sobre los gráficos para variables categóricas|Las barras de una variable nominal deben ir juntas|El ángulo de cada sector es pᵢ × 360°|Las categorías nominales pueden ordenarse por frecuencia|Las barras van separadas porque entre categorías no hay continuidad; juntas van las del histograma."
    ],
    seq: [],
    cls: [] },
  { t: "Buenas prácticas, un ejemplo histórico y software",
    tip: "Un gráfico mal hecho puede transmitir una conclusión falsa con datos correctos: el eje de un diagrama de barras debe empezar en cero, sin efectos tridimensionales, con los ejes rotulados y el tamaño de la muestra a la vista. Florence Nightingale usó en 1858 un diagrama de área polar para mostrar que la mayoría de los soldados morían de enfermedades prevenibles. En SPSS, las tablas de frecuencias se piden en Analizar, Estadísticos descriptivos, Frecuencias.",
    v: [
      "Eje que empieza en cero=Pauta que evita que diferencias pequeñas parezcan grandes en las barras",
      "Efectos tridimensionales=Recursos de perspectiva que deforman alturas y áreas",
      "Florence Nightingale=Enfermera que en 1858 representó las causas de muerte del ejército británico en Crimea",
      "Diagrama de área polar=Gráfico de cuñas, una por mes, con área proporcional al número de muertes",
      "Categoría «Otros»=Agrupación de las categorías minoritarias en un diagrama de sectores",
      "Generador de gráficos=Opción de SPSS para elaborar gráficos más complejos",
      "Etiquetas de valor=Nombres que deben tener los códigos numéricos antes de interpretar la salida",
      "Título informativo=Rótulo que dice qué muestra el gráfico, no solo el nombre de la variable"
    ],
    g: [
      "En un diagrama de barras, el eje vertical debe empezar en ___.|cero|la media|el mínimo",
      "Nightingale mostró que la mayoría de los soldados morían de enfermedades infecciosas ___.|prevenibles|incurables|hereditarias",
      "En el diagrama de Nightingale, cada cuña corresponde a un ___.|mes|regimiento|hospital",
      "En SPSS, las tablas de frecuencias se obtienen en Analizar, Estadísticos descriptivos, ___.|Frecuencias|Explorar|Descriptivos",
      "Con n = 4, cada persona supone ___ puntos porcentuales.|25|4|40"
    ],
    tf: [
      "Cortar el eje vertical de un diagrama de barras exagera visualmente las diferencias pequeñas.|V",
      "Un porcentaje transmite la misma información sea cual sea el tamaño de la muestra.|F|«El 50 % mejoró» puede ser 2 de 4 o 200 de 400; por eso se informa también de n o de la frecuencia absoluta.",
      "Los efectos tridimensionales mejoran la precisión con la que se leen las alturas de las barras.|F|La perspectiva y el 3D deforman las alturas y las áreas; se desaconsejan.",
      "El gráfico de Nightingale contribuyó a impulsar reformas sanitarias en el ejército británico.|V"
    ],
    q: [
      "Dos barras valen 48 y 52, pero el eje vertical empieza en 46. ¿Cuántas veces más alta parece la segunda barra?|3 veces|1,08 veces|2 veces|Se ven 52 − 46 = 6 y 48 − 46 = 2 unidades: parece el triple, aunque en realidad es solo un 8 % mayor.",
      "En un estudio con 5 participantes, ¿cuántos puntos cambia un porcentaje si una sola persona pasa de una categoría a otra?|20|5|1|Con n = 5 cada persona vale 100 / 5 = 20 puntos: con muestras pequeñas, un solo caso cambia mucho el porcentaje.",
      "¿Qué representaba el área de cada cuña en el diagrama de Nightingale?|El número de muertes del mes|El porcentaje de heridos del año|La duración de cada campaña|Cada cuña corresponde a un mes y su área es proporcional al número de muertes.",
      "Antes de interpretar una tabla de frecuencias en SPSS, ¿qué conviene comprobar?|Que los códigos tengan sus etiquetas|Que la variable esté definida como escala|Que el eje vertical empiece en cero|Hay que verificar que la variable sea nominal u ordinal y que los códigos numéricos tengan sus etiquetas."
    ],
    inc: [
      "Sobre las buenas prácticas en gráficos|El color debe bastar para distinguir la información|Los ejes deben indicar la variable y la unidad|El tamaño de la muestra debe estar a la vista|No hay que depender solo del color: debe ser distinguible también por personas con daltonismo."
    ],
    seq: [],
    cls: [
      "Pautas al elaborar un gráfico|Recomendable: Eje vertical desde cero; Ejes rotulados; Tamaño de la muestra a la vista; Título informativo|Desaconsejable: Efectos tridimensionales; Eje vertical cortado; Muchas categorías en sectores; Depender solo del color"
    ] }
] },

{ n: 6, t: "Tablas de frecuencias con intervalos y cuantiles", cap: 2, pir: "media", mods: [
  { t: "Agrupar en intervalos",
    tip: "Cuando una variable cuantitativa toma muchos valores distintos, se agrupa en intervalos. Con datos enteros, los límites exactos están medio punto por debajo y por encima de los aparentes; la amplitud es su diferencia y el punto medio representa a todos los casos del intervalo. Agrupar tiene un coste: se pierde información, y los cálculos con datos agrupados son aproximaciones.",
    v: [
      "Límites aparentes=Valores que se escriben en la tabla para delimitar un intervalo",
      "Límites exactos=Límites que cierran el hueco entre intervalos consecutivos",
      "Amplitud del intervalo=Diferencia entre los límites exactos superior e inferior",
      "Marca de clase=Centro del intervalo, que representa a todos sus casos en los cálculos",
      "Notación [10, 15)=Intervalo que incluye el 10 y excluye el 15",
      "Número recomendado de intervalos=Entre 5 y 15, según el tamaño de la muestra",
      "Pérdida de información=Coste de agrupar: se desconoce el valor exacto de cada caso",
      "Supuesto de reparto uniforme=Suposición de que los casos se distribuyen por igual dentro del intervalo"
    ],
    g: [
      "Con datos enteros, el intervalo 15–19 tiene como límites exactos 14,5 y ___.|19,5|19|20",
      "La amplitud del intervalo [20, 30) es ___.|10|9|11",
      "Con datos enteros, el punto medio del intervalo 30–39 es ___.|34,5|35|34",
      "Usar demasiados intervalos vuelve la distribución ___.|irregular|simétrica|uniforme",
      "Los cálculos con datos agrupados dan ___.|aproximaciones|valores exactos|cotas máximas"
    ],
    tf: [
      "Con datos enteros, el intervalo 10–14 tiene una amplitud de 4.|F|La amplitud se calcula con los límites exactos: 14,5 − 9,5 = 5.",
      "En la notación [10, 15), los límites escritos ya son los exactos.|V",
      "Usar muy pocos intervalos puede ocultar la forma de la distribución.|V",
      "Agrupar en intervalos conserva toda la información de los datos originales.|F|Se pierde información: dentro de un intervalo ya no se sabe el valor exacto de cada caso."
    ],
    q: [
      "Con datos enteros, ¿cuál es la amplitud del intervalo 20–24?|5|4|4,5|Límites exactos 19,5 y 24,5: 24,5 − 19,5 = 5. Restar los límites aparentes (24 − 20) es el error típico.",
      "¿Cuál es la marca de clase del intervalo [15, 20)?|17,5|17|15|xᵢ = (15 + 20) / 2 = 17,5; con la notación [Lᵢ, Lₛ) los límites escritos ya son los exactos.",
      "Una variable registra el número de hijos, de 0 a 4. ¿Cómo conviene construir su tabla de frecuencias?|Una fila por valor|Intervalos de amplitud 2|Intervalos de amplitud 5|Con pocos valores distintos, la tabla se construye como la de una variable ordinal: una fila por valor.",
      "¿Qué supuesto subyace a los cálculos con datos agrupados?|Que los casos se reparten uniformemente en él|Que los casos coinciden con el límite inferior|Que la variable sigue una distribución normal|Se supone un reparto uniforme dentro de cada intervalo; por eso los resultados son aproximaciones."
    ],
    inc: [
      "Sobre el intervalo 10–14 con datos enteros|Su amplitud es 14 − 10 = 4|Sus límites exactos son 9,5 y 14,5|Su punto medio es 12|La amplitud se calcula con los límites exactos: 14,5 − 9,5 = 5."
    ],
    seq: [],
    cls: [] },
  { t: "Histograma, polígono de frecuencias y ojiva",
    tip: "El histograma es el gráfico de una variable cuantitativa agrupada: barras juntas sobre una escala numérica, en las que el área representa la frecuencia. El polígono de frecuencias une puntos situados sobre los puntos medios de los intervalos y sirve para superponer grupos. La ojiva representa las frecuencias acumuladas sobre los límites superiores exactos y permite leer percentiles de forma aproximada.",
    v: [
      "Histograma=Gráfico de barras contiguas cuya área es proporcional a la frecuencia de cada intervalo",
      "Densidad=Frecuencia dividida por la amplitud del intervalo",
      "Polígono de frecuencias=Línea que une los puntos situados sobre los puntos medios de los intervalos",
      "Ojiva=Gráfico de las frecuencias acumuladas sobre los límites superiores exactos",
      "Intervalo vacío a cada lado=Recurso para cerrar el polígono sobre el eje horizontal",
      "Barras contiguas=Rasgo que refleja que los intervalos se suceden sin huecos",
      "Lectura de percentiles=Uso de la ojiva trazando una horizontal hasta la curva y bajando al eje",
      "Escala numérica horizontal=Eje en el que cada barra ocupa exactamente su intervalo"
    ],
    g: [
      "En el histograma, la frecuencia de cada intervalo la representa el ___ de la barra.|área|color|grosor",
      "Si los intervalos tienen distinta amplitud, la altura de cada barra debe ser la ___.|densidad|frecuencia|proporción",
      "En la ojiva, cada punto se sitúa sobre el límite ___ exacto del intervalo.|superior|inferior|central",
      "El polígono de frecuencias resulta útil para ___ las distribuciones de varios grupos.|superponer|acumular|ordenar",
      "Un intervalo de amplitud 10 con 30 casos tiene una densidad de ___.|3|30|300"
    ],
    tf: [
      "La ojiva siempre es creciente, empieza en 0 % y termina en 100 %.|V",
      "En la ojiva, los puntos se sitúan sobre los puntos medios de los intervalos.|F|Se sitúan sobre los límites superiores exactos; sobre los puntos medios se sitúa el polígono de frecuencias.",
      "Si todos los intervalos tienen la misma amplitud, en el histograma basta con la altura de las barras.|V",
      "En el histograma las barras van separadas, igual que en el diagrama de barras.|F|Van juntas, porque los intervalos son contiguos y la variable es continua."
    ],
    q: [
      "En una tabla de ansiedad (n = 120), los intervalos [20, 25) y [25, 30) tienen 35 y 39 casos. ¿Qué porcentaje puntúa entre 20 y 30?|61,7 %|74 %|32,5 %|(35 + 39) / 120 = 0,617, es decir, 61,7 %; 74 es la frecuencia absoluta y 32,5 % corresponde a un solo intervalo.",
      "Con datos enteros, ¿sobre qué valor del eje se sitúa en la ojiva el punto del intervalo 10–14?|14,5|12|14|La ojiva usa el límite superior exacto (14,5); 12 es el punto medio, propio del polígono de frecuencias.",
      "En una ojiva, la línea del 50 % corta la curva en 25. ¿Qué indica?|Que la mediana es 25|Que la moda es 25|Que el 25 % está por debajo|Trazar una horizontal desde el 50 % hasta la curva y bajar al eje da la mediana (P₅₀).",
      "Un investigador quiere comparar en un mismo gráfico la distribución de ansiedad de tres grupos. ¿Qué gráfico es más útil?|Varios polígonos superpuestos|Tres diagramas de sectores|Un diagrama de barras separadas|El polígono de frecuencias permite superponer varias distribuciones en un mismo gráfico."
    ],
    inc: [
      "Sobre los gráficos de variables cuantitativas agrupadas|La ojiva puede decrecer si un intervalo está vacío|El histograma representa la frecuencia con el área|El polígono se cierra con un intervalo vacío a cada lado|La ojiva acumula frecuencias, así que nunca decrece; un intervalo vacío solo la deja plana."
    ],
    seq: [],
    cls: [
      "Gráfico según el tipo de variable|Variable categórica: Diagrama de barras; Diagrama de sectores|Variable cuantitativa agrupada: Histograma; Polígono de frecuencias; Ojiva"
    ] },
  { t: "Percentiles, cuartiles y deciles",
    tip: "Los cuantiles dividen la distribución ordenada en partes con el mismo número de casos. El percentil k es la puntuación que deja por debajo el k % de los casos; cuartiles y deciles son percentiles concretos, y la mediana es P₅₀. Con datos sin agrupar, el método de SPSS calcula la posición k · (n + 1) / 100 e interpola si tiene decimales; con datos agrupados se interpola dentro del intervalo crítico.",
    v: [
      "Cuantiles=Valores que dividen la distribución ordenada en partes con igual número de casos",
      "Percentil k=Puntuación que deja por debajo el k % de los casos",
      "Primer cuartil (Q₁)=Valor que deja por debajo la cuarta parte de los casos",
      "Tercer cuartil (Q₃)=Valor que deja por debajo el 75 % de los casos",
      "Deciles=Valores que dividen la distribución en diez partes con igual número de casos",
      "Mediana=Cuantil que equivale a Q₂, D₅ y P₅₀",
      "Intervalo crítico=Primer intervalo cuya frecuencia acumulada alcanza k · n / 100",
      "Posición del percentil=Lugar del dato buscado, k · (n + 1) / 100 en el método de SPSS"
    ],
    g: [
      "En total hay ___ percentiles.|99|100|101",
      "El tercer cuartil equivale al percentil ___.|75|25|33",
      "Con n = 19 datos ordenados, P₂₅ ocupa la posición ___ según el método de SPSS.|5|4,75|4",
      "El decil 3 equivale al percentil ___.|30|3|33",
      "Un percentil es una ___, no un porcentaje.|puntuación|frecuencia|proporción"
    ],
    tf: [
      "Si P₉₀ = 32,8, el 90 % de las personas tiene 32,8 puntos o menos.|V",
      "Con los mismos datos, SPSS, R y Excel dan por defecto el mismo valor para un percentil.|F|Hay varios métodos: SPSS usa por defecto el promedio ponderado y R o Excel otro, con resultados algo distintos.",
      "Las diferencias entre métodos de cálculo de percentiles aumentan con el tamaño de la muestra.|F|Son pequeñas y se reducen al aumentar n.",
      "La mediana coincide con el segundo cuartil y con el quinto decil.|V"
    ],
    q: [
      "Datos ordenados: 10, 12, 15, 17, 20, 22, 25. ¿Cuánto vale P₄₀ con el método de SPSS?|15,4|15,2|17|Posición 40 · 8 / 100 = 3,2: entre 15 y 17, P₄₀ = 15 + 0,2 · (17 − 15) = 15,4. 15,2 olvida multiplicar por la diferencia.",
      "Con 15 puntuaciones de estrés ordenadas (12, 15, 18, 21, 23, 23, 25, 27, 28, 30, 31, 34, 36, 41, 47), ¿cuánto vale P₆₀ con el método de SPSS?|29,2|28,6|30|Posición 60 · 16 / 100 = 9,6: entre 28 y 30, P₆₀ = 28 + 0,6 · (30 − 28) = 29,2.",
      "Una tabla tiene intervalos de amplitud 5 desde 10 y n = 120, con nₐ de 6, 25, 60, 99, 115, 119 y 120. ¿Cuál es el intervalo crítico de P₈₀?|[25, 30)|[30, 35)|[20, 25)|k · n / 100 = 80 · 120 / 100 = 96; la primera nₐ que alcanza 96 es 99, la del cuarto intervalo, [25, 30).",
      "En un grupo, P₃₀ = 22,6. ¿Qué significa?|El 30 % puntúa 22,6 o menos|El 22,6 % puntúa 30 o menos|El 30 % acierta 22,6 ítems|El percentil es una puntuación: 22,6 deja por debajo el 30 % de los casos."
    ],
    inc: [
      "Sobre los cuantiles|Q₁ deja por debajo el 75 % de los casos|D₁ equivale al percentil 10|La mediana equivale a P₅₀|Q₁ (P₂₅) deja por debajo el 25 % de los casos; el 75 % lo deja Q₃."
    ],
    seq: [
      "Calcular un percentil con datos sin agrupar (método de SPSS)|Ordenar los datos de menor a mayor>Calcular la posición k · (n + 1) / 100>Localizar los dos datos vecinos de esa posición>Interpolar con la parte decimal de la posición"
    ],
    cls: [] },
  { t: "Rango percentil y diagrama de tallo y hojas",
    tip: "El rango percentil es la operación inversa del percentil: dada una puntuación, indica qué porcentaje de casos queda por debajo. Percentiles y rangos percentiles son la base de los baremos, pero forman una escala ordinal: en el centro de la distribución pocos puntos separan percentiles alejados y en las colas ocurre lo contrario. El diagrama de tallo y hojas muestra la forma de la distribución sin perder los valores originales.",
    v: [
      "Rango percentil=Porcentaje de casos que queda por debajo de una puntuación dada",
      "Baremo=Tabla para interpretar una puntuación comparándola con un grupo normativo",
      "Grupo normativo=Grupo de referencia con el que se compara la puntuación de una persona",
      "Carácter ordinal de los percentiles=Distancias iguales en percentiles no equivalen a distancias iguales en puntos",
      "Diagrama de tallo y hojas=Representación que agrupa los datos conservando sus valores originales",
      "Tallo=Dígitos iniciales de cada dato, por ejemplo las decenas",
      "Hoja=Último dígito de cada dato, por ejemplo las unidades",
      "Explorar (SPSS)=Cuadro desde el que se genera el diagrama de tallo y hojas"
    ],
    g: [
      "El rango percentil es la operación ___ del percentil.|inversa|idéntica|complementaria",
      "En el diagrama de tallo y hojas, el último dígito de cada dato es la ___.|hoja|raíz|base",
      "En una distribución normal, pasar del percentil 50 al 60 exige ___ puntos que pasar del 90 al 99.|menos|más|tantos",
      "Con cientos de datos, el diagrama de tallo y hojas resulta poco ___.|manejable|preciso|ordenado",
      "Si el tallo 3 tiene las hojas 0, 4 y 6 (decenas y unidades), el mayor de esos datos es ___.|36|63|3,6"
    ],
    tf: [
      "Estar en el percentil 80 de un test significa haber acertado el 80 % de las preguntas.|F|El percentil indica la posición relativa respecto a un grupo de referencia, no la proporción de aciertos.",
      "Promediar percentiles como si fueran puntuaciones es correcto porque forman una escala de intervalo.|F|Los percentiles son una escala ordinal: distancias iguales en percentiles no son distancias iguales en puntos.",
      "El diagrama de tallo y hojas permite localizar la mediana sin perder información.|V",
      "Con un rango percentil de 63, una persona supera aproximadamente al 63 % del grupo.|V"
    ],
    q: [
      "En una tabla de ansiedad (n = 120), hay 60 casos acumulados antes del intervalo [25, 30). ¿Cuál es el rango percentil de x = 25?|50|25|60|RP = (60 / 120) · 100 = 50: x está en el límite inferior, así que no suma casos del intervalo. 60 es la frecuencia acumulada.",
      "En esa misma tabla, el intervalo [25, 30) tiene 39 casos y la nₐ anterior es 60 (n = 120). ¿Cuál es el RP de x = 30?|82,5|99|39|Al final del intervalo se han acumulado 60 + 39 = 99 casos: (99 / 120) · 100 = 82,5. 99 es la frecuencia, no el porcentaje.",
      "Una persona acierta el 50 % de los ítems de un test difícil y su rango percentil es 80. ¿Cómo se interpreta?|Supera al 80 % de su grupo|Ha acertado el 80 % de los ítems|Está 30 puntos sobre la media|El rango percentil indica posición relativa: puede acertar la mitad y superar al 80 % si la mayoría acierta menos.",
      "En una distribución normal, ¿qué exige recorrer más puntos?|Pasar del percentil 90 al 99|Pasar del percentil 50 al 60|Ambos exigen lo mismo|En el centro hay muchos casos por punto y los percentiles están juntos; en las colas, más separados."
    ],
    inc: [
      "Sobre el diagrama de tallo y hojas|Es especialmente útil con muestras muy grandes|Conserva los valores originales de los datos|Girado 90°, muestra la forma de la distribución|Es útil con muestras pequeñas o medianas; con cientos de datos resulta poco manejable."
    ],
    seq: [],
    cls: [] }
] },

{ n: 7, t: "Tendencia central", cap: 2, pir: "media", mods: [
  { t: "La media aritmética",
    tip: "La media aritmética es la suma de los valores dividida entre el número de casos (x̄ en la muestra, μ en la población) y exige una variable cuantitativa. Con datos agrupados se aproxima representando cada caso por el punto medio de su intervalo. Al combinar grupos de distinto tamaño hay que usar la media ponderada, en la que cada media pesa según su número de casos.",
    v: [
      "Índice de tendencia central=Valor que resume dónde se sitúa el centro de una distribución",
      "Media aritmética=Suma de los valores dividida entre el número de casos",
      "Símbolo μ=Media de la población",
      "Símbolo x̄=Media de la muestra",
      "Media con datos agrupados=Aproximación que representa cada caso por el punto medio de su intervalo",
      "Media ponderada=Media en la que cada grupo pesa según su número de casos",
      "Promedio simple de medias=Cálculo que da a un grupo pequeño el mismo peso que a uno grande",
      "Requisito de la media=Variable cuantitativa, en escala de intervalo o de razón"
    ],
    g: [
      "La media de 3, 5, 6 y 10 es ___.|6|5,5|8",
      "Dos grupos de 20 y 30 personas tienen medias de 10 y 15; la media conjunta es ___.|13|12,5|14",
      "La media poblacional se representa con la letra ___.|μ|σ|ρ",
      "Con datos agrupados, cada caso se representa por el ___ de su intervalo.|punto medio|límite inferior|límite superior",
      "La media ponderada y el promedio simple de medias coinciden si todos los grupos tienen el mismo ___.|tamaño|rango|origen"
    ],
    tf: [
      "Si un grupo de 10 personas tiene media 12 y otro de 40 tiene media 22, la media conjunta es 17.|F|Cada media pesa según su número de casos: (10 · 12 + 40 · 22) / 50 = 20; 17 es el promedio simple.",
      "La media calculada con datos agrupados coincide exactamente con la de los datos originales.|F|Es una aproximación: en el ejemplo de ansiedad da 24,83 frente a 24,28 con los datos originales.",
      "Para calcular una media, la variable debe medirse en escala de intervalo o de razón.|V",
      "Si 8 personas suman en total 40 despertares, su media es de 5 despertares.|V"
    ],
    q: [
      "Un centro tiene dos grupos de terapia: 10 pacientes con media 12 en bienestar y 30 con media 20. ¿Cuál es la media global?|18|16|20|(10 · 12 + 30 · 20) / 40 = 720 / 40 = 18; 16 es el promedio simple, que ignora el tamaño de los grupos.",
      "Cinco pacientes faltan a 1, 2, 2, 4 y 6 sesiones. ¿Cuál es la media de faltas?|3|2|3,75|x̄ = 15 / 5 = 3; 3,75 resulta de dividir entre n − 1 = 4, un error típico.",
      "Una tabla agrupada tiene 4 casos en [0, 10) y 6 casos en [10, 20). ¿Cuál es la media aproximada?|11|10|7,5|x̄ ≈ (4 · 5 + 6 · 15) / 10 = 110 / 10 = 11: cada caso se representa por el punto medio de su intervalo.",
      "¿Qué problema tiene usar el promedio simple de las medias de grupos de distinto tamaño?|El grupo pequeño pesa igual que el grande|El grupo grande pesa más que el pequeño|Se obtiene siempre la mediana global|El promedio simple da a cada media el mismo peso, sin tener en cuenta su número de casos."
    ],
    inc: [
      "Sobre la media aritmética|Puede calcularse en variables nominales codificadas con números|Su versión poblacional se representa con μ|Con datos agrupados se obtiene de forma aproximada|Exige una variable cuantitativa (intervalo o razón); los códigos de una variable nominal son solo etiquetas."
    ],
    seq: [],
    cls: [] },
  { t: "Propiedades de la media",
    tip: "La suma de las desviaciones respecto a la media es cero: la media es el punto de equilibrio de los datos. La suma de las desviaciones al cuadrado respecto a ella es mínima, base de la varianza y de los mínimos cuadrados. Si a cada dato se le suma una constante, la media aumenta en ella; si se multiplica, la media queda multiplicada. Como usa todos los datos, es sensible a los atípicos; la media recortada reduce esa sensibilidad.",
    v: [
      "Desviación respecto a la media=Diferencia entre un dato y la media, xᵢ − x̄",
      "Punto de equilibrio=Interpretación de la media, pues las desviaciones respecto a ella suman cero",
      "Propiedad de mínimos cuadrados=Ningún valor da menor suma de desviaciones al cuadrado que la media",
      "Transformación lineal=Cambio de los datos a la forma a + b · X",
      "Media recortada=Media calculada tras eliminar un porcentaje de casos en cada extremo",
      "Sensibilidad a los atípicos=Inconveniente de la media por depender de la magnitud de todos los datos",
      "Eficiencia de la media=Ventaja que se deriva de que usa todos los datos",
      "Media recortada al 5 %=Versión que SPSS ofrece en el cuadro Explorar"
    ],
    g: [
      "La suma de las desviaciones respecto a la media siempre vale ___.|cero|uno|n",
      "Si x̄ = 4 y se aplica Y = 2 + 3 · X, la nueva media es ___.|14|12|18",
      "La propiedad de mínimos cuadrados de la media es la base de la ___.|varianza|mediana|moda",
      "En los datos 2, 4, 6 y 8, la desviación del 8 respecto a la media es ___.|3|4|−3",
      "Para reducir la sensibilidad a los atípicos se usa la media ___.|recortada|ponderada|agrupada"
    ],
    tf: [
      "La suma de las desviaciones al cuadrado es menor respecto a la mediana que respecto a la media.|F|Es mínima respecto a la media: con los despertares, 32 respecto a la media frente a 34 respecto a la mediana.",
      "Si a cada dato se le suman 10 puntos, la media aumenta en 10 puntos.|V",
      "Multiplicar todos los datos por 3 deja la media sin cambios.|F|La media queda multiplicada por 3: si Y = b · X, entonces ȳ = b · x̄.",
      "Un solo valor extremo puede desplazar la media por encima de casi todos los datos.|V"
    ],
    q: [
      "Las desviaciones respecto a la media de cuatro datos son −2, −1, 0 y un cuarto valor. ¿Cuál es ese valor?|3|1|−3|Las desviaciones respecto a la media suman cero: −2 − 1 + 0 + 3 = 0.",
      "Las notas de un grupo tienen x̄ = 6. El profesor multiplica todas por 1,5 y después suma 1. ¿Cuál es la nueva media?|10|7,5|10,5|ȳ = 1 + 1,5 · 6 = 10; 10,5 resulta de sumar antes de multiplicar, (6 + 1) · 1,5.",
      "Datos: 3, 4, 5, 6 y 32. Si se elimina un caso por cada extremo, ¿cuánto vale la media recortada?|5|10|4,5|Se eliminan el 3 y el 32 y se promedian 4, 5 y 6: 15 / 3 = 5. La media sin recortar es 50 / 5 = 10.",
      "¿Por qué la media es sensible a los valores atípicos?|Porque usa la magnitud de todos los datos|Porque solo depende de los datos centrales|Porque se basa en el valor más frecuente|Al usar todos los datos, un valor extremo arrastra la suma y, con ella, la media."
    ],
    inc: [
      "Sobre las propiedades de la media|Sumar 5 a todos los datos multiplica la media por 5|Las desviaciones respecto a ella suman cero|Minimiza la suma de desviaciones al cuadrado|Sumar una constante aumenta la media en esa constante: ȳ = a + x̄."
    ],
    seq: [],
    cls: [] },
  { t: "Mediana y moda",
    tip: "La mediana es el valor central de los datos ordenados (P₅₀): con n impar es el dato de la posición (n + 1) / 2 y con n par, la media de los dos datos centrales. Solo exige que los datos se puedan ordenar y es resistente a los extremos. La moda es el valor más frecuente: sirve con cualquier escala, puede no ser única o no existir y es poco estable en muestras pequeñas.",
    v: [
      "Mediana=Valor que deja la mitad de los casos ordenados por debajo y la mitad por encima",
      "Resistencia=Propiedad de un índice poco afectado por los valores extremos",
      "Posición central con n impar=Lugar (n + 1) / 2 de los datos ordenados",
      "Moda=Valor más frecuente de la distribución",
      "Intervalo modal=Intervalo con mayor frecuencia en una tabla agrupada",
      "Distribución amodal=Distribución en la que ningún valor se repite",
      "Distribución bimodal=Distribución con dos valores o zonas de máxima frecuencia",
      "Inestabilidad de la moda=Cambio del valor más frecuente al modificar un solo dato en muestras pequeñas"
    ],
    g: [
      "La mediana de 3, 7, 8, 12 y 20 es ___.|8|10|11,5",
      "La mediana de 2, 5, 6, 9, 11 y 15 es ___.|7,5|8,5|6",
      "La mediana solo exige que los datos se puedan ___.|ordenar|sumar|promediar",
      "En una tabla agrupada, el intervalo de mayor frecuencia se llama intervalo ___.|modal|mediano|crítico",
      "Una distribución bimodal suele indicar que se han mezclado dos ___ distintos.|grupos|índices|métodos"
    ],
    tf: [
      "La mediana es la media de los dos valores extremos de la distribución.|F|Es el valor central de los datos ordenados; con n par, la media de los dos datos centrales.",
      "Cambiar el dato mayor por otro mucho más extremo no altera la mediana.|V",
      "La moda solo puede calcularse en variables nominales.|F|Es el único índice válido para nominales, pero puede usarse con cualquier escala.",
      "Ante una distribución bimodal, conviene analizar los grupos por separado.|V"
    ],
    q: [
      "Tiempos de reacción ordenados (ms): 300, 320, 340, 360 y 900. ¿Qué índice describe mejor el caso típico y cuánto vale?|La mediana, 340 ms|La media, 444 ms|La moda, 900 ms|La media (2 220 / 5 = 444 ms) está arrastrada por el 900; la mediana, 340 ms, es resistente. No hay moda.",
      "Número de sesiones de 7 pacientes: 4, 6, 6, 6, 8, 9, 10. ¿Cuáles son la mediana y la moda?|Md 6 y Mo 6|Md 8 y Mo 3|Md 7 y Mo 6|Con n = 7 la mediana ocupa la posición 4 (un 6); el 6 aparece tres veces, así que Mo = 6, no su frecuencia, 3. 7 es la media.",
      "¿En cuál de estas variables es la mediana el índice habitual de tendencia central?|Nivel de estudios|Grupo sanguíneo|Lugar de residencia|La mediana exige poder ordenar: es la habitual en variables ordinales; las otras dos son nominales.",
      "Datos: 2, 4, 4, 4, 5, 5, 7, 9. ¿Qué ocurre si el 9 se convierte en 41?|La mediana no cambia|La moda pasa a ser 41|La mediana sube a 5|La mediana depende de la posición de los datos, no de su magnitud; la media, en cambio, pasaría de 5 a 9."
    ],
    inc: [
      "Sobre la mediana y la moda|La moda de una distribución siempre es única|La mediana es el percentil 50|La mediana sirve para variables ordinales|La moda puede no ser única (bimodal, multimodal) o incluso no existir."
    ],
    seq: [],
    cls: [] },
  { t: "Elegir el índice: escala de medida y forma de la distribución",
    tip: "El primer criterio es la escala: en nominales solo la moda; en ordinales, la mediana; en intervalo o razón, la media si la distribución es simétrica y la mediana si es asimétrica o hay atípicos. La media se desplaza hacia la cola larga: en la asimetría positiva, Mo < Md < x̄, y en la negativa, x̄ < Md < Mo (regla orientativa). Conviene informar del centro junto con un índice de variabilidad coherente.",
    v: [
      "Asimetría positiva=Forma con la cola larga hacia la derecha",
      "Asimetría negativa=Forma con la cola larga hacia la izquierda",
      "Distribución simétrica unimodal=Distribución en la que media, mediana y moda coinciden",
      "Índice para escala nominal=La moda, único aplicable",
      "Índice habitual en escala ordinal=La mediana, que solo exige ordenar los datos",
      "Media con desviación típica=Pareja de centro y variabilidad para distribuciones simétricas",
      "Comparar media y mediana=Pista rápida sobre la asimetría de una distribución",
      "Ítem tipo Likert=Ítem de respuesta graduada cuya media es objeto de debate"
    ],
    g: [
      "En la asimetría positiva, la media es ___ que la mediana.|mayor|menor|igual",
      "Los tiempos de reacción suelen tener asimetría ___.|positiva|negativa|nula",
      "Un examen muy fácil suele producir asimetría ___.|negativa|positiva|nula",
      "En las variables nominales, el único índice de tendencia central aplicable es la ___.|moda|mediana|media",
      "La mediana se informa junto con la amplitud ___.|intercuartil|total|relativa"
    ],
    tf: [
      "En una distribución con asimetría negativa, lo habitual es que x̄ < Md < Mo.|V",
      "El orden Mo < Md < x̄ de la asimetría positiva es igual de fiable en distribuciones discretas o multimodales que en las continuas unimodales.|F|Es una regla orientativa para distribuciones unimodales y continuas; en discretas o multimodales puede no cumplirse.",
      "Calcular la media de un único ítem tipo Likert es una práctica aceptada sin discusión.|F|Es un debate abierto: según Stevens sería ordinal; se hace a menudo y se aconseja informar también de la mediana.",
      "Las puntuaciones totales de escalas de muchos ítems suelen describirse con la media y la desviación típica.|V"
    ],
    q: [
      "En una distribución, x̄ = 52, Md = 45 y Mo = 40. ¿Qué forma es más probable?|Asimetría positiva|Asimetría negativa|Simétrica|La media supera a la mediana y esta a la moda (Mo < Md < x̄): la cola larga está a la derecha.",
      "Se describen los ingresos mensuales de 200 familias; unas pocas ganan muchísimo más que el resto. ¿Qué índice conviene?|La mediana|La media|La moda|Los ingresos tienen asimetría positiva: la media se desplaza hacia la cola y la mediana describe mejor el caso típico.",
      "Tiempos (ms): 310, 325, 330, 340, 345, 350, 360, 375, 410 y 655, con x̄ = 380 y Md = 347,5. ¿Cuántos tiempos quedan por debajo de la media?|8|5|9|Solo 410 y 655 superan 380 ms: ocho de diez quedan por debajo, así que la media no describe bien el caso típico.",
      "¿Qué índice es el habitual para una variable de razón con distribución simétrica y sin atípicos?|La media|La mediana|La moda|En intervalo o razón con distribución simétrica se usa la media; con asimetría o atípicos, la mediana."
    ],
    inc: [
      "Sobre la elección del índice de tendencia central|En la asimetría positiva, la media queda por debajo de la mediana|En las variables ordinales, el índice habitual es la mediana|En una distribución simétrica unimodal, los tres índices coinciden|En la asimetría positiva la cola derecha arrastra la media hacia arriba: Mo < Md < x̄."
    ],
    seq: [],
    cls: [
      "Índice habitual según la escala de medida|Moda: Estado civil; Grupo sanguíneo; Motivo de consulta|Mediana: Nivel de estudios; Puesto en una clasificación; Gravedad del síntoma (leve, moderada, grave)|Media: Altura con distribución simétrica; Puntuación total de una escala de 20 ítems"
    ] }
] },

{ n: 8, t: "Variabilidad", cap: 2, pir: "media", mods: [
  { t: "Por qué medir la variabilidad. La amplitud total",
    tip: "Dos grupos pueden tener la misma media y ser muy distintos: la variabilidad indica cuánto se diferencian los datos entre sí o respecto a su centro, y cuanto menor es, mejor representa la media a cada caso. La amplitud total (máximo menos mínimo) es fácil de calcular, pero solo usa dos datos, depende por completo de los extremos y tiende a crecer con el tamaño de la muestra.",
    v: [
      "Variabilidad=Grado en que los datos se diferencian entre sí o respecto a su centro",
      "Dispersión=Otro nombre de la variabilidad de los datos",
      "Amplitud total=Distancia entre el valor máximo y el mínimo",
      "Rango=Otro nombre de la diferencia entre el máximo y el mínimo",
      "Limitación de la amplitud total=Solo usa dos datos y depende por completo de los extremos",
      "Efecto del tamaño muestral=Tendencia de la amplitud total a crecer cuando hay más casos",
      "Índice de variabilidad=Valor que resume cuánto se dispersan los datos",
      "Representatividad de la media=Es mayor cuanto menos se dispersan los datos"
    ],
    g: [
      "La amplitud total de 3, 7, 8, 12 y 15 es ___.|12|15|9",
      "La amplitud total solo usa ___ datos.|dos|tres|cuatro",
      "Con más casos es más probable encontrar extremos, por lo que la amplitud total tiende a ___.|crecer|decrecer|estabilizarse",
      "Cuanto menor es la variabilidad, ___ representa la media a cada caso.|mejor|peor|igual",
      "Dos clases con media 100, una entre 95 y 105 y otra entre 70 y 130, difieren en ___.|variabilidad|tendencia central|tamaño"
    ],
    tf: [
      "Dos grupos con la misma media tienen necesariamente la misma variabilidad.|F|Pueden ser muy distintos: con media 100, un grupo puede ir de 95 a 105 y otro de 70 a 130.",
      "Un índice de tendencia central sin uno de variabilidad da una descripción incompleta.|V",
      "La amplitud total es resistente a los valores atípicos.|F|Depende por completo de los extremos: si el 9 de los despertares fuera un 41, pasaría de 7 a 39.",
      "La amplitud total tiende a aumentar con el tamaño de la muestra.|V"
    ],
    q: [
      "Despertares de 8 personas: 2, 4, 4, 4, 5, 5, 7, 9. Si el 9 fuera en realidad un 41, ¿cuánto valdría la amplitud total?|39|7|32|AT = 41 − 2 = 39; antes valía 9 − 2 = 7. Basta un dato extremo para disparar la amplitud total.",
      "Puntuaciones sin ordenar: 14, 22, 9, 30, 17. ¿Cuál es la amplitud total?|21|16|8|AT = 30 − 9 = 21: se toman el máximo y el mínimo, no los datos según el orden en que aparecen escritos.",
      "¿Por qué la amplitud total es un índice de variabilidad limitado?|Solo usa dos datos, los extremos|Exige que la variable sea ordinal|Da el resultado en unidades al cuadrado|Solo usa el máximo y el mínimo, así que depende por completo de los valores extremos.",
      "Dos clases tienen media 100 en un test; en una las puntuaciones van de 95 a 105 y en la otra de 70 a 130. ¿En cuál representa mejor la media a cada alumno?|En la primera|En la segunda|En las dos por igual|Cuanto menor es la variabilidad, mejor representa la media a cada caso."
    ],
    inc: [
      "Sobre la amplitud total|Es independiente del tamaño de la muestra|Se calcula como máximo menos mínimo|Es fácil de calcular y de entender|Tiende a crecer con n, porque con más casos es más probable encontrar valores extremos."
    ],
    seq: [],
    cls: [] },
  { t: "La amplitud intercuartil",
    tip: "La amplitud intercuartil (AIQ o RIC) es Q₃ − Q₁ y abarca el 50 % central de los datos. Como ignora el 25 % de casos de cada extremo, es resistente a los atípicos: es el índice de variabilidad que acompaña a la mediana y la base del diagrama de caja. Su valor depende del método de cálculo de los cuartiles, sobre todo en muestras pequeñas.",
    v: [
      "Amplitud intercuartil=Distancia entre el tercer y el primer cuartil",
      "Rango intercuartil=Otro nombre de la AIQ, abreviado RIC",
      "50 % central=Parte de los datos que abarca la AIQ",
      "Resistencia de la AIQ=Consecuencia de ignorar el 25 % de casos de cada extremo",
      "Diagrama de caja=Gráfico basado en la amplitud intercuartil",
      "Mediana y AIQ=Pareja de índices de centro y variabilidad coherentes entre sí",
      "Dependencia del método=Variación del RIC según cómo se calculen los cuartiles",
      "Método de SPSS=Promedio ponderado con la posición k · (n + 1) / 100"
    ],
    g: [
      "Si Q₁ = 18 y Q₃ = 30, el RIC vale ___.|12|24|48",
      "La amplitud intercuartil abarca el ___ central de los datos.|50 %|25 %|75 %",
      "El RIC es el índice de variabilidad que acompaña a la ___.|mediana|media|moda",
      "Con muestras grandes, la diferencia entre métodos de cálculo del RIC se vuelve ___.|irrelevante|enorme|negativa",
      "El RIC ignora el ___ de casos de cada extremo.|25 %|50 %|5 %"
    ],
    tf: [
      "Sustituir el dato mayor por un valor muy extremo cambia mucho el RIC.|F|El RIC ignora el 25 % de casos de cada extremo: con los despertares, cambiar el 9 por un 41 no lo altera.",
      "Con los despertares, el método de SPSS da RIC = 2,5 y el método por defecto de R o Excel, 1,5.|V",
      "El RIC es la base del diagrama de caja.|V",
      "La amplitud intercuartil se calcula como Q₃ − Q₂.|F|Es Q₃ − Q₁; Q₂ es la mediana."
    ],
    q: [
      "Datos ordenados: 4, 6, 7, 9, 11, 14, 16. Con el método de SPSS, ¿cuánto vale el RIC?|8|12|7|Q₁ ocupa la posición 25 · 8 / 100 = 2 (6) y Q₃ la posición 6 (14): RIC = 14 − 6 = 8. 12 es la amplitud total.",
      "Horas de sueño ordenadas: 5, 6, 7, 7, 8, 9. ¿Cuánto vale Q₁ con el método de SPSS?|5,75|5,5|6|Posición 25 · 7 / 100 = 1,75: Q₁ = 5 + 0,75 · (6 − 5) = 5,75.",
      "Unos tiempos de reacción tienen varios atípicos muy altos. ¿Qué índice de variabilidad es más adecuado?|El rango intercuartil|La amplitud total|La desviación típica|El RIC prescinde del 25 % de casos de cada extremo, así que los atípicos no le afectan.",
      "Dos programas dan RIC distintos para la misma muestra pequeña. ¿Cuál es la explicación más probable?|Calculan los cuartiles con otro método|Uno divide la varianza entre n − 1|Uno elimina antes los valores atípicos|Los cuantiles dependen del método de cálculo; en muestras pequeñas la diferencia es apreciable."
    ],
    inc: [
      "Sobre la amplitud intercuartil|Usa todos los datos, por lo que es sensible a los atípicos|Abarca el 50 % central de la distribución|Se obtiene restando Q₁ a Q₃|El RIC prescinde del 25 % de casos de cada extremo: es resistente, no sensible, a los atípicos."
    ],
    seq: [],
    cls: [
      "Índices según su resistencia a los atípicos|Resistentes: Mediana; Amplitud intercuartil|Sensibles: Media; Amplitud total; Varianza; Desviación típica"
    ] },
  { t: "Varianza y desviación típica",
    tip: "Las desviaciones respecto a la media suman cero, así que se elevan al cuadrado: la varianza (S²) es su media y la desviación típica (S), su raíz, en las unidades de la variable. La cuasivarianza divide entre n − 1 y se usa para estimar σ²; la versión con n describe la propia muestra. SPSS, jamovi, JASP y R dan por defecto la versión con n − 1, y la notación varía entre manuales.",
    v: [
      "Varianza (S²)=Media de las desviaciones al cuadrado respecto a la media",
      "Desviación típica=Raíz cuadrada de la varianza, en las unidades de la variable",
      "Cuasivarianza=Suma de desviaciones al cuadrado dividida entre n − 1",
      "Varianza insesgada=Versión con n − 1, que estima σ² sin sesgo",
      "Numerador de la varianza=Suma de las desviaciones al cuadrado respecto a la media",
      "Fórmula abreviada=Media de los cuadrados menos el cuadrado de la media",
      "Unidades al cuadrado=Rasgo que dificulta interpretar la varianza",
      "Símbolo σ²=Varianza de la población"
    ],
    g: [
      "Con los datos 1, 3, 5, 7 y 9, la varianza calculada con n vale ___.|8|10|40",
      "Con los datos 1, 3, 5, 7 y 9, la cuasivarianza vale ___.|10|8|9",
      "La desviación típica devuelve el índice a las ___ originales de la variable.|unidades|categorías|frecuencias",
      "SPSS calcula por defecto la desviación típica dividiendo entre ___.|n − 1|n|n + 1",
      "La varianza y la desviación típica valen cero solo si todos los datos son ___.|iguales|positivos|enteros"
    ],
    tf: [
      "La varianza calculada con n está mal; la correcta es siempre la de n − 1.|F|Ambas son correctas para fines distintos: con n se describe la muestra y con n − 1 se estima σ² sin sesgo.",
      "La desviación típica puede ser negativa si muchos datos están por debajo de la media.|F|La varianza y la desviación típica son siempre ≥ 0, porque las desviaciones se elevan al cuadrado.",
      "Con n = 100, la cuasivarianza es solo un 1 % mayor que la varianza calculada con n.|V",
      "El símbolo S² indica por sí solo que la varianza se ha calculado dividiendo entre n.|F|La notación no coincide: algunos usan S² para la versión con n − 1, así que hay que comprobar el denominador."
    ],
    q: [
      "Datos: 1, 3, 5, 7, 9, con Σxᵢ² = 165 y x̄ = 5. ¿Cuánto vale la varianza con S² = Σxᵢ² / n − x̄²?|8|33|10|165 / 5 = 33 y 33 − 5² = 8. 33 olvida restar x̄²; 10 sería la cuasivarianza, 40 / 4.",
      "En una muestra de n = 5, S² = 4. ¿Cuánto vale la cuasivarianza?|5|3,2|4|s²ₙ₋₁ = S² · n / (n − 1) = 4 · 5 / 4 = 5; 3,2 resulta de multiplicar por (n − 1) / n, al revés.",
      "SPSS da «Desv. típ. = 1,414» para unas horas de sueño, pero a mano se obtuvo S = 1,291. ¿Qué ocurre?|SPSS divide entre n − 1|Hay un error en el cálculo a mano|SPSS usa la amplitud intercuartil|No hay contradicción: es la misma variabilidad, calculada con n − 1 en lugar de con n.",
      "La suma de desviaciones al cuadrado de 4 datos es 36. ¿Cuál es la desviación típica calculada con n?|3|9|3,46|S² = 36 / 4 = 9 y S = √9 = 3. 9 es la varianza; 3,46 es la raíz de la cuasivarianza (√12)."
    ],
    inc: [
      "Sobre la varianza y la desviación típica|La varianza está en las mismas unidades que la variable|La desviación típica es la raíz de la varianza|Ambas son sensibles a los valores atípicos|La varianza está en unidades al cuadrado; la desviación típica devuelve el índice a las unidades originales."
    ],
    seq: [
      "Calcular a mano la desviación típica (con n)|Calcular la media>Obtener la desviación de cada dato>Elevar al cuadrado cada desviación>Sumar los cuadrados>Dividir entre n>Extraer la raíz cuadrada"
    ],
    cls: [] },
  { t: "Coeficiente de variación y transformaciones lineales",
    tip: "El coeficiente de variación expresa la desviación típica como porcentaje de la media y permite comparar la variabilidad de variables con distintas unidades o medias; solo tiene sentido en variables de razón con media positiva. Sumar una constante no cambia la amplitud, el RIC, la varianza ni la desviación típica; multiplicar por b multiplica la desviación típica por el valor absoluto de b y la varianza por b².",
    v: [
      "Coeficiente de variación=Desviación típica expresada como porcentaje de la media",
      "Requisito del CV=Variable de razón con media positiva",
      "Sumar una constante=Transformación que desplaza la distribución sin alterar las distancias",
      "Multiplicar por una constante=Transformación que multiplica las distancias entre los datos",
      "Varianza tras multiplicar por b=Varianza original multiplicada por b²",
      "S tras multiplicar por b=Desviación típica original por el valor absoluto de b",
      "Cambio de horas a minutos=Multiplica media y desviación típica por 60, y varianza por 3 600",
      "Cero arbitrario=Rasgo de la escala de intervalo que quita sentido al CV"
    ],
    g: [
      "Si S = 3 y x̄ = 12, el coeficiente de variación es ___.|25 %|4 %|36 %",
      "Si S = 4 y se aplica Y = 10 + 2 · X, la nueva desviación típica es ___.|8|18|16",
      "Si la varianza es 9 y todos los datos se multiplican por 2, la nueva varianza es ___.|36|18|11",
      "Sumar una constante a todos los datos deja la varianza ___.|sin cambios|aumentada|reducida",
      "El CV solo tiene sentido en variables de ___ con media positiva.|razón|intervalo|orden"
    ],
    tf: [
      "Sumar 10 puntos a todos los datos aumenta la desviación típica en 10.|F|Sumar una constante desplaza la distribución sin cambiar las distancias: la desviación típica no cambia.",
      "Si Y = 5 − 3 · X y S(X) = 4, entonces S(Y) = 12.|V",
      "Multiplicar todos los datos por 3 multiplica la varianza por 3.|F|La varianza se multiplica por b² = 9; es la desviación típica la que se multiplica por 3.",
      "En una escala de intervalo, el CV cambia con solo desplazar el origen de la escala.|V"
    ],
    q: [
      "En una tarea, el tiempo de reacción tiene x̄ = 400 ms y S = 60 ms; los errores, x̄ = 5 y S = 2. ¿Qué variable es relativamente más variable?|Los errores (CV de 40 %)|El tiempo (CV de 15 %)|Ninguna, porque los CV son iguales|CV = 60 / 400 · 100 = 15 % frente a 2 / 5 · 100 = 40 %: aunque 60 es mayor que 2, los errores varían más.",
      "Unos despertares tienen x̄ = 5 y S = 2. Si se aplica Y = 50 + 10 · X, ¿cuáles son la nueva media y la nueva varianza?|100 y 400|100 y 40|55 y 400|ȳ = 50 + 10 · 5 = 100; S²(Y) = 10² · 4 = 400. Multiplicar por 10 multiplica la varianza por 100.",
      "Una variable medida en horas tiene S = 1,5. ¿Cuál es su desviación típica en minutos?|90|1,5|5 400|Pasar de horas a minutos multiplica la desviación típica por 60: 1,5 · 60 = 90. Por 3 600 se multiplicaría la varianza.",
      "Unas puntuaciones tienen x̄ = 5 y S = 2 (CV de 40 %). Si se suman 10 puntos a todas, ¿cuánto vale el nuevo CV?|13,3 %|40 %|60 %|S sigue siendo 2 y la media pasa a 15: 2 / 15 · 100 = 13,3 %. Por eso el CV no tiene sentido si el cero es arbitrario."
    ],
    inc: [
      "Sobre las transformaciones lineales Y = a + b · X|Sumar a multiplica el RIC por a|Multiplicar por b multiplica la varianza por b²|Sumar a no altera la desviación típica|Sumar una constante desplaza los datos sin cambiar las distancias: el RIC, como la amplitud y S, no cambia."
    ],
    seq: [],
    cls: [
      "Efecto de sumar una constante a todos los datos|No cambian: Desviación típica; Varianza; Amplitud total; Amplitud intercuartil|Cambian: Media; Mediana; Coeficiente de variación"
    ] }
] }
);
