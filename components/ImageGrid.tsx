import React from "react";

const ImageGrid = ({ size="", images }:{size:string, images:Array<any>}) => { //array of {image, size}
    function getStyleClasses() {
        switch (size) {
            case "reverse":
                return
            case "big":
                return
            default:
                return "grid grid-cols-5 grid-rows-4 gap-2 w-full h-[500px]"
        }
    }
    function getImageStyle(imgSize) {
        switch (imgSize) {
            case "wide":
                return {gridColumn: "span 2", gridRow: "span 2"}
            case "large":
                return {gridColumn: "span 3", gridRow: "span 4"}
            default:
                return {gridColumn: "span 1", gridRow: "span 2"}
        }
    }

    const styleClasses = getStyleClasses();
    return (
        <div className={styleClasses}>
            {images.map((image:any, i:number) => {
                return(
                    <img key={i} src={image.url} alt={image.alt} style={getImageStyle(image.size)} className="w-full h-full object-cover rounded-lg"/>
                )
            })}
        </div>
    );
};

export default ImageGrid;