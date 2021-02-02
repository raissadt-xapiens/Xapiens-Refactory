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

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: '',
      errors: {
        fullName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
      },
      fullNameValid: false,
      emailValid: false,
      passwordValid: false,
      phoneNumberValid: false,
      addressValid: false,
      formValid: false
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;


    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
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
      case 'phoneNumber':
        errors.phoneNumber =
          value.length < 10
            ? 'Phone number must be at least 10 characters long!'
            : '';
        break;
      case 'address':
        errors.address =
          value.length < 5
            ? 'Address must be at least 5 characters long!'
            : '';
        break;  
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.fullName === '' && this.state.email === '' && this.state.password === '' && this.state.phoneNumber === '' && this.state.address === '') {
      alert('Please fill the blank!');
    } else if (validateForm(this.state.errors)) {
      alert('Sign In success!');
    } else {
      alert('Sign In error');
    }
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (validateForm(this.state.errors)) {
  //     alert('Valid Form!');
  //   } else if (event == null && event == "") {
  //     alert('Please fill all field!'); 
  //   } else {
  //     alert('Invalid Form!');
  //   }
  // }


  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit} required>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} required />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} required />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' onChange={this.handleChange} required />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='phoneNumber'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input type='number' min='0' name='phoneNumber' onChange={this.handleChange} required />
                {errors.phoneNumber.length > 0 &&
                <span className='error'>{errors.phoneNumber}</span>}
            </div>
            <div className='address'>
                <label htmlFor='address'>Address</label>
                <input type='text' name='address' onChange={this.handleChange} required />
                {errors.address.length > 0 && 
                <span className='error'>{errors.address}</span>}
            </div>
            <div className='submit'>
              <button onClick={this.handleSubmit} type='submit'>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default Signup;