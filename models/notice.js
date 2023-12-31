import { Schema, model, models } from 'mongoose';

const NoticeSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  notice: {
    type: String,
    required: [true, 'Notice is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Notice = models.Notice || model('Notice', NoticeSchema);

export default Notice;