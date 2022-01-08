# Microfrontends with Jack Herrington

This one has to be installed in 3 places and run with a static server from host (an intro to webpack 5 module federation which shares code).

In 3 separate terminals:

```bash
cd host && yarn && yarn dev
cd components/checkout && yarn && yarn dev
cd components/images && yarn && yarn dev
```

- now run the host's index.html file from a static server

- it's being provided with fronted code from React and vanilla js components running on separate servers
