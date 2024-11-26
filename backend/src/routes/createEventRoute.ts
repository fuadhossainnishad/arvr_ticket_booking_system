import express from 'express';
import upload from '../filehandle/createEvent';
import createEventController from '../controllers/createEventController';

export  const createEventRoute=express.Router()

createEventRoute.post('/events',upload.single("coverPhoto"),createEventController)

