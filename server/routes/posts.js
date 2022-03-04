const router = require('express').Router();
const { json } = require('express');
const Post = require('../schemas/Post');
const User = require('../schemas/User');

//create a post
router.post('/',async (req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savePost);
    }
    catch(err){
        res.status(500).json(err)
    }
})
//Update a post
router.put('/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId===req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json('the post has been updated');
        }else{
            res.status(403).json('you can only update your post');
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})
//Delete a post
router.delete('/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId===req.body.userId){
            await post.deleteOne({$set:req.body});
            res.status(200).json('the post has been deleted');
        }else{
            res.status(403).json('you can only delete your post');
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})
//like a post
router.put('/:id/like',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("The post has been liked");
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("The post has been disliked");
        } 
    }
    catch(err){
        res.status(500).json(err);
    }
});
//get a post
router.get("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err)
    }
});

//get user's all posts

router.get("/profile/:username", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      const posts = await Post.find({ userId: user._id });
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//get timeline posts
router.get("/timeline/:userId",async (req,res)=>{
    let postArray =[];
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId)=>{
               return  Post.find({userId:friendId});
            })
            );
            res.status(200).json(userPosts.concat(...friendPosts))
    }
    catch(err){
        res.status(500),json(err);
    }
})
module.exports = router;