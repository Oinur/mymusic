import React, { useEffect, useState, useMemo} from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom';
import logo from './images/MyMusic logo light.png'
import './App.scss';
import FavoritePage from './pages/FavoritePage/Favorite';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import GenrePage from './pages/GenrePage/GenrePage';
import { SearchInput } from './shared/ui/SearchInput/SearchInput';
import favoriteIcon from './images/favorite-icon.png'
import homeIcon from './images/home-icon.png'
import { player } from './player/player';
import { Track, Tracks, Album, Genre } from './music/musicDB';
import musicLogo from './images/music-logo-placeholder.jpg'
import volumeIcon from './images/volume-icon.svg'
import shuffleIcon from './images/shuffle-icon.svg'
import repeatIcon from './images/repeat-play.svg'
import addToFavIcon from './images/favorite.png'
import addedToFavIcon from './images/favorite-added.png'
import HM2 from '../src/images/HM2-album.jpg'
import { TrackItem } from './shared/ui/TrackItem';
import { Genres } from './music/musicDB';
import { Notification } from './shared/ui/Notification';
import { favoritesArtists } from './favoritesArtists/favoritesArtists';
import { favoritesTracks } from './favorites/Favorites';


function Header(){
  const [search, setSearch] = useState('');
  const filteredTracks = Tracks.filter((track : Track) => track.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <header>
      <Link to={'/'}>
        <img src={logo} className='logo' alt='logo'/>
      </Link>
      <div className='search-bar-container'>
        <SearchInput
          value={search}
          onChange={setSearch}
        />
        {(filteredTracks.length > 0 && search.length > 0) && 
        <div className='searchModal-container'
          onClick={() => {setSearch('')}}
        >
          <div className='searchModal'
            onClick={(e) => {e.stopPropagation()}}
          >
            <p className='searchModal__p'>Результат поиска:</p>
            <ul>
              {filteredTracks.map((track: Track, index : number) => {
                return (
                  <TrackItem 
                    key={track.id}
                    track={track}
                    onPlay={() => {
                      player.setPlaylist(filteredTracks)
                      player.play(index)
                    }}
                    />
                )
              })}
            </ul>
          </div>
        </div>
        }
      </div>
      <div className='user-container'>
        <div className='userImg'>
            U
        </div>
      </div>
    </header>
  )
}
  

const NavigationBar = () => {
  const [artistsList, setArtistsList] = useState<Album[]>([])
  const [favoritesTracksQuantity, setFavoritesTracksQuantity] = useState(0)

  useEffect(() => {
    function update(){
      setArtistsList(favoritesArtists.getAll())
    }
    update()
    favoritesArtists.subscribe(update)

    return () => {
      favoritesArtists.unsubscribe(update)
    }
  },[])

  useEffect(() => {
    function update(){
      setFavoritesTracksQuantity(favoritesTracks.getCount())
    }
    update()
    favoritesTracks.subscribe(update)

    return () => {
      favoritesTracks.unsubscribe(update)
    }
  },[])

  return (
  <nav className='nav-block'>
    <ul className='nav-list'>
        <li style={{width:'95%'}}>
          <NavLink to="/" className="nav-list-item">
            {({ isActive }) => (
              <>
                <div className={`item-fill ${isActive ? 'active' : ''}`} />
                <img src={homeIcon} style={{ height: '50px', zIndex: 2 }} alt='home'/>
                <div className="nav-list-item-about-container">
                  <h3 className="list-item-name">Главная</h3>
                </div>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" className="nav-list-item">
            {({ isActive }) => (
              <>
                <div className={`item-fill ${isActive ? 'active' : ''}`} />
                <img src={favoriteIcon} style={{ height: '50px', zIndex: 2 }} alt='favorite'/>
                <div className="nav-list-item-about-container">
                  <h3 className="list-item-name">Любимые треки</h3>
                  <p className="list-item-quantity">{favoritesTracksQuantity || 0} треков</p>
                </div>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <div className='nav-create-album-container'>
            <div className='nav-create-album-block'>
              <button>+</button>
            </div>
            <h3>Создать альбом</h3>
          </div>
        </li>
        <ul className='nav-list__artists-list'>
            {artistsList.map((artist : Album) => {

              return (
                <li key={artist.id} className='nav-list__artist-item'>
                  <NavLink to={`/album/${artist.id}`} style={{display:'flex', alignItems:'center',columnGap:'10px'}}>
                    <div>
                      <img src={artist.album_cover} className='nav-list__artist-cover' alt='album_cover'/>
                    </div>
                    <div>
                      <h3 style={{margin:'0', padding:'0'}}>{artist.title}</h3>
                      <p>Исполнитель</p>
                    </div>
                  </NavLink>
                </li>
              )
            })}
          </ul>

    </ul>
  </nav>
  )
}



function PlayerBar({
  setNotification
}: {
  setNotification: React.Dispatch<
    React.SetStateAction<string>
  >
}){
  const [volume, setVolume] = useState<number>(0.15);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState<Track | null> (null);
  const [isPlaying, setIsPlaying] = useState<Boolean>(false)
  const [isShuffled, setIsShuffled] = useState<Boolean>(false)
  const [isOnRepeat, setIsOnRepeat] = useState<Boolean>(false)
  const [isFavorite, setIsFavorite] = useState<Boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(player.getCurrentTime());
      setDuration(player.getDuration());
      setIsShuffled(player.getShuffleInfo())
      setIsOnRepeat(player.getOnRepeatInfo())
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function update(){
      setIsPlaying(player.getPlayStatus())
      setCurrentTrack(player.getInfo())
    }
    update()
    player.subscribe(update)


    return () => {
      player.unsubscribe(update)
    }
  },[])

  useEffect(() => {
    function update(){
      if (currentTrack){
        setIsFavorite(favoritesTracks.isFav(currentTrack))
      }
    }
    update()
    favoritesTracks.subscribe(update)

    return () => {
      favoritesTracks.unsubscribe(update)
    }
  },[currentTrack])



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    player.setCurrentTime(time);
  };

  function handleVolume(e: React.ChangeEvent<HTMLInputElement>){
    const v = +e.target.value
    setVolume(v)
    player.setVolume(v)
  }

  return(
    <div className='player-bar'>
      
      <div className='player-bar__music-info'>
        <img 
          src={currentTrack?.album_img || musicLogo}
          alt={currentTrack?.name || 'cover'}
          className='player-bar__music-logo'
        />
        <div className='player-bar__name-artist'>
          <strong className='player-bar__song-name'>{currentTrack && currentTrack.name}</strong>
          <NavLink to={`/album/${currentTrack?.albumId}`}><span className='player-bar__artist-name'>{currentTrack && currentTrack.author}</span></NavLink>
        </div>
        {currentTrack && 
          <button 
            className='player-bar__favorite-btn'
            onClick={() => {favoritesTracks.toggle(currentTrack!); setNotification('Трек добавлен в избранное'); setTimeout(() => {setNotification('')}, 3000)}}
            style={{backgroundImage:`url(${isFavorite ? addedToFavIcon : addToFavIcon})`}}
          >
              
          </button> 
        }
      </div>


      <div className='player-bar__main-control'>
        <div className='player-bar__control-btns'>
          <button onClick={() => {player.setOnRepeat()}} style={{display:'flex',justifyContent:'center',alignItems:'end'}}><img alt='repeatIcon' src={repeatIcon} style={{height:'25px', filter:`${isOnRepeat ? 'invert(53%) sepia(92%) saturate(1624%) hue-rotate(126deg) brightness(104%) contrast(91%)' : ''}`}}/></button>
          <button onClick={() => {player.prev() ; setCurrentTrack(player.getInfo())}}>⏮</button>
          <button onClick={() => {
            player.toggle();
            setIsPlaying(player.getPlayStatus());
            setCurrentTrack(player.getInfo());
            }} 
            className='playerBar-play-btn'>
              {isPlaying ? '⏸' : '▶'}
          </button>
          <button onClick={() => {player.next() ; setCurrentTrack(player.getInfo())}}>⏭</button>
          <button onClick={() => {player.shuffle()}} style={{display:'flex',justifyContent:'center',alignItems:'end'}}><img alt='shuffleIcon' src={shuffleIcon} style={{height:'30px', filter:`${isShuffled ? 'invert(53%) sepia(92%) saturate(1624%) hue-rotate(126deg) brightness(104%) contrast(91%)' : ''}`}}/></button>
        </div>
        <div className='player-bar__timeline'>
          {currentTime > 0 ? <span><p>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</p></span> : <span style={{marginBottom:'5px'}}>-:--</span> }
          <input 
          type='range'
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={handleChange}
          className='player-bar__progress-bar'
          />
          { duration > 0 ? <span><p>{Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}</p></span> : <span style={{marginBottom:'5px'}}>-:--</span> }
        </div>
      </div>

      <div className='player-bar__additional-control'>
        <img src={volumeIcon} className='player-bar__volume-icon' alt='volume'/>
        <input 
        type='range'
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolume}
        className='player-bar__volume-bar'
        />
      </div>
      
    </div>
  )

}
  
  





const Layout= () => {
  const [notification, setNotification] = useState('');
  return (
    <>
    <Header />
    <NavigationBar />
      <main>
        <Outlet/>
      </main>
    {notification && 
      (
        <Notification text={notification} />
      )
    }
    <PlayerBar setNotification={setNotification}/>
  </>
  )
}
  

  
export  function HomePage () {
  const [isPlaying, setIsPlaying] = useState<Boolean>(false)
  const hm2_tracks = useMemo(() => {
  return Tracks.filter(t => t.albumId === 1);
}, []);

  useEffect(() => {
    function update(){
      setIsPlaying(player.getPlayStatus())
    }
    player.subscribe(update)

    return () => {
      player.subscribe(update)
    }
  },[])

  function handleAlbumClick(albumId : number){
    const albumTracks = Tracks.filter(t => t.albumId === albumId)
    console.log(albumTracks)
    player.setPlaylist(albumTracks);
    player.play(0);
  }
return (

  
  <div>
    <h2 style={{textAlign:'start',marginTop:'20px',paddingLeft:"20px"}} className='h1-HM2'>Новый релиз исполнителя</h2>
    <div className='albumHM2'>
      <div className='albumHM2__album-info'>
        <div className='albumHM2__img-container'>
          <NavLink to='/album/1'>
            <img
              src={HM2}
              className='albumHM2__img'
              alt='HM2'
            />
          </NavLink>
          <button 
          className='albumHM2__play-btn'
          onClick={() => {handleAlbumClick(1)}}
          >{isPlaying ? '⏸' : '▶'}</button>
        </div>
        <h2 className='albumHM2__album-name'>Hotline Miami 2 OST</h2>
      </div>

      <div className='albumHM2__tracks'>
        <ul className='albumHM2__tracks-list'>
          {hm2_tracks.map((track, index) => {
            return (
              <TrackItem 
                key={track.id}
                track={track}
                onPlay={() => {
                  player.setPlaylist(hm2_tracks)
                  player.play(index)
                }}
                />
            )
          })}
        </ul>
      </div>
    </div>

    <div className='genres'>
      <div className='genres-title-subtitle'>
        <h2 className='genres__title'>Жанры</h2>
        <p className='genres__subtitle'>Выберите вам подходящее</p>
      </div>
      <div className='genres-container'>
        <ul className='genres-list'>
          {Genres.map((genre : Genre) => {
            return (
              <li
                className='genres-item'
                key={genre.id}
              >
                <NavLink to={`genre/${genre.id}`}>
                  <div className='genres__container'>
                    <img 
                      src={genre.cover}
                      className='genres__cover'
                      alt='genre-cover'
                    />
                    <h3 className='genres__genre-title'>
                      {genre.title}
                    </h3>
                  </div>
                </NavLink>
              </li>
              
            )
          })
          }
        </ul>
      </div>
    </div>
  </div>
)
}

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<HomePage />} />
            <Route path='/favorite' element={<FavoritePage/>}/>
            <Route path="/album/:id" element={<AlbumPage />} />
            <Route path="/genre/:id" element={<GenrePage />} />
          </Route>
          
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
