import { Track } from "../music/musicDB"

export class FavoritesStorage {
    save (tracks : Track[]) {
        localStorage.setItem('favorites', JSON.stringify(tracks))
    }
    load(): Track[] {
        const data = localStorage.getItem('favorites')
        return data ? JSON.parse(data) as Track[] : []
    }
}