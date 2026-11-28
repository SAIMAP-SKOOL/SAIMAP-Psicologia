# Apéndices

## Formulario

**Dos medias independientes**

> Student: t = (M₁ − M₂) / √[s²ₚ(1/n₁ + 1/n₂)], con s²ₚ = [(n₁ − 1)s₁² + (n₂ − 1)s₂²] / (n₁ + n₂ − 2) y gl = n₁ + n₂ − 2

> Welch: t = (M₁ − M₂) / √(s₁²/n₁ + s₂²/n₂), con gl de Welch-Satterthwaite (normalmente no enteros)

> d = (M₁ − M₂) / sₚ = t·√(1/n₁ + 1/n₂)  ·  g = d·[1 − 3/(4(n₁ + n₂) − 9)]

**Dos medidas relacionadas**

> t = M_D / (s_D/√n), con gl = n − 1  ·  d_z = M_D / s_D = t/√n  ·  d_av = M_D / [(s₁ + s₂)/2]  ·  d_rm = d_z·√[2(1 − r)]

**ANOVA de un factor (k grupos, N casos)**

> SC_T = SC_entre + SC_intra  ·  gl: k − 1 y N − k  ·  MC = SC/gl  ·  F = MC_entre / MC_intra

> η² = SC_entre / SC_T  ·  ω² = [SC_entre − (k − 1)MC_intra] / (SC_T + MC_intra)  ·  f = √[η²/(1 − η²)]

> Tasa de error por familia (m comparaciones independientes): FWER = 1 − (1 − α)ᵐ  ·  Bonferroni: α/m

**Medidas repetidas y diseños factoriales**

> Error en medidas repetidas: gl = (k − 1)(n − 1)  ·  gl corregidos = ε × gl, con 1/(k − 1) ≤ ε ≤ 1

> Interacción A × B: gl = (a − 1)(b − 1)  ·  η²p = SC_efecto / (SC_efecto + SC_error)

**Regresión lineal**

> Ŷ = b₀ + b₁X₁ + … + b_kX_k  ·  simple: b₁ = r·(s_Y/s_X), b₀ = Ȳ − b₁X̄  ·  β = b·(s_X/s_Y)

> R² = SC_reg / SC_T  ·  R²_aj = 1 − (1 − R²)(n − 1)/(n − k − 1)  ·  F = (R²/k) / [(1 − R²)/(n − k − 1)], gl (k, n − k − 1)

> t de un coeficiente = b / ET_b, gl = n − k − 1  ·  VIF_j = 1/(1 − R²_j)  ·  tolerancia = 1 − R²_j  ·  leverage medio = (k + 1)/n

**Puntos de corte orientativos de Cohen (1988; 1992)**

| Índice | Pequeño | Mediano | Grande |
| --- | --- | --- | --- |
| d | 0,2 | 0,5 | 0,8 |
| r | 0,1 | 0,3 | 0,5 |
| f | 0,10 | 0,25 | 0,40 |
| η² | 0,01 | 0,06 | 0,14 |
| f² | 0,02 | 0,15 | 0,35 |

Cohen los propuso como último recurso; deben interpretarse según el contexto y la relevancia práctica.

## Estudios y datos clave

| Estudio | Qué hizo | Resultado principal |
| --- | --- | --- |
| Cohen (1962) | Revisó la potencia de los estudios de una revista de psicología de 1960 | Potencia mediana ≈ 0,46–0,48 para efectos medianos |
| Sedlmeier y Gigerenzer (1989) | Repitió el análisis con una revista de 1984 | Potencia mediana 0,37; solo 2 de 64 experimentos mencionaban la potencia |
| Simmons, Nelson y Simonsohn (2011) | Simulación de cuatro decisiones flexibles del investigador | Combinadas, los falsos positivos pasan del 5 % al 60,7 % |
| Button et al. (2013) | 730 estudios de 49 metaanálisis de neurociencia | Potencia mediana del 21 % |
| Open Science Collaboration (2015) | Réplica de 100 estudios de psicología | 97 % de originales significativos frente al 36 % de réplicas; r medio de 0,403 a 0,197 |
| Szucs e Ioannidis (2017, corregido) | 26.841 resultados de 3.801 artículos | Potencia mediana 0,12 / 0,46 / 0,78 para efectos pequeños / medianos / grandes |
| Klein et al. (2018), Many Labs 2 | 28 efectos en 125 muestras de 36 países (N = 15.305) | 54 % significativos; mediana de d de 0,60 a 0,15 |
| Zimmerman (2004) | Simulación del procedimiento «Levene y después Student o Welch» | La prueba previa altera el error tipo I; mejor Welch de forma incondicional |
| Razali y Wah (2011) | Potencia de cuatro pruebas de normalidad | Shapiro-Wilk > Anderson-Darling > Lilliefors > Kolmogorov-Smirnov; todas poco potentes con n pequeño |
| Delacre, Lakens y Leys (2017) | Simulación de Student frente a Welch | Welch controla mejor el error tipo I y apenas pierde potencia: usarla por defecto |
| Blanca et al. (2017) | Simulación Monte Carlo del ANOVA con distribuciones no normales | La F mantuvo el error tipo I en todas las condiciones estudiadas (no evaluó potencia ni heterocedasticidad) |
| Nieuwenhuis, Forstmann y Wagenmakers (2011) | 513 artículos de neurociencia | En la mitad de los casos en que era posible, se comparaban efectos sin contrastar la interacción |
| Anscombe (1973) | Cuatro conjuntos de datos construidos | Misma r ≈ 0,82 y misma recta con nubes de puntos muy distintas |

## Mitos y correcciones

| Mito | Corrección |
| --- | --- |
| «p es la probabilidad de que H₀ sea cierta» | p es la probabilidad de datos tan extremos o más si H₀ y los supuestos fueran ciertos (Wasserstein y Lazar, 2016) |
| «p > 0,05 demuestra que no hay efecto» | La ausencia de evidencia no es evidencia de ausencia; usar IC, pruebas de equivalencia o factores de Bayes (Lakens, 2017) |
| «Significativo es lo mismo que relevante» | Con muestras grandes, efectos triviales resultan significativos; hay que valorar el tamaño del efecto |
| «El IC 95 % tiene un 95 % de probabilidad de contener el parámetro» | El 95 % describe el procedimiento; esa lectura corresponde al intervalo de credibilidad bayesiano |
| «La potencia observada post hoc informa de algo» | Es una transformación del valor p (Hoenig y Heisey, 2001) |
| «Los datos deben ser normales» | Importa la normalidad de los residuos o de la distribución muestral, no la de los datos brutos |
| «Con n > 30 siempre hay normalidad» | El teorema central del límite es aproximado; con asimetría o colas pesadas pueden hacer falta muestras mucho mayores |
| «Hay que pasar Levene o Shapiro antes de elegir la prueba» | Ese procedimiento altera el error tipo I (Zimmerman, 2004); es preferible usar Welch por defecto |
| «Las pruebas no paramétricas no tienen supuestos» | Exigen independencia y, para hablar de medianas, distribuciones de igual forma y dispersión |
| «Mann-Whitney compara medianas» | Contrasta si P(X > Y) = 0,5; solo compara medianas si las distribuciones difieren únicamente en su posición |
| «No se pueden hacer post hoc si la F no es significativa» | Tukey, Holm o Games-Howell controlan el error por sí mismos; la F previa solo es necesaria para la LSD de Fisher |
| «El ANOVA de medidas repetidas equivale a varias pruebas t» | Varias t inflan el error por familia; el ANOVA usa un término de error común y exige esfericidad |
| «η² y η²p son lo mismo» | Solo coinciden en el ANOVA de un factor entre grupos; los η²p no son comparables entre diseños (Olejnik y Algina, 2003) |
| «Una interacción no significativa significa efectos idénticos» | La diferencia entre un efecto significativo y otro que no lo es no es necesariamente significativa (Gelman y Stern, 2006) |
| «Un R² alto indica un buen modelo o causalidad» | R² aumenta con los predictores y no garantiza los supuestos; la causalidad depende del diseño |
| «β indica sin problemas la importancia relativa de cada predictor» | Con predictores correlacionados, β depende de la colinealidad y de la varianza de la muestra |

## Bibliografía

### Manuales de referencia

- American Psychological Association. (2020). *Publication manual of the American Psychological Association* (7.ª ed.).
- Cohen, J. (1988). *Statistical power analysis for the behavioral sciences* (2.ª ed.). Erlbaum.
- Cumming, G. y Calin-Jageman, R. (2017). *Introduction to the new statistics: Estimation, open science, and beyond*. Routledge.
- Field, A. (2024). *Discovering statistics using IBM SPSS Statistics* (6.ª ed.). SAGE.
- Howell, D. C. *Statistical methods for psychology* (8.ª ed.). Cengage.
- Navarro, D. J. y Foxcroft, D. R. *Learning statistics with jamovi*. Libro de acceso abierto.
- Pardo, A. y San Martín, R. (2010). *Análisis de datos en ciencias sociales y de la salud II* (2.ª ed.). Síntesis.
- Wilcox, R. R. (2022). *Introduction to robust estimation and hypothesis testing* (5.ª ed.). Academic Press.

### Artículos seleccionados

- Appelbaum, M. et al. (2018). Journal article reporting standards for quantitative research in psychology. *American Psychologist, 73*(1), 3–25.
- Benjamin, D. J. et al. (2018). Redefine statistical significance. *Nature Human Behaviour, 2*, 6–10. https://doi.org/10.1038/s41562-017-0189-z
- Blanca, M. J., Alarcón, R., Arnau, J., Bono, R. y Bendayan, R. (2017). Non-normal data: Is ANOVA still a valid option? *Psicothema, 29*(4), 552–557. https://doi.org/10.7334/psicothema2016.383
- Button, K. S. et al. (2013). Power failure: Why small sample size undermines the reliability of neuroscience. *Nature Reviews Neuroscience, 14*(5), 365–376. https://doi.org/10.1038/nrn3475
- Cohen, J. (1962). The statistical power of abnormal-social psychological research. *Journal of Abnormal and Social Psychology, 65*(3), 145–153.
- Cohen, J. (1992). A power primer. *Psychological Bulletin, 112*(1), 155–159.
- Cumming, G. (2014). The new statistics: Why and how. *Psychological Science, 25*(1), 7–29.
- Delacre, M., Lakens, D. y Leys, C. (2017). Why psychologists should by default use Welch's t-test instead of Student's t-test. *International Review of Social Psychology, 30*(1), 92–101. https://doi.org/10.5334/irsp.82
- Greenland, S. et al. (2016). Statistical tests, P values, confidence intervals, and power: A guide to misinterpretations. *European Journal of Epidemiology, 31*(4), 337–350. https://doi.org/10.1007/s10654-016-0149-3
- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLoS Medicine, 2*(8), e124.
- Klein, R. A. et al. (2018). Many Labs 2: Investigating variation in replicability across samples and settings. *Advances in Methods and Practices in Psychological Science, 1*(4), 443–490. https://doi.org/10.1177/2515245918810225
- Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science. *Frontiers in Psychology, 4*, 863. https://doi.org/10.3389/fpsyg.2013.00863
- Lakens, D. (2017). Equivalence tests: A practical primer for t tests, correlations, and meta-analyses. *Social Psychological and Personality Science, 8*(4), 355–362.
- Olejnik, S. y Algina, J. (2003). Generalized eta and omega squared statistics. *Psychological Methods, 8*(4), 434–447. https://doi.org/10.1037/1082-989X.8.4.434
- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science, 349*(6251), aac4716. https://doi.org/10.1126/science.aac4716
- Razali, N. M. y Wah, Y. B. (2011). Power comparisons of Shapiro-Wilk, Kolmogorov-Smirnov, Lilliefors and Anderson-Darling tests. *Journal of Statistical Modeling and Analytics, 2*(1), 21–33.
- Sedlmeier, P. y Gigerenzer, G. (1989). Do studies of statistical power have an effect on the power of studies? *Psychological Bulletin, 105*(2), 309–316. https://doi.org/10.1037/0033-2909.105.2.309
- Simmons, J. P., Nelson, L. D. y Simonsohn, U. (2011). False-positive psychology. *Psychological Science, 22*(11), 1359–1366. https://doi.org/10.1177/0956797611417632
- Szucs, D. e Ioannidis, J. P. A. (2017). Empirical assessment of published effect sizes and power in the recent cognitive neuroscience and psychology literature. *PLoS Biology, 15*(3), e2000797 (corrección publicada en 2021).
- Wasserstein, R. L. y Lazar, N. A. (2016). The ASA statement on p-values: Context, process, and purpose. *The American Statistician, 70*(2), 129–133.
- Wasserstein, R. L., Schirm, A. L. y Lazar, N. A. (2019). Moving to a world beyond «p < 0.05». *The American Statistician, 73*(sup1), 1–19. https://doi.org/10.1080/00031305.2019.1583913
- Zimmerman, D. W. (2004). A note on preliminary tests of equality of variances. *British Journal of Mathematical and Statistical Psychology, 57*, 173–181. https://doi.org/10.1348/000711004849222

Trabajos clásicos citados en el texto: Student (1908), Fisher (1925), Neyman y Pearson (1933), Kolmogorov (1933), Friedman (1937), Mauchly (1940), Wilcoxon (1945), Mann y Whitney (1947), Welch (1947, 1951), Smirnov (1948), Tukey (1949), Durbin y Watson (1950), Kruskal y Wallis (1952), Box (1953, 1954), Scheffé (1953), Greenhouse y Geisser (1959), Levene (1960), Shapiro y Wilk (1965), Anscombe (1973), Brown y Forsythe (1974), Games y Howell (1976), Huynh y Feldt (1976), Cook (1977), Efron (1979) y Holm (1979).

## Créditos de las ilustraciones

**Figuras de elaboración propia (SAIMAP).** Todos los esquemas y gráficos se han elaborado para este temario. Los que muestran datos publicados reproducen las cifras de Cohen (1962), Sedlmeier y Gigerenzer (1989), Button et al. (2013), Szucs e Ioannidis (2017), Open Science Collaboration (2015), Simmons et al. (2011) y Anscombe (1973). Los demás son esquemas ilustrativos o simulaciones con datos ficticios.

**Imágenes de Wikimedia Commons.**

- Ronald A. Fisher (1913). Autor desconocido. Dominio público. https://commons.wikimedia.org/wiki/File:Youngronaldfisher2.JPG. Sin modificaciones.
- William S. Gosset («Student»). Autor desconocido. Dominio público. https://commons.wikimedia.org/wiki/File:William_Sealy_Gosset.jpg. Reducida de tamaño.
- Francis Galton (décadas de 1850–1860). Autor desconocido. Dominio público. https://commons.wikimedia.org/wiki/File:Francis_Galton_1850s.jpg. Reducida de tamaño.
