import type { Editor } from "@tiptap/react"

export interface TipTapEditorProps {
  onUpdate?: (html: string) => void
  content?: string
  editable?: boolean
}

export interface ToolbarProps {
  editor: Editor
  zoom: number
  setZoom: (zoom: number) => void
}

export interface EditorHeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  showHtml: boolean
  setShowHtml: (show: boolean) => void
}

export interface EditorFooterProps {
  onUpdate: () => void
}

export interface ToolbarButtonsProps {
  editor: Editor
}

export interface ToolbarSelectsProps {
  editor: Editor
}

export interface ZoomControlsProps {
  zoom: number
  setZoom: (zoom: number) => void
}
