import React from 'react';
import { Box, Heading, Text, Image, VStack, HStack, Divider } from '@chakra-ui/react';
import './style.css';
// Import images
import ProfKKImage from "./image/Kk_Agrawal.jpg";
import ManmathImage from "./image/Manmath Badapanda.png";
import DrMataDeenImage from "./image/MD-Bansal.jpg";
import DrParanavLadImage from "./image/pranav_lad.jpg";
import DrKalpantPathakImage from "./image/Kalpant-Pathak.JPG";
import SudhakaraPoojaryImage from "./image/shudhakar_pooja.png";
import ProfKapilAhujaImage from "./image/kapil-Ahuja.jpg";

const BioSection = ({ image, name, bio }) => (
  <HStack spacing={4} align="start" width="100%">
    <Image src={image} alt={name} boxSize="150px" borderRadius="full" />
    <VStack align="start" spacing={2} flex={1} maxW="800px">
      <Heading as="h2" size="lg">{name}</Heading>
      <Box maxH="200px" overflowY="auto" p={2} border="1px solid #ccc" borderRadius="md" width="100%">
        <Text>{bio}</Text>
      </Box>
    </VStack>
  </HStack>
);

const EventPage = () => {
  return (
    <Box className="event-page" p={5} maxW="1000px" mx="auto">
      {/* Chief Guest Section */}
      <VStack align="start" spacing={4} mb={10}>
        <Heading as="h1" size="xl">Chief Guest</Heading>
        <BioSection
          image={ProfKKImage}
          name="Prof. KK Agarwal"
          bio='Prof. K. K. Aggarwal is an Engineer by training and has been an accomplished academician and administrator. He received his PhD in Reliability Evaluation and Optimization from Kurukshetra University, Haryana. He pursued his Master’s Degree from the same university securing first position. He obtained his Bachelor’s Degree in Electronics and Communication Engineering from Panjab University, Chandigarh as the topper.
Prof. Aggarwal has served the National Board of Accreditation, India, as its former Chairman. He was the Founding Vice Chancellor of Guru Govind Singh Indraprastha University, Delhi, where he served for ten years from 1998 to 2008, leading from the front. Before this, he was the Pro Vice-Chancellor of Guru Jambheshwar University, Hisar, for three years. He is also the former Chairman of the Board of Governors, MNIT, Jaipur.
He had a distinguished career of 27 years as an academic at the National Institute of Technology, Kurukshetra, where he was engaged in teaching and research activities in Computer Engineering and Information Technology. Prof. Aggarwal has authored various books including Reliability Engineering and Software Engineering, many of which have undergone numerous rounds of reprints.  He has published over 400 research papers in the domain of Electronics and Computer Engineering in academic journals of repute, about half of which are international journals.
He was associated with the Institution of Electronics and Telecommunication Engineers (IETE) serving as its President from 2002-2004. During this period, this Institution witnessed unprecedented growth and made a remarkable impact on society in general & IT professionals in particular. Prof. Aggarwal was also the President of the Computer Society of India (CSI) from 2007-2009, the President of the South East Asia Regional Computer Confederation (SEARCC) from 2008-2010 and the Sectional President (IT & CS) of the Indian Science Congress Association. He was also the Academy Professor of the Academy of Scientific and Innovative Research (AcSIR) of Council of Scientific & Industrial Research (CSIR).
Prof. Aggarwal has been invited to deliver lectures at several Universities in India and abroad, including the University of Berkley, USA; University of Cincinnati, USA; Florida State University, USA; University of Birmingham, UK and Technical University of Germany, to name a few.
Apart from his contributions in the academic field, Prof. Aggarwal has made a very strong impact in the industrial world. The industry has widely consulted him, most notable being his contribution towards the Reliability Analysis for PSLV (Polar Satellite Launch Vehicle) of the Indian Space Mission. He has also delivered lectures and conducted programmes in several leading industrial organisations in India and overseas.
Prof. Aggarwal was honoured by the Reliability Society of IEEE, USA for his services as the Guest Editor for the special issue on “State of Reliability Effort of the Indian Sub-Continent”.  He was declared as the Man of the Decade, Man of the Century and Man of the Millennium by American Bibliographical Institute, USA. He was also awarded the Delhi Ratan by the All India Conference of Intellectuals.  International Biographical Centre, England published his biography in “The First Five Hundred – at the New Millennium” in July 2000.  The Broadcast Engineering Society of India (BESI) honoured him by conferring an Honorary Fellowship on him in February 2001 and the Computer Society of India (CSI) conferred the Fellowship to him in 2003. Prof. Aggarwal was conferred a Distinguished Fellowship in 2010 and the very First Life Time Achievement Award in 2011 by the Institute of Electronics and Telecommunication Engineers (IETE), India. Computer Society of India (CSI) also conferred the Life Time Achievement Award on Prof. Aggarwal in 2016.
'
        />
      </VStack>

      <Divider mb={10} />

      {/* Guest of Honor Section */}
      <VStack align="start" spacing={4} mb={10}>
        <Heading as="h1" size="xl">Guest of Honor</Heading>
        <BioSection
          image={ManmathImage}
          name="Manmath Badapanda"
          bio='Manmath Kumar Badapanda has received his Bachelor of Technology degree in Electrical Engineering from Veer Surendra Sai University of Technology, Burla, Odisha in 1988; Master in Technology degree with specialization in Electrical Engineering from Indian Institute of Technology, BHU, Varanasi in 1990 and PG Diploma in Business Administration degree with double specializations in Marketing Management and International Trade from IIMS, Kolkata in 1999. He is working as Head, RF Power Supplies Section and Board Member at Raja Ramanna Centre for Advanced Technology (RRCAT), Indore, a premier Research and Development organization under Department of Atomic Energy, Government of India. He has original and innovative contributions, granted US patent No. 10027122B2 and Indian patent No. 436206, as their sole inventor and transferred several crucial technologies to industries having impressive techno-economic-social impacts. He has demonstrated exemplary technical leadership for advancement and development of power converter technology and has unique credibility that more than 100 numbers of power converters developed by him, are in 24/7 and 365 days operations with various national facilities in India. He has published 115 papers in peer reviewed journals & conferences, including in high impact factor journals like IEEE Transactions on Power Electronics, IEEE Transactions on Plasma Sciences. He is well known in the field of precision regulated HVDC power supply and delivered several invited talks in reputed international laboratories like PAL, South Korea; ANKA, Germany; ALBA, Spain and PSI, Switzerland.
He is a Fellow, Indian National Academy of Engineering; Fellow, The Institution of Engineers (India) and Senior Member, Institute of Electrical and Electronics Engineers. He is a member of several crucial committees of various government departments, organizations, commissions and actively associated with several professional bodies. He is Vice Chair, IEEE Madhya Pradesh Section (MP and Chhattisgarh); Chair, IEEE Power Electronics Society Chapter; Chair, IEEE Industrial Electronics Society Chapter; Chair, IEEE Systems Council; Chair, IEEE Industry Relations Committee and Member, Executive Committee of IEEE Madhya Pradesh Section during 2022-2025. He was Chair, Standing Committee on Industry Relations and Member, Executive Committee of IEEE Bombay Section during 2019-2021. He has chaired various committees of several IEEE conferences and workshops organized by IEEE Region-10 (Asia Pacific Region), IEEE PELS & IES Societies, IEEE Bombay Section, IEEE Madhya Pradesh Section and delivered dozens of invited talks and keynote addresses. He is a Member, Project Evaluation and Monitoring Committee for Indo-Taiwan S&T Cooperation Program of Department of Science and Technology, Government of India and Panel Adviser, Union Public Service Commission, New Delhi. He has received a dozen of prestigious awards including “Technologist of the Year-2023” from the IEEE India Council; “Research Excellence Award-2023” from The Institution of Engineers (India) and four numbers of Department of Atomic Energy Awards for excellence in science, engineering and technology in the year 2008, 2013, 2016, 2017 & so on.
'
        />
      </VStack>

      <Divider mb={10} />

      {/* Day 1 Section */}
      <VStack align="start" spacing={4} mb={10}>
        <Heading as="h1" size="xl">Day 1</Heading>
        <Heading size="md">
          Tutorial 1:

        </Heading>
        <BioSection
          image={DrMataDeenImage}
          name="Dr. Mata Deen Bansal"
          bio='MATADEEN BANSAL received the B.E. and M.E. degrees from the Department of Electronics and Communication Engineering, Madhav Institute of Technology and Science, Gwalior, India, in 2001, and 2006, respectively. He received his Ph.D. degree from 
ABV-Indian Institute of Information Technology and Management Gwalior, India, in 2013. He has been working as an Assistant Professor with the PDPM-Indian Institute of Information Technology Design and Manufacturing, Jabalpur, India, since 2013. He has published more than 40 papers in reputed journals and conferences. His research interests include wireless communications, cooperative communications, cognitive radios, multiple-input multiple output (MIMO) systems, non-orthogonal multiple access (NOMA), and optimization of communication systems. He is a Senior Member of IEEE. 
'
        />
        <Divider mb={10} />
        <Heading size="md">
          Tutorial 2:

        </Heading>
        <BioSection
          image={DrParanavLadImage}
          name="Dr. Pranav Lad"
          bio='Dr. Pranav Lad is a Senior Customer Success Engineer at
MathWorks, based out of Pune. He works closely with academic
institutions in order to help accelerate the pace of research and to
improve learning outcomes. His technical expertise lies in the field of
robotics, vibrations, nonlinear dynamics, and artificial intelligence.
He is currently focusing on the modeling and simulation of Robotics
and Autonomous Systems with special attention to UAVs. He
completed his masters and doctorate in Mechanical Engineering from
IIT Bombay. He has authored various research papers in international
journals and conference proceedings. While working as a research
assistant at IIT Bombay, he interacted with various industries for
consultation. Prior to that, he received his Bachelor’s from the
University of Pune.
'
        />
        <Divider mb={10} />
        <Heading size="md">
          Tutorial 3:

        </Heading>
        <BioSection
          image={DrKalpantPathakImage}
          name="Dr. Kalpant Pathak"
          bio='Kalpant Pathak received the B.E. degree from the IES IPS Academy, Indore, M.Tech. degree from IIT Guwahati and Ph.D. degree for IIT Kanpur, India. He is currently working as Staff Engineer in Wireless R&D group at Qualcomm Bangalore. His research interests include energy harvesting, green communications, wireless communications, reinforcement learning, and LTE/NR DTR design.
'
        />
      </VStack>

      <Divider mb={10} />

      {/* Day 2 Section */}
      <VStack align="start" spacing={4} mb={10}>
      <Heading as="h1" size="xl">Day 2</Heading>
        <Heading size="md">KeyNote 1:</Heading>
        <BioSection
          image={DrParanavLadImage}
          name="Dr. Pranav Lad"
          bio='Dr. Pranav Lad is a Senior Customer Success Engineer at
MathWorks, based out of Pune. He works closely with academic
institutions in order to help accelerate the pace of research and to
improve learning outcomes. His technical expertise lies in the field of
robotics, vibrations, nonlinear dynamics, and artificial intelligence.
He is currently focusing on the modeling and simulation of Robotics
and Autonomous Systems with special attention to UAVs. He
completed his masters and doctorate in Mechanical Engineering from
IIT Bombay. He has authored various research papers in international
journals and conference proceedings. While working as a research
assistant at IIT Bombay, he interacted with various industries for
consultation. Prior to that, he received his Bachelor’s from the
University of Pune.
'
        />
        <Heading size="md">KeyNote 2:</Heading>
        <BioSection
          image={DrKalpantPathakImage}
          name="Dr. Kalpant Pathak"
          bio='Kalpant Pathak received the B.E. degree from the IES IPS Academy, Indore, M.Tech. degree from IIT Guwahati and Ph.D. degree for IIT Kanpur, India. He is currently working as Staff Engineer in Wireless R&D group at Qualcomm Bangalore. His research interests include energy harvesting, green communications, wireless communications, reinforcement learning, and LTE/NR DTR design.
'
        />
      </VStack>

      <Divider mb={10} />

      {/* Day 3 Section */}
      <VStack align="start" spacing={4} mb={10}>
        <Heading as="h1" size="xl">Day 3</Heading>
        <Heading size="md">KeyNote 1:</Heading>
        <BioSection
          image={SudhakaraPoojaryImage}
          name="Sudhakara Poojary"
          bio='Sudhakara Poojari is the Head of Technology and Engineering at the Corporate Research & Innovation (R&I) – Co-Innovation Network (COIN) group at Tata Consultancy Services (TCS). With a B.Tech degree in Engineering Technology and over 28 years of experience, he has held diverse leadership roles in customer and account management, intrapreneurship, innovation, and intellectual property (IP) asset development.
A pioneer of the "Entrepreneur in Residence" program, Sudhakara has been instrumental in driving high-impact, big-bet solutions within a start-up-like environment. Among his notable achievements is the development of TCS Clever Energy, an IP asset that has successfully scaled into an independent sub-business unit.
Sudhakara is also a key contributor to TCS’s intellectual property portfolio, with multiple peer-reviewed publications, granted patents, and over 10 IP assets developed from concept to productization. His work has played a pivotal role in transitioning innovations from R&D to scalable business solutions.
'
        />
        <Divider mb={10} />
        <Heading size="md">KeyNote 2:</Heading>
        <BioSection
          image={ProfKapilAhujaImage}
          name="Prof. Kapil Ahuja"
          bio='After completing a double Master’s plus a Ph.D. from Virginia Tech (USA), Prof. Ahuja did a postdoc from the Max Planck Institute in Magdeburg (Germany). Subsequently, he worked as an Assistant Professor and an Associate Professor in Computer Science and Engineering (CSE) at IIT Indore, where he is currently holding a Full Professor position. Recently, he has also been a Visiting Professor at University of Texas at Austin (USA), IMT Atlantique (France), TU Dresden (Germany), Sandia National Labs (USA), and TU Braunschweig (Germany).
'
        />
      </VStack>
    </Box>
  );
};

export default EventPage;
