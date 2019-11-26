import axios from 'axios';

const getEvents = (term, page) => {
  return axios
    .get('/events', {
      params: {
        _page: page,
        _limit: 10,
        q: term
      }
    })
    .then(results => results.data)
    .catch(err => console.error(err));
};

export default getEvents;
