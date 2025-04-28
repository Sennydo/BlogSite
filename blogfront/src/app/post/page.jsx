import ExpandCard from "@/(components)/expandablecard/expandablecard"
import ScrollCard from "@/(components)/scrollCard/scrollCard"
import PostNav from "@/(components)/postNav"
export default function PostPage() {
    return (
        <div>
            <PostNav />
            <h1 className="text-center text-8xl mt-3">Sword Art Online</h1>
            <div className="flex justify-center h-[15rem] m-[3rem]">
                <img src="https://www.roadtovr.com/wp-content/uploads/2014/07/sword-art-online-oculus-rift-virtual-reality.jpeg"></img>
            </div>
            <br></br>
            <ExpandCard />
            <ExpandCard />
        </div>
    )
}