import { useEffect, useRef, useState } from "react";

const ImageModal = ({
  src,
  alt,
  setShow,
  show,
}: {
  src: string;
  alt: string;
  show: boolean;
  setShow: (s: boolean) => void;
}) => {
  const modalRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  if (!show) {
    return null;
  }
  return (
    <>
      {show && <div className="modal-backdrop fade show" />}
      <div
        className="modal modal-xl show"
        tabIndex={-1}
        style={show ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content" ref={modalRef}>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
            <img
              src={src}
              className="img-fluid"
              alt={alt}
              onClick={() => setShow(false)}
              draggable={false}
            />
            <p className="image-alt">{alt}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const ImagePopup = ({
  src,
  alt,
  className,
  showAltInThumbnail = false,
}: {
  src: string;
  alt: string;
  className: string;
  // eslint-disable-next-line react/require-default-props
  showAltInThumbnail?: boolean;
}) => {
  const [show, setShow] = useState(false);

  const handleExpandImage = () => {
    setShow(true);
  };

  return (
    <>
      {show && <ImageModal src={src} alt={alt} setShow={setShow} show={show} />}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
      <img
        src={src}
        className={`img-fluid image-previewable ${className}`}
        alt={alt}
        onClick={handleExpandImage}
        draggable={false}
      />
      {showAltInThumbnail && <p className="image-alt">{alt}</p>}
    </>
  );
};

export default ImagePopup;
