// SAIMAP Psicología · catálogo de cursos y rutas.
// Un curso = una asignatura o un minicurso con su propio temario. Las rutas solo ordenan cursos:
// el progreso se guarda por curso, así que lo hecho en una ruta cuenta en todas.
window.SP_CATALOG = {
  areas: [
    { id: 'fund', t: 'Fundamentos e historia', ico: 'book' },
    { id: 'basicos', t: 'Procesos psicológicos básicos', ico: 'spark' },
    { id: 'bio', t: 'Bases biológicas', ico: 'neuron' },
    { id: 'des', t: 'Psicología del desarrollo', ico: 'sprout' },
    { id: 'soc', t: 'Psicología social', ico: 'people' },
    { id: 'met', t: 'Metodología y psicometría', ico: 'chart' },
    { id: 'pers', t: 'Personalidad y evaluación', ico: 'id' },
    { id: 'clin', t: 'Psicopatología, clínica y salud', ico: 'heart' },
    { id: 'apl', t: 'Psicología aplicada', ico: 'compass' }
  ],
  // estado: 'ok' (disponible) | 'soon' (próximamente)
  courses: [
    { id: 'bases-biologicas', t: 'Bases Biológicas del Comportamiento', area: 'bio', estado: 'ok', color: 1 },
    { id: 'estadistica-1', t: 'Fundamentos de Estadística', area: 'met', estado: 'ok', color: 2 },
    { id: 'motivacion-emocion', t: 'Motivación y Emoción', area: 'basicos', estado: 'ok', color: 3 },
    { id: 'atencion-percepcion', t: 'Psicología de la Atención y la Percepción', area: 'basicos', estado: 'ok', color: 4 },
    { id: 'interaccion-social', t: 'Psicología de la Interacción Social', area: 'soc', estado: 'ok', color: 5 },
    { id: 'memoria', t: 'Psicología de la Memoria', area: 'basicos', estado: 'ok', color: 1 },
    { id: 'aprendizaje', t: 'Psicología del Aprendizaje', area: 'basicos', estado: 'ok', color: 2 },
    { id: 'desarrollo-infancia', t: 'Desarrollo: Infancia y Adolescencia', area: 'des', estado: 'ok', color: 3 },
    { id: 'social', t: 'Psicología Social', area: 'soc', estado: 'soon' },
    { id: 'historia', t: 'Historia, Ciencia y Profesión', area: 'fund', estado: 'soon' },
    { id: 'evaluacion-1', t: 'Evaluación Psicológica I', area: 'pers', estado: 'soon' },
    { id: 'evaluacion-2', t: 'Evaluación Psicológica II', area: 'pers', estado: 'soon' },
    { id: 'personalidad-1', t: 'Personalidad y Diferencias Individuales I', area: 'pers', estado: 'soon' },
    { id: 'personalidad-2', t: 'Personalidad y Diferencias Individuales II', area: 'pers', estado: 'soon' },
    { id: 'estadistica-2', t: 'Estadística Aplicada a las Ciencias de la Conducta', area: 'met', estado: 'soon' },
    { id: 'desarrollo-adulto', t: 'Desarrollo: Edad Adulta y Vejez', area: 'des', estado: 'soon' },
    { id: 'lenguaje', t: 'Psicología del Lenguaje', area: 'basicos', estado: 'soon' },
    { id: 'educativa', t: 'Psicología Educativa', area: 'apl', estado: 'soon' },
    { id: 'fisiologica', t: 'Psicología Fisiológica', area: 'bio', estado: 'soon' },
    { id: 'psicopatologia', t: 'Psicopatología', area: 'clin', estado: 'soon' },
    { id: 'intervencion', t: 'Intervención y Tratamientos Psicológicos', area: 'clin', estado: 'soon' },
    { id: 'metodos', t: 'Métodos y Diseños de Investigación', area: 'met', estado: 'soon' },
    { id: 'clinica', t: 'Psicología Clínica', area: 'clin', estado: 'soon' },
    { id: 'salud', t: 'Psicología de la Salud', area: 'clin', estado: 'soon' },
    { id: 'pensamiento', t: 'Psicología del Pensamiento', area: 'basicos', estado: 'soon' },
    { id: 'trabajo', t: 'Psicología del Trabajo y las Organizaciones', area: 'apl', estado: 'soon' },
    { id: 'psicofarmacologia', t: 'Psicofarmacología', area: 'bio', estado: 'soon' },
    { id: 'psicometria', t: 'Psicometría', area: 'met', estado: 'soon' },
    { id: 'infantil', t: 'Valoración e Intervención en Psicología Infantil', area: 'clin', estado: 'soon' }
  ],
  routes: [
    { id: 'grado', t: 'Grado en Psicología', sub: 'Las asignaturas de la carrera, curso a curso', ico: 'cap',
      groups: [
        { t: '1.º curso', courses: ['bases-biologicas', 'historia', 'estadistica-1', 'aprendizaje', 'memoria', 'atencion-percepcion', 'motivacion-emocion', 'desarrollo-infancia', 'social', 'interaccion-social'] },
        { t: '2.º curso', courses: ['psicopatologia', 'fisiologica', 'personalidad-1', 'personalidad-2', 'evaluacion-1', 'evaluacion-2', 'estadistica-2', 'lenguaje', 'desarrollo-adulto', 'educativa'] },
        { t: '3.º curso', courses: ['clinica', 'intervencion', 'salud', 'psicofarmacologia', 'psicometria', 'metodos', 'pensamiento', 'trabajo', 'infantil'] }
      ] },
    { id: 'pir', t: 'Preparación PIR', sub: 'Lo común con el grado, ordenado por bloques del examen', ico: 'target',
      groups: [
        { t: 'Psicobiología y psicofarmacología', courses: ['bases-biologicas', 'fisiologica', 'psicofarmacologia'] },
        { t: 'Psicopatología', courses: ['psicopatologia'] },
        { t: 'Clínica, salud e intervención', courses: ['clinica', 'intervencion', 'salud', 'infantil'] },
        { t: 'Evaluación y personalidad', courses: ['evaluacion-1', 'evaluacion-2', 'personalidad-1', 'personalidad-2'] },
        { t: 'Procesos básicos', courses: ['aprendizaje', 'memoria', 'atencion-percepcion', 'motivacion-emocion', 'pensamiento', 'lenguaje'] },
        { t: 'Desarrollo y social', courses: ['desarrollo-infancia', 'desarrollo-adulto', 'social', 'interaccion-social'] },
        { t: 'Metodología', courses: ['metodos', 'estadistica-1', 'estadistica-2', 'psicometria'] }
      ] },
    { id: 'libre', t: 'Explorar por mi cuenta', sub: 'Todo el catálogo por áreas', ico: 'compass', groups: null }
  ]
};
