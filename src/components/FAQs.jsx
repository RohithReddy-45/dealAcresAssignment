import { useState } from "react";
import { Faqsdata } from "../data/data";

function FAQs() {
  const [faqs, setFaqs] = useState(
    Faqsdata.map((faq) => ({ ...faq, isOpen: false }))
  );

  const toggleFAQ = (index) => {
    const updatedFaqs = faqs.map((faq, i) => {
      if (i === index) {
        return { ...faq, isOpen: !faq.isOpen };
      } else {
        return { ...faq, isOpen: false };
      }
    });
    setFaqs(updatedFaqs);
  };

  return (
    <div className="flex flex-col lg:px-32 px-10 mt-7 container">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
        Frequently Asked Questions
      </h2>
      <div className="mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3">
            <details
              className="flex justify-between w-full py-2 px-4 bg-white border-b-4 border-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <summary className="text-lg font-bold">{faq.question}</summary>
            </details>

            {faq.isOpen && <p className="p-4">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
