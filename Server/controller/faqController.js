/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
// @ts-check

import { Faqs } from '../db/models/Faqs.js';
import { ServerStatus } from '../utils/ServerStatus.js';

export const getFaqs = async (req, res) => {
    try {
        const faqs = await Faqs.find();
        return res.status(ServerStatus.SUCCESS).send(faqs);
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const getFaq = async (req, res) => {
    try {
        const { id } = req.params;
        const faqs = await Faqs.findOne({ _id: id });
        return res.status(ServerStatus.SUCCESS).send(faqs);
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const addFaq = async (req, res) => {
    try {
        const { qus, ans } = req.body;
        const faqs = new Faqs({ qus, ans });
        await faqs.save();
        return res.status(ServerStatus.SUCCESS).send({ message: "Faq Add Successful" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const updateFaq = async (req, res) => {
    try {
        const { id } = req.params;
        const { qus, ans } = req.body;
        await Faqs.updateOne({ _id: id }, { $set: { qus, ans } });
        return res.status(ServerStatus.SUCCESS).send({ message: "Faq Update Successful" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}


export const deleteFaq = async (req, res) => {
    try {
        const { id } = req.params;
        await Faqs.deleteOne({ _id: id });
        return res.status(ServerStatus.SUCCESS).send({ message: "Faq Delete Successful" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}