import Image from 'next/image';

const Images = ({imgLink, imgAlt, width, height, className}) => {
    return <Image 
                src={imgLink}
                alt={imgAlt}
                width={width}
                height={height}
                className={className}
            />
}
 
export default Images;