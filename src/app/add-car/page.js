'use client'; // Next.js-form handle

export default function AddCarPage() {
  
  const handleAddCar = (event) => {
    event.preventDefault(); // don`t page reload
    
    const form = event.target;
    
    // data collect from input field
    const carModel = form.model.value;
    const pricePerDay = form.price.value;
    const carImage = form.image.value;
    const description = form.description.value;
    
    const newCarData = { carModel, pricePerDay, carImage, description };
    console.log("Sending to Express Server:", newCarData);

    // data send to express backend
    fetch('http://127.0.0.1:5000/cars', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCarData)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
          alert(' Car added successfully to MongoDB Atlas!');
          form.reset(); // empty form
        }
    })
    .catch(error => {
        console.error("Error connecting to server:", error);
        alert(' Server-এর সাথে কানেক্ট হতে পারেনি। এক্সপ্রেস ব্যাকঅ্যান্ড চালু আছে কি?');
    });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🚗 Add a New Car</h2>
      
      <form onSubmit={handleAddCar} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" name="model" placeholder="Car Model Name (e.g. Toyota Corolla)" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #aaa', color: 'white' }} />
        <input type="number" name="price" placeholder="Price Per Day ($)" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #aaa', color: 'white' }} />
        <input type="text" name="image" placeholder="Image URL" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #aaa', color: 'white' }} />
        <textarea name="description" placeholder="Short Description" rows="4" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #aaa', color: 'white' }}></textarea>
        
        <button type="submit" style={{ padding: '12px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Submit Car
        </button>
      </form>
    </div>
  );
}