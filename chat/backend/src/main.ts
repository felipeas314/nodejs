import AppDataSource from './infra/data-source-mongodb';

AppDataSource
  .createDataSource()
  .initialize()
  .then(async () => {
    const { setupApp } = await import('./infra/server');
    const s = await setupApp();
    s.listen(4000, () => console.log('werwerwerd'));
  }).catch((error) => console.log(error));
