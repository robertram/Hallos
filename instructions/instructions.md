## Description:
Event details cover component will show the image, title, date and location of the event.

Mock the data in the component.

Ignore the right side of the desktop page, that is a separate component. For now add a div with the size of the right component to make it look like the design.

Add a prop to the component called hideCoverImage: boolean

If the hideCoverImage is true then dont show the image.

## Acceptance Criteria
The result should follow the figma design.

### Testing
Add the respective story using storybook for this issue


## Current File Structure

.
├── README.md
├── chromatic.config.json
├── components.json
├── eslint.config.mjs
├── instructions
│   └── instructions.md
├── next.config.js
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── Frame.svg
│   ├── HallosLetters.svg
│   ├── LogoHallos.svg
│   ├── Spain.svg
│   ├── calendar.svg
│   ├── file.svg
│   ├── globe.svg
│   ├── hallos.png
│   ├── images
│   │   ├── Facebook.png
│   │   ├── GoldRogerProfile2.png
│   │   ├── GroupBookTicketIcon.png
│   │   ├── Instagram.png
│   │   ├── Location.png
│   │   ├── Map.png
│   │   ├── Pinterest.png
│   │   ├── TikTok.png
│   │   ├── Twitter.png
│   │   ├── VISA.png
│   │   ├── dollar.png
│   │   ├── eth.png
│   │   ├── hallos.png
│   │   └── vueltos-un-colocho.png
│   ├── location.svg
│   ├── next.svg
│   ├── nightParty1.png
│   ├── nightParty2.png
│   ├── qr.svg
│   ├── tico-blockchain.jpg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── GroupBookTicketIcon.png
│   │   ├── events
│   │   ├── example
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── Input
│   │   ├── PaymentMethod.tsx
│   │   ├── common
│   │   ├── forms
│   │   ├── layout
│   │   └── ui
│   ├── constants
│   │   ├── countries.ts
│   │   └── formInputs.ts
│   ├── icons
│   │   ├── Calendar.tsx
│   │   ├── Facebook.tsx
│   │   ├── Filter.tsx
│   │   ├── GitHub.tsx
│   │   ├── Instagram.tsx
│   │   ├── Location.tsx
│   │   ├── Loupe.tsx
│   │   ├── PlusMinus.tsx
│   │   ├── Twitter.tsx
│   │   └── index.ts
│   ├── lib
│   │   └── utils.ts
│   ├── stories
│   │   ├── Colors.mdx
│   │   ├── Configure.mdx
│   │   └── assets
│   ├── types
│   │   └── faq.type.ts
│   └── utils
│       ├── events.ts
│       └── faqs.ts
├── tailwind.config.ts
├── tsconfig.json
└── yarn.lock