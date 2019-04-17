import { Request } from 'express';
import { default as fetch } from 'node-fetch';
import { User, IUser, IServerResponse, eventSort } from '../Utils';

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
      if (userExists.events.length > 1) {
        userExists.events = eventSort(userExists.events);
      }

      await userExists.save();
      res.json({
        success: true,
        message: `Welcome back ${userExists.name}`,
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
        message: `Welcome to budgeteer, ${newUser.name}`,
        user: <IUser>newUser
      });
    }
  } else {
    res.json({ status: 'error', data: 'something real wrong here.' });
  }
};
