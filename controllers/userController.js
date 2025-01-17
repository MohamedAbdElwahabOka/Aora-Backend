
import User from "../model/User.js";
import bcrypt from "bcryptjs"

export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json({ users });

}


export const signup = async (req, res, next) => {

    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });


    } catch (err) {
        console.log(err)

    }
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password)

    const user = new User({
        name,
        email,
        password: hashedPassword

    });




    try {
        await user.save();

    } catch (err) {

    }
    return res.status(201).json({ user });
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await
            User.findOne({ email });
    } catch (err) {
        console.log(err)
    }
    if (!existingUser) {
        return res.status(404).json({ message: "No users found" });
    }
    if (!bcrypt.compareSync(password, existingUser.password)) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({ message: "Login successful" });

}
