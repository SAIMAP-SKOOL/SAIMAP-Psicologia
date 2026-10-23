# Apéndices

## Formulario

| Concepto | Fórmula | Unidad |
| --- | --- | --- |
| Frecuencia relativa / porcentaje | pᵢ = nᵢ / n · %ᵢ = pᵢ × 100 | 5 |
| Media | x̄ = Σxᵢ / n | 7 |
| Media con datos agrupados | x̄ = Σnᵢxᵢ / n (xᵢ = punto medio del intervalo) | 7 |
| Varianza (con n) | S² = Σ(xᵢ − x̄)² / n | 8 |
| Cuasivarianza (con n − 1) | s²ₙ₋₁ = Σ(xᵢ − x̄)² / (n − 1) | 8 |
| Desviación típica | S = √S² | 8 |
| Coeficiente de variación | CV = (S / x̄) × 100 | 8 |
| Recorrido intercuartílico | RIC = Q₃ − Q₁ | 8 |
| Transformación lineal Y = a + bX | ȳ = a + b·x̄ · Sy = (valor absoluto de b)·Sx | 8 |
| Puntuación típica | z = (x − x̄) / S | 9 |
| Escalas derivadas | T = 50 + 10z · CI = 100 + 15z | 9 |
| Límites para atípicos | Q₁ − 1,5·RIC y Q₃ + 1,5·RIC | 9 |
| Regla de Laplace | P(A) = casos favorables / casos posibles | 10 |
| Complementario | P(Ā) = 1 − P(A) | 10 |
| Regla de la suma | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | 10 |
| Probabilidad condicionada | P(A ∣ B) = P(A ∩ B) / P(B) | 11 |
| Regla del producto | P(A ∩ B) = P(A) · P(B ∣ A) | 11 |
| Independencia | P(A ∩ B) = P(A) · P(B) | 11 |
| Teorema de Bayes | P(A ∣ B) = P(B ∣ A) · P(A) / P(B) | 11 |
| Covarianza | Sxy = Σ(xᵢ − x̄)(yᵢ − ȳ) / n | 13 |
| Correlación de Pearson | r = Sxy / (Sx · Sy) | 13 |
| Coeficiente de determinación | r² | 13 |
| Frecuencia esperada | eᵢⱼ = (total fila × total columna) / N | 14 |
| Chi cuadrado | χ² = Σ(oᵢⱼ − eᵢⱼ)² / eᵢⱼ · gl = (f − 1)(c − 1) | 14 |
| Phi y V de Cramer | φ = √(χ² / N) · V = √(χ² / (N · (k − 1))), k = mín(f, c) | 14 |
| Error típico de la media | σx̄ = σ / √n | 15 |
| Tipificación de la media muestral | z = (x̄ − μ) / (σ / √n) | 15 |
| Intervalo de confianza (σ conocida) | x̄ ± z₁₋α/₂ · σ / √n | 16 |
| d de Cohen (dos grupos) | d = (x̄₁ − x̄₂) / s combinada | 16 |
| Potencia | 1 − β | 16 |

En las fórmulas de varianza, covarianza y correlación, los manuales españoles no usan la misma notación. Lo importante es saber si se divide por n o por n − 1: la correlación r da el mismo valor con cualquiera de los dos criterios, siempre que se use el mismo en el numerador y en el denominador.

## Tabla de la distribución normal tipificada

Probabilidad acumulada P(Z ≤ z) para valores positivos de z. Para valores negativos, se usa la simetría: P(Z ≤ −z) = 1 − P(Z ≤ z).

| z | P(Z ≤ z) | z | P(Z ≤ z) |
| --- | --- | --- | --- |
| 0,0 | 0,5000 | 1,6 | 0,9452 |
| 0,1 | 0,5398 | 1,7 | 0,9554 |
| 0,2 | 0,5793 | 1,8 | 0,9641 |
| 0,3 | 0,6179 | 1,9 | 0,9713 |
| 0,4 | 0,6554 | 2,0 | 0,9772 |
| 0,5 | 0,6915 | 2,1 | 0,9821 |
| 0,6 | 0,7257 | 2,2 | 0,9861 |
| 0,7 | 0,7580 | 2,3 | 0,9893 |
| 0,8 | 0,7881 | 2,4 | 0,9918 |
| 0,9 | 0,8159 | 2,5 | 0,9938 |
| 1,0 | 0,8413 | 2,6 | 0,9953 |
| 1,1 | 0,8643 | 2,7 | 0,9965 |
| 1,2 | 0,8849 | 2,8 | 0,9974 |
| 1,3 | 0,9032 | 2,9 | 0,9981 |
| 1,4 | 0,9192 | 3,0 | 0,9987 |
| 1,5 | 0,9332 | | |

| Valores críticos más usados | z |
| --- | --- |
| 90 % central (α = 0,10 bilateral) o α = 0,05 unilateral | 1,645 |
| 95 % central (α = 0,05 bilateral) | 1,96 |
| 99 % central (α = 0,01 bilateral) | 2,576 |

## Errores de interpretación frecuentes

| Idea errónea | Corrección | Unidad |
| --- | --- | --- |
| Con la estadística se puede demostrar cualquier cosa | Se puede engañar con malos usos, que se detectan precisamente con conocimientos de estadística | 1 |
| Si un resultado no se replica, era un fraude | Hay muchas causas: azar, muestras pequeñas, diferencias de procedimiento, sesgos de publicación | 2 |
| Si una variable usa números, es cuantitativa | El nivel de medida depende de qué representan los números, no de su forma | 3 |
| Una muestra muy grande siempre es representativa | El tamaño no corrige un procedimiento de muestreo sesgado | 4 |
| Un porcentaje dice lo mismo con cualquier n | Con n pequeño, un porcentaje es muy inestable; hay que dar también la frecuencia | 5 |
| Percentil 80 = 80 % de aciertos | Indica el porcentaje de personas que quedan por debajo | 6 |
| La media siempre es el mejor resumen | Con asimetría o atípicos, la mediana suele representar mejor | 7 |
| La varianza con n está mal calculada | Describe la muestra; la de n − 1 estima la varianza de la población | 8 |
| Tipificar normaliza los datos | La z conserva la forma de la distribución | 9 |
| Tras muchos rojos, toca negro (falacia del jugador) | Los sucesos independientes no tienen memoria | 10 |
| Sensibilidad del 90 % = 90 % de probabilidad de tener el trastorno si se da positivo | Eso es el valor predictivo positivo, que depende de la prevalencia | 11 |
| Correlación implica causalidad | La asociación puede deberse a terceras variables, al azar o a causalidad inversa | 12 |
| r = 0 significa que no hay relación | Indica ausencia de relación lineal; puede haberla curvilínea | 13 |
| Más χ², relación más fuerte | χ² crece con N; la fuerza se mide con φ o V de Cramer | 14 |
| Con n ≥ 30 los datos se vuelven normales | Lo que se aproxima a la normal es la distribución muestral de la media, no los datos | 15 |
| p es la probabilidad de que H₀ sea cierta | p es la probabilidad de un resultado igual o más extremo si H₀ fuera cierta | 16 |
| p > 0,05 demuestra que no hay efecto | Un resultado no significativo no prueba la ausencia de efecto | 16 |
| Significativo = importante | La importancia práctica se valora con el tamaño del efecto y su intervalo | 16 |

## Bibliografía

### Manuales de referencia

Botella, J., Suero, M. y Ximénez, C. (2012). *Análisis de datos en psicología I*. Pirámide.

Cumming, G. y Calin-Jageman, R. (2024). *Introduction to the new statistics: Estimation, open science, and beyond* (2.ª ed.). Routledge.

Field, A. (2024). *Discovering statistics using IBM SPSS Statistics* (6.ª ed.). Sage.

Navarro, D. J. y Foxcroft, D. R. (2025). *Learning statistics with jamovi: A tutorial for beginners in statistical analysis*. Open Book Publishers. https://doi.org/10.11647/OBP.0333

Pardo, A., Ruiz, M. A. y San Martín, R. (2009). *Análisis de datos en ciencias sociales y de la salud I* (2.ª ed.). Síntesis.

Pardo, A. y San Martín, R. (2010). *Análisis de datos en ciencias sociales y de la salud II*. Síntesis.

### Artículos y obras citados

Amrhein, V., Greenland, S. y McShane, B. (2019). Scientists rise up against statistical significance. *Nature, 567*, 305–307. https://doi.org/10.1038/d41586-019-00857-9

Anscombe, F. J. (1973). Graphs in statistical analysis. *The American Statistician, 27*(1), 17–21. https://doi.org/10.1080/00031305.1973.10478966

Appelbaum, M., Cooper, H., Kline, R. B., Mayo-Wilson, E., Nezu, A. M. y Rao, S. M. (2018). Journal article reporting standards for quantitative research in psychology: The APA Publications and Communications Board task force report. *American Psychologist, 73*(1), 3–25. https://doi.org/10.1037/amp0000191

Benjamin, D. J. et al. (2018). Redefine statistical significance. *Nature Human Behaviour, 2*, 6–10. https://doi.org/10.1038/s41562-017-0189-z

Benjamini, Y. et al. (2021). The ASA president's task force statement on statistical significance and replicability. *The Annals of Applied Statistics, 15*(3), 1084–1085. https://doi.org/10.1214/21-AOAS1501

Cohen, J. (1988). *Statistical power analysis for the behavioral sciences* (2.ª ed.). Lawrence Erlbaum.

Cumming, G. (2014). The new statistics: Why and how. *Psychological Science, 25*(1), 7–29. https://doi.org/10.1177/0956797613504966

Greenland, S., Senn, S. J., Rothman, K. J., Carlin, J. B., Poole, C., Goodman, S. N. y Altman, D. G. (2016). Statistical tests, P values, confidence intervals, and power: A guide to misinterpretations. *European Journal of Epidemiology, 31*, 337–350. https://doi.org/10.1007/s10654-016-0149-3

Klein, R. A. et al. (2018). Many Labs 2: Investigating variation in replicability across samples and settings. *Advances in Methods and Practices in Psychological Science, 1*(4), 443–490. https://doi.org/10.1177/2515245918810225

Lakens, D. et al. (2018). Justify your alpha. *Nature Human Behaviour, 2*, 168–171. https://doi.org/10.1038/s41562-018-0311-x

Open Science Collaboration (2015). Estimating the reproducibility of psychological science. *Science, 349*(6251), aac4716. https://doi.org/10.1126/science.aac4716

Simmons, J. P., Nelson, L. D. y Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science, 22*(11), 1359–1366. https://doi.org/10.1177/0956797611417632

Stevens, S. S. (1946). On the theory of scales of measurement. *Science, 103*(2684), 677–680. https://doi.org/10.1126/science.103.2684.677

Wasserstein, R. L. y Lazar, N. A. (2016). The ASA statement on p-values: Context, process, and purpose. *The American Statistician, 70*(2), 129–133. https://doi.org/10.1080/00031305.2016.1154108

Wasserstein, R. L., Schirm, A. L. y Lazar, N. A. (2019). Moving to a world beyond "p < 0.05". *The American Statistician, 73*(sup1), 1–19. https://doi.org/10.1080/00031305.2019.1583913

### Software

IBM SPSS Statistics (IBM Corp.); jamovi (The jamovi project, https://www.jamovi.org); JASP (JASP Team, https://jasp-stats.org); R (R Core Team, https://www.r-project.org). jamovi, JASP y R son gratuitos y de código abierto.

## Créditos de las ilustraciones

| Figura | Archivo | Autor y fuente | Licencia |
| --- | --- | --- | --- |
| Pioneros de la estadística | pioneros.jpg | Retratos de F. Galton, K. Pearson (1910) y W. S. Gosset: autores desconocidos; R. A. Fisher (1952): Barry Eagel. Wikimedia Commons. Montaje y rótulos: SAIMAP | Dominio público; Fisher: CC BY-SA 4.0 |
| Diagrama de las causas de mortalidad en el ejército de Oriente | nightingale.jpg | Florence Nightingale (1858). Wikimedia Commons | Dominio público |
| Mapa del brote de cólera del Soho (detalle) | snow.jpg | John Snow (1855), *On the mode of communication of cholera*, 2.ª ed. Wikimedia Commons. Recorte: SAIMAP | Dominio público |
| Máquina de Galton | galton-box.jpg | Fotografía de Rodrigo Argenton; pieza de Estes Objethos Atelier. Wikimedia Commons | CC BY-SA 4.0 |
| Resto de figuras (gráficos, diagramas y simulaciones) | — | Elaboración propia (SAIMAP) con Python y matplotlib | Libre uso educativo con atribución |

Las imágenes con licencia CC BY-SA 4.0 se reutilizan bajo la misma licencia; sus modificaciones (recorte y montaje) se distribuyen también bajo CC BY-SA 4.0.
