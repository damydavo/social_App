import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import { register, reset } from '../features/auth/authSlice';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { username, email, password, confirmPassword } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { isError, isSuccess, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/')
        }

        dispatch(reset())

    }, [isError, isSuccess, message, navigate, dispatch])


    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error('Password does not match')
        } else {
            const userData = {
                username,
                email,
                password
            }
            dispatch(register(userData))
        }
    }

    return (
        <div className="block p-8 md:p-0 md:flex items-center justify-center my-18 md:my-28 space-x-0 md:space-x-12">
            <div className="block space-y-3 w-80 md:w-96 my-8">
                <h2 className="tracking-tight text-4xl text-blue-500 font-bold">Damysocial</h2>
                <p className="text-xl md:text-lg">Connect with friends and the world around you on Davosocial</p>
            </div>

            <section className="flex justify-center items-center mt-4 md:p-6 bg-[#f2f2f2] rounded-md">
                <form onSubmit={handleSubmit} className="w-80 space-y-4 p-8 md:p-0">
                    <input type="text" required name="username" placeholder="Username" value={username} onChange={handleChange}
                        className="mt-1 w-full px-2 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                    <input type="text" placeholder="Email" name="email" value={email} onChange={handleChange} className="mt-1 w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                    <input type="password" placeholder="Password" value={password} onChange={handleChange} name="password"
                        className="mt-1 w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                    <input type="password" placeholder="confirm password" name="confirmPassword" value={confirmPassword} onChange={handleChange}
                        className="mt-1 w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                    <button className="px-3 py-3 w-full text-sm text-dark font-semibold rounded-lg border border-purple-200 bg-blue-500 text-white  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Sign up</button>

                    <p className="flex justify-center text-blue-500">Forgot password?</p>
                    <Link to="/login" className="flex items-center justify-center mx-7 mt-2 md:mx-14 px-3 py-3 w-52 text-sm text-dark font-semibold rounded-lg border border-purple-200 bg-green-500 text-white  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Log into Account</Link>


                </form>
            </section>
        </div>);
}

export default Register;