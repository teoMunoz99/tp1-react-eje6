import React from "react";
import CardColor from "./CardColor";

const GridCards = ({ListaColores, borrarColor}) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
        {
         ListaColores.map((color, indice)=> <CardColor key={indice} color={color} borrarColor={borrarColor}></CardColor>)   
        }
    </div>
  );
};

export default GridCards;
