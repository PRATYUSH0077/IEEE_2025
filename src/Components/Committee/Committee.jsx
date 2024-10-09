import React from 'react';
import img1 from "../../assets/venue_background.jpg";
import {
  Container,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const CommitteePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const patrons = [
    { name: 'Prof. S. N. Singh', role: 'Director', institute: 'ABV-IIITM Gwalior' },
    { name: 'Prof. G. S. Tomar', role: 'Chairperson', institute: 'IEEE Madhya Pradesh Section' },
  ];

  const generalChairs = [
    { name: 'Prof. Aditya Trivedi', institute: 'ABV-IIITM Gwalior' },
    { name: 'Dr. Rahul Kala', institute: 'ABV-IIITM Gwalior' },
  ];

  const generalCoChairs = [
    { name: 'Dr. Gaurav Kumar Bharti', institute: 'IIIT Bhopal' },
    { name: 'Dr. Durgesh Singh', institute: 'IIITDM Jabalpur' },
    { name: 'Dr. Amit Ojha', institute: 'MANIT Bhopal' },
  ];

  const publicationChairs = [
    { name: 'Dr. Mahendra Shukla', institute: 'ABV-IIITM Gwalior' },
    { name: 'Dr. Robin Singh Bhadoria', institute: 'NIT Hamirpur' },
  ];

  const publicityChairs = [
    { name: 'Dr. Veena Anand', institute: 'ABV-IIITM Gwalior' },
    { name: 'Dr. Roshni Chakarborty', institute: 'ABV-IIITM Gwalior' },
  ];

  const financeChairs = [
    { name: 'Prof. K.K. Pattanaik', institute: 'ABV-IIITM Gwalior' },
    { name: 'Dr. M. P. S. Chawla', institute: 'SGSITS Indore' },
    { name: 'Mr. Anil Garg', institute: 'ABV-IIITM Gwalior' },
  ];

  const industryChairs = [
    { name: 'Prof. Mahua Bhattacharya', institute: 'ABV-IIITM Gwalior' },
    { name: 'Dr. Sunil Kumar', institute: 'ABV-IIITM Gwalior' },
  ];

  const websiteChairs = [
    { name: 'Dr. Anjali', institute: 'ABV-IIITM Gwalior' },
    { name: 'Dr. Vijaypal Singh Rathore', institute: 'ABV-IIITM Gwalior' },
    { name: 'Ankit Mewada', institute: 'ABV-IIITM Gwalior' },
    { name: 'Pratyush Sinha', institute: 'ABV-IIITM Gwalior' },
  ];

  const oversightCommittee = [
    { name: 'Dr. Vivek Tiwari', institute: 'ABV-IIITM Gwalior' },
    { name: 'Dr. Deepak Singh Tomar', institute: 'MANIT Bhopal' },
  ];

  const advisoryCommittee = [
    { name: 'Prof. Sanjay Agarwal', institute: 'NITTTR Bhopal' },
    { name: 'Jawar Singh', institute: 'IIT Patna' },
    { name: 'Prof. Dr. Angela Amphawan', institute: 'Sunway University, Malaysia' },
    { name: 'Prof. Monia Najjar Bounouh', institute: 'University of Tunis El Manar, Tunisia' },
    { name: 'Dr. Mayur Kumar Chhipa', institute: 'ISBAT University, Uganda' },
    { name: 'Dr. Kivilcim Yüksel', institute: 'Izmir Institute of Technology, Turkey' },
    { name: 'Prof. Peter Breda', institute: 'University of Zilina, Slovakia' },
    { name: 'Prof. Amit Kr. Mishra', institute: 'University of Aberswyth, UK' },
    { name: 'Prof. Sanjay Kumar Singh', institute: 'IIT BHU Varanasi' },
    { name: 'Prof. Abhay Kumar', institute: 'IIIT Agartala' },
    { name: 'Prof. Ghanshyam Singh', institute: 'MNIT Jaipur' },
    { name: 'Prof. Ramesh Kumar Sonkar', institute: 'IIT Guwahati' },  // Newly added
    { name: 'Prof. Saurabh Kumar Pandey', institute: 'IIT Patna' },  // Newly added
    { name: 'Prof. Santosh Kumar', institute: 'KL University' },  // Newly added
  ];

  const technicalCommittee = [
    { name: 'Dr. Mayank Swarnkar', institute: 'IIT BHU Varanasi' },
    { name: 'Dr. Chandresh Kumar Maurya', institute: 'IIT Indore' },
    { name: 'Dr. Santosh Kumar', institute: 'IIIT Naya Raipur' },
    { name: 'Dr. Ramesh Chand Pandey', institute: 'REC Ambedkar Nagar' },
    { name: 'Dr. Dharamveer Singh Rajpoot', institute: 'Jaypee Noida' },
    { name: 'Dr. Ayan Seal', institute: 'IIITDM Jabalpur' },
    { name: 'Dr. Avinash Chandra Pandey', institute: 'IIITDM Jabalpur' },
    { name: 'Dr. Vijaypal Singh Rathor', institute: 'IIITDM Jabalpur' },  // Newly added, different role
    { name: 'Dr. Nabajyoti Mazumdar', institute: 'IIIT Allahabad' },  // Newly added
    { name: 'Dr. Neetesh Kumar', institute: 'IIT Roorkee' },  // Newly added
    { name: 'Dr. Vijay Bhaskar Semwal', institute: 'MANIT Bhopal' },  // Newly added
    { name: 'Dr. Ashish Kumar Maurya', institute: 'MNNIT Allahabad' },  // Newly added
    { name: 'Dr. Vibhav Prakash Singh', institute: 'MNNIT Allahabad' },  // Newly added
    { name: 'Dr. Sandeep Sambhaji Udmale', institute: 'VJTI Mumbai' },  // Newly added
    { name: 'Dr. Neeraj Jain', institute: 'Jaypee Noida' },  // Newly added
    { name: 'Dr. Mridula Verma', institute: 'IDRBT' },  // Newly added
    { name: 'Prof. Xuan Tu-Tran', institute: 'Vietnam National University, Hanoi, Vietnam' },  // Newly added
    { name: 'Prof. Faraz Hussian', institute: 'TDTU, HCM City, Vietnam' },  // Newly added
    { name: 'Prof. Jayanta Kumar Rakshit', institute: 'NIT Agartala' },  // Newly added
    { name: 'Prof. Subhash Kumar C.Arya', institute: 'NEHU, Meghalaya' },  // Newly added
    { name: 'Prof. Lalita Gupta', institute: 'MANIT Bhopal' },  // Newly added
    { name: 'Dr. Deepika Gupta', institute: 'IIIT Naya Raipur' },  // Newly added
    { name: 'Prof. Susanta Kumar Tripathy', institute: 'NIT Silchar' },  // Newly added
    { name: 'Prof. Jawar Singh', institute: 'IIT Patna' },  // Newly added
  ];


  const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: 'spring',
      },
    },
  };

  return (
    <Box
      bgImage={`url(${img1})`}
      bgRepeat="repeat-y"
      py={12}
      color="white"
    >
      <Container maxW="xl">
        <Box textAlign="center" mb={10}>
          <Heading as="h1" size="xl" mb={6}>
            Committees
          </Heading>
          <Divider borderColor="white" mb={6} />
        </Box>

        {/* Patron */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Patron
            </Heading>
            {patrons.map((patron, index) => (
              <Text fontSize="lg" mb={2} key={index}>
                {patron.name} ({patron.role}, {patron.institute})
              </Text>
            ))}
          </Box>
        </motion.div>

        {/* General Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              General Chair
            </Heading>
            {generalChairs.map((chair, index) => (
              <Text fontSize="lg" key={index}>
                {chair.name} ({chair.institute})
              </Text>
            ))}
          </Box>
        </motion.div>

        {/* General Co-Chairs */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              General Co-Chairs
            </Heading>
            {generalCoChairs.map((chair, index) => (
              <Text fontSize="lg" key={index}>
                {chair.name} ({chair.institute})
              </Text>
            ))}
          </Box>
        </motion.div>

        {/* Publication Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Publication Chair
            </Heading>
            {publicationChairs.map((chair, index) => (
              <Text fontSize="lg" key={index}>
                {chair.name} ({chair.institute})
              </Text>
            ))}
          </Box>
        </motion.div>

        {/* Publicity Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Publicity Chair
            </Heading>
            {publicityChairs.map((chair, index) => (
              <Text fontSize="lg" key={index}>
                {chair.name} ({chair.institute})
              </Text>
            ))}
          </Box>
        </motion.div>

        {/* Finance Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Finance Chair
            </Heading>
            {financeChairs.map((chair, index) => (
              <Text fontSize="lg" key={index}>
                {chair.name} ({chair.institute})
              </Text>
            ))}
          </Box>
        </motion.div>

        {/* Industry Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Industry Relationship and Sponsorship Chair
            </Heading>
            {industryChairs.map((chair, index) => (
              <Text fontSize="lg" key={index}>
                {chair.name} ({chair.institute})
              </Text>
            ))}
          </Box>
        </motion.div>

        {/* Website Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Website Chair
            </Heading>
            {websiteChairs.map((chair, index) => (
              <Text fontSize="lg" key={index}>
                {chair.name} ({chair.institute})
              </Text>
            ))}
          </Box>
        </motion.div>

        {/* Oversight Committee */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Oversight Committee
            </Heading>
            {oversightCommittee.map((member, index) => (
              <Text fontSize="lg" key={index}>
                {member.name} ({member.institute})
              </Text>
            ))}
          </Box>
        </motion.div>

        {/* Advisory Committee */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Advisory Committee
            </Heading>
            <List spacing={3}>
              {advisoryCommittee.map((member, index) => (
                <ListItem key={index}>
                  <Text fontSize="lg">
                    {member.name} ({member.institute})
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </motion.div>

        {/* Technical Committee */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Technical Committee
            </Heading>
            <List spacing={3}>
              {technicalCommittee.map((member, index) => (
                <ListItem key={index}>
                  <Text fontSize="lg">
                    {member.name} ({member.institute})
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CommitteePage;
