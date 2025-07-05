"use client"

import React, { useState } from 'react'

async function makePostRequest(){
    const res = await fetch(`/api/hello`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({name: "Aman"}),
    });

    const data = await res.json();
    return {data};
}

export default function Friends() {
  const [message, setMessaage] = useState("");
  const onClick = async() => {
      const {data} = await makePostRequest();
      setMessaage(data.message);
  }
  return (
    <h1>
       Heyy Friends, {message}
       <button onClick={onClick}>Click Here</button>
    </h1>
  )
}
