import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-8xl mb-1 font-bold text-gray-300">404</h1>
        <span className="text-xl text-gray-600 mb-1">
          The page you are looking for doesn't exist!
        </span>
        <span>
          Go back{" "}
          <Link to="/" className="text-blue-600">
            Home
          </Link>
        </span>
      </div>
    </div>
  );
}

export default NotFoundPage;
