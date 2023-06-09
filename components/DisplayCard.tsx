import { FC, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactFragment, ReactPortal } from "react"
import { faker } from '@faker-js/faker';


import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from 'chart.js';
import useSWR from "swr";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
      Filler,
  );

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
            color: "white",
            font: {
                size: 16 // 'size' now within object 'font {}'
              },
        }
      },
    },
    scales: {
        y: {  // not 'yAxes: [{' anymore (not an array anymore)
            stacked: true,
            ticks: {
              color: "white", // not 'fontColor:' anymore
              // fontSize: 18,
              font: {
                size: 12, // 'size' now within object 'font {}'
              },
              stepSize: 50,
              beginAtZero: true
            }
          },
          x: {  // not 'xAxes: [{' anymore (not an array anymore)
            stacked: true,
            ticks: {
              color: "white",  // not 'fontColor:' anymore
              //fontSize: 14,
              font: {
                size: 12 // 'size' now within object 'font {}'
              },
              stepSize: 50,
              beginAtZero: true
            }
          }
      }
  };





  type DataType = {
    datetime: string,
    cancelled: number,
    finished: number,
  }

  
  const DisplayCard: FC = () => {
    const { data, error } = useSWR('http://172.17.0.149:5000/api/test');

    const labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'];

    console.log(labels);

 const chartData = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Failed verifications',
            data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgba(255, 0, 0, 0.4)',
          },
          {
            fill: true,
            label: 'Success verifications',
            data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
            borderColor: 'rgb(0, 255, 0)',
            backgroundColor: 'rgba(0, 255, 0, 0.4)',
          },
        ],
      };

    return (
        <div className="w-4/5 bg-slate-900 rounded-2xl flex flex-col">
            <div className="p-8 flex flex-col justify-center items-center">
                <h1 className="font-bold text-2xl">Order Verification Dashboard</h1>
                <Line options={options} data={chartData} />
                <div className="flex">
                </div>
            </div>
        </div>
    )
}

export default DisplayCard;
