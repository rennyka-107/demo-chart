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
  RadialLinearScale,
} from "chart.js";
import { Doughnut, Bar, PolarArea, Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  RadialLinearScale,
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

const BAR_CHART = [
  { MONTH: "January", DATA: 40 },
  { MONTH: "February", DATA: 20 },
  { MONTH: "March", DATA: 12 },
  { MONTH: "April", DATA: 39 },
  { MONTH: "May", DATA: 10 },
  { MONTH: "June", DATA: 40 },
  { MONTH: "July", DATA: 39 },
];

const POLARAREA_CHART = [
  { COLOR: "#FF6384", DATA: 11, LABEL: "RED" },
  { COLOR: "#4BC0C0", DATA: 16, LABEL: "GREEN" },
  { COLOR: "#FFCE56", DATA: 7, LABEL: "YELLOW" },
  { COLOR: "#E7E9ED", DATA: 3, LABEL: "GREY" },
  { COLOR: "#3e95cd", DATA: 14, LABEL: "BLUE" },
];

const PIE_CHART = [
  { COLOR: "#41B883", DATA: 40, LABEL: "VueJS" },
  { COLOR: "#E46651", DATA: 20, LABEL: "EmberJS" },
  { COLOR: "#00D8FF", DATA: 80, LABEL: "ReactJS" },
  { COLOR: "#DD1B16", DATA: 10, LABEL: "AngularJS" },
];

function App() {
  const [data, setData] = useState();
  async function fetchData() {
    // const res = await axios.get("http://win-saptest.sphinxjsc.com:8000/sphinx/get_bar_chart?sap-client=800", {mode: "no-cors", headers: {
    //   "Accept": "application/json"
    // }})
    // console.log(res, "res")
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sap-usercontext=sap-client=800");
    myHeaders.append("Accept", "application/*");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      mode: "no-cors",
    };

    fetch(
      "http://45.117.82.171:8000/sphinx/get_bar_chart?sap-client=800",
      requestOptions
    )
      .then((response) => console.log(response, "response"))
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-[20px]">
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>
      <div className="max-w-[80vw] max-h-[50vh] flex gap-5 flex-wrap justify-between">
        <div className="w-[45%]">
          <Bar
            data={{
              labels: BAR_CHART.map((item) => item.MONTH),
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: BAR_CHART.map((item) => "#3e95cd"),
                  // backgroundColor: [
                  //   "#3e95cd",
                  //   "#8e5ea2",
                  //   "#3cba9f",
                  //   "#e8c3b9",
                  //   "#c45850",
                  // ],
                  data: BAR_CHART.map((item) => item.DATA),
                },
              ],
            }}
            options={{
              // indexAxis: "y",
              legend: { display: false },
              title: {
                display: true,
                text: "Predicted world population (millions) in 2050",
              },
            }}
          />
        </div>
        <div className="w-[45%] h-[400px] flex justify-center">
          <PolarArea
            data={{
              labels: POLARAREA_CHART.map((item) => item.LABEL),
              datasets: [
                {
                  label: "# of Votes",
                  data: POLARAREA_CHART.map((item) => item.DATA),
                  backgroundColor: POLARAREA_CHART.map((item) => item.COLOR),
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
        <div className="w-[45%] h-[400px] flex justify-center">
          <Doughnut
            data={{
              labels: PIE_CHART.map((item) => item.LABEL),
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: PIE_CHART.map((item) => item.COLOR),
                  data: PIE_CHART.map((item) => item.DATA),
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
                  data: [781, 415, 421, -168, -3, 305, -25],
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                  label: "Dataset 2",
                  data: [-77, -862, 736, 200, -602, 185, -332],
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
