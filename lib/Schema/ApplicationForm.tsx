import z from "zod"

export const ApplicationSchema = z.object({
    companyName: z.string().min(1),
    roleTitle: z.string().min(1),
    resumeId: z.string().min(1),
    resumeUsed: z.string().min(1),
    date: z.date(),
    jobDescription: z.string().optional(),
    link: z.string().optional(),
    status: z.enum(['Applied', 'Pending', 'Interviewing', 'No_Response', 'Rejected', 'Offer']),
})

export type ApplicationInputs = z.infer<typeof ApplicationSchema>