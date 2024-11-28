import { useNavigate, useParams } from 'react-router-dom';
import { SemesterSelector } from '../components/SemesterSelector';
import { academicYears } from '../data/academicData';
import { Semester } from '../types/course';

export const SemesterList = () => {
  const navigate = useNavigate();
  const { yearId } = useParams();
  
  const year = academicYears.find(y => y.id === yearId);
  
  if (!year) {
    throw new Error('Year not found');
  }

  const handleSelectSemester = (semester: Semester) => {
    navigate(`/year/${yearId}/semester/${semester.id}`);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <SemesterSelector
      semesters={year.semesters}
      onSelectSemester={handleSelectSemester}
      onBack={handleBack}
    />
  );
};