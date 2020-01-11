import Geocode from 'react-geocode'

export const geoCodeGenerator = (cep, { setLat }, { setLng }) => {
    Geocode.setApiKey('AIzaSyAtxEFG6FZcvaVN-Ng6IE3_zUNHkhNsBWU');
    Geocode.fromAddress(cep.replace('-', '')).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location
            setLng(lng)
            setLat(lat)
        },
        error => {
            console.error(error);
        }
    )
}
