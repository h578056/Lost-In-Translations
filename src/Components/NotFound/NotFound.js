import { Link } from 'react-router-dom';

const NotFoundView = () => {
    return (
      <div >
          <h1>u lost fam</h1>
          <Link to="/"> Go to starting pos </Link>
      </div>
    );
  }
  
  export default NotFoundView;