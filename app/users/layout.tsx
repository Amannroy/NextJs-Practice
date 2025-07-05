import React from 'react'

export default function layout({children,}:{children: React.ReactNode;}) {
  return (
    <div>
       <h1 style={{color: "red"}}>This is a User Route</h1>
       {children}
    </div>
  )
}
