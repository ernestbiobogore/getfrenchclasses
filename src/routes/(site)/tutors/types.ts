import type { formatTutorMeta } from "./utils.server";

type RemoteStatus = "online" | "in-person";
type Audience = "adults" | "kids";
type Level = "beginner" | "intermediate" | "advanced";
type FormattedTutorMeta = ReturnType<typeof formatTutorMeta>;

export type { Audience, FormattedTutorMeta, Level, RemoteStatus };
