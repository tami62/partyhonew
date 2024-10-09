// src/aws-exports.ts

const awsExports = {
    Auth: {
        // Your Cognito config
        identityPoolId: 'ap-south-1:235079f0-7fdb-4d34-96da-f18dbe1af90d',
        region: 'ap-south-1',
        userPoolId: 'ap-south-1_cyKYAlKZZ',
        userPoolWebClientId: '1ebs4km92mpdu82rfjq7rh68lk',
    },
    Storage: {
        bucket: 'amplify-d3q9nbuzhue06h-ma-amplifyteamdrivebucket28-wtovinuhqlbh', // Your S3 bucket name
        region: 'ap-south-1', // Your S3 bucket region
    },
};

export default awsExports;// Example: Use it with Amplify
Amplify.configure(awsExports);

