import { Schema, model, models } from 'mongoose';

const CommentSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'Blog',
    required: true,
  },
  text: {
    type: String,
    required: [true, 'Text is required.'],
  },
 
}, {timestamps: true});

const Comment = models.Comment || model('Comment',  CommentSchema);

export default  Comment;