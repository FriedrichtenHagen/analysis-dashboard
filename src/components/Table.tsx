import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { useSort } from "@table-library/react-table-library/sort";

export const Table = ({data1}:any) => {
  const theme = useTheme(getTheme());
  const data = { nodes: data1 };

  const sort = useSort(
    data1,
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
      label: 'Influencer',
      renderCell: (item:any) => item.influencer,
      sort: { sortKey: "Influencer" },
    },
  ];

  return <div style={{height: '400px'}}>
    <CompactTable style={{height: '100px',}} columns={COLUMNS} layout={{ fixedHeader: true }} data={data} theme={theme} sort={sort} />
  </div>
  
  
  
};