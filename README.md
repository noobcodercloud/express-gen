# noobcoder-express-gen

A simple Express.js project generator that sets up a complete Express app with folder structure in seconds.

## Features

✅ Express.js server setup  
✅ Organized folder structure (controllers, models, routes, middlewares)  
✅ MongoDB/Mongoose ready  
✅ Environment variables with dotenv  
✅ Nodemon for development  
✅ Git-ready with .gitignore  
✅ **Auto-install and start option** - Install dependencies and start server with one command!

## Installation & Usage

### Quick Start (No Installation)
```bash
npx noobcoder-express-gen your-project-name
```

### Global Installation
```bash
npm install -g noobcoder-express-gen
create-express-app your-project-name
```

## What Gets Created
```
your-project-name/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   ├── routes/
│   │   └── routes.js
│   └── main.js
├── tests/
├── .env
├── .gitignore
└── package.json
```

## Getting Started

After generating your project:
```bash
cd your-project-name
npm install
npm run dev
```

Your server will start on `http://localhost:3000`

## Available Scripts

- `npm start` - Run the server in production mode
- `npm run dev` - Run with nodemon for development

## API Routes

- `GET /` - Returns welcome message
- `GET /api/test` - Test route to verify API is working

## Environment Variables

Create a `.env` file with:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

## Customize

Feel free to modify the generated files:
- Add more routes in `src/routes/`
- Create controllers in `src/controllers/`
- Define models in `src/models/`
- Add middleware in `src/middlewares/`

## Dependencies

The generated project includes:
- **express** - Web framework
- **mongoose** - MongoDB ODM
- **dotenv** - Environment variables
- **nodemon** - Development auto-reload

## Author

Kirat Dhiman

## License

ISC

## Contributing

Found a bug or want to add a feature? Feel free to open an issue or submit a pull request!

## Changelog

### v1.0.0
- Initial release
- Basic Express setup with folder structure
- MongoDB/Mongoose support
- Environment configuration