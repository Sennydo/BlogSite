export const revalidate = 43200;

import Image from "next/image";
import Card from "@/(components)/Card";
//import { useState, useEffect } from "react";
import Highlight from "@/(components)/highlight/highlight";
import Grid from "@/(components)/grid/grid";
import { supabase } from "../../lib/supabase";
import Navbar from "@/(components)/navbar/navbar";

export default async function Home() {

  const {data} = await supabase.from("showCards").select()
  
  /*
  const cardCont = [
    {
      name: "Sword Art Online",
      imgUrl: "https://www.roadtovr.com/wp-content/uploads/2014/07/sword-art-online-oculus-rift-virtual-reality.jpeg",
    },{
      name: "Pokemon",
      imgUrl: "https://cdn.europosters.eu/image/750/pokemon-eevee-i32673.jpg",
    }
  ]
    */
  
  
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <Highlight />
        <Grid cardCount={data} />
      </div>
    )
}


/*
        <div className='display-div'>
          
          <Card name={"Sword Art Online"} />
          {cardCont.map((cards, idx) => (
            <Card key={idx} name={cards.name} imUrl={cards.imgUrl} />
          ))}
        </div>

        Anime that shaped the world, recreated the fantasy world concept
*/
