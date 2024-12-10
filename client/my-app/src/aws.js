const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_dynamodb_all_tables_region": "us-east-1",
    "aws_dynamodb_table_schemas": [
        {
            "tableName": "heleneClothingItems-dev",
            "region": "us-east-1"
        }
    ],
    "aws_cognito_identity_pool_id": "us-east-1:d1080aeb-53e5-4422-b97b-40017374c9d0",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_MvoV7c9Up",
    "aws_user_pools_web_client_id": "50lsfbqhe172p97t48g3ngvipg",
    "oauth": {},
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_cloud_logic_custom": [
        {
            "name": "helene",
            "endpoint": "https://dpkilzaau2.execute-api.us-east-1.amazonaws.com/dev",
            "region": "us-east-1"
        }
    ]
};


export default awsmobile;
