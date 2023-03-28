import React from 'react'
import PropTypes from 'prop-types'

const Card = () => {
    return (
            <div className="card" style="width: 18rem;">
                <img src={url} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
};

export default Card