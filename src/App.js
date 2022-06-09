import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Header from './Components/Header';
import Planet from './Components/Planet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <>
    <div className="app-container">
      <Router>
        <ApolloProvider client={client}>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='planet/:planetid' element={<Planet />} />
          </Routes>
          
        </ApolloProvider>
      </Router>
    </div>
    <Footer />
    </>
  );
}

export default App;
