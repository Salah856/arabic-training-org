import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>المؤسسة العربية للتدريب والتنمية المستدامة</p>
          <p>سجل تجاري رقم: 14446</p>
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

