import { Container, Box, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import MultiFileAttachment from "./MultiFileAttachment";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useGetDraftQuery, useSaveDraftMutation } from "../redux/apiSlice";
import RichTextEditor from "./RichTextEditor";
type MailcontentProps = {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

const Mailcontent: React.FC<MailcontentProps> = ({ files, setFiles }) => {
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const [edit, setEdit] = useState<boolean>(false);
  const { data } = useGetDraftQuery();
  const [saveDraft] = useSaveDraftMutation();

  useEffect(() => {
    if (data?.draft) {
      setSubject(data.draft.subject || "");
      setBody(data.draft.body || "");
    }
  }, [data]);

  const handleUpdate = async () => {
    try {
      // If currently in view mode → just enable edit
      if (!edit) {
        setEdit(true);
        return;
      }

      // If currently editing → save draft
      await saveDraft({ subject, body }).unwrap();
      setEdit(false);
    } catch (error) {
      console.error("Failed to save draft", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column" }}>
      {/* Edit / Save button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {edit ? (
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={handleUpdate}>
              <SaveAsIcon />
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={handleUpdate}>
              <EditIcon />
            </Button>
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          label="Subject"
          fullWidth
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={!edit}
        />

        {/* <TextField
          label="Body"
          placeholder="Type your message here..."
          multiline
          fullWidth
          rows={17}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          disabled={!edit}
          sx={{
            "& .MuiInputBase-root": { alignItems: "flex-start" },
            "& textarea": { overflowY: "auto" },
          }}
        /> */}
        <RichTextEditor value={body} onChange={setBody} editable={edit} />

        <MultiFileAttachment
          files={files}
          onChange={setFiles}
          disabled={!edit}
          maxFileSizeInBytes={5 * 1024 * 1024}
          maxFiles={6}
        />
      </Box>
    </Container>
  );
};

export default Mailcontent;
