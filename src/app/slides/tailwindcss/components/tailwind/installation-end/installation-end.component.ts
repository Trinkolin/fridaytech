import { Component } from '@angular/core';
import { PrismComponent } from '../../../../../shared/components/prism/prism.component';
import { SlideshowTitleComponent } from '../../../../../slideshow/components/slideshow-title/slideshow-title.component';

@Component({
  selector: 'app-installation-end',
  standalone: true,
  templateUrl: './installation-end.component.html',
  imports: [PrismComponent, SlideshowTitleComponent],
})
export class InstallationEndComponent {
  step_3 = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

  step_4 = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ],
  plugins: [],
}
`;

  step_5 = `
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
`;
  step_6 = `
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="/dist/output.css" rel="stylesheet">
</head>
<body>
<h1 class="text-3xl font-bold underline">
  Tailwind works!
</h1>
</body>
</html>
`;
}
