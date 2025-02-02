# Changelog

## [0.1.0] - 2024-01-25

### Added
- Created new EventDetailsCover component
  - Displays event title, date/time, and location
  - Optional cover image with hide/show functionality
  - Responsive design following Figma specs
  - TypeScript interfaces for type safety
  - Tailwind CSS for styling

### New Files
- `/src/components/EventDetailsCover/`
  - `EventDetailsCover.tsx` - Main component
  - `types.ts` - TypeScript interfaces
  - `index.ts` - Barrel exports
- `/src/utils/dateFormatter.ts` - Date formatting utility
- `/src/stories/EventDetailsCover.stories.tsx` - Storybook stories

### Features
- Cover image with optional hide/show functionality
- Formatted date/time display
- Location details with venue, address, city, state
- Icon integration for calendar and location
- Storybook documentation with two variants:
  - Default (with cover image)
  - Without cover image

### Technical Details
- Built with Next.js Image component for optimized images
- TypeScript for type safety
- Tailwind CSS for styling
- Storybook integration for component documentation
- Modular file structure following project conventions
