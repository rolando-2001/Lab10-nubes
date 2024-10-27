const User = require("../models/user.js");

const allUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario", error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const users = await User.find();

    return res.json({
      message: "Inicio de sesión correcto",
      users,
    });
  } catch (error) {

    console.error(error); 
    return res.status(500).json({ message: "Error al iniciar sesión", error });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { allUser, deleteUser, loginUser, createUser };
