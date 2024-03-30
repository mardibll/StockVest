import axios from 'axios';

export const index_ITMG = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/dual-y-axis-data.json',
      )
      .then(res => {
        resolve(res); // Melakukan resolve dengan respons (res)
      })
      .catch(err => {
        reject(err); // Melakukan reject dengan error (err)
      });
  });
};
