import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 80ae20be625998e4fb7b80d2e635af9fbbf15437f03534a64c3dbe52a5c42a52"
      }
});

