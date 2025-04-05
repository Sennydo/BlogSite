"use client"
import Image from "next/image";
import Card from "@/(components)/Card";
import { useState, useEffect } from "react";
import Highlight from "@/(components)/highlight/highlight";
import Grid from "@/(components)/grid/grid";
import { supabase } from "../../lib/supabase";

export default function Home() {
    const [cardCont, setCardCont] = useState([]
      /*[{
      name: "Sword Art Online",
      imgUrl: "https://www.roadtovr.com/wp-content/uploads/2014/07/sword-art-online-oculus-rift-virtual-reality.jpeg",
    },{
      name: "Pokemon",
      imgUrl: "https://cdn.europosters.eu/image/750/pokemon-eevee-i32673.jpg",
    }]
      */)

    useEffect(()=> {
      async function fetchDat(){
        const {data} = await supabase.from("showCards").select()
        setCardCont(data);
      }
      fetchDat()
    }, [])

  
    return (
      <div>
        <Highlight />
        <Grid cardCount={cardCont} />
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
