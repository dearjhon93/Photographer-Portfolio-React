import React, {useState} from 'react';
// import React, {useState, useEffect} from 'react';

import './portfolio-style.scss';

import Data from "./menu.js";
import Items from "./items.js";
import Tabs from "./tabs.js";

export const Portfolio = () => {

    // Consumir api
    // const [character, setCharacter] = useState([]);
    // //Servicio para consumir api usando Fech and hooks
    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data.results);
    //             setCharacter(data.results);
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // }, []);

    //User hooks para filtrado y manipulacion de JSON
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category === "all"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category === category;
       })
       setData(filteredData);
    }


    return(
        <>
        <div className="wrapper">
            <div className='title'>
            <h1>PORTAFOLIO</h1>
            <div className="line"></div>
            </div>

            <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
            {/* <div className="filters">
                <span>Todos</span>
                <span>Bodas</span>
                <span>Personas</span>
                <span>Abstractos</span>
                <span>Portaretratos</span>
            </div> */}
                
            <Items data={data} />
            {/* <div className="content">
                {character.map((post) => {
                    return (
                        <div className="img-hover-zoom" key={post.id}>
                            <img src={post.image} alt=""/>
                            <span>{post.name}</span>
                        </div>
                    );
                })}
            </div> */}
        </div>

        </>
    )
}
export default Portfolio;