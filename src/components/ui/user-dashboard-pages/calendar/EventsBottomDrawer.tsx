"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import TasksSection from "../user-home-page/aside/todays-event/TasksSection";
import ClassesSection from "../user-home-page/aside/todays-event/ClassesSection";
import AssignmentSection from "../user-home-page/aside/todays-event/AssignmentSection";
import MeetingSection from "../user-home-page/aside/todays-event/MeetingSection";

interface EventsBottomDrawerProps {
  selectedDate?: string;
}

const MIN = 10; // vh
const MAX = 85; // vh
const SNAP_POINTS = [5, 25, 50, 85] as const;

const EventsBottomDrawer: React.FC<EventsBottomDrawerProps> = ({
  selectedDate,
}) => {
  // Visible height in vh, persisted only on snap.
  const [visible, setVisible] = useState<number>(25);

  // Refs for smooth, non-react-driven dragging
  const drawerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const startVisible = useRef(5);
  const currVisible = useRef(5);
  const isDragging = useRef(false);
  const raf = useRef<number | null>(null);

  // Apply transform and CSS var (for inner content height) with RAF
  const applyFrame = (vh: number) => {
    if (!drawerRef.current) return;
    // how much should the sheet be shifted down from the bottom?
    // sheet has fixed height MAXvh; to show `vh`, push down (MAX - vh)vh.
    const translate = MAX - vh;
    drawerRef.current.style.setProperty("--visible", `${vh}`);
    drawerRef.current.style.transform = `translateY(${translate}vh)`;
  };

  // Initialize transform on mount and whenever snapped state changes
  useEffect(() => {
    currVisible.current = visible;
    // enable transition only on snap, not during drag
    if (drawerRef.current) {
      drawerRef.current.style.transition =
        "transform 400ms cubic-bezier(0.25,0.8,0.25,1)";
    }
    applyFrame(visible);
    // disable transition after it ends so tiny adjustments later don't feel sluggish
    const el = drawerRef.current;
    const onEnd = () => {
      if (el) el.style.transition = "none";
    };
    el?.addEventListener("transitionend", onEnd);
    return () => el?.removeEventListener("transitionend", onEnd);
  }, [visible]);

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startY.current = e.touches[0].clientY;
    startVisible.current = currVisible.current;
    raf.current && cancelAnimationFrame(raf.current);
    if (drawerRef.current) {
      drawerRef.current.style.transition = "none"; // no animation while dragging
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    // Prevent the page from scrolling while dragging the handle
    // (works with touchAction: 'none' on the handle too)
    e.preventDefault?.();

    const deltaY = startY.current - e.touches[0].clientY;
    const deltaPercent = (deltaY / window.innerHeight) * 100;
    let next = Math.max(
      MIN,
      Math.min(MAX, startVisible.current + deltaPercent)
    );
    currVisible.current = next;

    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => applyFrame(next));
  };

  const onTouchEnd = () => {
    isDragging.current = false;

    // Snap to nearest point based on current (dragged) visible height
    const current = currVisible.current;
    let closest: number = SNAP_POINTS[0];
    for (const p of SNAP_POINTS) {
      if (Math.abs(p - current) < Math.abs(closest - current)) closest = p;
    }

    // animate to snap
    if (drawerRef.current) {
      drawerRef.current.style.transition =
        "transform 400ms cubic-bezier(0.25,0.8,0.25,1)";
    }
    applyFrame(closest);
    setVisible(closest);
  };

  return (
    <div
      ref={drawerRef}
      // Height is fixed at MAXvh; we reveal LESS by translating it down.
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-30 will-change-transform"
      style={{
        height: `${MAX}vh`,
        // initial transform for first paint (in case effect hasn't run yet)
        transform: `translateY(${MAX - visible}vh)`,
      }}
    >
      {/* Selected Date Header */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ touchAction: "none" }}
        className="bg-primary text-white px-4 py-3  rounded-t-[20px] pb-6"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-[400]">{selectedDate}</span>
          {/* <ChevronUp size={20} /> */}
        </div>
      </div>

      {/* Content */}
      <div
        className="px-4 pb-4 overflow-y-auto bg-white rounded-t-2xl -mt-4 pt-2"
        // Use CSS var --visible (vh) to keep inner scroll height in sync during drag
        style={{
          height: "calc((var(--visible, 25) * 1vh) - 44px)",
          // Prevent scroll chaining to the page while scrolling inside the drawer
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="space-y-4 p-2 pt-4">
          <TasksSection />
          <ClassesSection />
          <AssignmentSection />
          <MeetingSection />
        </div>
      </div>
    </div>
  );
};

export default EventsBottomDrawer;
