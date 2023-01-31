import { useMemo } from "react";
import ReactEcharts from "echarts-for-react";
import Text from "../Text/index";
import {
  BLACK_212121,
  BLUE_025BB7,
  GRAY_E0E0E0,
  GRAY_F2F4F7,
} from "../../../constants/colors/colors";
import { ChartProps, DataArray, DateArray } from "./type";
import { StyledTextDiv, StyledChartDiv } from "./style";
import dayjs from "dayjs";

const createChartData = (data) => {
  const dataArray: DataArray = data.map((d) => d.value);
  const dateArray: DateArray = data.map((d) => d.date);
  return { dataArray, dateArray };
};

const createThaiDateFormat = (data) => {
  const thaiMonth = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  return data?.map((data) => {
    const date = dayjs(data);
    const isValid = date.isValid();
    return isValid
      ? `${date.format("DD")} ${thaiMonth[date.month()]} ${
          (date.year() + 543) % 100
        }`
      : null;
  });
};

const calMaximumYaxis = (data) => {
  return data.reduce((a, b) => a + b, 0) / data.length + 2;
};

const Chart = (props: ChartProps) => {
  const { data, title } = props;
  const chartData = useMemo(() => {
    const object = createChartData(data);
    return {
      xAxis: createThaiDateFormat(object.dateArray),
      yAxis: object.dataArray,
      maximumXaxisValue: calMaximumYaxis(object.dataArray),
    };
  }, [data]);

  const option = {
    tooltip: {
      trigger: "item",
      backgroundColor: GRAY_E0E0E0,
      borderWidth: 0,
      position: "top",
      axisPointer: {},
      textStyle: {
        fontFamily: "Kanit",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 15,
        color: BLACK_212121,
      },
      extraCssText: `
      text-align: center;
    `,
      formatter: "{b}<br/>{c} %",
      shadowBlur: 0,
      shadowColor: "transparent",
      fontSize: "10px",
      valueFormatter: (value) => value.toFixed(2) + "%",
    },
    grid: {
      left: "5%",
      right: "3%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
      clipOverflow: false,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      animation: true,
      data: chartData.xAxis,
      axisLabel: {
        formatter: (value) => value.split(" ").slice(0, 2).join(" "),
        align: "center",
        textStyle: {
          fontSize: "12px",
          fontFamily: "Kanit",
          fontWeight: "400",
        },
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
      animation: true,
      minInterval: 0.5,
      className: "y-axis-label",
      axisLabel: {
        formatter: (value) => `${value.toFixed(1)}%`,
        padding: [0, 0, 0, 8],
        textStyle: {
          fontSize: "12px",
          fontFamily: "Kanit",
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
        animation: true,
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
