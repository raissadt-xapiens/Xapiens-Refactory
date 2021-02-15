export default function validate(values) {
    let errors = {};
    if (!values.fullName) {
        errors.fullName = 'Please fill in the blank!';
    } else if (values.fullName.length < 4) {
        errors.fullName = 'Full Name must be at least 4 characters long!';
    }
    if (!values.email) {
        errors.email = 'Please fill in the blank!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is not valid!';
    }
    if (!values.password) {
        errors.password = 'Please fill in the blank!';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters length!';
    }
    if (!values.phoneNumber) {
        errors.phoneNumber = 'Please fill in the blank!';
    } else if (!/^\d{10}$/.test(values.phoneNumber) && values.phoneNumber.length < 10) {
        errors.phoneNumber = 'Phone Number must be at least 10 characters long!'
    }
    if (!values.address) {
        errors.address = 'Please fill in the blank!';
    } else if (values.address.length < 5) {
        errors.address = 'Address must be at least 5 characters long!';
    }
    return errors;
}