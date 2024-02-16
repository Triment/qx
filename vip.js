/******************************

脚本功能：问真八字解锁永久钻石会员
软件版本：2.1.0
脚本作者：Triment
更新时间：2024-02-16
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > 问真八字解锁永久钻石会员
^https?:\/\/bzpp2\.iwzbz\.com\/api\/v1\.1\/user\/getpw2_v url script-response-body https://raw.githubusercontent.com/Triment/qx/master/vip.js

[mitm] 
hostname = bzpp2.iwzbz.com

*******************************/

let obj = JSON.parse($response.body);
obj.vipLevel = 3;
obj.vipTipsType = 0;
obj.expires = "2999-11-28\x2006:06:06";
let body = JSON.stringify(obj);
console.log(body);
$done(body);