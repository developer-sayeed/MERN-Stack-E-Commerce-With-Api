import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    userID: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    mobile: {
      type: String,
      trim: true,
      default: null,
    },
    dateOfBirth: {
      type: Date,
      trim: true,
      default: null,
    },
    address: {
      type: String,
      trim: true,
      default: null,
    },
    city: {
      type: String,
      trim: true,
      default: null,
    },
    state: {
      type: String,
      trim: true,
      default: null,
    },
    zipCode: {
      type: String,
      trim: true,
      default: null,
    },
    country: {
      type: String,
      trim: true,
      default: null,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      default: "Author",
    },
    gender: {
      type: String,
      enum: ["Female", "Male", "undefined"],
      default: "undefined",
    },
    photo: {
      type: String,
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
// Custom function to generate a random user ID
userSchema.pre("save", function (next) {
  // Generate a random user ID
  const randomUserId = Math.floor(Math.random() * 101117604855);
  this.userID = randomUserId.toString(); // Convert it to a string
  next();
});

export default mongoose.model("User", userSchema);
