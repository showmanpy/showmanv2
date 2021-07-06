exports.wait = () => {
	return`*➞ Espere por favor, estou processando o comando...*`
}

exports.succes = () => {
	return`*➞ Sucesso 😉*`
}

exports.lvlon = () => {
	return`*➞ Ativar Nivelamento*`
}

exports.lvloff = () => {
	return`*➞ Desativar nivelamento*`
}

exports.lvlnul = () => {
	return`*➞ Seu nível ainda está zerado*`
}

exports.lvlnoon = () => {
	return`*➞ O modo nivelamento ainda não está ativado neste grupo*`
}

exports.stikga = () => {
	return`*📌Desculpe, Deu erro... Tente novamente depois*`
}

exports.linkga = () => {
	return`*❌Esse link não é válido*`
}

exports.groupo = () => {
	return`*➞ Este comandos só funciona em grupo...*`
}

exports.ownerb = () => {
	return`*➞ Desculpe, Apenas o Nabuto pode usar este comando...*`
}

exports.ownerg = () => {
	return`*➞ Apenas o dono deste grupo pode usar...*`
}

exports.admin = () => {
	return`*➞ Desculpe, Somente os administradores podem usar este comando...*`
}

exports.badmin = () => {
	return`*➞ Este comando só pode ser utilizado se o bot ser administrador*`
}

exports.nsfwoff = () => {
	return`*➞ O modo nsfw está desativado...*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário Nabuto Ls, relatórios falsos ou confusos não serão respondidos.*`
}

exports.wrongf = () => {
	return`*Formato incorreto ou texto em branco*`
}

exports.clears = () => {
	return`*SUCESSO EM LIMPAR TODAS CONVERSAS*`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname}*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTA : USE O BOT E CONVERSE NO GRUPO PARA GANHAR XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTA : USE O BOT E CONVERSE NO GRUPO PARA GANHAR XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTA : USE O BOT E CONVERSE NO GRUPO PARA GANHAR XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTA : USE O BOT E CONVERSE NO GRUPO PARA GANHAR XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTA : USE O BOT E CONVERSE NO GRUPO PARA GANHAR XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTA : USE O BOT E CONVERSE NO GRUPO PARA GANHAR XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*【 FELIZ 】*
 📊➤ Nome : ${pushname}
 📊➤ Número : ${sender.split("@")[0]}
 📊➤ Xp : ${getLevelingXp(sender)}
 📊➤ Limite :  +3
 📊➤ Classificação :  ${role}
 📊➤ Nível : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O limite de hoje expira *`
}

exports.limitcount = (limitCounts) => {
	return`
*【 LIMITE CONTAR 】*
o resto do seu limite : ${limitCounts}

NOTA: Para obter o limite. Você pode subir de nível por meio de grupos.
`}

exports.satukos = () => {
	return`*Adicionar parâmetro 1 / habilitar ou 0 / desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *【 ATM 】*\n  ├─ ❏ *Nome* : ${pushname}\n  ├─ ❏ *Número* : ${sender.split("@")[0]}\n  └─ ❏ *Dinheiro* : ${uangkau}
`}
