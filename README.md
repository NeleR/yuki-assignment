# Assignment for Yuki

## Assignment

In this test you will have to consume from [https://swapi.dev](https://swapi.dev), a free API related to a beloved entertainment franchise, in order to show two views:

- A planets view where you list the planet name and the names of the Star Wars
films where they appear.
- Single planet view where you show all the information of a given planet.

As you can see, the functionality itself is quite simple.

### What are we going to evaluate?
- Mastery of HTML, CSS and JavaScript or TypeScript: solid knowledge of the fundamentals and the latest trends in these languages (we use TypeScript).
- Frameworks and libraries: show your experience with popular frameworks such as React, Angular or Vue.js (We use Vue), and relevant libraries.
- Design patterns: apply common design patterns to create robust and scalable interfaces.
- User experience (UX): show you can create an intuitive and user-friendly interface.
- Responsive Design: build interfaces that adapt to different devices and screen sizes.
- Testing: show knowledge of tools and techniques to perform unit and integration tests.

### What can you use?
- JS or TS, but it’s good to know we use TS.
- Any framework you want, we love to use Vue.js.
- Any markup styling framework, we use Sass.
- Any testing suite.

### What should be the outcome?
You need to create a private repository on Github/Gitlab and share it with the user that will be provided in the communication when we send you this document. In this repository you should have:
- The project.
- A README with instructions on how to execute the project and the tests - If you feel like it, you may also include any other explanation, such as why you’ve made your decisions.

Please, feel completely free to ask any questions you may have to your HR contact, who will send them back to IT.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

---

Built with ❤️ using React Router.
(Leia icons created by pocike - Flaticon)[https://www.flaticon.com/free-icons/leia]
