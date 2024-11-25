import React from 'react';
import './ImportantDates.css'; // Import the CSS file for styling

const ImportantDates = () => {
  const dates = [
    { date: '17th September, 2024', event: 'Paper submission opens' },
    {
      date: '31st October, 2024',
      newDate: '25th November, 2024',
      finalDate: '2nd December, 2024',
      event: 'Rolling submission closes'
    },
    { date: '31st January, 2024', event: 'Acceptance of selected papers' },
    { date: '31st January, 2025', event: 'Final Paper Submission and Registration Deadline' },
    { date: '21-23 February, 2025', event: 'Conference Dates' },
  ];

  return (
    <div className="important-dates-section">
      <section className="dates-background">
        <div className="container">
          <div className="row" style={{ boxShadow: '0px 0px 16px 0px #757575b3', padding: '10px', borderRadius: '20px', background: 'white' }}>
            <div className="col-12">
              <h2 className="section-title">Important Dates</h2>
              <ul className="dates-list">
                {dates.map((item, index) => (
                  <li key={index} className="date-item">
                    <span className="event">{item.event}</span>
                    <span className="date">
                      {item.finalDate ? (
                        <>
                          <span className="red-strikethrough">{item.date}</span> ➔{' '}
                          <span className="red-strikethrough">{item.newDate}</span> ➔ <span>{item.finalDate}</span>
                        </>
                      ) : item.newDate ? (
                        <>
                          <span className="red-strikethrough">{item.date}</span> ➔ <span>{item.newDate}</span>
                        </>
                      ) : (
                        item.date
                      )}
                    </span>
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
