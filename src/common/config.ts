export interface IApplicationConfig {
    backendUrl: string;
    baseName: string;
    appInsightsKey: string;
}

const BACKEND_SERVER_URL =
  process.env.REACT_APP_BACKEND_SERVER_URL ||
  "https://localhost:5001";
const BASENAME = process.env.PUBLIC_URL || "";
const APPLICATION_INSIGHTS_KEY = process.env.REACT_APP_APPINSIGHTS_KEY || "InstrumentalKey={Not Defined}"

const applicationConfig: IApplicationConfig = {
    backendUrl: BACKEND_SERVER_URL,
    baseName: BASENAME,
    appInsightsKey: APPLICATION_INSIGHTS_KEY
  };

export default applicationConfig;
  