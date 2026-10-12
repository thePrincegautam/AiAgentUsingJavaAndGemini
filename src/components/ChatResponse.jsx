
const ChatResponse = ({ response }) => {
  if (!response) {
    return null;
  }

  const { candidates = [], usageMetadata = {} } = response;

  return (
    <div className="container my-4">
      <h3>Response</h3>

      {candidates.map((candidate, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h5 className="card-title">
              Candidate {index + 1}
            </h5>

            <p className="card-text">
              {candidate?.content?.parts
                ?.map((part) => part.text)
                .filter(Boolean)
                .join("\n") || "No text response available."}
            </p>

            <h6>Citations:</h6>
            <ul>
              {(candidate?.citationMetadata?.citationSources ?? []).map(
                (source, idx) => (
                  <li key={idx}>
                    <a
                      href={source.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.uri}
                    </a>
                    {" "}
                    (Indexes: {source.startIndex} - {source.endIndex})
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ))}

      <h4>Usage Metadata</h4>
      <p>Prompt Tokens: {usageMetadata.promptTokenCount ?? 0}</p>
      <p>Response Tokens: {usageMetadata.candidatesTokenCount ?? 0}</p>
      <p>Total Tokens: {usageMetadata.totalTokenCount ?? 0}</p>
    </div>
  );
};

export default ChatResponse;
