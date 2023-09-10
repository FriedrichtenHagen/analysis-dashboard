
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { transactionDataProps, dayData } from '../types/types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Fictional Company',
      },
    },
  };



export function Chart({transactionData}:transactionDataProps){

    // convert data to correct format for the chart
    let labels:string[] = [];
    transactionData.map((dataset:dayData) =>{
        // if(dataset.date instanceof Date){
        //   labels.push(dataset.date.toLocaleDateString('de-DE'))
        // } else{
          labels.push(dataset.date.slice(0, 10).replace('T', ' '))
        // }
    })


    let convertedChartData = {
        labels,
        datasets: [
            {
                label: 'google_spend',
                data: labels.map((_item, index)=> transactionData[index].google_spend),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'meta_spend',
                data: labels.map((_item, index)=> transactionData[index].meta_spend),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'revenue',
                data: labels.map((_item, index)=> transactionData[index].revenue),
                borderColor: 'rgb(150, 162, 235)',
                backgroundColor: 'rgba(153, 162, 235, 0.5)',
            },
            {
              label: 'influencer',
              data: labels.map((_item, index)=> transactionData[index].influencer),
              borderColor: 'rgb(150, 62, 235)',
              backgroundColor: 'rgba(153, 162, 235, 0.5)',
          },
        ]
    }

    return <>
        <Line  style={{marginBottom: 100}} options={options} data={convertedChartData} />
    </>
    
}