"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import { Button } from "@/components/ui/button"
import {
  Bold,
  Italic,
  UnderlineIcon,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ChevronDown,
  ListOrdered,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TooltipProvider } from "@/components/ui/tooltip"
import type { SimplifiedEditorProps } from "./types"
import "./styles.css"

export function SimplifiedEditor({
  onUpdate,
  content = "",
  editable = true,
  placeholder = "Medium length section heading goes here",
}: SimplifiedEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: true,
        bulletList: true,
        orderedList: true,
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: content || (placeholder ? `<p>${placeholder}</p>` : ""),
    editable,
    onUpdate: ({ editor }) => {
      onUpdate?.(editor.getHTML())
    },
  })

  if (!editor) return null

  return (
    <TooltipProvider>
      <div className="simplified-editor flex flex-col rounded-lg border bg-background shadow-sm w-full">
        <div className="simplified-editor-toolbar flex items-center gap-2 border-b p-2 w-full">
          <Button
            variant="ghost"
            size="sm"
            className={cn("h-8 w-8 p-0", editor.isActive("bold") && "bg-muted")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <Bold className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn("h-8 w-8 p-0", editor.isActive("italic") && "bg-muted")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <Italic className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn("h-8 w-8 p-0", editor.isActive("underline") && "bg-muted")}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <UnderlineIcon className="h-5 w-5" />
          </Button>

          {/* List dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 p-0 px-2 gap-1">
                <List className="h-5 w-5" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                className={cn(editor.isActive("bulletList") && "bg-muted")}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
              >
                <List className="h-4 w-4 mr-2" />
                Bullet List
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn(editor.isActive("orderedList") && "bg-muted")}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
              >
                <ListOrdered className="h-4 w-4 mr-2" />
                Numbered List
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Alignment dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 p-0 px-2 gap-1">
                <AlignLeft className="h-5 w-5" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                className={cn(editor.isActive({ textAlign: "left" }) && "bg-muted")}
                onClick={() => editor.chain().focus().setTextAlign("left").run()}
              >
                <AlignLeft className="h-4 w-4 mr-2" />
                Align Left
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn(editor.isActive({ textAlign: "center" }) && "bg-muted")}
                onClick={() => editor.chain().focus().setTextAlign("center").run()}
              >
                <AlignCenter className="h-4 w-4 mr-2" />
                Align Center
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn(editor.isActive({ textAlign: "right" }) && "bg-muted")}
                onClick={() => editor.chain().focus().setTextAlign("right").run()}
              >
                <AlignRight className="h-4 w-4 mr-2" />
                Align Right
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn(editor.isActive({ textAlign: "justify" }) && "bg-muted")}
                onClick={() => editor.chain().focus().setTextAlign("justify").run()}
              >
                <AlignJustify className="h-4 w-4 mr-2" />
                Justify
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="simplified-editor-content w-full">
          <EditorContent
            editor={editor}
            className="w-full min-h-[150px] prose dark:prose-invert prose-sm sm:prose-base [&_.ProseMirror]:min-h-[150px] [&_.ProseMirror]:w-full [&_.ProseMirror]:px-4 [&_.ProseMirror]:py-2 [&_.ProseMirror]:focus:outline-none [&_.ProseMirror]:focus:ring-0 [&_.ProseMirror]:border-0 [&_.ProseMirror]:focus-visible:outline-none [&_.ProseMirror]:focus-visible:ring-0 [&_.ProseMirror_p]:my-0 [&_.ProseMirror_h1]:my-0 [&_.ProseMirror_h2]:my-0 [&_.ProseMirror_h3]:my-0 [&_.ProseMirror_h4]:my-0 [&_.ProseMirror_h5]:my-0 [&_.ProseMirror_h6]:my-0"
          />
        </div>
      </div>
    </TooltipProvider>
  )
}
