import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    productType: {
      type: String,
      enum: ["simple", "variable", "group", "external"],
      default: "simple",
    },
    productSimple: {
      regularPrice: {
        type: Number,
      },
      salePrice: {
        type: Number,
        default: null,
      },
      stock: {
        type: Number,
        default: 0,
      },
      productPhoto: {
        type: [String],
      },
    },
    productVariable: [
      {
        size: {
          type: String,
          default: null,
        },
        colors: {
          type: String,
          default: null,
        },
        regularPrice: {
          type: Number,
        },
        salePrice: {
          type: Number,
          default: 0,
        },
        stock: {
          type: Number,
          default: 0,
        },
        productPhoto: {
          type: [String],
        },
      },
    ],
    productGroup: [
      {
        name: {
          type: String,
        },
        regularPrice: {
          type: Number,
        },
        salePrice: {
          type: Number,
          default: 0,
        },
        stock: {
          type: Number,
          default: 0,
        },
        link: {
          type: String,
        },
        productPhoto: {
          type: [String],
        },
      },
    ],
    productExternal: {
      regularPrice: {
        type: Number,
      },
      salePrice: {
        type: Number,
        default: 0,
      },
      stock: {
        type: Number,
        default: 0,
      },
      link: {
        type: String,
        default: "#",
      },
      productPhoto: {
        type: [String],
      },
    },
    shortDesc: {
      type: String,
    },
    longDesc: {
      type: String,
    },
    specification: {
      type: String,
    },
    reviwes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Reviews",
      // default: null,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
      // required: true,
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },

    shipping: {
      type: String,
      default: 0,
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

export default mongoose.model("Product", productSchema);
