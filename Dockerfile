FROM node:latest
WORKDIR /app
COPY package*.json ./   # Copies package.json and package-lock.json to /app in the container
RUN npm install
COPY . ./               # Copies everything from the current directory (.) to /app in the container
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
