import { Album, Albums, Track } from "../../music/musicDB";
import '../../styles/albumPage.scss'
import { TrackItem } from "../../shared/ui/TrackItem";
import { player } from "../../player/player";
import { useParams } from "react-router-dom";
import { Tracks } from "../../music/musicDB";
import daveBackground from '../../images/dave-background.jpg'
import { Genres } from "../../music/musicDB";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { favoritesArtists } from "../../favoritesArtists/favoritesArtists";
import { useState } from "react";
export default function AlbumPage(){
    const {id} = useParams()
    const tracks = Tracks.filter(track => track.albumId === Number(id))
    const album = Albums.filter(album => album.id === Number(id))
    const [isSubscribed, setIsSubscribed] = useState<Boolean>(false)

    useEffect(() => {
        function update(){
            const isSub = favoritesArtists.getAll().some(a => a.id === album[0].id)
            setIsSubscribed(isSub)
        }
        update()
        favoritesArtists.subscribe(update)

        return () => {
            favoritesArtists.unsubscribe(update)
        }
    },[])


    function subscribeCheck(){
       const favoritesArtistsList = favoritesArtists.getAll()
       return favoritesArtistsList.includes(album[0])
    }


    const featuredAlbums = Genres.filter((genre) =>
        tracks.some((track) =>
          track.tags.includes(genre.id)
        )
    );


    return (
        <div className="album">
            <div className="album__info"
            style={{backgroundImage:`url(${album[0].background_cover})`, backgroundPosition:album[0].background_position || ''}}
            >
                <img
                    className="album__cover"
                    src={album[0].album_cover}
                    
                />
                <div className="album__mainInfo">
                    <h1 className="album__name">
                        {album[0].title}
                    </h1>
                    <h3 style={{color:'white', textShadow:'0px 0px 3px black'}}>{(album[0].subscribers).toLocaleString()} прослушиваний в месяц</h3>
                    <button className="album__subscribe-btn" onClick={() => {
                        favoritesArtists.toggle(album[0])
                    }} >
                        {isSubscribed ? "Уже подписаны" : "Подписаться"}
                    </button>
                </div>
                
            </div>
            <div className="album__tracks-section">
                <ul className="album__tracks-list">
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
            <div className="album__featured-playlists-container">
                    <h2 className="album__featured-playlists-title">{album[0].title} встречается здесь</h2>
                <ul className="album__featured-playlists">
                    {
                        featuredAlbums.map((album) => {
                            return (
                                <li
                                    className="album__featured-playlists-item"
                                    key={album.id}
                                >
                                    <NavLink to={`/genre/${album.id}`}>
                                        <div className='genres__container'>
                                            <img 
                                            src={album.cover}
                                            className='genres__cover'
                                            />
                                            <h3 className='genres__genre-title'>
                                            {album.title}
                                            </h3>
                                        </div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="album__banner" style={{
                '--bg': `url(${album[0].background_cover})`
            } as React.CSSProperties}>
                <h1 style={{zIndex:'2', color:'white'}}>{album[0].title}</h1>
                <p style={{zIndex:'2', color:'white'}}>
                    {album[0].aboutText}
                </p>
            </div>
        </div>

    )
}