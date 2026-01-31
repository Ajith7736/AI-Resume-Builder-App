import { ResumeContentProps } from '@/types/types'


export function ProfileSection( content :  Partial<Pick<ResumeContentProps, 'email' | 'address' | 'phonenumber' | 'links'>> | null): string {

  const links = content?.links?.map((link) => {
    return `<a href="${link.link}">${link.label}</a>`
  }) ?? []

  const fields = [
    content?.email,
    content?.phonenumber,
    content?.address,
    ...links
  ]

  const text = fields.filter(Boolean).join(' | ')

  console.log(text)

  return text;
}
