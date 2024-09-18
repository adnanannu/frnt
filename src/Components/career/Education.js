import React from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../BackButton';



// JobInfo Component with Numbered Title and Image
const JobInfo = ({ number, title, salary, duties, image}) => {

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2>{number}. {title}</h2>
        <h4>{styles.sub}</h4>
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
const Education = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };
  const jobs = [
    {
      title: 'KG Teachers',
      salary: '',
      duties: [
        'Teach students reading, writing, and math skills',
        'Help nurture a love of knowledge',
        'Plan lessons based on school curriculums and values',
      ],
      image: 'https://quickbooksdesktop.com/wp-content/uploads/2021/11/must-have-qualities-of-a-good-kindergarten-teacher-quickbooksdesktop.jpg', // Placeholder image, replace with actual image URL
    },
    {
      title: 'Homeroom Techers',
      salary: '',
      duties: [
        'responsible for gathering and collecting student reports for the main key subjects whose medium of instruction is English',
        

        
      ],
      image: 'https://lawnet.vn/uploads/image/2023/09/26/114256055.jpg', // Replace with actual image
    },
    {
      title: 'Teacher',
     
      salary: '',
      duties: [
        ' ',
        '',
        '',
        ''
      ],
      image: 'https://nwlc.org/wp-content/uploads/2017/04/black-teacher.jpg', // Replace with actual image
    },
    {
      title: 'Special Education',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://cdn.regent.edu/wp-content/uploads/2023/03/how-to-become-a-special-education-teacher-fb.jpg', // Replace with actual image
    },
    {
      title: 'Assessment Coordinator',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/qna_career_path/academic-coordinator-academic-coordinator.jpg=ws1280x960', // Replace with actual image
    },
    {
      title: 'Bus Attendant',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://www.shutterstock.com/image-photo/black-female-teacher-assisting-children-600nw-2364346963.jpg', // Replace with actual image
    },
    {
      title: 'Student Recruitment Officer',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://media.istockphoto.com/id/1369408412/photo/business-colleagues-having-a-conversation.jpg?s=612x612&w=0&k=20&c=56WHSSqEp8ybslPFodgylAbeCR9fExoF5eJVNbKZ_8s=', // Replace with actual image
    },
    {
      title: 'Admissions and Family Experience Officer',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBOubsMofG2hL6_qIHb6I08hu0YoXvGF-zw&s', // Replace with actual image
    },
    {
      title: 'Swim Coach',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://theswimmingswan.com/wp-content/uploads/2020/04/Swim-Coach-e1587331359838.jpg', // Replace with actual image
    },
    {
      title: 'Receptionist',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://www.swipedon.com/hubfs/2022_2411-35.jpg', // Replace with actual image
    },
    {
      title: 'Lab Technician',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://www.worldskillsuk.org/wp-content/uploads/2024/02/Laboratory-Technician-7.jpg', // Replace with actual image
    },
    {
      title: 'Registrar',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://www.laroche.edu/uploadedImages/Academics/Academic_Offices_and_Resources/0A.%20Registrar.jpg', // Replace with actual image
    },
    {
      title: 'Principal',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://home.edweb.net/wp-content/uploads/20190715_principalleadership-event.jpg', // Replace with actual image
    },
    {
      title: 'Vice principal',
      salary: '',
      duties: [
        '',
        '',
        '',
      ],
      image: 'https://ace.edu/wp-content/uploads/2022/12/02-school-principal-1024x632.jpg', // Replace with actual image
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




export default Education
