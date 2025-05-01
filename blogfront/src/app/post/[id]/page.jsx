export const revalidate = 3600;

import PostNav from "@/(components)/postNav";
import ExpandCard from "@/(components)/expandablecard/expandablecard";
import { supabase } from "../../../../lib/supabase";


const Content = async ({params}) => {
    const {id} = await params;
    //const idUse = 
    const {data} = await supabase.from("postInfo").select().eq('id', id)
    if (data.length === 0){
        return (
            <h1>Page does not exist</h1>
        )
    }
    return(
        <div>
        <PostNav />
        <h1 className="text-center text-8xl mt-3">{data[0].name}</h1>
        <div className="flex justify-center h-[15rem] m-[3rem]">
            <img src={data[0].img_url}></img>
        </div>
        <br></br>
        <ExpandCard data={data[0].firstValid} />
        <ExpandCard data={data[0].firstValid} />
    </div>
    );
}

export default Content;

// "https://www.roadtovr.com/wp-content/uploads/2014/07/sword-art-online-oculus-rift-virtual-reality.jpeg"