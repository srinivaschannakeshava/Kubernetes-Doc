# kubectl cmd lists

- ` kubectl run pod nameOfPod --image=image:version `
- ` kubectl port-forward podName [hostport]:[containerPort] `
- ` kubectl delete pod nameOfPod `
- ` kubectl delete -f fileName `
- ` kubectl get all `
- ` kubectl get pod `
-` kubectl get pods -o=wide`
- ` kubectl apply -f file.yml ` / ` kubectl create -f filename.yml `
- ` kubectl create -f  filename.yml --save-config `
- ` kubectl describe pod podName `
- ` kubectl describe jobs/<job-name> `
- ` kubectl exec -it nameofpod  -- /bin/bash`
- ` kubectl exec podName -- [command]` -- single cmd exec
- ` kubectl exec -it podName -c containerName -- [cmd] ` - if pod has 2 containers
- 
- ` kubectl create secret generic my-secret --from-literal=pwd=my-password `
- ` kubectl create secret generic my-ssh-files --from-file=ssh-private-key=path/to/ssh --from-file=ssh-public-key=path/to/ssh`
- ` kubectl create secret tls tls-secret --cert=path/to/cert --key=path/to/tls.key`
- ` kubectl logs [pod-name] ` 
- ` kubectl logs [pod-name] -c [container-name] `
- ` kubectl logs -p [pod-name] ` - previous exited pod logs
- ` kubectl logs -f [pod-name] ` - streaming logs
- ` kubectl logs [pod-name] -f --timestamps `
- ` kubectl logs [pod-name] --tail=100 ` - last 100 lines
- ` kubectl logs [pod-name] --since=3h ` - last 3hrs logs
- ` kubectl get pods --watch ` - waits and watch the state

-----deployments--------

- ` kubectl scale deployment [deploymentName] --replicas=5`
- ` kubectl apply -f deployFile.yml --replicas=5 `
- ` kubectl rollout status deployment [depName] ` || `kubectl rollout status -f [depFileName] `
- ` kubectl rollout history deployment [depName] --revision=2 ` || `kubectl rollout history -f [depFileName] --revision=revNo ` -- shows changes made on that revision
- ` kubectl rollout undo deployment [depName] --to-revision=3` || `kubectl rollout undo -f [depFileName] --to-revision=revisionNo`
- ` kubectl rollout  pause deployment `
- ` kubectl rollout  resume deployment `
- ` kubectl set image deployment.v1.apps/nginx-deployment nginx=nginx:1.9.1 --record ` -- manual deployment image update
- ` kubectl rollout history deployment [deployName] `

---- config-----
- ` kubectl config current-context ` - view current context of kubectl
- ` kubectl config view ` - view kube config file


--- cluster config ---
- ` kubectl config view `
- ` kubectl cluster-info `


--- K8s jobs ---
- ` kubectl get jobs `
- ` kubectl get cronjobs `

--- K8s Horizontal pod scaler ---
- ` kubectl autoscale deployment web --max 4 --min 1 --cpu-percent 1 ` - scale deployment web max 4, min 1 if cpu percent cross 1%
- ` kubectl get hpa `

--- Network policy ---
- ` kubectl get networkpolicy `

--- K8s RBAC policy ---
- ` kubectl api-resources `
- ` kubectl get podsecuritypolicies.policy `
- ` kubectl get clusterrole restricted-pods-role `
- ` kubectl get podsecuritypolicies `
- ` kubectl get roles `