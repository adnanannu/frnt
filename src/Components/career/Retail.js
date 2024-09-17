import React from 'react';
import BackButton from '../BackButton';

// JobInfo Component for Retail Jobs with Numbered Title and Image
const JobInfo = ({ number, title, salary, duties, image }) => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2>{number}. {title}</h2>
        <p><strong>National average salary: </strong>${salary} per year</p>
        <div>
          <h4>Job duties:</h4>
          <ul>
            {duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </div>
    </div>
  );
};

// Retail Component
const Retail = () => {
  const jobs = [
    {
      title: 'Retail Sales Associate',
      salary: '29,500',
      duties: [
        'Assisting customers with purchases',
        'Maintaining product displays and stock',
        'Handling cash registers and payments',
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Store Manager',
      salary: '50,000',
      duties: [
        'Overseeing store operations and staff',
        'Managing inventory and budgets',
        'Ensuring customer satisfaction',
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Cashier',
      salary: '25,000',
      duties: [
        'Processing customer transactions',
        'Handling cash, credit, and debit payments',
        'Providing customer service at checkout',
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    // Add more jobs if needed
  ];

  return (
    <div>
      {jobs.map((job, index) => (
        <JobInfo 
          key={index}
          number={index + 1} // Dynamic number before title
          title={job.title}
          salary={job.salary}
          duties={job.duties}
          image={job.image}
        />
      ))}
      <BackButton/>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ddd',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  textContainer: {
    flex: 2,
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  // Media query for responsive design
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
    },
    imageContainer: {
      marginTop: '20px',
    },
  },
};

export default Retail;
