import { ResumeContentProps } from "@/types/types";

export function SummarySection(content: Partial<Pick<ResumeContentProps, 'profile'>>): string {

    const summaries = content?.profile?.map((item) => {
        return `<p>${item}</p>`
    })

    return `   <section>
            <h3>SUMMARY</h3>
            <hr />
            ${summaries?.join('') || ''}
        </section>`
}