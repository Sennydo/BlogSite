
export default function Navbar(){
    return (
        <>
        <div className="w-full flex items-center justify-between pt-1">
            <h1>An Rev</h1>
            <h1 className="text-3xl">Anime Reviews</h1>
            <div className="bg-white text-black rounded-2xl w-[12rem] flex">
                <h1 className="pl-2">Search</h1>
            </div>
        </div>
        </>
    )
}