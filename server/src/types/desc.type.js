
module.exports = (required=[false, 'Description is required.'], length=16384, opts) => ({
  type: String,
  maxlength: [length, `The description cannot exceed ${length} characters`],
  trim: true,
  required,
  ...opts
});