declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

export interface Resume {
  name: string
  position: string
  objective: string
  skills: Array<string>
  projects: Array<string>
  education: Array<{
    degree?: string
    school: string
    years: string
    location: string
  }>
  workExperience: Array<{
    position: string
    company: string
    years: string
    location: string
    tasks: Array<string>
  }>
  contact: {
    email: string
    phone: string
    location: string
    linkedin?: string
    github?: string
  }
}