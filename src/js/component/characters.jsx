import { useEffect, useState } from 'react'
import React from 'react'

const Characters = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])


  return (
    <>
      <div className="text-center mt-5">Characters</div>
      <div className="card">
        <ul>
          {data?.map((chr) => (
            <li key={chr.uid}>{chr.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Characters