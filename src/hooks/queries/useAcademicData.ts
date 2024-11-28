import { useQuery } from '@tanstack/react-query';
import { academicYears } from '../../data/academicData';
import type { Year, Semester, Branch, Subject } from '../../types/course';

export const useYear = (yearId: string | undefined) => {
  return useQuery({
    queryKey: ['year', yearId],
    queryFn: () => academicYears.find(y => y.id === yearId),
    enabled: !!yearId,
  });
};

export const useSemester = (yearId: string | undefined, semesterId: string | undefined) => {
  return useQuery({
    queryKey: ['semester', yearId, semesterId],
    queryFn: () => 
      academicYears
        .find(y => y.id === yearId)
        ?.semesters.find(s => s.id === semesterId),
    enabled: !!yearId && !!semesterId,
  });
};

export const useBranch = (
  yearId: string | undefined,
  semesterId: string | undefined,
  branchId: string | undefined
) => {
  return useQuery({
    queryKey: ['branch', yearId, semesterId, branchId],
    queryFn: () =>
      academicYears
        .find(y => y.id === yearId)
        ?.semesters.find(s => s.id === semesterId)
        ?.branches.find(b => b.id === branchId),
    enabled: !!yearId && !!semesterId && !!branchId,
  });
};

export const useSubject = (subjectId: string | undefined) => {
  return useQuery({
    queryKey: ['subject', subjectId],
    queryFn: () =>
      academicYears
        .flatMap(y => y.semesters)
        .flatMap(s => s.branches)
        .flatMap(b => b.subjects)
        .find(s => s.id === subjectId),
    enabled: !!subjectId,
  });
};