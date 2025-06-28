import { UserIcon, InfoIcon } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto mt-16 px-4 text-center">
      <div className="flex justify-center mb-4">
        <UserIcon size={48} className="text-blue-600" />
      </div>
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to the Todo App! This app helps you organize your daily tasks and stay productive.
        You can add, edit, and delete tasks easily with a clean and simple interface.
      </p>
      <div className="flex justify-center">
        <InfoIcon size={32} className="text-gray-500" />
      </div>
    </div>
  );
}
