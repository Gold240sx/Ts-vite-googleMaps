import './App.css'
import { useState } from "react"
import axios from "axios"

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY

declare  var google: any // this is to tell typescript that google is available globally
type GoogleGeocodingResponse = {
	results: { geometry: { location: { lat: number; lng: number } } }[]
	status: "OK" | "ZERO_RESULTS"
}

function App() {
    const [address, setAddress] = useState<string>("")
    
    const searchAddressHandler =() =>{
		axios
			.get<GoogleGeocodingResponse>(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${apiKey}`
			)
			.then((response: any) => {
				if (response.data.status !== "OK") {
					throw new Error("Could not fetch location!")
				}
				const coordinates = response.data.results[0].geometry.location;
                console.log(coordinates)
				//google is available globally only because we imported the SDK in index.html
				const map = new google.maps.Map(document.getElementById("map")!, {
					center: coordinates,
					zoom: 12,
				})
				new google.maps.Marker({ position: coordinates, map: map })
			})
			.catch((error: any) => {
				alert(error.message)
				console.log(error)
			})
	}

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setAddress(event.target.value)
		}

  return (
		<>
			<div id="map">
				<p>Please Enter an Address</p>
			</div>
			<form>
				<input type="text" id="address" onChange={handleChange} name="address" value={address} />
				<button type="button" onClick={() => searchAddressHandler()}>
					Search Address
				</button>
				{/* copy the following address on click */}
				<p className="cursor-pointer" onClick={() => setAddress("1600 Amphitheatre Parkway, Mountain View, CA")}>address:{address}</p>
			</form>
		</>
  )
}

export default App
