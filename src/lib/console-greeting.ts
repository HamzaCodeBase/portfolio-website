import { SOCIALS } from '@/lib/data'

export function printConsoleGreeting() {
  const title = 'color:#B4432B;font-weight:700;font-size:15px;font-family:Georgia,serif;font-style:italic;'
  const body = 'color:#6B6255;font-size:12px;font-family:sans-serif;'
  const email = 'color:#201C16;font-size:12px;font-family:monospace;'

  console.log('%cHey — nice to see a fellow keyboard person in here.', title)
  console.log('%cIf you’re digging through the console, you probably care about clean code as much as I do. Let’s talk:', body)
  console.log(`%c${SOCIALS.email}`, email)
}
