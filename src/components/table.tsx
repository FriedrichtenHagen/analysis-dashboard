import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import createMockData  from '../createMockData'


const list = [
    {
      id: '1',
      meta: 1234.54,
      date: new Date(2020, 1, 17),
      type: 'SETUP',
      isComplete: true,
    },
    {
      id: '2',
      meta: 6234.43,
      date: new Date(2020, 2, 28),
      type: 134132,
      isComplete: true,
    },
    {
      id: '3',
      meta: 1556.76,
      date: new Date(2020, 3, 8),
      type: 'LEARN',
      isComplete: false,
    },
    {
        id: '3',
        meta: 7654.54,
        date: new Date(2020, 3, 8),
        type: 'LEARN',
        isComplete: false,
    }
];

const testDate = new Date(2023, 1, 1)


const mockDate = createMockData(50, testDate)


export const Component = () => {
  const data = { nodes:mockDate };

  const theme = useTheme(getTheme());

  const COLUMNS = [
    {
      label: 'Date',
      renderCell: (item:any) =>
        item.date.toLocaleDateString('de-DE', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'meta_spend', renderCell: (item:any) => item.meta },
    
    { label: 'google_spend', renderCell: (item:any) => item.type },
    {
      label: 'revenue',
      renderCell: (item:any) => item.isComplete.toString(),
    },
    { label: 'shop', renderCell: (item:any) => item.nodes?.length },
  ];

  return <CompactTable columns={COLUMNS} data={data} theme={theme} />;
};