import ReactEcharts from "echarts-for-react";
import Text from "../Text/index";
import { ChartProps, DataArray, DateArray } from "./type";
import { StyledTextDiv, StyledChartDiv } from "./style";
import { useCallback, useState } from "react";

const Chart = (props: ChartProps) => {
  const { data, title } = props;

  const createChartData = useCallback((data) => {
    let dataArray: DataArray = [];
    let dateArray: DateArray = [];
    data.forEach((d) => {
      dateArray.push(d.date);
    });
    data.forEach((d) => {
      dataArray.push(d.value);
    });
    return {
      dataArray,
      dateArray,
    };
  }, []);

  const calMaximumYaxis = useCallback((data) => {
    let sumOfData = 0;
    data.forEach((d) => {
      sumOfData += d;
    });
    return sumOfData / data.length + 2;
  }, []);

  const [xAxis] = useState(createChartData(data).dateArray);
  const [yAxis] = useState(createChartData(data).dataArray);
  const [maximumXaxisValue] = useState(calMaximumYaxis(yAxis));

  const option = {
    tooltip: {
      trigger: "item",
      backgroundColor: "#E0E0E0",
      borderWidth: 0,
      axisPointer: {
        type: "none",
      },
      textStyle: {
        fontFamily: "Kanit",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 15,
      },
      extraCssText: `
      text-align: center;
    `,
      position: "top",
      formatter: "{b}<br/>{c} %",
      shadowBlur: 0,
      shadowColor: "transparent",
      fontSize: "10px",
      valueFormatter: (value) => value.toFixed(2) + "%",
    },
    grid: {
      left: "4%",
      right: "2%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
      clipOverflow: false,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      animation: false,
      data: xAxis,
      axisLabel: {
        align: "center",
        textStyle: {
          fontSize: "12px",
          fontFamily: "Kanit",
          fontWeight: "400",
        },
        formatter: (value) => value.replace(" 65", ""),
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      position: "right",
      animation: false,
      minInterval: 0.5,
      className: "y-axis-label",
      axisLabel: {
        formatter: (value) => `${value.toFixed(1)}%`,
        padding: [0, 0, 0, 8],
        textStyle: {
          fontSize: "12px",
          fontFamily: "Inter",
          fontWeight: "400",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#F2F4F7",
          width: "1",
        },
      },
      min: 0,
      max: maximumXaxisValue,
    },

    dataZoom: [
      {
        id: "dataZoomY",
        type: "inside",
        throttle: 150,
        minSpan: 40,
        orient: "vertical",
        show: false,
        yAxisIndex: [0],
        filterMode: "weakFilter",
      },
      {
        id: "dataZoomX",
        type: "inside",
        xAxisIndex: [0],
        filterMode: "filter",
        orient: "horizontal",
        minValueSpan: 1,
      },
    ],

    series: [
      {
        type: "line",
        connectNulls: true,
        nullPointMode: "break",
        data: yAxis,
        smooth: true,
        animation: false,
        symbolSize: 7,
        showSymbol: true,
        itemStyle: {
          normal: {
            symbol: "circle",
            symbolBorderWidth: 1,
            symbolSize: 8,
            color: "#025BB7",
          },
        },
        lineStyle: {
          color: "#025BB7",
        },

        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#025BB7",
              },
              {
                offset: 1,
                color: "rgba(2, 91, 183, 0)",
              },
            ],
            globalCoord: false,
          },
          opacity: 0.1,
          style: {
            mixBlendMode: "multiply",
          },
        },
        emphasis: {
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#025BB7",
                },
                {
                  offset: 1,
                  color: "rgba(2, 91, 183, 0)",
                },
              ],
              globalCoord: false,
            },
            opacity: 0.1,
            style: {
              mixBlendMode: "multiply",
            },
          },
        },
      },
    ],
  };
  return (
    <>
      <StyledTextDiv>
        <Text weight={600}>{title}</Text>
      </StyledTextDiv>
      <StyledChartDiv>
        <ReactEcharts option={option} />
      </StyledChartDiv>
    </>
  );
};

export default Chart;
