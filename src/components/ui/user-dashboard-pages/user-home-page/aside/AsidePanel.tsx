"use client";

import { useMemo, useState } from "react";
import { Tabs } from "antd";
import { Plus } from "lucide-react";
import { EventCard } from "./EventCard";
import { EventForm } from "./EventForm";

export type EventItem = {
  id: string;
  title: string;
  course?: string;
  description?: string;
  start: string;
  end: string;
  location: string;
  mode: "Online" | "In Person";
  color: string; 
  avatarUrl?: string;
};

export function AsidePanel({ initialEvents = [] as EventItem[] }) {
  const [events, setEvents] = useState<EventItem[]>(initialEvents);

  const items = useMemo(
    () => [
      {
        key: "today",
        label: "Today's Events",
        children: (
          <div className="space-y-3">
            {events.length === 0 ? (
              <div className="rounded-xl border p-6 text-center text-sm text-neutral-500">
                No events today.
              </div>
            ) : (
              events.map((ev) => <EventCard key={ev.id} event={ev} />)
            )}
          </div>
        ),
      },
      {
        key: "add",
        label: (
          <span className="inline-flex items-center gap-1">
            <Plus className="h-4 w-4" /> Add Event
          </span>
        ),
        children: (
          <EventForm onAdd={(e) => setEvents((prev) => [e, ...prev])} />
        ),
      },
    ],
    [events]
  );

  return (
    <div className="rounded-xl border bg-white p-2 shadow-sm">
      <Tabs defaultActiveKey="today" items={items} />
    </div>
  );
}
