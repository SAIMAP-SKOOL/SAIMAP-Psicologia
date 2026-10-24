## Unidad 5 · Modelos teóricos del condicionamiento clásico

**Objetivos:** formular el modelo de Rescorla-Wagner y explicar con él la adquisición, la extinción, el bloqueo y la inhibición condicionada; identificar los fenómenos que el modelo no explica; comparar los modelos atencionales de Mackintosh y de Pearce-Hall, el SOP de Wagner y la hipótesis del comparador; distinguir las teorías sobre la naturaleza de la RC y las asociaciones E-E y E-R.

### 5.1 El modelo de Rescorla-Wagner

El bloqueo, el ensombrecimiento y los efectos de la contingencia (Unidad 4) muestran que un estímulo se condiciona solo si aporta **información nueva** sobre el EI. Rescorla y Wagner (1972) tradujeron esa idea a una regla matemática sencilla que se convirtió en el modelo más influyente de la disciplina.

La idea central es que el aprendizaje está impulsado por la **sorpresa**, o **error de predicción**: la diferencia entre lo que ocurre y lo que los estímulos presentes anunciaban. Si el aviso de una aplicación siempre precede a la llegada del pedido, una luz que se añade después junto al aviso apenas adquirirá significado: el pedido ya estaba predicho. En cada ensayo, la fuerza asociativa de un EC cambia según esta ecuación:

**ΔVₓ = αₓ · β · (λ − ΣV)**

| Símbolo | Significado |
| --- | --- |
| ΔVₓ | Cambio en la fuerza asociativa del estímulo X en ese ensayo |
| αₓ | Saliencia del EC; fija la velocidad a la que se aprende sobre él |
| β | Parámetro del EI; también afecta a la velocidad de aprendizaje |
| λ | Máximo condicionamiento que puede sostener el EI; vale 0 si no hay EI |
| ΣV | Suma de las fuerzas asociativas de todos los estímulos presentes |
| λ − ΣV | Error de predicción: cuánto sorprende el resultado del ensayo |

De esta regla se derivan los fenómenos básicos sin añadir supuestos:

- **Adquisición.** Al principio ΣV vale 0 y el error es grande, así que V crece deprisa. A medida que se acerca a λ, el error se reduce y cada ensayo aporta menos. El resultado es la curva **negativamente acelerada** que se describió en la Unidad 3.
- **Extinción.** Si el EC aparece solo, λ = 0 y el error es negativo: V disminuye.
- **Bloqueo.** Si A ya predice el EI al máximo, en los ensayos AX la suma ΣV está cerca de λ, no queda error y X apenas gana fuerza.
- **Ensombrecimiento.** En un compuesto, los dos estímulos se reparten el mismo λ; el más saliente (α mayor) se queda con la mayor parte.
- **Sobreexpectativa.** Si A y B se han condicionado por separado hasta λ y luego se presentan juntos con el EI, ΣV supera a λ: el error es negativo y ambos **pierden** fuerza aunque sigan emparejándose con el EI.
- **Inhibición condicionada.** Si A predice el EI y AX no va seguido de él, el error negativo empuja a X por debajo de cero: un **V negativo** es un inhibidor.
- **Contingencia.** El contexto se trata como un estímulo más. Si el EI aparece también sin el EC, el contexto acumula fuerza y bloquea al EC.

![](rw-curvas.png)

Figura 5.1. **Simulación del modelo de Rescorla-Wagner.** A la izquierda, adquisición y extinción de un EC; en el centro, ensombrecimiento de B (α = 0,15) por A (α = 0,45); a la derecha, X apenas gana fuerza en el grupo de bloqueo frente al control. β = 0,3, λ = 1. Elaboración propia.

Como muestra la figura 5.1, lo que un estímulo aprende depende de **todos** los estímulos presentes. La regla es, además, formalmente equivalente a la **regla delta** (Widrow-Hoff) del conexionismo, y su error de predicción tiene un correlato en la actividad de las neuronas dopaminérgicas (Schultz, Dayan y Montague, 1997; Unidad 12).

**Lo que el modelo no explica.** Sus fallos son tan instructivos como sus aciertos:

1. **Inhibición latente.** Presentar el EC solo antes del condicionamiento debería ser inútil: λ = 0 y V = 0, así que el error es 0 y nada cambia. Sin embargo, la preexposición retrasa el aprendizaje (Unidad 4).
2. **Extinción de un inhibidor.** Si un V negativo se presenta solo, el modelo predice que vuelva a cero. No ocurre así: presentar el inhibidor sin consecuencias no le quita su capacidad inhibitoria (Zimmer-Hart y Rescorla, 1974).
3. **Recuperación espontánea y renovación.** Para el modelo, la extinción es **desaprender**. Si fuera así, la RC no podría volver con el paso del tiempo ni con un cambio de contexto (Unidad 7).
4. **Revaluación retrospectiva.** Cambiar el valor de un estímulo puede modificar lo aprendido sobre otro ausente (desbloqueo hacia atrás), y el modelo solo actualiza los estímulos presentes.

### 5.2 Modelos atencionales: Mackintosh y Pearce-Hall

Rescorla y Wagner trataron la saliencia α como un valor **fijo** de cada estímulo. Los modelos atencionales proponen lo contrario: α **cambia con la experiencia**, porque el organismo aprende a qué estímulos merece la pena atender. El error de predicción sigue presente, pero ya no se coloca solo en el EI: también modula cuánto se procesa el EC.

**El modelo de Mackintosh (1975).** La atención a un EC **aumenta** si es el **mejor predictor** disponible del EI y **disminuye** si predice peor que los demás estímulos presentes. Atender es, por tanto, una inversión: se dirige a lo que informa.

- **Bloqueo.** En los ensayos AX, A ya predice bien el EI y X no añade nada. Tras el primer ensayo del compuesto, α de X baja y X deja de procesarse. Una predicción distintiva es que en ese **primer** ensayo X todavía puede aprender algo, porque la atención aún no se ha reducido.
- **Inhibición latente.** Un EC que aparece repetidamente sin consecuencias no predice nada mejor que el contexto, de modo que pierde atención y después se condiciona más despacio.

**El modelo de Pearce y Hall (1980).** Propone casi la regla inversa. La atención a un EC aumenta cuando sus **consecuencias son inciertas** o sorprendentes, y disminuye cuando ya se sabe lo que anuncia. Un estímulo que ya predice bien sigue provocando la RC, pero deja de recibir atención y ya no se aprende sobre él.

- **Inhibición latente.** Es su explicación más directa. Durante la preexposición, el EC nunca va seguido de nada: no hay sorpresa, la atención cae y, al empezar el condicionamiento, el EC se procesa poco.
- **Bloqueo.** Como el EI ya está predicho por A, el ensayo AX no sorprende y X recibe poca atención.
- **Desbloqueo.** Si en la fase AX se cambia algo del EI (por ejemplo, su intensidad), reaparece la sorpresa, la atención a X sube y X aprende.

| Rasgo | Rescorla-Wagner (1972) | Mackintosh (1975) | Pearce y Hall (1980) |
| --- | --- | --- | --- |
| Qué cambia con la experiencia | Solo V | V y α | V y α |
| Dónde está el error que importa | En el procesamiento del EI | En la atención al EC | En la atención al EC |
| La atención aumenta para | No aplicable (α fijo) | El mejor predictor | El estímulo de consecuencias inciertas |
| Inhibición latente | No la explica | La explica | La explica de forma directa |
| Bloqueo | Por falta de error | Por pérdida de atención a X | Por falta de sorpresa al procesar X |

Las dos propuestas parecen contradictorias, y ambas tienen apoyo experimental. Una forma de reconciliarlas es suponer **dos tipos de atención**: una que explota las claves que ya funcionan y otra que explora las todavía inciertas.

Un minicaso fija la diferencia. Si el tono del primer correo del día anuncia bien el humor de una jefa, según Mackintosh se acabará atendiendo sobre todo a ese correo, porque es el mejor predictor. Según Pearce-Hall, mientras acierte siempre dejará de vigilarse, y la atención irá a señales todavía inciertas, como la hora a la que llega.

### 5.3 SOP de Wagner e hipótesis del comparador

**El modelo SOP de Wagner (1981).** Su nombre procede de *sometimes opponent process* («proceso a veces oponente»). Describe en **tiempo real** qué ocurre en la memoria durante un ensayo. Cada estímulo está representado por un **nodo de memoria** compuesto por muchos elementos, y cada elemento puede estar en uno de tres estados:

| Estado | Qué significa | Cómo se llega a él |
| --- | --- | --- |
| Inactivo | El estímulo no se está procesando | Estado de reposo |
| A1 (activación primaria) | Procesamiento pleno y focal | Solo cuando el estímulo se presenta realmente |
| A2 (activación secundaria) | Procesamiento periférico, como un recuerdo | Desde A1 al decaer, o cuando otro estímulo lo evoca |

Los elementos pasan de A1 a A2 y de A2 al estado inactivo, pero no pueden volver directamente de A2 a A1. De ahí se siguen las reglas del modelo:

- Se forma una **asociación excitatoria** cuando el EC y el EI están en **A1 a la vez**.
- Si el EC está en A1 mientras el EI está en A2, se forma una asociación inhibitoria.
- Un estímulo **esperado** ya está en parte en A2, de modo que, cuando se presenta, menos elementos pueden pasar a A1 y se procesa menos.

Esta última regla explica fenómenos que parecían distintos. Si un estímulo se ha presentado hace poco, sigue en A2 y provoca menos respuesta: es la **habituación a corto plazo**. Si el contexto ha quedado asociado al estímulo y lo evoca en A2, la respuesta disminuye de forma duradera: **habituación a largo plazo** e **inhibición latente**, porque el EC preexpuesto ya está «anticipado» por el contexto. El **bloqueo** se explica del mismo modo, pero aplicado al EI: A lo lleva a A2 y el EI no alcanza A1 lo suficiente para que X se asocie con él.

SOP hace además una predicción sobre la forma de la RC: el EC no reproduce la RI, sino la respuesta que corresponde al estado **A2 del EI**. Cuando la respuesta A2 es opuesta a la A1, la RC será opuesta a la RI, como ocurre en la tolerancia a las drogas (Unidad 6). Por eso el proceso es «a veces» oponente.

**La hipótesis del comparador (Miller y Matzel, 1988).** Todos los modelos anteriores sitúan los efectos de competición entre claves en la **adquisición**: el estímulo bloqueado aprende poco. La hipótesis del comparador propone que el aprendizaje **sí ocurre** y que el déficit está en la **ejecución**. En el momento de la prueba, la fuerza de la asociación EC–EI se compara con la de otros estímulos que estuvieron presentes durante el entrenamiento, los **estímulos comparadores** (el otro elemento del compuesto o el contexto). Si el comparador está fuertemente asociado al EI, la RC ante el EC queda reducida.

La predicción distintiva es llamativa: si después del bloqueo o del ensombrecimiento se **extingue el estímulo competidor**, la respuesta ante el estímulo bloqueado o ensombrecido debería **recuperarse** sin entrenamiento adicional. Se ha demostrado en algunas preparaciones y es difícil de explicar para los modelos centrados en la adquisición.

| Modelo | Dónde sitúa el déficit del estímulo bloqueado | Idea central |
| --- | --- | --- |
| Rescorla-Wagner | Aprendizaje (no hay error) | El EI ya está predicho |
| Mackintosh, Pearce-Hall | Aprendizaje (poca atención a X) | La atención al EC cambia con la experiencia |
| SOP | Aprendizaje (el EI no llega a A1) | Lo esperado se procesa menos |
| Comparador | Ejecución (en la prueba) | La RC depende de la comparación con otras claves |

En resumen: los tres primeros enfoques dicen que el estímulo bloqueado **aprendió poco**; el comparador, que **aprendió, pero no lo muestra**.

### 5.4 Qué se asocia y qué es la RC

Los modelos anteriores se ocupan de **cuánto** se aprende. Queda por resolver **qué** se aprende y por qué la RC tiene la forma que tiene.

**Teorías sobre la naturaleza de la RC.**

- **Sustitución del estímulo** (Pavlov). El EC llega a activar los mismos centros nerviosos que el EI y, por tanto, provoca una respuesta parecida a la RI: el EC «sustituye» al EI. Encaja con la salivación, en la que RC y RI se parecen mucho.
- **Respuesta preparatoria.** Asociada a Kimble (1961), sostiene que la RC no es una copia de la RI, sino una respuesta que **prepara** al organismo para el EI que se avecina. En el condicionamiento palpebral, por ejemplo, el párpado se cierra justo antes del soplo de aire, lo que protege el ojo.
- **Respuesta compensatoria** (Siegel, 1975). En algunas preparaciones la RC es **opuesta** a la RI: ante las claves que anuncian un fármaco, el organismo produce reacciones que contrarrestan su efecto. Es la base de la tolerancia condicionada (Unidad 6).

La conclusión de consenso es que **la RC no es siempre igual a la RI**. Puede parecerse a ella, ser una parte de ella, prepararla o ser su contraria. Esto obliga a abandonar la sustitución del estímulo como explicación general.

**E-E frente a E-R.** La segunda pregunta es qué queda conectado en la memoria. Hay dos posibilidades:

| Rasgo | Asociación E-E | Asociación E-R |
| --- | --- | --- |
| Qué se conecta | El EC con una representación del EI | El EC directamente con la respuesta |
| Qué hace el EC | Evoca el EI, y este produce la respuesta | Dispara la respuesta sin pasar por el EI |
| Si el EI pierde valor | La RC disminuye | La RC no cambia |

La prueba clave es la **devaluación del EI** (Rescorla, 1973; Holland y Rescorla, 1975). Primero se condiciona un EC con un EI; después, en ausencia del EC, se reduce el valor del EI, por ejemplo por saciedad, por habituación o asociándolo con malestar. Si la RC ante el EC disminuye, es que el EC activaba una **representación del EI** cuyo valor actual importa: una asociación E-E. Es lo que se observa en el condicionamiento de primer orden en la mayoría de los casos.

Un ejemplo humano: si alguien se empacha de churros y acaba con náuseas, el olor de la churrería deja de apetecerle aunque nunca se emparejó con el malestar. El olor evocaba la representación de los churros, que ha cambiado de valor.

En el **condicionamiento de segundo orden** (Unidad 3) la situación es distinta. Si, una vez establecido, se extingue el EC1, la respuesta ante el EC2 suele mantenerse. El EC2 no depende de lo que representa el EC1, sino que tiende a provocar la respuesta directamente: una asociación más próxima a la E-R.

La devaluación reaparecerá en el condicionamiento operante, donde permite distinguir las acciones dirigidas a metas de los hábitos (Unidad 10).

### Consenso y debate

**Consenso:** el condicionamiento depende del **error de predicción**, no de la mera contigüidad (Rescorla y Wagner, 1972), y ese error tiene un correlato en la actividad dopaminérgica (Schultz, Dayan y Montague, 1997). El modelo de Rescorla-Wagner explica la adquisición, el bloqueo, el ensombrecimiento, la sobreexpectativa y la inhibición condicionada, pero no la inhibición latente, la recuperación espontánea ni la renovación. La RC no es siempre igual a la RI, y en el condicionamiento de primer orden predomina la asociación E-E.

**Debate:** si la atención se dirige a los mejores predictores (Mackintosh, 1975) o a los estímulos inciertos (Pearce y Hall, 1980), y cómo combinar ambas ideas. También se discute si la competición entre claves es un déficit de aprendizaje o de ejecución (Miller y Matzel, 1988). El propio bloqueo es un efecto clásico en revisión: Maes et al. (2016) informan de fracasos de replicación en roedores.

### Mito frecuente

**Mito:** «El modelo de Rescorla-Wagner lo explica todo, incluida la inhibición latente».

**Realidad:** en el modelo, un EC presentado solo antes del condicionamiento tiene V = 0 y λ = 0, de modo que el error es nulo y no cambia nada. Por eso Rescorla-Wagner (1972) no puede explicar que la preexposición retrase el aprendizaje. La inhibición latente la explican los modelos que hacen variar el procesamiento del EC, como Pearce y Hall (1980) o el SOP de Wagner (1981).

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Error de predicción | Diferencia entre el EI que ocurre (λ) y el que anuncian los estímulos presentes (ΣV) |
| Fuerza asociativa (V) | Grado en que un EC predice el EI; si es negativa, el EC es un inhibidor |
| Sobreexpectativa | Pérdida de fuerza de dos EC condicionados por separado al presentarse juntos con el EI |
| Modelo de Mackintosh | La atención aumenta para el mejor predictor del EI y disminuye para los peores (1975) |
| Modelo de Pearce-Hall | La atención aumenta para los estímulos cuyas consecuencias son inciertas (1980) |
| SOP | Modelo de Wagner (1981) con estados inactivo, A1 y A2; lo esperado se procesa menos |
| Hipótesis del comparador | La RC depende de comparar el EC con otras claves asociadas al EI en la prueba |
| Devaluación del EI | Reducir el valor del EI tras condicionar; si baja la RC, la asociación es E-E |

### Clave PIR

**Prioridad alta.** Se pregunta qué fenómenos explica y cuáles no explica Rescorla-Wagner, el significado de cada parámetro y qué modelo da cuenta de la inhibición latente. Trampas típicas: atribuir a Rescorla-Wagner la explicación de la inhibición latente o de la recuperación espontánea, intercambiar las reglas de Mackintosh (mejor predictor) y Pearce-Hall (estímulo incierto) y creer que la hipótesis del comparador sitúa el déficit en la adquisición.

### Autoevaluación

**1.** En el modelo de Rescorla-Wagner, el término (λ − ΣV) representa…
a) la saliencia del estímulo condicionado
b) el error de predicción del ensayo
c) la intensidad máxima del EI

**2.** Dos EC condicionados por separado al máximo se presentan juntos con el mismo EI. Según Rescorla-Wagner, ambos…
a) pierden fuerza asociativa
b) ganan fuerza asociativa
c) mantienen su fuerza asociativa

**3.** Según el modelo de Pearce y Hall (1980), la atención a un EC aumenta cuando…
a) es el mejor predictor disponible del EI
b) se ha presentado muchas veces sin consecuencias
c) sus consecuencias son inciertas o sorprendentes

**4.** La hipótesis del comparador predice que, tras el bloqueo, extinguir el estímulo bloqueador…
a) recupera la respuesta al estímulo bloqueado
b) convierte al estímulo bloqueado en un inhibidor
c) reduce todavía más la respuesta bloqueada

**5.** Tras condicionar un tono con comida, se sacia al animal y la RC ante el tono disminuye. Esto indica una asociación…
a) estímulo-respuesta
b) estímulo-estímulo
c) de segundo orden

### Soluciones

**1 b.** Es la diferencia entre lo que ocurre y lo que se esperaba; λ es el máximo y α la saliencia. **2 a.** ΣV supera a λ, el error es negativo y ambos pierden fuerza: es la sobreexpectativa. **3 c.** La regla de aumentar la atención al mejor predictor es la de Mackintosh. **4 a.** Al debilitar el comparador, la asociación aprendida por el estímulo bloqueado se expresa. **5 b.** El tono evoca una representación de la comida cuyo valor actual importa.

## Unidad 6 · Restricciones biológicas y condicionamiento en la vida real

**Objetivos:** describir el experimento de Garcia y Koelling y explicar el concepto de relevancia; explicar la preparación biológica y su relación con las fobias; explicar la tolerancia condicionada a las drogas y su relación con la sobredosis; describir el condicionamiento evaluativo y el inmunitario.

### 6.1 Aversión condicionada al sabor y relevancia

Durante buena parte del siglo XX se asumió, de forma más o menos explícita, el **principio de equipotencialidad**: cualquier EC podía asociarse con cualquier EI con la misma facilidad, y las leyes del aprendizaje serían las mismas para cualquier combinación de estímulos, respuestas y especies. La aversión al sabor fue el fenómeno que más contribuyó a desmontar esa idea.

La **aversión condicionada al sabor** se produce cuando un sabor va seguido de malestar gastrointestinal: a partir de ese momento, el sabor se rechaza. Es un aprendizaje con tres rasgos que lo separan de las preparaciones clásicas:

1. Puede adquirirse en **un solo ensayo**.
2. Tolera **demoras de horas** entre el EC (el sabor) y el EI (el malestar), cuando en otras preparaciones, como el parpadeo, intervalos de pocos segundos ya dificultan el condicionamiento.
3. Muestra una notable **selectividad** del estímulo, que es lo que demostró el experimento de Garcia y Koelling.

**El experimento de Garcia y Koelling (1966).** Las ratas bebían un agua que era a la vez «brillante, ruidosa y sabrosa»: tenía un sabor, y al lamer el bebedero se encendía una luz y sonaba un clic. Así, cada lametón presentaba un compuesto de un estímulo gustativo y otro audiovisual. Después, un grupo recibía un EI que producía **malestar** (radiación X o cloruro de litio) y otro grupo recibía **descargas** eléctricas en las patas. En la prueba, los dos elementos del compuesto se presentaban por separado: agua con sabor sin luz ni ruido, y agua sin sabor con luz y ruido.

![m](garcia-koelling.png)

Figura 6.1. **Diseño y resultados de Garcia y Koelling (1966).** Las ratas que sufrieron malestar evitaron mucho el agua con sabor y poco el agua brillante y ruidosa; las que recibieron descargas mostraron el patrón contrario. Esquema de resultados cualitativos. Elaboración propia.

Como muestra la figura 6.1, el resultado fue un cruce perfecto. El sabor se asociaba con el malestar y apenas con la descarga; la luz y el ruido se asociaban con la descarga y apenas con el malestar. Los dos grupos habían bebido la misma agua con el mismo compuesto de sabor, luz y ruido; solo cambiaba el EI. La diferencia no podía deberse a la saliencia de los EC ni a la intensidad del EI, sino a la **combinación** concreta de EC y EI.

Este fenómeno se llama **relevancia** o **pertinencia** (*belongingness*): ciertos EC se asocian con más facilidad con ciertos EI porque «encajan» entre sí. La interpretación funcional es evolutiva. Para una rata, que es omnívora y prueba alimentos nuevos, lo que se come es la causa más probable de un malestar digestivo; un dolor en la piel, en cambio, suele proceder de algo que se ve o se oye en el entorno.

| Rasgo | Aversión al sabor | Preparaciones clásicas (salivación, parpadeo) |
| --- | --- | --- |
| Ensayos necesarios | Puede bastar uno | Muchos |
| Intervalo EC-EI tolerado | Horas | Segundos o menos |
| Selectividad EC-EI | Muy marcada (relevancia) | Menos marcada |

La aversión al sabor tiene consecuencias aplicadas claras. Muchas personas desarrollan rechazo a una comida que tomaron antes de una gastroenteritis, aunque sepan que la enfermedad no tuvo nada que ver con ese plato: el aprendizaje no requiere creer en la relación causal. En pacientes que reciben **quimioterapia** pueden aparecer aversiones a alimentos tomados antes del tratamiento y náuseas anticipatorias ante las claves del hospital. Para proteger la dieta habitual se ha propuesto la estrategia del **«chivo expiatorio»**: ofrecer un sabor novedoso y poco importante antes de cada sesión, para que la aversión recaiga sobre él y no sobre los alimentos básicos.

La lección de fondo es general: lo que se aprende depende de la **historia evolutiva** de la especie, no solo de la relación temporal entre estímulos.

### 6.2 Preparación biológica y fobias

Seligman (1970) generalizó las conclusiones de Garcia y Koelling en el concepto de **preparación**. Propuso que las asociaciones se sitúan en un **continuo** según la facilidad con la que una especie puede aprenderlas:

| Grado | Qué significa | Ejemplo |
| --- | --- | --- |
| Preparado | Se aprende muy deprisa, a veces en un ensayo | Sabor → malestar en la rata |
| No preparado | Se aprende de forma gradual, con muchos ensayos | Tono → comida |
| Contrapreparado | Se aprende con gran dificultad o no se aprende | Sabor → descarga en la rata |

La preparación depende de la especie. Las aves que se guían sobre todo por la vista para buscar comida pueden asociar con el malestar un color o un aspecto visual del alimento con más facilidad que un sabor. Lo que está preparado para una especie puede no estarlo para otra.

**Las fobias preparadas.** Seligman aplicó la misma idea a los trastornos de ansiedad. Si cualquier estímulo pudiera asociarse con cualquier experiencia aversiva, las fobias deberían distribuirse más o menos según la frecuencia con que la gente sufre accidentes con cada objeto. Ocurre lo contrario: son muy frecuentes las fobias a serpientes, arañas, alturas o a la oscuridad, y muy raras las fobias a enchufes, martillos o pijamas, aunque estos causen más daños en la vida moderna. La explicación propuesta es que los estímulos que supusieron **amenazas a lo largo de la evolución** están preparados para asociarse con el miedo.

Öhman y Mineka (2001) desarrollaron experimentalmente esta idea. En estudios de laboratorio con personas, las respuestas de miedo condicionadas a imágenes de estímulos evolutivamente relevantes, como serpientes o arañas, se adquieren con más facilidad y, **en algunos estudios**, se extinguen peor que las condicionadas a estímulos neutros o a amenazas modernas. El grado de apoyo depende de la medida y del procedimiento, de modo que conviene presentar estos resultados con prudencia.

Un ejemplo ayuda a ver la distinción. Una persona que ha recibido una pequeña descarga al enchufar un cargador puede tener cuidado durante unos días, pero rara vez desarrolla una fobia a los enchufes. Otra persona que vio una serpiente en una excursión, sin que llegara a pasarle nada, puede quedarse con un miedo intenso y duradero. La experiencia aversiva fue mucho mayor en el primer caso, pero el segundo estímulo está más preparado.

Conviene no sacar conclusiones excesivas:

- La preparación no significa que las fobias sean **innatas**. Lo preparado es la **facilidad** para aprender el miedo, no el miedo en sí.
- No todas las fobias requieren una experiencia directa de condicionamiento: el miedo también se adquiere por **observación** e **información** (Unidad 15).
- El concepto se ha criticado por cierta **circularidad**: si se define un estímulo como preparado porque se condiciona con facilidad, no se puede usar después esa preparación para explicar por qué se condiciona con facilidad. La salida es apoyarse en criterios independientes, como la relevancia evolutiva o la comparación entre especies.

El estudio clínico de las fobias específicas, su epidemiología y su tratamiento corresponde a Psicopatología y a Terapias de conducta; aquí interesa su papel como prueba de que el aprendizaje humano también tiene **restricciones biológicas**. El conjunto de estos hallazgos, junto con la deriva instintiva del condicionamiento operante (Breland y Breland, 1961; Unidad 12), forma uno de los consensos firmes de la disciplina: la **equipotencialidad fuerte es falsa**.

### 6.3 Tolerancia condicionada a las drogas

La **tolerancia** es la disminución del efecto de una droga con el consumo repetido: hace falta más dosis para conseguir lo mismo. La explicación farmacológica tradicional la atribuye a cambios en el organismo, como adaptaciones de los receptores o del metabolismo. Siegel (1975) mostró que una parte de la tolerancia es **aprendida**.

El razonamiento parte de la idea de RC compensatoria (Unidad 5). Cada consumo es un ensayo de condicionamiento: las **claves del contexto** (el lugar, la jeringuilla, el ritual de preparación, las personas presentes) actúan como EC, y el efecto de la droga como EI. Muchas drogas alteran el equilibrio del organismo, y el organismo responde con reacciones que tienden a restablecerlo. Con el tiempo, las claves del contexto llegan a provocar esas reacciones **anticipatorias y opuestas** al efecto del fármaco: si la droga produce analgesia, la RC aumenta la sensibilidad al dolor; si produce hipotermia, la RC eleva la temperatura.

El efecto que se observa es la suma de dos fuerzas opuestas: el efecto del fármaco y la RC compensatoria. Cuanto más fuerte es la RC, menor es el efecto neto, y eso es la tolerancia.

![](tolerancia-siegel.png)

Figura 6.2. **Tolerancia condicionada.** En el contexto habitual, la RC compensatoria contrarresta el efecto del fármaco y el efecto neto es pequeño; en un contexto nuevo no hay compensación y el efecto es completo, con más riesgo. Esquema ilustrativo, no datos. Elaboración propia.

Como muestra la figura 6.2, la consecuencia práctica es que la tolerancia es **específica del contexto**. Si la misma dosis se toma en un lugar nuevo, sin las claves habituales, la RC compensatoria no aparece y el organismo recibe el efecto completo del fármaco. Siegel et al. (1982) lo comprobaron con heroína en ratas: los animales tolerantes que recibieron una dosis alta en un contexto distinto del habitual mostraron **mayor mortalidad** que los que la recibieron en el contexto en el que se había desarrollado la tolerancia.

El modelo ofrece una explicación de un fenómeno clínico desconcertante: algunas sobredosis se producen con dosis que la persona ya toleraba, y a menudo en circunstancias poco habituales (otro lugar, otra forma de consumo, otra compañía).

El modelo tiene otras implicaciones:

- **Abstinencia y deseo.** Si las claves del consumo provocan RC compensatorias sin que llegue la droga, la persona experimenta reacciones opuestas al efecto del fármaco, parecidas a los síntomas de abstinencia, que pueden contribuir al deseo de consumir. Es una de las razones por las que volver al barrio o al grupo de consumo es un factor de riesgo de recaída.
- **Extinción de la tolerancia.** Si la tolerancia es en parte una RC, debería extinguirse presentando las claves sin la droga, y así se ha observado en animales.
- **Relación con el proceso oponente.** El modelo de Siegel y la teoría del proceso oponente de Solomon y Corbit (1974; Unidad 2) describen fenómenos parecidos. La diferencia es que en Siegel el proceso compensatorio está **provocado por claves asociadas**, mientras que en Solomon y Corbit el proceso b se fortalece con la repetición del estímulo.

La tolerancia condicionada no sustituye a los mecanismos farmacológicos, sino que se suma a ellos. Su estudio detallado en las adicciones corresponde a Psicopatología y a Psicofarmacología.

### 6.4 Condicionamiento evaluativo e inmunitario

El condicionamiento clásico no se limita a respuestas reflejas como la salivación o el parpadeo. Dos ámbitos muestran su alcance en la vida diaria: el gusto por las cosas y el funcionamiento del sistema inmunitario.

**Condicionamiento evaluativo.** Es el **cambio de valencia** (el agrado o desagrado) de un estímulo neutro por haberse emparejado con estímulos agradables o desagradables. Lo que se transfiere no es una respuesta concreta, sino una **evaluación**: el estímulo empieza a gustar o a disgustar. Es el mecanismo que se busca en buena parte de la **publicidad**: asociar una marca con música alegre, paisajes, personas atractivas o deportistas admirados para que la marca misma resulte agradable.

Se distingue del condicionamiento clásico típico en varios rasgos:

| Rasgo | Condicionamiento clásico típico | Condicionamiento evaluativo |
| --- | --- | --- |
| Qué se aprende | Que el EC anuncia el EI | Que el estímulo «es» agradable o desagradable |
| Medida habitual | RC fisiológica o conductual | Valoraciones de agrado, medidas implícitas |
| Extinción | La RC disminuye con el EC solo | Relativamente resistente a la extinción |
| Papel de la consciencia | Variable según la preparación | En debate |

La **resistencia a la extinción** es uno de sus rasgos más señalados: una vez que un estímulo ha adquirido valencia, presentarlo solo no la elimina con facilidad. Tiene sentido: que la marca deje de aparecer con música alegre no significa que deje de gustar. Sigue en **debate** si el condicionamiento evaluativo requiere que la persona sea consciente de la relación entre los estímulos o puede producirse sin esa consciencia. La investigación sobre actitudes y persuasión lo desarrolla en Psicología Social.

Un ejemplo cotidiano: una canción que sonaba en la época de una ruptura dolorosa puede seguir resultando desagradable años después, aunque se haya escuchado muchas veces en contextos neutros.

**Condicionamiento inmunitario.** Ader y Cohen (1975) demostraron que también las respuestas del **sistema inmunitario** pueden condicionarse. Dieron a ratas agua con **sacarina** (EC) junto con una inyección de **ciclofosfamida** (EI), un fármaco que produce malestar y además suprime la respuesta inmunitaria. El objetivo inicial era estudiar una aversión al sabor. Más tarde, al volver a presentar la sacarina sola, los animales mostraron **inmunosupresión condicionada**: el sabor bastaba para reducir su respuesta inmunitaria.

El hallazgo tuvo un gran impacto por dos motivos:

1. Mostró que el sistema inmunitario, que se consideraba autónomo, se comunica con el sistema nervioso y es sensible al aprendizaje. Este resultado está en el origen de la **psiconeuroinmunología**.
2. Abrió la posibilidad de aplicaciones clínicas: si una respuesta inmunitaria puede condicionarse, quizá podría mantenerse parte del efecto de un fármaco con dosis menores, emparejándolo con un estímulo. Es una línea de investigación, no una práctica clínica establecida.

El condicionamiento inmunitario se relaciona también con el estudio del **efecto placebo**, en el que las claves asociadas a un tratamiento pueden producir parte de su efecto. Los mecanismos biológicos se tratan en Bases Biológicas y sus aplicaciones en Psicología de la Salud.

### Consenso y debate

**Consenso:** existen **restricciones biológicas** al aprendizaje: unas combinaciones EC-EI se aprenden mucho más deprisa que otras (Garcia y Koelling, 1966; Seligman, 1970), y la equipotencialidad fuerte es falsa. La aversión al sabor puede adquirirse en un ensayo y con demoras de horas. Parte de la tolerancia a las drogas es una RC compensatoria específica del contexto (Siegel, 1975). Las respuestas inmunitarias pueden condicionarse (Ader y Cohen, 1975).

**Debate:** cuánto apoyo tienen las **fobias preparadas** en humanos, porque la mayor resistencia a la extinción de estos miedos aparece en algunos estudios y no en otros, y cómo definir la preparación sin circularidad. En el condicionamiento evaluativo se discute el papel de la consciencia de la contingencia. Las aplicaciones clínicas del condicionamiento inmunitario están todavía en investigación.

### Mito frecuente

**Mito:** «Para rechazar una comida hay que estar convencido de que fue ella la que sentó mal».

**Realidad:** la aversión al sabor puede adquirirse en un solo ensayo y con horas de demora entre el sabor y el malestar, y depende de la relevancia de la combinación sabor-malestar (Garcia y Koelling, 1966; Seligman, 1970), no de una creencia causal. Por eso aparece aunque la persona sepa que el malestar se debió a una gastroenteritis o a la quimioterapia.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Equipotencialidad | Supuesto, hoy rechazado, de que cualquier EC se asocia igual de fácil con cualquier EI |
| Aversión al sabor | Rechazo de un sabor seguido de malestar; puede aprenderse en un ensayo y con horas de demora |
| Relevancia (pertinencia) | Mayor facilidad para asociar ciertos EC con ciertos EI (Garcia y Koelling, 1966) |
| Preparación | Continuo preparado–no preparado–contrapreparado de facilidad para aprender (Seligman, 1970) |
| Fobia preparada | Miedo a estímulos evolutivamente relevantes que se condiciona con especial facilidad |
| Tolerancia condicionada | Reducción del efecto de una droga por RC compensatorias ante las claves del contexto |
| Condicionamiento evaluativo | Cambio de agrado de un estímulo neutro por emparejarlo con estímulos agradables o no |
| Inmunosupresión condicionada | Supresión inmunitaria provocada por un EC asociado a un fármaco (Ader y Cohen, 1975) |

### Clave PIR

**Prioridad alta.** Se pregunta el diseño y el resultado de Garcia y Koelling (1966), el continuo de preparación de Seligman (1970) y la explicación de la tolerancia y la sobredosis de Siegel. Trampas típicas: atribuir el resultado de Garcia y Koelling a la saliencia de los estímulos y no a su combinación, creer que la RC en la tolerancia se parece al efecto de la droga cuando es opuesta, y confundir «preparado» con «innato».

### Autoevaluación

**1.** En el experimento de Garcia y Koelling (1966), las ratas que recibieron descargas eléctricas evitaron sobre todo…
a) el agua con sabor
b) el agua brillante y ruidosa
c) las dos clases de agua

**2.** Que una rata aprenda con gran dificultad a asociar un sabor con una descarga es, según Seligman (1970), una asociación…
a) contrapreparada
b) no preparada
c) preparada

**3.** Según Siegel, una dosis habitual puede producir una sobredosis en un contexto nuevo porque…
a) el fármaco se absorbe más deprisa en lugares nuevos
b) el estrés del lugar nuevo potencia el fármaco
c) faltan las claves que provocan la RC compensatoria

**4.** El cambio en el agrado de una marca tras aparecer junto a música alegre es un ejemplo de condicionamiento…
a) inmunitario
b) evaluativo
c) de huella

**5.** En el estudio de Ader y Cohen (1975), la sacarina presentada sola llegó a provocar…
a) supresión de la respuesta inmunitaria
b) aumento de la respuesta inmunitaria
c) preferencia por el sabor de la sacarina

### Soluciones

**1 b.** El estímulo audiovisual se asocia con la descarga y el sabor con el malestar. **2 a.** Es el extremo de máxima dificultad del continuo de preparación. **3 c.** Sin claves habituales no hay compensación y el efecto del fármaco es completo. **4 b.** Se transfiere la valencia del estímulo agradable a la marca. **5 a.** El sabor, emparejado con ciclofosfamida, adquirió el efecto inmunosupresor.

## Unidad 7 · Extinción, recaída y terapia de exposición

**Objetivos:** explicar por qué la extinción es un nuevo aprendizaje y no un borrado; describir la recuperación espontánea, la renovación y el restablecimiento; relacionar estos fenómenos con la desensibilización sistemática, la exposición y el modelo de aprendizaje inhibitorio; valorar el estado actual de la investigación sobre reconsolidación.

### 7.1 La extinción como nuevo aprendizaje

La **extinción** es el procedimiento de presentar el EC sin el EI una vez establecido el condicionamiento, y también el resultado de ese procedimiento: la RC disminuye. En la Unidad 3 se vio su curva típica. La pregunta ahora es qué ocurre en la memoria cuando la RC desaparece.

La respuesta intuitiva, y la del modelo de Rescorla-Wagner (Unidad 5), es que la asociación EC-EI **se debilita** hasta volver a cero: extinguir sería desaprender. Esta idea choca con un hecho que ya conocía Pavlov: la RC extinguida puede **volver**. Si lo aprendido se hubiera borrado, no habría nada que pudiera reaparecer.

Mark Bouton propuso la interpretación que hoy es de consenso: la extinción **no borra** la asociación original, sino que añade un **nuevo aprendizaje inhibitorio**. Tras la adquisición, el EC significa «EI»; tras la extinción, significa también «no EI». El EC queda con **dos significados** en la memoria, como una palabra ambigua. Lo que decide cuál de los dos se expresa en cada momento es el **contexto**.

| Rasgo | Extinción como desaprendizaje | Extinción como nuevo aprendizaje (Bouton) |
| --- | --- | --- |
| Qué pasa con la asociación EC-EI | Se debilita hasta desaparecer | Se conserva intacta |
| Qué se añade | Nada | Una asociación inhibitoria EC–no EI |
| Papel del contexto | Ninguno especial | Desambigua el significado del EC |
| Predicción tras la extinción | La RC no debería volver | La RC puede volver si cambia el contexto |

El análisis de Bouton contiene una asimetría importante: **lo que se aprende en extinción depende más del contexto que lo que se aprende en adquisición**. El primer aprendizaje se generaliza con facilidad a otros contextos; el segundo, el que corrige al primero, queda ligado al contexto en que se produjo.

En este marco, **contexto** tiene un sentido amplio. Incluye el lugar físico, pero también el **estado interno** (por ejemplo, el efecto de una droga o un estado de ánimo), la presencia de ciertas personas y el **paso del tiempo**. Todo lo que acompaña al aprendizaje puede actuar como contexto.

Un minicaso: Lucía se puso muy nerviosa en una entrevista de trabajo y, desde entonces, el sonido de las videollamadas le produce ansiedad. Durante semanas hace videollamadas con su familia desde su habitación y la ansiedad desaparece. Según Bouton, Lucía no ha olvidado la asociación inicial: ha aprendido que, en su habitación y con su familia, las videollamadas no traen nada malo. En la oficina, con un desconocido, la ansiedad puede volver.

La omisión de un EI esperado genera un error de predicción negativo, y es ese error el que impulsa el nuevo aprendizaje. Esta forma de entender la extinción tiene consecuencias directas para la clínica, porque las técnicas de exposición se basan precisamente en extinguir respuestas de miedo. Si la extinción no borra, el éxito de un tratamiento no garantiza que el miedo no pueda volver, y el objetivo pasa a ser que el nuevo aprendizaje se **recupere** en el mayor número de situaciones posible (apartado 7.3).

### 7.2 Recuperación espontánea, renovación y restablecimiento

La prueba de que la extinción no borra lo aprendido son los **fenómenos de retorno**: situaciones en las que una RC extinguida reaparece sin que se haya vuelto a emparejar el EC con el EI. Todos encajan con la idea de que el aprendizaje de extinción depende del contexto.

**Recuperación espontánea.** Si tras la extinción se deja pasar un tiempo y se presenta de nuevo el EC, la RC reaparece en parte. Pavlov ya la describió. En el marco de Bouton, el paso del tiempo es un **cambio de contexto temporal**: la prueba ocurre en un momento distinto del de la extinción, y el recuerdo de la extinción, más ligado a ese contexto, se recupera peor.

**Renovación.** La RC extinguida reaparece cuando se cambia el contexto físico tras la extinción. Se estudian tres diseños, nombrados por las letras de los contextos de adquisición, extinción y prueba:

![](renovacion.png)

Figura 7.1. **Renovación y restablecimiento.** El diseño ABA produce la renovación más fuerte; el ABC, renovación; el AAB, una renovación más débil. En el restablecimiento, presentar el EI solo tras la extinción hace reaparecer la RC. Esquema basado en Bouton; la fuerza relativa es orientativa. Elaboración propia.

Como muestra la figura 7.1, los diseños difieren en lo que cambia entre la extinción y la prueba:

- **ABA.** Se condiciona en el contexto A, se extingue en B y se prueba en A. Es la forma **más robusta**: al volver al contexto de adquisición, se combinan la ausencia del contexto de extinción y la presencia de un contexto asociado al EI.
- **ABC.** Se prueba en un contexto C nuevo. La RC también vuelve, lo que indica que basta con **salir del contexto de extinción**.
- **AAB.** Se condiciona y se extingue en el mismo contexto y se prueba en otro. La renovación es **más débil**, pero su existencia es muy informativa: muestra que la extinción queda ligada al contexto incluso cuando la adquisición tuvo lugar en él.

**Restablecimiento.** Tras la extinción, presentar el **EI solo**, sin el EC, hace que la RC ante el EC reaparezca. Una explicación es que el EI condiciona el contexto, y un contexto asociado al EI favorece la expresión del significado excitatorio del EC. Por eso el restablecimiento suele ser mayor si el EI se presenta en el mismo contexto en que luego se prueba el EC.

**Readquisición rápida.** Si tras la extinción se vuelve a emparejar el EC con el EI, la RC se recupera más deprisa que en la adquisición inicial. Es otro signo de que la asociación original seguía allí.

| Fenómeno | Qué se hace tras la extinción | Interpretación contextual |
| --- | --- | --- |
| Recuperación espontánea | Dejar pasar el tiempo | Cambio de contexto temporal |
| Renovación | Cambiar el contexto físico | Fuera del contexto de extinción, domina la adquisición |
| Restablecimiento | Presentar el EI solo | El contexto queda asociado al EI |
| Readquisición | Volver a emparejar EC y EI | La asociación original estaba intacta |

Estos fenómenos son modelos de laboratorio de la **recaída** clínica. Quien ha superado el miedo a conducir en la autoescuela, con un instructor al lado, puede notar que vuelve al conducir sola de noche (renovación). Quien ha dejado de fumar y no siente deseo en casa puede sentirlo con fuerza al volver al bar donde fumaba (renovación ABA). Meses después del alta, un miedo bien tratado puede reaparecer en parte sin causa aparente (recuperación espontánea).

La lección para la clínica es doble. Primera, la recaída no significa que el tratamiento fuera inútil, sino que el aprendizaje original seguía disponible. Segunda, la terapia debe intentar que el aprendizaje de extinción se **generalice** y se **recupere** fuera del contexto en que se produjo.

### 7.3 De la desensibilización sistemática al aprendizaje inhibitorio

Las técnicas de **exposición** son las aplicaciones más directas del condicionamiento clásico en clínica. Su lógica es la de la extinción: si un estímulo provoca miedo porque se asoció con una experiencia aversiva, presentarlo sin esa experiencia debería reducir el miedo. Su historia muestra cómo ha cambiado la teoría que las sustenta.

**Antecedentes.** Mary Cover Jones (1924) redujo el miedo de un niño, Peter, a los conejos acercándole el animal de forma gradual mientras comía algo que le gustaba. Fue un antecedente directo de la desensibilización sistemática y un contrapunto al caso del pequeño Albert (Unidad 3).

**La desensibilización sistemática (Wolpe, 1958).** Wolpe la fundamentó en la **inhibición recíproca**: no se puede estar a la vez relajado y ansioso, de modo que una respuesta incompatible con la ansiedad puede debilitarla. El procedimiento tiene tres componentes:

1. Entrenamiento en **relajación**.
2. Construcción de una **jerarquía** de situaciones temidas, de menor a mayor ansiedad.
3. Presentación gradual de la jerarquía, a menudo en imaginación, mientras la persona está relajada, sin pasar al siguiente escalón hasta que el anterior deja de provocar ansiedad.

Con el tiempo se comprobó que la relajación no era imprescindible y que el componente activo principal era la **exposición** al estímulo temido.

**Otras formas de exposición.** La **inundación** consiste en exponer a la persona desde el principio a la situación de máxima ansiedad, sin posibilidad de escapar, hasta que la ansiedad disminuye. La **exposición in vivo** se realiza con los estímulos reales, en lugar de en imaginación, y puede ser gradual o intensa.

**El modelo de aprendizaje inhibitorio.** La versión clásica de la exposición daba gran importancia a la **habituación** dentro de cada sesión: se esperaba que la ansiedad bajara antes de terminar, y esa reducción se tomaba como indicador de éxito. Craske et al. (2008, 2014) revisaron esta idea a la luz de la investigación sobre extinción. Sus conclusiones principales son:

- La **reducción del miedo dentro de la sesión no predice bien** el resultado a largo plazo. Una persona puede terminar una sesión con mucha ansiedad y mejorar, o terminarla tranquila y recaer.
- El objetivo de la exposición no es que el miedo baje en la sesión, sino crear un **aprendizaje inhibitorio** fuerte (EC–no EI) y, sobre todo, que ese aprendizaje sea **recuperable** en otros contextos y momentos.

De este marco se derivan varias estrategias para potenciar la exposición:

| Estrategia | En qué consiste |
| --- | --- |
| Violación de expectativas | Diseñar la exposición para que contradiga lo que la persona teme que ocurra |
| Extinción profundizada | Extinguir varios EC por separado y luego juntos |
| Extinción reforzada ocasional | Incluir, de forma infrecuente, algún emparejamiento con el EI |
| Retirada de conductas de seguridad | Eliminar las conductas que impiden comprobar que lo temido no ocurre |
| Variabilidad | Variar los estímulos, la intensidad y el orden de la exposición |
| Claves de recuperación | Llevar a otros contextos un recordatorio de lo aprendido en terapia |
| Contextos múltiples | Hacer la exposición en lugares y situaciones distintas |
| Etiquetado afectivo | Poner palabras a la emoción durante la exposición |

La **violación de expectativas** recoge la idea del error de predicción (Unidad 5): se aprende más cuando el resultado sorprende. Si alguien teme desmayarse en el metro a los cinco minutos, la exposición debe durar lo suficiente para comprobar que no ocurre. Las **conductas de seguridad**, como sentarse siempre junto a la puerta, impiden esa comprobación, porque la persona les atribuye que nada malo pase. Los **contextos múltiples** y las **claves de recuperación** responden al problema de la renovación.

Varias de estas estrategias proceden de la investigación básica y **aún están en evaluación clínica**: tienen una base teórica sólida, pero su eficacia añadida en pacientes no está establecida en todos los casos. El diseño de los tratamientos se estudia en Terapias de conducta y los trastornos en Psicopatología.

### 7.4 Reconsolidación: promesa y réplicas

La extinción crea un aprendizaje nuevo que compite con el original, pero deja este intacto. Esto plantea una pregunta con gran interés clínico: ¿existe alguna forma de **modificar el recuerdo original**? La investigación sobre **reconsolidación** sugirió que quizá sí.

Según la visión clásica, un recuerdo nuevo es frágil durante un tiempo y después se **consolida**: queda estable y ya no puede alterarse con facilidad. La hipótesis de la reconsolidación propone que, cuando un recuerdo consolidado se **reactiva**, vuelve a ser inestable durante un periodo breve y necesita estabilizarse de nuevo. Durante esa ventana, el recuerdo podría modificarse.

**El estudio de Nader, Schafe y LeDoux (2000).** Condicionaron miedo en ratas emparejando un tono con una descarga. Más tarde, cuando la memoria ya estaba consolidada, presentaron el tono para **reactivarla** e inyectaron en la **amígdala** anisomicina, un fármaco que bloquea la síntesis de proteínas. En pruebas posteriores, el miedo al tono estaba muy reducido. Sin reactivación, la anisomicina no tenía ese efecto. La conclusión fue que la memoria reactivada necesitaba volver a estabilizarse y que se podía interferir en ese proceso.

**El estudio de Schiller et al. (2010).** Trasladaron la idea a personas sin usar fármacos. Tras condicionar el miedo a un estímulo visual, presentaban un **recordatorio** (una sola presentación del EC) y, unos **10 minutos** después, dentro de la supuesta ventana de reconsolidación, hacían una sesión de **extinción**. Comparados con quienes hicieron la extinción sin recordatorio previo, estos participantes mostraron menos retorno del miedo en pruebas posteriores. La interpretación fue que la extinción, aplicada durante la reconsolidación, no creaba un aprendizaje competidor, sino que **actualizaba el recuerdo original**.

**Las réplicas.** Kindt y Soeter (2013) intentaron replicar el procedimiento de recordatorio y extinción en humanos y **no encontraron** el efecto. Otros estudios han obtenido réplicas parciales. Las razones que se discuten son varias:

- Las **condiciones límite**: el recordatorio debe desestabilizar el recuerdo sin convertirse en una sesión de extinción, y ese equilibrio parece depender de detalles del procedimiento.
- La **medida** del miedo: los resultados pueden diferir según se mida la respuesta fisiológica o el informe verbal.
- La dificultad para demostrar que se ha modificado el recuerdo original y no se ha creado un aprendizaje nuevo más resistente.

| Estudio | Especie y método | Resultado |
| --- | --- | --- |
| Nader, Schafe y LeDoux (2000) | Ratas; anisomicina en la amígdala tras reactivar | Miedo muy reducido |
| Schiller et al. (2010) | Humanos; recordatorio y extinción unos 10 min después | Menos retorno del miedo |
| Kindt y Soeter (2013) | Humanos; mismo tipo de procedimiento | No replicación |

El estado actual es de **debate**. La reconsolidación es un fenómeno con apoyo sólido en la investigación animal, pero su aplicación en humanos como forma de eliminar miedos no está establecida. Por eso **no debe enseñarse como una técnica clínica consolidada**, sino como una línea de investigación prometedora con resultados mixtos. La reconsolidación de la memoria en general se estudia en la asignatura de Memoria y sus bases neurales en Bases Biológicas.

### Consenso y debate

**Consenso:** la extinción **no borra** lo aprendido: crea un aprendizaje inhibitorio que depende del contexto más que la adquisición (Bouton). De ahí la recuperación espontánea, la renovación (ABA, la más robusta) y el restablecimiento. La exposición es el componente activo de la desensibilización sistemática, y la reducción del miedo dentro de la sesión no predice bien el resultado (Craske et al., 2008, 2014).

**Debate:** si la reconsolidación permite modificar recuerdos de miedo en humanos: Schiller et al. (2010) frente a la no réplica de Kindt y Soeter (2013) y réplicas parciales. También qué estrategias del modelo de aprendizaje inhibitorio aportan eficacia clínica añadida, porque varias siguen en evaluación.

### Mito frecuente

**Mito:** «La extinción borra lo aprendido: si el miedo desaparece con la terapia, ya no puede volver».

**Realidad:** la extinción añade un nuevo aprendizaje (EC–no EI) que compite con el original y queda ligado al contexto, según el análisis de Bouton. Por eso el miedo extinguido puede volver con el tiempo, con un cambio de contexto o tras un nuevo encuentro con el EI. Craske et al. (2014) proponen diseñar la exposición para que ese aprendizaje inhibitorio se recupere en muchos contextos.

### Conceptos clave

| Concepto | Definición |
| --- | --- |
| Extinción | Presentar el EC sin el EI y descenso resultante de la RC; es un nuevo aprendizaje inhibitorio |
| Recuperación espontánea | Reaparición parcial de la RC extinguida tras el paso del tiempo |
| Renovación | Reaparición de la RC extinguida al cambiar el contexto respecto al de extinción |
| Restablecimiento | Reaparición de la RC extinguida tras presentar el EI solo |
| Desensibilización sistemática | Exposición gradual a una jerarquía de situaciones temidas en relajación (Wolpe, 1958) |
| Inundación | Exposición desde el inicio a la situación de máxima ansiedad, sin escape |
| Conducta de seguridad | Conducta que impide comprobar que lo temido no ocurre y mantiene el miedo |
| Reconsolidación | Reestabilización de un recuerdo reactivado, durante la cual podría modificarse |

### Clave PIR

**Prioridad alta.** Se pregunta la interpretación de Bouton, la identificación de la recuperación espontánea, la renovación y el restablecimiento a partir de un caso, y qué diseño de renovación es más robusto. Trampas típicas: confundir el restablecimiento (EI solo) con la readquisición (EC y EI de nuevo), creer que el diseño AAB no produce renovación y dar la reconsolidación como técnica clínica probada.

### Autoevaluación

**1.** Según Bouton, tras la extinción la asociación original entre el EC y el EI…
a) se conserva, y se añade un aprendizaje inhibitorio
b) se debilita hasta volver a cero
c) se transforma en una asociación E-R

**2.** Una rata se condiciona en el contexto A, se extingue en B y se prueba en A. La RC reaparece. Es un caso de…
a) recuperación espontánea
b) restablecimiento
c) renovación

**3.** Tras la extinción, se presenta varias veces el EI solo y la RC ante el EC reaparece. Es un caso de…
a) readquisición
b) restablecimiento
c) renovación AAB

**4.** Según el modelo de aprendizaje inhibitorio (Craske et al., 2008, 2014), la reducción del miedo dentro de la sesión…
a) es la condición necesaria para el éxito de la exposición
b) predice el resultado mejor que cualquier otra medida
c) no predice bien el resultado a largo plazo

**5.** Kindt y Soeter (2013), al intentar replicar en humanos el procedimiento de recordatorio y extinción…
a) obtuvieron un efecto mayor que el original
b) no encontraron el efecto
c) lo confirmaron solo con anisomicina

### Soluciones

**1 a.** La asociación original sigue intacta y el contexto decide qué significado se expresa. **2 c.** Es el diseño ABA, la forma más robusta de renovación. **3 b.** En la readquisición se vuelven a emparejar el EC y el EI; aquí solo se presenta el EI. **4 c.** Lo importante es crear un aprendizaje inhibitorio fuerte y recuperable. **5 b.** Su no replicación es la base del debate actual sobre la reconsolidación en humanos.
