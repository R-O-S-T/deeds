const mongoService = require("./mongo-service");
const ObjectId = require("mongodb").ObjectId;
const uuid =require('uuid/v4');

// //every like to post is {userid,username,userimg}
// function updateLikes(data){
//   const {postId,postLikes}=data;
//   const id= new ObjectId(postId);

//   return mongoService
//   .connect()
//   .then(db => db.collection("posts").updateOne({_id:id},{$set:{
//     likes:postLikes
//   }}));

// }
// function updateAuthorImg(data){
//   const {userId,userImg}=data;
//   console.log('userId is',userId);
//   return mongoService
//   .connect()
//   .then(db => db.collection("posts").updateMany({"userId":userId},{$set:{
//     "userImg":userImg
//   }}))
// } 
// function getUserPosts(userId) {
//   console.log('userId',userId)
//   return mongoService
//     .connect()
//     .then(db => db.collection("posts").find({userId:userId}).sort({timeStamp:-1}).toArray());
// }
// function addComment(data){
//   const {postId,commentText,userId,userImg,username}=data;
//   const _id=new ObjectId(postId);
  
//   return mongoService
//   .connect()
//   .then(db => db.collection("posts").updateOne({_id:_id},{$push:{
//     comments:{commentText,userId,userImg,username}
//   }}))
// }
function addDeed(deed) {
  deed.createdAt = Date.now();
 deed.id=uuid();
  return mongoService
    .connect()
    .then(db => db.collection("deeds").insertOne(deed));
}
function getDeeds() {
  return mongoService
    .connect()
    .then(db => db.collection("deeds").find({}).sort({'createdAt':-1}).toArray())
}
module.exports = {
  addDeed,
  getDeeds
};
