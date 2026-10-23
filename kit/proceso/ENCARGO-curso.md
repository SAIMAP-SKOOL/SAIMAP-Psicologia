# Encargo · Contenido de la app «{{ASIGNATURA}}» (SAIMAP Psicología)

Vas a escribir el contenido de ejercicios de 4 unidades del curso para la app de estudio (tipo Duolingo).

## Material obligatorio
1. **Formato y reglas (OBLIGATORIAS):** {{RAIZ}}/cursos/FORMATO.md. Léelo entero.
2. **Temario fuente**, lo único que vale como contenido: {{RAIZ}}/temarios/{{ID}}/0*.md.
   - Cada unidad tiene 4 apartados, N.1–N.4, y cada apartado es un módulo.
   - Usa también los recuadros (Consenso y debate, Mito, Conceptos clave, Clave PIR). Asigna cada ítem que saques de ellos al módulo cuyo apartado trata ese contenido.
3. **Ejemplo de un curso ya terminado**, para imitar estilo, dificultad y densidad: {{RAIZ}}/cursos/memoria/data-u01-04.js. Léelo entero.
4. **Validador:** `node {{RAIZ}}/cursos/check_course.js {{RAIZ}}/cursos/{{ID}}`. Carga course.js y todos los data-*.js de la carpeta.

## Lo que debes entregar
Un archivo {{RAIZ}}/cursos/{{ID}}/data-u{{AA}}-{{BB}}.js que empiece así:
```js
// SAIMAP Psicología · {{CORTO}} · Unidades {{AA}}–{{BB}}
window.COURSE.units.push(
{ n: AA, t: "Título exacto de la unidad", cap: C, pir: "alta|media|baja", mods: [ ...4 módulos... ] },
...
);
```
- **Títulos.** El `t` de la unidad y el de cada módulo se copian exactamente del temario, sin el número «N.k».
- **`cap`.** Es el capítulo del temario: {{CAPITULOS}}.
- **`pir`.** Es la prioridad del recuadro «Clave PIR» de esa unidad, en minúsculas.
- **Cada módulo lleva:**
  - `t`;
  - `tip`: 2–4 frases con la idea clave del apartado;
  - `v` ×8;
  - `g` ×5;
  - `tf` ×4, aproximadamente la mitad F, con explicación;
  - `q` ×4, con al menos un minicaso aplicado por unidad (mejor uno por módulo);
  - `inc` ×1;
  - `seq` 0–1, solo cuando el contenido tenga una secuencia real, por ejemplo {{SECUENCIAS}};
  - `cls` 0–1, solo cuando haya categorías nítidas, por ejemplo {{CATEGORIAS}}.

## Calidad (lo que más importa)
- **Fidelidad total al temario SAIMAP.** Ni un dato que no esté allí. Respeta los matices de consenso y debate y los mitos corregidos ({{MITOS_CLAVE}}).
- **Dificultad tipo PIR / examen universitario.** Matices, autores, fases, excepciones y las trampas típicas del recuadro Clave PIR. Una sola respuesta defendible.
- **Opciones de `g`, `q` e `inc`.** Tres, del mismo tipo y de longitud parecida. La correcta NO puede ser sistemáticamente la más larga: el validador mide el porcentaje de veces que es más larga que las dos distractoras, y debe quedar por debajo del 25 %.
- **Distractores plausibles**, basados en confusiones reales: {{CONFUSIONES}}.
- **Lengua y signos.** Español de España, claro. Comillas «latinas».
  - No uses `|`, `=`, `___`, `>` ni `;` dentro de los textos.
  - La excepción es su uso como separadores donde el formato lo exige: en `cls` el `;` separa elementos y en `seq` el `>` separa pasos.
- **Ítems `v`.** Definiciones de ≤ 100 caracteres que no repitan el concepto. Conceptos de ≤ 5 palabras.

## Antes de terminar
Ejecuta el validador. Verá también los archivos de los compañeros si ya existen; ignora sus errores. Tu archivo debe dar 0 errores y ningún AVISO tuyo que se pueda evitar. Responde solo con un resumen de 3 líneas: archivo, número de ítems y dudas.
