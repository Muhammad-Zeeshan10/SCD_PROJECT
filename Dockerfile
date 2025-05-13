# Build stage for frontend
FROM node:18 AS frontend-build
WORKDIR /app
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install --legacy-peer-deps
COPY frontend ./frontend
RUN cd frontend && npm run build

# Runtime stage for backend
FROM node:18
WORKDIR /app
COPY backend/package*.json ./backend/
RUN cd backend && npm install
COPY backend ./backend
COPY --from=frontend-build /app/frontend/build ./frontend/build
EXPOSE 5000
CMD ["node", "backend/server.js"]