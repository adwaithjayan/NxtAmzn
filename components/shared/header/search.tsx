import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
} from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'
const categories = ['men', 'women', 'kids', 'accessories']
export default async function Search() {
      return (
          <form
              action='/search'
              method='GET'
              className='flex  h-10 items-stretch '
          >
                <Select name='category'>
                      <SelectTrigger className='h-full w-auto rounded-l-md rounded-r-none border-r bg-gray-100  text-black dark:border-gray-200'>
                            <SelectValue placeholder='All' />
                      </SelectTrigger>
                      <SelectContent position='popper'>
                            <SelectItem value='all'>All</SelectItem>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                      {category}
                                </SelectItem>
                            ))}
                      </SelectContent>
                </Select>
                <Input
                    className='h-full flex-1 rounded-none bg-gray-100 text-base text-black dark:border-gray-200'
                    placeholder={`Search Site ${APP_NAME}`}
                    name='q'
                    type='search'
                />
                <button
                    type='submit'
                    className='h-full rounded-e-md rounded-s-none bg-primary px-3 py-2 text-black text-primary-foreground '
                >
                      <SearchIcon className='size-6' />
                </button>
          </form>
      )
}