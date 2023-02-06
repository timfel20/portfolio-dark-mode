import { Route, Routes } from 'react-router';
import { Main } from './components/Main';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path = "/"  element = {<Main/>} />
    </Routes>
    <Helmet>
    <script src=
   "./assets/js/main.js" 
    type="text/javascript" />
    <script src=
   "./assets/vendor/purecounter/purecounter.js" 
    type="text/javascript" />
    <script src=
   "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js" 
    type="text/javascript" />
    <script src=
   ".assets/vendor/glightbox/js/glightbox.min.js" 
    type="text/javascript" />
    <script src=
   "./assets/vendor/swiper/swiper-bundle.min.js" 
    type="text/javascript" />
    <script src=
   "./assets/vendor/typed.js/typed.min.js" 
    type="text/javascript" />
    <script src=
   "./assets/vendor/php-email-form/validate.js" 
    type="text/javascript" />
    </Helmet>
    </div>
  );
}

export default App;
