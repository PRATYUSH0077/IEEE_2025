import React from 'react';

const loadabouUs = () => {
  console.log('Load About Us function executed');
};

const SingleParagraphSection = ({ title, content, imageSrc }) => (
  <div style={{ marginTop: '144px' }}>
    <section
      style={{
        backgroundImage: 'linear-gradient(90deg, #32157580 0%, #8d0b938a 51%, #ff00665e 100%, #ff057c96 100%)',
        padding: '100px 10px',
        marginBottom: '0',
        zIndex: '10',
        position: 'relative',
        marginTop: '-150px',
      }}
      className="u-PaddingTop100 u-PaddingBottom100 u-xs-PaddingBottom30 u-xs-PaddingTop30 u-sm-PaddingTop50"
    >
      <div className="container">
        <div
          className="row"
          style={{ boxShadow: '0px 0px 16px 0px #757575b3', padding: '10px', borderRadius: '20px', background: 'white' }}
        >
          <div className="col-sm-6" style={{ padding: '20px' }}>
            <h1 className="u-MarginTop0 u-sm-MarginTop30 u-Weight700" style={{ borderBottom: '5px solid #d5d5d5', fontSize: '36px' }}>
              {title}
            </h1>
            <p className="u-MarginBottom30 u-xs-MarginBottom30" style={{ textAlign: 'justify', fontSize: '18px' }}>
              {content}
            </p>
            <div>
              <a style={{ cursor: 'pointer' }} className="btn btn-primary text-uppercase u-MarginBottom10 u-LetterSpacing2" onClick={loadabouUs}>
                LEARN MORE ABOUT ORGANIZERS
              </a>
            </div>
          </div>
          <div className="col-sm-6" style={{ padding: '20px', textAlign: 'center' }}>
            <img src={imageSrc} alt="Event" style={{ maxWidth: '100%', borderRadius: '10px' }} />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SingleParagraphSection;
