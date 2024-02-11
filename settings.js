const fs = require('fs')
const chalk = require('chalk')

global.domain = "https://panelnyaxiety.fidssoffc.my.id" // Isi Domain Lu
global.apikey = 'ptla_xxw75eFsZGjfNCAyMgs5gA4KvCRf3qMvUG9oPSck3bs' // Isi Apikey Plta Lu
global.capikey = 'ptlc_hMaYqteLL9mBhv6CJkF1mf93WwpkJ6CSBwlsciYHezn' // Isi Apikey Pltc Lu
global.creAtor = "6285713888398@s.whatsapp.net"
global.owner = ['6285713888398']
global.namabot = 'BotPushkontak-V4'
global.namaowner = 'Xiety'
global.packname = `By ${namabot}`
global.author = '\nYT : XieTy'
global.sessionName = 'session'
global.email = ' '
global.link = 'https://youtube.com/@XieTyy'
global.ytname = 'YT: XieTy'
global.socialm = 'YT: XieTy'
global.youtube = 'YT: XieTy'
global.website = 'kaga ada'
global.anticall = true
global.region = 'indonesia'
global.github = 'https://github.com/'
global.location = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.mess = 
{
success: '```Success✅```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Fitur Khusus Owner Bot!!!```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./image/thumb.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})