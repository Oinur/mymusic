import { Favorites } from '../../favorites/Favorites'
import { Track } from '../../music/musicDB';
import { TrackItem } from '../../shared/ui/TrackItem';
import { useEffect, useState } from 'react';
import '../../styles/favoritePage.scss'
import { player } from '../../player/player';
import { favoritesTracks } from '../../favorites/Favorites';

export default function FavoritePage(){
    const favorites = new Favorites();
    const [tracks, setTracks] = useState<Track[]>([])

    useEffect(() => {
        function update(){
            setTracks(favoritesTracks.getAll())
        }
        update()
        favoritesTracks.subscribe(update)

        return () => {
            favoritesTracks.unsubscribe(update)
        }
    },[])
    return(
        <div className="favorite">
            <div className="favorite__title-section">
                <h2 className="favorite__title">
                    Избранное
                </h2>
                <p className="favorite__sub-title">
                    ваши любимые треки
                </p>
            </div>
            <div className='favorite__tracks-section'>
                <ul className='favorite__tracks-list'>
                    {
                        tracks.map((track:Track, index : number) => {
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
                        })
                    }
                </ul>
            </div>
        </div>
           
        
    )
}