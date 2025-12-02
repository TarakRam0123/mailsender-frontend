import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  Stack,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";

interface PdfAttachmentFieldProps {
  onSelect?: (file: File | null) => void;
}

const PdfAttachmentField: React.FC<PdfAttachmentFieldProps> = ({
  onSelect,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      onSelect?.(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    onSelect?.(null);
  };

  return (
    <Box sx={{ display: "flex", gap: 1}}>
      {/* Attach Button */}
      <Button
        variant="contained"
        startIcon={<AttachFileIcon />}
        onClick={() => inputRef.current?.click()}
        sx={{height:"50px"}}
      >
        Attach PDF
      </Button>

      {/* Hidden Input */}
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        style={{ display: "none" }}
        onChange={handleUpload}
      />

      {/* File Preview */}
      {file && (
        <Paper
          elevation={2}
          sx={{
           height:"30px",
            p: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width:"50%"
          }}
        >
          <Stack>
            <Typography>
              {" "}
              {file.name.length > 10
                ? file.name.slice(0, 10) + "..."
                : file.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {(file.size / 1024).toFixed(1)} KB
            </Typography>
          </Stack>

          <IconButton color="error" onClick={removeFile}>
            <DeleteIcon />
          </IconButton>
        </Paper>
      )}
    </Box>
  );
};

export default PdfAttachmentField;
