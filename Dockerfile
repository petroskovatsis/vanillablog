# --- STAGE 1 ---
FROM node:18-alpine AS base

WORKDIR /base

COPY ./package.json ./
COPY ./.env ./
COPY ./next.config.mjs ./
COPY ./jsconfig.json ./
COPY ./tailwind.config.js ./
COPY ./postcss.config.js ./
COPY ./app ./app
COPY ./public ./public

RUN yarn install
RUN yarn build

# --- STAGE 2 ---
FROM node:18-alpine

ENV NODE_ENV production
WORKDIR /application

COPY --from=base /base ./

ENV PORT 3000
CMD ["yarn", "start"]
