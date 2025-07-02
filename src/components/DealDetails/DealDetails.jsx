import React from "react";
import SideBar from "../SideBar/SideBar";
import { Box } from "@mui/material";
import DealSummary from "../CRMComponents/DealSummary";
import DealDetailsHeader from "../CRMComponents/DealDetailsHeader";

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
        {/* deal summary / ai gen follow up  missing info */}
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
          <DealSummary />
        </Box>
      </Box>
    </>
  );
}

export default DealDetails;
