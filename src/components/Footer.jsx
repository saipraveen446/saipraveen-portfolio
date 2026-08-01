const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800/90 bg-gray-950 py-3 text-center sm:py-3.5">
      <p className="text-xs text-gray-500 sm:text-sm">
        © {year} Sai Praveen Sanapalli
      </p>
    </footer>
  );
};

export default Footer;
