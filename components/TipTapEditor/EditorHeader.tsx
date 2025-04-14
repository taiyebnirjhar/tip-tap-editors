"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import type { EditorHeaderProps } from "./types"

export default function EditorHeader({ activeTab, setActiveTab, showHtml, setShowHtml }: EditorHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b">
      <Tabs defaultValue="write" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between bg-muted px-3">
          <TabsList className="h-14">
            <TabsTrigger value="write" className="text-sm px-4">
              Write
            </TabsTrigger>
            <TabsTrigger value="preview" className="text-sm px-4">
              Preview
            </TabsTrigger>
          </TabsList>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowHtml(!showHtml)}
            className="text-sm font-medium hover:bg-muted px-4"
          >
            HTML
          </Button>
        </div>
      </Tabs>
    </div>
  )
}
