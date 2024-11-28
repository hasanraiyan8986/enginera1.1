import { FileText, Link as LinkIcon, Video } from 'lucide-react';
import { Resource } from '../../types/course';

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const icons = {
    video: Video,
    pdf: FileText,
    link: LinkIcon,
  };
  const Icon = icons[resource.type];

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-accent transition-colors duration-300 group border"
    >
      <span className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-5 h-5 text-primary" />
      </span>
      <span className="text-card-foreground group-hover:text-primary transition-colors duration-300">
        {resource.title}
      </span>
    </a>
  );
};