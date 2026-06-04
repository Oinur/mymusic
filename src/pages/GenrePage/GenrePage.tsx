import { Albums, Track } from "../../music/musicDB";
import '../../styles/genrePage.scss'
import { TrackItem } from "../../shared/ui/TrackItem";
import { player } from "../../player/player";
import { useParams } from "react-router-dom";
import { Tracks } from "../../music/musicDB";
import { Genres } from "../../music/musicDB";


export default function GenrePage(){
    const {id} = useParams()
    const tracks = Tracks.filter(track => track.tags.includes(id!))
    const genre = Genres.find(genre => genre.id === id)
    
    return (
        <div className="genre" 
            style={{objectFit:'cover', backgroundImage:`url(${genre?.backgroundCover})`}}
        >
            <div className="genre__info">
                
                <img
                    className="genre__cover"
                    src={genre?.cover}
                />
                <h1 className="genre__name">
                    {genre?.title}
                </h1>
                
            </div>
            <div className="genre__tracks-section">
                <ul className="genre__tracks-list">
                    {tracks && tracks.map((track, index) => {
                        return (
                            <TrackItem 
                                key={track.id}
                                track={track}
                                onPlay={() => {
                                    player.setPlaylist(tracks)
                                    player.play(index)
                                }}
                            />
                        )
                    })}
                </ul>
            </div>
            
        
        </div>

    )
}