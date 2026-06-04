import { Track } from "../music/musicDB";

type Listener = () => void;

export class AudioPlayer {
    private audio = new Audio();
    private playlist: Track[] = [];
    private currentIndex : number = -1
    private volume : number = 0.15
    private listeners : Listener[] = [];
    private isShuffled : boolean = false;
    private isOnRepeat : boolean = false;


    constructor() {
        this.audio.addEventListener('ended', () => {
            if (this.isOnRepeat){
                this.play(this.currentIndex)
                return
            }

            this.next()
        })
    }

    private notify(){
        this.listeners.forEach(fn => fn())
    }



    subscribe(fn : Listener) {
        this.listeners.push(fn)
    }
    unsubscribe(fn : Listener) {
        this.listeners = this.listeners.filter(l => l !== fn)
    }




    setPlaylist(tracks: Track[]) {
    this.playlist = tracks;
    this.currentIndex = 0;
    }
    playTrack(track: Track) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.playlist = [track]
        this.audio.src = track.src;
        this.audio.volume = this.volume
        this.audio.play();
    }
    play(index? :number) {
    if (index !== undefined) this.currentIndex = index
    if (!this.playlist[this.currentIndex]) return

    const track = this.playlist[this.currentIndex];
    this.audio.pause();
    this.audio.currentTime = 0;

    if (this.audio.src === track.src && !this.audio.paused) {
    return;
    }

    this.audio.src = track.src;
    this.audio.volume = this.volume 
    this.audio.play();
    this.notify();
    }

    pause() {
    this.audio.pause();
    this.notify();
    }

    toggle() {
        if (!this.audio.src) return

        if (this.audio.paused) {
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
        this.notify();
    }

    setVolume(v: number) {
        this.volume = v
        this.audio.volume = v;
    }
    setOnRepeat(){
        this.isOnRepeat = !this.isOnRepeat
    }
     getOnRepeatInfo(){
        return this.isOnRepeat
    }
    shuffle(){
        this.isShuffled = !this.isShuffled
        const shuffledArr = [...this.playlist]
        for (let i : number = shuffledArr.length - 1; i > 0 ; i--){
            const randomIndex = Math.floor(Math.random() * (i + 1))
            const temp = shuffledArr[i];
            shuffledArr[i] = shuffledArr[randomIndex];
            shuffledArr[randomIndex] = temp;
        }
        this.setPlaylist(shuffledArr)
    }
    getShuffleInfo(){
        return this.isShuffled
    }
    getCurrentTime() {
        return this.audio.currentTime;
    }

    setCurrentTime(t: number) {
        this.audio.currentTime = t;
    }

    getDuration() {
        return this.audio.duration;
    }
    getInfo(){
        return this.playlist[this.currentIndex]
    }
    getPlayStatus(){
        return !this.audio.paused
    }
    next() {
    if (this.playlist.length === 0) return;
    this.currentIndex++;
    if (this.currentIndex >= this.playlist.length) {
        this.currentIndex = 0;
    }
    this.play();
    }

    prev() {
    if (this.getCurrentTime() > 5) {
        this.setCurrentTime(0)
        return
    }
    if (this.playlist.length === 0) return;
    this.currentIndex--;
    if (this.currentIndex < 0) {
        this.currentIndex = this.playlist.length - 1;
    }
    this.play();
    }

}