import '../Math.css';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const LinearAlgebra = () => {
  return (
    <div>
        <Helmet>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        </Helmet>
        <div className="container text-center py-5">
            <h1><span className="app-title">Linear Algebra</span></h1>
            <p>From vectors to abstract and complex linear algebra.</p>
            <p>Choose a level of difficulty</p>

        </div>
        <div className="features-container icon-container">

        <Link to="/math/linearAlgebra/question"> 
        
        <div className="feature icon-difficulty">
            <i class="fas fa-star"></i>
                <h5>Easy question</h5>
            </div>
        </Link>
        <Link to="/math/linearAlgebra/question">
            <div className="feature icon-difficulty">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
                <h5>Medium question</h5>
               
            </div>
        </Link>
        <Link to="/math/linearAlgebra/question">
            <div className="feature icon-difficulty">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
                <h5>Hard question</h5>
            
            </div>
        </Link>
        </div>
    </div>
);
};
  
export default LinearAlgebra;