export class DummyAPI {
  static async getCeloChartAPI(): Promise<CeloInterface> {
    let responseObj = await fetch(
      "https://api.dapplooker.com/chart/dc9b69d8-7ca1-45d4-8ad0-a17f915f3f03"
    );
    let data: CeloInterface = await responseObj.json();
    return data;
  }

  static async getDummyData(): Promise<DummyData> {
    let responseObj = await fetch("https://dummyjson.com/products/1");
    let data: DummyData = await responseObj.json();
    return data;
  }
}

export interface CeloInterface {
  data: {
    rows: [];
    cols: [];
    insights: [];
    results_timezone: string;
  };
  json_query: Object;
  status: string;
}
export interface DummyData {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<String>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
