const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 5000; // Change this to your desired port number

// Connect to your MongoDB database
mongoose.connect("mongodb://localhost:27017/your-database-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

app.use(express.json());

// Route to handle password change
app.post("/api/change-password", async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // Retrieve the user from the database (you should use authentication middleware here)
  const user = await User.findOne({ username: "exampleUser" });

  // Check if the user exists
  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  // Compare the provided current password with the one in the database
  const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid current password." });
  }

  // Hash the new password
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  // Update the user's password in the database
  user.password = hashedNewPassword;
  await user.save();

  return res.status(200).json({ message: "Password changed successfully." });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
