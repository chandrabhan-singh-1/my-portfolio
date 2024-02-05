import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2024 <strong>Chandrabhan Singh</strong>. All rights reserved.
        </p>

        <div className='flex gap-6 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-10 h-10 object-contain hover:scale-125'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;