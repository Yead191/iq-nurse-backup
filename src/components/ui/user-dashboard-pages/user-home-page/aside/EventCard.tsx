"use client"

import { Card, Tag, Dropdown } from "antd"
import { CalendarClock, Dot, EllipsisVertical, MapPin } from "lucide-react"
import { EventItem } from "./AsidePanel"


export function EventCard({ event }: { event: EventItem }) {
  const menuItems = [
    { key: "edit", label: "Edit" },
    { key: "duplicate", label: "Duplicate" },
    { key: "delete", label: "Delete" },
  ]

  return (
    <Card
      className="rounded-xl shadow-sm"
      bodyStyle={{ padding: 16 }}
      styles={{
        body: { background: "white" },
      }}
    >
      <div className="flex items-start gap-3">
        <div className={`h-10 w-10 shrink-0 rounded-lg ${event.color} ring-1 ring-black/5`} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-sm font-semibold text-neutral-900">{event.title}</div>
              {event.course ? <div className="text-xs text-neutral-500">{event.course}</div> : null}
            </div>
            <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
              <button className="rounded-md p-1 text-neutral-500 hover:bg-neutral-100">
                <EllipsisVertical className="h-4 w-4" />
              </button>
            </Dropdown>
          </div>

          {event.description ? <p className="mt-2 text-xs text-neutral-600">{event.description}</p> : null}

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-neutral-600">
            <span className="inline-flex items-center gap-1">
              <CalendarClock className="h-4 w-4" />
              {formatTimeRange(event.start, event.end)}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {event.location}
            </span>
            <span className="inline-flex items-center">
              <Dot className="h-5 w-5 text-green-600" />
              <Tag color="green" className="m-0">
                {event.mode}
              </Tag>
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}

function formatTimeRange(startISO: string, endISO: string) {
  try {
    const s = new Date(startISO)
    const e = new Date(endISO)
    const fmt = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
    })
    return `${fmt.format(s)} - ${fmt.format(e)}`
  } catch {
    return "—"
  }
}
