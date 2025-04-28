import Card from "../Card";
const Grid = ({cardCount}) => {

    return (
        <div className="grid grid-cols-4 gap-5 m-5">
            {cardCount.map((card, idx) => (
                <Card key={idx} name={card.name} img_url={card.img_url} tagline={card.tagline} postID={card.postID} />
            ))}
        </div>
    )
}

export default Grid;
