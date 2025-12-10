import {
  Box,
  Typography,
  // Stack,
  Chip,
  Container,
  Paper,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
// import React from "react";
import hero from "../assets/hero2.jpg";
import SendIcon from "@mui/icons-material/Send";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import RefreshIcon from "@mui/icons-material/Refresh";
import BlockIcon from "@mui/icons-material/Block";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MailIcon from "@mui/icons-material/Mail";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AttachFileIcon from "@mui/icons-material/AttachFile";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
// import CreateIcon from "@mui/icons-material/Create";
// import EventIcon from "@mui/icons-material/Event";
// import CampaignIcon from "@mui/icons-material/Campaign";
// import PersonIcon from "@mui/icons-material/Person";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import ArticleIcon from "@mui/icons-material/Article";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import UpdateIcon from "@mui/icons-material/Update";
// import GroupsIcon from "@mui/icons-material/Groups";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import SettingsIcon from "@mui/icons-material/Settings";
// import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LanguageIcon from "@mui/icons-material/Language";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PublicIcon from "@mui/icons-material/Public";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WorkIcon from "@mui/icons-material/Work";
import StoreIcon from "@mui/icons-material/Store";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Welcome = () => {
  const cards = [
    {
      type: "Small Businesses",
      use: "Customer communication & marketing",
      count: "5,000+",
      icon: <StoreIcon />,
    },
    {
      type: "Educational",
      use: "School announcements & parent updates",
      count: "2,500+",
      icon: <SchoolIcon />,
    },
    {
      type: "Freelancers",
      use: "Client outreach & proposals",
      count: "10,000+",
      icon: <WorkIcon />,
    },
    {
      type: "Enterprises",
      use: "Internal communications & updates",
      count: "500+",
      icon: <BusinessCenterIcon />,
    },
  ];
  return (
    <Box sx={{ minHeight: "100vh", overflowY: "auto" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
      url(${hero})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          color: "white",
          px: { xs: 2, md: 4 },
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          animation: "fadeIn 1s ease-in",
          "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, rgba(255, 255, 255, 0) 50%)",
            animation: "pulse 15s infinite alternate",
            "@keyframes pulse": {
              "0%, 100%": { opacity: 0.3 },
              "50%": { opacity: 0.6 },
            },
          }}
        />

        <Box
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            position: "relative",
            zIndex: 2,
            animation: "slideUp 0.8s ease-out",
            "@keyframes slideUp": {
              from: { transform: "translateY(30px)", opacity: 0 },
              to: { transform: "translateY(0)", opacity: 1 },
            },
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "2.8rem", md: "4rem", lg: "4.5rem" },
              mb: 3,
              textShadow: "2px 2px 12px rgba(0,0,0,0.5)",
              letterSpacing: { xs: "0.5px", md: "1.5px" },
              background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              lineHeight: 1.2,
            }}
          >
            Welcome to MailSender
          </Typography>

          <Typography
            variant="h4"
            sx={{
              width: { xs: "100%", md: "85%", lg: "70%" },
              mx: "auto",
              mb: 8,
              fontWeight: 400,
              lineHeight: 1.8,
              textShadow: "1px 1px 6px rgba(0,0,0,0.4)",
              fontSize: { xs: "1.25rem", md: "1.6rem" },
              px: { xs: 1, md: 0 },
              color: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(2px)",
            }}
          >
            A smart, secure, and scalable bulk mailing application that empowers
            individuals, startups, and businesses to communicate faster and
            smarter without any technical complexity.
          </Typography>
          {/* Stats Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 3, md: 6 },
              mt: 10,
              flexWrap: "wrap",
            }}
          >
            {[
              { number: "10K+", label: "Happy Users" },
              { number: "99.9%", label: "Delivery Rate" },
              { number: "24/7", label: "Support" },
              { number: "50+", label: "Integrations" },
            ].map((stat, index) => (
              <Box
                key={stat.label}
                sx={{
                  textAlign: "center",
                  animation: `fadeIn 0.5s ease-out ${index * 0.1 + 0.5}s both`,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/*---------------------------------------------------------------------------------------*/}
      {/* SECTION - BULK SEND */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 3, md: 4 },
          backgroundColor: "#f8fafc",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md">
          {/* Decorative background element */}
          <Box
            sx={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: "50%",
              backgroundColor: "rgba(33, 150, 243, 0.05)",
              zIndex: 0,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <SendIcon
                sx={{
                  fontSize: 68,
                  color: "primary.main",
                  mb: 2,
                }}
              />
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                textAlign: "center",
                mb: 4,
                color: "text.primary",
              }}
            >
              Bulk Email Delivery
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "text.secondary",
                textAlign: "center",
                mb: 4,
                px: { xs: 0, md: 2 },
              }}
            >
              MailSender revolutionizes email delivery by allowing you to send
              personalized or standardized messages to multiple recipients in a
              single attempt. Whether it is a promotional campaign, client
              notification, classroom announcements, or large-scale
              communication – MailSender ensures your message reaches the right
              audience instantly.
            </Typography>

            {/*feature highlights */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3,
                mt: 5,
              }}
            >
              {[
                "Personalization",
                "Instant Delivery",
                "Scalability",
                "No Coding",
              ].map((feature) => (
                <Chip
                  key={feature}
                  label={feature}
                  sx={{
                    backgroundColor: "text.secondary",
                    border: "1px solid",
                    borderColor: "divider",
                    fontWeight: 500,
                    px: 2,
                    py: 1.5,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      {/*---------------------------------------------------------------------------------------*/}
      {/* SECTION - OAUTH SECURITY */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 3, md: 4 },
          background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <SecurityIcon
                sx={{
                  fontSize: 56,
                  color: "primary.main",
                  mb: 2,
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "text.primary",
                }}
              >
                Secure OAuth2 Authentication
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "text.secondary",
                textAlign: "center",
                mb: 6,
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              Experience seamless integration with Gmail, Outlook, and Zoho —
              without needing outdated App Passwords. Using modern OAuth2
              authentication, MailSender enhances security and removes
              dependency on static credentials that can be compromised.
            </Typography>

            {/* Provider Logos */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 3, md: 6 },
                mb: 4,
              }}
            >
              {[
                { name: "Gmail", color: "#EA4335", icon: <MailOutlineIcon /> },
                { name: "Outlook", color: "#0078D4", icon: <MicrosoftIcon /> },
                { name: "Zoho", color: "#ED1C24", icon: <MailIcon /> },
              ].map((provider) => (
                <Paper
                  key={provider.name}
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    minWidth: { xs: 140, md: 160 },
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <Box sx={{ color: provider.color }}>{provider.icon}</Box>
                  <Typography variant="h6" fontWeight={600}>
                    {provider.name}
                  </Typography>
                </Paper>
              ))}
            </Box>

            {/* Security Features */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3,
                mt: 6,
              }}
            >
              {[
                { label: "No Passwords Stored", icon: <LockIcon /> },
                { label: "Encrypted Tokens", icon: <VpnKeyIcon /> },
                { label: "Auto Refresh", icon: <RefreshIcon /> },
                { label: "Revoke Access Anytime", icon: <BlockIcon /> },
              ].map((feature) => (
                <Chip
                  key={feature.label}
                  icon={feature.icon}
                  label={feature.label}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid",
                    borderColor: "rgba(33, 150, 243, 0.2)",
                    fontWeight: 500,
                    px: 2,
                    py: 2,
                    fontSize: "0.95rem",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      {/*---------------------------------------------------------------------------------------*/}
      {/* SECTION - ATTACHMENTS */}
      <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 4 } }}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              backgroundColor: "white",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <AttachFileIcon
                sx={{
                  fontSize: 48,
                  color: "primary.main",
                  mb: 2,
                }}
              />
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "text.primary",
              }}
            >
              Bulk File Attachments Made Simple
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "text.secondary",
                mb: 4,
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              Need to attach one file? Ten files? No problem. MailSender
              supports bulk file attachments with ease and maintains speed and
              reliability throughout delivery.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
                mb: 4,
              }}
            >
              {["PDF", "DOC", "XLS", "Images", "ZIP"].map((type) => (
                <Chip
                  key={type}
                  label={type}
                  sx={{
                    backgroundColor: "primary.light",
                    color: "primary.dark",
                    fontWeight: 500,
                    px: 3,
                    py: 1,
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Container>
      </Box>
      {/*---------------------------------------------------------------------------------------*/}
      {/* SECTION - WHO USES */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 4 },
          background: "linear-gradient(135deg, #f8fafc 0%, #e8f4f8 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "text.primary",
                fontSize: { xs: "2.2rem", md: "2.8rem" },
              }}
            >
              Trusted by Diverse Teams
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                lineHeight: 1.6,
              }}
            >
              From students to enterprises, MailSender adapts to your
              communication needs
            </Typography>
          </Box>

          {/* User Categories */}
          <Box sx={{ mb: 10 }}>
            <Grid
              container
              spacing={4}
              display={"flex"}
              justifyContent={"center"}
            >
              {cards.map((category, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Box
                    sx={{
                      p: 4,
                      backgroundColor: "white",
                      borderRadius: 3,
                      textAlign: "center",
                      height: "100%",
                      maxWidth: "270px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        backgroundColor: "primary.light",
                        color: "primary.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                      }}
                    >
                      {category.icon}
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: "text.primary",
                      }}
                    >
                      {category.count}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: "text.primary",
                      }}
                    >
                      {category.type}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.5,
                      }}
                    >
                      {category.use}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Testimonials */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              mb: 6,
              color: "text.primary",
            }}
          >
            What Our Users Say
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                name: "Sarah Chen",
                role: "Marketing Director, TechStart Inc.",
                quote:
                  "MailSender cut our email campaign setup time by 70%. The bulk sending feature is a game-changer for our weekly newsletters.",
                avatar: "SC",
              },
              {
                name: "David Rodriguez",
                role: "University Professor",
                quote:
                  "Sending assignment reminders to 200+ students used to take hours. Now it's done in minutes with personalized messages.",
                avatar: "DR",
              },
              {
                name: "Priya Sharma",
                role: "Freelance Designer",
                quote:
                  "As a freelancer, I needed a simple way to reach out to potential clients without expensive CRM tools. MailSender is perfect.",
                avatar: "PS",
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    maxWidth: "360px",
                    borderRadius: 3,
                    backgroundColor: "white",
                    border: "1px solid",
                    borderColor: "divider",
                    position: "relative",
                    "&:before": {
                      content: '"\\201C"',
                      position: "absolute",
                      top: 20,
                      left: 20,
                      fontSize: "4rem",
                      color: "primary.light",
                      fontFamily: "Georgia, serif",
                      lineHeight: 1,
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                      pt: 2,
                    }}
                  >
                    {testimonial.quote}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar sx={{ backgroundColor: "primary.main" }}>
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/*---------------------------------------------------------------------------------------*/}
      {/* SECTION - WHY MAILSENDER */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 4 },
          backgroundColor: "#f8fafc",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "text.primary",
                fontSize: { xs: "2.2rem", md: "2.8rem" },
              }}
            >
              Why MailSender Wins
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                lineHeight: 1.6,
              }}
            >
              Traditional tools demand configuration, subscriptions, plug-ins,
              or server-side setup. MailSender eliminates all these barriers.
            </Typography>
          </Box>

          {/* Timeline/Process */}
          <Box sx={{ position: "relative", mb: 8 }}>
            {/* Center Line */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                backgroundColor: "primary.light",
                transform: "translateX(-50%)",
                display: { xs: "none", md: "block" },
              }}
            />

            {/* Timeline Items */}
            {[
              {
                title: "Traditional Setup",
                description:
                  "Days of configuration, SMTP setup, server hosting required",
                time: "2-7 days",
                position: "left",
                color: "#FF5252",
              },
              {
                title: "MailSender Setup",
                description: "No technical skills needed, ready in minutes",
                time: "5 minutes",
                position: "right",
                color: "#4CAF50",
              },
              {
                title: "Traditional Cost",
                description:
                  "High upfront costs, monthly subscriptions, maintenance fees",
                position: "left",
                color: "#FF5252",
              },
              {
                title: "MailSender Cost",
                description: "Pay-per-use, no hidden fees, scalable pricing",
                position: "right",
                color: "#4CAF50",
              },
              {
                title: "Traditional Scaling",
                description: "Limited by server capacity, requires upgrades",
                position: "left",
                color: "#FF5252",
              },
              {
                title: "MailSender Scaling",
                description:
                  "Effortless scaling from 10 to 100,000+ recipients",
                position: "right",
                color: "#4CAF50",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    item.position === "left" ? "flex-start" : "flex-end",
                  mb: 6,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "45%" },
                    position: "relative",
                  }}
                >
                  {/* Connector Dot */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      [item.position === "left" ? "right" : "left"]: {
                        xs: "auto",
                        md: "-20px",
                      },
                      right: {
                        xs: "auto",
                        md: item.position === "left" ? "-20px" : "auto",
                      },
                      left: {
                        xs: "0",
                        md: item.position === "right" ? "-20px" : "auto",
                      },
                      transform: "translateY(-50%)",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: item.color,
                      zIndex: 2,
                    }}
                  />

                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      backgroundColor: "white",
                      borderRadius: 3,
                      border: "2px solid",
                      borderColor: item.color,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: item.color,
                        }}
                      >
                        {item.title}
                      </Typography>

                      {item.time && (
                        <Chip
                          label={item.time}
                          size="small"
                          sx={{
                            backgroundColor: `${item.color}20`,
                            color: item.color,
                            fontWeight: 600,
                          }}
                        />
                      )}
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            ))}
          </Box>

          {/* CTA Section */}
          <Paper
            elevation={0}
            sx={{
              p: 6,
              backgroundColor: "primary.main",
              borderRadius: 3,
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h4" fontWeight={600} mb={3}>
              Ready to Simplify Your Email Communication?
            </Typography>

            <Typography
              variant="body1"
              mb={4}
              sx={{ opacity: 0.9, maxWidth: "600px", mx: "auto" }}
            >
              Join thousands who have eliminated email complexity with
              MailSender
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            ></Box>
          </Paper>
        </Container>
      </Box>

      {/*---------------------------------------------------------------------------------------*/}
      {/* SECTION - OUR MISSION */}
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          px: { xs: 3, md: 4 },
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box
              sx={{
                width: 80,
                height: 4,
                backgroundColor: "primary.main",
                mx: "auto",
                mb: 4,
                borderRadius: 2,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontWeight: 300,
                mb: 4,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "text.primary",
                letterSpacing: "-0.5px",
              }}
            >
              Our Mission
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 300,
                maxWidth: "700px",
                mx: "auto",
                mb: 6,
                fontSize: { xs: "1.5rem", md: "1.8rem" },
                lineHeight: 1.6,
                color: "text.secondary",
                fontStyle: "italic",
              }}
            >
              To make digital communication accessible to everyone.
            </Typography>
          </Box>

          {/* Mission Statement Card */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 8 },
              backgroundColor: "#f8fafc",
              borderRadius: 2,
              borderLeft: "6px solid",
              borderLeftColor: "primary.main",
              mb: 8,
              position: "relative",
              "&:before": {
                content: '"\\201C"',
                position: "absolute",
                top: 20,
                left: 30,
                fontSize: "5rem",
                color: "primary.light",
                fontFamily: "Georgia, serif",
                lineHeight: 1,
                opacity: 0.3,
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                mb: 3,
                fontSize: { xs: "1.3rem", md: "1.6rem" },
                lineHeight: 1.8,
                color: "text.primary",
                pl: 2,
              }}
            >
              No technical restrictions, no complicated steps. Just connect,
              compose, and communicate at scale.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, pl: 2 }}>
              <Avatar sx={{ width: 56, height: 56 }}>
                <MailIcon />
              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  MailSender Team
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Founded with a vision of accessible communication
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Values */}
          <Grid container spacing={4}>
            {[
              {
                title: "Accessibility First",
                description:
                  "We believe everyone should be able to communicate effectively, regardless of technical skill.",
                icon: <PublicIcon />,
              },
              {
                title: "Simplicity by Design",
                description:
                  "Complex problems deserve simple solutions. We remove friction at every step.",
                icon: <DesignServicesIcon />,
              },
              {
                title: "User Empowerment",
                description:
                  "Our tools should amplify your capabilities, not limit them.",
                icon: <SelfImprovementIcon />,
              },
              {
                title: "Global Impact",
                description:
                  "We're building for a world where distance and technical barriers don't limit communication.",
                icon: <LanguageIcon />,
              },
            ].map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ display: "flex", gap: 3, p: 3 }}>
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "primary.light",
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {value.icon}
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: "text.primary",
                      }}
                    >
                      {value.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/*---------------------------------------------------------------------------------------*/}
      {/* SECTION - WHAT YOU CAN DO */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 4 },
          background: "primary",
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                color: "text.primary",
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3rem" },
              }}
            >
              Everything You Need in One Platform
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 300,
                color: "text.primary",
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: "1.2rem", md: "1.4rem" },
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              Discover all the powerful features that make MailSender the
              perfect choice for your email communication
            </Typography>
          </Box>

          {/* Numbered Feature Cards */}
          <Grid container spacing={4}>
            {[
              {
                number: "01",
                title: "Instant Bulk Sending",
                description:
                  "Send emails to unlimited recipients with one click",
                icon: <SendIcon />,
              },
              {
                number: "02",
                title: "Multi-File Attachments",
                description:
                  "Attach multiple files (PDF, DOC, Images) effortlessly",
                icon: <AttachFileIcon />,
              },
              {
                number: "03",
                title: "Email Provider Support",
                description: "Connect with Gmail, Outlook, and Zoho accounts",
                icon: <MailOutlineIcon />,
              },
              {
                number: "04",
                title: "Smart Content Generation",
                description: "Generate placeholder content for testing",
                icon: <AutoAwesomeIcon />,
              },
              {
                number: "05",
                title: "Test & Preview Mode",
                description: "Send test emails before mass distribution",
                icon: <VisibilityIcon />,
              },
              {
                number: "06",
                title: "Automated Workflows",
                description: "Automate repetitive communication tasks",
                icon: <AutoFixHighIcon />,
              },
              {
                number: "07",
                title: "No Manual Repetition",
                description: "Eliminate tedious copy-paste email sending",
                icon: <RestartAltIcon />,
              },
              {
                number: "08",
                title: "Scalable Architecture",
                description: "Scale from small lists to enterprise campaigns",
                icon: <TrendingUpIcon />,
              },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3,
                    maxWidth: "260px",
                    backgroundColor: "primary",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      borderColor: "rgba(255, 255, 255, 0.4)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 800,
                        mr: 2,
                        fontSize: "2.5rem",
                        opacity: 0.5,
                        lineHeight: 1,
                      }}
                    >
                      {feature.number}
                    </Typography>

                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        backgroundColor: "primary.main",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {feature.icon}
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.8,
                      lineHeight: 1.5,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/*---------------------------------------------------------------------------------------*/}
      {/* CALL TO ACTION */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 4 } }}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 8 },
              backgroundColor: "primary.main",
              borderRadius: 4,
              color: "white",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(33, 150, 243, 0.3)",
            }}
          >
            {/* Background Pattern */}
            <Box
              sx={{
                position: "absolute",
                top: -100,
                right: -100,
                width: 400,
                height: 400,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "2.2rem", md: "2.8rem" },
                }}
              >
                Start Your Email Journey Today
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 300,
                  mb: 6,
                  opacity: 0.9,
                  fontSize: { xs: "1.3rem", md: "1.6rem" },
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                To explore all features and start sending emails instantly
              </Typography>

              {/* Features Included */}
              <Box
                sx={{
                  mt: 6,
                  display: "flex",
                  justifyContent: "center",
                  gap: 4,
                  flexWrap: "wrap",
                }}
              >
                {[
                  "✓ No credit card required",
                  "✓ 100 free emails/month",
                  "✓ Full feature access",
                  "✓ 24/7 support",
                ].map((feature, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      opacity: 0.9,
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Welcome;
