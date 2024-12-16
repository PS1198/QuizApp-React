
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizApp from './component/QuizApp';

// import Contact from './components/Contact'; 

// import Question1 from './component/Question1';
// import Home from './Component/Home';
// import Question2 from './component/Question2';
// import Question3 from './component/Question3';
// import Result from './component/Result';

const App = () => {
  return (
    <Router> 
      <div>
       

        <Routes>
          {/* Defining the routes for each component */}
           <Route path="/" element={<QuizApp />} />
          {/* <Route path="/question" element={<Question1 />} />
          <Route path="/otherTwo" element={<Question2 />} />
          <Route path='/otherThree' element={<Question3 />} />
          <Route path='/result' element={<Result />} />  */}
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
