import React from "react";

const ImageGrid = ({ size="", images }:{size:string, images:Array<any>}) => { //array of {image, size}
    function getStyleClasses() {
        switch (size) {
            case "reverse":
                return
            case "big":
                return
            default:
                return "grid grid-cols-2 md:grid-cols-5 grid-rows-4 gap-2 w-full"
        }
    }
    function getImageClasses(imgSize) {
        switch (imgSize) {
            case "wide":
                return "col-span-2 row-span-2"
            case "large":
                return "col-span-2 md:col-span-3 row-span-4"
            default:
                return "col-span-1 row-span-2"
        }
    }

    const styleClasses = getStyleClasses();
    return (
        <div className={styleClasses}>
            {images.map((image:any, i:number) => {
                return(
                    <img key={i} src={image.url} alt={image.alt} className={`${getImageClasses(image.size)} w-full h-full object-cover rounded-lg`}/>
                )
            })}
        </div>
    );
};

export default ImageGrid;