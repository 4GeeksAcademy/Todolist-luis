import React, { useState } from 'react';



const Home = () => {
	// Estado para las tareas y el valor del input
  const [tareas, setTareas] = useState([]);
  const [inputValue, setInputValue] = useState('');

	// Manejar cambios en el input
  const entradas = (e) => {
    setInputValue(e.target.value);
  };

  	// Agregar tarea al presionar Enter
  const agregarTarea = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
		setTareas([...tareas, inputValue]);
      setInputValue('');  // Limpiar input después de agregar
    }
  };

  	// Eliminar tarea por índice
  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list-container">
      <h1 className='bg-purple-600'>todos</h1>
      <input  className='border border-gray-300 w-full px-3 py-2 focus:ring-1 focus:ring-purple-600'
      type="text" 
        placeholder="Añadir nueva tarea..."
        value={inputValue}
        onChange={entradas}
        onKeyDown={agregarTarea}
      />

      {tareas.length === 0 ? (
        <p className="mensaje-lista-vacia">No hay tareas, añadir tareas</p>
      ) : (
        <ul>
          {tareas.map((tarea, index) => (
            <li
              key={index}
              className="tarea-item"
            >
              {tarea}
              <span
                className="eliminar-icon"
                onClick={() => eliminarTarea(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
      )}
	  <div>{tareas.length} tareas</div>
    </div>
  );
};

export default Home;

