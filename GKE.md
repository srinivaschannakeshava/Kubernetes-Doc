# GKE - Google K8s Engine

## Intro - Why docker and K8s
- Containers for lightweight compute
- Ideal for hybrid, multi-cloud
- K8s container orchestration technology

 bare metal--> vms(Iaas)--> container platform--> App Engine(PaaS)--> serverless
 -------> left to right above-reduces the operation and admin provisions(Less Ops)--->
 <------ right to left more control , low level access to machines<----------

 And the Container platform sits exactly in the middle provide both option of medium ops and medium control

Iaas- Infrastructure as sevice had heavy operational burden and Paas makes us provider lock(platform specific lock like GCP/Azure/Aws)
Migration is difficult in both case

## K8s
- Clusters
  - Master nodes managing one or more worker nodes
  - One or more nodes designated master nodes
- Nodes
  - Nodes are on premises or cloud vms running various k8s service and in which containers are run
- Node Pools -
  - subset of node instances which have same configuration
- Node Images -
  - special operating images available on gcp to run on k8s nodes
  

> Note: - Statefulset and DaemonSet
> Statefulset - assosiated with sateful application
>  - Pods are created unique
>  - Contains persistence volume for each pod
>  - Identified by name
>  - Not interchangeable
> DaemonSet - Attempts to keep one pod per node
> - across all nodes or a subset
> - As nodes are created the pods are created subsequently on the pods
> - ex:- cluster storage daemons, log collection daemons, Node monitoring daemons

### Horizontal pod scaler - GKE
- Autoscaling - compute capacity automatically - vertical scaling
- Autoscalling based on 2 metrics basically - CPU utilization and Requests per seconds(rps/qps)

## Creating and Administering GKE Cluster


## Binary-Authorization -GKE
  - Requires images to be signed by trusted authorities
  - Signing must occur during development
  - Signature Validation during deployment
- Uses
  - This Reduces risk of malicious or unintended code in production
  - Integrates with GCR vulnerability scanning




***git clone https://github.com/GoogleCloudPlatform/training-data-analyst*** -- important repo all examples exist here
