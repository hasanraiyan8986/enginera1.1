import { BookOpen, Clock, GraduationCap } from 'lucide-react';
import type { Subject } from '../../types/course';

interface SubjectHeaderProps {
  subject: Subject;
}

export const SubjectHeader = ({ subject }: SubjectHeaderProps) => {
  return (
    <div className="relative h-72">
      <img
        src={subject.thumbnail}
        alt={subject.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-3 text-white/80 mb-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-primary" />
            <span>{subject.level}</span>
          </div>
          <span className="text-white/60">•</span>
          <div className="flex items-center gap-2">
            <Clock className="text-primary" />
            <span>{subject.credits} Credits</span>
          </div>
          <span className="text-white/60">•</span>
          <div className="flex items-center gap-2">
            <BookOpen className="text-primary" />
            <span>{subject.modules.length} Modules</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">{subject.title}</h1>
        <p className="text-white/80">{subject.code}</p>
      </div>
    </div>
  );
};