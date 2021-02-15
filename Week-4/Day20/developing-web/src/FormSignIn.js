import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import useForm from './components/Form/Function';
import validate from './components/Form/ValidationSignIn';
import '../src/assets/styles/Sign.css';


const FHSignin = () => {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);

    const history = useHistory();

    function login() {
        alert('Sign In success!');
        console.log('No errors, submit callback called!');
        history.push("/landing");
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
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input className={`input ${errors.password && 'is-danger'}`} type='password' name='password' onChange={handleChange} value={values.password || ''} required />
              {errors.password && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button type="submit">Submit</button>
            </div>
            <p className="register-link">Dont have an account?<NavLink href="/signup" rel="noreferer noopener" style={{color: "black", textAlign: "left", marginLeft: "-12.5px"}}>Sign Up</NavLink></p>
          </form>
        </div>
      </div>
    )
}

export default FHSignin;