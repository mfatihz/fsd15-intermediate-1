const PosterImage = ({src}) => {
    return (
        <img
            src={src}
            alt="Poster"
            className="w-full h-full object-cover" 
        />
    );
};

export default PosterImage
