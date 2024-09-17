import React from 'react';
import BackButton from '../BackButton';

// JobInfo Component for Cleaning Services Jobs with Numbered Title and Image
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

// CleaningServices Component
const CleaningServices = () => {
  const jobs = [
    {
      title: 'Housekeeper',
      salary: '30,000',
      duties: [
        'Cleaning and maintaining residential homes',
        'Washing dishes, laundry, and other household chores',
        'Ensuring rooms are tidy and organized',
      ],
      image: 'https://www.todayshotelier.com/wp-content/uploads/sites/2/2018/06/housekeepingJune11.jpg', // Replace with actual image URL
    },
    {
      title: 'Commercial Cleaner',
      salary: '32,500',
      duties: [
        'Cleaning offices, commercial buildings, and other non-residential areas',
        'Vacuuming, dusting, and sanitizing surfaces',
        'Handling specialized cleaning equipment',
      ],
      image: 'https://www.clearchoiceuk.com/wp-content/uploads/2018/08/qualities-and-skills-of-a-commercial-cleaner.jpg', // Replace with actual image URL
    },
    {
      title: 'Window Cleaner',
      salary: '28,000',
      duties: [
        'Cleaning windows of homes and commercial buildings',
        'Using ladders and safety equipment',
        'Ensuring windows are streak-free',
      ],
      image: 'https://evershineuae.net/wp-content/uploads/2023/08/Window-Cleaning.jpg', // Replace with actual image URL
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

export default CleaningServices;
