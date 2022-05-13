export default function Modal(props) {
    const { isOpen, closeModal, element } = props;

    //renders element iff isOpen is not 0

    //closes modal user clicks outside of main container
    const emptySpaceCloser = (e) => {
        if (e.target.classList.contains("overlay")) {
            closeModal();
        }
    };

    if (isOpen) {
        return (
            <div className="overlay" onClick={emptySpaceCloser}>
                <div className="element-container z-10 m-36">{element}</div>
            </div>
        );
    }
}
