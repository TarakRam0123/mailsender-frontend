import { useRef, useState } from "react";
import {
  Box,
  Button,
  Paper,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ImageIcon from "@mui/icons-material/Image";

interface Props {
  files: File[];
  onChange: (files: File[]) => void;
  disabled?: boolean;
  accept?: string;
  maxFileSizeInBytes?: number;
  maxFiles?: number;
}

const DEFAULT_ACCEPT = "image/*,application/pdf";

const MultiFileAttachment: React.FC<Props> = ({
  files,
  onChange,
  disabled = false,
  accept = DEFAULT_ACCEPT,
  maxFileSizeInBytes,
  maxFiles,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");

  const formatSize = (bytes: number) =>
    bytes < 1024
      ? `${bytes} B`
      : bytes < 1024 * 1024
      ? `${(bytes / 1024).toFixed(1)} KB`
      : `${(bytes / 1024 / 1024).toFixed(2)} MB`;

  const handleFiles = (list: FileList | null) => {
    if (!list) return;

    const selected = Array.from(list);

    if (maxFiles && files.length + selected.length > maxFiles) {
      return setError(`Max ${maxFiles} files allowed`);
    }

    const valid = selected.filter((file) => {
      const validType =
        file.type.startsWith("image/") || file.type === "application/pdf";
      const validSize = !maxFileSizeInBytes || file.size <= maxFileSizeInBytes;
      return validType && validSize;
    });

    setError("");
    onChange([...files, ...valid]);
  };

  const removeFile = (index: number) =>
    onChange(files.filter((_, i) => i !== index));

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {/* Upload Button */}
      <Box>
        <input
          ref={inputRef}
          type="file"
          hidden
          multiple
          accept={accept}
          onChange={(e) => {
            handleFiles(e.target.files);
            if (inputRef.current) inputRef.current.value = "";
          }}
        />

        <Button
          variant="contained"
          startIcon={<AttachFileIcon />}
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
        >
          Attach Files
        </Button>

        {error && (
          <Typography color="error" variant="caption">
            {error}
          </Typography>
        )}
      </Box>

      {/* Preview */}
      <Grid container spacing={1} sx={{ maxHeight: 100, overflow: "auto" }}>
        {files.map((file, index) => (
          <Grid item key={`${file.name}-${index}`}>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 1,
              }}
            >
              {file.type.startsWith("image/") ? (
                <ImageIcon />
              ) : (
                <PictureAsPdfIcon />
              )}

              <Box>
                <Typography noWrap maxWidth={120}>
                  {file.name}
                </Typography>
                <Typography variant="caption">
                  {formatSize(file.size)}
                </Typography>
              </Box>

              {!disabled && (
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => removeFile(index)}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MultiFileAttachment;
