import { Logo } from '../Logo'
import { HiMenuAlt2 } from 'react-icons/hi'

export function Navigation(props) {
  return (
    <nav {...props} className="navigation">
      <HiMenuAlt2 />
      <Logo />
    </nav>
  )
}
