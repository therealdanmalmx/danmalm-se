// Page copy per language. Edit the wording in sv.ts and en.ts.
import type { Content, Locale, Skill } from "./types";
import { en } from "./en";
import { sv } from "./sv";

export type { Content, Experience, Locale, Project, Skill } from "./types";

export const content: Record<Locale, Content> = { sv, en };

// Companies where a skill was used, derived from the experience stacks.
export function usedAt(t: Content, skill: Skill): string[] {
  const labels = skill.match ?? [skill.name];
  const companies = t.experience
    .filter((e) => !e.education && (skill.everywhere || e.stack.some((s) => labels.includes(s))))
    .map((e) => e.company);
  // Centiro appears twice (part-time and LIA).
  return [...new Set(companies)];
}
