'use client'
import { useState } from 'react'

const page = () => {
    const [firstName, setFirstName ] = useState('');
    const [lastName, setLastName ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState('');
    const [errors, setErrors ] = useState({});
    const [success, setSuccess ] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = "First Name is Required";
        }
        if (!lastName.trim()) {
            newErrors.lastName = "Last Name is Required";
        }
        if (!email.trim()) {
            newErrors.email = "Email is Required";
        } else if (!email.includes('@') || !email.includes('.')) {
            newErrors.email = "Enter a Valid Email";
        }

        if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        } else if (password !== confirmPassword) {
            newErrors.password = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        e.target.submit()
        setSuccess(true);

        if (validateForm()) {
            setSuccess("Registration Successful");
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setErrors({});
        }
    }
    
  return (
    <div className="box-border bg-white text-black p-10">
      <h1>Register Page</h1>
    </div>
  )
}

export default page
