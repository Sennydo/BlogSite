
export default function Navbar(){
    return (
        <>
        <div className="w-full flex items-center justify-between pt-1 pb-3">
            <h1>An Rev</h1>
            <h1 className="text-3xl">My Anime Reviews!</h1>
            <div className="bg-white text-black rounded-2xl flex ">
                <input className="rounded-2xl px-2" placeholder="Search"/>
            </div>
        </div>
        </>
    )
}