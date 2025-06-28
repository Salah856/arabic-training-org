import React from 'react';
import './App.css';
import Header from './Header';
import Activities from './Activities';
import Programs from './Programs';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about" className="section">
          <div className="container">
            <h2>عن المؤسسة</h2>
            <p>
              المؤسسة العربية للتدريب والتنمية المستدامة - سجل تجاري رقم 14446
            </p>
            <p>
              مؤسسة رائدة في مجال التدريب والتنمية البشرية، نقدم برامج متخصصة لتطوير 
              المهارات الشخصية والمهنية للأفراد والمؤسسات.
            </p>
          </div>
        </section>

        <Activities />
        <Programs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

