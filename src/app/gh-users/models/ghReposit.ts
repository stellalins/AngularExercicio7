export interface GhReposit extends Array<GhReposit>{     
    name: string
    description: string
    html_url: string
    forks_count: number
    created_at: string
    updated_at: string
    language: string
    stargazers_count: number
}