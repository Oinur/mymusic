import { Album} from "../music/musicDB"

export class FavoritesArtistsStorage {
    save (artist : Album[]) {
        localStorage.setItem('favoritesArtists', JSON.stringify(artist))
        console.log('сохранился')
    }
    load(): Album[] {
        const data = localStorage.getItem('favoritesArtists')
        return data ? JSON.parse(data) as Album[] : []
    }
}