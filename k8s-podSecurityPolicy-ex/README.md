## Create a pod security policy

- When you enable pod security policy admission control on a cluster the default security policies configured by Kubernetes Engine prevent non-admin users running privileged pods. Users that are bound to the cluster-admin role are allowed to use the default policies that are installed when you enable Pod Security policies. You have to explicitly bind other users to roles that grant them the right to use specific policies, and this allows you to control what those users can and cannot deploy.

- In this task you create a pod security policy that allows the creation of unprivileged Pods in the default namespace of the cluster. Unprivileged Pods do not allow users to execute code as root, and have limited access to devices on the host.

- You create a ClusterRole that can then be used in a role binding that ties the policy to accounts that require the ability to deploy pods with unprivileged access.

- Users that require the ability to deploy privileged Pods can be granted access to the built in PSP that is provided to allow admin users to deploy pods after Pod Security Policies are enabled.

- When you have the components configured you will enable the PodSecurityPolicy controller, which enforces these policies, and then test how they impact users with different privileges.


```javascript

git clone https://github.com/GoogleCloudPlatform/training-data-analyst

ln -s ~/training-data-analyst/courses/ak8s/v1.1 ~/ak8s

cd ~/ak8s/Security/

kubectl apply -f restricted-psp.yaml

kubectl get podsecuritypolicies.policy

```
## Create a ClusterRole for a pod security policy

- The file restricted-pods-role.yaml creates a ClusterRole that includes the resource you created in the last task, restricted-psp, and grants the subject the ability to use the restricted-psp resource. The subject is the user or service account that is bound to this role. You will bind an account to this role later to enable the use of the policy.

```javascript
 kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin --user $USERNAME_1_EMAIL 
 
 kubectl apply -f restricted-pods-role.yaml

 kubectl get clusterrole restricted-pods-role

 ```

## Activate Security Policy

The PodSecurityPolicy controller must be enabled to affect the admission control of new Pods in the cluster.

```javascript

gcloud beta container clusters update $my_cluster --zone $my_zone --enable-pod-security-policy       (this enables security policy)

To disable policy run ` gcloud beta container clusters update [CLUSTER_NAME] --no-enable-pod-security-policy `

kubectl get podsecuritypolicies

kubectl auth can-i use podsecuritypolicy/restricted-psp   

kubectl auth can-i use podsecuritypolicy/gce.privileged

```

## Rotate IP Address and Credentials

- You perform IP and credential rotation on your cluster. It is a secure practice to do so regularly to reduce credential lifetimes. While there are separate commands to rotate the serving IP and credentials, rotating credentials additionally rotates the IP as well.

```javascript

gcloud container clusters update $my_cluster --zone $my_zone --start-credential-rotation

gcloud container operations list

gcloud container clusters upgrade $my_cluster --zone $my_zone --node-pool=default-pool

gcloud container clusters update $my_cluster --zone $my_zone --complete-credential-rotation

```