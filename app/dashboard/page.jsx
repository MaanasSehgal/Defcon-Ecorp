"use client";

import "./dashboard.css";
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme.js";
import {mockTransactions} from "../data/mockData.js";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "./components/LineChart";
import GeographyChart from "./components/GeographyChart";
import BarChart from "./components/BarChart";
import StatBox from "./components/StatBox";
import ProgressCircle from "./components/ProgressCircle";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import {useEffect, useState} from "react";
import BaseContext from "../contexts/BaseContext";
import {useContext} from "react";
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
    const theme = useTheme();
    const {user} = useContext(BaseContext);
    const [num, setNum] = useState(59342);
    const [hiddenUsernameState, setHiddenUsernameState] = useState("hidden");
    const colors = tokens(theme.palette.mode);

    function getRandomNumber() {
        const gain = Math.round(Math.floor(Math.random() * 2) + 1);
        return Math.round(Math.random() * 5000) * Math.pow(-1, gain);
    }

    function handleDownloadClick() {
        // alert("Download button clicked.");
        setTimeout(() => {
            setHiddenUsernameState("animate-pulse p-2 text-gray-500 text-sm opacity-25");
        }, 3000);
        setTimeout(() => {
            setHiddenUsernameState("hidden");
        }, 5000);
    }

    const notify = () => {
        console.log("hi")
        toast("Ohh.. You cracked me! Here's your key: 1234-5678-9012-3456");}

    useEffect(() => {
        const interval = setInterval(() => {
            setNum((c) => Math.abs(c + getRandomNumber()));
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    return (
        // {user}
        <Box m="20px" className="hover:cursor-default hover:select-none">
            <Toaster
                toastOptions={{
                    className: '',
                    style: {
                    border: '1px solid #55e635',
                    padding: '16px',
                    backgroundColor: '#000000',
                    color: '#55e635',
                    },
                }}
                />
            <h2 className="text-custom-green text-6xl text-center font-press-start mb-5 hover:cursor-default title-font">EvilCorp</h2>
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
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                {/* ROW 1 */}
                <Box gridColumn="span 3" backgroundColor="#000000" display="flex" alignItems="center" justifyContent="center" className="bg-transparent">
                    <div className="border-2 border-custom-green moving-border flex">
                        <StatBox
                            className="bg-transparent"
                            title={Math.round(num / 2)}
                            subtitle="Threats Sent"
                            progress="0.2"
                            increase="+14%"
                            offset={2}
                            icon={<EmailIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}} />}
                        />
                    </div>
                </Box>
                <Box gridColumn="span 3" backgroundColor="#000000" display="flex" alignItems="center" justifyContent="center" className="bg-transparent">
                    <div className="border-2 border-custom-green moving-border flex">
                        <StatBox
                            className="bg-transparent"
                            title={Math.round(num / 4)}
                            subtitle="Sales Extorted"
                            progress="0.40"
                            increase="+21%"
                            offset={3}
                            icon={<PointOfSaleIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}} />}
                        />
                    </div>
                </Box>
                <Box gridColumn="span 3" backgroundColor="#000000" display="flex" alignItems="center" justifyContent="center" className="bg-transparent">
                    <div className="border-2 border-custom-green moving-border flex">
                        <StatBox
                            className="bg-transparent"
                            title={Math.round(num / 3)}
                            subtitle="New Victims"
                            progress="0.30"
                            increase="+5%"
                            offset={4}
                            icon={<PersonAddIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}} />}
                        />
                    </div>
                </Box>
                <Box className="bg-transparent" gridColumn="span 3" backgroundColor="#000000" display="flex" alignItems="center" justifyContent="center">
                    <div className="border-2 border-custom-green moving-border flex">
                        <StatBox
                            className="bg-transparent"
                            title={Math.round(num * 3)}
                            subtitle="Traffic Received"
                            progress="0.4"
                            increase="+43%"
                            offset={5}
                            icon={<TrafficIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}} />}
                        />
                    </div>
                </Box>

                {/* ROW 2 */}
                <Box gridColumn="span 8" gridRow="span 2" backgroundColor="#000000">
                    <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
                        <Box>
                            <Typography variant="h5" fontWeight="600" color={colors.greenAccent[100]}>
                                Revenue Generated
                            </Typography>
                            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                                <span>$</span>
                                <AnimatedNumber value={num} size={50} hasComma={true} duration={2000} />
                            </Typography>
                        </Box>
                        <div className={`text-white ${hiddenUsernameState}`}>S. Miller</div>
                        <Box onClick={handleDownloadClick}>
                            <IconButton>
                                <DownloadOutlinedIcon sx={{fontSize: "26px", color: colors.greenAccent[500]}} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                <Box gridColumn="span 4" gridRow="span 2" backgroundColor="#000000" overflow="auto" className="border-2 border-custom-green moving-border">
                    <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.greenAccent[500]}`} colors={colors.greenAccent[400]} p="15px">
                        <Typography color={colors.greenAccent[400]} variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            onClick={transaction.clickable && notify}
                            className={`${transaction.clickable && "cursor-pointer"}`}
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.greenAccent[500]}`}
                            p="15px">
                            <Box>
                                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.greenAccent[400]}>{transaction.user}</Typography>
                            </Box>
                            <Box color={colors.greenAccent[400]}>{transaction.date}</Box>
                            <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* ROW 3 */}
                <Box className="border-2 border-custom-green moving-border flex flex-col " gridColumn="span 4" gridRow="span 2" backgroundColor="#000000" p="30px">
                    <Typography variant="h5" fontWeight="600" color={colors.greenAccent[500]}>
                        Campaign
                    </Typography>
                    <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                        <ProgressCircle offset={1} size="125" />
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{mt: "15px"}}>
                            $
                            <AnimatedNumber value={num} size={25} hasComma={true} duration={2000} />
                            <span> </span>
                            revenue generated
                        </Typography>
                        {/* <Typography>Includes extra misc expenditures and costs</Typography> */}
                    </Box>
                </Box>
                <Box className="border-2 border-custom-green moving-border flex flex-col " gridColumn="span 4" gridRow="span 2" backgroundColor="#000000">
                    <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600" sx={{padding: "30px 30px 0 30px"}}>
                        Sales Quantity
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                <Box className="border-2 border-custom-green moving-border flex flex-col" gridColumn="span 4" gridRow="span 2" backgroundColor="#000000" padding="30px">
                    <Typography variant="h5" fontWeight="600" sx={{marginBottom: "15px"}} color={colors.greenAccent[500]}>
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
