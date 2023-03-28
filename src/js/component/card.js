import React from 'react'
import PropType from 'prop-types'

const Card = (props) => {
    return (
            <div className="card" style="width: 18rem;">
                <img src={props.url} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
                    </div>
            </div>
    )
}

Card.propTypes = {
    title: PropType.string,
    url: PropType.string,
    description: PropType.string,
    buttonUrl: PropType.string,
    buttonLabel: PropType.string
};

export default Card