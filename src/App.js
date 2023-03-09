import "./App.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement
);


function App() {
  const [data,setData] = useState();
  async function fetchData() {
    const res = await axios.get("https://win-saptest.sphinxjsc.com:44300/sphinx/get_bar_chart?sap-client=800");
    console.log(res, "res")
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="flex flex-col items-center gap-[20px]">
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>
      <div className="max-w-[80vw] max-h-[50vh] flex gap-5 flex-wrap justify-between">
        <div className="w-[45%]">
          <Bar
            data={{
              labels: [
                "Africa",
                "Asia",
                "Europe",
                "Latin America",
                "North America",
              ],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850",
                  ],
                  data: [2478, 5267, 734, 784, 433],
                },
              ],
            }}
            options={{
              indexAxis: "y",
              legend: { display: false },
              title: {
                display: true,
                text: "Predicted world population (millions) in 2050",
              },
            }}
          />
        </div>
        <div className="w-[45%]">
          <Bar
            data={{
              labels: [
                "Africa",
                "Asia",
                "Europe",
                "Latin America",
                "North America",
              ],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850",
                  ],
                  data: [2478, 5267, 734, 784, 433],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: "Predicted world population (millions) in 2050",
              },
            }}
          />
        </div>
        <div className="w-[45%] h-[400px]">
          <Doughnut
            data={{
              labels: [
                "Africa",
                "Asia",
                "Europe",
                "Latin America",
                "North America",
              ],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850",
                  ],
                  data: [2478, 5267, 734, 784, 433],
                },
              ],
            }}
            option={{
              title: {
                display: true,
                text: "Predicted world population (millions) in 2050",
              },
            }}
          />
        </div>
        <div className="w-[45%]">
          <Line
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Chart.js Line Chart",
                },
              },
            }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "Dataset 1",
                  data: [781,415,421,-168,-3,305,-25],
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                  label: "Dataset 2",
                  data: [
                    -77,-862,736,200,-602,185,-332
                  ],
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
