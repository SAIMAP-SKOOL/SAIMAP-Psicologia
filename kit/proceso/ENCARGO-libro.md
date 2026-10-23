# Encargo · Temario SAIMAP «{{ASIGNATURA}}»

Vas a redactar parte de un libro-temario ORIGINAL en Markdown (español de España) para SAIMAP Psicología. Un constructor propio lo convierte a PDF, así que respeta el formato al pie de la letra.

## Material
- Dossier de contenidos y evidencia: {{DOSSIER}}. Es la fuente principal; úsalo a fondo.
- Texto del manual universitario: {{MANUAL}}. Úsalo SOLO para comprobar que cubres lo que el manual trata en cada apartado. Está prohibido copiar o parafrasear de cerca sus frases o ejemplos. La redacción es propia.
- Ejemplo de estilo y formato (otra asignatura ya publicada): {{RAIZ}}/temarios/memoria/03-codificacion.md. Léelo entero antes de empezar e imita su registro, densidad, longitud y recuadros.

## Reglas de contenido
1. **Rigor.** Solo afirmaciones del consenso académico o del dossier. No inventes nada: ni autores, ni fechas, ni cifras, ni citas textuales. Si un dato no está en el dossier y no es conocimiento de manual totalmente seguro, no lo pongas. Las cifras que el dossier marca como aproximadas, dalas como aproximadas. Autores con el año entre paréntesis: (Tulving, 1972).
2. **Consenso, debate y mitos.** Separa lo que es CONSENSO de lo que está en DEBATE, y corrige los MITOS según el dossier: {{MITOS_CLAVE}}.
3. **Lengua.** Español de España, claro, sin barroquismos ni condescendencia. Frases cortas. Negritas para los términos clave, sin abusar. Comillas «latinas». Decimales con coma.
4. **Ejemplos.** Ejemplos y minicasos propios y cotidianos.
5. **Solapamientos con otras asignaturas** ({{SOLAPES}}). Menciónalos brevemente y remite a la otra asignatura.
6. **Tono.** Nada de emojis. Nada de «En este apartado veremos…» ni cierres de relleno.
7. **Asterisco.** No uses `*` dentro de una palabra (por ejemplo ACT*), porque rompe las negritas. Escribe `∗` (U+2217).

## Formato exacto de cada archivo
```
# Capítulo N · Título del capítulo

Un párrafo de presentación del capítulo (2–3 frases).

## Unidad N · Título

**Objetivos:** objetivo 1; objetivo 2; objetivo 3 (en minúscula, separados por punto y coma).

### N.1 Título del apartado
(texto: 450–650 palabras por apartado; párrafos, listas, alguna tabla Markdown cuando ayude)

### N.2 …
### N.3 …
### N.4 …

### Consenso y debate
**Consenso:** …
**Debate:** …

### Mito frecuente
**Mito:** «…»
**Realidad:** … (con autores y año)

### Conceptos clave
| Concepto | Definición |
| --- | --- |
(8 filas; definición ≤ 110 caracteres)

### Clave PIR
**Prioridad alta|media|baja.** Qué se pregunta y la trampa típica (3–4 frases).

### Autoevaluación
**1.** Pregunta…
a) …
b) …
c) …
(5 preguntas, 3 opciones, una correcta; la correcta en posiciones variadas; distractores plausibles y de longitud similar)

### Soluciones
**1 b.** Explicación breve. **2 a.** … (todo en un párrafo)
```
- **Apartados.** Cada unidad tiene exactamente 4 apartados, numerados N.1–N.4, con los títulos indicados abajo. Puedes ajustar levemente la redacción del título, no su contenido.
- **Encabezados.** No uses `####` ni otros `###` distintos de los indicados.
- **Archivos sin capítulo.** Un archivo sin línea `# Capítulo` continúa el capítulo anterior y empieza directamente por `## Unidad N · …`.
- **Tablas.** La primera fila es la cabecera. Las celdas no llevan saltos de línea.
- **Figuras.** Inserta EXACTAMENTE las que se te asignan, en el apartado indicado y en el punto del texto donde mejor encajen. Usa esta sintaxis, con una línea en blanco antes y otra después:
```
![m](nombre.png)

Figura N.k. **Título breve.** Una o dos frases que expliquen qué muestra la figura. Elaboración propia.
```
  - Tamaños: `![m]` es ancho medio, `![](…)` es ancho completo y `![s](…)` es pequeño. Usa el tamaño indicado para cada figura.
  - La numeración k es correlativa dentro de cada unidad.
  - Remite a cada figura en el texto («como muestra la figura 3.1»).
- **Longitud objetivo por unidad:** 2.300–2.800 palabras en total.

## Estructura del libro (16 unidades; tú solo escribes las tuyas)
{{ESTRUCTURA}}

## Contenido de las figuras propias (descríbelas en el pie de forma coherente)
{{FIGURAS}}

## Tu parte
{{TU_PARTE}}

## Entrega
Escribe tu archivo con la herramienta Write en {{RAIZ}}/temarios/{{ID}}/ con el nombre indicado. Antes de terminar, relee el archivo y comprueba:
- los encabezados;
- que cada unidad tiene 4 apartados;
- 5 preguntas con 3 opciones cada una;
- que las soluciones son coherentes con las preguntas;
- que cada figura tiene su pie;
- que no hay ningún dato fuera del dossier.

Responde solo con un resumen de 3 líneas: archivo, número de palabras y cualquier duda.
