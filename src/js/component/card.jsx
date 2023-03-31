import React from 'react'

const Card = ({ name, image, url }) => {

    return (
        
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <a href={url} className="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card