import { Routes, Route, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "../index.css"
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FisicoADD from "../components/add-fisicoculturismo.component.js";
import FisicoList from "../components/fisicoculturismo-list.component.js";

export function Home() {
  const {user, logOut} = UserAuth();
  const cerrarSesión=async()=>{
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }
 

  return (
    <section>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        Principal
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
          </Link>
        </li>
      </div>
    </nav>

    <div className="container mt-3">
      <h2>The Bodybuilding World!</h2>
      <div>
      <h3>User: {user.displayName} </h3>
      <button onClick={cerrarSesión}>cerrar sesión</button>
      </div>
      <br></br>
      <Routes>
            <Route path="add" element={<FisicoADD usuario={user.displayName} />}/>
            <Route path="/" element={<FisicoList />} />  
      </Routes>
    </div>
  </section>
  );

}