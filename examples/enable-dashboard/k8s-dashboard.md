# Enable K8s dashboard and creating service accounts , bindings for k8s dashboard access

- Enable k8s dash board using the cmd

  > `kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml`

- Start k8s dashboard with cmd

  > ` kubectl proxy `

- Access the K8s dashboard

  >` http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/ `

> note: more info [here](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

- You need to create service account to access the k8s dashboard.

  > ` kubectl apply -f .\serviceAccount.yml `

  > ` kubectl apply -f .\clusterBinding.yml `

- Get the bearer token for k8s dash board

> `kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}')`

- Note: Find more info here -> [here](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md#creating-a-clusterrolebinding)
