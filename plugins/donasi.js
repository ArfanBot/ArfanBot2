let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [0812-9015-8297]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281290158297
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
