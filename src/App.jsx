import { useState } from "react";
import MDEditor from "@uiw/react-md-editor/nohighlight";
import axios from "axios"; // Import axios
import './App.css'; // Import the CSS for styling

export default function App() {
  const [error, setError] = useState(null); // To store error message
  const [loading, setLoading] = useState(false); // To manage loading state
  const [token, setToken] = useState(""); // To store the token input by the user
  const [url, setUrl] = useState(""); // To store the URL
  const [headers, setHeaders] = useState(""); // To store headers
  const [successResponse, setSuccessResponse] = useState(""); // To store success response
  const [errorResponse, setErrorResponse] = useState(""); // To store error response
  const [responseOutput, setResponseOutput] = useState(""); // To store the API response in Markdown format

  // Function to send POST data to the API
  const postDataToAPI = async () => {
    setLoading(true);
    try {
      let body = {
        method: "POST",
        url: url,
        headers: JSON.parse(headers), // Assuming headers are provided in JSON format
        successResponse: successResponse,
        errorResponse: errorResponse,
      };

      // Send the POST request
      const response = await axios.post(
        "https://talentsearch-be.onrender.com/generate-test-case",
        body
      );

      console.log("Response Data: ", response.data);

      // Update the response output
      setResponseOutput(response.data);
    } catch (error) {
      console.log("Error: ", error);
      setError(error.message); // Catch any error
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div>
    <div className="container">
      <h2 className="title">Enter Token and Body for POST Request</h2>
      <div className="form-container">
        <label>
          Authorization Token:
          <input
            className="input-field"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter Bearer token"
          />
        </label>
        <label>
          URL:
          <input
            className="input-field"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
        </label>
        <label>
          Headers (in JSON format):
          <textarea
            className="input-field"
            value={headers}
            onChange={(e) => setHeaders(e.target.value)}
            placeholder='{"Content-Type": "application/json"}'
          />
        </label>
        <label>
          Success Response:
          <textarea
            className="input-field"
            value={successResponse}
            onChange={(e) => setSuccessResponse(e.target.value)}
            placeholder="Enter success response"
          />
        </label>
        <label>
          Error Response:
          <textarea
            className="input-field"
            value={errorResponse}
            onChange={(e) => setErrorResponse(e.target.value)}
            placeholder="Enter error response"
          />
        </label>
        <button className="submit-button" onClick={postDataToAPI} disabled={loading}>
          {loading ? "Sending..." : "Send POST Request"}
        </button>
      </div>

      
    </div>
    <div className="response-container">
    <h2>Response Output (Markdown)</h2>
    {loading ? (
      <p className="loading-text">Loading...</p>
    ) : error ? (
      <p className="error-text">Error: {error}</p>
    ) : (
      <MDEditor.Markdown
        source={responseOutput}
        style={{ whiteSpace: "pre-wrap" }}
      />
    )}
  </div>
  </div>
  );
}
