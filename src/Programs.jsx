import React from 'react';
import Pic_1 from "./assets/pic_1.jpeg"; 
import Pic_2 from "./assets/pic_2.jpeg";
import Pic_3 from "./assets/pic_3.jpeg";
import Pic_4 from "./assets/pic_4.jpeg";


const Programs = () => {
  const trainingPrograms = [
    "ممارس البرمجة اللغوية العصبية",
    "العلاج السلوكي المعرفي",
    "اعداد المدرب المحترف",
    "ممارس علم النفس الايجابي",
    "اعداد مدرب التربية بنقاط القوة",
    "اعداد مدرب للمراهقين في برامج التفكير"
  ];

  return (
    <section id="programs" className="section">
      <div className="container">
        <h2>البرامج التدريبية</h2>
        <div className="programs-list">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="program-item">
              <h3>{program}</h3>
            </div>
          ))}
        </div>

        <div className="programs-images">
                <div className="image-container">
                    <img 
                    src={Pic_1} 
                    alt="برنامج تدريبي 1" 
                    className="program-image"
                    onMouseEnter={(e) => e.currentTarget.classList.add('hover-effect')}
                    onMouseLeave={(e) => e.currentTarget.classList.remove('hover-effect')}
                    />
                    {/* <div className="image-caption">ممارس البرمجة اللغوية العصبية</div> */}
                </div>
                <div className="image-container">
                    <img 
                    src={Pic_2} 
                    alt="برنامج تدريبي 2" 
                    className="program-image"
                    onMouseEnter={(e) => e.currentTarget.classList.add('hover-effect')}
                    onMouseLeave={(e) => e.currentTarget.classList.remove('hover-effect')}
                    />
                    {/* <div className="image-caption">العلاج السلوكي المعرفي</div> */}
                </div>
                <div className="image-container">
                    <img 
                    src={Pic_3} 
                    alt="برنامج تدريبي 3" 
                    className="program-image"
                    onMouseEnter={(e) => e.currentTarget.classList.add('hover-effect')}
                    onMouseLeave={(e) => e.currentTarget.classList.remove('hover-effect')}
                    />
                    {/* <div className="image-caption">إعداد المدرب المحترف</div> */}
                </div>
                <div className="image-container">
                    <img 
                    src={Pic_4} 
                    alt="برنامج تدريبي 4" 
                    className="program-image"
                    onMouseEnter={(e) => e.currentTarget.classList.add('hover-effect')}
                    onMouseLeave={(e) => e.currentTarget.classList.remove('hover-effect')}
                    />
                    {/* <div className="image-caption">ممارس علم النفس الإيجابي</div> */}
                </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

