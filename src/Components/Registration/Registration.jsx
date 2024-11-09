import React from 'react';
import registrationDoc from '../../assets/registration.docx';

const RegistrationPage = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Conference Registration</h2>
        
        <div style={styles.infoContainer}>
          <p style={styles.text}>
            For detailed information on registration fees and types, please refer to the document below.
          </p>
          <a href={registrationDoc} download style={styles.link}>
            Download Registration Fee Details
          </a>
        </div>
      </div>
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Conference Organization</p>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh', // Ensures the page takes full height
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    maxWidth: '500px',
    margin: '50px auto',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    flexGrow: 1, // Ensures the content takes up remaining space
  },
  heading: {
    marginBottom: '20px',
    fontSize: '26px',
    color: '#333',
    fontWeight: 'bold',
  },
  infoContainer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
  },
  text: {
    marginBottom: '15px',
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.5',
  },
  link: {
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '10px 15px',
    borderRadius: '5px',
    border: '1px solid #007bff',
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer',
  },
  linkHover: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    marginTop: 'auto', // Pushes the footer to the bottom of the page
  },
  footerText: {
    fontSize: '14px',
  },
};

export default RegistrationPage;
