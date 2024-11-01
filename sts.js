/******************************

脚本功能：沙滩说获取
软件版本：2.1.0
脚本作者：Triment
更新时间：2024-02-16
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > 问真八字解锁永久钻石会员
^https?:\/\/sandsgw\.sandstalk\.com\/sands-lms\/api\/v1\/examinee\/answer-content\/getExamManagement url script-response-body https://raw.githubusercontent.com/Triment/qx/master/sts.js

[mitm] 
hostname = sandsgw.sandstalk.com

*******************************/

let obj = JSON.parse($response.body);
obj.value.isWatchAnswerDetails = 1;
let body = JSON.stringify(obj);
console.log(body);
$done(body);
