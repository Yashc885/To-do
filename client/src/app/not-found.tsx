import Link from 'next/link';
import { HomeIcon, AlertTriangleIcon } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <AlertTriangleIcon size={80} className="text-yellow-500 mb-6" />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 text-lg mb-8 text-center">
        Oops! The page yo are looking for does not exist.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        <HomeIcon size={20} />
        Go to Home
      </Link>
    </div>
  );
}
