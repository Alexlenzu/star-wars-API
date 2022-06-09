import React from 'react';
import { checkData } from '../helper/check';
import './residents.css';
function Residents({ data }) {
  return (
    <div className='resident-container'>
      <h2 className='residents-title'>Residents of this planet</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.planet.residentConnection.residents.map((person) => (
              <tr key={person.id}>
                <td>{checkData(person.name) || '-'}</td>
                <td>{checkData(person.birthYear) || '-'}</td>
                <td>{checkData(person.gender) || '-'}</td>
                <td>{checkData(person.height) ? `${person.height}cm` : '-'}</td>
                <td>{checkData(person.mass) ? `${person.mass}kg` : '-'}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Residents;
