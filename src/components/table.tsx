import * as React from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';


const list = [
    {
      id: '1',
      name: 'VSCode',
      deadline: new Date(2020, 1, 17),
      type: 'SETUP',
      isComplete: true,
      tasks: false,
    },
    {
      id: '2',
      name: 'JavaScript',
      deadline: new Date(2020, 2, 28),
      type: 'LEARN',
      isComplete: true,
    },
    {
      id: '3',
      name: 'React',
      deadline: new Date(2020, 3, 8),
      type: 'LEARN',
      isComplete: false,
    },
    {
        id: '3',
        name: 'React',
        deadline: new Date(2020, 3, 8),
        type: 'LEARN',
        isComplete: false,
      }
  ];





export const Component = () => {
  const data = { nodes: list };

  const theme = useTheme(getTheme());

  const COLUMNS = [
    {
      label: 'Deadline',
      renderCell: (item:any) =>
        item.deadline.toLocaleDateString('de-DE', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Task', renderCell: (item:any) => item.name },
    
    { label: 'Type', renderCell: (item:any) => item.type },
    {
      label: 'Complete',
      renderCell: (item:any) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item:any) => item.nodes?.length },
  ];

  return <CompactTable columns={COLUMNS} data={data} theme={theme} />;
};