import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'Home',
  },
  {
    id: 2,
    href: '#about',
    text: 'About',
  },
  {
    id: 3,
    href: '#services',
    text: 'Services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'Tours',
  },
]

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    icon: 'fab fa-squarespace',
  },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Save money with the help of our search algorithms that help you track down the most economical transportation.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Our hiking experts have compiled thousands of different hiking trails for all experience levels.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Let us help you find the most comfortable lodging so that you can continue to explore with energy and fervor.',
  },
]

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Take an adventure to Tibet!',
    country: 'china',
    duration: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    img: tour2,
    date: 'october 1st, 2020',
    title: 'best of java',
    text: 'Visit and see the best of Java!',
    country: 'indonesia',
    duration: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    img: tour3,
    date: 'september 15th, 2024',
    title: 'explore hong kong',
    text: 'Check out the vibrant city of Hong Kong!',
    country: 'china',
    duration: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    img: tour4,
    date: 'december 5th, 2023',
    title: 'kenya highlights',
    text: 'Explore Kenya! See some elephants!',
    country: 'kenya',
    duration: '20 days',
    price: 'from $3300',
  },
]
