import request from "@/utils/request";

// 提交义诊预约工单
export const postAppointmentForm = (data: any) => {
  console.log(data);
  if (Array.isArray(data.requirement)) {
    data.requirement = data.requirement.join(",");
  }
  return request.post("/appointment/submitAppointmentForm", data);
};

// 查询维修进度
export const getAppointmentProcess = (mobile: string) => {
  return request.post("/appointment/getAppointmentProcess", { mobile });
};

// 确认维修结果
export const confirmRepairCompletedApi = (mobile: string) => {
  return request.post("/appointment/confirmRepairCompleted", { mobile });
};

// 提交评分
export const submitScoreApi = (score: number, mobile: string) => {
  return request.post("/appointment/submitScore", { score, mobile });
};

// 提交评价
export const submitEvaluationApi = (evaluation: string, mobile: string) => {
  return request.post("/appointment/submitEvaluation", { evaluation, mobile });
};
