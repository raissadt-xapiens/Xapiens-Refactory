import React from 'react';
import useForm from './components/Form/Function';
import validate from './components/Form/Validation';
import '../src/assets/styles/Sign.css';


const FHSignin = () => {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);

    function login() {
        console.log('No errors, submit callback called!');
    }

    
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input className={`input ${errors.email && 'is-danger'}`} type='email' name='email' onChange={handleChange} value={values.email || ''} required />
              {errors.email && 
                <span className='help is-danger'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input className={`input ${errors.password && 'is-danger'}`} type='password' name='password' onChange={handleChange} value={values.password || ''} required />
              {errors.password && 
                <span className='help is-danger'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default FHSignin;