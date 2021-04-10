// dogs-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const DescType = require('../types/desc.type');
const NameType = require('../types/name.type');

module.exports = function (app) {
  const modelName = 'dogs';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: NameType(),
      age: {
        year: {
          type: Number,
          required: true,
          max: 50,
          validate: Number.isInteger,
        },
        month: {
          type: Number,
          required: true,
          // Depending on the context
          // min: 0,
          // max: 11,
          validate: Number.isInteger,
        },
      },
      breed: NameType(),
      sex: {
        type: String,
        required: true,
        enum: ['Male', 'Female'],
      },
      size: {
        type: String,
        required: true,
        enum: ['Small', 'Medium', 'Large'],
      },
      description: DescType(),
      adoption_fee: {
        type: Number,
        required: true
      },
      isAvailable: {
        type: Boolean,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
