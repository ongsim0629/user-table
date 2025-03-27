export const JOB_OPTIONS = ['개발자', 'PO', '디자이너'] as const;
export type JobOption = (typeof JOB_OPTIONS)[number];
