const helpCenter = [
  "FAQ's",
  'Contact Us',
  'Shipping & Delivery',
  'Returns & Exchanges',
  'Click & Collect',
  'Find A Store',
  'Gift Cards',
];
const company = [
  'About Us',
  'Intersport International',
  'Sustainability',
  'INTERSPORT Club Program',
  'New Store & Supplier Enquiries',
  'Careers',
  'Affiliates',
];
const heartSport = ['INTERSPORT Blog', 'Size Guide', 'Nike', 'ASICS', 'adidas', 'New Balance'];

const helpCenterLinks = () => {
  return (
    <div className="helpCenterLinks">
      <h4 className="uppercase font-semibold my-[10px] text-primaryColor">Help Center</h4>
      <ul>
        {helpCenter.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
const companyLinks = () => {
  return (
    <div className="companyLinks">
      <h4 className="uppercase font-semibold my-[10px] text-primaryColor">Company</h4>
      <ul>
        {company.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
const heartSportLinks = () => {
  return (
    <div className="heartSportLinks">
      <h4 className="uppercase font-semibold my-[10px] text-primaryColor">Heart of Sport</h4>
      <ul>
        {heartSport.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="footer py-[30px] bg-white text-gray-600 shadow-lg">
      <div className="footer__content xl:container mx-auto">
        <div className="flex justify-between">
          <div>
            <h4 className="uppercase  font-semibold my-[10px]">Contact Us</h4>
            <p>
              <a href="#">help@intersport.com</a>
            </p>
            <h4 className="uppercase font-semibold mt-[50px]">Follow Us</h4>
            <ul className="icons flex my-[15px]">
              <li className="pr-4">
                <a href="https://www.instagram.com/intersportau/" target="_blank">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#FFFFFF"></circle>
                    <path
                      d="M17.0001 21.0271C17.0001 18.803 18.8031 17 21.0272 17H26.973C29.1971 17 31.0001 18.803 31.0001 21.0271V26.9729C31.0001 29.197 29.1971 31 26.973 31H21.0272C18.8031 31 17.0001 29.197 17.0001 26.9729V21.0271Z"
                      stroke="#164196"
                      strokeWidth="2"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.0001 27C25.6569 27 27.0001 25.6569 27.0001 24C27.0001 22.3431 25.6569 21 24.0001 21C22.3432 21 21.0001 22.3431 21.0001 24C21.0001 25.6569 22.3432 27 24.0001 27Z"
                      stroke="#164196"
                      strokeWidth="2"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.0001 21C28.5523 21 29.0001 20.5523 29.0001 20C29.0001 19.4477 28.5523 19 28.0001 19C27.4478 19 27.0001 19.4477 27.0001 20C27.0001 20.5523 27.4478 21 28.0001 21Z"
                      fill="#164196"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="px-4">
                <a href="https://www.youtube.com/user/INTERSPORTAustralia" target="_blank">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#FFFFFF"></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.8292 20.5625C30.9508 21.0312 31.0376 21.743 31.0896 22.6979L31.1157 24L31.0896 25.3021C31.0376 26.2743 30.9508 26.9948 30.8292 27.4635C30.7424 27.7587 30.5862 28.0191 30.3605 28.2448C30.1348 28.4705 29.8657 28.6267 29.5532 28.7135C29.1018 28.835 28.0428 28.9219 26.3761 28.9739L24.0063 29L21.6365 28.9739C19.9699 28.9219 18.9109 28.835 18.4595 28.7135C18.147 28.6267 17.8779 28.4705 17.6522 28.2448C17.4265 28.0191 17.2702 27.7587 17.1834 27.4635C17.0619 26.9948 16.9751 26.2743 16.923 25.3021L16.897 24C16.897 23.618 16.9057 23.184 16.923 22.6979C16.9751 21.743 17.0619 21.0312 17.1834 20.5625C17.2702 20.25 17.4265 19.9809 17.6522 19.7552C17.8779 19.5295 18.147 19.3733 18.4595 19.2865C18.9109 19.1649 19.9699 19.0781 21.6365 19.026L24.0063 19L26.3761 19.026C28.0428 19.0781 29.1018 19.1649 29.5532 19.2865C29.8657 19.3733 30.1348 19.5295 30.3605 19.7552C30.5862 19.9809 30.7424 20.25 30.8292 20.5625ZM22.548 26.1354L26.2719 24L22.548 21.8906V26.1354Z"
                      fill="#164196"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="px-4">
                <a href="https://www.facebook.com/INTERSPORTAustralia/" target="_blank">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#FFFFFF"></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.3685 24.2513H27.3528L27.6499 21.881H25.3685V20.3677C25.3685 19.6815 25.5537 19.2138 26.5103 19.2138L27.7303 19.2132V17.0933C27.5192 17.0645 26.7951 17 25.9526 17C24.1936 17 22.9894 18.1045 22.9894 20.1331V21.8811H21V24.2514H22.9894V30.3333L25.3685 30.3333V24.2513Z"
                      fill="#164196"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>{helpCenterLinks()}</div>
          <div>{companyLinks()}</div>
          <div>{heartSportLinks()}</div>
        </div>
        <p className="footer__content__text">© 2021 Intersport</p>
      </div>
    </footer>
  );
};

export default Footer;
