import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  Paper,
  IconButton,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ImageIcon from "@mui/icons-material/Image";

type FilePreview = {
  id: string; // unique id for list rendering
  file: File;
  previewUrl?: string; // for images only
};

interface MultiFileAttachmentProps {
  onChange?: (files: File[]) => void;
  accept?: string; // default will accept images and pdf
  maxFileSizeInBytes?: number; // optional single file size limit
  maxFiles?: number; // optional total files limit
}

const DEFAULT_ACCEPT = "image/*,application/pdf";

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const truncate = (name: string, limit = 10) => {
  const dotIndex = name.lastIndexOf(".");
  if (dotIndex === -1) {
    return name.length > limit ? name.slice(0, limit) + "..." : name;
  }
  const base = name.slice(0, dotIndex);
  const ext = name.slice(dotIndex);
  const truncatedBase =
    base.length > limit ? base.slice(0, limit) + "..." : base;
  return `${truncatedBase}${ext}`;
};

const MultiFileAttachment: React.FC<MultiFileAttachmentProps> = ({
  onChange,
  accept = DEFAULT_ACCEPT,
  maxFileSizeInBytes,
  maxFiles,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<FilePreview[]>([]);
  const [error, setError] = useState<string | null>(null);

  // clean up object URLs on unmount
  useEffect(() => {
    return () => {
      files.forEach((f) => f.previewUrl && URL.revokeObjectURL(f.previewUrl));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilesSelected = (selected: FileList | null) => {
    setError(null);
    if (!selected) return;

    const selectedArr = Array.from(selected);

    // enforce maxFiles
    if (maxFiles && files.length + selectedArr.length > maxFiles) {
      setError(`You can attach a maximum of ${maxFiles} file(s).`);
      return;
    }

    const newPreviews: FilePreview[] = [];
    for (const file of selectedArr) {
      // check type
      const isImage = file.type.startsWith("image/");
      const isPdf = file.type === "application/pdf";
      if (!isImage && !isPdf) {
        setError("Only images and PDFs are allowed.");
        continue;
      }

      // size limit per file
      if (maxFileSizeInBytes && file.size > maxFileSizeInBytes) {
        setError(`"${file.name}" exceeds the size limit.`);
        continue;
      }

      const id = `${file.name}-${file.size}-${Date.now() + Math.random()}`;
      const previewUrl = isImage ? URL.createObjectURL(file) : undefined;
      newPreviews.push({ id, file, previewUrl });
    }

    if (newPreviews.length === 0) return;

    const updated = [...files, ...newPreviews];
    setFiles(updated);
    onChange?.(updated.map((p) => p.file));
  };

  const handleRemove = (id: string) => {
    const toRemove = files.find((f) => f.id === id);
    if (toRemove?.previewUrl) URL.revokeObjectURL(toRemove.previewUrl);
    const updated = files.filter((f) => f.id !== id);
    setFiles(updated);
    onChange?.(updated.map((p) => p.file));
  };

  const onButtonClick = () => inputRef.current?.click();

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "space-between",
      }}
    >
      <Box>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          style={{ display: "none" }}
          onChange={(e) => {
            handleFilesSelected(e.target.files);
            // reset input so same file can be reselected if removed
            if (inputRef.current) inputRef.current.value = "";
          }}
        />

        <Button
          variant="contained"
          startIcon={<AttachFileIcon />}
          onClick={onButtonClick}
        >
          Attach Files
        </Button>
      </Box>

      {/* {error && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )} */}

      {/* Preview Grid */}
      <Grid
        container
        spacing={1}
        sx={{ height: "100px", overflow: "auto", width: "70%" }}
      >
        {files.map((f) => {
          const isImage = f.file.type.startsWith("image/");
          return (
            // <Grid item key={f.id} xs={12} sm={6} md={4}>
            <Box key={f.id}>
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  gap: 1,
                  p: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ height: "30px" }}
                >
                  {/* thumbnail or icon */}
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 1,
                      overflow: "hidden",
                      bgcolor: "background.default",
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    {isImage && f.previewUrl ? (
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img
                        src={f.previewUrl}
                        alt={f.file.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : f.file.type === "application/pdf" ? (
                      <PictureAsPdfIcon fontSize="large" />
                    ) : (
                      <ImageIcon />
                    )}
                  </Box>

                  <Box>
                    <Typography>{truncate(f.file.name, 10)}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {formatSize(f.file.size)}
                    </Typography>
                  </Box>
                </Stack>

                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleRemove(f.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Paper>
            </Box>
            // </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MultiFileAttachment;
