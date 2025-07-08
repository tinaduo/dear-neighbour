import React from "react";

const ImageGrid = ({ image1, image2, image3, image4}) => {
    return (
        <div className="grid grid-cols-5 grid-rows-4 gap-2 w-full h-[400px]">
        {image1 && (
            <div className="col-span-3 row-span-4 row-start-1 overflow-hidden">
            <img
                src={image1}
                alt="Project image 1"
                className="w-full h-full object-cover rounded-lg"
            />
            </div>
        )}

        {image4 && (
        <div className="col-start-4 col-span-2 row-span-2 row-start-3">
            <img
            src={image4}
            alt="Project image 4"
            className="w-full h-full object-cover rounded-lg"
            />
        </div>
        )}
        {image3 && (
        <div className="row-span-2 col-start-4 row-start-1 overflow-hidden">
            <img
            src={image3}
            alt="Project image 3"
            className="w-full h-full object-cover rounded-lg"
            />
        </div>
        )}
        {image2 && (
        <div className="row-span-2 col-start-5 row-start-1 overflow-hidden">
            <img
            src={image2}
            alt="Project image 2"
            className="w-full h-full object-cover rounded-lg"
            />
        </div>
        )}
        </div>
    );
};

export default ImageGrid;