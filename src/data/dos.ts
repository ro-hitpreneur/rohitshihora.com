import React from 'react'
import PencilIcon from '@/icons/PencilIcon'
import GlobeAltIcon from '@/icons/GlobeAltIcon'
import DesktopIcon from '@/icons/DesktopIcon'
import SpeakerPhoneIcon from '@/icons/SpeakerPhoneIcon'

export interface Do {
  icon: React.FC
  header: string
  text: string
}

const dos: Do[] = [
  {
    icon: PencilIcon,
    header: 'Copywrite',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. quos voluptatibus magni id similique mollitia tenetur, excepturi sint ea ducimus non facilis enim officiis provident ullam iusto.',
  },
  {
    icon: GlobeAltIcon,
    header: 'Ecommerce',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis explicabo veritatis quos voluptatibus magni id similique mollitia tenetur, excepturi sint ea ducimus non facilis enim officiis provident ullam iusto.',
  },
  {
    icon: DesktopIcon,
    header: 'Web Design',
    text: 'Lorem ipsum dolor id similique mollitia tenetur, excepturi sint ea ducimus non facilis enim officiis provident ullam iusto.',
  },
  {
    icon: SpeakerPhoneIcon,
    header: 'Marketing',
    text: 'Lorem ipsum dolor sit amet consectetur quos voluptatibus magni id similique mollitia tenetur, excepturi sint ea ducimus non facilis enim officiis provident ullam iusto.',
  },
]

export default dos
