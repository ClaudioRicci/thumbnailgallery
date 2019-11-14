import axios from "axios";

export const getItem = (url: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
};
