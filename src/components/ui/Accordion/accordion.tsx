'use client'
import { FC, useState } from 'react'
import { ItemAccordion } from './item'
import { FAQ } from '@/types/faq.type'

type AccordionProps = {
  faqs: FAQ[]
}

export const Accordion: FC<AccordionProps> = ({ faqs }) => {
  const [accordionItemSelected, setAccordionItemSelected] = useState<number>(-1)

  const toggle = (index: number): void => {
    setAccordionItemSelected((prev) => (prev === index ? -1 : index))
  }

  return (
    <div
      className={`flex flex-col gap-y-4 transition-all duration-500 pb-10 overflow-hidden h-[520px]`}
    >
      {
        faqs.map((faq, i) => (
          <ItemAccordion
            faq={faq}
            focus={accordionItemSelected === i}
            onClick={() => toggle(i)}
            key={`item-accordion-${i}`}
          />
        ))
      }
    </div>
  )
}