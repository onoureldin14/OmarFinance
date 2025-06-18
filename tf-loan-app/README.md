# ☁️ OmarFinance Infra – Terraform Backend (Lambda + DynamoDB + API Gateway)

This folder defines the backend infrastructure for OmarFinance using Terraform. It includes:

- ✅ An auto-generated S3 bucket (for storing remote Terraform state)
- ✅ A Lambda function for handling loan requests
- ✅ A DynamoDB table for storing loans
- ✅ An HTTP API Gateway to expose the Lambda

---

## 📦 Prerequisites

- Terraform installed: https://developer.hashicorp.com/terraform/install
- AWS CLI installed: https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html
- AWS credentials configured:

```bash
aws configure
```

---

## 🪣 Step 1: Provision S3 Bucket for Remote State

### Navigate to the `init/` folder:

```bash
cd infra/init
terraform init
terraform apply
```

This will:
- Create an S3 bucket with a unique name (`tfstate-omarfinance-XXXX`)
- Output the bucket name:

```
bucket_name = tfstate-omarfinance-7g12k
```

---

## ✏️ Step 2: Configure the Terraform Backend

In `infra/backend.tf`, replace:

```hcl
bucket = "REPLACE_ME_WITH_BUCKET_NAME"
```

with the actual output bucket name:

```hcl
bucket = "tfstate-omarfinance-7g12k"
```

---

## 📁 Step 3: Zip Lambda Code

```bash
cd ../lambda
zip ../lambda.zip index.js
cd ..
```

---

## 🚀 Step 4: Deploy Infrastructure

```bash
cd ..
terraform init   # Will use the configured backend bucket
terraform apply
```

---

## 🔁 Outputs

After deployment:

```bash
api_gateway_url       = "https://abc123.execute-api.us-east-1.amazonaws.com"
lambda_function_name  = "loanHandler"
dynamodb_table_name   = "LoanTable"
```

---

## 🧼 Cleanup

To tear down resources:

```bash
terraform destroy
```

To remove the S3 bucket:

```bash
cd init
terraform destroy
```

---

## 🛡️ Notes

- ✅ Native S3 state locking is used (no DynamoDB needed)
- ❗ Do not commit `terraform.tfstate` or `.terraform/` directories

---

## 📄 License

MIT © 2025 Omar Din
