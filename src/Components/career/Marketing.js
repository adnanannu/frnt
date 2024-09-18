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

// Marketing Component
const Marketing = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  const jobs = [
    {
      title: 'Marketing Executive',
      salary: '60,000',
      duties: [
        'Developing marketing strategies',
        'Conducting market research',
        'Creating promotional materials'
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image
    },
    {
      title: 'Junior Marketing Specialist',
      salary: '45,000',
      duties: [
        'Assisting with marketing campaigns',
        'Analyzing data to measure campaign effectiveness',
        'Managing social media accounts'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Digital Marketing Executive',
      salary: '65,000',
      duties: [
        'Overseeing online marketing strategies',
        'SEO and SEM management',
        'Content creation and management'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Marketing Associate',
      salary: '50,000',
      duties: [
        'Supporting marketing initiatives',
        'Assisting in organizing events',
        'Coordinating with vendors and stakeholders'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Marketing Manager',
      salary: '80,000',
      duties: [
        'Developing overall marketing strategy',
        'Leading marketing team',
        'Analyzing market trends'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Sales Manager',
      salary: '75,000',
      duties: [
        'Leading the sales team',
        'Developing sales strategies',
        'Monitoring sales performance'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Social Media Manager',
      salary: '55,000',
      duties: [
        'Creating content for social platforms',
        'Analyzing social media metrics',
        'Engaging with followers'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Growth Hacker',
      salary: '70,000',
      duties: [
        'Experimenting with different growth strategies',
        'Analyzing data to find growth opportunities',
        'Collaborating with product and marketing teams'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Translator',
      salary: '40,000',
      duties: [
        'Translating marketing materials',
        'Ensuring cultural relevance',
        'Collaborating with marketing teams'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'SEO Specialist',
      salary: '65,000',
      duties: [
        'Optimizing website content for search engines',
        'Conducting keyword research',
        'Analyzing site performance'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'IT Support',
      salary: '50,000',
      duties: [
        'Providing technical support for marketing tools',
        'Troubleshooting software issues',
        'Maintaining marketing technology'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Data Entry Officer',
      salary: '35,000',
      duties: [
        'Entering data into marketing databases',
        'Maintaining accurate records',
        'Assisting with data analysis'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Coordinator',
      salary: '50,000',
      duties: [
        'Coordinating marketing campaigns',
        'Managing project timelines',
        'Communicating with team members'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Team Leader',
      salary: '65,000',
      duties: [
        'Leading a team of marketers',
        'Setting team goals and objectives',
        'Providing mentorship and guidance'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Data Engineer',
      salary: '80,000',
      duties: [
        'Building data pipelines for marketing analytics',
        'Ensuring data integrity',
        'Collaborating with data scientists'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Data Analyst',
      salary: '70,000',
      duties: [
        'Analyzing marketing data',
        'Creating reports and dashboards',
        'Identifying trends and insights'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Customer Associate',
      salary: '40,000',
      duties: [
        'Managing customer inquiries',
        'Providing product information',
        'Assisting with order processing'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Corporate Manager',
      salary: '90,000',
      duties: [
        'Overseeing corporate marketing initiatives',
        'Managing budgets and resources',
        'Building relationships with stakeholders'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Leading Manager',
      salary: '100,000',
      duties: [
        'Strategizing overall marketing direction',
        'Leading multiple teams',
        'Driving brand growth'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Enterprise Risk Manager',
      salary: '95,000',
      duties: [
        'Assessing risks associated with marketing strategies',
        'Developing risk mitigation plans',
        'Collaborating with compliance teams'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Quality Manager',
      salary: '80,000',
      duties: [
        'Ensuring quality of marketing materials',
        'Implementing quality control processes',
        'Conducting audits'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Quality Assurance',
      salary: '70,000',
      duties: [
        'Testing marketing campaigns',
        'Ensuring consistency across platforms',
        'Providing feedback for improvement'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Event Coordinator',
      salary: '60,000',
      duties: [
        'Planning and executing marketing events',
        'Managing logistics',
        'Coordinating with vendors'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Strategy Manager',
      salary: '85,000',
      duties: [
        'Developing marketing strategies',
        'Analyzing market conditions',
        'Identifying growth opportunities'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Salesforce Administrator',
      salary: '75,000',
      duties: [
        'Managing Salesforce CRM for marketing',
        'Providing support to marketing teams',
        'Training users on Salesforce'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Receptionist',
      salary: '35,000',
      duties: [
        'Greeting visitors',
        'Managing incoming calls',
        'Assisting with administrative tasks'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Supervisor',
      salary: '60,000',
      duties: [
        'Overseeing marketing operations',
        'Managing staff performance',
        'Ensuring project deadlines are met'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Administrator',
      salary: '50,000',
      duties: [
        'Managing office operations',
        'Assisting with project management',
        'Coordinating meetings and schedules'
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




export default Marketing

