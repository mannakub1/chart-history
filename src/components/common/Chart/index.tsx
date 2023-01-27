import ReactEcharts from "echarts-for-react";
import Text from "../Text/index";
import {
  BLUE_025BB7,
  GRAY_E0E0E0,
  GRAY_F2F4F7,
} from "../../../constants/colors/colors";
import { ChartProps, DataArray, DateArray } from "./type";
import { StyledTextDiv, StyledChartDiv } from "./style";
import { useCallback, useState } from "react";

const Chart = (props: ChartProps) => {
  const { data, title } = props;

  const createChartData = useCallback((data) => {
    const dataArray: DataArray = data.map((d) => d.value);
    const dateArray: DateArray = data.map((d) => d.date);
    return { dataArray, dateArray };
  }, []);

  const calMaximumYaxis = useCallback((data) => {
    return data.reduce((a, b) => a + b, 0) / data.length + 2;
  }, []);

  const [chartData] = useState({
    xAxis: createChartData(data).dateArray,
    yAxis: createChartData(data).dataArray,
    maximumXaxisValue: calMaximumYaxis(createChartData(data).dataArray),
  });
  const option = {
    tooltip: {
      trigger: "item",
      backgroundColor: GRAY_E0E0E0,
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
      data: chartData.xAxis,
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
          color: GRAY_F2F4F7,
          width: "1",
        },
      },
      min: 0,
      max: chartData.maximumXaxisValue,
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
        data: chartData.yAxis,
        smooth: true,
        animation: false,
        symbolSize: 7,
        showSymbol: true,
        itemStyle: {
          normal: {
            symbol: "circle",
            symbolBorderWidth: 1,
            symbolSize: 8,
            color: BLUE_025BB7,
          },
        },
        lineStyle: {
          color: BLUE_025BB7,
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
                color: BLUE_025BB7,
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
                  color: BLUE_025BB7,
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
