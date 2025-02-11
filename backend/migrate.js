import mongoose from 'mongoose';
import { postModels as posts } from './models/postSchema.js'; 
import { userModels as users } from './models/userSchema.js'; 

// MongoDB connection URL
const MONGODB_URL = 'mongodb://127.0.0.1:27017/socialmedia';

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

async function migrate() {
  try {
    const postsData = await posts.find({});
    for (const post of postsData) {
      if (!Array.isArray(post.userid)) {
        post.userid = [post.userid];
      }

      if (!Array.isArray(post.likes)) {
        post.likes = [];
      }

      await post.save();
    }

    console.log('Post schema migration completed');

    const usersData = await users.find({});
    for (const user of usersData) {
      if (!user.status) {
        user.status = 'active'; 
      }

      await user.save();
    }

    console.log('User schema migration completed');
  } catch (err) {
    console.error('Error during migration', err);
  } finally {
    mongoose.connection.close();
  }
}

migrate();
