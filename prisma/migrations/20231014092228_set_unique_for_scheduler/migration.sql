/*
  Warnings:

  - A unique constraint covering the columns `[name,schedule,status]` on the table `Scheduler` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Scheduler_name_schedule_status_key` ON `Scheduler`(`name`, `schedule`, `status`);
