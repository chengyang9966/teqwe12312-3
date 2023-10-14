import { cronClient } from '../../src/services/custom.prisma.service';

export const schedulerSeed = async () => {
  await cronClient.scheduler.upsert({
    where: {
      name_schedule_status: {
        name: 'TEST',
        schedule: '* 5 * * *',
        status: true,
      },
    },
    update: {
      schedule: '*/5 * * * *',
    },
    create: {
      name: 'TEST',
      schedule: '* 5 * * *',
      status: true,
    },
  });

  await cronClient.scheduler.upsert({
    where: {
      name_schedule_status: {
        name: 'sync_from_provider',
        schedule: '20 00 * * *',
        status: true,
      },
    },
    update: {},
    create: {
      name: 'sync_from_provider',
      schedule: '20 00 * * *',
      status: true,
    },
  });
};
