// require('dotenv').config({ path: '.e2e.env' });

beforeAll(async () => {
  await device.launchApp();
});

beforeEach(async () => {});

afterAll(async () => {
  await detox.cleanup();
});
