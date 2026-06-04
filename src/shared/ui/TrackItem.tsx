import { Track } from '../../music/musicDB'
import './TrackItem.scss'
import musicLogo from '../../images/music-logo-placeholder.jpg'
import { player } from '../../player/player'
import timeImg from '../../images/clock-icon.svg'
import { NavLink } from 'react-router-dom'
import waveIcon from '../../images/noise-icon.svg'
import { useEffect, useState } from 'react'



export function TrackItem( {track, onPlay} : {track: Track; onPlay?: (track: Track) => void } ){
    const [currentTrack, setCurrentTrack] = useState<Track | null> (null);
    const [isPlaying, setIsPlaying] = useState<Boolean>(false)
    useEffect(() => {
        function update(){
          setCurrentTrack(player.getInfo())
          setIsPlaying(player.getPlayStatus())
        }
        update()

        player.subscribe(update)
    
    
        return () => {
          player.unsubscribe(update)
        }
      },[])
    

    return (
        <li className={`track-item ${currentTrack?.id === track.id ? 'active' : ''}`}>
            <div className='track-item__main-info'>
                <button 
                onClick={() => {
                    onPlay?.(track)
                }}
                className='track-item__play-btn'
                >{currentTrack?.id === track.id && isPlaying ? '⏸' : '▶'}</button>
                <img 
                    src={track.album_img || musicLogo}
                    alt={track.name || 'cover'}
                    className='track-item__track-img'
                />
                <div className='track-item__name-artist'>
                    <h4 className='track-item__name'>
                        {track.name}
                    </h4>
                    <NavLink to={`/album/${track.albumId}`}>
                    <p className='track-item__artist'>
                        {track.author}
                    </p>
                    </NavLink>
                </div>
            </div>
            <div className='track__audition-container'>
                <span>
                    <img
                        src={waveIcon}
                        className='track__auditionImg'
                        style={{marginTop:'2px'}}
                    />
                    <p>{(track.auditions).toLocaleString()}</p>
                </span>
            </div>
            <div>
                <div className='track__duration-container'>
                        <img src={timeImg} className='track__duration-img'/>
                      <p>{Math.floor(track.duration / 60)}:{Math.floor(track.duration % 60).toString().padStart(2, '0')}</p>     
                </div>
            </div>
        </li>
    )
}