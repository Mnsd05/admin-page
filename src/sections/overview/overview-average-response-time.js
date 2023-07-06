import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chart } from "src/components/chart";

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    colors: [theme.palette.primary.main],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    markers: {
      size: 4,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}s`,
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};

export const OverviewAverageResponse = (props) => {
  const { chartSeries, sx } = props;
  const chartOptions = useChartOptions();

  return (
    <Card sx={sx}>
      <CardHeader title="Average response time" sx={{ textAlign: "center" }} />
      <CardContent>
        <Chart height={350} options={chartOptions} series={chartSeries} type="bar" width="100%" />
      </CardContent>
      <Divider />
    </Card>
  );
};

OverviewAverageResponse.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
