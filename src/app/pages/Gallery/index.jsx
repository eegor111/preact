import React, { useState } from 'react';

const GalleryPage = () => {
    // Assuming you have an array of images
    const images = [
        { src: 'path_to_image1.jpg', alt: 'Image 1' },
        { src: 'path_to_image2.jpg', alt: 'Image 2' },
        // Add more images here
    ];

    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div>
            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-4 p-10">
                {images.map((image, index) => (
                    <div key={index} className="cursor-pointer">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover h-64 w-full"
                            onClick={() => openModal(image)}
                        />
                    </div>
                ))}
            </div>

            {/* Modal View */}
            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white p-5">
                        <img src={modalImage.src} alt={modalImage.alt} className="max-h-screen max-w-screen" />
                        <button className="btn btn-primary mt-4" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GalleryPage;
