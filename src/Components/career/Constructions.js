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

// Construction Component
const Construction = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };
  const jobs = [
    {
      title: 'Construction Assistant',
      salary: '46,415',
      duties: [
        'Cleaning the site',
        'Preparing materials for use, such as pipes and wood',
        'Discarding waste',
      ],
      image: 'https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/927407842AssistantConstructionSuperintendent.jpg=ws1280x960', // Placeholder image, replace with actual image URL
    },
    {
      title: 'Equipment Operator',
      salary: '52,000',
      duties: [
        'Equipment operators drive and operate construction-class vehicles required on a project site, such as excavators, dump trucks, cranes and concrete mixers. Equipment operators may also perform the following functions:',
        'Understanding and adhering to all equipment safety guidelines',
        'Ensuring equipment is in safe, working condition'

        
      ],
      image: 'https://www.ptsworks.com/wp-content/uploads/2021/10/heavy-machinery-operator-requirements.jpg', // Replace with actual image
    },
    {
      title: 'General laborer',
      salary: '52,000',
      duties: [
        'General laborers should be in good physical health due to the demanding work required. They may need to lift heavy objects, operate heavy machinery and work in extreme weather conditions. General laborers perform a wide variety of physical tasks on a construction site, including',
        'Clearing debris and waste from the job site',
        'Preparing worksites and materials',
        'Loading, unloading and organizing materials'
      ],
      image: 'https://www.shutterstock.com/image-photo/smiling-portrait-beautiful-latin-female-260nw-1945399792.jpg', // Replace with actual image
    },
    {
      title: 'Construction foreperson',
      salary: '52,000',
      duties: [
        ' leads the work crew. They are responsible for managing employees and overseeing daily productivity. Common responsibilities of a foreperson include:',
        'Training workers',
        'Facilitating communication between the site workers and project managers',
      ],
      image: 'https://thebirmgroup.com/wp-content/uploads/2022/07/Construction-General-Foreman-Salary-.jpg', // Replace with actual image
    },
    {
      title: 'Scheduler',
      salary: '52,000',
      duties: [
        'Overseeing workers on site',
        'Ensuring safety regulations are followed',
        'Reporting progress to the project manager',
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5U5Y18JEyqyDWXHsIFQehFMkea4piQmLB-w&s', // Replace with actual image
    },
    {
      title: 'Field engineer',
      salary: '52,000',
      duties: [
        'Overseeing workers on site',
        'Ensuring safety regulations are followed',
        'Reporting progress to the project manager',
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTzZ-ZmlhBRJOi7uI1Y6IcUAmp8F8Sp5lt3aPJyp5EaAPmZQPdzCgKoU5CBlp-qrmKxg&usqp=CAU', // Replace with actual image
    },
    {
      title: 'Surveyor',
      salary: '52,000',
      duties: [
        'Overseeing workers on site',
        'Ensuring safety regulations are followed',
        'Reporting progress to the project manager',
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image
    },
    {
      title: 'Safety manager',
      salary: '52,000',
      duties: [
        'Overseeing workers on site',
        'Ensuring safety regulations are followed',
        'Reporting progress to the project manager',
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image
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

export default Construction;
