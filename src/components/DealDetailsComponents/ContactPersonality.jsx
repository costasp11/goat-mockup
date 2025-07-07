import React from "react";
import ContactPersonalityCards from "./ContactPersonalityCards";
import { Box, Card, CardHeader, Typography, Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function ContactPersonality({communicationStyle, responseTime, decisionMaking, objectionStyle}) {
  return (
    <Card
      sx={{
        padding: 2,
        boxShadow: 5,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {/* card header */}
      <Box className="card-header" sx={{ display: "flex" }}>
        <CardHeader
          avatar={<PersonIcon color="primary" />}
          title="Contact Personality"
          subheader="View personality traits and communication preferences for this contact"
        />
      </Box>
      {/* CARD CONTENT CONTAINER*/}
      <Box
        className="card-content"
        sx={{ display: "flex", flexDirection: "column", marginLeft: 5, gap: 2, mariginBotton: 3}}
      >
        {/* INDIVIDUAL CARD */}
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", marginLeft: 2, fontSize: 15 }}
          >
            Communication Style
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              marginLeft: 2,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 0.5,
              marginBottom: 1,
            }}
          >
            Direct & Analytical
            {/* TODO - {communicationStyle} */}
          </Typography>
          <Divider variant="" />
        </Box>
                <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", marginLeft: 2, fontSize: 15 }}
          >
           Response Time
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              marginLeft: 2,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 0.5,
              marginBottom: 1,
            }}
          >
            Within 2-4 hours
            {/* TODO - {communicationStyle} */}
          </Typography>
          <Divider variant="" />
        </Box>
                <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", marginLeft: 2, fontSize: 15 }}
          >
            Decision Making
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              marginLeft: 2,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 0.5,
              marginBottom: 1,
            }}
          >
            Data Driven, consensus-seeking
            {/* TODO - {communicationStyle} */}
          </Typography>
          <Divider variant="" />
        </Box>
                <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", marginLeft: 2, fontSize: 15 }}
          >
            Objection Style
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              marginLeft: 2,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 0.5,
              marginBottom: 9.5,
            }}
          >
           Price-focused, ROI-conscious
            {/* TODO - {communicationStyle} */}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default ContactPersonality;
