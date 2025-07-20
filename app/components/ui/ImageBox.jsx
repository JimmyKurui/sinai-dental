const ImageBox = ({image}) => {
    return (
        <div className="colored-box" 
            style={image 
            ? {
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 30%'
            } 
            : {}}
        ></div>
    )
}

export default ImageBox