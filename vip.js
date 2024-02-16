/******************************

脚本功能：问真八字解锁永久钻石会员
软件版本：2.1.0
下载地址：http://t.cn/A6CM9OiG
脚本作者：Hausd0rff
更新时间：2023-02-28
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > 问真八字解锁永久钻石会员
^https?:\/\/bzpp2\.iwzbz\.com\/api\/v1\.1\/user\/getpw2_v url script-response-body https://raw.githubusercontent.com/Triment/qx/master/vip.js

[mitm] 
hostname = bzpp2.iwzbz.com

*******************************/

let obj = JSON.parse($response.body);
$done({ body: JSON.stringify({...obj, vipLevel: 1 })})