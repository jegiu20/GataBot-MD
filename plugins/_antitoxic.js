const toxicRegex = /joto|sape|nmms|calladito|calladita|mames|mamar|chigadamadre|hijueputa|lame|chupa|kaka|caca|bobo|boba|loco|loca|chupapolla|estupido|estupida|estupidos|polla|pollas|idiota|maricon|chucha|verga|vrga|naco|zorra|zorro|zorras|zorros|pito|huevon|huevona|huevones|rctmre|mrd|ctm|csm|cp|hldv|ptm|baboso|babosa|babosos|babosas|feo|fea|feos|feas|webo|webos|mamawebos|calla|callese|cΓ‘llate|callate|chupame|bolas|qliao|imbecil|embeciles|kbrones|cabron|capullo|carajo|gore|gorre|gorreo|gordo|gorda|gordos|gordas|sapo|sapa|mierda|cerdo|cerda|puerco|puerca|perra|perro|joden|jodemos|joder|joderan|dumb|fuck|shit|bullshit|cunt|cum|semen|bitch|motherfucker|foker|fucking/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = 'https://i.imgur.com/mtqCy2V.jpg'
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 4)) await conn.sendButton(m.chat,`${user.warn == 1 ? `πππ!!! *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, πΏππΎππ ππππΌ ππΌππΌπ½ππΌ *(${isToxic})* ππππΌ ππππππ½ππΏπΌ ππ πππΌπ πππππΎπ(πΌ)\n\nπ€¬ πΏππ'π π½π πππππΎ πππΌπ ππππΏ ππ ππππ½ππΏπΏππ!!`, `*ADVERTENCIA : WARNING*\nβ οΈ *${user.warn}/4*\n\n${wm}`, img, [
[`π­ ππ ππππππ | π'π πππππ`, '.ok'],
['β’οΈ πΏπππΌπΎππππΌπ πΌππππππππΎ', '.off antitoxic'],
['βοΈ ππππ', '/menu']], false, { mentions: [m.sender] })}

if (user.warn >= 4) {
user.warn = 0
await m.reply(`ππ ππ πΌπΏππππππΏ ππΌπππΌπ πππΎππ!!\n*@${m.sender.split`@`[0]}* ππππππΌπππ ππΌπ *4* πΌπΏπππππππΎππΌπ πΌππππΌ ππππΌπ πππππππΌπΏπ(πΌ) π\n\nπππ ππΌππππΏ πΌππ *4* ππΌππππππ πππ πππ ππππ π½π πππππππΌπππΏ π`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
