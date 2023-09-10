import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { useSort } from "@table-library/react-table-library/sort";
import { transactionDataProps } from '../types/types';

export const Table = ({transactionData}:transactionDataProps) => {
  const theme = useTheme(getTheme());
  const data = { nodes: transactionData };

  const sort = useSort(
    transactionData,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        Date: (array) => array.sort((a, b) => a.date - b.date),
        Meta: (array) => array.sort((a, b) => a.meta_spend - b.meta_spend),
        Google: (array) => array.sort((a, b) => a.google_spend - b.google_spend),
        Revenue: (array) => array.sort((a, b) => a.revenue - b.revenue),
        Influencer: (array) => array.sort((a, b) => a.influencer - b.influencer),
      },
    }
  );

  function onSortChange(action:any, state:any) {
    console.log(action, state);
  }

  const COLUMNS = [
    {
      label: 'Date',
      renderCell: (item:any) => {
        if(item.date instanceof Date){
          return item.date.toLocaleDateString('de-DE', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
        } else{
          return item.date.slice(0, 10).replace('T', ' ')
        }
      }
       
       ,
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
      label: 'Influencer',
      renderCell: (item:any) => item.influencer,
      sort: { sortKey: "Influencer" },
    },
  ];

  return <div style={{height: '300px'}}>
    <CompactTable columns={COLUMNS} layout={{ fixedHeader: true }} data={data} theme={theme} sort={sort} />
  </div>
  
  
  
};