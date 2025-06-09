import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/auth/authThunks';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({name:"",email: "", password: ""});
    
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //dipatch the loginuser and save it in result variable
        const result = await dispatch(registerUser(formData));

        //test user data which is returned by dispatch with success status
        if(registerUser.fulfilled.match(result)) {
            const userRole = result.payload.user.role;

            //Redirect based on role
            if(userRole === "/admin") {
                navigate("/admin");
            }else {
                navigate("/dashboard");
            }
        }
    }
  return (
   <>
   <h1>Register Form</h1>
   <form onSubmit={handleSubmit}>
    <input name="name" type='name' placeholder='Enter name' value={formData.name} onChange={handleChange}/>
    <input name="email" type='email' placeholder='Enter email' value={formData.email} onChange={handleChange}/>
    <input name="password" type='password' placeholder='Enter password' value={formData.password} onChange={handleChange}/>
     <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
   </form>
    {error && <p style={{ color: "red" }}>{error}</p>}
   </>
  )
}

export default Register;