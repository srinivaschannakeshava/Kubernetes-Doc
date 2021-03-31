Example cmd

- gcloud container clusters create $my_cluster --num-nodes 3 --enable-ip-alias --zone $my_zone --enable-network-policy
- gcloud container clusters get-credentials $my_cluster --zone $my_zone
- kubectl run hello-web --labels app=hello \
  --image=gcr.io/google-samples/hello-app:1.0 --port 8080 --expose

- kubectl apply -f np.yaml
- kubectl get networkpolicy
- kubectl run test-1 --labels app=foo --image=alpine --restart=Never --rm --stdin --tty
    - wget -qO- --timeout=2 http://hello-web:8080 --> this would connect 
- kubectl run test-1 --labels app=other --image=alpine --restart=Never --rm --stdin --tty
    - wget -qO- --timeout=2 http://hello-web:8080  --> this request would be timed out



