import React from 'react'

const Appoinment = ({cita}) => {

    return (
        <div className='cita'>
            <p>Topic:<span>{cita.topic}</span></p>
            <p>Owner<span>{cita.name}</span></p>
            <p>Date:<span>{cita.date}</span></p>
            <p>Hour:<span>{cita.hour}</span></p>
            <p>Comments:<span>{cita.comments}</span></p>
        </div>
    )
}
 
export default Appoinment;