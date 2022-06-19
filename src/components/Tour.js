import React, { useState } from 'react'

const Tour = ({id, image, info, name, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour' key={id}>
        <img src={image} alt="" />
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4 className='tour-price'>{price}</h4>
            </div>
            <p>{readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)} className='btn'>
                {!readMore ? 'Read More' : 'Show Less'}
            </button>
            </p>
            <button onClick={() => removeTour(id)} className='delete-btn'>Not Interested</button>
        </footer>
    </article>
  )
}

export default Tour