import { ServerStatus } from '../utils/ServerStatus.js';
import { Doctors } from '../db/models/Doctors.js';
import { createSlug } from '../utils/createSlug.js';
import mongoose from 'mongoose';
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
// @ts-check

export const getDoctors = async (req, res) => {
    try {
        const find = await Doctors.find();
        if (!find) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "No Doctors Found" });
        }
        return res.status(ServerStatus.SUCCESS).send(find);
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
};

export const getDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const isValidObjectId = mongoose.isValidObjectId(id);
        const find = await Doctors.findOne(isValidObjectId ? { _id: id } : { slug: id });
        if (!find) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "No Doctors Found" });
        }
        return res.status(ServerStatus.SUCCESS).send(find);
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
};


export const newDoctor = async (req, res) => {

    try {
        const { image, name, mobile, email, position, education, content, links } = req.body;

        if (!image || !name || !mobile || !email || !position || !education || !content || !links) {
            return res.status(ServerStatus.BAD_REQUEST).send({ "message": "Enter All Required Data" });
        }

        const doctor = new Doctors({
            image, name, mobile, email, position, education, content, slug: createSlug(name), links
        });
        await doctor.save();
        return res.status(ServerStatus.SUCCESS).send({ "message": "Doctor Add Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
};

export const updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, name, mobile, email, position, education, content, links } = req.body;

        if (!image || !name || !mobile || !email || !position || !education || !content || !links) {
            return res.status(ServerStatus.BAD_REQUEST).send({ "message": "Enter All Required Data" });
        }

        const doctor = await Doctors.updateOne({ _id: id }, { $set: { image, name, mobile, email, position, education, content, links } });

        return res.status(ServerStatus.SUCCESS).send({ "message": "Doctor Update Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
};

export const deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await Doctors.deleteOne({ _id: id });
        return res.status(ServerStatus.SUCCESS).send({ "message": "Doctor Delete Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
};