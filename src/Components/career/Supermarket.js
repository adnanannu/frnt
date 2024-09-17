import React from 'react';
import BackButton from '../BackButton';

// JobInfo Component for Supermarket Jobs with Numbered Title and Image
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

// Supermarket Component
const Supermarket = () => {
  const jobs = [
    {
      title: 'Supermarket Cashier',
      salary: '24,000',
      duties: [
        'Handling customer purchases at checkout',
        'Processing payments via cash, card, and other methods',
        'Providing customer service and managing product returns',
      ],
      image: 'https://media.gettyimages.com/id/1383003567/photo/employee-in-supermarket-serving-senior-customer-with-face-mask.jpg?s=612x612&w=gi&k=20&c=NgoqemJ19AYxzUKqUofCi8Gu28ZIE7ivdet26VXR2dc=', // Replace with actual image URL
    },
    {
      title: 'Stock Clerk',
      salary: '22,000',
      duties: [
        'Restocking shelves and organizing products',
        'Assisting in product inventory management',
        'Ensuring products are properly labeled and priced',
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MHbxFtO2sdPKeq9xuajP3Ll60S57EB9ABg&s', // Replace with actual image URL
    },
    {
      title: 'Deli Associate',
      salary: '25,500',
      duties: [
        'Preparing and serving deli food items',
        'Maintaining cleanliness of the deli counter',
        'Assisting customers with orders and product recommendations',
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9uprxWOCKU9nKyl_QfJdB_BtV14CGipj4g&s', // Replace with actual image URL
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

export default Supermarket;
