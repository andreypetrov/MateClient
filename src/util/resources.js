import axios from 'axios';
import { API_BASE } from 'src/config/constants';

export const studentsList = axios.create({
  baseURL: `${API_BASE}/students/`
});
