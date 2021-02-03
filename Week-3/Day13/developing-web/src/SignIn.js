import React from 'react';
import '../src/assets/styles/Sign.css';


const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
      emailValid: false,
      passwordValid: false,
      formValid: false      
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (this.state.email === null || this.state.email === "") {
  //     alert('Please fill the email');
  //   } else if (this.state.password === null || this.state.password === "") {
  //     alert('Please fill password');
  //   } else if (validateForm(this.state.errors)) {
  //     alert('Sign In success!');
  //   } else {
  //       alert('Sign In error!');
  //   }
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.email === '' && this.state.password === '') {
      alert('Please fill the blank!');
    } else if (validateForm(this.state.errors)) {
      alert('Sign In success!');
    } else {
      alert('Sign In error!');
    }
  }


  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Sign In</h2>
          <form onSubmit={this.handleSubmit} required>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} required />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} required />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button onClick={this.handleSubmit} type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default SignIn;