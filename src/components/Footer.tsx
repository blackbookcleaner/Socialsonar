import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { APP_NAME, REPO_URL } from '@/lib/constants'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">{`About ${APP_NAME}`}</NavLink>
                <NavLink href={`${REPO_URL}/issues/new`}>Report a bug</NavLink>
                <NavLink href={`${REPO_URL}/issues/new`}>Suggest improvement</NavLink>
                <NavLink href="/about">Ask a question</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Made by <a href='https://azumo.com' target='_BLANK' className='text-teal-500 hover:text-teal-600'>Azumo LLC</a>
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
