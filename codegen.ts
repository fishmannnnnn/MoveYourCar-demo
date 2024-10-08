import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: 'https://myc.fractal-web.com/graphql',
    documents: 'src/**/*.tsx',
    generates: {
        'src/data/generated/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                fragmentMasking: false,
            },
        },
    },
}

export default config
