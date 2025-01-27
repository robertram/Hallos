import { FC } from 'react'

interface PlusMinusProps {
  isPlus?: boolean
  styles?: string
}

const PlusMinus: FC<PlusMinusProps> = ({ isPlus = false, styles }) => {
  const height = isPlus ? '100%' : '0%'

  return (
    <div
      className={`relative flex items-center justify-center ${styles}`}
    >
      <span
        className='absolute w-full h-[4px] bg-white border border-solid border-white rounded-xl'
      ></span>
      <span
        className={`absolute w-[4px] bg-white
          border border-solid border-white
          rounded-xl transition-all
        `}
        style={{ height }}
      ></span>
    </div>
  )
}

export default PlusMinus