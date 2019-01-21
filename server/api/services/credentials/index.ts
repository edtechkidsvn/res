const account = {
  type: 'service_account',
  projectId: 'tk-id-service',
  privateKeyId: '6e24499ec04400f7d461a4e64f42c39d4a2f4fb1',
  privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCTxDplqt7+pZV0\nF8K8uQIIIdmR61rtD3CyOKTiu+Gf3YPkl94m0h00gLiQazjE2aEwdYbqDwUqJF0T\nHf+JdTjnjYL3YpzPRoe1vL3DOCHwUVkZL5apCcNgS5sHV2bPBhakSuRX0mvZ+tVj\nEFotdSaEyHDWfXn9CvXsCtI40A8K7j9yIzZ+DsRP3YsLF3r7sCm0lBaFx2srp7E9\nb6X9A1IkKGEYUUHp68DJm2vjKX2pwqxyovEaFaBTDqOIECDp+fhCP/ttgrXe4krs\n0r++43N2s9dMyckS8cUA9dmuVDBtHaFghUOinoSj7ZZU+kMWUd72J8ERLCYStDmT\noXVHkBAnAgMBAAECggEAEOyXLFYl70WOI2X7Sbvo4H88A6CmC+PKVRH0H1HvNW0H\ncl2giz1ige/CSSw2rCPUTeVlcUEM0YxTqrZeB7jeLnXV9mPxhjNTpNGRbHQX6FtG\nLgJ2KjXc45ZqkwHZhm7x60RL+Ju4UEGQl3rj0TQLQtxllsjNTtmmsVp17x2JXjIf\nLLiFX+TKyzpQxqjtVgMxMKDQZE7vz7knJq/IEqWSNB1GB/34hdx6iZPXRXdW3zdE\nJVfBL2eqC3VotNMgZ9wgWwLbh+SvFMPFzjwLX8LHLOvHO+msVj0uXZ4+cWiSTDml\n6ytyQHg/4iIGjdwWddZf2fLlNiHeJXc1ITL09ZhguQKBgQDNYAQpwRxEzhg2D+b8\nbuSakVZCWfbJiA2LF5L+1Rhz4XgIjBIHrexk1mlzNfMZOw04uM1MS3G3Pw4TocBw\nWoY7O2yRfnsDS3Ywrwd6AEcR/66ua4hyEG8g923b01JWD5u56KPYWR5neKb6aIVo\nTIO/Zhkx0RwFOtHMexTRo1td3wKBgQC4MOIeDhtCRSrtAaJTmiQG6+wvi+JRDGoj\nhBGXsoLBawws08EcfSlKFphPObGuyp4rJWll9+siqSVuE4d72GzKZZ095qICAM8B\nZTsFOVhNlJdNHyMDAu+e43RhBdZZr++jg5bFXiPI2QRXgECpoj40Ml9iNpiYx72Y\nSanpyGoGuQKBgExg2guBQvcfwodQkLHut9v4EyFn/czjaU4CPWvCam6mOpLLLOVo\nPFMgHmV3eeo3OOqQZ+Fo6Wih7aVFcaEXOXaL2gueAzetd84ROfGYatX5xcgeO8dX\n70xOWK/5PlS9R0fzigOq2RDYIRldh8fLNPAYk2QghZA4WM/4MjzoyND3AoGASvj6\n0SkEx3DIDDjCDi2LxJV7Sc8yi7L18Qbs8kZjGr+r8QMwc5wulk2kKXtea7tlrkJI\nKI1FVJJs/eVNHIf3oFrEKlIaV55kpDjEUVgKLWnyPB4UbkFfr9j9ohByM4d9j50c\nXbH39uT+827s4x97Glv2n0+BxY5oCfjSBKrjHWECgYAW0dWlgGy+9VUAuYzL9dk+\nn8UziUZv2t6c4Cf1poVBDx+0cbaRQ8+tLn/Tz3SDyfK3ur41UuBZxOxxebAqyo2p\nS2nkyT4/d5ZfrgK09BB68e9E2IiDljGW5g97uhy4fmvTy0jYV6LvoZTw0oeM62oy\nrF6tKXQEMRSav+PCO6QMUw==\n-----END PRIVATE KEY-----\n',
  clientEmail: 'tk-id-login@tk-id-service.iam.gserviceaccount.com',
  clientId: '106477979733979052037',
  authUri: 'https://accounts.google.com/o/oauth2/auth',
  tokenUri: 'https://oauth2.googleapis.com/token',
  authProviderX509CertUrl: 'https://www.googleapis.com/oauth2/v1/certs',
  clientX509CertUrl: 'https://www.googleapis.com/robot/v1/metadata/x509/tk-id-login%40tk-id-service.iam.gserviceaccount.com',
};

const dbUrl = 'https://tk-id-service.firebaseio.com';

export { account, dbUrl };
