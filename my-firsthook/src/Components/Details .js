import React from 'react'
import MoviesData from './MoviesData'

import {Link} from 'react-router-dom'

const Details=(props)=>{
    const x =MoviesData
    return(
        <div>
            {console.log(props)}
            <Link to='/'>
            <button>Home</button>
            </Link>
            <h1>
                {x.find((el)=> props.match.params.name===el.name).name}
                  
            </h1>
            
            <br />
            <p>{x.find((el)=> props.match.params.name===el.name).trailer}</p>
            
            <p>{x.find((el)=> props.match.params.name===el.name).description}</p>
        </div>
    )
}
export default Details




