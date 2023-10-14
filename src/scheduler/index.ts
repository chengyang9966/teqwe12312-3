import cron from 'node-schedule';
import { getAllCronScheduleFromDB } from '../utils/fetchAllSchedule';
import { cronGetAllData } from './tasks/sample';

let allTasks: { [key: string]: cron.Job } = {};

export const initializeTask = async () => {
  // fetch from db
  const cronSchedules = await getAllCronScheduleFromDB();
  console.log(cronSchedules);
  allTasks = {
    cronSample: cronGetAllData(cronSchedules.TEST),
  };
  // console.dir(cronSchedules);
  console.log('all Tasks has being initialize');
};

export const rescheduleTasks = async () => {
  console.log('trigger reschedule tasks');
  for (const key in allTasks) {
    try {
      cron.cancelJob(allTasks[key]);
    } catch (error) {
      console.log('🚀 ~ file: index.ts:24 ~ rescheduleTasks ~ error:', error);
    }
  }
  await initializeTask();
};
