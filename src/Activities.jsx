import React from 'react';

const Activities = () => {
  const activities = [
    "التدريب والتنمية الذاتية",
    "برامج الصحة النفسية",
    "تنمية المهارات الشخصية والتنفيذية",
    "تقديم الاستشارات",
    "وجلسات الكوتشنج"
  ];

  return (
    <section id="activities" className="section" style={{ backgroundColor: '#f1f5f9' }}>
      <div className="container">
        <h2>أنشطتنا</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <h3>{activity}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;

