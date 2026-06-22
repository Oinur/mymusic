import '../../styles/genrePage.scss'
import { TrackItem } from "../../shared/ui/TrackItem";
import { player } from "../../player/player";
import { useParams } from "react-router-dom";
import { Tracks } from "../../music/musicDB";
import { Genres } from "../../music/musicDB";
import { Track } from '../../music/musicDB';
import timeImg from '../../images/clock-icon.svg'


export default function GenrePage(){
    const {id} = useParams()
    const tracks = Tracks.filter(track => track.tags.includes(id!))
    const genre = Genres.find(genre => genre.id === id)
    const genrePlayTime = tracks.reduce((acc : number, track: Track) => acc + track.duration, 0)
    return (
        <div className="genre" 
            
        >
            <div className="genre__info-container">
                <div className='genre__cover-container'>
                    <img
                        className="genre__cover"
                        src={genre?.cover}
                        alt='genre-cover'
                    />
                    <h1 
                        className="genre__name"
                    >
                            {genre?.title}
                    </h1>
                </div>
                
                <div className='genre__info'>
                    
                    <p className='genre__about'>
                        {genre?.aboutText}
                    </p>
                    <img src={timeImg}
                    alt='timeImg'
                    className='genre__timeImg'
                    />
                       {
                            genrePlayTime > 0 &&
                                <span>
                                    {Math.floor(genrePlayTime / 3600) > 0
                                        ? `${Math.floor(genrePlayTime / 3600).toString().padStart(2,'0')}:${Math.floor((genrePlayTime % 3600) / 60)
                                            .toString()
                                            .padStart(2, '0')}:${Math.floor(genrePlayTime % 60)
                                            .toString()
                                            .padStart(2, '0')}`
                                        : `${Math.floor(genrePlayTime / 60)
                                            .toString()
                                            .padStart(2, '0')}:${Math.floor(genrePlayTime % 60)
                                            .toString()
                                            .padStart(2, '0')}`
                                    }
                                </span>
                        }
                    
                </div>
                
                
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