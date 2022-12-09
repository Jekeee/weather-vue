export const fetchWeather = (title, latitude, longitude) => {
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`;
  return fetch(weatherUrl).then((data) => data.json());
};
