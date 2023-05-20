import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice';
import { spinner } from '../assets';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        //redirect if it's successful
        if (isSuccess) {
            navigate('/')
        }

        dispatch(reset())

    }, [isLoading, isError, isSuccess, message, dispatch, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    if (isLoading) return (
        <div className='flex items-center justify-center mx-auto container mt-28'><img className='w-16 h-16' src={spinner} alt="spinner" /></div>

    )

    return (
        <div className="block p-8 md:p-0 md:flex items-center justify-center my-18 md:my-44 space-x-0 md:space-x-12">
            <div className="block space-y-3 w-80 md:w-96 my-8">
                <h2 className="tracking-tight text-4xl text-blue-500 font-bold">Damysocial</h2>
                <p className="text-xl md:text-lg">Connect with friends and the world around you on Davosocial</p>
            </div>

            <section className="flex justify-center items-center mt-4 md:p-6 bg-[#f2f2f2] rounded-md">
                <form onSubmit={handleSubmit} className="w-80 space-y-4 p-8 md:p-0">
                    <input type="text"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />

                    <button className="px-3 py-3 w-full text-sm text-dark font-semibold rounded-lg border border-purple-200 bg-blue-500 text-white  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Log In</button>

                    <p className="flex justify-center text-blue-500">Forgot password?</p>
                    <Link to='/register' className="flex items-center justify-center mx-7 md:mx-14 px-3 py-3 w-52 text-sm text-dark font-semibold rounded-lg border border-purple-200 bg-green-500 text-white  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Create an Account</Link>


                </form>
            </section>
        </div>);
}

export default Login;