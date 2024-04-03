import Card from "../components/ui/Card"

const CardTiles = ({infoArray}) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
              {infoArray.map(cardObj => 
                <Card key={cardObj.title} img={cardObj.img} body={cardObj.body} title={cardObj.title} buttonText={cardObj.buttonText} />
            )}
            </div>
        </div>
    )
}

export default CardTiles