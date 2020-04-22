import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// test('the data is peanut butter', async () => {
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });



// test('the data is peanut butter', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });

// test('renders correctly', () => {
//   const tree = renderer
//   .create(<App></App>)
//   .toJSON();
//   expect(tree).toMatchSnapshot();
//   });
  

// test('renders correctly', () => {
//   const tree = renderer
//   .create(<App></App>)
//   .toJSON();
//   expect(tree).toMatchSnapshot();
//   });
  

// test('the data should be the weather', () => {
//   return fetch().then(data => {
//     expect(data).toBe('weather');
//   });
// });

// test('the data is weather', () => {
//   return expect(fetchData()).resolves.toBe('weather');
// });

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// function searchWeather() {
//   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('weather').value}&APPID=94033fe10a92947fef19fe1f5c0506c7`)
//       .then(res => res.json()) 
//       .then(
//           (result) => {
//               this.setState({
//                   main: result.main
//               });
//           },
//           // error handling takes place here
//           (error) => {
//               this.setState({
//                   error
//               });
//           })
// }

//   fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=94033fe10a92947fef19fe1f5c0506c7`)
//       .then(res => res.json()) 
//       .then(
//           (result) => {
//               this.setState({
//                   main: result.main
//               });
//           },
//           // error handling takes place here
//           (error) => {
//               this.setState({
//                   error
//               });
//           })


test('fetches data', () => {
  expect(fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=94033fe10a92947fef19fe1f5c0506c7`)).toBe({"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":286.97,"feels_like":281.5,"temp_min":284.82,"temp_max":288.71,"pressure":1004,"humidity":82},"visibility":10000,"wind":{"speed":8.2,"deg":240},"clouds":{"all":90},"dt":1583845089,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1583821515,"sunset":1583862983},"timezone":0,"id":2643743,"name":"London","cod":200});
});

