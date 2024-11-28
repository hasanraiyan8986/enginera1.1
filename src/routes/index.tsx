import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { YearList } from '../pages/YearList';
import { SemesterList } from '../pages/SemesterList';
import { BranchList } from '../pages/BranchList';
import { SubjectList } from '../pages/SubjectList';
import { SubjectDetails } from '../pages/SubjectDetails';
import { ErrorBoundary } from '../components/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <YearList />,
      },
      {
        path: 'year/:yearId',
        element: <SemesterList />,
      },
      {
        path: 'year/:yearId/semester/:semesterId',
        element: <BranchList />,
      },
      {
        path: 'year/:yearId/semester/:semesterId/branch/:branchId',
        element: <SubjectList />,
      },
      {
        path: 'subject/:subjectId',
        element: <SubjectDetails />,
      },
    ],
  },
]);