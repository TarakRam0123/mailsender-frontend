import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

type MailCardProps = {
  email: string;
  sentAt: string;
};

const MailCard = ({ email, sentAt }: MailCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        transition: "0.2s",
        "&:hover": {
          boxShadow: 3,
          borderColor: "primary.main",
        },
      }}
    >
      <CardContent sx={{ py: 1.5, "&:last-child": { pb: 1.5 } }}>
        <Typography variant="subtitle2" color="primary.main" noWrap>
          {email}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {new Date(sentAt).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(MailCard);
