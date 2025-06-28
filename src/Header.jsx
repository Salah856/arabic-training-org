import React from 'react';
import logo from './assets/Logo.jpeg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo-container">
            <img 
                src={logo} 
                alt="المؤسسة العربية للتدريب والتنمية المستدامة" 
                className="logo" 
                width="400"
                height="400"
            />
          </div>
          <h1 className="title">المؤسسة العربية للتدريب والتنمية المستدامة</h1>
          <div className="commercial-number">سجل تجاري رقم: 14446</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

