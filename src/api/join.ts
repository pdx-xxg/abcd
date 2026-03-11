import request from "@/utils/request";

// 提交报名表
export const postJoinForm = (data: any) => {
  return request.post("/join/submitJoinForm", data);
};

// 查询报名进度
export const getJoinProcess = (studentId: string) => {
  return request.post("/join/getJoinProcess", { studentId });
};
