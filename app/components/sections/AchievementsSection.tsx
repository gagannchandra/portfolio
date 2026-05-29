import { Slide } from "@/app/animation/Slide";
import { achievements } from "@/app/data/portfolio";
import SectionHeading from "@/app/components/ui/SectionHeading";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-28 mt-32">
      <SectionHeading
        title="Achievements"
        subtitle="Competitive programming, exams, and industry recognition."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <Slide key={item.title} delay={0.05 * i}>
            <div className="rounded-lg dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-6 flex flex-col h-full">
              {item.tag && (
                <div className="mb-4">
                  <div className="w-8 h-0.5 bg-primary-color mb-3 rounded-full" />
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold text-primary-color bg-primary-color/10 border border-primary-color/20">
                    {item.tag}
                  </span>
                </div>
              )}
              <p className="font-incognito text-4xl font-bold dark:text-primary-color text-tertiary-color">
                {item.value}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
}
