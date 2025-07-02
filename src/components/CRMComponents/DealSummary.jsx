import React from "react";
import { Box, Card, Typography, Grid, Divider, Chip } from "@mui/material";
import { green } from "@mui/material/colors";

function DealSummary() {
  return (
    <>
      <Card sx={{ padding: 2 }}>
        {/* card header */}
        <Box className="card-header" sx={{ display: "flex" }}>
          <Typography variant="h5" sx={{ padding: 2, color: "text.primary" }}>
            Deal Summary
          </Typography>
        </Box>

        {/* card content */}
        <Box className="card-content" sx={{ padding: 2, flexGrow: 1 }}>
          <Grid container spacing={2}>
            {/* Top row - 4 equal columns */}
            <Grid size={3}>
              <Typography variant="h6" color="text.secondary" fontWeight="bold" mb={0.3}>
                Value
              </Typography>
              <Typography variant="h5" sx={{ color: green[300] }}>
                $125,000
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={"bold"}
                mb={0.6}
              >
                Stage
              </Typography>
              <Chip
                label="Negotiation"
                size="small"
                sx={{
                  backgroundColor: "primary",
                  color: "",
                  fontWeight: "medium",
                }}
              />{" "}
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={"bold"}
                mb ={0.6}
              >
                Close Date
              </Typography>
              <Typography variant="body1" fontWeight="bold" color="text.secondary">2024-01-15</Typography>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={"bold"}
                mb={0.6}
              >
                Days Left
              </Typography>
              <Typography variant="h6" color="orange" fontWeight="bold" >12 days</Typography>
            </Grid>

            {/* Divider - full width (12) */}
            <Grid size={12} sx={{ my: 1 }}>
              <Divider variant="" />
            </Grid>

            {/* Bottom row - 2 equal columns */}
            <Grid size={6}>
              <Typography
                variant="h6"
                color="text.primary"
                fontWeight={"bold"}
                mb={0.6}
              >
                Company
              </Typography>
              <Typography variant="body1"  color="text.secondary">Acme Corp</Typography>
            </Grid>
            <Grid size={6}>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={"bold"}
                mb={0.6}
              >
                Primary Contact
              </Typography>
              <Typography variant="body1">John Smith</Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
}

export default DealSummary;
