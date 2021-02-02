import React from 'react';
// import { FormErrors } from './FormErrors';
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
      email: null,
      password: null,
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

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      alert('Sign In success!');
    } else{
      alert('Sign In error!');
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Sign In</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
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





// import React, { Component } from 'react';
// import { FormErrors } from './FormErrors';
// import '../src/assets/styles/Sign.css';


// class SignIn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: null,
//       password: null,
//       formErrors: {
//         email: '',
//         password: ''
//       },
//       emailValid: false,
//       passwordValid: false,
//       formValid: false      
//     };
//   }


//   handleChange = (event) => {
//     event.preventDefault();
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({[name]: value},
//       () => { this.validateField(name, value) });
//   }

//   validateField(fieldName, value) {
//     let fieldValidationErrors = this.state.formErrors;
//     let emailValid = this.state.emailValid;
//     let passwordValid = this.state.passwordValid;

  
//     switch (fieldName) {
//       case 'email': 
//         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         fieldValidationErrors.email = emailValid 
//         ? '' : ' is invalid!';
//         break;
//       case 'password': 
//         passwordValid = value.length < 8;
//         fieldValidationErrors.password = passwordValid 
//         ? 'Password must be at least 8 characters long!'
//         : '';
//         break;
//       default:
//         break;
//     }
//     this.setState({ formErrors: fieldValidationErrors,
//                     emailValid: emailValid,
//                     passwordValid: passwordValid}, this.validateForm);
//   }

//   validateForm() {
//     this.setState({formValid: this.state.emailValid && this.state.passwordValid});
//   }
//   errorClass(error) {
//     return(error.length === 0 ? '' : 'has-error');
//   }


//   render() {
//     return (
//       <div className='wrapper'>
//         <div className='form-wrapper'>
//           <h2>Sign In</h2>
//           <div className='panel panel-default'>
//             <FormErrors formErrors={this.state.formErrors} />
//           </div>
//           <form>
//             <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
//               <label htmlFor="email">Email</label>
//               <input type='email' name='email' placeholder='Put your email' onChange={this.handleChange} value={this.state.email} required />
//             </div>
//             <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
//               <label htmlFor="password">Password</label>
//               <input type='password' name='password' placeholder='Put your password' onChange={this.handleChange} value={this.state.password} required />
//             </div>
//             <div className='submit'>
//               <button disabled={!this.state.formValid} type='submit'>Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default SignIn;







// import React, { Component } from 'react';
// import { FormErrors } from './FormErrors';
// import '../src/assets/styles/Sign.css';

// class SignIn extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       formErrors: {email: '', password: ''},
//       emailValid: false,
//       passwordValid: false,
//       formValid: false
//     }
//   }

//   handleUserInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState({[name]: value},
//                   () => { this.validateField(name, value) });
//   }

//   validateField(fieldName, value) {
//     let fieldValidationErrors = this.state.formErrors;
//     let emailValid = this.state.emailValid;
//     let passwordValid = this.state.passwordValid;

//     switch(fieldName) {
//       case 'email':
//         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         fieldValidationErrors.email = emailValid ? '' : ' is invalid';
//         break;
//       case 'password':
//         passwordValid = value.length >= 6;
//         fieldValidationErrors.password = passwordValid ? '': ' is too short';
//         break;
//       default:
//         break;
//     }
//     this.setState({formErrors: fieldValidationErrors,
//                     emailValid: emailValid,
//                     passwordValid: passwordValid
//                   }, this.validateForm);
//   }

//   validateForm() {
//     this.setState({formValid: this.state.emailValid && this.state.passwordValid});
//   }

//   errorClass(error) {
//     return(error.length === 0 ? '' : 'has-error');
//   }

//   render () {
//     return (
//       <form className="demoForm">
//         <h2>Sign up</h2>
//         <div className="panel panel-default">
//           <FormErrors formErrors={this.state.formErrors} />
//         </div>
//         <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
//           <label htmlFor="email">Email address</label>
//           <input type="email" required className="form-control" name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleUserInput}  />
//         </div>
//         <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
//           <label htmlFor="password">Password</label>
//           <input type="password" className="form-control" name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleUserInput}  />
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
//       </form>
//     )
//   }
// }

// export default SignIn;