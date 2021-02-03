export default function validate(values) {
    let errors = {};
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
    return errors;
}