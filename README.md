# 🚀 Cloud-Native Microservices Project-pr213

Welcome to the **Cloud-Native Microservices Project**! This project demonstrates how to build, deploy, and manage microservices using **Docker** and **Kubernetes**.

---

## 📌 What is This Project About?

Imagine you run a **toy delivery shop** 🏬🚚. We have two important workers:

- **User Service 🤖** – Takes customer orders.
- **Product Service 📦** – Manages toy inventory.

But what if:
❌ A worker stops working?\
❌ Too many kids place orders at the same time?

That's where **Kubernetes** comes in! 🦸‍♂️

---

## 🛠 Technologies Used

- **Docker** 🐳 – Packs our apps into containers.
- **Kubernetes** ☸️ – Manages and scales our microservices.
- **Node.js** – Backend for the services.
- **MongoDB** – Database for storing data.

---

## 📂 Project Structure

```
/project
  ├── user-service/         # Handles user orders
  │   ├── Dockerfile        # Recipe for User Service container
  │   ├── app.js            # Backend code
  │   └── package.json      # Dependencies
  ├── product-service/      # Manages inventory
  │   ├── Dockerfile        # Recipe for Product Service container
  │   ├── app.js            # Backend code
  │   └── package.json      # Dependencies
  ├── kubernetes/           # Deployment files
  │   ├── user-deployment.yaml    # User Service Deployment
  │   ├── product-deployment.yaml # Product Service Deployment
  │   ├── user-service.yaml        # User Service Networking
  │   ├── product-service.yaml     # Product Service Networking
  ├── README.md             # Project documentation
```

---

## 📦 What is Docker?

Think of **Docker** like a **cake recipe** 🎂📜:

- A **Docker Image** is the **recipe** – it contains all the ingredients (code, libraries, settings).
- A **Docker Container** is the **cake** 🍰 – an actual running instance of your app.
- With **Docker**, you can create **many cakes from the same recipe** without errors!

### 🏗 How to Build & Run Services with Docker

```sh
# Build the images
docker build -t user-service ./user-service
docker build -t product-service ./product-service

# Run the services
docker run -d -p 3000:3000 user-service
docker run -d -p 4000:4000 product-service
```

---

## ☸️ What is Kubernetes?

**Kubernetes** is like a **smart manager** 🦸‍♂️ for your toy shop:
✅ Fixes broken services by replacing them 🔄
✅ Adds more services when there is high demand 📈
✅ Ensures services communicate with each other 📡

### 🚀 How to Deploy with Kubernetes

```sh
# Apply the deployments
kubectl apply -f kubernetes/user-deployment.yaml
kubectl apply -f kubernetes/product-deployment.yaml

# Apply the services
kubectl apply -f kubernetes/user-service.yaml
kubectl apply -f kubernetes/product-service.yaml
```

Check if everything is running:

```sh
kubectl get pods
kubectl get services
```

---

## 📜 Summary

✅ We **containerized** our services using **Docker** 🐳.\
✅ We **deployed** them in **Kubernetes** ☸️ for scalability.\
✅ Kubernetes **manages everything**, ensuring reliability.

🚀 **Now, our toy delivery system runs smoothly!** 🎉

---

## 🌟 Want to Contribute?

Feel free to fork this repo, make changes, and submit a pull request! Contributions are welcome! 😃

### 📖 Step-by-Step Guide to Set Up This Project

#### 1️⃣ Install Dependencies
Make sure you have the following installed on your system:
- [Docker](https://www.docker.com/get-started)
- [Kubernetes (kubectl)](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/) (for local Kubernetes testing)
- [Node.js](https://nodejs.org/) (for running the services)

#### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/cloud-native-microservices.git
cd cloud-native-microservices
```

#### 3️⃣ Set Up Docker Containers
```sh
# Build Docker images
docker build -t user-service ./user-service
docker build -t product-service ./product-service

# Run Docker containers
docker run -d -p 3000:3000 user-service
docker run -d -p 4000:4000 product-service
```

#### 4️⃣ Push Docker Images to a Registry (Optional)
If you want to deploy to a cloud Kubernetes cluster, push images to **Docker Hub** or another registry:
```sh
docker tag user-service your-dockerhub-username/user-service
docker push your-dockerhub-username/user-service

docker tag product-service your-dockerhub-username/product-service
docker push your-dockerhub-username/product-service
```

#### 5️⃣ Start Kubernetes Cluster (Using Minikube)
```sh
minikube start
```

#### 6️⃣ Deploy to Kubernetes
```sh
# Deploy services
kubectl apply -f kubernetes/user-deployment.yaml
kubectl apply -f kubernetes/product-deployment.yaml

# Expose services
kubectl apply -f kubernetes/user-service.yaml
kubectl apply -f kubernetes/product-service.yaml
```

#### 7️⃣ Verify Everything is Running
```sh
kubectl get pods
kubectl get services
```

#### 8️⃣ Access the Services
If using Minikube, get the service URLs:
```sh
minikube service user-service --url
minikube service product-service --url
```
Then open the URLs in your browser to test the services! 🚀

#### 9️⃣ (Optional) Clean Up
```sh
kubectl delete -f kubernetes/
minikube stop
```

