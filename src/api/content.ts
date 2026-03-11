import request from "@/utils/request";

export const getWebsiteDate = (id:number) => {
  return request.post(`/website/${id}`);
};