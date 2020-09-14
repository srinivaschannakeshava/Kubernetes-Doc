# kubectl cmd lists

- ` kubectl run pod nameOfPod --image=image:version `
- ` kubectl port-forward podName [hostport]:[containerPort] `
- ` kubectl delete pod nameOfPod `
- ` kubectl delete -f fileName `
- ` kubectl get all `
- ` kubectl get pod `
- ` kubectl apply -f file.yml ` / ` kubectl create -f filename.yml `
- ` kubectl create -f  filename.yml --save-config `
- ` kubectl describe pod podName `
- ` kubectl exec nameofpod -it sh `
- ` kubectl create secret generic my-secret --from-literal=pwd=my-password `
- ` kubectl create secret generic my-ssh-files --from-file=ssh-private-key=path/to/ssh `
- ` kubectl create secret tls tls-secret --cert=path/to/cert --key=path/to/tls.key`
- 