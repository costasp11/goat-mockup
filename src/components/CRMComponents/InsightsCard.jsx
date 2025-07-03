import { Typography, Box, Card, TextField, Button, Chip } from "@mui/material";
import React from "react";

function InsightsCard() {
  return (
    <>
      {/* Insights card */}
      <Card
        className="insights-card"
        sx={{
          padding: 3,
          boxShadow: 5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "#",
        }}
      >
        {/* Card Header */}
        <Box className="card-header" sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              mb: 1,
            }}
          >
            AI-Generated Follow Up
          </Typography>
          <Chip
            label="Smart Draft"
            size="small"
            color="primary"
            sx={{ opacity: 0.8 }}
          />
        </Box>

        {/* Card Content -> Text Field */}
        <Box className="card-content" sx={{ mb: 3 }}>
          <TextField
            multiline
            rows={8}
            variant="outlined"
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "background.paper",
              },
            }}
          />
        </Box>

        {/* Footer with tone indicator and buttons */}
        <Box
          className="card-footer"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 2,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Tone:
            </Typography>
            <Chip
              sx={{
                backgroundColor: "rgba(76, 175, 80, 0.1)", // Light green background
                color: "success.main", // Full opacity green text
                fontWeight: "medium",
              }}
              label="Professional & Solution-focused"
              size="small"
              variant="outlined"
            />
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="outlined" size="small">
              Regenerate
            </Button>
            <Button variant="contained" size="small">
              Use Draft
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default InsightsCard;
