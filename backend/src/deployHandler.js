const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");
const axios = require("axios");

// Initialize DynamoDB Client
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME || "DevOpsPortalResources";
const GITHUB_REPO = process.env.GITHUB_REPO; // e.g., "username/repo"
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_WORKFLOW_ID = process.env.GITHUB_WORKFLOW_ID || "terraform-deploy.yml";

exports.handler = async (event) => {
  try {
    // 1. Parse incoming request
    const body = JSON.parse(event.body || "{}");
    const { resourceName, templateType } = body;

    if (!resourceName || !templateType) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "resourceName and templateType are required" })
      };
    }

    const resourceId = `${templateType}-${Date.now()}`;

    // 2. Insert tracking record into DynamoDB
    await docClient.send(new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        id: resourceId,
        resourceName,
        type: templateType,
        status: "Pending Provisioning",
        createdAt: new Date().toISOString()
      }
    }));

    // 3. Trigger GitHub Actions Workflow (GitOps)
    // We send a repository_dispatch event to trigger the Terraform build
    if (GITHUB_TOKEN && GITHUB_REPO) {
      const githubUrl = `https://api.github.com/repos/${GITHUB_REPO}/actions/workflows/${GITHUB_WORKFLOW_ID}/dispatches`;
      
      await axios.post(githubUrl, {
        ref: "main",
        inputs: {
          resource_id: resourceId,
          resource_name: resourceName,
          template_type: templateType
        }
      }, {
        headers: {
          "Authorization": `Bearer ${GITHUB_TOKEN}`,
          "Accept": "application/vnd.github.v3+json"
        }
      });
    } else {
      console.warn("GitHub credentials not configured. Skipping GitOps trigger.");
    }

    // 4. Return success response
    return {
      statusCode: 202,
      headers: {
        "Access-Control-Allow-Origin": "*", // Important for React frontend
      },
      body: JSON.stringify({
        message: "Provisioning initiated successfully via GitOps",
        resourceId,
        status: "Pending Provisioning"
      })
    };

  } catch (error) {
    console.error("Error processing deployment:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error", error: error.message })
    };
  }
};
