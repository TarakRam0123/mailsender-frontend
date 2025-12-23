import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  TextField,
  Badge,
  Divider,
  Paper,
  useTheme,
} from "@mui/material";

interface ChatUser {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread?: number;
}

interface Message {
  id: number;
  sender: "me" | "other";
  text?: string;
  time: string;
}

const Messages: React.FC = () => {
  const theme = useTheme();
  const bottomRef = useRef<HTMLDivElement>(null);

  const users: ChatUser[] = [
    {
      id: 1,
      name: "Taraka Ram Anna TechU",
      lastMessage: "https://azmovies...",
      time: "Tue",
      unread: 1,
    },
    {
      id: 2,
      name: "Anupama Parameswaran",
      lastMessage: "Namaste React course",
      time: "Wed",
      unread: 3,
    },
    {
      id: 1,
      name: "Taraka Ram Anna TechU",
      lastMessage: "https://azmovies...",
      time: "Tue",
      unread: 1,
    },
    {
      id: 2,
      name: "Anupama Parameswaran",
      lastMessage: "Namaste React course",
      time: "Wed",
      unread: 3,
    },
    {
      id: 1,
      name: "Taraka Ram Anna TechU",
      lastMessage: "https://azmovies...",
      time: "Tue",
      unread: 1,
    },
    {
      id: 2,
      name: "Anupama Parameswaran",
      lastMessage: "Namaste React course",
      time: "Wed",
      unread: 3,
    },
    {
      id: 1,
      name: "Taraka Ram Anna TechU",
      lastMessage: "https://azmovies...",
      time: "Tue",
      unread: 1,
    },
    {
      id: 2,
      name: "Anupama Parameswaran",
      lastMessage: "Namaste React course",
      time: "Wed",
      unread: 3,
    },
  ];

  const [activeUser, setActiveUser] = useState(users[0]);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "me", text: "Hello!", time: "06:25 PM" },
    { id: 2, sender: "other", text: "Hi!", time: "06:26 PM" },
    { id: 1, sender: "me", text: "Hello!", time: "06:25 PM" },
    { id: 2, sender: "other", text: "Hi!", time: "06:26 PM" },
    { id: 1, sender: "me", text: "Hello!", time: "06:25 PM" },
    { id: 2, sender: "other", text: "Hi!", time: "06:26 PM" },
    { id: 1, sender: "me", text: "Hello!", time: "06:25 PM" },
    { id: 2, sender: "other", text: "Hi!", time: "06:26 PM" },
    { id: 1, sender: "me", text: "Hello!", time: "06:25 PM" },
    { id: 2, sender: "other", text: "Hi!", time: "06:26 PM" },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "me",
        text: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box display="flex" height="84vh" bgcolor="background.default">
      {/* LEFT SIDEBAR */}
      <Box width={400} bgcolor="background.paper">
        <Box p={2}>
          <TextField
            fullWidth
            placeholder="Search"
            size="small"
            InputProps={{
              sx: {
                bgcolor: theme.palette.background.default,
              },
            }}
          />
        </Box>
        <Box
          sx={{
            height: "70vh",
            overflow: "auto",
          }}
        >
          <List>
            {users.map((user) => (
              <React.Fragment key={user.id}>
                <ListItemButton
                  selected={activeUser.id === user.id}
                  onClick={() => setActiveUser(user)}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      {user.name[0]}
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    primary={user.name}
                    secondary={user.lastMessage}
                  />

                  <Box textAlign="right">
                    <Typography fontSize={12}>{user.time}</Typography>
                    {user.unread && (
                      <Badge badgeContent={user.unread} color="secondary" />
                    )}
                  </Box>
                </ListItemButton>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Box>

      {/* RIGHT CHAT */}
      <Box flex={1} display="flex" flexDirection="column">
        {/* Header */}
        <Box
          p={2}
          bgcolor="background.paper"
          display="flex"
          alignItems="center"
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              {activeUser.name[0]}
            </Avatar>
          </ListItemAvatar>
          <Typography fontWeight={600} color="text.primary">
            {activeUser.name}
          </Typography>
        </Box>

        {/* Messages */}
        <Box
          flex={1}
          p={2}
          display="flex"
          flexDirection="column"
          gap={1}
          overflow="auto"
        >
          {messages.map((msg) => (
            <Paper
              key={msg.id}
              sx={{
                maxWidth: "60%",
                p: 1.5,
                bgcolor:
                  msg.sender === "me"
                    ? theme.palette.primary.main
                    : theme.palette.background.paper,
                color:
                  msg.sender === "me" ? "#fff" : theme.palette.text.primary,
                alignSelf: msg.sender === "me" ? "flex-end" : "flex-start",
              }}
            >
              <Typography>{msg.text}</Typography>
              <Typography fontSize={11} textAlign="right">
                {msg.time}
              </Typography>
            </Paper>
          ))}
          <div ref={bottomRef} />
        </Box>

        {/* Input */}
        <Box p={2} bgcolor="background.paper">
          <TextField
            fullWidth
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Messages;
