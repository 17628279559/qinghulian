'use strict';
const {verifyToken} = require("wx-common");

exports.main = async (event, context) => {

	
	let {userInfo,token} = event;
	console.log(userInfo)
	const db = uniCloud.database();
	const dbCmd = db.command;
	
	const payload = verifyToken(token);
	
	await db.collection("poplar_user").where({
		openid:dbCmd.eq(payload.oppenid)
	}).update({
		user_name:userInfo.nickName,
		gender:userInfo.gender,
		language:userInfo.language,
		city:userInfo.city,
		province:userInfo.province,
		country:userInfo.country,
		avatarUrl:userInfo.avatarUrl
	})
	const res = db.collection("poplar_user").where({
		openid:dbCmd.eq(payload.oppenid)
	}).get()
	//返回数据给客户端
	return res
};
