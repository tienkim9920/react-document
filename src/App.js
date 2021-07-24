
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import './App.css';
import Docs from './Docs/Docs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  
  console.log("123")

  return (
    <div className="App">
      <BrowserRouter>
      
        <Header />
        <Switch>

          <Route exact path="/react-document" component={Home}/>
          <Route path="/react-document/docs/dotnet" component={Docs} />

        </Switch>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
