interface ProcessConfig {
  development: {
    baseURL: string;
    imageDomain: string;
  };
  production: {
    baseURL: string;
    imageDomain: string;
  };
}
const config: ProcessConfig = {
  development: {
    baseURL: "https://alpha.gamingarcade.io/api/v1/",
    imageDomain: "https://assets.gamingarcade.io/",
  },
  production: {
    baseURL: "https://gamingarcade.io/api/v1/",
    imageDomain: "https://assets.gamingarcade.io/",
  },
};

const environment = (process.env.REACT_APP_ENV || "development") as keyof ProcessConfig;;

export default config[environment];
