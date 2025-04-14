"use client"

import { useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { editorExtensions } from "./editorExtensions"
import Toolbar from "./Toolbar"
import EditorHeader from "./EditorHeader"
import EditorFooter from "./EditorFooter"
import type { TipTapEditorProps } from "./types"
import "./styles.css"

export function TipTapEditor({ onUpdate, content = "", editable = true }: TipTapEditorProps) {
  const [activeTab, setActiveTab] = useState("write")
  const [showHtml, setShowHtml] = useState(false)
  const [zoom, setZoom] = useState(100)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      ...editorExtensions,
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      onUpdate?.(editor.getHTML())
    },
  })

  if (!editor) return null

  return (
    <div className="tiptap-editor flex flex-col rounded-lg border bg-background shadow-sm w-full">
      <EditorHeader activeTab={activeTab} setActiveTab={setActiveTab} showHtml={showHtml} setShowHtml={setShowHtml} />
      {activeTab === "write" && !showHtml && <Toolbar editor={editor} zoom={zoom} setZoom={setZoom} />}
      <div className="tiptap-editor-content flex-1">
        {showHtml ? (
          <textarea
            value={editor.getHTML()}
            onChange={(e) => editor.commands.setContent(e.target.value)}
            className="min-h-[300px] w-full resize-none border-0 bg-background p-4 font-mono text-sm focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 min-w-[-webkit-fill-available]"
            style={{ zoom: `${zoom}%` }}
          />
        ) : (
          <EditorContent
            editor={editor}
            className="min-h-[300px] min-w-[-webkit-fill-available] w-full prose dark:prose-invert prose-sm sm:prose-base [&_.ProseMirror]:min-h-[300px] [&_.ProseMirror]:px-4 [&_.ProseMirror]:py-2 [&_.ProseMirror]:focus:outline-none [&_.ProseMirror]:focus:ring-0 [&_.ProseMirror]:border-0 [&_.ProseMirror]:focus-visible:outline-none [&_.ProseMirror]:focus-visible:ring-0 [&_.ProseMirror_p]:my-0 [&_.ProseMirror_h1]:my-0 [&_.ProseMirror_h2]:my-0 [&_.ProseMirror_h3]:my-0 [&_.ProseMirror_h4]:my-0 [&_.ProseMirror_h5]:my-0 [&_.ProseMirror_h6]:my-0"
            style={{ zoom: `${zoom}%` }}
          />
        )}
      </div>
      <EditorFooter onUpdate={() => onUpdate?.(editor.getHTML())} />
    </div>
  )
}
