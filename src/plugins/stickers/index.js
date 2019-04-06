const Sticker = {
    pre : '',
    data : {},
    parse : str => String(str).replace(/\[(.+?)\]/g, (placeholder, key) => Sticker.data[key] ? '![]('+Sticker.pre+Sticker.data[key]+')' : placeholder),
    init: json => {Sticker.data = json.data; Sticker.pre = json.pre;}
}

module.exports = Sticker
