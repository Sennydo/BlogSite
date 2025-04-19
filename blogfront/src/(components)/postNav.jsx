import React from "react";

const PostNav = () => {
    return (
        <header>
            <div className="p-2">
                <h1 className="text-center text-5xl">My Anime Reviews!</h1>
            </div>
            <div className="flex items-center justify-center p-2">
                <button className=""><h1>Search</h1></button>
            </div>
        </header>
    )
}

export default PostNav;