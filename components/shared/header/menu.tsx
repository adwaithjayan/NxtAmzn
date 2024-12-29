import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
      return (
          <div className='flex justify-end'>
                <nav className='flex w-full gap-3'>
                      <Link href='/cart' className='header-button'>
                            <UserIcon className='size-8' />
                            <span className='font-bold'>Sign in</span>
                      </Link>

                      <Link href='/cart' className='header-button'>
                            <ShoppingCartIcon className='size-8' />
                            <span className='font-bold'>Cart</span>
                      </Link>
                </nav>
          </div>
      )
}