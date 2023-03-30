import React from 'react'

const Card = ({ name, gender, skin_color, eye_color }) => {

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    aquí iría la imagen
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{gender?.name}</p>
                        <p className="card-text">{skin_color?.name}</p>
                        <p className="card-text">{eye_color?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card