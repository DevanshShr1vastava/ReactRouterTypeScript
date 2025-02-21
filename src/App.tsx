import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import User from "./components/User"
import ProductLayout from "./components/ProductLayout"
import { Laptop,Phone } from "./components/ProductLayout"
import Dashboard from "./components/Dashboard"
import ProtectedRoute from "./routes/ProtectedRoute"
import SearchPage from "./components/SearchPage"
import UseSearchPage from "./components/UseSearchPage"
import { Container } from "react-bootstrap"
const Home = ()=>{
  return <h2>Home</h2>
}  

const About = ()=>{
  return <h2>About</h2>
}

const NotFound = ()=>{
  return <h2>Not Found 404</h2>
}
function App() {

  return (
    <Container>
      <br />
      <Router>
        <nav className="nav">
          <Link className="nav-link" to="/">Home</Link> 
          <Link className="nav-link" to="/about">About</Link> 
          <Link className="nav-link" to="/user/1/john">User 1</Link> 
          <Link className="nav-link" to="/product">Products</Link> 
          <Link className="nav-link" to="/dashboard">Dashboard</Link> 
          <Link className="nav-link" to="/search">Search</Link> 
          <Link className="nav-link" to="/usesearch">USearch</Link> 
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId/:name" element={<User />} />

          <Route element={<ProtectedRoute isAuthenticated={true}/>}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          
          <Route path = "/product" element={<ProductLayout />}>
            
            <Route path="laptop" element={<Laptop />} />
            <Route path="phone" element={<Phone />} />

          </Route>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/usesearch" element={<UseSearchPage />} />
          {/* keep not found at the bottom always */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
