/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
// @ts-check

import { Videos } from '../db/models/Videos.js';
import { ServerStatus } from '../utils/ServerStatus.js';

export const getVideos = async (req, res) => {
    try {
        const find = await Videos.find();
        if (!find) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "No Videos Found" });
        }
        return res.status(ServerStatus.SUCCESS).send(find);

    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })

    }
}

export const getVideo = async (req, res) => {
    try {
        const { id } = req.params;

        const find = await Videos.findOne({ _id: id });
        if (!find) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "No Videos Found" });
        }
        return res.status(ServerStatus.SUCCESS).send(find);

    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })

    }
}

export const newVideo = async (req, res) => {
    try {

        const { videoId, title } = req.body;
        console.log(req.body, "-----", videoId, title);
        if (!videoId || !title) {
            return res.status(ServerStatus.BAD_REQUEST).send({ "message": "Enter All Required Data" });
        }
        const video = new Videos({ videoId, title });
        await video.save();
        return res.status(ServerStatus.SUCCESS).send({ "message": "Video Add Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })

    }
}

export const updateVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const { videoId, title } = req.body;
        if (!videoId || !title) {
            return res.status(ServerStatus.BAD_REQUEST).send({ "message": "Enter All Required Data" });
        }
        await Videos.updateOne({ _id: id }, { $set: { videoId, title } });
        return res.status(ServerStatus.SUCCESS).send({ "message": "Video Update Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        await Videos.deleteOne({ _id: id });
        return res.status(ServerStatus.SUCCESS).send({ "message": "Video Delete Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}
