//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones


import { Fragment, useState, useEffect} from "react";
import Appointment from "./components/Appointment";
import Form from "./components/Form";


//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


function App() {


  ///// Variables

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales){
    citasIniciales= [];
  }

  ///// State
  const [citas, setCitas] = useState([]);  

  ///// Use Effect
  useEffect ( () =>{
    if (citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas])

  ///// Funciones

  const crearCita = cita =>{
      setCitas([
        ...citas,
        cita
      ])
  }

  const eliminarCita = id =>{
    const newCitas = citas.filter (cita=> cita.id !== id);
    setCitas(newCitas);
  }

  const titulo = citas.length !== 0 
                  ? 'Managing your Appointments'
                  : 'There is not appointment yet...'



  return (
    <Fragment>
      <h1>Appointments Manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {
              citas.map(cita =>(
                <Appointment key={cita.id} cita={cita} eliminarCita={eliminarCita}/>
              ))

            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exportamos


export default App;
