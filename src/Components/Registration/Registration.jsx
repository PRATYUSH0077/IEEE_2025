import React from 'react';
import venue_background from '../../assets/venue_background.jpg';
import { Text, Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
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
        className="registration-venue-page"
        style={{ backgroundImage: `url(${venue_background})` }}
      >
        <div className="registration-page-container">
          <div className="registration-container">
            <Text color='#e72f0e' className="registration-heading">Conference Registration</Text>

            <div className="registration-info-container">
              <p className="registration-text">
                Registration for the conference will commence soon.
              </p>

              <Table variant="striped" size="lg" className="registration-table">
                <Thead>
                  <Tr>
                    <Th className="registration-table-heading">Registration Type</Th>
                    <Th className="registration-table-heading">Registration Fee</Th>
                    <Th className="registration-table-heading">Maximum Number of Paper Uploads</Th>
                    <Th className="registration-table-heading">Registration Kit, Tea, Banquet Tickets</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {registrationData.map((registration, index) => (
                    <Tr key={index}>
                      <Td className="registration-table-cell">{registration.type}</Td>
                      <Td className="registration-table-cell">{registration.fee}</Td>
                      <Td className="registration-table-cell">{registration.uploads}</Td>
                      <Td className="registration-table-cell">{registration.kit}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <div className="registration-notes-container">
                <p className="registration-note-text">
                  <strong>Note:</strong>
                </p>
                <ul className="registration-note-list">
                  <li>While authors can present their papers online, they will have to pay a full registration fee as per the above rates. The kits, tea, and banquet will not be covered. Authors are therefore encouraged to participate in person.</li>
                  <li>Non-Indian participants must pay the IEEE or Non-IEEE foreign fee.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <footer className="registration-footer">
            <p className="registration-footer-text">© 2024 Conference Organization</p>
          </footer> */}
        </div>
      </Box>
    </>
  );
};

export default RegistrationPage;
