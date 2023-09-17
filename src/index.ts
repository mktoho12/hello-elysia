import { html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import IndexPage from './pages'

const app = new Elysia()
  .use(html())
  .get('/', IndexPage)
  .listen(Bun.env.PORT ?? 3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
