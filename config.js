/*

# Base By Spider v7
# Youtube= Tech God
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐸','🗿']
global.owner = ['2349115983460']
global.ownMain = '2349115983460'
global.NamaOwner = 'Joshua' //your name
global.sessionName = 'session'
global.connect = true // for qr code do this false
global.namabot = 'Josh BOT' //don't change
global.author = 'Josh' //don't change
global.packname = 'Josh Pack' //sticker name
global.domain = '' // Isi Domain Lu
global.apikey = 'ptla_F9N0OMtFjU0fbiO04EJiPUcw3XaPgMUmJZA6cAk3zt8' // Isi Apikey Plta Lu
global.capikey = 'ptlc_4SNLfuJidXDSWPx1LeIdY3TrFrcTaUcWqcJ92uORpTV' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.url1 = 'https://whatsapp.com/channel/0029Val2ddrATRSos0x5TX0T' //don't change this
global.url2 = 'https://www.youtube.com/@Joshua' //Don't change this
global.linkgc = 'https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH'
global.delayjpm = 3500

global.mess = { // Don't change this
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is used when Josh is a group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not Joshua.',
premium: 'You are not Joshua.',
seller: 'This feature can only be used by resellers and Joshua.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?😡`,
wait: '*Waiting for Josh to respond*',
success: 'Success sent by Joshua',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "⭑̤⟅̊༑ good Morning ͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏",
bbb: "🦠̂⃟꙳͙͡༑ᐧ how r u brother༑꙳͆⃟💚̺⃰",
ccc: "☠️⃟ ̊ ̥ ༚𐨁this is my location ̥ ̊ ༚👻⃰ꢵ⭑trck ͙ ꢵ ✩ ‌‌‌‌‌‌‌‌‌‌‌",
ddd: "🩸⃰͜͡⭑thanks⭑͜͡🩸⃰",
eee: "*👑༘⃰Josh 𑅆༏",
xxx: "► JOSH BOT- 𝚵𝐗͢𝐏𝐋𝚫͢𝐍 ◄",
sss: "‐‣ Josh BOT - 𝒇𝒂𝒊𝒍 𝑩𝒆𝒕𝒂  ✨",
ttt: "Josh BOT- #1𝗌𝗍"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
