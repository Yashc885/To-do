import Link from 'next/link';
import { HomeIcon, UserIcon, PhoneIcon, ListTodoIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-lg">
      <div className="flex items-center gap-2">
        <ListTodoIcon size={28} />
        <span className="text-xl font-bold">Todo App</span>
      </div>

      <div className="flex gap-4">
        {/* Home */}
        <Link href="/" className="hover:text-gray-200 flex items-center gap-1">
          <HomeIcon size={20} /> Home
        </Link>

        {/* About */}
        <Link href="/about" className="hover:text-gray-200 flex items-center gap-1">
          <UserIcon size={20} /> About
        </Link>

        {/* Contact */}
        <Link href="/contact" className="hover:text-gray-200 flex items-center gap-1">
          <PhoneIcon size={20} /> Contact
        </Link>
      </div>
    </nav>
  );
}
