import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { Subject } from '../../types/course';
import { SubjectHeader } from './SubjectHeader';
import { SubjectContent } from './SubjectContent';
import { SubjectResources } from './SubjectResources';

interface SubjectViewProps {
  subject: Subject;
  onBack: () => void;
}

export const SubjectView = ({ subject, onBack }: SubjectViewProps) => {
  return (
    <div className="space-y-8">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary group"
      >
        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Subjects</span>
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-xl overflow-hidden border">
            <SubjectHeader subject={subject} />
            <SubjectContent subject={subject} />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <SubjectResources subject={subject} />
        </div>
      </div>
    </div>
  );
};