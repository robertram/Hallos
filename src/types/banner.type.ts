interface SocialMediaType {
  instagram?: string,
  x?: string,
  facebook?:string
}

export interface UserData {
  id: string
  name: string
  lastName: string
  email: string
  bannerImage?: string
  profilePicture?: string
  bio?: any
  socialMedia?: SocialMediaType
}
