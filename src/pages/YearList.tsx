import { useNavigate } from 'react-router-dom';
import { YearSelector } from '../components/YearSelector';
import { academicYears } from '../data/academicData';
import { Year } from '../types/course';

export const YearList = () => {
  const navigate = useNavigate();

  const handleSelectYear = (year: Year) => {
    navigate(`/year/${year.id}`);
  };

  return <YearSelector years={academicYears} onSelectYear={handleSelectYear} />;
};