# SAIMAP Psicología · fuente

Código de la app (`app/`), contenido de los cursos (`cursos/`), constructor de temarios (`kit/`) y fuentes de los temarios (`temarios/<asignatura>/`: Markdown, figuras y book.json).

- `python3 kit/build_temario.py temarios/<asignatura>` genera el PDF del temario.
- `python3 app/build.py` genera la web en `app/dist/` (incluye la teoría por apartados).
- `node cursos/check_course.js cursos/<asignatura>` valida un curso.

La rama `main` contiene la web publicada y el proyecto Android.
