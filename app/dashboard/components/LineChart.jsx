import {ResponsiveLine} from "@nivo/line";
import {useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {mockLineData as data} from "../../data/mockData";
import {useEffect, useState} from "react";

const LineChart = ({isCustomLineColors = false, isDashboard = false}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [lineChartData, setLineChartData] = useState(data);

    useEffect(() => {
        const interval = setInterval(() => {
            setLineChartData((prevData) =>
                prevData.map((el) => ({
                    ...el,
                    data: el.data.map((item) => ({
                        ...item,
                        y: Math.floor(Math.random() * 300 + 50) 
                    })),
                }))
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ResponsiveLine
            data={lineChartData}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.greenAccent[200],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.greenAccent[200],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.greenAccent[200],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.greenAccent[200],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.greenAccent[200],
                    },
                },
                tooltip: {
                    container: {
                        color: colors.primary[500],
                    },
                },
            }}
            colors={isDashboard ? {datum: "color"} : {scheme: "nivo"}} // added
            margin={{top: 50, right: 110, bottom: 50, left: 60}}
            xScale={{type: "point"}}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: "bottom",
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "transportation", // added
                legendOffset: 36,
                legendPosition: "middle",
            }}
            axisLeft={{
                orient: "left",
                tickValues: 5, // added
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "count", // added
                legendOffset: -40,
                legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={8}
            pointColor={{theme: "background"}}
            pointBorderWidth={2}
            pointBorderColor={{from: "serieColor"}}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default LineChart;
