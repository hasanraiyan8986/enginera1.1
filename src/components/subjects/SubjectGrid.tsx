import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Branch, Subject } from '../../types/course';
import { SearchBar } from '../SearchBar';
import { SubjectCard } from './SubjectCard';
import { useSearch } from '../../hooks/useSearch';

interface SubjectGridProps {
  branch: Branch;
  onSelectSubject: (subject: Subject) => void;
  onBack: () => void;
}

export const SubjectGrid = ({ branch, onSelectSubject, onBack }: SubjectGridProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredSubjects = useSearch(branch.subjects, searchTerm);

  return (
    <div className="space-y-8">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary group"
      >
        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Branches</span>
      </motion.button>

      <div className="text-center">
        <h1 className="text-4xl font-bold text-card-foreground mb-4">
          {branch.name}
        </h1>
        <p className="text-xl text-muted-foreground">
          Browse available subjects
        </p>
      </div>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search subjects..."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            onClick={() => onSelectSubject(subject)}
          />
        ))}
      </div>
    </div>
  );
};