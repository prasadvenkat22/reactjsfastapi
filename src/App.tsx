import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Applications } from "./pages/Applications"
import { Clients } from "./pages/Clients"
import { Users } from "./pages/users"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Store" element={<Store />} />

        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
