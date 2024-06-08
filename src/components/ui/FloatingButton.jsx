const FloatingButton = () => {
    const text = 'Talk with our Front Desk for your client needs';
    const url = "https://api.whatsapp.com/send?phone=256776045352&text=" + text;
    return (
        <>
            <a id="#whatsapp-link" href={url} target="_blank" rel="noreferrer" className="floating-btn bg-info">Book</a>
        </>
    )
}

export default FloatingButton