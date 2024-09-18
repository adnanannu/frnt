import React from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../BackButton';



// JobInfo Component with Numbered Title and Image
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

// Human Resources Component
const HumanResource = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  const jobs = [
    {
      title: 'Human Resource Manager',
      salary: '90,000',
      duties: [
        'Developing HR strategies and initiatives',
        'Bridging management and employee relations',
        'Managing recruitment and selection process'
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image
    },
    {
      title: 'Office Manager',
      salary: '60,000',
      duties: [
        'Organizing office operations and procedures',
        'Managing office supplies and inventory',
        'Overseeing administrative staff'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Documentation Officer',
      salary: '55,000',
      duties: [
        'Maintaining and managing company documents',
        'Ensuring compliance with regulatory requirements',
        'Assisting in the preparation of reports'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Public Relations Officer',
      salary: '70,000',
      duties: [
        'Developing PR strategies and campaigns',
        'Managing media relations and communications',
        'Organizing promotional events'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'HR Generalist/Assistant',
      salary: '50,000',
      duties: [
        'Supporting HR operations and initiatives',
        'Assisting with recruitment and onboarding',
        'Maintaining employee records'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'HR Coordinator',
      salary: '55,000',
      duties: [
        'Coordinating HR projects and programs',
        'Assisting in performance management processes',
        'Managing employee training and development'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'HR Officer',
      salary: '60,000',
      duties: [
        'Implementing HR policies and procedures',
        'Managing employee relations',
        'Conducting HR audits'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'HR Supervisor',
      salary: '70,000',
      duties: [
        'Supervising HR staff and activities',
        'Ensuring compliance with labor laws',
        'Developing HR programs and initiatives'
      ],
      image: 'https://via.placeholder.com/150',
    },
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
      <BackButton onClick={handleBackClick} />
    </div>
  );
}

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

export default HumanResource;
