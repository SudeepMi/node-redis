# Express App with Redis Server Integration

## Introduction

This repository showcases the integration of a Redis server into an Express.js application. Redis is a powerful in-memory data store that can be used as a caching layer, providing significant performance improvements for applications.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- npm (Node Package Manager)
- Redis Server

### Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/SudeepMi/node-redis.git
```

2. Navigate to the project directory:

```
cd node-redis
```

3. Install dependencies:

```
npm install
```

4. Start the Redis server on your local machine.

### Usage

To run the Express.js application with Redis server integration, use the following command:

```
npm test
```

This will start the server on `http://localhost:3000`.

## Endpoints

- `POST /write?key=value`: Endpoint to write data to Redis.
- `GET /read/:key`: Endpoint to read data from Redis based on a specific key.
- `GET /write-h/:key`: Endpoint to write Map datatype to Redis hash.
- `GET /read-h/:key`: Endpoint to read Map data from Redis based on a specific key.
- `POST /del/:key`: Endpoint to delete data from Redis based on a specific key.

## Features

- **Redis Caching**: Demonstrates how to implement caching using Redis to store frequently accessed data.
- **Express.js Integration**: Shows how to integrate Redis with an Express.js application seamlessly.
- **Performance Enhancement**: Illustrates how Redis caching can enhance the performance and scalability of the application.

## Screenshots

![Screenshot 1](/write.png)
![Screenshot 1](/read.png)
![Screenshot 1](/wh.png)
![Screenshot 1](/rh.png)
![Screenshot 1](/del.png)



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspiration:
- Redis Documentation: [Redis Documentation](https://redis.io/documentation)
- Express.js Documentation: [Express.js Documentation](https://expressjs.com/)
