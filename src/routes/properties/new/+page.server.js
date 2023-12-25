import { setData, getData } from '$lib/server/database.js';

export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const name = data.get('name');
    const address = data.get('address');

    // get last id
    let id = null;
    await getData('properties', (data) => {
      console.log(data);
      if (data === null) {
        id = 0;
      }
      else {
        id = data.length;
      }
      console.log(id)
    });    

    const property = {
      name: name,
      address: address
    };

    console.log('properties/' + id);
    
    await setData('properties/' + id, property);

    return {
      status: 200,
      body : {
        message: 'Property added successfully'
      }
    };
  }
}