const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name"],
    },
    phone: Number,
    email: String,
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.path("name").validate((value) => {
  const re = /[A-Z]\w+/;
  return re.test(String(value));
});

contactSchema.virtual("strPhone").get(function () {
  return `${this.phone} phone`;
});

const Contact = model("contact", contactSchema);

module.exports = Contact;
