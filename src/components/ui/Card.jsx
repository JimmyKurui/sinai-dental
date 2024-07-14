const Card = ({img, body, title, buttonText}) => {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
            <div className="card-image">
                <img src={img} alt={title} className="rounded-circle" />
            </div>
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">{ body }</p>
          <a href="#" className="btn btn-primary">{ buttonText } </a>
        </div>
      </div>
    </div>
  );
}

export default Card
