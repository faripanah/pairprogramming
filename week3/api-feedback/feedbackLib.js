/* // The data model for pet is as follows
{
   {
  "sender": "John Smith",
  "message": "Great session on React components! I found the examples very helpful.",
  "rating": 5
}
  }
 */
  let FeedbackArray = [];

  let nextId = 1;
  
  function getAll() {
    return FeedbackArray;
  }
  
  function addOne(sender, message, rating) {
    // Check if any parameter is empty or undefined
    if (!sender || !message  || !rating) {
      return false;
    }
  
    const newFeedback = {
      id: nextId++,
      sender,
      message,
      rating,
    };
  
    FeedbackArray.push(newFeedback);
    return newFeedback;
  }
  
  function findById(id) {
    const feedback = FeedbackArray.find((item) => item.id == id);
    if (feedback) {
      return feedback;
    } else {
      return false;
    }
  }
  
  function updateOneById(id, updatedData) {
    const feedback = findById(id);
    if (feedback) {
      // Update properties only if provided in updatedData
      if (updatedData.sender) {
        feedback.sender = updatedData.sender;
      }
      if (updatedData.message) {
        feedback.message = updatedData.message;
      }
      if (updatedData.rating) {
        feedback.rating = updatedData.rating;
      }
      
      return feedback;
    }
    return false;
  }
  
  function deleteOneById(id) {
    const feedback = findById(id);
    if (feedback) {
      const initialLength = FeedbackArray.length;
      FeedbackArray = FeedbackArray.filter((feedback) => feedback.id != id);
      return FeedbackArray.length < initialLength; // Indicate successful deletion if the length has decreased
    }
    return false; // Return false if the item was not found
  }
  
  if (require.main === module) {
    // Add pet
    let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 5);
    console.log(result);
    // Add another pet
    result = addOne("David Michaels", "Fantastic session.", 5);
    console.log(result);
  
    console.log("getAll called:", getAll());
  
    console.log("findById called:", findById(1));
  
    console.log("updateOne called:", updateOneById(1, { age: 4, weight: 22 }));
    console.log("findById called after item updated:", findById(1));
  
    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
  }
  
  Feedback = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
  };
  
  module.exports = Feedback;