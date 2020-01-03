"use strict"

const ini = require("ini")
const fs = require("fs-extra")
const { default: ow } = require("ow")
const { default: is } = require("@sindresorhus/is")
const camelcase = require("camelcase")
const mapObj = require("map-obj")

module.exports = async (filename, options) => {
    ow(filename, ow.string)
    ow(options, ow.any(ow.object, ow.undefined))

    if (is.plainObject(options)) {
        return await fs.writeFile(filename, ini.stringify({
            InternetShortcut: mapObj(options, (key, value) => {
                if (key === key.toLowerCase()) return [key.toUpperCase(), value]
                return [camelcase(key, { pascalCase: true }), value]
            }),
        }))
    } else {
        const { InternetShortcut: data } = ini.parse(await fs.readFile(filename, "utf8"))
        return mapObj(data, (key, value) => {
            if (key === key.toUpperCase()) return [key.toLowerCase(), value]
            return [camelcase(key, { pascalCase: false }), value]
        })
    }
}
