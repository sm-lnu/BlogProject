const Router = require('express')
const router = new Router();
const postController = require('../controllers/post.controllers');

router.get('/add-post', postController.createPostGet);
router.post('/add-post', postController.createPostPost);
router.get('/posts', postController.getAllPosts);
router.get('/post/delete-post/:postId', postController.deletePost)
router.get('/post/edit-post/:postId', postController.editPostGet)
router.post('/post/edit-post/:postId', postController.editPostPost)

module.exports = router