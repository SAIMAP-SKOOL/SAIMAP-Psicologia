#!/bin/bash
# Uso: kit/publicar.sh <carpeta del clon de la rama main>
# Construye la web (app/dist) y la copia a la raíz de la rama main, conservando android/, .github/, README y .git.
# También copia firebase/ (funciones de Premium y reglas de Firestore), que despliega el flujo firebase.yml.
set -e
FUENTE=$(cd "$(dirname "$0")/.." && pwd); R=${1:?indica la carpeta del clon de main}
cd "$FUENTE/app" && python3 build.py > /dev/null
find "$R" -mindepth 1 -maxdepth 1 ! -name android ! -name .github ! -name README.md ! -name .git -exec rm -rf {} +
cp -r "$FUENTE/app/dist/." "$R/"; touch "$R/.nojekyll"
mkdir -p "$R/firebase" && cp -r "$FUENTE/firebase/." "$R/firebase/" && rm -rf "$R/firebase/functions/node_modules"
echo "web y firebase/ copiadas en $R"
