export interface Job {
  strapi_id: string
  company: string
  position: string
  date: string
  subtitle: string
  desc: {
    id: string
    name: string
  }[]
}
