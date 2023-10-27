const Card = props => {
    console.log(props.img)
    return (
        <div className="card">
                <img 
                    src={props.img} 
                    alt={`Picture of ${props.name}`} 
                    className="card-img-top"
                />
            
            <div className="card-body">
                <h3 className="card-title">
                    {props.name}
                </h3>
                <p className="card-text">
                    {props.description}
                </p>
                <p>Deployed Site: <a href={props.deployed} target="_blank">{props.name}</a></p>

            </div>
        </div>
    )
}

export default Card