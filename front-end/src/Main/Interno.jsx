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
 <img src={item.background_image} alt={item.name}/> 
           <h1>{item.name}</h1>
           {/* <p>{`Este jogo foi desenvolvido por ${item.}`}</p> */}
         </div>
        ))}
        </div>
      </div>
    </div>
  )
}