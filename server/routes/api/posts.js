const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

//testing function




//get Post

router.get('/', async(req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});


//add Post 

router.post ('/', async (req, res) =>{
    const posts=await loadPostsCollection();
    await posts.insertOne({
      text: req.body.text,
      text2:req.body.text2,
      text3:req.body.text3,
      text4:req.body.text4,
      text5:req.body.text5,
      text6:req.body.text6,
      username: req.body.username,
      createdAt: new Date()
    });
    res.status (269).send ();
});

///


// router.postCustomerBuy ('/', async (req, res) =>{
//     const posts=await loadPostsCollection();
//     await posts.insertOne({
//       ten: req.body.ten,
//       sdt:req.body.sdt,
//       diachi:req.body.diachi,
//       sanpham:req.body.sanpham, 
//       createdAt: new Date()
//     });
//     res.status (211).send ();
// });

//Delete Post
router.delete('/:id', async (req, res) => {
    const posts=await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send ();
});


/////////////////////Replace your MongoDB API here//////////////////////////////////
async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://webapp123:webapp123@cluster0.6dtvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser : true
    });
////////////////////////////////////////////////////////////////////////////////////
    return client.db('webapp123').collection('posts');
}
module.exports = router;