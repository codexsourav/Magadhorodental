import jwt from 'jsonwebtoken';
import { Users } from '../db/models/Users.js';
import { ServerStatus } from '../utils/ServerStatus.js';
import { keys } from '../utils/keys.js';
import { Blogs } from '../db/models/Blogs.js';
import { Doctors } from '../db/models/Doctors.js';
import { Services } from '../db/models/Services.js';
import { Videos } from '../db/models/Videos.js';
import { Contacts } from '../db/models/Contacts.js';
import { Faqs } from '../db/models/Faqs.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
// @ts-check

export const login = async (req, res) => {
    try {
        const { email, pass } = req.body;
        console.log(email, pass);
        if (!email || !pass) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "Invalid Email Or Password" });
        }
        const find = await Users.findOne({ email, pass }, { pass: 0 });
        if (!find) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "Invalid Email Or Password" });
        }
        var token = jwt.sign({ ...find._doc, _id: find._id.toString() }, keys.jwtKey);
        return res.status(ServerStatus.SUCCESS).send({ "message": "Login Successful", token });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
};

export const dashBordData = async (req, res) => {
    try {
        const user = await Users.find();
        const posts = await Blogs.find();
        const doctores = await Doctors.find();
        const tservices = await Services.find();
        const videosd = await Videos.find();
        const Contactsd = await Contacts.find();
        const faqs = await Faqs.find();


        return res.status(ServerStatus.SUCCESS).send({ users: user.length, blogs: posts.length, doctors: doctores.length, services: tservices.length, videos: videosd.length, conatcts: Contactsd.length, faqs: faqs.length });

    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}