import { Controller, Get } from 'fastro'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Http2ServerResponse } from 'http2'

@Controller()
export class HelloController {
  @Get()
  sayHello (request: FastifyRequest, reply: FastifyReply<Http2ServerResponse>): any {
    reply.send('hello')
  }
}