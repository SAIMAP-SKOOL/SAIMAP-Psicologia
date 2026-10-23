# SAIMAP Psicología · Formato de contenido de un curso

Derivado del formato compacto de SAIMAP Lingo. Cada asignatura es un curso: `cursos/<id>/data-uNN-MM.js` (un archivo por bloque de unidades) que hacen `window.COURSE.units.push(...)`, más `cursos/<id>/course.js` con la cabecera.

## Unidad

```js
{ n: 1, t: "Qué es la psicobiología", cap: 1, pir: "baja", mods: [ /* 4 módulos */ ] }
```

- `n`: número de unidad (igual que en el temario). `t`: título (igual que en el temario).
- `cap`: capítulo del temario. `pir`: "alta" | "media" | "baja" (del recuadro Clave PIR).
- El 5.º módulo (repaso) lo genera el motor.

## Módulo (= un apartado del temario, p. ej. 1.1)

```js
{ t: "Definición y disciplinas",
  tip: "Explicación breve (2–4 frases) con la idea clave del apartado.",
  v:   [ 8 × "concepto=definición" ],
  g:   [ 5 × "frase con ___|correcta|distractor|distractor" ],
  tf:  [ 4 × "afirmación|V"  o  "afirmación|F|por qué es falsa" ],
  q:   [ 4 × "pregunta|correcta|distractor|distractor|explicación" ],
  inc: [ 1 × "enunciado|INCORRECTA|correcta|correcta|explicación" ],
  seq: [ 0–1 × "título|paso 1>paso 2>paso 3>…" ],
  cls: [ 0–1 × "título|Categoría A: x; y; z|Categoría B: u; v" ] }
```

### Qué ejercicio genera cada campo

| Campo | Ejercicios en la app |
| --- | --- |
| `v` | Emparejar (5 pares), concepto → elegir definición, definición → elegir concepto, escribir el concepto (si es corto) |
| `g` | Completar el hueco con 3 opciones |
| `tf` | Verdadero / Falso / No sé (formato PIR); si es falsa, se muestra la explicación |
| `q` | Test de 3 opciones con explicación |
| `inc` | «¿Cuál es INCORRECTA?»: 1 incorrecta + 2 correctas, con explicación |
| `seq` | Ordenar los pasos de una secuencia |
| `cls` | Clasificar elementos en 2–3 categorías |

## Reglas (obligatorias)

1. **Fidelidad al temario.** Todo dato debe estar en el temario SAIMAP de la asignatura o ser conocimiento de manual totalmente consensuado y coherente con él. Nada de datos nuevos discutibles. Respetar los matices de «Consenso y debate»: lo que está en debate no se presenta como hecho.
2. **Español de España**, registro claro, sin barroquismos. Sin condescendencia.
3. **`v`**: un solo `=`. Concepto breve (≤ 5 palabras), definición ≤ 100 caracteres, sin repetir el concepto dentro de su definición. Ninguna definición repetida dentro del módulo. 8 por módulo.
4. **`g`**: exactamente un `___`. Las 3 opciones distintas, del mismo tipo gramatical y de longitud parecida; las tres deben encajar sintácticamente en la frase. 5 por módulo.
5. **`tf`**: 4 por módulo, aproximadamente la mitad falsas. Las falsas deben ser errores plausibles (confusiones típicas), nunca negaciones triviales («no es cierto que…»). La explicación de las falsas, ≤ 140 caracteres.
6. **`q` e `inc`**: siempre **3 opciones**, de longitud, estilo y complejidad gramatical similares. La correcta **no** puede ser sistemáticamente la más larga ni la más precisa. Explicación ≤ 160 caracteres. Al menos una `q` por unidad debe ser un **minicaso** aplicado (paciente, experimento, situación) cuando el contenido lo permita.
7. **Dificultad**: preguntas sobre matices, excepciones y términos técnicos precisos; nada trivial. Pero justas: una sola respuesta defendible.
8. **`seq`** solo para secuencias reales y ordenadas (fases, recorridos, pasos). **`cls`** solo con categorías nítidas. Ningún paso o elemento contiene `>` `|` `;` internos.
9. No usar `|` ni `=` ni `___` dentro de los textos salvo como separadores.
10. Cada módulo corresponde a un apartado (x.1–x.4) y se titula igual que en el temario.
