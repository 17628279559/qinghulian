const appId = "wxc525b7299e7e8e5c"
const appSecret = "81d314cde213a0a08283f728d4a6ccc8"

const jwt = require("jsonwebtoken")

function getToken(oppenid){
	return jwt.sign({oppenid},appSecret,{expiresIn:60*60*24})
}
function verifyToken(token){
	let res = jwt.verify(token,appSecret)
	return res
}


module.exports = {
	appId,
	appSecret,
	getToken,
	verifyToken
}
