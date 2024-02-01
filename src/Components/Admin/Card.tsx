import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface CardProps {
    title: string;
    imageUrl: string;
    id: string;
    onDelete: (e: string) => void
}

const Card: React.FC<CardProps> = ({ id, onDelete, title, imageUrl }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2  line-clamp-2">{title}</div>
                <div className="flex justify-end items-end gap-7">
                    <Link to={"/admin/service/" + id}>Edit</Link>
                    <p className="text-red-600 cursor-pointer" onClick={() => onDelete(id)}>Delete</p>
                </div>
            </div>
        </div>
    );
};

export default Card;



interface VideoCardProps {
    title: string;
    videoid: string;
    id: string;
    onDelete: (e: string) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ title, videoid, id, onDelete }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <iframe src={"https://www.youtube.com/embed/" + videoid} className="h-40 w-full object-cover " title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 line-clamp-2">{title}</div>
                <div className="flex justify-end items-end gap-7">
                    <Link to={"/admin/video/" + id}>Edit</Link>
                    <p className="text-red-600 cursor-pointer" onClick={() => onDelete(id!)}>Delete</p>
                </div>
            </div>
        </div>
    );
};

export function BlogCard({ id, onDelete, title, date }: { id: string, title: string, date: string, onDelete: ((e: string) => void) }) {
    return (
        <div className='py-5 border-b-2'>
            <h1 className='text-3xl font-bold line-clamp-2'>{title}</h1>
            <p className='mt-3'>Date: {date}</p>
            <div className="flex gap-5 mt-5">
                <Link to={"/admin/blog/" + id}><Button>Update</Button></Link>
                <Button variant='danger' onClick={() => onDelete(id)}>Delete</Button>
            </div>
        </div>
    )
}


interface ContactCardProps {
    name: string;
    email: string;
    message: string;
    mobile: string | number;
    id: string;
    onDelete: (e: string) => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({ id, name, email, message, mobile, onDelete }) => {
    return (
        <div className="bg-white border-2 p-3 rounded-md">

            <div className="mb-3">
                <strong>Name:</strong> {name}
            </div>
            <div className="mb-3">
                <strong>Email:</strong> {email}
            </div>
            <div className="mb-3">
                <strong>Mobile:</strong> {mobile}
            </div>
            <div className="mb-3">
                <strong>Message:</strong> {message}
            </div>

            <div className="flex justify-between">
                <a href={`tel:${mobile}`}><Button variant='primary'>Call</Button></a>
                <a href={`mailto:${email}`}><Button variant='success'>Email</Button></a>
                <Button variant='danger' onClick={() => onDelete(id)}>Delete</Button>
            </div>
        </div>
    );
};

export function DahbordCard({ title, value }: { title: string, value: string }) {
    return (
        <div className='h-44 p-6 w-full shadow border-2 rounded-lg' >
            <h1 className='text-2xl font-bold'>{title}</h1>
            <br />
            <h1 className='text-6xl font-extrabold text-blue-950'>{value}</h1>
        </div>
    )
}
