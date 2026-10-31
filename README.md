# SAIMAP Psicología · fuente

- `app/`: código de la app.
- `cursos/`: contenido de los cursos.
- `kit/`: constructor de temarios y plantillas del proceso.
- `temarios/<asignatura>/`: fuentes de los temarios (Markdown, `img/`, `tools/figuras.py` y `book.json`).

## Comandos
- `python3 kit/build_temario.py temarios/<id>`: genera el PDF del temario en `temarios/<id>/pdf/`.
- `python3 kit/build_epub.py temarios/<id> [salida.epub]`: genera el EPUB del temario (por defecto junto al PDF).
- `python3 kit/build_kdp.py <carpeta con los PDF> <salida>`: cubiertas completas para KDP (contraportada, lomo numerado y portada) e interiores sin portada. Papel con `PAPEL=color-premium|color-estandar|bn-blanco|bn-crema`.
- `python3 temarios/<id>/tools/figuras.py [nombre…]`: regenera las figuras propias.
- `node cursos/check_course.js cursos/<id>`: valida un curso.
- `python3 app/build.py`: genera la web en `app/dist/`, incluida la teoría por apartados.
- Pruebas:
  - `node app/tests/test_engine.js`
  - `python3 app/tests/test_teoria.py`
  - `python3 app/tests/test_ui.py`
  - `python3 app/tests/test_teoria_ui.py <id>`
- `kit/publicar.sh <clon de main>`: construye y copia la web a la rama `main`.

## Plantillas del proceso (`kit/proceso/`)
- `ENCARGO-libro.md`: encargo para redactar unidades del temario.
- `ENCARGO-curso.md`: encargo para escribir el contenido de la app.
- `figuras_base.py`: utilidades de matplotlib para las figuras propias.

La rama `main` contiene la web publicada y el proyecto Android. Los PDF no se versionan aquí: se generan.
