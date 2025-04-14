"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Paintbrush, Highlighter } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ToolbarSelectsProps } from "./types"

export function ToolbarSelects({ editor }: ToolbarSelectsProps) {
  return (
    <>
      <div className="flex items-center gap-1">
        <Select
          value={editor.isActive("heading") ? editor.getAttributes("heading").level?.toString() : "paragraph"}
          onValueChange={(value) => {
            if (value === "paragraph") {
              editor.chain().focus().setParagraph().run()
            } else {
              editor
                .chain()
                .focus()
                .toggleHeading({
                  level: Number.parseInt(value) as 1 | 2 | 3 | 4 | 5 | 6,
                })
                .run()
            }
          }}
        >
          <SelectTrigger className="h-8 w-[140px] text-sm">
            <SelectValue placeholder="Normal text" />
          </SelectTrigger>
          <SelectContent>
            {headingLevels.map((heading) => (
              <SelectItem key={heading.value} value={heading.value} className="text-sm">
                {heading.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={editor.getAttributes("textStyle").fontFamily || "default"}
          onValueChange={(value) =>
            editor
              .chain()
              .focus()
              .setFontFamily(value === "default" ? "" : value)
              .run()
          }
        >
          <SelectTrigger className="h-8 w-[120px] text-sm">
            <SelectValue placeholder="Font..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default" className="text-sm">
              Default
            </SelectItem>
            {fontFamilies.map((font) => (
              <SelectItem key={font.value} value={font.value} className="text-sm">
                {font.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={editor.getAttributes("textStyle").fontSize || "default"}
          onValueChange={(value) =>
            editor
              .chain()
              .focus()
              .setFontSize(value === "default" ? "" : value)
              .run()
          }
        >
          <SelectTrigger className="h-8 w-[90px] text-sm">
            <SelectValue placeholder="Size..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default" className="text-sm">
              Default
            </SelectItem>
            {fontSizes.map((size) => (
              <SelectItem key={size.value} value={size.value} className="text-sm">
                {size.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-1">
        <Select
          value={editor.getAttributes("textStyle").color || "default"}
          onValueChange={(value) =>
            editor
              .chain()
              .focus()
              .setColor(value === "default" ? "" : value)
              .run()
          }
        >
          <SelectTrigger className="h-8 w-[100px] text-sm">
            <div className="flex items-center gap-2">
              <Paintbrush className="h-4 w-4" />
              <span>Color</span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default" className="text-sm">
              Default
            </SelectItem>
            <div className="grid grid-cols-10 gap-1 p-2">
              {colors.map((color) => (
                <Button
                  key={color}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-muted"
                  style={{ backgroundColor: color }}
                  onClick={() => editor.chain().focus().setColor(color).run()}
                />
              ))}
            </div>
          </SelectContent>
        </Select>

        <Select
          value={editor.getAttributes("highlight").color || "default"}
          onValueChange={(value) => {
            if (value === "default") {
              editor.chain().focus().unsetHighlight().run()
            } else {
              editor.chain().focus().toggleHighlight({ color: value }).run()
            }
          }}
        >
          <SelectTrigger className="h-8 w-[120px] text-sm">
            <div className="flex items-center gap-2">
              <Highlighter className="h-4 w-4" />
              <span>Highlight</span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default" className="text-sm">
              Default
            </SelectItem>
            <div className="grid grid-cols-10 gap-1 p-2">
              {colors.map((color) => (
                <Button
                  key={color}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-muted"
                  style={{ backgroundColor: color }}
                  onClick={() => editor.chain().focus().toggleHighlight({ color }).run()}
                />
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}

const fontFamilies = [
  { value: "Arial", label: "Arial" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
  { value: "Georgia", label: "Georgia" },
  { value: "Verdana", label: "Verdana" },
]

const fontSizes = [
  { value: "12px", label: "12" },
  { value: "14px", label: "14" },
  { value: "16px", label: "16" },
  { value: "18px", label: "18" },
  { value: "20px", label: "20" },
  { value: "24px", label: "24" },
  { value: "30px", label: "30" },
  { value: "36px", label: "36" },
  { value: "48px", label: "48" },
  { value: "60px", label: "60" },
  { value: "72px", label: "72" },
]

const headingLevels = [
  { value: "paragraph", label: "Normal text" },
  { value: "1", label: "Heading 1" },
  { value: "2", label: "Heading 2" },
  { value: "3", label: "Heading 3" },
  { value: "4", label: "Heading 4" },
  { value: "5", label: "Heading 5" },
  { value: "6", label: "Heading 6" },
]

const colors = [
  "#000000",
  "#434343",
  "#666666",
  "#999999",
  "#b7b7b7",
  "#cccccc",
  "#d9d9d9",
  "#efefef",
  "#f3f3f3",
  "#ffffff",
  "#980000",
  "#ff0000",
  "#ff9900",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#4a86e8",
  "#0000ff",
  "#9900ff",
  "#ff00ff",
  "#e6b8af",
  "#f4cccc",
  "#fce5cd",
  "#fff2cc",
  "#d9ead3",
  "#d0e0e3",
  "#c9daf8",
  "#cfe2f3",
  "#d9d2e9",
  "#ead1dc",
  "#dd7e6b",
  "#ea9999",
  "#f9cb9c",
  "#ffe599",
  "#b6d7a8",
  "#a2c4c9",
  "#a4c2f4",
  "#9fc5e8",
  "#b4a7d6",
  "#d5a6bd",
]
