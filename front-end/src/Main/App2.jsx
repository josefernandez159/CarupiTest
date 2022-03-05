import React, {useEffect, useState} from "react";
import Rawg from './Rawg';
import GameList from "./GameList";
export default () =>{

const [gameList, setGameList] = useState([]);

  useEffect(() =>{
    const getAll = async () => {
      let list = await Rawg.getPopularList();
      setGameList(list);
    }

    getAll();
  }, [])
return (
  <div>
    <section className="listas">
      {gameList.map((item, key) =>(
        <div>
          <GameList key={key} items={item.items}/>
        </div>
      ))}
    </section>
  </div>
);
}