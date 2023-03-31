import { useEffect, useState } from 'react'
import React from 'react'
import Card from '../component/card.jsx'

const Characters = () => {

  const [url] = useState("https://www.swapi.tech/api/");

  const [characters, setCharacters] = useState(null);

  useEffect(() => {

    getCharacters(`${url}/planets/`);

  }, [])

  const getCharacters = async (url) => {

    try {

      const response = await fetch(url);
      const data = await response.json();

      const { results } = data;

      results.forEach(async ({ origin: { name, url } }, i) => {
        /* console.log("consultando " + name);
        console.log(url); */
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
          characters.results.map(({ id, name, status, image, origin, url }) => {
            return (
              <div className="col-md-6" key={id}>
                <Card name={name} status={status} image={image} origin={origin} url={url} />
              </div>
            )
          })
        }
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between py-3">
          <button className={"btn btn-primary btn-sm " + (characters?.previous ? "" : "disabled")}
            onClick={() => getCharacters(characters?.info?.previous)}
          >
            Prev
          </button>
          <button className={"btn btn-primary btn-sm " + (characters?.next ? "" : "disabled")}
            onClick={() => getCharacters(characters?.info?.next)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Characters