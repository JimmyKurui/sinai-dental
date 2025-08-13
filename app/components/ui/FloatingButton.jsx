import Image from "next/image";
import whatsappLogo from "@img/icons/whatsapp-logo-icon.png"

const FloatingButton = () => {
    const text = 'Talk with our Front Desk for your needs';
    const url = "https://api.whatsapp.com/send?phone=256776045352&text=" + text;
    return (
            <div className="p-2 floating-btn">
                <a id="#whatsapp-link" href={url} target="_blank" rel="noreferrer"
                data-toggle="tooltip" data-placement="top" title="Booking button">
                    <Image src={whatsappLogo} alt="Whatsapp logo" />
                </a>
            </div>
    )
}

export default FloatingButton