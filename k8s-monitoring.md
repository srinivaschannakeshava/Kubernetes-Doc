## K8s monitoring
- WebUi dashboard - provides dashboard visualizing pods,deployments, services, jobs,/....etc
- Metrics server - is a cluster wide aggregator of resource usage data.provide info on memory and cpu info of pods,nodes etc.
- kube-state-metrics -  It is not focused on the health of the individual Kubernetes components, but rather on the health of the various objects inside, such as deployments, nodes and pods
- Prometheus - metrics and stats
- Grafana - visualization
- .....

## Enabling metrics server
- ``` kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/download/v0.3.7/components.yaml ```
- More info on Metrics sever [here](https://github.com/kubernetes-sigs/metrics-server)
- cmds to check metrics ``` kubectl top pods ```