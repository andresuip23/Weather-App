function Example() {

    const weatherData = {
        temperature: 25,
        weatherDescription: 'Parcialmente Nublado',
        humidity: 70,
        windSpeed: 15,
      };

    return ( 
        <>
        <div className="flex justify-end">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Información del Clima para Panama</h2>
        <p className="text-right"><strong>Temperatura:</strong> {weatherData.temperature}°C</p>
        <p className="text-right"><strong>Descripción del Clima:</strong> {weatherData.weatherDescription}</p>
        <p className="text-right"><strong>Humedad:</strong> {weatherData.humidity}%</p>
        <p className="text-right"><strong>Velocidad del Viento:</strong> {weatherData.windSpeed} km/h</p>
      </div>
    </div>
        </>
     );
}

export default Example;