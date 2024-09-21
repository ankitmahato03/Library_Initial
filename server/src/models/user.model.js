import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    mobile: {
      type: String,
      required: [true, "Mobile is required"],
      unique: true,
    },
    photo: {
      type: String,
      required: [true, "Photo is required"],
    },
    aadhaarno: {
      type: String,
      required: [true, "Aadhaar Number is required"],
      unique: true,
    },
    aadhaarCardImage: {
      type: String,
      required: [true, "Aadhaar Card Image is required"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of Birth is required"],
    },
    address: [
      {
        cityOrVillage: {
          type: String,
          required: [true, "City or Village is required"],
        },
        district: {
          type: String,
          required: [true, "District is required"],
        },
        state: {
          type: String,
          required: [true, "State is required"],
        },
        pincode: {
          type: String,
          required: [true, "Pincode is required"],
        },
        nationality: {
          type: String,
          required: [true, "Nationality is required"],
        },
      },
    ],
    isApproved: {
      type: Boolean,
      default: false,
    },
    isSubscribed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
