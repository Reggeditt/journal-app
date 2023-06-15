import {authMiddleware} from '@clerk/nextjs'
import exp from 'constants'

export default authMiddleware({
  publicRoutes: ['/'],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}