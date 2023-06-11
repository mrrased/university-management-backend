import mongoose from 'mongoose'
import Config from './Config/index'
import app from './app'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  logger.error(error)
  process.exit(1)
})

let server: Server

async function main() {
  try {
    await mongoose.connect(Config.database_url as string)
    logger.info(`Database is connected successfully`)

    server = app.listen(Config.port, () => {
      logger.info(`Application listening on port ${Config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed to connect database', err)
  }

  process.on('unhandledRejection', error => {
    console.log(
      'unhandled Rejection is detected, we are closing our server.......'
    )
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is recived')
  if (server) {
    server.close()
  }
})

// university-admin
// sZvbyqs6aMsaiYD4
