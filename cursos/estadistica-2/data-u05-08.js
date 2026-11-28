// SAIMAP Psicología · Estadística II · Unidades 05–08
window.COURSE.units.push(
{ n: 5, t: "La crisis de replicación y la ciencia abierta", cap: 2, pir: "baja", mods: [
  { t: "Qué revelaron las grandes réplicas",
    tip: "Un resultado gana credibilidad cuando se replica con participantes nuevos. En el Proyecto de Reproducibilidad (Open Science Collaboration, 2015) era significativo el 97 % de los originales y solo el 36 % de las réplicas, y el efecto medio bajó a la mitad, de r 0,403 a r 0,197. Many Labs 2 (Klein et al., 2018) confirmó el patrón: efectos menores de lo publicado y muchos resultados frágiles. Ninguna cifra única resume la tasa de replicación.",
    v: [
      "Réplica directa=Repetición del procedimiento lo más fielmente posible con participantes nuevos",
      "Réplica conceptual=Pone a prueba la misma hipótesis con otro método",
      "Proyecto de Reproducibilidad=Repetición de 100 estudios de 2008 publicados en tres revistas de psicología",
      "Open Science Collaboration=Consorcio que firmó el gran proyecto de réplica publicado en 2015",
      "Many Labs 2=Réplica de 28 efectos en 125 muestras de 36 países (Klein et al., 2018)",
      "Sobrestimación del efecto=Efectos publicados mayores que los reales por baja potencia y filtro de p",
      "Golpes de suerte=Muestras pequeñas que por azar dieron efectos grandes y superaron el filtro",
      "Tasa de replicación=Cifra que cambia según el criterio usado para decidir si un efecto se reproduce"
    ],
    g: [
      "En el Proyecto de Reproducibilidad, fueron significativas el ___ de las réplicas.|36 %|47 %|68 %",
      "En Many Labs 2, la mediana del tamaño del efecto, en d, pasó de 0,60 en los originales a ___ en las réplicas.|0,15|0,30|0,45",
      "En el Proyecto de Reproducibilidad, el efecto original caía dentro del IC 95 % de la réplica en el ___ de los casos.|47 %|36 %|97 %",
      "En Many Labs 2, la variación de los resultados entre muestras fue ___.|pequeña|enorme|creciente",
      "Durante décadas las réplicas directas fueron raras porque las revistas preferían resultados ___.|nuevos|nulos|replicados"
    ],
    tf: [
      "En el Proyecto de Reproducibilidad, combinando original y réplica, el 68 % de los efectos era significativo.|V",
      "El 39 % de efectos que «se replicaron» es la tasa de replicación definitiva del Proyecto de Reproducibilidad.|F|Ninguna cifra única la resume: según el criterio, sale un 36 %, un 39 %, un 47 % o un 68 %.",
      "En Many Labs 2, 21 de los 28 efectos fueron menores que en el estudio original.|V",
      "La gran variación entre laboratorios de Many Labs 2 indica que los fracasos se deben al contexto local.|F|La variación entre muestras fue pequeña, lo que hace menos probable que los fracasos dependan de cada laboratorio."
    ],
    q: [
      "Un equipo repite con 40 personas un experimento clásico y obtiene p de 0,21. Un periodista titula «El efecto era falso». ¿Qué objeción es la más sólida?|La réplica puede carecer de potencia|El efecto original era demasiado grande|La réplica debió usar otro método|Un p mayor que 0,05 no prueba la ausencia de efecto: una réplica pequeña puede no detectarlo.",
      "¿Qué dato del Proyecto de Reproducibilidad se considera el más informativo?|La reducción del efecto a la mitad|El paso del 97 % al 36 % significativo|El 39 % de efectos que «se replicó»|Que los efectos se reduzcan de forma sistemática indica que muchos originales sobrestimaban su magnitud.",
      "¿Por qué la literatura publicada tiende a sobrestimar los efectos?|Por baja potencia y filtro de significación|Por exceso de réplicas directas publicadas|Por usar muestras demasiado grandes|Si solo se publican los significativos de estudios pequeños, pasan el filtro las muestras que por azar dieron efectos grandes.",
      "¿Qué distingue una réplica conceptual de una directa?|Prueba la hipótesis con otro método|Repite el procedimiento con fidelidad|Reutiliza a los participantes originales|La directa reproduce el procedimiento con participantes nuevos. La conceptual pone a prueba la misma hipótesis con otro método."
    ],
    inc: [
      "Sobre las grandes réplicas|Many Labs 2 replicó 100 estudios de 2008|El Proyecto de Reproducibilidad es de 2015|Many Labs 2 reunió a más de 15.000 personas|Los 100 estudios de 2008 son del Proyecto de Reproducibilidad. Many Labs 2 replicó 28 efectos en 125 muestras."
    ],
    seq: [],
    cls: [
      "Proyecto de réplica|Proyecto de Reproducibilidad: 100 estudios de 2008; 36 % de réplicas significativas; r de 0,403 a 0,197|Many Labs 2: 28 efectos; 125 muestras de 36 países; d de 0,60 a 0,15"
    ] },
  { t: "p-hacking, HARKing y grados de libertad del investigador",
    tip: "Simmons, Nelson y Simonsohn (2011) llamaron grados de libertad del investigador al margen de decisiones que hay entre los datos y el artículo. Ninguna es fraudulenta por sí sola: el problema surge al tomarlas tras ver los datos y quedarse con la que da significación. En su simulación sin efecto real, combinar cuatro decisiones flexibles elevó los falsos positivos del 5 % al 60,7 %.",
    v: [
      "Grados de libertad del investigador=Decisiones de recogida y análisis que pueden tomarse tras ver los datos",
      "p-hacking=Probar varios análisis y comunicar solo el que da p < 0,05",
      "Parada opcional=Detener la recogida en cuanto el resultado es significativo",
      "HARKing=Presentar como hipótesis previa lo hallado al explorar los datos",
      "Kerr (1998)=Autor que dio nombre a formular las hipótesis después de conocer los resultados",
      "Sesgo de publicación=Publicación preferente de resultados significativos que distorsiona la literatura",
      "Efecto cajón de archivo=Estudios no significativos que no se envían o no se publican",
      "Prácticas cuestionables=Conductas como la parada opcional que inflan los falsos positivos"
    ],
    g: [
      "En la simulación de Simmons et al. (2011), sin flexibilidad la tasa de falsos positivos era del ___.|5 %|7,7 %|12,6 %",
      "Combinando solo las decisiones A y B, la tasa de falsos positivos llegó al ___.|14,4 %|30,9 %|60,7 %",
      "En la simulación, cada condición tenía ___ observaciones por celda.|20|10|50",
      "La decisión B consistía en añadir ___ observaciones por celda si el primer análisis no era significativo.|10|20|5",
      "Simmons et al. pidieron informar de todas las variables y ___, incluidas las que no dieron resultado.|condiciones|hipótesis|revistas"
    ],
    tf: [
      "Cada decisión flexible aislada elevó los falsos positivos por encima del 30 %.|F|Ninguna decisión aislada superó el 12,6 %. El 30,9 % se alcanzó combinando A, B y C.",
      "Ninguno de los grados de libertad del investigador es fraudulento por sí solo.|V",
      "En la decisión A de la simulación, las dos variables dependientes estaban correlacionadas.|V",
      "HARKing consiste en detener la recogida en cuanto se obtiene p < 0,05.|F|Eso es la parada opcional. HARKing es presentar como hipótesis previa lo descubierto al explorar."
    ],
    q: [
      "Una estudiante pasa tres cuestionarios de sueño, amplía la muestra, excluye a quienes trabajan de noche y presenta como hipótesis inicial el único cuestionario con p de 0,04. ¿Qué ocurre con ese p?|Pierde su significado nominal|Sigue siendo válido, pues no mintió|Solo cambia si inventó algún dato|El 5 % de error tipo I solo vale si el análisis estaba fijado de antemano. No falseó datos, pero el p ya no significa lo que dice.",
      "Un investigador revisa los datos cada 10 participantes y para al obtener p < 0,05. ¿Qué práctica es?|Parada opcional|HARKing|Sesgo de publicación|Detener la recogida según el resultado infla el error tipo I.",
      "¿Qué combinación de decisiones flexibles dio un 30,9 % de falsos positivos?|A, B y C|A y B|Las cuatro|A y B dieron un 14,4 %, A, B y C un 30,9 % y las cuatro juntas un 60,7 %.",
      "¿Cuándo se vuelve problemático un grado de libertad del investigador?|Cuando se decide tras ver los datos|Cuando se fija en el plan previo|Cuando se informa en el artículo|Las decisiones no son fraudulentas en sí. El problema es tomarlas después de ver los datos según den significación."
    ],
    inc: [
      "Sobre la simulación de Simmons et al. (2011)|Las cuatro juntas dieron un 30,9 %|Sin flexibilidad, la tasa fue del 5 %|No había ningún efecto real en los datos|Las cuatro juntas elevaron la tasa al 60,7 %. El 30,9 % corresponde a combinar A, B y C."
    ],
    seq: [],
    cls: [
      "Práctica cuestionable|p-hacking: probar varios análisis; comunicar solo el significativo|Parada opcional: mirar cada pocos participantes; detener la recogida al ver p < 0,05|HARKing: hipótesis formulada tras explorar; Kerr (1998)"
    ] },
  { t: "Preregistro, informes registrados y datos abiertos",
    tip: "La ciencia abierta separa lo decidido antes de ver los datos de lo decidido después y hace visible el proceso. El preregistro fija con fecha hipótesis, muestra, exclusiones y plan de análisis, y obliga a etiquetar lo exploratorio. El informe registrado añade que la revista acepta el trabajo antes de los datos, sea cual sea el resultado. Un preregistro vago apenas protege, y desviarse de él no es fraude si se declara y se justifica.",
    v: [
      "Ciencia abierta=Prácticas que separan lo decidido antes y después de los datos y hacen visible el proceso",
      "Preregistro=Documento con fecha que fija hipótesis, muestra y análisis antes de los datos",
      "Informe registrado=Artículo revisado y aceptado antes de recoger los datos, sea cual sea el resultado",
      "OSF y AsPredicted=Plataformas más usadas para depositar el plan de un estudio",
      "Reproducibilidad computacional=Obtener los mismos números con los mismos datos",
      "Directrices TOP=Sirven para que las revistas declaren qué grado de transparencia exigen",
      "Análisis exploratorio=Genera hipótesis para el siguiente estudio, no una confirmación",
      "Réplica multilaboratorio=Muestras grandes y diversas reunidas con un protocolo común"
    ],
    g: [
      "En un informe registrado, la revista evalúa introducción, método y plan de análisis ___ de que existan los datos.|antes|después|además",
      "El preregistro no prohíbe explorar: obliga a ___ qué análisis eran confirmatorios.|etiquetar|eliminar|ocultar",
      "El remedio principal frente al sesgo de publicación son los ___.|informes registrados|datos abiertos|metaanálisis",
      "Publicar datos y sintaxis permite detectar errores de cálculo o de ___.|codificación|muestreo|diseño",
      "Un preregistro ___ deja casi la misma flexibilidad que no tenerlo.|vago|breve|público"
    ],
    tf: [
      "Desviarse del preregistro constituye fraude, aunque se declare y se justifique.|F|No es fraude si se declara y se justifica. Lo problemático es ocultar la desviación.",
      "Preregistrar el plan de análisis y la regla de parada devuelve el error tipo I a su valor nominal.|V",
      "El informe registrado se revisa en dos fases, antes y después de recoger los datos.|V",
      "Preregistro e informe registrado se diferencian en que solo el segundo fija las hipótesis antes de los datos.|F|Ambos las fijan antes. El informe registrado añade la aceptación previa de la revista."
    ],
    q: [
      "Un TFG preregistra un N de 64 por grupo para d de 0,5 con potencia 0,80, la exclusión de quienes trabajan de noche y una t de Welch bilateral con d e IC 95 %. ¿Qué aporta sobre todo?|Fija las decisiones antes de los datos|Garantiza que el resultado sea significativo|Asegura que la revista lo publique|Al fijarlo todo de antemano, el valor p conserva su significado. La aceptación previa solo la da un informe registrado.",
      "¿Qué problema corta de raíz el informe registrado?|El sesgo de publicación|Los errores de codificación|La baja potencia estadística|La decisión editorial ya no depende de que p sea menor que 0,05.",
      "¿Qué remedio corresponde principalmente al HARKing?|Preregistrar las hipótesis|Publicar el código abierto|Hacer réplicas multilaboratorio|Preregistrar las hipótesis permite distinguir la confirmación de la exploración.",
      "Un hallazgo que surge al explorar los datos de un estudio preregistrado debe presentarse como…|una hipótesis para otro estudio|una confirmación de la hipótesis|un resultado sin ningún valor|Lo descubierto explorando es una hipótesis para el siguiente estudio, no una confirmación, y debe etiquetarse así."
    ],
    inc: [
      "Sobre la ciencia abierta|El preregistro prohíbe cualquier análisis exploratorio|Los datos abiertos facilitan la reproducibilidad computacional|Los metaanálisis combinan los efectos de muchos estudios|El preregistro no prohíbe explorar: obliga a etiquetar qué análisis eran confirmatorios y cuáles exploratorios."
    ],
    seq: [
      "Proceso de un informe registrado|Redactar introducción, método y plan de análisis>Revisión de la primera fase sin datos>Aceptación del trabajo por la revista>Recogida y análisis según el protocolo>Revisión de que se siguió lo anunciado"
    ],
    cls: [
      "Remedio principal|Preregistro: p-hacking; parada opcional; HARKing|Informes registrados: sesgo de publicación|Datos y código abiertos: errores de cálculo; errores de codificación"
    ] },
  { t: "El debate sobre el umbral de significación",
    tip: "La declaración de la ASA (Wasserstein y Lazar, 2016) recordó que p no mide la probabilidad de la hipótesis ni el tamaño del efecto. Benjamin et al. (2018) propusieron p < 0,005 para nuevos descubrimientos, Lakens et al. (2018) pidieron justificar α en cada estudio y Wasserstein et al. (2019), abandonar «estadísticamente significativo». Ninguna postura defiende p < 0,05 como único criterio, y el mínimo es informar p exacto, efecto e IC.",
    v: [
      "Declaración de la ASA=Seis principios sobre el valor p publicados en 2016 (Wasserstein y Lazar)",
      "Wasserstein et al. (2019)=Editorial que propuso abandonar la etiqueta «estadísticamente significativo»",
      "Ritual de la significación=Uso mecánico de p < 0,05 descrito por Gigerenzer",
      "Benjamin et al. (2018)=Grupo de 72 autores que propuso p < 0,005 para nuevos descubrimientos",
      "Resultado sugerente=Valor p entre 0,005 y 0,05 según la propuesta del umbral más estricto",
      "Justificar α=Elegir el nivel de significación según los costes de los errores tipo I y II",
      "ATOM=Aceptar la incertidumbre y ser reflexivo, abierto y modesto",
      "Ioannidis (2005)=Argumentó que con poca potencia buena parte de lo publicado puede ser falso"
    ],
    g: [
      "Según Benjamin et al., un p de 0,005 bilateral equivale aproximadamente a un factor de Bayes de entre 14 y ___.|26|50|100",
      "Mantener la potencia con p < 0,005 exigiría alrededor de un ___ más de muestra.|70 %|30 %|150 %",
      "Para d de 0,5 en dos grupos independientes, el umbral de 0,005 eleva la muestra de 64 a ___ personas por grupo.|109|128|86",
      "El editorial de Wasserstein, Schirm y Lazar (2019) acompañaba a ___ artículos.|43|25|72",
      "Gigerenzer describe el ritual de p < 0,05 como un híbrido entre Fisher y ___.|Neyman-Pearson|Bayes|Cohen"
    ],
    tf: [
      "En el Proyecto de Reproducibilidad se replicó el 50 % de los estudios con p original < 0,005, frente al 24 % de los que tenían p entre 0,005 y 0,05.|V",
      "Benjamin et al. (2018) propusieron eliminar los valores p de los artículos.|F|Propusieron cambiar el umbral. Abandonar la etiqueta «significativo» es la propuesta de Wasserstein et al. (2019).",
      "Lakens et al. (2018) defienden un α único y más exigente para toda la psicología.|F|Sostienen que ningún umbral universal sirve: cada estudio debe justificar su α según los costes de los errores.",
      "Las tres propuestas coinciden en no usar p < 0,05 como único criterio.|V"
    ],
    q: [
      "De 1.000 hipótesis, el 10 % son verdaderas. Con α de 0,05 y potencia 0,80 hay 80 positivos verdaderos y 45 falsos. ¿Qué proporción de los significativos es falsa?|Alrededor del 36 %|Alrededor del 5 %|Alrededor del 56 %|45 / (80 + 45) ≈ 0,36. El 56 % corresponde a una potencia de 0,35, y el 5 %, a α de 0,005 con potencia 0,80.",
      "Un equipo que diseña un ensayo que decidirá un tratamiento fija su α según el coste de cada error. ¿Qué propuesta sigue?|Justificar α|Umbral de 0,005|Abandonar la significación|Lakens et al. (2018) proponen que cada estudio justifique α y potencia según las consecuencias de los errores.",
      "¿Qué recomendaron Wasserstein, Schirm y Lazar (2019)?|Abandonar la etiqueta «significativo»|Exigir p < 0,005 en descubrimientos|Justificar α en cada estudio|Propusieron informar p como medida continua, con estimaciones e incertidumbre, y lo resumieron en ATOM.",
      "Según la ASA (2016), un valor p indica…|lo incompatibles que son los datos con un modelo|la probabilidad de que la hipótesis sea cierta|el tamaño y la importancia del efecto|p no mide la probabilidad de que la hipótesis sea cierta ni el tamaño o la importancia del efecto."
    ],
    inc: [
      "Sobre el debate del umbral|Lakens et al. (2018) proponen p < 0,005 universal|Gigerenzer llama ritual al uso mecánico de p < 0,05|La ASA publicó seis principios sobre el valor p|El umbral de 0,005 es de Benjamin et al. (2018). Lakens et al. defienden que cada estudio justifique su α."
    ],
    seq: [],
    cls: [
      "Propuesta sobre el umbral|Benjamin et al. (2018): p < 0,005; resultados sugerentes; 72 autores|Lakens et al. (2018): justificar α; costes de los errores|Wasserstein et al. (2019): abandonar «significativo»; ATOM; 43 artículos"
    ] }
] },
{ n: 6, t: "Más allá del valor p: equivalencia y factores de Bayes", cap: 2, pir: "baja", mods: [
  { t: "Afirmar la ausencia de un efecto relevante: pruebas TOST",
    tip: "Un p mayor que 0,05 no permite concluir que el efecto sea nulo. Las pruebas de equivalencia fijan antes el menor efecto de interés (SESOI), que define los límites −Δ y +Δ. El TOST (Lakens, 2017) hace dos pruebas unilaterales: si se rechazan ambas, hay equivalencia, y su p es el mayor de los dos. Equivale a comprobar que el IC 90 % cae entero dentro de los límites.",
    v: [
      "Prueba de equivalencia=Contraste que busca mostrar que un efecto es menor que un límite relevante",
      "SESOI=Menor efecto de interés, por debajo del cual el efecto se considera despreciable",
      "Límites de equivalencia=Valores −Δ y +Δ derivados del menor efecto de interés",
      "TOST=Dos pruebas unilaterales contra −Δ y +Δ (Lakens, 2017)",
      "p del TOST=El mayor de los dos valores p unilaterales",
      "IC 90 %=Intervalo usado porque cada prueba unilateral se hace con α de 0,05",
      "Efecto trivial=Distinto de 0 pero dentro de los límites de equivalencia",
      "Resultado indeterminado=IC tan ancho que contiene el 0 y sobrepasa los límites"
    ],
    g: [
      "El TOST concluye equivalencia si se rechazan ___ hipótesis nulas unilaterales.|las dos|una de las|ninguna de las",
      "En el TOST se usa el IC al ___ porque cada prueba es unilateral con α de 0,05.|90 %|95 %|99 %",
      "El valor p del TOST es el ___ de los dos valores p unilaterales.|mayor|menor|promedio",
      "Los límites de equivalencia deben justificarse ___ de ver los datos, idealmente en el preregistro.|antes|después|al terminar",
      "Con muestras muy grandes, un efecto puede ser distinto de 0 y, a la vez, demasiado ___ para importar.|pequeño|grande|impreciso"
    ],
    tf: [
      "Si la prueba clásica da p mayor que 0,05, puede concluirse que las condiciones son equivalentes.|F|Quizá el efecto existe y faltó potencia. Para afirmar equivalencia hace falta un TOST u otra herramienta específica.",
      "El menor efecto de interés puede expresarse en unidades brutas o en d.|V",
      "Fijar Δ después de ver los datos permite «demostrar» la equivalencia que se desee.|V",
      "El TOST concluye equivalencia si el IC 95 % de la diferencia contiene el 0.|F|Se comprueba si el IC 90 % cae entero dentro de los límites. Contener el 0 también ocurre en un resultado indeterminado."
    ],
    q: [
      "Un departamento compara notas de examen en línea y presencial, con Δ de 0,5. Las pruebas contra −0,5 y +0,5 dan p < 0,001 y p de 0,010, y el IC 90 % va de −0,18 a 0,38. ¿Qué se concluye?|Las notas son equivalentes|El resultado es indeterminado|Las notas son diferentes|Se rechazan las dos nulas unilaterales y el IC 90 % cae dentro de los límites. El p del TOST es 0,010.",
      "Con límites de ±0,3, el IC 90 % de una diferencia va de 0,05 a 0,25. ¿Qué resultado combinado es?|Diferente pero equivalente|Equivalente y no diferente|Diferente y no equivalente|No contiene el 0, así que hay diferencia, pero cae dentro de ±0,3: es un efecto trivial.",
      "¿Qué decide qué diferencia se considera despreciable en una prueba de equivalencia?|El menor efecto de interés|El valor p del contraste clásico|El tamaño de la muestra|El SESOI define los límites −Δ y +Δ, por debajo de los cuales el efecto se considera despreciable.",
      "¿Qué resultado es típico de los estudios pequeños al combinar el contraste clásico y el de equivalencia?|Indeterminado|Diferente pero equivalente|Equivalente y no diferente|Con un IC tan ancho que contiene el 0 y sobrepasa los límites, no puede afirmarse nada."
    ],
    inc: [
      "Sobre el TOST|Su p es el menor de los dos p unilaterales|Se basa en dos contrastes unilaterales|Δ puede fundarse en un criterio clínico|El p del TOST es el mayor de los dos: solo hay equivalencia si se rechazan ambas hipótesis nulas."
    ],
    seq: [
      "Prueba de equivalencia TOST|Fijar el menor efecto de interés>Definir los límites −Δ y +Δ>Recoger los datos>Hacer las dos pruebas unilaterales>Concluir equivalencia si se rechazan ambas"
    ],
    cls: [] },
  { t: "La lógica bayesiana: de la creencia previa a la posterior",
    tip: "El enfoque bayesiano entiende la probabilidad como un grado de creencia que se actualiza con los datos: la posterior es proporcional a la verosimilitud por la priori. El valor p es una probabilidad de los datos suponiendo H₀, y la posterior, de la hipótesis dados los datos. Con odds, las posteriores son la razón de verosimilitudes por las odds previas. La subjetividad de la priori se aborda con prioris por defecto, transparencia y análisis de sensibilidad.",
    v: [
      "Probabilidad previa=Plausibilidad de una hipótesis o parámetro antes de ver los datos",
      "Verosimilitud=Probabilidad de los datos observados si una hipótesis fuera cierta",
      "Probabilidad posterior=Creencia actualizada tras combinar la priori con los datos",
      "Odds=Razón entre dos probabilidades",
      "Razón de verosimilitudes=Cociente entre la probabilidad de los datos con H₁ y con H₀",
      "Distribución previa=Reparto de la creencia entre los valores posibles de un parámetro antes del estudio",
      "Intervalo de credibilidad=Rango que contiene el parámetro con una probabilidad dada, según modelo y priori",
      "Análisis de sensibilidad=Repetir el análisis con varias prioris razonables para ver si cambia la conclusión"
    ],
    g: [
      "Para el enfoque frecuentista, la probabilidad es la ___ a largo plazo de un procedimiento.|frecuencia|creencia|verosimilitud",
      "Con muestras pequeñas, la influencia de la priori sobre la posterior es ___.|mayor|menor|nula",
      "Si la razón de verosimilitudes es 6 y las odds previas son 1, las odds posteriores son ___.|6|1|7",
      "La crítica principal al enfoque bayesiano es que la priori introduce ___.|subjetividad|sesgo de selección|error tipo I",
      "Las prioris por defecto de JASP y jamovi son poco ___ y acordadas por convención.|informativas|flexibles|conocidas"
    ],
    tf: [
      "La verosimilitud es la probabilidad de que la hipótesis sea cierta antes de ver los datos.|F|Eso es la probabilidad previa. La verosimilitud es la probabilidad de los datos observados si la hipótesis fuera cierta.",
      "Ante los mismos datos, la razón de verosimilitudes no depende de la creencia previa de cada equipo.|V",
      "El intervalo de credibilidad admite decir que hay un 95 % de probabilidad de que contenga el parámetro, dados el modelo y la priori.|V",
      "Con odds previas de 0,11 y razón de verosimilitudes 6, la probabilidad posterior de H₁ supera 0,50.|F|Las odds posteriores son 0,67 y la probabilidad, 0,40: el equipo escéptico termina por debajo de 0,50."
    ],
    q: [
      "Unos datos son 0,30 de probables si un programa de tutorías funciona y 0,05 si no. Un equipo neutral parte de una P(H₁) de 0,50. ¿Qué probabilidad posterior obtiene?|0,86|0,60|0,40|Odds previas de 1 por una razón de 6 dan odds de 6, y 6 / 7 ≈ 0,86. El 0,40 es la del equipo escéptico.",
      "Si las odds previas a favor de H₁ son 0,25 y la razón de verosimilitudes es 2, ¿qué probabilidad posterior tiene H₁?|0,33|0,50|0,67|Las odds posteriores son 0,25 × 2, es decir, 0,5, y la probabilidad es 0,5 / 1,5 ≈ 0,33.",
      "¿Qué respuesta al problema de la priori consiste en repetir el análisis con varias prioris razonables?|Análisis de sensibilidad|Priori por defecto|Declaración transparente|Si la conclusión no cambia con distintas prioris razonables, no depende de una elección subjetiva.",
      "¿En qué se diferencia el valor p de la probabilidad posterior?|p supone H₀ y la posterior, los datos|p supone los datos y la posterior, H₀|Son la misma probabilidad con otro nombre|p es la probabilidad de los datos suponiendo H₀. La posterior es la de la hipótesis dados los datos."
    ],
    inc: [
      "Sobre la lógica bayesiana|La posterior es independiente de la priori elegida|La verosimilitud es la probabilidad de los datos con H|Con muchos datos, la priori pierde influencia|La posterior depende de dónde se parte. Es la razón de verosimilitudes la que no depende de la priori."
    ],
    seq: [
      "Actualización bayesiana|Fijar la probabilidad previa>Calcular la verosimilitud de los datos>Combinarlas en la probabilidad posterior"
    ],
    cls: [
      "Enfoque|Frecuentista: probabilidad como frecuencia a largo plazo; valor p; intervalo de confianza|Bayesiano: probabilidad como grado de creencia; probabilidad posterior; intervalo de credibilidad"
    ] },
  { t: "El factor de Bayes y cómo leerlo",
    tip: "El factor de Bayes BF₁₀ indica cuántas veces más probables son los datos con H₁ que con H₀, y BF₀₁ es su inverso. A diferencia de p, puede aportar evidencia a favor de H₀. Se lee con la escala de Jeffreys adaptada por Lee y Wagenmakers, simétrica en escala logarítmica y solo orientativa. No es la probabilidad posterior, no mide el tamaño del efecto, y un BF cercano a 1 indica que los datos no discriminan.",
    v: [
      "Factor de Bayes (BF₁₀)=Razón entre la probabilidad de los datos con H₁ y con H₀",
      "BF₀₁=Inverso de BF₁₀, que expresa la evidencia a favor de H₀",
      "Evidencia anecdótica=BF₁₀ entre 1 y 3",
      "Evidencia moderada=BF₁₀ entre 3 y 10",
      "Evidencia extrema=BF₁₀ por encima de 100",
      "Escala de Jeffreys=Bandas orientativas de evidencia adaptadas por Lee y Wagenmakers",
      "Priori JZS=Cauchy centrada en 0 para δ en la t bayesiana (Rouder et al., 2009)",
      "Anchura por defecto=Valor 0,707 de la Cauchy en JASP y jamovi"
    ],
    g: [
      "Un BF₁₀ de 0,2 equivale a un BF₀₁ de ___.|5|0,8|2",
      "Un BF₁₀ de 20 indica evidencia ___ a favor de H₁.|fuerte|moderada|extrema",
      "En escala logarítmica, un BF₁₀ de 10 y uno de 1/10 representan la misma ___ de evidencia.|fuerza|dirección|probabilidad",
      "Si el efecto observado es modesto, una priori más ancha produce un BF₁₀ ___.|menor|mayor|idéntico",
      "La priori JZS asigna a δ una distribución ___ centrada en 0.|de Cauchy|normal|uniforme"
    ],
    tf: [
      "Un BF₁₀ de 3 significa que H₁ es tres veces más probable que H₀.|F|Solo si las odds previas eran 1. El BF compara la probabilidad de los datos, no la de las hipótesis.",
      "Un BF₁₀ cercano a 1 aporta evidencia a favor de H₀.|F|Indica que los datos no discriminan entre las hipótesis: hacen falta más datos.",
      "Con mucha muestra, un efecto pequeño puede dar un BF enorme.|V",
      "Se discute si las prioris por defecto, como la Cauchy de anchura 0,707, son adecuadas para cada área.|V"
    ],
    q: [
      "Un estudio obtiene un BF₁₀ de 3, y el equipo partía de odds previas de 0,25 a favor de H₁. ¿Qué hipótesis es más plausible tras los datos?|H₀, con odds finales de 0,75|H₁, porque el BF supera a 1|H₁, tres veces más que H₀|0,25 × 3 da 0,75: H₀ sigue siendo más plausible. El BF no es la probabilidad posterior.",
      "Un análisis da un BF₁₀ de 0,05. ¿Cómo se interpreta?|Evidencia fuerte a favor de H₀|Evidencia anecdótica a favor de H₁|Un 5 % de probabilidad de H₁|BF₀₁ vale 20: los datos son veinte veces más probables con H₀. El BF no es una probabilidad.",
      "¿Qué ventaja clave tiene el factor de Bayes frente al valor p?|Puede aportar evidencia a favor de H₀|Mide directamente el tamaño del efecto|No necesita especificar ninguna H₁|El BF puede apoyar a H₀, no solo «no rechazarla». No mide el efecto y exige concretar H₁ con una priori.",
      "¿Qué anchura usan por defecto JASP y jamovi para la Cauchy de la t bayesiana?|0,707|1|1,414|Con 0,707 se espera que la mitad de los efectos plausibles estén entre −0,707 y 0,707."
    ],
    inc: [
      "Sobre el factor de Bayes|Mide el tamaño del efecto observado|Puede aportar evidencia a favor de H₀|Depende de la priori asignada a H₁|El BF no mide el tamaño del efecto: con mucha muestra, un efecto pequeño puede dar un BF enorme."
    ],
    seq: [],
    cls: [
      "Dirección de la evidencia|A favor de H₁: BF₁₀ de 6; BF₀₁ de 0,2; BF₁₀ de 40|A favor de H₀: BF₁₀ de 0,2; BF₀₁ de 8; BF₁₀ de 0,01"
    ] },
  { t: "Análisis frecuentista y bayesiano en paralelo con JASP y jamovi",
    tip: "JASP y jamovi son programas libres que permiten pedir el mismo análisis en versión clásica y bayesiana. En el ejemplo del programa de actividad física, p es 0,047, pero el IC de d va de 0,01 a 0,89 y el BF₁₀ es 1,33, evidencia anecdótica. Con prioris más anchas, el BF baja hasta 0,84. Los dos enfoques indican un efecto incierto: conviene ampliar la muestra o replicar.",
    v: [
      "JASP=Programa libre que ofrece cada análisis en versión clásica y bayesiana con tablas APA",
      "jamovi=Programa libre basado en R que puede ampliarse con módulos",
      "Módulo ESCI=Herramienta de Calin-Jageman orientada a la estimación con IC",
      "G∗Power=Programa habitual para calcular potencia y tamaños muestrales",
      "Fila de Welch en SPSS=«No se asumen varianzas iguales» en Comparar medias",
      "Priori ancha=Cauchy de anchura 1 o 1,414, que da más peso a los efectos grandes",
      "Estimación imprecisa=IC compatible a la vez con un efecto casi nulo y con uno grande",
      "Conclusión conjunta=Ambos enfoques señalan un efecto incierto que pide más datos"
    ],
    g: [
      "En el ejemplo, la t de Welch fue de 2,02 con ___ grados de libertad.|77,84|78|80",
      "Con la priori por defecto, el BF₁₀ del ejemplo fue de ___.|1,33|0,84|2,02",
      "Con odds previas de 1 y un BF₁₀ de 1,33, la probabilidad posterior de H₁ es aproximadamente ___.|0,57|0,75|0,33",
      "La versión 0.95 de JASP (2025) incluye un módulo ESCI de ___.|Calin-Jageman|Rouder|Lakens",
      "En SPSS, la t de Welch se lee en la fila «No se asumen varianzas ___».|iguales|distintas|combinadas"
    ],
    tf: [
      "En el ejemplo, p de 0,047 y BF₁₀ de 1,33 se contradicen: uno indica efecto y el otro no.|F|No se contradicen: ambos indican un efecto incierto. El BF deja más claro que un p justo bajo 0,05 aporta poca evidencia.",
      "Con la priori muy ancha, de anchura 1,414, el BF del ejemplo pasa a favorecer levemente a H₀.|V",
      "El IC 95 % de d, de 0,01 a 0,89, indica una estimación muy precisa del efecto del programa.|F|Es muy imprecisa: los datos son compatibles con un efecto casi nulo y con uno grande.",
      "Con grupos de igual tamaño, la t bayesiana coincide en valor con la de Welch y solo cambian los gl.|V"
    ],
    q: [
      "Un estudio de bienestar obtiene p de 0,047, d de 0,45 con IC de 0,01 a 0,89 y BF₁₀ de 1,33. ¿Qué conclusión es la más adecuada?|La evidencia es débil y conviene replicar|El programa funciona, pues p es menor que 0,05|Los datos apoyan que el programa no funciona|Un BF₁₀ de 1,33 es evidencia anecdótica y el IC es muy ancho. Lo razonable es ampliar la muestra o replicar.",
      "¿Cómo se describiría el factor de Bayes del ejemplo en el informe?|Evidencia anecdótica a favor de una diferencia|Evidencia moderada a favor de una diferencia|Evidencia anecdótica a favor de H₀|Con BF₁₀ de 1,33 y la priori de Cauchy por defecto, la evidencia es anecdótica a favor de una diferencia.",
      "¿Qué muestra el análisis de sensibilidad del ejemplo?|Que la conclusión no cambia|Que el BF crece con prioris anchas|Que la priori ancha confirma el efecto|El BF va de 1,33 a 0,84: con todas las prioris, no hay evidencia clara en ningún sentido.",
      "¿Qué programa sigue siendo habitual para calcular la potencia y el tamaño muestral?|G∗Power|JASP|jamovi|JASP y jamovi ofrecen análisis clásicos y bayesianos, pero para la potencia sigue siendo habitual G∗Power."
    ],
    inc: [
      "Sobre JASP y jamovi|Solo ofrecen análisis bayesianos|jamovi se basa en R y admite módulos|JASP produce tablas con formato APA|JASP permite pedir el mismo análisis en versión clásica y bayesiana."
    ],
    seq: [
      "Leer en paralelo un análisis clásico y uno bayesiano|Análisis clásico con p e IC>Factor de Bayes con la priori por defecto>Sensibilidad con prioris más anchas>Conclusión conjunta"
    ],
    cls: [
      "Programa|JASP: versión clásica y bayesiana; módulo ESCI; tablas en formato APA|jamovi: basado en R; ampliable con módulos; versión 2.7.x"
    ] }
] },
{ n: 7, t: "Supuestos del modelo lineal: linealidad y normalidad", cap: 3, pir: "media", mods: [
  { t: "Qué separa una prueba paramétrica de una no paramétrica",
    tip: "Las pruebas paramétricas (t, ANOVA, Pearson, regresión) estiman parámetros suponiendo un modelo para el error y son las más potentes si sus supuestos se cumplen. Las no paramétricas usan rangos o signos, toleran mejor los extremos y encajan con variables ordinales, pero contrastan otra hipótesis. La prueba se elige por la pregunta y el diseño, no por un paso previo de Shapiro-Wilk y Levene.",
    v: [
      "Prueba paramétrica=Estima parámetros suponiendo un modelo para el error, normalmente normal",
      "Prueba no paramétrica=Se basa en rangos o signos, con menos supuestos sobre la forma",
      "Rangos=Posiciones que ocupan las puntuaciones al ordenarlas",
      "Modelo lineal general=Marco común de la t, el ANOVA, la regresión y el ANCOVA",
      "t de Welch=Referencia actual para comparar dos grupos independientes",
      "Mann-Whitney=Alternativa por rangos para dos grupos independientes",
      "Wilcoxon=Alternativa por rangos para las mismas personas medidas dos veces",
      "χ² o McNemar=Análisis para variables categóricas en el árbol de decisión"
    ],
    g: [
      "Si los supuestos se cumplen, las pruebas no paramétricas son algo ___ potentes.|menos|más|igual de",
      "Con una variable dependiente ___, la opción natural es una prueba no paramétrica.|ordinal|cuantitativa|continua",
      "Mann-Whitney no compara medias, sino si las puntuaciones de un grupo tienden a ___ a las del otro.|superar|igualar|duplicar",
      "Ante los valores extremos, la sensibilidad de las pruebas paramétricas es ___.|alta|baja|nula",
      "La t, el ANOVA, la regresión y el ANCOVA son casos del modelo lineal ___.|general|mixto|generalizado"
    ],
    tf: [
      "Las pruebas no paramétricas usan los valores originales y por eso toleran peor los extremos.|F|Usan rangos o signos, y por eso toleran mejor los valores extremos que las paramétricas.",
      "Para dos grupos independientes, la prueba de referencia ya es la t de Welch.|V",
      "En el árbol de decisión, las variables categóricas se analizan con Mann-Whitney.|F|Se analizan con χ² o McNemar. Mann-Whitney es para dos grupos independientes con variable ordinal o cuantitativa.",
      "La t, el ANOVA y la regresión comparten supuestos porque forman parte del mismo marco.|V"
    ],
    q: [
      "Se compara la calidad del sueño entre quienes usan el móvil en la cama y quienes no, medida con una sola pregunta de cuatro categorías ordenadas. ¿Qué prueba encaja mejor?|Mann-Whitney|Wilcoxon|t de Welch|Son personas distintas y la variable es ordinal. Wilcoxon es para las mismas personas medidas dos veces.",
      "Se mide con un cuestionario de 0 a 21 la calidad del sueño de los mismos estudiantes antes y después de sacar el móvil del dormitorio. ¿Qué prueba de referencia corresponde?|t relacionada|t de Welch|Mann-Whitney|Es un diseño intrasujeto con variable cuantitativa: t relacionada, con Wilcoxon como alternativa por rangos.",
      "¿Qué rasgo es propio de las pruebas paramétricas?|Usan los valores originales|Trabajan con rangos o signos|Resisten bien a los atípicos|Usan los valores originales y estiman parámetros, por eso la media se desplaza ante los atípicos.",
      "¿Qué decide en primer lugar qué prueba usar?|La pregunta y el diseño|El resultado de Shapiro-Wilk|El resultado de Levene|Antes que los supuestos, importa qué se compara, si se mide a personas distintas o a las mismas y el tipo de variable."
    ],
    inc: [
      "Sobre las pruebas no paramétricas|Comparan las medias de los grupos|Trabajan con rangos o signos|Toleran mejor los valores extremos|Contrastan otra hipótesis: si las puntuaciones de un grupo tienden a superar a las del otro."
    ],
    seq: [],
    cls: [
      "Diseño|Grupos independientes: t de Welch; Mann-Whitney; Kruskal-Wallis|Mismas personas: t relacionada; Wilcoxon; Friedman"
    ] },
  { t: "Resultado = modelo + error: linealidad y aditividad",
    tip: "Field (2024) resume el análisis de datos como resultado igual a modelo más error: cada puntuación se descompone en lo pronosticado y el residuo. Casi todos los supuestos hablan de los errores, no de los datos brutos. El más importante es la linealidad y aditividad: si falla, el modelo está mal especificado y ninguna corrección de la normalidad o de las varianzas lo arregla. Se diagnostica con gráficos.",
    v: [
      "Residuo=Diferencia entre la puntuación observada y la pronosticada",
      "Linealidad=La relación de cada predictor cuantitativo con el resultado se describe con una recta",
      "Aditividad=Los efectos de los predictores se suman sin depender unos de otros",
      "Interacción=El efecto de un predictor cambia según el valor de otro",
      "Modelo mal especificado=Sus coeficientes describen una relación que no existe en esa forma",
      "Pronóstico en una t=La media del grupo de cada persona",
      "Cuarteto de Anscombe=Un mismo coeficiente que resume patrones de dispersión muy distintos",
      "Curva en U=Patrón de residuos que indica que falta un término no lineal"
    ],
    g: [
      "En una regresión, el residuo es la distancia ___ de cada punto a la recta.|vertical|horizontal|perpendicular",
      "Según Field (2024), el supuesto más importante es la linealidad y la ___.|aditividad|normalidad|homocedasticidad",
      "En los diseños factoriales, líneas no ___ en el gráfico de medias sugieren interacción.|paralelas|crecientes|rectas",
      "Según Field (2024), transformar el ___ para lograr linealidad es útil.|predictor|resultado|residuo",
      "Si los efectos de dos predictores no se suman, el modelo debe incluir su ___.|interacción|covarianza|mediana"
    ],
    tf: [
      "Con un predictor de grupos, el modelo estima una media por grupo sin imponer ninguna forma.|V",
      "Si falla la linealidad, basta con corregir la normalidad de los residuos.|F|Un modelo mal especificado no se arregla corrigiendo la normalidad ni las varianzas: hay que cambiar el modelo.",
      "Casi todos los supuestos del modelo lineal se refieren a los errores, no a los datos en bruto.|V",
      "Si el ejercicio reduce más la ansiedad en quienes duermen bien, basta un modelo con ejercicio y sueño sin interacción.|F|Ese modelo promediaría dos efectos distintos: falla la aditividad y hay que incluir la interacción."
    ],
    q: [
      "La nota de un examen crece deprisa con las primeras horas semanales de estudio y se aplana después. Si se ajusta una recta, ¿qué ocurrirá?|Infraestimará la zona intermedia|Sobrestimará la zona intermedia|Acertará en todo el rango|La recta infraestima la nota en la zona intermedia y la sobrestima en los extremos.",
      "En un gráfico de residuos frente a pronosticados aparece una curva en U. ¿Qué indica?|Falta un término no lineal|Hay heterocedasticidad|Los errores son dependientes|La curva en U señala no linealidad. Un embudo indicaría heterocedasticidad.",
      "En una t para dos grupos, ¿qué pronostica el modelo para cada persona?|La media de su grupo|La media de toda la muestra|Su puntuación observada|En la t y el ANOVA, el residuo es la diferencia entre la puntuación y la media del grupo.",
      "¿En qué análisis pesa más el supuesto de linealidad?|Regresión y ANCOVA|t y ANOVA de un factor|Mann-Whitney y Wilcoxon|Con un predictor de grupos no se impone ninguna forma. El supuesto pesa en la regresión y el ANCOVA."
    ],
    inc: [
      "Sobre linealidad y aditividad|La aditividad exige que haya interacción|La linealidad atañe a predictores cuantitativos|Un modelo mal especificado da coeficientes engañosos|Aditividad significa que los efectos se suman. Si hay interacción, el supuesto falla y el modelo debe incluirla."
    ],
    seq: [],
    cls: [
      "Diagnóstico gráfico|Linealidad: diagrama de dispersión; curva en U en los residuos|Aditividad: gráfico de medias; líneas no paralelas"
    ] },
  { t: "Residuos normales y teorema central del límite",
    tip: "El modelo lineal no exige que los datos sean normales, sino los residuos o la distribución muestral del estimador. En regresión nunca se exige que X o Y sean normales, y en la t o el ANOVA se mira la forma dentro de cada grupo. La normalidad importa para la inferencia, no para estimar. El TCL aproxima a la normal la distribución muestral de la media al crecer n, pero no protege frente a los atípicos.",
    v: [
      "Distribución muestral=Distribución de un estimador a lo largo de muchas muestras",
      "Teorema central del límite=La media muestral se aproxima a la normal al crecer n",
      "Robusto=Procedimiento que sigue funcionando si un supuesto no se cumple del todo",
      "Box (1953)=Autor que acuñó el término para los procedimientos resistentes a fallos de supuestos",
      "Blanca et al. (2017)=Simularon un ANOVA de tres grupos con el error tipo I controlado sin normalidad",
      "Blanca et al. (2013)=En 693 variables psicológicas, el 80 % tenía asimetría y curtosis moderadas",
      "Asimetría de la media=En una población exponencial vale 2/√n",
      "Wilcox (2022)=Advierte de que el TCL no corrige la sensibilidad de la media a los atípicos"
    ],
    g: [
      "Con una población exponencial y n de 100, la asimetría teórica de la media vale ___.|0,20|0,37|0,89",
      "La normalidad hace falta para la ___, no para calcular las estimaciones.|inferencia|descripción|codificación",
      "En la t, si dos grupos difieren mucho, la distribución conjunta puede salir ___ aunque cada grupo sea normal.|bimodal|exponencial|uniforme",
      "El TCL es ___: no dice a partir de qué n exacto funciona.|asintótico|exacto|bayesiano",
      "Blanca et al. (2017) no evaluaron la potencia ni la ___.|heterocedasticidad|independencia|normalidad"
    ],
    tf: [
      "Con n mayor que 30, la normalidad de la distribución muestral está garantizada.|F|La regla es orientativa: con asimetrías fuertes o colas pesadas pueden hacer falta muestras mucho mayores.",
      "En regresión, un predictor puede ser asimétrico o tener solo dos valores.|V",
      "Si los errores son normales, la distribución muestral de la media también lo es, para cualquier n.|V",
      "Con una muestra grande, el TCL elimina el efecto de los atípicos sobre la media.|F|No lo arregla: unos pocos extremos desplazan la media e hinchan la varianza, aunque n sea grande (Wilcox, 2022)."
    ],
    q: [
      "Un investigador va a hacer una regresión y descarta su predictor, los ingresos, porque es muy asimétrico. ¿Qué le diría Field (2024)?|No se exige que X sea normal|Debe transformar antes la Y|Debe usar una prueba no paramétrica|Lo que debe ser aproximadamente normal son los residuos o la distribución muestral, nunca X o Y.",
      "Se hace un ANOVA de tres grupos con distribuciones no normales y tamaños desiguales. Según Blanca et al. (2017), ¿qué ocurre con el error tipo I?|Queda controlado|Se duplica|Se vuelve muy liberal|En su simulación, el error tipo I quedó controlado en todos los casos. No evaluaron potencia ni heterocedasticidad.",
      "¿Por qué con n de 30 y una población exponencial no conviene confiar del todo en el TCL?|La media aún conserva asimetría|La media ya es exactamente normal|El TCL solo vale con n pequeño|Con n de 30 la asimetría de la media es 0,37: se ha reducido, pero no ha desaparecido.",
      "¿Qué debe ser aproximadamente normal en una t para dos grupos?|La forma dentro de cada grupo|Todas las puntuaciones juntas|La variable que define los grupos|Los residuos son las desviaciones respecto a la media del grupo. Mezclar grupos puede crear una forma bimodal."
    ],
    inc: [
      "Sobre la normalidad en el modelo lineal|Se exige que la variable Y sea normal|Basta con residuos aproximadamente normales|Pesa más si n es pequeño y los errores muy asimétricos|Lo que importa son los residuos o la distribución muestral, no X ni Y en bruto."
    ],
    seq: [],
    cls: [
      "Qué exige el modelo lineal|Debe ser aproximadamente normal: residuos; distribución muestral del estimador|No necesita ser normal: predictor X; variable Y en bruto; puntuaciones de todos los grupos mezcladas"
    ] },
  { t: "Diagnosticar la normalidad: gráficos, índices y pruebas formales",
    tip: "Hay tres herramientas complementarias: gráficos, índices tipificados y pruebas formales. El gráfico Q-Q es el más informativo: un arco indica asimetría, y una S, colas pesadas o ligeras. La z de asimetría crece con n aunque la forma no cambie. Shapiro-Wilk es la prueba más potente, pero apenas detecta nada con n pequeño, señala desviaciones triviales con n grande y su p mayor que 0,05 no demuestra normalidad.",
    v: [
      "Gráfico Q-Q=Enfrenta los cuantiles observados con los esperados en una normal",
      "Patrón en arco=Puntos curvados respecto a la diagonal, señal de asimetría",
      "Patrón en S=Puntos alejados de la diagonal en ambos extremos, por colas pesadas o ligeras",
      "Tramos escalonados=Señal de mezcla de grupos o de valores muy repetidos",
      "z de asimetría=Índice de asimetría dividido por su error típico",
      "Corrección de Lilliefors=Ajuste de Kolmogorov-Smirnov cuando media y DT se estiman con la muestra",
      "Shapiro-Wilk=Prueba de normalidad más potente según Razali y Wah (2011)",
      "Kolmogorov-Smirnov=Compara la distribución acumulada observada con la teórica"
    ],
    g: [
      "Con muestras pequeñas, el corte orientativo para la z de asimetría es ___ en valor absoluto.|1,96|2,58|3,29",
      "Según Razali y Wah (2011), tras Shapiro-Wilk la prueba más potente es ___.|Anderson-Darling|Lilliefors|Kolmogorov-Smirnov",
      "El error típico de la curtosis es aproximadamente el ___ del de la asimetría.|doble|triple|cuádruple",
      "En SPSS, las pruebas de normalidad se piden en Analizar, Estadísticos descriptivos, ___.|Explorar|Frecuencias|Descriptivos",
      "Con n de 400 y la misma asimetría de 0,62, la z de asimetría sería ___.|5,08|1,66|2,80"
    ],
    tf: [
      "Un p mayor que 0,05 en Shapiro-Wilk demuestra que la población es normal.|F|No demuestra normalidad, y su p tampoco es la probabilidad de que los datos sean normales.",
      "Con muestras muy grandes importan más el índice y el gráfico que la z de asimetría.|V",
      "SPSS aplica la corrección de Lilliefors a Kolmogorov-Smirnov.|V",
      "Las pruebas formales de normalidad tienen más potencia con muestras pequeñas, cuando la normalidad más importa.|F|Es al revés: con n pequeño apenas detectan desviaciones, y con n grande señalan desviaciones triviales."
    ],
    q: [
      "En un grupo de 36 estudiantes, la asimetría de la latencia de sueño es 1,10 con un error típico de 0,393. ¿Cuánto vale su z y qué indica?|2,80, cola derecha apreciable|1,66, dentro de lo esperable|0,43, forma casi simétrica|1,10 / 0,393 ≈ 2,80, por encima de 1,96 y de 2,58: hay cola derecha, esperable en una latencia.",
      "Un gráfico Q-Q muestra los puntos alejados de la diagonal en ambos extremos, en forma de S. ¿Qué sugiere?|Colas más pesadas o ligeras|Una asimetría positiva|Una mezcla de dos grupos|La S indica colas distintas de las de la normal. El arco indica asimetría, y los escalones, mezcla de grupos.",
      "¿Por qué la z de asimetría pierde utilidad con muestras grandes?|Su error típico disminuye con n|Su error típico aumenta con n|La asimetría crece con n|Con n grande, una asimetría mínima da una z enorme. Por eso se usan cortes más laxos o se mira el índice.",
      "¿Qué hace la corrección de Lilliefors?|Ajusta K-S a parámetros estimados|Aumenta la potencia de Shapiro-Wilk|Corrige la asimetría de los datos|Kolmogorov-Smirnov la necesita si la media y la desviación típica se estiman con la misma muestra."
    ],
    inc: [
      "Sobre las pruebas formales de normalidad|Su p indica la probabilidad de normalidad|Contrastan que la población de origen es normal|Con n grande detectan desviaciones triviales|Su p no es la probabilidad de que los datos sean normales, y un p mayor que 0,05 no demuestra normalidad."
    ],
    seq: [
      "Diagnóstico de la asimetría con z|Obtener la asimetría y su error típico>Dividir la asimetría por su error típico>Comparar con el corte según el tamaño muestral>Mirar el Q-Q y el diagrama de caja antes de decidir"
    ],
    cls: [
      "Herramienta de diagnóstico|Gráficos: histograma; diagrama de caja; gráfico Q-Q|Índices: z de asimetría; z de curtosis|Pruebas formales: Shapiro-Wilk; Kolmogorov-Smirnov; Anderson-Darling"
    ] }
] },
{ n: 8, t: "Varianzas, independencia y qué hacer cuando fallan los supuestos", cap: 3, pir: "media", mods: [
  { t: "Varianzas iguales y la prueba de Levene",
    tip: "La homocedasticidad exige igual varianza de los residuos en todos los niveles del predictor. Si falla, no cambian las estimaciones, pero sí sus errores típicos, y con ellos los p y los IC. Con tamaños distintos, si el grupo pequeño es el más variable, Student se vuelve liberal, y si lo es el grande, conservadora. Con n iguales la F es relativamente robusta. Levene tiene los mismos límites que las pruebas de normalidad, por eso se recomienda usar Welch directamente.",
    v: [
      "Homocedasticidad=Igual varianza de los residuos en todos los niveles del predictor",
      "Heterocedasticidad=Varianza de los residuos distinta según el nivel del predictor",
      "Errores esféricos=Etiqueta de Field que agrupa homocedasticidad e independencia",
      "Varianza combinada=Estimación de Student ponderada por los gl de cada grupo",
      "Prueba liberal=Rechaza H₀ verdadera más a menudo de lo que indica α",
      "Prueba conservadora=Rechaza H₀ verdadera menos de lo nominal y pierde potencia",
      "Fmax de Hartley=Varianza mayor dividida por la menor, solo orientativa",
      "Prueba de Levene=ANOVA sobre las desviaciones absolutas respecto a la media de cada grupo"
    ],
    g: [
      "La variante de Brown y Forsythe (1974) usa la ___ en lugar de la media.|mediana|moda|media recortada",
      "Con varianzas de 144 y 36, la Fmax de Hartley vale ___.|4|2|108",
      "En la simulación ilustrativa del caso A, Student rechazó H₀ verdadera en torno al ___ de las veces.|18 %|5 %|10 %",
      "Box (1954) anticipó que la F es relativamente robusta ante varianzas desiguales si los n son ___.|iguales|grandes|pequeños",
      "Un ___ en el gráfico de residuos frente a pronosticados indica heterocedasticidad.|embudo|arco|escalón"
    ],
    tf: [
      "Con heterocedasticidad cambian las estimaciones de las medias, pero no sus errores típicos.|F|Es al revés: las estimaciones no cambian, pero sí sus errores típicos, y con ellos los p y los IC.",
      "Los errores esféricos de Field son la misma condición que la esfericidad del ANOVA de medidas repetidas.|F|Son cosas distintas: los errores esféricos agrupan homocedasticidad e independencia.",
      "Con tamaños de grupo iguales, los errores típicos de Student y de Welch coinciden.|V",
      "La tabla de Levene que da Explorar en SPSS incluye una fila basada en la mediana.|V"
    ],
    q: [
      "Una investigadora compara un grupo de 10 personas con DT de 6 y otro de 40 con DT de 12 mediante la t de Student. ¿Qué cabe esperar?|Prueba conservadora con menos potencia|Prueba liberal con más falsos positivos|Error tipo I igual al nominal|El grupo grande es el más variable: la varianza combinada se le parece y Student sobrestima el error típico.",
      "¿Sobre qué datos hace un ANOVA la prueba de Levene?|Desviaciones absolutas respecto a la media|Rangos de las puntuaciones de cada grupo|Residuos consecutivos ordenados en el tiempo|Si un grupo es más disperso, sus desviaciones absolutas respecto a la media serán mayores.",
      "¿En qué situación es más dañina la heterocedasticidad?|Con varianzas y tamaños distintos|Con varianzas distintas y n iguales|Con varianzas iguales y n distintos|El peligro está en combinar varianzas y tamaños de grupo distintos (Zimmerman, 2004).",
      "¿Por qué se recomienda usar Welch directamente en lugar de decidir con Levene?|Levene falla cuando más importa|Levene solo evalúa la normalidad|Welch exige varianzas iguales|Con grupos pequeños y desiguales Levene apenas tiene potencia, y con muestras grandes señala diferencias triviales."
    ],
    inc: [
      "Sobre la prueba de Levene|Evalúa la normalidad de los residuos|Su H₀ es la igualdad de varianzas poblacionales|Su p mayor que 0,05 no demuestra varianzas iguales|Levene evalúa la igualdad de varianzas. Atribuirle la normalidad es una trampa típica."
    ],
    seq: [],
    cls: [
      "Efecto sobre la t de Student|Liberal: grupo pequeño más variable; error típico subestimado|Conservadora: grupo grande más variable; pérdida de potencia"
    ] },
  { t: "Errores independientes y Durbin-Watson",
    tip: "La independencia exige que el residuo de una persona no informe sobre el de otra. Se rompe por agrupamiento, medidas repetidas tratadas como independientes, dependencia temporal o contaminación. Con dependencia positiva, los errores típicos salen demasiado pequeños y el error tipo I se infla, y ni una muestra grande ni una transformación lo arreglan. Durbin-Watson, de 0 a 4, mide la autocorrelación entre residuos consecutivos.",
    v: [
      "Independencia de los errores=El residuo de una observación no informa sobre el de otra",
      "Agrupamiento=Casos que comparten influencias, como alumnos de una misma clase",
      "Dependencia temporal=En registros diarios, el valor de un día se parece al del anterior",
      "Contaminación=Participantes de una misma sesión que comentan las tareas entre ellos",
      "Durbin-Watson=Estadístico de autocorrelación entre residuos consecutivos, de 0 a 4",
      "DW cercano a 2=Sin autocorrelación apreciable",
      "DW por debajo de 2=Autocorrelación positiva, con residuos consecutivos parecidos",
      "DW por encima de 2=Autocorrelación negativa, con residuos consecutivos que alternan"
    ],
    g: [
      "Con dependencia positiva, los IC salen demasiado ___.|estrechos|anchos|asimétricos",
      "Según la regla orientativa de Field, es preocupante un DW menor que 1 o mayor que ___.|3|2|4",
      "DW equivale aproximadamente a 2(1 − r₁), donde r₁ es la correlación entre cada residuo y el ___.|anterior|pronóstico|promedio",
      "En el ejemplo del estrés registrado durante diez días, DW fue de ___.|0,22|1,92|3,10",
      "DW solo detecta la dependencia entre casos consecutivos, no la que procede del ___.|agrupamiento|registro diario|orden de recogida"
    ],
    tf: [
      "Con una muestra suficientemente grande, la falta de independencia deja de ser un problema.|F|El tamaño muestral no la protege: con dependencia, añadir casos aporta menos información de la que aparenta.",
      "Si los casos están ordenados por apellido, el valor de DW depende de ese orden arbitrario.|V",
      "Un DW próximo a 2 indica ausencia de autocorrelación apreciable.|V",
      "Una transformación logarítmica corrige la dependencia entre los errores.|F|Ninguna transformación la corrige: la solución está en el modelo, como medidas repetidas o modelos mixtos."
    ],
    q: [
      "En una regresión con registros diarios, la correlación entre cada residuo y el anterior es de 0,5. ¿Qué DW cabe esperar aproximadamente?|1|2|0,5|DW ≈ 2(1 − r₁), es decir, 2 × 0,5, que da 1: autocorrelación positiva en el límite de lo preocupante.",
      "Se evalúa un programa en 20 aulas y se analiza a los 500 alumnos como casos independientes. ¿Qué problema principal hay?|Errores típicos demasiado pequeños|Errores típicos demasiado grandes|Pérdida de potencia por exceso de casos|El agrupamiento crea dependencia positiva: se trata como nuevo lo que es en parte repetido y el error tipo I se infla.",
      "¿Cuál es la primera herramienta para diagnosticar la independencia?|Conocer el diseño|El estadístico de Durbin-Watson|La prueba de Levene|Lo primero es saber quién se midió, cuándo, dónde y con quién. DW solo sirve si el orden de los casos tiene sentido.",
      "¿Qué solución corresponde a unos errores no independientes por agrupamiento?|Un modelo que incluya el agrupamiento|Una transformación de la variable resultado|Eliminar los casos más parecidos|La solución está en el modelo: modelos mixtos, pruebas de medidas repetidas o modelos para series temporales."
    ],
    inc: [
      "Sobre Durbin-Watson|Detecta la dependencia por agrupamiento|Toma valores entre 0 y 4|Exige que el orden de los casos signifique algo|DW solo detecta la dependencia entre casos consecutivos, no la que procede del agrupamiento."
    ],
    seq: [],
    cls: [
      "Supuesto que evalúa|Normalidad: Shapiro-Wilk; Kolmogorov-Smirnov|Varianzas iguales: Levene; Brown-Forsythe|Independencia: Durbin-Watson"
    ] },
  { t: "Valores atípicos y transformaciones",
    tip: "La media, la DT, la correlación y la pendiente son muy sensibles a unos pocos extremos. Se detectan con z mayor que 3,29 en valor absoluto, el diagrama de caja y, en regresión, medidas de influencia como la distancia de Cook. Un atípico puede enmascararse al hinchar la DT. Qué hacer depende de su origen, con criterios fijados antes e informando con y sin esos casos. Transformar el resultado cambia la hipótesis y rara vez compensa.",
    v: [
      "Valor atípico=Observación muy alejada del resto",
      "Enmascaramiento=El propio extremo hincha la DT y reduce su z",
      "Criterio del diagrama de caja=Más allá de 1,5 veces el rango intercuartílico desde los cuartiles",
      "Distancia de Cook=Medida de influencia de un caso en la regresión",
      "Transformación=Aplicar la misma función a todos los valores de una variable",
      "Logaritmo=Para asimetría positiva fuerte, sin admitir 0 ni negativos",
      "Raíz cuadrada=Para asimetría positiva moderada y recuentos",
      "Inversa=Para asimetría positiva muy fuerte, invirtiendo el orden de los valores"
    ],
    g: [
      "En los datos de mensajes de texto, la media es 19,33 y la mediana, ___.|13|15|19",
      "El valor 80 de los mensajes tiene una z de solo ___, por debajo de 3,29.|2,91|3,54|1,96",
      "Quitar el valor 80 baja la media de los mensajes de 19,33 a ___.|13,82|13,38|13,75",
      "Con log(X), comparar medias equivale a comparar medias ___ en la escala original.|geométricas|aritméticas|armónicas",
      "En los mensajes, la asimetría original de 2,60 baja con el logaritmo a ___.|0,75|1,82|1,25"
    ],
    tf: [
      "Eliminar atípicos hasta que el resultado sea significativo es una forma de p-hacking.|V",
      "Un valor legítimo pero extremo debe eliminarse siempre para no distorsionar la media.|F|Se conserva y se usan métodos robustos o un análisis de sensibilidad. Eliminar se reserva a errores no corregibles.",
      "Sigue en debate si las transformaciones de la variable resultado deben sustituirse por métodos robustos.|V",
      "Según Field (2024), transformar la variable resultado para corregir la heterocedasticidad suele compensar.|F|Rara vez compensa: es útil transformar el predictor para lograr linealidad, pero con el resultado suelen ser mejores los métodos robustos."
    ],
    q: [
      "En una base de datos aparece una edad de 233 años por un dígito duplicado. ¿Qué es lo razonable?|Corregirla si se puede comprobar|Conservarla y usar una media recortada|Excluirla con un criterio previo de población|Es un error de registro: se corrige si se puede comprobar y, si no, se elimina el dato.",
      "En un estudio con población no clínica, un participante indica estar en tratamiento por el mismo problema que se mide. ¿Qué procede?|Excluirlo con un criterio fijado antes|Conservarlo y usar métodos robustos|Corregir su puntuación|Es un caso ajeno a la población: se excluye con un criterio fijado de antemano.",
      "¿Qué inconveniente tiene transformar la variable resultado?|Cambia la hipótesis contrastada|Elimina los valores atípicos|Impide calcular el tamaño del efecto|Comparar medias de log(X) es comparar medias geométricas, y los resultados quedan en unidades transformadas.",
      "¿Qué transformación invierte el orden de los valores, por lo que conviene reflejar la variable?|La inversa|El logaritmo|La raíz cuadrada|La inversa, 1/X, se usa con asimetría positiva muy fuerte e invierte el orden de los valores."
    ],
    inc: [
      "Sobre los atípicos|Basta la regla de z mayor que 3,29 para detectarlos siempre|Los criterios de exclusión se fijan antes de ver los resultados|Si la decisión es discutible, se informa con y sin esos casos|Con muestras pequeñas el propio atípico hincha la DT y se enmascara: conviene mirar también el diagrama de caja."
    ],
    seq: [],
    cls: [
      "Origen del atípico|Corregir o eliminar: error de registro; edad de 233 años|Excluir con criterio previo: caso ajeno a la población; persona en tratamiento en una muestra no clínica|Conservar con métodos robustos: valor legítimo pero extremo; 80 mensajes reales al día"
    ] },
  { t: "Métodos robustos, bootstrap y alternativas no paramétricas",
    tip: "Cuando los supuestos fallan de forma relevante, hay mejores opciones que forzar los datos: medias recortadas o winsorizadas con la prueba de Yuen, M-estimadores, errores típicos HC3 y bootstrap (Efron, 1979). Las pruebas no paramétricas tienen supuestos propios y contrastan otra hipótesis. Elegir la prueba según Shapiro-Wilk y Levene altera el error tipo I (Zimmerman, 2004): lo recomendado es planificar, usar Welch por defecto y revisar los residuos.",
    v: [
      "Media recortada al 20 %=Media tras eliminar el 20 % de valores más bajos y el 20 % más altos",
      "Winsorizar=Igualar los extremos al valor más bajo o más alto que queda tras el recorte",
      "Prueba de Yuen=Compara dos medias recortadas sin suponer varianzas iguales",
      "M-estimadores=Dan menos peso a los valores cuanto más se alejan del centro",
      "HC3=Errores típicos robustos a la heterocedasticidad en regresión",
      "Bootstrap=Remuestreo con reposición para aproximar la distribución de un estadístico (Efron, 1979)",
      "IC BCa=Intervalo bootstrap que corrige el sesgo y la asimetría",
      "Procedimiento en dos etapas=Elegir la prueba según una prueba preliminar de supuestos"
    ],
    g: [
      "En los datos de mensajes, la media recortada al 20 % es ___.|13,38|13,75|19,33",
      "El IC ___ toma los percentiles 2,5 y 97,5 de la distribución bootstrap.|percentil|BCa|asintótico",
      "Los errores típicos HC3 mantienen las ___ de mínimos cuadrados y corrigen sus errores típicos.|pendientes|varianzas|medianas",
      "Mann-Whitney evalúa si la probabilidad de que X supere a Y vale ___, no la igualdad de medianas.|0,5|0|1",
      "Zimmerman (2004) recomienda aplicar la prueba de varianzas ___ de forma incondicional.|separadas|combinadas|iguales"
    ],
    tf: [
      "Recortar el 20 % de cada extremo equivale a eliminar los datos que molestan.|F|Es un estimador del centro definido de antemano, no una forma de descartar datos incómodos.",
      "El bootstrap no hace milagros con muestras muy pequeñas o con datos no independientes.|V",
      "Mann-Whitney y Kruskal-Wallis también se ven afectadas por la heterocedasticidad.|V",
      "El procedimiento en dos etapas mantiene el error tipo I de la prueba final en su nivel nominal.|F|Lo altera, porque la elección depende de pruebas preliminares con potencia variable (Zimmerman, 2004)."
    ],
    q: [
      "Un equipo compara dos grupos con colas pesadas y algunos extremos legítimos, y quiere contrastar medias recortadas sin suponer varianzas iguales. ¿Qué prueba corresponde?|Yuen|Levene|Wilcoxon|La prueba de Yuen combina el recorte con un error típico adecuado y no supone varianzas iguales.",
      "¿Qué hace falta para que Mann-Whitney permita hablar de medianas?|Igual forma y dispersión|Más de 30 casos por grupo|Distribuciones normales|Mann-Whitney compara medianas solo si las distribuciones difieren únicamente en su posición.",
      "¿Qué añade el IC BCa al IC percentil?|Corrige el sesgo y la asimetría|Usa menos remuestras bootstrap|Supone una distribución normal|El percentil toma los percentiles 2,5 y 97,5. El BCa corrige además el sesgo y la asimetría.",
      "Un método robusto y uno clásico dan resultados muy distintos con los mismos datos. ¿Qué procede?|Comunicar la discrepancia|Informar solo el significativo|Elegir el de menor valor p|La estrategia se decide antes de ver los resultados, y una discrepancia grande debe comunicarse."
    ],
    inc: [
      "Sobre los métodos robustos|Los M-estimadores eliminan los extremos|La media winsorizada de los mensajes es 13,75|Los HC3 corrigen errores típicos en regresión|Los M-estimadores no eliminan los extremos: les dan menos peso cuanto más se alejan del centro."
    ],
    seq: [
      "Flujo recomendado ante los supuestos|Planificar el análisis según el diseño y la pregunta>Usar Welch por defecto>Revisar los gráficos de residuos>Aplicar un remedio justificado si hay atípicos o colas pesadas>Informar el tamaño del efecto con su IC"
    ],
    cls: [
      "Tipo de alternativa|Robusta: media recortada; prueba de Yuen; M-estimadores; errores típicos HC3|No paramétrica: Mann-Whitney; Kruskal-Wallis; Wilcoxon; Friedman"
    ] }
] }
);
