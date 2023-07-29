
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
import faker from 'faker';

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

export interface dataDay {
    date: Date,
    google_spend: number, 
    id: number, 
    meta_spend: number, 
    revenue: number,
}
export interface dataDayProps {
    data1: dataDay[]
}

export function Chart({data1}:dataDayProps){

    // convert data to correct format for the chart
    let labels:string[] = [];
    data1.map((dataset:dataDay) =>{
        labels.push(dataset.date.toLocaleDateString('de-DE'))
    })


    let convertedChartData = {
        labels,
        datasets: [
            {
                label: 'google_spend',
                data: labels.map((_item, index)=> data1[index].google_spend),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'meta_spend',
                data: labels.map((_item, index)=> data1[index].meta_spend),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'revenue',
                data: labels.map((_item, index)=> data1[index].revenue),
                borderColor: 'rgb(150, 162, 235)',
                backgroundColor: 'rgba(153, 162, 235, 0.5)',
            },


        ]
    }
    console.log(convertedChartData)

    return <>
        <Line  style={{marginBottom: 100}} options={options} data={convertedChartData} />
    </>
    
}