import { cronClient } from "../../src/services/custom.prisma.service"
import { schedulerSeed } from "./scheduler.seed"





schedulerSeed()
  .then(async () => {
    await cronClient.$disconnect()
    console.log(`Seed to ${process.env.NODE_ENV} successfully!`)
  })
  .catch(async (e) => {
    console.error(e)
    await cronClient.$disconnect()
    process.exit(1)
  })