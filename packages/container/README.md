# micronfrontend-monorepo 🦄

## Why?

The microfrontend architecture with the webpack module federation could be a pain in the a** when it comes to integrate old legacy cra apps together.
The monorepo architecture is a nice solution when you have multiple apps that needs to share common rules (eslint, code conventions, etc etc), without becoming monoliths


## How?
Here we have simply different cra apps, handled by Lerna, and transpiled by babel that uses the same config at the project root

## How to start in isolation

You can simply navigate to the single app
```
  cd packages/a
  npm i && npm start

```

## How to start with the container app

You can simply do:
```
  npm run installation && cd packages/container && npm start

```


## Why it is so simple?
Super easy config files (only babel and lerna), that's all

Let's have a look about how the final result by visiting it's [demo](https://microfrontend-monorepo.netlify.app/)
