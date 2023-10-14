import moment from 'moment';

export const logStartTime = (cronName: string, fireDate: Date) => {
  console.log(
    `${cronName} | scheduleJob startTime: ${moment(fireDate).format('YYYY-MM-DD HH:mm:ss')}`
  );
};

export const logEndTime = (cronName: string) => {
  console.log(
    `${cronName} | scheduleJob endTime: ${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}`
  );
};
