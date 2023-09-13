import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: [true, 'Title is required.'],
  },
  subTitle: {
    type: String,
  },


  image1Url:{
    type: String
  },
  content1: {
    type: String,
    required: [true, 'Content is required.'],
  },


  image2Url:{
    type: String
  },
  content2: {
    type: String,
  },
  

  image3Url:{
    type: String
  },
  content3: {
    type: String,
  },


  likes: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: []
  },

  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
},{timestamps: true});

const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;