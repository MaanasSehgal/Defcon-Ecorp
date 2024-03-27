import "./Notification.css";

const Notification = ({message, onClose}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <div className="notification">
            <div className="notification-content">{message}</div>
            <button className="notification-close" onClick={onClose}>
                &times;
            </button>
        </div>
    );
};

export default Notification;
