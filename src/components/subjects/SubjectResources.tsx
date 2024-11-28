import { Subject } from '../../types/course';
import { ResourceSection } from './ResourceSection';

interface SubjectResourcesProps {
  subject: Subject;
}

export const SubjectResources = ({ subject }: SubjectResourcesProps) => {
  return (
    <div className="bg-card rounded-xl border p-6 sticky top-24">
      <h2 className="text-xl font-semibold text-card-foreground mb-6">
        Course Resources
      </h2>
      
      <div className="space-y-6">
        <ResourceSection
          title="Lecture Notes"
          resources={subject.resources.notes}
        />
        
        <ResourceSection
          title="Previous Year Questions"
          resources={subject.resources.previousQuestions}
        />
        
        <ResourceSection
          title="Additional Materials"
          resources={subject.resources.additionalMaterials}
        />
      </div>
    </div>
  );
};