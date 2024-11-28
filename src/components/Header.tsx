import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-card shadow-sm border-b sticky top-0 z-50 backdrop-blur-sm bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="text-xl font-bold text-card-foreground hover:text-primary transition-colors duration-300"
          >
            Engineering Curriculum
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};