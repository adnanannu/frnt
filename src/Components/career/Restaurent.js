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

    {
      "title": "Restaurant Manager",
      "salary": "50,000",
      "duties": [
          "Overseeing daily operations",
          "Managing staff and schedules",
          "Ensuring customer satisfaction"
      ],
      "image": "https://www.touchbistro.com/wp-content/uploads/2020/03/restaurant-manager.jpg"
  },
  {
      "title": "Chef",
      "salary": "48,000",
      "duties": [
          "Preparing food according to recipes",
          "Ensuring food quality and safety",
          "Managing kitchen staff"
      ],
      "image": "https://static.cordonbleu.edu/Files/MediaFile/84569.jpg"
  },
  {
      "title": "Waiter/Waitress",
      "salary": "30,000",
      "duties": [
          "Taking orders from customers",
          "Serving food and beverages",
          "Handling payments and ensuring satisfaction"
      ],
      "image": "https://img.pikbest.com/ai/illus_our/20230423/66496b7dbb3f30b3d8760832343861f2.jpg"
  },
  {
      "title": "Cashier",
      "salary": "28,000",
      "duties": [
          "Processing payments",
          "Managing cash register",
          "Assisting customers with inquiries"
      ],
      "image": "https://example.com/cashier.jpg"
  },
  {
      "title": "Hostess",
      "salary": "27,000",
      "duties": [
          "Greeting customers",
          "Managing reservations",
          "Seating guests"
      ],
      "image": "https://example.com/hostess.jpg"
  },
  {
      "title": "Lifeguard",
      "salary": "35,000",
      "duties": [
          "Monitoring pool area",
          "Ensuring safety of guests",
          "Administering first aid if necessary"
      ],
      "image": "https://example.com/lifeguard.jpg"
  },
  {
      "title": "Bartender",
      "salary": "32,000",
      "duties": [
          "Preparing and serving drinks",
          "Managing bar inventory",
          "Engaging with customers"
      ],
      "image": "https://example.com/bartender.jpg"
  },
  {
      "title": "Host",
      "salary": "26,000",
      "duties": [
          "Welcoming guests",
          "Coordinating dining room activities",
          "Assisting with customer inquiries"
      ],
      "image": "https://example.com/host.jpg"
  },
  {
      "title": "Waitstaff",
      "salary": "30,000",
      "duties": [
          "Serving food and drinks",
          "Providing excellent customer service",
          "Clearing tables"
      ],
      "image": "https://example.com/waitstaff.jpg"
  },
  {
      "title": "Servers",
      "salary": "30,000",
      "duties": [
          "Taking customer orders",
          "Delivering food and drinks",
          "Handling payment transactions"
      ],
      "image": "https://example.com/servers.jpg"
  },
  {
      "title": "Barback",
      "salary": "25,000",
      "duties": [
          "Assisting bartenders",
          "Restocking supplies",
          "Cleaning the bar area"
      ],
      "image": "https://example.com/barback.jpg"
  },
  {
      "title": "Housekeeping",
      "salary": "28,000",
      "duties": [
          "Cleaning guest rooms",
          "Maintaining cleanliness of public areas",
          "Restocking supplies"
      ],
      "image": "https://example.com/housekeeping.jpg"
  },
  {
      "title": "Food Runner",
      "salary": "27,000",
      "duties": [
          "Delivering food to tables",
          "Assisting servers as needed",
          "Ensuring timely service"
      ],
      "image": "https://example.com/foodrunner.jpg"
  },
  {
      "title": "Receptionist",
      "salary": "30,000",
      "duties": [
          "Greeting guests",
          "Managing check-in and check-out",
          "Answering phone calls"
      ],
      "image": "https://example.com/receptionist.jpg"
  },
  {
      "title": "Steward",
      "salary": "28,000",
      "duties": [
          "Cleaning dishes and kitchen areas",
          "Assisting with food prep",
          "Ensuring kitchen cleanliness"
      ],
      "image": "https://example.com/steward.jpg"
  },
  {
      "title": "Guest Service Associate (Front Office)",
      "salary": "32,000",
      "duties": [
          "Assisting guests with check-in/check-out",
          "Handling inquiries and requests",
          "Managing reservations"
      ],
      "image": "https://example.com/guestservicefront.jpg"
  },
  {
      "title": "Guest Service Associate (Housekeeping)",
      "salary": "30,000",
      "duties": [
          "Responding to guest requests",
          "Coordinating with housekeeping staff",
          "Ensuring guest satisfaction"
      ],
      "image": "https://example.com/guestservicehousekeeping.jpg"
  },
  {
      "title": "Linen Attendant",
      "salary": "26,000",
      "duties": [
          "Managing linen inventory",
          "Distributing clean linens",
          "Assisting housekeeping"
      ],
      "image": "https://example.com/linenattendant.jpg"
  },
  {
      "title": "Barista",
      "salary": "28,000",
      "duties": [
          "Preparing coffee and beverages",
          "Maintaining cleanliness of the coffee station",
          "Engaging with customers"
      ],
      "image": "https://example.com/barista.jpg"
  },
  {
      "title": "Commis 1",
      "salary": "30,000",
      "duties": [
          "Assisting in food preparation",
          "Maintaining kitchen cleanliness",
          "Following chef's instructions"
      ],
      "image": "https://example.com/commis1.jpg"
  },
  {
      "title": "Commis 2",
      "salary": "28,000",
      "duties": [
          "Preparing ingredients for cooking",
          "Assisting in basic cooking tasks",
          "Keeping kitchen organized"
      ],
      "image": "https://example.com/commis2.jpg"
  },
  {
      "title": "Commis 3",
      "salary": "26,000",
      "duties": [
          "Supporting kitchen staff",
          "Washing and chopping vegetables",
          "Maintaining a clean work area"
      ],
      "image": "https://example.com/commis3.jpg"
  },
  {
      "title": "Butler",
      "salary": "40,000",
      "duties": [
          "Providing personal service to guests",
          "Managing household tasks",
          "Ensuring guest comfort"
      ],
      "image": "https://example.com/butler.jpg"
  }
    
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