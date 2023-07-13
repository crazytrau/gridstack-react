# Gridstack + react
react+vite+gridstack
![image](https://github.com/crazytrau/gridstack-react/assets/13588794/e11b707a-eb8b-4070-a766-df4e88ff4b50)

# Quick start
1. clone source

`git clone https://github.com/crazytrau/gridstack-react.git`

2. run service

`docker-compose -f devops/docker-compose.yaml -p crazytrau up -d`

3. open in browser

`http://localhost:3816/`

# Deploy
`docker-compose -f devops/docker-compose.yaml -p crazytrau up -d`

# Develop
```sh
docker-compose -f devops/docker-compose.dev.yaml -p crazytrau-dev up -d
pnpm i
pnpm dev --host
```

# References
- https://vitejs.dev
- https://gridstackjs.com
