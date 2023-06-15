export class DummyAPI {
  static CELO_API_ENDPOINT =
    "https://api.dapplooker.com/chart/dc9b69d8-7ca1-45d4-8ad0-a17f915f3f03";
  static MOONBEAM_API_ENDPOINT =
    "https://api.dapplooker.com/chart/8c6d43e4-1677-4934-bac7-a87e13c2f98b";
  static MOONRIVER_API_ENDPOINT =
    "https://api.dapplooker.com/chart/1630a0d6-f025-40cb-912b-bd9fd1f09ff2";

  static async CeloChartAPI() {
    let responseObj = await fetch(this.CELO_API_ENDPOINT);
    let data = await responseObj.json();
    return data;
  }

  static async MoonbeamChartAPI() {
    let responseObj = await fetch(this.MOONBEAM_API_ENDPOINT);
    let data = await responseObj.json();
    return data;
  }

  static async MoonriverChartAPI() {
    let responseObj = await fetch(this.MOONRIVER_API_ENDPOINT);
    let data = await responseObj.json();
    return data;
  }
}
