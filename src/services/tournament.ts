import axiosInstance from './axiosInstance';

export const getTouenamentEntry = async (body: any) => {
  try {
    const { data } = await axiosInstance.post(`tournament/participate`, body);

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const tournamentTicketEntryApi = (data: any) =>
  axiosInstance.post('/tournament/ticket/participate', data);
export const tournamentScoreApi = async (body: any) => {
  try {
    const { data } = await axiosInstance.post(
      `tournament/participate/submit`,
      body
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
