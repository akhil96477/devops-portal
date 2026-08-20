# 🚀 DevOps in a Box: Self-Service Developer Portal

Welcome to my **GitOps Provisioning Engine**! This project is a fully automated, self-service developer portal designed to eliminate the friction of manual IT tickets. It allows developers to request and provision enterprise-grade AWS cloud infrastructure instantly via a React dashboard, powered entirely by automated GitOps workflows.

## 🎯 The Problem It Solves
In traditional enterprise environments, a developer needing a simple S3 bucket or an API Gateway must open an IT ticket, wait for approvals, and wait days for manual provisioning. 

**The Solution:** A secure, centralized platform where developers can click a button to trigger automated Infrastructure as Code (IaC) deployment. It bridges the gap between clean frontend user experiences and complex backend DevOps automation.

---

## 🏗️ Architecture & Workflow
This platform relies on a modern GitOps CI/CD workflow running entirely within the AWS Free Tier.

### How It Works (Step-by-Step):
1. **The Request (React UI):** A developer logs into the portal and navigates to the *Deploy* tab. They select an Infrastructure Template (e.g., Static S3 Website) and provide an environment name.
2. **The Trigger:** The React frontend form submission fires an event payload containing the desired state of the infrastructure.
3. **The GitOps Pipeline (GitHub Actions):** The event triggers a GitHub Actions workflow (`terraform-deploy.yml`). 
4. **Security & Authentication:** The GitHub Runner securely assumes AWS IAM credentials via encrypted GitHub Secrets.
5. **Infrastructure as Code (Terraform):** The runner initializes Terraform, pulls down the modular `.tf` templates corresponding to the user's request, and runs `terraform apply`.
6. **Provisioning (AWS):** The AWS resources are instantly spun up in the cloud, ready for the developer to use.

---

## 💻 Technology Stack

**Frontend (User Interface)**
*   **React (Vite):** Fast, modern component-based UI.
*   **Vanilla CSS:** Custom, elegant "SaaS-style" design system featuring glassmorphism, dynamic data grids, and responsive layouts. No generic component libraries were used.

**Infrastructure & DevOps**
*   **Terraform (HashiCorp):** Declarative Infrastructure as Code (IaC) to define AWS resources consistently and immutably.
*   **GitHub Actions:** The CI/CD automation engine orchestrating the GitOps pipeline.
*   **AWS (Amazon Web Services):** The target cloud provider (utilizing S3, IAM, API Gateway, DynamoDB, and Lambda).

---

## 🚀 How to Run Locally

If you want to spin up the React dashboard locally to inspect the UI:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akhil96477/devops-portal.git
   cd devops-portal
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the Vite development server:**
   ```bash
   npm run dev
   ```
4. **View the app:** Open your browser and navigate to `http://localhost:5173`.

---

## 🔒 Security Best Practices Implemented
*   **Zero Hardcoded Secrets:** AWS Access Keys are never stored in the codebase; they are injected strictly at runtime via GitHub Encrypted Secrets.
*   **Least Privilege IAM:** The Terraform execution role is scoped specifically to the resources it needs to provision.
*   **Immutable Infrastructure:** All cloud changes are strictly managed through Terraform state; manual console changes are prohibited to prevent drift.

---
*Built with ❤️ by [Akhil] as a demonstration of modern Cloud Engineering & DevOps practices.*
