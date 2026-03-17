import PracticalHeader from "./components/PracticalHeader";

export default function PracticalSkillDetails({ skill }: { skill: any }) {
  return (
    <div className="container py-6">
      <PracticalHeader skill={skill} />
      {/* Content */}
      <section
        className="study-note-content prose max-w-none overflow-scroll"
        dangerouslySetInnerHTML={{ __html: skill?.content }}
      />
    </div>
  );
}
