/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
// @ts-check

import mongoose from 'mongoose';
import { Blogs } from '../db/models/Blogs.js';
import { ServerStatus } from '../utils/ServerStatus.js';
import { createSlug } from '../utils/createSlug.js';

export const getBlogs = async (req, res) => {
    try {
        const find = await Blogs.find();
        if (!find) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "No Blogs Found" });
        }
        return res.status(ServerStatus.SUCCESS).send(find);
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const getBlog = async (req, res) => {
    try {

        const { id } = req.params;
        const isValidObjectId = mongoose.isValidObjectId(id);
        const find = await Blogs.findOne(isValidObjectId ? { _id: id } : { slug: id });

        if (!find) {
            return res.status(ServerStatus.NOT_FOUND).send({ "message": "No Blogs Found" });
        }
        return res.status(ServerStatus.SUCCESS).send(find);
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const newBlog = async (req, res) => {
    try {
        const { image, title, keywords, description, content } = req.body;
        if (!image || !title || !keywords || !description || !content) {
            return res.status(ServerStatus.BAD_REQUEST).send({ "message": "Enter All Required Data" });
        }
        const newBlogPost = new Blogs({
            image,
            title,
            keywords,
            description,
            content,
            slug: createSlug(title)
        });

        await newBlogPost.save();
        return res.status(ServerStatus.SUCCESS).send({ "message": "Blog Post Add Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, title, keywords, description, content } = req.body;
        if (!image || !title || !keywords || !description || !content) {
            return res.status(ServerStatus.BAD_REQUEST).send({ "message": "Enter All Required Data" });
        }

        const newBlogPost = await Blogs.updateOne({ _id: id }, {
            $set: {
                image,
                title,
                keywords,
                description,
                content,
            }
        });

        return res.status(ServerStatus.SUCCESS).send({ "message": "Blog Post Update Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        await Blogs.deleteOne({ _id: id });

        return res.status(ServerStatus.SUCCESS).send({ "message": "Blog Post Delete Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(ServerStatus.INTERNAL_SERVER_ERROR).send({ message: "Server Error", error: error.toString })
    }
}