//const { customError } = require('../types/errorHandling')
// const WorkerPool = require('worker-pool-task-queue')
// const TaskPool = new WorkerPool(poolSize = 2, './routes/queue.js', maxWorkers = 10, returnWorker = true)
// const { uploadFileChunk } = require('./upload')
//const running = { longtask: false }
//const { output, prepOutput, outputError } = require('./output')

const DBOPERATIONS = require('../database/DBOperations'); const _DB = new DBOPERATIONS()


/**
 * @param {request} req - The request object from the API.
 * @param {ExpressResponse} res - The response object.
 */
exports.services = async (req, res, next) => {

  const match = {
    _id: { $exists: true }
  }
  const con = 'msdsd'
  const projects = {
    _id: { $toString: "$_id" },
    supplier: 1,
    tradename: 1,
    index: 1,
    status: "$status.status"
  }

  const limit = 500
  const rs = await _DB.findSpecificFields(match, con, projects, limit)
  console.log(rs)


req.data = rs
next()

  // const { headers, authService, body = false, param = false } = req
  // const { method, serviceInstance, command, curl } = authService
  // const service = serviceInstance || 'axios'

  // // if (command in running) { //Need later for lang tasks
  // //   switch (true) {
  // //     case running[command] === true:
  // //       req.rawdata = {
  // //         status: 409
  // //       }
  // //       next()
  // //       return
  // //     default:
  // //       running[command] = true
  // //       break
  // //   }
  // // }

  // if (!req || !res) throw await customError({ status: 401, message: 'nope!' })
  // /** @type {string} */ if (emptyString(command)) throw await customError({ status: 401, message: 'command missing' })

  // switch (true) {
  //   case command === 'filestorage':
  //     try {
  //       const startTime = new Date()
  //       /** @type {ApiResponse} */ const innerResponse = await uploadFileChunk(req, res)

  //       const endTime = new Date()
  //       innerResponse.elapsedTime = `${endTime - startTime} ms`
  //       /** @type {ApiReturn} */ req.rawdata = await prepOutput(innerResponse)
  //       output(req, res)
  //     } catch (err) {
  //       outputError(err, res)
  //     }
  //     break
  //   default:
  //   /** @type {requestInput} */ const requestInput = { headers, method, service, command }
  //     if (body && !isEmptyObject(body)) requestInput.body = body
  //     if (param && !isEmptyObject(param)) requestInput.param = param
  //     if (command === 'forward') {
  //       if (!curl) throw await customError({ status: 401, message: 'curl missing!' })
  //       requestInput.curl = curl
  //     }

  //     const _inner = async () => {
  //         const startTime = new Date() // Record start time
  //         /** @type {ApiResponse} */ const innerResponse = await TaskPool.runTask(requestInput)
  //         const endTime = new Date() // Record end time
  //         innerResponse.elapsedTime = `${endTime - startTime} ms`
  //         return await prepOutput(innerResponse)
  //     }
  //     _inner()
  //       .then(rawdata => {
  //         req.rawdata = rawdata
  //         //if (command in running) running[command] = false
  //         next()
  //       })
  //       .catch(err => { outputError(err, res) })
  //     break
  // }
}

