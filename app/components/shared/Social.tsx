import { socialLinks } from "../../data/social";

export default function Social({ type }: { type: "social" | "publication" }) {
  const filteredLinks = socialLinks.filter((item) => item.status === type);
  
  // We have 3 rows explicitly defined in social.ts
  const rows = [1, 2, 3];

  return (
    <div className="flex flex-col gap-y-4 my-10">
      {rows.map((rowNum) => {
        const rowLinks = filteredLinks.filter((item) => (item as any).row === rowNum || (!item.row && rowNum === 1));
        if (rowLinks.length === 0) return null;
        
        return (
          <ul key={rowNum} className="flex items-center flex-wrap gap-x-5 gap-y-4">
            {rowLinks.map((value) => (
              <li key={value.id}>
                <a
                  href={value.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
                >
                  <value.icon
                    className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                    aria-hidden="true"
                  />{" "}
                  &nbsp;
                  {value.name}
                </a>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
