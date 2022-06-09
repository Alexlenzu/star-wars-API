import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import './planet.css';
import Residents from './Residents';
import { checkData } from '../helper/check';
import { checkArray } from '../helper/checkArray';

function Planet() {
  let params = useParams();
  const { loading, error, data } = useQuery(gql`
  query Query {
    planet(id: "${params.planetid}") {
      name
      gravity
      diameter
      population
      terrains
      climates
       residentConnection {
           residents {
               id
               name
               birthYear
               gender
               height
               mass
           }
        } 
      }
    }
    
`);
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error :(</div>;

  return (
    <div className='planet-container'>
      <div>
        <h1 className='planet-title'>Planet</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gravity</th>
              <th>Diameter</th>
              <th>Population</th>
              <th>Terrains</th>
              <th>Climate</th>
            </tr>
          </thead>
          <tbody>
            {data && (
              <tr key={data.planet.id}>
                <td> {checkData(data.planet.name) || '-'}</td>
                <td> {checkData(data.planet.gravity) || '-'} </td>
                <td> {checkData(data.planet.diameter) || '-'} </td>
                <td> {checkData(data.planet.population) || '-'}</td>
                <td> {checkArray(data.planet.terrains) || '-'}</td>
                <td> {checkArray(data.planet.climates) || '-'}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Residents data={data} />
    </div>
  );
}

export default Planet;
