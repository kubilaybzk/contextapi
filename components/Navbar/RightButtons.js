import React from 'react'

export default function RightButtons({user,setUser,Logout,LogIn}) {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
        <button>
{user? user : "Giriş Yap"}
        </button>
        <button>
        {user? "Çıkış Yap":"Kayıt ol"}
        </button>
    </div>
  )
}
