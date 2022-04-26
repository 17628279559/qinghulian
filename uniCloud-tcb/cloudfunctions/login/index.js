'use strict';
const {appId,appSecret,getToken} = require("wx-common")
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let user={}
	const {code} = event;
	const db = uniCloud.database()
	const dbCmd = db.command;
	
	const res = await uniCloud.httpclient.request(
		`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`,
		{
			dataType:"json"
		}
	)
	const openid = res.data.openid;
	
	const token = getToken(openid)
	
	let dbRes = await db.collection("poplar_user").where({
		openid:dbCmd.eq(openid)
	}).limit(1).get();

	
	if (dbRes.data.length<=0){
		user = {
		    "authenticated": false,
		    "fans": [],
		    "focus": [],
		    "individuality_signature": "这个家伙很懒，什么都没写",
		    "message_list": [],
		    "mobile": "",
		    "praise": 0,
		    "published_article_list": [],
		    "reputation": 50,
		    "user_name": "未登录",
			"openid":openid
		}
		db.collection('poplar_user').add(user)
	}else{
		user = dbRes.data[0]
	}
	delete user["openid"];
	//返回数据给客户端
	return {user,token}
};
