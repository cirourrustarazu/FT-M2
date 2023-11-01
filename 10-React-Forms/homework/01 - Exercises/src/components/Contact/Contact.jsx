import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {
  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    message:""
  })

  const [errors, setErrors] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleChange = (e) =>{
    const { name, value } = e.target;
    const newInputs = {...inputs,[name]:value};
    setInputs(newInputs);

    // Valida y actualiza los errores
    const validationErrors = validate(newInputs);
    setErrors(validationErrors);
  }

  const handleSubmit = (event) =>{
    event.preventDefault()

    const errorArray = Object.values(errors);
    if (errorArray.length === 0) {
      // No hay errores, mostrar mensaje de éxito
      alert('Datos completos');
      // Restablecer los estados inputs y errors a su estado inicial
      setInputs({
        name: '',
        email: '',
        message: '',
      });
      setErrors({
        name: '',
        email: '',
        message: '',
      });
    } else {
      // Mostrar mensaje de error
      alert('Debe llenar todos los campos');
    }
  }

  return <div>
    <form onSubmit={handleSubmit}> 
      <label htmlFor="name">Nombre:</label>
      <input name="name" value={inputs.name}className={errors.name && 'warning'} placeholder="Escribe tu nombre..." type="text" onChange={handleChange}/>
      {errors.name && <p className="danger">{errors.name}</p>}

      <label htmlFor="email">Correo Electrónico:</label>
      <input name="email" value={inputs.email} className={errors.email && 'warning'}placeholder="Escribe tu email..." type="text"onChange={handleChange}/>
      {errors.email && <p className="danger">{errors.email}</p>}

      <label htmlFor="message">Mensaje:</label>
      <textarea name="message" value={inputs.message} className={errors.message && 'warning'} placeholder="Escribe tu mensaje..." type="text" onChange={handleChange}/>
      {errors.message && <p className="danger">{errors.message}</p>}

      <button type='submit'>Enviar</button>
    </form>
  </div>
}

export function validate(inputs) {
   // Declara una variable errors como un objeto vacío
   let errors = {};

   // Valida el campo "name"
   if (!inputs.name) {
     errors.name = 'Se requiere un nombre';
   }
 
   // Valida el campo "email"
   if (!regexEmail.test(inputs.email)) {
     errors.email = 'Debe ser un correo electrónico';
   }
 
   // Valida el campo "message"
   if (!inputs.message) {
     errors.message = 'Se requiere un mensaje';
   }
 
   // Retorna el objeto errors
   return errors;
}