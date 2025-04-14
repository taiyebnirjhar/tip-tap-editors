"use client"

import { Button } from "@/components/ui/button"
import type { EditorFooterProps } from "./types"

export default function EditorFooter({ onUpdate }: EditorFooterProps) {
  return (
    <div className="flex items-center justify-between border-t px-4 py-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-code-2"
        >
          <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 18 3-3-3-3" />
          <path d="m5 12-3 3 3 3" />
        </svg>
        <span>HTML supported</span>
      </div>
      <Button onClick={onUpdate} className="bg-black text-white hover:bg-black/90">
        Submit
      </Button>
    </div>
  )
}
