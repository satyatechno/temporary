interface TConfing {
  baseURL: string;
  webSocketURL: string;
  imageDomain: string;
  oneVoneContract: string;
  tournamentContract: string;
  playerContract: string;
  multiplayerContract: string;
}

interface ProcessConfig {
  development: TConfing;
  production: TConfing;
}
const config: ProcessConfig = {
  development: {
    baseURL: 'https://alpha.gamingarcade.io/api/v1/',
    webSocketURL: 'alpha.gamingarcade.io/api/v1',
    imageDomain: 'https://assets.gamingarcade.io/',
    oneVoneContract: '0xbda7fa3c38ad3fbcb6104fd0aaa94442bce34ef8',
    tournamentContract: '0x88561c62B1591e208B5E090e07d6fCF3b00c0E1b',
    playerContract: '0x0012dc0242CD5C49a9538F448F9c4fEf4e9729CE',
    multiplayerContract: '0x205d02ed1BAf0a0780e5815be2bE2813239095c5',
  },
  production: {
    baseURL: 'https://gamingarcade.io/api/v1/',
    webSocketURL: 'gamingarcade.io/api/v1',
    imageDomain: 'https://assets.gamingarcade.io/',
    oneVoneContract: '0xCa886a32b955aDf9f32f7b1f8a635f444AB256b6',
    tournamentContract: '0x8f988fd7fC9f629cD978Ad653C3f5b3aDcDc83e4',
    playerContract: '0x39edff249ce810fF80Fa9787044EF72aC4d7056b',
    multiplayerContract: '0x1D20eA206c05D1198cD93D89Ceeb68b624056DB0',
  },
};

const environment = (process.env.REACT_APP_ENV ||
  'development') as keyof ProcessConfig;

export default config[environment];
