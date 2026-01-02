import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
  editable: boolean;
};

const RichTextEditor: React.FC<Props> = ({ value, onChange, editable }) => {
  const editor = useEditor({
    content: value,
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      TextStyle,
      Color,
    ],
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  // 🔄 sync external value (draft load)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  // 🔒 toggle edit / view mode
  useEffect(() => {
    if (editor) {
      editor.setEditable(editable);
    }
  }, [editable, editor]);

  if (!editor) return null;

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: editable ? "grey.400" : "grey.300",
        borderRadius: 1,
        backgroundColor: editable ? "background.default" : "background.paper",
        transition: "border-color 0.2s",
      }}
    >
      {/* Toolbar */}
      {editable && (
        <Box
          sx={{
            display: "flex",
            gap: 1,
            px: 1,
            py: 0.5,
            borderBottom: "1px solid #ddd",
            backgroundColor: "background.paper",
          }}
        >
          <Button
            size="small"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            B
          </Button>
          <Button
            size="small"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            I
          </Button>
          <Button
            size="small"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            • List
          </Button>
          <Button
            size="small"
            onClick={() => {
              const url = prompt("Enter link");
              if (url) editor.chain().focus().setLink({ href: url }).run();
            }}
          >
            Link
          </Button>
        </Box>
      )}

      {/* Editor body */}
      <Box
        sx={{
          height: "380px", // 🔥 same feel as rows={17}
          overflowY: "auto", // 🔥 internal scroll
          px: 1.5,
          py: 1,
          cursor: editable ? "text" : "default",

          "& .ProseMirror": {
            outline: "none",
            minHeight: "100%",
          },

          "& .ProseMirror p": {
            margin: "0 0 0.75rem 0",
          },
        }}
      >
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
};

export default RichTextEditor;
