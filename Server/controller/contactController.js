/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
// @ts-check

import { Contacts } from '../db/models/Contacts.js';
import { ServerStatus } from '../utils/ServerStatus.js';

export const getContacts = async (req, res) => {
    try {
        const find = await Contacts.find();
        if (!find) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "No Conatcts Found" });
        }
        return res.status(ServerStatus.SUCCESS).send(find);
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const newContact = async (req, res) => {
    try {
        const { name, email, mobile, message } = req.body;
        if (!name || !email || !mobile || !message) {
            return res.status(ServerStatus.BAD_REQUEST).send({ "message": "Enter All Required Data" });
        }
        const newContactGet = new Contacts({ name, email, mobile, message });
        await newContactGet.save();
        return res.status(ServerStatus.SUCCESS).send({ "message": "Contact Add Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const deleteContacts = async (req, res) => {
    try {
        const { id } = req.params;
        await Contacts.deleteOne({ _id: id });
        return res.status(ServerStatus.SUCCESS).send({ "message": "Contact Delete Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}