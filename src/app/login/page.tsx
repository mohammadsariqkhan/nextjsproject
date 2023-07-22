'use client'
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios" 
import toast from "react-hot-toast"

const LoginPage = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [buttonDisabled,setButtonDisabled] = useState(false)
  const [loading,setLoading] = useState(true)
  useEffect(()=> {
    if(user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  })
  const onLogin = async () => {
    try{
      setLoading(true)
      const response = await axios.post('/api/users/login',user)
      console.log("login successful",response.data);
      toast.success("login success")
      router.push("/profile")  
      
    } catch(err:any) {
      console.log("login failed", err.message);
      toast.error(err.message);
      
    } finally {
      setLoading(false)
    }

  }


  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "processing" : "login"}</h1>
      <hr />
    
      <label htmlFor="email">email</label>
      <input className="p-2 text-black" type="text" id="email" value={user.email} onChange={(e) => {
        setUser({ ...user, email: e.target.value })
      }} placeholder="email" />
      <label htmlFor="password">password</label>
      <input className="p-2 text-black" type="text" id="password" value={user.password} onChange={(e) => {
        setUser({ ...user, password: e.target.value })
      }} placeholder="password" />
      <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 mt-3">{!buttonDisabled ? "login" : "no"}</button>
      <Link href="/signup">link</Link>
    </div>
  )
}

export default LoginPage 