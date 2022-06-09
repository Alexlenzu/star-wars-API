import { React, useState } from 'react';
import './main.css';
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { checkData } from '../helper/check';

const FETCH_PLANETS = gql`
  query Query {
    allPlanets {
      planets {
        id
        name
        gravity
        diameter
        population
      }
    }
  }
`;
function Main() {
  const [sorted, setSorted] = useState(undefined);
  const { loading, error, data } = useQuery(FETCH_PLANETS);
  const navigate = useNavigate();

  const planetClicked = (id) => {
    navigate(`planet/${id}`);
  };
  
  if (loading) return <div className='loading'>Loading...</div>;
  if (error) return <div className='error'>Error :(</div>;

  return (
    <div className='main-container'>
      <div className='main-content'>
        <table className='main-table-container'>
          <thead className='planet-list'>
            <tr className='title-row'>
              <th>Name</th>
              <th>Gravity</th>
              <th
                className='sort-diameter'
                onClick={() =>
                  setSorted((sort) =>
                    sort === 'asc'
                      ? 'desc'
                      : sort === 'desc'
                      ? undefined
                      : 'asc'
                  )
                }
              >
                Diameter
                {sorted === 'asc'
                  ? '\u2193'
                  : sorted === 'desc'
                  ? '\u2191'
                  : null}
              </th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              [...data.allPlanets.planets]
                .sort((a, b) =>
                  sorted === 'asc'
                    ? a.diameter - b.diameter
                    : sorted === 'desc'
                    ? b.diameter - a.diameter
                    : undefined
                )
                .map((planet) => (
                  <tr
                    className='table-row'
                    key={planet.id}
                    onClick={() => {
                      planetClicked(planet.id);
                    }}
                  >
                    <td>{checkData(planet.name)}</td>
                    <td>{checkData(planet.gravity)}</td>
                    <td>{checkData(planet.diameter)}</td>
                    <td>{checkData(planet.population)}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
