# UTrust challenge by Jean Osorio

Hello guys, this is my proposal for the utrust challenge. Basically, I decide to use the CRA as a scaffold for the react application. I try to do it without any other dependency, so for the CSS I use CSS module because it is already set up with CRA, although in this app we are not going to have any CSS collation name, in a real application, it could help with that, but if we have to set a CSS style based on a property it would be most helpful using something else like styled-components.

I use the latest version of react-router and use the `<Outlet />` component to define a Layout for the hold aplication, this helps me to avoid creating the same layout on every page. Also, I structure the pages base on the application routes (fractal folder structure). 

I created a communication service that helps me to invoke the request in an easy way, just have to specify the URL, the path and some other params, I have to specify the URL each time because I use a different URL, one to get the data from etherscan and JSONplaceholder to simulate the send ether functionality. In a real app, we defined a baseUrl instead of having to tell the service what URL to use each time. 

Although I created some components to be reusables, these components should be in a component library. 

To have all the user information available on the entire application I used the React Context API, basically, I get the wallets and save them in the context, this will allow me to refresh the balance when the user sends ether.

Last but not least, I decide to upload the `.env` file with the etherscan API key because this is just a test key. 

## How to run this progam

```bash
npm install
npm start
```

## How to run the test

### visual mode
```bash
npm run cy:open
```

### headless

```bash
npm run test:e2e
```






