import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Importo estilos
import "../../styles/todolist.css"

//create your first component
const Home = () => {
	const[arrTemp, setArrTemp] = useState([
		{ tarea: "Pasear al perro", done: false},
		{ tarea: "Ir al cine", done:false }
		])
    //const arrTemp = ["Pasear al perro", "Ir al cine"]
	const eliminarTarea = (indice) =>{
		setArrTemp(
			arrTemp.filter((item, index) => {
				return index =! indice
		    })
		)
	}

	useEffect(()=>{console.log("Se reenderizo el componente Home")},[arrTemp])
	
	return (
		<div className="container justify-content-cenert align-item-center">
			<div className="row d-flex justify-content-center">
				<input 
				    placeholder="Agregue una tarea nueva"
					onKeyDown={(e)=>{
						if(e.keyCode == "13"){
							console.log("Presionaste el Enter: ", e.target.value)
							setArrTemp([...arrTemp, e.target.value])
						}
					}}
			    />
			</div>
			<div className="row">
				{arrTemp && arrTemp.length > 0 ?
				    <>{arrTemp.map((item, index)=> { //Funcion callback
					return<li key={index} className="d-flex justify-content-between">
						{item.tarea} - {item.done ? "Realizada" : "Por Hacer"}
						<button 
						   className="ocultar" 
						   type="button"
						   onClick={() => {
							    eliminarTarea(index)
						}}					
					>
							Eliminar
					</button>
					</li>
					})}</>
				:
				<><h1>No hay tareas</h1></>
				}
				Tareas
			</div>
		</div>
	);
};

export default Home;
