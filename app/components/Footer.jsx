// File: components/Footer.jsx
export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-800 p-6 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="font-bold text-lg">My Next.js App</h2>
            <p className="text-gray-300 text-sm">Building amazing web experiences</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Services</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            &copy; {currentYear} My Company. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }