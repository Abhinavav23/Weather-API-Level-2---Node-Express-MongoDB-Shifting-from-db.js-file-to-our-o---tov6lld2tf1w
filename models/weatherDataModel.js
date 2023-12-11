const mongoose = require("mongoose");

const weatherDataSchema = new mongoose.Schema(
  {
    // City name (Type: String, Required: true)
    // Temperature in degrees (Type: Number, Required: true)
    // Zip code (Type: String, Required: true)
    // Humidity percentage (Type: Number, Required: true)
    // Weather description (Type: String, Required: true)
    cityName: {
      type: String,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    weatherDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const WeatherData = mongoose.model("WeatherData", weatherDataSchema);

module.exports = WeatherData;

{
  records: [{}];
}
