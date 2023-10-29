export const updateReplies = (commentId, replyData) => {
  // Update the 'replies' field in the JSON data
  const updatedData = {
    ...jsonData,
    comments: jsonData.comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            replyData, // Add the new reply data
          ],
        };
      }
      return comment;
    }),
  };

  // Send the updated JSON data to the server
  fetch('/update-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('Data updated:', responseJson);
      setJsonData(updatedData); // Update the local state with the new data
    })
    .catch((error) => {
      console.error('Error updating data:', error);
    });
};