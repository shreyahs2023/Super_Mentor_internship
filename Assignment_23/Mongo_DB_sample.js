// User Schema
const User = {
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  createdAt: Date
};

// Post Schema
const Post = {
  _id: ObjectId,
  title: String,
  content: String,
  authorId: ObjectId, // reference to User
  tags: [String],
  createdAt: Date,
  updatedAt: Date
};

// Comment Schema
const Comment = {
  _id: ObjectId,
  postId: ObjectId, // reference to Post
  userId: ObjectId, // reference to User
  text: String,
  createdAt: Date
};