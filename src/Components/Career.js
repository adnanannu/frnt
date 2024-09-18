// src/components/CareerPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import log from '../vedio/BCC Logo.png'


const Career = () => {
 
  const styles = {
    section: {
      padding: '3rem',
      backgroundColor: '#f4f4f4',
      marginBottom: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      maxWidth: '800px',
      height: 'auto',
      marginTop: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2.5rem',
      color: '#2c3e50',
      marginBottom: '1.5rem',
    },
    text: {
      fontSize: '1.2rem',
      color: '#34495e',
      lineHeight: '1.8',
      marginBottom: '1.5rem',
    }
  };
  const steps = [
    { number: 1, title: 'Speak to Us', description: 'Our team will discuss the details of your requirements with you' },
    { number: 2, title: 'We Will Source', description: 'Using our extensive database we will source suitable workforce for your project' },
    { number: 3, title: 'Analyse', description: 'Our management team will meet face to face with the team to discuss skillset & experience' },
    { number: 4, title: 'Introductions', description: 'We will arrive on site to introduce our operatives to you on the 1st day' },
    { number: 5, title: 'Support', description: 'Throughout the project we will offer you our continued support and meet to discuss any further requirements' },
  ];
  return (
    <div>
    <div className="career-container">
       <div>
      <header style={styles.header}>
        <h1>Welcome to Our Careers Page</h1>
        <p>At PGRM , we believe in building a culture where every employee is valued and given the opportunity to grow. Join us in our journey of innovation and excellence.</p>
        <img src={log} height={50} width={50}></img>
      </header>
   
     
    </div>
      <h1 className="career-title">Explore Careers</h1>
      <div className="career-grid">
        <Link to="/ca">
          <div className="category">
            <img src="https://www.mahavirlabours.com/img/man-2.jpg" alt="Category 1" />
            <h2>Construction</h2>
          </div>
        </Link>
        <Link to="/category2">
          <div className="category">
            <img src="https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?s=612x612&w=0&k=20&c=EDqQ0oBcpFGV25p61vWUF5N-6lRJdbmZmQMe5kyuxyA=" alt="Category 2" />
            <h2>restaurant and Hotel</h2>
          </div>
        </Link>
        <Link to="/category3">
          <div className="category">
            <img src="https://blog.atdoorstep.ae/wp-content/uploads/2024/02/cleaning-services.jpg" alt="Category 3" />
            <h2>Cleaning Services</h2>
          </div>
        </Link>
        <Link to="/category4">
          <div className="category">
            <img src="https://media.gettyimages.com/id/1204025740/photo/portrait-fo-latino-employee-in-supermarket.jpg?s=612x612&w=gi&k=20&c=rNgeIF3Y13bRYjLbvhXEu2e9jV0Yrjr3psv7Wrfe-Co=" alt="Category 4" />
            <h2>Supermarket</h2>
          </div>
        </Link>
        <Link to="/category5">
          <div className="category">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkNWvZqeGtFEJgFJT0ogrISS7clQJf1CEdg&s" alt="Category 5" />
            <h2>Retail</h2>
          </div>
        </Link>
        <Link to="/category6">
          <div className="category">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqilUsRQ724ObCxyOziA_VSvchrMtZDSU6qQ&s" alt="Category 6" />
            <h2>Transportation</h2>
          </div>
        </Link>
      </div>
      <h1 className="career-title">white collar jobs</h1>
      <div className="career-grid">
        <Link to="/education">
          <div className="category">
            <img src="https://imageio.forbes.com/specials-images/imageserve/61d5b5f9529aee8feb22c68a/Rear-view-of-schoolgirl-raising-her-arm-to-answer-the-question-in-the-classroom-/960x0.jpg?format=jpg&width=960" alt="Category 1" />
            <h2>Education</h2>
          </div>
        </Link>
        <Link to="/marketing">
          <div className="category">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxVfIPHzSbKehsCoHLMJAtmEKWc9P3i_pPg&s" alt="Category 2" />
            <h2>Marketing</h2>
          </div>
        </Link>
        <Link to="/humanresource">
          <div className="category">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/09/What_Is_Human_Resources_-_article_image.jpg" alt="Category 3" />
            <h2>Humanresource</h2>
          </div>
        </Link>
        <Link to="/accounting">
          <div className="category">
            <img src="https://happay.com/blog/wp-content/uploads/sites/12/2023/12/branches-of-accounting-1-scaled.webp" alt="Category 4" />
            <h2>Accounting</h2>
          </div>
        </Link>
        <Link to="/healthcare">
          <div className="category">
            <img src="https://admin.expatica.com/ae/wp-content/uploads/sites/15/2023/11/health-insurance-uae.jpg" alt="Category 5" />
            <h2>Healthcare</h2>
          </div>
        </Link>
        
      </div>
      
    <div>
      <section style={styles.section}>
        <h2 style={styles.title}>Why Work With Us?</h2>
        <p style={styles.text}>
          PGRM HR Consultancy is committed to creating an inclusive and dynamic environment that fosters diversity, innovation, and continuous growth. We understand that the strength of any company lies in its people, which is why we focus on offering competitive benefits, extensive training programs, and numerous opportunities for career advancement. 
          <br /><br />
          Our company culture emphasizes collaboration, development, and achieving personal and professional goals. Employees are empowered to bring their unique ideas and talents to the table, helping us deliver world-class services while growing individually. We are not just a company; we are a family that encourages each other to strive for greatness in everything we do.
        </p>
        <img 
          style={styles.image} 
          src="https://www.betterup.com/hs-fs/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg?width=964&height=643&name=Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg" 
          alt="Why Work With Us - Team Collaboration" 
        />
      </section>

      <section style={styles.section}>
        <h2 style={styles.title}>The Growing Opportunities in UAE</h2>
        <p style={styles.text}>
          Over the past few years, the UAE has witnessed tremendous growth in various sectors. While the oil and petroleum industry once dominated the economy, today, the UAE is rapidly becoming one of the world's fastest-growing economies. This dynamic transformation has opened up a wide range of opportunities across numerous industries.
          <br /><br />
          The construction industry, in particular, has seen a significant surge in demand for skilled and quality manpower. As cities expand and infrastructure projects multiply, the need for capable workers has never been higher. However, finding the right workforce can be challenging. That's where we come in. Blue Chip Colombo HR Consultancy offers specialized manpower supply services tailored to the needs of the construction industry, whether for short-term or long-term projects.
          <br /><br />
          By partnering with us, businesses gain access to a pool of highly trained professionals, ensuring that every project is completed efficiently and to the highest standards. We understand the complexities of the construction sector and take pride in supplying skilled labor that fits the precise needs of our clients, contributing to the overall success of every project we touch.
        </p>
        <img 
          style={styles.image} 
          src="https://static.tildacdn.com/tild3461-6636-4838-a163-613937323365/3733.jpg" 
          alt="Growing Construction Industry in UAE" 
        />
      </section>
    </div>
    
    </div>
    <section className="unique-career-section">
      <h2 className="unique-career-heading">WHERE CAN WE HELP YOU</h2>
      <h1 className="unique-career-title">Why should you choose us?</h1>
      
      <div className="unique-career-content">
        <div className="unique-career-card">
          <div className="unique-career-icon">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaFebADwCaTpDDTx3sHOlbYv6OzJDh2WQzg&s" alt="Icon 1" />
          </div>
          <p>We guide you through the planning and setup phase. We make the process as simple as possible for you and maximize the effectiveness of your strategy.</p>
        </div>

        <div className="unique-career-card">
          <div className="unique-career-icon">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxmh2S7ABbEtStT2cKKKKarm0xSBrQYKbgbWUXkpdOxP9glXyAeIC-ZNzqunSoxxZOx4&usqp=CAU" alt="Icon 2" />
          </div>
          <p>We guide you throughout the planning and setup phase, making the process as simple as possible for you, while maximizing the effectiveness of the strategy behind it.</p>
        </div>

        <div className="unique-career-card">
          <div className="unique-career-icon">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/12/startup.jpg" alt="Icon 3" />
          </div>
          <p>We provide industry and role-specific research and engagement strategies to help you benefit from our technology and therefore, increasing your market visibility and brand value.</p>
        </div>

        <div className="unique-career-card">
          <div className="unique-career-icon">
            <img src="https://images.startups.co.uk/wp-content/uploads/2018/09/13123405/what-is-a-startup-business-1.jpg" alt="Icon 4" />
          </div>
          <p>We help leverage your USP – Unique Selling Point, to give you a competitive advantage.</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Career;