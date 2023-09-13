import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    rating: {
      type: String,
      trim: true,
      default: 0,
    },
    review: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    // customer: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Customer",
    // },
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

export default mongoose.model("Review", reviewSchema);
