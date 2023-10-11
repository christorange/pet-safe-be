import {defineConfig} from 'tsup';

const tsupConfig = defineConfig({
  entry: ['api-export/index.ts'],
  outDir: 'api-export/dist',
  format: ['esm'],
  clean: true,
  dts: true,
  tsconfig: 'api-export/tsconfig.tsup.json',
})

export default tsupConfig;