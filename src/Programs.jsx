import React from 'react';

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
      </div>
    </section>
  );
};

export default Programs;

