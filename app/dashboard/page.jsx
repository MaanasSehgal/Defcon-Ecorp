"use client"

import "./dashboard.css"
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme.js"
import { mockTransactions } from "../data/mockData.js";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "./components/Header.jsx";
import LineChart from "./components/LineChart";
import GeographyChart from "./components/GeographyChart";
import BarChart from "./components/BarChart";
import StatBox from "./components/StatBox";
import ProgressCircle from "./components/ProgressCircle";

const Page = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
           <h2 className="text-custom-green text-5xl text-center font-press-start mb-5">EvilCorp</h2>
      {/* HEADER */}
      {/* <Box display="flex" justifyContent="space-between" alignItems="center">

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box> */}

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="#000000"
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="bg-transparent"
        >
          <div className="border-2 border-custom-green flex">
          <StatBox
            className="bg-transparent"
            title="12,361"
            subtitle="Threats Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          </div>
        </Box>
        <Box
      gridColumn="span 3"
      backgroundColor="#000000"
      display="flex"
      alignItems="center"
      justifyContent="center"
      className="bg-transparent">
          <div className="border-2 border-custom-green flex">
          <StatBox
            className="bg-transparent"
            title="431,225"
            subtitle="Sales Extorted"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          </div>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#000000"
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="bg-transparent"
        >
         <div className="border-2 border-custom-green flex">
          <StatBox
            className="bg-transparent"
            title="32,441"
            subtitle="New Victims"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          </div>
        </Box>
        <Box
          className="bg-transparent"
          gridColumn="span 3"
          backgroundColor="#000000"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <div className="border-2 border-custom-green flex">
          <StatBox
            className="bg-transparent"
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          </div>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="#000000"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#000000"
          overflow="auto"
          className="border-2 border-custom-green"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.greenAccent[500]}`}
            colors={colors.greenAccent[400]}
            p="15px"
          >
            <Typography color={colors.greenAccent[400]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.greenAccent[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.greenAccent[400]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.greenAccent[400]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          className="border-2 border-custom-green flex flex-col"
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#000000"
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" color={colors.greenAccent[500]}>
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            {/* <Typography>Includes extra misc expenditures and costs</Typography> */}
          </Box>
        </Box>
        <Box
         className="border-2 border-custom-green flex flex-col"
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#000000"
        >
          <Typography
            color = {colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          className="border-2 border-custom-green flex flex-col"
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#000000"
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
            color={colors.greenAccent[500]}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;