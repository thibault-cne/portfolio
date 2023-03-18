# Installation guide

## Dependancies

You need to have [docker](https://www.docker.com/) and [k3s](https://k3s.io/) to deploy the website.

## Developper mode

You can use the website in devlopper mode :

```bash
git clone https://github.com/thibault-cne/portfolio
cd portfolio
```

You need to create a `.env` file to use the [@email/browser](https://www.emailjs.com/docs/sdk/installation/). You need to have the following variables :

- VITE_TEMPLATE_ID
- VITE_SERVICE_ID
- VITE_PUBLIC_KEY

You can now run a local server with :

```bash
npm run dev
```

## Deployment

To deploy the website you can use a `k3s` cluster with all the files in the `kubernetes` folder and a docker image of your app. You need to specify the image name inside the [deploy](./kubernetes/deploy.yaml) file.

Here are the steps to build and deploy the app :

```bash
docker build -t {YOUR_TAG} .

cd kubernetes
kubectl apply -f namespace.yaml
kubectl apply -f letsencrypt-prod.yaml
kubectl apply -f traefik-https-redirect-middleware.yaml
kubeclt apply -f deploy.yaml
```
