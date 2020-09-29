# Running Jobs and Cron Jobs

- A Job creates a Pod that performs a task or batch process.
- Unlike standard Pods, a job does not run indefinitely.
- A Job can be configured to run multiple pods in parallel.
- Successfull completions are tracked
- Once a Job is deleted its pods are removed.
- use case ex: - Caching data once a while, Backing up of data , ...any batch process

## Cron Jobs
- Run a Job on a scheduled basis.
- Scheduled using the cron format.
- CronJob names must be less than 52 chracters.
-  
