function Footer() {
  return (
    <footer
      id="contact"
      className="py-10 px-6 text-center bg-gradient-to-tr from-[#3B0000] via-[#1A0000] to-[#000000] border-t-2 border-[#FFA552]"
    >
      <p className="text-[#FFD7A5] font-semibold tracking-wide">
        &copy; {new Date().getFullYear()} Nabriz. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
