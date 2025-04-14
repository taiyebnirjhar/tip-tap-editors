import { ToolbarButtons } from "./ToolbarButtons"
import { ToolbarSelects } from "./ToolbarSelects"
import { ZoomControls } from "./ZoomControls"
import type { ToolbarProps } from "./types"

export default function Toolbar({ editor, zoom, setZoom }: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-start gap-2 border-b p-4 overflow-x-auto">
      <div className="flex flex-wrap items-center gap-2">
        <ToolbarButtons editor={editor} />
        <ToolbarSelects editor={editor} />
      </div>
      <ZoomControls zoom={zoom} setZoom={setZoom} />
    </div>
  )
}
