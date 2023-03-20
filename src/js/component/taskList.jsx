import React, { useState, useEffect } from "react";


//Components 
import trashIcon from "../../img/trash3.svg";

const TaskList = () => {
    
    //Declaracion de Variables
    const [tasks, setTasks] = useState([
		{ id:1, tarea: "Practivas React", done: false},
		{ id:2, tarea: "Ir al cine", done:false }
		]);

    const addNewTask = (newTaskName) => {
        setTasks([ ...tasks, {id: tasks.length, tarea: newTaskName, done: false }]);
    };
    
    const removeTask = () => {
        setTasks((current) =>
          current.filter((task) => task.id !== 1)
        );
      };
    const eliminarTarea = (id) => {
        tasks.filter((tasks) => {
            console.log(tasks.id);
            console.log(id)
                (tasks.id === id) ? console.log(tasks.id) : console.log("No esta")

                //return index =! indice
            }
        );
    }
    return (
        <div className="">
           {tasks && tasks.length > 0 ?
				<>{tasks.map((item,index) => (
                    <>
                    <div key={item.id} className="border border-danger d-flex justify-content-between">
                        { item.tarea }
                    <button 
						   className="ocultar" 
						   type="button"
						   onClick={() => {
							    eliminarTarea(index)
						}}	>
							Eliminar
					</button>
                    </div> 
                    <li key={item.id}> { item.tarea }
                    <button 
						   className="ocultar" 
						   type="button"
						   >							
                            eliminar
					</button>
                    </li>  
                    
                    </>        
                ))
                } 
                </>
            :
			<><h1>No hay tareas</h1></>
            }        
        </div>        
        
    );
    
};

export default TaskList;