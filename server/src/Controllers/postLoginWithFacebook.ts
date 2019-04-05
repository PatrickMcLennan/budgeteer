import { Request, Response } from 'express';
import { default as fetch } from 'node-fetch';
import { User, IUser } from '../Utils';

export const postLoginWithFacebook = async (req: Request, res: Response) => {
  const { accessToken, userID } = req.body;
  const user = await fetch(
    `https://graph.facebook.com/v3.2/me?access_token=${accessToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`
  );
  const userJSON = await user.json();

  if (userJSON.id === userID) {
    const userExists: IUser = await User.findOne({ facebookID: userID });

    if (userExists) {
      res.json({
        status: 200,
        data: 'Logged in successfully.',
        message: <IUser>userExists
      });
    } else {
      const newUser = new User({
        facebookId: userID,
        name: userJSON.name,
        accessToken,
        events: []
      });
      await newUser.save();
      res.json({
        status: 200,
        data: 'New user has been registered + logged in.',
        message: <IUser>newUser
      });
    }
  } else {
    res.json({ status: 'error', data: 'something real wrong here.' });
  }
};
