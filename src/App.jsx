import {Routes , Route} from 'react-router-dom'
import {Home , About , Contact , Products , SingleProduct , Cart , Error} from './pages'
import Header from './components/Header'
import './App.css'
import {GlobalStyle} from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

function App() {
  
  const theme= {
    colors : {
      bg : '#000'
    },
    media : {
      break : "915px",
      resp :"815px"
      
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App
