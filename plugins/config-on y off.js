let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => { 
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

const sections = [
{
title: `πππππΌ πΏπ πΎππππππππΌπΎπππ`,
rows: [
{title: "π π½ππππππππΏπΌ | ππππΎπππ", description: "πΎπ€π£π©ππ£πππ€ ππ π‘π π½πππ£π«ππ£πππ π₯ππ§π ππ‘ ππ§πͺπ₯π€\nπΎπ€π£π©ππ£π© π€π π©ππ πππ‘ππ€π’π ππ€π§ π©ππ ππ§π€πͺπ₯", rowId: `${usedPrefix + command} welcome`},
{title: "π πππΏπ πππ½πππΎπ | πππ½πππΎ πππΏπ", description: "ππ¨ππ§ ππ‘ π½π€π© ππ£ ππ€ππ€ ππͺππ‘πππ€ π€ ππ§ππ«πππ€\nππ¨π π©ππ π½π€π© ππ£ ππͺππ‘ππ π€π§ ππ§ππ«ππ©π ππ€ππ", rowId: `${usedPrefix + command} public`},
{title: "π πππΏπ πππππ | πππΏπ +18", description: "ππ€π¨π©π§ππ§ πΎπ€π’ππ£ππ€π¨ +18\nπΎπ€π’π’ππ£ππ¨ +18", rowId: `${usedPrefix + command} modohorny`},
{title: "π πΌπππ ππππΌπΎππ | πΌπππππππ", description: "ππ‘ππ’ππ£ππ§ ππ£π‘ππππ¨ ππ ππ§πͺπ₯π€π¨ ππ ππππ©π¨πΌπ₯π₯\nπππ’π€π«π π‘ππ£π π¨ ππ§π€π’ ππππ©π¨πΌπ₯π₯ ππ§π€πͺπ₯π¨", rowId: `${usedPrefix + command} antilink`},   
{title: "π πΌπππ ππππΌπΎππ 2 |πΌπππππππ 2", description: "ππ‘ππ’ππ£ππ§ ππ£π‘ππππ¨ π¦πͺπ ππ€π£π©ππ£ππ ππ©π©π₯π¨\nπππ’π€π«π π‘ππ£π π¨ ππ€π£π©πππ£ππ£π ππ©π©π₯π¨", rowId: `${usedPrefix + command} antilink2`},    
{title: "π πΏππππΎππΌπ | πΏππΎπππΎπ", description: "ππ€π©ππππππππ€π£ππ¨ ππ ππ§πͺπ₯π€\nππ§π€πͺπ₯ ππ€π©ππππππ©ππ€π£π¨", rowId: `${usedPrefix + command} detect`},    
{title: "π πΌππππππππππ", description: "ππͺππ ππ π£ππ«ππ‘ πΌπͺπ©π€π’Γ‘π©ππππ’ππ£π©π ππ£ πΎπππ©π¨\nπππ«ππ‘ πͺπ₯ πΌπͺπ©π€π’ππ©ππππ‘π‘π? ππ£ πΎπππ©π¨", rowId: `${usedPrefix + command} autolevelup`},    
{title: "β ππππππππππ | πππππππΎπ", description: "ππ¨ππ§ π‘ππ¨ ππͺπ£πππ€π£ππ¨ π₯ππ§π π¨ππππ§ π?/π€ πΓ±ππππ§ ππ£ ππ‘ ππ§πͺπ₯π€\nππ¨π π©ππ ππͺπ£ππ©ππ€π£π¨ π©π€ π§ππ’π€π«π ππ£π/π€π§ πππ ππ£ π©ππ ππ§π€πͺπ₯", rowId: `${usedPrefix + command} restrict`},    
{title: "β πππΎππππΌ πΌπππππΌπππΎπΌ | πΌππππππΌπΏ", description: "πππππ§ π¦πͺπ ππ‘ π½π€π© π©ππ£ππ π‘π€π¨ π’ππ£π¨ππππ¨ ππ€π’π€ ππΓ­ππ€\nπππ π π©ππ π½π€π© πππ«π π©ππ π’ππ¨π¨ππππ¨ ππ¨ ππππ", rowId: `${usedPrefix + command} autoread`},
{title: "π πΌππΏπππ", description: "ππ¨ππ§ π‘π€π¨ πΎπ€π’ππ£ππ€π¨ ππ πΌπͺπππ€π¨\nππ¨π πΌπͺπππ€ πΎπ€π’π’ππ£ππ¨", rowId: `${usedPrefix + command} audios`},
{title: "ποΈ πΌππππππππππΌπ | πΌππππΏπππππ", description: "ππ€π¨ π’ππ£π¨ππππ¨ ππ‘ππ’ππ£πππ€π¨, ππ‘ π½π€π© π‘π€ π’π€π¨π©π§ππ§π\nπΏππ‘ππ©ππ π’ππ¨π¨ππππ¨, π©ππ π½π€π© π¬ππ‘π‘ π¨ππ€π¬ ππ©", rowId: `${usedPrefix + command} antidelete`},
{title: "β’οΈ πΌππππππππΎππ | πΌππππππππΎ", description: "ππ‘ππ’ππ£ππ§ π π‘ππ¨ π₯ππ§π¨π€π£ππ¨ π¦πͺπ π¨π€π£ π«πͺπ‘πππ§ππ¨ ππ£ ππ§πͺπ₯π€π¨\nπππ’π€π«π π₯ππ€π₯π‘π π¬ππ€ ππ§π π«πͺπ‘πππ§ ππ£ ππ§π€πͺπ₯π¨", rowId: `${usedPrefix + command} antitoxic`},    
{title: "π π½ππ πππππππΌπ | π½ππ πππππππΌπππ ", description: "πππ§π π₯ππ§π’ππ©ππ§ π€ π£π€ π¦πͺπ ππ‘ ππ€π© π¨π πͺπ£π π©ππ’π₯π€π§ππ‘π’ππ£π©π ππ£ ππ§πͺπ₯π€π¨\nππ€ π©ππ’π₯π€π§ππ§ππ‘π? ππ‘π‘π€π¬ π€π§ πππ¨ππ‘π‘π€π¬ π©ππ ππ€π© π©π€ ππ€ππ£ ππ£ ππ§π€πͺπ₯π¨", rowId: `${usedPrefix + command} temporal`},
{title: "π πΌπππ πππ | πΌπππ πππ", description: "πππππ§ π¦πͺπ π£πππ π¨π π€ππͺπ‘π©π ππ£ ππ§πͺπ₯π€π¨\nπππ π π£π€π©πππ£π ππππ ππ£ ππ§π€πͺπ₯π¨", rowId: `${usedPrefix + command} antiver`},
{title: "π€‘ πππΌπΎπΎπππππ | πππΌπΎπππππ", description: "πππππ§ π¦πͺπ ππ‘ π½π€π© π§ππππππ€π£π π πππ£π¨ππππ¨\nπππ π π©ππ π½π€π© π§ππππ© π©π€ πππ¨π¨ππππ¨", rowId: `${usedPrefix + command} reaction`},
{title: "πͺ πΌπππππππΎπππ", description: "ππ€ππ ππ’ππππ£, π«ππππ€, πππ, ππ£π‘πππ ππ₯π ππ ππ€π£π«ππ§π©ππ§π ππ£ ππ©πππ ππ§ πΌπͺπ©π€π’ππ©ππππ’ππ£π©π\nπΌπ‘π‘ ππ’πππ, π«ππππ€, πππ, ππ₯π π‘ππ£π π¨ πππ‘π‘ π½π πΎπ€π£π«ππ§π©ππ ππ€ ππ©πππ ππ§ πΌπͺπ©π€π’ππ©ππππ‘π‘π?", rowId: `${usedPrefix + command} autosticker`},
{title: "π« πΌππππππΌππΌπ | πΌππππΎπΌππ", description: "πππππͺπ©ππ§ ππ‘π€π¦πͺππ€π¨ π π‘ππ¨ π₯ππ§π¨π€π£ππ¨ π¦πͺπ π‘π‘ππ’ππ£ π€ π§πππ‘ππππ£ π«ππππ€π‘π‘ππ’πππ ππ‘ π½π€π©\nππ­πππͺπ©π ππ‘π€ππ π¨ π©π€ π₯ππ€π₯π‘π π¬ππ€ πππ‘π‘ π€π§ π’ππ π π π«ππππ€ πππ‘π‘ π©π€ π©ππ π½π€π©", rowId: `${usedPrefix + command} anticall`},
{title: "π  ππππΎππππ", description: "πππππ§ π¦πͺπ π¨π ππ£π«ππ π¨π©πππ ππ§π¨ πππ‘ ππ€π©\nπππ«π π©ππ ππ€π© π¨ππ£π π¨π©πππ ππ§π¨", rowId: `${usedPrefix + command} stickers`},
{title: "βοΈ ππΎππππ", description: "πππππ§ π¦πͺπ ππ‘ π½π€π© π§ππ¨π₯π€π£ππ π¨π€π‘π€ ππ£ πΎπππ©π¨ ππ§ππ«πππ€π¨\nπππ₯π‘π? π€π£π‘π? ππ£ ππ§ππ«ππ©π πΎπππ©π¨", rowId: `${usedPrefix + command} pconly`},
{title: "βοΈ ππΎππππ", description: "πππππ§ π¦πͺπ ππ‘ π½π€π© π§ππ¨π₯π€π£ππ π¨π€π‘π€ ππ£ πΎπππ©π¨ ππ ππ§πͺπ₯π€π¨\nπππ π π©ππ π½π€π© π§ππ¨π₯π€π£π π€π£π‘π? ππ£ ππ§π€πͺπ₯ πΎπππ©π¨", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)

const listMessage = {
text: '*~ CENTRO DE CONFIGURACIΓN*',
footer: `β­βββ[ *πΌππππππ ππΌππΌπ½ππ* ]ββββ¬£
ββββββββββββββββββ
βπ *Β‘Hola | Hi!* ${name}
ββββββββββββββββββ
β°ββββββββ° *${vs}* β±βββββββ¬£
β­ββββββββββββββ¬£
β *ππππππππ ππππ πππππΌππ π πππ*
β *πππ πΎπππΌππΏππ πΏπ ππππ πππππΌππ*
ββββββββββββββββββ
ββοΈ _${usedPrefix}on *:* off *bienvenida | welcome*_
ββοΈ _${usedPrefix}on *:* off *publico | public*_
ββοΈ _${usedPrefix}on *:* off *modocaliente | modohorny*_
ββοΈ _${usedPrefix}on *:* off *antienlace | antilink*_
ββοΈ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
ββοΈ _${usedPrefix}on *:* off *avisos | detect*_
ββοΈ _${usedPrefix}on *:* off *autonivel | autolevelup*_
ββοΈ _${usedPrefix}on *:* off *restringir | restrict*_
ββοΈ _${usedPrefix}on *:* off *soloprivados | pconly*_
ββοΈ _${usedPrefix}on *:* off *sologrupos | gconly*_
ββοΈ _${usedPrefix}on *:* off *autovisto | autoread*_
ββοΈ _${usedPrefix}on *:* off *reaccion | reaction*_
ββοΈ _${usedPrefix}on *:* off *antiver | antiviewonce*_
ββοΈ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
ββοΈ _${usedPrefix}on *:* off *antillamar | anticall*_
ββοΈ _${usedPrefix}on *:* off *antieliminar | antidelete*_
ββοΈ _${usedPrefix}on *:* off *stickers*_
ββοΈ _${usedPrefix}on *:* off *temporal*_
ββοΈ _${usedPrefix}on *:* off *autosticker*_
ββοΈ _${usedPrefix}on *:* off *audios*_
β°ββββββββββββββ¬£
${wm}`,
title: null,
buttonText: "πΎππππππππΌπ",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detect':
case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
    
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
		
case 'antidelete': 
case 'antieliminar':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
    
case 'public':
case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
    
case 'antilink':
case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
    
case 'antilink2':
case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
    
case 'modohorny':
case 'modocaliente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
		
//case 'temporal':
//if (m.isGroup) {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}}
//chat.temporal = isEnable          
//break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
    
case 'autolevelup':
case 'autonivel':
isUser = true
user.autolevelup = isEnable
break
    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
    
case 'reaction':
case 'reaccion':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'antitoxic':
case 'antitoxicos':
case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'antiver':
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
    
case 'restrict':
case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread':
case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
    
case 'anticall':
case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
    
case 'pconly':
case 'privateonly':
case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
    
case 'gconly':
case 'grouponly':
case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
    
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)   
throw false
}
await conn.sendButton(m.chat, `${rg}α¦ *_COMANDO_* *|* ${type} 
α¦ *_ACTUALMENTE_* *|* ${isEnable ? 'ACTIVADO' : 'DESACTIVADO'} 
α¦ *_EN ESTE_* *|* ${isAll ? 'BOT' : isUser ? '' : 'CHAT'}`, wm, null, [[`${isEnable ? 'π DESACTIVAR' : 'π ACTIVAR'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ π', '.menu']], fkontak, m)}
//await conn.sendButton(m.chat, null, ajuste, null, [['π πππππππΌπΎπππ | ππππ ππππ π', `/infomenu`], ['βοΈ πΎπππππ πΏπ πΎππππππππΌπΎπππ βοΈ', `/on`]], fkontak, m)
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
