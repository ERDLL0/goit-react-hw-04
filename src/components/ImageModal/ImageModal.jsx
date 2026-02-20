import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, onClose, image }) => {
    if (!image) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={css.modal}
            overlayClassName={css.overlay}
            ariaHideApp={false}
        >
            <div className={css.content}>
                <img
                    className={css.image}
                    src={image.urls.regular}
                    alt={image.alt_description}
                />
            </div>
        </Modal>
    );
};

export default ImageModal;
