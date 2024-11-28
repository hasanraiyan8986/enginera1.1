import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card p-8 rounded-lg shadow-lg border text-center">
        <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-card-foreground mb-2">
          {isRouteErrorResponse(error) ? 'Page Not Found' : 'Something went wrong'}
        </h1>
        <p className="text-muted-foreground mb-6">
          {isRouteErrorResponse(error)
            ? "The page you're looking for doesn't exist."
            : 'An unexpected error occurred. Please try again later.'}
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};