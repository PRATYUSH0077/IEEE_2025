import React from 'react';
import './ImportantDates.css'; // Import the CSS file for styling

const ImportantDates = () => {
  const dates = [
    { date: '5th August, 2024', event: 'Paper submission opens' },
    { date: '18th October, 2024', event: 'Rolling submission closes' },
    { date: '29th December, 2024', event: 'Acceptance of selected papers' },
    { date: '31th January, 2025', event: 'Final Paper Submission and Registration Deadline' },
    { date: '21-23 February, 2025', event: 'Conference Dates' },
  ];

  return (
    <div className="important-dates-section" >
      <section className="dates-background">
        <div className="container">
          <div className="row" style={{ boxShadow: '0px 0px 16px 0px #757575b3', padding: '10px', borderRadius: '20px', background: 'white' }}>
            <div className="col-12">
              <h2 className="section-title">Important Dates</h2>
              <ul className="dates-list">
                {dates.map((item, index) => (
                  <li key={index} className="date-item">
                    <span className="event">{item.event}</span>
                    <span className="date">{item.date}</span>

                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportantDates;
