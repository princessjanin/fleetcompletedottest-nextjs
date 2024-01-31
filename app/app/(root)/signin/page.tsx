"use client";

import { useEffect, useState } from 'react'
import Login from './components/login';


const SignInPage = () => {
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
      setIsMounted(true);
  }, [])

  if (!isMounted) {
      return null;
  }
    
  return (
    <>
      <div style={{height: "90vh"}}>
        <div className="grid h-5/6 place-items-center">
          <Login />
        </div>
      </div>
      
    </>
  )
}

export default SignInPage
