const url = 'http://localhost:3000/api/posts';

class PostService{
  // Get Posts
  static async getPosts(){
    try {
      const res = await fetch(url);
      let data = await res.json();
      
      data = data.map(post=>({
        ...post,
        createdAt: new Date(post.createdAt)
      }))
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
    
  }

  // Create Post
  static async insertPost(text){
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text
        })
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  // Delete Post
  static async deletePost(id){
    try {
      await fetch(`${url}/${id}`,{
        method: "DELETE"
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default PostService;