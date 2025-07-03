import React from "react";
import { Box, Button, Typography, Chip, Link } from "@mui/material";

function DealDetailsHeader() {
  return (
    <>
      <Box
        className="deal-details-header"
        sx={{
          display: "flex",
          padding: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Link href="#" underline="none">
            <Typography
              variant="body6"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              Back to Dashboard
            </Typography>
          </Link>
          <Typography
            variant="h5"
            sx={{ color: "text.primary", fontWeight: "bold" }}
            marginTop={1}
          >
            Enterprise SaaS Platform - Acme Corp
          </Typography>
        </div>
        <div>
          <Chip
            label="High Risk"
            size="small"
            sx={{
              backgroundColor: "rgba(211, 47, 47, 0.1)", // Red background with low opacity
              color: "error.main", // Full opacity red text
              fontWeight: "medium",
              marginRight: 2,
              border: "1px solid rgba(211, 47, 47, 0.2)", // Optional: subtle border
            }}
          />

          <Button variant="contained" size="small" sx={{ fontWeight: "bold" }}>
            Send Follow Up
          </Button>
        </div>
      </Box>
    </>
  );
}

export default DealDetailsHeader;
