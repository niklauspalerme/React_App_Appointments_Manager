//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones


import React, { Fragment } from 'react'


//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


const Form = () => {
    return (  
       <Fragment>
           <h2>Create Appoinment</h2>
           <form action="">
               <label>Name of the Topic</label>
               <input type="text" name='topic' placeholder='Write here...' className='u-full-width'/>

               <label>Name of the Owner</label>
               <input type="text" name='name' placeholder='Write here...' className='u-full-width'/>

               <label>Date</label>
               <input type="date" name='date' className='u-full-width'/>

               <label>Hour</label>
               <input type="time" name='hour' className='u-full-width'/>

               <label>Comments</label>
               <textarea name="comments" className='u-full-width'>
               </textarea>

               <button type='submit' className='u-full-width button-primary'>Add + </button>
           </form>
       </Fragment>
    );
}
 

//////////////////////////////////////////////////////////////////////////////////////////////
/// Exportamos


export default Form;