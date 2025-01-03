'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbsProps {
  className?: string
}

export default function Breadcrumbs({ className = '' }: BreadcrumbsProps) {
  const pathname = usePathname()
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map(segment => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: `/${segment}`
    }))

  return (
    <nav
      aria-label="Breadcrumb"
      className={`bg-[#1a1b3b] p-6 ${className}`}
    >
      <ol className="flex items-center space-x-4 text-text2 text-gray-300">
        <li>
          <Link
            href="/"
            className="hover:text-gray-100 transition-colors"
          >
            Home
          </Link>
        </li>
        {segments.map((segment, index) => (
          <li key={segment.href} className="flex items-center space-x-4">
            <span className="text-gray-500 mx-4">-</span>
            <Link
              href={segment.href}
              className="hover:text-gray-100 transition-colors"
              aria-current={index === segments.length - 1 ? 'page' : undefined}
            >
              {segment.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

