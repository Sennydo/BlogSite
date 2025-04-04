import "../app/globals.css"
const Card = ({name, imUrl="https://www.roadtovr.com/wp-content/uploads/2014/07/sword-art-online-oculus-rift-virtual-reality.jpeg"}) => {
    return(
        <>
        <div className="flex-col bg-[#CF455C] items-center text-center w-[100%] justify-center rounded-2xl max-h-[20rem]">
            <h1 className="text-3xl pt-2 pb-2">{name}</h1>

            <div className="flex justify-center h-[60%] w-[100%] mx-auto">
                <img className="object-contain"
                    src={imUrl}
            
                alt="image"/>
            </div>

            <h3 className="text-lg text-start w-[80%] mx-auto">Anime that shaped the world, recreated the fantasy world concept</h3>
        </div>
        </>
    )
}

export default Card