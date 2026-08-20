provider "aws" {
  region = var.aws_region
}

# -------------------------------------------------------------
# Template 1: Static Site (S3 Bucket)
# -------------------------------------------------------------
resource "aws_s3_bucket" "static_site" {
  count  = var.template_type == "static-site" ? 1 : 0
  bucket = "${lower(replace(var.resource_name, " ", "-"))}-${var.resource_id}-bucket"
}

resource "aws_s3_bucket_public_access_block" "static_site_public" {
  count  = var.template_type == "static-site" ? 1 : 0
  bucket = aws_s3_bucket.static_site[0].id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# -------------------------------------------------------------
# Template 2: Serverless API (API Gateway + Lambda)
# -------------------------------------------------------------
resource "aws_iam_role" "lambda_exec" {
  count = var.template_type == "serverless-api" ? 1 : 0
  name  = "${var.resource_name}_lambda_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

# (In a real scenario, you'd upload actual code for this Lambda)
# For the template, we'll just provision the infrastructure shell.
