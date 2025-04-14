"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Bold, Italic, Strikethrough, Underline, Link2, ImageIcon, Code, RotateCcw, RotateCw, X } from "lucide-react"
import { useCallback } from "react"
import type { ToolbarButtonsProps } from "./types"

export function ToolbarButtons({ editor }: ToolbarButtonsProps) {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href
    const url = window.prompt("URL", previousUrl)

    if (url === null) return
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }, [editor])

  const addImage = useCallback(() => {
    const url = window.prompt("URL")
    if (url) editor.chain().focus().setImage({ src: url }).run()
  }, [editor])

  return (
    <TooltipProvider>
      <>
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-muted"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Undo</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-muted"
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().redo()}
              >
                <RotateCw className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Redo</TooltipContent>
          </Tooltip>
        </div>

        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-8 w-8 p-0 hover:bg-muted", editor.isActive("bold") && "bg-muted")}
                onClick={() => editor.chain().focus().toggleBold().run()}
              >
                <Bold className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Bold</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-8 w-8 p-0 hover:bg-muted", editor.isActive("italic") && "bg-muted")}
                onClick={() => editor.chain().focus().toggleItalic().run()}
              >
                <Italic className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Italic</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-8 w-8 p-0 hover:bg-muted", editor.isActive("underline") && "bg-muted")}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
              >
                <Underline className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Underline</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-8 w-8 p-0 hover:bg-muted", editor.isActive("strike") && "bg-muted")}
                onClick={() => editor.chain().focus().toggleStrike().run()}
              >
                <Strikethrough className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Strikethrough</TooltipContent>
          </Tooltip>
        </div>

        {/* Add more button groups here */}

        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-8 w-8 p-0 hover:bg-muted", editor.isActive("link") && "bg-muted")}
                onClick={setLink}
              >
                <Link2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Insert link</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-muted" onClick={addImage}>
                <ImageIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Insert image</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-8 w-8 p-0 hover:bg-muted", editor.isActive("codeBlock") && "bg-muted")}
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              >
                <Code className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Code block</TooltipContent>
          </Tooltip>
        </div>

        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-muted"
                onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
              >
                <X className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Clear formatting</TooltipContent>
          </Tooltip>
        </div>
      </>
    </TooltipProvider>
  )
}
