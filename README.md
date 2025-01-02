# POST Request Tool

This project is a simple tool that allows users to make POST requests to APIs by entering the required details such as tokens, URLs, headers, and success/error responses.
FE-Input
![Screenshot 2025-01-03 022253](https://github.com/user-attachments/assets/928ad359-d706-46af-8e25-2313b1f1b847)

FE-Response
![Screenshot 2025-01-03 022426](https://github.com/user-attachments/assets/be87c3e9-570c-445c-aaae-f8b4b4ef4d54)

## Features

- **Authorization Token Field**: Enter a Bearer token to authenticate requests.
- **URL Input**: Provide the API endpoint to send the request.
- **Custom Headers**: Add custom headers in JSON format (e.g., `{ "Content-Type": "application/json" }`).
- **Success Response Simulation**: Define expected success responses for easy testing.
- **Error Response Simulation**: Define expected error responses for debugging purposes.
- **Dynamic Input Fields**: Configure dynamic fields such as method, URL, headers, and responses.

## Example Input

```json
{
  "method": "GET",
  "url": "https://jsonplaceholder.typicode.com/posts",
  "headers": {
    "Authorization": "Bearer <token>"
  },
  "queryParams": null,
  "successResponse": [
    {
      "userId": 1,
      "id": "khushshhi",
      "title": "Sample title",
      "body": "Sample body content"
    }
  ],
  "errorResponse": {
    "error": "Unauthorized",
    "message": "Invalid token"
  }
}



