import {defineConfig} from 'tsup';

const tsupConfig = defineConfig({
  entry: ['api-export/index.ts'],
  outDir: 'api-export/dist',
  format: ['cjs', 'esm'],
})

export default tsupConfig;