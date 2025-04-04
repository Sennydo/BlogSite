import Card from "../Card";
const Grid = ({cardCount}) => {

    return (
        <div className="grid grid-cols-4 gap-5 m-5">
            {cardCount.map((card, idx) => (
                <Card key={idx} name={card.name} imUrl={card.imgUrl} />
            ))}
        </div>
    )
}

export default Grid;
