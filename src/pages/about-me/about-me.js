import React from 'react';

import './about-me-style.scss';
import aboutMe from './../../../src/Assets/aboutme.jpg';

export const AboutMe = () => {
    return(
        <>
        <div className="wrapper">
            <div className="title">
                <h1>ACERCA DE MI</h1>
                <div className="line"></div>
            </div>
            <div className="content_hero">
                <div className="content_about">
                    <h2>YO AMO LO QUE HAGO</h2>
                    <p>Soy una fotógrafa apasionada por capturar momentos únicos y especiales. 
                        Mi enfoque se centra en la fotografía de bodas, retratos y eventos, pero también 
                        tengo experiencia en fotografía de paisajes y de productos. Mi estilo es natural y 
                        cercano, siempre buscando capturar la esencia de cada momento. <br/><br/>Mi objetivo es crear 
                        imágenes bellas y emotivas que duren toda la vida. Mi portafolio digital muestra 
                        una selección de mi trabajo y estoy disponible para reservar sesiones en cualquier 
                        momento.</p>
                </div>
                <img src={aboutMe} alt=''/>
            </div>
        </div>

        </>
    )
}
export default AboutMe;