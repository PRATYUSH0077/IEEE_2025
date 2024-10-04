import React from 'react';
import { Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import venue_background from '../../assets/venue_background.jpg';
import temp from '../../assets/temp.gif';
import './Submission.css';

const Submission = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {/* <Box className="venue-top-image">
        <Image src={temp} alt="Venue Top Part" />
      </Box> */}
      <Box
        className="venue-page"
        style={{ backgroundImage: `url(${venue_background})` }}
      >

        <div className="venue-row">
          <Box className="about-iiitm">
            <Text textAlign='center' color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">How to Submit paper in IEEE MPSec ICETA 2025</Text>
            <Text fontSize={isMobile ? 'lg' : 'xl'}>
              <p class="has-text-align-justify">

                Prospective authors are encouraged to submit full papers in PDF format not exceeding 6 pages in double-column includes all figures, tables, and references. The paper must follow the standard IEEE template <a style={{ color: 'blue', textDecoration: 'underline' }} href='https://www.ieee.org/conferences/publishing/templates.html' target='_blank'>(link)</a>. Papers not compliant with the IEEE template including appropriate referencing or exceeding the page limit will be returned without review. Only original papers that have not been published or submitted for publication elsewhere will be considered. The paper must clearly indicate the research area, main results, and contributions. <strong>All Accepted and Presented papers will be submitted for publication to IEEE Xplore  (IEEE Conference number #64837), which is indexed with world's leading Abstracting & Indexing (A&I) databases (SCOPUS etc.).</strong> Publication at IEEEXplore is subject to IEEE's scope and quality policy.
              </p>

            </Text>
            <Text fontSize={isMobile ? 'lg' : 'xl'}>
              <p className="has-text-align-justify">
                To submit your paper, please follow the link below for detailed instructions and further information. Note that the conference has no general track submission. After login at the submission site, you must select the track that most closely relates to your paper.
              </p>
            </Text>
            <div className="d-flex justify-content-center">
              <a
                className="btn btn-primary btn-lg"
                href="https://cmt3.research.microsoft.com/ICETA2025/"
                target='_blank'
              >
                Submit your paper
              </a>
            </div>

          </Box>

        </div>

        <div className="venue-row">

        </div>
        <div className="venue-row">

        </div>
      </Box>
    </>
  );
};

export default Submission;


