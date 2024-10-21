import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(''); 
    const [passwordError, setPasswordError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [loginStatus, setLoginStatus] = useState(''); 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validateEmail = (value) => {
        if (!emailPattern.test(value)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = (value) => {
        if (value.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(value)) {
            setPasswordError('Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.');
        } else {
            setPasswordError('');
        }
    };
  


    useEffect(() => {
        if (!emailError && !passwordError && email && password) {
            setIsButtonDisabled(false); 
        } else {
            setIsButtonDisabled(true);  
        }
    }, [emailError, passwordError, email, password]); 

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const payload = { email, password };
    //     console.log('Payload:', payload);
        
    //     try {
    //         const response = await axios.post('https://dummyjson.com/auth/login', payload);  
                        
    //         console.log('Login successful:', response.data);
    //         setLoginStatus('success'); 
        
            
    //     } catch (err) {
    //         console.error('Login failed:', err);
    //         setLoginStatus('error'); 
    //     }
    // };
    
    
    
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     const payload = { email, password };
    //     console.log(payload); // Add this line before the axios call

    //     axios.post("https://dummyjson.com/auth/login",payload)
    //     .then((Response)=>{
    //         console.log(Response);
            
    //     })
    // }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { email , password };
        console.log('Payload:', payload);
    
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Login successful:', response.data);
            setLoginStatus('success');
        } catch (err) {
            if (err.response) {
                console.error('Login failed:', err.response.data); 
                setLoginStatus('error');
            } else {
                console.error('Network error or other issue:', err.message);
                setLoginStatus('error');
            }
        }
    };
    
    



    return (
        <div className="max-w-sm mx-auto mt-12 p-6 border border-gray-300 rounded-md shadow-lg bg-gray-50">
            <h2 className="text-2xl text-center mb-4 text-gray-800">Login</h2>
            {loginStatus === 'success' && (
                <p className="text-green-500 text-center mb-4">Login successful! Data saved.</p>
            )}
            {loginStatus === 'error' && (
                <p className="text-red-500 text-center mb-4">Login failed. Please try again.</p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => {
                            setEmail(e.target.value);
                            validateEmail(e.target.value);
                        }} 
                          required 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>} 
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                        }} 
                          required 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>} 
                </div>
                <button 
                    type="submit" 
                    className={`w-full py-2 text-white rounded-md focus:outline-none ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                    disabled={isButtonDisabled} 
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
