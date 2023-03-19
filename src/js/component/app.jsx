import React from "react";

//Components
import TaskList from "./taskList.jsx";



const App = () => {

    const headerStyle = { textAlign: "center", verticalAlign: "middle" };

    return (
        <div className="container">
            <div className="container-header">
                <h1 className="titulo mt-3 display-1 opacity-25" style={ headerStyle } >todos</h1>
            </div>
            <div className="container-todo-shadow">
                <input className="p-4" placeholder="Agregue una tarea nueva"
					onKeyDown={(e)=>{
						if(e.keyCode == "13"){
							console.log("Presionaste el Enter: ", e.target.value)
						}
					}}
                />
            
                <div className="container-todo-shadow1">                
                   <h2>Todo List</h2>
                </div>
                
            
            </div>              
            <TaskList />     
        </div>
        
);
};


export default App;