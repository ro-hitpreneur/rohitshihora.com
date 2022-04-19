import * as ROUTES from '@/constants/routes'

interface Link {
  name: string
  title: string
  href: string
}

const links: Link[] = [
  {
    name: 'About',
    title: 'About',
    href: ROUTES.HOME,
  },
  {
    name: 'Resume',
    title: 'Resume',
    href: ROUTES.RESUME,
  },
]

export default links
