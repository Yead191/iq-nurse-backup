import SingleNoteMain from "@/components/ui/user-dashboard-pages/My-Notepad-Page/single-note/SingleNoteMain";
import React from "react";

interface pageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function page({ params }: pageProps) {
  const { id } = await params;
//   console.log(id);
  return <SingleNoteMain id={id} />;
}
