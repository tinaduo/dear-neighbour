import React from "react";

const ImageGrid = ({ size="", images }:{size:string, images:Array<any>}) => { //array of {image, size}
    function getStyleClasses() {
        switch (size) {
            case "tall":
                return "grid-cols-1 grid-rows-2"
            case "wide":
                return "grid-cols-1 grid-rows-1"
            default:
                return "grid-cols-2 grid-rows-2"
        }
    }
    function getImageClasses(imgSize) {
        switch (imgSize) {
            case "half":
                return "col-span-1 md:col-span-5"
            case "wide":
                return "col-span-2 md:col-span-4"
            case "large":
                return "col-span-2 md:col-span-6 row-span-2"
            case "square":
                return "col-span-2 md:col-span-4 row-span-2"
            default:
                return "col-span-1 md:col-span-2"
        }
    }

    const styleClasses = getStyleClasses();
    return (
        <section className={`${styleClasses} grid md:grid-cols-10 gap-2 w-full`}>
            {images.map((image:any, i:number) => {
                return(
                    <img key={i} src={image.url} alt={image.alt} className={`${getImageClasses(image.size)} w-full h-full object-cover rounded-lg`}/>
                )
            })}
        </section>
    );
};

export default ImageGrid;