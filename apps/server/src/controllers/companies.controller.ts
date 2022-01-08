import { default as companies } from '../utils/companies.json';

export const listAll = async (req, res) => {
  try {
    return res.status(200).send(companies);
  } catch (err) {
    res.status(500).send('Unexpected error occurred, Error: ', err);
  }
};
