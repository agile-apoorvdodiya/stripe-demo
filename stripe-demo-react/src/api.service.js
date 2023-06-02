export const fetchRequest = {
  post: async (url, body, headers = {}) => {
    try {
      const response = await fetch(
        url,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            ...headers
          },
          body: body ? JSON.stringify(body) : '{}',
        }
      );
      return await response.json();
    } catch (error) {
      console.log(' fetch error ', error);
      throw error
    }
    
  },
};
