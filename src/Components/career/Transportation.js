import React from 'react';
import BackButton from '../BackButton';

// JobInfo Component for Transportation Jobs with Numbered Title and Image
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

// Transportation Component
const Transportation = () => {
  const jobs = [
    {
      title: 'Truck Driver',
      salary: '48,000',
      duties: [
        'Transporting goods across various routes',
        'Ensuring timely deliveries and safe transport',
        'Maintaining records of vehicle inspections and trips',
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Delivery Driver',
      salary: '35,000',
      duties: [
        'Delivering packages to customers or businesses',
        'Operating delivery vehicles safely',
        'Tracking and managing delivery routes',
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Bus Driver',
      salary: '41,000',
      duties: [
        'Transporting passengers on designated routes',
        'Ensuring the safety of all passengers',
        'Maintaining vehicle cleanliness and operational condition',
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

export default Transportation;
