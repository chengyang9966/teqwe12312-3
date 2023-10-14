import cron from 'node-schedule';
import { logEndTime, logStartTime } from '../../utils/loggingDateTime';
const cronGetAllData = (schedule: string) => {
  return cron.scheduleJob(schedule, async function (fireDate: Date) {
    logStartTime('cronGetAllData', fireDate);

    logEndTime('cronGetAllData');

    // await sendMessageToTelegram(RedCASH_TELEGRAMGROUP.RedCASH,telegramErrorMessageGenerate('fetchGenerateDPD',`testing error`))
  });
};

export { cronGetAllData };
