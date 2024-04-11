import type { Audience, Level, RemoteStatus } from "$dato/blocks/tutors/types";
import { getAllTutorsMetas, getTutorBySlug } from "$lib/graphql/queries/tutors";

const formatTutorMeta = (tutor: Awaited<ReturnType<typeof getAllTutorsMetas>>[0]) => {
	return {
		...tutor,
		levels: tutor.levels as Level[],
		audiences: tutor.audiences as Audience[],
		remoteStatus: tutor.remoteStatus as RemoteStatus[],
	};
};

const formatSingleTutor = (tutor: NonNullable<Awaited<ReturnType<typeof getTutorBySlug>>>) => {
	return {
		...tutor,
		levels: tutor.levels as Level[],
		audiences: tutor.audiences as Audience[],
		remoteStatus: tutor.remoteStatus as RemoteStatus[],
	};
};

export { formatSingleTutor, formatTutorMeta };
