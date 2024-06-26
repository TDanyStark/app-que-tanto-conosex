/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'rosado': '#e797b2',
				'morado': '#5b2094',
				'rosado-oscuro': '#d787b5',
				'morado-texto': '#772583',
			},
			fontSize: {
        '12xl': '12em', // Agrega esta línea para definir el tamaño de texto de 12em
      },
		},
	},
	plugins: [],
}
