import mongoose from 'mongoose';

const optionsSchema = new mongoose.Schema({
  value: { type: String },
  label: { type: String },
});

const attributesSchema = new mongoose.Schema({
  meta: { type: String },
  classnames: [String],
  model: { type: String },
  label: { type: String },
  maxlength: { type: Number },
  minlength: { type: Number },
  min: { type: Number },
  max: { type: Number },
  step: { type: Number },
  size: { type: Number },
  placeholder: { type: String },
  disabled: { type: Boolean },
  readonly: { type: Boolean },
  required: { type: Boolean },
  options: [optionsSchema],
})

const componentSchema = new mongoose.Schema({
  _type: { type: String },
  children: { type: [String] },
  parent: { type: String },
  createdAt: { type: Date },
  modifiedAt: { type: Date },
  name: { type: String },
  attributes: attributesSchema,
});

export const ComponentModel = mongoose.model('ComponentModel', componentSchema);