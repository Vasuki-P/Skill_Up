import React from 'react';
import { useParams } from 'react-router-dom';
import './Roles.css';

const companiesData = [
  {
    id: 1,
    name: 'Google',
    jobRoles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
  {
    id: 2,
    name: 'Apple',
    jobRoles: ['iOS Developer', 'Machine Learning Engineer', 'UX Designer'],
    recruitingProcess: [
      'Online Application',
      'Phone Interview',
      'On-site Interview',
      'Team Interview',
      'Offer'
    ],
  },
  {
    id: 3,
    name: 'Amazon',
    jobRoles: ['Backend Developer', 'Front-end Developer', 'System Architect'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'Bar Raiser Interview',
      'Offer'
    ],
  },
  {
    id: 4,
    name: 'Microsoft',
    jobRoles: ['Cloud Engineer', 'Security Specialist', 'Product Manager'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
  {
    id: 5,
    name: 'Facebook (Meta)',
    jobRoles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
  {
    id: 6,
    name: 'Tesla',
    jobRoles: ['Software Engineer', 'Mechanical Engineer', 'Data Analyst'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
  {
    id: 7,
    name: 'Alphabet',
    jobRoles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
  {
    id: 8,
    name: 'Toyota',
    jobRoles: ['Mechanical Engineer', 'Electrical Engineer', 'Production Manager'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
];

const RolesPage = () => {
  const { companyId } = useParams();
  const company = companiesData.find(company => company.id === parseInt(companyId));

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="companies-container">
      <h2>Available Job Roles and Recruiting Process for {company.name}</h2>
      <div className="roles">
        <h3>{company.name}</h3>
        <div className="job-roles">
          <h4>Job Roles:</h4>
          <div className="job-role-buttons">
            {company.jobRoles.map((role, index) => (
              <React.Fragment key={index}>
                <button className="job-role-button">{role}</button>
                <br />
              </React.Fragment>
            ))}
         </div>
</div>

        <div className="recruit">
          <h4>Recruiting Process:</h4>
          <div className="recruit-steps">
            {company.recruitingProcess.map((step, index) => (
              <div key={index} className="recruit-step">
                {index + 1}. {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesPage;
