import React, { useState, useEffect } from "react";


//Components 


const TaskList = () => {
    
    //Declaracion de Variables
    const [tasks, setTasks] = useState([
		{ id:0, tarea: "Practivas React", done: false},
		{ id:1, tarea: "Ir al cine", done:false }
		]);

    return (
        <p>
            {tasks && tasks.length > 0 ?
				<>{tasks.map((item,index) => (
                    <div key={item.id} className="container-todo-shadow2">{ item.tarea }</div>                    
                ))
                } 
                </>
            :
			<><h1>No hay tareas</h1></>
            }
        </p>
    );
    
};

export default TaskList;