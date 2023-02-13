import { getWeatherData } from '../src/api/weatherApi'
import { useEffect, useState } from 'react'
import { getDaysAndDates } from './utils/parseDate'
import { parseHourlyDataTemp } from './utils/parseHourlyData'
import { getBackground } from './utils/getBackground'
import Nav from './components/navbar/Nav.ui'
import Body from './components/body/Body.component'
import Background from './Background'
import { getDayData } from './utils/parseDayData'
import { getLocationCoOrds } from './api/locationApi'
import Locations from './components/locations/Locations.component'
import Search from './components/newSearch/Search.component'

function App() {
	let content
	const [locationCity, setLocationCity] = useState(['Kharghar'])
	const [locationActiveIndex, setLocationActiveIndex] = useState(0)
	const [coords, setCoords] = useState('')
	const [data, setData] = useState({})
	const [locationMap, setLocationMap] = useState(false)
	const [dayData, setDayData] = useState({})
	const [activeDay, setActiveDay] = useState(2)
	const [hourlyData, setHourlyData] = useState([])
	const [condition, setCondition] = useState(1000)
	const [daysAndDates, setDaysAndDates] = useState([])
	const [isDay, setIsDay] = useState(0)
	const [backgroundData, setBackgroundData] = useState({})
	const [locationState, setLocation] = useState('')
	const fetchData = async () => {
		const locationData = await getLocationCoOrds(locationCity[locationActiveIndex])
		const locationCoOrdinates = `${locationData[0]?.lat},${locationData[0]?.lon}`
		setCoords(locationCoOrdinates)
	}


	useEffect(() => {
		if(locationCity.length >= 1) {
			fetchData()
		}
	}, [locationCity])

	useEffect(() => {
		fetchData()
		window.localStorage.setItem('cities', locationCity.toString())
	}, [locationCity, locationActiveIndex])

	useEffect(() => {
		const fetchWeatherData = async () => {
			if (typeof coords == 'string') {
				if (coords.length > 0) {
					const weatherData = await getWeatherData(coords)
					if (!weatherData.error) {
						setData(weatherData)
					}
					else {
						console.log('found error')
					}
				}
			}
		}

		fetchWeatherData()
	}, [coords])

	useEffect(() => {
		const currentCondition = data?.current?.condition?.code
		setCondition(currentCondition)
		const currentIsDay = data?.current?.is_day
		setIsDay(currentIsDay)
		const daily_data = getDayData(data, activeDay)
		setDayData(daily_data)
		const hourlyDataForDay = parseHourlyDataTemp(daily_data?.hero_data?.current_time, data?.forecast?.forecastday[activeDay - 2]?.hour)
		setHourlyData(hourlyDataForDay)
		const days = getDaysAndDates(data?.location?.localtime.split(' ')[0])
		setDaysAndDates(days)
		const location = locationCity[locationActiveIndex] + ', ' + data?.location?.country
		setLocation(location)
	}, [data])


	useEffect(() => {
		const backgroundData = getBackground(condition, isDay)
		setBackgroundData(backgroundData)
	}, [condition, isDay])

	const handleConditionChange = (newCondition, index) => {
		if (index == 0) {
			const currentCondition = data?.current?.condition?.code
			setCondition(currentCondition)
		}
		else {
			setCondition(newCondition)
		}
	}

	const handleIsDayChange = (newIsDay, index) => {
		if (index == 0) {
			const currentIsDay = data?.current?.is_day
			setIsDay(currentIsDay)
		}
		else {
			setIsDay(newIsDay)
		}
	}

	const handleActiveDayChange = (index) => {
		if (index >= 2 && index <= 4) {
			setActiveDay(index)
		}
	}

	const handleLocationChange = (newLocation) => {
		if (locationCity.indexOf(newLocation) == -1) {
			setLocationCity([...locationCity, newLocation])
			setLocationActiveIndex(prevValue => prevValue + 1)
		}
		else {
			setLocationActiveIndex(locationCity.indexOf(newLocation))
		}
	}

	useEffect(() => {
		const daily_data = getDayData(data, activeDay)
		setDayData(daily_data)
		const hourlyDataForDay = parseHourlyDataTemp(daily_data?.hero_data?.current_time, data?.forecast?.forecastday[activeDay - 2]?.hour)
		setHourlyData(hourlyDataForDay)
	}, [activeDay])

	content = (
		<Background backgroundData={backgroundData} innerWidth={window.innerWidth}>
			<div className='app'>
				<div className='filter'></div>
				<Nav location={locationState} setLocationCity={handleLocationChange} setLocationMap={setLocationMap} />
				<Locations locationMap={locationMap} locations={locationCity} setLocationActiveIndex={setLocationActiveIndex} />
				<Body
					dayData={dayData}
					hourlyData={hourlyData}
					handleConditionChange={handleConditionChange}
					handleIsDayChange={handleIsDayChange}
					conditionCode={condition}
					isDay={isDay}
					daysAndDates={daysAndDates}
					activeDay={activeDay}
					handleActiveDayChange={handleActiveDayChange}
				/>
			</div>
		</Background>
	)


	return content
}

export default App
