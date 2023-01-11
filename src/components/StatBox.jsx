import { Box, Typography } from "@mui/material";

const StatBox = ({ title, subtitle, icon }) => {

  return (
    <Box width="100%" m="20px 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "white" }}
          >
            {title}
          </Typography> 
        </Box>
        <Box>
        {icon}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" gap='12px' mt="2px">
        <Typography variant="h5" sx={{ color: "white" }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
