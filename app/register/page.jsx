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
    <div className="box-border bg-cover p-10 h-[100%] w-full bg-linear-to-tl from-blue-200 via-blue-600 via-40%  to-blue-100 mb-20 md:px-20">
        <div className='border-2 rounded-3xl p-7 text-white border-gray-400 align-center justify-center mt-30 shadow-lg md:w-1/3 md:mx-auto'>
            <h1 className='font-bold text-2xl mb-10 md:text-3xl'>Sign Up</h1>

            <form className='flex flex-col gap-5' method='POST' onSubmit={handleSubmit}>
                <label>First Name</label>
                <input className='border-b-1 border-white/30 outline-none' name="firstName" type="text" value={firstName} placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)} />

                {errors.firstName && (<p className='text-red-400 text-center'>{errors.firstName}</p>)}

                <label>Last Name</label>
                <input className='border-b-1 border-white/30 outline-none' name='lastName' placeholder='Enter Last Name' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && (<p className='text-red-400 text-center'>{errors.lastName}</p>)}

                <label>Email</label>
                <input className='border-b-1 border-white/30 outline-none' name='email' placeholder='Enter Email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && (<p className='text-red-400 text-center'>{errors.email}</p>)}

                <label>Password</label>
                <input className='border-b-1 border-white/30 outline-none' name='password' placeholder='Enter Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && (<p className='text-red-400 text-center'>{errors.password}</p>)}

                <label>Confirm Password</label>
                <input className='border-b-1 border-white/30 outline-none' name='confirmPassword' placeholder='Confirm Password' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <div className='flex items-center justify-center text-center my-3'>
                <input type='checkbox' className='cursor-pointer outline-none' required /> <span className='ml-3'>I agree to the Terms and Conditions</span>
                </div>

                <button type='submit' className='font-bold bg-blue-700 cursor-pointer rounded-[10px] text-center mx-8 p-2 hover:text-yellow-200 hover:bg-blue-600 transition-all duration-500 ease-in-out'>Sign Up</button>

                {success && (<p className='text-green-400 text-center'>{success}</p>)}
            </form>

          
            <p className='mt-5 items-center text-center'>Already have an account? <a href="/" className="text-gray-700 underline hover:text-blue-700">Login</a></p>
            
        </div>
    </div>
  )
}

export default page
