export class Forecast {
    constructor(
        public feelsLikeDay: string,
        public feelsLikeNight: string,
        public sunrise: string,
        public sunset: string,
        public tempMorning: number,
        public tempDay: string,
        public tempEve: string,
        public tempNight: string,
        public tempMax: string,
        public tempMin: string,
        public uvi: string,
        public lat: string,
        public lon: string,
        public timezone: string
    ) { }
}
