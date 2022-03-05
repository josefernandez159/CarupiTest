import React from "react";
import './GameList.css'

export default ({title, items}) => {
  return (
    <div className="conjunto">
      <h2>{title}</h2>
      <div className="conjunto--games">
        <div className="conjunto--gameslist">
        {items.results.length > 0 && items.results.map((item,key) => (
         <div key={key} className="conjunto--item">
           <div className="txt">{item.name}</div>
           <div className="txt2">{`Lançamento dia: ${item.released}`}</div>
           <div className="txt3">{`Gêneros: ${item.genres[0].name} e ${item.genres[1].name}`}</div>
           <div className="txt4">{`Plataformas: ${item.platforms[0].platform.name} e ${item.platforms[1].platform.name}`}</div>
           <div className="txt5">{`Nota: ${item.rating} de 5`}</div>
 <img src={item.background_image} title={item.name} alt={item.name}/> 
         </div>
        ))}
        </div>
      </div>
    </div>
  )
}