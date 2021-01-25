import React,{useState} from 'react';
import fallBackImage from "../../assets/placeholder.webp";

function Image({src,alt,...otherProps}) {
    const [imageUrl, setImageUrl] = useState(fallBackImage)

    return (
        <img
        src={imageUrl}
        alt={alt}
        {...otherProps}
       
        onLoad={()=>setImageUrl(src)}
        

        />
            
        
    )
}

export default Image
