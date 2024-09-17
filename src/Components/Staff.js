import React from 'react';
import log from '../vedio/profile.jpg'


// Sample data for team members
const teamData = [
  {
    id: 1,
    name: 'Shalini',
    position: '',
    image: 'https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=',
    description: '',
  },
  {
    id: 2,
    name: 'Sarang',
    position: '',
    image: 'https://img.freepik.com/free-photo/happy-business-man-standing-smiling-against-red-wall_155003-9367.jpg',
    description: '',
  },
 
  {
    id: 4,
    name: 'Adnan',
    position: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgthpIUmZ9bTrioc0isQmZ6_-D6nIPq6Met4xsy36YZN-4O5I-yaLg7Sjju4HAQIfP4o&usqp=CAU',
    description: '',
  },
];

const Staff = () => {
  return (
    <div className="team-section">
      <h1 className="team-heading">Meet The Team</h1>

      <div className="team-container">
        {teamData.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h2>{member.name}</h2>
            <p className="team-position">{member.position}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
