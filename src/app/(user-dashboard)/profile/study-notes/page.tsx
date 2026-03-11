import { BookOpen } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] p-8 text-center">
      <BookOpen className="size-16 text-muted-foreground mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Welcome to Study Notes</h2>
      <p className="text-muted-foreground max-w-md">
        Select a topic from the sidebar to begin studying. Topics are organized
        by body system and condition type.
      </p>
    </div>
  );
}
