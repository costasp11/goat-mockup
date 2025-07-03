import React from "react";
import SideBar from "../SideBar/SideBar";
import { Box } from "@mui/material";
import DealSummary from "../CRMComponents/DealSummary";
import DealDetailsHeader from "../CRMComponents/DealDetailsHeader";
import InsightsCard from "../CRMComponents/InsightsCard";

function DealDetails() {
  return (
    <>
      {/* page-container ] */}

      <Box
        className="deal-details-page"
        sx={{
          minHeight: "100vh",
          display: "flex", // Arrange children (SideBar and main content) in a row
          flexDirection: "row",
          backgroundColor: "background.default",
          width: "100%", // Ensure it takes full width
        }}
      >
        <SideBar /> {/* The sidebar component */}
        {/* full container of content*/}
        <Box
          className="deal-details-content"
          sx={{
            display: "flex",
            flexDirection: "column", // Arrange header, cards, and data in a column
            flexGrow: 1, // Allow this column to take up remaining horizontal space
            gap: 2,
            margin: "75px",
          }}
        >
          {/* Header of page */}
          <DealDetailsHeader />
          {/* Container with left 3 cards */}
          <Box
            className="deal-details-left-cards"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "65%",
            }}
          >
            <DealSummary />
            <InsightsCard />
            {/* <AI generated followup/> */}
            {/* <MissingInfo/> */}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DealDetails;
