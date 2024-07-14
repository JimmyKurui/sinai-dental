import Card from "../components/ui/Card"

const CardTiles = ({infoArray}) => {
    return (
        <div className="container-fluid container-md">
            <div className="row justify-content-center">
              {infoArray.map(cardObj => 
                <Card key={cardObj.title} img={cardObj.img} body={cardObj.body} title={cardObj.title} buttonText={cardObj.buttonText} />
            )}
            <div className="col-6 col-md-4 col-lg-3 mb-3 mb-sm-0">
            <div className="card">
                <div className="card-body"></div>
                    <blockquote className="twitter-tweet">
                        <p lang="en" dir="ltr">It is usually cash before care when you seek health care in Uganda, but sometimes you are lucky. Today I met Dr. Matthew Rubona at Sinai clinic, who cured my son´s fear for going to the dentist. Such a gentle, knowledgeable and caring dentist. Can highly recommend him! 
                        <a href="https://twitter.com/hashtag/uganda?src=hash&amp;ref_src=twsrc%5Etfw">#uganda</a>
                        </p>
                        &mdash; Sofi Lundin (@Sofilundin) 
                        <a href="https://twitter.com/Sofilundin/status/1764700637642502533?ref_src=twsrc%5Etfw">March 4, 2024</a>
                    </blockquote> 
                </div>
                </div>
            </div>
        </div>
    )
}

export default CardTiles