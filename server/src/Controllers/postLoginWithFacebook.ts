import { Request } from 'express';
import { default as fetch } from 'node-fetch';
import { User, IUser, IServerResponse } from '../Utils';

export const postLoginWithFacebook = async (
  req: Request,
  res: IServerResponse
) => {
  const { accessToken, userID } = req.body;
  const user = await fetch(
    `https://graph.facebook.com/v3.2/me?access_token=${accessToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`
  );
  const userJSON: IUser = await user.json();

  if (userJSON.id === userID) {
    const userExists: IUser = await User.findOne({ facebookId: userID });

    if (userExists) {
      res.json({
        success: true,
        message: 'Logged in successfully.',
        user: <IUser>userExists
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
        success: true,
        message: 'New user has been registered + logged in.',
        user: <IUser>newUser
      });
    }
  } else {
    res.json({ status: 'error', data: 'something real wrong here.' });
  }
};
