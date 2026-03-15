import React, { useState, useEffect } from 'react';
import { companiesData } from '../../data/companiesData';

const CompaniesTable = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(companiesData);
  }, []);

  return (
    <div className="section">
      <div className="section-title">
        <i className="fas fa-building"></i>
        <h2>Дружества</h2>
      </div>
      <div className="table-wrapper">
        <table className="companies-table">
          <thead>
            <tr>
              <th>Дружество</th>
              <th>Дейност</th>
              <th>За Период</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index}>
                <td className="company-name">
                  {company.link ? (
                    <a href={company.link} target="_blank" rel="noopener noreferrer" className="company-link">
                      {company.name} <i className="fas fa-external-link-alt"></i>
                    </a>
                  ) : (
                    company.name
                  )}
                </td>
                <td>{company.activity}</td>
                <td className="company-notes">
                  {company.notes && <span>{company.notes} </span>}
                  {company.period && (
                    <span className="period-badge">📅 {company.period}</span>
                  )}
                  {company.vat && (
                    <span className="vat-badge">{company.vat}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompaniesTable;