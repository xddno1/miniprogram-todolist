// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return 1;
  // return db.collection('demolist').get();
}