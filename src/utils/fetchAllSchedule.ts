import { cronClient } from '../services/custom.prisma.service';

export const getAllCronScheduleFromDB = async () => {
  // fetch from db
  let result = await cronClient.scheduler.findMany({
    select: {
      name: true,
      schedule: true,
    },
    where: {
      status: true,
    },
  });
  let responseData: { [key: string]: any } = {};
  responseData = result.reduce((prev, current) => {
    prev[current.name] = current.schedule;
    return prev;
  }, responseData);
  return responseData;
};
