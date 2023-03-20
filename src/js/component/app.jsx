import React, { useEffect, useState } from "react";

//Components
import TaskList from "./taskList.jsx";
import Test from "./test.jsx";

const App = () => {
    
    const [taskName, setTaskName] = useState("");

    const handleInputChange = (e) => {        
        setTaskName(e.target.value);
        console.log(taskName);
    };

    const headerStyle = { textAlign: "center", verticalAlign: "middle" };

    return (
        <div className="container principal">
            <div className="container-header container-todo-shadow">
                <h1 className="titulo mt-3 display-1 opacity-25" style={ headerStyle } >todos</h1>
            </div>
            <div className="container-todo-shadow row d-flex justify-content-center">
            <input type="text" value={taskName} onChange={handleInputChange} name="name" className="ms-3 me-4 p-2" placeholder="Add a New Task" />
                <input type="text" className="p-4" placeholder="Agregue una tarea nueva"
					onKeyDown={(e)=>{
						if(e.keyCode == "13"){
							console.log("Presionaste el Enter: ", e.target.value)
                            setTaskName([...taskName, e.target.value])
						}
					}}
                />           
            
            </div>              
            <TaskList />
            <div className="container-todo-shadow1">f</div>
            <div className="container-todo-shadow2">s</div>
            <Test />
           
        </div>
        
);
};


export default App;