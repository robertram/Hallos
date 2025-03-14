import { FC, ReactElement } from 'react'
import { PlusMinus } from '@/icons'
import { FAQ } from '@/types/faq.type'

type Props = {
  faq: FAQ
  focus: boolean
  onClick: () => void
  isLastElement?: boolean
}

export const ItemAccordion: FC<Props> = ({ faq, focus, onClick, isLastElement }): ReactElement => {
  return (
    <button
      className={`flex flex-col items-left flex-wrap px-5 py-7  text-left
        bg-glass-gradient border-solid border-white-10 w-full
        ${isLastElement ? 'border-0' : 'border-b-2'}
      `}
      onClick={onClick}
    >
      <div className='flex justify-between w-full'>
        <h3 className='max-w-[88%] text-h4'>{ faq.title }</h3>

        <PlusMinus isPlus={!focus} styles='min-w-4 max-h-4' />
      </div>

      <div className={`overflow-hidden
          transition-all duration-500
          ${focus ? 'max-h-32 ease-in' : 'max-h-0 ease-in-out'}
        `}
      >
        <p className='text-text1 text-[#BEBEBE] pt-4'>
          { faq.description }
        </p>
      </div>
    </button>
  )
}