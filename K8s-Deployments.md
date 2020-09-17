## Kubernetes - Deploying your code - Deployment and deployment stratergy

- one of the main advantage of k8s is zero downtime updates
- K8s deployment options
  - Rolling updates
  - Blue-Green Deployments
  - Canary Deployments
  - Rollbacks

### Rolling update deployments

- rollout- this basically replaces old pods one by one. -- optimal zero downtime update
- recreate - this brings down all old pods and creates new pods-- this is used when you dont wnat partial routing ex:UI the user may see different ui on multiple hits
- Creating initial deployment keeping rollback in mind ` kubeclt apply -f fileName --record `
- check rollout status using ` kubectl rollout status deployment [depName] `
- ` kubectl rollout history deployment [depName] ` 
- ` kubectl rollout undo deployment [depName] --to-revision=2 `

### Canary deployments
- It involves deploying new version of app next to stable production version and route a small amount of requests to check on the latest version before promoting or rejecting the deployment
  - Stratergy is of checking the viability of deployment
  - run 2 indentical prod env at same time
  - latest version is setup to receive minimal traffic
  - ![Canary Deployment](./deployments/canary.JPG)