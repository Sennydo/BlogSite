import './highlight.module.css'

const Highlight = () => {
    return(
        <div className="flex w-full h-[30rem] overflow-clip justify-around mb-5">
            <div className="w-[35%] h-max flex">
                <div className='w-[70%] h-[30rem] flex'>
                    <img className="w-full h-full object-cover" src='https://m.media-amazon.com/images/I/91c8NsnMQzL._AC_UF894,1000_QL80_.jpg' 
                    alt="Poster image Unavailable" />
                </div>

            </div>
            <div className='w-[35%]'>
                <h1>SAO</h1>
                <p>Review Content</p>
            </div>
        </div>
    )
}

export default Highlight