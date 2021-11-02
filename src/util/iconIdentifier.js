import clearSkyDay from '../assets/icons/clear-sky-day.svg';
import clearSkyNight from '../assets/icons/clear-sky-night.svg';
import fewCloudsDay from '../assets/icons/few-clouds-day.svg';
import fewCloudsNight from '../assets/icons/few-clouds-night.svg';
import scatteredClouds from '../assets/icons/scattered-clouds.svg';
import brokenClouds from '../assets/icons/broken-clouds.svg';
import showerRain from '../assets/icons/shower-rain.svg';
import rainDay from '../assets/icons/rain-day.svg';
import rainNight from '../assets/icons/rain-night.svg';
import thunderstorm from '../assets/icons/thunderstorm.svg';
import snow from '../assets/icons/snow.svg';
import mist from '../assets/icons/mist.svg';

export const getIcon = iconId => {
  switch (iconId) {
    case '01d':
      return clearSkyDay;
    case '01n':
      return clearSkyNight;
    case '02d':
      return fewCloudsDay;
    case '02n':
      return fewCloudsNight;
    case '03d':
      return scatteredClouds;
    case '03n':
      return scatteredClouds;
    case '04d':
      return brokenClouds;
    case '04n':
      return brokenClouds;
    case '09d':
      return showerRain;
    case '09n':
      return showerRain;
    case '10d':
      return rainDay;
    case '10n':
      return rainNight;
    case '11d':
      return thunderstorm;
    case '11n':
      return thunderstorm;
    case '13d':
      return snow;
    case '13n':
      return snow;
    case '50d':
      return mist;
    case '50n':
      return mist;
    default:
      return null;
  }
}