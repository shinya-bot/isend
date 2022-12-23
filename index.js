const {sendMessage, replyMessage} = require("./src/prefixMessages.js")
const {sendDirectMessage} = require("./src/other.js")
module.exports ={
    send : sendMessage,
    reply : replyMessage,
    sendDM : sendDirectMessage
}
