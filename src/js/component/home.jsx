import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea,setTarea]=useState("")
	const [lista,setLista]=useState([])
	function agregarTarea(){
		e.preventDefault()
		setLista([...lista,tarea])
		setTarea("")
	}
	return (
		<div className="text-center container">

			<input className="form-control" type="text" value={tarea} onChange={(e)=>setTarea(e.target.value)} />

			<button className="btn btn-success" onClick={agregarTarea}>tarea</button>

	
		</div>
	);
};

export default Home;
