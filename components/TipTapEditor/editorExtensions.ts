import Heading from "@tiptap/extension-heading"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Underline from "@tiptap/extension-underline"
import { Color } from "@tiptap/extension-color"
import FontFamily from "@tiptap/extension-font-family"
import FontSize from "@tiptap/extension-font-size"
import TextHighlight from "@tiptap/extension-highlight"

export const editorExtensions = [
  Heading.configure({
    levels: [1, 2, 3, 4, 5, 6],
  }),
  Image.configure({
    HTMLAttributes: {
      class: "max-w-full h-auto",
    },
  }),
  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      class: "text-primary underline",
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Color.configure({
    types: ["textStyle"],
  }),
  TextStyle,
  Underline,
  FontFamily.configure({
    types: ["textStyle"],
  }),
  FontSize.configure({
    types: ["textStyle"],
  }),
  TextHighlight.configure({
    multicolor: true,
  }),
]
