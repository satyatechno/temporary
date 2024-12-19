import axiosInstance from "./axiosInstance";

export const joinChallengeApi=(data:any)=>axiosInstance.post('challenge/join',data)
export const checkRoomApi=(data:any)=>axiosInstance.post('challenge/verify/code',data)
export const joinRoomApi=(data:any)=>axiosInstance.post('challenge/join/room',data)
export const createChallengeApi=(data:any)=>axiosInstance.post('challenge/create',data)
export const challange1v1Api=(data:any)=>axiosInstance.post('challenge/1v1',data)
export const openChallengesApi=(params:any={})=>axiosInstance.get(`challenge/open`,{params})
export const challengeHistoryApi=(params:any={})=>axiosInstance.get(`challenge/history`,{params})






////Tournament api
export const tournamentHistoryData=(params:any={})=>axiosInstance.get(`tournament/user-history/main`,{params})


