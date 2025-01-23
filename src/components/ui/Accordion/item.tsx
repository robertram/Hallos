import { FC, ReactElement } from 'react'
import { Arrow } from '@/icons'
import { FAQ } from '@/types/faq.type'

type Props = {
  faq: FAQ
  focus: boolean
  onClick: () => void
}

export const ItemAccordion: FC<Props> = ({ faq, focus, onClick }): ReactElement => {
  return (
    <button
      className={`flex flex-col items-left flex-wrap p-5 max-w-2xl text-left
        bg-glass-gradient rounded-xl border-solid border border-white-10 w-full
        transition-[gap] duration-500 ease-in-out
        ${focus ? 'gap-3' : 'gap-0'}
      `}
      onClick={onClick}
    >
      <div className='flex justify-between w-full'>
        <h3 className='text-base font-bold max-w-[88%]'>{ faq.title }</h3>

        <Arrow className={`transform transition-transform duration-500 pt-1
            ${focus ? 'translate-y-0.5' : 'rotate-180'}
          `}
        />
      </div>

      <p className={`text-sm text-[#BEBEBE] mt-1 overflow-hidden
          transition-all duration-500
          ${focus ? 'max-h-32 ease-in' : 'max-h-0 ease-in-out'}
        `}
      >
        { faq.description }
      </p>
    </button>
  )
}