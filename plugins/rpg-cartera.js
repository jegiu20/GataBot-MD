let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
โญโใ ๐ *CARTERA | WALLET* ใโโฌฃ
โ ${name} ๐๐ฃ ๐จ๐ช ๐พ๐๐ง๐ฉ๐๐ง๐ ๐ฉ๐๐๐ฃ๐...
โ *${global.db.data.users[who].limit} Diamante(s)* ๐
โ *${global.db.data.users[who].money} GataCoin(s)* ๐
โ *${global.db.data.users[who].exp} EXP* โก
โ *${global.db.data.users[who].joincount} Token(s)* ๐ช
โ *${global.db.data.users[who].emerald} Esmeralda(s)* ๐
โ *${global.db.data.users[who].potion} Pociรณn(es)* ๐ฅค
โโโโโโโโโโโโโโโ
โ ๐๐ฃ ๐ฎ๐ค๐ช๐ง ๐ฌ๐๐ก๐ก๐๐ฉ ๐ฎ๐ค๐ช ๐๐๐ซ๐...
โ *${global.db.data.users[who].limit} Diamond(s)* ๐
โ *${global.db.data.users[who].money} GataCoin(s)* ๐
โ *${global.db.data.users[who].exp} EXP* โก
โ *${global.db.data.users[who].joincount} Token(s)* ๐ช
โ *${global.db.data.users[who].emerald} Emerald(s)* ๐
โ *${global.db.data.users[who].potion} Potion(s)* ๐ฅค
โฐโโโโใ *๐  ${vs}* ใโโโโฌฃ`)

await conn.sendHydrated(m.chat, wm, `Puede comprar mรกs recuersos econรณmicos usando estos comandos\nYou can buy more cheap resources using these commands\n\nCOMPRAR DIAMANTES CON EXP\n${usedPrefix}buy cantidad\n${usedPrefix}buyall cantidad\n\nCOMPRAR DIAMANTES CON GATACOINS\n${usedPrefix}buy2 cantidad\n${usedPrefix}buyall2 cantidad\n\nCOMPRAR TOKENS CON DIAMANTES\n${usedPrefix}buy3 cantidad\n${usedPrefix}buyall3 cantidad`, null, md, '๐๐๐ฉ๐๐ฝ๐ค๐ฉ-๐๐ฟ', null, null, [
['๐๐๐ฃ๐ช ๐๐ง๐๐ฃ๐๐๐ฅ๐๐ก | ๐๐๐๐ฃ ๐ข๐๐ฃ๐ช โก', '#menu'],
['๐๐๐ฃ๐ชฬ ๐๐ค๐ข๐ฅ๐ก๐๐ฉ๐ค | ๐๐ช๐ก๐ก ๐๐๐ฃ๐ช ๐ซ', '.allmenu']
], m,) 
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
