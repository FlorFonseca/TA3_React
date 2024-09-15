import React, { useState } from "react";
import 'bulma/css/bulma.min.css';
import { agregarTarea, eliminarTarea, editarTarea, Hecha } from "./logicaTareas"; 

function ToDoList() {
    const [tareas, setTareas] = useState([]); 
    const [inputTarea, setInputTarea] = useState('');

    const handleAgregarTarea = () => {
        if (inputTarea.trim()) {
            agregarTarea(inputTarea, setTareas, tareas);
            setInputTarea('');
        }
    };

    const handleEditarTarea = (index) => {
        const nuevaDescripcion = prompt("Editar tarea:", tareas[index].descripcion);
        if (nuevaDescripcion) {
            editarTarea(index, nuevaDescripcion, setTareas, tareas);
        }
    };

    const handleEliminarTarea = (index) => {
        eliminarTarea(index, setTareas, tareas);
    };

    const handleHecha = (index) => {
        Hecha(index, setTareas, tareas);
    };

    return (
        <div className="container mt-5">
            <h1 className="title has-text-primary-100">Lista de Tareas</h1>
            {/* Input y botón para agregar tarea */}
            <div className="field has-addons ">
                <div className="control is-expanded">
                    <input
                        className="input is-hovered"
                        type="text"
                        placeholder="Nueva tarea"
                        value={inputTarea}
                        onChange={(e) => setInputTarea(e.target.value)}
                    />
                </div>
                <div className="control">
                    <button className="button is-primary" onClick={handleAgregarTarea}>
                        Agregar Tarea
                    </button>
                </div>
            </div>

            {/* Lista de tareas */}
            {tareas.map((tarea, index) => (
                <div key={index} className={`card mb-4 ${tarea.completada ? 'has-background-success-light' : ''}`}>
                    <header className="card-header">
                        <p className="card-header-title">Tarea {index + 1}</p>
                        <button className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            {tarea.descripcion}
                            <br />
                            {/* Checkbox para marcar si la tarea está completada */}
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={tarea.completada}
                                    onChange={() => handleHecha(index)}
                                />
                                {' '}Completa
                            </label>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item" onClick={() => handleEditarTarea(index)}>
                            Editar
                        </a>
                        <a href="#" className="card-footer-item" onClick={() => handleEliminarTarea(index)}>
                            Eliminar
                        </a>
                    </footer>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;
