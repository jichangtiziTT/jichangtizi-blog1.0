/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gazette: {
          bg: '#f7f5f0',
          paper: '#ffffff',
          tint: '#efece4',
          border: '#d6d1c7',
          darkborder: '#8c857b',
          ink: '#1a1816',
          muted: '#57534e',
          amber: '#b45309',
          amberdark: '#92400e',
          forest: '#15803d',
          crimson: '#b91c1c'
        }
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', 'Songti SC', 'SimSun', 'Georgia', 'serif'],
        sans: ['"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'Menlo', 'monospace']
      },
      boxShadow: {
        'gazette': '2px 2px 0px rgba(26, 24, 22, 0.08)',
        'gazette-lift': '4px 4px 0px rgba(26, 24, 22, 0.12)'
      }
    },
  },
  plugins: [],
};
