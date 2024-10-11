import React from 'react';
import { QrCode, Palette, Monitor, BarChart } from 'lucide-react';

const steps = [
  {
    title: 'Create',
    description: 'Generate unique QR codes for your products',
    icon: QrCode,
  },
  {
    title: 'Design',
    description: 'Customize codes with your logo and style',
    icon: Palette,
  },
  {
    title: 'Showcase',
    description: 'Display codes for easy customer access',
    icon: Monitor,
  },
  {
    title: 'Analyse & Update',
    description: 'Track performance and update in real-time',
    icon: BarChart,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-0 left-0 w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-blue-500">
                  <span className="text-blue-500 font-bold">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;