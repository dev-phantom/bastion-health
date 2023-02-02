import Image from 'next/image';

const Images = ({imgLink, imgAlt, width, height}) => {
    return <Image 
                src={imgLink}
                alt={imgAlt}
                width={width}
                height={height}
            />
}
 
export default Images;