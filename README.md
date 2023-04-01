## Install deno
`brew install deno`

## Enable deno support for VS code
1. Install deno extension
2. In settings we need to enable deno support

`"deno.enable": true`

## Run the main file
`deno run main.ts`

## Show info
`deno info main.ts`

## Create bundle
`deno bundle main.ts >> bundle.ts`

## Run bundle
`deno run bundle.ts`