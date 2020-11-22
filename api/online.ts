import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';

interface Response {
  data: {
    allowed_people: number;
    check_ins: number;
  };
}

export default async (_request: NowRequest, response: NowResponse) => {
  const checkIns = await axios
    .get<Response>('https://www.fitnessfirst.de/club/api/checkins/berlin12')
    .then((response) => response.data.data.check_ins);

  response.json({ checkIns });
};
