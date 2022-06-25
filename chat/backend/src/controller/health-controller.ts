import { Request, Response } from 'express'

export default class {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.status(200).json({
      message: 'Server up',
      status: 'OK',
    })
  }
}
