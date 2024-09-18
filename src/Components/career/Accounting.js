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

// Accounting Component
const Accounting = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  const jobs = [
    {
      title: 'Account Executive',
      salary: '70,000',
      duties: [
        'Managing client accounts',
        'Developing new business opportunities',
        'Providing excellent customer service'
      ],
      image: 'https://via.placeholder.com/150', // Replace with actual image
    },
    {
      title: 'Accounting Bookkeeper',
      salary: '50,000',
      duties: [
        'Recording financial transactions',
        'Maintaining accurate financial records',
        'Assisting with account reconciliations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Accounting Supervisor',
      salary: '80,000',
      duties: [
        'Overseeing accounting staff',
        'Preparing financial reports',
        'Ensuring compliance with accounting regulations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Administrative Assistant',
      salary: '45,000',
      duties: [
        'Providing administrative support',
        'Managing office communications',
        'Assisting with project coordination'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Audit Manager',
      salary: '90,000',
      duties: [
        'Leading audit engagements',
        'Ensuring compliance with regulations',
        'Preparing audit reports'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Book Keeper',
      salary: '55,000',
      duties: [
        'Maintaining financial records',
        'Managing invoices and payments',
        'Preparing financial statements'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Engineering Manager',
      salary: '95,000',
      duties: [
        'Overseeing engineering projects',
        'Managing engineering teams',
        'Ensuring project timelines are met'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Graphic Manager',
      salary: '65,000',
      duties: [
        'Managing graphic design projects',
        'Coordinating with clients and teams',
        'Overseeing the design process'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Finance Manager',
      salary: '85,000',
      duties: [
        'Managing financial planning and analysis',
        'Overseeing budgeting processes',
        'Ensuring compliance with financial regulations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Graphic Designer',
      salary: '50,000',
      duties: [
        'Creating visual concepts',
        'Using software to design layouts',
        'Collaborating with clients to meet their needs'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Investment Associate',
      salary: '75,000',
      duties: [
        'Assisting in investment strategies',
        'Conducting market research',
        'Managing client investment portfolios'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Office Manager',
      salary: '60,000',
      duties: [
        'Overseeing office operations',
        'Managing staff and resources',
        'Ensuring efficient workflows'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Purchase Clerk',
      salary: '45,000',
      duties: [
        'Processing purchase orders',
        'Maintaining inventory records',
        'Communicating with vendors'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Revenue Manager',
      salary: '80,000',
      duties: [
        'Analyzing revenue data',
        'Developing pricing strategies',
        'Maximizing revenue opportunities'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Sales Executive',
      salary: '70,000',
      duties: [
        'Generating new business leads',
        'Meeting sales targets',
        'Building client relationships'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Store Supervisor',
      salary: '50,000',
      duties: [
        'Supervising store operations',
        'Managing staff performance',
        'Ensuring customer satisfaction'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Tax Director',
      salary: '120,000',
      duties: [
        'Overseeing tax compliance',
        'Developing tax strategies',
        'Managing tax audits'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Accountant',
      salary: '65,000',
      duties: [
        'Preparing financial statements',
        'Analyzing financial data',
        'Ensuring compliance with tax regulations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Accounting Clerk',
      salary: '40,000',
      duties: [
        'Assisting with bookkeeping',
        'Maintaining financial records',
        'Supporting accounting team'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Accounts Assistant',
      salary: '45,000',
      duties: [
        'Supporting accounts payable and receivable',
        'Preparing invoices',
        'Assisting with reconciliations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Application Developer',
      salary: '85,000',
      duties: [
        'Developing software applications',
        'Collaborating with stakeholders',
        'Troubleshooting and debugging applications'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Auditor',
      salary: '75,000',
      duties: [
        'Conducting audits',
        'Assessing financial records',
        'Preparing audit reports'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Estimator',
      salary: '60,000',
      duties: [
        'Estimating project costs',
        'Analyzing data for accuracy',
        'Preparing detailed reports'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Finance Specialist',
      salary: '70,000',
      duties: [
        'Analyzing financial data',
        'Preparing financial reports',
        'Providing financial advice'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'HR Generalist',
      salary: '55,000',
      duties: [
        'Supporting HR operations',
        'Assisting with recruitment',
        'Managing employee relations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Investment Manager',
      salary: '100,000',
      duties: [
        'Managing investment portfolios',
        'Developing investment strategies',
        'Analyzing market trends'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Payroll Clerk',
      salary: '45,000',
      duties: [
        'Processing payroll',
        'Maintaining payroll records',
        'Ensuring compliance with payroll regulations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Purchasing Manager',
      salary: '80,000',
      duties: [
        'Managing purchasing processes',
        'Negotiating with suppliers',
        'Ensuring timely delivery of goods'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Risk Manager',
      salary: '90,000',
      duties: [
        'Identifying and analyzing risks',
        'Developing risk management strategies',
        'Ensuring compliance with regulations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Sales Manager',
      salary: '85,000',
      duties: [
        'Leading sales teams',
        'Developing sales strategies',
        'Analyzing sales performance'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Support Analyst',
      salary: '60,000',
      duties: [
        'Providing technical support',
        'Troubleshooting issues',
        'Managing support tickets'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Tax Manager',
      salary: '100,000',
      duties: [
        'Overseeing tax compliance',
        'Developing tax strategies',
        'Managing tax audits'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Technical Manager',
      salary: '90,000',
      duties: [
        'Managing technical teams',
        'Overseeing technical projects',
        'Ensuring compliance with technical standards'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Accounting Assistant',
      salary: '40,000',
      duties: [
        'Assisting with bookkeeping',
        'Maintaining financial records',
        'Supporting accounting team'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Accounting Manager',
      salary: '95,000',
      duties: [
        'Managing accounting department',
        'Preparing financial statements',
        'Ensuring compliance with accounting standards'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Accounts Supervisor',
      salary: '70,000',
      duties: [
        'Supervising accounting staff',
        'Overseeing financial reporting',
        'Ensuring compliance with regulations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Associate Accountant',
      salary: '55,000',
      duties: [
        'Assisting with financial reporting',
        'Maintaining financial records',
        'Supporting senior accountants'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Billing Manager',
      salary: '80,000',
      duties: [
        'Overseeing billing processes',
        'Ensuring timely invoicing',
        'Managing billing team'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Credit Manager',
      salary: '75,000',
      duties: [
        'Managing credit policies',
        'Evaluating credit applications',
        'Ensuring compliance with credit regulations'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Finance Accountant',
      salary: '65,000',
      duties: [
        'Preparing financial statements',
        'Analyzing financial data',
        'Ensuring compliance with accounting standards'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Financial Analyst',
      salary: '70,000',
      duties: [
        'Analyzing financial data',
        'Preparing financial reports',
        'Providing financial advice'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Internal Auditor',
      salary: '80,000',
      duties: [
        'Conducting internal audits',
        'Assessing financial processes',
        'Preparing audit reports'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Office Administrator',
      salary: '50,000',
      duties: [
        'Managing office operations',
        'Providing administrative support',
        'Assisting with project coordination'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Production Assistant',
      salary: '40,000',
      duties: [
        'Assisting in production processes',
        'Supporting project teams',
        'Maintaining production schedules'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Receptionist Clerk',
      salary: '35,000',
      duties: [
        'Greeting visitors',
        'Managing phone calls',
        'Providing administrative support'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Sales Coordinator',
      salary: '50,000',
      duties: [
        'Coordinating sales activities',
        'Managing sales documentation',
        'Assisting sales teams'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Senior Accountant',
      salary: '80,000',
      duties: [
        'Preparing financial statements',
        'Analyzing financial data',
        'Managing audit processes'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Surveyor',
      salary: '65,000',
      duties: [
        'Conducting surveys',
        'Analyzing survey data',
        'Preparing reports'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Tax Specialist',
      salary: '70,000',
      duties: [
        'Preparing tax returns',
        'Advising on tax regulations',
        'Ensuring compliance with tax laws'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Teller',
      salary: '35,000',
      duties: [
        'Processing customer transactions',
        'Managing cash drawer',
        'Providing customer service'
      ],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Control Engineer',
      salary: '75,000',
      duties: [
        'Designing control systems',
        'Ensuring system compliance',
        'Troubleshooting control systems'
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

export default Accounting;

