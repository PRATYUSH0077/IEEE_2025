import React from 'react';
import { Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import venue_background from '../../assets/venue_background.jpg';
import temp from '../../assets/temp.gif';
import './Submission.css';

const Submission = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box className="venue-top-image">
        <Image src={temp} alt="Venue Top Part" />
      </Box>
      <Box
        className="venue-page"
        style={{ backgroundImage: `url(${venue_background})` }}
      >

        <div className="venue-row">
          <Box className="about-iiitm">
            <Text textAlign='center' color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">How to Submit paper in IATMSI-2025</Text>
            <Text fontSize={isMobile ? 'lg' : 'xl'}>
              <p>Prospective authors are encouraged to submit full papers in PDF format not exceeding 6 pages in double-column includes all figures, tables, and references. The paper must follow the standard IEEE template (<a rel="noreferrer noopener" href="https://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank">link here</a>).

                Papers not compliant with the IEEE template including appropriate referencing or exceeding the page limit will be returned without review. Only original papers that have not been published or submitted for publication elsewhere will be considered. The paper must clearly indicate the research area, main results, and contributions.&nbsp;<strong>All Accepted and Presented papers will be submitted for publication to IEEE Xplore, which is indexed with world’s leading Abstracting &amp; Indexing (A&amp;I) databases</strong> <strong>(SCOPUS etc.)</strong></p>

            </Text>
            <Text fontSize={isMobile ? 'lg' : 'xl'}>
              <p class="has-text-align-justify">Submission of a scientific paper is considered a commitment that, upon acceptance, authors will submit their camera-ready version for inclusion in the formal proceedings and will present the paper at the conference. Each accepted contribution must have at least one paid registration by the time the camera-ready paper is submitted for inclusion in the proceedings. IATMSI reserves the right to remove from IEEE Xplore papers and posters not presented at the symposium.</p>

            </Text>
            <Text fontSize={isMobile ? 'lg' : 'xl'}>
              <p className="has-text-align-justify">
                To submit your paper, please follow the link below for detailed instructions and further information:
              </p>
            </Text>
            <div className="d-flex justify-content-center">
              <a className="btn btn-primary btn-lg" href="https://iatmsi.iiitm.ac.in/paper-submission/" target='_blank'>
                Click here to begin the submission process
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


