import { Typography, Box } from "@mui/material";
import { useGetPreviousMailsQuery } from "../redux/apiSlice";
import { useMemo, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import MailCard from "./MailCard";
import PageLoader from "../routes/PageLoader";

const CARD_HEIGHT = 80;

const Output = () => {
  const { data, isLoading } = useGetPreviousMailsQuery();
  const parentRef = useRef<HTMLDivElement>(null);

  const sortedMails = useMemo(() => {
    return [...(data?.previousTo ?? [])].sort(
      (a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime()
    );
  }, [data?.previousTo]);

  const rowVirtualizer = useVirtualizer({
    count: sortedMails.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => CARD_HEIGHT,
    overscan: 5,
  });

  return (
    <Box
      ref={parentRef}
      sx={{
        height: "77%",
        p: 2,
        overflowY: "auto", // 🔥 outer box is the scroller
        border: 1,
        borderColor: "grey.400",
        borderRadius: 1,
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h6" gutterBottom color="primary.main">
        Sent Mails
      </Typography>

      {isLoading && <PageLoader />}

      {!isLoading && sortedMails.length > 0 ? (
        <Box
          sx={{
            height: rowVirtualizer.getTotalSize(),
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const item = sortedMails[virtualRow.index];

            return (
              <Box
                key={virtualRow.key}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <MailCard email={item.email} sentAt={item.sentAt} />
              </Box>
            );
          })}
        </Box>
      ) : (
        !isLoading && (
          <Typography variant="body2" color="text.secondary">
            No sent mails available
          </Typography>
        )
      )}
    </Box>
  );
};

export default Output;
