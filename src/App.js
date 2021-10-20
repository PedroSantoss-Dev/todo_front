import "./style/app.css"
import { Switch , Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Edicao from "./pages/Edicão/Edicao";
import View from "./pages/View/View";
import Cadastro from "./pages/Cadastro/Cadastro"
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";



function App(){
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/register"  component={Cadastro}/>
          <Route path="/edit/:id"  component={Edicao}/>
          <Route path="/view/:id"  component={View}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;