import "../app/globals.css"
const Card = ({name, imUrl="https://www.roadtovr.com/wp-content/uploads/2014/07/sword-art-online-oculus-rift-virtual-reality.jpeg"}) => {
    return(
        <>
        <div className='main-card'>
            <h1>{name}</h1>
            <img
                src={imUrl}
        
              alt="image"/>
            
            <h3>Anime that shaped the world, recreated the fantasy world concept</h3>
        </div>
        </>
    )
}

export default Card