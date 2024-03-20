import type { formatSingleTutor, formatTutorMeta } from "./utils.server";

type RemoteStatus = "online" | "in-person";
type Audience = "adults" | "kids";
type Level = "beginner" | "intermediate" | "advanced";
type FormattedTutorMeta = ReturnType<typeof formatTutorMeta>;
type FormattedSingleTutor = ReturnType<typeof formatSingleTutor>;

export type { Audience, FormattedSingleTutor, FormattedTutorMeta, Level, RemoteStatus };
