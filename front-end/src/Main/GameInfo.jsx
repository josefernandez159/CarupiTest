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
          {item.platforms[0].name}
         </div>
        ))}
        </div>
      </div>
    </div>
  )
}


// <h1>{item.name}</h1>
// <h2>{item.platform}</h2>
// <h3>{item.genres}</h3> 

// João precisa de um site de jogos com duas páginas (home e interna),
// Home: Página com uma listagem dos jogos mais populares
// Interna: Ao clicar num jogo da home o usuário deverá ser direcionado para a
// interna que mostrará o nome do jogo, foto, categorias, plataformas e desenvolvedor
// do jogo.