module.exports = (required=[true, 'Name is required.'], length=256, opts) => ({
  type: String,
  maxLength: [length, `Name cannot be longer than ${length} characters`],
  // match: [/^[\w -'".?,:@&()[\]]+$/, 'Invalid characters used.'],
  trim: true,
  required,
  ...opts
});
