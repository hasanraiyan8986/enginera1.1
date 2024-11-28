import { useNavigate, useParams } from 'react-router-dom';
import { academicYears } from '../data/academicData';
import { Subject } from '../types/course';
import { SubjectGrid } from '../components/subjects/SubjectGrid';

export const SubjectList = () => {
  const navigate = useNavigate();
  const { yearId, semesterId, branchId } = useParams();
  
  const branch = academicYears
    .find(y => y.id === yearId)
    ?.semesters.find(s => s.id === semesterId)
    ?.branches.find(b => b.id === branchId);
  
  if (!branch) {
    throw new Error('Branch not found');
  }

  const handleSelectSubject = (subject: Subject) => {
    navigate(`/subject/${subject.id}`);
  };

  const handleBack = () => {
    navigate(`/year/${yearId}/semester/${semesterId}`);
  };

  return (
    <SubjectGrid
      branch={branch}
      onSelectSubject={handleSelectSubject}
      onBack={handleBack}
    />
  );
};