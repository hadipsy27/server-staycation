const mongoose = require('mongoose')
const { objectId } = mongoose.Schema

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  country: {
    default: "Indonesia",
    required: true
  },
  city: {
    type: String,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  desciption: {
    type: String,
    required: true
  },
  // satu item mempunyai satu category = object
  categoryId: {
    type: ObjectId,
    ref: 'Category'
  },
  // satu item mempunyai banyak image
  imageId: [{
    type: objectId,
    ref: 'Image'
  }],
  featureId: [{
    type: objectId,
    ref: 'Feature'
  }],
  activityId: [{
    type: objectId,
    ref: 'Activity'
  }],
})

module.exports = mongoose.model('Item', itemSchema)