/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * 
 */
// @ts-check

import { Services } from '../db/models/Services.js';
import { ServerStatus } from '../utils/ServerStatus.js';
import { createSlug } from '../utils/createSlug.js';
import mongoose from 'mongoose';
export const getServices = async (req, res) => {
    try {
        const find = await Services.find();
        if (!find) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "No Services Found" });
        }
        return res.status(ServerStatus.SUCCESS).send(find);

    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const getService = async (req, res) => {
    try {
        const { id } = req.params;
        const isValidObjectId = mongoose.isValidObjectId(id);
        const find = await Services.findOne(isValidObjectId ? { _id: id } : { slug: id });
        if (!find) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "No Services Found" });
        }
        return res.status(ServerStatus.SUCCESS).send(find);

    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const newService = async (req, res) => {
    try {

        const { image, title, content } = req.body;
        if (!image || !title || !content) {
            return res.status(ServerStatus.BAD_REQUEST).send({ "message": "Enter All Required Data" });
        }
        const newServiceAdd = new Services({ image, title, content, slug: createSlug(title) });
        await newServiceAdd.save();
        return res.status(ServerStatus.SUCCESS).send({ "message": "Service Add Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, title, content } = req.body;
        if (!image || !title || !content) {
            return res.status(ServerStatus.BAD_REQUEST).send({ "message": "Enter All Required Data" });
        }
        await Services.updateOne({ _id: id }, { $set: { image, title, content } });

        return res.status(ServerStatus.SUCCESS).send({ "message": "Service Update Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const deleteService = async (req, res) => {
    try {
        const { id } = req.params;

        await Services.deleteOne({ _id: id });

        return res.status(ServerStatus.SUCCESS).send({ "message": "Service Delete Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}