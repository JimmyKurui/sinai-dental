import { useEffect } from "react";

const Faqs = () => {
  useEffect(() => {
    document.title = 'FAQs | Sinai Dental'
  }, []);
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
        question: "Do you accept insurance ?",
        answer: "No, unfortunately we do not accept this option at the moment",
    },
    {
        question: "What payment options do you accept ?",
        answer: "We accept cash, bank cards (VISA/ Mastercard) and mobile money (MTN/ Airtel). Front-desk payment is accepted for all options allowed",
    }
  ];

  return (
    <div className="container-fluid container-md pt-5">
      <div className="row pt-5">
        <h2 className="text-center mt-5">FAQS</h2>
        {questionsAndAnswers.map((el, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <div className="p-3">
              <h5>{el.question}</h5>
              <p>{el.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
