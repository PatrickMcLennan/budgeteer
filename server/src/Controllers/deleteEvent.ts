import { Request, Response } from 'express';
import { default as fetch } from 'node-fetch';
import { User, IUser } from '../Utils';

export const deleteEvent = (req: Request, res: Response) => {
  console.log('deleteEvent function working');
};
