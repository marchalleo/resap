import { useRouter } from 'next/router'
import classNames from 'classnames'
import NextLink from 'next/link'
import { ChildrenProp, ClassNameProp } from '../types/react'
import { primaryClassName } from './Buttons/Primary'

type Props = {
  href: string,
  activeClassName?: string,
  inactiveClassName?: string,
} & ClassNameProp & ChildrenProp

const InternalLink = ({ href, children, className, activeClassName, inactiveClassName }: Props) => {
  const { pathname } = useRouter()

  const sanitizedHref = `/${href.replace(/^\//, '')}`

  return (
    <NextLink href={sanitizedHref}>
      <a className={classNames(className, pathname === sanitizedHref ? activeClassName : inactiveClassName)}>
        {children}
      </a>
    </NextLink>
  )
}

export const Link = (props: Props) => {
  if (props.href.startsWith('http')) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} target="_blank" rel="nofollow noopener" />
  }

  return <InternalLink {...props} />
}

export const PrimaryLink = (props: { href: string } & ChildrenProp) => (
  <Link {...props} className={primaryClassName} />
)