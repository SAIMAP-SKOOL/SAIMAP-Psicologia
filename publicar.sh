#!/bin/bash
# Copia la web construida (app/dist) a la raíz del repositorio de publicación, conservando android/, .github/ y README.
set -e
R=/home/claude/repo-psico
cd /home/claude/psico/app && python3 build.py > /dev/null
find $R -mindepth 1 -maxdepth 1 ! -name android ! -name .github ! -name README.md ! -name .git -exec rm -rf {} +
cp -r /home/claude/psico/app/dist/. $R/
touch $R/.nojekyll
echo "web copiada en $R"
