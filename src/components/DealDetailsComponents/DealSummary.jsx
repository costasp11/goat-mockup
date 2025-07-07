import React from "react";
import { AutoAwesome, Business, Person, Analytics, AttachMoney} from "@mui/icons-material";
import {
  Box,
  Card,
  Typography,
  Grid,
  Divider,
  Chip,
  CardHeader,
} from "@mui/material";
import { green } from "@mui/material/colors";

function DealSummary() {
  return (
    <>
      <Card
        sx={{
          padding: 1,
          boxShadow: 5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* card header */}
        <Box className="card-header" sx={{ display: "flex" }}>
          <CardHeader
            avatar={<AttachMoney color="primary" />}
            title="Deal Summary"
            subheader="Basic details about the deal opportunity"
          />
        </Box>

        {/* card content */}
        <Box className="card-content" sx={{ marginLeft: 3, marginBottom: 1.3, flexGrow: 1 }}>
          <Grid container spacing={2}>
            {/* Top row - 4 equal columns */}
            <Grid size={3}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Value
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#49DE80" }}>
                $125,000
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Stage
              </Typography>
              <Chip
                label="Negotiation"
                size="small"
                sx={{
                  backgroundColor: "primary",
                  fontWeight: "medium",
                }}
              />{" "}
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Close Date
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                2024-01-15
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Days Left
              </Typography>
              <Typography variant="subtitle1" color="orange">
                12 days
              </Typography>
            </Grid>

            {/* Divider - full width (12) */}
            <Grid size={12} sx={{ my: 1 }}>
              <Divider variant="" />
            </Grid>

            {/* Bottom row - 2 equal columns */}
            <Grid size={6}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Company
              </Typography>
              <Typography fontSize={15} variant="subtitle1" color="text.secondary">
                Acme Corp
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Primary Contact
              </Typography>
              <Typography fontSize={15} variant="subtitle 1" color="text.secondary">
                John Smith
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
}

export default DealSummary;
