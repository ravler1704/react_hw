import React from 'react'
import Star from "./Star/Star.jsx";
import './Stars.css'
import { nanoid } from 'nanoid'

function Stars({ count= 0 }) {
    if ( count < 1 || count > 5 || typeof count !== 'number') {
        return null
    } else {
        const items = [];
        for (let i = 1; i <= count; i += 1) {
            items.push(<li key={nanoid()}><Star /></li>);
        }
        return (
            <ul className="card-body-stars u-clearfix">
                {items}
            </ul>
        )
    }

}

export default Stars
