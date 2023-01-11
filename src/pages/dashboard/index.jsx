import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockStats} from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import GrassIcon from '@mui/icons-material/Grass';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Timer from "../../components/Timer";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={24}>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            className=''
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Grid & Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(5em, 1fr))"
        gridAutoRows="140px"
        gap="20px"
       
        flexWrap="wrap"
      >
        {/* Statistics - Tiles */}
        <Box
          gridColumn="span 3"
          backgroundColor='#62c8c8'
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={4}
       
        >
          <StatBox
            title={<Timer/>}
            subtitle="Time to water plants"
            icon={
              <GrassIcon
                sx={{ color: '#4d8164', fontSize: "50px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#a2e1db"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={4}
        >
          <StatBox
            title="22°C"
            subtitle="Office temperature"
            icon={
              <DeviceThermostatIcon
                sx={{ color: '#ffdbcc', fontSize: "50px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor='#b6cfb6'
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={4}
        >
          <StatBox
            title='Sunny'
            subtitle="Outside weather"
            icon={
              <WbSunnyIcon
                sx={{ color: '#ffdf6f', fontSize: "50px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor='#ff968a'
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={4}
        >
          <StatBox
            title="12"
            subtitle="Number of drinks left in the fridge"
            icon={
              <SportsBarIcon
                sx={{ color: '#ffc8a2', fontSize: "50px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius={4}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                2022
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.darkBlueAccent[500]}
              >
                Customer flow
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.darkBlueAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius={4}
        >
          <Typography variant="h5" fontWeight="600">
            Total number of concurrent visitors
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
              color={colors.darkBlueAccent[500]}
              sx={{ mt: "15px", fontWeight: 'bold' }}
            >
              1,48,352 amazing people
            </Typography>
            <Button sx={{color: colors.blueAccent[100], marginTop: '10px', fontWeight: 'bold', backgroundColor: colors.blueAccent[500]}}>Send newsletter to motivate the rest</Button>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          borderRadius={4}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              At a Glance
            </Typography>
          </Box>
          {mockStats.map((stat, i) => (
            <Box
              key={`${stat.statid}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.darkBlueAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {stat.statName}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {stat.statid}
                </Typography>
              </Box>
              <Box
                backgroundColor={colors.darkBlueAccent[700]}
                p="5px 10px"
                borderRadius="4px"
              >
                {stat.value}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius={4}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Customer Traffic Drivers
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
          borderRadius={4}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
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

export default Dashboard;
