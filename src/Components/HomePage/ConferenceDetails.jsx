import React from 'react';

const loadabouUs = () => {
  // Define the logic for loadabouUs function here
  console.log('Load About Us function executed');
};

const ConferenceDetails = () => (
  <div id="replace_fragment_div" style={{marginTop:"144px"}}>
    {/* About the event section */}
    <section style={{ backgroundImage: 'linear-gradient(90deg, #32157580 0%, #8d0b938a 51%, #ff00665e 100%, #ff057c96 100%)', padding: '100px 10px', marginBottom: '0', zIndex: '10', position: 'relative', marginTop: '-150px' }} className="u-PaddingTop100 u-PaddingBottom100 u-xs-PaddingBottom30 u-xs-PaddingTop30 u-sm-PaddingTop50">
      <div className="container">
        <div className="row" style={{  boxShadow: '0px 0px 16px 0px #757575b3', padding: '10px', borderRadius: '20px', background: 'white' }}>
          <div className="col-sm-12" style={{ padding: '20px' }}>
            <h1 className="u-MarginTop0 u-sm-MarginTop30 u-Weight700" style={{ borderBottom: '5px solid #d5d5d5', fontSize: '36px' }}>About The Event</h1>
            <p className="u-MarginBottom30 u-xs-MarginBottom30" style={{ textAlign: 'justify', fontSize: '18px' }}>
              IEEE Madhya Pradesh Section International Conference on Emerging Technologies 2025 (IEEE MPSec ICET 2025) is a premium conference of the IEEE Madhya Pradesh Section Chapter [acceptance awaited]. The conference aims to promote research and networking among academic institutes, R&D institutions, industries and other organisations. The conference invites papers from authors worldwide, while geographically all editions of the conference would be held within the Madhya Pradesh region. The conference will be technically and financially supported by the IEEE MP Section Chapter [acceptance awaited]. All papers presented at the conference will uploaded to IEEE [acceptance awaited].

              The conference is being initiated by the Department of Information Technology, ABV-IIITM Gwalior. The future editions of the conference will be held annually on a rotation basis among the collaborating institutions.

              IEEE MPSec ICET invites papers covering broad topics in the areas of Information Technology, Wireless Communication, Electrical, Computer and Electronics Engineering. This conference will provide an excellent platform for the researchers to present their research work.
            </p>
            <div className="row">
              <div className="col-sm-6">
                <p><i className="Icon Icon-map Icon--32px text-primary" aria-hidden="true"></i></p>
                <p style={{ fontSize: '20px' }} className="headColor">Where</p>
                <p> ABV-Indian Institute of Information Technology &amp; Management </p>
                <p> Gwalior, Morena Link Road, Gwalior, Madhya Pradesh, India,474015</p>
              </div>
              <div className="col-sm-6">
                <p><i className="Icon Icon-clock Icon--32px text-primary" aria-hidden="true"></i></p>
                <p style={{ fontSize: '20px' }} className="headColor">When</p>
                <p> Friday to Sunday</p>
                <p>7-9 February, 2025 </p>
              </div>
            </div>
            {/* <div className=""> <a style={{ cursor: 'pointer' }} className="btn btn-primary text-uppercase u-MarginBottom10 u-LetterSpacing2" onClick={loadabouUs}> LEARN MORE ABOUT ORGANIZERS</a> </div> */}
          </div>
        </div>
      </div>
    </section>

    {/* Other sections like Objectives, Contact Us, Event Schedule, etc. */}
  </div>
);

export default ConferenceDetails;
