import Image from 'next/image';

const NextImage = (props) => {
    const myLoader = ({ src }) => {
        return src
    }
    return (
        <Image {...props} loader={myLoader} unoptimized/>
    )
}

export default NextImage;