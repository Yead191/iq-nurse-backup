import React, { useState, useEffect } from "react";
import { QuickAccessSheets } from "./QuickAccessSheets";
import { popularCheatSheets } from "@/data/cheat-sheets/popularCheatSheets";
import { useRouter } from "next/navigation";
import { sheetSidebarItems } from "@/data/cheat-sheets/sheetSidebarItems";

export default function CheatHome() {
  const router = useRouter();
  const [recentlyVisitedIds, setRecentlyVisitedIds] = useState<string[]>([]);
  const [recentTopics, setRecentTopics] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cheatSheetsRecentIds");
    if (saved) {
      try {
        setRecentlyVisitedIds(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    // Reconstruct recentTopics from ids to avoid storing complex objects / React elements in localStorage
    const reconstructed = recentlyVisitedIds
      .map((id) => {
        // Find in popular first for description, else look up in sidebar items
        const inPopular = popularCheatSheets.find((p) => p.id === id);
        if (inPopular) return inPopular;

        for (const cat of sheetSidebarItems) {
          const child = cat.children?.find((c) => c.id === id);
          if (child) {
            return {
              id: child.id,
              name: child.label,
              categoryName: cat.label,
              categoryIcon: cat.icon,
            };
          }
        }
        return null;
      })
      .filter(Boolean);
    
    setRecentTopics(reconstructed);
  }, [recentlyVisitedIds]);

  const addToRecentlyVisited = (topic: any) => {
    setRecentlyVisitedIds((prev) => {
      const filtered = prev.filter((id) => id !== topic.id);
      const updated = [topic.id, ...filtered].slice(0, 8); // Keep max 8 items
      localStorage.setItem("cheatSheetsRecentIds", JSON.stringify(updated));
      return updated;
    });
  };

  const handleTopicClick = (topic: any) => {
    addToRecentlyVisited(topic);
    router.push(`/profile/cheat-sheets/${topic.id}`);
  };

  return (
    <section>
      <QuickAccessSheets
        popularTopics={popularCheatSheets}
        recentTopics={recentTopics}
        onTopicClick={handleTopicClick}
      />
    </section>
  );
}
