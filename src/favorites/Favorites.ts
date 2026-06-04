import { Track } from "../music/musicDB";
import { FavoritesStorage } from "./FavoritesStorage";

export class Favorites {
    private storage = new FavoritesStorage();
    private tracks: Map<number, Track> = new Map();
    private listeners : (() => void)[] = [];
    constructor() {
        const saved = this.storage.load();
        saved.forEach(t => this.tracks.set(t.id, t));
    }
    subscribe(listener : (() => void)){
        this.listeners.push(listener)
    }
    unsubscribe(listener : (() => void)){
        this.listeners = this.listeners.filter(fn => fn !== listener)
    }
    notify(){
        this.listeners.forEach(fn => fn())
    }
    getAll() {
        return Array.from(this.tracks.values())
    }

    getCount() {
        return this.tracks.size
    }
    toggle(track: Track){
        if(this.tracks.has(track.id)){
            this.tracks.delete(track.id)
        }
        else{
            this.tracks.set(track.id, track)
        }
        this.storage.save(this.getAll())
        this.notify()
    }
    isFav(track: Track){
        if(this.tracks.has(track.id)){
            return true
        }
        return false
    }
}

export const favoritesTracks = new Favorites()