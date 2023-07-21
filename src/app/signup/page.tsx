'use client'
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "react-hot-toast"

const Signup = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  })
  const [buttonDisabled,setButtonDisabled] = React.useState(false)
  const [loading,setLoading] = React.useState(false)
  const onSignup = async () => {
      try{
        setLoading(true);
        const response = await axios.post("/api/users/signup",user)
        console.log("signup successful",response.data);
        router.push('/login')
        
      } catch(err:any){
        console.log("signup faild",err.message);
        
        toast.error(err.message)

      } finally {

      }

  }
  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  },[user])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "processing":"singup"}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input className="p-2 text-black" type="text" id="username" value={user.username} onChange={(e) => {
        setUser({ ...user, username: e.target.value })
      }} placeholder="email" />
      <label htmlFor="email">email</label>
      <input className="p-2 text-black" type="text" id="email" value={user.email} onChange={(e) => {
        setUser({ ...user, email: e.target.value })
      }} placeholder="email" />
      <label htmlFor="password">password</label>
      <input className="p-2 text-black" type="password" id="password" value={user.password} onChange={(e) => {
        setUser({ ...user, password: e.target.value })
      }} placeholder="password" />
      <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 mt-3" onClick={onSignup}>{buttonDisabled ? "NO signup" : "Signup" }</button>
      <Link href="/login">visit login page</Link>
    </div>
  )
}

export default Signup 