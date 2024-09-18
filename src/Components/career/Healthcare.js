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

// Healthcare Component
const Healthcare = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  const jobs = [
    {
      title: 'Doctor',
      salary: '200,000',
      duties: [
        'Diagnosing and treating illnesses',
        'Conducting patient examinations',
        'Prescribing medications'
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image
    },
    {
      title: 'Nurse',
      salary: '75,000',
      duties: [
        'Providing patient care',
        'Administering medications',
        'Monitoring patient progress'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Sonographer',
      salary: '80,000',
      duties: [
        'Performing ultrasound examinations',
        'Documenting patient history',
        'Collaborating with healthcare team'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Medical Technician',
      salary: '60,000',
      duties: [
        'Conducting laboratory tests',
        'Maintaining medical equipment',
        'Analyzing test results'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Pharmacist',
      salary: '100,000',
      duties: [
        'Dispensing medications',
        'Providing medication counseling',
        'Managing pharmacy operations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Homecare Nurse',
      salary: '70,000',
      duties: [
        'Providing in-home healthcare',
        'Monitoring patient health',
        'Coordinating with healthcare providers'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Clinic Manager',
      salary: '90,000',
      duties: [
        'Overseeing clinic operations',
        'Managing staff',
        'Ensuring compliance with healthcare regulations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Healthcare Assistant',
      salary: '40,000',
      duties: [
        'Assisting patients with daily activities',
        'Providing support to healthcare professionals',
        'Maintaining a clean environment'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Medical Coder',
      salary: '55,000',
      duties: [
        'Translating medical diagnoses into codes',
        'Ensuring compliance with coding guidelines',
        'Assisting with billing processes'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Marketing Officer',
      salary: '65,000',
      duties: [
        'Developing marketing strategies',
        'Promoting healthcare services',
        'Analyzing market trends'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Caregiver',
      salary: '35,000',
      duties: [
        'Assisting patients with daily activities',
        'Providing companionship',
        'Monitoring health conditions'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Nurse Assistant',
      salary: '30,000',
      duties: [
        'Assisting nurses in patient care',
        'Taking vital signs',
        'Helping with patient mobility'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'General Practitioner',
      salary: '180,000',
      duties: [
        'Providing comprehensive healthcare',
        'Conducting physical exams',
        'Managing chronic illnesses'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Commerce Graduates',
      salary: '50,000',
      duties: [
        'Assisting in healthcare management',
        'Analyzing financial data',
        'Supporting marketing efforts'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Cast Technician',
      salary: '55,000',
      duties: [
        'Applying and removing casts',
        'Instructing patients on care',
        'Maintaining casting equipment'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'IT Technician',
      salary: '65,000',
      duties: [
        'Maintaining healthcare IT systems',
        'Troubleshooting technical issues',
        'Supporting healthcare staff'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Healthcare Operations Coordinator',
      salary: '75,000',
      duties: [
        'Coordinating healthcare operations',
        'Managing staff schedules',
        'Ensuring compliance with policies'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Medical Virtual Assistant',
      salary: '40,000',
      duties: [
        'Providing administrative support',
        'Managing patient records',
        'Scheduling appointments'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Patient Admission Coordinator',
      salary: '50,000',
      duties: [
        'Managing patient admissions',
        'Coordinating with healthcare teams',
        'Ensuring patient data accuracy'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Patient Experience Officer',
      salary: '60,000',
      duties: [
        'Improving patient satisfaction',
        'Collecting patient feedback',
        'Implementing improvement strategies'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Associative Customer Care',
      salary: '35,000',
      duties: [
        'Assisting patients with inquiries',
        'Providing support to healthcare staff',
        'Managing patient complaints'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Medical Assistant',
      salary: '45,000',
      duties: [
        'Assisting healthcare providers',
        'Performing administrative tasks',
        'Preparing patients for examinations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Radiology Technician',
      salary: '70,000',
      duties: [
        'Performing imaging procedures',
        'Ensuring patient safety',
        'Collaborating with radiologists'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Laboratory Technician',
      salary: '60,000',
      duties: [
        'Conducting laboratory tests',
        'Analyzing test results',
        'Maintaining laboratory equipment'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Medical Secretary',
      salary: '40,000',
      duties: [
        'Managing office communications',
        'Scheduling appointments',
        'Maintaining patient records'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Dental Nurse',
      salary: '50,000',
      duties: [
        'Assisting dentists in procedures',
        'Preparing patients for treatments',
        'Managing dental records'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Physiotherapist',
      salary: '80,000',
      duties: [
        'Assessing patient physical abilities',
        'Developing treatment plans',
        'Guiding patients through exercises'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Clinicians',
      salary: '120,000',
      duties: [
        'Providing direct patient care',
        'Conducting research',
        'Collaborating with healthcare teams'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Midwife',
      salary: '75,000',
      duties: [
        'Providing care during pregnancy',
        'Assisting in childbirth',
        'Educating parents about newborn care'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Psychiatry',
      salary: '200,000',
      duties: [
        'Diagnosing mental health disorders',
        'Providing therapy and medication',
        'Conducting psychological assessments'
      ],
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
      {jobs.map((job, index) => (
        <JobInfo 
          key={index}
          number={index + 1}
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
};

export default Healthcare;

