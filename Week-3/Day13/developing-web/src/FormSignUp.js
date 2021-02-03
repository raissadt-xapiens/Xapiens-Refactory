import React from 'react';
import useForm from './components/Form/Function';
import validate from './components/Form/Validation';
import '../src/assets/styles/Sign.css';


const Formies = () => {

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
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input className={`input ${errors.fullName && 'is-danger'}`} type='text' name='fullName' onChange={handleChange} value={values.fullName || ''} required />
              {errors.fullName && 
                <span className='help is-danger'>{errors.fullName}</span>}
            </div>
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
            <div className='phoneNumber'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input className={`input ${errors.phoneNumber && 'is-danger'}`} type='number' min='0' name='phoneNumber' onChange={handleChange} value={values.phoneNumber || ''} required />
                {errors.phoneNumber &&
                <span className='help is-danger'>{errors.phoneNumber}</span>}
            </div>
            <div className='address'>
                <label htmlFor='address'>Address</label>
                <input className={`input ${errors.address && 'is-danger'}`} type='text' name='address' onChange={handleChange} value={values.address || ''} required />
                {errors.address && 
                <span className='help is-danger'>{errors.address}</span>}
            </div>
            <div className='submit'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Formies;