//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones

import { Fragment, useState} from "react";
import Appoinment from "./components/Appointment";
import Form from "./components/Form";

//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


function App() {

  ///// State
  const [citas, setCitas] = useState([]);  

  ///// Función

  const crearCita = cita =>{

    console.log('CreaerCita');
      setCitas([
        ...citas,
        cita
      ])

  }

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
            <h2>Administra tu citas</h2>
            {
              citas.map(cita =>(
                <Appoinment key={cita.id}cita={cita}/>
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
