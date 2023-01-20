import React from 'react';

export const Items = ({data}) => {
    return(
        <>
        <div className="content">
        {
            data.map((value)=>{
            const {id, image, name, description} = value;
            return (
                <div className="img-hover-zoom" key={id}>
                    <img src={image} alt={description}/>
                    <span>{name}</span>
                </div>
            )
            })
        }
        </div>
        

        </>
    )
}
export default Items;