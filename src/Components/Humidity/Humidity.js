import React from "react";
import ReactECharts from "echarts-for-react";
export default function Humidity({ data }) {
  const options = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: "Humidity Chart",
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.Time),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Humidity",
        data: data.map((e) => e.Humidity),
        type: "line",
        smooth: true,
      },
    ],
  };
  return (
    <div>
      <ReactECharts option={options} />
    </div>
  );
}
