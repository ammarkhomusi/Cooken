# Cooken

![logo](readmeAssets/login.png)

Cooken is a mobile application taking the indecision out of choosing meals. Easily add, save, and categorize your favorite recipes. And for extra fun, the 'surprise me!' button will generate a random recipe based on your preferences. Upcoming features include scheduling out a week's worth of meals.

![recipe](readmeAssets/recipe.png)
## Tech Stack
### Frontend
- React Native with Expo
- Typescript
- CSS
### Backend
- Node.js with Express.js for the Server
- JWT for authentication
- MongoDB and Mongoose as the Database

## Getting Started
- Choose an emulator: We used Expo Go
- Download and setup Expo (or other emulator) on your phone
### Client
- Change directory into client folder
- To install dependencies, run:
```npm install```
- After dependencies have been installed, start the client:
```npm start```
- If you've chosen Expo, take a picture of the QR code with your phone and click the link
- This should automatically load the app on your phone
### Server
- Change directory into server folder
- Following the example in .env.example, add your credentials to your .env file
- To install the backend dependencies, run:
```npm install```
- Start the server:
```nodemon```
### Database
- Choose your ODM - we used MongoDB Compass
- Setup your account and add your credentials to the .env file

## API Endpoints

| API                                                  | Method  | Endpoint                           |  Status |
| :--------------------------------------------------- | :------ | :--------------------------------- | ------: |
| 🙋‍♀️ Users                                             |
| [Register User](#registerUser)                       | POST    | /user/register                     |     201 |
| [User Login](#userLogin)                             | POST    | /user/login                        |     200 |
| [Get User Profile](#getUser)                          | GET     | /user/find                          |     200 |
| [Delete User Profile](#deleteUser)                    | DELETE  | /user/find                          |     204 |
| 📝 Recipes                                         |
| [Register Vendor](#registerVendor)                   | POST    | /vendor/register                   |     201 |
| [Vendor Login](#vendorLogin)                         | POST    | /vendor/login                      |     200 |
| [Get Vendor Profile](#getVendorProfile)                | GET     | /vendor/find                        |     200 |
| [Get Vendor By Name](#getVendorByName)               | POST    | /vendor/name                       |     200 |
| [Get Available Vendors](#getAvailableVendors)        | GET     | /vendor/availability               |     200 |

### Credit
Creator and Full Stack Developer - [Mike Kaib](https://github.com/mkcannon)
Full Stack Developer - [Ash Mudra](https://github.com/AshMudra)
