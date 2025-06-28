import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <PhoneIcon size={50} className="text-blue-600" />
        </div>

        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Have any questions? We would love to hear from you. Feel free to reach out to us anytime.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            <PhoneIcon size={24} className="text-green-600" />
            <span className="text-lg text-gray-700">+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            <MailIcon size={24} className="text-red-600" />
            <span className="text-lg text-gray-700">contact@todoapp.com</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            <MapPinIcon size={24} className="text-purple-600" />
            <span className="text-lg text-gray-700">Delhi, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
