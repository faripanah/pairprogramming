/* // The data model for pet is as follows
{
  "name": "Best of Paris in 7 Days Tour",
  "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, 
  and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
  "price": "1,995"
}
 */
  let tourArray = [];

  let nextId = 1;
  
  function getAll() {
    return tourArray;
  }
  
  function addOne(name, info, image, price) {
    // Check if any parameter is empty or undefined
    if (!name || !info || !image || !price) {
      return false;
    }
  
    const newTour = {
      id: nextId++,
      name,
      info,
      image,
      price,
      
    };
  
    tourArray.push(newTour);
    return newTour;
  }
  
  function findById(id) {
    const tour = tourArray.find((item) => item.id == id);
    if (tour) {
      return tour;
    } else {
      return false;
    }
  }
  
  function updateOneById(id, updatedData) {
    const tour = findById(id);
    if (tour) {
      // Update properties only if provided in updatedData
      if (updatedData.name) {
        tour.name = updatedData.name;
      }
      if (updatedData.info) {
        tour.info = updatedData.sinfo;
      }
      if (updatedData.image) {
        tour.image = updatedData.image;
      }
      if (updatedData.price) {
        tour.color = updatedData.price;
      }
      
      
      return tour;
    }
    return false;
  }
  
  function deleteOneById(id) {
    const tour = findById(id);
    if (tour) {
      const initialLength = tourArrayArray.length;
      tourArray = tourArray.filter((tour) => tour.id != id);
      return tourArray.length < initialLength; // Indicate successful deletion if the length has decreased
    }
    return false; // Return false if the item was not found
  }
  
  if (require.main === module) {
    // Add pet
    let result = addOne("Best of Paris in 7 Days Tour", "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!" ,"https://www.course-api.com/images/tours/tour-1.jpeg","1,995" );
    console.log(result);
    // Add another pet
    result = addOne("Best of Finland in 3 Days", "Finland is beautiful country ", "https://www.course-api.com/images/tours", "2,300");
    console.log(result);
  
    console.log("getAll called:", getAll());
  
    console.log("findById called:", findById(1));
  
    console.log("updateOne called:", updateOneById(1, { image:"https://www.course-api.com/images/tours", price: "4000" }));
    console.log("findById called after item updated:", findById(1));
  
    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
  }
  
  tour = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
  };
  
  module.exports = tour;