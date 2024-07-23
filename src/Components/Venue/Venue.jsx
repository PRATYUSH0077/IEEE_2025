import React from 'react';
import { Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import venue_background from '../../assets/venue_background.jpg';
import temp from '../../assets/temp.gif';
import './Venue.css';

const Venue = () => {
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
                    <Box className="venue-box">
                        <Text color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">Venue</Text>
                        <Text fontSize={isMobile ? 'lg' : 'xl'}>
                            {/* <b> */}
                            ABV-Indian Institute of Information Technology and Management Gwalior,
                            <br></br>
                            Morena Link Road
                            Gwalior,Madhya Pradesh
                            474015, India
                            <br></br>
                            Web:&nbsp;
                            {/* </b> */}
                            <u>
                                <a target='_blank' href='https://www.iiitm.ac.in' className=''>www.iiitm.ac.in</a>
                            </u>

                        </Text>
                    </Box>

                    {/* <Box className="venue-box">
                        <Text color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">Dates</Text>
                        <Text fontSize={isMobile ? 'lg' : 'xl'}>7-9 February, 2025</Text>
                    </Box> */}
                </div>

                {/* <div className="venue-row">
                    <Box className="venue-box">
                        <Text color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">Important Dates</Text>
                        <Text fontSize={isMobile ? 'lg' : 'xl'}>
                            Paper submission opens on 10th July, 2024<br />
                            Rolling submission closes on 29th September, 2024<br />
                            Acceptance of selected papers: 13th December, 2024<br />
                            Final Paper Submission and Registration Deadline: 17th January 2025<br />
                            Conference Dates: 7-9 February, 2025
                        </Text>
                    </Box>
                </div> */}
                <div className="venue-row">
                    <Box className="about-iiitm">
                        <Text color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold" textAlign="center">
                            About ABV-IIITM Gwalior
                        </Text>
                        <Text fontSize={isMobile ? 'lg' : 'xl'} >
                            <p class="has-text-align-justify">ABV-Indian Institute of Information Technology and Management (IIITM) in Gwalior, Madhya Pradesh, India is the <strong>first IIIT</strong> established by Ministry of Human Resource Development (Presently Ministry of Education, Govt. of India), Government of India in 1997. It is an effort by MHRD&nbsp;(Presently Ministry of Education, Govt. of India) towards creating high quality professionals in areas of management and information. The Ministry of Human Resource Development, Government of India has declared the Institute as <strong><em>“Institute of National Importance”</em></strong> under the act of Parliament. This institute was created for facilitating higher education, research, and consultancy in areas of information technology (IT) and business management. The institute is located on a 150-acre. It is a residential campus; faculty and students live on sprawling green campus. It houses several departmental blocks with academic block houses lecture theatres, seminar halls, library, laboratories and faculty offices, administrative block, an open air theatre, indoor sports complex and the student hostels. There are three hostels for boys and one for girls. The campus has a variety of plants including those with medicinal properties.&nbsp;The Institute campus is wide spread over an area of 150 acres. It has many topographical features, various buildings of different nature with clean and wide roads surrounded by a green belt. The campus area has been broadly divided into different functional zones: </p>
                            {/* <br /> */}
                            (i) institution zone for teaching departments/Labs/administration .
                            <br />
                            (ii) residential zone for the faculty and staff
                            <br />
                            (iii) students’ hostel zone.
                            <br />
                            <br />
                            Other amenities on the campus include a guest houses (Visitor’s Hostel, MDPs), a dispensary, shopping Centre, bank (BOI), post office, sports complex, playgrounds, new Tennis courts, Basketball courts, Volleyball courts, open air theatre, central seminar hall, nursery and Cafeteria etc.
                            <br></br>
                            <div className='d-flex align-items-center'>

                                <iframe width="700" height="315" src="https://www.youtube.com/embed/0mXclKECo8U" frameborder="0" allowfullscreen></iframe>

                            </div>
                            For more information, please visit: &nbsp;
                            <u><a target='_blank' href='https://www.iiitm.ac.in/'>www.iiitm.ac.in</a></u>
                            <br></br>
                            <u><a href="https://www.iiitm.ac.in/index.php/en/campus-photographs" target="_blank">Click here</a></u> to see the campus Photographs.
                        </Text>
                    </Box>
                </div>
                <div className="venue-row">
                    <Box className="venue-box">
                        <Text color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">Gwalior Nearby Attractions</Text>
                        <Text fontSize={isMobile ? 'lg' : 'xl'}>
                            <p class="has-text-align-justify">Gwalior is a city in the central Indian state of Madhya Pradesh. It is also known as cultural capital of Madhya Pradesh. It’s known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. Ancient Gwalior Fort occupies a sandstone plateau overlooking the city and is accessed via a winding road lined with sacred Jain statues. Within the fort’s high walls is the 15th-century Gujari Mahal Palace, now an archaeological museum.</p>
                            <p class="has-text-align-justify"><em>Taj Mahal</em>, one of the most beautiful monuments, is one of the wonders of the world. It is 120km away from Gwalior. Delhi, Capital of India itself is 320km away from Gwalior.</p>
                            <p class="has-text-align-justify">Madhav National Park is a dense forest spread over a sprawling area of 355 sq. km. The park is one of the most attractive places to visit near Gwalior for housing the exotic wildlife in its raw form. It is 120km away from Gwalior. A designated World Heritage Site by UNESCO, Sanchi is a popular village known for its ancient structures in the form of Stupas, monasteries, and fragments upholding the Buddhist relics dating back to the 3rd century BC. Sanchi is 381km away from Gwalior.&nbsp;</p>
                            {/* <h4 class="wp-block-heading has-text-align-center"><strong>Virtual Tour of Gwalior Attractions</strong></h4> */}


                            <p><b>Weather Conditions of Gwalior, India: </b>Gwalior city climate is extreme. Winter is very cold (up to 6 °C) and summer is very hot (up to 48 °C). Usually, Monsoon is arrived in the month of July. Over to this rain fall is uncertain (average being 910mm).&nbsp;</p>
                        </Text>
                    </Box>
                </div>
                <div className="venue-row">
                    <Box className="about-iiitm ">
                        <Text textAlign='center' color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">How to Reach ABV-IIITM Gwalior</Text>
                        <Text fontSize={isMobile ? 'lg' : 'xl'}>
                            <p class="has-text-align-justify">
                                This Institute is in city Gwalior, Madhya Pradesh i.e. 320 km away from Delhi (Capital of India).
                                <br />
                                Gwalior being a major railway junction in the Northern central region itconnects almost all important destinations in south, west and east.  &nbsp;ABV-IIITM is located on Morena Link Road at a distance of about<u> 3.5km
                                    from Gwalior railway station.</u>
                                <br />
                                It is located at a distance of <u>8.5km from  Rajmata Vijay Raje Scindiacity airport.</u>
                                <br />
                                One can hire a taxi and can reach the IIITMwithin 30 minutes from airport and 15 minutes from railway station.
                                <br />
                                Gwalior is well connected by road from Agra, Delhi and Jhansi etc. The city has weekly thrice air connectivity to Mumbai. Recently daily flight started for New Delhi, Jammu, Hyderabad, Bangalore and Kolkata. Total 69 trains are running between Delhi and Gwalior railway station.
                                <br />
                            </p>
                            <p>For Trains Booking, Click <u><a rel="noreferrer noopener" href="https://www.irctc.co.in/nget/" target="_blank"><strong>here</strong></a></u><strong>.</strong></p>
                            <p>For Flights Booking, Click <u><a rel="noreferrer noopener" href="https://www.air.irctc.co.in/" target="_blank"><strong>here</strong></a></u><strong>.</strong></p>
                        </Text>
                    </Box>
                </div>
            </Box>
        </>
    );
};

export default Venue;


