import { useNavigate, useParams } from 'react-router-dom';
import { BranchSelector } from '../components/BranchSelector';
import { academicYears } from '../data/academicData';
import { Branch } from '../types/course';

export const BranchList = () => {
  const navigate = useNavigate();
  const { yearId, semesterId } = useParams();
  
  const semester = academicYears
    .find(y => y.id === yearId)
    ?.semesters.find(s => s.id === semesterId);
  
  if (!semester) {
    throw new Error('Semester not found');
  }

  const handleSelectBranch = (branch: Branch) => {
    navigate(`/year/${yearId}/semester/${semesterId}/branch/${branch.id}`);
  };

  const handleBack = () => {
    navigate(`/year/${yearId}`);
  };

  return (
    <BranchSelector
      branches={semester.branches}
      onSelectBranch={handleSelectBranch}
      onBack={handleBack}
    />
  );
};