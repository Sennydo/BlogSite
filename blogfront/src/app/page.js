"use client"
import Image from "next/image";
import Card from "@/(components)/Card";
import { useState, useEffect } from "react";
import Highlight from "@/(components)/highlight/highlight";

export default function Home() {
    const [cardCont, setCardCont] = useState([{
      name: "Sao",
      imgUrl: "https://www.roadtovr.com/wp-content/uploads/2014/07/sword-art-online-oculus-rift-virtual-reality.jpeg",
    },{
      name: "Pokemon",
      imgUrl: "https://cdn.europosters.eu/image/750/pokemon-eevee-i32673.jpg",
    }])
  
  
  
  
    return (
      <div className='master-page'>
        <h1>Anime Reviews</h1>
        <Highlight />
        <div className='display-div'>
          <Card name={"Sao"} />
          <Card name={"Sao"} />
          <Card name={"Sao"} />
          <Card name={"Sao"} />
          <Card name={"Sao"} />
          <Card name={"Sao"} />
          {cardCont.map((cards, idx) => (
            <Card key={idx} name={cards.name} imUrl={cards.imgUrl} />
          ))}
        </div>
      </div>
    )
}
