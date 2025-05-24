const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-base text-gray-400 text-center">
          © {currentYear} McKein Tayag. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 