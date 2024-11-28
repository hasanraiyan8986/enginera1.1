import { Resource } from '../../types/course';
import { ResourceCard } from './ResourceCard';

interface ResourceSectionProps {
  title: string;
  resources: Resource[];
}

export const ResourceSection = ({ title, resources }: ResourceSectionProps) => {
  if (resources.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
        {title}
      </h3>
      <div className="space-y-2">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
};