import React, { useState, useEffect } from "react";

const images = [
    "https://i.pinimg.com/736x/39/29/81/39298130a307f337f2bc9fe2285d2950.jpg",
    "https://i.pinimg.com/736x/6a/f7/71/6af771b6ab8d611cbc56d184320f7203.jpg",
    "https://i.pinimg.com/736x/c4/c8/18/c4c81838de288498eda5b13b290f6b11.jpg",
    "https://i.pinimg.com/736x/83/1c/14/831c14fcebd3f448a0c3cbc0f69534fc.jpg",
];

export default function App() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [current]);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="flex flex-col m-3 md:m-0 items-center justify-center h-[300px] md:mt-7 md:w-[800px]">
            <div className="relative w-full max-w-xl aspect-video overflow-hidden rounded-lg shadow-lg">
                <img
                 id="myimage"
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    className="w-full  h-full object-cover transition-all duration-700"
                />
                {/* Prev Button */}
                <button
                    onClick={prevSlide}
                    className="absolute cursor-pointer top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow transition"
                >
                    &#8592;
                </button>
                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute cursor-pointer top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow transition"
                >
                    &#8594;
                </button>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full ${
                                idx === current ? "bg-blue-500" : "bg-white border border-blue-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
           
        </div>
    );
}