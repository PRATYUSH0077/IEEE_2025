import React from 'react';
import venue_background from '../../assets/venue_background.jpg';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

import './RegistrationPage.css'; // Importing the CSS file

// Registration data list
const registrationData = [
  { type: "IEEE Student", fee: "₹ 6,500", uploads: 1, kit: 1 },
  { type: "Student", fee: "₹ 7,000", uploads: 1, kit: 1 },
  { type: "IEEE Faculty", fee: "₹ 8,000", uploads: 2, kit: 1 },
  { type: "Faculty", fee: "₹ 9,000", uploads: 2, kit: 1 },
  { type: "IEEE Industry Participant", fee: "₹ 11,000", uploads: 2, kit: 1 },
  { type: "Industry Participant", fee: "₹ 12,000", uploads: 2, kit: 1 },
  { type: "IEEE Foreign Participant", fee: "USD $200", uploads: 2, kit: 1 },
  { type: "Foreign Participant", fee: "USD $250", uploads: 2, kit: 1 }
];

const RegistrationPage = () => {
  return (
    <>
      <Box
        className="venue-page"
        style={{ backgroundImage: `url(${venue_background})` }}
      >
        <div className="page-container">
          <div className="container">
            <Text color="#e72f0e" className="heading">Conference Registration</Text>

            <div className="info-container">
              <p className="text">
                Registration for the conference will commence soon.
              </p>

              <Table variant="striped" size="lg" className="table">
                <Thead>
                  <Tr>
                    <Th textAlign="centre" className="table-heading">Registration Type</Th>
                    <Th textAlign="centre" className="table-heading">Registration Fee</Th>
                    <Th textAlign="centre" className="table-heading">Maximum Number of Paper Uploads</Th>
                    <Th textAlign="centre" className="table-heading">Registration Kit, Tea, Banquet Tickets</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {registrationData.map((registration, index) => (
                    <Tr key={index}>
                      <Td>{registration.type}</Td>
                      <Td>{registration.fee}</Td>
                      <Td>{registration.uploads}</Td>
                      <Td>{registration.kit}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <div className="notes-container">
                <p className="note-text">
                  <strong>Note:</strong>
                </p>
                <ul className="note-list">
                  <li>While authors can present their papers online, they will have to pay a full registration fee as per the above rates. The kits, tea, and banquet will not be covered. Authors are therefore encouraged to participate in person.</li>
                  <li>Non-Indian participants must pay the IEEE or Non-IEEE foreign fee.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </Box>
    </>
  );
};

export default RegistrationPage;
