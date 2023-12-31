# build enviroment
FROM node:18 as builder
WORKDIR /frontend

COPY package*.json /frontend
RUN npm install
COPY . .

ARG NODE_ENV
ARG SERVER_PORT
ARG REACT_APP_MATCHMAKING_TIMEOUT
ARG REACT_APP_FIREBASE_API_KEY
ARG REACT_APP_FIREBASE_AUTH_DOMAIN
ARG REACT_APP_FIREBASE_PROJECT_ID
ARG REACT_APP_FIREBASE_STORAGE_BUCKET
ARG REACT_APP_FIREBASE_MESSAGING_SENDER_ID
ARG REACT_APP_FIREBASE_APP_ID
ARG REACT_APP_FIREBASE_MEASUREMENT_ID
ARG REACT_APP_API_GATEWAY
ARG REACT_APP_SOCKET_URL

ENV NODE_ENV=${NODE_ENV} \
    SERVER_PORT=${SERVER_PORT} \
    REACT_APP_MATCHMAKING_TIMEOUT=${REACT_APP_MATCHMAKING_TIMEOUT} \
    REACT_APP_FIREBASE_API_KEY=${REACT_APP_FIREBASE_API_KEY} \
    REACT_APP_FIREBASE_AUTH_DOMAIN=${REACT_APP_FIREBASE_AUTH_DOMAIN} \
    REACT_APP_FIREBASE_PROJECT_ID=${REACT_APP_FIREBASE_PROJECT_ID} \
    REACT_APP_FIREBASE_STORAGE_BUCKET=${REACT_APP_FIREBASE_STORAGE_BUCKET} \
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=${REACT_APP_FIREBASE_MESSAGING_SENDER_ID} \
    REACT_APP_FIREBASE_APP_ID=${REACT_APP_FIREBASE_APP_ID} \
    REACT_APP_FIREBASE_MEASUREMENT_ID=${REACT_APP_FIREBASE_MEASUREMENT_ID} \
    REACT_APP_API_GATEWAY=${REACT_APP_API_GATEWAY} \
    REACT_APP_SOCKET_URL=${REACT_APP_SOCKET_URL}

RUN env > .env
# RUN npm ci --omit=dev
RUN npm run build

# production enviroment
FROM node:18
COPY --from=builder /frontend/build /build

ARG NODE_ENV
ARG SERVER_PORT
ARG REACT_APP_MATCHMAKING_TIMEOUT
ARG REACT_APP_FIREBASE_API_KEY
ARG REACT_APP_FIREBASE_AUTH_DOMAIN
ARG REACT_APP_FIREBASE_PROJECT_ID
ARG REACT_APP_FIREBASE_STORAGE_BUCKET
ARG REACT_APP_FIREBASE_MESSAGING_SENDER_ID
ARG REACT_APP_FIREBASE_APP_ID
ARG REACT_APP_FIREBASE_MEASUREMENT_ID
ARG REACT_APP_API_GATEWAY
ARG REACT_APP_SOCKET_URL

ENV NODE_ENV=${NODE_ENV} \
    SERVER_PORT=${SERVER_PORT} \
    REACT_APP_MATCHMAKING_TIMEOUT=${REACT_APP_MATCHMAKING_TIMEOUT} \
    REACT_APP_FIREBASE_API_KEY=${REACT_APP_FIREBASE_API_KEY} \
    REACT_APP_FIREBASE_AUTH_DOMAIN=${REACT_APP_FIREBASE_AUTH_DOMAIN} \
    REACT_APP_FIREBASE_PROJECT_ID=${REACT_APP_FIREBASE_PROJECT_ID} \
    REACT_APP_FIREBASE_STORAGE_BUCKET=${REACT_APP_FIREBASE_STORAGE_BUCKET} \
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=${REACT_APP_FIREBASE_MESSAGING_SENDER_ID} \
    REACT_APP_FIREBASE_APP_ID=${REACT_APP_FIREBASE_APP_ID} \
    REACT_APP_FIREBASE_MEASUREMENT_ID=${REACT_APP_FIREBASE_MEASUREMENT_ID} \
    REACT_APP_API_GATEWAY=${REACT_APP_API_GATEWAY} \
    REACT_APP_SOCKET_URL=${REACT_APP_SOCKET_URL}

RUN env > .env

RUN npm install -g serve
EXPOSE 80
EXPOSE 443
CMD ["serve", "-s", "build", "-l", "80", "-l", "443"]
