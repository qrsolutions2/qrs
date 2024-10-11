import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  { name: 'Basic Plan', price: 45, maxQRCodes: 10 },
  { name: 'Starter Plan', price: 75, maxQRCodes: 20 },
  { name: 'Growth Plan', price: 99, maxQRCodes: 35 },
  { name: 'Standard Plan', price: 135, maxQRCodes: 50 },
  { name: 'Pro Plan', price: 175, maxQRCodes: 75 },
  { name: 'Ultimate Plan', price: 399, maxQRCodes: 250 },
  { name: 'VIP', price: 599, maxQRCodes: 500 },
];

const features = [
  'QR Codes',
  'No Ads',
  'Help & Support',
  'QR Code Scans',
  'QR Code Expiration',
];

const SubscriptionPlans: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing & Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left">Features</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="py-4 px-6 text-center">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-semibold">Monthly Fee</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-4 px-6 text-center">£{plan.price}</td>
                ))}
              </tr>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-4 px-6">{feature}</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="py-4 px-6 text-center">
                      {feature === 'QR Codes' ? (
                        <span>{plan.maxQRCodes}</span>
                      ) : feature === 'QR Code Scans' || feature === 'QR Code Expiration' ? (
                        <span>Unlimited</span>
                      ) : (
                        <Check className="mx-auto text-green-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;