//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones


import React, { Fragment, useState } from 'react'


//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


const Form = () => {

    /////////////////////////////////
    //States

    const [appointment, SetAppointment] = useState({
        topic: '',
        name:'',
        date: '',
        hour: '',
        comments : ''
    })

    const {topic, name, date, hour, comments} = appointment;

    /////////////////////////////////
    //Funciones de Eventos

    const actualizarState = e => {
        SetAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }


    return (  
       <Fragment>
           <h2>Create Appoinment</h2>
           <form action="">
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
/// Exportamos


export default Form;