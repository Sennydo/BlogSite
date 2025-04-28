import "../app/globals.css"
import Link from "next/link"
const Card = ({postID, name, img_url="https://www.roadtovr.com/wp-content/uploads/2014/07/sword-art-online-oculus-rift-virtual-reality.jpeg", tagline}) => {

    return(
        <>
        <div className="flex-col items-center text-center w-[100%] justify-center rounded-2xl max-h-[25rem] border-3 border-black">
            <Link href={`/post/${postID}`}>
            <h1 className="text-3xl pt-2 pb-2">{name}</h1>

            <div className="flex justify-center h-[50%] w-[100%] mx-auto">
                <img className="object-contain"
                    src={img_url}
            
                alt="image"/>
            </div>

            <h3 className="text-lg text-start w-[80%] mx-auto">{tagline}</h3>
            </Link>
        </div>
        </>
    )
}

export default Card