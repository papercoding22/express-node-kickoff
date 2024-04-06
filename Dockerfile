# Step 1: Specify the base image
FROM node:alpine

# Step 2: Set the working directory in the Docker image
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN yarn install

# Step 5: Copy the rest of your project's files
COPY . .

# Step 6: Expose the port your app runs on
EXPOSE 8080

# Step 7: Build your app
RUN yarn build

# Step 8: Specify the command to run your project
CMD [ "yarn", "start" ]