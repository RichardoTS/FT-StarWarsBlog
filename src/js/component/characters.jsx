import { useEffect, useState } from 'react'
import React from 'react'
import Card from '../component/card.jsx'

const Characters = () => {

  const [url] = useState("https://www.swapi.tech/api/");

  const [characters, setCharacters] = useState(null);

  useEffect(() => {

    getCharacters(`${url}/people/`);

  }, [])

  const getCharacters = async (url) => {

    try {

      const response = await fetch(url);
      const data = await response.json();

      const { results } = data;

      results.forEach(async ({ origin: { name, url } }, i) => {
        /* console.log("consultando " + name);
        console.log(url); */
        console.log("consultando" + homeworld);
        if (url) {
          const resp = await fetch(url);
          const info = await resp.json();
          //console.log(info);
          data.results[i].origin.info = info;
        }
      });

      setCharacters(data);

    } catch (error) {
      console.log(error.message);
    }

  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between py-3">
          <button className={"btn btn-primary btn-sm " + (characters?.previous ? "" : "disabled")}
            onClick={() => getCharacters(characters?.previous)}
          >
            Prev
          </button>
          <button className={"btn btn-primary btn-sm " + (characters?.next ? "" : "disabled")}
            onClick={() => getCharacters(characters?.next)}
          >
            Next
          </button>
        </div>
      </div>
      <div className="row">
        {
          !!characters &&
          characters.results.map(({ uid, name, url, image}) => {
            return (
                <div className="col-md-6" key={uid}>
                  <Card name={name} url={url}/>
                  <p>{name}</p>
                  <p>{url}</p>
                </div>
            )
          })
        }
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between py-3">
          <button className={"btn btn-primary btn-sm " + (characters?.previous ? "" : "disabled")}
            onClick={() => getCharacters(characters?.previous)}
          >
            Prev
          </button>
          <button className={"btn btn-primary btn-sm " + (characters?.next ? "" : "disabled")}
            onClick={() => getCharacters(characters?.next)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Characters