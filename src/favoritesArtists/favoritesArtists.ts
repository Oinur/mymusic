import { Album, Track } from "../music/musicDB";
import { FavoritesArtistsStorage } from "./FavoritesArtistsStorage";

export class FavoritesArtists {
    private storage = new FavoritesArtistsStorage();
    private artists: Map<number, Album> = new Map();
    private listeners : (() => void)[] = [];
    constructor() {
        const saved = this.storage.load();
        saved.forEach(t => this.artists.set(t.id, t));
    }

    subscribe(listener : (() => void)){
        this.listeners.push(listener)
    }
    unsubscribe(listener : (() => void)){
        this.listeners = this.listeners.filter((l) => l !== listener)
    }
    notify(){
        this.listeners.forEach((fn) => fn())
    }
    toggle(artist: Album) {
        if (this.artists.has(artist.id)) {
            this.artists.delete(artist.id);
        } 
        else {
            this.artists.set(artist.id, artist);
        }
        this.storage.save(this.getAll());
        this.notify();
    }

    getAll() {
        return Array.from(this.artists.values())
    }

}

export const favoritesArtists = new FavoritesArtists()