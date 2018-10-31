module.exports = (db, collections) => {
    let control = {}

    collections.forEach(element => {
        control[element] = require(`../data/${element}/${element}-control`)(db[element], db[`${element}Model`])
    })

    return control
}