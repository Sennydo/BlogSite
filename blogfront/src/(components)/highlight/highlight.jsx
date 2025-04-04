import './highlight.module.css'

const Highlight = () => {
    return(
        <div className="flex w-full h-[30rem] overflow-clip justify-around mb-5">
            
            <div className='w-[50%] flex-col justify-center items-center text-center'>
                <h1 className="text-6xl">Sword Art Online</h1>
                <h2>Review Content</h2>
            </div>
            <div className="w-[45%] h-max flex">
                <div className='w-[70%] h-[30rem] flex'>
                    <img className="w-full h-full object-contain" src='https://m.media-amazon.com/images/I/91c8NsnMQzL._AC_UF894,1000_QL80_.jpg' 
                    alt="Poster image Unavailable" />
                </div>

            </div>

        </div>
    )
}

export default Highlight