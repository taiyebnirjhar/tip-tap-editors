"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { Minus, Plus, Search } from "lucide-react"
import type { ZoomControlsProps } from "./types"

export function ZoomControls({ zoom, setZoom }: ZoomControlsProps) {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-1 ml-auto">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-muted"
              onClick={() => setZoom(Math.max(25, zoom - 25))}
            >
              <Minus className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Zoom out</TooltipContent>
        </Tooltip>
        <div className="flex h-8 items-center gap-1 rounded-md border px-2 text-xs">
          <Search className="h-3 w-3" />
          <span>{zoom}%</span>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-muted"
              onClick={() => setZoom(Math.min(400, zoom + 25))}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Zoom in</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
