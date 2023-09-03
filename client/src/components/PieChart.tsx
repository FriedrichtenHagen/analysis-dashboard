import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { convertDataToPie } from '../utils/createMockData';
ChartJS.register(ArcElement, Tooltip, Legend);
import { dataDayProps } from '../utils/createMockData';


export function PieChart({ data1 } :dataDayProps) {

  let pieData = convertDataToPie(data1)
  console.log(pieData)
  let labels = ['Meta Spend', 'Google Spend', 'Influencer Spend']


  const data = {
      labels: labels,
      datasets: [
        {
          label: '',
          data: [pieData.meta_spend_total, pieData.google_spend_total, pieData.influencer_total],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };


  return <Pie data={data} style={{height:'300px'}}/>;
}
