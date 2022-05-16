//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones


import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


const Form = ({crearCita}) => {

    /////////////////////////////////
    //States

    const [appointment, SetAppointment] = useState({
        topic: '',
        name:'',
        date: '',
        hour: '',
        comments : ''
    })


    const [error, setError] = useState(false)

    const {topic, name, date, hour, comments} = appointment;

    /////////////////////////////////
    //Funciones de Eventos

    const actualizarState = e => {
        SetAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }


    const submitCita = e =>{

        e.preventDefault();

        ///// Validamos
        if(topic.trim() === '' || name.trim() ==='' || date.trim()==='' || hour.trim()==='' || comments.trim()==='') {
            setError(true);
            return
        }

        ///// Eliminar el mensaje previo de erro si existe
        setError(false);

        ///// Asignamos un ID
        appointment.id = uuidv4();

        ///// Creamos la cita
        crearCita(appointment);

        //Reiniciar el form
        SetAppointment({
            topic: '',
            name:'',
            date: '',
            hour: '',
            comments : ''
        })


    }

    return (  
       <Fragment>
           <h2>Create an Appointment</h2>

            { error 
                ? <p className='alerta-error'>Todos los campos son obligatorios</p>
                : null 
            }

           <form onSubmit={submitCita}>
               <label>Name of the Topic</label>
               <input type="text" name='topic' placeholder='Write here...' className='u-full-width' onChange={actualizarState} value={topic}/>

               <label>Name of the Owner</label>
               <input type="text" name='name' placeholder='Write here...' className='u-full-width' onChange={actualizarState} value={name}/>

               <label>Date</label>
               <input type="date" name='date' className='u-full-width' onChange={actualizarState} value={date}/>

               <label>Hour</label>
               <input type="time" name='hour' className='u-full-width' onChange={actualizarState} value={hour}/>

               <label>Comments</label>
               <textarea name="comments" className='u-full-width' onChange={actualizarState} value={comments}>
               </textarea>

               <button type='submit' className='u-full-width button-primary'>Add + </button>
           </form>
       </Fragment>
    );
}
 



//////////////////////////////////////////////////////////////////////////////////////////////
/// PropTypes y Exports

Form.propTypes={
    crearCita: PropTypes.func.isRequired
  }

export default Form;