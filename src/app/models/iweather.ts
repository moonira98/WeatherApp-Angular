export interface FindWeatherResponse {
    message: string;
    cod: string;
    count: number;
    list: CityWeather[];
  }
  
  export interface CityWeather {
    id: number;
    name: string;
    coord: Coordinates;
    main: MainWeather;
    dt: number;
    wind: Wind;
    clouds: Clouds;
    rain?: any;
    snow?: any;
    sys: SysInfo;
    weather: WeatherCondition[];
  }
  
  export interface Coordinates {
    lat: number;
    lon: number;
  }
  
  export interface MainWeather {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  }
  
  export interface Wind {
    speed: number;
    deg: number;
    gust?: number;
  }
  
  export interface Clouds {
    all: number;
  }
  
  export interface SysInfo {
    country: string;
  }
  
  export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
