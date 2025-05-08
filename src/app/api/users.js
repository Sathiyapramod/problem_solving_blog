export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    try {
      const { name, email } = req.body;
      const user = new User({ name, email });
      await user.save();
      res.status(201).json({ success: true, user });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    const users = await User.find({});
    res.status(200).json({ success: true, users });
  }
}
