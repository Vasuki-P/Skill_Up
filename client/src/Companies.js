import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Companies = () => {
  // Sample data for 16 companies
  const companiesData = [
    { id: 1, name: 'Google', industry: 'Technology', revenue: '$181.69 billion', employees: '150,000', headquarters: 'Mountain View, California', founded: '1998' },
    { id: 2, name: 'Apple', industry: 'Technology', revenue: '$365.78 billion', employees: '154,000', headquarters: 'Cupertino, California', founded: '1976' },
    { id: 3, name: 'Amazon', industry: 'Technology/Retail', revenue: '$386.06 billion', employees: '1,298,000', headquarters: 'Seattle, Washington', founded: '1994' },
    { id: 4, name: 'Microsoft', industry: 'Technology', revenue: '$168.09 billion', employees: '181,000', headquarters: 'Redmond, Washington', founded: '1975' },
    { id: 5, name: 'Facebook (Meta)', industry: 'Technology', revenue: '$117.88 billion', employees: '71,100', headquarters: 'Menlo Park, California', founded: '2004' },
    { id: 6, name: 'Tesla', industry: 'Automotive/Energy', revenue: '$53.76 billion', employees: '110,000', headquarters: 'Palo Alto, California', founded: '2003' },
    { id: 7, name: 'Alphabet', industry: 'Technology', revenue: '$225.67 billion', employees: '156,500', headquarters: 'Mountain View, California', founded: '2015' },
    { id: 8, name: 'Toyota', industry: 'Automotive', revenue: '$272.55 billion', employees: '366,283', headquarters: 'Toyota City, Aichi Prefecture, Japan', founded: '1937' },
    { id: 9, name: 'Samsung Electronics', industry: 'Technology', revenue: '$200.65 billion', employees: '287,439', headquarters: 'Suwon, South Korea', founded: '1969' },
    { id: 10, name: 'Walmart', industry: 'Retail', revenue: '$559.15 billion', employees: '2,300,000', headquarters: 'Bentonville, Arkansas', founded: '1962' },
    { id: 11, name: 'BP', industry: 'Oil and Gas', revenue: '$180.86 billion', employees: '70,100', headquarters: 'London, United Kingdom', founded: '1909' },
    { id: 12, name: 'Nike', industry: 'Apparel/Footwear', revenue: '$44.54 billion', employees: '75,400', headquarters: 'Beaverton, Oregon', founded: '1964' },
    { id: 13, name: 'McDonald\'s', industry: 'Fast Food', revenue: '$19.21 billion', employees: '205,000', headquarters: 'Chicago, Illinois', founded: '1940' },
    { id: 14, name: 'IBM', industry: 'Technology', revenue: '$73.62 billion', employees: '345,900', headquarters: 'Armonk, New York', founded: '1911' },
    { id: 15, name: 'The Coca-Cola Company', industry: 'Beverages', revenue: '$37.27 billion', employees: '86,200', headquarters: 'Atlanta, Georgia', founded: '1892' },
    { id: 16, name: 'Boeing', industry: 'Aerospace/Defense', revenue: '$58.16 billion', employees: '141,000', headquarters: 'Chicago, Illinois', founded: '1916' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 8;
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companiesData.slice(indexOfFirstCompany, indexOfLastCompany);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="companies-container">
      <h2>Companies</h2>
      <div className="companies">
        {currentCompanies.map((company) => (
          <div key={company.id} className="company">
            <h3>{company.name}</h3>
            <p>Industry: {company.industry}</p>
            <p>Revenue: {company.revenue}</p>
            <p>Employees: {company.employees}</p>
            <p>Headquarters: {company.headquarters}</p>
            <Link to={`/roles/${company.id}`}><button>Go to Roles Page</button></Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(companiesData.length / companiesPerPage) }, (_, i) => i + 1).map((number) => (
          <button key={number} onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Companies;
