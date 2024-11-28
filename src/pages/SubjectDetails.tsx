import { useNavigate, useParams } from 'react-router-dom';
import { useSubject } from '../hooks/queries/useAcademicData';
import { SubjectView } from '../components/subjects/SubjectView';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

export const SubjectDetails = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const { data: subject, isLoading, error } = useSubject(subjectId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !subject) {
    throw new Error('Subject not found');
  }

  const handleBack = () => {
    navigate(-1);
  };

  return <SubjectView subject={subject} onBack={handleBack} />;
};