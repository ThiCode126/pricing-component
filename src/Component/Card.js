import React from 'react'

const Card = ({item,isAnnual}) => {

    const { title, style, month, year, storage, users, send } = item;

    return (
        <div className={`card ${style}`} >
            <h6 className="title">
                {
                    title
                }
            </h6>
            <div className="price">
                    <span className="dol">$ </span>
                    {
                        isAnnual ? year : month
                    }
            </div>
            <div className="desc">
                <p>
                    {
                        `${storage} Storage`
                    }
                </p>
                <p>
                    {
                        `${users} Users Allowed`
                    }
                </p>
                <p>
                    {
                        `Send up to ${send}`
                    }
                </p>
            </div>
            <button className="more" type="button">learn more</button>
        </div>
    )
}

export default Card