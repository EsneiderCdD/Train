import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Register from "../pages/Register";
import UserList from "../pages/UserList";
function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/">Registro</Link> | <Link to="/usuarios">Usuarios</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/usuarios" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
