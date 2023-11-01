// eslint-disable-next-line no-unused-vars
import axiosObj from "../http-common";

export const getAllMovies = async () => {
    try {
      const response = await axiosObj.get('', {
        params: {
          s: '', 
        },
      });
  
      return response.data.Search; 
    } catch (error) {
      console.error('Error fetching all movies:', error);
      return [];
    }
  };

const MovieService = {
    getAllMovies,
};

export default MovieService;
