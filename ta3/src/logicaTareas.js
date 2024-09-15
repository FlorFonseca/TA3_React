export const agregarTarea = (descripcion, setTareas, tareas) => {
    const nuevaTarea = {
        descripcion,
        completada: false
    };
    setTareas([...tareas, nuevaTarea]);
};

export const eliminarTarea = (index, setTareas, tareas) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
};

export const editarTarea = (index, nuevaDescripcion, setTareas, tareas) => {
    const tareasActualizadas = tareas.map((tarea, i) =>
        i === index ? { ...tarea, descripcion: nuevaDescripcion } : tarea
    );
    setTareas(tareasActualizadas);
};

export const Hecha = (index, setTareas, tareas) => {
    const tareasActualizadas = tareas.map((tarea, i) =>
        i === index ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(tareasActualizadas);
};
