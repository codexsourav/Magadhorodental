import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-20">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full md:gap-16 gap-1">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src="/images/big-logo.png" className="md:h-20 h-14 me-3" alt="FlowBite Logo" />
            </a>
            <p className='md:p-4 leading-10 text-blue-950 text-lg'>We Offer A Wide Range Of Dental Health Services & Cosmetic Dental Treatment, Maintaining The Highest Standard Of Hygiene & Sterilization. We Are Equipped With Modern Instruments & Latest Technology.</p>
            <div className="flex flex-col gap-5 md:p-4 mt-5 font-bold text-blue-900">
              <a href="tel:+91 8292606814">+91 8292606814</a>
              <a href="mailto:magadhorodentalpatna@gmail.com">magadhorodentalpatna@gmail.com</a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 col-span-1 md:gap-1 gap-9 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Our Links</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">Home</a>
                </li>
                <li className="mb-4">
                  <a href="/#about" className="hover:underline">About</a>
                </li>
                <li className="mb-4">
                  <a href="/#services" className="hover:underline">Services</a>
                </li>
                <li className="mb-4">
                  <a href="/#doctors" className="hover:underline">Our Doctors</a>
                </li>
                <li className="mb-4">
                  <a href="/blogs" className="hover:underline">Blogs</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="https://www.facebook.com/magadhorodentalpatna/" target='_blank' className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                  <a href="https://www.instagram.com/magadh_oro_dental" target='_blank' className="hover:underline">Instagram</a>
                </li>
                <li className="mb-4">
                  <a href="https://www.linkedin.com/in/dr-abhishek-kumar-a64191288/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" target='_blank' className="hover:underline">Linkedin</a>
                </li>
                <li className="mb-4">
                  <a href="https://twitter.com/DrArchanaRani1" target='_blank' className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                  <a href="https://www.youtube.com/channel/UCbdi4FfIIl2u9qa5UzVrXHg" target='_blank' className="hover:underline">Youtube</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Our Branches</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="https://maps.google.com/maps?ll=25.59082,85.159947&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=5197026168119514541" target='_blank' className="hover:underline">Branch 1 - K-108, Hanuman Nagar Rd, Kankarbagh, Hanuman Nagar, Patna, Bihar 800020</a>
                </li>
                <li>
                  <a href="https://maps.google.com/maps?ll=25.581802,85.155773&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=10501768072403401777" target='_blank' className="hover:underline">Branch 2 - K-108, Hanuman Nagar Rd, Kankarbagh, Hanuman Nagar, Patna, Bihar 800020</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://idealedesigns.com/" className="hover:underline">Ideal E Designs</a>. All Rights Reserved.</span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
