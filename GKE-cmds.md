# General cmds

- export my_zone=us-central1-a
- export my_cluster=standard-cluster-1
- `source <(kubectl completion bash)`
- `gcloud container clusters get-credentials $my_cluster --zone $my_zone`
- ` gcloud container clusters create $my_cluster --num-nodes 3 --enable-ip-alias --zone $my_zone  --enable-stackdriver-kubernetes ` --> enabling stack driver for logging on cluster