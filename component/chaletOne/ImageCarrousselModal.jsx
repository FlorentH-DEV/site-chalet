"use client"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatch_toogleModal } from "../../features/modalSlice";
import Image from "next/image";

const images = [
    "/images/chalet1/imagesChalet1/1.png",
    "/images/chalet1/imagesChalet1/2.png",
    "/images/chalet1/imagesChalet1/3.png",
    "/images/chalet1/imagesChalet1/4.png",
    "/images/chalet1/imagesChalet1/5.png",
    "/images/chalet1/imagesChalet1/6.png",
    "/images/chalet1/imagesChalet1/7.png",
    "/images/chalet1/imagesChalet1/8.png",
    "/images/chalet1/imagesChalet1/9.png",
    "/images/chalet1/imagesChalet1/10.png",
    "/images/chalet1/imagesChalet1/11.png",
    "/images/chalet1/imagesChalet1/12.png",
    "/images/chalet1/imagesChalet1/13.png",
];

const ImageCarouselModal = () => {
    const [current, setCurrent] = useState(0);

    
    const {stateModal} = useSelector(state => state?.modal)
    const dispatch = useDispatch()

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <>
        {/* MODAL */}
        {stateModal && (
            <div className="modal" onClick={() => {dispatch(dispatch_toogleModal())}}>
            <div
                className="modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                {/* CLOSE */}
                <button
                className="modal__close"
                onClick={() => {dispatch(dispatch_toogleModal())}}
                >
                ✕
                </button>

                {/* IMAGE */}
                <Image
                    className="modal__image hero_img"
                    src={images[current]}
                    width={1920}
                    height={1080}
                    alt=""
                />

                {/* BUTTONS */}
                <button
                className="modal__nav modal__nav--left"
                onClick={prevSlide}
                >
                ‹
                </button>

                <button
                className="modal__nav modal__nav--right"
                onClick={nextSlide}
                >
                ›
                </button>

                {/* DOTS */}
                <div className="modal__dots">
                {images.map((_, index) => (
                    <button
                    key={index}
                    className={`modal__dot ${
                        current === index ? "active" : ""
                    }`}
                    onClick={() => setCurrent(index)}
                    />
                ))}
                </div>
            </div>
            </div>
        )}
        </>
    );
};

export default ImageCarouselModal;