const chalk = require('chalk')
const fs = require('fs')

global.listmenu = `
┏────────────•
┃  ⌜                        ⌝
┃   ┊LIST MENU┊
┃  ⌞                        ⌟ 
┠┬──
┃│
┃├╾➪.Allmenu
┃├╾➪.Ownermenu
┃├╾➪.Groupmenu
┃├╾➪.Bugmenu
┃├╾➪.Pushkontakmenu
┃├╾➪.Panelmenu
┃├╾➪.Domainmenu
┃├╾➪.Bannedmenu
┃├╾➪.Unbannedmenu
┃├╾➪.Othermenu
┃│
┗┴──────•

    -ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy
`

global.allmenu = `
┏────────────•
┃  ⌜                                  ⌝
┃     ┊OWNER MENU┊
┃  ⌞                                  ⌟ 
┠┬──
┃│
┃├╾➪.Self
┃├╾➪.Public
┃├╾➪.Restart
┃├╾➪.Shutdown
┃├╾➪.CreateGc
┃├╾➪.ListPc
┃├╾➪.Block 628xx
┃├╾➪.Unblock 628xxx
┃├╾➪.SetPpBot
┃├╾➪.Delete
┃│
┗┴──────•


┏────────────•
┃  ⌜                                 ⌝
┃     ┊GROUP MENU┊
┃  ⌞                                 ⌟ 
┠┬──
┃│
┃├╾➪.Kick @
┃├╾➪.Add +628xxx
┃├╾➪.Linkgc
┃├╾➪.Hidetag (Teks)
┃├╾➪.TagAll (Teks)
┃├╾➪.Antilink (On/Off)
┃├╾➪.Gc (O/C Open/Close)
┃├╾➪.Welcome (On/Off)
┃├╾➪.Left (On/Off)
┃├╾➪.SetPpGc
┃├╾➪.SetDesk
┃├╾➪.ListOnline
┃├╾➪.Setname
┃│
┗┴──────•


┏────────────•
┃  ⌜                           ⌝
┃     ┊BUG MENU┊
┃  ⌞                           ⌟ 
┠┬──
┃│
┃├╾➪.🫑 *Jumlah*
┃├╾➪.☠️ *Jumlah*
┃├╾➪.🔥 *Jumlah*
┃├╾➪.🌷 *628xxx*
┃├╾➪.🐲 *628xxx*
┃├╾➪.🐉 *628xxx*
┃├╾➪.Santet *628xxx*
┃├╾➪.Senddelay *628xxx*
┃├╾➪.Santetgc *idgc*
┃├╾➪.Delaygc *idgc
┃├╾➪.Santetunli *628xxx*
┃├╾➪.Lagunli *628xxx*
┃├╾➪.Santetunligc *idgc*
┃├╾➪.Lagunligc *idgc*
┃├╾➪.Unlitet
┃├╾➪.Unlilag
┃│
┗┴──────•


┏────────────•
┃  ⌜                                                 ⌝
┃       ┊PUSHKONTAK MENU┊
┃  ⌞                                                 ⌟ 
┠┬──
┃│
┃├╾➪.PushkontakV1 
┃├╾➪.PushkontakV2 
┃├╾➪.Jpm
┃├╾➪.Bcvideo
┃├╾➪.Bcgc
┃├╾➪.Listidgc
┃├╾➪.Getidgc
┃├╾➪.Join
┃├╾➪.Cekmember
┃├╾➪.Savecontact *viaid*
┃├╾➪.Savecontactv1
┃├╾➪.Clearvcf
┃├╾➪.Clearjson
┃│
┗┴──────•


┏────────────•
┃  ⌜                                ⌝
┃     ┊PANEL MENU┊
┃  ⌞                                ⌟ 
┠┬──
┃│
┃├╾➪.1GB
┃├╾➪.2GB
┃├╾➪.4GB
┃├╾➪.5GB
┃├╾➪.6GB
┃├╾➪.7GB
┃├╾➪.Unli
┗┴──────•


┏────────────•
┃  ⌜                                ⌝
┃   ┊DOMAIN MENU┊
┃  ⌞                                ⌟ 
┠┬──
┃│
┃├╾➪.Domain1 jasa-panel.my.id 
┃├╾➪.Domain2 sellerpannel.my.id 
┃├╾➪.Domain3 panellku.my.id 
┃├╾➪.Domain4 panellku.me 
┃├╾➪.Domain5 panellku.biz.id 
┃├╾➪.Domain6 panellku.com 
┃├╾➪.Domain7 mypanel.biz.id 
┃├╾➪.Domain8 panellku.art 
┃├╾➪.Domain9 kangpannel.xyz 
┃├╾➪.Domain10 pannelfast.xyz
┗┴──────•


┏────────────•
┃  ⌜                                ⌝
┃     ┊OTHER MENU┊
┃  ⌞                                ⌟ 
┠┬──
┃│
┃├╾➪.Sticker
┃├╾➪.Smeme
┃├╾➪.Tiktok
┃├╾➪.Setppbot
┃├╾➪.Call
┃├╾➪.Ping
┃│
┗┴──────•


    -ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy`
 
global.ownermenu = `
┏────────────•
┃  ⌜                                  ⌝
┃     ┊OWNER MENU┊
┃  ⌞                                  ⌟ 
┠┬──
┃│
┃├╾➪.Self
┃├╾➪.Public
┃├╾➪.Restart
┃├╾➪.Shutdown
┃├╾➪.CreateGc
┃├╾➪.ListPc
┃├╾➪.Block 628xx
┃├╾➪.Unblock 628xxx
┃├╾➪.SetPpBot
┃├╾➪.Delete
┃│
┗┴──────•


    -ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy`


global.groupmenu = `
┏────────────•
┃  ⌜                                 ⌝
┃     ┊GROUP MENU┊
┃  ⌞                                 ⌟ 
┠┬──
┃│
┃├╾➪.Kick @
┃├╾➪.Add +628xxx
┃├╾➪.Linkgc
┃├╾➪.Hidetag (Teks)
┃├╾➪.TagAll (Teks)
┃├╾➪.Antilink (On/Off)
┃├╾➪.Gc (O/C Open/Close)
┃├╾➪.Welcome (On/Off)
┃├╾➪.Left (On/Off)
┃├╾➪.SetPpGc
┃├╾➪.SetDesk
┃├╾➪.ListOnline
┃├╾➪.Setname
┃│
┗┴──────•


    -ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy`
 
 
global.bugmenu = `
┏────────────•
┃  ⌜                           ⌝
┃     ┊BUG MENU┊
┃  ⌞                           ⌟ 
┠┬──
┃│
┃├╾➪.🫑 *Jumlah*
┃├╾➪.☠️ *Jumlah*
┃├╾➪.🔥 *Jumlah*
┃├╾➪.🌷 *628xxx*
┃├╾➪.🐲 *628xxx*
┃├╾➪.🐉 *628xxx*
┃├╾➪.Santet *628xxx*
┃├╾➪.Senddelay *628xxx*
┃├╾➪.Santetgc *idgc*
┃├╾➪.Delaygc *idgc
┃├╾➪.Santetunli *628xxx*
┃├╾➪.Lagunli *628xxx*
┃├╾➪.Santetunligc *idgc*
┃├╾➪.Lagunligc *idgc*
┃├╾➪.Unlitet
┃├╾➪.Unlilag
┃│
┗┴──────•


    -ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy`

global.pshkntk = `
┏────────────•
┃  ⌜                                                 ⌝
┃       ┊PUSHKONTAK MENU┊
┃  ⌞                                                 ⌟ 
┠┬──
┃│
┃├╾➪.PushkontakV1 
┃├╾➪.PushkontakV2 
┃├╾➪.Jpm
┃├╾➪.Bcvideo
┃├╾➪.Bcgc
┃├╾➪.Listidgc
┃├╾➪.Getidgc
┃├╾➪.Join
┃├╾➪.Cekmember
┃├╾➪.Savecontact *viaid*
┃├╾➪.Savecontactv1
┃├╾➪.Clearvcf
┃├╾➪.Clearjson
┃│
┗┴──────•


    -ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy`
 
 
 global.panel =`
┏────────────•
┃  ⌜                                ⌝
┃     ┊PANEL MENU┊
┃  ⌞                                ⌟ 
┠┬──
┃│
┃├╾➪.1GB
┃├╾➪.2GB
┃├╾➪.4GB
┃├╾➪.5GB
┃├╾➪.6GB
┃├╾➪.7GB
┃├╾➪.Unli
┗┴──────•


ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy `
 
 
global.domain = `
┏────────────•
┃  ⌜                                ⌝
┃   ┊DOMAIN MENU┊
┃  ⌞                                ⌟ 
┠┬──
┃│
┃├╾➪.Domain1 jasa-panel.my.id 
┃├╾➪.Domain2 sellerpannel.my.id 
┃├╾➪.Domain3 panellku.my.id 
┃├╾➪.Domain4 panellku.me 
┃├╾➪.Domain5 panellku.biz.id 
┃├╾➪.Domain6 panellku.com 
┃├╾➪.Domain7 mypanel.biz.id 
┃├╾➪.Domain8 panellku.art 
┃├╾➪.Domain9 kangpannel.xyz 
┃├╾➪.Domain10 pannelfast.xyz
┗┴──────•


ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy
` 
 
 global.bannedmenu = `
 ┏────────────•
┃  ⌜                                ⌝
┃   ┊BANNED MENU┊
┃  ⌞                                ⌟ 
┠┬──
┃│
┃├╾➪.uot *nomor*
┃├╾➪.verif *nomor*
┃├╾➪.kenon *nomor*
┃├╾➪.bannedv1 *nomor*
┃├╾➪.bannedv2 *nomor*
┃├╾➪.bannedv3 *nomor*
┃├╾➪.bannedv4 *nomor*
┃├╾➪.bannedv5 *nomor*
┃├╾➪.bannedv6 *nomor*
┃│
┗┴──────•



-ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy `
 
 global.unbanned = `
 ┏────────────•
┃  ⌜                                ⌝
┃    ┊UNBANNED MENU┊
┃  ⌞                                ⌟ 
┠┬──
┃│
┃├╾➪.unbannedv1 *nomor*
┃├╾➪.unbannedv2 *nomor*
┃├╾➪.unbannedv3 *nomor*
┃├╾➪.unbannedv4 *nomor*
┃├╾➪.unbannedv5 *nomor*
┃│
┗┴──────•



-ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy `
 
global.othermenu = `
┏────────────•
┃  ⌜                                ⌝
┃     ┊OTHER MENU┊
┃  ⌞                                ⌟ 
┠┬──
┃│
┃├╾➪.Sticker
┃├╾➪.Smeme
┃├╾➪.Tiktok
┃├╾➪.Setppbot
┃├╾➪.Call
┃├╾➪.Ping
┃│
┗┴──────•


    -ˏˋ YOUTUBE CHANEL ˊˎ
 https://youtube.com/@XieTyy`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
