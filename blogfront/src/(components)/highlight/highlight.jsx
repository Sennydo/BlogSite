import './highlight.module.css'

const Highlight = () => {
    return(
        <div className="flex h-64">
            <div className="w-[50%] h-80%">
                <img className="object-cover" src='dhttps://m.media-amazon.com/images/I/91c8NsnMQzL._AC_UF894,1000_QL80_.jpg' 
                alt="Poster image Unavailable" />
            </div>
            <div>
                <h1>SAO</h1>
                <p>Review Content</p>
            </div>
        </div>
    )
}

export default Highlight