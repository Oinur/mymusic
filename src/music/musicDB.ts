import HM2_album from '../images/HM2-album.jpg'
import EminemAlbum from '../images/Eminem-album.jpg'
import WeendAlbum from '../images/theWeeknd-album.jpg'
import BbnoAlbum from '../images/bbno-album.jpg'
import dvdAlbum from '../images/dvd-album.jpg'
import Weeknd from '../images/theWeeknd.jpg'
import Eminem from '../images/Eminem.jpg'
import Bbno from '../images/bbno.png'
import dvd from '../images/dvd-cover.jpg'
import Doom from '../images/doom.jpg'
import DoomAlbum from '../images/doom-album.jpg'
import Mewgenics from '../images/mewgenics.jpg'
import MewgenicsAlbum from '../images/mewgenics-album.jpg'
import Tf2 from '../images/tf2.jpg'
import Tf2Album from '../images/tf2-album.jpg'
import systemOfADown from '../images/systemOfADown.jpg'
import systemOfADownAlbum from '../images/systemOfADown-album.jpg'
import miku from '../images/miku.jpg'
import mikuAlbum from '../images/miku-album.jpg'
import kda from '../images/kda.jpg'
import kdaAlbum from '../images/kda-album.png'
import emoOranges from '../images/emotionalOranges.png'
import emoOrangesAlbum from '../images/emotionalOranges-album.png'
import tchaikovsky from '../images/tchaikovsky.jpg'
import tchaikovskyAlbum from '../images/tchaikovsky-album.jpg'
import louis from '../images/louis.jpg'
import louisAlbum from '../images/louis-album.jpg'

import popCover from '../images/pop-music-cover.jpeg'
import rockCover from '../images/rock-music-cover.jpg'
import electronicCover from '../images/electronic-muisic-cover.png'
import classicCover from '../images/classic-cover.jpg'
import rapCover from '../images/rap-cover.jpg'
import jazzCover from '../images/jazz-cover.png'
import indieCover from '../images/indie-cover.jpg'
import gamingCover from '../images/videogame-cover.jpg'
import jpopCover from '../images/jpop-cover.jpg'
import kpopCover from '../images/kpop-cover.jpg'

import gamingBackground from '../images/videogame-background.png'
import rapBackground from '../images/rap-background.jpg'
import popBackground from '../images/pop-background.jpeg'
import electronicBackground from '../images/electronic-background.jpg'
import rockBackground from '../images/rock-background.jpg'
import classicBackground from '../images/classic-background.jpg'
import bbnoBackground from '../images/bbno-background.jpg'
import hm2Background from '../images/HM2-background.jpg'
import weekndBackground from '../images/weeknd-background.png'
import eminemBackground from '../images/eminem-background.jpg'
import dvdBackground from '../images/dave-background.jpg'
import doomBackground from '../images/doom-background.jpg'
import mewgenicsBackground from '../images/mewgenics-background.png'
import tf2Background from '../images/tf2-background.jpg'
import systemOfADownBackground from '../images/systemOfADown-background.jpg'
import mikuBackground from '../images/miku-background.jpg'
import kdaBackground from '../images/kda-background.jpg'
import emoOrangesBackground from '../images/emotionalOranges-background.jpg'
import tchaikovskyBackground from '../images/tchaikovsky-background.jpg'
import louisBackground from '../images/louis-background.jpg'

export type Track = {
    id: number;
    name: string,
    author : string,
    src : string,
    duration : number,
    album_img? : string,
    albumId? : number,
    auditions : number,
    tags : string[],
}
export type Album = {
    id : number,
    title : string,
    album_cover : string,
    background_cover : string,
    background_position? : 'top' | 'center' | 'bottom',
    subscribers : number,
    aboutText? : string,
}

export type Genre = {
    id : string,
    title : string,
    cover : string,
    backgroundCover : string,
    aboutText? : string,
}


export const Tracks : Track[] = [
    {id: 1,name : "Dust", author : 'Hotline Miami 2', src: '../music/Dust.mp3', duration : 302, album_img: HM2_album, albumId: 1, auditions: 100245992, tags:['videogame', 'electronic']},
    {id: 3,name: "Future club", author : 'Hotline Miami 2', src:'../music/future-club.mp3', duration : 289, album_img: HM2_album, albumId: 1, auditions: 80425442, tags:['videogame', 'electronic']},
    {id: 4,name: "Opening theme", author : 'Hotline Miami 2', src:'../music/HM2-opening.mp3', duration : 219, album_img: HM2_album, albumId: 1, auditions: 93129883, tags:['videogame', 'electronic']},
    {id: 5,name: "Divide", author : 'Hotline Miami 2', src:'../music/HM2-divide.mp3', duration : 256, album_img: HM2_album, albumId: 1, auditions: 120633922, tags:['videogame', 'electronic']},
    {id: 6,name: "Paris", author : 'Hotline Miami 2', src:'../music/HM2-paris.mp3', duration : 272, album_img: HM2_album, albumId: 1, auditions: 100040800, tags:['videogame', 'electronic']},
    {id: 7,name: "Hydrogen", author : 'Hotline Miami 2', src:'../music/HM2-hydrogen.mp3', duration : 289, album_img: HM2_album, albumId: 1, auditions: 112820992, tags:['videogame', 'electronic']},
    {id: 8,name: "The Real Slim Shady", author : 'Eminem', src:'../music/Eminem-The_Real_Slim_Shady.mp3', duration : 284, album_img: EminemAlbum, albumId: 3, auditions: 2460135113, tags:['rap']},
    {id: 9,name: "Houdini", author : 'Eminem', src:'../music/Eminem-Houdini.mp3', duration : 227, album_img: EminemAlbum, albumId: 3, auditions: 763200883, tags:['rap']},
    {id: 10,name: "Im Back", author : 'Eminem', src:'../music/Eminem-Im_Back.mp3', duration : 310, album_img: EminemAlbum, albumId: 3, auditions: 800424992, tags:['rap']},
    {id: 11,name: "My Name Is", author : 'Eminem', src:'../music/Eminem-My_Name_Is.mp3', duration : 268, album_img: EminemAlbum, albumId: 3, auditions: 761040144, tags:['rap']},
    {id: 12,name: "Rap God", author : 'Eminem', src:'../music/Eminem-Rap_God.mp3', duration : 364, album_img: EminemAlbum, albumId: 3, auditions: 1275572158, tags:['rap']},
    {id: 13,name: "Till I Collapse", author : 'Eminem', src:'../music/Eminem-Till_I_Collapse.mp3', duration : 297, album_img: EminemAlbum, albumId: 3, auditions: 2491842126, tags:['rap']},
    {id: 14,name: "Without Me", author : 'Eminem', src:'../music/Eminem-Without_Me.mp3', duration : 291, album_img: EminemAlbum, albumId: 3, auditions: 3077499050, tags:['rap']},
    {id: 15,name: "Blinding Lights", author : 'The Weeknd', src:'../music/The_Weeknd-Blinding_Lights.mp3', duration : 201, album_img: WeendAlbum, albumId: 2, auditions: 3077499050, tags:['pop']},
    {id: 16,name: "Cant Feel My Face", author : 'The Weeknd', src:'../music/The_Weeknd-Cant_Feel_My_Face.mp3', duration : 213, album_img: WeendAlbum, albumId: 2, auditions: 3077499050, tags:['pop']},
    {id: 17,name: "Die For You", author : 'The Weeknd', src:'../music/The_Weeknd-Die_For_You.mp3', duration : 260, album_img: WeendAlbum, albumId: 2, auditions: 3077499050, tags:['pop']},
    {id: 18,name: "I Feel It Coming", author : 'The Weeknd', src:'../music/The_Weeknd-I_Feel_It_Coming.mp3', duration : 269, album_img: WeendAlbum, albumId: 2, auditions: 3077499050, tags:['pop']},
    {id: 19,name: "Save Your Tears", author : 'The Weeknd', src:'../music/The_Weeknd-Save_Your_Tears.mp3', duration : 215, album_img: WeendAlbum, albumId: 2, auditions: 3077499050, tags:['pop']},
    {id: 20,name: "The Hills", author : 'The Weeknd', src:'../music/The_Weeknd-The_Hills.mp3', duration : 242, album_img: WeendAlbum, albumId: 2, auditions: 3077499050, tags:['pop']},
    {id: 21,name: "1-800", author : 'bbno$', src:'../music/bbno-1-800.mp3', duration : 209, album_img: BbnoAlbum, albumId: 4, auditions: 148554426, tags:['rap', 'pop']},
    {id: 22,name: "check", author : 'bbno$', src:'../music/bbno-check.mp3', duration : 122, album_img: BbnoAlbum, albumId: 4, auditions: 127666939, tags:['rap', 'pop']},
    {id: 23,name: "come to brazil", author : 'bbno$', src:'../music/bbno-come_to_brazil.mp3', duration : 133, album_img: BbnoAlbum, albumId: 4, auditions: 21256547, tags:['rap', 'pop']},
    {id: 24,name: "edamame", author : 'bbno$', src:'../music/Bbno-edamame.mp3', duration : 133, album_img: BbnoAlbum, albumId: 4, auditions: 672772580, tags:['rap', 'pop']},
    {id: 25,name: "hot topic", author : 'bbno$', src:'../music/Bbno-hot_topic.mp3', duration : 115, album_img: BbnoAlbum, albumId: 4, auditions: 56884234, tags:['rap', 'pop']},
    {id: 26,name: "NSFW", author : 'bbno$', src:'../music/Bbno-NSFW.mp3', duration : 146, album_img: BbnoAlbum, albumId: 4, auditions: 120624953, tags:['rap', 'pop']},
    {id: 27,name: "two", author : 'bbno$', src:'../music/bbno-two.mp3', duration : 135, album_img: BbnoAlbum, albumId: 4, auditions: 190536878, tags:['rap', 'pop']},
    {id: 28,name: "u mad", author : 'bbno$', src:'../music/bbno-u_mad.mp3', duration : 151, album_img: BbnoAlbum, albumId: 4, auditions: 80772953, tags:['rap', 'pop']},
    {id: 29,name: "Diver", author : 'Dave the diver', src:'../music/Dave the Diver OST - Diver.mp3', duration : 105, album_img: dvdAlbum, albumId: 5, auditions: 34967295, tags:['videogame']},
    {id: 30,name: "Gardening And Things", author : 'Dave the diver', src:'../music/Dave the Diver OST — Gardening And Things.mp3', duration : 83, album_img: dvdAlbum, albumId: 5, auditions: 34967295, tags:['videogame']},
    {id: 31,name: "On the boat", author : 'Dave the diver', src:'../music/Dave the Diver OST - On the boat.mp3', duration : 72, album_img: dvdAlbum, albumId: 5, auditions: 34967295, tags:['videogame']},
    {id: 32,name: "Restaurant Prep", author : 'Dave the diver', src:'../music/Dave the Diver OST - Restaurant Prep.mp3', duration : 100, album_img: dvdAlbum, albumId: 5, auditions: 34967295, tags:['videogame']},
    {id: 33,name: "Seals and Dolphins", author : 'Dave the diver', src:'../music/Dave the Diver OST - Seals and Dolphins.mp3', duration : 131, album_img: dvdAlbum, albumId: 5, auditions: 34967295, tags:['videogame']},
    {id: 34,name: "Welcome to My Bistro", author : 'Dave the diver', src:'../music/Dave the Diver OST - Welcome to My Bistro.mp3', duration : 76, album_img: dvdAlbum, albumId: 5, auditions: 34967295, tags:['videogame']},
    {id: 35,name: "The Blue Hole", author : 'Dave the diver', src:'../music/Dave the Diver OST—The Blue Hole.mp3', duration : 149, album_img: dvdAlbum, albumId: 5, auditions: 34967295, tags:['videogame']},
    {id: 36,name: "Cultist Base", author : 'DOOM', src:'../music/doom_eternal_02. Cultist Base.mp3', duration : 333, album_img: DoomAlbum, albumId: 6, auditions: 34967295, tags:['videogame']},
    {id: 37,name: "The DOOM Hunter", author : 'DOOM', src:'../music/doom_eternal_09. The DOOM Hunter.mp3', duration : 309, album_img: DoomAlbum, albumId: 6, auditions: 34967295, tags:['videogame']},
    {id: 38,name: "The Super Gore Nest", author : 'DOOM', src:'../music/doom_eternal_21. The Super Gore Nest.mp3', duration : 312, album_img: DoomAlbum, albumId: 6, auditions: 34967295, tags:['videogame']},
    {id: 39,name: "The Only Thing They Fear Is You", author : 'DOOM', src:'../music/doom_eternal_22. The Only Thing They Fear Is You.mp3', duration : 413, album_img: DoomAlbum, albumId: 6, auditions: 34967295, tags:['videogame']},
    {id: 40,name: "DOOM Eternal", author : 'DOOM', src:'../music/doom_eternal_57. DOOM Eternal.mp3', duration : 298, album_img: DoomAlbum, albumId: 6, auditions: 34967295, tags:['videogame']},
    {id: 41,name: "BFG Division", author : 'DOOM', src:'../music/Mick Gordon - BFG Division (hitmos.fm).mp3', duration : 506, album_img: DoomAlbum, albumId: 6, auditions: 34967295, tags:['videogame']},
    {id: 42,name: "Hellwalker", author : 'DOOM', src:'../music/Mick Gordon - Hellwalker (hitmos.fm).mp3', duration : 305, album_img: DoomAlbum, albumId: 6, auditions: 34967295, tags:['videogame']},
    {id: 43,name: "Rip & Tear", author : 'DOOM', src:'../music/Mick Gordon - Rip   Tear (hitmos.fm).mp3', duration : 257, album_img: DoomAlbum, albumId: 6, auditions: 34967295, tags:['videogame']},
    {id: 44,name: "Crystalline Dreams", author : 'Mewgenics', src:'../music/Crystalline Dreams (mewgenics ost).mp3', duration : 227, album_img: MewgenicsAlbum, albumId: 7, auditions: 34967295, tags:['videogame']},
    {id: 45,name: "Guillotina", author : 'Mewgenics', src:'../music/Guillotina(mewgenics).mp3', duration : 215, album_img: MewgenicsAlbum, albumId: 7, auditions: 34967295, tags:['videogame']},
    {id: 46,name: "Lonesome Road", author : 'Mewgenics', src:'../music/Lonesome Road (mewgenics).mp3', duration : 221, album_img: MewgenicsAlbum, albumId: 7, auditions: 34967295, tags:['videogame']},
    {id: 47,name: "A Little Heart to Heart", author : 'Team Fortress 2', src:'../music/tf2-A Little Heart to Heart.mp3', duration : 96, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame', 'jazz']},
    {id: 48,name: "Dapper Cadaver", author : 'Team Fortress 2', src:'../music/tf2-Dapper Cadaver.mp3', duration : 118, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame']},
    {id: 49,name: "Drunken Pipe Bomb", author : 'Team Fortress 2', src:'../music/tf2-Drunken Pipe Bomb.mp3', duration : 92, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame']},
    {id: 50,name: "Intruder Alert", author : 'Team Fortress 2', src:'../music/tf2-Intruder Alert.mp3', duration : 113, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame']},
    {id: 51,name: "It Hates Me So Much", author : 'Team Fortress 2', src:'../music/tf2-It Hates Me So Much.mp3', duration : 131, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame']},
    {id: 52,name: "Medic!", author : 'Team Fortress 2', src:'../music/tf2-Medic!.mp3', duration : 154, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame']},
    {id: 53,name: "Mercenary Park", author : 'Team Fortress 2', src:'../music/tf2-Mercenary Park.mp3', duration : 104, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame']},
    {id: 54,name: "RED Triumphs!", author : 'Team Fortress 2', src:'../music/tf2-RED Triumphs!.mp3', duration : 98, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame']},
    {id: 55,name: "Right Behind You", author : 'Team Fortress 2', src:'../music/tf2-Right Behind You.mp3', duration : 100, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame', 'jazz']},
    {id: 56,name: "Robots!", author : 'Team Fortress 2', src:'../music/tf2-Robots!.mp3', duration : 215, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame']},
    {id: 57,name: "Team Fortress 2", author : 'Team Fortress 2', src:'../music/tf2-Team Fortress 2.mp3', duration : 75, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame']},
    {id: 58,name: "The Art of War", author : 'Team Fortress 2', src:'../music/tf2-The Art of War.mp3', duration : 138, album_img: Tf2Album, albumId: 8, auditions: 34967295, tags:['videogame']},
    {id: 59,name: "Chop Suey", author : 'System Of A Down', src:'../music/System_of_a_Down_-_Chop_Suey.mp3', duration : 211, album_img: systemOfADownAlbum, albumId: 9, auditions: 34967295, tags:['rock']},
    {id: 60,name: "F**k The System", author : 'System Of A Down', src:'../music/System_of_a_Down_-_Fk_The_System_48391812.mp3', duration : 132, album_img: systemOfADownAlbum, albumId: 9, auditions: 34967295, tags:['rock']},
    {id: 61,name: "Lonely Day", author : 'System Of A Down', src:'../music/System_of_a_Down_-_Lonely_Day_47954602.mp3', duration : 167, album_img: systemOfADownAlbum, albumId: 9, auditions: 34967295, tags:['rock']},
    {id: 62,name: "Toxicity", author : 'System Of A Down', src:'../music/System_of_a_Down_-_Toxicity_47958327.mp3', duration : 218, album_img: systemOfADownAlbum, albumId: 9, auditions: 34967295, tags:['rock']},
    {id: 63,name: "Radiant Revival", author : 'Hatsune Miku', src:'../music/Hatsune_Miku_-_Radiant_Revival.mp3', duration : 209, album_img: mikuAlbum, albumId: 10, auditions: 56777246, tags:['jPop', 'electronic']},
    {id: 64,name: "Ievan Polkka", author : 'Hatsune Miku', src:'../music/Hatsune_Miku-Ievan_Polkka_Remastered_2024.mp3', duration : 152, album_img: mikuAlbum, albumId: 10, auditions: 84963665, tags:['jPop', 'electronic']},
    {id: 65,name: "Intergalactic Bound", author : 'Hatsune Miku', src:'../music/Hatsune_Miku-Intergalactic_Bound.mp3', duration : 216, album_img: mikuAlbum, albumId: 10, auditions: 99348224, tags:['jPop', 'electronic']},
    {id: 66,name: "Just 1 DB Louder", author : 'Hatsune Miku', src:'../music/Hatsune_Miku-just_1_db_louder.mp3', duration : 201, album_img: mikuAlbum, albumId: 10, auditions: 78221489, tags:['jPop', 'electronic']},
    {id: 67,name: "Miku", author : 'Hatsune Miku', src:'../music/Hatsune_Miku-Miku.mp3', duration : 223, album_img: mikuAlbum, albumId: 10, auditions: 266994117, tags:['jPop', 'electronic']},
    {id: 68,name: "ILL SHOW YOU", author : 'K/DA', src:'../music/KDA_-_ILL_SHOW_YOU.mp3', duration : 198, album_img: kdaAlbum, albumId: 11, auditions: 266994117, tags:['kPop']},
    {id: 69,name: "POPSTARS", author : 'K/DA', src:'../music/KDA_Madison_Beer_i-dle_Jaira_Burns_League_of_Legends_-_POPSTARS.mp3', duration : 191, album_img: kdaAlbum, albumId: 11, auditions: 266994117, tags:['kPop']},
    {id: 70,name: "MORE", author : 'K/DA', src:'../music/KDA_Madison_Beer_i-dle_Lexie_Liu_Jaira_Burns_Seraphine_-_MORE.mp3', duration : 217, album_img: kdaAlbum, albumId: 11, auditions: 266994117, tags:['kPop']},
    {id: 71,name: "VILLAIN", author : 'K/DA', src:'../music/KDA_Madison_Beer_Kim_Petras_League_of_Legends_-_VILLAIN.mp3', duration : 199, album_img: kdaAlbum, albumId: 11, auditions: 266994117, tags:['kPop']},
    {id: 72,name: "DRUM GO DUM", author : 'K/DA', src:'../music/KDA_Wolftyla_Bekuh_BOOM_ALUNA_League_of_Legends_-_DRUM_GO_DUM.mp3', duration : 200, album_img: kdaAlbum, albumId: 11, auditions: 266994117, tags:['kPop']},
    {id: 73,name: "MGICALCURE LOVE SHOT", author : 'Hatsune Miku', src:'../music/SAWTOWNE_feat_Hatsune_Miku_-_MGICALCURE_LOVE_SHOT_78366557.mp3', duration : 202, album_img: mikuAlbum, albumId: 10, auditions: 266994117, tags:['jPop', 'electronic']},

    {id: 74,name: "All That", author : 'Emotional Oranges', src:'../music/Emotional Oranges — All That.mp3', duration : 185, album_img: emoOrangesAlbum, albumId: 12, auditions: 250772991, tags:['indie']},
    {id: 75,name: "Bounce", author : 'Emotional Oranges', src:'../music/Emotional Oranges — Bounce.mp3', duration : 172, album_img: emoOrangesAlbum, albumId: 12, auditions: 113005219, tags:['indie']},
    {id: 76,name: "Call It Off", author : 'Emotional Oranges', src:'../music/Emotional Oranges — Call It Off.mp3', duration : 216, album_img: emoOrangesAlbum, albumId: 12, auditions: 111633820, tags:['indie']},
    {id: 77,name: "Cardigan", author : 'Emotional Oranges', src:'../music/Emotional Oranges — Cardigan.mp3', duration : 190, album_img: emoOrangesAlbum, albumId: 12, auditions: 78153882, tags:['indie']},
    {id: 78,name: "Corners Of My Mind", author : 'Emotional Oranges', src:'../music/Emotional Oranges - Corners Of My Mind.mp3', duration : 212, album_img: emoOrangesAlbum, albumId: 12, auditions: 266994117, tags:['indie']},
    {id: 79,name: "Slide All Night", author : 'Emotional Oranges', src:'../music/Emotional Oranges — Slide All Night.mp3', duration : 175, album_img: emoOrangesAlbum, albumId: 12, auditions: 37228452, tags:['indie']},
    {id: 80,name: "West Coast Love", author : 'Emotional Oranges', src:'../music/Emotional_Oranges_-_West_Coast_Love.mp3', duration : 215, album_img: emoOrangesAlbum, albumId: 12, auditions: 115736733, tags:['indie']},

    {id: 81,name: "Испанский танец", author : 'Чайковский', src:'../music/chajjkovskijj-ispanskijj-tanec.mp3', duration : 139, album_img: tchaikovskyAlbum, albumId: 13, auditions: 308005187, tags:['classic']},
    {id: 82,name: "Полька дял танцев", author : 'Чайковский', src:'../music/chajjkovskijj-polka-dlja-tancev.mp3', duration : 279, album_img: tchaikovskyAlbum, albumId: 13, auditions: 188900206, tags:['classic']},
    {id: 83,name: "Танец феи драже", author : 'Чайковский', src:'../music/chajjkovskijj-tanec-fei-drazhe.mp3', duration : 124, album_img: tchaikovskyAlbum, albumId: 13, auditions: 234578967, tags:['classic']},
    {id: 84,name: "Танец маленьких лебедей", author : 'Чайковский', src:'../music/chajjkovskijj-tanec-malenkikh-lebedejj.mp3', duration : 101, album_img: tchaikovskyAlbum, albumId: 13, auditions: 277234962, tags:['classic']},
    {id: 85,name: "Вальс цветов", author : 'Чайковский', src:'../music/chajjkovskijj-vals-cvetov.mp3', duration : 428, album_img: tchaikovskyAlbum, albumId: 13, auditions: 378656828, tags:['classic']},

    {id: 86,name: "Hello Brother", author : 'Louis Armstrong', src:'../music/Louis_Armstrong_And_The_All-Stars_-_Hello_Brother_47937315.mp3', duration : 209, album_img: louisAlbum, albumId: 14, auditions: 378656828, tags:['jazz']},
    {id: 87,name: "What A Wonderful World", author : 'Louis Armstrong', src:'../music/Louis_Armstrong_Louis_Armstrong_-_What_A_Wonderful_World_47937264.mp3', duration : 138, album_img: louisAlbum, albumId: 14, auditions: 378656828, tags:['jazz']},
    {id: 88,name: "Hello Dolly", author : 'Louis Armstrong', src:'../music/Louis_Armstrong_Louis_Armstrong_And_The_All-Stars_-_Hello_Dolly_47937173.mp3', duration : 144, album_img: louisAlbum, albumId: 14, auditions: 378656828, tags:['jazz']},
    {id: 89,name: "Someday", author : 'Louis Armstrong', src:'../music/Louis_Armstrong_Louis_Armstrong_And_The_All-Stars_-_Someday_47937276.mp3', duration : 221, album_img: louisAlbum, albumId: 14, auditions: 378656828, tags:['jazz']},
    {id: 90,name: "You Are Woman I Am Man", author : 'Louis Armstrong', src:'../music/Louis_Armstrong_Louis_Armstrong_And_The_All-Stars_-_You_Are_Woman_I_Am_Man_47937286.mp3', duration : 137, album_img: louisAlbum, albumId: 14, auditions: 378656828, tags:['jazz']},
    {id: 91,name: "Moon River", author : 'Louis Armstrong', src:'../music/Louis_Armstrong_The_All-Stars_-_Moon_River_47937261.mp3', duration : 180, album_img: louisAlbum, albumId: 14, auditions: 378656828, tags:['jazz']},
]

export const Albums : Album[] = [
    {id : 1, title : 'Hotline Miami 2', album_cover : HM2_album, subscribers: 624000, background_cover : hm2Background, aboutText:'Best songs and music from Hotline Miami 2'},
    {id : 2, title : 'The Weeknd', album_cover : Weeknd, subscribers: 120899344, background_cover : weekndBackground, aboutText:'The Weeknd took over pop music & culture on his own terms filtering R&B, Pop, & hip-hop through an ambitious widescreen lens'},
    {id : 3, title : 'Eminem', album_cover : Eminem, subscribers: 70899245, background_cover : eminemBackground, aboutText:'Apart from being one of the best-selling artists in music history, Eminem is one of the greatest rappers of his generation. He`s effortlessly fast, fluid, dexterous, and unpredictable, capable of pulling off long-form narratives or withering asides'},
    {id : 4, title : 'bbno$', album_cover : Bbno, subscribers: 18534986, background_cover : bbnoBackground, aboutText:'it`s baby no money'},
    {id : 5, title : 'Dave the diver', album_cover : dvd, subscribers: 18534986, background_cover : dvdBackground},
    {id : 6, title : 'DOOM', album_cover : Doom, subscribers: 5678933677, background_cover : doomBackground},
    {id : 7, title : 'Mewgenics', album_cover : Mewgenics, subscribers: 2543886, background_cover : mewgenicsBackground},
    {id : 8, title : 'Team Fortress 2', album_cover : Tf2, subscribers: 358883, background_cover : tf2Background, 
        aboutText: `
Team Fortress 2 — культовый командный шутер от Valve, известный не только своим стилем и персонажами, но и узнаваемым саундтреком.

Музыка игры сочетает джаз, биг-бенд, серф-рок и оркестровые элементы, создавая одновременно комичную и напряжённую атмосферу.

Саундтрек TF2 построен вокруг ярких тем каждого класса и динамичных боевых композиций. В треках часто используются духовые инструменты, контрабас, ударные и винтажное звучание, вдохновлённое музыкой 60-х годов.

Благодаря этому музыка игры легко узнаётся даже вне самого проекта и давно стала важной частью её идентичности.

Сообщество особенно ценит саундтрек за его энергичность и стиль: многие композиции используются в мемах, монтажах и фанатских видео.

Музыка TF2 до сих пор считается одной из самых харизматичных среди многопользовательских игр.
`
    },
    {id : 9, title : 'System Of A Down', album_cover : systemOfADown, subscribers: 26050244, background_cover : systemOfADownBackground, aboutText:'Striking a balance between 80s underground thrash metal and metallic early-90s alternative rock, Armenian-American quartet System of a Down effictively pushed their socially conscious, politically chatged messages into the mosh pits during the turn of the sentury`s nu-metal wave'},
    {id : 10, title : 'Hatsune Miku', album_cover : miku, subscribers: 14553467, background_cover : mikuBackground},
    {id : 11, title : 'K/DA', album_cover : kda, subscribers: 6605442, background_cover : kdaBackground, background_position:'center', aboutText:'With a lively and hard-hitting sound rich in K-Pop, hip-hop, and EDM influences, K/DA exploded onto the music scene in 2018 with their hit song "POP/STARS". Fans couldn`t get enough of their unconventional flair, bold personalities, and distinct mix of global pop styles'},
    {id : 12, title : 'Emotional Oranges', album_cover : emoOranges, subscribers: 3934963, background_cover : emoOrangesBackground, background_position:'center', aboutText:'Text us: 310-620-1210'},
    {id : 13, title : 'Пётр Ильич Чайковский', album_cover : tchaikovsky, subscribers: 9772640, background_cover : tchaikovskyBackground, background_position:'center', aboutText:'Чайковский является одним из величайших композиторов мира, ярким представителем музыкального романтизма и одним из выдающихся лириков и драматургов-психологов в музыке, углубившимся в психологический анализ сложных и противоречивых явлений жизни.'},
    {id : 14, title : 'Louis Armstrong', album_cover : louis, subscribers: 9772640, background_cover : louisBackground, background_position:'center', aboutText:'Louis was an American jazz and blues trumpeter and vocalist. Among the most influential figures in jazz, his career spanned five decades and several eras in the history of the genre. Armstrong received numerous accolades including the Grammy Award for Best Male Vocal Performance for Hello, Dolly! in 1965, as well as a posthumous win for the Grammy Lifetime Achievement Award in 1972. His influence crossed musical genres, with inductions into the DownBeat Jazz Hall of Fame, the Rock and Roll Hall of Fame, and the National Rhythm & Blues Hall of Fame, among others.'},
]


export const Genres : Genre[] = [
    {id : 'pop', title : 'Поп', cover : popCover, backgroundCover : popBackground, aboutText:'Поп — жанр популярной музыки, сочетающий запоминающиеся мелодии, простые структуры песен и современное звучание.'},
    {id : 'jPop', title : 'J-Pop', cover : jpopCover, backgroundCover : rapBackground, aboutText:'Японская поп-музыка с запоминающимися мелодиями, уникальной культурой исполнения и большим влиянием аниме и медиа.'},
    {id : 'kPop', title : 'K-Pop', cover : kpopCover, backgroundCover : rapBackground, aboutText:'Южнокорейская поп-музыка, сочетающая яркие выступления, современное продюсирование и разнообразие музыкальных стилей.'},
    {id : 'rock', title : 'Рок', cover : rockCover, backgroundCover : rockBackground, aboutText:'Энергичный жанр, основанный на гитарном звучании, живых инструментах и мощной подаче.'},
    {id : 'electronic', title : 'Электроника', cover : electronicCover, backgroundCover : electronicBackground, aboutText:'Музыка, создаваемая с использованием электронных инструментов и современных технологий.'},
    {id : 'classic', title : 'Классика', cover : classicCover, backgroundCover : classicBackground, aboutText:'Произведения великих композиторов, проверенные временем и ставшие частью мировой культуры.'},
    {id : 'rap', title : 'Рэп', cover : rapCover, backgroundCover : rapBackground, aboutText:'Жанр, в котором главную роль играют ритм, речитатив и выразительные тексты.'},
    {id : 'jazz', title : 'Джаз', cover : jazzCover, backgroundCover : gamingBackground, aboutText:'Импровизация, сложные гармонии и богатое инструментальное звучание являются основой джаза.' },
    {id : 'indie', title : 'Инди', cover : indieCover, backgroundCover : gamingBackground,aboutText:'Независимая музыка, отличающаяся творческой свободой и уникальным звучанием.'},
    {id : 'videogame', title : 'Игровые', cover : gamingCover, backgroundCover : gamingBackground, aboutText:'Композиции из видеоигр, которые помогают погрузиться в игровой мир и запоминаются на годы.'},
    
]

