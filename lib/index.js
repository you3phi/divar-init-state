const axios = require('axios')

const ROOT_PAGE = 'https://divar.ir'

async function getPage(url) {
    const options = {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,fa;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache"
        },
        url,
        method: 'GET'
    }
    const { data } = await axios(options)
    return data
}


async function getInitialState() {
    const html = await getPage(ROOT_PAGE)
    const [start, stop] = ['__PRELOADED_STATE__ =', 'redirectOnChange\\":true}}"']
    const [from, to] = [html.indexOf(start) + start.length, html.indexOf(stop) + stop.length]
    return eval(html.slice(from, to))
}

module.exports = {
    getInitialState
}
