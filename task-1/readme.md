
**Please make sure you have node installed in your environment to run this**

### Configuration
Go to .env file and set ```MONGODB_URI``` and ```PORT``` 

You can also just use the provided database. 
In case you need to connect you your own database , import data from 
```transaction.json``` or at least use the data format

### Build and run server
run  ```npm i ``` to install dependencies

run   ```npm run start``` to build and run the project

The Project should open in the given port .

### Show output
Let's assume your port is 3000, 
then hit ,
```http://localhost:3001/api/top-investors```
to see the output

#### The Problem statement is given below (Problem 1)

Imagine you are given a dataset containing transactional records of different investors in various
syndicates over several years. Each record contains an investor ID, syndicate ID, transaction
amount, and transaction date. Your task is to identify and list the top 5 investors who have invested
in the highest number of unique syndicates, along with the total amount they have invested.
Provide a script or program in a language of your choice that efficiently solves the problem.