const db = require('../db/db.js');

class PostController {
    async createPostGet(req, res) {
        res.render("add-post",{title:"Створити пост"});
    }
    async createPostPost(req, res) {
        const { title, author, description} = req.body;
        await db.query('INSERT INTO post (title, description, author) values($1, $2, $3) RETURNING *', [title, description, author]);
        res.redirect("/posts")
    }
    
    async getAllPosts(req, res) {
        try {
            const posts = await db.query('SELECT * FROM post');
            res.render("posts", { posts: posts.rows , title:'Пости'});
        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    }
    async deletePost(req, res) {
        try {
            const postId = req.params['postId'];
            const deletedPost = await db.query('DELETE FROM post WHERE id = $1 RETURNING *', [postId]);
    
            if (deletedPost.rows.length === 0) {
                return res.status(404).send("Post not found");
            }
            res.redirect("/posts");
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
    async editPostGet(req,res){
        try {
            const postId = req.params['postId'];
            const getPost = await db.query('SELECT * FROM post WHERE id = $1', [postId]);
    
            if (getPost.rows.length === 0) {
                return res.status(404).send("Post not found");
            }
            res.render("editPost", {title:"Редагувати пост", post: getPost.rows[0] });
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
    async editPostPost(req,res){
        try {
            const postId = req.params['postId'];
            const { title, author, description } = req.body;
    
            const updateQuery = 'UPDATE post SET title = $1, author = $2, description = $3 WHERE id = $4';
            await db.query(updateQuery, [title, author, description, postId]);
    
            res.redirect("/posts");
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = new PostController();