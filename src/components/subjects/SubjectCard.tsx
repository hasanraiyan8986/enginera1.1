import { motion } from 'framer-motion';
import { BookOpen, Clock, GraduationCap } from 'lucide-react';
import { Subject } from '../../types/course';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

export const SubjectCard = ({ subject, onClick }: SubjectCardProps) => {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-card rounded-xl overflow-hidden border hover:border-primary transition-all duration-300 cursor-pointer group"
    >
      <div className="relative h-48">
        <img
          src={subject.thumbnail}
          alt={subject.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <GraduationCap className="text-primary" />
            <span className="text-sm">{subject.level}</span>
            <span className="text-white/60">•</span>
            <Clock className="text-primary" />
            <span className="text-sm">{subject.credits} Credits</span>
          </div>
          <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {subject.title}
          </h2>
        </div>
      </div>

      <div className="p-6">
        <p className="text-muted-foreground line-clamp-2 mb-4">
          {subject.description}
        </p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BookOpen className="text-primary" />
            <span>{subject.modules.length} Modules</span>
          </div>
          <span className="text-muted-foreground">{subject.code}</span>
        </div>
      </div>
    </motion.article>
  );
};