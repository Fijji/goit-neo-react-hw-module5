import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn&apos;t exist.</p>
      <Link to="/">Go back to the Home Page</Link>
    </div>
  );
}

export default NotFoundPage;
