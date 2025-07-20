
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const FloatingButton = () => {
    const text = 'Talk with our Front Desk for your needs';
    const url = "https://api.whatsapp.com/send?phone=256776045352&text=" + text;
    return (
            <div className="p-2">
                <a id="#whatsapp-link" href={url} target="_blank" rel="noreferrer"
                className="floating-btn bg-app-primary-light"
                data-toggle="tooltip" data-placement="top" title="Booking">
                    <FontAwesomeIcon icon={faMessage} size="lg"></FontAwesomeIcon>
                </a>
            </div>
    )
}

export default FloatingButton