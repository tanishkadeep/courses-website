import axios from 'axios';

const API_URL = 'https://66651c6ed122c2868e3fcdcb.mockapi.io/data/api/course/Courses';

export const fetchCoursesAPI = () => {
  return axios.get(API_URL);
};
