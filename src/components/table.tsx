import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { useSort } from "@table-library/react-table-library/sort";

import createMockData  from '../createMockData'


// const exampleList = [
//     {
//       id: '1',
//       meta: 1234.54,
//       date: new Date(2020, 1, 17),
//       type: 'SETUP',
//       isComplete: true,
//     },
//     {
//       id: '2',
//       meta: 6234.43,
//       date: new Date(2020, 2, 28),
//       type: 134132,
//       isComplete: true,
//     },
//     {
//       id: '3',
//       meta: 1556.76,
//       date: new Date(2020, 3, 8),
//       type: 'LEARN',
//       isComplete: false,
//     },
//     {
//         id: '3',
//         meta: 7654.54,
//         date: new Date(2020, 3, 8),
//         type: 'LEARN',
//         isComplete: false,
//     }
// ];

const startDate = new Date(2023, 1, 1)
const mockDate = createMockData(50, startDate)



export const Component = () => {
  const theme = useTheme(getTheme());
  const data = { nodes:mockDate };

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        Date: (array) => array.sort((a, b) => a.date - b.date),
        Meta: (array) => array.sort((a, b) => a.meta_spend - b.meta_spend),
        Google: (array) => array.sort((a, b) => a.google_spend - b.google_spend),
        Revenue: (array) => array.sort((a, b) => a.revenue - b.revenue),
        TASKS: (array) =>
          array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
      },
    }
  );

  function onSortChange(action:any, state:any) {
    console.log(action, state);
  }




  const COLUMNS = [
    {
      label: 'Date',
      renderCell: (item:any) =>
        item.date.toLocaleDateString('de-DE', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
      sort: { sortKey: "Date" },
    },
    { 
      label: 'Meta spend',
      renderCell: (item:any) => item.meta_spend,
      sort: { sortKey: "Meta" },
    },
    { 
      label: 'Google spend',
      renderCell: (item:any) => item.google_spend,
      sort: { sortKey: "Google" },
    },
    {
      label: 'Shop Revenue',
      renderCell: (item:any) => item.revenue,
      sort: { sortKey: "Revenue" },
    },
    { 
      label: 'shop',
      renderCell: (item:any) => item.nodes?.length 
    },
  ];

  return <div style={{height: '400px'}}>
    <CompactTable style={{height: '100px',}} columns={COLUMNS} layout={{ fixedHeader: true }} data={data} theme={theme} sort={sort} />
  </div>
  
  
  
};