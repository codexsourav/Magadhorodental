/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
// @ts-check
import { Services } from '../db/models/Services.js';
import { Doctors } from '../db/models/Doctors.js';
import { Videos } from '../db/models/Videos.js';
import { Blogs } from '../db/models/Blogs.js';



import { ServerStatus } from '../utils/ServerStatus.js';
export const getHomeData = async (req, res) => {
    try {
        const data = await Promise.all([
            Services.find({}, { content: 0 }),
            Doctors.find({}, { content: 0 }),
            Videos.find().sort({ date: -1 }).limit(4),
            Blogs.find({}, { content: 0 }).sort({ date: -1 }).limit(6),
        ]);
        res.send({ services: data[0], doctors: data[1], videos: data[2], blogs: data[3] });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }

}


