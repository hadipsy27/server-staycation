const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

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
    type: String,
    default: "Indonesia",
    // required: true
  },
  city: {
    type: String,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    default: 'Night'
  },
  // satu item mempunyai satu category = object
  categoryId: {
    type: ObjectId,
    ref: 'Category'
  },
  // satu item mempunyai banyak image
  imageId: [{
    type: ObjectId,
    ref: 'Image'
  }],
  featureId: [{
    type: ObjectId,
    ref: 'Feature'
  }],
  activityId: [{
    type: ObjectId,
    ref: 'Activity'
  }],
})

module.exports = mongoose.model('Item', itemSchema)