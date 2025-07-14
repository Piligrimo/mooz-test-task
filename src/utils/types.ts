export interface MediaItem {
    Title: string
    Year: string
    imdbID: string
    Poster: string
    Type: 'movie' | 'series' | 'episode'
}