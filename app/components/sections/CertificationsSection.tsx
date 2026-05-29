import { Slide } from "@/app/animation/Slide";
import { certifications } from "@/app/data/portfolio";
import SectionHeading from "@/app/components/ui/SectionHeading";
import CertificationIcon from "./CertificationIcon";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-28 mt-32">
      <SectionHeading
        title="Certifications"
        subtitle="Foundational credentials across CS, AI, and agile practices."
      />

      <ul className="grid gap-3 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Slide key={cert.name} delay={0.04 * i}>
            <li className="flex items-center gap-4 rounded-lg dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 px-5 py-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md dark:bg-zinc-900 bg-white border dark:border-zinc-800 border-zinc-200"
                aria-hidden
              >
                <CertificationIcon id={cert.icon} />
              </span>
              <div>
                <p className="font-medium tracking-tight">{cert.name}</p>
                <p className="text-sm text-zinc-500">{cert.issuer}</p>
              </div>
            </li>
          </Slide>
        ))}
      </ul>
    </section>
  );
}
