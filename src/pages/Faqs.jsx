const Faqs = () => {
  const questionsAndAnswers = [
    {
      question: "Booking an appointment with the dental clinic",
      answer: "This is via our book button where you will chat with our administrators on Whatsapp briefly. We will note the details and schedule on our calendar",
    },
    {
        question: "Do you accept walk in clients ?",
        answer: "Yes, we can process details for your appointments at our front desk and arrange for a doctor's consultation",
    },
    {
        question: "Do you accept insurance",
        answer: "No, unfortunately we do not accept this option at the moment",
    },
    {
        question: "What payment options do you accept ?",
        answer: "We take payment at the front-desk and our options include: Bank cards for VISA/ Mastercard. Mobile money with MTN/ Airtel Money",
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">FAQS Section</h2>
        {questionsAndAnswers.map((el, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <div >
              <h6>{el.question}</h6>
              <p>{el.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
