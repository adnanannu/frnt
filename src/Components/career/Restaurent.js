import React from 'react';
import BackButton from '../BackButton';

// JobInfo Component for Restaurant Jobs with Numbered Title and Image
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

// Restaurant Component
const Restaurant = () => {
  const jobs = [
    {
      title: 'Restaurant Manager',
      salary: '50,000',
      duties: [
        'Overseeing daily operations',
        'Managing staff and schedules',
        'Ensuring customer satisfaction',
      ],
      image: 'https://www.touchbistro.com/wp-content/uploads/2020/03/restaurant-manager.jpg', // Replace with actual image URL
    },
    {
      title: 'Chef',
      salary: '48,000',
      duties: [
        'Preparing food according to recipes',
        'Ensuring food quality and safety',
        'Managing kitchen staff',
      ],
      image: 'https://static.cordonbleu.edu/Files/MediaFile/84569.jpg', // Replace with actual image URL
    },
    {
      title: 'Waiter/Waitress',
      salary: '30,000',
      duties: [
        'Taking orders from customers',
        'Serving food and beverages',
        'Handling payments and ensuring satisfaction',
      ],
      image: 'https://img.pikbest.com/ai/illus_our/20230423/66496b7dbb3f30b3d8760832343861f2.jpg!w700wp', // Replace with actual image URL
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

export default Restaurant;