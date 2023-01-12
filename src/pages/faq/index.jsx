import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.darkBlueAccent[500]} variant="h5">
          How does your agency promote sustainable travel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our agency is committed to promoting sustainable travel practices. We work closely with hotels and tour operators that follow sustainable business practices, and we encourage our clients to make conscious, environmentally-friendly choices during their trips.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.darkBlueAccent[500]} variant="h5">
          Are there any eco-friendly options for transportation during my trip?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we offer a variety of eco-friendly transportation options such as electric cars or public transportation when possible. We also can recommend low impact activities like cycling or hiking tours.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.darkBlueAccent[500]} variant="h5">
          Can I offset the carbon emissions from my flight through your agency?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we provide an option to offset the carbon emissions from your flight through carbon offsetting programs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.darkBlueAccent[500]} variant="h5">
          How can I minimize my environmental impact while on my trip?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We can provide you with tips on how to minimize your environmental impact while on your trip, such as using public transportation, eating at locally-owned restaurants, and choosing activities that minimize impact on the environment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.darkBlueAccent[500]} variant="h5">
          What is your agency's policy on plastic waste and pollution?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We actively work to reduce single-use plastic waste in our operations and promote use of reusable items and biodegradable alternatives in travel. We also suggest our clients to bring their own refillable water bottle and follow local guidelines for pollution prevention and waste management during the trip.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
