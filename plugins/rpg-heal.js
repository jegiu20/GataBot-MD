import { join } from 'path' 
import { promises } from 'fs'

let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
    
if (user.health >= 100) return conn.sendButton(m.chat, `ππ ππΌπππΏ ππππΌ πππππΌ β€οΈ\nππππ πππΌπππ ππ ππππ β€οΈ`, wm, imgr + `SALUD | HEALTH: ${user.health}`, [
[`ποΈ πΌπππππππΌπ | πππππππ`, `${usedPrefix}adventure`], [`πΌπ«ππ£π©πͺπ§ππ§ | πππ£π©πͺπ§π ποΈ`, `${usedPrefix}adventure`]], fkontak, m)
    
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
    
if (user.potion < count) return conn.sendButton(m.chat,`${htki} πππ πππΎπππππ ${htka}`, 
`πππΎπππππΌπ ${count - user.potion} πππΎπππ π₯€ ππΌππΌ πΎπππΌπππ
πππ ππππΏ ${count - user.potion} ππππππ π₯€ ππ πππΌπ πππ

ππΌπππΏ : πππΌπππ Β» ${user.health} β€οΈ
πππΎπππ : ππππππ Β» ${user.potion} π₯€

πΎπππππΌ πππΎπππ π πππΏπππ πΌ πΌππππππ πππ ππ πππΌπππππππΌ
π½ππ ππππππ ππ πΌππ πππππππ ππ πππΌπππππ πππ`.trim(), imgr + 'POCION BAJA : LOW POTION', [
[`πΎπ€π’π₯π§ππ§ ππ€πππ€π£ | π½πͺπ? ππ€π©ππ€π£ π₯€`, `${usedPrefix}buy potion ${count - user.potion}`],
[`πππππ§ πΌπ?πͺππ | πΌπ¨π  ππ€π§ πππ‘π₯ βοΈ`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con ${count - user.potion} de POCION* π₯€ 
*Β» AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], fkontak, m)
  
    user.potion -= count * 1 //1 potion = count (1) 
    user.health += heal * count
    
conn.sendButton(m.chat, `*βββγ β ππΌπππΏ πΎπππππππΌ γβββ*`, `πππππππΌπππππ πππ ${count} πΏπ πππΎπππ π₯€ ππΌππΌ πππΎπππππΌπ ππ ππΌπππΏ\n\nπππΎπΎππππππππ πππ ${count} ππππππ π₯€ ππ πππΎππππ πππΌπππ\n\nππΌπππΏ : πππΌπππ Β» ${user.health} β€οΈ`, imgr + 'SALUD COMPLETADA : HEALTH COMPLETED', [
[`πΌπ«ππ£π©πͺπ§ππ§ | πππ£π©πͺπ§π ποΈ`, `${usedPrefix}adventure`]], fkontak, m)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
