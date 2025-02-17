/* eslint-disable react/prop-types */

const ImageList = ({
  images,
  selectedImages,
  onSelectImage,
  mirror,
  setSelectedImages,
}) => {
  return (
    <ul className="image-list">
      {images.map((image, index) => (
        <li key={index}>
          <img
            src={image}
            className={`image-item ${mirror ? 'mirror' : ''} ${
              selectedImages.includes(index) ? 'selected' : ''
            }`}
            onClick={() => onSelectImage(index, setSelectedImages)}
            alt={`Captured ${index + 1}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
