// import React from 'react';
// import useForm from './Function';
// import validate from './Validation';
// import './Form.css';


// const Formies = () => {

//     const {
//         values,
//         errors,
//         handleChange,
//         handleSubmit,
//     } = useForm(login, validate);

//     function login() {
//         console.log('No errors, submit callback called!');
//     }

    
//     return (
//       <div className='wrapper'>
//         <div className='form-wrapper'>
//           <h2>Sign In</h2>
//           <form onSubmit={handleSubmit} noValidate>
//             <div className='email'>
//               <label htmlFor="email">Email</label>
//               <input className={`input ${errors.email && 'error'}`} type='email' name='email' onChange={handleChange} value={values.email || ''} required />
//               {errors.email.length > 0 && 
//                 <span className='error'>{errors.email}</span>}
//             </div>
//             <div className='password'>
//               <label htmlFor="password">Password</label>
//               <input className={`input ${errors.password && 'error'}`} type='password' name='password' onChange={handleChange} value={values.password || ''} required />
//               {errors.password.length > 0 && 
//                 <span className='error'>{errors.password}</span>}
//             </div>
//             <div className='submit'>
//               <button type='submit'>Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
// }

// export default Formies;