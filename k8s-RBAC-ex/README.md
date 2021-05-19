```javascript

git clone https://github.com/GoogleCloudPlatform/training-data-analyst

ln -s ~/training-data-analyst/courses/ak8s/v1.1 ~/ak8s

cd ~/ak8s/RBAC/

```

## Roles and RoleBindings

``` 
kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin --user [USERNAME_1_EMAIL]

kubectl apply -f pod-reader-role.yaml

```