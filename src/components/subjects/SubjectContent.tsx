import { useState } from 'react';
import type { Subject } from '../../types/course';
import { ModuleAccordion } from '../ModuleAccordion';

interface SubjectContentProps {
  subject: Subject;
}

export const SubjectContent = ({ subject }: SubjectContentProps) => {
  const [selectedModule, setSelectedModule] = useState(subject.modules[0]?.id);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-card-foreground mb-4">
          Course Description
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {subject.description}
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-card-foreground mb-4">
          Course Modules
        </h2>
        {subject.modules.map((module) => (
          <ModuleAccordion
            key={module.id}
            module={module}
            isOpen={selectedModule === module.id}
            onToggle={() => setSelectedModule(
              selectedModule === module.id ? null : module.id
            )}
          />
        ))}
      </div>
    </div>
  );
};