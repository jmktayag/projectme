# Project Images

This directory contains images for the projects displayed in the ProjectsSection component.

## Image Requirements

- Format: JPG or PNG
- Recommended size: 1200x800 pixels
- Aspect ratio: 3:2 (landscape)
- File size: Optimize for web (under 200KB if possible)

## Naming Convention

Name your project images according to the following pattern:
- `project1.jpg`
- `project2.jpg`
- `project3.jpg`
etc.

## Adding New Project Images

1. Add your image file to this directory
2. Update the corresponding project in `src/data/projects.ts` with the correct image path
3. Make sure the image path follows the pattern: `/images/projects/your-image-name.jpg`

## Image Optimization

For best performance:
- Use Next.js Image component which automatically optimizes images
- Consider using tools like [TinyPNG](https://tinypng.com/) to compress images before adding them
- Test loading performance with different image sizes 