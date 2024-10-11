import React from 'react';

const faqs = [
  {
    question: "What is QRSolutions?",
    answer: "QRSolutions is a platform that allows businesses to create, manage, and track QR codes for various purposes such as marketing, inventory management, and customer engagement."
  },
  {
    question: "How do I create a QR code?",
    answer: "After subscribing to a plan, you can easily create QR codes through our user-friendly dashboard. Simply input the desired information or link, customize the design if needed, and generate your QR code."
  },
  {
    question: "Can I customize the appearance of my QR codes?",
    answer: "Yes, QRSolutions offers customization options for your QR codes. You can add your logo, change colors, and adjust the design to match your brand identity."
  },
  {
    question: "How do I track the performance of my QR codes?",
    answer: "Our platform provides detailed analytics for each QR code. You can track scans, locations, devices used, and other relevant data to measure the performance of your campaigns."
  },
  {
    question: "Is there a limit to the number of QR codes I can create?",
    answer: "The number of QR codes you can create depends on your subscription plan. Each plan has a specified limit, ranging from 10 to 500 QR codes per month."
  }
];

const FAQ: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;