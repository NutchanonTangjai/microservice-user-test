const { db } = require("../databases/admin");

exports.users = async (req, res) => {
  const usersRef = db.collection("users");

  try {
    usersRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return res.status(201).json(data);
    });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong , ${error}` });
  }
};

exports.addUsers = async (req, res) => {
  try {
    const data = await db.collection("users").add(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong , ${error}` });
  }
};

exports.findUser = async (req, res) => {
  try {
    const userRef = db.collection("users");
    const snapshot = await userRef.where("name", "==", req.params.name).get();
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }

    snapshot.forEach((doc) => {
      return res.status(200).json({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong , ${error}` });
  }
};

exports.updateData = async (req, res) => {
  if (!req.body) {
    console.error("No data to update");
    return;
  }

  const { name, email, phone, username } = req.body;

  try {
    const userRef = db.collection("users").doc(req.params.id);
    const result = await userRef.update({ name, email, phone, username });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong , ${error}` });
  }
};

exports.deleteUser = async (req, res) => {
  if (!req.params.id) {
    console.error("No data to delete");
    return;
  }
  try {
    const userRef = db.collection("users").doc(req.params.id);
    const result = await userRef.delete();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong , ${error}` });
  }
};