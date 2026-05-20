export default function handler(req, res) {
    const { translate } = require('free-google-translate-with-puppeteer')
    let answer = req.query[0];
    let toLan = req.query[1];

    translate({ text: answer, to: toLan }).then(translation => {
        return res.status(200).json({ translation: translation });
    })
}