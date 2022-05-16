//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones


import React from 'react'
import PropTypes from 'prop-types';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


const Appointment = ({cita,eliminarCita}) => {

    return (
        <div className='cita'>
            <p>Topic:<span>{cita.topic}</span></p>
            <p>Owner<span>{cita.name}</span></p>
            <p>Date:<span>{cita.date}</span></p>
            <p>Hour:<span>{cita.hour}</span></p>
            <p>Comments:<span>{cita.comments}</span></p>
            <button className='button eliminar u-full-width' onClick={ () => eliminarCita(cita.id) }> Delete &times;</button>
        </div>
    )
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// PropTypes y Exports


Appointment.propTypes={
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
  }

export default Appointment;