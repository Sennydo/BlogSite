import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'
import Highlight from './components/highlight'

function App() {  
  const [cardCont, setCardCont] = useState([])

  useEffect(() => {
    setCardCont([{
      name: "Sao",
      imgUrl: "https://www.roadtovr.com/wp-content/uploads/2014/07/sword-art-online-oculus-rift-virtual-reality.jpeg",
    },{
      name: "Pokemon",
      imgUrl: "https://cdn.europosters.eu/image/750/pokemon-eevee-i32673.jpg",
    }])
  }, [])



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

export default App
